'use strict';

define([
    'react',
    'jsx!component/common/HeaderComponent.react'
], function (React, HeaderComponent) {

    return React.createClass({
        componentDidMount: function() {
            $('#content').removeClass('home-loading').removeClass('pt-page-moveToLeft').addClass('pt-page-moveFromLeft');
        },
        componentWillUnmount: function() {
            $('#content').removeClass('pt-page-moveFromLeft').addClass('pt-page-moveToLeft');
        },
        render: function () {
            var header = '';
            if($TJ.hasHeader) {
                header = <HeaderComponent back={true} title={"规章制度"} sideBar={"收藏"} />;
            }
            // var names = ['Alice', 'Emily', 'Kate'];
            return <div>
                        {header}
                        <div className={$TJ.hasHeader ? 'hasHeader' : ''}>
                            <div className="content">
                                <div className="medic-title">
                                    术前
                                </div>
                                <p>
                                    ①各经治医生必须非常熟悉手术病人的病情，包括病人及家属对疾病的认识、心态、经济状况等等
                                </p>
                                <p>
                                    ②经治医生必须请科主任或上级医生查房，共同讨论决定病人是否手术及手术时机，总住院要严格按照手术分级管理原则根据各级医生手术权限安排手术。
                                </p>
                                <p>
                                    ③所有择期手术及部分病情严重的急诊手术均应经科主任审批，四类手术需填手术审批表，疑难重症大手术、高风险手术、多科联合手术，由主任医生或科主任审批并报医务科备案，致残手术、科研手术、新开展手术由科主任报医务科，由主管院长审批后进行。
                                </p>
                                <p>
                                    ④所有择期手术及部分病情严重的急诊手术均应经科主任审批，四类手术需填手术审批表，疑难重症大手术、高风险手术、多科联合手术，由主任医生或科主任审批并报医务科备案，致残手术、科研手术、新开展手术由科主任报医务科，由主管院长审批后进行。
                                </p>
                                <p>
                                    ⑤所有择期手术及部分病情严重的急诊手术均应经科主任审批，四类手术需填手术审批表，疑难重症大手术、高风险手术、多科联合手术，由主任医生或科主任审批并报医务科备案，致残手术、科研手术、新开展手术由科主任报医务科，由主管院长审批后进行。
                                </p>
                                <br/>
                            </div>
                        </div>
                    </div>;

        }
    });
});
