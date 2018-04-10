grammar Flight;

source : statement+;

statement : vardecl TERMINATOR;

vardecl : 'fix' vardecl_name '=' vardecl_value;
vardecl_name : ID;
vardecl_value : NUMBER;

TERMINATOR: ';';
ID: [a-zA-Z_]+;
NUMBER: DIGIT+;
fragment DIGIT: [0-9];
STRING: '"' ( '\\' [\\"] | ~[\\"\r\n] )* '"';
WS: [ \t\r\n]+ -> skip;