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
					XMLHttpRequest.setRequestHeader("authentication", "eGCu0i1reCeM4mNOIwc4iS0EaCRrUr4f8DhvK/Vy7Ur8QhKn9F7BiLV1yw/y4Z3nm4QYs6aWGIvj9GS5z/CKSSOxvSwnCdM+osBq5uafdVrttjOwhYCuUz2TghEm9SK2d1UdrT2qOonoiM0+w86jNWRE6iRrOBKEOXlrTsJjZqE=");
					XMLHttpRequest.setRequestHeader("os-type", "h5");
					XMLHttpRequest.setRequestHeader("hospital", "WUHAN_TONGJI");
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