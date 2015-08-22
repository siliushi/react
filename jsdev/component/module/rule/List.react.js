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
                    id: 0,
                    title: '临床科室查房制度'
                }, {
                    id: 1,
                    title: '临床科室值班、交接班制度'
                }, {
                    id: 2,
                    title: '医嘱查对制度'
                }]
            };
        },
        componentWillUnmount: function() {
            // 页面离开时执行
        },
        componentDidMount: function() {
            $('#content').removeClass('home-loading').removeClass('pt-page-moveToLeft').addClass('pt-page-moveFromLeft');
            
            /*common.ajax('/yihu/rule/query.json', {
                data: JSON.stringify({ruleName:1})
            })
            .then(function(res) {
                // 请求结果成功
                this.setState({
                    items: res.data
                });
            });*/

            $('.rule-detail-list').on('click', function() {
                var item = $(this).data('id');
                $('#content').removeClass('pt-page-moveFromLeft').addClass('pt-page-moveToLeft');
                var rout = new Backbone.Router();
                setTimeout(function() {
                    rout.navigate('rule/list2?id='+ item.id, {
                         trigger: true
                    });
                }, 100);
            })
        },
        render: function () {
            var header = '', me = this;
            if($TJ.hasHeader) {
                header = <HeaderComponent back={true} title={"规章制度"}/>;
            }
            return <div>
                       {header}
                       <div className={$TJ.hasHeader ? 'hasHeader' : ''}>
                            <div className="search-title">
                                <p className="search">
                                    <input id="search" type="search" placeholder="搜索关键字" />
                                    <i className="ion-ios-search"></i>
                                </p>
                            </div>
                            <div className="list rule-list">
                                {this.state.items.map(function(item, i) {
                                    return (
                                        <div className="item top go-right rule-detail-list" data-id={JSON.stringify(item)}>
                                            {item.title}
                                        </div>
                                    );
                                }, this)}
                            </div>
                        </div>
                    </div>;

        }
    });

});
