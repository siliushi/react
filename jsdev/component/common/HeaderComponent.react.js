'use strict';

define([
    'react'
], function (React) {
    return React.createClass({
        componentDidMount: function() {
            $('.back').on('click', function() {
                $('#content').removeClass('pt-page-moveFromLeft').addClass('pt-page-moveToLeft');
                window.history.back();
            })
        },
        render: function () {
            var bar = '', sideBar = '';
            if(this.props.back) {
                bar = <i className="back go-left"></i>;
            }
            if(this.props.sideBar) {
                sideBar = <i className="side-bar collect">{this.props.sideBar}</i>
            }

            return <header className="header">
                        { bar }
                        <div className="title">
                            {this.props.title}
                        </div>
                        { sideBar }
                    </header>;

        }
    });
});
