'use strict';

require.config({
    paths: {
        jquery: '../lib/jquery.min',
        iscroll: '../lib/iscroll',
        react: '../lib/react-with-addons.min',
        "JSXTransformer": '../lib/JSXTransformer',
        jsx: '../lib/jsx',
        backbone: '../lib/backbone',
        underscore: '../lib/lodash.min',
        text: '../lib/text',
        json: '../lib/json',
        common: 'common/common'
    },
    shim: {
        touchwipe: ['jquery'],
        underscore: {
            exports: '_'
        }
    }
});

require([
    'backbone', 'jsx!main.react'
], function (Backbone, App) {
    App.initialize();
});
