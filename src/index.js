const sayHello = require('./say-hello');
const $ = require('jquery');

$('body').append(`<p>${sayHello()}</p>`);
console.log('stuff');
