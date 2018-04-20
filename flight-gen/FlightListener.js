// Generated from Flight.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FlightParser.
function FlightListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

FlightListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
FlightListener.prototype.constructor = FlightListener;

// Enter a parse tree produced by FlightParser#source.
FlightListener.prototype.enterSource = function(ctx) {
};

// Exit a parse tree produced by FlightParser#source.
FlightListener.prototype.exitSource = function(ctx) {
};


// Enter a parse tree produced by FlightParser#statement.
FlightListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by FlightParser#statement.
FlightListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by FlightParser#block.
FlightListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by FlightParser#block.
FlightListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by FlightParser#statements.
FlightListener.prototype.enterStatements = function(ctx) {
};

// Exit a parse tree produced by FlightParser#statements.
FlightListener.prototype.exitStatements = function(ctx) {
};


// Enter a parse tree produced by FlightParser#expressionStatement.
FlightListener.prototype.enterExpressionStatement = function(ctx) {
};

// Exit a parse tree produced by FlightParser#expressionStatement.
FlightListener.prototype.exitExpressionStatement = function(ctx) {
};


// Enter a parse tree produced by FlightParser#returnStatement.
FlightListener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by FlightParser#returnStatement.
FlightListener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by FlightParser#variableStatement.
FlightListener.prototype.enterVariableStatement = function(ctx) {
};

// Exit a parse tree produced by FlightParser#variableStatement.
FlightListener.prototype.exitVariableStatement = function(ctx) {
};


// Enter a parse tree produced by FlightParser#variableDeclaration.
FlightListener.prototype.enterVariableDeclaration = function(ctx) {
};

// Exit a parse tree produced by FlightParser#variableDeclaration.
FlightListener.prototype.exitVariableDeclaration = function(ctx) {
};


// Enter a parse tree produced by FlightParser#varModifier.
FlightListener.prototype.enterVarModifier = function(ctx) {
};

// Exit a parse tree produced by FlightParser#varModifier.
FlightListener.prototype.exitVarModifier = function(ctx) {
};


// Enter a parse tree produced by FlightParser#varMutability.
FlightListener.prototype.enterVarMutability = function(ctx) {
};

// Exit a parse tree produced by FlightParser#varMutability.
FlightListener.prototype.exitVarMutability = function(ctx) {
};


// Enter a parse tree produced by FlightParser#ifStatement.
FlightListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by FlightParser#ifStatement.
FlightListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by FlightParser#ifConditionList.
FlightListener.prototype.enterIfConditionList = function(ctx) {
};

// Exit a parse tree produced by FlightParser#ifConditionList.
FlightListener.prototype.exitIfConditionList = function(ctx) {
};


// Enter a parse tree produced by FlightParser#elseStatement.
FlightListener.prototype.enterElseStatement = function(ctx) {
};

// Exit a parse tree produced by FlightParser#elseStatement.
FlightListener.prototype.exitElseStatement = function(ctx) {
};


