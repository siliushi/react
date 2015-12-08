'use strict';

require.config({
    paths: {
        jquery: '../lib/jquery.min',
        iscroll: '../lib/iscroll.min',
        react: '../lib/react-with-addons.min',
        "JSXTransformer": '../lib/JSXTransformer.min',
        jsx: '../lib/jsx.min',
        backbone: '../lib/backbone.min',
        underscore: '../lib/lodash.min',
        text: '../lib/text.min',
        json: '../lib/json.min',
        common: 'common/common.js?v=1.0.0',
        api: 'common/api'
    },
    waitSeconds: 0,
    shim: {
        touchwipe: ['jquery'],
        underscore: {
            exports: '_'
        }
    }
});

require([
    'main.react'
], function (App) {
    App.initialize();
});
