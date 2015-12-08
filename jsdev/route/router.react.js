'use strict';

define([
    'underscore',
    'backbone',
    'react',
    'common',
    'controller/controller'
],function(_, Backbone, React, common, controller){
    var AppRouter = Backbone.Router.extend({
        // 首页
        index: function(){
            require(['jsx!component/IndexComponent.react'], function(IndexComponent) {
                React.render( <IndexComponent />, document.getElementById('content'));
            });
        },
        // 公告列表
        gonggao_list: function() {
            require(['jsx!component/module/gonggao/List.react'], function(GonggaoList) {
                controller.gonggao.list();
                React.render( <GonggaoList />, document.getElementById('content'));
            });
        },
        // 公告详情
        gonggao_detail: function() {
            require(['jsx!component/module/gonggao/Detail.react'], function(GonggaoDetail) {
                controller.gonggao.detail();
                React.render( <GonggaoDetail />, document.getElementById('content'));
            });
        },
        // 药物词典列表
        dictionary_list: function() {
            require(['jsx!component/module/dictionary/List.react'], function(DictionaryList) {
                controller.dictionary.list();
                React.render( <DictionaryList />, document.getElementById('content'));
            });
        },
        // 药物词典列表二
        dictionary_list2: function() {
            require(['jsx!component/module/dictionary/List2.react'], function(DictionaryList2) {
                controller.dictionary.list2();
                React.render( <DictionaryList2 />, document.getElementById('content'));
            });
        },
        // 药物词典详情
        dictionary_detail: function() {
            require(['jsx!component/module/dictionary/Detail.react'], function(DictionaryDetail) {
                controller.dictionary.detail();
                React.render( <DictionaryDetail />, document.getElementById('content'));
            });
        },
        // 规章制度列表
        rule_lsit: function() {
            require(['jsx!component/module/rule/List.react'], function(RuleList) {
                controller.rule.list();
                React.render( <RuleList />, document.getElementById('content'));
            });
        },
        // 规章制度列表二
        rule_lsit2: function() {
            require(['jsx!component/module/rule/List2.react'], function(RuleList2) {
                controller.rule.list2();
                React.render( <RuleList2 />, document.getElementById('content'));
            });
        },
        // 规章制度详情
        rule_deatil: function() {
            require(['jsx!component/module/rule/Detail.react'], function(RuleDetail) {
                controller.rule.detail();
                React.render( <RuleDetail />, document.getElementById('content'));
            });
            
        },
        // 个人中心
        personal_index: function() {
            require(['jsx!component/module/user/Home.react'], function(UserHome) {
                React.render( <UserHome />, document.getElementById('content'));
            });
        },
        // 收藏列表
        collection_list: function() {
            require(['jsx!component/module/user/collection/List.react'], function(CollectionList) {
                React.render( <CollectionList />, document.getElementById('content'));
            });
        },
        // 路由入口
        initialize: function() {
            var self = this,
                routes = [
                    [ /^.*$/, 'index' ],
                    [ 'gonggao', 'gonggao_list'],
                    [ 'gonggao/detail', 'gonggao_detail'],
                    [ 'dictionary', 'dictionary_list'],
                    [ 'dictionary/list2', 'dictionary_list2'],
                    [ 'dictionary/detail', 'dictionary_detail'],
                    [ 'rule', 'rule_lsit'],
                    [ 'rule/list2', 'rule_lsit2'],
                    [ 'rule/detail', 'rule_deatil'],
                    [ 'appBridge', 'app'],
                    [ 'personal', 'personal_index'],
                    [ 'collection/list', 'collection_list']
                ];

            _.each(routes, function(route) {
                self.route.apply(self, route);
            });
            Backbone.history.start();
        }
    });

    return AppRouter;
});
