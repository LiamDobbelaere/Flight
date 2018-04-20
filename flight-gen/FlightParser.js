// Generated from Flight.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FlightListener = require('./FlightListener').FlightListener;
var grammarFileName = "Flight.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00034\u01f3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004?\t?\u0004@\t@\u0004",
    "A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0003\u0002\u0005\u0002",
    "\u008c\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u0094\n\u0003\u0003\u0004\u0003\u0004",
    "\u0005\u0004\u0098\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0006",
    "\u0005\u009d\n\u0005\r\u0005\u000e\u0005\u009e\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0005\b\u00aa\n\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0005\f\u00bb\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0005\u000f\u00c5\n\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00d8",
    "\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0005\u0010\u00df\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u00e4\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00ed\n\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u00f6\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u010a\n\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u011d",
    "\n\u0010\f\u0010\u000e\u0010\u0120\u000b\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u0127\n\u0011\f\u0011",
    "\u000e\u0011\u012a\u000b\u0011\u0003\u0011\u0005\u0011\u012d\n\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0005\u0015\u013b\n\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0007\u001c\u014f\n\u001c\f\u001c\u000e",
    "\u001c\u0152\u000b\u001c\u0003\u001d\u0003\u001d\u0007\u001d\u0156\n",
    "\u001d\f\u001d\u000e\u001d\u0159\u000b\u001d\u0003\u001d\u0005\u001d",
    "\u015c\n\u001d\u0003\u001d\u0007\u001d\u015f\n\u001d\f\u001d\u000e\u001d",
    "\u0162\u000b\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001f\u0003\u001f\u0003 \u0003 \u0006 \u016c\n \r \u000e \u016d\u0003",
    " \u0003 \u0007 \u0172\n \f \u000e \u0175\u000b \u0003!\u0003!\u0003",
    "\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003",
    "\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003+\u0003",
    ",\u0003,\u0003-\u0003-\u0003-\u0003-\u0003-\u0005-\u0194\n-\u0003.\u0003",
    ".\u0003/\u0003/\u00030\u00030\u00031\u00031\u00032\u00032\u00033\u0003",
    "3\u00033\u00033\u00033\u00073\u01a5\n3\f3\u000e3\u01a8\u000b3\u0005",
    "3\u01aa\n3\u00033\u00053\u01ad\n3\u00033\u00033\u00034\u00034\u0003",
    "5\u00055\u01b4\n5\u00035\u00035\u00035\u00035\u00036\u00036\u00037\u0003",
    "7\u00038\u00038\u00039\u00039\u0003:\u0003:\u0003;\u0003;\u0003<\u0003",
    "<\u0003=\u0003=\u0003>\u0003>\u0003>\u0003>\u0003>\u0007>\u01cf\n>\f",
    ">\u000e>\u01d2\u000b>\u0005>\u01d4\n>\u0003>\u0003>\u0003?\u0003?\u0003",
    "@\u0005@\u01db\n@\u0003@\u0003@\u0003@\u0007@\u01e0\n@\f@\u000e@\u01e3",
    "\u000b@\u0003A\u0003A\u0003A\u0005A\u01e8\nA\u0003B\u0005B\u01eb\nB",
    "\u0003C\u0003C\u0003D\u0003D\u0003E\u0003E\u0003E\u0002\u0003\u001e",
    "F\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080",
    "\u0082\u0084\u0086\u0088\u0002\u0003\u0003\u0002/1\u0002\u01eb\u0002",
    "\u008b\u0003\u0002\u0002\u0002\u0004\u0093\u0003\u0002\u0002\u0002\u0006",
    "\u0095\u0003\u0002\u0002\u0002\b\u009c\u0003\u0002\u0002\u0002\n\u00a0",
    "\u0003\u0002\u0002\u0002\f\u00a3\u0003\u0002\u0002\u0002\u000e\u00a7",
    "\u0003\u0002\u0002\u0002\u0010\u00ae\u0003\u0002\u0002\u0002\u0012\u00b2",
    "\u0003\u0002\u0002\u0002\u0014\u00b4\u0003\u0002\u0002\u0002\u0016\u00b6",
    "\u0003\u0002\u0002\u0002\u0018\u00bc\u0003\u0002\u0002\u0002\u001a\u00c0",
    "\u0003\u0002\u0002\u0002\u001c\u00c4\u0003\u0002\u0002\u0002\u001e\u00de",
    "\u0003\u0002\u0002\u0002 \u0121\u0003\u0002\u0002\u0002\"\u012e\u0003",
    "\u0002\u0002\u0002$\u0131\u0003\u0002\u0002\u0002&\u0133\u0003\u0002",
    "\u0002\u0002(\u013a\u0003\u0002\u0002\u0002*\u013c\u0003\u0002\u0002",
    "\u0002,\u013e\u0003\u0002\u0002\u0002.\u0140\u0003\u0002\u0002\u0002",
    "0\u0144\u0003\u0002\u0002\u00022\u0146\u0003\u0002\u0002\u00024\u0148",
    "\u0003\u0002\u0002\u00026\u014a\u0003\u0002\u0002\u00028\u0153\u0003",
    "\u0002\u0002\u0002:\u0165\u0003\u0002\u0002\u0002<\u0167\u0003\u0002",
    "\u0002\u0002>\u0169\u0003\u0002\u0002\u0002@\u0176\u0003\u0002\u0002",
    "\u0002B\u0178\u0003\u0002\u0002\u0002D\u017a\u0003\u0002\u0002\u0002",
    "F\u017c\u0003\u0002\u0002\u0002H\u017e\u0003\u0002\u0002\u0002J\u0180",
    "\u0003\u0002\u0002\u0002L\u0182\u0003\u0002\u0002\u0002N\u0184\u0003",
    "\u0002\u0002\u0002P\u0186\u0003\u0002\u0002\u0002R\u0188\u0003\u0002",
    "\u0002\u0002T\u018a\u0003\u0002\u0002\u0002V\u018c\u0003\u0002\u0002",
    "\u0002X\u0193\u0003\u0002\u0002\u0002Z\u0195\u0003\u0002\u0002\u0002",
    "\\\u0197\u0003\u0002\u0002\u0002^\u0199\u0003\u0002\u0002\u0002`\u019b",
    "\u0003\u0002\u0002\u0002b\u019d\u0003\u0002\u0002\u0002d\u019f\u0003",
    "\u0002\u0002\u0002f\u01b0\u0003\u0002\u0002\u0002h\u01b3\u0003\u0002",
    "\u0002\u0002j\u01b9\u0003\u0002\u0002\u0002l\u01bb\u0003\u0002\u0002",
    "\u0002n\u01bd\u0003\u0002\u0002\u0002p\u01bf\u0003\u0002\u0002\u0002",
    "r\u01c1\u0003\u0002\u0002\u0002t\u01c3\u0003\u0002\u0002\u0002v\u01c5",
    "\u0003\u0002\u0002\u0002x\u01c7\u0003\u0002\u0002\u0002z\u01c9\u0003",
    "\u0002\u0002\u0002|\u01d7\u0003\u0002\u0002\u0002~\u01da\u0003\u0002",
    "\u0002\u0002\u0080\u01e4\u0003\u0002\u0002\u0002\u0082\u01ea\u0003\u0002",
    "\u0002\u0002\u0084\u01ec\u0003\u0002\u0002\u0002\u0086\u01ee\u0003\u0002",
    "\u0002\u0002\u0088\u01f0\u0003\u0002\u0002\u0002\u008a\u008c\u0005\b",
    "\u0005\u0002\u008b\u008a\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002",
    "\u0002\u0002\u008c\u0003\u0003\u0002\u0002\u0002\u008d\u0094\u0005\u0006",
    "\u0004\u0002\u008e\u0094\u0005\u000e\b\u0002\u008f\u0094\u0005\u001c",
    "\u000f\u0002\u0090\u0094\u0005\u0016\f\u0002\u0091\u0094\u0005\n\u0006",
    "\u0002\u0092\u0094\u0005\f\u0007\u0002\u0093\u008d\u0003\u0002\u0002",
    "\u0002\u0093\u008e\u0003\u0002\u0002\u0002\u0093\u008f\u0003\u0002\u0002",
    "\u0002\u0093\u0090\u0003\u0002\u0002\u0002\u0093\u0091\u0003\u0002\u0002",
    "\u0002\u0093\u0092\u0003\u0002\u0002\u0002\u0094\u0005\u0003\u0002\u0002",
    "\u0002\u0095\u0097\u0007 \u0002\u0002\u0096\u0098\u0005\b\u0005\u0002",
    "\u0097\u0096\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002",
    "\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009a\u0007!\u0002\u0002",
    "\u009a\u0007\u0003\u0002\u0002\u0002\u009b\u009d\u0005\u0004\u0003\u0002",
    "\u009c\u009b\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002",
    "\u009e\u009c\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002\u0002",
    "\u009f\t\u0003\u0002\u0002\u0002\u00a0\u00a1\u0005\u001e\u0010\u0002",
    "\u00a1\u00a2\u0007-\u0002\u0002\u00a2\u000b\u0003\u0002\u0002\u0002",
    "\u00a3\u00a4\u0007\u0019\u0002\u0002\u00a4\u00a5\u0005\u001e\u0010\u0002",
    "\u00a5\u00a6\u0007-\u0002\u0002\u00a6\r\u0003\u0002\u0002\u0002\u00a7",
    "\u00a9\u0005\u0012\n\u0002\u00a8\u00aa\u0005\u0014\u000b\u0002\u00a9",
    "\u00a8\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa",
    "\u00ab\u0003\u0002\u0002\u0002\u00ab\u00ac\u0005\u0010\t\u0002\u00ac",
    "\u00ad\u0007-\u0002\u0002\u00ad\u000f\u0003\u0002\u0002\u0002\u00ae",
    "\u00af\u0007+\u0002\u0002\u00af\u00b0\u0007\'\u0002\u0002\u00b0\u00b1",
    "\u0005\u001e\u0010\u0002\u00b1\u0011\u0003\u0002\u0002\u0002\u00b2\u00b3",
    "\u0007\u0014\u0002\u0002\u00b3\u0013\u0003\u0002\u0002\u0002\u00b4\u00b5",
    "\u0007\u0013\u0002\u0002\u00b5\u0015\u0003\u0002\u0002\u0002\u00b6\u00b7",
    "\u0007\u0015\u0002\u0002\u00b7\u00b8\u0005\u0018\r\u0002\u00b8\u00ba",
    "\u0005\u0004\u0003\u0002\u00b9\u00bb\u0005\u001a\u000e\u0002\u00ba\u00b9",
    "\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u0017",
    "\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007\"\u0002\u0002\u00bd\u00be",
    "\u0005\u001e\u0010\u0002\u00be\u00bf\u0007#\u0002\u0002\u00bf\u0019",
    "\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007\u0016\u0002\u0002\u00c1\u00c2",
    "\u0005\u0004\u0003\u0002\u00c2\u001b\u0003\u0002\u0002\u0002\u00c3\u00c5",
    "\u0007\u0018\u0002\u0002\u00c4\u00c3\u0003\u0002\u0002\u0002\u00c4\u00c5",
    "\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c7",
    "\u0007\u0017\u0002\u0002\u00c7\u00c8\u0007+\u0002\u0002\u00c8\u00c9",
    "\u0007\"\u0002\u0002\u00c9\u00ca\u0005~@\u0002\u00ca\u00cb\u0007#\u0002",
    "\u0002\u00cb\u00cc\u0007 \u0002\u0002\u00cc\u00cd\u0005\u0082B\u0002",
    "\u00cd\u00ce\u0007!\u0002\u0002\u00ce\u001d\u0003\u0002\u0002\u0002",
    "\u00cf\u00d0\b\u0010\u0001\u0002\u00d0\u00df\u0005\u0084C\u0002\u00d1",
    "\u00df\u00058\u001d\u0002\u00d2\u00df\u0005d3\u0002\u00d3\u00df\u0005",
    " \u0011\u0002\u00d4\u00d5\u0007)\u0002\u0002\u00d5\u00d7\u0005\u001e",
    "\u0010\u0002\u00d6\u00d8\u0005z>\u0002\u00d7\u00d6\u0003\u0002\u0002",
    "\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8\u00df\u0003\u0002\u0002",
    "\u0002\u00d9\u00df\u0005V,\u0002\u00da\u00db\u0005(\u0015\u0002\u00db",
    "\u00dc\u0005&\u0014\u0002\u00dc\u00dd\u0005.\u0018\u0002\u00dd\u00df",
    "\u0003\u0002\u0002\u0002\u00de\u00cf\u0003\u0002\u0002\u0002\u00de\u00d1",
    "\u0003\u0002\u0002\u0002\u00de\u00d2\u0003\u0002\u0002\u0002\u00de\u00d3",
    "\u0003\u0002\u0002\u0002\u00de\u00d4\u0003\u0002\u0002\u0002\u00de\u00d9",
    "\u0003\u0002\u0002\u0002\u00de\u00da\u0003\u0002\u0002\u0002\u00df\u011e",
    "\u0003\u0002\u0002\u0002\u00e0\u00e3\f\u000b\u0002\u0002\u00e1\u00e4",
    "\u0005\u0086D\u0002\u00e2\u00e4\u0005\u0088E\u0002\u00e3\u00e1\u0003",
    "\u0002\u0002\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003",
    "\u0002\u0002\u0002\u00e5\u00e6\u0005\u001e\u0010\f\u00e6\u011d\u0003",
    "\u0002\u0002\u0002\u00e7\u00ec\f\n\u0002\u0002\u00e8\u00ed\u0005r:\u0002",
    "\u00e9\u00ed\u0005t;\u0002\u00ea\u00ed\u0005v<\u0002\u00eb\u00ed\u0005",
    "x=\u0002\u00ec\u00e8\u0003\u0002\u0002\u0002\u00ec\u00e9\u0003\u0002",
    "\u0002\u0002\u00ec\u00ea\u0003\u0002\u0002\u0002\u00ec\u00eb\u0003\u0002",
    "\u0002\u0002\u00ed\u00ee\u0003\u0002\u0002\u0002\u00ee\u00ef\u0005\u001e",
    "\u0010\u000b\u00ef\u011d\u0003\u0002\u0002\u0002\u00f0\u00f5\f\t\u0002",
    "\u0002\u00f1\u00f6\u0005p9\u0002\u00f2\u00f6\u0005L\'\u0002\u00f3\u00f6",
    "\u0005N(\u0002\u00f4\u00f6\u0005P)\u0002\u00f5\u00f1\u0003\u0002\u0002",
    "\u0002\u00f5\u00f2\u0003\u0002\u0002\u0002\u00f5\u00f3\u0003\u0002\u0002",
    "\u0002\u00f5\u00f4\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002",
    "\u0002\u00f7\u00f8\u0005\u001e\u0010\n\u00f8\u011d\u0003\u0002\u0002",
    "\u0002\u00f9\u00fa\f\b\u0002\u0002\u00fa\u00fb\u0005H%\u0002\u00fb\u00fc",
    "\u0005\u001e\u0010\t\u00fc\u011d\u0003\u0002\u0002\u0002\u00fd\u00fe",
    "\f\u0007\u0002\u0002\u00fe\u00ff\u0005J&\u0002\u00ff\u0100\u0005\u001e",
    "\u0010\b\u0100\u011d\u0003\u0002\u0002\u0002\u0101\u0102\f\u0006\u0002",
    "\u0002\u0102\u0103\u0005R*\u0002\u0103\u0104\u0005\u001e\u0010\u0007",
    "\u0104\u011d\u0003\u0002\u0002\u0002\u0105\u0109\f\u0005\u0002\u0002",
    "\u0106\u010a\u0005B\"\u0002\u0107\u010a\u0005D#\u0002\u0108\u010a\u0005",
    "F$\u0002\u0109\u0106\u0003\u0002\u0002\u0002\u0109\u0107\u0003\u0002",
    "\u0002\u0002\u0109\u0108\u0003\u0002\u0002\u0002\u010a\u010b\u0003\u0002",
    "\u0002\u0002\u010b\u010c\u0005\u001e\u0010\u0006\u010c\u011d\u0003\u0002",
    "\u0002\u0002\u010d\u010e\f\u0004\u0002\u0002\u010e\u010f\u0005X-\u0002",
    "\u010f\u0110\u0005\u001e\u0010\u0005\u0110\u011d\u0003\u0002\u0002\u0002",
    "\u0111\u0112\f\u000f\u0002\u0002\u0112\u0113\u0005:\u001e\u0002\u0113",
    "\u0114\u00056\u001c\u0002\u0114\u0115\u0005<\u001f\u0002\u0115\u011d",
    "\u0003\u0002\u0002\u0002\u0116\u0117\f\r\u0002\u0002\u0117\u0118\u0005",
    "T+\u0002\u0118\u0119\u0005V,\u0002\u0119\u011d\u0003\u0002\u0002\u0002",
    "\u011a\u011b\f\f\u0002\u0002\u011b\u011d\u0005z>\u0002\u011c\u00e0\u0003",
    "\u0002\u0002\u0002\u011c\u00e7\u0003\u0002\u0002\u0002\u011c\u00f0\u0003",
    "\u0002\u0002\u0002\u011c\u00f9\u0003\u0002\u0002\u0002\u011c\u00fd\u0003",
    "\u0002\u0002\u0002\u011c\u0101\u0003\u0002\u0002\u0002\u011c\u0105\u0003",
    "\u0002\u0002\u0002\u011c\u010d\u0003\u0002\u0002\u0002\u011c\u0111\u0003",
    "\u0002\u0002\u0002\u011c\u0116\u0003\u0002\u0002\u0002\u011c\u011a\u0003",
    "\u0002\u0002\u0002\u011d\u0120\u0003\u0002\u0002\u0002\u011e\u011c\u0003",
    "\u0002\u0002\u0002\u011e\u011f\u0003\u0002\u0002\u0002\u011f\u001f\u0003",
    "\u0002\u0002\u0002\u0120\u011e\u0003\u0002\u0002\u0002\u0121\u0122\u0007",
    "\u001a\u0002\u0002\u0122\u0128\u0005$\u0013\u0002\u0123\u0124\u0005",
    "4\u001b\u0002\u0124\u0125\u0005$\u0013\u0002\u0125\u0127\u0003\u0002",
    "\u0002\u0002\u0126\u0123\u0003\u0002\u0002\u0002\u0127\u012a\u0003\u0002",
    "\u0002\u0002\u0128\u0126\u0003\u0002\u0002\u0002\u0128\u0129\u0003\u0002",
    "\u0002\u0002\u0129\u012c\u0003\u0002\u0002\u0002\u012a\u0128\u0003\u0002",
    "\u0002\u0002\u012b\u012d\u0005\"\u0012\u0002\u012c\u012b\u0003\u0002",
    "\u0002\u0002\u012c\u012d\u0003\u0002\u0002\u0002\u012d!\u0003\u0002",
    "\u0002\u0002\u012e\u012f\u0007*\u0002\u0002\u012f\u0130\u0005\u001e",
    "\u0010\u0002\u0130#\u0003\u0002\u0002\u0002\u0131\u0132\u0005\u001e",
    "\u0010\u0002\u0132%\u0003\u0002\u0002\u0002\u0133\u0134\u0007\u001f",
    "\u0002\u0002\u0134\'\u0003\u0002\u0002\u0002\u0135\u013b\u0007+\u0002",
    "\u0002\u0136\u0137\u0005*\u0016\u0002\u0137\u0138\u0005~@\u0002\u0138",
    "\u0139\u0005,\u0017\u0002\u0139\u013b\u0003\u0002\u0002\u0002\u013a",
    "\u0135\u0003\u0002\u0002\u0002\u013a\u0136\u0003\u0002\u0002\u0002\u013b",
    ")\u0003\u0002\u0002\u0002\u013c\u013d\u0007\"\u0002\u0002\u013d+\u0003",
    "\u0002\u0002\u0002\u013e\u013f\u0007#\u0002\u0002\u013f-\u0003\u0002",
    "\u0002\u0002\u0140\u0141\u0007 \u0002\u0002\u0141\u0142\u0005\u0082",
    "B\u0002\u0142\u0143\u0007!\u0002\u0002\u0143/\u0003\u0002\u0002\u0002",
    "\u0144\u0145\u0007 \u0002\u0002\u01451\u0003\u0002\u0002\u0002\u0146",
    "\u0147\u0007!\u0002\u0002\u01473\u0003\u0002\u0002\u0002\u0148\u0149",
    "\u0007,\u0002\u0002\u01495\u0003\u0002\u0002\u0002\u014a\u0150\u0005",
    "\u001e\u0010\u0002\u014b\u014c\u0005|?\u0002\u014c\u014d\u0005\u001e",
    "\u0010\u0002\u014d\u014f\u0003\u0002\u0002\u0002\u014e\u014b\u0003\u0002",
    "\u0002\u0002\u014f\u0152\u0003\u0002\u0002\u0002\u0150\u014e\u0003\u0002",
    "\u0002\u0002\u0150\u0151\u0003\u0002\u0002\u0002\u01517\u0003\u0002",
    "\u0002\u0002\u0152\u0150\u0003\u0002\u0002\u0002\u0153\u0157\u0005:",
    "\u001e\u0002\u0154\u0156\u0005@!\u0002\u0155\u0154\u0003\u0002\u0002",
    "\u0002\u0156\u0159\u0003\u0002\u0002\u0002\u0157\u0155\u0003\u0002\u0002",
    "\u0002\u0157\u0158\u0003\u0002\u0002\u0002\u0158\u015b\u0003\u0002\u0002",
    "\u0002\u0159\u0157\u0003\u0002\u0002\u0002\u015a\u015c\u0005> \u0002",
    "\u015b\u015a\u0003\u0002\u0002\u0002\u015b\u015c\u0003\u0002\u0002\u0002",
    "\u015c\u0160\u0003\u0002\u0002\u0002\u015d\u015f\u0005@!\u0002\u015e",
    "\u015d\u0003\u0002\u0002\u0002\u015f\u0162\u0003\u0002\u0002\u0002\u0160",
    "\u015e\u0003\u0002\u0002\u0002\u0160\u0161\u0003\u0002\u0002\u0002\u0161",
    "\u0163\u0003\u0002\u0002\u0002\u0162\u0160\u0003\u0002\u0002\u0002\u0163",
    "\u0164\u0005<\u001f\u0002\u01649\u0003\u0002\u0002\u0002\u0165\u0166",
    "\u0007$\u0002\u0002\u0166;\u0003\u0002\u0002\u0002\u0167\u0168\u0007",
    "%\u0002\u0002\u0168=\u0003\u0002\u0002\u0002\u0169\u0173\u0005\u001e",
    "\u0010\u0002\u016a\u016c\u0005@!\u0002\u016b\u016a\u0003\u0002\u0002",
    "\u0002\u016c\u016d\u0003\u0002\u0002\u0002\u016d\u016b\u0003\u0002\u0002",
    "\u0002\u016d\u016e\u0003\u0002\u0002\u0002\u016e\u016f\u0003\u0002\u0002",
    "\u0002\u016f\u0170\u0005\u001e\u0010\u0002\u0170\u0172\u0003\u0002\u0002",
    "\u0002\u0171\u016b\u0003\u0002\u0002\u0002\u0172\u0175\u0003\u0002\u0002",
    "\u0002\u0173\u0171\u0003\u0002\u0002\u0002\u0173\u0174\u0003\u0002\u0002",
    "\u0002\u0174?\u0003\u0002\u0002\u0002\u0175\u0173\u0003\u0002\u0002",
    "\u0002\u0176\u0177\u0007,\u0002\u0002\u0177A\u0003\u0002\u0002\u0002",
    "\u0178\u0179\u0007\u000b\u0002\u0002\u0179C\u0003\u0002\u0002\u0002",
    "\u017a\u017b\u0007\f\u0002\u0002\u017bE\u0003\u0002\u0002\u0002\u017c",
    "\u017d\u0007\r\u0002\u0002\u017dG\u0003\u0002\u0002\u0002\u017e\u017f",
    "\u0007\t\u0002\u0002\u017fI\u0003\u0002\u0002\u0002\u0180\u0181\u0007",
    "\n\u0002\u0002\u0181K\u0003\u0002\u0002\u0002\u0182\u0183\u0007\u0006",
    "\u0002\u0002\u0183M\u0003\u0002\u0002\u0002\u0184\u0185\u0007\u0007",
    "\u0002\u0002\u0185O\u0003\u0002\u0002\u0002\u0186\u0187\u0007\b\u0002",
    "\u0002\u0187Q\u0003\u0002\u0002\u0002\u0188\u0189\u0007\'\u0002\u0002",
    "\u0189S\u0003\u0002\u0002\u0002\u018a\u018b\u0007(\u0002\u0002\u018b",
    "U\u0003\u0002\u0002\u0002\u018c\u018d\u0007+\u0002\u0002\u018dW\u0003",
    "\u0002\u0002\u0002\u018e\u0194\u0005Z.\u0002\u018f\u0194\u0005\\/\u0002",
    "\u0190\u0194\u0005^0\u0002\u0191\u0194\u0005`1\u0002\u0192\u0194\u0005",
    "b2\u0002\u0193\u018e\u0003\u0002\u0002\u0002\u0193\u018f\u0003\u0002",
    "\u0002\u0002\u0193\u0190\u0003\u0002\u0002\u0002\u0193\u0191\u0003\u0002",
    "\u0002\u0002\u0193\u0192\u0003\u0002\u0002\u0002\u0194Y\u0003\u0002",
    "\u0002\u0002\u0195\u0196\u0007\u000e\u0002\u0002\u0196[\u0003\u0002",
    "\u0002\u0002\u0197\u0198\u0007\u000f\u0002\u0002\u0198]\u0003\u0002",
    "\u0002\u0002\u0199\u019a\u0007\u0010\u0002\u0002\u019a_\u0003\u0002",
    "\u0002\u0002\u019b\u019c\u0007\u0011\u0002\u0002\u019ca\u0003\u0002",
    "\u0002\u0002\u019d\u019e\u0007\u0012\u0002\u0002\u019ec\u0003\u0002",
    "\u0002\u0002\u019f\u01a9\u0007 \u0002\u0002\u01a0\u01a6\u0005h5\u0002",
    "\u01a1\u01a2\u0005f4\u0002\u01a2\u01a3\u0005h5\u0002\u01a3\u01a5\u0003",
    "\u0002\u0002\u0002\u01a4\u01a1\u0003\u0002\u0002\u0002\u01a5\u01a8\u0003",
    "\u0002\u0002\u0002\u01a6\u01a4\u0003\u0002\u0002\u0002\u01a6\u01a7\u0003",
    "\u0002\u0002\u0002\u01a7\u01aa\u0003\u0002\u0002\u0002\u01a8\u01a6\u0003",
    "\u0002\u0002\u0002\u01a9\u01a0\u0003\u0002\u0002\u0002\u01a9\u01aa\u0003",
    "\u0002\u0002\u0002\u01aa\u01ac\u0003\u0002\u0002\u0002\u01ab\u01ad\u0007",
    ",\u0002\u0002\u01ac\u01ab\u0003\u0002\u0002\u0002\u01ac\u01ad\u0003",
    "\u0002\u0002\u0002\u01ad\u01ae\u0003\u0002\u0002\u0002\u01ae\u01af\u0007",
    "!\u0002\u0002\u01afe\u0003\u0002\u0002\u0002\u01b0\u01b1\u0007,\u0002",
    "\u0002\u01b1g\u0003\u0002\u0002\u0002\u01b2\u01b4\u0005j6\u0002\u01b3",
    "\u01b2\u0003\u0002\u0002\u0002\u01b3\u01b4\u0003\u0002\u0002\u0002\u01b4",
    "\u01b5\u0003\u0002\u0002\u0002\u01b5\u01b6\u0005n8\u0002\u01b6\u01b7",
    "\u0005l7\u0002\u01b7\u01b8\u0005\u001e\u0010\u0002\u01b8i\u0003\u0002",
    "\u0002\u0002\u01b9\u01ba\u0007&\u0002\u0002\u01bak\u0003\u0002\u0002",
    "\u0002\u01bb\u01bc\u0007.\u0002\u0002\u01bcm\u0003\u0002\u0002\u0002",
    "\u01bd\u01be\u0007+\u0002\u0002\u01beo\u0003\u0002\u0002\u0002\u01bf",
    "\u01c0\u0007\u0005\u0002\u0002\u01c0q\u0003\u0002\u0002\u0002\u01c1",
    "\u01c2\u0007\u001d\u0002\u0002\u01c2s\u0003\u0002\u0002\u0002\u01c3",
    "\u01c4\u0007\u001e\u0002\u0002\u01c4u\u0003\u0002\u0002\u0002\u01c5",
    "\u01c6\u0007\u001b\u0002\u0002\u01c6w\u0003\u0002\u0002\u0002\u01c7",
    "\u01c8\u0007\u001c\u0002\u0002\u01c8y\u0003\u0002\u0002\u0002\u01c9",
    "\u01d3\u0007\"\u0002\u0002\u01ca\u01d0\u0005\u001e\u0010\u0002\u01cb",
    "\u01cc\u0005|?\u0002\u01cc\u01cd\u0005\u001e\u0010\u0002\u01cd\u01cf",
    "\u0003\u0002\u0002\u0002\u01ce\u01cb\u0003\u0002\u0002\u0002\u01cf\u01d2",
    "\u0003\u0002\u0002\u0002\u01d0\u01ce\u0003\u0002\u0002\u0002\u01d0\u01d1",
    "\u0003\u0002\u0002\u0002\u01d1\u01d4\u0003\u0002\u0002\u0002\u01d2\u01d0",
    "\u0003\u0002\u0002\u0002\u01d3\u01ca\u0003\u0002\u0002\u0002\u01d3\u01d4",
    "\u0003\u0002\u0002\u0002\u01d4\u01d5\u0003\u0002\u0002\u0002\u01d5\u01d6",
    "\u0007#\u0002\u0002\u01d6{\u0003\u0002\u0002\u0002\u01d7\u01d8\u0007",
    ",\u0002\u0002\u01d8}\u0003\u0002\u0002\u0002\u01d9\u01db\u0005\u0080",
    "A\u0002\u01da\u01d9\u0003\u0002\u0002\u0002\u01da\u01db\u0003\u0002",
    "\u0002\u0002\u01db\u01e1\u0003\u0002\u0002\u0002\u01dc\u01dd\u0005|",
    "?\u0002\u01dd\u01de\u0005\u0080A\u0002\u01de\u01e0\u0003\u0002\u0002",
    "\u0002\u01df\u01dc\u0003\u0002\u0002\u0002\u01e0\u01e3\u0003\u0002\u0002",
    "\u0002\u01e1\u01df\u0003\u0002\u0002\u0002\u01e1\u01e2\u0003\u0002\u0002",
    "\u0002\u01e2\u007f\u0003\u0002\u0002\u0002\u01e3\u01e1\u0003\u0002\u0002",
    "\u0002\u01e4\u01e7\u0007+\u0002\u0002\u01e5\u01e6\u0007\'\u0002\u0002",
    "\u01e6\u01e8\u0005\u001e\u0010\u0002\u01e7\u01e5\u0003\u0002\u0002\u0002",
    "\u01e7\u01e8\u0003\u0002\u0002\u0002\u01e8\u0081\u0003\u0002\u0002\u0002",
    "\u01e9\u01eb\u0005\b\u0005\u0002\u01ea\u01e9\u0003\u0002\u0002\u0002",
    "\u01ea\u01eb\u0003\u0002\u0002\u0002\u01eb\u0083\u0003\u0002\u0002\u0002",
    "\u01ec\u01ed\t\u0002\u0002\u0002\u01ed\u0085\u0003\u0002\u0002\u0002",
    "\u01ee\u01ef\u0007\u0003\u0002\u0002\u01ef\u0087\u0003\u0002\u0002\u0002",
    "\u01f0\u01f1\u0007\u0004\u0002\u0002\u01f1\u0089\u0003\u0002\u0002\u0002",
    "%\u008b\u0093\u0097\u009e\u00a9\u00ba\u00c4\u00d7\u00de\u00e3\u00ec",
    "\u00f5\u0109\u011c\u011e\u0128\u012c\u013a\u0150\u0157\u015b\u0160\u016d",
    "\u0173\u0193\u01a6\u01a9\u01ac\u01b3\u01d0\u01d3\u01da\u01e1\u01e7\u01ea"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'+'", "'-'", "'=='", "'!='", "'==='", "'!=='", 
                     "'&&'", "'||'", "'*'", "'/'", "'%'", "'*='", "'/='", 
                     "'%='", "'+='", "'-='", "'mut'", "'let'", "'if'", "'else'", 
                     "'func'", "'impure'", "'return'", "'array'", "'<='", 
                     "'>='", "'<'", "'>'", "'=>'", "'{'", "'}'", "'('", 
                     "')'", "'['", "']'", "'!'", "'='", "'.'", "'new'", 
                     "'default'", null, "','", "';'", "':'", "'true'" ];