// Enter a parse tree produced by FlightParser#functionDeclaration.
FlightListener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by FlightParser#functionDeclaration.
FlightListener.prototype.exitFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by FlightParser#AdditiveExpression.
FlightListener.prototype.enterAdditiveExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#AdditiveExpression.
FlightListener.prototype.exitAdditiveExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#RelationalExpression.
FlightListener.prototype.enterRelationalExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#RelationalExpression.
FlightListener.prototype.exitRelationalExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#LogicalAndExpression.
FlightListener.prototype.enterLogicalAndExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#LogicalAndExpression.
FlightListener.prototype.exitLogicalAndExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#ObjectLiteralExpression.
FlightListener.prototype.enterObjectLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#ObjectLiteralExpression.
FlightListener.prototype.exitObjectLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#NewExpression.
FlightListener.prototype.enterNewExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#NewExpression.
FlightListener.prototype.exitNewExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#LiteralExpression.
FlightListener.prototype.enterLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#LiteralExpression.
FlightListener.prototype.exitLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#LogicalOrExpression.
FlightListener.prototype.enterLogicalOrExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#LogicalOrExpression.
FlightListener.prototype.exitLogicalOrExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#ArrayLiteralExpression.
FlightListener.prototype.enterArrayLiteralExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#ArrayLiteralExpression.
FlightListener.prototype.exitArrayLiteralExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#MemberDotExpression.
FlightListener.prototype.enterMemberDotExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#MemberDotExpression.
FlightListener.prototype.exitMemberDotExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#MemberIndexExpression.
FlightListener.prototype.enterMemberIndexExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#MemberIndexExpression.
FlightListener.prototype.exitMemberIndexExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#ArrayInitializerExpression.
FlightListener.prototype.enterArrayInitializerExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#ArrayInitializerExpression.
FlightListener.prototype.exitArrayInitializerExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#IdentifierExpression.
FlightListener.prototype.enterIdentifierExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#IdentifierExpression.
FlightListener.prototype.exitIdentifierExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#ArgumentsExpression.
FlightListener.prototype.enterArgumentsExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#ArgumentsExpression.
FlightListener.prototype.exitArgumentsExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#AssignmentExpression.
FlightListener.prototype.enterAssignmentExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#AssignmentExpression.
FlightListener.prototype.exitAssignmentExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#AssignmentOperatorExpression.
FlightListener.prototype.enterAssignmentOperatorExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#AssignmentOperatorExpression.
FlightListener.prototype.exitAssignmentOperatorExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#ArrowFunctionExpression.
FlightListener.prototype.enterArrowFunctionExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#ArrowFunctionExpression.
FlightListener.prototype.exitArrowFunctionExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#EqualityExpression.
FlightListener.prototype.enterEqualityExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#EqualityExpression.
FlightListener.prototype.exitEqualityExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#MultiplicativeExpression.
FlightListener.prototype.enterMultiplicativeExpression = function(ctx) {
};

// Exit a parse tree produced by FlightParser#MultiplicativeExpression.
FlightListener.prototype.exitMultiplicativeExpression = function(ctx) {
};


// Enter a parse tree produced by FlightParser#arrayInitializer.
FlightListener.prototype.enterArrayInitializer = function(ctx) {
};

// Exit a parse tree produced by FlightParser#arrayInitializer.
FlightListener.prototype.exitArrayInitializer = function(ctx) {
};


// Enter a parse tree produced by FlightParser#defaultArrayInitValue.
FlightListener.prototype.enterDefaultArrayInitValue = function(ctx) {
};

// Exit a parse tree produced by FlightParser#defaultArrayInitValue.
FlightListener.prototype.exitDefaultArrayInitValue = function(ctx) {
};


// Enter a parse tree produced by FlightParser#arrayInitializerArg.
FlightListener.prototype.enterArrayInitializerArg = function(ctx) {
};

// Exit a parse tree produced by FlightParser#arrayInitializerArg.
FlightListener.prototype.exitArrayInitializerArg = function(ctx) {
};


// Enter a parse tree produced by FlightParser#arrowFunctionArrow.
FlightListener.prototype.enterArrowFunctionArrow = function(ctx) {
};

// Exit a parse tree produced by FlightParser#arrowFunctionArrow.
FlightListener.prototype.exitArrowFunctionArrow = function(ctx) {
};


// Enter a parse tree produced by FlightParser#arrowFunctionParameters.
FlightListener.prototype.enterArrowFunctionParameters = function(ctx) {
};

// Exit a parse tree produced by FlightParser#arrowFunctionParameters.
FlightListener.prototype.exitArrowFunctionParameters = function(ctx) {
};


// Enter a parse tree produced by FlightParser#parameterListOpen.
FlightListener.prototype.enterParameterListOpen = function(ctx) {
};

// Exit a parse tree produced by FlightParser#parameterListOpen.
FlightListener.prototype.exitParameterListOpen = function(ctx) {
};


// Enter a parse tree produced by FlightParser#parameterListClose.
FlightListener.prototype.enterParameterListClose = function(ctx) {
};

// Exit a parse tree produced by FlightParser#parameterListClose.
FlightListener.prototype.exitParameterListClose = function(ctx) {
};


