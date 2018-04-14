grammar Flight;

source
    : statements?
    ;

statement
    : block
    | variableStatement
    | functionDeclaration
    | ifStatement
    | expressionStatement
    | returnStatement
    /*| iterationStatement
    | continueStatement
    | breakStatement
    | returnStatement
    | withStatement
    | labelledStatement
    | switchStatement
    | throwStatement
    | tryStatement
    | debuggerStatement
    | functionDeclaration*/
    ;

block
    : BlockOpen statements? BlockClose
    ;

statements
    : statement+
    ;

expressionStatement
    : singleExpression Terminator
    ;

returnStatement
    : Return singleExpression Terminator
    ;

variableStatement
    : varModifier varMutability? variableDeclaration Terminator
    ;

variableDeclaration
    : Identifier Assign singleExpression
    ;

varModifier
    : Let
    ;

varMutability
    : Mut
    ;

ifStatement
    : If ifConditionList statement elseStatement?
    ;

ifConditionList
    : ParameterListOpen singleExpression ParameterListClose
    ;

elseStatement
    : (Else statement)
    ;

functionDeclaration
    : Impure? Function Identifier ParameterListOpen formalParameterList? ParameterListClose BlockOpen functionBody BlockClose
    ;

singleExpression
    : literal                                                                # LiteralExpression
    | Identifier                                                             # IdentifierExpression
    | singleExpression arguments                                             # ArgumentsExpression
    | singleExpression (add | sub) singleExpression                          # AdditiveExpression
    | singleExpression (less | greater | lessOrEql | greaterOrEql) singleExpression            # RelationalExpression
    | singleExpression (equal | '!=' | '===' | '!==') singleExpression        # EqualityExpression
    ;

equal: Equal;
less: Less;
greater: Greater;
lessOrEql: LessOrEql;
greaterOrEql: GreaterOrEql;

arguments
    : ParameterListOpen(singleExpression (parameterSeparator singleExpression)*)?ParameterListClose
    ;

parameterSeparator
    : ParameterSeparator
    ;

formalParameterList
    : formalParameterArg (parameterSeparator formalParameterArg)*
    ;

formalParameterArg
    : Identifier (Assign singleExpression)?      // ECMAScript 6: Initialization
    ;

functionBody
    : statements?
    ;

literal
    : Boolean
    | String
    | Number
    ;

add: Add;
sub: Sub;

Add: '+';
Sub: '-';
Equal: '==';
Mut: 'mut';
Let: 'let';
If: 'if';
Else: 'else';
Function: 'func';
Impure: 'impure';
Return: 'return';
LessOrEql: '<=';
GreaterOrEql: '>=';
Less: '<';
Greater: '>';

BlockOpen: '{';
BlockClose: '}';
ParameterListOpen: '(';
ParameterListClose: ')';

Assign: '=';

Identifier
    : [a-zA-Z_]+
    ;

ParameterSeparator: ',';

Terminator: ';';

Boolean: 'true';

String
    : '"' ( '\\' [\\"] | ~[\\"\r\n] )* '"'
    ;

Number
    : Digit+
    ;

fragment Digit
    : [0-9]
    ;

Whitespace
    : [ \t\r\n]+ -> skip
    ;