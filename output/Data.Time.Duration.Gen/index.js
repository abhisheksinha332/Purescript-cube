// Generated by purs version 0.14.1
"use strict";
var Control_Monad_Gen_Class = require("../Control.Monad.Gen.Class/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Time_Duration = require("../Data.Time.Duration/index.js");
var genSeconds = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Time_Duration.Seconds)(Control_Monad_Gen_Class.chooseFloat(dictMonadGen)(0.0)(600.0));
};
var genMinutes = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Time_Duration.Minutes)(Control_Monad_Gen_Class.chooseFloat(dictMonadGen)(0.0)(600.0));
};
var genMilliseconds = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Time_Duration.Milliseconds)(Control_Monad_Gen_Class.chooseFloat(dictMonadGen)(0.0)(600000.0));
};
var genHours = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Time_Duration.Hours)(Control_Monad_Gen_Class.chooseFloat(dictMonadGen)(0.0)(240.0));
};
var genDays = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Time_Duration.Days)(Control_Monad_Gen_Class.chooseFloat(dictMonadGen)(0.0)(42.0));
};
module.exports = {
    genMilliseconds: genMilliseconds,
    genSeconds: genSeconds,
    genMinutes: genMinutes,
    genHours: genHours,
    genDays: genDays
};
