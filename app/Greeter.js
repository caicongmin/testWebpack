/**
 * Created by ccm on 2016/11/29.
 */
// Greeter.js
var config = require('./config.json')
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  return greet;
};