'use strict';

define([
    'react',
    'backbone',
    'common',
    'jsx!component/common/HeaderComponent.react'
], function (React, Backbone, common, HeaderComponent) {

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
        showDetail : function(item){
        		$('#content').removeClass('pt-page-moveFromLeft').addClass('pt-page-moveToLeft');
            var rout = new Backbone.Router();
            setTimeout(function() {
                rout.navigate('dictionary/detail?id='+item.id, {  
                     trigger: true
                });    
            }, 100);
        },
        componentDidMount: function() {
        	
            $('#content').removeClass('home-loading').removeClass('pt-page-moveToLeft').addClass('pt-page-moveFromLeft');
            common.scrollbar();
        },
        doSearch : function(){
        		var value = $.trim($("#search").val()),me = this;
        		if(!value){
        			me.setState({items: items});
        			return;
        		}
        		
        },
        render: function () {
            var header = '';
            if($TJ.hasHeader) {
                header = <HeaderComponent back={true} title={"药物词典"}/>;
            }
            var items = this.state.items,me= this;
            return <div>
                       {header}
                       <div className={$TJ.hasHeader ? 'hasHeader' : ''}>
                            <div className="search-title">
                                <p className="search">
                                    <input id="search" type="search" placeholder="搜索关键字" onChange={this.doSearch} />
                                    <i className="ion-ios-search"></i>
                                </p>
                            </div>
                            <ul className="list rule-list">
                                {items.map(function(item, i) {
                                    return (
                                        <li className="item top dictionary-list-detail" data-id={JSON.stringify(item)} onClick={this.showDetail.bind(this, item)}>
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