var symbolicNames = [ null, "Add", "Sub", "Equal", "NotEqual", "EqualStrict", 
                      "NotEqualStrict", "LogicalAnd", "LogicalOr", "Multiply", 
                      "Divide", "Modulo", "MultiplyAssign", "DivideAssign", 
                      "ModuloAssign", "AddAssign", "SubAssign", "Mut", "Let", 
                      "If", "Else", "Function", "Impure", "Return", "Array", 
                      "LessOrEql", "GreaterOrEql", "Less", "Greater", "ArrowFunctionArrow", 
                      "BlockOpen", "BlockClose", "ParameterListOpen", "ParameterListClose", 
                      "ArrayLiteralOpen", "ArrayLiteralClose", "FreezeMarker", 
                      "Assign", "MemberDot", "New", "Default", "Identifier", 
                      "ParameterSeparator", "Terminator", "PropertyAssignSymbol", 
                      "Boolean", "String", "Number", "Whitespace", "MultiLineComment", 
                      "SingleLineComment" ];

var ruleNames =  [ "source", "statement", "block", "statements", "expressionStatement", 
                   "returnStatement", "variableStatement", "variableDeclaration", 
                   "varModifier", "varMutability", "ifStatement", "ifConditionList", 
                   "elseStatement", "functionDeclaration", "singleExpression", 
                   "arrayInitializer", "defaultArrayInitValue", "arrayInitializerArg", 
                   "arrowFunctionArrow", "arrowFunctionParameters", "parameterListOpen", 
                   "parameterListClose", "arrowFunctionBody", "openBlock", 
                   "closeBlock", "aiParameterSeparator", "expressionSequence", 
                   "arrayLiteral", "arrayLiteralOpen", "arrayLiteralClose", 
                   "elementList", "elementListSeparator", "multiply", "divide", 
                   "modulo", "logicalAnd", "logicalOr", "notEqual", "equalStrict", 
                   "notEqualStrict", "assign", "memberDot", "identifierName", 
                   "assignmentOperator", "multiplyAssign", "divideAssign", 
                   "moduloAssign", "addAssign", "subAssign", "objectLiteral", 
                   "propertySeparator", "propertyAssignment", "freezeMarker", 
                   "propertyAssignSymbol", "propertyName", "equal", "less", 
                   "greater", "lessOrEql", "greaterOrEql", "arguments", 
                   "parameterSeparator", "formalParameterList", "formalParameterArg", 
                   "functionBody", "literal", "add", "sub" ];

function FlightParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FlightParser.prototype = Object.create(antlr4.Parser.prototype);
FlightParser.prototype.constructor = FlightParser;

Object.defineProperty(FlightParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FlightParser.EOF = antlr4.Token.EOF;
FlightParser.Add = 1;
FlightParser.Sub = 2;
FlightParser.Equal = 3;
FlightParser.NotEqual = 4;
FlightParser.EqualStrict = 5;
FlightParser.NotEqualStrict = 6;
FlightParser.LogicalAnd = 7;
FlightParser.LogicalOr = 8;
FlightParser.Multiply = 9;
FlightParser.Divide = 10;
FlightParser.Modulo = 11;
FlightParser.MultiplyAssign = 12;
FlightParser.DivideAssign = 13;
FlightParser.ModuloAssign = 14;
FlightParser.AddAssign = 15;
FlightParser.SubAssign = 16;
FlightParser.Mut = 17;
FlightParser.Let = 18;
FlightParser.If = 19;
FlightParser.Else = 20;
FlightParser.Function = 21;
FlightParser.Impure = 22;
FlightParser.Return = 23;
FlightParser.Array = 24;
FlightParser.LessOrEql = 25;
FlightParser.GreaterOrEql = 26;
FlightParser.Less = 27;
FlightParser.Greater = 28;
FlightParser.ArrowFunctionArrow = 29;
FlightParser.BlockOpen = 30;
FlightParser.BlockClose = 31;
FlightParser.ParameterListOpen = 32;
FlightParser.ParameterListClose = 33;
FlightParser.ArrayLiteralOpen = 34;
FlightParser.ArrayLiteralClose = 35;
FlightParser.FreezeMarker = 36;
FlightParser.Assign = 37;
FlightParser.MemberDot = 38;
FlightParser.New = 39;
FlightParser.Default = 40;
FlightParser.Identifier = 41;
FlightParser.ParameterSeparator = 42;
FlightParser.Terminator = 43;
FlightParser.PropertyAssignSymbol = 44;
FlightParser.Boolean = 45;
FlightParser.String = 46;
FlightParser.Number = 47;
FlightParser.Whitespace = 48;
FlightParser.MultiLineComment = 49;
FlightParser.SingleLineComment = 50;

FlightParser.RULE_source = 0;
FlightParser.RULE_statement = 1;
FlightParser.RULE_block = 2;
FlightParser.RULE_statements = 3;
FlightParser.RULE_expressionStatement = 4;
FlightParser.RULE_returnStatement = 5;
FlightParser.RULE_variableStatement = 6;
FlightParser.RULE_variableDeclaration = 7;
FlightParser.RULE_varModifier = 8;
FlightParser.RULE_varMutability = 9;
FlightParser.RULE_ifStatement = 10;
FlightParser.RULE_ifConditionList = 11;
FlightParser.RULE_elseStatement = 12;
FlightParser.RULE_functionDeclaration = 13;
FlightParser.RULE_singleExpression = 14;
FlightParser.RULE_arrayInitializer = 15;
FlightParser.RULE_defaultArrayInitValue = 16;
FlightParser.RULE_arrayInitializerArg = 17;
FlightParser.RULE_arrowFunctionArrow = 18;
FlightParser.RULE_arrowFunctionParameters = 19;
FlightParser.RULE_parameterListOpen = 20;
FlightParser.RULE_parameterListClose = 21;
FlightParser.RULE_arrowFunctionBody = 22;
FlightParser.RULE_openBlock = 23;
FlightParser.RULE_closeBlock = 24;
FlightParser.RULE_aiParameterSeparator = 25;
FlightParser.RULE_expressionSequence = 26;
FlightParser.RULE_arrayLiteral = 27;
FlightParser.RULE_arrayLiteralOpen = 28;
FlightParser.RULE_arrayLiteralClose = 29;
FlightParser.RULE_elementList = 30;
FlightParser.RULE_elementListSeparator = 31;
FlightParser.RULE_multiply = 32;
FlightParser.RULE_divide = 33;
FlightParser.RULE_modulo = 34;
FlightParser.RULE_logicalAnd = 35;
FlightParser.RULE_logicalOr = 36;
FlightParser.RULE_notEqual = 37;
FlightParser.RULE_equalStrict = 38;
FlightParser.RULE_notEqualStrict = 39;
FlightParser.RULE_assign = 40;
FlightParser.RULE_memberDot = 41;
FlightParser.RULE_identifierName = 42;
FlightParser.RULE_assignmentOperator = 43;
FlightParser.RULE_multiplyAssign = 44;
FlightParser.RULE_divideAssign = 45;
FlightParser.RULE_moduloAssign = 46;
FlightParser.RULE_addAssign = 47;
FlightParser.RULE_subAssign = 48;
FlightParser.RULE_objectLiteral = 49;
FlightParser.RULE_propertySeparator = 50;
FlightParser.RULE_propertyAssignment = 51;
FlightParser.RULE_freezeMarker = 52;
FlightParser.RULE_propertyAssignSymbol = 53;
FlightParser.RULE_propertyName = 54;
FlightParser.RULE_equal = 55;
FlightParser.RULE_less = 56;
FlightParser.RULE_greater = 57;
FlightParser.RULE_lessOrEql = 58;
FlightParser.RULE_greaterOrEql = 59;
FlightParser.RULE_arguments = 60;
FlightParser.RULE_parameterSeparator = 61;
FlightParser.RULE_formalParameterList = 62;
FlightParser.RULE_formalParameterArg = 63;
FlightParser.RULE_functionBody = 64;
FlightParser.RULE_literal = 65;
FlightParser.RULE_add = 66;
FlightParser.RULE_sub = 67;

function SourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_source;
    return this;
}

SourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceContext.prototype.constructor = SourceContext;

SourceContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

SourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterSource(this);
	}
};

SourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitSource(this);
	}
};




FlightParser.SourceContext = SourceContext;

