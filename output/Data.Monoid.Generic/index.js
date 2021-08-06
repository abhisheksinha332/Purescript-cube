// Generated by purs version 0.14.1
"use strict";
var Data_Generic_Rep = require("../Data.Generic.Rep/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var GenericMonoid = function (genericMempty$prime) {
    this["genericMempty'"] = genericMempty$prime;
};
var genericMonoidNoArguments = new GenericMonoid(Data_Generic_Rep.NoArguments.value);
var genericMonoidArgument = function (dictMonoid) {
    return new GenericMonoid(Data_Monoid.mempty(dictMonoid));
};
var genericMempty$prime = function (dict) {
    return dict["genericMempty'"];
};
var genericMonoidConstructor = function (dictGenericMonoid) {
    return new GenericMonoid(genericMempty$prime(dictGenericMonoid));
};
var genericMonoidProduct = function (dictGenericMonoid) {
    return function (dictGenericMonoid1) {
        return new GenericMonoid(new Data_Generic_Rep.Product(genericMempty$prime(dictGenericMonoid), genericMempty$prime(dictGenericMonoid1)));
    };
};
var genericMempty = function (dictGeneric) {
    return function (dictGenericMonoid) {
        return Data_Generic_Rep.to(dictGeneric)(genericMempty$prime(dictGenericMonoid));
    };
};
module.exports = {
    GenericMonoid: GenericMonoid,
    "genericMempty'": genericMempty$prime,
    genericMempty: genericMempty,
    genericMonoidNoArguments: genericMonoidNoArguments,
    genericMonoidProduct: genericMonoidProduct,
    genericMonoidConstructor: genericMonoidConstructor,
    genericMonoidArgument: genericMonoidArgument
};
