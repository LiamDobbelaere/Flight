const antlr4 = require('antlr4');
const FlightLexer = require('./flight-gen/FlightLexer');
const FlightParser = require('./flight-gen/FlightParser');
const FlightLangListener = require('./flight/FlightLangListener');
const fs = require('fs');
const path = require('path');
const watchdir = './examples';
const minify = false;

function transpile(filePath) {  
  var input = fs.readFileSync(filePath, 'utf8');
  var chars = new antlr4.InputStream(input);
  var lexer = new FlightLexer.FlightLexer(chars);
  var tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new FlightParser.FlightParser(tokens);
  parser.buildParseTrees = true;
  var tree = parser.source();

  var treeListener = new FlightLangListener(minify);
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(treeListener, tree);

  fs.writeFileSync(filePath + '.js', treeListener.res);
}

// Example when handled through fs.watch listener
fs.watch(watchdir, { encoding: 'buffer' }, (eventType, filename) => {
  if (filename) {
    let file = path.join(watchdir, filename.toString());
    if (path.extname(file) === '.fl') try {
      transpile(file);
      console.log("Updated " + file + '.js');
    } catch (e) {
      console.log(e);
    }
  }
});