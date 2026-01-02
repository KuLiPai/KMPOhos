import { KtorSimpleLogger1xdphsp5l4e48 as KtorSimpleLogger } from './ktor-ktor-utils.js';
import {
  PrimitiveClasses_getInstance6p7zmos9nw3c as PrimitiveClasses_getInstance,
  getKClass3t8tygqu4lcxf as getKClass,
  setOf45ia9pnfhe90 as setOf,
  LinkedHashSet_init_$Create$2lru2gvxodydo as LinkedHashSet_init_$Create$,
} from './kotlin-kotlin-stdlib.js';
import {
  HttpStatusCode3o1wkms10pg4k as HttpStatusCode,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
} from './ktor-ktor-http.js';
import { ByteReadChannel2wzou76jce72d as ByteReadChannel } from './ktor-ktor-io.js';
//region block: imports
//endregion
//region block: pre-declaration
//endregion
function get_LOGGER() {
  _init_properties_ContentNegotiation_kt__o183go();
  return LOGGER;
}
var LOGGER;
function get_DefaultCommonIgnoredTypes() {
  _init_properties_ContentNegotiation_kt__o183go();
  return DefaultCommonIgnoredTypes;
}
var DefaultCommonIgnoredTypes;
var properties_initialized_ContentNegotiation_kt_1ayduy;
function _init_properties_ContentNegotiation_kt__o183go() {
  if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
    properties_initialized_ContentNegotiation_kt_1ayduy = true;
    LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
    DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$(), PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
  }
}
function get_DefaultIgnoredTypes() {
  _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1();
  return DefaultIgnoredTypes;
}
var DefaultIgnoredTypes;
var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
function _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1() {
  if (!properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
    properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
    // Inline function 'kotlin.collections.mutableSetOf' call
    DefaultIgnoredTypes = LinkedHashSet_init_$Create$();
  }
}

//# sourceMappingURL=ktor-ktor-client-content-negotiation.js.map
