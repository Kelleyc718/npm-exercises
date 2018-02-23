import sayHello from './say-hello.js';
import $ from 'jquery';

$('body').append(`<p>${sayHello()}</p>`);
console.log('stuff');
