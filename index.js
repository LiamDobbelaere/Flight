const antlr4 = require('antlr4');
const FlightLexer = require('./flight-gen/FlightLexer');
const FlightParser = require('./flight-gen/FlightParser');
const FlightLangListener = require('./flight/FlightLangListener');

var input = "fix cyz = 450; fix abc = 360;";
var chars = new antlr4.InputStream(input);
var lexer = new FlightLexer.FlightLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new FlightParser.FlightParser(tokens);
parser.buildParseTrees = true;
var tree = parser.source();

var treeListener = new FlightLangListener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(treeListener, tree);

