'use strict';

define([
    'react',
    'common',
    'jsx!component/common/HeaderComponent.react'
], function (React, common, HeaderComponent) {

    return React.createClass({
        componentDidMount: function() {
            $('#content').removeClass('home-loading').removeClass('pt-page-moveToLeft').addClass('pt-page-moveFromLeft');
            common.scrollbar();
        },
        componentWillUnmount: function() {
            $('#content').removeClass('pt-page-moveFromLeft').addClass('pt-page-moveToLeft');
        },
        render: function () {
            var header = '';
            if($TJ.hasHeader) {
                header = <HeaderComponent back={true} title={"药物详情"} sideBar={"收藏"} />;
            }
            // var names = ['Alice', 'Emily', 'Kate'];
            return <div>
                        {header}
                        <div className={$TJ.hasHeader ? 'hasHeader' : ''}>
                            <div className="content">
                                <div className="medic-title">
                                    青霉素G [基] [医保(甲)]Penicilin G
                                </div>
                                <img src={$TJ.staticServer+'/image/dictionary/xiyao.png'} />
                                <p>
                                    [应用]用于A组及B组溶血性链球菌、肺炎链球菌、对青霉素敏感金葡菌等格兰阳性球菌所致的各种感染。对流感嗜血杆菌和百日咳鲍特氏菌亦具一定抗菌活性。口服吸收差。
                                </p>
                                <br/>
                                <p>
                                    [用法]用于A组及B组溶血性链球菌、肺炎链球菌、对青霉素敏感金葡菌等格兰阳性球菌所致的各种感染。对流感嗜血杆菌和百日咳鲍特氏菌亦具一定抗菌活性。口服吸收差。     
                                </p>
                                <br/>
                                <p>
                                    [注意]用于A组及B组溶血性链球菌、肺炎链球菌、对青霉素敏感金葡菌等格兰阳性球菌所致的各种感染。对流感嗜血杆菌和百日咳鲍特氏菌亦具一定抗菌活性。口服吸收差。     
                                </p>
                                <br/>
                                <p>
                                    [规格]用于A组及B组溶血性链球菌、肺炎链球菌、对青霉素敏感金葡菌等格兰阳性球菌所致的各种感染。对流感嗜血杆菌和百日咳鲍特氏菌亦具一定抗菌活性。口服吸收差。     
                                </p>
                                <br/>
                            </div>
                        </div>
                    </div>;

        }
    });
});
