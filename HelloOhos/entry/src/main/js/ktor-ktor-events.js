import {
  LinkedListNode3tts9l6uzdsny as LinkedListNode,
  DisposableHandle1uzxt8frdchxn as DisposableHandle,
  LinkedListHead2z1qzm54g8g1q as LinkedListHead,
} from './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js';
import {
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID3gxj6tk5isa35 as VOID,
  equals2au1ep9vhcato as equals,
  Unit_getInstance3uavtu4x7ly6a as Unit_getInstance,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  addSuppressedu5jwjfvsc039 as addSuppressed,
} from './kotlin-kotlin-stdlib.js';
import { CopyOnWriteHashMap2wz01l72sexe7 as CopyOnWriteHashMap } from './ktor-ktor-utils.js';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(HandlerRegistration, 'HandlerRegistration', VOID, LinkedListNode, [LinkedListNode, DisposableHandle]);
initMetadataForClass(Events, 'Events', Events);
initMetadataForClass(EventDefinition, 'EventDefinition', EventDefinition);
//endregion
function _get_handlers__pkfn2a($this) {
  return $this.handlers_1;
}
function HandlerRegistration(handler) {
  LinkedListNode.call(this);
  this.handler_1 = handler;
}
protoOf(HandlerRegistration).get_handler_cq14kh_k$ = function () {
  return this.handler_1;
};
protoOf(HandlerRegistration).dispose_3nnxhr_k$ = function () {
  this.remove_fgfybg_k$();
};
function Events$subscribe$lambda(it) {
  return new LinkedListHead();
}
function Events() {
  this.handlers_1 = new CopyOnWriteHashMap();
}
protoOf(Events).subscribe_x6ph2e_k$ = function (definition, handler) {
  var registration = new HandlerRegistration(handler);
  this.handlers_1.computeIfAbsent_gq11cy_k$(definition, Events$subscribe$lambda).addLast_dyfyav_k$(registration);
  return registration;
};
protoOf(Events).unsubscribe_pdx53x_k$ = function (definition, handler) {
  var tmp0_safe_receiver = this.handlers_1.get_h31hzz_k$(definition);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = tmp0_safe_receiver.get__next_joogec_k$();
    while (!equals(cur, tmp0_safe_receiver)) {
      if (cur instanceof HandlerRegistration) {
        var it = cur;
        if (equals(it.handler_1, handler)) {
          it.remove_fgfybg_k$();
        }
      }
      cur = cur.get__next_joogec_k$();
    }
  }
};
protoOf(Events).raise_3e7w7u_k$ = function (definition, value) {
  var exception = null;
  var tmp0_safe_receiver = this.handlers_1.get_h31hzz_k$(definition);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = tmp0_safe_receiver.get__next_joogec_k$();
    while (!equals(cur, tmp0_safe_receiver)) {
      if (cur instanceof HandlerRegistration) {
        var registration = cur;
        try {
          var tmp = registration.handler_1;
          (typeof tmp === 'function' ? tmp : THROW_CCE())(value);
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            var tmp0_safe_receiver_0 = exception;
            var tmp_0;
            if (tmp0_safe_receiver_0 == null) {
              tmp_0 = null;
            } else {
              addSuppressed(tmp0_safe_receiver_0, e);
              tmp_0 = Unit_getInstance();
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              exception = e;
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.get__next_joogec_k$();
    }
  }
  var tmp1_safe_receiver = exception;
  if (tmp1_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    throw tmp1_safe_receiver;
  }
};
function EventDefinition() {
}
//region block: exports
export {
  EventDefinition as EventDefinition1fymk8xrdelhn,
  Events as Events63tfxre48w4z,
};
//endregion

//# sourceMappingURL=ktor-ktor-events.js.map
