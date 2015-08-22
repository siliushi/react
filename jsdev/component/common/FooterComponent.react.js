'use strict';

define([
    'react'
], function (React) {
    return React.createClass({
        render: function () {

            return <footer className="footer">
                        <div className="footer-bar-left">
                            <i className="index"></i>
                            <p>首页</p>
                        </div>
                        <div className="footer-bar-right">
                            <i className="my"></i>
                            <p>我</p>
                        </div>
                    </footer>;

        }
    });
});
