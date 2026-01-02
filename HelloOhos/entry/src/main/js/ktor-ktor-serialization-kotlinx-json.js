import {
  Unit_getInstance3uavtu4x7ly6a as Unit_getInstance,
  VOID3gxj6tk5isa35 as VOID,
} from './kotlin-kotlin-stdlib.js';
import { Jsonsmkyu9xjl7fv as Json } from './kotlinx-serialization-kotlinx-serialization-json-js-ir.js';
//region block: imports
//endregion
//region block: pre-declaration
//endregion
function get_DefaultJson() {
  _init_properties_JsonSupport_kt__yf438r();
  return DefaultJson;
}
var DefaultJson;
function DefaultJson$lambda($this$Json) {
  _init_properties_JsonSupport_kt__yf438r();
  $this$Json.set_encodeDefaults_c5evsg_k$(true);
  $this$Json.set_isLenient_kuajk5_k$(true);
  $this$Json.set_allowSpecialFloatingPointValues_xyc2ru_k$(true);
  $this$Json.set_allowStructuredMapKeys_sxzxe_k$(true);
  $this$Json.set_prettyPrint_v2gnff_k$(false);
  $this$Json.set_useArrayPolymorphism_54w3tr_k$(false);
  return Unit_getInstance();
}
var properties_initialized_JsonSupport_kt_9cgd93;
function _init_properties_JsonSupport_kt__yf438r() {
  if (!properties_initialized_JsonSupport_kt_9cgd93) {
    properties_initialized_JsonSupport_kt_9cgd93 = true;
    DefaultJson = Json(VOID, DefaultJson$lambda);
  }
}

//# sourceMappingURL=ktor-ktor-serialization-kotlinx-json.js.map
