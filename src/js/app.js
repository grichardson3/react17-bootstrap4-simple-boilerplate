"use strict";

const template = (
    <div class="row">
        <div class="col-xs col-sm-3">
            <p>Column 1</p>
        </div>
        <div class="col-xs col-sm-3">
            <p>Column 1</p>
        </div>
        <div class="col-xs col-sm-3">
            <p>Column 1</p>
        </div>
        <div class="col-xs col-sm-3">
            <p>Column 1</p>
        </div>
    </div>
);
const appRoot = document.querySelector("body");

ReactDOM.render(template, appRoot);