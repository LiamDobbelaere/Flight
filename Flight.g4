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
    : Impure? Function Identifier ParameterListOpen formalParameterList ParameterListClose BlockOpen functionBody BlockClose
    ;

singleExpression
    : literal                                                                               # LiteralExpression
    | arrayLiteral                                                                          # ArrayLiteralExpression
    | objectLiteral                                                                         # ObjectLiteralExpression
    | Function Identifier? parameterListOpen formalParameterList parameterListClose functionBody                # FunctionExpression
    | singleExpression arrayLiteralOpen expressionSequence arrayLiteralClose                # MemberIndexExpression
    | identifierName                                                                        # IdentifierExpression
    | singleExpression memberDot identifierName                                             # MemberDotExpression
    | singleExpression arguments                                                            # ArgumentsExpression
    | singleExpression (add | sub) singleExpression                                         # AdditiveExpression
    | singleExpression (less | greater | lessOrEql | greaterOrEql) singleExpression         # RelationalExpression
    | singleExpression (equal | notEqual | equalStrict | notEqualStrict) singleExpression   # EqualityExpression
    | singleExpression logicalAnd singleExpression                                          # LogicalAndExpression
    | singleExpression logicalOr singleExpression                                           # LogicalOrExpression
    | singleExpression assign singleExpression                                              # AssignmentExpression
    | singleExpression (multiply | divide | modulo) singleExpression                        # MultiplicativeExpression
    | singleExpression assignmentOperator singleExpression                                  # AssignmentOperatorExpression
    | arrowFunctionParameters arrowFunctionArrow arrowFunctionBody                                        # ArrowFunctionExpression
    ;

arrowFunctionArrow
    : ArrowFunctionArrow
    ;

arrowFunctionParameters
    : Identifier
    | parameterListOpen formalParameterList parameterListClose
    ;

parameterListOpen
    : ParameterListOpen
    ;

parameterListClose
    : ParameterListClose
    ;

arrowFunctionBody
    : singleExpression
    | functionBody
    ;

openBlock
    : BlockOpen
    ;

closeBlock
    : BlockClose
    ;

expressionSequence
    : singleExpression (parameterSeparator singleExpression)*
    ;

arrayLiteral
    : arrayLiteralOpen elementListSeparator* elementList? elementListSeparator* arrayLiteralClose
    ;

arrayLiteralOpen
    : ArrayLiteralOpen
    ;

arrayLiteralClose
    : ArrayLiteralClose
    ;

elementList
    : singleExpression (elementListSeparator+ singleExpression)*
    ;

elementListSeparator
    : ParameterSeparator
    ;

multiply
    : Multiply
    ;

divide
    : Divide
    ;

modulo
    : Modulo
    ;

logicalAnd
    : LogicalAnd
    ;

logicalOr
    : LogicalOr
    ;

notEqual
    : NotEqual
    ;

equalStrict
    : EqualStrict
    ;

notEqualStrict
    : NotEqualStrict
    ;

assign
    : Assign
    ;

memberDot
    : MemberDot
    ;

identifierName
    : Identifier
    ;

assignmentOperator
    : multiplyAssign
    | divideAssign
    | moduloAssign
    | addAssign
    | subAssign
    /*| '<<='
    | '>>='
    | '>>>='
    | '&='
    | '^='
    | '|='*/
    ;

multiplyAssign 
    : MultiplyAssign
    ;

divideAssign
    : DivideAssign
    ;

moduloAssign
    : ModuloAssign
    ;

addAssign
    : AddAssign
    ;

subAssign
    : SubAssign
    ;

objectLiteral
    : '{' (propertyAssignment (propertySeparator propertyAssignment)*)? ','? '}'
    ;

propertySeparator: ParameterSeparator;

propertyAssignment
    : freezeMarker? propertyName propertyAssignSymbol singleExpression       # PropertyExpressionAssignment
    ;

freezeMarker: FreezeMarker;

propertyAssignSymbol: PropertyAssignSymbol;

propertyName
    : Identifier
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
    : formalParameterArg? (parameterSeparator formalParameterArg)*
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
NotEqual: '!=';
EqualStrict: '===';
NotEqualStrict: '!==';
LogicalAnd: '&&';
LogicalOr: '||';
Multiply: '*';
Divide: '/';
Modulo: '%';
MultiplyAssign: '*=';
DivideAssign: '/=';
ModuloAssign: '%=';
AddAssign: '+=';
SubAssign: '-=';
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
ArrowFunctionArrow: '=>';
BlockOpen: '{';
BlockClose: '}';
ParameterListOpen: '(';
ParameterListClose: ')';
ArrayLiteralOpen: '[';
ArrayLiteralClose: ']';
FreezeMarker: '!';
Assign: '=';
MemberDot: '.';

Identifier
    : [a-zA-Z_]+
    ;

ParameterSeparator: ',';
Terminator: ';';
PropertyAssignSymbol: ':';

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

MultiLineComment:               '/*' .*? '*/'             -> skip;
SingleLineComment:              '//' ~[\r\n\u2028\u2029]* -> skip;