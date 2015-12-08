"use strict";
define(['jquery'], function($) {
	return {
		ajax: function(url, options) {
			// 请求接口地址
			var api = $TJ.appServer + url;
			var self = this;
			
			// Ajax参数
			var params = {
				url: api,
				cache: false,
				type: 'post',
				dataType: 'json',
				contentType: "application/json",
				beforeSend: function(XMLHttpRequest) {
					XMLHttpRequest.setRequestHeader("authentication", self.getCookie("authentication"));
					XMLHttpRequest.setRequestHeader("os-type", self.getCookie("os-type"));
					XMLHttpRequest.setRequestHeader("os-version", self.getCookie("os-version"));
					XMLHttpRequest.setRequestHeader("hospital", self.getCookie("hospital"));
				}
			}
			options = $.extend(params, options);
			// 定义延迟对象
			var defer = $.Deferred();
			$.ajax(options)
			.done(function(res) {
				if(+res.code === -1) {
					self.tip({
						content: '系统异常！',
						duration: 1000
					});
					return false;
				}
				if(+res.code === -4) {
					self.tip({
						content: '您的版本过低，已经无法使用，请立即更新！',
						duration: 1000
					});
					return false;
				}
				if(+res.code === -6) {
					// 账号在异地登录
					self.tip({
						content: '当前帐号在其他地方登录！',
						duration: 1000
					});
					setTimeout(function() {
						APPJSBridge.firstPage();
					},1000);
					return false;
				}
				if(+res.code === -2 ) {
					self.tip({
						content: '登陆已过期，请重新登陆操作！',
						duration: 1000
					});
					return false;
				}
				if(+res.code !== 0 ) {
					self.tip({
						content: '调用接口失败！',
						duration: 1000
					});
					return false;
				}
				// 操作成功
				defer.resolve(res);
			})
			.fail(function(res) {
				// 错误日志
				/*$.ajax({
					url: "http://log-service.guahao.cn/jsRecord",
					type: 'post',
					cache: false,
					dataType:'json',
					data: JSON.stringify({
					  errorHref: options.url,
					  errorFile: '调用接口异常',
					  errorMessage: res.status,
					  errorEnvironment: navigator.userAgent,
					  errorDetail: res.statusText,
					  errorApp: 'tjDoctor'
					})
				})
				.done(function() {

				});*/
			});

			return defer.promise();
		},
		scrollbar: function() {
			// 调用滚动条之前重新计算浏览器高度
			var agent = navigator.userAgent.toLowerCase();
			if($TJ.scrolls) {
				$TJ.scrolls.refresh();
			}else{
				if(/iphone os/.test(agent)) {
					// 调用滚动方法
					$TJ.scrolls = new IScroll('#wrapper', {
					    scrollX: false, 
	                    scrollY: true,
	                    click:true,
	                    scrollbars: false, 
	                    useTransform: false,
	                    // useTransition: false,
	                    probeType:3,
	                    mouseWheel:true,
	                    bindToWrapper: true
					});
				} else {
					$TJ.scrolls = new IScroll('#wrapper', {
					    scrollX: false, 
	                    scrollY: true,
	                    click:true,
	                    scrollbars: false, 
	                    useTransform: true,
	                    useTransition: false,
	                    probeType:3,
	                    mouseWheel:true,
	                    bindToWrapper: true
					});
				}
				
			}
		},
		formatDate: function(date, format) {
			format = format || "yyyy-MM-dd hh:mm"
			if(!$.isNumeric(date)) {
				date *= 1;
			}
			date = new Date(date);
			var o = {
				"M+": date.getMonth() + 1, 
				"d+": date.getDate(), 
				"h+": date.getHours(), 
				"m+": date.getMinutes(),
				"s+": date.getSeconds(),
				"q+": Math.floor((date.getMonth() + 3) / 3),
				"S": date.getMilliseconds()
			};
			if (/(y+)/.test(format)) {
				format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
			}
			for (var k in o) {
				if (new RegExp("(" + k + ")").test(format)) {
					format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
				}
			}
			return format;
			// return new Date(date).Format(format);
		},
		getParams: function(url) {
			var params = url.substring(url.lastIndexOf('?')+1);
			var paramsObj = {}, sp = [];
			if(params.length > 0) {
				sp = params.split('&');
			}
			// 获取url参数
			for(var i = 0, _l = sp.length; i < _l; i++) {
				var item = sp[i].split('=');
				paramsObj[item[0]] = item[1];
			}
			return paramsObj;
		},
		alert: function(params) {
			var paramObj = {
				title : "提示框",
				sureBtn : "确定",
				content : "",
				callBack : ""
			}
			
			if(typeof params == "string"){
				paramObj.content = params;
			}else{
				paramObj = $.extend(paramObj, params);
			}
			
			var html = "<div class='my-dialog' id='my-dialog'>" +
							"<div class='alert-body'>" +
								"<div class='alert-title'>" +
									paramObj.title +
								"</div>" +
								"<div class='alert-content'>" +
									"<p>"+ paramObj.content +"</p>" +
									"<div>" +
										"<input type='button' sid='sure' value='"+paramObj.sureBtn+"'></input>" +
									"</div>" +
								"</div>" +
							"</div>" +
						"</div>";
			$('body').append(html);
			var view = $("#my-dialog");
			function removeAlert(){
				if(paramObj.callBack){
					paramObj.callBack();
				}
				view.remove();
			}
			view.find('[sid=sure]').on("click",removeAlert);
		},
		tip: function(params) {
			// 解决多次弹窗，上次还未消失
			if($("#my-dialog-back")[0]) {
				$("#my-dialog").remove();
				$("#my-dialog-back").remove();
			}
			var paramObj = {
					content : "",
					duration : 1000,
					callBack : ""
				};
					
			if(typeof params == "string"){
				paramObj.content = params;
			}else{
				paramObj = $.extend(paramObj, params);
			}
			
			var html =  "<div class='my-dialog-tip' id='my-dialog-back'></div>" +
						"<div class='my-dialog-tip-container' id='my-dialog'>" +
							"<div class='tip-body'>" +
								"<p>"+ paramObj.content +"</p>" +
							"</div>" +
						"</div>";
			$('body').append(html);
			var view = $("#my-dialog"),viewBack = $("#my-dialog-back");
			// 如果设置自动关闭，则移除弹窗
			if(paramObj.duration) {
				setTimeout(function(){
					if(paramObj.callBack){
						paramObj.callBack();
					}
					view.remove();
					viewBack.remove();
				}, paramObj.duration);
			}
		},
		confirm: function(params) {
			var paramObj = {
				title : "提示框",
				content : "",
				sureBtn : "确定",
				cancelBtn : "取消",
				sureCallBack : "",
				cancelCallBack : ""
			}
			
			if(typeof params == "string"){
				paramObj.content = params;
			}else{
				paramObj = $.extend(paramObj, params);
			}
			
			var html = "<div class='my-dialog' id='my-dialog'>" + 
					"<div class='confirm-body'>" + 
						"<div class='confirm-title'>" + 
							paramObj.title  + 
						"</div>" + 
						"<div class='confirm-content'>" + 
							"<p>"+ paramObj.content +"</p>" + 
							"<div> " + 
								"<input type='button' sid='sure' value='" + paramObj.sureBtn + "'></input>" + 
								"<input class='right' type='button' sid='cancel' value='" + paramObj.cancelBtn + "'></input>" + 
							"</div>" + 
						"</div>" + 
					"</div>" + 
				"</div>";
			$('body').append(html);
			var view = $("#my-dialog");
			function sureClickEvent(){
				if(paramObj.sureCallBack){
					paramObj.sureCallBack();
				}
				view.remove();
			};
			function cancelClickEvent(){
				if(paramObj.cancelCallBack){
					paramObj.cancelCallBack();
				}
				view.remove();
			};
			view.find('[sid=sure]').on("click", sureClickEvent);
			view.find('[sid=cancel]').on("click", cancelClickEvent);
		},
		prompt: function(params) {
			var paramObj = {
				title : "提示框",
				content : "",
				type : "text",
				placeholder : "",
				sureBtn : "确定",
				cancelBtn : "取消",
				sureCallBack : "",
				cancelCallBack : "",
				liukai : function(){
					alert();
				}
			};
			
			if(typeof params == "string"){
				paramObj.content = params;
			}else{
				paramObj = $.extend(paramObj, params);
			}
			
			var html = "<div class='my-dialog' id='my-dialog'>" +
							"<div class='prompt-body'>" +
								"<div class='prompt-title'>" +
									paramObj.title +
								"</div>" +
								"<div class='prompt-content'>" +
									"<p>"+ paramObj.content +"</p>" +
									"<input sid='promptInput' type='" + paramObj.type + "' class='input' placeholder='"+paramObj.placeholder+"'/>" + 
									"<div>" + 
										"<input class='btn' type='button' sid='sure' value='"+paramObj.sureBtn+"'></input>" +
										"<input class='btn right' type='button' sid='sure' value='"+ paramObj.cancelBtn+"'></input>" +
									"</div>" +
								"</div>" + 
							"</div>" +
						"</div>";
			$('body').append(html);
			var view = $("#my-dialog");
			var value = "";
			function sureClickEvent(){
				value = view.find("[sid=promptInput]").val();
				if(paramObj.sureCallBack){
					paramObj.sureCallBack();
				}
				view.remove();
			};
			function cancelClickEvent(){
				value = view.find("[sid=promptInput]").val();
				if(paramObj.cancelCallBack){
					paramObj.cancelCallBack();
				}
				view.remove();
			};
			view.find('[sid=sure]').on("click", sureClickEvent);
			view.find('[sid=cancel]').on("click", cancelClickEvent);
		},
		setCookie : function (cname, cvalue, exdays) {
			var d = new Date();
		  	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		 	var expires = "expires=" + d.toGMTString();
		 	document.cookie = cname + "=" + cvalue + "; " + expires;
		},
		getCookie: function(cname) {
			if (document.cookie.length > 0) {
				var c_start = document.cookie.indexOf(cname + "=");
				if (c_start != -1) {
					c_start = c_start + cname.length + 1;
					var c_end = document.cookie.indexOf(";", c_start);
					if (c_end == -1) c_end = document.cookie.length;
					return unescape(document.cookie.substring(c_start, c_end));
				}
			}
			return "";
		},
		/**
		 * 节流
		 * @param  {[type]} func [description]
		 * @param  {[type]} args [description]
		 * @return {[type]}      [description]
		 */
		throttle: function(func, args) {
			if(func.tId) {
				clearTimeout(func.tId);
			}
			func.tId = setTimeout(function(){
			    func.apply(this, args);
			}, 500);
		}
	}
})