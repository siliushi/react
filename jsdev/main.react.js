'use strict';

define([
    'jsx!route/router.react', 'iscroll'
], function (Router, IScroll) {
    
    var initialize = function () {

    	$TJ.hasHeader = true;
        
        new Router();
        
        // new IScroll('#content');
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    };

    return {
        initialize: initialize
    };
});