FlightParser.prototype.source = function() {

    var localctx = new SourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FlightParser.RULE_source);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (FlightParser.Let - 18)) | (1 << (FlightParser.If - 18)) | (1 << (FlightParser.Function - 18)) | (1 << (FlightParser.Impure - 18)) | (1 << (FlightParser.Return - 18)) | (1 << (FlightParser.Array - 18)) | (1 << (FlightParser.BlockOpen - 18)) | (1 << (FlightParser.ParameterListOpen - 18)) | (1 << (FlightParser.ArrayLiteralOpen - 18)) | (1 << (FlightParser.New - 18)) | (1 << (FlightParser.Identifier - 18)) | (1 << (FlightParser.Boolean - 18)) | (1 << (FlightParser.String - 18)) | (1 << (FlightParser.Number - 18)))) !== 0)) {
            this.state = 136;
            this.statements();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

StatementContext.prototype.variableStatement = function() {
    return this.getTypedRuleContext(VariableStatementContext,0);
};

StatementContext.prototype.functionDeclaration = function() {
    return this.getTypedRuleContext(FunctionDeclarationContext,0);
};

StatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

StatementContext.prototype.expressionStatement = function() {
    return this.getTypedRuleContext(ExpressionStatementContext,0);
};

StatementContext.prototype.returnStatement = function() {
    return this.getTypedRuleContext(ReturnStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitStatement(this);
	}
};




FlightParser.StatementContext = StatementContext;

FlightParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FlightParser.RULE_statement);
    try {
        this.state = 145;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 139;
            this.block();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 140;
            this.variableStatement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 141;
            this.functionDeclaration();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 142;
            this.ifStatement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 143;
            this.expressionStatement();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 144;
            this.returnStatement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.BlockOpen = function() {
    return this.getToken(FlightParser.BlockOpen, 0);
};

BlockContext.prototype.BlockClose = function() {
    return this.getToken(FlightParser.BlockClose, 0);
};

BlockContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitBlock(this);
	}
};




FlightParser.BlockContext = BlockContext;

FlightParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FlightParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.match(FlightParser.BlockOpen);
        this.state = 149;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (FlightParser.Let - 18)) | (1 << (FlightParser.If - 18)) | (1 << (FlightParser.Function - 18)) | (1 << (FlightParser.Impure - 18)) | (1 << (FlightParser.Return - 18)) | (1 << (FlightParser.Array - 18)) | (1 << (FlightParser.BlockOpen - 18)) | (1 << (FlightParser.ParameterListOpen - 18)) | (1 << (FlightParser.ArrayLiteralOpen - 18)) | (1 << (FlightParser.New - 18)) | (1 << (FlightParser.Identifier - 18)) | (1 << (FlightParser.Boolean - 18)) | (1 << (FlightParser.String - 18)) | (1 << (FlightParser.Number - 18)))) !== 0)) {
            this.state = 148;
            this.statements();
        }

        this.state = 151;
        this.match(FlightParser.BlockClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_statements;
    return this;
}

StatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementsContext.prototype.constructor = StatementsContext;

StatementsContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterStatements(this);
	}
};

StatementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitStatements(this);
	}
};




FlightParser.StatementsContext = StatementsContext;

FlightParser.prototype.statements = function() {

    var localctx = new StatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FlightParser.RULE_statements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 153;
            this.statement();
            this.state = 156; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (FlightParser.Let - 18)) | (1 << (FlightParser.If - 18)) | (1 << (FlightParser.Function - 18)) | (1 << (FlightParser.Impure - 18)) | (1 << (FlightParser.Return - 18)) | (1 << (FlightParser.Array - 18)) | (1 << (FlightParser.BlockOpen - 18)) | (1 << (FlightParser.ParameterListOpen - 18)) | (1 << (FlightParser.ArrayLiteralOpen - 18)) | (1 << (FlightParser.New - 18)) | (1 << (FlightParser.Identifier - 18)) | (1 << (FlightParser.Boolean - 18)) | (1 << (FlightParser.String - 18)) | (1 << (FlightParser.Number - 18)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_expressionStatement;
    return this;
}

ExpressionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionStatementContext.prototype.constructor = ExpressionStatementContext;

ExpressionStatementContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ExpressionStatementContext.prototype.Terminator = function() {
    return this.getToken(FlightParser.Terminator, 0);
};

ExpressionStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterExpressionStatement(this);
	}
};

ExpressionStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitExpressionStatement(this);
	}
};




FlightParser.ExpressionStatementContext = ExpressionStatementContext;

FlightParser.prototype.expressionStatement = function() {

    var localctx = new ExpressionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FlightParser.RULE_expressionStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.singleExpression(0);
        this.state = 159;
        this.match(FlightParser.Terminator);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReturnStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_returnStatement;
    return this;
}

ReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ReturnStatementContext.prototype.Return = function() {
    return this.getToken(FlightParser.Return, 0);
};

ReturnStatementContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ReturnStatementContext.prototype.Terminator = function() {
    return this.getToken(FlightParser.Terminator, 0);
};

ReturnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterReturnStatement(this);
	}
};

ReturnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitReturnStatement(this);
	}
};




FlightParser.ReturnStatementContext = ReturnStatementContext;

FlightParser.prototype.returnStatement = function() {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FlightParser.RULE_returnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.match(FlightParser.Return);
        this.state = 162;
        this.singleExpression(0);
        this.state = 163;
        this.match(FlightParser.Terminator);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_variableStatement;
    return this;
}

VariableStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableStatementContext.prototype.constructor = VariableStatementContext;

VariableStatementContext.prototype.varModifier = function() {
    return this.getTypedRuleContext(VarModifierContext,0);
};

VariableStatementContext.prototype.variableDeclaration = function() {
    return this.getTypedRuleContext(VariableDeclarationContext,0);
};

VariableStatementContext.prototype.Terminator = function() {
    return this.getToken(FlightParser.Terminator, 0);
};

VariableStatementContext.prototype.varMutability = function() {
    return this.getTypedRuleContext(VarMutabilityContext,0);
};

VariableStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterVariableStatement(this);
	}
};

VariableStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitVariableStatement(this);
	}
};




FlightParser.VariableStatementContext = VariableStatementContext;

FlightParser.prototype.variableStatement = function() {

    var localctx = new VariableStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FlightParser.RULE_variableStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.varModifier();
        this.state = 167;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlightParser.Mut) {
            this.state = 166;
            this.varMutability();
        }

        this.state = 169;
        this.variableDeclaration();
        this.state = 170;
        this.match(FlightParser.Terminator);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_variableDeclaration;
    return this;
}

VariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationContext.prototype.constructor = VariableDeclarationContext;

VariableDeclarationContext.prototype.Identifier = function() {
    return this.getToken(FlightParser.Identifier, 0);
};

VariableDeclarationContext.prototype.Assign = function() {
    return this.getToken(FlightParser.Assign, 0);
};

VariableDeclarationContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

VariableDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterVariableDeclaration(this);
	}
};

VariableDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitVariableDeclaration(this);
	}
};




FlightParser.VariableDeclarationContext = VariableDeclarationContext;

FlightParser.prototype.variableDeclaration = function() {

    var localctx = new VariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FlightParser.RULE_variableDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(FlightParser.Identifier);
        this.state = 173;
        this.match(FlightParser.Assign);
        this.state = 174;
        this.singleExpression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_varModifier;
    return this;
}

VarModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarModifierContext.prototype.constructor = VarModifierContext;

VarModifierContext.prototype.Let = function() {
    return this.getToken(FlightParser.Let, 0);
};

VarModifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterVarModifier(this);
	}
};

VarModifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitVarModifier(this);
	}
};




FlightParser.VarModifierContext = VarModifierContext;

FlightParser.prototype.varModifier = function() {

    var localctx = new VarModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FlightParser.RULE_varModifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.match(FlightParser.Let);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarMutabilityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_varMutability;
    return this;
}

VarMutabilityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarMutabilityContext.prototype.constructor = VarMutabilityContext;

VarMutabilityContext.prototype.Mut = function() {
    return this.getToken(FlightParser.Mut, 0);
};

VarMutabilityContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterVarMutability(this);
	}
};

VarMutabilityContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitVarMutability(this);
	}
};




FlightParser.VarMutabilityContext = VarMutabilityContext;

FlightParser.prototype.varMutability = function() {

    var localctx = new VarMutabilityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FlightParser.RULE_varMutability);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        this.match(FlightParser.Mut);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.If = function() {
    return this.getToken(FlightParser.If, 0);
};

IfStatementContext.prototype.ifConditionList = function() {
    return this.getTypedRuleContext(IfConditionListContext,0);
};

IfStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

IfStatementContext.prototype.elseStatement = function() {
    return this.getTypedRuleContext(ElseStatementContext,0);
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitIfStatement(this);
	}
};




FlightParser.IfStatementContext = IfStatementContext;

FlightParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, FlightParser.RULE_ifStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this.match(FlightParser.If);
        this.state = 181;
        this.ifConditionList();
        this.state = 182;
        this.statement();
        this.state = 184;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        if(la_===1) {
            this.state = 183;
            this.elseStatement();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfConditionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_ifConditionList;
    return this;
}

IfConditionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfConditionListContext.prototype.constructor = IfConditionListContext;

IfConditionListContext.prototype.ParameterListOpen = function() {
    return this.getToken(FlightParser.ParameterListOpen, 0);
};

IfConditionListContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

IfConditionListContext.prototype.ParameterListClose = function() {
    return this.getToken(FlightParser.ParameterListClose, 0);
};

IfConditionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterIfConditionList(this);
	}
};

IfConditionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitIfConditionList(this);
	}
};




FlightParser.IfConditionListContext = IfConditionListContext;

FlightParser.prototype.ifConditionList = function() {

    var localctx = new IfConditionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, FlightParser.RULE_ifConditionList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(FlightParser.ParameterListOpen);
        this.state = 187;
        this.singleExpression(0);
        this.state = 188;
        this.match(FlightParser.ParameterListClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_elseStatement;
    return this;
}

ElseStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseStatementContext.prototype.constructor = ElseStatementContext;

ElseStatementContext.prototype.Else = function() {
    return this.getToken(FlightParser.Else, 0);
};

ElseStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

ElseStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterElseStatement(this);
	}
};

ElseStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitElseStatement(this);
	}
};




FlightParser.ElseStatementContext = ElseStatementContext;

FlightParser.prototype.elseStatement = function() {

    var localctx = new ElseStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, FlightParser.RULE_elseStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.match(FlightParser.Else);
        this.state = 191;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_functionDeclaration;
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.Function = function() {
    return this.getToken(FlightParser.Function, 0);
};

FunctionDeclarationContext.prototype.Identifier = function() {
    return this.getToken(FlightParser.Identifier, 0);
};

FunctionDeclarationContext.prototype.ParameterListOpen = function() {
    return this.getToken(FlightParser.ParameterListOpen, 0);
};

FunctionDeclarationContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
};

FunctionDeclarationContext.prototype.ParameterListClose = function() {
    return this.getToken(FlightParser.ParameterListClose, 0);
};

FunctionDeclarationContext.prototype.BlockOpen = function() {
    return this.getToken(FlightParser.BlockOpen, 0);
};

FunctionDeclarationContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionDeclarationContext.prototype.BlockClose = function() {
    return this.getToken(FlightParser.BlockClose, 0);
};

FunctionDeclarationContext.prototype.Impure = function() {
    return this.getToken(FlightParser.Impure, 0);
};

FunctionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitFunctionDeclaration(this);
	}
};




FlightParser.FunctionDeclarationContext = FunctionDeclarationContext;

FlightParser.prototype.functionDeclaration = function() {

    var localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, FlightParser.RULE_functionDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlightParser.Impure) {
            this.state = 193;
            this.match(FlightParser.Impure);
        }

        this.state = 196;
        this.match(FlightParser.Function);
        this.state = 197;
        this.match(FlightParser.Identifier);
        this.state = 198;
        this.match(FlightParser.ParameterListOpen);
        this.state = 199;
        this.formalParameterList();
        this.state = 200;
        this.match(FlightParser.ParameterListClose);
        this.state = 201;
        this.match(FlightParser.BlockOpen);
        this.state = 202;
        this.functionBody();
        this.state = 203;
        this.match(FlightParser.BlockClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SingleExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_singleExpression;
    return this;
}

SingleExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleExpressionContext.prototype.constructor = SingleExpressionContext;


 
SingleExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function AdditiveExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditiveExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
AdditiveExpressionContext.prototype.constructor = AdditiveExpressionContext;

FlightParser.AdditiveExpressionContext = AdditiveExpressionContext;

AdditiveExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

AdditiveExpressionContext.prototype.add = function() {
    return this.getTypedRuleContext(AddContext,0);
};

AdditiveExpressionContext.prototype.sub = function() {
    return this.getTypedRuleContext(SubContext,0);
};
AdditiveExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterAdditiveExpression(this);
	}
};

AdditiveExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitAdditiveExpression(this);
	}
};


function RelationalExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelationalExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
RelationalExpressionContext.prototype.constructor = RelationalExpressionContext;

FlightParser.RelationalExpressionContext = RelationalExpressionContext;

RelationalExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

RelationalExpressionContext.prototype.less = function() {
    return this.getTypedRuleContext(LessContext,0);
};

RelationalExpressionContext.prototype.greater = function() {
    return this.getTypedRuleContext(GreaterContext,0);
};

RelationalExpressionContext.prototype.lessOrEql = function() {
    return this.getTypedRuleContext(LessOrEqlContext,0);
};

RelationalExpressionContext.prototype.greaterOrEql = function() {
    return this.getTypedRuleContext(GreaterOrEqlContext,0);
};
RelationalExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterRelationalExpression(this);
	}
};

RelationalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitRelationalExpression(this);
	}
};


function LogicalAndExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalAndExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
LogicalAndExpressionContext.prototype.constructor = LogicalAndExpressionContext;

FlightParser.LogicalAndExpressionContext = LogicalAndExpressionContext;

LogicalAndExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

LogicalAndExpressionContext.prototype.logicalAnd = function() {
    return this.getTypedRuleContext(LogicalAndContext,0);
};
LogicalAndExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterLogicalAndExpression(this);
	}
};

LogicalAndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitLogicalAndExpression(this);
	}
};


function ObjectLiteralExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObjectLiteralExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ObjectLiteralExpressionContext.prototype.constructor = ObjectLiteralExpressionContext;

FlightParser.ObjectLiteralExpressionContext = ObjectLiteralExpressionContext;

ObjectLiteralExpressionContext.prototype.objectLiteral = function() {
    return this.getTypedRuleContext(ObjectLiteralContext,0);
};
ObjectLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterObjectLiteralExpression(this);
	}
};

ObjectLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitObjectLiteralExpression(this);
	}
};


function NewExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
NewExpressionContext.prototype.constructor = NewExpressionContext;

FlightParser.NewExpressionContext = NewExpressionContext;

NewExpressionContext.prototype.New = function() {
    return this.getToken(FlightParser.New, 0);
};

NewExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

NewExpressionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
NewExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterNewExpression(this);
	}
};

NewExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitNewExpression(this);
	}
};


function LiteralExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LiteralExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
LiteralExpressionContext.prototype.constructor = LiteralExpressionContext;

FlightParser.LiteralExpressionContext = LiteralExpressionContext;

LiteralExpressionContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};
LiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterLiteralExpression(this);
	}
};

LiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitLiteralExpression(this);
	}
};


function LogicalOrExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalOrExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
LogicalOrExpressionContext.prototype.constructor = LogicalOrExpressionContext;

FlightParser.LogicalOrExpressionContext = LogicalOrExpressionContext;

LogicalOrExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

LogicalOrExpressionContext.prototype.logicalOr = function() {
    return this.getTypedRuleContext(LogicalOrContext,0);
};
LogicalOrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterLogicalOrExpression(this);
	}
};

LogicalOrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitLogicalOrExpression(this);
	}
};


function ArrayLiteralExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayLiteralExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ArrayLiteralExpressionContext.prototype.constructor = ArrayLiteralExpressionContext;

FlightParser.ArrayLiteralExpressionContext = ArrayLiteralExpressionContext;

ArrayLiteralExpressionContext.prototype.arrayLiteral = function() {
    return this.getTypedRuleContext(ArrayLiteralContext,0);
};
ArrayLiteralExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterArrayLiteralExpression(this);
	}
};

ArrayLiteralExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitArrayLiteralExpression(this);
	}
};


function MemberDotExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberDotExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
MemberDotExpressionContext.prototype.constructor = MemberDotExpressionContext;

FlightParser.MemberDotExpressionContext = MemberDotExpressionContext;

MemberDotExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

MemberDotExpressionContext.prototype.memberDot = function() {
    return this.getTypedRuleContext(MemberDotContext,0);
};

MemberDotExpressionContext.prototype.identifierName = function() {
    return this.getTypedRuleContext(IdentifierNameContext,0);
};
MemberDotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterMemberDotExpression(this);
	}
};

MemberDotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitMemberDotExpression(this);
	}
};


function MemberIndexExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberIndexExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
MemberIndexExpressionContext.prototype.constructor = MemberIndexExpressionContext;

FlightParser.MemberIndexExpressionContext = MemberIndexExpressionContext;

MemberIndexExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

MemberIndexExpressionContext.prototype.arrayLiteralOpen = function() {
    return this.getTypedRuleContext(ArrayLiteralOpenContext,0);
};

MemberIndexExpressionContext.prototype.expressionSequence = function() {
    return this.getTypedRuleContext(ExpressionSequenceContext,0);
};

MemberIndexExpressionContext.prototype.arrayLiteralClose = function() {
    return this.getTypedRuleContext(ArrayLiteralCloseContext,0);
};
MemberIndexExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterMemberIndexExpression(this);
	}
};

MemberIndexExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitMemberIndexExpression(this);
	}
};


function ArrayInitializerExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayInitializerExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ArrayInitializerExpressionContext.prototype.constructor = ArrayInitializerExpressionContext;

FlightParser.ArrayInitializerExpressionContext = ArrayInitializerExpressionContext;

ArrayInitializerExpressionContext.prototype.arrayInitializer = function() {
    return this.getTypedRuleContext(ArrayInitializerContext,0);
};
ArrayInitializerExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterArrayInitializerExpression(this);
	}
};

ArrayInitializerExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitArrayInitializerExpression(this);
	}
};


function IdentifierExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
IdentifierExpressionContext.prototype.constructor = IdentifierExpressionContext;

FlightParser.IdentifierExpressionContext = IdentifierExpressionContext;

IdentifierExpressionContext.prototype.identifierName = function() {
    return this.getTypedRuleContext(IdentifierNameContext,0);
};
IdentifierExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterIdentifierExpression(this);
	}
};

IdentifierExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitIdentifierExpression(this);
	}
};


function ArgumentsExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArgumentsExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ArgumentsExpressionContext.prototype.constructor = ArgumentsExpressionContext;

FlightParser.ArgumentsExpressionContext = ArgumentsExpressionContext;

ArgumentsExpressionContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ArgumentsExpressionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
ArgumentsExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterArgumentsExpression(this);
	}
};

ArgumentsExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitArgumentsExpression(this);
	}
};


function AssignmentExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
AssignmentExpressionContext.prototype.constructor = AssignmentExpressionContext;

FlightParser.AssignmentExpressionContext = AssignmentExpressionContext;

AssignmentExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

AssignmentExpressionContext.prototype.assign = function() {
    return this.getTypedRuleContext(AssignContext,0);
};
AssignmentExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterAssignmentExpression(this);
	}
};

AssignmentExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitAssignmentExpression(this);
	}
};


function AssignmentOperatorExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentOperatorExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
AssignmentOperatorExpressionContext.prototype.constructor = AssignmentOperatorExpressionContext;

FlightParser.AssignmentOperatorExpressionContext = AssignmentOperatorExpressionContext;

AssignmentOperatorExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

AssignmentOperatorExpressionContext.prototype.assignmentOperator = function() {
    return this.getTypedRuleContext(AssignmentOperatorContext,0);
};
AssignmentOperatorExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterAssignmentOperatorExpression(this);
	}
};

AssignmentOperatorExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitAssignmentOperatorExpression(this);
	}
};


function ArrowFunctionExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrowFunctionExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
ArrowFunctionExpressionContext.prototype.constructor = ArrowFunctionExpressionContext;

FlightParser.ArrowFunctionExpressionContext = ArrowFunctionExpressionContext;

ArrowFunctionExpressionContext.prototype.arrowFunctionParameters = function() {
    return this.getTypedRuleContext(ArrowFunctionParametersContext,0);
};

ArrowFunctionExpressionContext.prototype.arrowFunctionArrow = function() {
    return this.getTypedRuleContext(ArrowFunctionArrowContext,0);
};

ArrowFunctionExpressionContext.prototype.arrowFunctionBody = function() {
    return this.getTypedRuleContext(ArrowFunctionBodyContext,0);
};
ArrowFunctionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterArrowFunctionExpression(this);
	}
};

ArrowFunctionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitArrowFunctionExpression(this);
	}
};


function EqualityExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualityExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
EqualityExpressionContext.prototype.constructor = EqualityExpressionContext;

FlightParser.EqualityExpressionContext = EqualityExpressionContext;

EqualityExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

EqualityExpressionContext.prototype.equal = function() {
    return this.getTypedRuleContext(EqualContext,0);
};

EqualityExpressionContext.prototype.notEqual = function() {
    return this.getTypedRuleContext(NotEqualContext,0);
};

EqualityExpressionContext.prototype.equalStrict = function() {
    return this.getTypedRuleContext(EqualStrictContext,0);
};

EqualityExpressionContext.prototype.notEqualStrict = function() {
    return this.getTypedRuleContext(NotEqualStrictContext,0);
};
EqualityExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterEqualityExpression(this);
	}
};

EqualityExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitEqualityExpression(this);
	}
};


function MultiplicativeExpressionContext(parser, ctx) {
	SingleExpressionContext.call(this, parser);
    SingleExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicativeExpressionContext.prototype = Object.create(SingleExpressionContext.prototype);
MultiplicativeExpressionContext.prototype.constructor = MultiplicativeExpressionContext;

FlightParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext;

MultiplicativeExpressionContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

MultiplicativeExpressionContext.prototype.multiply = function() {
    return this.getTypedRuleContext(MultiplyContext,0);
};

MultiplicativeExpressionContext.prototype.divide = function() {
    return this.getTypedRuleContext(DivideContext,0);
};

MultiplicativeExpressionContext.prototype.modulo = function() {
    return this.getTypedRuleContext(ModuloContext,0);
};
MultiplicativeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterMultiplicativeExpression(this);
	}
};

MultiplicativeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitMultiplicativeExpression(this);
	}
};



FlightParser.prototype.singleExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new SingleExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 28;
    this.enterRecursionRule(localctx, 28, FlightParser.RULE_singleExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            localctx = new LiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 206;
            this.literal();
            break;

        case 2:
            localctx = new ArrayLiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 207;
            this.arrayLiteral();
            break;

        case 3:
            localctx = new ObjectLiteralExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 208;
            this.objectLiteral();
            break;

        case 4:
            localctx = new ArrayInitializerExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 209;
            this.arrayInitializer();
            break;

        case 5:
            localctx = new NewExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 210;
            this.match(FlightParser.New);
            this.state = 211;
            this.singleExpression(0);
            this.state = 213;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
            if(la_===1) {
                this.state = 212;
                this.arguments();

            }
            break;

        case 6:
            localctx = new IdentifierExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 215;
            this.identifierName();
            break;

        case 7:
            localctx = new ArrowFunctionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 216;
            this.arrowFunctionParameters();
            this.state = 217;
            this.arrowFunctionArrow();
            this.state = 218;
            this.arrowFunctionBody();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 284;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 282;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new AdditiveExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FlightParser.RULE_singleExpression);
                    this.state = 222;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 225;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case FlightParser.Add:
                        this.state = 223;
                        this.add();
                        break;
                    case FlightParser.Sub:
                        this.state = 224;
                        this.sub();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    }
                    this.state = 227;
                    this.singleExpression(10);
                    break;

                case 2:
                    localctx = new RelationalExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FlightParser.RULE_singleExpression);
                    this.state = 229;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 234;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case FlightParser.Less:
                        this.state = 230;
                        this.less();
                        break;
                    case FlightParser.Greater:
                        this.state = 231;
                        this.greater();
                        break;
                    case FlightParser.LessOrEql:
                        this.state = 232;
                        this.lessOrEql();
                        break;
                    case FlightParser.GreaterOrEql:
                        this.state = 233;
                        this.greaterOrEql();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    }
                    this.state = 236;
                    this.singleExpression(9);
                    break;

                case 3:
                    localctx = new EqualityExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FlightParser.RULE_singleExpression);
                    this.state = 238;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 243;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case FlightParser.Equal:
                        this.state = 239;
                        this.equal();
                        break;
                    case FlightParser.NotEqual:
                        this.state = 240;
                        this.notEqual();
                        break;
                    case FlightParser.EqualStrict:
                        this.state = 241;
                        this.equalStrict();
                        break;
                    case FlightParser.NotEqualStrict:
                        this.state = 242;
                        this.notEqualStrict();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    }
                    this.state = 245;
                    this.singleExpression(8);
                    break;

                case 4:
                    localctx = new LogicalAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FlightParser.RULE_singleExpression);
                    this.state = 247;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 248;
                    this.logicalAnd();
                    this.state = 249;
                    this.singleExpression(7);
                    break;

                case 5:
                    localctx = new LogicalOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FlightParser.RULE_singleExpression);
                    this.state = 251;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 252;
                    this.logicalOr();
                    this.state = 253;
                    this.singleExpression(6);
                    break;

                case 6:
                    localctx = new AssignmentExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FlightParser.RULE_singleExpression);
                    this.state = 255;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 256;
                    this.assign();
                    this.state = 257;
                    this.singleExpression(5);
                    break;

                case 7:
                    localctx = new MultiplicativeExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FlightParser.RULE_singleExpression);
                    this.state = 259;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 263;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case FlightParser.Multiply:
                        this.state = 260;
                        this.multiply();
                        break;
                    case FlightParser.Divide:
                        this.state = 261;
                        this.divide();
                        break;
                    case FlightParser.Modulo:
                        this.state = 262;
                        this.modulo();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    }
                    this.state = 265;
                    this.singleExpression(4);
                    break;

                case 8:
                    localctx = new AssignmentOperatorExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FlightParser.RULE_singleExpression);
                    this.state = 267;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 268;
                    this.assignmentOperator();
                    this.state = 269;
                    this.singleExpression(3);
                    break;

                case 9:
                    localctx = new MemberIndexExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FlightParser.RULE_singleExpression);
                    this.state = 271;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 272;
                    this.arrayLiteralOpen();
                    this.state = 273;
                    this.expressionSequence();
                    this.state = 274;
                    this.arrayLiteralClose();
                    break;

                case 10:
                    localctx = new MemberDotExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FlightParser.RULE_singleExpression);
                    this.state = 276;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 277;
                    this.memberDot();
                    this.state = 278;
                    this.identifierName();
                    break;

                case 11:
                    localctx = new ArgumentsExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FlightParser.RULE_singleExpression);
                    this.state = 280;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 281;
                    this.arguments();
                    break;

                } 
            }
            this.state = 286;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ArrayInitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_arrayInitializer;
    return this;
}

ArrayInitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayInitializerContext.prototype.constructor = ArrayInitializerContext;

ArrayInitializerContext.prototype.Array = function() {
    return this.getToken(FlightParser.Array, 0);
};

ArrayInitializerContext.prototype.arrayInitializerArg = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayInitializerArgContext);
    } else {
        return this.getTypedRuleContext(ArrayInitializerArgContext,i);
    }
};

ArrayInitializerContext.prototype.aiParameterSeparator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AiParameterSeparatorContext);
    } else {
        return this.getTypedRuleContext(AiParameterSeparatorContext,i);
    }
};

ArrayInitializerContext.prototype.defaultArrayInitValue = function() {
    return this.getTypedRuleContext(DefaultArrayInitValueContext,0);
};

ArrayInitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterArrayInitializer(this);
	}
};

ArrayInitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitArrayInitializer(this);
	}
};




FlightParser.ArrayInitializerContext = ArrayInitializerContext;

FlightParser.prototype.arrayInitializer = function() {

    var localctx = new ArrayInitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, FlightParser.RULE_arrayInitializer);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        this.match(FlightParser.Array);
        this.state = 288;
        this.arrayInitializerArg();
        this.state = 294;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 289;
                this.aiParameterSeparator();
                this.state = 290;
                this.arrayInitializerArg(); 
            }
            this.state = 296;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

        this.state = 298;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 297;
            this.defaultArrayInitValue();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefaultArrayInitValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_defaultArrayInitValue;
    return this;
}

DefaultArrayInitValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefaultArrayInitValueContext.prototype.constructor = DefaultArrayInitValueContext;

DefaultArrayInitValueContext.prototype.Default = function() {
    return this.getToken(FlightParser.Default, 0);
};

DefaultArrayInitValueContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

DefaultArrayInitValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterDefaultArrayInitValue(this);
	}
};

DefaultArrayInitValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitDefaultArrayInitValue(this);
	}
};




FlightParser.DefaultArrayInitValueContext = DefaultArrayInitValueContext;

FlightParser.prototype.defaultArrayInitValue = function() {

    var localctx = new DefaultArrayInitValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, FlightParser.RULE_defaultArrayInitValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 300;
        this.match(FlightParser.Default);
        this.state = 301;
        this.singleExpression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayInitializerArgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_arrayInitializerArg;
    return this;
}

ArrayInitializerArgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayInitializerArgContext.prototype.constructor = ArrayInitializerArgContext;

ArrayInitializerArgContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

ArrayInitializerArgContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterArrayInitializerArg(this);
	}
};

ArrayInitializerArgContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitArrayInitializerArg(this);
	}
};




FlightParser.ArrayInitializerArgContext = ArrayInitializerArgContext;

FlightParser.prototype.arrayInitializerArg = function() {

    var localctx = new ArrayInitializerArgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, FlightParser.RULE_arrayInitializerArg);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
        this.singleExpression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrowFunctionArrowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_arrowFunctionArrow;
    return this;
}

ArrowFunctionArrowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrowFunctionArrowContext.prototype.constructor = ArrowFunctionArrowContext;

ArrowFunctionArrowContext.prototype.ArrowFunctionArrow = function() {
    return this.getToken(FlightParser.ArrowFunctionArrow, 0);
};

ArrowFunctionArrowContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterArrowFunctionArrow(this);
	}
};

ArrowFunctionArrowContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitArrowFunctionArrow(this);
	}
};




FlightParser.ArrowFunctionArrowContext = ArrowFunctionArrowContext;

FlightParser.prototype.arrowFunctionArrow = function() {

    var localctx = new ArrowFunctionArrowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, FlightParser.RULE_arrowFunctionArrow);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        this.match(FlightParser.ArrowFunctionArrow);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrowFunctionParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_arrowFunctionParameters;
    return this;
}

ArrowFunctionParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrowFunctionParametersContext.prototype.constructor = ArrowFunctionParametersContext;

ArrowFunctionParametersContext.prototype.Identifier = function() {
    return this.getToken(FlightParser.Identifier, 0);
};

ArrowFunctionParametersContext.prototype.parameterListOpen = function() {
    return this.getTypedRuleContext(ParameterListOpenContext,0);
};

ArrowFunctionParametersContext.prototype.formalParameterList = function() {
    return this.getTypedRuleContext(FormalParameterListContext,0);
};

ArrowFunctionParametersContext.prototype.parameterListClose = function() {
    return this.getTypedRuleContext(ParameterListCloseContext,0);
};

ArrowFunctionParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterArrowFunctionParameters(this);
	}
};

ArrowFunctionParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitArrowFunctionParameters(this);
	}
};




FlightParser.ArrowFunctionParametersContext = ArrowFunctionParametersContext;

FlightParser.prototype.arrowFunctionParameters = function() {

    var localctx = new ArrowFunctionParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, FlightParser.RULE_arrowFunctionParameters);
    try {
        this.state = 312;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FlightParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 307;
            this.match(FlightParser.Identifier);
            break;
        case FlightParser.ParameterListOpen:
            this.enterOuterAlt(localctx, 2);
            this.state = 308;
            this.parameterListOpen();
            this.state = 309;
            this.formalParameterList();
            this.state = 310;
            this.parameterListClose();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParameterListOpenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_parameterListOpen;
    return this;
}

ParameterListOpenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterListOpenContext.prototype.constructor = ParameterListOpenContext;

ParameterListOpenContext.prototype.ParameterListOpen = function() {
    return this.getToken(FlightParser.ParameterListOpen, 0);
};

ParameterListOpenContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterParameterListOpen(this);
	}
};

ParameterListOpenContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitParameterListOpen(this);
	}
};




FlightParser.ParameterListOpenContext = ParameterListOpenContext;

FlightParser.prototype.parameterListOpen = function() {

    var localctx = new ParameterListOpenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, FlightParser.RULE_parameterListOpen);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        this.match(FlightParser.ParameterListOpen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParameterListCloseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_parameterListClose;
    return this;
}

ParameterListCloseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterListCloseContext.prototype.constructor = ParameterListCloseContext;

ParameterListCloseContext.prototype.ParameterListClose = function() {
    return this.getToken(FlightParser.ParameterListClose, 0);
};

ParameterListCloseContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterParameterListClose(this);
	}
};

ParameterListCloseContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitParameterListClose(this);
	}
};




FlightParser.ParameterListCloseContext = ParameterListCloseContext;

FlightParser.prototype.parameterListClose = function() {

    var localctx = new ParameterListCloseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, FlightParser.RULE_parameterListClose);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 316;
        this.match(FlightParser.ParameterListClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrowFunctionBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_arrowFunctionBody;
    return this;
}

ArrowFunctionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrowFunctionBodyContext.prototype.constructor = ArrowFunctionBodyContext;

ArrowFunctionBodyContext.prototype.BlockOpen = function() {
    return this.getToken(FlightParser.BlockOpen, 0);
};

ArrowFunctionBodyContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

ArrowFunctionBodyContext.prototype.BlockClose = function() {
    return this.getToken(FlightParser.BlockClose, 0);
};

ArrowFunctionBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterArrowFunctionBody(this);
	}
};

ArrowFunctionBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitArrowFunctionBody(this);
	}
};




FlightParser.ArrowFunctionBodyContext = ArrowFunctionBodyContext;

FlightParser.prototype.arrowFunctionBody = function() {

    var localctx = new ArrowFunctionBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, FlightParser.RULE_arrowFunctionBody);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        this.match(FlightParser.BlockOpen);
        this.state = 319;
        this.functionBody();
        this.state = 320;
        this.match(FlightParser.BlockClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OpenBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_openBlock;
    return this;
}

OpenBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OpenBlockContext.prototype.constructor = OpenBlockContext;

OpenBlockContext.prototype.BlockOpen = function() {
    return this.getToken(FlightParser.BlockOpen, 0);
};

OpenBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterOpenBlock(this);
	}
};

OpenBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitOpenBlock(this);
	}
};




FlightParser.OpenBlockContext = OpenBlockContext;

FlightParser.prototype.openBlock = function() {

    var localctx = new OpenBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, FlightParser.RULE_openBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 322;
        this.match(FlightParser.BlockOpen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CloseBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_closeBlock;
    return this;
}

CloseBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CloseBlockContext.prototype.constructor = CloseBlockContext;

CloseBlockContext.prototype.BlockClose = function() {
    return this.getToken(FlightParser.BlockClose, 0);
};

CloseBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterCloseBlock(this);
	}
};

CloseBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitCloseBlock(this);
	}
};




FlightParser.CloseBlockContext = CloseBlockContext;

FlightParser.prototype.closeBlock = function() {

    var localctx = new CloseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, FlightParser.RULE_closeBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 324;
        this.match(FlightParser.BlockClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AiParameterSeparatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_aiParameterSeparator;
    return this;
}

AiParameterSeparatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AiParameterSeparatorContext.prototype.constructor = AiParameterSeparatorContext;

AiParameterSeparatorContext.prototype.ParameterSeparator = function() {
    return this.getToken(FlightParser.ParameterSeparator, 0);
};

AiParameterSeparatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterAiParameterSeparator(this);
	}
};

AiParameterSeparatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitAiParameterSeparator(this);
	}
};




FlightParser.AiParameterSeparatorContext = AiParameterSeparatorContext;

FlightParser.prototype.aiParameterSeparator = function() {

    var localctx = new AiParameterSeparatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, FlightParser.RULE_aiParameterSeparator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 326;
        this.match(FlightParser.ParameterSeparator);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_expressionSequence;
    return this;
}

ExpressionSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionSequenceContext.prototype.constructor = ExpressionSequenceContext;

ExpressionSequenceContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

ExpressionSequenceContext.prototype.parameterSeparator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterSeparatorContext);
    } else {
        return this.getTypedRuleContext(ParameterSeparatorContext,i);
    }
};

ExpressionSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterExpressionSequence(this);
	}
};

ExpressionSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitExpressionSequence(this);
	}
};




FlightParser.ExpressionSequenceContext = ExpressionSequenceContext;

FlightParser.prototype.expressionSequence = function() {

    var localctx = new ExpressionSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, FlightParser.RULE_expressionSequence);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 328;
        this.singleExpression(0);
        this.state = 334;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlightParser.ParameterSeparator) {
            this.state = 329;
            this.parameterSeparator();
            this.state = 330;
            this.singleExpression(0);
            this.state = 336;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_arrayLiteral;
    return this;
}

ArrayLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayLiteralContext.prototype.constructor = ArrayLiteralContext;

ArrayLiteralContext.prototype.arrayLiteralOpen = function() {
    return this.getTypedRuleContext(ArrayLiteralOpenContext,0);
};

ArrayLiteralContext.prototype.arrayLiteralClose = function() {
    return this.getTypedRuleContext(ArrayLiteralCloseContext,0);
};

ArrayLiteralContext.prototype.elementListSeparator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementListSeparatorContext);
    } else {
        return this.getTypedRuleContext(ElementListSeparatorContext,i);
    }
};

ArrayLiteralContext.prototype.elementList = function() {
    return this.getTypedRuleContext(ElementListContext,0);
};

ArrayLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterArrayLiteral(this);
	}
};

ArrayLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitArrayLiteral(this);
	}
};




FlightParser.ArrayLiteralContext = ArrayLiteralContext;

FlightParser.prototype.arrayLiteral = function() {

    var localctx = new ArrayLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, FlightParser.RULE_arrayLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 337;
        this.arrayLiteralOpen();
        this.state = 341;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 338;
                this.elementListSeparator(); 
            }
            this.state = 343;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
        }

        this.state = 345;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 24)) & ~0x1f) == 0 && ((1 << (_la - 24)) & ((1 << (FlightParser.Array - 24)) | (1 << (FlightParser.BlockOpen - 24)) | (1 << (FlightParser.ParameterListOpen - 24)) | (1 << (FlightParser.ArrayLiteralOpen - 24)) | (1 << (FlightParser.New - 24)) | (1 << (FlightParser.Identifier - 24)) | (1 << (FlightParser.Boolean - 24)) | (1 << (FlightParser.String - 24)) | (1 << (FlightParser.Number - 24)))) !== 0)) {
            this.state = 344;
            this.elementList();
        }

        this.state = 350;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlightParser.ParameterSeparator) {
            this.state = 347;
            this.elementListSeparator();
            this.state = 352;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 353;
        this.arrayLiteralClose();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayLiteralOpenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_arrayLiteralOpen;
    return this;
}

ArrayLiteralOpenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayLiteralOpenContext.prototype.constructor = ArrayLiteralOpenContext;

ArrayLiteralOpenContext.prototype.ArrayLiteralOpen = function() {
    return this.getToken(FlightParser.ArrayLiteralOpen, 0);
};

ArrayLiteralOpenContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterArrayLiteralOpen(this);
	}
};

ArrayLiteralOpenContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitArrayLiteralOpen(this);
	}
};




FlightParser.ArrayLiteralOpenContext = ArrayLiteralOpenContext;

FlightParser.prototype.arrayLiteralOpen = function() {

    var localctx = new ArrayLiteralOpenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, FlightParser.RULE_arrayLiteralOpen);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 355;
        this.match(FlightParser.ArrayLiteralOpen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayLiteralCloseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_arrayLiteralClose;
    return this;
}

ArrayLiteralCloseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayLiteralCloseContext.prototype.constructor = ArrayLiteralCloseContext;

ArrayLiteralCloseContext.prototype.ArrayLiteralClose = function() {
    return this.getToken(FlightParser.ArrayLiteralClose, 0);
};

ArrayLiteralCloseContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterArrayLiteralClose(this);
	}
};

ArrayLiteralCloseContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitArrayLiteralClose(this);
	}
};




FlightParser.ArrayLiteralCloseContext = ArrayLiteralCloseContext;

FlightParser.prototype.arrayLiteralClose = function() {

    var localctx = new ArrayLiteralCloseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, FlightParser.RULE_arrayLiteralClose);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 357;
        this.match(FlightParser.ArrayLiteralClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_elementList;
    return this;
}

ElementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementListContext.prototype.constructor = ElementListContext;

ElementListContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

ElementListContext.prototype.elementListSeparator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementListSeparatorContext);
    } else {
        return this.getTypedRuleContext(ElementListSeparatorContext,i);
    }
};

ElementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterElementList(this);
	}
};

ElementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitElementList(this);
	}
};




FlightParser.ElementListContext = ElementListContext;

FlightParser.prototype.elementList = function() {

    var localctx = new ElementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, FlightParser.RULE_elementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 359;
        this.singleExpression(0);
        this.state = 369;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 361; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 360;
                    this.elementListSeparator();
                    this.state = 363; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===FlightParser.ParameterSeparator);
                this.state = 365;
                this.singleExpression(0); 
            }
            this.state = 371;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementListSeparatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_elementListSeparator;
    return this;
}

ElementListSeparatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementListSeparatorContext.prototype.constructor = ElementListSeparatorContext;

ElementListSeparatorContext.prototype.ParameterSeparator = function() {
    return this.getToken(FlightParser.ParameterSeparator, 0);
};

ElementListSeparatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterElementListSeparator(this);
	}
};

ElementListSeparatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitElementListSeparator(this);
	}
};




FlightParser.ElementListSeparatorContext = ElementListSeparatorContext;

FlightParser.prototype.elementListSeparator = function() {

    var localctx = new ElementListSeparatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, FlightParser.RULE_elementListSeparator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 372;
        this.match(FlightParser.ParameterSeparator);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MultiplyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_multiply;
    return this;
}

MultiplyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplyContext.prototype.constructor = MultiplyContext;

MultiplyContext.prototype.Multiply = function() {
    return this.getToken(FlightParser.Multiply, 0);
};

MultiplyContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterMultiply(this);
	}
};

MultiplyContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitMultiply(this);
	}
};




FlightParser.MultiplyContext = MultiplyContext;

FlightParser.prototype.multiply = function() {

    var localctx = new MultiplyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, FlightParser.RULE_multiply);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 374;
        this.match(FlightParser.Multiply);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DivideContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_divide;
    return this;
}

DivideContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DivideContext.prototype.constructor = DivideContext;

DivideContext.prototype.Divide = function() {
    return this.getToken(FlightParser.Divide, 0);
};

DivideContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterDivide(this);
	}
};

DivideContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitDivide(this);
	}
};




FlightParser.DivideContext = DivideContext;

FlightParser.prototype.divide = function() {

    var localctx = new DivideContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, FlightParser.RULE_divide);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 376;
        this.match(FlightParser.Divide);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ModuloContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_modulo;
    return this;
}

ModuloContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModuloContext.prototype.constructor = ModuloContext;

ModuloContext.prototype.Modulo = function() {
    return this.getToken(FlightParser.Modulo, 0);
};

ModuloContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterModulo(this);
	}
};

ModuloContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitModulo(this);
	}
};




FlightParser.ModuloContext = ModuloContext;

FlightParser.prototype.modulo = function() {

    var localctx = new ModuloContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, FlightParser.RULE_modulo);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 378;
        this.match(FlightParser.Modulo);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LogicalAndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_logicalAnd;
    return this;
}

LogicalAndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicalAndContext.prototype.constructor = LogicalAndContext;

LogicalAndContext.prototype.LogicalAnd = function() {
    return this.getToken(FlightParser.LogicalAnd, 0);
};

LogicalAndContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterLogicalAnd(this);
	}
};

LogicalAndContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitLogicalAnd(this);
	}
};




FlightParser.LogicalAndContext = LogicalAndContext;

FlightParser.prototype.logicalAnd = function() {

    var localctx = new LogicalAndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, FlightParser.RULE_logicalAnd);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 380;
        this.match(FlightParser.LogicalAnd);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LogicalOrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_logicalOr;
    return this;
}

LogicalOrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicalOrContext.prototype.constructor = LogicalOrContext;

LogicalOrContext.prototype.LogicalOr = function() {
    return this.getToken(FlightParser.LogicalOr, 0);
};

LogicalOrContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterLogicalOr(this);
	}
};

LogicalOrContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitLogicalOr(this);
	}
};




FlightParser.LogicalOrContext = LogicalOrContext;

FlightParser.prototype.logicalOr = function() {

    var localctx = new LogicalOrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, FlightParser.RULE_logicalOr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 382;
        this.match(FlightParser.LogicalOr);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NotEqualContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_notEqual;
    return this;
}

NotEqualContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotEqualContext.prototype.constructor = NotEqualContext;

NotEqualContext.prototype.NotEqual = function() {
    return this.getToken(FlightParser.NotEqual, 0);
};

NotEqualContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterNotEqual(this);
	}
};

NotEqualContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitNotEqual(this);
	}
};




FlightParser.NotEqualContext = NotEqualContext;

FlightParser.prototype.notEqual = function() {

    var localctx = new NotEqualContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, FlightParser.RULE_notEqual);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 384;
        this.match(FlightParser.NotEqual);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EqualStrictContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_equalStrict;
    return this;
}

EqualStrictContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EqualStrictContext.prototype.constructor = EqualStrictContext;

EqualStrictContext.prototype.EqualStrict = function() {
    return this.getToken(FlightParser.EqualStrict, 0);
};

EqualStrictContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterEqualStrict(this);
	}
};

EqualStrictContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitEqualStrict(this);
	}
};




FlightParser.EqualStrictContext = EqualStrictContext;

FlightParser.prototype.equalStrict = function() {

    var localctx = new EqualStrictContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, FlightParser.RULE_equalStrict);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 386;
        this.match(FlightParser.EqualStrict);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NotEqualStrictContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_notEqualStrict;
    return this;
}

NotEqualStrictContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotEqualStrictContext.prototype.constructor = NotEqualStrictContext;

NotEqualStrictContext.prototype.NotEqualStrict = function() {
    return this.getToken(FlightParser.NotEqualStrict, 0);
};

NotEqualStrictContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterNotEqualStrict(this);
	}
};

NotEqualStrictContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitNotEqualStrict(this);
	}
};




FlightParser.NotEqualStrictContext = NotEqualStrictContext;

FlightParser.prototype.notEqualStrict = function() {

    var localctx = new NotEqualStrictContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, FlightParser.RULE_notEqualStrict);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 388;
        this.match(FlightParser.NotEqualStrict);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_assign;
    return this;
}

AssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignContext.prototype.constructor = AssignContext;

AssignContext.prototype.Assign = function() {
    return this.getToken(FlightParser.Assign, 0);
};

AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitAssign(this);
	}
};




FlightParser.AssignContext = AssignContext;

FlightParser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, FlightParser.RULE_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 390;
        this.match(FlightParser.Assign);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MemberDotContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_memberDot;
    return this;
}

MemberDotContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MemberDotContext.prototype.constructor = MemberDotContext;

MemberDotContext.prototype.MemberDot = function() {
    return this.getToken(FlightParser.MemberDot, 0);
};

MemberDotContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterMemberDot(this);
	}
};

MemberDotContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitMemberDot(this);
	}
};




FlightParser.MemberDotContext = MemberDotContext;

FlightParser.prototype.memberDot = function() {

    var localctx = new MemberDotContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, FlightParser.RULE_memberDot);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 392;
        this.match(FlightParser.MemberDot);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_identifierName;
    return this;
}

IdentifierNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierNameContext.prototype.constructor = IdentifierNameContext;

IdentifierNameContext.prototype.Identifier = function() {
    return this.getToken(FlightParser.Identifier, 0);
};

IdentifierNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterIdentifierName(this);
	}
};

IdentifierNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitIdentifierName(this);
	}
};




FlightParser.IdentifierNameContext = IdentifierNameContext;

FlightParser.prototype.identifierName = function() {

    var localctx = new IdentifierNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, FlightParser.RULE_identifierName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 394;
        this.match(FlightParser.Identifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignmentOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_assignmentOperator;
    return this;
}

AssignmentOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentOperatorContext.prototype.constructor = AssignmentOperatorContext;

AssignmentOperatorContext.prototype.multiplyAssign = function() {
    return this.getTypedRuleContext(MultiplyAssignContext,0);
};

AssignmentOperatorContext.prototype.divideAssign = function() {
    return this.getTypedRuleContext(DivideAssignContext,0);
};

AssignmentOperatorContext.prototype.moduloAssign = function() {
    return this.getTypedRuleContext(ModuloAssignContext,0);
};

AssignmentOperatorContext.prototype.addAssign = function() {
    return this.getTypedRuleContext(AddAssignContext,0);
};

AssignmentOperatorContext.prototype.subAssign = function() {
    return this.getTypedRuleContext(SubAssignContext,0);
};

AssignmentOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterAssignmentOperator(this);
	}
};

AssignmentOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitAssignmentOperator(this);
	}
};




FlightParser.AssignmentOperatorContext = AssignmentOperatorContext;

FlightParser.prototype.assignmentOperator = function() {

    var localctx = new AssignmentOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, FlightParser.RULE_assignmentOperator);
    try {
        this.state = 401;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FlightParser.MultiplyAssign:
            this.enterOuterAlt(localctx, 1);
            this.state = 396;
            this.multiplyAssign();
            break;
        case FlightParser.DivideAssign:
            this.enterOuterAlt(localctx, 2);
            this.state = 397;
            this.divideAssign();
            break;
        case FlightParser.ModuloAssign:
            this.enterOuterAlt(localctx, 3);
            this.state = 398;
            this.moduloAssign();
            break;
        case FlightParser.AddAssign:
            this.enterOuterAlt(localctx, 4);
            this.state = 399;
            this.addAssign();
            break;
        case FlightParser.SubAssign:
            this.enterOuterAlt(localctx, 5);
            this.state = 400;
            this.subAssign();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MultiplyAssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_multiplyAssign;
    return this;
}

MultiplyAssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplyAssignContext.prototype.constructor = MultiplyAssignContext;

MultiplyAssignContext.prototype.MultiplyAssign = function() {
    return this.getToken(FlightParser.MultiplyAssign, 0);
};

MultiplyAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterMultiplyAssign(this);
	}
};

MultiplyAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitMultiplyAssign(this);
	}
};




FlightParser.MultiplyAssignContext = MultiplyAssignContext;

FlightParser.prototype.multiplyAssign = function() {

    var localctx = new MultiplyAssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, FlightParser.RULE_multiplyAssign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 403;
        this.match(FlightParser.MultiplyAssign);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DivideAssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_divideAssign;
    return this;
}

DivideAssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DivideAssignContext.prototype.constructor = DivideAssignContext;

DivideAssignContext.prototype.DivideAssign = function() {
    return this.getToken(FlightParser.DivideAssign, 0);
};

DivideAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterDivideAssign(this);
	}
};

DivideAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitDivideAssign(this);
	}
};




FlightParser.DivideAssignContext = DivideAssignContext;

FlightParser.prototype.divideAssign = function() {

    var localctx = new DivideAssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, FlightParser.RULE_divideAssign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 405;
        this.match(FlightParser.DivideAssign);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ModuloAssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_moduloAssign;
    return this;
}

ModuloAssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModuloAssignContext.prototype.constructor = ModuloAssignContext;

ModuloAssignContext.prototype.ModuloAssign = function() {
    return this.getToken(FlightParser.ModuloAssign, 0);
};

ModuloAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterModuloAssign(this);
	}
};

ModuloAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitModuloAssign(this);
	}
};




FlightParser.ModuloAssignContext = ModuloAssignContext;

FlightParser.prototype.moduloAssign = function() {

    var localctx = new ModuloAssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, FlightParser.RULE_moduloAssign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 407;
        this.match(FlightParser.ModuloAssign);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AddAssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_addAssign;
    return this;
}

AddAssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddAssignContext.prototype.constructor = AddAssignContext;

AddAssignContext.prototype.AddAssign = function() {
    return this.getToken(FlightParser.AddAssign, 0);
};

AddAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterAddAssign(this);
	}
};

AddAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitAddAssign(this);
	}
};




FlightParser.AddAssignContext = AddAssignContext;

FlightParser.prototype.addAssign = function() {

    var localctx = new AddAssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, FlightParser.RULE_addAssign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 409;
        this.match(FlightParser.AddAssign);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubAssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_subAssign;
    return this;
}

SubAssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubAssignContext.prototype.constructor = SubAssignContext;

SubAssignContext.prototype.SubAssign = function() {
    return this.getToken(FlightParser.SubAssign, 0);
};

SubAssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterSubAssign(this);
	}
};

SubAssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitSubAssign(this);
	}
};




FlightParser.SubAssignContext = SubAssignContext;

FlightParser.prototype.subAssign = function() {

    var localctx = new SubAssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, FlightParser.RULE_subAssign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 411;
        this.match(FlightParser.SubAssign);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_objectLiteral;
    return this;
}

ObjectLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectLiteralContext.prototype.constructor = ObjectLiteralContext;

ObjectLiteralContext.prototype.propertyAssignment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PropertyAssignmentContext);
    } else {
        return this.getTypedRuleContext(PropertyAssignmentContext,i);
    }
};

ObjectLiteralContext.prototype.propertySeparator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PropertySeparatorContext);
    } else {
        return this.getTypedRuleContext(PropertySeparatorContext,i);
    }
};

ObjectLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterObjectLiteral(this);
	}
};

ObjectLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitObjectLiteral(this);
	}
};




FlightParser.ObjectLiteralContext = ObjectLiteralContext;

FlightParser.prototype.objectLiteral = function() {

    var localctx = new ObjectLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, FlightParser.RULE_objectLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 413;
        this.match(FlightParser.BlockOpen);
        this.state = 423;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlightParser.FreezeMarker || _la===FlightParser.Identifier) {
            this.state = 414;
            this.propertyAssignment();
            this.state = 420;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 415;
                    this.propertySeparator();
                    this.state = 416;
                    this.propertyAssignment(); 
                }
                this.state = 422;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
            }

        }

        this.state = 426;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlightParser.ParameterSeparator) {
            this.state = 425;
            this.match(FlightParser.ParameterSeparator);
        }

        this.state = 428;
        this.match(FlightParser.BlockClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertySeparatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_propertySeparator;
    return this;
}

PropertySeparatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertySeparatorContext.prototype.constructor = PropertySeparatorContext;

PropertySeparatorContext.prototype.ParameterSeparator = function() {
    return this.getToken(FlightParser.ParameterSeparator, 0);
};

PropertySeparatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterPropertySeparator(this);
	}
};

PropertySeparatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitPropertySeparator(this);
	}
};




FlightParser.PropertySeparatorContext = PropertySeparatorContext;

FlightParser.prototype.propertySeparator = function() {

    var localctx = new PropertySeparatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, FlightParser.RULE_propertySeparator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 430;
        this.match(FlightParser.ParameterSeparator);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyAssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_propertyAssignment;
    return this;
}

PropertyAssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyAssignmentContext.prototype.constructor = PropertyAssignmentContext;


 
PropertyAssignmentContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PropertyExpressionAssignmentContext(parser, ctx) {
	PropertyAssignmentContext.call(this, parser);
    PropertyAssignmentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropertyExpressionAssignmentContext.prototype = Object.create(PropertyAssignmentContext.prototype);
PropertyExpressionAssignmentContext.prototype.constructor = PropertyExpressionAssignmentContext;

FlightParser.PropertyExpressionAssignmentContext = PropertyExpressionAssignmentContext;

PropertyExpressionAssignmentContext.prototype.propertyName = function() {
    return this.getTypedRuleContext(PropertyNameContext,0);
};

PropertyExpressionAssignmentContext.prototype.propertyAssignSymbol = function() {
    return this.getTypedRuleContext(PropertyAssignSymbolContext,0);
};

PropertyExpressionAssignmentContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

PropertyExpressionAssignmentContext.prototype.freezeMarker = function() {
    return this.getTypedRuleContext(FreezeMarkerContext,0);
};
PropertyExpressionAssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterPropertyExpressionAssignment(this);
	}
};

PropertyExpressionAssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitPropertyExpressionAssignment(this);
	}
};



FlightParser.PropertyAssignmentContext = PropertyAssignmentContext;

FlightParser.prototype.propertyAssignment = function() {

    var localctx = new PropertyAssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, FlightParser.RULE_propertyAssignment);
    var _la = 0; // Token type
    try {
        localctx = new PropertyExpressionAssignmentContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 433;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlightParser.FreezeMarker) {
            this.state = 432;
            this.freezeMarker();
        }

        this.state = 435;
        this.propertyName();
        this.state = 436;
        this.propertyAssignSymbol();
        this.state = 437;
        this.singleExpression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FreezeMarkerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_freezeMarker;
    return this;
}

FreezeMarkerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FreezeMarkerContext.prototype.constructor = FreezeMarkerContext;

FreezeMarkerContext.prototype.FreezeMarker = function() {
    return this.getToken(FlightParser.FreezeMarker, 0);
};

FreezeMarkerContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterFreezeMarker(this);
	}
};

FreezeMarkerContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitFreezeMarker(this);
	}
};




FlightParser.FreezeMarkerContext = FreezeMarkerContext;

FlightParser.prototype.freezeMarker = function() {

    var localctx = new FreezeMarkerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, FlightParser.RULE_freezeMarker);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 439;
        this.match(FlightParser.FreezeMarker);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyAssignSymbolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_propertyAssignSymbol;
    return this;
}

PropertyAssignSymbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyAssignSymbolContext.prototype.constructor = PropertyAssignSymbolContext;

PropertyAssignSymbolContext.prototype.PropertyAssignSymbol = function() {
    return this.getToken(FlightParser.PropertyAssignSymbol, 0);
};

PropertyAssignSymbolContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterPropertyAssignSymbol(this);
	}
};

PropertyAssignSymbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitPropertyAssignSymbol(this);
	}
};




FlightParser.PropertyAssignSymbolContext = PropertyAssignSymbolContext;

FlightParser.prototype.propertyAssignSymbol = function() {

    var localctx = new PropertyAssignSymbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, FlightParser.RULE_propertyAssignSymbol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 441;
        this.match(FlightParser.PropertyAssignSymbol);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_propertyName;
    return this;
}

PropertyNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyNameContext.prototype.constructor = PropertyNameContext;

PropertyNameContext.prototype.Identifier = function() {
    return this.getToken(FlightParser.Identifier, 0);
};

PropertyNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterPropertyName(this);
	}
};

PropertyNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitPropertyName(this);
	}
};




FlightParser.PropertyNameContext = PropertyNameContext;

FlightParser.prototype.propertyName = function() {

    var localctx = new PropertyNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, FlightParser.RULE_propertyName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 443;
        this.match(FlightParser.Identifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EqualContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_equal;
    return this;
}

EqualContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EqualContext.prototype.constructor = EqualContext;

EqualContext.prototype.Equal = function() {
    return this.getToken(FlightParser.Equal, 0);
};

EqualContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterEqual(this);
	}
};

EqualContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitEqual(this);
	}
};




FlightParser.EqualContext = EqualContext;

FlightParser.prototype.equal = function() {

    var localctx = new EqualContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, FlightParser.RULE_equal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 445;
        this.match(FlightParser.Equal);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_less;
    return this;
}

LessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LessContext.prototype.constructor = LessContext;

LessContext.prototype.Less = function() {
    return this.getToken(FlightParser.Less, 0);
};

LessContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterLess(this);
	}
};

LessContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitLess(this);
	}
};




FlightParser.LessContext = LessContext;

FlightParser.prototype.less = function() {

    var localctx = new LessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, FlightParser.RULE_less);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 447;
        this.match(FlightParser.Less);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GreaterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_greater;
    return this;
}

GreaterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GreaterContext.prototype.constructor = GreaterContext;

GreaterContext.prototype.Greater = function() {
    return this.getToken(FlightParser.Greater, 0);
};

GreaterContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterGreater(this);
	}
};

GreaterContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitGreater(this);
	}
};




FlightParser.GreaterContext = GreaterContext;

FlightParser.prototype.greater = function() {

    var localctx = new GreaterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, FlightParser.RULE_greater);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 449;
        this.match(FlightParser.Greater);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LessOrEqlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_lessOrEql;
    return this;
}

LessOrEqlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LessOrEqlContext.prototype.constructor = LessOrEqlContext;

LessOrEqlContext.prototype.LessOrEql = function() {
    return this.getToken(FlightParser.LessOrEql, 0);
};

LessOrEqlContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterLessOrEql(this);
	}
};

LessOrEqlContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitLessOrEql(this);
	}
};




FlightParser.LessOrEqlContext = LessOrEqlContext;

FlightParser.prototype.lessOrEql = function() {

    var localctx = new LessOrEqlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, FlightParser.RULE_lessOrEql);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 451;
        this.match(FlightParser.LessOrEql);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GreaterOrEqlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_greaterOrEql;
    return this;
}

GreaterOrEqlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GreaterOrEqlContext.prototype.constructor = GreaterOrEqlContext;

GreaterOrEqlContext.prototype.GreaterOrEql = function() {
    return this.getToken(FlightParser.GreaterOrEql, 0);
};

GreaterOrEqlContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterGreaterOrEql(this);
	}
};

GreaterOrEqlContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitGreaterOrEql(this);
	}
};




FlightParser.GreaterOrEqlContext = GreaterOrEqlContext;

FlightParser.prototype.greaterOrEql = function() {

    var localctx = new GreaterOrEqlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, FlightParser.RULE_greaterOrEql);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 453;
        this.match(FlightParser.GreaterOrEql);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.ParameterListOpen = function() {
    return this.getToken(FlightParser.ParameterListOpen, 0);
};

ArgumentsContext.prototype.ParameterListClose = function() {
    return this.getToken(FlightParser.ParameterListClose, 0);
};

ArgumentsContext.prototype.singleExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SingleExpressionContext);
    } else {
        return this.getTypedRuleContext(SingleExpressionContext,i);
    }
};

ArgumentsContext.prototype.parameterSeparator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterSeparatorContext);
    } else {
        return this.getTypedRuleContext(ParameterSeparatorContext,i);
    }
};

ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitArguments(this);
	}
};




FlightParser.ArgumentsContext = ArgumentsContext;

FlightParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, FlightParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 455;
        this.match(FlightParser.ParameterListOpen);
        this.state = 465;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 24)) & ~0x1f) == 0 && ((1 << (_la - 24)) & ((1 << (FlightParser.Array - 24)) | (1 << (FlightParser.BlockOpen - 24)) | (1 << (FlightParser.ParameterListOpen - 24)) | (1 << (FlightParser.ArrayLiteralOpen - 24)) | (1 << (FlightParser.New - 24)) | (1 << (FlightParser.Identifier - 24)) | (1 << (FlightParser.Boolean - 24)) | (1 << (FlightParser.String - 24)) | (1 << (FlightParser.Number - 24)))) !== 0)) {
            this.state = 456;
            this.singleExpression(0);
            this.state = 462;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===FlightParser.ParameterSeparator) {
                this.state = 457;
                this.parameterSeparator();
                this.state = 458;
                this.singleExpression(0);
                this.state = 464;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 467;
        this.match(FlightParser.ParameterListClose);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParameterSeparatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_parameterSeparator;
    return this;
}

ParameterSeparatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterSeparatorContext.prototype.constructor = ParameterSeparatorContext;

ParameterSeparatorContext.prototype.ParameterSeparator = function() {
    return this.getToken(FlightParser.ParameterSeparator, 0);
};

ParameterSeparatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterParameterSeparator(this);
	}
};

ParameterSeparatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitParameterSeparator(this);
	}
};




FlightParser.ParameterSeparatorContext = ParameterSeparatorContext;

FlightParser.prototype.parameterSeparator = function() {

    var localctx = new ParameterSeparatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, FlightParser.RULE_parameterSeparator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 469;
        this.match(FlightParser.ParameterSeparator);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FormalParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_formalParameterList;
    return this;
}

FormalParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterListContext.prototype.constructor = FormalParameterListContext;

FormalParameterListContext.prototype.formalParameterArg = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormalParameterArgContext);
    } else {
        return this.getTypedRuleContext(FormalParameterArgContext,i);
    }
};

FormalParameterListContext.prototype.parameterSeparator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterSeparatorContext);
    } else {
        return this.getTypedRuleContext(ParameterSeparatorContext,i);
    }
};

FormalParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterFormalParameterList(this);
	}
};

FormalParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitFormalParameterList(this);
	}
};




FlightParser.FormalParameterListContext = FormalParameterListContext;

FlightParser.prototype.formalParameterList = function() {

    var localctx = new FormalParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 124, FlightParser.RULE_formalParameterList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 472;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlightParser.Identifier) {
            this.state = 471;
            this.formalParameterArg();
        }

        this.state = 479;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FlightParser.ParameterSeparator) {
            this.state = 474;
            this.parameterSeparator();
            this.state = 475;
            this.formalParameterArg();
            this.state = 481;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FormalParameterArgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_formalParameterArg;
    return this;
}

FormalParameterArgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalParameterArgContext.prototype.constructor = FormalParameterArgContext;

FormalParameterArgContext.prototype.Identifier = function() {
    return this.getToken(FlightParser.Identifier, 0);
};

FormalParameterArgContext.prototype.Assign = function() {
    return this.getToken(FlightParser.Assign, 0);
};

FormalParameterArgContext.prototype.singleExpression = function() {
    return this.getTypedRuleContext(SingleExpressionContext,0);
};

FormalParameterArgContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterFormalParameterArg(this);
	}
};

FormalParameterArgContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitFormalParameterArg(this);
	}
};




FlightParser.FormalParameterArgContext = FormalParameterArgContext;

FlightParser.prototype.formalParameterArg = function() {

    var localctx = new FormalParameterArgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 126, FlightParser.RULE_formalParameterArg);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 482;
        this.match(FlightParser.Identifier);
        this.state = 485;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FlightParser.Assign) {
            this.state = 483;
            this.match(FlightParser.Assign);
            this.state = 484;
            this.singleExpression(0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_functionBody;
    return this;
}

FunctionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionBodyContext.prototype.constructor = FunctionBodyContext;

FunctionBodyContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

FunctionBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterFunctionBody(this);
	}
};

FunctionBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitFunctionBody(this);
	}
};




FlightParser.FunctionBodyContext = FunctionBodyContext;

FlightParser.prototype.functionBody = function() {

    var localctx = new FunctionBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 128, FlightParser.RULE_functionBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 488;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (FlightParser.Let - 18)) | (1 << (FlightParser.If - 18)) | (1 << (FlightParser.Function - 18)) | (1 << (FlightParser.Impure - 18)) | (1 << (FlightParser.Return - 18)) | (1 << (FlightParser.Array - 18)) | (1 << (FlightParser.BlockOpen - 18)) | (1 << (FlightParser.ParameterListOpen - 18)) | (1 << (FlightParser.ArrayLiteralOpen - 18)) | (1 << (FlightParser.New - 18)) | (1 << (FlightParser.Identifier - 18)) | (1 << (FlightParser.Boolean - 18)) | (1 << (FlightParser.String - 18)) | (1 << (FlightParser.Number - 18)))) !== 0)) {
            this.state = 487;
            this.statements();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.Boolean = function() {
    return this.getToken(FlightParser.Boolean, 0);
};

LiteralContext.prototype.String = function() {
    return this.getToken(FlightParser.String, 0);
};

LiteralContext.prototype.Number = function() {
    return this.getToken(FlightParser.Number, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitLiteral(this);
	}
};




FlightParser.LiteralContext = LiteralContext;

FlightParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 130, FlightParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 490;
        _la = this._input.LA(1);
        if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (FlightParser.Boolean - 45)) | (1 << (FlightParser.String - 45)) | (1 << (FlightParser.Number - 45)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AddContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_add;
    return this;
}

AddContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddContext.prototype.constructor = AddContext;

AddContext.prototype.Add = function() {
    return this.getToken(FlightParser.Add, 0);
};

AddContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterAdd(this);
	}
};

AddContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitAdd(this);
	}
};




FlightParser.AddContext = AddContext;

FlightParser.prototype.add = function() {

    var localctx = new AddContext(this, this._ctx, this.state);
    this.enterRule(localctx, 132, FlightParser.RULE_add);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 492;
        this.match(FlightParser.Add);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FlightParser.RULE_sub;
    return this;
}

SubContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubContext.prototype.constructor = SubContext;

SubContext.prototype.Sub = function() {
    return this.getToken(FlightParser.Sub, 0);
};

SubContext.prototype.enterRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.enterSub(this);
	}
};

SubContext.prototype.exitRule = function(listener) {
    if(listener instanceof FlightListener ) {
        listener.exitSub(this);
	}
};




FlightParser.SubContext = SubContext;

FlightParser.prototype.sub = function() {

    var localctx = new SubContext(this, this._ctx, this.state);
    this.enterRule(localctx, 134, FlightParser.RULE_sub);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 494;
        this.match(FlightParser.Sub);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


FlightParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 14:
			return this.singleExpression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

FlightParser.prototype.singleExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 8);
		case 2:
			return this.precpred(this._ctx, 7);
		case 3:
			return this.precpred(this._ctx, 6);
		case 4:
			return this.precpred(this._ctx, 5);
		case 5:
			return this.precpred(this._ctx, 4);
		case 6:
			return this.precpred(this._ctx, 3);
		case 7:
			return this.precpred(this._ctx, 2);
		case 8:
			return this.precpred(this._ctx, 13);
		case 9:
			return this.precpred(this._ctx, 11);
		case 10:
			return this.precpred(this._ctx, 10);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FlightParser = FlightParser;
