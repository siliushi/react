'use strict';

define([
    'react',
    'backbone',
    'common',
    'jsx!component/common/HeaderComponent.react'
], function (React, Backbone, common, HeaderComponent) {

    return React.createClass({
        getInitialState: function() {
            return {
                items: [{
                    id: 1,
                    name: '规章制度' 
                }, {
                    id: 2,
                    name: '药物词典'
                }]
            };
        },
        componentWillUnmount: function() {
            // 页面离开时执行
        },
        componentDidMount: function() {
        	var me = this;
            $('#content').removeClass('home-loading').removeClass('pt-page-moveToLeft').addClass('pt-page-moveFromLeft');
            common.scrollbar();
        },
        render: function () {
            var me = this;
            var header = '';
            if($TJ.hasHeader) {
                header = <HeaderComponent back={true} title={"个人中心"}/>;
            }
            var data = this.state.items;
            return <div>
                       {header}
                       <div className={$TJ.hasHeader ? 'hasHeader' : ''}>
                            <div className="list rule-list">
                        		{
                                    (data && data.length > 0) ?
                                        (data.map(function(item, i) {
                                            return (
                                                <div className="item top go-right rule-detail-list">
                                                    {item.name}
                                                </div>
                                            );
                                        })) : <div className="no-message">暂无收藏</div>
                                }
                            </div>
                        </div>
                    </div>;

        }
    });

});
