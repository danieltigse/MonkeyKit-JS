(function () {
  'use strict';

  /**
  * Class for managing Monkey enums.
  *
  * @class MonkeyEnums Manages Monkey declared enums.
  */
  function MonkeyEnums() {}

  // Shortcuts to improve speed and size
  var proto = MonkeyEnums.prototype;

  proto.Status = {
    OFFLINE:0,
    HANDSHAKE:1,
    CONNECTING:2,
    ONLINE:3
  }

  proto.MOKMessageProtocolCommand = {
    MESSAGE:200,
    GET:201,
    TRANSACTION:202,
    OPEN:203,
    SET:204,
    ACK:205,
    PUBLISH:206,
    DELETE:207,
    CLOSE:208,
    SYNC:209,
    MESSAGENOTDELIVERED:50,
    MESSAGEDELIVERED:51,
    MESSAGEREAD:52
  }

  proto.MOKMessageType = {
    TEXT:1,
    FILE:2,
    TEMP_NOTE:3,
    NOTIF:4,
    ALERT:5
  }

  proto.MOKMessageFileType = {
    AUDIO:1,
    VIDEO:2,
    PHOTO:3,
    ARCHIVE:4
  }

  proto.MOKGetType = {
    HISTORY:1,
    GROUPS:2
  }

  proto.MOKSyncType = {
    HISTORY:1,
    GROUPS:2
  }
  /**
  * Alias of addListener
  */
  // proto.on = alias('addListener');

  /**
  * Reverts the global {@link Monkey} to its previous value and returns a reference to this version.
  *
  * @return {Function} Non conflicting EventEmitter class.
  */
  MonkeyEnums.noConflict = function noConflict() {
    exports.MonkeyEnums = originalGlobalValue;
    return MonkeyEnums;
  };

  // Expose the class either via AMD, CommonJS or the global object
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return MonkeyEnums;
    });
  }
  else if (typeof module === 'object' && module.exports){
    module.exports = MonkeyEnums;
  }
  else {
    exports.MonkeyEnums = MonkeyEnums;
  }
})();
