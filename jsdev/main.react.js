'use strict';

define([
    'jsx!route/router.react', 'iscroll', 'common'
], function (Router, IScroll, common) {
	
    /**
     * 设置html的fontsize
     * @return {[type]} [description]
     */
    var fontSizeInit = function() {
        var doc = document.documentElement,
            cli   = doc.clientWidth;
        cli&&(cli/=320,2<cli&&(cli=2),doc.style.fontSize=16*cli+"px");
    }
    
    var initialize = function () {

        // 头部
     	$TJ.hasHeader = true;
    		

        // 路由
        new Router();

        // 执行html的font大小设置
        fontSizeInit();
        window.addEventListener('resize', function() {
            fontSizeInit();
        });

        // h5返回app页面
        /*$(window).bind('hashchange', function() {
            alert(location.href);
            if(location.href.indexOf('appBridge') > -1)
                APPJSBridge.firstPage();
        });*/

        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    };

    return {
        initialize: initialize
    };
});
