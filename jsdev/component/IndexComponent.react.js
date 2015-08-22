'use strict';

define([
    'react',
    'jquery',
    'jsx!component/common/HeaderComponent.react'
], function (React, $, HeaderComponent) {
    return React.createClass({
        componentDidMount: function() {
            $('#content').removeClass('home-loading').removeClass('pt-page-moveToLeft').addClass('pt-page-moveFromLeft');
        },
        componentWillUnmount: function() {
            $('#content').removeClass('pt-page-moveFromLeft').addClass('pt-page-moveToLeft');
        },
        render: function () {
            // this.info = about;
            // return (<div className='content' dangerouslySetInnerHTML={{__html: about}}></div>);
            return (<div>
    				<div className="baner">
                        <img src={$TJ.staticServer+'/image/photo.png'} className="photo" />
                        <h3>王一</h3>
                        <div>主任医师 教授</div>
                        <div>您好！欢迎使用</div>
    				</div>
    				<div className="modules">
    					<a href="javascript:;" className="module">
    						<i className="zixun"></i>
    						<div>患者咨询</div>
    					</a>
    					<a href="javascript:;" className="module">
    						<i className="kaoqin"></i>
    						<div>住院医考勤</div>
    					</a>
    					<a href="javascript:;" className="module">
    						<i className="tongxunlu"></i>
    						<div>通讯录</div>
    					</a>
    					<a href="#rule" className="module">
    						<i className="zhidu"></i>
    						<div>规章制度</div>
    					</a>
    					<a href="#dictionary" className="module">
    						<i className="cidian"></i>
    						<div>药物词典</div>
    					</a>
    					<a href="#gonggao" className="module">
    						<i className="gonggao"></i>
    						<div>通知公告</div>
    					</a>
                        <a href="javascript:;" className="module">
                            <i className="home"></i>
                            <div>个人中心</div>
                        </a>
    				</div>
	            </div>);
        }
    });
});