// Enter a parse tree produced by FlightParser#arrowFunctionBody.
FlightListener.prototype.enterArrowFunctionBody = function(ctx) {
};

// Exit a parse tree produced by FlightParser#arrowFunctionBody.
FlightListener.prototype.exitArrowFunctionBody = function(ctx) {
};


// Enter a parse tree produced by FlightParser#openBlock.
FlightListener.prototype.enterOpenBlock = function(ctx) {
};

// Exit a parse tree produced by FlightParser#openBlock.
FlightListener.prototype.exitOpenBlock = function(ctx) {
};


// Enter a parse tree produced by FlightParser#closeBlock.
FlightListener.prototype.enterCloseBlock = function(ctx) {
};

// Exit a parse tree produced by FlightParser#closeBlock.
FlightListener.prototype.exitCloseBlock = function(ctx) {
};


// Enter a parse tree produced by FlightParser#aiParameterSeparator.
FlightListener.prototype.enterAiParameterSeparator = function(ctx) {
};

// Exit a parse tree produced by FlightParser#aiParameterSeparator.
FlightListener.prototype.exitAiParameterSeparator = function(ctx) {
};


// Enter a parse tree produced by FlightParser#expressionSequence.
FlightListener.prototype.enterExpressionSequence = function(ctx) {
};

// Exit a parse tree produced by FlightParser#expressionSequence.
FlightListener.prototype.exitExpressionSequence = function(ctx) {
};


// Enter a parse tree produced by FlightParser#arrayLiteral.
FlightListener.prototype.enterArrayLiteral = function(ctx) {
};

// Exit a parse tree produced by FlightParser#arrayLiteral.
FlightListener.prototype.exitArrayLiteral = function(ctx) {
};


// Enter a parse tree produced by FlightParser#arrayLiteralOpen.
FlightListener.prototype.enterArrayLiteralOpen = function(ctx) {
};

// Exit a parse tree produced by FlightParser#arrayLiteralOpen.
FlightListener.prototype.exitArrayLiteralOpen = function(ctx) {
};


// Enter a parse tree produced by FlightParser#arrayLiteralClose.
FlightListener.prototype.enterArrayLiteralClose = function(ctx) {
};

// Exit a parse tree produced by FlightParser#arrayLiteralClose.
FlightListener.prototype.exitArrayLiteralClose = function(ctx) {
};


// Enter a parse tree produced by FlightParser#elementList.
FlightListener.prototype.enterElementList = function(ctx) {
};

// Exit a parse tree produced by FlightParser#elementList.
FlightListener.prototype.exitElementList = function(ctx) {
};


// Enter a parse tree produced by FlightParser#elementListSeparator.
FlightListener.prototype.enterElementListSeparator = function(ctx) {
};

// Exit a parse tree produced by FlightParser#elementListSeparator.
FlightListener.prototype.exitElementListSeparator = function(ctx) {
};


// Enter a parse tree produced by FlightParser#multiply.
FlightListener.prototype.enterMultiply = function(ctx) {
};

// Exit a parse tree produced by FlightParser#multiply.
FlightListener.prototype.exitMultiply = function(ctx) {
};


// Enter a parse tree produced by FlightParser#divide.
FlightListener.prototype.enterDivide = function(ctx) {
};

// Exit a parse tree produced by FlightParser#divide.
FlightListener.prototype.exitDivide = function(ctx) {
};


// Enter a parse tree produced by FlightParser#modulo.
FlightListener.prototype.enterModulo = function(ctx) {
};

// Exit a parse tree produced by FlightParser#modulo.
FlightListener.prototype.exitModulo = function(ctx) {
};


// Enter a parse tree produced by FlightParser#logicalAnd.
FlightListener.prototype.enterLogicalAnd = function(ctx) {
};

// Exit a parse tree produced by FlightParser#logicalAnd.
FlightListener.prototype.exitLogicalAnd = function(ctx) {
};


// Enter a parse tree produced by FlightParser#logicalOr.
FlightListener.prototype.enterLogicalOr = function(ctx) {
};

// Exit a parse tree produced by FlightParser#logicalOr.
FlightListener.prototype.exitLogicalOr = function(ctx) {
};


