'use strict';

define([
    'react',
    'backbone',
    'jsx!component/common/HeaderComponent.react'
], function (React, Backbone, HeaderComponent) {

    return React.createClass({
        getInitialState: function() {
            return {
                items: [{
                    id: 0,
                    title: '术前'
                }, {
                    id: 1,
                    title: '术中'
                }, {
                    id: 2,
                    title: '术后'
                }]
            };
        },
        componentWillUnmount: function() {
            
        },
        componentDidMount: function() {
            $('#content').removeClass('home-loading').removeClass('pt-page-moveToLeft').addClass('pt-page-moveFromLeft');
            $('.rule-detail').on('click', function() {
                var item = $(this).data('id');
                $('#content').removeClass('pt-page-moveFromLeft').addClass('pt-page-moveToLeft');
                var rout = new Backbone.Router();
                setTimeout(function() {
                    rout.navigate('rule/detail?id='+item.id, {  
                         trigger: true
                    });
                }, 100);
            });
            /*$.get(this.props.source, function(result) {
                var lastGist = result[0];
                if (this.isMounted()) {
                    this.setState({
                        username: lastGist.owner.login,
                        lastGistUrl: lastGist.html_url
                    });
                }
            }.bind(this));*/
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
                                        <div className="item top go-right rule-detail" data-id={JSON.stringify(item)}>
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
