import {
  Unit_getInstance3uavtu4x7ly6a as Unit_getInstance,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
} from './kotlin-kotlin-stdlib.js';
import * as PromptAction from '@ohos.promptAction';
import ohos_HiLog_k2q3le from '@ohos.hilog';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(HelloJs, 'HelloJs', HelloJs);
//endregion
function HelloJs() {
}
protoOf(HelloJs).test1 = function () {
  // Inline function 'ohos.toast' call
  // Inline function 'kotlin.js.unsafeCast' call
  var options = {};
  options.message = 'KT Ohos';
  options.duration = 2000;
  PromptAction.showToast(options);
  ohos_HiLog_k2q3le.debug(10086, 'aaa', '===============Kotlin===============');
};
function platform() {
  return '';
}
function ShowToastOptions(init) {
  // Inline function 'kotlin.js.unsafeCast' call
  var options = {};
  init(options);
  return options;
}
function toast(_this__u8e3s4, block) {
  // Inline function 'kotlin.js.unsafeCast' call
  var options = {};
  block(options);
  _this__u8e3s4.showToast(options);
}
//region block: exports
export {
  HelloJs as HelloJs,
  platform as platform,
};
//endregion

//# sourceMappingURL=Hello-shared.js.map
