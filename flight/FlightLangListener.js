const FlightListener = require('../flight-gen/FlightListener').FlightListener;
const FlightParser = require('../flight-gen/FlightParser').FlightParser;

FlightLangListener = function() {
  FlightListener.call(this); // inherit default listener

  this.res = [];

  return this;
};

// inherit default listener
FlightLangListener.prototype = Object.create(FlightListener.prototype);
FlightLangListener.prototype.constructor = FlightLangListener;

// override default listener behavior
FlightLangListener.prototype.enterVardecl = function(ctx) {
  //const test = ctx.children.find((c) => c instanceof FlightParser.Vardecl_nameContext);
  //console.log(test.getText());
  this.res.push("const ");
}; 

FlightLangListener.prototype.enterVardecl_name = function(ctx) {
  this.res.push(ctx.getText());
}; 

FlightLangListener.prototype.exitVardecl_name = function(ctx) {
  this.res.push(' = ');
}; 

// Enter a parse tree produced by FlightParser#vardecl_value.
FlightLangListener.prototype.enterVardecl_value = function(ctx) {
  this.res.push(ctx.getText());
};

// Exit a parse tree produced by FlightParser#statement.
FlightLangListener.prototype.exitStatement = function(ctx) {
  this.res.push(";\r\n");
};

FlightLangListener.prototype.exitSource = function(ctx) {
  console.log(this.res.join(''));
}; 

module.exports = FlightLangListener;
