"use strict";define(["react"],function(React){return React.createClass({componentDidMount:function(){$(".back").on("click",function(){$("#content").removeClass("pt-page-moveFromLeft").addClass("pt-page-moveToLeft"),window.history.back()})},render:function(){var bar="",sideBar="";return this.props.back&&(bar=React.createElement("i",{className:"back go-left"})),this.props.sideBar&&(sideBar=React.createElement("i",{className:"side-bar collect"},this.props.sideBar)),React.createElement("header",{className:"header"},bar,React.createElement("div",{className:"title"},this.props.title),sideBar)}})});