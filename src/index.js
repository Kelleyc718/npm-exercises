'use strict';
const $ = require('jquery');

const sayHello = () => {
  console.log('Hello');
};

$('body').append("<p>'Hello World'</p>");

sayHello();
console.log('stuff');
