"use strict";
define(['jquery'], function($) {
	return {
		ajax: function(url, options) {
			// 请求接口地址
			var api = $TJ.appServer + url;
			// Ajax参数
			var params = {
				url: api,
				cache: false,
				type: 'post',
				dataType: 'json',
				contentType: "application/json",
				beforeSend: function(XMLHttpRequest) {
					// 设置header
					XMLHttpRequest.setRequestHeader("", "");
				}
			}
			options = $.extend(params, options);
			// 定义延迟对象
			var defer = $.Deferred();
			$.ajax(options)
			.done(function(res) {
				// 操作成功
				defer.resolve(res);
			})
			.fail(function(res) {
				// 失败
				console.log('something error');
			});

			return defer.promise();
		}
	}
})