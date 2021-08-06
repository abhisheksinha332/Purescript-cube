"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_State_Class = require("../Control.Monad.State.Class/index.js");
var Data_Array = require("../Data.Array/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Halogen_Component = require("../Halogen.Component/index.js");
var Halogen_HTML_Core = require("../Halogen.HTML.Core/index.js");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements/index.js");
var Halogen_HTML_Events = require("../Halogen.HTML.Events/index.js");
var Halogen_HTML_Properties = require("../Halogen.HTML.Properties/index.js");
var Halogen_Query_HalogenM = require("../Halogen.Query.HalogenM/index.js");
var Halogen_Svg_Attributes = require("../Halogen.Svg.Attributes/index.js");
var Halogen_Svg_Elements = require("../Halogen.Svg.Elements/index.js");
var $$Math = require("../Math/index.js");
var Tick = (function () {
    function Tick(value0) {
        this.value0 = value0;
    };
    Tick.create = function (value0) {
        return new Tick(value0);
    };
    return Tick;
})();
var Other = (function () {
    function Other(value0) {
        this.value0 = value0;
    };
    Other.create = function (value0) {
        return new Other(value0);
    };
    return Other;
})();
var X = (function () {
    function X() {

    };
    X.value = new X();
    return X;
})();
var Y = (function () {
    function Y() {

    };
    Y.value = new Y();
    return Y;
})();
var Z = (function () {
    function Z() {

    };
    Z.value = new Z();
    return Z;
})();

// Events
var DecAngVelocity = (function () {
    function DecAngVelocity(value0) {
        this.value0 = value0;
    };
    DecAngVelocity.create = function (value0) {
        return new DecAngVelocity(value0);
    };
    return DecAngVelocity;
})();

// Events
var IncAngVelocity = (function () {
    function IncAngVelocity(value0) {
        this.value0 = value0;
    };
    IncAngVelocity.create = function (value0) {
        return new IncAngVelocity(value0);
    };
    return IncAngVelocity;
})();

// Events
var Reverse = (function () {
    function Reverse(value0) {
        this.value0 = value0;
    };
    Reverse.create = function (value0) {
        return new Reverse(value0);
    };
    return Reverse;
})();

// Events
var Increase = (function () {
    function Increase(value0) {
        this.value0 = value0;
    };
    Increase.create = function (value0) {
        return new Increase(value0);
    };
    return Increase;
})();

// Events
var Decrease = (function () {
    function Decrease(value0) {
        this.value0 = value0;
    };
    Decrease.create = function (value0) {
        return new Decrease(value0);
    };
    return Decrease;
})();

// Values
var viewBoxSize = 600.0;
var viewCenter = {
    x: viewBoxSize / 2.0,
    y: viewBoxSize / 2.0
};
var rotate = function (v) {
    var rotateInPlane = function (axis1) {
        return function (axis2) {
            return function (ang) {
                return new Data_Tuple.Tuple(axis1 * $$Math.cos(ang) - axis2 * $$Math.sin(ang), axis2 * $$Math.cos(ang) + axis1 * $$Math.sin(ang));
            };
        };
    };
    var rotateX = function (ang) {
        return function (v1) {
            var v2 = rotateInPlane(v1.y)(v1.z)(ang);
            return {
                x: v1.x,
                y: v2.value0,
                z: v2.value1
            };
        };
    };
    var rotateY = function (ang) {
        return function (v1) {
            var v2 = rotateInPlane(v1.x)(v1.z)(ang);
            return {
                x: v2.value0,
                y: v1.y,
                z: v2.value1
            };
        };
    };
    var rotateZ = function (ang) {
        return function (v1) {
            var v2 = rotateInPlane(v1.x)(v1.y)(ang);
            return {
                x: v2.value0,
                y: v2.value1,
                z: v1.z
            };
        };
    };
    var $184 = rotateZ(v.za);
    var $185 = rotateY(v.ya);
    var $186 = rotateX(v.xa);
    return function ($187) {
        return $184($185($186($187)));
    };
};
var rotateShape = function (vertices) {
    return function (ang) {
        return Data_Functor.map(Data_Functor.functorArray)(rotate(ang))(vertices);
    };
};

//-------------------------------------------------------------------------------------
var renderView = function (state) {
    var renderButton = function (label) {
        return function (query) {
            return Halogen_HTML_Elements.button([ Halogen_HTML_Properties.title(label), Halogen_HTML_Events.onClick(function (v) {
                return query;
            }) ])([ Halogen_HTML_Core.text(label) ]);
        };
    };
    
    // parallel projection
var project = function (p) {
        return {
            x: p.x + viewCenter.x,
            y: p.y + viewCenter.y
        };
    };
    var getPoint = function (maybePoint) {
        var $$default = {
            x: 100.0,
            y: 100.0
        };
        return Data_Maybe.fromMaybe($$default)(maybePoint);
    };
    var drawVertex = function (idx) {
        return function (v) {
            return Halogen_Svg_Elements.g([  ])([ Halogen_Svg_Elements.text([ Halogen_Svg_Attributes.x(v.x + 5.0), Halogen_Svg_Attributes.y(v.y - 5.0), Halogen_Svg_Attributes.fill(new Data_Maybe.Just(new Halogen_Svg_Attributes.RGB(150, 150, 150))) ])([ Halogen_HTML_Core.text(Data_Show.show(Data_Show.showInt)(idx)) ]), Halogen_Svg_Elements.circle([ Halogen_Svg_Attributes.r(3.0), Halogen_Svg_Attributes.cx(v.x), Halogen_Svg_Attributes.cy(v.y), Halogen_Svg_Attributes.fill(new Data_Maybe.Just(new Halogen_Svg_Attributes.RGB(100, 100, 100))) ]) ]);
        };
    };
    var drawVertices = function (vert2Ds) {
        return Data_Array.mapWithIndex(drawVertex)(vert2Ds);
    };
    var drawLine = function (a) {
        return function (b) {
            return Halogen_Svg_Elements.line([ Halogen_Svg_Attributes.x1(a.x), Halogen_Svg_Attributes.x2(b.x), Halogen_Svg_Attributes.y1(a.y), Halogen_Svg_Attributes.y2(b.y), Halogen_Svg_Attributes.stroke(new Data_Maybe.Just(new Halogen_Svg_Attributes.RGB(50, 50, 50))) ]);
        };
    };
    var drawEdges = function (edges) {
        return function (verts) {
            var connectedVerts = Data_Functor.map(Data_Functor.functorArray)(function (v) {
                return new Data_Tuple.Tuple(Data_Array.index(verts)(v.value0), Data_Array.index(verts)(v.value1));
            })(edges);
            return Data_Functor.map(Data_Functor.functorArray)(function (v) {
                return drawLine(getPoint(v.value0))(getPoint(v.value1));
            })(connectedVerts);
        };
    };
    var drawCube = function (edges) {
        return function (vert2Ds) {
            return Data_Semigroup.append(Data_Semigroup.semigroupArray)(drawEdges(edges)(vert2Ds))(drawVertices(vert2Ds));
        };
    };
    var vert2Ds = Data_Functor.map(Data_Functor.functorArray)(project)(state.shape.vertices);
    return Halogen_HTML_Elements.div([  ])(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ renderButton("rotX++")(new IncAngVelocity(X.value)), renderButton("rotY++")(new IncAngVelocity(Y.value)), renderButton("rotZ++")(new IncAngVelocity(Z.value)), renderButton("reverse X")(new Reverse(X.value)), renderButton("reverse Y")(new Reverse(Y.value)), renderButton("reverse Z")(new Reverse(Z.value)), renderButton("increase X")(new Increase(X.value)), renderButton("increase Y")(new Increase(Y.value)), renderButton("increase Z")(new Increase(Z.value)), renderButton("decrease X")(new Decrease(X.value)), renderButton("decrease Y")(new Decrease(Y.value)), renderButton("decrease Z")(new Decrease(Z.value)) ])([ Halogen_Svg_Elements.svg([ Halogen_Svg_Attributes.viewBox(0.0)(0.0)(viewBoxSize)(viewBoxSize) ])([ Halogen_Svg_Elements.g([  ])(drawCube(state.shape.edges)(vert2Ds)) ]) ]));
};
var oneDegInRad = 1.745329255e-2;
var tenDegInRad = oneDegInRad * 10.0;
var initCube = {
    shape: {
        vertices: [ {
            x: 100.0,
            y: 100.0,
            z: 100.0
        }, {
            x: -100.0,
            y: 100.0,
            z: 100.0
        }, {
            x: 100.0,
            y: -100.0,
            z: 100.0
        }, {
            x: -100.0,
            y: -100.0,
            z: 100.0
        }, {
            x: 100.0,
            y: 100.0,
            z: -100.0
        }, {
            x: -100.0,
            y: 100.0,
            z: -100.0
        }, {
            x: 100.0,
            y: -100.0,
            z: -100.0
        }, {
            x: -100.0,
            y: -100.0,
            z: -100.0
        } ],
        edges: [ new Data_Tuple.Tuple(0, 1), new Data_Tuple.Tuple(0, 2), new Data_Tuple.Tuple(0, 4), new Data_Tuple.Tuple(1, 5), new Data_Tuple.Tuple(1, 3), new Data_Tuple.Tuple(2, 3), new Data_Tuple.Tuple(2, 6), new Data_Tuple.Tuple(4, 5), new Data_Tuple.Tuple(4, 6), new Data_Tuple.Tuple(3, 7), new Data_Tuple.Tuple(6, 7), new Data_Tuple.Tuple(5, 7) ]
    },
    angVel: {
        xa: tenDegInRad,
        ya: tenDegInRad,
        za: tenDegInRad
    },
    forward: true
};
var frameRate = 200.0;
var increaseBy = 1.0 + 0.9 / frameRate;
var dampenPercent = 1.0 - 0.9 / frameRate;
var dampenAngVelocity = function (v) {
    var dampen = function (ang) {
        return ang * dampenPercent;
    };
    return {
        xa: dampen(v.xa),
        ya: dampen(v.ya),
        za: dampen(v.za)
    };
};
var condition = true;
var anglePerFrame = function (v) {
    return {
        xa: v.xa / frameRate,
        ya: v.ya / frameRate,
        za: v.za / frameRate
    };
};
var accelerateBy = oneDegInRad * 50.0;
var cubes = (function () {
    
    // if(condition== true)
    // then
    //   initialState = reverse
    //   condition = false
var render = renderView;
    
    //   else if(condition == false)
    //   then 
    //   initialState = initCube
    //   condition = true
    //    render :: forall m. State -> H.ComponentHTML Action () m
    // render = renderView
    // handleAction :: forall output m. Action -> H.HalogenM State Action () output m Unit
    // handleAction query = case query of
    //     DecAngVelocity axis -> H.modify_ \state -> state
    //     IncAngVelocity axis -> do
    //             cube <- H.get
    //             let {xa, ya, za} = cube.angVel
    //             _ <- H.modify (\c ->
    //                   case axis of
    //                     X -> c { -angVel { xa = xa + accelerateBy } }
    //                     Y -> c { -angVel { ya = ya + accelerateBy } }
    //                     Z -> c { -angVel { za = za + accelerateBy } }
    //                 )
    //             pure unit
    //     Reverse axis -> do
    //             cube <- H.get
    //             let {xa, ya, za} = cube.angVel
    //             _ <- H.modify (\c ->
    //                   case axis of
    //                     X -> c { -angVel { xa = -xa + accelerateBy } }
    //                     Y -> c { -angVel { ya = -ya + accelerateBy } }
    //                     Z -> c { -angVel { za = -za + accelerateBy } }
    //                 )
    //             pure unit
    //     Increase axis -> do
    //             cube <- H.get
    //             let {xa, ya, za} = cube.angVel
    //             _ <- H.modify (\c ->
    //                   case axis of
    //                     X -> c { -angVel { xa = xa + increaseBy  } }
    //                     Y -> c { -angVel { ya = ya + increaseBy  } }
    //                     Z -> c { -angVel { za = za + increaseBy  } }
    //                 )
    //             pure unit
    //     Decrease axis -> do
    //             cube <- H.get
    //             let {xa, ya, za} = cube.angVel
    //             _ <- H.modify (\c ->
    //                   case axis of
    //                     X -> c { -angVel { xa = xa - dampenPercent  } }
    //                     Y -> c { -angVel { ya = ya - dampenPercent  } }
    //                     Z -> c { -angVel { za = za - dampenPercent  } }
    //                 )
    //             pure unit
var handleQuery = function (v) {
        if (v instanceof Tick) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (cube) {
                var newShape = {
                    edges: cube.shape.edges,
                    vertices: rotateShape(cube.shape.vertices)(anglePerFrame(cube.angVel))
                };
                var newCube = (function () {
                    var $79 = {};
                    for (var $80 in cube) {
                        if ({}.hasOwnProperty.call(cube, $80)) {
                            $79[$80] = cube[$80];
                        };
                    };
                    $79.angVel = dampenAngVelocity(cube.angVel);
                    $79.shape = newShape;
                    return $79;
                })();
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.put(Halogen_Query_HalogenM.monadStateHalogenM)(newCube))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(new Data_Maybe.Just(v.value0));
                });
            });
        };
        if (v instanceof Other) {
            return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(new Data_Maybe.Just(v.value0));
        };
        throw new Error("Failed pattern match at Cube (line 269, column 23 - line 285, column 26): " + [ v.constructor.name ]);
    };
    var handleAction = function (query) {
        if (query instanceof DecAngVelocity) {
            return Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function (state) {
                return state;
            });
        };
        if (query instanceof IncAngVelocity) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (cube) {
                return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                    if (query.value0 instanceof X) {
                        var $93 = {};
                        for (var $94 in c) {
                            if ({}.hasOwnProperty.call(c, $94)) {
                                $93[$94] = c[$94];
                            };
                        };
                        $93.angVel = (function () {
                            var $90 = {};
                            for (var $91 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $91)) {
                                    $90[$91] = c["angVel"][$91];
                                };
                            };
                            $90.xa = cube.angVel.xa + accelerateBy;
                            return $90;
                        })();
                        return $93;
                    };
                    if (query.value0 instanceof Y) {
                        var $99 = {};
                        for (var $100 in c) {
                            if ({}.hasOwnProperty.call(c, $100)) {
                                $99[$100] = c[$100];
                            };
                        };
                        $99.angVel = (function () {
                            var $96 = {};
                            for (var $97 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $97)) {
                                    $96[$97] = c["angVel"][$97];
                                };
                            };
                            $96.ya = cube.angVel.ya + accelerateBy;
                            return $96;
                        })();
                        return $99;
                    };
                    if (query.value0 instanceof Z) {
                        var $105 = {};
                        for (var $106 in c) {
                            if ({}.hasOwnProperty.call(c, $106)) {
                                $105[$106] = c[$106];
                            };
                        };
                        $105.angVel = (function () {
                            var $102 = {};
                            for (var $103 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $103)) {
                                    $102[$103] = c["angVel"][$103];
                                };
                            };
                            $102.za = cube.angVel.za + accelerateBy;
                            return $102;
                        })();
                        return $105;
                    };
                    throw new Error("Failed pattern match at Cube (line 172, column 27 - line 175, column 73): " + [ query.value0.constructor.name ]);
                }))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Unit.unit);
                });
            });
        };
        if (query instanceof Reverse) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (cube) {
                return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                    if (query.value0 instanceof X) {
                        var $117 = {};
                        for (var $118 in c) {
                            if ({}.hasOwnProperty.call(c, $118)) {
                                $117[$118] = c[$118];
                            };
                        };
                        $117.angVel = (function () {
                            var $114 = {};
                            for (var $115 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $115)) {
                                    $114[$115] = c["angVel"][$115];
                                };
                            };
                            $114.xa = -cube.angVel.xa + accelerateBy;
                            return $114;
                        })();
                        return $117;
                    };
                    if (query.value0 instanceof Y) {
                        var $123 = {};
                        for (var $124 in c) {
                            if ({}.hasOwnProperty.call(c, $124)) {
                                $123[$124] = c[$124];
                            };
                        };
                        $123.angVel = (function () {
                            var $120 = {};
                            for (var $121 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $121)) {
                                    $120[$121] = c["angVel"][$121];
                                };
                            };
                            $120.ya = -cube.angVel.ya + accelerateBy;
                            return $120;
                        })();
                        return $123;
                    };
                    if (query.value0 instanceof Z) {
                        var $129 = {};
                        for (var $130 in c) {
                            if ({}.hasOwnProperty.call(c, $130)) {
                                $129[$130] = c[$130];
                            };
                        };
                        $129.angVel = (function () {
                            var $126 = {};
                            for (var $127 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $127)) {
                                    $126[$127] = c["angVel"][$127];
                                };
                            };
                            $126.za = -cube.angVel.za + accelerateBy;
                            return $126;
                        })();
                        return $129;
                    };
                    throw new Error("Failed pattern match at Cube (line 182, column 27 - line 185, column 74): " + [ query.value0.constructor.name ]);
                }))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Unit.unit);
                });
            });
        };
        if (query instanceof Increase) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (cube) {
                return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                    if (query.value0 instanceof X) {
                        var $141 = {};
                        for (var $142 in c) {
                            if ({}.hasOwnProperty.call(c, $142)) {
                                $141[$142] = c[$142];
                            };
                        };
                        $141.angVel = (function () {
                            var $138 = {};
                            for (var $139 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $139)) {
                                    $138[$139] = c["angVel"][$139];
                                };
                            };
                            $138.xa = cube.angVel.xa + increaseBy;
                            return $138;
                        })();
                        return $141;
                    };
                    if (query.value0 instanceof Y) {
                        var $147 = {};
                        for (var $148 in c) {
                            if ({}.hasOwnProperty.call(c, $148)) {
                                $147[$148] = c[$148];
                            };
                        };
                        $147.angVel = (function () {
                            var $144 = {};
                            for (var $145 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $145)) {
                                    $144[$145] = c["angVel"][$145];
                                };
                            };
                            $144.ya = cube.angVel.ya + increaseBy;
                            return $144;
                        })();
                        return $147;
                    };
                    if (query.value0 instanceof Z) {
                        var $153 = {};
                        for (var $154 in c) {
                            if ({}.hasOwnProperty.call(c, $154)) {
                                $153[$154] = c[$154];
                            };
                        };
                        $153.angVel = (function () {
                            var $150 = {};
                            for (var $151 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $151)) {
                                    $150[$151] = c["angVel"][$151];
                                };
                            };
                            $150.za = cube.angVel.za + increaseBy;
                            return $150;
                        })();
                        return $153;
                    };
                    throw new Error("Failed pattern match at Cube (line 193, column 27 - line 196, column 72): " + [ query.value0.constructor.name ]);
                }))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Unit.unit);
                });
            });
        };
        if (query instanceof Decrease) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (cube) {
                return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                    if (query.value0 instanceof X) {
                        var $165 = {};
                        for (var $166 in c) {
                            if ({}.hasOwnProperty.call(c, $166)) {
                                $165[$166] = c[$166];
                            };
                        };
                        $165.angVel = (function () {
                            var $162 = {};
                            for (var $163 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $163)) {
                                    $162[$163] = c["angVel"][$163];
                                };
                            };
                            $162.xa = cube.angVel.xa - dampenPercent;
                            return $162;
                        })();
                        return $165;
                    };
                    if (query.value0 instanceof Y) {
                        var $171 = {};
                        for (var $172 in c) {
                            if ({}.hasOwnProperty.call(c, $172)) {
                                $171[$172] = c[$172];
                            };
                        };
                        $171.angVel = (function () {
                            var $168 = {};
                            for (var $169 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $169)) {
                                    $168[$169] = c["angVel"][$169];
                                };
                            };
                            $168.ya = cube.angVel.ya - dampenPercent;
                            return $168;
                        })();
                        return $171;
                    };
                    if (query.value0 instanceof Z) {
                        var $177 = {};
                        for (var $178 in c) {
                            if ({}.hasOwnProperty.call(c, $178)) {
                                $177[$178] = c[$178];
                            };
                        };
                        $177.angVel = (function () {
                            var $174 = {};
                            for (var $175 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $175)) {
                                    $174[$175] = c["angVel"][$175];
                                };
                            };
                            $174.za = cube.angVel.za - dampenPercent;
                            return $174;
                        })();
                        return $177;
                    };
                    throw new Error("Failed pattern match at Cube (line 204, column 27 - line 207, column 75): " + [ query.value0.constructor.name ]);
                }))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Unit.unit);
                });
            });
        };
        throw new Error("Failed pattern match at Cube (line 166, column 30 - line 209, column 30): " + [ query.constructor.name ]);
    };
    return Halogen_Component.mkComponent({
        initialState: Data_Function["const"](initCube),
        render: render,
        "eval": Halogen_Component.mkEval({
            handleAction: handleAction,
            handleQuery: handleQuery,
            receive: Halogen_Component.defaultEval.receive,
            initialize: Halogen_Component.defaultEval.initialize,
            finalize: Halogen_Component.defaultEval.finalize
        })
    });
})();
module.exports = {
    X: X,
    Y: Y,
    Z: Z,
    viewBoxSize: viewBoxSize,
    condition: condition,
    viewCenter: viewCenter,
    frameRate: frameRate,
    oneDegInRad: oneDegInRad,
    tenDegInRad: tenDegInRad,
    accelerateBy: accelerateBy,
    increaseBy: increaseBy,
    dampenPercent: dampenPercent,
    initCube: initCube,
    Tick: Tick,
    Other: Other,
    DecAngVelocity: DecAngVelocity,
    IncAngVelocity: IncAngVelocity,
    Reverse: Reverse,
    Increase: Increase,
    Decrease: Decrease,
    cubes: cubes,
    rotateShape: rotateShape,
    rotate: rotate,
    anglePerFrame: anglePerFrame,
    dampenAngVelocity: dampenAngVelocity,
    renderView: renderView
};