// Enter a parse tree produced by FlightParser#notEqual.
FlightListener.prototype.enterNotEqual = function(ctx) {
};

// Exit a parse tree produced by FlightParser#notEqual.
FlightListener.prototype.exitNotEqual = function(ctx) {
};


// Enter a parse tree produced by FlightParser#equalStrict.
FlightListener.prototype.enterEqualStrict = function(ctx) {
};

// Exit a parse tree produced by FlightParser#equalStrict.
FlightListener.prototype.exitEqualStrict = function(ctx) {
};


// Enter a parse tree produced by FlightParser#notEqualStrict.
FlightListener.prototype.enterNotEqualStrict = function(ctx) {
};

// Exit a parse tree produced by FlightParser#notEqualStrict.
FlightListener.prototype.exitNotEqualStrict = function(ctx) {
};


// Enter a parse tree produced by FlightParser#assign.
FlightListener.prototype.enterAssign = function(ctx) {
};

// Exit a parse tree produced by FlightParser#assign.
FlightListener.prototype.exitAssign = function(ctx) {
};


// Enter a parse tree produced by FlightParser#memberDot.
FlightListener.prototype.enterMemberDot = function(ctx) {
};

// Exit a parse tree produced by FlightParser#memberDot.
FlightListener.prototype.exitMemberDot = function(ctx) {
};


// Enter a parse tree produced by FlightParser#identifierName.
FlightListener.prototype.enterIdentifierName = function(ctx) {
};

// Exit a parse tree produced by FlightParser#identifierName.
FlightListener.prototype.exitIdentifierName = function(ctx) {
};


// Enter a parse tree produced by FlightParser#assignmentOperator.
FlightListener.prototype.enterAssignmentOperator = function(ctx) {
};

// Exit a parse tree produced by FlightParser#assignmentOperator.
FlightListener.prototype.exitAssignmentOperator = function(ctx) {
};


// Enter a parse tree produced by FlightParser#multiplyAssign.
FlightListener.prototype.enterMultiplyAssign = function(ctx) {
};

// Exit a parse tree produced by FlightParser#multiplyAssign.
FlightListener.prototype.exitMultiplyAssign = function(ctx) {
};


// Enter a parse tree produced by FlightParser#divideAssign.
FlightListener.prototype.enterDivideAssign = function(ctx) {
};

// Exit a parse tree produced by FlightParser#divideAssign.
FlightListener.prototype.exitDivideAssign = function(ctx) {
};


// Enter a parse tree produced by FlightParser#moduloAssign.
FlightListener.prototype.enterModuloAssign = function(ctx) {
};

// Exit a parse tree produced by FlightParser#moduloAssign.
FlightListener.prototype.exitModuloAssign = function(ctx) {
};


// Enter a parse tree produced by FlightParser#addAssign.
FlightListener.prototype.enterAddAssign = function(ctx) {
};

// Exit a parse tree produced by FlightParser#addAssign.
FlightListener.prototype.exitAddAssign = function(ctx) {
};


// Enter a parse tree produced by FlightParser#subAssign.
FlightListener.prototype.enterSubAssign = function(ctx) {
};

// Exit a parse tree produced by FlightParser#subAssign.
FlightListener.prototype.exitSubAssign = function(ctx) {
};


// Enter a parse tree produced by FlightParser#objectLiteral.
FlightListener.prototype.enterObjectLiteral = function(ctx) {
};

// Exit a parse tree produced by FlightParser#objectLiteral.
FlightListener.prototype.exitObjectLiteral = function(ctx) {
};


// Enter a parse tree produced by FlightParser#propertySeparator.
FlightListener.prototype.enterPropertySeparator = function(ctx) {
};

// Exit a parse tree produced by FlightParser#propertySeparator.
FlightListener.prototype.exitPropertySeparator = function(ctx) {
};


// Enter a parse tree produced by FlightParser#PropertyExpressionAssignment.
FlightListener.prototype.enterPropertyExpressionAssignment = function(ctx) {
};

// Exit a parse tree produced by FlightParser#PropertyExpressionAssignment.
FlightListener.prototype.exitPropertyExpressionAssignment = function(ctx) {
};


