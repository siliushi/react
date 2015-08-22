'use strict';

define([
    'react',
    'backbone',
    'jsx!component/common/HeaderComponent.react'
], function (React, Backbone, HeaderComponent) {

    return React.createClass({
        componentWillUnmount: function() {
            // 页面离开时执行
        },
        getInitialState: function() {
            return {
                items: [{
                    id: 0,
                    title: '院内部通知',
                    date: '2014.09.12 10:24',
                    isRead: false,
                    content: '这里是通知内容的简要这里是通知内容的简要这里是通知内容的简要'
                }, {
                    id: 1,
                    title: '2014年5月25日 周会记要',
                    date: '2014.09.12 10:24',
                    isRead: false,
                    content: '这里是通知内容的简要这里是通知内容的简要这里是通知内容的简要'
                }, {
                    id: 2,
                    title: '医学院关于教师申请2015年...',
                    date: '2014.09.12 10:24',
                    isRead: false,
                    content: '这里是通知内容的简要这里是通知内容的简要这里是通知内容的简要'
                }]
            };
        },
        componentDidMount: function() {
            $('#content').removeClass('home-loading').removeClass('pt-page-moveToLeft').addClass('pt-page-moveFromLeft');
            $('.gonggao-list-detail').on('click', function() {
                var item = $(this).data('id');
                $('#content').removeClass('pt-page-moveFromLeft').addClass('pt-page-moveToLeft');
                var rout = new Backbone.Router();
                setTimeout(function() {
                    rout.navigate('gonggao/detail?id='+item.id, {  
                         trigger: true
                    });
                }, 100);
            })
        },
        render: function () {
            var header = '', me = this;
            if($TJ.hasHeader) {
                header = <HeaderComponent back={true} title={"通知公告"}/>;
            }
            return <div>
                       {header}
                       <div className={$TJ.hasHeader ? 'hasHeader' : ''}>
                            <ul className="list gonggao-list">
                                {this.state.items.map(function(item, i) {
                                    return (
                                        <li className="item gonggao-list-detail" data-id={JSON.stringify(item)}>
                                            <span className="gonggao-title">{item.title}</span>
                                            <small className="gonggao-date">{item.date}</small>
                                            <br/>
                                            <br/>
                                            <small className="brief">{item.content}</small>
                                            <span className="status">{item.isRead ? '已读' : '未读'}</span>
                                        </li>
                                    );
                                }, this)}
                            </ul>
                        </div>
                    </div>;

        }
    });

});
