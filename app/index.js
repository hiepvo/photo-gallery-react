let React = require('react');
let ReactDom = require('react-dom');
require('./index.css');
let App = require('./components/App');

ReactDom.render(
    <App/>,
    document.getElementById('app')
);