"use strict";

var template = React.createElement(
    "div",
    { "class": "row" },
    React.createElement(
        "div",
        { "class": "col-xs col-sm-3" },
        React.createElement(
            "p",
            null,
            "Column 1"
        )
    ),
    React.createElement(
        "div",
        { "class": "col-xs col-sm-3" },
        React.createElement(
            "p",
            null,
            "Column 1"
        )
    ),
    React.createElement(
        "div",
        { "class": "col-xs col-sm-3" },
        React.createElement(
            "p",
            null,
            "Column 1"
        )
    ),
    React.createElement(
        "div",
        { "class": "col-xs col-sm-3" },
        React.createElement(
            "p",
            null,
            "Column 1"
        )
    )
);
var appRoot = document.querySelector("body");

ReactDOM.render(template, appRoot);
