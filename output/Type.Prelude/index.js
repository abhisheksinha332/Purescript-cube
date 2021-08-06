// Generated by purs version 0.14.1
"use strict";
var Type_Data_Boolean = require("../Type.Data.Boolean/index.js");
var Type_Data_Ordering = require("../Type.Data.Ordering/index.js");
var Type_Data_Symbol = require("../Type.Data.Symbol/index.js");
var Type_Equality = require("../Type.Equality/index.js");
var Type_Proxy = require("../Type.Proxy/index.js");
var Type_Row = require("../Type.Row/index.js");
var Type_RowList = require("../Type.RowList/index.js");
module.exports = {
    BProxy: Type_Data_Boolean.BProxy,
    IsBoolean: Type_Data_Boolean.IsBoolean,
    reflectBoolean: Type_Data_Boolean.reflectBoolean,
    reifyBoolean: Type_Data_Boolean.reifyBoolean,
    OProxy: Type_Data_Ordering.OProxy,
    IsOrdering: Type_Data_Ordering.IsOrdering,
    reflectOrdering: Type_Data_Ordering.reflectOrdering,
    reifyOrdering: Type_Data_Ordering.reifyOrdering,
    SProxy: Type_Data_Symbol.SProxy,
    Append: Type_Data_Symbol.Append,
    Compare: Type_Data_Symbol.Compare,
    IsSymbol: Type_Data_Symbol.IsSymbol,
    append: Type_Data_Symbol.append,
    compare: Type_Data_Symbol.compare,
    reflectSymbol: Type_Data_Symbol.reflectSymbol,
    reifySymbol: Type_Data_Symbol.reifySymbol,
    TypeEquals: Type_Equality.TypeEquals,
    from: Type_Equality.from,
    to: Type_Equality.to,
    "Proxy": Type_Proxy["Proxy"],
    RProxy: Type_Row.RProxy,
    Lacks: Type_Row.Lacks,
    Union: Type_Row.Union,
    RLProxy: Type_RowList.RLProxy,
    ListToRow: Type_RowList.ListToRow,
    RowToList: Type_RowList.RowToList
};
