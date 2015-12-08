'use strict';

define([
    'react',
    'jquery',
    'common',
    'jsx!component/common/HeaderComponent.react'
], function (React, $, common, HeaderComponent) {
    return React.createClass({
        componentDidMount: function() {
            $('#content').removeClass('home-loading').removeClass('pt-page-moveToLeft').addClass('pt-page-moveFromLeft');
            common.scrollbar();
        },
        componentWillUnmount: function() {
            $('#content').removeClass('pt-page-moveFromLeft').addClass('pt-page-moveToLeft');
        },
        render: function () {
            return (<div>
    				<div className="baner">
                        <img src='/react//image/photo.png' className="photo" />
                        <h3>王一</h3>
                        <div>您好！欢迎使用</div>
    				</div>
    				<div className="modules">
    					<a href="#rule" className="module">
    						<i className="zhidu"></i>
    						<div>模块一</div>
    					</a>
    					<a href="#dictionary" className="module">
    						<i className="cidian"></i>
    						<div>模块二</div>
    					</a>
    					<a href="#gonggao" className="module">
    						<i className="gonggao"></i>
    						<div>模块三</div>
    					</a>
                        <a href="#personal" className="module">
                            <i className="home"></i>
                            <div>模块四</div>
                        </a>
    				</div>
	            </div>);
        }
    });
});