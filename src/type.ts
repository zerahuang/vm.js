import * as types from "babel-types";
import { Path } from "./path";

export type ScopeType = "function" | "loop" | "switch" | "block" | "class";

export type Kind = "const" | "var" | "let";

export interface INodeTypeMap {
  File: types.File;
  Program: types.Program;
  Identifier: types.Identifier;
  StringLiteral: types.StringLiteral;
  NumericLiteral: types.NumericLiteral;
  BooleanLiteral: types.BooleanLiteral;
  RegExpLiteral: types.RegExpLiteral;
  FunctionDeclaration: types.FunctionDeclaration;
  FunctionExpression: types.FunctionExpression;
  ArrowFunctionExpression: types.ArrowFunctionExpression;
  SwitchCase: types.SwitchCase;
  CatchClause: types.CatchClause;
  VariableDeclarator: types.VariableDeclarator;
  ExpressionStatement: types.ExpressionStatement;
  BlockStatement: types.BlockStatement;
  EmptyStatement: types.EmptyStatement;
  DebuggerStatement: types.DebuggerStatement;
  WithStatement: types.WithStatement;
  ReturnStatement: types.ReturnStatement;
  LabeledStatement: types.LabeledStatement;
  BreakStatement: types.BreakStatement;
  ContinueStatement: types.ContinueStatement;
  IfStatement: types.IfStatement;
  SwitchStatement: types.SwitchStatement;
  ThrowStatement: types.ThrowStatement;
  TryStatement: types.TryStatement;
  WhileStatement: types.WhileStatement;
  DoWhileStatement: types.DoWhileStatement;
  ForStatement: types.ForStatement;
  ForInStatement: types.ForInStatement;
  ForOfStatement: types.ForOfStatement;
  VariableDeclaration: types.VariableDeclaration;
  ClassDeclaration: types.ClassDeclaration;
  ThisExpression: types.ThisExpression;
  ArrayExpression: types.ArrayExpression;
  ObjectExpression: types.ObjectExpression;
  ObjectProperty: types.ObjectProperty;
  ObjectMethod: types.ObjectMethod;
  YieldExpression: types.YieldExpression;
  UnaryExpression: types.UnaryExpression;
  UpdateExpression: types.UpdateExpression;
  BinaryExpression: types.BinaryExpression;
  AssignmentExpression: types.AssignmentExpression;
  LogicalExpression: types.LogicalExpression;
  MemberExpression: types.MemberExpression;
  ConditionalExpression: types.ConditionalExpression;
  CallExpression: types.CallExpression;
  NewExpression: types.NewExpression;
  SequenceExpression: types.SequenceExpression;
  TemplateLiteral: types.TemplateLiteral;
  TaggedTemplateExpression: types.TaggedTemplateExpression;
  ClassExpression: types.ClassExpression;
  ClassMethod: types.ClassMethod;
  MetaProperty: types.MetaProperty;
  AwaitExpression: types.AwaitExpression;
  Super: types.Super;
  TemplateElement: types.TemplateElement;
  SpreadElement: types.SpreadElement;
  // ObjectPattern: types.ObjectPattern;
  // ArrayPattern: types.ArrayPattern;
  RestElement: types.RestElement;
  AssignmentPattern: types.AssignmentPattern;
  ClassBody: types.ClassBody;
  ImportDeclaration: types.ImportDeclaration;
  ExportNamedDeclaration: types.ExportNamedDeclaration;
  ExportDefaultDeclaration: types.ExportDefaultDeclaration;
  // ExportAllDeclaration: types.ExportAllDeclaration;
  ImportSpecifier: types.ImportSpecifier;
  ImportDefaultSpecifier: types.ImportDefaultSpecifier;
  // ImportNamespaceSpecifier: types.ImportNamespaceSpecifier;
  ExportSpecifier: types.ExportSpecifier;
  SpreadProperty: types.SpreadProperty;
  DoExpression: types.DoExpression;
}

export type EvaluateMap = {
  [key in keyof INodeTypeMap]: (path: Path<INodeTypeMap[key]>) => any
};

export type EvaluateFunc = (path: Path<types.Node>) => any;
