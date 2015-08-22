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
                header = <HeaderComponent back={true} title={"通知公告"} sideBar={"收藏"}/>;
            }
            // var names = ['Alice', 'Emily', 'Kate'];
            return <div>
                        {header}
                        <div className={$TJ.hasHeader ? 'hasHeader' : ''}>
                            <div className="content">
                                <div className="medic-title">
                                    院内部通知
                                </div>
                                <p>
                                    院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知院内部通知
                                </p>
                                <br/>
                            </div>
                        </div>
                    </div>;

        }
    });
});
