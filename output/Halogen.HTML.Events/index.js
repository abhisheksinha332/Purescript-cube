// Generated by purs version 0.14.1
"use strict";
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_Except = require("../Control.Monad.Except/index.js");
var Control_Monad_Except_Trans = require("../Control.Monad.Except.Trans/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Identity = require("../Data.Identity/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var Effect_Unsafe = require("../Effect.Unsafe/index.js");
var Foreign = require("../Foreign/index.js");
var Foreign_Index = require("../Foreign.Index/index.js");
var Halogen_HTML_Core = require("../Halogen.HTML.Core/index.js");
var Halogen_Query_Input = require("../Halogen.Query.Input/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Clipboard_ClipboardEvent_EventTypes = require("../Web.Clipboard.ClipboardEvent.EventTypes/index.js");
var Web_Event_Event = require("../Web.Event.Event/index.js");
var Web_File_FileList = require("../Web.File.FileList/index.js");
var Web_HTML_Event_DragEvent_EventTypes = require("../Web.HTML.Event.DragEvent.EventTypes/index.js");
var Web_HTML_Event_EventTypes = require("../Web.HTML.Event.EventTypes/index.js");
var Web_HTML_HTMLInputElement = require("../Web.HTML.HTMLInputElement/index.js");
var Web_UIEvent_FocusEvent_EventTypes = require("../Web.UIEvent.FocusEvent.EventTypes/index.js");
var Web_UIEvent_KeyboardEvent_EventTypes = require("../Web.UIEvent.KeyboardEvent.EventTypes/index.js");
var Web_UIEvent_MouseEvent_EventTypes = require("../Web.UIEvent.MouseEvent.EventTypes/index.js");
var Web_UIEvent_WheelEvent_EventTypes = require("../Web.UIEvent.WheelEvent.EventTypes/index.js");
var wheelHandler = Unsafe_Coerce.unsafeCoerce;
var touchHandler = Unsafe_Coerce.unsafeCoerce;
var mouseHandler = Unsafe_Coerce.unsafeCoerce;
var keyHandler = Unsafe_Coerce.unsafeCoerce;
var handler$prime = function (et) {
    return function (f) {
        return Halogen_HTML_Core.handler(et)(function (ev) {
            return Data_Functor.map(Data_Maybe.functorMaybe)(Halogen_Query_Input.Action.create)(f(ev));
        });
    };
};
var handler = function (et) {
    return function (f) {
        return Halogen_HTML_Core.handler(et)(function (ev) {
            return new Data_Maybe.Just(new Halogen_Query_Input.Action(f(ev)));
        });
    };
};
var onAbort = handler("abort");
var onChange = handler(Web_HTML_Event_EventTypes.change);
var onClick = (function () {
    var $1 = handler(Web_UIEvent_MouseEvent_EventTypes.click);
    return function ($2) {
        return $1(mouseHandler($2));
    };
})();
var onDoubleClick = (function () {
    var $3 = handler(Web_UIEvent_MouseEvent_EventTypes.dblclick);
    return function ($4) {
        return $3(mouseHandler($4));
    };
})();
var onError = handler(Web_HTML_Event_EventTypes.error);
var onFileUpload = function (dictUnfoldable) {
    return function (f) {
        return handler(Web_HTML_Event_EventTypes.change)((function () {
            var $5 = Data_Maybe.maybe(Data_Unfoldable.none(dictUnfoldable))(Web_File_FileList.items(dictUnfoldable));
            var $6 = Control_Bind.composeKleisli(Data_Maybe.bindMaybe)(Web_Event_Event.target)(Control_Bind.composeKleisli(Data_Maybe.bindMaybe)(Web_HTML_HTMLInputElement.fromEventTarget)(function ($8) {
                return Effect_Unsafe.unsafePerformEffect(Web_HTML_HTMLInputElement.files($8));
            }));
            return function ($7) {
                return f($5($6($7)));
            };
        })());
    };
};
var onInput = handler(Web_HTML_Event_EventTypes.input);
var onInvalid = handler(Web_HTML_Event_EventTypes.invalid);
var onKeyDown = (function () {
    var $9 = handler(Web_UIEvent_KeyboardEvent_EventTypes.keydown);
    return function ($10) {
        return $9(keyHandler($10));
    };
})();
var onKeyUp = (function () {
    var $11 = handler(Web_UIEvent_KeyboardEvent_EventTypes.keyup);
    return function ($12) {
        return $11(keyHandler($12));
    };
})();
var onLoad = handler(Web_HTML_Event_EventTypes.load);
var onMouseDown = (function () {
    var $13 = handler(Web_UIEvent_MouseEvent_EventTypes.mousedown);
    return function ($14) {
        return $13(mouseHandler($14));
    };
})();
var onMouseEnter = (function () {
    var $15 = handler(Web_UIEvent_MouseEvent_EventTypes.mouseenter);
    return function ($16) {
        return $15(mouseHandler($16));
    };
})();
var onMouseLeave = (function () {
    var $17 = handler(Web_UIEvent_MouseEvent_EventTypes.mouseleave);
    return function ($18) {
        return $17(mouseHandler($18));
    };
})();
var onMouseMove = (function () {
    var $19 = handler(Web_UIEvent_MouseEvent_EventTypes.mousemove);
    return function ($20) {
        return $19(mouseHandler($20));
    };
})();
var onMouseOut = (function () {
    var $21 = handler(Web_UIEvent_MouseEvent_EventTypes.mouseout);
    return function ($22) {
        return $21(mouseHandler($22));
    };
})();
var onMouseOver = (function () {
    var $23 = handler(Web_UIEvent_MouseEvent_EventTypes.mouseover);
    return function ($24) {
        return $23(mouseHandler($24));
    };
})();
var onMouseUp = (function () {
    var $25 = handler(Web_UIEvent_MouseEvent_EventTypes.mouseup);
    return function ($26) {
        return $25(mouseHandler($26));
    };
})();
var onReset = handler("reset");
var onResize = handler("resize");
var onScroll = handler("scroll");
var onSelect = handler(Web_HTML_Event_EventTypes.select);
var onSubmit = handler("submit");
var onTouchCancel = (function () {
    var $27 = handler("touchcancel");
    return function ($28) {
        return $27(touchHandler($28));
    };
})();
var onTouchEnd = (function () {
    var $29 = handler("touchend");
    return function ($30) {
        return $29(touchHandler($30));
    };
})();
var onTouchEnter = (function () {
    var $31 = handler("touchenter");
    return function ($32) {
        return $31(touchHandler($32));
    };
})();
var onTouchLeave = (function () {
    var $33 = handler("touchleave");
    return function ($34) {
        return $33(touchHandler($34));
    };
})();
var onTouchMove = (function () {
    var $35 = handler("touchmove");
    return function ($36) {
        return $35(touchHandler($36));
    };
})();
var onTouchStart = (function () {
    var $37 = handler("touchstart");
    return function ($38) {
        return $37(touchHandler($38));
    };
})();
var onTransitionEnd = handler("transitionend");
var onWheel = (function () {
    var $39 = handler(Web_UIEvent_WheelEvent_EventTypes.wheel);
    return function ($40) {
        return $39(wheelHandler($40));
    };
})();
var focusHandler = Unsafe_Coerce.unsafeCoerce;
var onBlur = (function () {
    var $41 = handler(Web_HTML_Event_EventTypes.blur);
    return function ($42) {
        return $41(focusHandler($42));
    };
})();
var onFocus = (function () {
    var $43 = handler(Web_UIEvent_FocusEvent_EventTypes.focus);
    return function ($44) {
        return $43(focusHandler($44));
    };
})();
var onFocusIn = (function () {
    var $45 = handler(Web_UIEvent_FocusEvent_EventTypes.focusin);
    return function ($46) {
        return $45(focusHandler($46));
    };
})();
var onFocusOut = (function () {
    var $47 = handler(Web_UIEvent_FocusEvent_EventTypes.focusout);
    return function ($48) {
        return $47(focusHandler($48));
    };
})();
var dragHandler = Unsafe_Coerce.unsafeCoerce;
var onDrag = (function () {
    var $49 = handler(Web_HTML_Event_DragEvent_EventTypes.drag);
    return function ($50) {
        return $49(dragHandler($50));
    };
})();
var onDragEnd = (function () {
    var $51 = handler(Web_HTML_Event_DragEvent_EventTypes.dragend);
    return function ($52) {
        return $51(dragHandler($52));
    };
})();
var onDragEnter = (function () {
    var $53 = handler(Web_HTML_Event_DragEvent_EventTypes.dragenter);
    return function ($54) {
        return $53(dragHandler($54));
    };
})();
var onDragExit = (function () {
    var $55 = handler(Web_HTML_Event_DragEvent_EventTypes.dragexit);
    return function ($56) {
        return $55(dragHandler($56));
    };
})();
var onDragLeave = (function () {
    var $57 = handler(Web_HTML_Event_DragEvent_EventTypes.dragleave);
    return function ($58) {
        return $57(dragHandler($58));
    };
})();
var onDragOver = (function () {
    var $59 = handler(Web_HTML_Event_DragEvent_EventTypes.dragover);
    return function ($60) {
        return $59(dragHandler($60));
    };
})();
var onDragStart = (function () {
    var $61 = handler(Web_HTML_Event_DragEvent_EventTypes.dragstart);
    return function ($62) {
        return $61(dragHandler($62));
    };
})();
var onDrop = (function () {
    var $63 = handler(Web_HTML_Event_DragEvent_EventTypes.drop);
    return function ($64) {
        return $63(dragHandler($64));
    };
})();
var clipboardHandler = Unsafe_Coerce.unsafeCoerce;
var onCopy = (function () {
    var $65 = handler(Web_Clipboard_ClipboardEvent_EventTypes.copy);
    return function ($66) {
        return $65(clipboardHandler($66));
    };
})();
var onCut = (function () {
    var $67 = handler(Web_Clipboard_ClipboardEvent_EventTypes.cut);
    return function ($68) {
        return $67(clipboardHandler($68));
    };
})();
var onPaste = (function () {
    var $69 = handler(Web_Clipboard_ClipboardEvent_EventTypes.paste);
    return function ($70) {
        return $69(clipboardHandler($70));
    };
})();
var addForeignPropHandler = function (key) {
    return function (prop) {
        return function (reader) {
            return function (f) {
                var go = function (a) {
                    return Control_Bind.composeKleisliFlipped(Control_Monad_Except_Trans.bindExceptT(Data_Identity.monadIdentity))(reader)(Foreign_Index.readProp(Data_Identity.monadIdentity)(prop))(Foreign.unsafeToForeign(a));
                };
                return handler$prime(key)(Control_Bind.composeKleisli(Data_Maybe.bindMaybe)(Web_Event_Event.currentTarget)(function (e) {
                    return Data_Either.either(Data_Function["const"](Data_Maybe.Nothing.value))(function ($71) {
                        return Data_Maybe.Just.create(f($71));
                    })(Control_Monad_Except.runExcept(go(e)));
                }));
            };
        };
    };
};
var onChecked = addForeignPropHandler(Web_HTML_Event_EventTypes.change)("checked")(Foreign.readBoolean(Data_Identity.monadIdentity));
var onSelectedIndexChange = addForeignPropHandler(Web_HTML_Event_EventTypes.change)("selectedIndex")(Foreign.readInt(Data_Identity.monadIdentity));
var onValueChange = addForeignPropHandler(Web_HTML_Event_EventTypes.change)("value")(Foreign.readString(Data_Identity.monadIdentity));
var onValueInput = addForeignPropHandler(Web_HTML_Event_EventTypes.input)("value")(Foreign.readString(Data_Identity.monadIdentity));
module.exports = {
    handler: handler,
    "handler'": handler$prime,
    onAbort: onAbort,
    onError: onError,
    onLoad: onLoad,
    onScroll: onScroll,
    onChange: onChange,
    onFileUpload: onFileUpload,
    onInput: onInput,
    onInvalid: onInvalid,
    onReset: onReset,
    onSelect: onSelect,
    onSubmit: onSubmit,
    onTransitionEnd: onTransitionEnd,
    onCopy: onCopy,
    onPaste: onPaste,
    onCut: onCut,
    onClick: onClick,
    onDoubleClick: onDoubleClick,
    onMouseDown: onMouseDown,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onMouseMove: onMouseMove,
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut,
    onMouseUp: onMouseUp,
    onWheel: onWheel,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    onBlur: onBlur,
    onFocus: onFocus,
    onFocusIn: onFocusIn,
    onFocusOut: onFocusOut,
    onDrag: onDrag,
    onDragEnd: onDragEnd,
    onDragExit: onDragExit,
    onDragEnter: onDragEnter,
    onDragLeave: onDragLeave,
    onDragOver: onDragOver,
    onDragStart: onDragStart,
    onDrop: onDrop,
    onTouchCancel: onTouchCancel,
    onTouchEnd: onTouchEnd,
    onTouchEnter: onTouchEnter,
    onTouchLeave: onTouchLeave,
    onTouchMove: onTouchMove,
    onTouchStart: onTouchStart,
    onResize: onResize,
    onValueChange: onValueChange,
    onValueInput: onValueInput,
    onSelectedIndexChange: onSelectedIndexChange,
    onChecked: onChecked
};