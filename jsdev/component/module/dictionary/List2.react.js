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
                    name: '安灭菌（注射用阿莫西林乃克拉维甲酸）'
                }, {
                    id: 1,
                    name: '美丰（头孢氨卡缓释片）'
                }, {
                    id: 2,
                    name: '美丰（头孢氨卡缓释片）'
                }, {
                    id: 2,
                    name: '美丰（头孢氨卡缓释片）'
                }, {
                    id: 2,
                    name: '美丰（头孢氨卡缓释片）'
                }, {
                    id: 2,
                    name: '美丰（头孢氨卡缓释片）'
                }, {
                    id: 2,
                    name: '美丰（头孢氨卡缓释片）'
                }, {
                    id: 2,
                    name: '美丰（头孢氨卡缓释片）'
                }, {
                    id: 2,
                    name: '美丰（头孢氨卡缓释片）'
                }, {
                    id: 2,
                    name: '美丰（头孢氨卡缓释片）'
                }, {
                    id: 2,
                    name: '美丰（头孢氨卡缓释片）'
                }, {
                    id: 2,
                    name: '美丰（头孢氨卡缓释片）'
                }]
            };
        },
        componentDidMount: function() {
            $('#content').removeClass('home-loading').removeClass('pt-page-moveToLeft').addClass('pt-page-moveFromLeft');
            $('.dictionary-list-detail').on('click', function() {
                var item = $(this).data('id');
                $('#content').removeClass('pt-page-moveFromLeft').addClass('pt-page-moveToLeft');
                var rout = new Backbone.Router();
                setTimeout(function() {
                    rout.navigate('dictionary/detail?id='+item.id, {  
                         trigger: true
                    });    
                }, 100);
            });
        },
        render: function () {
            var header = '';
            if($TJ.hasHeader) {
                header = <HeaderComponent back={true} title={"药物词典"}/>;
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
                            <ul className="list rule-list">
                                {this.state.items.map(function(item, i) {
                                    return (
                                        <li className="item top dictionary-list-detail" data-id={JSON.stringify(item)}>
                                            {item.name}
                                        </li>
                                    );
                                }, this)}
                            </ul>
                        </div>
                    </div>;

        }
    });
});