// Enter a parse tree produced by FlightParser#freezeMarker.
FlightListener.prototype.enterFreezeMarker = function(ctx) {
};

// Exit a parse tree produced by FlightParser#freezeMarker.
FlightListener.prototype.exitFreezeMarker = function(ctx) {
};


// Enter a parse tree produced by FlightParser#propertyAssignSymbol.
FlightListener.prototype.enterPropertyAssignSymbol = function(ctx) {
};

// Exit a parse tree produced by FlightParser#propertyAssignSymbol.
FlightListener.prototype.exitPropertyAssignSymbol = function(ctx) {
};


// Enter a parse tree produced by FlightParser#propertyName.
FlightListener.prototype.enterPropertyName = function(ctx) {
};

// Exit a parse tree produced by FlightParser#propertyName.
FlightListener.prototype.exitPropertyName = function(ctx) {
};


// Enter a parse tree produced by FlightParser#equal.
FlightListener.prototype.enterEqual = function(ctx) {
};

// Exit a parse tree produced by FlightParser#equal.
FlightListener.prototype.exitEqual = function(ctx) {
};


// Enter a parse tree produced by FlightParser#less.
FlightListener.prototype.enterLess = function(ctx) {
};

// Exit a parse tree produced by FlightParser#less.
FlightListener.prototype.exitLess = function(ctx) {
};


// Enter a parse tree produced by FlightParser#greater.
FlightListener.prototype.enterGreater = function(ctx) {
};

// Exit a parse tree produced by FlightParser#greater.
FlightListener.prototype.exitGreater = function(ctx) {
};


// Enter a parse tree produced by FlightParser#lessOrEql.
FlightListener.prototype.enterLessOrEql = function(ctx) {
};

// Exit a parse tree produced by FlightParser#lessOrEql.
FlightListener.prototype.exitLessOrEql = function(ctx) {
};


// Enter a parse tree produced by FlightParser#greaterOrEql.
FlightListener.prototype.enterGreaterOrEql = function(ctx) {
};

// Exit a parse tree produced by FlightParser#greaterOrEql.
FlightListener.prototype.exitGreaterOrEql = function(ctx) {
};


// Enter a parse tree produced by FlightParser#arguments.
FlightListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by FlightParser#arguments.
FlightListener.prototype.exitArguments = function(ctx) {
};


// Enter a parse tree produced by FlightParser#parameterSeparator.
FlightListener.prototype.enterParameterSeparator = function(ctx) {
};

// Exit a parse tree produced by FlightParser#parameterSeparator.
FlightListener.prototype.exitParameterSeparator = function(ctx) {
};


// Enter a parse tree produced by FlightParser#formalParameterList.
FlightListener.prototype.enterFormalParameterList = function(ctx) {
};

// Exit a parse tree produced by FlightParser#formalParameterList.
FlightListener.prototype.exitFormalParameterList = function(ctx) {
};


// Enter a parse tree produced by FlightParser#formalParameterArg.
FlightListener.prototype.enterFormalParameterArg = function(ctx) {
};

// Exit a parse tree produced by FlightParser#formalParameterArg.
FlightListener.prototype.exitFormalParameterArg = function(ctx) {
};


// Enter a parse tree produced by FlightParser#functionBody.
FlightListener.prototype.enterFunctionBody = function(ctx) {
};

// Exit a parse tree produced by FlightParser#functionBody.
FlightListener.prototype.exitFunctionBody = function(ctx) {
};


// Enter a parse tree produced by FlightParser#literal.
FlightListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by FlightParser#literal.
FlightListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by FlightParser#add.
FlightListener.prototype.enterAdd = function(ctx) {
};

// Exit a parse tree produced by FlightParser#add.
FlightListener.prototype.exitAdd = function(ctx) {
};


// Enter a parse tree produced by FlightParser#sub.
FlightListener.prototype.enterSub = function(ctx) {
};

// Exit a parse tree produced by FlightParser#sub.
FlightListener.prototype.exitSub = function(ctx) {
};



exports.FlightListener = FlightListener;