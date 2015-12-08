'use strict';

define([
    'react',
    'backbone',
    'common',
    'jsx!component/common/HeaderComponent.react'
], function (React, Backbone, common, HeaderComponent) {

    return React.createClass({
        componentWillUnmount: function() {
            $('#content').removeClass('pt-page-moveFromLeft').addClass('pt-page-moveToLeft');
        },
        getInitialState: function() {
            return {
                items: [{
                    id: 0,
                    name: '抗微生物药',
                    subname: [{
                        id: 0,
                        name: '抗生素',
                        subname: [{
                            id: 0,
                            name: '青霉素类药'
                        }]
                    },{
                        id: 0,
                        name: '合成抗菌药',
                        subname: [{
                            id: 0,
                            name: '抗真菌药'
                        }]
                    }]
                },{
                    id: 0,
                    name: '抗寄生虫病药物',
                    subname: [{
                        id: 0,
                        name: '抗生素',
                        subname: [{
                            id: 0,
                            name: '青霉素类药'
                        }]
                    },{
                        id: 0,
                        name: '合成抗菌药',
                        subname: [{
                            id: 0,
                            name: '抗真菌药'
                        }]
                    }]
                }]
            };
        },
        componentDidMount: function() {
            var me = this;
            $('#content').removeClass('home-loading').removeClass('pt-page-moveToLeft').addClass('pt-page-moveFromLeft');
            $('.tab-item').on('click', function() {
                var type = $(this).data('type');
                me.changeTab(type);
            });
            $('.back').on('click', function() {
                $('#content').removeClass('pt-page-moveFromLeft').addClass('pt-page-moveToLeft');
                window.history.back();
            });
            $('.dictionary-detail').on('click', function() {
                var id = $(this).data('id');
                $('#content').removeClass('pt-page-moveFromLeft').addClass('pt-page-moveToLeft');
                var rout = new Backbone.Router();
                setTimeout(function() {
                    rout.navigate('dictionary/list2?id='+id, {  
                         trigger: true
                    });
                }, 100);
            });
            $('.arrow-down').on('click', function() {
                
            });
            $('.arrow-right').on('click', function() {
                
            });
            common.scrollbar();
        },
        componentDidUpdate: function() {
            $('.dictionary-detail').on('click', function() {
                var id = $(this).data('id');
                $('#content').removeClass('pt-page-moveFromLeft').addClass('pt-page-moveToLeft');
                var rout = new Backbone.Router();
                setTimeout(function() {
                    rout.navigate('dictionary/list2?id='+id, {  
                         trigger: true
                    });
                }, 100);
            });
            $('.arrow-down').off('click').on('click', function() {
                
            });
            $('.arrow-right').off('click').on('click', function() {
                
            })
        },
        changeTab: function(types) {
            var node = this.refs[types].getDOMNode();
            if(node.className.indexOf('cur') === -1) {
                var tabs = document.getElementsByClassName('cur');
                for(var i = 0, _l = tabs.length; i < _l; i++) {
                    tabs[i].className = tabs[i].className.replace(/cur/, "");
                }
                node.className = node.className + " " + "cur";
            }
            if(types === 'xiyao') {
                this.setState({
                    items: [{
                        id: 0,
                        name: '抗微生物药',
                        subname: [{
                            id: 0,
                            name: '抗生素',
                            subname: [{
                                id: 0,
                                name: '青霉素类药'
                            }]
                        },{
                            id: 0,
                            name: '合成抗菌药',
                            subname: [{
                                id: 0,
                                name: '抗真菌药'
                            }]
                        }]
                    },{
                        id: 0,
                        name: '抗寄生虫病药物',
                        subname: [{
                            id: 0,
                            name: '抗生素',
                            subname: [{
                                id: 0,
                                name: '青霉素类药'
                            }]
                        },{
                            id: 0,
                            name: '合成抗菌药',
                            subname: [{
                                id: 0,
                                name: '抗真菌药'
                            }]
                        }]
                    }]
                });
            } else {
                this.setState({
                    items: [{
                        id: 0,
                        name: '中抗微生物药',
                        subname: [{
                            id: 0,
                            name: '中抗生素',
                            subname: [{
                                id: 0,
                                name: '中青霉素类药'
                            }]
                        },{
                            id: 0,
                            name: '中合成抗菌药',
                            subname: [{
                                id: 0,
                                name: '中抗真菌药'
                            }]
                        }]
                    },{
                        id: 0,
                        name: '中抗寄生虫病药物',
                        subname: [{
                            id: 0,
                            name: '抗生素',
                            subname: [{
                                id: 0,
                                name: '青霉素类药'
                            }]
                        },{
                            id: 0,
                            name: '合成抗菌药',
                            subname: [{
                                id: 0,
                                name: '抗真菌药'
                            }]
                        }]
                    }]
                });
            }

        },
        render: function () {

            
            var list = '', j = 1, k = 0;
            function medicines(item) {
                for(var i = 0, _l = item.length; i < _l; i++) {
                    if(item[i].subname) {
                        list += '<div class="item item-'+ j +' '+ (k===0 || j ===1 ?"show arrow-down ":"hide arrow-down ") + (k!==0 && j ===1 ?"arrow-right":"") +'">'+ item[i].name +'</div>';
                        j++;
                        medicines(item[i].subname);
                    } else {
                        list += '<div class="item item-'+ j +' '+ (k===0 || j ===1 ?"show ":"hide ") +'go-right dictionary-detail" data-id="'+item[i].id+'">'+ item[i].name +'</div>'
                        j = 1;
                        k = 1;
                    }
                }
                return list;
            }

            var MedicineList = medicines(this.state.items);


            var leftRadius = {
                borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px'
            };

            var rightRadius = {
                borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px'
            }

            return <div>
                        <header className="header tab">
                            <i className="back go-left"></i>
                            <div className="tab-item cur" style={leftRadius} ref="xiyao" data-type="xiyao">
                                西药
                            </div>
                            <div className="tab-item" style={rightRadius} ref="zhongyao" data-type="zhongyao">
                                中成药
                            </div>
                            <i className="side-bar"></i>
                        </header>
                        <div id="scroller" className="list hasHeader" dangerouslySetInnerHTML={{__html: MedicineList}}>
                        </div>
                    </div>;

        }
    });
});
