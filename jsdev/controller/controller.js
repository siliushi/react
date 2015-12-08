"use strict";

define([
	'jquery',
	'backbone'
	], function($, Backbone) {
	return {
		gonggao: {
			list: function() {
				
			},
			detail: function() {
				
			}
		},
		dictionary: {
			list: function() {
				// 隐藏
				$('body').off('click', '.arrow-down').on('click', '.arrow-down', function() {
					$(this).nextUntil('.item-1').hide(500).removeClass('arrow-down').addClass('arrow-right');
					$(this).removeClass('arrow-down').addClass('arrow-right');
				});
				// 显示
				$('body').off('click', '.arrow-right').on('click', '.arrow-right', function() {
					$(this).nextUntil('.item-1').show(500).removeClass('arrow-right').addClass('arrow-down');
					$(this).removeClass('arrow-right').addClass('arrow-down');
				});
			},
			list2: function() {

			},
			detail: function() {

			}
		},
		rule: {
			list: function() {
			},
			list2: function() {

			},
			detail: function() {
				
			}
		}
	}
});