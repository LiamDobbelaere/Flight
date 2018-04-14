const antlr4 = require('antlr4');
const FlightLexer = require('./flight-gen/FlightLexer');
const FlightParser = require('./flight-gen/FlightParser');
const FlightLangListener = require('./flight/FlightLangListener');
const fs = require('fs');

var input = fs.readFileSync('main.fl', 'utf8');
var chars = new antlr4.InputStream(input);
var lexer = new FlightLexer.FlightLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new FlightParser.FlightParser(tokens);
parser.buildParseTrees = true;
var tree = parser.source();

var treeListener = new FlightLangListener(true);
antlr4.tree.ParseTreeWalker.DEFAULT.walk(treeListener, tree);

fs.writeFileSync('main.fl.js', treeListener.res);