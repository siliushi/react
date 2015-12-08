"use strict";
define(['common'], function(common) {
	return {
		noticeList: function(data) {
			var defer = $.Deferred();
			common.ajax('/yihu/notice/noticeList.json', {
			    data: JSON.stringify(data)
			})
			.then(function(res) {
			    defer.resolve(res);
			});
			return defer.promise();
		},
		queryRule: function(data) {
			var defer = $.Deferred();
			common.ajax('/yihu/rule/query.json', {
			    data: JSON.stringify(data)
			})
			.then(function(res) {
			    defer.resolve(res);
			});
			return defer.promise();
		},
		getRuleList: function(data) {
			var defer = $.Deferred();
			common.ajax('/yihu/rule/classicqry.json', {
			    data: JSON.stringify(data)
			})
			.then(function(res) {
			    defer.resolve(res);
			});
			return defer.promise();
		},
		getDetail: function(data) {
			var defer = $.Deferred();
			common.ajax('/yihu/rule/ruledetail.json', {
			    data: JSON.stringify(data)
			})
			.then(function(res) {
			    defer.resolve(res);
			});
			return defer.promise();
		},
		noticeDetail: function(data) {
			var defer = $.Deferred();
			common.ajax('/yihu/notice/noticeDetail.json', {
			    data: JSON.stringify(data)
			})
			.then(function(res) {
			    defer.resolve(res);
			});
			return defer.promise();
		},
		getDictionaryTree: function() {
			var defer = $.Deferred();
			common.ajax('/yihu/medicine/getMedicineClassify.json')
			.then(function(res) {
			    defer.resolve(res);
			});
			return defer.promise();
		},
		getDictionaryList: function(data) {
			var defer = $.Deferred();
			common.ajax('/yihu/medicine/classicqry.json', {
			    data: JSON.stringify(data)
			})
			.then(function(res) {
			    defer.resolve(res);
			});
			return defer.promise();
		},
		queryDictionary: function(data) {
			var defer = $.Deferred();
			common.ajax('/yihu/medicine/query.json', {
			    data: JSON.stringify(data)
			})
			.then(function(res) {
			    defer.resolve(res);
			});
			return defer.promise();
		},
		getDictionaryDetail: function(data) {
			var defer = $.Deferred();
			common.ajax('/yihu/medicine/meddetail.json', {
			    data: JSON.stringify(data)
			})
			.then(function(res) {
			    defer.resolve(res);
			});
			return defer.promise();
		},
		collection: function(data) {
			var defer = $.Deferred();
			common.ajax('/yihu/my/addFavorite.json', {
			    data: JSON.stringify(data)
			})
			.then(function(res) {
			    defer.resolve(res);
			});
			return defer.promise();
		},
		removeCollection: function(data) {
			var defer = $.Deferred();
			common.ajax('/yihu/my/removeFavorite.json', {
			    data: JSON.stringify(data)
			})
			.then(function(res) {
			    defer.resolve(res);
			});
			return defer.promise();
		},
		getCollectionList: function(data) {
			var defer = $.Deferred();
			common.ajax('/yihu/my/myFavorite.json', {
			    data: JSON.stringify(data)
			})
			.then(function(res) {
			    defer.resolve(res);
			});
			return defer.promise();
		}
	}
})