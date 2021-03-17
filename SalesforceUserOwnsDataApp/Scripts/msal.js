/*! msal v1.0.1 2019-05-22 */
'use strict';
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define("Msal", [], factory);
  else if (typeof exports === 'object')
    exports["Msal"] = factory();
  else
    root["Msal"] = factory();
})(window, function () {
  return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
        /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
        /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
}
      /******/
};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
      /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
      /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
    /******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = __webpack_require__(1);
      var Constants_1 = __webpack_require__(2);
      var ClientAuthError_1 = __webpack_require__(4);
      var Constants_2 = __webpack_require__(2);
      var js_base64_1 = __webpack_require__(20);
      /**
       * @hidden
       */
      var Utils = /** @class */ (function () {
        function Utils() {
        }
        //#region General Util
        /**
         * Utils function to compare two Account objects - used to check if the same user account is logged in
         *
         * @param a1: Account object
         * @param a2: Account object
         */
        Utils.compareAccounts = function (a1, a2) {
          if (!a1 || !a2) {
            return false;
          }
          if (a1.homeAccountIdentifier && a2.homeAccountIdentifier) {
            if (a1.homeAccountIdentifier === a2.homeAccountIdentifier) {
              return true;
            }
          }
          return false;
        };
        /**
         * Decimal to Hex
         *
         * @param num
         */
        Utils.decimalToHex = function (num) {
          var hex = num.toString(16);
          while (hex.length < 2) {
            hex = "0" + hex;
          }
          return hex;
        };
        /**
         * MSAL JS Library Version
         */
        Utils.getLibraryVersion = function () {
          return Constants_2.Library.version;
        };
        /**
         * Creates a new random GUID - used to populate state?
         * @returns string (GUID)
         */
        Utils.createNewGuid = function () {
          // RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
          // pseudo-random numbers.
          // The algorithm is as follows:
          //     Set the two most significant bits (bits 6 and 7) of the
          //        clock_seq_hi_and_reserved to zero and one, respectively.
          //     Set the four most significant bits (bits 12 through 15) of the
          //        time_hi_and_version field to the 4-bit version number from
          //        Section 4.1.3. Version4
          //     Set all the other bits to randomly (or pseudo-randomly) chosen
          //     values.
          // UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
          // time-low               = 4hexOctet
          // time-mid               = 2hexOctet
          // time-high-and-version  = 2hexOctet
          // clock-seq-and-reserved = hexOctet:
          // clock-seq-low          = hexOctet
          // node                   = 6hexOctet
          // Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
          // y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
          // y values are 8, 9, A, B
          var cryptoObj = window.crypto; // for IE 11
          if (cryptoObj && cryptoObj.getRandomValues) {
            var buffer = new Uint8Array(16);
            cryptoObj.getRandomValues(buffer);
            //buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
            buffer[6] |= 0x40; //buffer[6] | 01000000 will set the 6 bit to 1.
            buffer[6] &= 0x4f; //buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
            //buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
            buffer[8] |= 0x80; //buffer[8] | 10000000 will set the 7 bit to 1.
            buffer[8] &= 0xbf; //buffer[8] & 10111111 will set the 6 bit to 0.
            return Utils.decimalToHex(buffer[0]) + Utils.decimalToHex(buffer[1])
              + Utils.decimalToHex(buffer[2]) + Utils.decimalToHex(buffer[3])
              + "-" + Utils.decimalToHex(buffer[4]) + Utils.decimalToHex(buffer[5])
              + "-" + Utils.decimalToHex(buffer[6]) + Utils.decimalToHex(buffer[7])
              + "-" + Utils.decimalToHex(buffer[8]) + Utils.decimalToHex(buffer[9])
              + "-" + Utils.decimalToHex(buffer[10]) + Utils.decimalToHex(buffer[11])
              + Utils.decimalToHex(buffer[12]) + Utils.decimalToHex(buffer[13])
              + Utils.decimalToHex(buffer[14]) + Utils.decimalToHex(buffer[15]);
          }
          else {
            var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            var hex = "0123456789abcdef";
            var r = 0;
            var guidResponse = "";
            for (var i = 0; i < 36; i++) {
              if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
                // each x and y needs to be random
                r = Math.random() * 16 | 0;
              }
              if (guidHolder[i] === "x") {
                guidResponse += hex[r];
              }
              else if (guidHolder[i] === "y") {
                // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                r |= 0x8; // set pos 3 to 1 as 1???
                guidResponse += hex[r];
              }
              else {
                guidResponse += guidHolder[i];
              }
            }
            return guidResponse;
          }
        };
        //#endregion
        //#region Time
        /**
         * Returns time in seconds for expiration based on string value passed in.
         *
         * @param expires
         */
        Utils.expiresIn = function (expires) {
          // if AAD did not send "expires_in" property, use default expiration of 3599 seconds, for some reason AAD sends 3599 as "expires_in" value instead of 3600
          if (!expires) {
            expires = "3599";
          }
          return this.now() + parseInt(expires, 10);
        };
        /**
         * return the current time in Unix time. Date.getTime() returns in milliseconds.
         */
        Utils.now = function () {
          return Math.round(new Date().getTime() / 1000.0);
        };
        //#endregion
        //#region String Ops
        /**
         * Check if a string is empty
         *
         * @param str
         */
        Utils.isEmpty = function (str) {
          return (typeof str === "undefined" || !str || 0 === str.length);
        };
        //#endregion
        //#region Token Processing (Extract to TokenProcessing.ts)
        /**
         * decode a JWT
         *
         * @param jwtToken
         */
        Utils.decodeJwt = function (jwtToken) {
          if (this.isEmpty(jwtToken)) {
            return null;
          }
          var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
          var matches = idTokenPartsRegex.exec(jwtToken);
          if (!matches || matches.length < 4) {
            //this._requestContext.logger.warn("The returned id_token is not parseable.");
            return null;
          }
          var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
          };
          return crackedToken;
        };
        /**
         * Extract IdToken by decoding the RAWIdToken
         *
         * @param encodedIdToken
         */
        Utils.extractIdToken = function (encodedIdToken) {
          // id token will be decoded to get the username
          var decodedToken = this.decodeJwt(encodedIdToken);
          if (!decodedToken) {
            return null;
          }
          try {
            var base64IdToken = decodedToken.JWSPayload;
            var base64Decoded = this.base64DecodeStringUrlSafe(base64IdToken);
            if (!base64Decoded) {
              //this._requestContext.logger.info("The returned id_token could not be base64 url safe decoded.");
              return null;
            }
            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
          }
          catch (err) {
            //this._requestContext.logger.error("The returned id_token could not be decoded" + err);
          }
          return null;
        };
        //#endregion
        //#region Encode and Decode
        /**
         * encoding string to base64 - platform specific check
         *
         * @param input
         */
        Utils.base64EncodeStringUrlSafe = function (input) {
          // html5 should support atob function for decoding
          return js_base64_1.Base64.encode(input);
        };
        /**
         * decoding base64 token - platform specific check
         *
         * @param base64IdToken
         */
        Utils.base64DecodeStringUrlSafe = function (base64IdToken) {
          // html5 should support atob function for decoding
          base64IdToken = base64IdToken.replace(/-/g, "+").replace(/_/g, "/");
          return decodeURIComponent(encodeURIComponent(js_base64_1.Base64.decode(base64IdToken))); // jshint ignore:line
        };
        /**
         * base64 encode a string
         *
         * @param input
         */
        // TODO: Rename to specify type of encoding
        Utils.encode = function (input) {
          var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          var output = "";
          var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
          var i = 0;
          input = this.utf8Encode(input);
          while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
              enc3 = enc4 = 64;
            }
            else if (isNaN(chr3)) {
              enc4 = 64;
            }
            output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
          }
          return output.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
        };
        /**
         * utf8 encode a string
         *
         * @param input
         */
        Utils.utf8Encode = function (input) {
          input = input.replace(/\r\n/g, "\n");
          var utftext = "";
          for (var n = 0; n < input.length; n++) {
            var c = input.charCodeAt(n);
            if (c < 128) {
              utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
              utftext += String.fromCharCode((c >> 6) | 192);
              utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
              utftext += String.fromCharCode((c >> 12) | 224);
              utftext += String.fromCharCode(((c >> 6) & 63) | 128);
              utftext += String.fromCharCode((c & 63) | 128);
            }
          }
          return utftext;
        };
        /**
         * decode a base64 token string
         *
         * @param base64IdToken
         */
        // TODO: Rename to specify type of encoding
        Utils.decode = function (base64IdToken) {
          var codes = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          base64IdToken = String(base64IdToken).replace(/=+$/, "");
          var length = base64IdToken.length;
          if (length % 4 === 1) {
            throw ClientAuthError_1.ClientAuthError.createTokenEncodingError(base64IdToken);
          }
          var h1, h2, h3, h4, bits, c1, c2, c3, decoded = "";
          for (var i = 0; i < length; i += 4) {
            //Every 4 base64 encoded character will be converted to 3 byte string, which is 24 bits
            // then 6 bits per base64 encoded character
            h1 = codes.indexOf(base64IdToken.charAt(i));
            h2 = codes.indexOf(base64IdToken.charAt(i + 1));
            h3 = codes.indexOf(base64IdToken.charAt(i + 2));
            h4 = codes.indexOf(base64IdToken.charAt(i + 3));
            // For padding, if last two are "="
            if (i + 2 === length - 1) {
              bits = h1 << 18 | h2 << 12 | h3 << 6;
              c1 = bits >> 16 & 255;
              c2 = bits >> 8 & 255;
              decoded += String.fromCharCode(c1, c2);
              break;
            }
            // if last one is "="
            else if (i + 1 === length - 1) {
              bits = h1 << 18 | h2 << 12;
              c1 = bits >> 16 & 255;
              decoded += String.fromCharCode(c1);
              break;
            }
            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
            // then convert to 3 byte chars
            c1 = bits >> 16 & 255;
            c2 = bits >> 8 & 255;
            c3 = bits & 255;
            decoded += String.fromCharCode(c1, c2, c3);
          }
          return decoded;
        };
        /**
         * deserialize a string
         *
         * @param query
         */
        Utils.deserialize = function (query) {
          var match; // Regex for replacing addition symbol with a space
          var pl = /\+/g;
          var search = /([^&=]+)=([^&]*)/g;
          var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
          var obj = {};
          match = search.exec(query);
          while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(query);
          }
          return obj;
        };
        //#endregion
        //#region Scopes (extract to Scopes.ts)
        /**
         * Check if there are dup scopes in a given request
         *
         * @param cachedScopes
         * @param scopes
         */
        // TODO: Rename this, intersecting scopes isn't a great name for duplicate checker
        Utils.isIntersectingScopes = function (cachedScopes, scopes) {
          cachedScopes = this.convertToLowerCase(cachedScopes);
          for (var i = 0; i < scopes.length; i++) {
            if (cachedScopes.indexOf(scopes[i].toLowerCase()) > -1) {
              return true;
            }
          }
          return false;
        };
        /**
         * Check if a given scope is present in the request
         *
         * @param cachedScopes
         * @param scopes
         */
        Utils.containsScope = function (cachedScopes, scopes) {
          cachedScopes = this.convertToLowerCase(cachedScopes);
          return scopes.every(function (value) { return cachedScopes.indexOf(value.toString().toLowerCase()) >= 0; });
        };
        /**
         * toLower
         *
         * @param scopes
         */
        // TODO: Rename this, too generic name for a function that only deals with scopes
        Utils.convertToLowerCase = function (scopes) {
          return scopes.map(function (scope) { return scope.toLowerCase(); });
        };
        /**
         * remove one element from a scope array
         *
         * @param scopes
         * @param scope
         */
        // TODO: Rename this, too generic name for a function that only deals with scopes
        Utils.removeElement = function (scopes, scope) {
          return scopes.filter(function (value) { return value !== scope; });
        };
        //#endregion
        //#region URL Processing (Extract to UrlProcessing.ts?)
        Utils.getDefaultRedirectUri = function () {
          return window.location.href.split("?")[0].split("#")[0];
        };
        /**
         * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
         * @param href The url
         * @param tenantId The tenant id to replace
         */
        Utils.replaceTenantPath = function (url, tenantId) {
          url = url.toLowerCase();
          var urlObject = this.GetUrlComponents(url);
          var pathArray = urlObject.PathSegments;
          if (tenantId && (pathArray.length !== 0 && (pathArray[0] === Constants_1.Constants.common || pathArray[0] === Constants_1.SSOTypes.ORGANIZATIONS))) {
            pathArray[0] = tenantId;
          }
          return this.constructAuthorityUriFromObject(urlObject, pathArray);
        };
        Utils.constructAuthorityUriFromObject = function (urlObject, pathArray) {
          return this.CanonicalizeUri(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + pathArray.join("/"));
        };
        /**
         * Parses out the components from a url string.
         * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
         */
        Utils.GetUrlComponents = function (url) {
          if (!url) {
            throw "Url required";
          }
          // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
          var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
          var match = url.match(regEx);
          if (!match || match.length < 6) {
            throw "Valid url required";
          }
          var urlComponents = {
            Protocol: match[1],
            HostNameAndPort: match[4],
            AbsolutePath: match[5]
          };
          var pathSegments = urlComponents.AbsolutePath.split("/");
          pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
          urlComponents.PathSegments = pathSegments;
          return urlComponents;
        };
        /**
         * Given a url or path, append a trailing slash if one doesnt exist
         *
         * @param url
         */
        Utils.CanonicalizeUri = function (url) {
          if (url) {
            url = url.toLowerCase();
          }
          if (url && !Utils.endsWith(url, "/")) {
            url += "/";
          }
          return url;
        };
        /**
         * Checks to see if the url ends with the suffix
         * Required because we are compiling for es5 instead of es6
         * @param url
         * @param str
         */
        // TODO: Rename this, not clear what it is supposed to do
        Utils.endsWith = function (url, suffix) {
          if (!url || !suffix) {
            return false;
          }
          return url.indexOf(suffix, url.length - suffix.length) !== -1;
        };
        /**
         * Utils function to remove the login_hint and domain_hint from the i/p extraQueryParameters
         * @param url
         * @param name
         */
        Utils.urlRemoveQueryStringParameter = function (url, name) {
          if (this.isEmpty(url)) {
            return url;
          }
          var regex = new RegExp("(\\&" + name + "=)[^\&]+");
          url = url.replace(regex, "");
          // name=value&
          regex = new RegExp("(" + name + "=)[^\&]+&");
          url = url.replace(regex, "");
          // name=value
          regex = new RegExp("(" + name + "=)[^\&]+");
          url = url.replace(regex, "");
          return url;
        };
        //#endregion
        //#region ExtraQueryParameters Processing (Extract?)
        /**
         * Constructs extraQueryParameters to be sent to the server for the AuthenticationParameters set by the developer
         * in any login() or acquireToken() calls
         * @param idTokenObject
         * @param extraQueryParameters
         * @param sid
         * @param loginHint
         */
        //TODO: check how this behaves when domain_hint only is sent in extraparameters and idToken has no upn.
        Utils.constructUnifiedCacheQueryParameter = function (request, idTokenObject) {
          // preference order: account > sid > login_hint
          var ssoType;
          var ssoData;
          var serverReqParam = {};
          // if account info is passed, account.sid > account.login_hint
          if (request) {
            if (request.account) {
              var account = request.account;
              if (account.sid) {
                ssoType = Constants_1.SSOTypes.SID;
                ssoData = account.sid;
              }
              else if (account.userName) {
                ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                ssoData = account.userName;
              }
            }
            // sid from request
            else if (request.sid) {
              ssoType = Constants_1.SSOTypes.SID;
              ssoData = request.sid;
            }
            // loginHint from request
            else if (request.loginHint) {
              ssoType = Constants_1.SSOTypes.LOGIN_HINT;
              ssoData = request.loginHint;
            }
          }
          // adalIdToken retrieved from cache
          else if (idTokenObject) {
            if (idTokenObject.hasOwnProperty(Constants_1.Constants.upn)) {
              ssoType = Constants_1.SSOTypes.ID_TOKEN;
              ssoData = idTokenObject.upn;
            }
            else {
              ssoType = Constants_1.SSOTypes.ORGANIZATIONS;
              ssoData = null;
            }
          }
          serverReqParam = this.addSSOParameter(ssoType, ssoData);
          // add the HomeAccountIdentifier info/ domain_hint
          if (request && request.account && request.account.homeAccountIdentifier) {
            serverReqParam = this.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, request.account.homeAccountIdentifier, serverReqParam);
          }
          return serverReqParam;
        };
        /**
         * Add SID to extraQueryParameters
         * @param sid
         */
        Utils.addSSOParameter = function (ssoType, ssoData, ssoParam) {
          if (!ssoParam) {
            ssoParam = {};
          }
          if (!ssoData) {
            return ssoParam;
          }
          switch (ssoType) {
            case Constants_1.SSOTypes.SID: {
              ssoParam[Constants_1.SSOTypes.SID] = ssoData;
              break;
            }
            case Constants_1.SSOTypes.ID_TOKEN: {
              ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
              ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
              break;
            }
            case Constants_1.SSOTypes.LOGIN_HINT: {
              ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
              break;
            }
            case Constants_1.SSOTypes.ORGANIZATIONS: {
              ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
              break;
            }
            case Constants_1.SSOTypes.CONSUMERS: {
              ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.CONSUMERS;
              break;
            }
            case Constants_1.SSOTypes.HOMEACCOUNT_ID: {
              var homeAccountId = ssoData.split(".");
              var uid = Utils.base64DecodeStringUrlSafe(homeAccountId[0]);
              var utid = Utils.base64DecodeStringUrlSafe(homeAccountId[1]);
              // TODO: domain_req and login_req are not needed according to eSTS team
              ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = uid;
              ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] = utid;
              if (utid === Constants_1.Constants.consumersUtid) {
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.CONSUMERS;
              }
              else {
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
              }
              break;
            }
            case Constants_1.SSOTypes.LOGIN_REQ: {
              ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = ssoData;
              break;
            }
            case Constants_1.SSOTypes.DOMAIN_REQ: {
              ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] = ssoData;
              break;
            }
          }
          return ssoParam;
        };
        /**
         * Utility to generate a QueryParameterString from a Key-Value mapping of extraQueryParameters passed
         * @param extraQueryParameters
         */
        Utils.generateQueryParametersString = function (queryParameters) {
          var paramsString = null;
          if (queryParameters) {
            Object.keys(queryParameters).forEach(function (key) {
              if (paramsString == null) {
                paramsString = key + "=" + encodeURIComponent(queryParameters[key]);
              }
              else {
                paramsString += "&" + key + "=" + encodeURIComponent(queryParameters[key]);
              }
            });
          }
          return paramsString;
        };
        /**
         * Check to see if there are SSO params set in the Request
         * @param request
         */
        Utils.isSSOParam = function (request) {
          return request && (request.account || request.sid || request.loginHint);
        };
        //#endregion
        //#region Response Helpers
        Utils.setResponseIdToken = function (originalResponse, idToken) {
          var response = tslib_1.__assign({}, originalResponse);
          response.idToken = idToken;
          if (response.idToken.objectId) {
            response.uniqueId = response.idToken.objectId;
          }
          else {
            response.uniqueId = response.idToken.subject;
          }
          response.tenantId = response.idToken.tenantId;
          return response;
        };
        return Utils;
      }());
      exports.Utils = Utils;


      /***/
}),
/* 1 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
      
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
      
      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** */
      /* global Reflect, Promise */
      Object.defineProperty(exports, "__esModule", { value: true });
      var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) {
            for (var p in b)
              if (b.hasOwnProperty(p))
                d[p] = b[p];
          };
        return extendStatics(d, b);
      };
      function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }
      exports.__extends = __extends;
      exports.__assign = function () {
        exports.__assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return exports.__assign.apply(this, arguments);
      };
      function __rest(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
            if (e.indexOf(p[i]) < 0)
              t[p[i]] = s[p[i]];
        return t;
      }
      exports.__rest = __rest;
      function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }
      exports.__decorate = __decorate;
      function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
      }
      exports.__param = __param;
      function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      }
      exports.__metadata = __metadata;
      function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            }
            catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            }
            catch (e) {
              reject(e);
            }
          }
          function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }
      exports.__awaiter = __awaiter;
      function __generator(thisArg, body) {
        var _ = {
          label: 0, sent: function () {
            if (t[0] & 1)
              throw t[1]; return t[1];
          }, trys: [], ops: []
        }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            }
            catch (e) {
              op = [6, e];
              y = 0;
            }
            finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      }
      exports.__generator = __generator;
      function __exportStar(m, exports) {
        for (var p in m)
          if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
      }
      exports.__exportStar = __exportStar;
      function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
          return m.call(o);
        return {
          next: function () {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      }
      exports.__values = __values;
      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        }
        catch (error) {
          e = { error: error };
        }
        finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          }
          finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      }
      exports.__read = __read;
      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
        return ar;
      }
      exports.__spread = __spread;
      function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }
      exports.__await = __await;
      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) {
          if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          }
          catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      }
      exports.__asyncGenerator = __asyncGenerator;
      function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
      }
      exports.__asyncDelegator = __asyncDelegator;
      function __asyncValues(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
      }
      exports.__asyncValues = __asyncValues;
      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
          cooked.raw = raw;
        }
        return cooked;
      }
      exports.__makeTemplateObject = __makeTemplateObject;
      ;
      function __importStar(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null)
          for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
              result[k] = mod[k];
        result.default = mod;
        return result;
      }
      exports.__importStar = __importStar;
      function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
      }
      exports.__importDefault = __importDefault;


      /***/
}),
/* 2 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      /**
       * @hidden
       */
      var Constants = /** @class */ (function () {
        function Constants() {
        }
        Object.defineProperty(Constants, "errorDescription", {
          get: function () { return "error_description"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "error", {
          get: function () { return "error"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "scope", {
          get: function () { return "scope"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "clientInfo", {
          get: function () { return "client_info"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "clientId", {
          get: function () { return "clientId"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "idToken", {
          get: function () { return "id_token"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "adalIdToken", {
          get: function () { return "adal.idtoken"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "accessToken", {
          get: function () { return "access_token"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "expiresIn", {
          get: function () { return "expires_in"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "sessionState", {
          get: function () { return "session_state"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "claims", {
          get: function () { return "claims"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "msalClientInfo", {
          get: function () { return "msal.client.info"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "msalError", {
          get: function () { return "msal.error"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "msalErrorDescription", {
          get: function () { return "msal.error.description"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "msalSessionState", {
          get: function () { return "msal.session.state"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "tokenKeys", {
          get: function () { return "msal.token.keys"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "accessTokenKey", {
          get: function () { return "msal.access.token.key"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "expirationKey", {
          get: function () { return "msal.expiration.key"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "stateLogin", {
          get: function () { return "msal.state.login"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "stateAcquireToken", {
          get: function () { return "msal.state.acquireToken"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "stateRenew", {
          get: function () { return "msal.state.renew"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "nonceIdToken", {
          get: function () { return "msal.nonce.idtoken"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "userName", {
          get: function () { return "msal.username"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "idTokenKey", {
          get: function () { return "msal.idtoken"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "loginRequest", {
          get: function () { return "msal.login.request"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "loginError", {
          get: function () { return "msal.login.error"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "renewStatus", {
          get: function () { return "msal.token.renew.status"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "urlHash", {
          get: function () { return "msal.urlHash"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "angularLoginRequest", {
          get: function () { return "msal.angular.login.request"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "msal", {
          get: function () { return "msal"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "no_account", {
          get: function () { return "NO_ACCOUNT"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "consumersUtid", {
          get: function () { return "9188040d-6c67-4c5b-b112-36a304b66dad"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "upn", {
          get: function () { return "upn"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "prompt_select_account", {
          get: function () { return "&prompt=select_account"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "prompt_none", {
          get: function () { return "&prompt=none"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "prompt", {
          get: function () { return "prompt"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "response_mode_fragment", {
          get: function () { return "&response_mode=fragment"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "resourceDelimiter", {
          get: function () { return "|"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "tokenRenewStatusCancelled", {
          get: function () { return "Canceled"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "tokenRenewStatusCompleted", {
          get: function () { return "Completed"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "tokenRenewStatusInProgress", {
          get: function () { return "In Progress"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "popUpWidth", {
          get: function () { return this._popUpWidth; },
          set: function (width) {
            this._popUpWidth = width;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "popUpHeight", {
          get: function () { return this._popUpHeight; },
          set: function (height) {
            this._popUpHeight = height;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "login", {
          get: function () { return "LOGIN"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "renewToken", {
          get: function () { return "RENEW_TOKEN"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "unknown", {
          get: function () { return "UNKNOWN"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "homeAccountIdentifier", {
          get: function () { return "homeAccountIdentifier"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "common", {
          get: function () { return "common"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "openidScope", {
          get: function () { return "openid"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "profileScope", {
          get: function () { return "profile"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "cacheLocationLocal", {
          get: function () { return "localStorage"; },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Constants, "cacheLocationSession", {
          get: function () { return "sessionStorage"; },
          enumerable: true,
          configurable: true
        });
        Constants._popUpWidth = 483;
        Constants._popUpHeight = 600;
        return Constants;
      }());
      exports.Constants = Constants;
      /**
       * @hidden
       */
      exports.CacheKeys = {
        AUTHORITY: "msal.authority",
        ACQUIRE_TOKEN_ACCOUNT: "msal.acquireTokenAccount"
      };
      /**
       * @hidden
       */
      exports.SSOTypes = {
        ACCOUNT: "account",
        SID: "sid",
        LOGIN_HINT: "login_hint",
        ID_TOKEN: "id_token",
        DOMAIN_HINT: "domain_hint",
        ORGANIZATIONS: "organizations",
        CONSUMERS: "consumers",
        ACCOUNT_ID: "accountIdentifier",
        HOMEACCOUNT_ID: "homeAccountIdentifier",
        LOGIN_REQ: "login_req",
        DOMAIN_REQ: "domain_req"
      };
      /**
       * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
       * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
       * internal partners too, hence the choice of generic "string" type instead of the "enum"
       * @hidden
       */
      exports.PromptState = {
        LOGIN: "login",
        SELECT_ACCOUNT: "select_account",
        CONSENT: "consent",
        NONE: "none",
      };
      exports.Library = {
        version: "1.0.1"
      };


      /***/
}),
/* 3 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = __webpack_require__(1);
      var Constants_1 = __webpack_require__(2);
      var ClientAuthError_1 = __webpack_require__(4);
      exports.ClientConfigurationErrorMessage = {
        configurationNotSet: {
          code: "no_config_set",
          desc: "Configuration has not been set. Please call the UserAgentApplication constructor with a valid Configuration object."
        },
        invalidCacheLocation: {
          code: "invalid_cache_location",
          desc: "The cache location provided is not valid."
        },
        noStorageSupported: {
          code: "browser_storage_not_supported",
          desc: "localStorage and sessionStorage are not supported."
        },
        noRedirectCallbacksSet: {
          code: "no_redirect_callbacks",
          desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/-basics."
        },
        invalidCallbackObject: {
          code: "invalid_callback_object",
          desc: "The object passed for the callback was invalid. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/-basics."
        },
        scopesRequired: {
          code: "scopes_required",
          desc: "Scopes are required to obtain an access token."
        },
        emptyScopes: {
          code: "empty_input_scopes_error",
          desc: "Scopes cannot be passed as empty array."
        },
        nonArrayScopes: {
          code: "nonarray_input_scopes_error",
          desc: "Scopes cannot be passed as non-array."
        },
        clientScope: {
          code: "clientid_input_scopes_error",
          desc: "Client ID can only be provided as a single scope."
        },
        invalidPrompt: {
          code: "invalid_prompt_value",
          desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'",
        },
        invalidAuthorityType: {
          code: "invalid_authority_type",
          desc: "The given authority is not a valid type of authority supported by MSAL. Please see here for valid authorities: <insert URL here>."
        },
        authorityUriInsecure: {
          code: "authority_uri_insecure",
          desc: "Authority URIs must use https."
        },
        authorityUriInvalidPath: {
          code: "authority_uri_invalid_path",
          desc: "Given authority URI is invalid."
        },
        unsupportedAuthorityValidation: {
          code: "unsupported_authority_validation",
          desc: "The authority validation is not supported for this authority type."
        },
        b2cAuthorityUriInvalidPath: {
          code: "b2c_authority_uri_invalid_path",
          desc: "The given URI for the B2C authority is invalid."
        },
        claimsRequestParsingError: {
          code: "claims_request_parsing_error",
          desc: "Could not parse the given claims request object."
        }
      };
      /**
       * Error thrown when there is an error in configuration of the .js library.
       */
      var ClientConfigurationError = /** @class */ (function (_super) {
        tslib_1.__extends(ClientConfigurationError, _super);
        function ClientConfigurationError(errorCode, errorMessage) {
          var _this = _super.call(this, errorCode, errorMessage) || this;
          _this.name = "ClientConfigurationError";
          Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
          return _this;
        }
        ClientConfigurationError.createNoSetConfigurationError = function () {
          return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.configurationNotSet.code, "" + exports.ClientConfigurationErrorMessage.configurationNotSet.desc);
        };
        ClientConfigurationError.createInvalidCacheLocationConfigError = function (givenCacheLocation) {
          return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCacheLocation.code, exports.ClientConfigurationErrorMessage.invalidCacheLocation.desc + " Provided value: " + givenCacheLocation + ". Possible values are: " + Constants_1.Constants.cacheLocationLocal + ", " + Constants_1.Constants.cacheLocationSession + ".");
        };
        ClientConfigurationError.createNoStorageSupportedError = function () {
          return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noStorageSupported.code, exports.ClientConfigurationErrorMessage.noStorageSupported.desc);
        };
        ClientConfigurationError.createRedirectCallbacksNotSetError = function () {
          return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.code, exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.desc);
        };
        ClientConfigurationError.createInvalidCallbackObjectError = function (callbackObject) {
          return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCallbackObject.code, exports.ClientConfigurationErrorMessage.invalidCallbackObject.desc + " Given value for callback function: " + callbackObject);
        };
        ClientConfigurationError.createEmptyScopesArrayError = function (scopesValue) {
          return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.emptyScopes.code, exports.ClientConfigurationErrorMessage.emptyScopes.desc + " Given value: " + scopesValue + ".");
        };
        ClientConfigurationError.createScopesNonArrayError = function (scopesValue) {
          return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.nonArrayScopes.code, exports.ClientConfigurationErrorMessage.nonArrayScopes.desc + " Given value: " + scopesValue + ".");
        };
        ClientConfigurationError.createClientIdSingleScopeError = function (scopesValue) {
          return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.clientScope.code, exports.ClientConfigurationErrorMessage.clientScope.desc + " Given value: " + scopesValue + ".");
        };
        ClientConfigurationError.createScopesRequiredError = function (scopesValue) {
          return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.scopesRequired.code, exports.ClientConfigurationErrorMessage.scopesRequired.desc + " Given value: " + scopesValue);
        };
        ClientConfigurationError.createInvalidPromptError = function (promptValue) {
          return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidPrompt.code, exports.ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
        };
        ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
          return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.claimsRequestParsingError.code, exports.ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
        };
        return ClientConfigurationError;
      }(ClientAuthError_1.ClientAuthError));
      exports.ClientConfigurationError = ClientConfigurationError;


      /***/
}),
/* 4 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = __webpack_require__(1);
      var AuthError_1 = __webpack_require__(5);
      var Utils_1 = __webpack_require__(0);
      exports.ClientAuthErrorMessage = {
        multipleMatchingTokens: {
          code: "multiple_matching_tokens",
          desc: "The cache contains multiple tokens satisfying the requirements. " +
            "Call AcquireToken again providing more requirements like authority."
        },
        multipleCacheAuthorities: {
          code: "multiple_authorities",
          desc: "Multiple authorities found in the cache. Pass authority in the API overload."
        },
        endpointResolutionError: {
          code: "endpoints_resolution_error",
          desc: "Error: could not resolve endpoints. Please check network and try again."
        },
        popUpWindowError: {
          code: "popup_window_error",
          desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
        },
        tokenRenewalError: {
          code: "token_renewal_error",
          desc: "Token renewal operation failed due to timeout."
        },
        invalidIdToken: {
          code: "invalid_id_token",
          desc: "Invalid ID token format."
        },
        invalidStateError: {
          code: "invalid_state_error",
          desc: "Invalid state."
        },
        nonceMismatchError: {
          code: "nonce_mismatch_error",
          desc: "Nonce is not matching, Nonce received: "
        },
        loginProgressError: {
          code: "login_progress_error",
          desc: "Login_In_Progress: Error during login call - login is already in progress."
        },
        acquireTokenProgressError: {
          code: "acquiretoken_progress_error",
          desc: "AcquireToken_In_Progress: Error during login call - login is already in progress."
        },
        userCancelledError: {
          code: "user_cancelled",
          desc: "User cancelled the flow."
        },
        callbackError: {
          code: "callback_error",
          desc: "Error occurred in token received callback function."
        },
        userLoginRequiredError: {
          code: "user_login_error",
          desc: "User login is required."
        },
        userDoesNotExistError: {
          code: "user_non_existent",
          desc: "User object does not exist. Please call a login API."
        },
        clientInfoDecodingError: {
          code: "client_info_decoding_error",
          desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
        },
        clientInfoNotPopulatedError: {
          code: "client_info_not_populated_error",
          desc: "The service did not populate client_info in the response, Please verify with the service team"
        },
        nullOrEmptyIdToken: {
          code: "null_or_empty_id_token",
          desc: "The idToken is null or empty. Please review the trace to determine the root cause."
        },
        idTokenNotParsed: {
          code: "id_token_parsing_error",
          desc: "ID token cannot be parsed. Please review stack trace to determine root cause."
        },
        tokenEncodingError: {
          code: "token_encoding_error",
          desc: "The token to be decoded is not encoded correctly."
        }
      };
      /**
       * Error thrown when there is an error in the client code running on the browser.
       */
      var ClientAuthError = /** @class */ (function (_super) {
        tslib_1.__extends(ClientAuthError, _super);
        function ClientAuthError(errorCode, errorMessage) {
          var _this = _super.call(this, errorCode, errorMessage) || this;
          _this.name = "ClientAuthError";
          Object.setPrototypeOf(_this, ClientAuthError.prototype);
          return _this;
        }
        ClientAuthError.createEndpointResolutionError = function (errDetail) {
          var errorMessage = exports.ClientAuthErrorMessage.endpointResolutionError.desc;
          if (errDetail && !Utils_1.Utils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
          }
          return new ClientAuthError(exports.ClientAuthErrorMessage.endpointResolutionError.code, errorMessage);
        };
        ClientAuthError.createMultipleMatchingTokensInCacheError = function (scope) {
          return new ClientAuthError(exports.ClientAuthErrorMessage.multipleMatchingTokens.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
        };
        ClientAuthError.createMultipleAuthoritiesInCacheError = function (scope) {
          return new ClientAuthError(exports.ClientAuthErrorMessage.multipleCacheAuthorities.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleCacheAuthorities.desc + ".");
        };
        ClientAuthError.createPopupWindowError = function (errDetail) {
          var errorMessage = exports.ClientAuthErrorMessage.popUpWindowError.desc;
          if (errDetail && !Utils_1.Utils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
          }
          return new ClientAuthError(exports.ClientAuthErrorMessage.popUpWindowError.code, errorMessage);
        };
        ClientAuthError.createTokenRenewalTimeoutError = function () {
          return new ClientAuthError(exports.ClientAuthErrorMessage.tokenRenewalError.code, exports.ClientAuthErrorMessage.tokenRenewalError.desc);
        };
        ClientAuthError.createInvalidIdTokenError = function (idToken) {
          return new ClientAuthError(exports.ClientAuthErrorMessage.invalidIdToken.code, exports.ClientAuthErrorMessage.invalidIdToken.desc + " Given token: " + idToken);
        };
        //TODO: Is this not a security flaw to send the user the state expected??
        ClientAuthError.createInvalidStateError = function (invalidState, actualState) {
          return new ClientAuthError(exports.ClientAuthErrorMessage.invalidStateError.code, exports.ClientAuthErrorMessage.invalidStateError.desc + " " + invalidState + ", state expected : " + actualState + ".");
        };
        //TODO: Is this not a security flaw to send the user the Nonce expected??
        ClientAuthError.createNonceMismatchError = function (invalidNonce, actualNonce) {
          return new ClientAuthError(exports.ClientAuthErrorMessage.nonceMismatchError.code, exports.ClientAuthErrorMessage.nonceMismatchError.desc + " " + invalidNonce + ", nonce expected : " + actualNonce + ".");
        };
        ClientAuthError.createLoginInProgressError = function () {
          return new ClientAuthError(exports.ClientAuthErrorMessage.loginProgressError.code, exports.ClientAuthErrorMessage.loginProgressError.desc);
        };
        ClientAuthError.createAcquireTokenInProgressError = function () {
          return new ClientAuthError(exports.ClientAuthErrorMessage.acquireTokenProgressError.code, exports.ClientAuthErrorMessage.acquireTokenProgressError.desc);
        };
        ClientAuthError.createUserCancelledError = function () {
          return new ClientAuthError(exports.ClientAuthErrorMessage.userCancelledError.code, exports.ClientAuthErrorMessage.userCancelledError.desc);
        };
        ClientAuthError.createErrorInCallbackFunction = function (errorDesc) {
          return new ClientAuthError(exports.ClientAuthErrorMessage.callbackError.code, exports.ClientAuthErrorMessage.callbackError.desc + " " + errorDesc + ".");
        };
        ClientAuthError.createUserLoginRequiredError = function () {
          return new ClientAuthError(exports.ClientAuthErrorMessage.userLoginRequiredError.code, exports.ClientAuthErrorMessage.userLoginRequiredError.desc);
        };
        ClientAuthError.createUserDoesNotExistError = function () {
          return new ClientAuthError(exports.ClientAuthErrorMessage.userDoesNotExistError.code, exports.ClientAuthErrorMessage.userDoesNotExistError.desc);
        };
        ClientAuthError.createClientInfoDecodingError = function (caughtError) {
          return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoDecodingError.code, exports.ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
        };
        ClientAuthError.createClientInfoNotPopulatedError = function (caughtError) {
          return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.code, exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.desc + " Failed with error: " + caughtError);
        };
        ClientAuthError.createIdTokenNullOrEmptyError = function (invalidRawTokenString) {
          return new ClientAuthError(exports.ClientAuthErrorMessage.nullOrEmptyIdToken.code, exports.ClientAuthErrorMessage.nullOrEmptyIdToken.desc + " Raw ID Token Value: " + invalidRawTokenString);
        };
        ClientAuthError.createIdTokenParsingError = function (caughtParsingError) {
          return new ClientAuthError(exports.ClientAuthErrorMessage.idTokenNotParsed.code, exports.ClientAuthErrorMessage.idTokenNotParsed.desc + " Failed with error: " + caughtParsingError);
        };
        ClientAuthError.createTokenEncodingError = function (incorrectlyEncodedToken) {
          return new ClientAuthError(exports.ClientAuthErrorMessage.tokenEncodingError.code, exports.ClientAuthErrorMessage.tokenEncodingError.desc + " Attempted to decode: " + incorrectlyEncodedToken);
        };
        return ClientAuthError;
      }(AuthError_1.AuthError));
      exports.ClientAuthError = ClientAuthError;


      /***/
}),
/* 5 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = __webpack_require__(1);
      exports.AuthErrorMessage = {
        unexpectedError: {
          code: "unexpected_error",
          desc: "Unexpected error in authentication."
        }
      };
      /**
      * General error class thrown by the MSAL.js library.
      */
      var AuthError = /** @class */ (function (_super) {
        tslib_1.__extends(AuthError, _super);
        function AuthError(errorCode, errorMessage) {
          var _this = _super.call(this, errorMessage) || this;
          Object.setPrototypeOf(_this, AuthError.prototype);
          _this.errorCode = errorCode;
          _this.errorMessage = errorMessage;
          _this.name = "AuthError";
          return _this;
        }
        AuthError.createUnexpectedError = function (errDesc) {
          return new AuthError(exports.AuthErrorMessage.unexpectedError.code, exports.AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
        };
        return AuthError;
      }(Error));
      exports.AuthError = AuthError;


      /***/
}),
/* 6 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var Utils_1 = __webpack_require__(0);
      var ClientConfigurationError_1 = __webpack_require__(3);
      var XHRClient_1 = __webpack_require__(12);
      /**
       * @hidden
       */
      var AuthorityType;
      (function (AuthorityType) {
        AuthorityType[AuthorityType["Aad"] = 0] = "Aad";
        AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
        AuthorityType[AuthorityType["B2C"] = 2] = "B2C";
      })(AuthorityType = exports.AuthorityType || (exports.AuthorityType = {}));
      /**
       * @hidden
       */
      var Authority = /** @class */ (function () {
        function Authority(authority, validateAuthority) {
          this.IsValidationEnabled = validateAuthority;
          this.CanonicalAuthority = authority;
          this.validateAsUri();
        }
        Object.defineProperty(Authority.prototype, "Tenant", {
          get: function () {
            return this.CanonicalAuthorityUrlComponents.PathSegments[0];
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Authority.prototype, "AuthorizationEndpoint", {
          get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.AuthorizationEndpoint.replace("{tenant}", this.Tenant);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Authority.prototype, "EndSessionEndpoint", {
          get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.EndSessionEndpoint.replace("{tenant}", this.Tenant);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Authority.prototype, "SelfSignedJwtAudience", {
          get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.Issuer.replace("{tenant}", this.Tenant);
          },
          enumerable: true,
          configurable: true
        });
        Authority.prototype.validateResolved = function () {
          if (!this.tenantDiscoveryResponse) {
            throw "Please call ResolveEndpointsAsync first";
          }
        };
        Object.defineProperty(Authority.prototype, "CanonicalAuthority", {
          /**
           * A URL that is the authority set by the developer
           */
          get: function () {
            return this.canonicalAuthority;
          },
          set: function (url) {
            this.canonicalAuthority = Utils_1.Utils.CanonicalizeUri(url);
            this.canonicalAuthorityUrlComponents = null;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Authority.prototype, "CanonicalAuthorityUrlComponents", {
          get: function () {
            if (!this.canonicalAuthorityUrlComponents) {
              this.canonicalAuthorityUrlComponents = Utils_1.Utils.GetUrlComponents(this.CanonicalAuthority);
            }
            return this.canonicalAuthorityUrlComponents;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Authority.prototype, "DefaultOpenIdConfigurationEndpoint", {
          /**
           * // http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
           */
          get: function () {
            return this.CanonicalAuthority + "v2.0/.well-known/openid-configuration";
          },
          enumerable: true,
          configurable: true
        });
        /**
         * Given a string, validate that it is of the form https://domain/path
         */
        Authority.prototype.validateAsUri = function () {
          var components;
          try {
            components = this.CanonicalAuthorityUrlComponents;
          }
          catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
          }
          if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInsecure;
          }
          if (!components.PathSegments || components.PathSegments.length < 1) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInvalidPath;
          }
        };
        /**
         * Calls the OIDC endpoint and returns the response
         */
        Authority.prototype.DiscoverEndpoints = function (openIdConfigurationEndpoint) {
          var client = new XHRClient_1.XhrClient();
          return client.sendRequestAsync(openIdConfigurationEndpoint, "GET", /*enableCaching: */ true)
            .then(function (response) {
              return {
                AuthorizationEndpoint: response.authorization_endpoint,
                EndSessionEndpoint: response.end_session_endpoint,
                Issuer: response.issuer
              };
            });
        };
        /**
         * Returns a promise.
         * Checks to see if the authority is in the cache
         * Discover endpoints via openid-configuration
         * If successful, caches the endpoint for later use in OIDC
         */
        Authority.prototype.resolveEndpointsAsync = function () {
          var _this = this;
          var openIdConfigurationEndpoint = "";
          return this.GetOpenIdConfigurationEndpointAsync().then(function (openIdConfigurationEndpointResponse) {
            openIdConfigurationEndpoint = openIdConfigurationEndpointResponse;
            return _this.DiscoverEndpoints(openIdConfigurationEndpoint);
          }).then(function (tenantDiscoveryResponse) {
            _this.tenantDiscoveryResponse = tenantDiscoveryResponse;
            return _this;
          });
        };
        return Authority;
      }());
      exports.Authority = Authority;


      /***/
}),
/* 7 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var Utils_1 = __webpack_require__(0);
      var LogLevel;
      (function (LogLevel) {
        LogLevel[LogLevel["Error"] = 0] = "Error";
        LogLevel[LogLevel["Warning"] = 1] = "Warning";
        LogLevel[LogLevel["Info"] = 2] = "Info";
        LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
      })(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
      var Logger = /** @class */ (function () {
        function Logger(localCallback, options) {
          if (options === void 0) { options = {}; }
          /**
           * @hidden
           */
          this.level = LogLevel.Info;
          var _a = options.correlationId, correlationId = _a === void 0 ? "" : _a, _b = options.level, level = _b === void 0 ? LogLevel.Info : _b, _c = options.piiLoggingEnabled, piiLoggingEnabled = _c === void 0 ? false : _c;
          this.localCallback = localCallback;
          this.correlationId = correlationId;
          this.level = level;
          this.piiLoggingEnabled = piiLoggingEnabled;
        }
        /**
         * @hidden
         */
        Logger.prototype.logMessage = function (logLevel, logMessage, containsPii) {
          if ((logLevel > this.level) || (!this.piiLoggingEnabled && containsPii)) {
            return;
          }
          var timestamp = new Date().toUTCString();
          var log;
          if (!Utils_1.Utils.isEmpty(this.correlationId)) {
            log = timestamp + ":" + this.correlationId + "-" + Utils_1.Utils.getLibraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
          }
          else {
            log = timestamp + ":" + Utils_1.Utils.getLibraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
          }
          this.executeCallback(logLevel, log, containsPii);
        };
        /**
         * @hidden
         */
        Logger.prototype.executeCallback = function (level, message, containsPii) {
          if (this.localCallback) {
            this.localCallback(level, message, containsPii);
          }
        };
        /**
         * @hidden
         */
        Logger.prototype.error = function (message) {
          this.logMessage(LogLevel.Error, message, false);
        };
        /**
         * @hidden
         */
        Logger.prototype.errorPii = function (message) {
          this.logMessage(LogLevel.Error, message, true);
        };
        /**
         * @hidden
         */
        Logger.prototype.warning = function (message) {
          this.logMessage(LogLevel.Warning, message, false);
        };
        /**
         * @hidden
         */
        Logger.prototype.warningPii = function (message) {
          this.logMessage(LogLevel.Warning, message, true);
        };
        /**
         * @hidden
         */
        Logger.prototype.info = function (message) {
          this.logMessage(LogLevel.Info, message, false);
        };
        /**
         * @hidden
         */
        Logger.prototype.infoPii = function (message) {
          this.logMessage(LogLevel.Info, message, true);
        };
        /**
         * @hidden
         */
        Logger.prototype.verbose = function (message) {
          this.logMessage(LogLevel.Verbose, message, false);
        };
        /**
         * @hidden
         */
        Logger.prototype.verbosePii = function (message) {
          this.logMessage(LogLevel.Verbose, message, true);
        };
        return Logger;
      }());
      exports.Logger = Logger;


      /***/
}),
/* 8 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = __webpack_require__(1);
      var AuthError_1 = __webpack_require__(5);
      exports.ServerErrorMessage = {
        serverUnavailable: {
          code: "server_unavailable",
          desc: "Server is temporarily unavailable."
        },
        unknownServerError: {
          code: "unknown_server_error"
        },
      };
      /**
       * Error thrown when there is an error with the server code, for example, unavailability.
       */
      var ServerError = /** @class */ (function (_super) {
        tslib_1.__extends(ServerError, _super);
        function ServerError(errorCode, errorMessage) {
          var _this = _super.call(this, errorCode, errorMessage) || this;
          _this.name = "ServerError";
          Object.setPrototypeOf(_this, ServerError.prototype);
          return _this;
        }
        ServerError.createServerUnavailableError = function () {
          return new ServerError(exports.ServerErrorMessage.serverUnavailable.code, exports.ServerErrorMessage.serverUnavailable.desc);
        };
        ServerError.createUnknownServerError = function (errorDesc) {
          return new ServerError(exports.ServerErrorMessage.unknownServerError.code, errorDesc);
        };
        return ServerError;
      }(AuthError_1.AuthError));
      exports.ServerError = ServerError;


      /***/
}),
/* 9 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = __webpack_require__(1);
      var AccessTokenKey_1 = __webpack_require__(19);
      var AccessTokenValue_1 = __webpack_require__(22);
      var ServerRequestParameters_1 = __webpack_require__(23);
      var ClientInfo_1 = __webpack_require__(24);
      var Constants_1 = __webpack_require__(2);
      var IdToken_1 = __webpack_require__(25);
      var Storage_1 = __webpack_require__(26);
      var Account_1 = __webpack_require__(10);
      var Utils_1 = __webpack_require__(0);
      var AuthorityFactory_1 = __webpack_require__(28);
      var Configuration_1 = __webpack_require__(13);
      var AuthenticationParameters_1 = __webpack_require__(14);
      var ClientConfigurationError_1 = __webpack_require__(3);
      var AuthError_1 = __webpack_require__(5);
      var ClientAuthError_1 = __webpack_require__(4);
      var ServerError_1 = __webpack_require__(8);
      var InteractionRequiredAuthError_1 = __webpack_require__(15);
      var AuthResponse_1 = __webpack_require__(16);
      // default authority
      var DEFAULT_AUTHORITY = "https://login.microsoftonline.com/common";
      /**
       * @hidden
       * @ignore
       * response_type from OpenIDConnect
       * References: https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html & https://tools.ietf.org/html/rfc6749#section-4.2.1
       * Since we support only implicit flow in this library, we restrict the response_type support to only 'token' and 'id_token'
       *
       */
      var ResponseTypes = {
        id_token: "id_token",
        token: "token",
        id_token_token: "id_token token"
      };
      /**
       * @hidden
       * @ignore
       * A wrapper to handle the token response/error within the iFrame always
       *
       * @param target
       * @param propertyKey
       * @param descriptor
       */
      var resolveTokenOnlyIfOutOfIframe = function (target, propertyKey, descriptor) {
        var tokenAcquisitionMethod = descriptor.value;
        descriptor.value = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return this.isInIframe()
            ? new Promise(function () {
              return;
            })
            : tokenAcquisitionMethod.apply(this, args);
        };
        return descriptor;
      };
      /**
       * UserAgentApplication class
       *
       * Object Instance that the developer can use to make loginXX OR acquireTokenXX functions
       */
      var UserAgentApplication = /** @class */ (function () {
        /**
         * @constructor
         * Constructor for the UserAgentApplication used to instantiate the UserAgentApplication object
         *
         * Important attributes in the Configuration object for auth are:
         * - clientID: the application ID of your application.
         * You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
         * - authority: the authority URL for your application.
         *
         * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
         * It is of the form https://login.microsoftonline.com/&lt;Enter_the_Tenant_Info_Here&gt;.
         * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
         * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
         * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
         * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
         *
         *
         * In Azure B2C, authority is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/&lt;policyName&gt;/
      
         * @param {@link (Configuration:type)} configuration object for the MSAL UserAgentApplication instance
         */
        function UserAgentApplication(configuration) {
          // callbacks for token/error
          this.authResponseCallback = null;
          this.tokenReceivedCallback = null;
          this.errorReceivedCallback = null;
          // Set the Configuration
          this.config = Configuration_1.buildConfiguration(configuration);
          // Set the callback boolean
          this.redirectCallbacksSet = false;
          this.logger = this.config.system.logger;
          this.clientId = this.config.auth.clientId;
          this.inCookie = this.config.cache.storeAuthStateInCookie;
          // if no authority is passed, set the default: "https://login.microsoftonline.com/common"
          this.authority = this.config.auth.authority || DEFAULT_AUTHORITY;
          // track login and acquireToken in progress
          this.loginInProgress = false;
          this.acquireTokenInProgress = false;
          // cache keys msal - typescript throws an error if any value other than "localStorage" or "sessionStorage" is passed
          try {
            this.cacheStorage = new Storage_1.Storage(this.config.cache.cacheLocation);
          }
          catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCacheLocationConfigError(this.config.cache.cacheLocation);
          }
          // Initialize window handling code
          window.openedWindows = [];
          window.activeRenewals = {};
          window.renewStates = [];
          window.callbackMappedToRenewStates = {};
          window.promiseMappedToRenewStates = {};
          window.msal = this;
          var urlHash = window.location.hash;
          var isCallback = this.isCallback(urlHash);
          // On the server 302 - Redirect, handle this
          if (!this.config.framework.isAngular) {
            if (isCallback) {
              this.handleAuthenticationResponse(urlHash);
            }
          }
        }
        Object.defineProperty(UserAgentApplication.prototype, "authority", {
          /**
           * Method to manage the authority URL.
           *
           * @returns {string} authority
           */
          get: function () {
            return this.authorityInstance.CanonicalAuthority;
          },
          /**
           * setter for the authority URL
           * @param {string} authority
           */
          // If the developer passes an authority, create an instance
          set: function (val) {
            this.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(val, this.config.auth.validateAuthority);
          },
          enumerable: true,
          configurable: true
        });
        /**
         * Get the current authority instance from the MSAL configuration object
         *
         * @returns {@link Authority} authority instance
         */
        UserAgentApplication.prototype.getAuthorityInstance = function () {
          return this.authorityInstance;
        };
        UserAgentApplication.prototype.handleRedirectCallback = function (authOrTokenCallback, errorReceivedCallback) {
          if (!authOrTokenCallback) {
            this.redirectCallbacksSet = false;
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCallbackObjectError(authOrTokenCallback);
          }
          // Set callbacks
          if (errorReceivedCallback) {
            this.tokenReceivedCallback = authOrTokenCallback;
            this.errorReceivedCallback = errorReceivedCallback;
            this.logger.warning("This overload for callback is deprecated - please change the format of the callbacks to a single callback as shown: (err: AuthError, response: AuthResponse).");
          }
          else {
            this.authResponseCallback = authOrTokenCallback;
          }
          this.redirectCallbacksSet = true;
          // On the server 302 - Redirect, handle this
          if (!this.config.framework.isAngular) {
            var cachedHash = this.cacheStorage.getItem(Constants_1.Constants.urlHash);
            if (cachedHash) {
              this.processCallBack(cachedHash, null);
            }
          }
        };
        UserAgentApplication.prototype.redirectSuccessHandler = function (response) {
          if (this.errorReceivedCallback) {
            this.tokenReceivedCallback(response);
          }
          else if (this.authResponseCallback) {
            this.authResponseCallback(null, response);
          }
        };
        UserAgentApplication.prototype.redirectErrorHandler = function (authErr, response) {
          if (this.errorReceivedCallback) {
            this.errorReceivedCallback(authErr, response.accountState);
          }
          else {
            this.authResponseCallback(authErr, response);
          }
        };
        //#endregion
        //#region Redirect Flow
        /**
         * Use when initiating the login process by redirecting the user's browser to the authorization endpoint.
         * @param {@link (AuthenticationParameters:type)}
         */
        UserAgentApplication.prototype.loginRedirect = function (request) {
          var _this = this;
          // Throw error if callbacks are not set before redirect
          if (!this.redirectCallbacksSet) {
            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
          }
          // Creates navigate url; saves value in cache; redirect user to AAD
          if (this.loginInProgress) {
            this.redirectErrorHandler(ClientAuthError_1.ClientAuthError.createLoginInProgressError(), AuthResponse_1.buildResponseStateOnly(request && request.state));
            return;
          }
          // if extraScopesToConsent is passed, append them to the login request
          var scopes = this.appendScopes(request);
          // Validate and filter scopes (the validate function will throw if validation fails)
          this.validateInputScope(scopes, false);
          var account = this.getAccount();
          // defer queryParameters generation to Helper if developer passes account/sid/login_hint
          if (Utils_1.Utils.isSSOParam(request)) {
            // if account is not provided, we pass null
            this.loginRedirectHelper(account, request, scopes);
          }
          // else handle the library data
          else {
            // extract ADAL id_token if exists
            var adalIdToken = this.extractADALIdToken();
            // silent login if ADAL id_token is retrieved successfully - SSO
            if (adalIdToken && !scopes) {
              this.logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
              var tokenRequest = this.buildIDTokenRequest(request);
              this.silentLogin = true;
              this.acquireTokenSilent(tokenRequest).then(function (response) {
                _this.silentLogin = false;
                _this.logger.info("Unified cache call is successful");
                if (_this.redirectCallbacksSet) {
                  _this.redirectSuccessHandler(response);
                }
                return;
              }, function (error) {
                _this.silentLogin = false;
                _this.logger.error("Error occurred during unified cache ATS");
                // call the loginRedirectHelper later with no user account context
                _this.loginRedirectHelper(null, request, scopes);
              });
            }
            // else proceed to login
            else {
              // call the loginRedirectHelper later with no user account context
              this.loginRedirectHelper(null, request, scopes);
            }
          }
        };
        /**
         * @hidden
         * @ignore
         * Helper function to loginRedirect
         *
         * @param account
         * @param AuthenticationParameters
         * @param scopes
         */
        UserAgentApplication.prototype.loginRedirectHelper = function (account, request, scopes) {
          var _this = this;
          // Track login in progress
          this.loginInProgress = true;
          this.authorityInstance.resolveEndpointsAsync().then(function () {
            // create the Request to be sent to the Server
            var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(_this.authorityInstance, _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), request && request.state);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
            serverAuthenticationRequest = _this.populateQueryParams(account, request, serverAuthenticationRequest);
            // if the user sets the login start page - angular only??
            var loginStartPage = _this.cacheStorage.getItem(Constants_1.Constants.angularLoginRequest);
            if (!loginStartPage || loginStartPage === "") {
              loginStartPage = window.location.href;
            }
            else {
              _this.cacheStorage.setItem(Constants_1.Constants.angularLoginRequest, "");
            }
            _this.updateCacheEntries(serverAuthenticationRequest, account, loginStartPage);
            // build URL to navigate to proceed with the login
            var urlNavigate = serverAuthenticationRequest.createNavigateUrl(scopes) + Constants_1.Constants.response_mode_fragment;
            // Redirect user to login URL
            _this.promptUser(urlNavigate);
          }).catch(function (err) {
            _this.logger.warning("could not resolve endpoints");
            _this.redirectErrorHandler(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString), AuthResponse_1.buildResponseStateOnly(request && request.state));
          });
        };
        /**
         * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint.
         * @param {@link (AuthenticationParameters:type)}
         *
         * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
         */
        UserAgentApplication.prototype.acquireTokenRedirect = function (request) {
          var _this = this;
          // Throw error if callbacks are not set before redirect
          if (!this.redirectCallbacksSet) {
            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
          }
          // Validate and filter scopes (the validate function will throw if validation fails)
          this.validateInputScope(request.scopes, true);
          // Get the account object if a session exists
          var account = request.account || this.getAccount();
          // If already in progress, do not proceed
          if (this.acquireTokenInProgress) {
            this.redirectErrorHandler(ClientAuthError_1.ClientAuthError.createAcquireTokenInProgressError(), AuthResponse_1.buildResponseStateOnly(this.getAccountState(request.state)));
            return;
          }
          // If no session exists, prompt the user to login.
          if (!account && !(request.sid || request.loginHint)) {
            this.logger.info("User login is required");
            throw ClientAuthError_1.ClientAuthError.createUserLoginRequiredError();
          }
          var serverAuthenticationRequest;
          var acquireTokenAuthority = request.authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, this.config.auth.validateAuthority) : this.authorityInstance;
          // Track the acquireToken progress
          this.acquireTokenInProgress = true;
          acquireTokenAuthority.resolveEndpointsAsync().then(function () {
            // On Fulfillment
            var responseType = _this.getTokenType(account, request.scopes, false);
            serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(acquireTokenAuthority, _this.clientId, request.scopes, responseType, _this.getRedirectUri(), request.state);
            _this.updateCacheEntries(serverAuthenticationRequest, account);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
            serverAuthenticationRequest = _this.populateQueryParams(account, request, serverAuthenticationRequest);
            // Construct urlNavigate
            var urlNavigate = serverAuthenticationRequest.createNavigateUrl(request.scopes) + Constants_1.Constants.response_mode_fragment;
            // set state in cache and redirect to urlNavigate
            if (urlNavigate) {
              _this.cacheStorage.setItem(Constants_1.Constants.stateAcquireToken, serverAuthenticationRequest.state, _this.inCookie);
              window.location.replace(urlNavigate);
            }
          }).catch(function (err) {
            _this.logger.warning("could not resolve endpoints");
            _this.redirectErrorHandler(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString), AuthResponse_1.buildResponseStateOnly(request.state));
          });
        };
        /**
         * @hidden
         * @ignore
         * Checks if the redirect response is received from the STS. In case of redirect, the url fragment has either id_token, access_token or error.
         * @param {string} hash - Hash passed from redirect page.
         * @returns {Boolean} - true if response contains id_token, access_token or error, false otherwise.
         */
        // TODO - rename this, the name is confusing
        UserAgentApplication.prototype.isCallback = function (hash) {
          hash = this.getHash(hash);
          var parameters = Utils_1.Utils.deserialize(hash);
          return (parameters.hasOwnProperty(Constants_1.Constants.errorDescription) ||
            parameters.hasOwnProperty(Constants_1.Constants.error) ||
            parameters.hasOwnProperty(Constants_1.Constants.accessToken) ||
            parameters.hasOwnProperty(Constants_1.Constants.idToken));
        };
        //#endregion
        //#region Popup Flow
        /**
         * Use when initiating the login process via opening a popup window in the user's browser
         *
         * @param {@link (AuthenticationParameters:type)}
         *
         * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
         */
        UserAgentApplication.prototype.loginPopup = function (request) {
          var _this = this;
          // Creates navigate url; saves value in cache; redirect user to AAD
          return new Promise(function (resolve, reject) {
            // Fail if login is already in progress
            if (_this.loginInProgress) {
              return reject(ClientAuthError_1.ClientAuthError.createLoginInProgressError());
            }
            // if extraScopesToConsent is passed, append them to the login request
            var scopes = _this.appendScopes(request);
            // Validate and filter scopes (the validate function will throw if validation fails)
            _this.validateInputScope(scopes, false);
            var account = _this.getAccount();
            // add the prompt parameter to the 'extraQueryParameters' if passed
            if (Utils_1.Utils.isSSOParam(request)) {
              // if account is not provided, we pass null
              _this.loginPopupHelper(account, resolve, reject, request, scopes);
            }
            // else handle the library data
            else {
              // Extract ADAL id_token if it exists
              var adalIdToken = _this.extractADALIdToken();
              // silent login if ADAL id_token is retrieved successfully - SSO
              if (adalIdToken && !scopes) {
                _this.logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                var tokenRequest = _this.buildIDTokenRequest(request);
                _this.silentLogin = true;
                _this.acquireTokenSilent(tokenRequest)
                  .then(function (response) {
                    _this.silentLogin = false;
                    _this.logger.info("Unified cache call is successful");
                    resolve(response);
                  }, function (error) {
                    _this.silentLogin = false;
                    _this.logger.error("Error occurred during unified cache ATS");
                    _this.loginPopupHelper(null, resolve, reject, request, scopes);
                  });
              }
              // else proceed with login
              else {
                _this.loginPopupHelper(null, resolve, reject, request, scopes);
              }
            }
          });
        };
        /**
         * @hidden
         * Helper function to loginPopup
         *
         * @param account
         * @param request
         * @param resolve
         * @param reject
         * @param scopes
         */
        UserAgentApplication.prototype.loginPopupHelper = function (account, resolve, reject, request, scopes) {
          var _this = this;
          if (!scopes) {
            scopes = [this.clientId];
          }
          var scope = scopes.join(" ").toLowerCase();
          // Generate a popup window
          var popUpWindow = this.openWindow("about:blank", "_blank", 1, this, resolve, reject);
          if (!popUpWindow) {
            // We pass reject in openWindow, we reject there during an error
            return;
          }
          // Track login progress
          this.loginInProgress = true;
          // Resolve endpoint
          this.authorityInstance.resolveEndpointsAsync().then(function () {
            var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(_this.authorityInstance, _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), request && request.state);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer;
            serverAuthenticationRequest = _this.populateQueryParams(account, request, serverAuthenticationRequest);
            _this.updateCacheEntries(serverAuthenticationRequest, account, window.location.href);
            // Cache the state, nonce, and login request data
            _this.cacheStorage.setItem(Constants_1.Constants.loginRequest, window.location.href, _this.inCookie);
            _this.cacheStorage.setItem(Constants_1.Constants.loginError, "");
            _this.cacheStorage.setItem(Constants_1.Constants.nonceIdToken, serverAuthenticationRequest.nonce, _this.inCookie);
            _this.cacheStorage.setItem(Constants_1.Constants.msalError, "");
            _this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
            // cache authorityKey
            _this.setAuthorityCache(serverAuthenticationRequest.state, _this.authority);
            // Build the URL to navigate to in the popup window
            var urlNavigate = serverAuthenticationRequest.createNavigateUrl(scopes) + Constants_1.Constants.response_mode_fragment;
            window.renewStates.push(serverAuthenticationRequest.state);
            window.requestType = Constants_1.Constants.login;
            // Register callback to capture results from server
            _this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
            // Navigate url in popupWindow
            if (popUpWindow) {
              _this.logger.infoPii("Navigated Popup window to:" + urlNavigate);
              popUpWindow.location.href = urlNavigate;
            }
          }, function () {
            // Endpoint resolution failure error
            _this.logger.info(ClientAuthError_1.ClientAuthErrorMessage.endpointResolutionError.code + ":" + ClientAuthError_1.ClientAuthErrorMessage.endpointResolutionError.desc);
            _this.cacheStorage.setItem(Constants_1.Constants.msalError, ClientAuthError_1.ClientAuthErrorMessage.endpointResolutionError.code);
            _this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, ClientAuthError_1.ClientAuthErrorMessage.endpointResolutionError.desc);
            // reject that is passed in - REDO this in the subsequent refactor, passing reject is confusing
            if (reject) {
              reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError());
            }
            // Close the popup window
            if (popUpWindow) {
              popUpWindow.close();
            }
            // this is an all catch for any failure for the above code except the specific 'reject' call
          }).catch(function (err) {
            _this.logger.warning("could not resolve endpoints");
            reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString));
          });
        };
        /**
         * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
         * @param {@link AuthenticationParameters}
         *
         * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
         * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
         */
        UserAgentApplication.prototype.acquireTokenPopup = function (request) {
          var _this = this;
          return new Promise(function (resolve, reject) {
            // Validate and filter scopes (the validate function will throw if validation fails)
            _this.validateInputScope(request.scopes, true);
            var scope = request.scopes.join(" ").toLowerCase();
            // Get the account object if a session exists
            var account = request.account || _this.getAccount();
            // If already in progress, throw an error and reject the request
            if (_this.acquireTokenInProgress) {
              return reject(ClientAuthError_1.ClientAuthError.createAcquireTokenInProgressError());
            }
            // If no session exists, prompt the user to login.
            if (!account && !(request.sid || request.loginHint)) {
              _this.logger.info("User login is required");
              return reject(ClientAuthError_1.ClientAuthError.createUserLoginRequiredError());
            }
            // track the acquireToken progress
            _this.acquireTokenInProgress = true;
            var serverAuthenticationRequest;
            var acquireTokenAuthority = request.authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority) : _this.authorityInstance;
            // Open the popup window
            var popUpWindow = _this.openWindow("about:blank", "_blank", 1, _this, resolve, reject);
            if (!popUpWindow) {
              // We pass reject to openWindow, so we are rejecting there.
              return;
            }
            acquireTokenAuthority.resolveEndpointsAsync().then(function () {
              // On fullfillment
              var responseType = _this.getTokenType(account, request.scopes, false);
              serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(acquireTokenAuthority, _this.clientId, request.scopes, responseType, _this.getRedirectUri(), request.state);
              // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
              serverAuthenticationRequest = _this.populateQueryParams(account, request, serverAuthenticationRequest);
              _this.updateCacheEntries(serverAuthenticationRequest, account);
              // Construct the urlNavigate
              var urlNavigate = serverAuthenticationRequest.createNavigateUrl(request.scopes) + Constants_1.Constants.response_mode_fragment;
              window.renewStates.push(serverAuthenticationRequest.state);
              window.requestType = Constants_1.Constants.renewToken;
              _this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
              // open popup window to urlNavigate
              if (popUpWindow) {
                popUpWindow.location.href = urlNavigate;
              }
            }, function () {
              // Endpoint resolution failure error
              _this.logger.info(ClientAuthError_1.ClientAuthErrorMessage.endpointResolutionError.code + ":" + ClientAuthError_1.ClientAuthErrorMessage.endpointResolutionError.desc);
              _this.cacheStorage.setItem(Constants_1.Constants.msalError, ClientAuthError_1.ClientAuthErrorMessage.endpointResolutionError.code);
              _this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, ClientAuthError_1.ClientAuthErrorMessage.endpointResolutionError.desc);
              // reject that is passed in - REDO this in the subsequent refactor, passing reject is confusing
              if (reject) {
                reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError());
              }
              if (popUpWindow) {
                popUpWindow.close();
              }
              // this is an all catch for any failure for the above code except the specific 'reject' call
            }).catch(function (err) {
              _this.logger.warning("could not resolve endpoints");
              reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString()));
            });
          });
        };
        /**
         * @hidden
         *
         * Used to send the user to the redirect_uri after authentication is complete. The user's bearer token is attached to the URI fragment as an id_token/access_token field.
         * This function also closes the popup window after redirection.
         *
         * @param urlNavigate
         * @param title
         * @param interval
         * @param instance
         * @param resolve
         * @param reject
         * @ignore
         */
        UserAgentApplication.prototype.openWindow = function (urlNavigate, title, interval, instance, resolve, reject) {
          var _this = this;
          // Generate a popup window
          var popupWindow;
          try {
            popupWindow = this.openPopup(urlNavigate, title, Constants_1.Constants.popUpWidth, Constants_1.Constants.popUpHeight);
          }
          catch (e) {
            instance.loginInProgress = false;
            instance.acquireTokenInProgress = false;
            this.logger.info(ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code + ":" + ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
            this.cacheStorage.setItem(Constants_1.Constants.msalError, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code);
            this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
            if (reject) {
              reject(ClientAuthError_1.ClientAuthError.createPopupWindowError());
            }
            return null;
          }
          // Push popup window handle onto stack for tracking
          window.openedWindows.push(popupWindow);
          var pollTimer = window.setInterval(function () {
            // If popup closed or login in progress, cancel login
            if (popupWindow && popupWindow.closed && (instance.loginInProgress || instance.acquireTokenInProgress)) {
              if (reject) {
                reject(ClientAuthError_1.ClientAuthError.createUserCancelledError());
              }
              window.clearInterval(pollTimer);
              if (_this.config.framework.isAngular) {
                _this.broadcast("msal:popUpClosed", ClientAuthError_1.ClientAuthErrorMessage.userCancelledError.code + Constants_1.Constants.resourceDelimiter + ClientAuthError_1.ClientAuthErrorMessage.userCancelledError.desc);
                return;
              }
              instance.loginInProgress = false;
              instance.acquireTokenInProgress = false;
            }
            try {
              var popUpWindowLocation = popupWindow.location;
              // If the popup hash changes, close the popup window
              if (popUpWindowLocation.href.indexOf(_this.getRedirectUri()) !== -1) {
                window.clearInterval(pollTimer);
                instance.loginInProgress = false;
                instance.acquireTokenInProgress = false;
                _this.logger.info("Closing popup window");
                // TODO: Check how this can be extracted for any framework specific code?
                if (_this.config.framework.isAngular) {
                  _this.broadcast("msal:popUpHashChanged", popUpWindowLocation.hash);
                  for (var i = 0; i < window.openedWindows.length; i++) {
                    window.openedWindows[i].close();
                  }
                }
              }
            }
            catch (e) {
              // Cross Domain url check error.
              // Will be thrown until AAD redirects the user back to the app"s root page with the token.
              // No need to log or throw this error as it will create unnecessary traffic.
            }
          }, interval);
          return popupWindow;
        };
        /**
         * @hidden
         *
         * Configures popup window for login.
         *
         * @param urlNavigate
         * @param title
         * @param popUpWidth
         * @param popUpHeight
         * @ignore
         * @hidden
         */
        UserAgentApplication.prototype.openPopup = function (urlNavigate, title, popUpWidth, popUpHeight) {
          try {
            /**
             * adding winLeft and winTop to account for dual monitor
             * using screenLeft and screenTop for IE8 and earlier
             */
            var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
            var winTop = window.screenTop ? window.screenTop : window.screenY;
            /**
             * window.innerWidth displays browser window"s height and width excluding toolbars
             * using document.documentElement.clientWidth for IE8 and earlier
             */
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var left = ((width / 2) - (popUpWidth / 2)) + winLeft;
            var top = ((height / 2) - (popUpHeight / 2)) + winTop;
            // open the window
            var popupWindow = window.open(urlNavigate, title, "width=" + popUpWidth + ", height=" + popUpHeight + ", top=" + top + ", left=" + left);
            if (!popupWindow) {
              throw ClientAuthError_1.ClientAuthError.createPopupWindowError();
            }
            if (popupWindow.focus) {
              popupWindow.focus();
            }
            return popupWindow;
          }
          catch (e) {
            this.logger.error("error opening popup " + e.message);
            this.loginInProgress = false;
            this.acquireTokenInProgress = false;
            throw ClientAuthError_1.ClientAuthError.createPopupWindowError(e.toString());
          }
        };
        //#endregion
        //#region Silent Flow
        /**
         * Use this function to obtain a token before every call to the API / resource provider
         *
         * MSAL return's a cached token when available
         * Or it send's a request to the STS to obtain a new token using a hidden iframe.
         *
         * @param {@link AuthenticationParameters}
         *
         * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
         * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
         *
         */
        UserAgentApplication.prototype.acquireTokenSilent = function (request) {
          var _this = this;
          return new Promise(function (resolve, reject) {
            // Validate and filter scopes (the validate function will throw if validation fails)
            _this.validateInputScope(request.scopes, true);
            var scope = request.scopes.join(" ").toLowerCase();
            // if the developer passes an account give him the priority
            var account = request.account || _this.getAccount();
            // extract if there is an adalIdToken stashed in the cache
            var adalIdToken = _this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
            //if there is no account logged in and no login_hint/sid is passed in the request
            if (!account && !(request.sid || request.loginHint) && Utils_1.Utils.isEmpty(adalIdToken)) {
              _this.logger.info("User login is required");
              return reject(ClientAuthError_1.ClientAuthError.createUserLoginRequiredError());
            }
            var responseType = _this.getTokenType(account, request.scopes, true);
            var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority), _this.clientId, request.scopes, responseType, _this.getRedirectUri(), request && request.state);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
            if (Utils_1.Utils.isSSOParam(request) || account) {
              serverAuthenticationRequest = _this.populateQueryParams(account, request, serverAuthenticationRequest);
            }
            //if user didn't pass login_hint/sid and adal's idtoken is present, extract the login_hint from the adalIdToken
            else if (!account && !Utils_1.Utils.isEmpty(adalIdToken)) {
              // if adalIdToken exists, extract the SSO info from the same
              var adalIdTokenObject = Utils_1.Utils.extractIdToken(adalIdToken);
              _this.logger.verbose("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
              serverAuthenticationRequest = _this.populateQueryParams(account, null, serverAuthenticationRequest, adalIdTokenObject);
            }
            var userContainedClaims = request.claimsRequest || serverAuthenticationRequest.claimsValue;
            var authErr;
            var cacheResultResponse;
            if (!userContainedClaims) {
              try {
                cacheResultResponse = _this.getCachedToken(serverAuthenticationRequest, account);
              }
              catch (e) {
                authErr = e;
              }
            }
            // resolve/reject based on cacheResult
            if (cacheResultResponse) {
              _this.logger.info("Token is already in cache for scope:" + scope);
              resolve(cacheResultResponse);
              return null;
            }
            else if (authErr) {
              _this.logger.infoPii(authErr.errorCode + ":" + authErr.errorMessage);
              reject(authErr);
              return null;
            }
            // else proceed with login
            else {
              if (userContainedClaims) {
                _this.logger.verbose("Skipped cache lookup since claims were given.");
              }
              else {
                _this.logger.verbose("Token is not in cache for scope:" + scope);
              }
              // Cache result can return null if cache is empty. In that case, set authority to default value if no authority is passed to the api.
              if (!serverAuthenticationRequest.authorityInstance) {
                serverAuthenticationRequest.authorityInstance = request.authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority) : _this.authorityInstance;
              }
              // cache miss
              return serverAuthenticationRequest.authorityInstance.resolveEndpointsAsync()
                .then(function () {
                  // refresh attempt with iframe
                  // Already renewing for this scope, callback when we get the token.
                  if (window.activeRenewals[scope]) {
                    _this.logger.verbose("Renew token for scope: " + scope + " is in progress. Registering callback");
                    // Active renewals contains the state for each renewal.
                    _this.registerCallback(window.activeRenewals[scope], scope, resolve, reject);
                  }
                  else {
                    if (request.scopes && request.scopes.indexOf(_this.clientId) > -1 && request.scopes.length === 1) {
                      // App uses idToken to send to api endpoints
                      // Default scope is tracked as clientId to store this token
                      _this.logger.verbose("renewing idToken");
                      _this.renewIdToken(request.scopes, resolve, reject, account, serverAuthenticationRequest);
                    }
                    else {
                      // renew access token
                      _this.logger.verbose("renewing accesstoken");
                      _this.renewToken(request.scopes, resolve, reject, account, serverAuthenticationRequest);
                    }
                  }
                }).catch(function (err) {
                  _this.logger.warning("could not resolve endpoints");
                  reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString()));
                  return null;
                });
            }
          });
        };
        /**
         * @hidden
         * Returns whether current window is in ifram for token renewal
         * @ignore
         */
        UserAgentApplication.prototype.isInIframe = function () {
          return window.parent !== window;
        };
        /**
         * @hidden
         * Returns whether parent window exists and has msal
         */
        UserAgentApplication.prototype.parentIsMsal = function () {
          return window.parent !== window && window.parent.msal;
        };
        /**
         * @hidden
         */
        UserAgentApplication.prototype.isInteractionRequired = function (errorString) {
          if (errorString.indexOf("interaction_required") !== -1 ||
            errorString.indexOf("consent_required") !== -1 ||
            errorString.indexOf("login_required") !== -1) {
            return true;
          }
          return false;
        };
        /**
         * @hidden
         * Calling _loadFrame but with a timeout to signal failure in loadframeStatus. Callbacks are left.
         * registered when network errors occur and subsequent token requests for same resource are registered to the pending request.
         * @ignore
         */
        UserAgentApplication.prototype.loadIframeTimeout = function (urlNavigate, frameName, scope) {
          var _this = this;
          //set iframe session to pending
          var expectedState = window.activeRenewals[scope];
          this.logger.verbose("Set loading state to pending for: " + scope + ":" + expectedState);
          this.cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusInProgress);
          this.loadFrame(urlNavigate, frameName);
          setTimeout(function () {
            if (_this.cacheStorage.getItem(Constants_1.Constants.renewStatus + expectedState) === Constants_1.Constants.tokenRenewStatusInProgress) {
              // fail the iframe session if it"s in pending state
              _this.logger.verbose("Loading frame has timed out after: " + (_this.config.system.loadFrameTimeout / 1000) + " seconds for scope " + scope + ":" + expectedState);
              // Error after timeout
              if (expectedState && window.callbackMappedToRenewStates[expectedState]) {
                window.callbackMappedToRenewStates[expectedState](null, ClientAuthError_1.ClientAuthError.createTokenRenewalTimeoutError());
              }
              _this.cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusCancelled);
            }
          }, this.config.system.loadFrameTimeout);
        };
        /**
         * @hidden
         * Loads iframe with authorization endpoint URL
         * @ignore
         */
        UserAgentApplication.prototype.loadFrame = function (urlNavigate, frameName) {
          var _this = this;
          // This trick overcomes iframe navigation in IE
          // IE does not load the page consistently in iframe
          this.logger.info("LoadFrame: " + frameName);
          var frameCheck = frameName;
          setTimeout(function () {
            var frameHandle = _this.addHiddenIFrame(frameCheck);
            if (frameHandle.src === "" || frameHandle.src === "about:blank") {
              frameHandle.src = urlNavigate;
              _this.logger.infoPii("Frame Name : " + frameName + " Navigated to: " + urlNavigate);
            }
          }, this.config.system.navigateFrameWait);
        };
        /**
         * @hidden
         * Adds the hidden iframe for silent token renewal.
         * @ignore
         */
        UserAgentApplication.prototype.addHiddenIFrame = function (iframeId) {
          if (typeof iframeId === "undefined") {
            return null;
          }
          this.logger.info("Add msal frame to document:" + iframeId);
          var adalFrame = document.getElementById(iframeId);
          if (!adalFrame) {
            if (document.createElement &&
              document.documentElement &&
              (window.navigator.userAgent.indexOf("MSIE 5.0") === -1)) {
              var ifr = document.createElement("iframe");
              ifr.setAttribute("id", iframeId);
              ifr.style.visibility = "hidden";
              ifr.style.position = "absolute";
              ifr.style.width = ifr.style.height = "0";
              ifr.style.border = "0";
              adalFrame = document.getElementsByTagName("body")[0].appendChild(ifr);
            }
            else if (document.body && document.body.insertAdjacentHTML) {
              document.body.insertAdjacentHTML("beforeend", "<iframe name='" + iframeId + "' id='" + iframeId + "' style='display:none'></iframe>");
            }
            if (window.frames && window.frames[iframeId]) {
              adalFrame = window.frames[iframeId];
            }
          }
          return adalFrame;
        };
        //#endregion
        //#region General Helpers
        /**
         * @hidden
         *
         * Adds login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time
         * domain_hint can be one of users/organizations which when added skips the email based discovery process of the user
         * domain_req utid received as part of the clientInfo
         * login_req uid received as part of clientInfo
         * Also does a sanity check for extraQueryParameters passed by the user to ensure no repeat queryParameters
         *
         * @param {@link Account} account - Account for which the token is requested
         * @param queryparams
         * @param {@link ServerRequestParameters}
         * @ignore
         */
        UserAgentApplication.prototype.addHintParameters = function (accountObj, qParams, serverReqParams) {
          var account = accountObj || this.getAccount();
          // This is a final check for all queryParams added so far; preference order: sid > login_hint
          // sid cannot be passed along with login_hint or domain_hint, hence we check both are not populated yet in queryParameters
          if (account && !qParams[Constants_1.SSOTypes.SID]) {
            // sid - populate only if login_hint is not already populated and the account has sid
            var populateSID = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.sid && serverReqParams.promptValue === Constants_1.PromptState.NONE;
            if (populateSID) {
              qParams = Utils_1.Utils.addSSOParameter(Constants_1.SSOTypes.SID, account.sid, qParams);
            }
            // login_hint - account.userName
            else {
              var populateLoginHint = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.userName && !Utils_1.Utils.isEmpty(account.userName);
              if (populateLoginHint) {
                qParams = Utils_1.Utils.addSSOParameter(Constants_1.SSOTypes.LOGIN_HINT, account.userName, qParams);
              }
            }
            var populateReqParams = !qParams[Constants_1.SSOTypes.DOMAIN_REQ] && !qParams[Constants_1.SSOTypes.LOGIN_REQ];
            if (populateReqParams) {
              qParams = Utils_1.Utils.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, account.homeAccountIdentifier, qParams);
            }
          }
          return qParams;
        };
        /**
         * @hidden
         * Used to redirect the browser to the STS authorization endpoint
         * @param {string} urlNavigate - URL of the authorization endpoint
         */
        UserAgentApplication.prototype.promptUser = function (urlNavigate) {
          // Navigate if valid URL
          if (urlNavigate && !Utils_1.Utils.isEmpty(urlNavigate)) {
            this.logger.infoPii("Navigate to:" + urlNavigate);
            window.location.replace(urlNavigate);
          }
          else {
            this.logger.info("Navigate url is empty");
            throw AuthError_1.AuthError.createUnexpectedError("Navigate url is empty");
          }
        };
        /**
         * @hidden
         * Used to add the developer requested callback to the array of callbacks for the specified scopes. The updated array is stored on the window object
         * @param {string} expectedState - Unique state identifier (guid).
         * @param {string} scope - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
         * @param {Function} resolve - The resolve function of the promise object.
         * @param {Function} reject - The reject function of the promise object.
         * @ignore
         */
        UserAgentApplication.prototype.registerCallback = function (expectedState, scope, resolve, reject) {
          var _this = this;
          // track active renewals
          window.activeRenewals[scope] = expectedState;
          // initialize callbacks mapped array
          if (!window.promiseMappedToRenewStates[expectedState]) {
            window.promiseMappedToRenewStates[expectedState] = [];
          }
          // indexing on the current state, push the callback params to callbacks mapped
          window.promiseMappedToRenewStates[expectedState].push({ resolve: resolve, reject: reject });
          // Store the server esponse in the current window??
          if (!window.callbackMappedToRenewStates[expectedState]) {
            window.callbackMappedToRenewStates[expectedState] =
              function (response, error) {
                // reset active renewals
                window.activeRenewals[scope] = null;
                // for all promiseMappedtoRenewStates for a given 'state' - call the reject/resolve with error/token respectively
                for (var i = 0; i < window.promiseMappedToRenewStates[expectedState].length; ++i) {
                  try {
                    if (error) {
                      window.promiseMappedToRenewStates[expectedState][i].reject(error);
                    }
                    else if (response) {
                      window.promiseMappedToRenewStates[expectedState][i].resolve(response);
                    }
                    else {
                      throw AuthError_1.AuthError.createUnexpectedError("Error and response are both null");
                    }
                  }
                  catch (e) {
                    _this.logger.warning(e);
                  }
                }
                // reset
                window.promiseMappedToRenewStates[expectedState] = null;
                window.callbackMappedToRenewStates[expectedState] = null;
              };
          }
        };
        //#endregion
        //#region Logout
        /**
         * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
         * Default behaviour is to redirect the user to `window.location.href`.
         */
        UserAgentApplication.prototype.logout = function () {
          var _this = this;
          this.clearCache();
          this.account = null;
          var logout = "";
          if (this.getPostLogoutRedirectUri()) {
            logout = "post_logout_redirect_uri=" + encodeURIComponent(this.getPostLogoutRedirectUri());
          }
          this.authorityInstance.resolveEndpointsAsync().then(function (authority) {
            var urlNavigate = authority.EndSessionEndpoint
              ? authority.EndSessionEndpoint + "?" + logout
              : _this.authority + "oauth2/v2.0/logout?" + logout;
            _this.promptUser(urlNavigate);
          });
        };
        /**
         * @hidden
         * Clear all access tokens in the cache.
         * @ignore
         */
        UserAgentApplication.prototype.clearCache = function () {
          window.renewStates = [];
          var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
          for (var i = 0; i < accessTokenItems.length; i++) {
            this.cacheStorage.removeItem(JSON.stringify(accessTokenItems[i].key));
          }
          this.cacheStorage.resetCacheItems();
          this.cacheStorage.clearCookie();
        };
        /**
         * @hidden
         * Clear a given access token from the cache.
         *
         * @param accessToken
         */
        UserAgentApplication.prototype.clearCacheForScope = function (accessToken) {
          var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
          for (var i = 0; i < accessTokenItems.length; i++) {
            var token = accessTokenItems[i];
            if (token.value.accessToken === accessToken) {
              this.cacheStorage.removeItem(JSON.stringify(token.key));
            }
          }
        };
        //#endregion
        //#region Response
        /**
         * @hidden
         * Used to call the constructor callback with the token/error
         * @param {string} [hash=window.location.hash] - Hash fragment of Url.
         */
        UserAgentApplication.prototype.processCallBack = function (hash, stateInfo, parentCallback) {
          this.logger.info("Processing the callback from redirect response");
          // get the state info from the hash
          if (!stateInfo) {
            stateInfo = this.getResponseState(hash);
          }
          var response;
          var authErr;
          // Save the token info from the hash
          try {
            response = this.saveTokenFromHash(hash, stateInfo);
          }
          catch (err) {
            authErr = err;
          }
          // remove hash from the cache
          this.cacheStorage.removeItem(Constants_1.Constants.urlHash);
          try {
            // Clear the cookie in the hash
            this.cacheStorage.clearCookie();
            var accountState = this.getAccountState(stateInfo.state);
            if (response) {
              if ((stateInfo.requestType === Constants_1.Constants.renewToken) || response.accessToken) {
                if (window.parent !== window) {
                  this.logger.verbose("Window is in iframe, acquiring token silently");
                }
                else {
                  this.logger.verbose("acquiring token interactive in progress");
                }
                response.tokenType = Constants_1.Constants.accessToken;
              }
              else if (stateInfo.requestType === Constants_1.Constants.login) {
                response.tokenType = Constants_1.Constants.idToken;
              }
              if (!parentCallback) {
                this.redirectSuccessHandler(response);
                return;
              }
            }
            else if (!parentCallback) {
              this.redirectErrorHandler(authErr, AuthResponse_1.buildResponseStateOnly(accountState));
              return;
            }
            parentCallback(response, authErr);
          }
          catch (err) {
            this.logger.error("Error occurred in token received callback function: " + err);
            throw ClientAuthError_1.ClientAuthError.createErrorInCallbackFunction(err.toString());
          }
        };
        /**
         * @hidden
         * This method must be called for processing the response received from the STS. It extracts the hash, processes the token or error information and saves it in the cache. It then
         * calls the registered callbacks in case of redirect or resolves the promises with the result.
         * @param {string} [hash=window.location.hash] - Hash fragment of Url.
         */
        UserAgentApplication.prototype.handleAuthenticationResponse = function (hash) {
          // retrieve the hash
          if (hash == null) {
            hash = window.location.hash;
          }
          var self = null;
          var isPopup = false;
          var isWindowOpenerMsal = false;
          // Check if the current window opened the iFrame/popup
          try {
            isWindowOpenerMsal = window.opener && window.opener.msal && window.opener.msal !== window.msal;
          }
          catch (err) {
            // err = SecurityError: Blocked a frame with origin "[url]" from accessing a cross-origin frame.
            isWindowOpenerMsal = false;
          }
          // Set the self to the window that created the popup/iframe
          if (isWindowOpenerMsal) {
            self = window.opener.msal;
            isPopup = true;
          }
          else if (window.parent && window.parent.msal) {
            self = window.parent.msal;
          }
          // if (window.parent !== window), by using self, window.parent becomes equal to window in getResponseState method specifically
          var stateInfo = self.getResponseState(hash);
          var tokenResponseCallback = null;
          self.logger.info("Returned from redirect url");
          // If parent window is the msal instance which opened the current window (iframe)
          if (this.parentIsMsal()) {
            tokenResponseCallback = window.parent.callbackMappedToRenewStates[stateInfo.state];
          }
          // Current window is window opener (popup)
          else if (isWindowOpenerMsal) {
            tokenResponseCallback = window.opener.callbackMappedToRenewStates[stateInfo.state];
          }
          // Redirect cases
          else {
            tokenResponseCallback = null;
            // if set to navigate to loginRequest page post login
            if (self.config.auth.navigateToLoginRequestUrl) {
              self.cacheStorage.setItem(Constants_1.Constants.urlHash, hash);
              if (window.parent === window && !isPopup) {
                window.location.href = self.cacheStorage.getItem(Constants_1.Constants.loginRequest, self.inCookie);
              }
              return;
            }
            else {
              window.location.hash = "";
            }
            if (!this.redirectCallbacksSet) {
              // We reached this point too early - cache hash, return and process in handleRedirectCallbacks
              self.cacheStorage.setItem(Constants_1.Constants.urlHash, hash);
              return;
            }
          }
          self.processCallBack(hash, stateInfo, tokenResponseCallback);
          // If current window is opener, close all windows
          if (isWindowOpenerMsal) {
            for (var i = 0; i < window.opener.openedWindows.length; i++) {
              window.opener.openedWindows[i].close();
            }
          }
        };
        /**
         * @hidden
         * Returns deserialized portion of URL hash
         * @param hash
         */
        UserAgentApplication.prototype.deserializeHash = function (hash) {
          hash = this.getHash(hash);
          return Utils_1.Utils.deserialize(hash);
        };
        /**
         * @hidden
         * Creates a stateInfo object from the URL fragment and returns it.
         * @param {string} hash  -  Hash passed from redirect page
         * @returns {TokenResponse} an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
         * @ignore
         */
        UserAgentApplication.prototype.getResponseState = function (hash) {
          var parameters = this.deserializeHash(hash);
          var stateResponse;
          if (!parameters) {
            throw AuthError_1.AuthError.createUnexpectedError("Hash was not parsed correctly.");
          }
          if (parameters.hasOwnProperty("state")) {
            stateResponse = {
              requestType: Constants_1.Constants.unknown,
              state: parameters.state,
              stateMatch: false
            };
          }
          else {
            throw AuthError_1.AuthError.createUnexpectedError("Hash does not contain state.");
          }
          // async calls can fire iframe and login request at the same time if developer does not use the API as expected
          // incoming callback needs to be looked up to find the request type
          // loginRedirect
          if (stateResponse.state === this.cacheStorage.getItem(Constants_1.Constants.stateLogin, this.inCookie) || stateResponse.state === this.silentAuthenticationState) { // loginRedirect
            stateResponse.requestType = Constants_1.Constants.login;
            stateResponse.stateMatch = true;
            return stateResponse;
          }
          // acquireTokenRedirect
          else if (stateResponse.state === this.cacheStorage.getItem(Constants_1.Constants.stateAcquireToken, this.inCookie)) { //acquireTokenRedirect
            stateResponse.requestType = Constants_1.Constants.renewToken;
            stateResponse.stateMatch = true;
            return stateResponse;
          }
          // external api requests may have many renewtoken requests for different resource
          if (!stateResponse.stateMatch) {
            stateResponse.requestType = window.requestType;
            var statesInParentContext = window.renewStates;
            for (var i = 0; i < statesInParentContext.length; i++) {
              if (statesInParentContext[i] === stateResponse.state) {
                stateResponse.stateMatch = true;
                break;
              }
            }
          }
          return stateResponse;
        };
        //#endregion
        //#region Token Processing (Extract to TokenProcessing.ts)
        /**
         * @hidden
         * Used to get token for the specified set of scopes from the cache
         * @param {@link ServerRequestParameters} - Request sent to the STS to obtain an id_token/access_token
         * @param {Account} account - Account for which the scopes were requested
         */
        UserAgentApplication.prototype.getCachedToken = function (serverAuthenticationRequest, account) {
          var accessTokenCacheItem = null;
          var scopes = serverAuthenticationRequest.scopes;
          // filter by clientId and account
          var tokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, account ? account.homeAccountIdentifier : null);
          // No match found after initial filtering
          if (tokenCacheItems.length === 0) {
            return null;
          }
          var filteredItems = [];
          // if no authority passed
          if (!serverAuthenticationRequest.authority) {
            // filter by scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
              var cacheItem = tokenCacheItems[i];
              var cachedScopes = cacheItem.key.scopes.split(" ");
              if (Utils_1.Utils.containsScope(cachedScopes, scopes)) {
                filteredItems.push(cacheItem);
              }
            }
            // if only one cached token found
            if (filteredItems.length === 1) {
              accessTokenCacheItem = filteredItems[0];
              serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(accessTokenCacheItem.key.authority, this.config.auth.validateAuthority);
            }
            // if more than one cached token is found
            else if (filteredItems.length > 1) {
              throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString());
            }
            // if no match found, check if there was a single authority used
            else {
              var authorityList = this.getUniqueAuthority(tokenCacheItems, "authority");
              if (authorityList.length > 1) {
                throw ClientAuthError_1.ClientAuthError.createMultipleAuthoritiesInCacheError(scopes.toString());
              }
              serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(authorityList[0], this.config.auth.validateAuthority);
            }
          }
          // if an authority is passed in the API
          else {
            // filter by authority and scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
              var cacheItem = tokenCacheItems[i];
              var cachedScopes = cacheItem.key.scopes.split(" ");
              if (Utils_1.Utils.containsScope(cachedScopes, scopes) && Utils_1.Utils.CanonicalizeUri(cacheItem.key.authority) === serverAuthenticationRequest.authority) {
                filteredItems.push(cacheItem);
              }
            }
            // no match
            if (filteredItems.length === 0) {
              return null;
            }
            // if only one cachedToken Found
            else if (filteredItems.length === 1) {
              accessTokenCacheItem = filteredItems[0];
            }
            else {
              // if more than cached token is found
              throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString());
            }
          }
          if (accessTokenCacheItem != null) {
            var expired = Number(accessTokenCacheItem.value.expiresIn);
            // If expiration is within offset, it will force renew
            var offset = this.config.system.tokenRenewalOffsetSeconds || 300;
            if (expired && (expired > Utils_1.Utils.now() + offset)) {
              var idToken = new IdToken_1.IdToken(accessTokenCacheItem.value.idToken);
              if (!account) {
                account = this.getAccount();
                if (!account) {
                  throw AuthError_1.AuthError.createUnexpectedError("Account should not be null here.");
                }
              }
              var aState = this.getAccountState(serverAuthenticationRequest.state);
              var response = {
                uniqueId: "",
                tenantId: "",
                tokenType: (accessTokenCacheItem.value.idToken === accessTokenCacheItem.value.accessToken) ? Constants_1.Constants.idToken : Constants_1.Constants.accessToken,
                idToken: idToken,
                accessToken: accessTokenCacheItem.value.accessToken,
                scopes: accessTokenCacheItem.key.scopes.split(" "),
                expiresOn: new Date(expired * 1000),
                account: account,
                accountState: aState,
              };
              Utils_1.Utils.setResponseIdToken(response, idToken);
              return response;
            }
            else {
              this.cacheStorage.removeItem(JSON.stringify(filteredItems[0].key));
              return null;
            }
          }
          else {
            return null;
          }
        };
        /**
         * @hidden
         * Used to get a unique list of authoritues from the cache
         * @param {Array<AccessTokenCacheItem>}  accessTokenCacheItems - accessTokenCacheItems saved in the cache
         * @ignore
         */
        UserAgentApplication.prototype.getUniqueAuthority = function (accessTokenCacheItems, property) {
          var authorityList = [];
          var flags = [];
          accessTokenCacheItems.forEach(function (element) {
            if (element.key.hasOwnProperty(property) && (flags.indexOf(element.key[property]) === -1)) {
              flags.push(element.key[property]);
              authorityList.push(element.key[property]);
            }
          });
          return authorityList;
        };
        /**
         * @hidden
         * Check if ADAL id_token exists and return if exists.
         *
         */
        UserAgentApplication.prototype.extractADALIdToken = function () {
          var adalIdToken = this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
          if (!Utils_1.Utils.isEmpty(adalIdToken)) {
            return Utils_1.Utils.extractIdToken(adalIdToken);
          }
          return null;
        };
        /**
         * @hidden
         * Acquires access token using a hidden iframe.
         * @ignore
         */
        UserAgentApplication.prototype.renewToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
          var scope = scopes.join(" ").toLowerCase();
          this.logger.verbose("renewToken is called for scope:" + scope);
          var frameHandle = this.addHiddenIFrame("msalRenewFrame" + scope);
          this.updateCacheEntries(serverAuthenticationRequest, account);
          this.logger.verbose("Renew token Expected state: " + serverAuthenticationRequest.state);
          // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
          var urlNavigate = Utils_1.Utils.urlRemoveQueryStringParameter(serverAuthenticationRequest.createNavigateUrl(scopes), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
          window.renewStates.push(serverAuthenticationRequest.state);
          window.requestType = Constants_1.Constants.renewToken;
          this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
          this.logger.infoPii("Navigate to:" + urlNavigate);
          frameHandle.src = "about:blank";
          this.loadIframeTimeout(urlNavigate, "msalRenewFrame" + scope, scope);
        };
        /**
         * @hidden
         * Renews idtoken for app"s own backend when clientId is passed as a single scope in the scopes array.
         * @ignore
         */
        UserAgentApplication.prototype.renewIdToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
          this.logger.info("renewidToken is called");
          var frameHandle = this.addHiddenIFrame("msalIdTokenFrame");
          this.updateCacheEntries(serverAuthenticationRequest, account);
          this.logger.verbose("Renew Idtoken Expected state: " + serverAuthenticationRequest.state);
          // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
          var urlNavigate = Utils_1.Utils.urlRemoveQueryStringParameter(serverAuthenticationRequest.createNavigateUrl(scopes), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
          if (this.silentLogin) {
            window.requestType = Constants_1.Constants.login;
            this.silentAuthenticationState = serverAuthenticationRequest.state;
          }
          else {
            window.requestType = Constants_1.Constants.renewToken;
            window.renewStates.push(serverAuthenticationRequest.state);
          }
          // note: scope here is clientId
          this.registerCallback(serverAuthenticationRequest.state, this.clientId, resolve, reject);
          this.logger.infoPii("Navigate to:" + urlNavigate);
          frameHandle.src = "about:blank";
          this.loadIframeTimeout(urlNavigate, "msalIdTokenFrame", this.clientId);
        };
        /**
         * @hidden
         *
         * This method must be called for processing the response received from AAD. It extracts the hash, processes the token or error, saves it in the cache and calls the registered callbacks with the result.
         * @param {string} authority authority received in the redirect response from AAD.
         * @param {TokenResponse} requestInfo an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
         * @param {Account} account account object for which scopes are consented for. The default account is the logged in account.
         * @param {ClientInfo} clientInfo clientInfo received as part of the response comprising of fields uid and utid.
         * @param {IdToken} idToken idToken received as part of the response.
         * @ignore
         * @private
         */
        /* tslint:disable:no-string-literal */
        UserAgentApplication.prototype.saveAccessToken = function (response, authority, parameters, clientInfo) {
          var scope;
          var accessTokenResponse = tslib_1.__assign({}, response);
          var clientObj = new ClientInfo_1.ClientInfo(clientInfo);
          // if the response contains "scope"
          if (parameters.hasOwnProperty("scope")) {
            // read the scopes
            scope = parameters["scope"];
            var consentedScopes = scope.split(" ");
            // retrieve all access tokens from the cache, remove the dup scores
            var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, authority);
            for (var i = 0; i < accessTokenCacheItems.length; i++) {
              var accessTokenCacheItem = accessTokenCacheItems[i];
              if (accessTokenCacheItem.key.homeAccountIdentifier === response.account.homeAccountIdentifier) {
                var cachedScopes = accessTokenCacheItem.key.scopes.split(" ");
                if (Utils_1.Utils.isIntersectingScopes(cachedScopes, consentedScopes)) {
                  this.cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                }
              }
            }
            // Generate and cache accessTokenKey and accessTokenValue
            var expiresIn = Utils_1.Utils.expiresIn(parameters[Constants_1.Constants.expiresIn]).toString();
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.Constants.accessToken], response.idToken.rawIdToken, expiresIn, clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.accessToken = parameters[Constants_1.Constants.accessToken];
            accessTokenResponse.scopes = consentedScopes;
            var exp = Number(expiresIn);
            if (exp) {
              accessTokenResponse.expiresOn = new Date((Utils_1.Utils.now() + exp) * 1000);
            }
            else {
              this.logger.error("Could not parse expiresIn parameter. Given value: " + expiresIn);
            }
          }
          // if the response does not contain "scope" - scope is usually client_id and the token will be id_token
          else {
            scope = this.clientId;
            // Generate and cache accessTokenKey and accessTokenValue
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.Constants.idToken], parameters[Constants_1.Constants.idToken], response.idToken.expiration, clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.scopes = [scope];
            accessTokenResponse.accessToken = parameters[Constants_1.Constants.idToken];
            var exp = Number(response.idToken.expiration);
            if (exp) {
              accessTokenResponse.expiresOn = new Date(exp * 1000);
            }
            else {
              this.logger.error("Could not parse expiresIn parameter");
            }
          }
          return accessTokenResponse;
        };
        /**
         * @hidden
         * Saves token or error received in the response from AAD in the cache. In case of id_token, it also creates the account object.
         * @ignore
         */
        UserAgentApplication.prototype.saveTokenFromHash = function (hash, stateInfo) {
          this.logger.info("State status:" + stateInfo.stateMatch + "; Request type:" + stateInfo.requestType);
          this.cacheStorage.setItem(Constants_1.Constants.msalError, "");
          this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
          var response = {
            uniqueId: "",
            tenantId: "",
            tokenType: "",
            idToken: null,
            accessToken: null,
            scopes: [],
            expiresOn: null,
            account: null,
            accountState: "",
          };
          var error;
          var hashParams = this.deserializeHash(hash);
          var authorityKey = "";
          var acquireTokenAccountKey = "";
          // If server returns an error
          if (hashParams.hasOwnProperty(Constants_1.Constants.errorDescription) || hashParams.hasOwnProperty(Constants_1.Constants.error)) {
            this.logger.infoPii("Error :" + hashParams[Constants_1.Constants.error] + "; Error description:" + hashParams[Constants_1.Constants.errorDescription]);
            this.cacheStorage.setItem(Constants_1.Constants.msalError, hashParams[Constants_1.Constants.error]);
            this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, hashParams[Constants_1.Constants.errorDescription]);
            // login
            if (stateInfo.requestType === Constants_1.Constants.login) {
              this.loginInProgress = false;
              this.cacheStorage.setItem(Constants_1.Constants.loginError, hashParams[Constants_1.Constants.errorDescription] + ":" + hashParams[Constants_1.Constants.error]);
              authorityKey = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
            }
            // acquireToken
            if (stateInfo.requestType === Constants_1.Constants.renewToken) {
              this.acquireTokenInProgress = false;
              authorityKey = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
              var account = this.getAccount();
              var accountId = void 0;
              if (account && !Utils_1.Utils.isEmpty(account.homeAccountIdentifier)) {
                accountId = account.homeAccountIdentifier;
              }
              else {
                accountId = Constants_1.Constants.no_account;
              }
              acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountId, stateInfo.state);
            }
            if (this.isInteractionRequired(hashParams[Constants_1.Constants.errorDescription])) {
              error = new InteractionRequiredAuthError_1.InteractionRequiredAuthError(hashParams[Constants_1.Constants.error], hashParams[Constants_1.Constants.errorDescription]);
            }
            else {
              error = new ServerError_1.ServerError(hashParams[Constants_1.Constants.error], hashParams[Constants_1.Constants.errorDescription]);
            }
          }
          // If the server returns "Success"
          else {
            // Verify the state from redirect and record tokens to storage if exists
            if (stateInfo.stateMatch) {
              this.logger.info("State is right");
              if (hashParams.hasOwnProperty(Constants_1.Constants.sessionState)) {
                this.cacheStorage.setItem(Constants_1.Constants.msalSessionState, hashParams[Constants_1.Constants.sessionState]);
              }
              response.accountState = this.getAccountState(stateInfo.state);
              var clientInfo = "";
              // Process access_token
              if (hashParams.hasOwnProperty(Constants_1.Constants.accessToken)) {
                this.logger.info("Fragment has access token");
                this.acquireTokenInProgress = false;
                // retrieve the id_token from response if present :
                if (hashParams.hasOwnProperty(Constants_1.Constants.idToken)) {
                  response.idToken = new IdToken_1.IdToken(hashParams[Constants_1.Constants.idToken]);
                }
                else {
                  response = Utils_1.Utils.setResponseIdToken(response, new IdToken_1.IdToken(this.cacheStorage.getItem(Constants_1.Constants.idTokenKey)));
                }
                // retrieve the authority from cache and replace with tenantID
                var authorityKey_1 = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
                var authority = this.cacheStorage.getItem(authorityKey_1, this.inCookie);
                if (!Utils_1.Utils.isEmpty(authority)) {
                  authority = Utils_1.Utils.replaceTenantPath(authority, response.tenantId);
                }
                // retrieve client_info - if it is not found, generate the uid and utid from idToken
                if (hashParams.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                  clientInfo = hashParams[Constants_1.Constants.clientInfo];
                }
                else {
                  this.logger.warning("ClientInfo not received in the response from AAD");
                  throw ClientAuthError_1.ClientAuthError.createClientInfoNotPopulatedError("ClientInfo not received in the response from the server");
                }
                response.account = Account_1.Account.createAccount(response.idToken, new ClientInfo_1.ClientInfo(clientInfo));
                var accountKey = void 0;
                if (response.account && !Utils_1.Utils.isEmpty(response.account.homeAccountIdentifier)) {
                  accountKey = response.account.homeAccountIdentifier;
                }
                else {
                  accountKey = Constants_1.Constants.no_account;
                }
                acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountKey, stateInfo.state);
                var acquireTokenAccountKey_noaccount = Storage_1.Storage.generateAcquireTokenAccountKey(Constants_1.Constants.no_account, stateInfo.state);
                var cachedAccount = this.cacheStorage.getItem(acquireTokenAccountKey);
                var acquireTokenAccount = void 0;
                // Check with the account in the Cache
                if (!Utils_1.Utils.isEmpty(cachedAccount)) {
                  acquireTokenAccount = JSON.parse(cachedAccount);
                  if (response.account && acquireTokenAccount && Utils_1.Utils.compareAccounts(response.account, acquireTokenAccount)) {
                    response = this.saveAccessToken(response, authority, hashParams, clientInfo);
                    this.logger.info("The user object received in the response is the same as the one passed in the acquireToken request");
                  }
                  else {
                    this.logger.warning("The account object created from the response is not the same as the one passed in the acquireToken request");
                  }
                }
                else if (!Utils_1.Utils.isEmpty(this.cacheStorage.getItem(acquireTokenAccountKey_noaccount))) {
                  response = this.saveAccessToken(response, authority, hashParams, clientInfo);
                }
              }
              // Process id_token
              if (hashParams.hasOwnProperty(Constants_1.Constants.idToken)) {
                this.logger.info("Fragment has id token");
                // login no longer in progress
                this.loginInProgress = false;
                response = Utils_1.Utils.setResponseIdToken(response, new IdToken_1.IdToken(hashParams[Constants_1.Constants.idToken]));
                if (hashParams.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                  clientInfo = hashParams[Constants_1.Constants.clientInfo];
                }
                else {
                  this.logger.warning("ClientInfo not received in the response from AAD");
                }
                authorityKey = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
                var authority = this.cacheStorage.getItem(authorityKey, this.inCookie);
                if (!Utils_1.Utils.isEmpty(authority)) {
                  authority = Utils_1.Utils.replaceTenantPath(authority, response.idToken.tenantId);
                }
                this.account = Account_1.Account.createAccount(response.idToken, new ClientInfo_1.ClientInfo(clientInfo));
                response.account = this.account;
                if (response.idToken && response.idToken.nonce) {
                  // check nonce integrity if idToken has nonce - throw an error if not matched
                  if (response.idToken.nonce !== this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie)) {
                    this.account = null;
                    this.cacheStorage.setItem(Constants_1.Constants.loginError, "Nonce Mismatch. Expected Nonce: " + this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie) + "," + "Actual Nonce: " + response.idToken.nonce);
                    this.logger.error("Nonce Mismatch.Expected Nonce: " + this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie) + "," + "Actual Nonce: " + response.idToken.nonce);
                    error = ClientAuthError_1.ClientAuthError.createNonceMismatchError(this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie), response.idToken.nonce);
                  }
                  // Save the token
                  else {
                    this.cacheStorage.setItem(Constants_1.Constants.idTokenKey, hashParams[Constants_1.Constants.idToken]);
                    this.cacheStorage.setItem(Constants_1.Constants.msalClientInfo, clientInfo);
                    // Save idToken as access token for app itself
                    this.saveAccessToken(response, authority, hashParams, clientInfo);
                  }
                }
                else {
                  authorityKey = stateInfo.state;
                  acquireTokenAccountKey = stateInfo.state;
                  this.logger.error("Invalid id_token received in the response");
                  error = ClientAuthError_1.ClientAuthError.createInvalidIdTokenError(response.idToken);
                  this.cacheStorage.setItem(Constants_1.Constants.msalError, error.errorCode);
                  this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, error.errorMessage);
                }
              }
            }
            // State mismatch - unexpected/invalid state
            else {
              authorityKey = stateInfo.state;
              acquireTokenAccountKey = stateInfo.state;
              var expectedState = this.cacheStorage.getItem(Constants_1.Constants.stateLogin, this.inCookie);
              this.logger.error("State Mismatch.Expected State: " + expectedState + "," + "Actual State: " + stateInfo.state);
              error = ClientAuthError_1.ClientAuthError.createInvalidStateError(stateInfo.state, expectedState);
              this.cacheStorage.setItem(Constants_1.Constants.msalError, error.errorCode);
              this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, error.errorMessage);
            }
          }
          this.cacheStorage.setItem(Constants_1.Constants.renewStatus + stateInfo.state, Constants_1.Constants.tokenRenewStatusCompleted);
          this.cacheStorage.removeAcquireTokenEntries();
          // this is required if navigateToLoginRequestUrl=false
          if (this.inCookie) {
            this.cacheStorage.setItemCookie(authorityKey, "", -1);
            this.cacheStorage.clearCookie();
          }
          if (error) {
            throw error;
          }
          if (!response) {
            throw AuthError_1.AuthError.createUnexpectedError("Response is null");
          }
          return response;
        };
        /* tslint:enable:no-string-literal */
        //#endregion
        //#region Account
        /**
         * Returns the signed in account
         * (the account object is created at the time of successful login)
         * or null when no state is found
         * @returns {@link Account} - the account object stored in MSAL
         */
        UserAgentApplication.prototype.getAccount = function () {
          // if a session already exists, get the account from the session
          if (this.account) {
            return this.account;
          }
          // frame is used to get idToken and populate the account for the given session
          var rawIdToken = this.cacheStorage.getItem(Constants_1.Constants.idTokenKey);
          var rawClientInfo = this.cacheStorage.getItem(Constants_1.Constants.msalClientInfo);
          if (!Utils_1.Utils.isEmpty(rawIdToken) && !Utils_1.Utils.isEmpty(rawClientInfo)) {
            var idToken = new IdToken_1.IdToken(rawIdToken);
            var clientInfo = new ClientInfo_1.ClientInfo(rawClientInfo);
            this.account = Account_1.Account.createAccount(idToken, clientInfo);
            return this.account;
          }
          // if login not yet done, return null
          return null;
        };
        /**
         * @hidden
         *
         * Extracts state value from the accountState sent with the authentication request.
         * @returns {string} scope.
         * @ignore
         */
        UserAgentApplication.prototype.getAccountState = function (state) {
          if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
              return state.substring(splitIndex + 1);
            }
          }
          return state;
        };
        /**
         * Use to get a list of unique accounts in MSAL cache based on homeAccountIdentifier.
         *
         * @param {@link Array<Account>} Account - all unique accounts in MSAL cache.
         */
        UserAgentApplication.prototype.getAllAccounts = function () {
          var accounts = [];
          var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
          for (var i = 0; i < accessTokenCacheItems.length; i++) {
            var idToken = new IdToken_1.IdToken(accessTokenCacheItems[i].value.idToken);
            var clientInfo = new ClientInfo_1.ClientInfo(accessTokenCacheItems[i].value.homeAccountIdentifier);
            var account = Account_1.Account.createAccount(idToken, clientInfo);
            accounts.push(account);
          }
          return this.getUniqueAccounts(accounts);
        };
        /**
         * @hidden
         *
         * Used to filter accounts based on homeAccountIdentifier
         * @param {Array<Account>}  Accounts - accounts saved in the cache
         * @ignore
         */
        UserAgentApplication.prototype.getUniqueAccounts = function (accounts) {
          if (!accounts || accounts.length <= 1) {
            return accounts;
          }
          var flags = [];
          var uniqueAccounts = [];
          for (var index = 0; index < accounts.length; ++index) {
            if (accounts[index].homeAccountIdentifier && flags.indexOf(accounts[index].homeAccountIdentifier) === -1) {
              flags.push(accounts[index].homeAccountIdentifier);
              uniqueAccounts.push(accounts[index]);
            }
          }
          return uniqueAccounts;
        };
        //#endregion
        //#region Scopes (Extract to Scopes.ts)
        // Note: "this" dependency in this section is minimal.
        // If pCacheStorage is separated from the class object, or passed as a fn param, scopesUtils.ts can be created
        /**
         * @hidden
         *
         * Used to validate the scopes input parameter requested  by the developer.
         * @param {Array<string>} scopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
         * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
         * @ignore
         */
        UserAgentApplication.prototype.validateInputScope = function (scopes, scopesRequired) {
          if (!scopes) {
            if (scopesRequired) {
              throw ClientConfigurationError_1.ClientConfigurationError.createScopesRequiredError(scopes);
            }
            else {
              return;
            }
          }
          // Check that scopes is an array object (also throws error if scopes == null)
          if (!Array.isArray(scopes)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createScopesNonArrayError(scopes);
          }
          // Check that scopes is not an empty array
          if (scopes.length < 1) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyScopesArrayError(scopes.toString());
          }
          // Check that clientId is passed as single scope
          if (scopes.indexOf(this.clientId) > -1) {
            if (scopes.length > 1) {
              throw ClientConfigurationError_1.ClientConfigurationError.createClientIdSingleScopeError(scopes.toString());
            }
          }
        };
        /**
         * @hidden
         *
         * Extracts scope value from the state sent with the authentication request.
         * @param {string} state
         * @returns {string} scope.
         * @ignore
         */
        UserAgentApplication.prototype.getScopeFromState = function (state) {
          if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
              return state.substring(splitIndex + 1);
            }
          }
          return "";
        };
        /**
         * @ignore
         * Appends extraScopesToConsent if passed
         * @param {@link AuthenticationParameters}
         */
        UserAgentApplication.prototype.appendScopes = function (request) {
          var scopes;
          if (request && request.scopes) {
            if (request.extraScopesToConsent) {
              scopes = request.scopes.concat(request.extraScopesToConsent);
            }
            else {
              scopes = request.scopes;
            }
          }
          return scopes;
        };
        //#endregion
        //#region Angular
        /**
         * @hidden
         *
         * Broadcast messages - Used only for Angular?  *
         * @param eventName
         * @param data
         */
        UserAgentApplication.prototype.broadcast = function (eventName, data) {
          var evt = new CustomEvent(eventName, { detail: data });
          window.dispatchEvent(evt);
        };
        /**
         * @hidden
         *
         * Helper function to retrieve the cached token
         *
         * @param scopes
         * @param {@link Account} account
         * @param state
         * @return {@link AuthResponse} AuthResponse
         */
        UserAgentApplication.prototype.getCachedTokenInternal = function (scopes, account, state) {
          // Get the current session's account object
          var accountObject = account || this.getAccount();
          if (!accountObject) {
            return null;
          }
          // Construct AuthenticationRequest based on response type
          var newAuthority = this.authorityInstance ? this.authorityInstance : AuthorityFactory_1.AuthorityFactory.CreateInstance(this.authority, this.config.auth.validateAuthority);
          var responseType = this.getTokenType(accountObject, scopes, true);
          var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(newAuthority, this.clientId, scopes, responseType, this.getRedirectUri(), state);
          // get cached token
          return this.getCachedToken(serverAuthenticationRequest, account);
        };
        /**
         * @hidden
         *
         * Get scopes for the Endpoint - Used in Angular to track protected and unprotected resources without interaction from the developer app
         *
         * @param endpoint
         */
        UserAgentApplication.prototype.getScopesForEndpoint = function (endpoint) {
          // if user specified list of unprotectedResources, no need to send token to these endpoints, return null.
          if (this.config.framework.unprotectedResources.length > 0) {
            for (var i = 0; i < this.config.framework.unprotectedResources.length; i++) {
              if (endpoint.indexOf(this.config.framework.unprotectedResources[i]) > -1) {
                return null;
              }
            }
          }
          // process all protected resources and send the matched one
          if (this.config.framework.protectedResourceMap.size > 0) {
            for (var _i = 0, _a = Array.from(this.config.framework.protectedResourceMap.keys()); _i < _a.length; _i++) {
              var key = _a[_i];
              // configEndpoint is like /api/Todo requested endpoint can be /api/Todo/1
              if (endpoint.indexOf(key) > -1) {
                return this.config.framework.protectedResourceMap.get(key);
              }
            }
          }
          // default resource will be clientid if nothing specified
          // App will use idtoken for calls to itself
          // check if it's staring from http or https, needs to match with app host
          if (endpoint.indexOf("http://") > -1 || endpoint.indexOf("https://") > -1) {
            if (this.getHostFromUri(endpoint) === this.getHostFromUri(this.getRedirectUri())) {
              return new Array(this.clientId);
            }
          }
          else {
            // in angular level, the url for $http interceptor call could be relative url,
            // if it's relative call, we'll treat it as app backend call.
            return new Array(this.clientId);
          }
          // if not the app's own backend or not a domain listed in the endpoints structure
          return null;
        };
        /**
         * Return boolean flag to developer to help inform if login is in progress
         * @returns {boolean} true/false
         */
        UserAgentApplication.prototype.getLoginInProgress = function () {
          var pendingCallback = this.cacheStorage.getItem(Constants_1.Constants.urlHash);
          if (pendingCallback) {
            return true;
          }
          return this.loginInProgress;
        };
        /**
         * @hidden
         * @ignore
         *
         * @param loginInProgress
         */
        UserAgentApplication.prototype.setloginInProgress = function (loginInProgress) {
          this.loginInProgress = loginInProgress;
        };
        /**
         * @hidden
         * @ignore
         *
         * returns the status of acquireTokenInProgress
         */
        UserAgentApplication.prototype.getAcquireTokenInProgress = function () {
          return this.acquireTokenInProgress;
        };
        /**
         * @hidden
         * @ignore
         *
         * @param acquireTokenInProgress
         */
        UserAgentApplication.prototype.setAcquireTokenInProgress = function (acquireTokenInProgress) {
          this.acquireTokenInProgress = acquireTokenInProgress;
        };
        /**
         * @hidden
         * @ignore
         *
         * returns the logger handle
         */
        UserAgentApplication.prototype.getLogger = function () {
          return this.config.system.logger;
        };
        //#endregion
        //#region Getters and Setters
        /**
         *
         * Use to get the redirect uri configured in MSAL or null.
         * Evaluates redirectUri if its a function, otherwise simply returns its value.
         * @returns {string} redirect URL
         *
         */
        UserAgentApplication.prototype.getRedirectUri = function () {
          if (typeof this.config.auth.redirectUri === "function") {
            return this.config.auth.redirectUri();
          }
          return this.config.auth.redirectUri;
        };
        /**
         * Use to get the post logout redirect uri configured in MSAL or null.
         * Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
         *
         * @returns {string} post logout redirect URL
         */
        UserAgentApplication.prototype.getPostLogoutRedirectUri = function () {
          if (typeof this.config.auth.postLogoutRedirectUri === "function") {
            return this.config.auth.postLogoutRedirectUri();
          }
          return this.config.auth.postLogoutRedirectUri;
        };
        /**
         * Use to get the current {@link Configuration} object in MSAL
         *
         * @returns {@link Configuration}
         */
        UserAgentApplication.prototype.getCurrentConfiguration = function () {
          if (!this.config) {
            throw ClientConfigurationError_1.ClientConfigurationError.createNoSetConfigurationError();
          }
          return this.config;
        };
        //#endregion
        //#region String Util (Should be extracted to Utils.ts)
        /**
         * @hidden
         * @ignore
         *
         * Returns the anchor part(#) of the URL
         */
        UserAgentApplication.prototype.getHash = function (hash) {
          if (hash.indexOf("#/") > -1) {
            hash = hash.substring(hash.indexOf("#/") + 2);
          }
          else if (hash.indexOf("#") > -1) {
            hash = hash.substring(1);
          }
          return hash;
        };
        /**
         * @hidden
         * @ignore
         *
         * extract URI from the host
         *
         * @param {string} URI
         * @returns {string} host from the URI
         */
        UserAgentApplication.prototype.getHostFromUri = function (uri) {
          // remove http:// or https:// from uri
          var extractedUri = String(uri).replace(/^(https?:)\/\//, "");
          extractedUri = extractedUri.split("/")[0];
          return extractedUri;
        };
        /**
         * @hidden
         * @ignore
         *
         * Utils function to create the Authentication
         * @param {@link account} account object
         * @param scopes
         * @param silentCall
         *
         * @returns {string} token type: id_token or access_token
         *
         */
        UserAgentApplication.prototype.getTokenType = function (accountObject, scopes, silentCall) {
          // if account is passed and matches the account object/or set to getAccount() from cache
          // if client-id is passed as scope, get id_token else token/id_token_token (in case no session exists)
          var tokenType;
          // acquireTokenSilent
          if (silentCall) {
            if (Utils_1.Utils.compareAccounts(accountObject, this.getAccount())) {
              tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            else {
              tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.id_token_token;
            }
            return tokenType;
          }
          // all other cases
          else {
            if (!Utils_1.Utils.compareAccounts(accountObject, this.getAccount())) {
              tokenType = ResponseTypes.id_token_token;
            }
            else {
              tokenType = (scopes.indexOf(this.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            return tokenType;
          }
        };
        /**
         * @hidden
         * @ignore
         *
         * Sets the cachekeys for and stores the account information in cache
         * @param account
         * @param state
         * @hidden
         */
        UserAgentApplication.prototype.setAccountCache = function (account, state) {
          // Cache acquireTokenAccountKey
          var accountId = account ? this.getAccountId(account) : Constants_1.Constants.no_account;
          var acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountId, state);
          this.cacheStorage.setItem(acquireTokenAccountKey, JSON.stringify(account));
        };
        /**
         * @hidden
         * @ignore
         *
         * Sets the cacheKey for and stores the authority information in cache
         * @param state
         * @param authority
         * @hidden
         */
        UserAgentApplication.prototype.setAuthorityCache = function (state, authority) {
          // Cache authorityKey
          var authorityKey = Storage_1.Storage.generateAuthorityKey(state);
          this.cacheStorage.setItem(authorityKey, Utils_1.Utils.CanonicalizeUri(authority), this.inCookie);
        };
        /**
         * Updates account, authority, and nonce in cache
         * @param serverAuthenticationRequest
         * @param account
         * @hidden
         * @ignore
         */
        UserAgentApplication.prototype.updateCacheEntries = function (serverAuthenticationRequest, account, loginStartPage) {
          // Cache account and authority
          if (loginStartPage) {
            // Cache the state, nonce, and login request data
            this.cacheStorage.setItem(Constants_1.Constants.loginRequest, loginStartPage, this.inCookie);
            this.cacheStorage.setItem(Constants_1.Constants.loginError, "");
            this.cacheStorage.setItem(Constants_1.Constants.stateLogin, serverAuthenticationRequest.state, this.inCookie);
            this.cacheStorage.setItem(Constants_1.Constants.nonceIdToken, serverAuthenticationRequest.nonce, this.inCookie);
            this.cacheStorage.setItem(Constants_1.Constants.msalError, "");
            this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
          }
          else {
            this.setAccountCache(account, serverAuthenticationRequest.state);
          }
          // Cache authorityKey
          this.setAuthorityCache(serverAuthenticationRequest.state, serverAuthenticationRequest.authority);
          // Cache nonce
          this.cacheStorage.setItem(Constants_1.Constants.nonceIdToken, serverAuthenticationRequest.nonce, this.inCookie);
        };
        /**
         * Returns the unique identifier for the logged in account
         * @param account
         * @hidden
         * @ignore
         */
        UserAgentApplication.prototype.getAccountId = function (account) {
          //return `${account.accountIdentifier}` + Constants.resourceDelimiter + `${account.homeAccountIdentifier}`;
          var accountId;
          if (!Utils_1.Utils.isEmpty(account.homeAccountIdentifier)) {
            accountId = account.homeAccountIdentifier;
          }
          else {
            accountId = Constants_1.Constants.no_account;
          }
          return accountId;
        };
        /**
         * @hidden
         * @ignore
         *
         * Construct 'tokenRequest' from the available data in adalIdToken
         * @param extraQueryParameters
         * @hidden
         */
        UserAgentApplication.prototype.buildIDTokenRequest = function (request) {
          var tokenRequest = {
            scopes: [this.clientId],
            authority: this.authority,
            account: this.getAccount(),
            extraQueryParameters: request.extraQueryParameters
          };
          return tokenRequest;
        };
        /**
         * @hidden
         * @ignore
         *
         * Utility to populate QueryParameters and ExtraQueryParameters to ServerRequestParamerers
         * @param request
         * @param serverAuthenticationRequest
         */
        UserAgentApplication.prototype.populateQueryParams = function (account, request, serverAuthenticationRequest, adalIdTokenObject) {
          var queryParameters = {};
          if (request) {
            // add the prompt parameter to serverRequestParameters if passed
            if (request.prompt) {
              this.validatePromptParameter(request.prompt);
              serverAuthenticationRequest.promptValue = request.prompt;
            }
            // Add claims challenge to serverRequestParameters if passed
            if (request.claimsRequest) {
              AuthenticationParameters_1.validateClaimsRequest(request);
              serverAuthenticationRequest.claimsValue = request.claimsRequest;
            }
            // if the developer provides one of these, give preference to developer choice
            if (Utils_1.Utils.isSSOParam(request)) {
              queryParameters = Utils_1.Utils.constructUnifiedCacheQueryParameter(request, null);
            }
          }
          if (adalIdTokenObject) {
            queryParameters = Utils_1.Utils.constructUnifiedCacheQueryParameter(null, adalIdTokenObject);
          }
          // adds sid/login_hint if not populated; populates domain_req, login_req and domain_hint
          this.logger.verbose("Calling addHint parameters");
          queryParameters = this.addHintParameters(account, queryParameters, serverAuthenticationRequest);
          // sanity check for developer passed extraQueryParameters
          var eQParams;
          if (request) {
            eQParams = this.sanitizeEQParams(request);
          }
          // Populate the extraQueryParameters to be sent to the server
          serverAuthenticationRequest.queryParameters = Utils_1.Utils.generateQueryParametersString(queryParameters);
          serverAuthenticationRequest.extraQueryParameters = Utils_1.Utils.generateQueryParametersString(eQParams);
          return serverAuthenticationRequest;
        };
        /**
         * @hidden
         * @ignore
         *
         * Utility to test if valid prompt value is passed in the request
         * @param request
         */
        UserAgentApplication.prototype.validatePromptParameter = function (prompt) {
          if (!([Constants_1.PromptState.LOGIN, Constants_1.PromptState.SELECT_ACCOUNT, Constants_1.PromptState.CONSENT, Constants_1.PromptState.NONE].indexOf(prompt) >= 0)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidPromptError(prompt);
          }
        };
        /**
         * @hidden
         * @ignore
      
         * Removes unnecessary or duplicate query parameters from extraQueryParameters
         * @param request
         */
        UserAgentApplication.prototype.sanitizeEQParams = function (request) {
          var eQParams = request.extraQueryParameters;
          if (!eQParams) {
            return null;
          }
          if (request.claimsRequest) {
            this.logger.warning("Removed duplicate claims from extraQueryParameters. Please use either the claimsRequest field OR pass as extraQueryParameter - not both.");
            delete eQParams[Constants_1.Constants.claims];
          }
          delete eQParams[Constants_1.SSOTypes.SID];
          delete eQParams[Constants_1.SSOTypes.LOGIN_HINT];
          return eQParams;
        };
        tslib_1.__decorate([
          resolveTokenOnlyIfOutOfIframe
        ], UserAgentApplication.prototype, "acquireTokenSilent", null);
        return UserAgentApplication;
      }());
      exports.UserAgentApplication = UserAgentApplication;


      /***/
}),
/* 10 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var Utils_1 = __webpack_require__(0);
      /**
       * accountIdentifier       combination of idToken.uid and idToken.utid
       * homeAccountIdentifier   combination of clientInfo.uid and clientInfo.utid
       * userName                idToken.preferred_username
       * name                    idToken.name
       * idToken                 idToken
       * sid                     idToken.sid - session identifier
       * environment             idtoken.issuer (the authority that issues the token)
       */
      var Account = /** @class */ (function () {
        /**
         * Creates an Account Object
         * @praram accountIdentifier
         * @param homeAccountIdentifier
         * @param userName
         * @param name
         * @param idToken
         * @param sid
         * @param environment
         */
        function Account(accountIdentifier, homeAccountIdentifier, userName, name, idToken, sid, environment) {
          this.accountIdentifier = accountIdentifier;
          this.homeAccountIdentifier = homeAccountIdentifier;
          this.userName = userName;
          this.name = name;
          this.idToken = idToken;
          this.sid = sid;
          this.environment = environment;
        }
        /**
         * @hidden
         * @param idToken
         * @param clientInfo
         */
        Account.createAccount = function (idToken, clientInfo) {
          // create accountIdentifier
          var accountIdentifier = idToken.objectId || idToken.subject;
          // create homeAccountIdentifier
          var uid = clientInfo ? clientInfo.uid : "";
          var utid = clientInfo ? clientInfo.utid : "";
          var homeAccountIdentifier;
          if (!Utils_1.Utils.isEmpty(uid) && !Utils_1.Utils.isEmpty(utid)) {
            homeAccountIdentifier = Utils_1.Utils.base64EncodeStringUrlSafe(uid) + "." + Utils_1.Utils.base64EncodeStringUrlSafe(utid);
          }
          return new Account(accountIdentifier, homeAccountIdentifier, idToken.preferredName, idToken.name, idToken.decodedIdToken, idToken.sid, idToken.issuer);
        };
        return Account;
      }());
      exports.Account = Account;


      /***/
}),
/* 11 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = __webpack_require__(1);
      var Authority_1 = __webpack_require__(6);
      var XHRClient_1 = __webpack_require__(12);
      /**
       * @hidden
       */
      var AadAuthority = /** @class */ (function (_super) {
        tslib_1.__extends(AadAuthority, _super);
        function AadAuthority(authority, validateAuthority) {
          return _super.call(this, authority, validateAuthority) || this;
        }
        Object.defineProperty(AadAuthority.prototype, "AadInstanceDiscoveryEndpointUrl", {
          get: function () {
            return AadAuthority.AadInstanceDiscoveryEndpoint + "?api-version=1.0&authorization_endpoint=" + this.CanonicalAuthority + "oauth2/v2.0/authorize";
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(AadAuthority.prototype, "AuthorityType", {
          get: function () {
            return Authority_1.AuthorityType.Aad;
          },
          enumerable: true,
          configurable: true
        });
        /**
         * Returns a promise which resolves to the OIDC endpoint
         * Only responds with the endpoint
         */
        AadAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
          var _this = this;
          var resultPromise = new Promise(function (resolve, reject) {
            return resolve(_this.DefaultOpenIdConfigurationEndpoint);
          });
          if (!this.IsValidationEnabled) {
            return resultPromise;
          }
          var host = this.CanonicalAuthorityUrlComponents.HostNameAndPort;
          if (this.IsInTrustedHostList(host)) {
            return resultPromise;
          }
          var client = new XHRClient_1.XhrClient();
          return client.sendRequestAsync(this.AadInstanceDiscoveryEndpointUrl, "GET", true)
            .then(function (response) {
              return response.tenant_discovery_endpoint;
            });
        };
        /**
         * Checks to see if the host is in a list of trusted hosts
         * @param {string} The host to look up
         */
        AadAuthority.prototype.IsInTrustedHostList = function (host) {
          return AadAuthority.TrustedHostList[host.toLowerCase()];
        };
        AadAuthority.AadInstanceDiscoveryEndpoint = "https://login.microsoftonline.com/common/discovery/instance";
        AadAuthority.TrustedHostList = {
          "login.windows.net": "login.windows.net",
          "login.chinacloudapi.cn": "login.chinacloudapi.cn",
          "login.cloudgovapi.us": "login.cloudgovapi.us",
          "login.microsoftonline.com": "login.microsoftonline.com",
          "login.microsoftonline.de": "login.microsoftonline.de",
          "login.microsoftonline.us": "login.microsoftonline.us"
        };
        return AadAuthority;
      }(Authority_1.Authority));
      exports.AadAuthority = AadAuthority;


      /***/
}),
/* 12 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      /**
       * XHR client for JSON endpoints
       * https://www.npmjs.com/package/async-promise
       * @hidden
       */
      var XhrClient = /** @class */ (function () {
        function XhrClient() {
        }
        XhrClient.prototype.sendRequestAsync = function (url, method, enableCaching) {
          var _this = this;
          return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, /*async: */ true);
            if (enableCaching) {
              // TODO: (shivb) ensure that this can be cached
              // xhr.setRequestHeader("Cache-Control", "Public");
            }
            xhr.onload = function (ev) {
              if (xhr.status < 200 || xhr.status >= 300) {
                reject(_this.handleError(xhr.responseText));
              }
              try {
                var jsonResponse = JSON.parse(xhr.responseText);
              }
              catch (e) {
                reject(_this.handleError(xhr.responseText));
              }
              resolve(jsonResponse);
            };
            xhr.onerror = function (ev) {
              reject(xhr.status);
            };
            if (method === "GET") {
              xhr.send();
            }
            else {
              throw "not implemented";
            }
          });
        };
        XhrClient.prototype.handleError = function (responseText) {
          var jsonResponse;
          try {
            jsonResponse = JSON.parse(responseText);
            if (jsonResponse.error) {
              return jsonResponse.error;
            }
            else {
              throw responseText;
            }
          }
          catch (e) {
            return responseText;
          }
        };
        return XhrClient;
      }());
      exports.XhrClient = XhrClient;


      /***/
}),
/* 13 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = __webpack_require__(1);
      var Logger_1 = __webpack_require__(7);
      var Utils_1 = __webpack_require__(0);
      /**
       * Defaults for the Configuration Options
       */
      var FRAME_TIMEOUT = 6000;
      var OFFSET = 300;
      var NAVIGATE_FRAME_WAIT = 500;
      var DEFAULT_AUTH_OPTIONS = {
        clientId: "",
        authority: null,
        validateAuthority: true,
        redirectUri: function () { return Utils_1.Utils.getDefaultRedirectUri(); },
        postLogoutRedirectUri: function () { return Utils_1.Utils.getDefaultRedirectUri(); },
        navigateToLoginRequestUrl: true
      };
      var DEFAULT_CACHE_OPTIONS = {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
      };
      var DEFAULT_SYSTEM_OPTIONS = {
        logger: new Logger_1.Logger(null),
        loadFrameTimeout: FRAME_TIMEOUT,
        tokenRenewalOffsetSeconds: OFFSET,
        navigateFrameWait: NAVIGATE_FRAME_WAIT
      };
      var DEFAULT_FRAMEWORK_OPTIONS = {
        isAngular: false,
        unprotectedResources: new Array(),
        protectedResourceMap: new Map()
      };
      /**
       * MSAL function that sets the default options when not explicitly configured from app developer
       *
       * @param TAuthOptions
       * @param TCacheOptions
       * @param TSystemOptions
       * @param TFrameworkOptions
       *
       * @returns TConfiguration object
       */
      function buildConfiguration(_a) {
        var auth = _a.auth, _b = _a.cache, cache = _b === void 0 ? {} : _b, _c = _a.system, system = _c === void 0 ? {} : _c, _d = _a.framework, framework = _d === void 0 ? {} : _d;
        var overlayedConfig = {
          auth: tslib_1.__assign({}, DEFAULT_AUTH_OPTIONS, auth),
          cache: tslib_1.__assign({}, DEFAULT_CACHE_OPTIONS, cache),
          system: tslib_1.__assign({}, DEFAULT_SYSTEM_OPTIONS, system),
          framework: tslib_1.__assign({}, DEFAULT_FRAMEWORK_OPTIONS, framework)
        };
        return overlayedConfig;
      }
      exports.buildConfiguration = buildConfiguration;


      /***/
}),
/* 14 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var ClientConfigurationError_1 = __webpack_require__(3);
      function validateClaimsRequest(request) {
        if (!request.claimsRequest) {
          return;
        }
        var claims;
        try {
          claims = JSON.parse(request.claimsRequest);
        }
        catch (e) {
          throw ClientConfigurationError_1.ClientConfigurationError.createClaimsRequestParsingError(e);
        }
        // TODO: More validation will be added when the server team tells us how they have actually implemented claims
      }
      exports.validateClaimsRequest = validateClaimsRequest;


      /***/
}),
/* 15 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = __webpack_require__(1);
      var ServerError_1 = __webpack_require__(8);
      exports.InteractionRequiredAuthErrorMessage = {
        loginRequired: {
          code: "login_required"
        },
        interactionRequired: {
          code: "interaction_required"
        },
        consentRequired: {
          code: "consent_required"
        },
      };
      /**
       * Error thrown when the user is required to perform an interactive token request.
       */
      var InteractionRequiredAuthError = /** @class */ (function (_super) {
        tslib_1.__extends(InteractionRequiredAuthError, _super);
        function InteractionRequiredAuthError(errorCode, errorMessage) {
          var _this = _super.call(this, errorCode, errorMessage) || this;
          _this.name = "InteractionRequiredAuthError";
          Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
          return _this;
        }
        InteractionRequiredAuthError.createLoginRequiredAuthError = function (errorDesc) {
          return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.loginRequired.code, errorDesc);
        };
        InteractionRequiredAuthError.createInteractionRequiredAuthError = function (errorDesc) {
          return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.interactionRequired.code, errorDesc);
        };
        InteractionRequiredAuthError.createConsentRequiredAuthError = function (errorDesc) {
          return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.consentRequired.code, errorDesc);
        };
        return InteractionRequiredAuthError;
      }(ServerError_1.ServerError));
      exports.InteractionRequiredAuthError = InteractionRequiredAuthError;


      /***/
}),
/* 16 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      function buildResponseStateOnly(state) {
        return {
          uniqueId: "",
          tenantId: "",
          tokenType: "",
          idToken: null,
          accessToken: "",
          scopes: null,
          expiresOn: null,
          account: null,
          accountState: state
        };
      }
      exports.buildResponseStateOnly = buildResponseStateOnly;


      /***/
}),
/* 17 */
/***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(18);


      /***/
}),
/* 18 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      var UserAgentApplication_1 = __webpack_require__(9);
      exports.UserAgentApplication = UserAgentApplication_1.UserAgentApplication;
      var Logger_1 = __webpack_require__(7);
      exports.Logger = Logger_1.Logger;
      var Logger_2 = __webpack_require__(7);
      exports.LogLevel = Logger_2.LogLevel;
      var Account_1 = __webpack_require__(10);
      exports.Account = Account_1.Account;
      var Constants_1 = __webpack_require__(2);
      exports.Constants = Constants_1.Constants;
      var Authority_1 = __webpack_require__(6);
      exports.Authority = Authority_1.Authority;
      var UserAgentApplication_2 = __webpack_require__(9);
      exports.CacheResult = UserAgentApplication_2.CacheResult;
      var Configuration_1 = __webpack_require__(13);
      exports.CacheLocation = Configuration_1.CacheLocation;
      exports.Configuration = Configuration_1.Configuration;
      var AuthenticationParameters_1 = __webpack_require__(14);
      exports.AuthenticationParameters = AuthenticationParameters_1.AuthenticationParameters;
      var AuthResponse_1 = __webpack_require__(16);
      exports.AuthResponse = AuthResponse_1.AuthResponse;
      // Errors
      var AuthError_1 = __webpack_require__(5);
      exports.AuthError = AuthError_1.AuthError;
      var ClientAuthError_1 = __webpack_require__(4);
      exports.ClientAuthError = ClientAuthError_1.ClientAuthError;
      var ServerError_1 = __webpack_require__(8);
      exports.ServerError = ServerError_1.ServerError;
      var ClientConfigurationError_1 = __webpack_require__(3);
      exports.ClientConfigurationError = ClientConfigurationError_1.ClientConfigurationError;
      var InteractionRequiredAuthError_1 = __webpack_require__(15);
      exports.InteractionRequiredAuthError = InteractionRequiredAuthError_1.InteractionRequiredAuthError;


      /***/
}),
/* 19 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var Utils_1 = __webpack_require__(0);
      /**
       * @hidden
       */
      var AccessTokenKey = /** @class */ (function () {
        function AccessTokenKey(authority, clientId, scopes, uid, utid) {
          this.authority = Utils_1.Utils.CanonicalizeUri(authority);
          this.clientId = clientId;
          this.scopes = scopes;
          this.homeAccountIdentifier = Utils_1.Utils.base64EncodeStringUrlSafe(uid) + "." + Utils_1.Utils.base64EncodeStringUrlSafe(utid);
        }
        return AccessTokenKey;
      }());
      exports.AccessTokenKey = AccessTokenKey;


      /***/
}),
/* 20 */
/***/ (function (module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function (global) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
        ;
        (function (global, factory) {
          true
            ? module.exports = factory(global)
            : undefined;
        }((typeof self !== 'undefined' ? self
          : typeof window !== 'undefined' ? window
            : typeof global !== 'undefined' ? global
              : this), function (global) {
                'use strict';
                // existing version for noConflict()
                global = global || {};
                var _Base64 = global.Base64;
                var version = "2.5.1";
                // if node.js and NOT React Native, we use Buffer
                var buffer;
                if (true && module.exports) {
                  try {
                    buffer = eval("require('buffer').Buffer");
                  }
                  catch (err) {
                    buffer = undefined;
                  }
                }
                // constants
                var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var b64tab = function (bin) {
                  var t = {};
                  for (var i = 0, l = bin.length; i < l; i++)
                    t[bin.charAt(i)] = i;
                  return t;
                }(b64chars);
                var fromCharCode = String.fromCharCode;
                // encoder stuff
                var cb_utob = function (c) {
                  if (c.length < 2) {
                    var cc = c.charCodeAt(0);
                    return cc < 0x80 ? c
                      : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                        + fromCharCode(0x80 | (cc & 0x3f)))
                        : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                          + fromCharCode(0x80 | ((cc >>> 6) & 0x3f))
                          + fromCharCode(0x80 | (cc & 0x3f)));
                  }
                  else {
                    var cc = 0x10000
                      + (c.charCodeAt(0) - 0xD800) * 0x400
                      + (c.charCodeAt(1) - 0xDC00);
                    return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                      + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                      + fromCharCode(0x80 | ((cc >>> 6) & 0x3f))
                      + fromCharCode(0x80 | (cc & 0x3f)));
                  }
                };
                var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
                var utob = function (u) {
                  return u.replace(re_utob, cb_utob);
                };
                var cb_encode = function (ccc) {
                  var padlen = [0, 2, 1][ccc.length % 3], ord = ccc.charCodeAt(0) << 16
                    | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
                    | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)), chars = [
                      b64chars.charAt(ord >>> 18),
                      b64chars.charAt((ord >>> 12) & 63),
                      padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
                      padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
                    ];
                  return chars.join('');
                };
                var btoa = global.btoa ? function (b) {
                  return global.btoa(b);
                } : function (b) {
                  return b.replace(/[\s\S]{1,3}/g, cb_encode);
                };
                var _encode = buffer ?
                  buffer.from && Uint8Array && buffer.from !== Uint8Array.from
                    ? function (u) {
                      return (u.constructor === buffer.constructor ? u : buffer.from(u))
                        .toString('base64');
                    }
                    : function (u) {
                      return (u.constructor === buffer.constructor ? u : new buffer(u))
                        .toString('base64');
                    }
                  : function (u) { return btoa(utob(u)); };
                var encode = function (u, urisafe) {
                  return !urisafe
                    ? _encode(String(u))
                    : _encode(String(u)).replace(/[+\/]/g, function (m0) {
                      return m0 == '+' ? '-' : '_';
                    }).replace(/=/g, '');
                };
                var encodeURI = function (u) { return encode(u, true); };
                // decoder stuff
                var re_btou = new RegExp([
                  '[\xC0-\xDF][\x80-\xBF]',
                  '[\xE0-\xEF][\x80-\xBF]{2}',
                  '[\xF0-\xF7][\x80-\xBF]{3}'
                ].join('|'), 'g');
                var cb_btou = function (cccc) {
                  switch (cccc.length) {
                    case 4:
                      var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                        | ((0x3f & cccc.charCodeAt(1)) << 12)
                        | ((0x3f & cccc.charCodeAt(2)) << 6)
                        | (0x3f & cccc.charCodeAt(3)), offset = cp - 0x10000;
                      return (fromCharCode((offset >>> 10) + 0xD800)
                        + fromCharCode((offset & 0x3FF) + 0xDC00));
                    case 3:
                      return fromCharCode(((0x0f & cccc.charCodeAt(0)) << 12)
                        | ((0x3f & cccc.charCodeAt(1)) << 6)
                        | (0x3f & cccc.charCodeAt(2)));
                    default:
                      return fromCharCode(((0x1f & cccc.charCodeAt(0)) << 6)
                        | (0x3f & cccc.charCodeAt(1)));
                  }
                };
                var btou = function (b) {
                  return b.replace(re_btou, cb_btou);
                };
                var cb_decode = function (cccc) {
                  var len = cccc.length, padlen = len % 4, n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
                    | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
                    | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0)
                    | (len > 3 ? b64tab[cccc.charAt(3)] : 0), chars = [
                      fromCharCode(n >>> 16),
                      fromCharCode((n >>> 8) & 0xff),
                      fromCharCode(n & 0xff)
                    ];
                  chars.length -= [0, 0, 2, 1][padlen];
                  return chars.join('');
                };
                var _atob = global.atob ? function (a) {
                  return global.atob(a);
                } : function (a) {
                  return a.replace(/\S{1,4}/g, cb_decode);
                };
                var atob = function (a) {
                  return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
                };
                var _decode = buffer ?
                  buffer.from && Uint8Array && buffer.from !== Uint8Array.from
                    ? function (a) {
                      return (a.constructor === buffer.constructor
                        ? a : buffer.from(a, 'base64')).toString();
                    }
                    : function (a) {
                      return (a.constructor === buffer.constructor
                        ? a : new buffer(a, 'base64')).toString();
                    }
                  : function (a) { return btou(_atob(a)); };
                var decode = function (a) {
                  return _decode(String(a).replace(/[-_]/g, function (m0) { return m0 == '-' ? '+' : '/'; })
                    .replace(/[^A-Za-z0-9\+\/]/g, ''));
                };
                var noConflict = function () {
                  var Base64 = global.Base64;
                  global.Base64 = _Base64;
                  return Base64;
                };
                // export Base64
                global.Base64 = {
                  VERSION: version,
                  atob: atob,
                  btoa: btoa,
                  fromBase64: decode,
                  toBase64: encode,
                  utob: utob,
                  encode: encode,
                  encodeURI: encodeURI,
                  btou: btou,
                  decode: decode,
                  noConflict: noConflict,
                  __buffer__: buffer
                };
                // if ES5 is available, make Base64.extendString() available
                if (typeof Object.defineProperty === 'function') {
                  var noEnum = function (v) {
                    return { value: v, enumerable: false, writable: true, configurable: true };
                  };
                  global.Base64.extendString = function () {
                    Object.defineProperty(String.prototype, 'fromBase64', noEnum(function () {
                      return decode(this);
                    }));
                    Object.defineProperty(String.prototype, 'toBase64', noEnum(function (urisafe) {
                      return encode(this, urisafe);
                    }));
                    Object.defineProperty(String.prototype, 'toBase64URI', noEnum(function () {
                      return encode(this, true);
                    }));
                  };
                }
                //
                // export Base64 to the namespace
                //
                if (global['Meteor']) { // Meteor.js
                  Base64 = global.Base64;
                }
                // module.exports and AMD are mutually exclusive.
                // module.exports has precedence.
                if (true && module.exports) {
                  module.exports.Base64 = global.Base64;
                }
                else if (true) {
                  // AMD. Register as an anonymous module.
                  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () { return global.Base64; }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
                    __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                }
                // that's it!
                return { Base64: global.Base64 };
              }));

        /* WEBPACK VAR INJECTION */
}.call(this, __webpack_require__(21)))

      /***/
}),
/* 21 */
/***/ (function (module, exports) {

      var g;
      // This works in non-strict mode
      g = (function () {
        return this;
      })();
      try {
        // This works if eval is allowed (see CSP)
        g = g || new Function("return this")();
      }
      catch (e) {
        // This works if the window reference is available
        if (typeof window === "object")
          g = window;
      }
      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}
      module.exports = g;


      /***/
}),
/* 22 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      /**
       * @hidden
       */
      var AccessTokenValue = /** @class */ (function () {
        function AccessTokenValue(accessToken, idToken, expiresIn, homeAccountIdentifier) {
          this.accessToken = accessToken;
          this.idToken = idToken;
          this.expiresIn = expiresIn;
          this.homeAccountIdentifier = homeAccountIdentifier;
        }
        return AccessTokenValue;
      }());
      exports.AccessTokenValue = AccessTokenValue;


      /***/
}),
/* 23 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var Utils_1 = __webpack_require__(0);
      /**
       * Nonce: OIDC Nonce definition: https://openid.net/specs/openid-connect-core-1_0.html#IDToken
       * State: OAuth Spec: https://tools.ietf.org/html/rfc6749#section-10.12
       * @hidden
       */
      var ServerRequestParameters = /** @class */ (function () {
        /**
         * Constructor
         * @param authority
         * @param clientId
         * @param scope
         * @param responseType
         * @param redirectUri
         * @param state
         */
        function ServerRequestParameters(authority, clientId, scope, responseType, redirectUri, state) {
          this.authorityInstance = authority;
          this.clientId = clientId;
          this.scopes = scope;
          this.nonce = Utils_1.Utils.createNewGuid();
          this.state = state && !Utils_1.Utils.isEmpty(state) ? Utils_1.Utils.createNewGuid() + "|" + state : Utils_1.Utils.createNewGuid();
          // TODO: Change this to user passed vs generated with the new PR
          this.correlationId = Utils_1.Utils.createNewGuid();
          // telemetry information
          this.xClientSku = "MSAL.JS";
          this.xClientVer = Utils_1.Utils.getLibraryVersion();
          this.responseType = responseType;
          this.redirectUri = redirectUri;
        }
        Object.defineProperty(ServerRequestParameters.prototype, "authority", {
          get: function () {
            return this.authorityInstance ? this.authorityInstance.CanonicalAuthority : null;
          },
          enumerable: true,
          configurable: true
        });
        /**
         * generates the URL with QueryString Parameters
         * @param scopes
         */
        ServerRequestParameters.prototype.createNavigateUrl = function (scopes) {
          var str = this.createNavigationUrlString(scopes);
          var authEndpoint = this.authorityInstance.AuthorizationEndpoint;
          // if the endpoint already has queryparams, lets add to it, otherwise add the first one
          if (authEndpoint.indexOf("?") < 0) {
            authEndpoint += "?";
          }
          else {
            authEndpoint += "&";
          }
          var requestUrl = "" + authEndpoint + str.join("&");
          return requestUrl;
        };
        /**
         * Generate the array of all QueryStringParams to be sent to the server
         * @param scopes
         */
        ServerRequestParameters.prototype.createNavigationUrlString = function (scopes) {
          if (!scopes) {
            scopes = [this.clientId];
          }
          if (scopes.indexOf(this.clientId) === -1) {
            scopes.push(this.clientId);
          }
          var str = [];
          str.push("response_type=" + this.responseType);
          this.translateclientIdUsedInScope(scopes);
          str.push("scope=" + encodeURIComponent(this.parseScope(scopes)));
          str.push("client_id=" + encodeURIComponent(this.clientId));
          str.push("redirect_uri=" + encodeURIComponent(this.redirectUri));
          str.push("state=" + encodeURIComponent(this.state));
          str.push("nonce=" + encodeURIComponent(this.nonce));
          str.push("client_info=1");
          str.push("x-client-SKU=" + this.xClientSku);
          str.push("x-client-Ver=" + this.xClientVer);
          if (this.promptValue) {
            str.push("prompt=" + encodeURIComponent(this.promptValue));
          }
          if (this.claimsValue) {
            str.push("claims=" + encodeURIComponent(this.claimsValue));
          }
          if (this.queryParameters) {
            str.push(this.queryParameters);
          }
          if (this.extraQueryParameters) {
            str.push(this.extraQueryParameters);
          }
          str.push("client-request-id=" + encodeURIComponent(this.correlationId));
          return str;
        };
        /**
         * append the required scopes: https://openid.net/specs/openid-connect-basic-1_0.html#Scopes
         * @param scopes
         */
        ServerRequestParameters.prototype.translateclientIdUsedInScope = function (scopes) {
          var clientIdIndex = scopes.indexOf(this.clientId);
          if (clientIdIndex >= 0) {
            scopes.splice(clientIdIndex, 1);
            if (scopes.indexOf("openid") === -1) {
              scopes.push("openid");
            }
            if (scopes.indexOf("profile") === -1) {
              scopes.push("profile");
            }
          }
        };
        /**
         * Parse the scopes into a formatted scopeList
         * @param scopes
         */
        ServerRequestParameters.prototype.parseScope = function (scopes) {
          var scopeList = "";
          if (scopes) {
            for (var i = 0; i < scopes.length; ++i) {
              scopeList += (i !== scopes.length - 1) ? scopes[i] + " " : scopes[i];
            }
          }
          return scopeList;
        };
        return ServerRequestParameters;
      }());
      exports.ServerRequestParameters = ServerRequestParameters;


      /***/
}),
/* 24 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var Utils_1 = __webpack_require__(0);
      var ClientAuthError_1 = __webpack_require__(4);
      /**
       * @hidden
       */
      var ClientInfo = /** @class */ (function () {
        function ClientInfo(rawClientInfo) {
          if (!rawClientInfo || Utils_1.Utils.isEmpty(rawClientInfo)) {
            this.uid = "";
            this.utid = "";
            return;
          }
          try {
            var decodedClientInfo = Utils_1.Utils.base64DecodeStringUrlSafe(rawClientInfo);
            var clientInfo = JSON.parse(decodedClientInfo);
            if (clientInfo) {
              if (clientInfo.hasOwnProperty("uid")) {
                this.uid = clientInfo.uid;
              }
              if (clientInfo.hasOwnProperty("utid")) {
                this.utid = clientInfo.utid;
              }
            }
          }
          catch (e) {
            throw ClientAuthError_1.ClientAuthError.createClientInfoDecodingError(e);
          }
        }
        Object.defineProperty(ClientInfo.prototype, "uid", {
          get: function () {
            return this._uid ? this._uid : "";
          },
          set: function (uid) {
            this._uid = uid;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(ClientInfo.prototype, "utid", {
          get: function () {
            return this._utid ? this._utid : "";
          },
          set: function (utid) {
            this._utid = utid;
          },
          enumerable: true,
          configurable: true
        });
        return ClientInfo;
      }());
      exports.ClientInfo = ClientInfo;


      /***/
}),
/* 25 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var Utils_1 = __webpack_require__(0);
      var ClientAuthError_1 = __webpack_require__(4);
      /**
       * @hidden
       */
      var IdToken = /** @class */ (function () {
        /* tslint:disable:no-string-literal */
        function IdToken(rawIdToken) {
          if (Utils_1.Utils.isEmpty(rawIdToken)) {
            throw ClientAuthError_1.ClientAuthError.createIdTokenNullOrEmptyError(rawIdToken);
          }
          try {
            this.rawIdToken = rawIdToken;
            this.decodedIdToken = Utils_1.Utils.extractIdToken(rawIdToken);
            if (this.decodedIdToken) {
              if (this.decodedIdToken.hasOwnProperty("iss")) {
                this.issuer = this.decodedIdToken["iss"];
              }
              if (this.decodedIdToken.hasOwnProperty("oid")) {
                this.objectId = this.decodedIdToken["oid"];
              }
              if (this.decodedIdToken.hasOwnProperty("sub")) {
                this.subject = this.decodedIdToken["sub"];
              }
              if (this.decodedIdToken.hasOwnProperty("tid")) {
                this.tenantId = this.decodedIdToken["tid"];
              }
              if (this.decodedIdToken.hasOwnProperty("ver")) {
                this.version = this.decodedIdToken["ver"];
              }
              if (this.decodedIdToken.hasOwnProperty("preferred_username")) {
                this.preferredName = this.decodedIdToken["preferred_username"];
              }
              if (this.decodedIdToken.hasOwnProperty("name")) {
                this.name = this.decodedIdToken["name"];
              }
              if (this.decodedIdToken.hasOwnProperty("nonce")) {
                this.nonce = this.decodedIdToken["nonce"];
              }
              if (this.decodedIdToken.hasOwnProperty("exp")) {
                this.expiration = this.decodedIdToken["exp"];
              }
              if (this.decodedIdToken.hasOwnProperty("home_oid")) {
                this.homeObjectId = this.decodedIdToken["home_oid"];
              }
              if (this.decodedIdToken.hasOwnProperty("sid")) {
                this.sid = this.decodedIdToken["sid"];
              }
              /* tslint:enable:no-string-literal */
            }
          }
          catch (e) {
            // TODO: This error here won't really every be thrown, since extractIdToken() returns null if the decodeJwt() fails.
            // Need to add better error handling here to account for being unable to decode jwts.
            throw ClientAuthError_1.ClientAuthError.createIdTokenParsingError(e);
          }
        }
        return IdToken;
      }());
      exports.IdToken = IdToken;


      /***/
}),
/* 26 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var Constants_1 = __webpack_require__(2);
      var AccessTokenCacheItem_1 = __webpack_require__(27);
      var Constants_2 = __webpack_require__(2);
      var ClientConfigurationError_1 = __webpack_require__(3);
      /**
       * @hidden
       */
      var Storage = /** @class */ (function () {
        function Storage(cacheLocation) {
          if (Storage.instance) {
            return Storage.instance;
          }
          this.cacheLocation = cacheLocation;
          this.localStorageSupported = typeof window[this.cacheLocation] !== "undefined" && window[this.cacheLocation] != null;
          this.sessionStorageSupported = typeof window[cacheLocation] !== "undefined" && window[cacheLocation] != null;
          Storage.instance = this;
          if (!this.localStorageSupported && !this.sessionStorageSupported) {
            throw ClientConfigurationError_1.ClientConfigurationError.createNoStorageSupportedError();
          }
          return Storage.instance;
        }
        // add value to storage
        Storage.prototype.setItem = function (key, value, enableCookieStorage) {
          if (window[this.cacheLocation]) {
            window[this.cacheLocation].setItem(key, value);
          }
          if (enableCookieStorage) {
            this.setItemCookie(key, value);
          }
        };
        // get one item by key from storage
        Storage.prototype.getItem = function (key, enableCookieStorage) {
          if (enableCookieStorage && this.getItemCookie(key)) {
            return this.getItemCookie(key);
          }
          if (window[this.cacheLocation]) {
            return window[this.cacheLocation].getItem(key);
          }
          return null;
        };
        // remove value from storage
        Storage.prototype.removeItem = function (key) {
          if (window[this.cacheLocation]) {
            return window[this.cacheLocation].removeItem(key);
          }
        };
        // clear storage (remove all items from it)
        Storage.prototype.clear = function () {
          if (window[this.cacheLocation]) {
            return window[this.cacheLocation].clear();
          }
        };
        Storage.prototype.getAllAccessTokens = function (clientId, homeAccountIdentifier) {
          var results = [];
          var accessTokenCacheItem;
          var storage = window[this.cacheLocation];
          if (storage) {
            var key = void 0;
            for (key in storage) {
              if (storage.hasOwnProperty(key)) {
                if (key.match(clientId) && key.match(homeAccountIdentifier)) {
                  var value = this.getItem(key);
                  if (value) {
                    accessTokenCacheItem = new AccessTokenCacheItem_1.AccessTokenCacheItem(JSON.parse(key), JSON.parse(value));
                    results.push(accessTokenCacheItem);
                  }
                }
              }
            }
          }
          return results;
        };
        Storage.prototype.removeAcquireTokenEntries = function () {
          var storage = window[this.cacheLocation];
          if (storage) {
            var key = void 0;
            for (key in storage) {
              if (storage.hasOwnProperty(key)) {
                if (key.indexOf(Constants_2.CacheKeys.AUTHORITY) !== -1 || key.indexOf(Constants_2.CacheKeys.ACQUIRE_TOKEN_ACCOUNT) !== 1) {
                  var splitKey = key.split(Constants_1.Constants.resourceDelimiter);
                  var state = void 0;
                  if (splitKey.length > 1) {
                    state = splitKey[1];
                  }
                  if (state && !this.tokenRenewalInProgress(state)) {
                    this.removeItem(key);
                    this.removeItem(Constants_1.Constants.renewStatus + state);
                    this.removeItem(Constants_1.Constants.stateLogin);
                    this.removeItem(Constants_1.Constants.stateAcquireToken);
                    this.setItemCookie(key, "", -1);
                  }
                }
              }
            }
          }
          this.clearCookie();
        };
        Storage.prototype.tokenRenewalInProgress = function (stateValue) {
          var storage = window[this.cacheLocation];
          var renewStatus = storage[Constants_1.Constants.renewStatus + stateValue];
          return !(!renewStatus || renewStatus !== Constants_1.Constants.tokenRenewStatusInProgress);
        };
        Storage.prototype.resetCacheItems = function () {
          var storage = window[this.cacheLocation];
          if (storage) {
            var key = void 0;
            for (key in storage) {
              if (storage.hasOwnProperty(key)) {
                if (key.indexOf(Constants_1.Constants.msal) !== -1) {
                  this.removeItem(key);
                }
              }
            }
            this.removeAcquireTokenEntries();
          }
        };
        Storage.prototype.setItemCookie = function (cName, cValue, expires) {
          var cookieStr = cName + "=" + cValue + ";";
          if (expires) {
            var expireTime = this.getCookieExpirationTime(expires);
            cookieStr += "expires=" + expireTime + ";";
          }
          document.cookie = cookieStr;
        };
        Storage.prototype.getItemCookie = function (cName) {
          var name = cName + "=";
          var ca = document.cookie.split(";");
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
              c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
              return c.substring(name.length, c.length);
            }
          }
          return "";
        };
        Storage.prototype.getCookieExpirationTime = function (cookieLifeDays) {
          var today = new Date();
          var expr = new Date(today.getTime() + cookieLifeDays * 24 * 60 * 60 * 1000);
          return expr.toUTCString();
        };
        Storage.prototype.clearCookie = function () {
          this.setItemCookie(Constants_1.Constants.nonceIdToken, "", -1);
          this.setItemCookie(Constants_1.Constants.stateLogin, "", -1);
          this.setItemCookie(Constants_1.Constants.loginRequest, "", -1);
          this.setItemCookie(Constants_1.Constants.stateAcquireToken, "", -1);
        };
        /**
         * Create acquireTokenAccountKey to cache account object
         * @param accountId
         * @param state
         */
        Storage.generateAcquireTokenAccountKey = function (accountId, state) {
          return Constants_2.CacheKeys.ACQUIRE_TOKEN_ACCOUNT + Constants_1.Constants.resourceDelimiter +
            ("" + accountId) + Constants_1.Constants.resourceDelimiter + ("" + state);
        };
        /**
         * Create authorityKey to cache authority
         * @param state
         */
        Storage.generateAuthorityKey = function (state) {
          return Constants_2.CacheKeys.AUTHORITY + Constants_1.Constants.resourceDelimiter + ("" + state);
        };
        return Storage;
      }());
      exports.Storage = Storage;


      /***/
}),
/* 27 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      /**
       * @hidden
       */
      var AccessTokenCacheItem = /** @class */ (function () {
        function AccessTokenCacheItem(key, value) {
          this.key = key;
          this.value = value;
        }
        return AccessTokenCacheItem;
      }());
      exports.AccessTokenCacheItem = AccessTokenCacheItem;


      /***/
}),
/* 28 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      /**
       * @hidden
       */
      var Utils_1 = __webpack_require__(0);
      var AadAuthority_1 = __webpack_require__(11);
      var B2cAuthority_1 = __webpack_require__(29);
      var Authority_1 = __webpack_require__(6);
      var ClientConfigurationError_1 = __webpack_require__(3);
      var AuthorityFactory = /** @class */ (function () {
        function AuthorityFactory() {
        }
        /**
        * Parse the url and determine the type of authority
        */
        AuthorityFactory.DetectAuthorityFromUrl = function (authorityUrl) {
          authorityUrl = Utils_1.Utils.CanonicalizeUri(authorityUrl);
          var components = Utils_1.Utils.GetUrlComponents(authorityUrl);
          var pathSegments = components.PathSegments;
          switch (pathSegments[0]) {
            case "tfp":
              return Authority_1.AuthorityType.B2C;
            case "adfs":
              return Authority_1.AuthorityType.Adfs;
            default:
              return Authority_1.AuthorityType.Aad;
          }
        };
        /**
        * Create an authority object of the correct type based on the url
        * Performs basic authority validation - checks to see if the authority is of a valid type (eg aad, b2c)
        */
        AuthorityFactory.CreateInstance = function (authorityUrl, validateAuthority) {
          if (Utils_1.Utils.isEmpty(authorityUrl)) {
            return null;
          }
          var type = AuthorityFactory.DetectAuthorityFromUrl(authorityUrl);
          // Depending on above detection, create the right type.
          switch (type) {
            case Authority_1.AuthorityType.B2C:
              return new B2cAuthority_1.B2cAuthority(authorityUrl, validateAuthority);
            case Authority_1.AuthorityType.Aad:
              return new AadAuthority_1.AadAuthority(authorityUrl, validateAuthority);
            default:
              throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
          }
        };
        return AuthorityFactory;
      }());
      exports.AuthorityFactory = AuthorityFactory;


      /***/
}),
/* 29 */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";

      // Copyright (c) Microsoft Corporation. All rights reserved.
      // Licensed under the MIT License.
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = __webpack_require__(1);
      var AadAuthority_1 = __webpack_require__(11);
      var Authority_1 = __webpack_require__(6);
      var ClientConfigurationError_1 = __webpack_require__(3);
      var Utils_1 = __webpack_require__(0);
      /**
       * @hidden
       */
      var B2cAuthority = /** @class */ (function (_super) {
        tslib_1.__extends(B2cAuthority, _super);
        function B2cAuthority(authority, validateAuthority) {
          var _this = _super.call(this, authority, validateAuthority) || this;
          var urlComponents = Utils_1.Utils.GetUrlComponents(authority);
          var pathSegments = urlComponents.PathSegments;
          if (pathSegments.length < 3) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.b2cAuthorityUriInvalidPath;
          }
          _this.CanonicalAuthority = "https://" + urlComponents.HostNameAndPort + "/" + pathSegments[0] + "/" + pathSegments[1] + "/" + pathSegments[2] + "/";
          return _this;
        }
        Object.defineProperty(B2cAuthority.prototype, "AuthorityType", {
          get: function () {
            return Authority_1.AuthorityType.B2C;
          },
          enumerable: true,
          configurable: true
        });
        /**
         * Returns a promise with the TenantDiscoveryEndpoint
         */
        B2cAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
          var _this = this;
          var resultPromise = new Promise(function (resolve, reject) {
            return resolve(_this.DefaultOpenIdConfigurationEndpoint);
          });
          if (!this.IsValidationEnabled) {
            return resultPromise;
          }
          if (this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)) {
            return resultPromise;
          }
          return new Promise(function (resolve, reject) {
            return reject(ClientConfigurationError_1.ClientConfigurationErrorMessage.unsupportedAuthorityValidation);
          });
        };
        return B2cAuthority;
      }(AadAuthority_1.AadAuthority));
      exports.B2cAuthority = B2cAuthority;


      /***/
})
/******/]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01zYWwvLi9zcmMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9DbGllbnRBdXRoRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9BdXRoRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRob3JpdHkudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9TZXJ2ZXJFcnJvci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1VzZXJBZ2VudEFwcGxpY2F0aW9uLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjb3VudC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0FhZEF1dGhvcml0eS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1hIUkNsaWVudC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0NvbmZpZ3VyYXRpb24udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9JbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQXV0aFJlc3BvbnNlLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BY2Nlc3NUb2tlbktleS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vbm9kZV9tb2R1bGVzL2pzLWJhc2U2NC9iYXNlNjQuanMiLCJ3ZWJwYWNrOi8vTXNhbC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BY2Nlc3NUb2tlblZhbHVlLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9DbGllbnRJbmZvLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvSWRUb2tlbi50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BY2Nlc3NUb2tlbkNhY2hlSXRlbS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0F1dGhvcml0eUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9CMmNBdXRob3JpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FB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SSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVTtRQUFFLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDbkksQ0FBQztBQUZELGdDQUVDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVM7SUFDdkQsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtRQUNyRCxTQUFTLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSTtZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQUUsQ0FBQyxDQUFDO1FBQzNGLFNBQVMsUUFBUSxDQUFDLEtBQUssSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQUU7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFLENBQUMsQ0FBQztRQUM5RixTQUFTLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9JLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMs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QUM7d0JBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFBQyxTQUFTO29CQUNqRDt3QkFDSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOzRCQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQUMsU0FBUzt5QkFBRTt3QkFDNUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUFDLE1BQU07eUJBQUU7d0JBQ3RGLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs0QkFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUFDLE1BQU07eUJBQUU7d0JBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUFFLENBQUMsQ0FBQyxLQUFL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QUFHLEVBQUUsQ0FBQztJQUM5RCxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxjQUFjLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0SCxTQUFTLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFJLFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSTtRQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUFFO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQUUsQ0FBQyxDQUFDO0lBQ2xGLFNBQVMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hILFNBQVMsT0FBTyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU07UUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0RixDQUFDO0FBVkQsNENBVUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLGNBQWMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENB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TUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2NBQy9DLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDaEQsS0FBSyxHQUFHO1lBQ0osUUFBUSxDQUFDLE1BQU0sQ0FBRSxHQUFHLEtBQUssRUFBRSxDQUFDO1lBQzVCLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2xDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckQsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FDaEQsQ0FBQztRQUNGLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUM7SUFDRixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFTLENBQUM7UUFDL0IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDO1FBQ1YsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUM7SUFDRixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsSUFBSSxJQUFJLFVBQVUsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxJQUFJO1lBQzVELENBQUMsQ0FBQyxVQUFVLENBQUM7Z0JBQ1QsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3RCxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQzNCLENBQUM7WUFDRCxDQUFDLENBQUUsVUFBVSxDQUFDO2dCQUNWLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzdELFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDM0IsQ0FBQztRQUNELENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQzFDO0lBQ0QsSUFBSSxNQUFNLEdBQUcsVUFBUyxDQUFDLEVBQUUsT0FBTztRQUM1QixPQUFPLENBQUMsT0FBTztZQUNYLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFTLEVBQUU7Z0JBQzlDLE9BQU8sRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUM7SUFDRixJQUFJLFNBQVMsR0FBRyxVQUFTLENBQUMsSUFBSSxPQUFPLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZELGdCQUFnQjtJQUNoQixJQUFJLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQztRQUNyQix3QkFBd0I7UUFDeEIsMkJBQTJCO1FBQzNCLDJCQUEyQjtLQUM5QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLE9BQU8sR0FBRyxVQUFTLElBQUk7UUFDdkIsUUFBTyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3BCLEtBQUssQ0FBQztnQkFDRixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7c0JBQ25DLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztzQkFDbkMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUssQ0FBQyxDQUFDO3NCQUNsQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3JDLE1BQU0sR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDO2dCQUN0QixPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxLQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztzQkFDckMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkQsS0FBSyxDQUFDO2dCQUNGLE9BQU8sWUFBWSxDQUNmLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztzQkFDN0IsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO3NCQUNqQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3JDLENBQUM7WUFDTjtnQkFDSSxPQUFRLFlBQVksQ0FDaEIsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO3NCQUMzQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3JDLENBQUM7U0FDTDtJQUNMLENBQUMsQ0FBQztJQUNGLElBQUksSUFBSSxHQUFHLFVBQVMsQ0FBQztRQUNqQixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQztJQUNGLElBQUksU0FBUyxHQUFHLFVBQVMsSUFBSTtRQUN6QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUNyQixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFDaEIsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUMxQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDNUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQzVDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2xELEtBQUssR0FBRztZQUNKLFlBQVksQ0FBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZCLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDL0IsWUFBWSxDQUFFLENBQUMsR0FBVyxJQUFJLENBQUM7U0FDbEMsQ0FBQztRQUNGLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBUyxDQUFDO1FBQ2hDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVMsQ0FBQztRQUNWLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxJQUFJLEdBQUcsVUFBUyxDQUFDO1FBQ2pCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUM7SUFDRixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsSUFBSSxJQUFJLFVBQVUsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxJQUFJO1lBQzVELENBQUMsQ0FBQyxVQUFTLENBQUM7Z0JBQ1IsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssTUFBTSxDQUFDLFdBQVc7b0JBQ3BDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdkQsQ0FBQztZQUNELENBQUMsQ0FBQyxVQUFTLENBQUM7Z0JBQ1IsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssTUFBTSxDQUFDLFdBQVc7b0JBQ3BDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RELENBQUM7UUFDRCxDQUFDLENBQUMsVUFBUyxDQUFDLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzVDLElBQUksTUFBTSxHQUFHLFVBQVMsQ0FBQztRQUNuQixPQUFPLE9BQU8sQ0FDVixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFTLEVBQUUsSUFBSSxPQUFPLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQzthQUNwRSxPQUFPLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLENBQ3hDLENBQUM7SUFDTixDQUFDLENBQUM7SUFDRixJQUFJLFVBQVUsR0FBRztRQUNiLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDM0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDeEIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0lBQ0YsZ0JBQWdCO0lBQ2hCLE1BQU0sQ0FBQyxNQUFNLEdBQUc7UUFDWixPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxJQUFJO1FBQ1YsVUFBVSxFQUFFLE1BQU07UUFDbEIsUUFBUSxFQUFFLE1BQU07UUFDaEIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsTUFBTTtRQUNkLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLE1BQU07UUFDZCxVQUFVLEVBQUUsVUFBVTtRQUN0QixVQUFVLEVBQUUsTUFBTTtLQUNyQixDQUFDO0lBQ0YsNERBQTREO0lBQzVELElBQUksT0FBTyxNQUFNLENBQUMsY0FBYyxLQUFLLFVBQVUsRUFBRTtRQUM3QyxJQUFJLE1BQU0sR0FBRyxVQUFTLENBQUM7WUFDbkIsT0FBTyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRztZQUN6QixNQUFNLENBQUMsY0FBYyxDQUNqQixNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUM7Z0JBQ25DLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1IsTUFBTSxDQUFDLGNBQWMsQ0FDakIsTUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVUsT0FBTztnQkFDbEQsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1IsTUFBTSxDQUFDLGNBQWMsQ0FDakIsTUFBTSxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDO2dCQUNwQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWixDQUFDLENBQUM7S0FDTDtJQUNELEVBQUU7SUFDRixpQ0FBaUM7SUFDakMsRUFBRTtJQUNGLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWTtRQUNoQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUMxQjtJQUNELGlEQUFpRDtJQUNqRCxpQ0FBaUM7SUFDakMsSUFBSSxLQUE2QixJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDakQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUN6QztTQUNJLElBQUksSUFBMEMsRUFBRTtRQUNqRCx3Q0FBd0M7UUFDeEMsaUNBQU8sRUFBRSxtQ0FBRSxjQUFZLE9BQU8sTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDO0FBQUEsb0dBQUMsQ0FBQztLQUNsRDtJQUNELGFBQWE7SUFDYixPQUFPLEVBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUM7QUFDbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7QUMxT0osSUFBSSxDQUFDLENBQUM7QUFFTixnQ0FBZ0M7QUFDaEMsQ0FBQyxHQUFHLENBQUM7SUFDSixPQUFPLElBQUksQ0FBQztBQUNiLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFTCxJQUFJO0lBQ0gsMENBQTBDO0lBQzFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztDQUN2QztBQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQ1gsa0RBQWtEO0lBQ2xELElBQUksT0FBTyxNQUFNLEtBQUssUUFBUTtRQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7Q0FDM0M7QUFFRCwwREFBMEQ7QUFDMUQsd0RBQXdEO0FBQ3hELGlEQUFpRDtBQUVqRCxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7O0FDbkJuQiw0REFBNEQ7QUFDNUQsa0NBQWtDOztBQUVsQzs7R0FFRztBQUNIO0lBT0UsMEJBQVksV0FBbUIsRUFBRSxPQUFlLEVBQUUsU0FBaUIsRUFBRSxxQkFBNkI7UUFDaEcsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO0lBQ3JELENBQUM7SUFDSCx1QkFBQztBQUFELENBQUM7QUFiWSw0Q0FBZ0I7Ozs7Ozs7OztBQ043Qiw0REFBNEQ7QUFDNUQsa0NBQWtDOztBQUdsQyxxQ0FBZ0M7QUFFaEM7Ozs7R0FJRztBQUNIO0lBMkJFOzs7Ozs7OztPQVFHO0lBQ0gsaUNBQWEsU0FBb0IsRUFBRSxRQUFnQixFQUFFLEtBQW9CLEVBQUUsWUFBb0IsRUFBRSxXQUFtQixFQUFFLEtBQWE7UUFDakksSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVwQixJQUFJLENBQUMsS0FBSyxHQUFHLGFBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLGFBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFFLGFBQUssQ0FBQyxhQUFhLEVBQUUsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFHLENBQUMsQ0FBQyxhQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFN0csZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTNDLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLGFBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTVDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUE5QkQsc0JBQVcsOENBQVM7YUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkYsQ0FBQzs7O09BQUE7SUE4QkQ7OztPQUdHO0lBQ0gsbURBQWlCLEdBQWpCLFVBQWtCLE1BQXFCO1FBQ3JDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxJQUFJLFlBQVksR0FBVyxJQUFJLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUM7UUFDeEUsdUZBQXVGO1FBQ3ZGLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakMsWUFBWSxJQUFJLEdBQUcsQ0FBQztTQUNyQjthQUFNO1lBQ0wsWUFBWSxJQUFJLEdBQUcsQ0FBQztTQUNyQjtRQUVELElBQU0sVUFBVSxHQUFXLEtBQUcsWUFBWSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFHLENBQUM7UUFDN0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILDJEQUF5QixHQUF6QixVQUEwQixNQUFxQjtRQUM3QyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFCO1FBRUQsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQU0sR0FBRyxHQUFrQixFQUFFLENBQUM7UUFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzNELEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRWpFLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BELEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRXBELEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUIsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBZ0IsSUFBSSxDQUFDLFVBQVksQ0FBQyxDQUFDO1FBQzVDLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWdCLElBQUksQ0FBQyxVQUFZLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDNUQ7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDNUQ7UUFFRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN4RSxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRDs7O09BR0c7SUFDSCw4REFBNEIsR0FBNUIsVUFBNkIsTUFBcUI7UUFDaEQsSUFBTSxhQUFhLEdBQVcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUQsSUFBSSxhQUFhLElBQUksQ0FBQyxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN2QjtZQUNELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN4QjtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILDRDQUFVLEdBQVYsVUFBVyxNQUFxQjtRQUM5QixJQUFJLFNBQVMsR0FBVyxFQUFFLENBQUM7UUFDM0IsSUFBSSxNQUFNLEVBQUU7WUFDUixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDaEQsU0FBUyxJQUFJLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0RTtTQUNGO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQztBQXRKWSwwREFBdUI7Ozs7Ozs7OztBQ1hwQyw0REFBNEQ7QUFDNUQsa0NBQWtDOztBQUVsQyxxQ0FBZ0M7QUFDaEMsK0NBQTBEO0FBRTFEOztHQUVHO0FBQ0g7SUFvQkUsb0JBQVksYUFBcUI7UUFDL0IsSUFBSSxDQUFDLGFBQWEsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ2xELElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1I7UUFFRCxJQUFJO1lBQ0YsSUFBTSxpQkFBaUIsR0FBVyxhQUFLLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDakYsSUFBTSxVQUFVLEdBQTJCLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUN6RSxJQUFJLFVBQVUsRUFBRTtnQkFDZCxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztpQkFDM0I7Z0JBRUQsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7aUJBQzdCO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsTUFBTSxpQ0FBZSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQXZDRCxzQkFBSSwyQkFBRzthQUFQO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEMsQ0FBQzthQUVELFVBQVEsR0FBVztZQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNsQixDQUFDOzs7T0FKQTtJQU9ELHNCQUFJLDRCQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0QyxDQUFDO2FBRUQsVUFBUyxJQUFZO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUM7OztPQUpBO0lBNkJILGlCQUFDO0FBQUQsQ0FBQztBQTNDWSxnQ0FBVTs7Ozs7Ozs7O0FDVHZCLDREQUE0RDtBQUM1RCxrQ0FBa0M7O0FBRWxDLHFDQUFnQztBQUNoQywrQ0FBMEQ7QUFFMUQ7O0dBRUc7QUFDSDtJQWVFLHNDQUFzQztJQUN0QyxpQkFBWSxVQUFrQjtRQUM1QixJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDN0IsTUFBTSxpQ0FBZSxDQUFDLDZCQUE2QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSTtZQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBSyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2RCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDMUM7Z0JBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM5QztnQkFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzNDO2dCQUVELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDNUM7Z0JBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMzQztnQkFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7b0JBQzVELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2lCQUNoRTtnQkFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUM5QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3pDO2dCQUVELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDM0M7Z0JBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM5QztnQkFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ3ZEO2dCQUVELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDekM7Z0JBQ0gscUNBQXFDO2FBQ3BDO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLG9IQUFvSDtZQUNwSCxxRkFBcUY7WUFDckYsTUFBTSxpQ0FBZSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUVILGNBQUM7QUFBRCxDQUFDO0FBNUVZLDBCQUFPOzs7Ozs7Ozs7QUNUcEIsNERBQTREO0FBQzVELGtDQUFrQzs7QUFFbEMseUNBQXdDO0FBQ3hDLHFEQUE4RDtBQUU5RCx5Q0FBd0M7QUFDeEMsd0RBQTRFO0FBRTVFOztHQUVHO0FBQ0g7SUFPRSxpQkFBWSxhQUE0QjtRQUN0QyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDcEIsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDckgsSUFBSSxDQUFDLHVCQUF1QixHQUFHLE9BQU8sTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDO1FBQzdHLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEUsTUFBTSxtREFBd0IsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1NBQ2hFO1FBRUQsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFQyx1QkFBdUI7SUFDdkIseUJBQU8sR0FBUCxVQUFRLEdBQVcsRUFBRSxLQUFhLEVBQUUsbUJBQTZCO1FBQzdELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLG1CQUFtQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUVELG1DQUFtQztJQUNuQyx5QkFBTyxHQUFQLFVBQVEsR0FBVyxFQUFFLG1CQUE2QjtRQUM5QyxJQUFJLG1CQUFtQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzVCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsNEJBQTRCO0lBQzVCLDRCQUFVLEdBQVYsVUFBVyxHQUFXO1FBQ2xCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM1QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0wsQ0FBQztJQUVELDJDQUEyQztJQUMzQyx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzVCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM3QztJQUNMLENBQUM7SUFFRCxvQ0FBa0IsR0FBbEIsVUFBbUIsUUFBZ0IsRUFBRSxxQkFBNkI7UUFDOUQsSUFBTSxPQUFPLEdBQWdDLEVBQUUsQ0FBQztRQUNoRCxJQUFJLG9CQUEwQyxDQUFDO1FBQy9DLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0MsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLEdBQUcsU0FBUSxDQUFDO1lBQ2hCLEtBQUssR0FBRyxJQUFJLE9BQU8sRUFBRTtnQkFDakIsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM3QixJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO3dCQUN6RCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLEtBQUssRUFBRTs0QkFDUCxvQkFBb0IsR0FBRyxJQUFJLDJDQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNwRixPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7eUJBQ3RDO3FCQUNKO2lCQUNKO2FBQ0o7U0FDSjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCwyQ0FBeUIsR0FBekI7UUFDSSxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNDLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxHQUFHLFNBQVEsQ0FBQztZQUNoQixLQUFLLEdBQUcsSUFBSSxPQUFPLEVBQUU7Z0JBQ2pCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUMvRixJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFDeEQsSUFBSSxLQUFLLFVBQUM7d0JBQ1YsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs0QkFDckIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDdkI7d0JBQ0QsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEVBQUU7NEJBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQVMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUM7NEJBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7NEJBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNuQztxQkFDSjtpQkFDSjthQUNKO1NBQ0o7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLHdDQUFzQixHQUE5QixVQUErQixVQUFrQjtRQUM3QyxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUNoRSxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxXQUFXLEtBQUsscUJBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxpQ0FBZSxHQUFmO1FBQ0ksSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQyxJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksR0FBRyxTQUFRLENBQUM7WUFDaEIsS0FBSyxHQUFHLElBQUksT0FBTyxFQUFFO2dCQUNqQixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzdCLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxxQkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO3dCQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUN4QjtpQkFDSjthQUNKO1lBQ0QsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRUQsK0JBQWEsR0FBYixVQUFjLEtBQWEsRUFBRSxNQUFjLEVBQUUsT0FBZ0I7UUFDekQsSUFBSSxTQUFTLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzNDLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pELFNBQVMsSUFBSSxVQUFVLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQztTQUM5QztRQUVELFFBQVEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwrQkFBYSxHQUFiLFVBQWMsS0FBYTtRQUN2QixJQUFNLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzdDO1NBQ0o7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCx5Q0FBdUIsR0FBdkIsVUFBd0IsY0FBc0I7UUFDMUMsSUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsY0FBYyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzlFLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCw2QkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBUyxDQUFDLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBUyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksc0NBQThCLEdBQXJDLFVBQXNDLFNBQWMsRUFBRSxLQUFhO1FBQy9ELE9BQU8scUJBQVMsQ0FBQyxxQkFBcUIsR0FBRyxxQkFBUyxDQUFDLGlCQUFpQjthQUNoRSxLQUFHLFNBQVcsSUFBRyxxQkFBUyxDQUFDLGlCQUFpQixJQUFJLEtBQUcsS0FBTyxFQUFDO0lBQ25FLENBQUM7SUFFRDs7O09BR0c7SUFDSSw0QkFBb0IsR0FBM0IsVUFBNEIsS0FBYTtRQUNyQyxPQUFPLHFCQUFTLENBQUMsU0FBUyxHQUFHLHFCQUFTLENBQUMsaUJBQWlCLElBQUcsS0FBRyxLQUFPLEVBQUM7SUFDMUUsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBdkxZLDBCQUFPOzs7Ozs7Ozs7QUNacEIsNERBQTREO0FBQzVELGtDQUFrQzs7QUFLbEM7O0dBRUc7QUFDSDtJQUtFLDhCQUFZLEdBQW1CLEVBQUUsS0FBdUI7UUFDdEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDO0FBVFksb0RBQW9COzs7Ozs7Ozs7QUNUakMsNERBQTREO0FBQzVELGtDQUFrQzs7QUFFbEM7O0dBRUc7QUFDSCxxQ0FBZ0M7QUFDaEMsNkNBQThDO0FBQzlDLDZDQUE4QztBQUM5Qyx5Q0FBdUQ7QUFDdkQsd0RBQW1GO0FBRW5GO0lBQUE7SUFzQ0EsQ0FBQztJQXJDRzs7TUFFRTtJQUNhLHVDQUFzQixHQUFyQyxVQUFzQyxZQUFvQjtRQUN0RCxZQUFZLEdBQUcsYUFBSyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRCxJQUFNLFVBQVUsR0FBRyxhQUFLLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEQsSUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQztRQUM3QyxRQUFRLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQixLQUFLLEtBQUs7Z0JBQ04sT0FBTyx5QkFBYSxDQUFDLEdBQUcsQ0FBQztZQUM3QixLQUFLLE1BQU07Z0JBQ1AsT0FBTyx5QkFBYSxDQUFDLElBQUksQ0FBQztZQUM5QjtnQkFDSSxPQUFPLHlCQUFhLENBQUMsR0FBRyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVEOzs7TUFHRTtJQUNZLCtCQUFjLEdBQTVCLFVBQTZCLFlBQW9CLEVBQUUsaUJBQTBCO1FBQ3pFLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBTSxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkUsdURBQXVEO1FBQ3ZELFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyx5QkFBYSxDQUFDLEdBQUc7Z0JBQ2xCLE9BQU8sSUFBSSwyQkFBWSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQzdELEtBQUsseUJBQWEsQ0FBQyxHQUFHO2dCQUNsQixPQUFPLElBQUksMkJBQVksQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUM3RDtnQkFDSSxNQUFNLDBEQUErQixDQUFDLG9CQUFvQixDQUFDO1NBQ2xFO0lBQ0wsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQztBQXRDWSw0Q0FBZ0I7Ozs7Ozs7OztBQ1o3Qiw0REFBNEQ7QUFDNUQsa0NBQWtDOzs7QUFFbEMsNkNBQThDO0FBQzlDLHlDQUF1RDtBQUN2RCx3REFBbUY7QUFDbkYscUNBQWdDO0FBRWhDOztHQUVHO0FBQ0g7SUFBa0Msd0NBQVk7SUFDNUMsc0JBQW1CLFNBQWlCLEVBQUUsaUJBQTBCO1FBQWhFLFlBQ0Usa0JBQU0sU0FBUyxFQUFFLGlCQUFpQixDQUFDLFNBU3BDO1FBUkMsSUFBTSxhQUFhLEdBQUcsYUFBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXhELElBQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFDaEQsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QixNQUFNLDBEQUErQixDQUFDLDBCQUEwQixDQUFDO1NBQ3BFO1FBRUQsS0FBSSxDQUFDLGtCQUFrQixHQUFHLGFBQVcsYUFBYSxDQUFDLGVBQWUsU0FBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBRyxDQUFDOztJQUNqSSxDQUFDO0lBRUQsc0JBQVcsdUNBQWE7YUFBeEI7WUFDRSxPQUFPLHlCQUFhLENBQUMsR0FBRyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7SUFDSSwwREFBbUMsR0FBMUM7UUFBQSxpQkFjQztRQWJDLElBQU0sYUFBYSxHQUFHLElBQUksT0FBTyxDQUFTLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDeEQsY0FBTyxDQUFDLEtBQUksQ0FBQyxrQ0FBa0MsQ0FBQztRQUFoRCxDQUFnRCxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM3QixPQUFPLGFBQWEsQ0FBQztTQUN0QjtRQUVELElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNsRixPQUFPLGFBQWEsQ0FBQztTQUN0QjtRQUVELE9BQU8sSUFBSSxPQUFPLENBQVMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN6QyxhQUFNLENBQUMsMERBQStCLENBQUMsOEJBQThCLENBQUM7UUFBdEUsQ0FBc0UsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQ0FuQ2lDLDJCQUFZLEdBbUM3QztBQW5DWSxvQ0FBWSIsImZpbGUiOiJtc2FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJNc2FsXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1zYWxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTXNhbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE3KTtcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBJVXJpIH0gZnJvbSBcIi4vSVVyaVwiO1xyXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xyXG5pbXBvcnQge0NvbnN0YW50cywgU1NPVHlwZXMsIFByb21wdFN0YXRlfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCBRUERpY3QgfSBmcm9tIFwiLi9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnNcIjtcclxuaW1wb3J0IHsgQXV0aFJlc3BvbnNlIH0gZnJvbSBcIi4vQXV0aFJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi9JZFRva2VuXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBMaWJyYXJ5IH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEJhc2U2NCB9IGZyb20gXCJqcy1iYXNlNjRcIjtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVXRpbHMge1xyXG5cclxuICAvLyNyZWdpb24gR2VuZXJhbCBVdGlsXHJcblxyXG4gIC8qKlxyXG4gICAqIFV0aWxzIGZ1bmN0aW9uIHRvIGNvbXBhcmUgdHdvIEFjY291bnQgb2JqZWN0cyAtIHVzZWQgdG8gY2hlY2sgaWYgdGhlIHNhbWUgdXNlciBhY2NvdW50IGlzIGxvZ2dlZCBpblxyXG4gICAqXHJcbiAgICogQHBhcmFtIGExOiBBY2NvdW50IG9iamVjdFxyXG4gICAqIEBwYXJhbSBhMjogQWNjb3VudCBvYmplY3RcclxuICAgKi9cclxuICBzdGF0aWMgY29tcGFyZUFjY291bnRzKGExOiBBY2NvdW50LCBhMjogQWNjb3VudCk6IGJvb2xlYW4ge1xyXG4gICBpZiAoIWExIHx8ICFhMikge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICBpZiAoYTEuaG9tZUFjY291bnRJZGVudGlmaWVyICYmIGEyLmhvbWVBY2NvdW50SWRlbnRpZmllcikge1xyXG4gICAgICBpZiAoYTEuaG9tZUFjY291bnRJZGVudGlmaWVyID09PSBhMi5ob21lQWNjb3VudElkZW50aWZpZXIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVjaW1hbCB0byBIZXhcclxuICAgKlxyXG4gICAqIEBwYXJhbSBudW1cclxuICAgKi9cclxuICBzdGF0aWMgZGVjaW1hbFRvSGV4KG51bTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHZhciBoZXg6IHN0cmluZyA9IG51bS50b1N0cmluZygxNik7XHJcbiAgICB3aGlsZSAoaGV4Lmxlbmd0aCA8IDIpIHtcclxuICAgICAgaGV4ID0gXCIwXCIgKyBoZXg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGV4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTVNBTCBKUyBMaWJyYXJ5IFZlcnNpb25cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0TGlicmFyeVZlcnNpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBMaWJyYXJ5LnZlcnNpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IHJhbmRvbSBHVUlEIC0gdXNlZCB0byBwb3B1bGF0ZSBzdGF0ZT9cclxuICAgKiBAcmV0dXJucyBzdHJpbmcgKEdVSUQpXHJcbiAgICovXHJcbiAgc3RhdGljIGNyZWF0ZU5ld0d1aWQoKTogc3RyaW5nIHtcclxuICAgIC8vIFJGQzQxMjI6IFRoZSB2ZXJzaW9uIDQgVVVJRCBpcyBtZWFudCBmb3IgZ2VuZXJhdGluZyBVVUlEcyBmcm9tIHRydWx5LXJhbmRvbSBvclxyXG4gICAgLy8gcHNldWRvLXJhbmRvbSBudW1iZXJzLlxyXG4gICAgLy8gVGhlIGFsZ29yaXRobSBpcyBhcyBmb2xsb3dzOlxyXG4gICAgLy8gICAgIFNldCB0aGUgdHdvIG1vc3Qgc2lnbmlmaWNhbnQgYml0cyAoYml0cyA2IGFuZCA3KSBvZiB0aGVcclxuICAgIC8vICAgICAgICBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkIHRvIHplcm8gYW5kIG9uZSwgcmVzcGVjdGl2ZWx5LlxyXG4gICAgLy8gICAgIFNldCB0aGUgZm91ciBtb3N0IHNpZ25pZmljYW50IGJpdHMgKGJpdHMgMTIgdGhyb3VnaCAxNSkgb2YgdGhlXHJcbiAgICAvLyAgICAgICAgdGltZV9oaV9hbmRfdmVyc2lvbiBmaWVsZCB0byB0aGUgNC1iaXQgdmVyc2lvbiBudW1iZXIgZnJvbVxyXG4gICAgLy8gICAgICAgIFNlY3Rpb24gNC4xLjMuIFZlcnNpb240XHJcbiAgICAvLyAgICAgU2V0IGFsbCB0aGUgb3RoZXIgYml0cyB0byByYW5kb21seSAob3IgcHNldWRvLXJhbmRvbWx5KSBjaG9zZW5cclxuICAgIC8vICAgICB2YWx1ZXMuXHJcbiAgICAvLyBVVUlEICAgICAgICAgICAgICAgICAgID0gdGltZS1sb3cgXCItXCIgdGltZS1taWQgXCItXCJ0aW1lLWhpZ2gtYW5kLXZlcnNpb24gXCItXCJjbG9jay1zZXEtcmVzZXJ2ZWQgYW5kIGxvdygyaGV4T2N0ZXQpXCItXCIgbm9kZVxyXG4gICAgLy8gdGltZS1sb3cgICAgICAgICAgICAgICA9IDRoZXhPY3RldFxyXG4gICAgLy8gdGltZS1taWQgICAgICAgICAgICAgICA9IDJoZXhPY3RldFxyXG4gICAgLy8gdGltZS1oaWdoLWFuZC12ZXJzaW9uICA9IDJoZXhPY3RldFxyXG4gICAgLy8gY2xvY2stc2VxLWFuZC1yZXNlcnZlZCA9IGhleE9jdGV0OlxyXG4gICAgLy8gY2xvY2stc2VxLWxvdyAgICAgICAgICA9IGhleE9jdGV0XHJcbiAgICAvLyBub2RlICAgICAgICAgICAgICAgICAgID0gNmhleE9jdGV0XHJcbiAgICAvLyBGb3JtYXQ6IHh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFxyXG4gICAgLy8geSBjb3VsZCBiZSAxMDAwLCAxMDAxLCAxMDEwLCAxMDExIHNpbmNlIG1vc3Qgc2lnbmlmaWNhbnQgdHdvIGJpdHMgbmVlZHMgdG8gYmUgMTBcclxuICAgIC8vIHkgdmFsdWVzIGFyZSA4LCA5LCBBLCBCXHJcblxyXG4gICAgY29uc3QgY3J5cHRvT2JqOiBDcnlwdG8gPSB3aW5kb3cuY3J5cHRvOyAvLyBmb3IgSUUgMTFcclxuICAgIGlmIChjcnlwdG9PYmogJiYgY3J5cHRvT2JqLmdldFJhbmRvbVZhbHVlcykge1xyXG4gICAgICBjb25zdCBidWZmZXI6IFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheSgxNik7XHJcbiAgICAgIGNyeXB0b09iai5nZXRSYW5kb21WYWx1ZXMoYnVmZmVyKTtcclxuXHJcbiAgICAgIC8vYnVmZmVyWzZdIGFuZCBidWZmZXJbN10gcmVwcmVzZW50cyB0aGUgdGltZV9oaV9hbmRfdmVyc2lvbiBmaWVsZC4gV2Ugd2lsbCBzZXQgdGhlIGZvdXIgbW9zdCBzaWduaWZpY2FudCBiaXRzICg0IHRocm91Z2ggNykgb2YgYnVmZmVyWzZdIHRvIHJlcHJlc2VudCBkZWNpbWFsIG51bWJlciA0IChVVUlEIHZlcnNpb24gbnVtYmVyKS5cclxuICAgICAgYnVmZmVyWzZdIHw9IDB4NDA7IC8vYnVmZmVyWzZdIHwgMDEwMDAwMDAgd2lsbCBzZXQgdGhlIDYgYml0IHRvIDEuXHJcbiAgICAgIGJ1ZmZlcls2XSAmPSAweDRmOyAvL2J1ZmZlcls2XSAmIDAxMDAxMTExIHdpbGwgc2V0IHRoZSA0LCA1LCBhbmQgNyBiaXQgdG8gMCBzdWNoIHRoYXQgYml0cyA0LTcgPT0gMDEwMCA9IFwiNFwiLlxyXG5cclxuICAgICAgLy9idWZmZXJbOF0gcmVwcmVzZW50cyB0aGUgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZCBmaWVsZC4gV2Ugd2lsbCBzZXQgdGhlIHR3byBtb3N0IHNpZ25pZmljYW50IGJpdHMgKDYgYW5kIDcpIG9mIHRoZSBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkIHRvIHplcm8gYW5kIG9uZSwgcmVzcGVjdGl2ZWx5LlxyXG4gICAgICBidWZmZXJbOF0gfD0gMHg4MDsgLy9idWZmZXJbOF0gfCAxMDAwMDAwMCB3aWxsIHNldCB0aGUgNyBiaXQgdG8gMS5cclxuICAgICAgYnVmZmVyWzhdICY9IDB4YmY7IC8vYnVmZmVyWzhdICYgMTAxMTExMTEgd2lsbCBzZXQgdGhlIDYgYml0IHRvIDAuXHJcblxyXG4gICAgICByZXR1cm4gVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclswXSkgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzFdKVxyXG4gICAgICAgICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsyXSkgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzNdKVxyXG4gICAgICAgICsgXCItXCIgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzRdKSArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbNV0pXHJcbiAgICAgICAgKyBcIi1cIiArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbNl0pICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls3XSlcclxuICAgICAgICArIFwiLVwiICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls4XSkgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzldKVxyXG4gICAgICAgICsgXCItXCIgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzEwXSkgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzExXSlcclxuICAgICAgICArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTJdKSArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTNdKVxyXG4gICAgICAgICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxNF0pICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxNV0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IGd1aWRIb2xkZXI6IHN0cmluZyA9IFwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCI7XHJcbiAgICAgIGNvbnN0IGhleDogc3RyaW5nID0gXCIwMTIzNDU2Nzg5YWJjZGVmXCI7XHJcbiAgICAgIGxldCByOiBudW1iZXIgPSAwO1xyXG4gICAgICBsZXQgZ3VpZFJlc3BvbnNlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMzY7IGkrKykge1xyXG4gICAgICAgIGlmIChndWlkSG9sZGVyW2ldICE9PSBcIi1cIiAmJiBndWlkSG9sZGVyW2ldICE9PSBcIjRcIikge1xyXG4gICAgICAgICAgLy8gZWFjaCB4IGFuZCB5IG5lZWRzIHRvIGJlIHJhbmRvbVxyXG4gICAgICAgICAgciA9IE1hdGgucmFuZG9tKCkgICogMTYgfCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ3VpZEhvbGRlcltpXSA9PT0gXCJ4XCIpIHtcclxuICAgICAgICAgIGd1aWRSZXNwb25zZSArPSBoZXhbcl07XHJcbiAgICAgICAgfSBlbHNlIGlmIChndWlkSG9sZGVyW2ldID09PSBcInlcIikge1xyXG4gICAgICAgICAgLy8gY2xvY2stc2VxLWFuZC1yZXNlcnZlZCBmaXJzdCBoZXggaXMgZmlsdGVyZWQgYW5kIHJlbWFpbmluZyBoZXggdmFsdWVzIGFyZSByYW5kb21cclxuICAgICAgICAgIHIgJj0gMHgzOyAvLyBiaXQgYW5kIHdpdGggMDAxMSB0byBzZXQgcG9zIDIgdG8gemVybyA/MD8/XHJcbiAgICAgICAgICByIHw9IDB4ODsgLy8gc2V0IHBvcyAzIHRvIDEgYXMgMT8/P1xyXG4gICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGhleFtyXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGd1aWRIb2xkZXJbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBndWlkUmVzcG9uc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFRpbWVcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aW1lIGluIHNlY29uZHMgZm9yIGV4cGlyYXRpb24gYmFzZWQgb24gc3RyaW5nIHZhbHVlIHBhc3NlZCBpbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBleHBpcmVzXHJcbiAgICovXHJcbiAgc3RhdGljIGV4cGlyZXNJbihleHBpcmVzOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgLy8gaWYgQUFEIGRpZCBub3Qgc2VuZCBcImV4cGlyZXNfaW5cIiBwcm9wZXJ0eSwgdXNlIGRlZmF1bHQgZXhwaXJhdGlvbiBvZiAzNTk5IHNlY29uZHMsIGZvciBzb21lIHJlYXNvbiBBQUQgc2VuZHMgMzU5OSBhcyBcImV4cGlyZXNfaW5cIiB2YWx1ZSBpbnN0ZWFkIG9mIDM2MDBcclxuICAgICBpZiAoIWV4cGlyZXMpIHtcclxuICAgICAgICAgZXhwaXJlcyA9IFwiMzU5OVwiO1xyXG4gICAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5ub3coKSArIHBhcnNlSW50KGV4cGlyZXMsIDEwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldHVybiB0aGUgY3VycmVudCB0aW1lIGluIFVuaXggdGltZS4gRGF0ZS5nZXRUaW1lKCkgcmV0dXJucyBpbiBtaWxsaXNlY29uZHMuXHJcbiAgICovXHJcbiAgc3RhdGljIG5vdygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLjApO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBTdHJpbmcgT3BzXHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgc3RyaW5nIGlzIGVtcHR5XHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RyXHJcbiAgICovXHJcbiAgc3RhdGljIGlzRW1wdHkoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhc3RyIHx8IDAgPT09IHN0ci5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBUb2tlbiBQcm9jZXNzaW5nIChFeHRyYWN0IHRvIFRva2VuUHJvY2Vzc2luZy50cylcclxuXHJcbiAgLyoqXHJcbiAgICogZGVjb2RlIGEgSldUXHJcbiAgICpcclxuICAgKiBAcGFyYW0gand0VG9rZW5cclxuICAgKi9cclxuICBzdGF0aWMgZGVjb2RlSnd0KGp3dFRva2VuOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eShqd3RUb2tlbikpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpZFRva2VuUGFydHNSZWdleCA9IC9eKFteXFwuXFxzXSopXFwuKFteXFwuXFxzXSspXFwuKFteXFwuXFxzXSopJC87XHJcbiAgICBjb25zdCBtYXRjaGVzID0gaWRUb2tlblBhcnRzUmVnZXguZXhlYyhqd3RUb2tlbik7XHJcbiAgICBpZiAoIW1hdGNoZXMgfHwgbWF0Y2hlcy5sZW5ndGggPCA0KSB7XHJcbiAgICAgIC8vdGhpcy5fcmVxdWVzdENvbnRleHQubG9nZ2VyLndhcm4oXCJUaGUgcmV0dXJuZWQgaWRfdG9rZW4gaXMgbm90IHBhcnNlYWJsZS5cIik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY3JhY2tlZFRva2VuID0ge1xyXG4gICAgICBoZWFkZXI6IG1hdGNoZXNbMV0sXHJcbiAgICAgIEpXU1BheWxvYWQ6IG1hdGNoZXNbMl0sXHJcbiAgICAgIEpXU1NpZzogbWF0Y2hlc1szXVxyXG4gICAgfTtcclxuICAgIHJldHVybiBjcmFja2VkVG9rZW47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFeHRyYWN0IElkVG9rZW4gYnkgZGVjb2RpbmcgdGhlIFJBV0lkVG9rZW5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbmNvZGVkSWRUb2tlblxyXG4gICAqL1xyXG4gIHN0YXRpYyBleHRyYWN0SWRUb2tlbihlbmNvZGVkSWRUb2tlbjogc3RyaW5nKTogYW55IHtcclxuICAgIC8vIGlkIHRva2VuIHdpbGwgYmUgZGVjb2RlZCB0byBnZXQgdGhlIHVzZXJuYW1lXHJcbiAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSB0aGlzLmRlY29kZUp3dChlbmNvZGVkSWRUb2tlbik7XHJcbiAgICBpZiAoIWRlY29kZWRUb2tlbikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGJhc2U2NElkVG9rZW4gPSBkZWNvZGVkVG9rZW4uSldTUGF5bG9hZDtcclxuICAgICAgY29uc3QgYmFzZTY0RGVjb2RlZCA9IHRoaXMuYmFzZTY0RGVjb2RlU3RyaW5nVXJsU2FmZShiYXNlNjRJZFRva2VuKTtcclxuICAgICAgaWYgKCFiYXNlNjREZWNvZGVkKSB7XHJcbiAgICAgICAgLy90aGlzLl9yZXF1ZXN0Q29udGV4dC5sb2dnZXIuaW5mbyhcIlRoZSByZXR1cm5lZCBpZF90b2tlbiBjb3VsZCBub3QgYmUgYmFzZTY0IHVybCBzYWZlIGRlY29kZWQuXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEVDTUEgc2NyaXB0IGhhcyBKU09OIGJ1aWx0LWluIHN1cHBvcnRcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoYmFzZTY0RGVjb2RlZCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgLy90aGlzLl9yZXF1ZXN0Q29udGV4dC5sb2dnZXIuZXJyb3IoXCJUaGUgcmV0dXJuZWQgaWRfdG9rZW4gY291bGQgbm90IGJlIGRlY29kZWRcIiArIGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIEVuY29kZSBhbmQgRGVjb2RlXHJcblxyXG4gIC8qKlxyXG4gICAqIGVuY29kaW5nIHN0cmluZyB0byBiYXNlNjQgLSBwbGF0Zm9ybSBzcGVjaWZpYyBjaGVja1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGlucHV0XHJcbiAgICovXHJcbiAgc3RhdGljIGJhc2U2NEVuY29kZVN0cmluZ1VybFNhZmUoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyBodG1sNSBzaG91bGQgc3VwcG9ydCBhdG9iIGZ1bmN0aW9uIGZvciBkZWNvZGluZ1xyXG4gICAgcmV0dXJuIEJhc2U2NC5lbmNvZGUoaW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZGVjb2RpbmcgYmFzZTY0IHRva2VuIC0gcGxhdGZvcm0gc3BlY2lmaWMgY2hlY2tcclxuICAgKlxyXG4gICAqIEBwYXJhbSBiYXNlNjRJZFRva2VuXHJcbiAgICovXHJcbiAgc3RhdGljIGJhc2U2NERlY29kZVN0cmluZ1VybFNhZmUoYmFzZTY0SWRUb2tlbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIGh0bWw1IHNob3VsZCBzdXBwb3J0IGF0b2IgZnVuY3Rpb24gZm9yIGRlY29kaW5nXHJcbiAgICBiYXNlNjRJZFRva2VuID0gYmFzZTY0SWRUb2tlbi5yZXBsYWNlKC8tL2csIFwiK1wiKS5yZXBsYWNlKC9fL2csIFwiL1wiKTtcclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlVVJJQ29tcG9uZW50KEJhc2U2NC5kZWNvZGUoYmFzZTY0SWRUb2tlbikpKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBiYXNlNjQgZW5jb2RlIGEgc3RyaW5nXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaW5wdXRcclxuICAgKi9cclxuICAvLyBUT0RPOiBSZW5hbWUgdG8gc3BlY2lmeSB0eXBlIG9mIGVuY29kaW5nXHJcbiAgc3RhdGljIGVuY29kZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGtleVN0cjogc3RyaW5nID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiO1xyXG4gICAgbGV0IG91dHB1dCA9IFwiXCI7XHJcbiAgICBsZXQgY2hyMTogbnVtYmVyLCBjaHIyOiBudW1iZXIsIGNocjM6IG51bWJlciwgZW5jMTogbnVtYmVyLCBlbmMyOiBudW1iZXIsIGVuYzM6IG51bWJlciwgZW5jNDogbnVtYmVyO1xyXG4gICAgdmFyIGkgPSAwO1xyXG5cclxuICAgIGlucHV0ID0gdGhpcy51dGY4RW5jb2RlKGlucHV0KTtcclxuXHJcbiAgICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xyXG4gICAgICBjaHIxID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xyXG4gICAgICBjaHIyID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xyXG4gICAgICBjaHIzID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xyXG5cclxuICAgICAgZW5jMSA9IGNocjEgPj4gMjtcclxuICAgICAgZW5jMiA9ICgoY2hyMSAmIDMpIDw8IDQpIHwgKGNocjIgPj4gNCk7XHJcbiAgICAgIGVuYzMgPSAoKGNocjIgJiAxNSkgPDwgMikgfCAoY2hyMyA+PiA2KTtcclxuICAgICAgZW5jNCA9IGNocjMgJiA2MztcclxuXHJcbiAgICAgIGlmIChpc05hTihjaHIyKSkge1xyXG4gICAgICAgIGVuYzMgPSBlbmM0ID0gNjQ7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNOYU4oY2hyMykpIHtcclxuICAgICAgICBlbmM0ID0gNjQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG91dHB1dCA9IG91dHB1dCArIGtleVN0ci5jaGFyQXQoZW5jMSkgKyBrZXlTdHIuY2hhckF0KGVuYzIpICsga2V5U3RyLmNoYXJBdChlbmMzKSArIGtleVN0ci5jaGFyQXQoZW5jNCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG91dHB1dC5yZXBsYWNlKC9cXCsvZywgXCItXCIpLnJlcGxhY2UoL1xcLy9nLCBcIl9cIikucmVwbGFjZSgvPSskLywgXCJcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB1dGY4IGVuY29kZSBhIHN0cmluZ1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGlucHV0XHJcbiAgICovXHJcbiAgc3RhdGljIHV0ZjhFbmNvZGUoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1xcclxcbi9nLCBcIlxcblwiKTtcclxuICAgIHZhciB1dGZ0ZXh0ID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IGlucHV0Lmxlbmd0aDsgbisrKSB7XHJcbiAgICAgIHZhciBjID0gaW5wdXQuY2hhckNvZGVBdChuKTtcclxuXHJcbiAgICAgIGlmIChjIDwgMTI4KSB7XHJcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKChjID4gMTI3KSAmJiAoYyA8IDIwNDgpKSB7XHJcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDYpIHwgMTkyKTtcclxuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiAxMikgfCAyMjQpO1xyXG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgPj4gNikgJiA2MykgfCAxMjgpO1xyXG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXRmdGV4dDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGRlY29kZSBhIGJhc2U2NCB0b2tlbiBzdHJpbmdcclxuICAgKlxyXG4gICAqIEBwYXJhbSBiYXNlNjRJZFRva2VuXHJcbiAgICovXHJcbiAgLy8gVE9ETzogUmVuYW1lIHRvIHNwZWNpZnkgdHlwZSBvZiBlbmNvZGluZ1xyXG4gIHN0YXRpYyBkZWNvZGUoYmFzZTY0SWRUb2tlbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHZhciBjb2RlcyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtcclxuICAgIGJhc2U2NElkVG9rZW4gPSBTdHJpbmcoYmFzZTY0SWRUb2tlbikucmVwbGFjZSgvPSskLywgXCJcIik7XHJcbiAgICB2YXIgbGVuZ3RoID0gYmFzZTY0SWRUb2tlbi5sZW5ndGg7XHJcbiAgICBpZiAobGVuZ3RoICUgNCA9PT0gMSkge1xyXG4gICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlVG9rZW5FbmNvZGluZ0Vycm9yKGJhc2U2NElkVG9rZW4pO1xyXG4gICAgfVxyXG4gICAgbGV0IGgxOiBudW1iZXIsIGgyOiBudW1iZXIsIGgzOiBudW1iZXIsIGg0OiBudW1iZXIsIGJpdHM6IG51bWJlciwgYzE6IG51bWJlciwgYzI6IG51bWJlciwgYzM6IG51bWJlciwgZGVjb2RlZCA9IFwiXCI7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgIC8vRXZlcnkgNCBiYXNlNjQgZW5jb2RlZCBjaGFyYWN0ZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gMyBieXRlIHN0cmluZywgd2hpY2ggaXMgMjQgYml0c1xyXG4gICAgICAvLyB0aGVuIDYgYml0cyBwZXIgYmFzZTY0IGVuY29kZWQgY2hhcmFjdGVyXHJcbiAgICAgIGgxID0gY29kZXMuaW5kZXhPZihiYXNlNjRJZFRva2VuLmNoYXJBdChpKSk7XHJcbiAgICAgIGgyID0gY29kZXMuaW5kZXhPZihiYXNlNjRJZFRva2VuLmNoYXJBdChpICsgMSkpO1xyXG4gICAgICBoMyA9IGNvZGVzLmluZGV4T2YoYmFzZTY0SWRUb2tlbi5jaGFyQXQoaSArIDIpKTtcclxuICAgICAgaDQgPSBjb2Rlcy5pbmRleE9mKGJhc2U2NElkVG9rZW4uY2hhckF0KGkgKyAzKSk7XHJcbiAgICAgIC8vIEZvciBwYWRkaW5nLCBpZiBsYXN0IHR3byBhcmUgXCI9XCJcclxuICAgICAgaWYgKGkgKyAyID09PSBsZW5ndGggLSAxKSB7XHJcbiAgICAgICAgYml0cyA9IGgxIDw8IDE4IHwgaDIgPDwgMTIgfCBoMyA8PCA2O1xyXG4gICAgICAgIGMxID0gYml0cyA+PiAxNiAmIDI1NTtcclxuICAgICAgICBjMiA9IGJpdHMgPj4gOCAmIDI1NTtcclxuICAgICAgICBkZWNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEsIGMyKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICAvLyBpZiBsYXN0IG9uZSBpcyBcIj1cIlxyXG4gICAgICBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIGJpdHMgPSBoMSA8PCAxOCB8IGgyIDw8IDEyO1xyXG4gICAgICAgIGMxID0gYml0cyA+PiAxNiAmIDI1NTtcclxuICAgICAgICBkZWNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGJpdHMgPSBoMSA8PCAxOCB8IGgyIDw8IDEyIHwgaDMgPDwgNiB8IGg0O1xyXG4gICAgICAvLyB0aGVuIGNvbnZlcnQgdG8gMyBieXRlIGNoYXJzXHJcbiAgICAgIGMxID0gYml0cyA+PiAxNiAmIDI1NTtcclxuICAgICAgYzIgPSBiaXRzID4+IDggJiAyNTU7XHJcbiAgICAgIGMzID0gYml0cyAmIDI1NTtcclxuICAgICAgZGVjb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxLCBjMiwgYzMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlY29kZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBkZXNlcmlhbGl6ZSBhIHN0cmluZ1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHF1ZXJ5XHJcbiAgICovXHJcbiAgc3RhdGljIGRlc2VyaWFsaXplKHF1ZXJ5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgbGV0IG1hdGNoOiBBcnJheTxzdHJpbmc+OyAvLyBSZWdleCBmb3IgcmVwbGFjaW5nIGFkZGl0aW9uIHN5bWJvbCB3aXRoIGEgc3BhY2VcclxuICAgIGNvbnN0IHBsID0gL1xcKy9nO1xyXG4gICAgY29uc3Qgc2VhcmNoID0gLyhbXiY9XSspPShbXiZdKikvZztcclxuICAgIGNvbnN0IGRlY29kZSA9IChzOiBzdHJpbmcpID0+IGRlY29kZVVSSUNvbXBvbmVudChzLnJlcGxhY2UocGwsIFwiIFwiKSk7XHJcbiAgICBjb25zdCBvYmo6IHt9ID0ge307XHJcbiAgICBtYXRjaCA9IHNlYXJjaC5leGVjKHF1ZXJ5KTtcclxuICAgIHdoaWxlIChtYXRjaCkge1xyXG4gICAgICBvYmpbZGVjb2RlKG1hdGNoWzFdKV0gPSBkZWNvZGUobWF0Y2hbMl0pO1xyXG4gICAgICBtYXRjaCA9IHNlYXJjaC5leGVjKHF1ZXJ5KTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFNjb3BlcyAoZXh0cmFjdCB0byBTY29wZXMudHMpXHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHRoZXJlIGFyZSBkdXAgc2NvcGVzIGluIGEgZ2l2ZW4gcmVxdWVzdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNhY2hlZFNjb3Blc1xyXG4gICAqIEBwYXJhbSBzY29wZXNcclxuICAgKi9cclxuICAvLyBUT0RPOiBSZW5hbWUgdGhpcywgaW50ZXJzZWN0aW5nIHNjb3BlcyBpc24ndCBhIGdyZWF0IG5hbWUgZm9yIGR1cGxpY2F0ZSBjaGVja2VyXHJcbiAgc3RhdGljIGlzSW50ZXJzZWN0aW5nU2NvcGVzKGNhY2hlZFNjb3BlczogQXJyYXk8c3RyaW5nPiwgc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XHJcbiAgICBjYWNoZWRTY29wZXMgPSB0aGlzLmNvbnZlcnRUb0xvd2VyQ2FzZShjYWNoZWRTY29wZXMpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY29wZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoY2FjaGVkU2NvcGVzLmluZGV4T2Yoc2NvcGVzW2ldLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBnaXZlbiBzY29wZSBpcyBwcmVzZW50IGluIHRoZSByZXF1ZXN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0gY2FjaGVkU2NvcGVzXHJcbiAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAqL1xyXG4gIHN0YXRpYyBjb250YWluc1Njb3BlKGNhY2hlZFNjb3BlczogQXJyYXk8c3RyaW5nPiwgc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XHJcbiAgICBjYWNoZWRTY29wZXMgPSB0aGlzLmNvbnZlcnRUb0xvd2VyQ2FzZShjYWNoZWRTY29wZXMpO1xyXG4gICAgcmV0dXJuIHNjb3Blcy5ldmVyeSgodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4gY2FjaGVkU2NvcGVzLmluZGV4T2YodmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSA+PSAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHRvTG93ZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSBzY29wZXNcclxuICAgKi9cclxuICAvLyBUT0RPOiBSZW5hbWUgdGhpcywgdG9vIGdlbmVyaWMgbmFtZSBmb3IgYSBmdW5jdGlvbiB0aGF0IG9ubHkgZGVhbHMgd2l0aCBzY29wZXNcclxuICBzdGF0aWMgY29udmVydFRvTG93ZXJDYXNlKHNjb3BlczogQXJyYXk8c3RyaW5nPik6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHNjb3Blcy5tYXAoc2NvcGUgPT4gc2NvcGUudG9Mb3dlckNhc2UoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgb25lIGVsZW1lbnQgZnJvbSBhIHNjb3BlIGFycmF5XHJcbiAgICpcclxuICAgKiBAcGFyYW0gc2NvcGVzXHJcbiAgICogQHBhcmFtIHNjb3BlXHJcbiAgICovXHJcbiAgLy8gVE9ETzogUmVuYW1lIHRoaXMsIHRvbyBnZW5lcmljIG5hbWUgZm9yIGEgZnVuY3Rpb24gdGhhdCBvbmx5IGRlYWxzIHdpdGggc2NvcGVzXHJcbiAgc3RhdGljIHJlbW92ZUVsZW1lbnQoc2NvcGVzOiBBcnJheTxzdHJpbmc+LCBzY29wZTogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gc2NvcGVzLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gc2NvcGUpO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBVUkwgUHJvY2Vzc2luZyAoRXh0cmFjdCB0byBVcmxQcm9jZXNzaW5nLnRzPylcclxuXHJcbiAgc3RhdGljIGdldERlZmF1bHRSZWRpcmVjdFVyaSgpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdLnNwbGl0KFwiI1wiKVswXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpdmVuIGEgdXJsIGxpa2UgaHR0cHM6Ly9hOmIvY29tbW9uL2Q/ZT1mI2csIGFuZCBhIHRlbmFudElkLCByZXR1cm5zIGh0dHBzOi8vYTpiL3RlbmFudElkL2RcclxuICAgKiBAcGFyYW0gaHJlZiBUaGUgdXJsXHJcbiAgICogQHBhcmFtIHRlbmFudElkIFRoZSB0ZW5hbnQgaWQgdG8gcmVwbGFjZVxyXG4gICAqL1xyXG4gIHN0YXRpYyByZXBsYWNlVGVuYW50UGF0aCh1cmw6IHN0cmluZywgdGVuYW50SWQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgIHVybCA9IHVybC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICB2YXIgdXJsT2JqZWN0ID0gdGhpcy5HZXRVcmxDb21wb25lbnRzKHVybCk7XHJcbiAgICAgIHZhciBwYXRoQXJyYXkgPSB1cmxPYmplY3QuUGF0aFNlZ21lbnRzO1xyXG4gICAgICBpZiAodGVuYW50SWQgJiYgKHBhdGhBcnJheS5sZW5ndGggIT09IDAgJiYgKHBhdGhBcnJheVswXSA9PT0gQ29uc3RhbnRzLmNvbW1vbiB8fCBwYXRoQXJyYXlbMF0gPT09IFNTT1R5cGVzLk9SR0FOSVpBVElPTlMpKSkge1xyXG4gICAgICAgIHBhdGhBcnJheVswXSA9IHRlbmFudElkO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdEF1dGhvcml0eVVyaUZyb21PYmplY3QodXJsT2JqZWN0LCBwYXRoQXJyYXkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbnN0cnVjdEF1dGhvcml0eVVyaUZyb21PYmplY3QodXJsT2JqZWN0OiBJVXJpLCBwYXRoQXJyYXk6IHN0cmluZ1tdKSB7XHJcbiAgICByZXR1cm4gdGhpcy5DYW5vbmljYWxpemVVcmkodXJsT2JqZWN0LlByb3RvY29sICsgXCIvL1wiICsgdXJsT2JqZWN0Lkhvc3ROYW1lQW5kUG9ydCArIFwiL1wiICsgcGF0aEFycmF5LmpvaW4oXCIvXCIpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcnNlcyBvdXQgdGhlIGNvbXBvbmVudHMgZnJvbSBhIHVybCBzdHJpbmcuXHJcbiAgICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdGhlIHZhcmlvdXMgY29tcG9uZW50cy4gUGxlYXNlIGNhY2hlIHRoaXMgdmFsdWUgaW5zdGVkIG9mIGNhbGxpbmcgdGhpcyBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZSB1cmwuXHJcbiAgICovXHJcbiAgc3RhdGljIEdldFVybENvbXBvbmVudHModXJsOiBzdHJpbmcpOiBJVXJpIHtcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgIHRocm93IFwiVXJsIHJlcXVpcmVkXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vY3VydGlzei8xMTEzOWIyY2ZjYWVmNGEyNjFlMFxyXG4gICAgdmFyIHJlZ0V4ID0gUmVnRXhwKFwiXigoW146Lz8jXSspOik/KC8vKFteLz8jXSopKT8oW14/I10qKShcXFxcPyhbXiNdKikpPygjKC4qKSk/XCIpO1xyXG5cclxuICAgIHZhciBtYXRjaCA9IHVybC5tYXRjaChyZWdFeCk7XHJcblxyXG4gICAgaWYgKCFtYXRjaCB8fCBtYXRjaC5sZW5ndGggPCA2KSB7XHJcbiAgICAgIHRocm93IFwiVmFsaWQgdXJsIHJlcXVpcmVkXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHVybENvbXBvbmVudHMgPSA8SVVyaT57XHJcbiAgICAgIFByb3RvY29sOiBtYXRjaFsxXSxcclxuICAgICAgSG9zdE5hbWVBbmRQb3J0OiBtYXRjaFs0XSxcclxuICAgICAgQWJzb2x1dGVQYXRoOiBtYXRjaFs1XVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgcGF0aFNlZ21lbnRzID0gdXJsQ29tcG9uZW50cy5BYnNvbHV0ZVBhdGguc3BsaXQoXCIvXCIpO1xyXG4gICAgcGF0aFNlZ21lbnRzID0gcGF0aFNlZ21lbnRzLmZpbHRlcigodmFsKSA9PiB2YWwgJiYgdmFsLmxlbmd0aCA+IDApOyAvLyByZW1vdmUgZW1wdHkgZWxlbWVudHNcclxuICAgIHVybENvbXBvbmVudHMuUGF0aFNlZ21lbnRzID0gcGF0aFNlZ21lbnRzO1xyXG4gICAgcmV0dXJuIHVybENvbXBvbmVudHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHaXZlbiBhIHVybCBvciBwYXRoLCBhcHBlbmQgYSB0cmFpbGluZyBzbGFzaCBpZiBvbmUgZG9lc250IGV4aXN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXJsXHJcbiAgICovXHJcbiAgc3RhdGljIENhbm9uaWNhbGl6ZVVyaSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAodXJsKSB7XHJcbiAgICAgIHVybCA9IHVybC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1cmwgJiYgIVV0aWxzLmVuZHNXaXRoKHVybCwgXCIvXCIpKSB7XHJcbiAgICAgIHVybCArPSBcIi9cIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgdXJsIGVuZHMgd2l0aCB0aGUgc3VmZml4XHJcbiAgICogUmVxdWlyZWQgYmVjYXVzZSB3ZSBhcmUgY29tcGlsaW5nIGZvciBlczUgaW5zdGVhZCBvZiBlczZcclxuICAgKiBAcGFyYW0gdXJsXHJcbiAgICogQHBhcmFtIHN0clxyXG4gICAqL1xyXG4gIC8vIFRPRE86IFJlbmFtZSB0aGlzLCBub3QgY2xlYXIgd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBkb1xyXG4gIHN0YXRpYyBlbmRzV2l0aCh1cmw6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghdXJsIHx8ICFzdWZmaXgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1cmwuaW5kZXhPZihzdWZmaXgsIHVybC5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKSAhPT0gLTE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVdGlscyBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGxvZ2luX2hpbnQgYW5kIGRvbWFpbl9oaW50IGZyb20gdGhlIGkvcCBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xyXG4gICAqIEBwYXJhbSB1cmxcclxuICAgKiBAcGFyYW0gbmFtZVxyXG4gICAqL1xyXG4gIHN0YXRpYyB1cmxSZW1vdmVRdWVyeVN0cmluZ1BhcmFtZXRlcih1cmw6IHN0cmluZywgbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmlzRW1wdHkodXJsKSkge1xyXG4gICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCIoXFxcXCZcIiArIG5hbWUgKyBcIj0pW15cXCZdK1wiKTtcclxuICAgIHVybCA9IHVybC5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcclxuICAgIC8vIG5hbWU9dmFsdWUmXHJcbiAgICByZWdleCA9IG5ldyBSZWdFeHAoXCIoXCIgKyBuYW1lICsgXCI9KVteXFwmXSsmXCIpO1xyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG4gICAgLy8gbmFtZT12YWx1ZVxyXG4gICAgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFwiICsgbmFtZSArIFwiPSlbXlxcJl0rXCIpO1xyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gRXh0cmFRdWVyeVBhcmFtZXRlcnMgUHJvY2Vzc2luZyAoRXh0cmFjdD8pXHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdHMgZXh0cmFRdWVyeVBhcmFtZXRlcnMgdG8gYmUgc2VudCB0byB0aGUgc2VydmVyIGZvciB0aGUgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzIHNldCBieSB0aGUgZGV2ZWxvcGVyXHJcbiAgICogaW4gYW55IGxvZ2luKCkgb3IgYWNxdWlyZVRva2VuKCkgY2FsbHNcclxuICAgKiBAcGFyYW0gaWRUb2tlbk9iamVjdFxyXG4gICAqIEBwYXJhbSBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xyXG4gICAqIEBwYXJhbSBzaWRcclxuICAgKiBAcGFyYW0gbG9naW5IaW50XHJcbiAgICovXHJcbiAgLy9UT0RPOiBjaGVjayBob3cgdGhpcyBiZWhhdmVzIHdoZW4gZG9tYWluX2hpbnQgb25seSBpcyBzZW50IGluIGV4dHJhcGFyYW1ldGVycyBhbmQgaWRUb2tlbiBoYXMgbm8gdXBuLlxyXG4gIHN0YXRpYyBjb25zdHJ1Y3RVbmlmaWVkQ2FjaGVRdWVyeVBhcmFtZXRlcihyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIGlkVG9rZW5PYmplY3Q6IGFueSk6IFFQRGljdCB7XHJcblxyXG4gICAgLy8gcHJlZmVyZW5jZSBvcmRlcjogYWNjb3VudCA+IHNpZCA+IGxvZ2luX2hpbnRcclxuICAgIGxldCBzc29UeXBlO1xyXG4gICAgbGV0IHNzb0RhdGE7XHJcbiAgICBsZXQgc2VydmVyUmVxUGFyYW06IFFQRGljdCA9IHt9O1xyXG4gICAgLy8gaWYgYWNjb3VudCBpbmZvIGlzIHBhc3NlZCwgYWNjb3VudC5zaWQgPiBhY2NvdW50LmxvZ2luX2hpbnRcclxuICAgIGlmIChyZXF1ZXN0KSB7XHJcbiAgICAgIGlmIChyZXF1ZXN0LmFjY291bnQpIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gcmVxdWVzdC5hY2NvdW50O1xyXG4gICAgICAgIGlmIChhY2NvdW50LnNpZCkge1xyXG4gICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLlNJRDtcclxuICAgICAgICAgIHNzb0RhdGEgPSBhY2NvdW50LnNpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWNjb3VudC51c2VyTmFtZSkge1xyXG4gICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLkxPR0lOX0hJTlQ7XHJcbiAgICAgICAgICBzc29EYXRhID0gYWNjb3VudC51c2VyTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gc2lkIGZyb20gcmVxdWVzdFxyXG4gICAgICBlbHNlIGlmIChyZXF1ZXN0LnNpZCkge1xyXG4gICAgICAgIHNzb1R5cGUgPSBTU09UeXBlcy5TSUQ7XHJcbiAgICAgICAgc3NvRGF0YSA9IHJlcXVlc3Quc2lkO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGxvZ2luSGludCBmcm9tIHJlcXVlc3RcclxuICAgICAgZWxzZSBpZiAocmVxdWVzdC5sb2dpbkhpbnQpIHtcclxuICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuTE9HSU5fSElOVDtcclxuICAgICAgICBzc29EYXRhID0gcmVxdWVzdC5sb2dpbkhpbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGFkYWxJZFRva2VuIHJldHJpZXZlZCBmcm9tIGNhY2hlXHJcbiAgICBlbHNlIGlmIChpZFRva2VuT2JqZWN0KSB7XHJcbiAgICAgIGlmIChpZFRva2VuT2JqZWN0Lmhhc093blByb3BlcnR5KENvbnN0YW50cy51cG4pKSB7XHJcbiAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLklEX1RPS0VOO1xyXG4gICAgICAgIHNzb0RhdGEgPSBpZFRva2VuT2JqZWN0LnVwbjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUztcclxuICAgICAgICBzc29EYXRhID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlcnZlclJlcVBhcmFtID0gdGhpcy5hZGRTU09QYXJhbWV0ZXIoc3NvVHlwZSwgc3NvRGF0YSk7XHJcblxyXG4gICAgLy8gYWRkIHRoZSBIb21lQWNjb3VudElkZW50aWZpZXIgaW5mby8gZG9tYWluX2hpbnRcclxuICAgIGlmIChyZXF1ZXN0ICYmIHJlcXVlc3QuYWNjb3VudCAmJiByZXF1ZXN0LmFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyKSB7XHJcbiAgICAgICAgc2VydmVyUmVxUGFyYW0gPSB0aGlzLmFkZFNTT1BhcmFtZXRlcihTU09UeXBlcy5IT01FQUNDT1VOVF9JRCwgcmVxdWVzdC5hY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllciwgc2VydmVyUmVxUGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZXJ2ZXJSZXFQYXJhbTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBBZGQgU0lEIHRvIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICogQHBhcmFtIHNpZFxyXG4gICAqL1xyXG4gIHN0YXRpYyBhZGRTU09QYXJhbWV0ZXIoc3NvVHlwZTogc3RyaW5nLCBzc29EYXRhOiBzdHJpbmcsIHNzb1BhcmFtPzogUVBEaWN0KTogUVBEaWN0IHtcclxuICAgIGlmICghc3NvUGFyYW0pIHtcclxuICAgICAgc3NvUGFyYW0gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXNzb0RhdGEpIHtcclxuICAgICAgICByZXR1cm4gc3NvUGFyYW07XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChzc29UeXBlKSB7XHJcbiAgICAgIGNhc2UgU1NPVHlwZXMuU0lEOiB7XHJcbiAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuU0lEXSA9IHNzb0RhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTU09UeXBlcy5JRF9UT0tFTjoge1xyXG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkxPR0lOX0hJTlRdID0gc3NvRGF0YTtcclxuICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5PUkdBTklaQVRJT05TO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU1NPVHlwZXMuTE9HSU5fSElOVDoge1xyXG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkxPR0lOX0hJTlRdID0gc3NvRGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNTT1R5cGVzLk9SR0FOSVpBVElPTlM6IHtcclxuICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5PUkdBTklaQVRJT05TO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU1NPVHlwZXMuQ09OU1VNRVJTOiB7XHJcbiAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX0hJTlRdID0gU1NPVHlwZXMuQ09OU1VNRVJTO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU1NPVHlwZXMuSE9NRUFDQ09VTlRfSUQ6IHtcclxuICAgICAgICBsZXQgaG9tZUFjY291bnRJZCA9IHNzb0RhdGEuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIGNvbnN0IHVpZCA9IFV0aWxzLmJhc2U2NERlY29kZVN0cmluZ1VybFNhZmUoaG9tZUFjY291bnRJZFswXSk7XHJcbiAgICAgICAgY29uc3QgdXRpZCA9IFV0aWxzLmJhc2U2NERlY29kZVN0cmluZ1VybFNhZmUoaG9tZUFjY291bnRJZFsxXSk7XHJcblxyXG4gICAgICAgIC8vIFRPRE86IGRvbWFpbl9yZXEgYW5kIGxvZ2luX3JlcSBhcmUgbm90IG5lZWRlZCBhY2NvcmRpbmcgdG8gZVNUUyB0ZWFtXHJcbiAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fUkVRXSA9IHVpZDtcclxuICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fUkVRXSA9IHV0aWQ7XHJcblxyXG4gICAgICAgIGlmICh1dGlkID09PSBDb25zdGFudHMuY29uc3VtZXJzVXRpZCkge1xyXG4gICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5DT05TVU1FUlM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5PUkdBTklaQVRJT05TO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNTT1R5cGVzLkxPR0lOX1JFUToge1xyXG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkxPR0lOX1JFUV0gPSBzc29EYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU1NPVHlwZXMuRE9NQUlOX1JFUToge1xyXG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9SRVFdID0gc3NvRGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzc29QYXJhbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFV0aWxpdHkgdG8gZ2VuZXJhdGUgYSBRdWVyeVBhcmFtZXRlclN0cmluZyBmcm9tIGEgS2V5LVZhbHVlIG1hcHBpbmcgb2YgZXh0cmFRdWVyeVBhcmFtZXRlcnMgcGFzc2VkXHJcbiAgICogQHBhcmFtIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICovXHJcbiAgc3RhdGljIGdlbmVyYXRlUXVlcnlQYXJhbWV0ZXJzU3RyaW5nKHF1ZXJ5UGFyYW1ldGVyczogUVBEaWN0KTogc3RyaW5nIHtcclxuICAgIGxldCBwYXJhbXNTdHJpbmc6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgaWYgKHF1ZXJ5UGFyYW1ldGVycykge1xyXG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtZXRlcnMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhcmFtc1N0cmluZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICBwYXJhbXNTdHJpbmcgPSBgJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5UGFyYW1ldGVyc1trZXldKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHBhcmFtc1N0cmluZyArPSBgJiR7a2V5fT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeVBhcmFtZXRlcnNba2V5XSl9YDtcclxuICAgICAgICB9XHJcbiAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhcmFtc1N0cmluZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIHRvIHNlZSBpZiB0aGVyZSBhcmUgU1NPIHBhcmFtcyBzZXQgaW4gdGhlIFJlcXVlc3RcclxuICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAqL1xyXG4gIHN0YXRpYyBpc1NTT1BhcmFtKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycykge1xyXG4gICAgICByZXR1cm4gcmVxdWVzdCAmJiAocmVxdWVzdC5hY2NvdW50IHx8IHJlcXVlc3Quc2lkIHx8IHJlcXVlc3QubG9naW5IaW50KTtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gUmVzcG9uc2UgSGVscGVyc1xyXG5cclxuICBzdGF0aWMgc2V0UmVzcG9uc2VJZFRva2VuKG9yaWdpbmFsUmVzcG9uc2U6IEF1dGhSZXNwb25zZSwgaWRUb2tlbjogSWRUb2tlbikgOiBBdXRoUmVzcG9uc2Uge1xyXG4gICAgdmFyIHJlc3BvbnNlID0geyAuLi5vcmlnaW5hbFJlc3BvbnNlIH07XHJcbiAgICByZXNwb25zZS5pZFRva2VuID0gaWRUb2tlbjtcclxuICAgIGlmIChyZXNwb25zZS5pZFRva2VuLm9iamVjdElkKSB7XHJcbiAgICAgIHJlc3BvbnNlLnVuaXF1ZUlkID0gcmVzcG9uc2UuaWRUb2tlbi5vYmplY3RJZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3BvbnNlLnVuaXF1ZUlkID0gcmVzcG9uc2UuaWRUb2tlbi5zdWJqZWN0O1xyXG4gICAgfVxyXG4gICAgcmVzcG9uc2UudGVuYW50SWQgPSByZXNwb25zZS5pZFRva2VuLnRlbmFudElkO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2FjaGVMb2NhdGlvbiB9IGZyb20gXCIuL0NvbmZpZ3VyYXRpb25cIjtcclxuXHJcbi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcbiAgc3RhdGljIGdldCBlcnJvckRlc2NyaXB0aW9uKCk6IHN0cmluZyB7IHJldHVybiBcImVycm9yX2Rlc2NyaXB0aW9uXCI7IH1cclxuICBzdGF0aWMgZ2V0IGVycm9yKCk6IHN0cmluZyB7IHJldHVybiBcImVycm9yXCI7IH1cclxuXHJcbiAgc3RhdGljIGdldCBzY29wZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJzY29wZVwiOyB9XHJcbiAgc3RhdGljIGdldCBjbGllbnRJbmZvKCk6IHN0cmluZyB7IHJldHVybiBcImNsaWVudF9pbmZvXCI7IH1cclxuICBzdGF0aWMgZ2V0IGNsaWVudElkKCk6IHN0cmluZyB7IHJldHVybiBcImNsaWVudElkXCI7IH1cclxuXHJcbiAgc3RhdGljIGdldCBpZFRva2VuKCk6IHN0cmluZyB7IHJldHVybiBcImlkX3Rva2VuXCI7IH1cclxuICBzdGF0aWMgZ2V0IGFkYWxJZFRva2VuKCk6IHN0cmluZyB7IHJldHVybiBcImFkYWwuaWR0b2tlblwiOyB9XHJcbiAgc3RhdGljIGdldCBhY2Nlc3NUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJhY2Nlc3NfdG9rZW5cIjsgfVxyXG4gIHN0YXRpYyBnZXQgZXhwaXJlc0luKCk6IHN0cmluZyB7IHJldHVybiBcImV4cGlyZXNfaW5cIjsgfVxyXG4gIHN0YXRpYyBnZXQgc2Vzc2lvblN0YXRlKCk6IHN0cmluZyB7IHJldHVybiBcInNlc3Npb25fc3RhdGVcIjsgfVxyXG4gIHN0YXRpYyBnZXQgY2xhaW1zKCk6IHN0cmluZyB7IHJldHVybiBcImNsYWltc1wiOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgbXNhbENsaWVudEluZm8oKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5jbGllbnQuaW5mb1wiOyB9XHJcbiAgc3RhdGljIGdldCBtc2FsRXJyb3IoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5lcnJvclwiOyB9XHJcbiAgc3RhdGljIGdldCBtc2FsRXJyb3JEZXNjcmlwdGlvbigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmVycm9yLmRlc2NyaXB0aW9uXCI7IH1cclxuXHJcbiAgc3RhdGljIGdldCBtc2FsU2Vzc2lvblN0YXRlKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuc2Vzc2lvbi5zdGF0ZVwiOyB9XHJcbiAgc3RhdGljIGdldCB0b2tlbktleXMoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC50b2tlbi5rZXlzXCI7IH1cclxuICBzdGF0aWMgZ2V0IGFjY2Vzc1Rva2VuS2V5KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuYWNjZXNzLnRva2VuLmtleVwiOyB9XHJcbiAgc3RhdGljIGdldCBleHBpcmF0aW9uS2V5KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuZXhwaXJhdGlvbi5rZXlcIjsgfVxyXG4gIHN0YXRpYyBnZXQgc3RhdGVMb2dpbigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnN0YXRlLmxvZ2luXCI7IH1cclxuICBzdGF0aWMgZ2V0IHN0YXRlQWNxdWlyZVRva2VuKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuc3RhdGUuYWNxdWlyZVRva2VuXCI7IH1cclxuICBzdGF0aWMgZ2V0IHN0YXRlUmVuZXcoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5zdGF0ZS5yZW5ld1wiOyB9XHJcbiAgc3RhdGljIGdldCBub25jZUlkVG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5ub25jZS5pZHRva2VuXCI7IH1cclxuICBzdGF0aWMgZ2V0IHVzZXJOYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwudXNlcm5hbWVcIjsgfVxyXG4gIHN0YXRpYyBnZXQgaWRUb2tlbktleSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmlkdG9rZW5cIjsgfVxyXG4gIHN0YXRpYyBnZXQgbG9naW5SZXF1ZXN0KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwubG9naW4ucmVxdWVzdFwiOyB9XHJcbiAgc3RhdGljIGdldCBsb2dpbkVycm9yKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwubG9naW4uZXJyb3JcIjsgfVxyXG4gIHN0YXRpYyBnZXQgcmVuZXdTdGF0dXMoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC50b2tlbi5yZW5ldy5zdGF0dXNcIjsgfVxyXG4gIHN0YXRpYyBnZXQgdXJsSGFzaCgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnVybEhhc2hcIjsgfVxyXG4gIHN0YXRpYyBnZXQgYW5ndWxhckxvZ2luUmVxdWVzdCgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmFuZ3VsYXIubG9naW4ucmVxdWVzdFwiOyB9XHJcbiAgc3RhdGljIGdldCBtc2FsKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWxcIjsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IG5vX2FjY291bnQoKTogc3RyaW5nIHsgcmV0dXJuIFwiTk9fQUNDT1VOVFwiOyB9XHJcbiAgc3RhdGljIGdldCBjb25zdW1lcnNVdGlkKCk6IHN0cmluZyB7IHJldHVybiBcIjkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZFwiOyB9XHJcbiAgc3RhdGljIGdldCB1cG4oKTogc3RyaW5nIHsgcmV0dXJuIFwidXBuXCI7IH1cclxuXHJcbiAgc3RhdGljIGdldCBwcm9tcHRfc2VsZWN0X2FjY291bnQoKTogc3RyaW5nIHsgcmV0dXJuIFwiJnByb21wdD1zZWxlY3RfYWNjb3VudFwiOyB9XHJcbiAgc3RhdGljIGdldCBwcm9tcHRfbm9uZSgpOiBzdHJpbmcgeyByZXR1cm4gXCImcHJvbXB0PW5vbmVcIjsgfVxyXG4gIHN0YXRpYyBnZXQgcHJvbXB0KCk6IHN0cmluZyB7IHJldHVybiBcInByb21wdFwiOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgcmVzcG9uc2VfbW9kZV9mcmFnbWVudCgpOiBzdHJpbmcgeyByZXR1cm4gXCImcmVzcG9uc2VfbW9kZT1mcmFnbWVudFwiOyB9XHJcbiAgc3RhdGljIGdldCByZXNvdXJjZURlbGltaXRlcigpOiBzdHJpbmcgeyByZXR1cm4gXCJ8XCI7IH1cclxuXHJcbiAgc3RhdGljIGdldCB0b2tlblJlbmV3U3RhdHVzQ2FuY2VsbGVkKCk6IHN0cmluZyB7IHJldHVybiBcIkNhbmNlbGVkXCI7IH1cclxuICBzdGF0aWMgZ2V0IHRva2VuUmVuZXdTdGF0dXNDb21wbGV0ZWQoKTogc3RyaW5nIHsgcmV0dXJuIFwiQ29tcGxldGVkXCI7IH1cclxuICBzdGF0aWMgZ2V0IHRva2VuUmVuZXdTdGF0dXNJblByb2dyZXNzKCk6IHN0cmluZyB7IHJldHVybiBcIkluIFByb2dyZXNzXCI7IH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3BvcFVwV2lkdGg6IG51bWJlciA9IDQ4MztcclxuICBzdGF0aWMgZ2V0IHBvcFVwV2lkdGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3BvcFVwV2lkdGg7IH1cclxuICBzdGF0aWMgc2V0IHBvcFVwV2lkdGgod2lkdGg6IG51bWJlcikge1xyXG4gICAgdGhpcy5fcG9wVXBXaWR0aCA9IHdpZHRoO1xyXG4gIH1cclxuICBwcml2YXRlIHN0YXRpYyBfcG9wVXBIZWlnaHQ6IG51bWJlciA9IDYwMDtcclxuICBzdGF0aWMgZ2V0IHBvcFVwSGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9wb3BVcEhlaWdodDsgfVxyXG4gIHN0YXRpYyBzZXQgcG9wVXBIZWlnaHQoaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3BvcFVwSGVpZ2h0ID0gaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBsb2dpbigpOiBzdHJpbmcgeyByZXR1cm4gXCJMT0dJTlwiOyB9XHJcbiAgc3RhdGljIGdldCByZW5ld1Rva2VuKCk6IHN0cmluZyB7IHJldHVybiBcIlJFTkVXX1RPS0VOXCI7IH1cclxuICBzdGF0aWMgZ2V0IHVua25vd24oKTogc3RyaW5nIHsgcmV0dXJuIFwiVU5LTk9XTlwiOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaG9tZUFjY291bnRJZGVudGlmaWVyKCk6IHN0cmluZyB7IHJldHVybiBcImhvbWVBY2NvdW50SWRlbnRpZmllclwiOyB9XHJcblxyXG4gIHN0YXRpYyBnZXQgY29tbW9uKCk6IHN0cmluZyB7IHJldHVybiBcImNvbW1vblwiOyB9XHJcbiAgc3RhdGljIGdldCBvcGVuaWRTY29wZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJvcGVuaWRcIjsgfVxyXG4gIHN0YXRpYyBnZXQgcHJvZmlsZVNjb3BlKCk6IHN0cmluZyB7IHJldHVybiBcInByb2ZpbGVcIjsgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGNhY2hlTG9jYXRpb25Mb2NhbCgpOiBDYWNoZUxvY2F0aW9uIHsgcmV0dXJuIFwibG9jYWxTdG9yYWdlXCI7IH1cclxuICBzdGF0aWMgZ2V0IGNhY2hlTG9jYXRpb25TZXNzaW9uKCk6IENhY2hlTG9jYXRpb24geyByZXR1cm4gXCJzZXNzaW9uU3RvcmFnZVwiOyB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ2FjaGVLZXlzID0ge1xyXG4gICAgQVVUSE9SSVRZOiBcIm1zYWwuYXV0aG9yaXR5XCIsXHJcbiAgICBBQ1FVSVJFX1RPS0VOX0FDQ09VTlQ6IFwibXNhbC5hY3F1aXJlVG9rZW5BY2NvdW50XCJcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU1NPVHlwZXMgPSB7XHJcbiAgICBBQ0NPVU5UOiBcImFjY291bnRcIixcclxuICAgIFNJRDogXCJzaWRcIixcclxuICAgIExPR0lOX0hJTlQ6IFwibG9naW5faGludFwiLFxyXG4gICAgSURfVE9LRU46IFwiaWRfdG9rZW5cIixcclxuICAgIERPTUFJTl9ISU5UOiBcImRvbWFpbl9oaW50XCIsXHJcbiAgICBPUkdBTklaQVRJT05TOiBcIm9yZ2FuaXphdGlvbnNcIixcclxuICAgIENPTlNVTUVSUzogXCJjb25zdW1lcnNcIixcclxuICAgIEFDQ09VTlRfSUQ6IFwiYWNjb3VudElkZW50aWZpZXJcIixcclxuICAgIEhPTUVBQ0NPVU5UX0lEOiBcImhvbWVBY2NvdW50SWRlbnRpZmllclwiLFxyXG4gICAgTE9HSU5fUkVROiBcImxvZ2luX3JlcVwiLFxyXG4gICAgRE9NQUlOX1JFUTogXCJkb21haW5fcmVxXCJcclxufTtcclxuXHJcbi8qKlxyXG4gKiB3ZSBjb25zaWRlcmVkIG1ha2luZyB0aGlzIFwiZW51bVwiIGluIHRoZSByZXF1ZXN0IGluc3RlYWQgb2Ygc3RyaW5nLCBob3dldmVyIGl0IGxvb2tzIGxpa2UgdGhlIGFsbG93ZWQgbGlzdCBvZlxyXG4gKiBwcm9tcHQgdmFsdWVzIGtlcHQgY2hhbmdpbmcgb3ZlciBwYXN0IGNvdXBsZSBvZiB5ZWFycy4gVGhlcmUgYXJlIHNvbWUgdW5kb2N1bWVudGVkIHByb21wdCB2YWx1ZXMgZm9yIHNvbWVcclxuICogaW50ZXJuYWwgcGFydG5lcnMgdG9vLCBoZW5jZSB0aGUgY2hvaWNlIG9mIGdlbmVyaWMgXCJzdHJpbmdcIiB0eXBlIGluc3RlYWQgb2YgdGhlIFwiZW51bVwiXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjb25zdCBQcm9tcHRTdGF0ZSA9IHtcclxuXHRMT0dJTjogXCJsb2dpblwiLFxyXG5cdFNFTEVDVF9BQ0NPVU5UOiBcInNlbGVjdF9hY2NvdW50XCIsXHJcblx0Q09OU0VOVDogXCJjb25zZW50XCIsXHJcblx0Tk9ORTogXCJub25lXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTGlicmFyeSA9IHtcclxuICB2ZXJzaW9uOiBcIjEuMC4xXCJcclxufTtcclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vQ2xpZW50QXV0aEVycm9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZSA9IHtcclxuICAgIGNvbmZpZ3VyYXRpb25Ob3RTZXQ6IHtcclxuICAgICAgICBjb2RlOiBcIm5vX2NvbmZpZ19zZXRcIixcclxuICAgICAgICBkZXNjOiBcIkNvbmZpZ3VyYXRpb24gaGFzIG5vdCBiZWVuIHNldC4gUGxlYXNlIGNhbGwgdGhlIFVzZXJBZ2VudEFwcGxpY2F0aW9uIGNvbnN0cnVjdG9yIHdpdGggYSB2YWxpZCBDb25maWd1cmF0aW9uIG9iamVjdC5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRDYWNoZUxvY2F0aW9uOiB7XHJcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2NhY2hlX2xvY2F0aW9uXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgY2FjaGUgbG9jYXRpb24gcHJvdmlkZWQgaXMgbm90IHZhbGlkLlwiXHJcbiAgICB9LFxyXG4gICAgbm9TdG9yYWdlU3VwcG9ydGVkOiB7XHJcbiAgICAgICAgY29kZTogXCJicm93c2VyX3N0b3JhZ2Vfbm90X3N1cHBvcnRlZFwiLFxyXG4gICAgICAgIGRlc2M6IFwibG9jYWxTdG9yYWdlIGFuZCBzZXNzaW9uU3RvcmFnZSBhcmUgbm90IHN1cHBvcnRlZC5cIlxyXG4gICAgfSxcclxuICAgIG5vUmVkaXJlY3RDYWxsYmFja3NTZXQ6IHtcclxuICAgICAgICBjb2RlOiBcIm5vX3JlZGlyZWN0X2NhbGxiYWNrc1wiLFxyXG4gICAgICAgIGRlc2M6IFwiTm8gcmVkaXJlY3QgY2FsbGJhY2tzIGhhdmUgYmVlbiBzZXQuIFBsZWFzZSBjYWxsIHNldFJlZGlyZWN0Q2FsbGJhY2tzKCkgd2l0aCB0aGUgYXBwcm9wcmlhdGUgZnVuY3Rpb24gYXJndW1lbnRzIGJlZm9yZSBjb250aW51aW5nLiBcIiArXHJcbiAgICAgICAgICAgIFwiTW9yZSBpbmZvcm1hdGlvbiBpcyBhdmFpbGFibGUgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL0F6dXJlQUQvbWljcm9zb2Z0LWF1dGhlbnRpY2F0aW9uLWxpYnJhcnktZm9yLWpzL3dpa2kvLWJhc2ljcy5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRDYWxsYmFja09iamVjdDoge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9jYWxsYmFja19vYmplY3RcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBvYmplY3QgcGFzc2VkIGZvciB0aGUgY2FsbGJhY2sgd2FzIGludmFsaWQuIFwiICtcclxuICAgICAgICAgIFwiTW9yZSBpbmZvcm1hdGlvbiBpcyBhdmFpbGFibGUgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL0F6dXJlQUQvbWljcm9zb2Z0LWF1dGhlbnRpY2F0aW9uLWxpYnJhcnktZm9yLWpzL3dpa2kvLWJhc2ljcy5cIlxyXG4gICAgfSxcclxuICAgIHNjb3Blc1JlcXVpcmVkOiB7XHJcbiAgICAgICAgY29kZTogXCJzY29wZXNfcmVxdWlyZWRcIixcclxuICAgICAgICBkZXNjOiBcIlNjb3BlcyBhcmUgcmVxdWlyZWQgdG8gb2J0YWluIGFuIGFjY2VzcyB0b2tlbi5cIlxyXG4gICAgfSxcclxuICAgIGVtcHR5U2NvcGVzOiB7XHJcbiAgICAgICAgY29kZTogXCJlbXB0eV9pbnB1dF9zY29wZXNfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlNjb3BlcyBjYW5ub3QgYmUgcGFzc2VkIGFzIGVtcHR5IGFycmF5LlwiXHJcbiAgICB9LFxyXG4gICAgbm9uQXJyYXlTY29wZXM6IHtcclxuICAgICAgICBjb2RlOiBcIm5vbmFycmF5X2lucHV0X3Njb3Blc19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiU2NvcGVzIGNhbm5vdCBiZSBwYXNzZWQgYXMgbm9uLWFycmF5LlwiXHJcbiAgICB9LFxyXG4gICAgY2xpZW50U2NvcGU6IHtcclxuICAgICAgICBjb2RlOiBcImNsaWVudGlkX2lucHV0X3Njb3Blc19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiQ2xpZW50IElEIGNhbiBvbmx5IGJlIHByb3ZpZGVkIGFzIGEgc2luZ2xlIHNjb3BlLlwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZFByb21wdDoge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9wcm9tcHRfdmFsdWVcIixcclxuICAgICAgICBkZXNjOiBcIlN1cHBvcnRlZCBwcm9tcHQgdmFsdWVzIGFyZSAnbG9naW4nLCAnc2VsZWN0X2FjY291bnQnLCAnY29uc2VudCcgYW5kICdub25lJ1wiLFxyXG4gICAgfSxcclxuICAgIGludmFsaWRBdXRob3JpdHlUeXBlOiB7XHJcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2F1dGhvcml0eV90eXBlXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgZ2l2ZW4gYXV0aG9yaXR5IGlzIG5vdCBhIHZhbGlkIHR5cGUgb2YgYXV0aG9yaXR5IHN1cHBvcnRlZCBieSBNU0FMLiBQbGVhc2Ugc2VlIGhlcmUgZm9yIHZhbGlkIGF1dGhvcml0aWVzOiA8aW5zZXJ0IFVSTCBoZXJlPi5cIlxyXG4gICAgfSxcclxuICAgIGF1dGhvcml0eVVyaUluc2VjdXJlOiB7XHJcbiAgICAgICAgY29kZTogXCJhdXRob3JpdHlfdXJpX2luc2VjdXJlXCIsXHJcbiAgICAgICAgZGVzYzogXCJBdXRob3JpdHkgVVJJcyBtdXN0IHVzZSBodHRwcy5cIlxyXG4gICAgfSxcclxuICAgIGF1dGhvcml0eVVyaUludmFsaWRQYXRoOiB7XHJcbiAgICAgICAgY29kZTogXCJhdXRob3JpdHlfdXJpX2ludmFsaWRfcGF0aFwiLFxyXG4gICAgICAgIGRlc2M6IFwiR2l2ZW4gYXV0aG9yaXR5IFVSSSBpcyBpbnZhbGlkLlwiXHJcbiAgICB9LFxyXG4gICAgdW5zdXBwb3J0ZWRBdXRob3JpdHlWYWxpZGF0aW9uOiB7XHJcbiAgICAgICAgY29kZTogXCJ1bnN1cHBvcnRlZF9hdXRob3JpdHlfdmFsaWRhdGlvblwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIGF1dGhvcml0eSB2YWxpZGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHRoaXMgYXV0aG9yaXR5IHR5cGUuXCJcclxuICAgIH0sXHJcbiAgICBiMmNBdXRob3JpdHlVcmlJbnZhbGlkUGF0aDoge1xyXG4gICAgICAgIGNvZGU6IFwiYjJjX2F1dGhvcml0eV91cmlfaW52YWxpZF9wYXRoXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgZ2l2ZW4gVVJJIGZvciB0aGUgQjJDIGF1dGhvcml0eSBpcyBpbnZhbGlkLlwiXHJcbiAgICB9LFxyXG4gICAgY2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiY2xhaW1zX3JlcXVlc3RfcGFyc2luZ19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiQ291bGQgbm90IHBhcnNlIHRoZSBnaXZlbiBjbGFpbXMgcmVxdWVzdCBvYmplY3QuXCJcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGVyZSBpcyBhbiBlcnJvciBpbiBjb25maWd1cmF0aW9uIG9mIHRoZSAuanMgbGlicmFyeS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgZXh0ZW5kcyBDbGllbnRBdXRoRXJyb3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZU5vU2V0Q29uZmlndXJhdGlvbkVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jb25maWd1cmF0aW9uTm90U2V0LmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY29uZmlndXJhdGlvbk5vdFNldC5kZXNjfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkQ2FjaGVMb2NhdGlvbkNvbmZpZ0Vycm9yKGdpdmVuQ2FjaGVMb2NhdGlvbjogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDYWNoZUxvY2F0aW9uLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENhY2hlTG9jYXRpb24uZGVzY30gUHJvdmlkZWQgdmFsdWU6ICR7Z2l2ZW5DYWNoZUxvY2F0aW9ufS4gUG9zc2libGUgdmFsdWVzIGFyZTogJHtDb25zdGFudHMuY2FjaGVMb2NhdGlvbkxvY2FsfSwgJHtDb25zdGFudHMuY2FjaGVMb2NhdGlvblNlc3Npb259LmApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVOb1N0b3JhZ2VTdXBwb3J0ZWRFcnJvcigpIDogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vU3RvcmFnZVN1cHBvcnRlZC5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vU3RvcmFnZVN1cHBvcnRlZC5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlUmVkaXJlY3RDYWxsYmFja3NOb3RTZXRFcnJvcigpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9SZWRpcmVjdENhbGxiYWNrc1NldC5jb2RlLCBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vUmVkaXJlY3RDYWxsYmFja3NTZXQuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDYWxsYmFja09iamVjdEVycm9yKGNhbGxiYWNrT2JqZWN0OiBvYmplY3QpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENhbGxiYWNrT2JqZWN0LmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENhbGxiYWNrT2JqZWN0LmRlc2N9IEdpdmVuIHZhbHVlIGZvciBjYWxsYmFjayBmdW5jdGlvbjogJHtjYWxsYmFja09iamVjdH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlRW1wdHlTY29wZXNBcnJheUVycm9yKHNjb3Blc1ZhbHVlOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuZW1wdHlTY29wZXMuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5lbXB0eVNjb3Blcy5kZXNjfSBHaXZlbiB2YWx1ZTogJHtzY29wZXNWYWx1ZX0uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVNjb3Blc05vbkFycmF5RXJyb3Ioc2NvcGVzVmFsdWU6IHN0cmluZyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5ub25BcnJheVNjb3Blcy5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vbkFycmF5U2NvcGVzLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlQ2xpZW50SWRTaW5nbGVTY29wZUVycm9yKHNjb3Blc1ZhbHVlOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY2xpZW50U2NvcGUuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGllbnRTY29wZS5kZXNjfSBHaXZlbiB2YWx1ZTogJHtzY29wZXNWYWx1ZX0uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVNjb3Blc1JlcXVpcmVkRXJyb3Ioc2NvcGVzVmFsdWU6IGFueSk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5zY29wZXNSZXF1aXJlZC5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnNjb3Blc1JlcXVpcmVkLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkUHJvbXB0RXJyb3IocHJvbXB0VmFsdWU6IGFueSk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkUHJvbXB0LmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZFByb21wdC5kZXNjfSBHaXZlbiB2YWx1ZTogJHtwcm9tcHRWYWx1ZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlQ2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvcihjbGFpbXNSZXF1ZXN0UGFyc2VFcnJvcjogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yLmRlc2N9IEdpdmVuIHZhbHVlOiAke2NsYWltc1JlcXVlc3RQYXJzZUVycm9yfWApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tIFwiLi9BdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuLi9JZFRva2VuXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xpZW50QXV0aEVycm9yTWVzc2FnZSA9IHtcclxuICAgIG11bHRpcGxlTWF0Y2hpbmdUb2tlbnM6IHtcclxuICAgICAgICBjb2RlOiBcIm11bHRpcGxlX21hdGNoaW5nX3Rva2Vuc1wiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIGNhY2hlIGNvbnRhaW5zIG11bHRpcGxlIHRva2VucyBzYXRpc2Z5aW5nIHRoZSByZXF1aXJlbWVudHMuIFwiICtcclxuICAgICAgICAgICAgXCJDYWxsIEFjcXVpcmVUb2tlbiBhZ2FpbiBwcm92aWRpbmcgbW9yZSByZXF1aXJlbWVudHMgbGlrZSBhdXRob3JpdHkuXCJcclxuICAgIH0sXHJcbiAgICBtdWx0aXBsZUNhY2hlQXV0aG9yaXRpZXM6IHtcclxuICAgICAgICBjb2RlOiBcIm11bHRpcGxlX2F1dGhvcml0aWVzXCIsXHJcbiAgICAgICAgZGVzYzogXCJNdWx0aXBsZSBhdXRob3JpdGllcyBmb3VuZCBpbiB0aGUgY2FjaGUuIFBhc3MgYXV0aG9yaXR5IGluIHRoZSBBUEkgb3ZlcmxvYWQuXCJcclxuICAgIH0sXHJcbiAgICBlbmRwb2ludFJlc29sdXRpb25FcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiZW5kcG9pbnRzX3Jlc29sdXRpb25fZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIkVycm9yOiBjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHMuIFBsZWFzZSBjaGVjayBuZXR3b3JrIGFuZCB0cnkgYWdhaW4uXCJcclxuICAgIH0sXHJcbiAgICBwb3BVcFdpbmRvd0Vycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJwb3B1cF93aW5kb3dfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIkVycm9yIG9wZW5pbmcgcG9wdXAgd2luZG93LiBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IGFyZSB1c2luZyBJRSBvciBpZiBwb3B1cHMgYXJlIGJsb2NrZWQgaW4gdGhlIGJyb3dzZXIuXCJcclxuICAgIH0sXHJcbiAgICB0b2tlblJlbmV3YWxFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwidG9rZW5fcmVuZXdhbF9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiVG9rZW4gcmVuZXdhbCBvcGVyYXRpb24gZmFpbGVkIGR1ZSB0byB0aW1lb3V0LlwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZElkVG9rZW46IHtcclxuICAgICAgICBjb2RlOiBcImludmFsaWRfaWRfdG9rZW5cIixcclxuICAgICAgICBkZXNjOiBcIkludmFsaWQgSUQgdG9rZW4gZm9ybWF0LlwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZFN0YXRlRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImludmFsaWRfc3RhdGVfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIkludmFsaWQgc3RhdGUuXCJcclxuICAgIH0sXHJcbiAgICBub25jZU1pc21hdGNoRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcIm5vbmNlX21pc21hdGNoX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJOb25jZSBpcyBub3QgbWF0Y2hpbmcsIE5vbmNlIHJlY2VpdmVkOiBcIlxyXG4gICAgfSxcclxuICAgIGxvZ2luUHJvZ3Jlc3NFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwibG9naW5fcHJvZ3Jlc3NfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIkxvZ2luX0luX1Byb2dyZXNzOiBFcnJvciBkdXJpbmcgbG9naW4gY2FsbCAtIGxvZ2luIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3MuXCJcclxuICAgIH0sXHJcbiAgICBhY3F1aXJlVG9rZW5Qcm9ncmVzc0Vycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJhY3F1aXJldG9rZW5fcHJvZ3Jlc3NfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIkFjcXVpcmVUb2tlbl9Jbl9Qcm9ncmVzczogRXJyb3IgZHVyaW5nIGxvZ2luIGNhbGwgLSBsb2dpbiBpcyBhbHJlYWR5IGluIHByb2dyZXNzLlwiXHJcbiAgICB9LFxyXG4gICAgdXNlckNhbmNlbGxlZEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJ1c2VyX2NhbmNlbGxlZFwiLFxyXG4gICAgICAgIGRlc2M6IFwiVXNlciBjYW5jZWxsZWQgdGhlIGZsb3cuXCJcclxuICAgIH0sXHJcbiAgICBjYWxsYmFja0Vycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJjYWxsYmFja19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiRXJyb3Igb2NjdXJyZWQgaW4gdG9rZW4gcmVjZWl2ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXCJcclxuICAgIH0sXHJcbiAgICB1c2VyTG9naW5SZXF1aXJlZEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJ1c2VyX2xvZ2luX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJVc2VyIGxvZ2luIGlzIHJlcXVpcmVkLlwiXHJcbiAgICB9LFxyXG4gICAgdXNlckRvZXNOb3RFeGlzdEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJ1c2VyX25vbl9leGlzdGVudFwiLFxyXG4gICAgICAgIGRlc2M6IFwiVXNlciBvYmplY3QgZG9lcyBub3QgZXhpc3QuIFBsZWFzZSBjYWxsIGEgbG9naW4gQVBJLlwiXHJcbiAgICB9LFxyXG4gICAgY2xpZW50SW5mb0RlY29kaW5nRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNsaWVudF9pbmZvX2RlY29kaW5nX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgY2xpZW50IGluZm8gY291bGQgbm90IGJlIHBhcnNlZC9kZWNvZGVkIGNvcnJlY3RseS4gUGxlYXNlIHJldmlldyB0aGUgdHJhY2UgdG8gZGV0ZXJtaW5lIHRoZSByb290IGNhdXNlLlwiXHJcbiAgICB9LFxyXG4gICAgY2xpZW50SW5mb05vdFBvcHVsYXRlZEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJjbGllbnRfaW5mb19ub3RfcG9wdWxhdGVkX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgc2VydmljZSBkaWQgbm90IHBvcHVsYXRlIGNsaWVudF9pbmZvIGluIHRoZSByZXNwb25zZSwgUGxlYXNlIHZlcmlmeSB3aXRoIHRoZSBzZXJ2aWNlIHRlYW1cIlxyXG4gICAgfSxcclxuICAgIG51bGxPckVtcHR5SWRUb2tlbjoge1xyXG4gICAgICAgIGNvZGU6IFwibnVsbF9vcl9lbXB0eV9pZF90b2tlblwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIGlkVG9rZW4gaXMgbnVsbCBvciBlbXB0eS4gUGxlYXNlIHJldmlldyB0aGUgdHJhY2UgdG8gZGV0ZXJtaW5lIHRoZSByb290IGNhdXNlLlwiXHJcbiAgICB9LFxyXG4gICAgaWRUb2tlbk5vdFBhcnNlZDoge1xyXG4gICAgICAgIGNvZGU6IFwiaWRfdG9rZW5fcGFyc2luZ19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiSUQgdG9rZW4gY2Fubm90IGJlIHBhcnNlZC4gUGxlYXNlIHJldmlldyBzdGFjayB0cmFjZSB0byBkZXRlcm1pbmUgcm9vdCBjYXVzZS5cIlxyXG4gICAgfSxcclxuICAgIHRva2VuRW5jb2RpbmdFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwidG9rZW5fZW5jb2RpbmdfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSB0b2tlbiB0byBiZSBkZWNvZGVkIGlzIG5vdCBlbmNvZGVkIGNvcnJlY3RseS5cIlxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZXJlIGlzIGFuIGVycm9yIGluIHRoZSBjbGllbnQgY29kZSBydW5uaW5nIG9uIHRoZSBicm93c2VyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsaWVudEF1dGhFcnJvciBleHRlbmRzIEF1dGhFcnJvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkNsaWVudEF1dGhFcnJvclwiO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQ2xpZW50QXV0aEVycm9yLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUVuZHBvaW50UmVzb2x1dGlvbkVycm9yKGVyckRldGFpbD86IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuZGVzYztcclxuICAgICAgICBpZiAoZXJyRGV0YWlsICYmICFVdGlscy5pc0VtcHR5KGVyckRldGFpbCkpIHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGAgRGV0YWlsczogJHtlcnJEZXRhaWx9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5lbmRwb2ludFJlc29sdXRpb25FcnJvci5jb2RlLCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVNdWx0aXBsZU1hdGNoaW5nVG9rZW5zSW5DYWNoZUVycm9yKHNjb3BlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVNYXRjaGluZ1Rva2Vucy5jb2RlLFxyXG4gICAgICAgICAgICBgQ2FjaGUgZXJyb3IgZm9yIHNjb3BlICR7c2NvcGV9OiAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVNYXRjaGluZ1Rva2Vucy5kZXNjfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlTXVsdGlwbGVBdXRob3JpdGllc0luQ2FjaGVFcnJvcihzY29wZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlQ2FjaGVBdXRob3JpdGllcy5jb2RlLFxyXG4gICAgICAgICAgICBgQ2FjaGUgZXJyb3IgZm9yIHNjb3BlICR7c2NvcGV9OiAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVDYWNoZUF1dGhvcml0aWVzLmRlc2N9LmApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVQb3B1cFdpbmRvd0Vycm9yKGVyckRldGFpbD86IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5kZXNjO1xyXG4gICAgICAgIGlmIChlcnJEZXRhaWwgJiYgIVV0aWxzLmlzRW1wdHkoZXJyRGV0YWlsKSkge1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYCBEZXRhaWxzOiAke2VyckRldGFpbH1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuY29kZSwgZXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlVG9rZW5SZW5ld2FsVGltZW91dEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlblJlbmV3YWxFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnRva2VuUmVuZXdhbEVycm9yLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkSWRUb2tlbkVycm9yKGlkVG9rZW46IElkVG9rZW4pIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRJZFRva2VuLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZElkVG9rZW4uZGVzY30gR2l2ZW4gdG9rZW46ICR7aWRUb2tlbn1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1RPRE86IElzIHRoaXMgbm90IGEgc2VjdXJpdHkgZmxhdyB0byBzZW5kIHRoZSB1c2VyIHRoZSBzdGF0ZSBleHBlY3RlZD8/XHJcbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZFN0YXRlRXJyb3IoaW52YWxpZFN0YXRlOiBzdHJpbmcsIGFjdHVhbFN0YXRlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZFN0YXRlRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkU3RhdGVFcnJvci5kZXNjfSAke2ludmFsaWRTdGF0ZX0sIHN0YXRlIGV4cGVjdGVkIDogJHthY3R1YWxTdGF0ZX0uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9UT0RPOiBJcyB0aGlzIG5vdCBhIHNlY3VyaXR5IGZsYXcgdG8gc2VuZCB0aGUgdXNlciB0aGUgTm9uY2UgZXhwZWN0ZWQ/P1xyXG4gICAgc3RhdGljIGNyZWF0ZU5vbmNlTWlzbWF0Y2hFcnJvcihpbnZhbGlkTm9uY2U6IHN0cmluZywgYWN0dWFsTm9uY2U6IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5ub25jZU1pc21hdGNoRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5ub25jZU1pc21hdGNoRXJyb3IuZGVzY30gJHtpbnZhbGlkTm9uY2V9LCBub25jZSBleHBlY3RlZCA6ICR7YWN0dWFsTm9uY2V9LmApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVMb2dpbkluUHJvZ3Jlc3NFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UubG9naW5Qcm9ncmVzc0Vycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UubG9naW5Qcm9ncmVzc0Vycm9yLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVBY3F1aXJlVG9rZW5JblByb2dyZXNzRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmFjcXVpcmVUb2tlblByb2dyZXNzRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5hY3F1aXJlVG9rZW5Qcm9ncmVzc0Vycm9yLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVVc2VyQ2FuY2VsbGVkRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJDYW5jZWxsZWRFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJDYW5jZWxsZWRFcnJvci5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlRXJyb3JJbkNhbGxiYWNrRnVuY3Rpb24oZXJyb3JEZXNjOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2FsbGJhY2tFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNhbGxiYWNrRXJyb3IuZGVzY30gJHtlcnJvckRlc2N9LmApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVVc2VyTG9naW5SZXF1aXJlZEVycm9yKCkgOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckxvZ2luUmVxdWlyZWRFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJMb2dpblJlcXVpcmVkRXJyb3IuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVVzZXJEb2VzTm90RXhpc3RFcnJvcigpIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJEb2VzTm90RXhpc3RFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJEb2VzTm90RXhpc3RFcnJvci5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlQ2xpZW50SW5mb0RlY29kaW5nRXJyb3IoY2F1Z2h0RXJyb3I6IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb0RlY29kaW5nRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5jbGllbnRJbmZvRGVjb2RpbmdFcnJvci5kZXNjfSBGYWlsZWQgd2l0aCBlcnJvcjogJHtjYXVnaHRFcnJvcn1gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlQ2xpZW50SW5mb05vdFBvcHVsYXRlZEVycm9yKGNhdWdodEVycm9yOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNsaWVudEluZm9Ob3RQb3B1bGF0ZWRFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNsaWVudEluZm9Ob3RQb3B1bGF0ZWRFcnJvci5kZXNjfSBGYWlsZWQgd2l0aCBlcnJvcjogJHtjYXVnaHRFcnJvcn1gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlSWRUb2tlbk51bGxPckVtcHR5RXJyb3IoaW52YWxpZFJhd1Rva2VuU3RyaW5nOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm51bGxPckVtcHR5SWRUb2tlbi5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm51bGxPckVtcHR5SWRUb2tlbi5kZXNjfSBSYXcgSUQgVG9rZW4gVmFsdWU6ICR7aW52YWxpZFJhd1Rva2VuU3RyaW5nfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVJZFRva2VuUGFyc2luZ0Vycm9yKGNhdWdodFBhcnNpbmdFcnJvcjogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pZFRva2VuTm90UGFyc2VkLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuaWRUb2tlbk5vdFBhcnNlZC5kZXNjfSBGYWlsZWQgd2l0aCBlcnJvcjogJHtjYXVnaHRQYXJzaW5nRXJyb3J9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVRva2VuRW5jb2RpbmdFcnJvcihpbmNvcnJlY3RseUVuY29kZWRUb2tlbjogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlbkVuY29kaW5nRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlbkVuY29kaW5nRXJyb3IuZGVzY30gQXR0ZW1wdGVkIHRvIGRlY29kZTogJHtpbmNvcnJlY3RseUVuY29kZWRUb2tlbn1gKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhFcnJvck1lc3NhZ2UgPSB7XHJcbiAgICB1bmV4cGVjdGVkRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInVuZXhwZWN0ZWRfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlVuZXhwZWN0ZWQgZXJyb3IgaW4gYXV0aGVudGljYXRpb24uXCJcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4qIEdlbmVyYWwgZXJyb3IgY2xhc3MgdGhyb3duIGJ5IHRoZSBNU0FMLmpzIGxpYnJhcnkuXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBBdXRoRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcblxyXG4gICAgZXJyb3JDb2RlOiBzdHJpbmc7XHJcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQXV0aEVycm9yLnByb3RvdHlwZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiQXV0aEVycm9yXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihlcnJEZXNjOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEF1dGhFcnJvcihBdXRoRXJyb3JNZXNzYWdlLnVuZXhwZWN0ZWRFcnJvci5jb2RlLCBgJHtBdXRoRXJyb3JNZXNzYWdlLnVuZXhwZWN0ZWRFcnJvci5kZXNjfTogJHtlcnJEZXNjfWApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBJVXJpIH0gZnJvbSBcIi4vSVVyaVwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB7IElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZSB9IGZyb20gXCIuL0lUZW5hbnREaXNjb3ZlcnlSZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmltcG9ydCB7IFhockNsaWVudCB9IGZyb20gXCIuL1hIUkNsaWVudFwiO1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBlbnVtIEF1dGhvcml0eVR5cGUge1xyXG4gIEFhZCxcclxuICBBZGZzLFxyXG4gIEIyQ1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEF1dGhvcml0eSB7XHJcbiAgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLklzVmFsaWRhdGlvbkVuYWJsZWQgPSB2YWxpZGF0ZUF1dGhvcml0eTtcclxuICAgIHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5ID0gYXV0aG9yaXR5O1xyXG5cclxuICAgIHRoaXMudmFsaWRhdGVBc1VyaSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFic3RyYWN0IGdldCBBdXRob3JpdHlUeXBlKCk6IEF1dGhvcml0eVR5cGU7XHJcblxyXG4gIHB1YmxpYyBJc1ZhbGlkYXRpb25FbmFibGVkOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgZ2V0IFRlbmFudCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cy5QYXRoU2VnbWVudHNbMF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRlbmFudERpc2NvdmVyeVJlc3BvbnNlOiBJVGVuYW50RGlzY292ZXJ5UmVzcG9uc2U7XHJcblxyXG4gIHB1YmxpYyBnZXQgQXV0aG9yaXphdGlvbkVuZHBvaW50KCk6IHN0cmluZyB7XHJcbiAgICB0aGlzLnZhbGlkYXRlUmVzb2x2ZWQoKTtcclxuICAgIHJldHVybiB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlLkF1dGhvcml6YXRpb25FbmRwb2ludC5yZXBsYWNlKFwie3RlbmFudH1cIiwgdGhpcy5UZW5hbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBFbmRTZXNzaW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcclxuICAgIHRoaXMudmFsaWRhdGVSZXNvbHZlZCgpO1xyXG4gICAgcmV0dXJuIHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UuRW5kU2Vzc2lvbkVuZHBvaW50LnJlcGxhY2UoXCJ7dGVuYW50fVwiLCB0aGlzLlRlbmFudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IFNlbGZTaWduZWRKd3RBdWRpZW5jZSgpOiBzdHJpbmcge1xyXG4gICAgdGhpcy52YWxpZGF0ZVJlc29sdmVkKCk7XHJcbiAgICByZXR1cm4gdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS5Jc3N1ZXIucmVwbGFjZShcInt0ZW5hbnR9XCIsIHRoaXMuVGVuYW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmFsaWRhdGVSZXNvbHZlZCgpIHtcclxuICAgIGlmICghdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZSkge1xyXG4gICAgICB0aHJvdyBcIlBsZWFzZSBjYWxsIFJlc29sdmVFbmRwb2ludHNBc3luYyBmaXJzdFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBVUkwgdGhhdCBpcyB0aGUgYXV0aG9yaXR5IHNldCBieSB0aGUgZGV2ZWxvcGVyXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBDYW5vbmljYWxBdXRob3JpdHkoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgQ2Fub25pY2FsQXV0aG9yaXR5KHVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eSA9IFV0aWxzLkNhbm9uaWNhbGl6ZVVyaSh1cmwpO1xyXG4gICAgdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2Fub25pY2FsQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzOiBJVXJpO1xyXG5cclxuICBwdWJsaWMgZ2V0IENhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMoKTogSVVyaSB7XHJcbiAgICBpZiAoIXRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cykge1xyXG4gICAgICB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMgPSBVdGlscy5HZXRVcmxDb21wb25lbnRzKHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogLy8gaHR0cDovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtZGlzY292ZXJ5LTFfMC5odG1sI1Byb3ZpZGVyTWV0YWRhdGFcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgZ2V0IERlZmF1bHRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt0aGlzLkNhbm9uaWNhbEF1dGhvcml0eX12Mi4wLy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uYDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdpdmVuIGEgc3RyaW5nLCB2YWxpZGF0ZSB0aGF0IGl0IGlzIG9mIHRoZSBmb3JtIGh0dHBzOi8vZG9tYWluL3BhdGhcclxuICAgKi9cclxuICBwcml2YXRlIHZhbGlkYXRlQXNVcmkoKSB7XHJcbiAgICBsZXQgY29tcG9uZW50cztcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbXBvbmVudHMgPSB0aGlzLkNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHM7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZEF1dGhvcml0eVR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjb21wb25lbnRzLlByb3RvY29sIHx8IGNvbXBvbmVudHMuUHJvdG9jb2wudG9Mb3dlckNhc2UoKSAhPT0gXCJodHRwczpcIikge1xyXG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmF1dGhvcml0eVVyaUluc2VjdXJlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29tcG9uZW50cy5QYXRoU2VnbWVudHMgfHwgY29tcG9uZW50cy5QYXRoU2VnbWVudHMubGVuZ3RoIDwgMSkge1xyXG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmF1dGhvcml0eVVyaUludmFsaWRQYXRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbHMgdGhlIE9JREMgZW5kcG9pbnQgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBEaXNjb3ZlckVuZHBvaW50cyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQ6IHN0cmluZyk6IFByb21pc2U8SVRlbmFudERpc2NvdmVyeVJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgWGhyQ2xpZW50KCk7XHJcbiAgICByZXR1cm4gY2xpZW50LnNlbmRSZXF1ZXN0QXN5bmMob3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50LCBcIkdFVFwiLCAvKmVuYWJsZUNhY2hpbmc6ICovIHRydWUpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxJVGVuYW50RGlzY292ZXJ5UmVzcG9uc2U+e1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbkVuZHBvaW50OiByZXNwb25zZS5hdXRob3JpemF0aW9uX2VuZHBvaW50LFxyXG4gICAgICAgICAgICAgICAgRW5kU2Vzc2lvbkVuZHBvaW50OiByZXNwb25zZS5lbmRfc2Vzc2lvbl9lbmRwb2ludCxcclxuICAgICAgICAgICAgICAgIElzc3VlcjogcmVzcG9uc2UuaXNzdWVyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZS5cclxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBhdXRob3JpdHkgaXMgaW4gdGhlIGNhY2hlXHJcbiAgICogRGlzY292ZXIgZW5kcG9pbnRzIHZpYSBvcGVuaWQtY29uZmlndXJhdGlvblxyXG4gICAqIElmIHN1Y2Nlc3NmdWwsIGNhY2hlcyB0aGUgZW5kcG9pbnQgZm9yIGxhdGVyIHVzZSBpbiBPSURDXHJcbiAgICovXHJcbiAgcHVibGljIHJlc29sdmVFbmRwb2ludHNBc3luYygpOiBQcm9taXNlPEF1dGhvcml0eT4ge1xyXG4gICAgbGV0IG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCA9IFwiXCI7XHJcbiAgICByZXR1cm4gdGhpcy5HZXRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRBc3luYygpLnRoZW4ob3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50UmVzcG9uc2UgPT4ge1xyXG4gICAgICBvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQgPSBvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRSZXNwb25zZTtcclxuICAgICAgcmV0dXJuIHRoaXMuRGlzY292ZXJFbmRwb2ludHMob3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50KTtcclxuICAgIH0pLnRoZW4oKHRlbmFudERpc2NvdmVyeVJlc3BvbnNlOiBJVGVuYW50RGlzY292ZXJ5UmVzcG9uc2UpID0+IHtcclxuICAgICAgdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZSA9IHRlbmFudERpc2NvdmVyeVJlc3BvbnNlO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgVGVuYW50RGlzY292ZXJ5RW5kcG9pbnRcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgR2V0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50QXN5bmMoKTogUHJvbWlzZTxzdHJpbmc+O1xyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElMb2dnZXJDYWxsYmFjayB7XHJcbiAgKGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nLCBjb250YWluc1BpaTogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIExvZ0xldmVsIHtcclxuICBFcnJvcixcclxuICBXYXJuaW5nLFxyXG4gIEluZm8sXHJcbiAgVmVyYm9zZVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHsvLyBTaW5nbGV0b24gQ2xhc3NcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIC8vIFRPRE86IFRoaXMgZG9lcyBub3Qgc2VlbSB0byBiZSBhIHNpbmdsZXRvbiEhIENoYW5nZSBvciBEZWxldGUuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IExvZ2dlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgY29ycmVsYXRpb25JZDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBsZXZlbDogTG9nTGV2ZWwgPSBMb2dMZXZlbC5JbmZvO1xyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwaWlMb2dnaW5nRW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgbG9jYWxDYWxsYmFjazogSUxvZ2dlckNhbGxiYWNrO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihsb2NhbENhbGxiYWNrOiBJTG9nZ2VyQ2FsbGJhY2ssXHJcbiAgICAgIG9wdGlvbnM6XHJcbiAgICAgIHtcclxuICAgICAgICAgIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcsXHJcbiAgICAgICAgICBsZXZlbD86IExvZ0xldmVsLFxyXG4gICAgICAgICAgcGlpTG9nZ2luZ0VuYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgICB9ID0ge30pIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgY29ycmVsYXRpb25JZCA9IFwiXCIsXHJcbiAgICAgICAgICBsZXZlbCA9IExvZ0xldmVsLkluZm8sXHJcbiAgICAgICAgICBwaWlMb2dnaW5nRW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgIH0gPSBvcHRpb25zO1xyXG5cclxuICAgICAgdGhpcy5sb2NhbENhbGxiYWNrID0gbG9jYWxDYWxsYmFjaztcclxuICAgICAgdGhpcy5jb3JyZWxhdGlvbklkID0gY29ycmVsYXRpb25JZDtcclxuICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xyXG4gICAgICB0aGlzLnBpaUxvZ2dpbmdFbmFibGVkID0gcGlpTG9nZ2luZ0VuYWJsZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBsb2dNZXNzYWdlKGxvZ0xldmVsOiBMb2dMZXZlbCwgbG9nTWVzc2FnZTogc3RyaW5nLCBjb250YWluc1BpaTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKChsb2dMZXZlbCA+IHRoaXMubGV2ZWwpIHx8ICghdGhpcy5waWlMb2dnaW5nRW5hYmxlZCAmJiBjb250YWluc1BpaSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b1VUQ1N0cmluZygpO1xyXG4gICAgbGV0IGxvZzogc3RyaW5nO1xyXG4gICAgaWYgKCFVdGlscy5pc0VtcHR5KHRoaXMuY29ycmVsYXRpb25JZCkpIHtcclxuICAgICAgbG9nID0gdGltZXN0YW1wICsgXCI6XCIgKyB0aGlzLmNvcnJlbGF0aW9uSWQgKyBcIi1cIiArIFV0aWxzLmdldExpYnJhcnlWZXJzaW9uKCkgKyBcIi1cIiArIExvZ0xldmVsW2xvZ0xldmVsXSArIFwiIFwiICsgbG9nTWVzc2FnZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBsb2cgPSB0aW1lc3RhbXAgKyBcIjpcIiArIFV0aWxzLmdldExpYnJhcnlWZXJzaW9uKCkgKyBcIi1cIiArIExvZ0xldmVsW2xvZ0xldmVsXSArIFwiIFwiICsgbG9nTWVzc2FnZTtcclxuICAgIH1cclxuICAgIHRoaXMuZXhlY3V0ZUNhbGxiYWNrKGxvZ0xldmVsLCBsb2csIGNvbnRhaW5zUGlpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBleGVjdXRlQ2FsbGJhY2sobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIGNvbnRhaW5zUGlpOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5sb2NhbENhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMubG9jYWxDYWxsYmFjayhsZXZlbCwgbWVzc2FnZSwgY29udGFpbnNQaWkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgZXJyb3JQaWkobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuV2FybmluZywgbWVzc2FnZSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHdhcm5pbmdQaWkobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuV2FybmluZywgbWVzc2FnZSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgaW5mbyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5JbmZvLCBtZXNzYWdlLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgaW5mb1BpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5JbmZvLCBtZXNzYWdlLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICB2ZXJib3NlKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLlZlcmJvc2UsIG1lc3NhZ2UsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICB2ZXJib3NlUGlpKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLlZlcmJvc2UsIG1lc3NhZ2UsIHRydWUpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vQXV0aEVycm9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VydmVyRXJyb3JNZXNzYWdlID0ge1xyXG4gICAgc2VydmVyVW5hdmFpbGFibGU6IHtcclxuICAgICAgICBjb2RlOiBcInNlcnZlcl91bmF2YWlsYWJsZVwiLFxyXG4gICAgICAgIGRlc2M6IFwiU2VydmVyIGlzIHRlbXBvcmFyaWx5IHVuYXZhaWxhYmxlLlwiXHJcbiAgICB9LFxyXG4gICAgdW5rbm93blNlcnZlckVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJ1bmtub3duX3NlcnZlcl9lcnJvclwiXHJcbiAgICB9LFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZXJlIGlzIGFuIGVycm9yIHdpdGggdGhlIHNlcnZlciBjb2RlLCBmb3IgZXhhbXBsZSwgdW5hdmFpbGFiaWxpdHkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2VydmVyRXJyb3IgZXh0ZW5kcyBBdXRoRXJyb3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJTZXJ2ZXJFcnJvclwiO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgU2VydmVyRXJyb3IucHJvdG90eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlU2VydmVyVW5hdmFpbGFibGVFcnJvcigpOiBTZXJ2ZXJFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTZXJ2ZXJFcnJvcihTZXJ2ZXJFcnJvck1lc3NhZ2Uuc2VydmVyVW5hdmFpbGFibGUuY29kZSxcclxuICAgICAgICAgICAgU2VydmVyRXJyb3JNZXNzYWdlLnNlcnZlclVuYXZhaWxhYmxlLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVVbmtub3duU2VydmVyRXJyb3IoZXJyb3JEZXNjOiBzdHJpbmcpOiBTZXJ2ZXJFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTZXJ2ZXJFcnJvcihTZXJ2ZXJFcnJvck1lc3NhZ2UudW5rbm93blNlcnZlckVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGVycm9yRGVzYyk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5DYWNoZUl0ZW1cIjtcclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5LZXkgfSBmcm9tIFwiLi9BY2Nlc3NUb2tlbktleVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlblZhbHVlIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5WYWx1ZVwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyB9IGZyb20gXCIuL1NlcnZlclJlcXVlc3RQYXJhbWV0ZXJzXCI7XHJcbmltcG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuL0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBDbGllbnRJbmZvIH0gZnJvbSBcIi4vQ2xpZW50SW5mb1wiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMsIFNTT1R5cGVzLCBQcm9tcHRTdGF0ZSB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4vSWRUb2tlblwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuL1N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuL0FjY291bnRcIjtcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHlGYWN0b3J5IH0gZnJvbSBcIi4vQXV0aG9yaXR5RmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uLCBidWlsZENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9Db25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgUVBEaWN0LCB2YWxpZGF0ZUNsYWltc1JlcXVlc3QgfSBmcm9tIFwiLi9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnNcIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmltcG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0F1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgU2VydmVyRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9TZXJ2ZXJFcnJvclwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBBdXRoUmVzcG9uc2UsIGJ1aWxkUmVzcG9uc2VTdGF0ZU9ubHkgfSBmcm9tIFwiLi9BdXRoUmVzcG9uc2VcIjtcclxuXHJcbi8vIGRlZmF1bHQgYXV0aG9yaXR5XHJcbmNvbnN0IERFRkFVTFRfQVVUSE9SSVRZID0gXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRvIGhhbmRsZSBpRnJhbWUgZ2VuZXJhdGlvbiwgUG9wdXAgV2luZG93IGNyZWF0aW9uIGFuZCByZWRpcmVjdCBoYW5kbGluZ1xyXG4gKi9cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgbXNhbDogT2JqZWN0O1xyXG4gICAgICAgIEN1c3RvbUV2ZW50OiBDdXN0b21FdmVudDtcclxuICAgICAgICBFdmVudDogRXZlbnQ7XHJcbiAgICAgICAgYWN0aXZlUmVuZXdhbHM6IHt9O1xyXG4gICAgICAgIHJlbmV3U3RhdGVzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgICAgIGNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlcyA6IHt9O1xyXG4gICAgICAgIHByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzOiB7fTtcclxuICAgICAgICBvcGVuZWRXaW5kb3dzOiBBcnJheTxXaW5kb3c+O1xyXG4gICAgICAgIHJlcXVlc3RUeXBlOiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqIEBpZ25vcmVcclxuICogcmVzcG9uc2VfdHlwZSBmcm9tIE9wZW5JRENvbm5lY3RcclxuICogUmVmZXJlbmNlczogaHR0cHM6Ly9vcGVuaWQubmV0L3NwZWNzL29hdXRoLXYyLW11bHRpcGxlLXJlc3BvbnNlLXR5cGVzLTFfMC5odG1sICYgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY3NDkjc2VjdGlvbi00LjIuMVxyXG4gKiBTaW5jZSB3ZSBzdXBwb3J0IG9ubHkgaW1wbGljaXQgZmxvdyBpbiB0aGlzIGxpYnJhcnksIHdlIHJlc3RyaWN0IHRoZSByZXNwb25zZV90eXBlIHN1cHBvcnQgdG8gb25seSAndG9rZW4nIGFuZCAnaWRfdG9rZW4nXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBSZXNwb25zZVR5cGVzID0ge1xyXG4gIGlkX3Rva2VuOiBcImlkX3Rva2VuXCIsXHJcbiAgdG9rZW46IFwidG9rZW5cIixcclxuICBpZF90b2tlbl90b2tlbjogXCJpZF90b2tlbiB0b2tlblwiXHJcbn07XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENhY2hlUmVzdWx0IHtcclxuICBlcnJvckRlc2M6IHN0cmluZztcclxuICB0b2tlbjogc3RyaW5nO1xyXG4gIGVycm9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqIEBpZ25vcmVcclxuICogRGF0YSB0eXBlIHRvIGhvbGQgaW5mb3JtYXRpb24gYWJvdXQgc3RhdGUgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZXNwb25zZVN0YXRlSW5mbyA9IHtcclxuICBzdGF0ZTogc3RyaW5nO1xyXG4gIHN0YXRlTWF0Y2g6IGJvb2xlYW47XHJcbiAgcmVxdWVzdFR5cGU6IHN0cmluZztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBIHR5cGUgYWxpYXMgZm9yIGFuIGF1dGhSZXNwb25zZUNhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gKiB7QGxpbmsgKGF1dGhSZXNwb25zZUNhbGxiYWNrOnR5cGUpfVxyXG4gKiBAcGFyYW0gYXV0aEVyciBlcnJvciBjcmVhdGVkIGZvciBmYWlsdXJlIGNhc2VzXHJcbiAqIEBwYXJhbSByZXNwb25zZSByZXNwb25zZSBjb250YWluaW5nIHRva2VuIHN0cmluZ3MgaW4gc3VjY2VzcyBjYXNlcywgb3IganVzdCBzdGF0ZSB2YWx1ZSBpbiBlcnJvciBjYXNlc1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgYXV0aFJlc3BvbnNlQ2FsbGJhY2sgPSAoYXV0aEVycjogQXV0aEVycm9yLCByZXNwb25zZT86IEF1dGhSZXNwb25zZSkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBBIHR5cGUgYWxpYXMgZm9yIGEgdG9rZW5SZWNlaXZlZENhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gKiB7QGxpbmsgKHRva2VuUmVjZWl2ZWRDYWxsYmFjazp0eXBlKX1cclxuICogQHJldHVybnMgcmVzcG9uc2Ugb2YgdHlwZSB7QGxpbmsgKEF1dGhSZXNwb25zZTp0eXBlKX1cclxuICogVGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBnZXQgdGhlIGNhbGwgYmFjayBvbmNlIHRoaXMgQVBJIGlzIGNvbXBsZXRlZCAoZWl0aGVyIHN1Y2Nlc3NmdWxseSBvciB3aXRoIGEgZmFpbHVyZSkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSB0b2tlblJlY2VpdmVkQ2FsbGJhY2sgPSAocmVzcG9uc2U6IEF1dGhSZXNwb25zZSkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBBIHR5cGUgYWxpYXMgZm9yIGEgZXJyb3JSZWNlaXZlZENhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gKiB7QGxpbmsgKGVycm9yUmVjZWl2ZWRDYWxsYmFjazp0eXBlKX1cclxuICogQHJldHVybnMgcmVzcG9uc2Ugb2YgdHlwZSB7QGxpbmsgKEF1dGhFcnJvcjpjbGFzcyl9XHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGFjY291bnQgc3RhdGVcclxuICovXHJcbmV4cG9ydCB0eXBlIGVycm9yUmVjZWl2ZWRDYWxsYmFjayA9IChhdXRoRXJyOiBBdXRoRXJyb3IsIGFjY291bnRTdGF0ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICogQGlnbm9yZVxyXG4gKiBBIHdyYXBwZXIgdG8gaGFuZGxlIHRoZSB0b2tlbiByZXNwb25zZS9lcnJvciB3aXRoaW4gdGhlIGlGcmFtZSBhbHdheXNcclxuICpcclxuICogQHBhcmFtIHRhcmdldFxyXG4gKiBAcGFyYW0gcHJvcGVydHlLZXlcclxuICogQHBhcmFtIGRlc2NyaXB0b3JcclxuICovXHJcbmNvbnN0IHJlc29sdmVUb2tlbk9ubHlJZk91dE9mSWZyYW1lID0gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcclxuICBjb25zdCB0b2tlbkFjcXVpc2l0aW9uTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcclxuICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlzSW5JZnJhbWUoKVxyXG4gICAgICAgICAgPyBuZXcgUHJvbWlzZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IHRva2VuQWNxdWlzaXRpb25NZXRob2QuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgfTtcclxuICByZXR1cm4gZGVzY3JpcHRvcjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBVc2VyQWdlbnRBcHBsaWNhdGlvbiBjbGFzc1xyXG4gKlxyXG4gKiBPYmplY3QgSW5zdGFuY2UgdGhhdCB0aGUgZGV2ZWxvcGVyIGNhbiB1c2UgdG8gbWFrZSBsb2dpblhYIE9SIGFjcXVpcmVUb2tlblhYIGZ1bmN0aW9uc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVzZXJBZ2VudEFwcGxpY2F0aW9uIHtcclxuXHJcbiAgLy8gaW5wdXQgQ29uZmlndXJhdGlvbiBieSB0aGUgZGV2ZWxvcGVyL3VzZXJcclxuICBwcml2YXRlIGNvbmZpZzogQ29uZmlndXJhdGlvbjtcclxuXHJcbiAgLy8gY2FsbGJhY2tzIGZvciB0b2tlbi9lcnJvclxyXG4gIHByaXZhdGUgYXV0aFJlc3BvbnNlQ2FsbGJhY2s6IGF1dGhSZXNwb25zZUNhbGxiYWNrID0gbnVsbDtcclxuICBwcml2YXRlIHRva2VuUmVjZWl2ZWRDYWxsYmFjazogdG9rZW5SZWNlaXZlZENhbGxiYWNrID0gbnVsbDtcclxuICBwcml2YXRlIGVycm9yUmVjZWl2ZWRDYWxsYmFjazogZXJyb3JSZWNlaXZlZENhbGxiYWNrID0gbnVsbDtcclxuXHJcbiAgLy8gQWRkZWQgZm9yIHJlYWRhYmlsaXR5IGFzIHRoZXNlIHBhcmFtcyBhcmUgdmVyeSBmcmVxdWVudGx5IHVzZWRcclxuICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyO1xyXG4gIHByaXZhdGUgY2xpZW50SWQ6IHN0cmluZztcclxuICBwcml2YXRlIGluQ29va2llOiBib29sZWFuO1xyXG5cclxuICAvLyBDYWNoZSBhbmQgQWNjb3VudCBpbmZvIHJlZmVycmVkIGFjcm9zcyB0b2tlbiBncmFudCBmbG93XHJcbiAgcHJvdGVjdGVkIGNhY2hlU3RvcmFnZTogU3RvcmFnZTtcclxuICBwcml2YXRlIGFjY291bnQ6IEFjY291bnQ7XHJcblxyXG4gIC8vIHN0YXRlIHZhcmlhYmxlc1xyXG4gIHByaXZhdGUgbG9naW5JblByb2dyZXNzOiBib29sZWFuO1xyXG4gIHByaXZhdGUgYWNxdWlyZVRva2VuSW5Qcm9ncmVzczogYm9vbGVhbjtcclxuICBwcml2YXRlIHNpbGVudEF1dGhlbnRpY2F0aW9uU3RhdGU6IHN0cmluZztcclxuICBwcml2YXRlIHNpbGVudExvZ2luOiBib29sZWFuO1xyXG4gIHByaXZhdGUgcmVkaXJlY3RDYWxsYmFja3NTZXQ6IGJvb2xlYW47XHJcblxyXG4gIC8vIEF1dGhvcml0eSBGdW5jdGlvbmFsaXR5XHJcbiAgcHJvdGVjdGVkIGF1dGhvcml0eUluc3RhbmNlOiBBdXRob3JpdHk7XHJcblxyXG4gIC8qKlxyXG4gICAqIHNldHRlciBmb3IgdGhlIGF1dGhvcml0eSBVUkxcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aG9yaXR5XHJcbiAgICovXHJcbiAgLy8gSWYgdGhlIGRldmVsb3BlciBwYXNzZXMgYW4gYXV0aG9yaXR5LCBjcmVhdGUgYW4gaW5zdGFuY2VcclxuICBwdWJsaWMgc2V0IGF1dGhvcml0eSh2YWwpIHtcclxuICAgIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgPSBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKHZhbCwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNZXRob2QgdG8gbWFuYWdlIHRoZSBhdXRob3JpdHkgVVJMLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gYXV0aG9yaXR5XHJcbiAgICovXHJcbiAgcHVibGljIGdldCBhdXRob3JpdHkoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhvcml0eUluc3RhbmNlLkNhbm9uaWNhbEF1dGhvcml0eTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgY3VycmVudCBhdXRob3JpdHkgaW5zdGFuY2UgZnJvbSB0aGUgTVNBTCBjb25maWd1cmF0aW9uIG9iamVjdFxyXG4gICAqXHJcbiAgICogQHJldHVybnMge0BsaW5rIEF1dGhvcml0eX0gYXV0aG9yaXR5IGluc3RhbmNlXHJcbiAgICovXHJcbiAgcHVibGljIGdldEF1dGhvcml0eUluc3RhbmNlKCk6IEF1dGhvcml0eSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRob3JpdHlJbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqIENvbnN0cnVjdG9yIGZvciB0aGUgVXNlckFnZW50QXBwbGljYXRpb24gdXNlZCB0byBpbnN0YW50aWF0ZSB0aGUgVXNlckFnZW50QXBwbGljYXRpb24gb2JqZWN0XHJcbiAgICpcclxuICAgKiBJbXBvcnRhbnQgYXR0cmlidXRlcyBpbiB0aGUgQ29uZmlndXJhdGlvbiBvYmplY3QgZm9yIGF1dGggYXJlOlxyXG4gICAqIC0gY2xpZW50SUQ6IHRoZSBhcHBsaWNhdGlvbiBJRCBvZiB5b3VyIGFwcGxpY2F0aW9uLlxyXG4gICAqIFlvdSBjYW4gb2J0YWluIG9uZSBieSByZWdpc3RlcmluZyB5b3VyIGFwcGxpY2F0aW9uIHdpdGggb3VyIEFwcGxpY2F0aW9uIHJlZ2lzdHJhdGlvbiBwb3J0YWwgOiBodHRwczovL3BvcnRhbC5henVyZS5jb20vI2JsYWRlL01pY3Jvc29mdF9BQURfSUFNL0FjdGl2ZURpcmVjdG9yeU1lbnVCbGFkZS9SZWdpc3RlcmVkQXBwc1ByZXZpZXdcclxuICAgKiAtIGF1dGhvcml0eTogdGhlIGF1dGhvcml0eSBVUkwgZm9yIHlvdXIgYXBwbGljYXRpb24uXHJcbiAgICpcclxuICAgKiBJbiBBenVyZSBBRCwgYXV0aG9yaXR5IGlzIGEgVVJMIGluZGljYXRpbmcgdGhlIEF6dXJlIGFjdGl2ZSBkaXJlY3RvcnkgdGhhdCBNU0FMIHVzZXMgdG8gb2J0YWluIHRva2Vucy5cclxuICAgKiBJdCBpcyBvZiB0aGUgZm9ybSBodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vJmx0O0VudGVyX3RoZV9UZW5hbnRfSW5mb19IZXJlJmd0Oy5cclxuICAgKiBJZiB5b3VyIGFwcGxpY2F0aW9uIHN1cHBvcnRzIEFjY291bnRzIGluIG9uZSBvcmdhbml6YXRpb25hbCBkaXJlY3RvcnksIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggdGhlIFRlbmFudCBJZCBvciBUZW5hbnQgbmFtZSAoZm9yIGV4YW1wbGUsIGNvbnRvc28ubWljcm9zb2Z0LmNvbSkuXHJcbiAgICogSWYgeW91ciBhcHBsaWNhdGlvbiBzdXBwb3J0cyBBY2NvdW50cyBpbiBhbnkgb3JnYW5pemF0aW9uYWwgZGlyZWN0b3J5LCByZXBsYWNlIFwiRW50ZXJfdGhlX1RlbmFudF9JbmZvX0hlcmVcIiB2YWx1ZSB3aXRoIG9yZ2FuaXphdGlvbnMuXHJcbiAgICogSWYgeW91ciBhcHBsaWNhdGlvbiBzdXBwb3J0cyBBY2NvdW50cyBpbiBhbnkgb3JnYW5pemF0aW9uYWwgZGlyZWN0b3J5IGFuZCBwZXJzb25hbCBNaWNyb3NvZnQgYWNjb3VudHMsIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggY29tbW9uLlxyXG4gICAqIFRvIHJlc3RyaWN0IHN1cHBvcnQgdG8gUGVyc29uYWwgTWljcm9zb2Z0IGFjY291bnRzIG9ubHksIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggY29uc3VtZXJzLlxyXG4gICAqXHJcbiAgICpcclxuICAgKiBJbiBBenVyZSBCMkMsIGF1dGhvcml0eSBpcyBvZiB0aGUgZm9ybSBodHRwczovLyZsdDtpbnN0YW5jZSZndDsvdGZwLyZsdDt0ZW5hbnQmZ3Q7LyZsdDtwb2xpY3lOYW1lJmd0Oy9cclxuXHJcbiAgICogQHBhcmFtIHtAbGluayAoQ29uZmlndXJhdGlvbjp0eXBlKX0gY29uZmlndXJhdGlvbiBvYmplY3QgZm9yIHRoZSBNU0FMIFVzZXJBZ2VudEFwcGxpY2F0aW9uIGluc3RhbmNlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG5cclxuICAgIC8vIFNldCB0aGUgQ29uZmlndXJhdGlvblxyXG4gICAgdGhpcy5jb25maWcgPSBidWlsZENvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbik7XHJcblxyXG4gICAgLy8gU2V0IHRoZSBjYWxsYmFjayBib29sZWFuXHJcbiAgICB0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0ID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5sb2dnZXIgPSB0aGlzLmNvbmZpZy5zeXN0ZW0ubG9nZ2VyO1xyXG4gICAgdGhpcy5jbGllbnRJZCA9IHRoaXMuY29uZmlnLmF1dGguY2xpZW50SWQ7XHJcbiAgICB0aGlzLmluQ29va2llID0gdGhpcy5jb25maWcuY2FjaGUuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZTtcclxuXHJcbiAgICAvLyBpZiBubyBhdXRob3JpdHkgaXMgcGFzc2VkLCBzZXQgdGhlIGRlZmF1bHQ6IFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vblwiXHJcbiAgICB0aGlzLmF1dGhvcml0eSA9IHRoaXMuY29uZmlnLmF1dGguYXV0aG9yaXR5IHx8IERFRkFVTFRfQVVUSE9SSVRZO1xyXG5cclxuICAgIC8vIHRyYWNrIGxvZ2luIGFuZCBhY3F1aXJlVG9rZW4gaW4gcHJvZ3Jlc3NcclxuICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBjYWNoZSBrZXlzIG1zYWwgLSB0eXBlc2NyaXB0IHRocm93cyBhbiBlcnJvciBpZiBhbnkgdmFsdWUgb3RoZXIgdGhhbiBcImxvY2FsU3RvcmFnZVwiIG9yIFwic2Vzc2lvblN0b3JhZ2VcIiBpcyBwYXNzZWRcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlID0gbmV3IFN0b3JhZ2UodGhpcy5jb25maWcuY2FjaGUuY2FjaGVMb2NhdGlvbik7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUludmFsaWRDYWNoZUxvY2F0aW9uQ29uZmlnRXJyb3IodGhpcy5jb25maWcuY2FjaGUuY2FjaGVMb2NhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSB3aW5kb3cgaGFuZGxpbmcgY29kZVxyXG4gICAgd2luZG93Lm9wZW5lZFdpbmRvd3MgPSBbXTtcclxuICAgIHdpbmRvdy5hY3RpdmVSZW5ld2FscyA9IHt9O1xyXG4gICAgd2luZG93LnJlbmV3U3RhdGVzID0gW107XHJcbiAgICB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzID0geyB9O1xyXG4gICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzID0geyB9O1xyXG4gICAgd2luZG93Lm1zYWwgPSB0aGlzO1xyXG5cclxuICAgIGNvbnN0IHVybEhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuICAgIGNvbnN0IGlzQ2FsbGJhY2sgPSB0aGlzLmlzQ2FsbGJhY2sodXJsSGFzaCk7XHJcblxyXG4gICAgLy8gT24gdGhlIHNlcnZlciAzMDIgLSBSZWRpcmVjdCwgaGFuZGxlIHRoaXNcclxuICAgIGlmICghdGhpcy5jb25maWcuZnJhbWV3b3JrLmlzQW5ndWxhcikge1xyXG4gICAgICBpZiAoaXNDYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQXV0aGVudGljYXRpb25SZXNwb25zZSh1cmxIYXNoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jcmVnaW9uIFJlZGlyZWN0IENhbGxiYWNrc1xyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICogU2V0IHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgZm9yIHRoZSByZWRpcmVjdCBmbG93IHRvIHNlbmQgYmFjayB0aGUgc3VjY2VzcyBvciBlcnJvciBvYmplY3QuXHJcbiAgICogQHBhcmFtIHtAbGluayAodG9rZW5SZWNlaXZlZENhbGxiYWNrOnR5cGUpfSBzdWNjZXNzQ2FsbGJhY2sgLSBDYWxsYmFjayB3aGljaCBjb250YWlucyB0aGUgQXV0aFJlc3BvbnNlIG9iamVjdCwgY29udGFpbmluZyBkYXRhIGZyb20gdGhlIHNlcnZlci5cclxuICAgKiBAcGFyYW0ge0BsaW5rIChlcnJvclJlY2VpdmVkQ2FsbGJhY2s6dHlwZSl9IGVycm9yQ2FsbGJhY2sgLSBDYWxsYmFjayB3aGljaCBjb250YWlucyBhIEF1dGhFcnJvciBvYmplY3QsIGNvbnRhaW5pbmcgZXJyb3IgZGF0YSBmcm9tIGVpdGhlciB0aGUgc2VydmVyXHJcbiAgICogb3IgdGhlIGxpYnJhcnksIGRlcGVuZGluZyBvbiB0aGUgb3JpZ2luIG9mIHRoZSBlcnJvci5cclxuICAgKi9cclxuICBoYW5kbGVSZWRpcmVjdENhbGxiYWNrKHRva2VuUmVjZWl2ZWRDYWxsYmFjazogdG9rZW5SZWNlaXZlZENhbGxiYWNrLCBlcnJvclJlY2VpdmVkQ2FsbGJhY2s6IGVycm9yUmVjZWl2ZWRDYWxsYmFjayk6IHZvaWQ7XHJcbiAgaGFuZGxlUmVkaXJlY3RDYWxsYmFjayhhdXRoQ2FsbGJhY2s6IGF1dGhSZXNwb25zZUNhbGxiYWNrKTogdm9pZDtcclxuICBoYW5kbGVSZWRpcmVjdENhbGxiYWNrKGF1dGhPclRva2VuQ2FsbGJhY2s6IGF1dGhSZXNwb25zZUNhbGxiYWNrIHwgdG9rZW5SZWNlaXZlZENhbGxiYWNrLCBlcnJvclJlY2VpdmVkQ2FsbGJhY2s/OiBlcnJvclJlY2VpdmVkQ2FsbGJhY2spOiB2b2lkIHtcclxuICAgIGlmICghYXV0aE9yVG9rZW5DYWxsYmFjaykge1xyXG4gICAgICB0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0ID0gZmFsc2U7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkQ2FsbGJhY2tPYmplY3RFcnJvcihhdXRoT3JUb2tlbkNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgY2FsbGJhY2tzXHJcbiAgICBpZiAoZXJyb3JSZWNlaXZlZENhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMudG9rZW5SZWNlaXZlZENhbGxiYWNrID0gYXV0aE9yVG9rZW5DYWxsYmFjayBhcyB0b2tlblJlY2VpdmVkQ2FsbGJhY2s7XHJcbiAgICAgIHRoaXMuZXJyb3JSZWNlaXZlZENhbGxiYWNrID0gZXJyb3JSZWNlaXZlZENhbGxiYWNrO1xyXG4gICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiVGhpcyBvdmVybG9hZCBmb3IgY2FsbGJhY2sgaXMgZGVwcmVjYXRlZCAtIHBsZWFzZSBjaGFuZ2UgdGhlIGZvcm1hdCBvZiB0aGUgY2FsbGJhY2tzIHRvIGEgc2luZ2xlIGNhbGxiYWNrIGFzIHNob3duOiAoZXJyOiBBdXRoRXJyb3IsIHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UpLlwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYXV0aFJlc3BvbnNlQ2FsbGJhY2sgPSBhdXRoT3JUb2tlbkNhbGxiYWNrIGFzIGF1dGhSZXNwb25zZUNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQgPSB0cnVlO1xyXG5cclxuICAgIC8vIE9uIHRoZSBzZXJ2ZXIgMzAyIC0gUmVkaXJlY3QsIGhhbmRsZSB0aGlzXHJcbiAgICBpZiAoIXRoaXMuY29uZmlnLmZyYW1ld29yay5pc0FuZ3VsYXIpIHtcclxuICAgICAgY29uc3QgY2FjaGVkSGFzaCA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnVybEhhc2gpO1xyXG4gICAgICBpZiAoY2FjaGVkSGFzaCkge1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc0NhbGxCYWNrKGNhY2hlZEhhc2gsIG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZGlyZWN0U3VjY2Vzc0hhbmRsZXIocmVzcG9uc2U6IEF1dGhSZXNwb25zZSkgOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjaykge1xyXG4gICAgICB0aGlzLnRva2VuUmVjZWl2ZWRDYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXV0aFJlc3BvbnNlQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5hdXRoUmVzcG9uc2VDYWxsYmFjayhudWxsLCByZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZGlyZWN0RXJyb3JIYW5kbGVyKGF1dGhFcnI6IEF1dGhFcnJvciwgcmVzcG9uc2U6IEF1dGhSZXNwb25zZSkgOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjaykge1xyXG4gICAgICB0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjayhhdXRoRXJyLCByZXNwb25zZS5hY2NvdW50U3RhdGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdXRoUmVzcG9uc2VDYWxsYmFjayhhdXRoRXJyLCByZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFJlZGlyZWN0IEZsb3dcclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHdoZW4gaW5pdGlhdGluZyB0aGUgbG9naW4gcHJvY2VzcyBieSByZWRpcmVjdGluZyB0aGUgdXNlcidzIGJyb3dzZXIgdG8gdGhlIGF1dGhvcml6YXRpb24gZW5kcG9pbnQuXHJcbiAgICogQHBhcmFtIHtAbGluayAoQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzOnR5cGUpfVxyXG4gICAqL1xyXG4gIGxvZ2luUmVkaXJlY3QocmVxdWVzdD86IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IHZvaWQge1xyXG5cclxuICAgIC8vIFRocm93IGVycm9yIGlmIGNhbGxiYWNrcyBhcmUgbm90IHNldCBiZWZvcmUgcmVkaXJlY3RcclxuICAgIGlmICghdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCkge1xyXG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlUmVkaXJlY3RDYWxsYmFja3NOb3RTZXRFcnJvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZXMgbmF2aWdhdGUgdXJsOyBzYXZlcyB2YWx1ZSBpbiBjYWNoZTsgcmVkaXJlY3QgdXNlciB0byBBQURcclxuICAgIGlmICh0aGlzLmxvZ2luSW5Qcm9ncmVzcykge1xyXG4gICAgICB0aGlzLnJlZGlyZWN0RXJyb3JIYW5kbGVyKENsaWVudEF1dGhFcnJvci5jcmVhdGVMb2dpbkluUHJvZ3Jlc3NFcnJvcigpLCBidWlsZFJlc3BvbnNlU3RhdGVPbmx5KHJlcXVlc3QgJiYgcmVxdWVzdC5zdGF0ZSkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgZXh0cmFTY29wZXNUb0NvbnNlbnQgaXMgcGFzc2VkLCBhcHBlbmQgdGhlbSB0byB0aGUgbG9naW4gcmVxdWVzdFxyXG4gICAgbGV0IHNjb3BlczogQXJyYXk8c3RyaW5nPiA9IHRoaXMuYXBwZW5kU2NvcGVzKHJlcXVlc3QpO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIGFuZCBmaWx0ZXIgc2NvcGVzICh0aGUgdmFsaWRhdGUgZnVuY3Rpb24gd2lsbCB0aHJvdyBpZiB2YWxpZGF0aW9uIGZhaWxzKVxyXG4gICAgdGhpcy52YWxpZGF0ZUlucHV0U2NvcGUoc2NvcGVzLCBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IHRoaXMuZ2V0QWNjb3VudCgpO1xyXG5cclxuICAgIC8vIGRlZmVyIHF1ZXJ5UGFyYW1ldGVycyBnZW5lcmF0aW9uIHRvIEhlbHBlciBpZiBkZXZlbG9wZXIgcGFzc2VzIGFjY291bnQvc2lkL2xvZ2luX2hpbnRcclxuICAgIGlmIChVdGlscy5pc1NTT1BhcmFtKHJlcXVlc3QpKSB7XHJcbiAgICAgIC8vIGlmIGFjY291bnQgaXMgbm90IHByb3ZpZGVkLCB3ZSBwYXNzIG51bGxcclxuICAgICAgdGhpcy5sb2dpblJlZGlyZWN0SGVscGVyKGFjY291bnQsIHJlcXVlc3QsIHNjb3Blcyk7XHJcbiAgICB9XHJcbiAgICAvLyBlbHNlIGhhbmRsZSB0aGUgbGlicmFyeSBkYXRhXHJcbiAgICBlbHNlIHtcclxuICAgICAgLy8gZXh0cmFjdCBBREFMIGlkX3Rva2VuIGlmIGV4aXN0c1xyXG4gICAgICBsZXQgYWRhbElkVG9rZW4gPSB0aGlzLmV4dHJhY3RBREFMSWRUb2tlbigpO1xyXG5cclxuICAgICAgLy8gc2lsZW50IGxvZ2luIGlmIEFEQUwgaWRfdG9rZW4gaXMgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseSAtIFNTT1xyXG4gICAgICBpZiAoYWRhbElkVG9rZW4gJiYgIXNjb3Blcykge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJBREFMJ3MgaWRUb2tlbiBleGlzdHMuIEV4dHJhY3RpbmcgbG9naW4gaW5mb3JtYXRpb24gZnJvbSBBREFMJ3MgaWRUb2tlbiBcIik7XHJcbiAgICAgICAgbGV0IHRva2VuUmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0gdGhpcy5idWlsZElEVG9rZW5SZXF1ZXN0KHJlcXVlc3QpO1xyXG5cclxuICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFjcXVpcmVUb2tlblNpbGVudCh0b2tlblJlcXVlc3QpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zaWxlbnRMb2dpbiA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVuaWZpZWQgY2FjaGUgY2FsbCBpcyBzdWNjZXNzZnVsXCIpO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3RTdWNjZXNzSGFuZGxlcihyZXNwb25zZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkVycm9yIG9jY3VycmVkIGR1cmluZyB1bmlmaWVkIGNhY2hlIEFUU1wiKTtcclxuXHJcbiAgICAgICAgICAvLyBjYWxsIHRoZSBsb2dpblJlZGlyZWN0SGVscGVyIGxhdGVyIHdpdGggbm8gdXNlciBhY2NvdW50IGNvbnRleHRcclxuICAgICAgICAgIHRoaXMubG9naW5SZWRpcmVjdEhlbHBlcihudWxsLCByZXF1ZXN0LCBzY29wZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGVsc2UgcHJvY2VlZCB0byBsb2dpblxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAvLyBjYWxsIHRoZSBsb2dpblJlZGlyZWN0SGVscGVyIGxhdGVyIHdpdGggbm8gdXNlciBhY2NvdW50IGNvbnRleHRcclxuICAgICAgICB0aGlzLmxvZ2luUmVkaXJlY3RIZWxwZXIobnVsbCwgcmVxdWVzdCwgc2NvcGVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGxvZ2luUmVkaXJlY3RcclxuICAgKlxyXG4gICAqIEBwYXJhbSBhY2NvdW50XHJcbiAgICogQHBhcmFtIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc1xyXG4gICAqIEBwYXJhbSBzY29wZXNcclxuICAgKi9cclxuICBwcml2YXRlIGxvZ2luUmVkaXJlY3RIZWxwZXIoYWNjb3VudDogQWNjb3VudCwgcmVxdWVzdD86IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgc2NvcGVzPzogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgLy8gVHJhY2sgbG9naW4gaW4gcHJvZ3Jlc3NcclxuICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmF1dGhvcml0eUluc3RhbmNlLnJlc29sdmVFbmRwb2ludHNBc3luYygpLnRoZW4oKCkgPT4ge1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRoZSBSZXF1ZXN0IHRvIGJlIHNlbnQgdG8gdGhlIFNlcnZlclxyXG4gICAgICBsZXQgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxyXG4gICAgICAgIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UsXHJcbiAgICAgICAgdGhpcy5jbGllbnRJZCwgc2NvcGVzLFxyXG4gICAgICAgIFJlc3BvbnNlVHlwZXMuaWRfdG9rZW4sXHJcbiAgICAgICAgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLFxyXG4gICAgICAgIHJlcXVlc3QgJiYgcmVxdWVzdC5zdGF0ZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gcG9wdWxhdGUgUXVlcnlQYXJhbWV0ZXJzIChzaWQvbG9naW5faGludC9kb21haW5faGludCkgYW5kIGFueSBvdGhlciBleHRyYVF1ZXJ5UGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxyXG4gICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSB0aGlzLnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgcmVxdWVzdCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcclxuXHJcbiAgICAgIC8vIGlmIHRoZSB1c2VyIHNldHMgdGhlIGxvZ2luIHN0YXJ0IHBhZ2UgLSBhbmd1bGFyIG9ubHk/P1xyXG4gICAgICBsZXQgbG9naW5TdGFydFBhZ2UgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5hbmd1bGFyTG9naW5SZXF1ZXN0KTtcclxuICAgICAgaWYgKCFsb2dpblN0YXJ0UGFnZSB8fCBsb2dpblN0YXJ0UGFnZSA9PT0gXCJcIikge1xyXG4gICAgICAgIGxvZ2luU3RhcnRQYWdlID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuYW5ndWxhckxvZ2luUmVxdWVzdCwgXCJcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXBkYXRlQ2FjaGVFbnRyaWVzKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCwgbG9naW5TdGFydFBhZ2UpO1xyXG5cclxuICAgICAgLy8gYnVpbGQgVVJMIHRvIG5hdmlnYXRlIHRvIHByb2NlZWQgd2l0aCB0aGUgbG9naW5cclxuICAgICAgbGV0IHVybE5hdmlnYXRlID0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmNyZWF0ZU5hdmlnYXRlVXJsKHNjb3BlcykgKyBDb25zdGFudHMucmVzcG9uc2VfbW9kZV9mcmFnbWVudDtcclxuXHJcbiAgICAgIC8vIFJlZGlyZWN0IHVzZXIgdG8gbG9naW4gVVJMXHJcbiAgICAgIHRoaXMucHJvbXB0VXNlcih1cmxOYXZpZ2F0ZSk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHNcIik7XHJcbiAgICAgIHRoaXMucmVkaXJlY3RFcnJvckhhbmRsZXIoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVuZHBvaW50UmVzb2x1dGlvbkVycm9yKGVyci50b1N0cmluZyksIGJ1aWxkUmVzcG9uc2VTdGF0ZU9ubHkocmVxdWVzdCAmJiByZXF1ZXN0LnN0YXRlKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB3aGVuIHlvdSB3YW50IHRvIG9idGFpbiBhbiBhY2Nlc3NfdG9rZW4gZm9yIHlvdXIgQVBJIGJ5IHJlZGlyZWN0aW5nIHRoZSB1c2VyJ3MgYnJvd3NlciB3aW5kb3cgdG8gdGhlIGF1dGhvcml6YXRpb24gZW5kcG9pbnQuXHJcbiAgICogQHBhcmFtIHtAbGluayAoQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzOnR5cGUpfVxyXG4gICAqXHJcbiAgICogVG8gcmVuZXcgaWRUb2tlbiwgcGxlYXNlIHBhc3MgY2xpZW50SWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIFBhcmFtZXRlcnNcclxuICAgKi9cclxuICBhY3F1aXJlVG9rZW5SZWRpcmVjdChyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiB2b2lkIHtcclxuICAgIC8vIFRocm93IGVycm9yIGlmIGNhbGxiYWNrcyBhcmUgbm90IHNldCBiZWZvcmUgcmVkaXJlY3RcclxuICAgIGlmICghdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCkge1xyXG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlUmVkaXJlY3RDYWxsYmFja3NOb3RTZXRFcnJvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIGFuZCBmaWx0ZXIgc2NvcGVzICh0aGUgdmFsaWRhdGUgZnVuY3Rpb24gd2lsbCB0aHJvdyBpZiB2YWxpZGF0aW9uIGZhaWxzKVxyXG4gICAgdGhpcy52YWxpZGF0ZUlucHV0U2NvcGUocmVxdWVzdC5zY29wZXMsIHRydWUpO1xyXG5cclxuICAgIC8vIEdldCB0aGUgYWNjb3VudCBvYmplY3QgaWYgYSBzZXNzaW9uIGV4aXN0c1xyXG4gICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IHJlcXVlc3QuYWNjb3VudCB8fCB0aGlzLmdldEFjY291bnQoKTtcclxuXHJcbiAgICAvLyBJZiBhbHJlYWR5IGluIHByb2dyZXNzLCBkbyBub3QgcHJvY2VlZFxyXG4gICAgaWYgKHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcykge1xyXG4gICAgICB0aGlzLnJlZGlyZWN0RXJyb3JIYW5kbGVyKENsaWVudEF1dGhFcnJvci5jcmVhdGVBY3F1aXJlVG9rZW5JblByb2dyZXNzRXJyb3IoKSwgYnVpbGRSZXNwb25zZVN0YXRlT25seSh0aGlzLmdldEFjY291bnRTdGF0ZShyZXF1ZXN0LnN0YXRlKSkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gc2Vzc2lvbiBleGlzdHMsIHByb21wdCB0aGUgdXNlciB0byBsb2dpbi5cclxuICAgIGlmICghYWNjb3VudCAmJiAhKHJlcXVlc3Quc2lkICB8fCByZXF1ZXN0LmxvZ2luSGludCkpIHtcclxuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVzZXIgbG9naW4gaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVVc2VyTG9naW5SZXF1aXJlZEVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnM7XHJcbiAgICBjb25zdCBhY3F1aXJlVG9rZW5BdXRob3JpdHkgPSByZXF1ZXN0LmF1dGhvcml0eSA/IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UocmVxdWVzdC5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpIDogdGhpcy5hdXRob3JpdHlJbnN0YW5jZTtcclxuXHJcbiAgICAvLyBUcmFjayB0aGUgYWNxdWlyZVRva2VuIHByb2dyZXNzXHJcbiAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSB0cnVlO1xyXG5cclxuICAgIGFjcXVpcmVUb2tlbkF1dGhvcml0eS5yZXNvbHZlRW5kcG9pbnRzQXN5bmMoKS50aGVuKCgpID0+IHtcclxuICAgICAgLy8gT24gRnVsZmlsbG1lbnRcclxuICAgICAgY29uc3QgcmVzcG9uc2VUeXBlID0gdGhpcy5nZXRUb2tlblR5cGUoYWNjb3VudCwgcmVxdWVzdC5zY29wZXMsIGZhbHNlKTtcclxuICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxyXG4gICAgICAgIGFjcXVpcmVUb2tlbkF1dGhvcml0eSxcclxuICAgICAgICB0aGlzLmNsaWVudElkLFxyXG4gICAgICAgIHJlcXVlc3Quc2NvcGVzLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZSxcclxuICAgICAgICB0aGlzLmdldFJlZGlyZWN0VXJpKCksXHJcbiAgICAgICAgcmVxdWVzdC5zdGF0ZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVDYWNoZUVudHJpZXMoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LCBhY2NvdW50KTtcclxuXHJcbiAgICAgIC8vIHBvcHVsYXRlIFF1ZXJ5UGFyYW1ldGVycyAoc2lkL2xvZ2luX2hpbnQvZG9tYWluX2hpbnQpIGFuZCBhbnkgb3RoZXIgZXh0cmFRdWVyeVBhcmFtZXRlcnMgc2V0IGJ5IHRoZSBkZXZlbG9wZXJcclxuICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gdGhpcy5wb3B1bGF0ZVF1ZXJ5UGFyYW1zKGFjY291bnQsIHJlcXVlc3QsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCk7XHJcblxyXG4gICAgICAvLyBDb25zdHJ1Y3QgdXJsTmF2aWdhdGVcclxuICAgICAgbGV0IHVybE5hdmlnYXRlID0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmNyZWF0ZU5hdmlnYXRlVXJsKHJlcXVlc3Quc2NvcGVzKSArIENvbnN0YW50cy5yZXNwb25zZV9tb2RlX2ZyYWdtZW50O1xyXG5cclxuICAgICAgLy8gc2V0IHN0YXRlIGluIGNhY2hlIGFuZCByZWRpcmVjdCB0byB1cmxOYXZpZ2F0ZVxyXG4gICAgICBpZiAodXJsTmF2aWdhdGUpIHtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5zdGF0ZUFjcXVpcmVUb2tlbiwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCB0aGlzLmluQ29va2llKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh1cmxOYXZpZ2F0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcImNvdWxkIG5vdCByZXNvbHZlIGVuZHBvaW50c1wiKTtcclxuICAgICAgdGhpcy5yZWRpcmVjdEVycm9ySGFuZGxlcihDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoZXJyLnRvU3RyaW5nKSwgYnVpbGRSZXNwb25zZVN0YXRlT25seShyZXF1ZXN0LnN0YXRlKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICogQ2hlY2tzIGlmIHRoZSByZWRpcmVjdCByZXNwb25zZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBTVFMuIEluIGNhc2Ugb2YgcmVkaXJlY3QsIHRoZSB1cmwgZnJhZ21lbnQgaGFzIGVpdGhlciBpZF90b2tlbiwgYWNjZXNzX3Rva2VuIG9yIGVycm9yLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoIC0gSGFzaCBwYXNzZWQgZnJvbSByZWRpcmVjdCBwYWdlLlxyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSAtIHRydWUgaWYgcmVzcG9uc2UgY29udGFpbnMgaWRfdG9rZW4sIGFjY2Vzc190b2tlbiBvciBlcnJvciwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAqL1xyXG4gIC8vIFRPRE8gLSByZW5hbWUgdGhpcywgdGhlIG5hbWUgaXMgY29uZnVzaW5nXHJcbiAgaXNDYWxsYmFjayhoYXNoOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGhhc2ggPSB0aGlzLmdldEhhc2goaGFzaCk7XHJcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gVXRpbHMuZGVzZXJpYWxpemUoaGFzaCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KENvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uKSB8fFxyXG4gICAgICBwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KENvbnN0YW50cy5lcnJvcikgfHxcclxuICAgICAgcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuYWNjZXNzVG9rZW4pIHx8XHJcbiAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmlkVG9rZW4pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBQb3B1cCBGbG93XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB3aGVuIGluaXRpYXRpbmcgdGhlIGxvZ2luIHByb2Nlc3MgdmlhIG9wZW5pbmcgYSBwb3B1cCB3aW5kb3cgaW4gdGhlIHVzZXIncyBicm93c2VyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0BsaW5rIChBdXRoZW50aWNhdGlvblBhcmFtZXRlcnM6dHlwZSl9XHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZS48QXV0aFJlc3BvbnNlPn0gLSBhIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2hlbiB0aGlzIGZ1bmN0aW9uIGhhcyBjb21wbGV0ZWQsIG9yIHJlamVjdGVkIGlmIGFuIGVycm9yIHdhcyByYWlzZWQuIFJldHVybnMgdGhlIHtAbGluayBBdXRoUmVzcG9uc2V9IG9iamVjdFxyXG4gICAqL1xyXG4gIGxvZ2luUG9wdXAocmVxdWVzdD86IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IFByb21pc2U8QXV0aFJlc3BvbnNlPiB7XHJcbiAgICAvLyBDcmVhdGVzIG5hdmlnYXRlIHVybDsgc2F2ZXMgdmFsdWUgaW4gY2FjaGU7IHJlZGlyZWN0IHVzZXIgdG8gQUFEXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIC8vIEZhaWwgaWYgbG9naW4gaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xyXG4gICAgICBpZiAodGhpcy5sb2dpbkluUHJvZ3Jlc3MpIHtcclxuICAgICAgICByZXR1cm4gcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVMb2dpbkluUHJvZ3Jlc3NFcnJvcigpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgZXh0cmFTY29wZXNUb0NvbnNlbnQgaXMgcGFzc2VkLCBhcHBlbmQgdGhlbSB0byB0aGUgbG9naW4gcmVxdWVzdFxyXG4gICAgICBsZXQgc2NvcGVzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy5hcHBlbmRTY29wZXMocmVxdWVzdCk7XHJcblxyXG4gICAgICAvLyBWYWxpZGF0ZSBhbmQgZmlsdGVyIHNjb3BlcyAodGhlIHZhbGlkYXRlIGZ1bmN0aW9uIHdpbGwgdGhyb3cgaWYgdmFsaWRhdGlvbiBmYWlscylcclxuICAgICAgdGhpcy52YWxpZGF0ZUlucHV0U2NvcGUoc2NvcGVzLCBmYWxzZSk7XHJcblxyXG4gICAgICBsZXQgYWNjb3VudCA9IHRoaXMuZ2V0QWNjb3VudCgpO1xyXG5cclxuICAgICAvLyBhZGQgdGhlIHByb21wdCBwYXJhbWV0ZXIgdG8gdGhlICdleHRyYVF1ZXJ5UGFyYW1ldGVycycgaWYgcGFzc2VkXHJcbiAgICAgIGlmIChVdGlscy5pc1NTT1BhcmFtKHJlcXVlc3QpKSB7XHJcbiAgICAgICAgIC8vIGlmIGFjY291bnQgaXMgbm90IHByb3ZpZGVkLCB3ZSBwYXNzIG51bGxcclxuICAgICAgICAgdGhpcy5sb2dpblBvcHVwSGVscGVyKGFjY291bnQsIHJlc29sdmUsIHJlamVjdCwgcmVxdWVzdCwgc2NvcGVzKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBlbHNlIGhhbmRsZSB0aGUgbGlicmFyeSBkYXRhXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIEV4dHJhY3QgQURBTCBpZF90b2tlbiBpZiBpdCBleGlzdHNcclxuICAgICAgICBsZXQgYWRhbElkVG9rZW4gPSB0aGlzLmV4dHJhY3RBREFMSWRUb2tlbigpO1xyXG5cclxuICAgICAgICAvLyBzaWxlbnQgbG9naW4gaWYgQURBTCBpZF90b2tlbiBpcyByZXRyaWV2ZWQgc3VjY2Vzc2Z1bGx5IC0gU1NPXHJcbiAgICAgICAgaWYgKGFkYWxJZFRva2VuICYmICFzY29wZXMpIHtcclxuICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJBREFMJ3MgaWRUb2tlbiBleGlzdHMuIEV4dHJhY3RpbmcgbG9naW4gaW5mb3JtYXRpb24gZnJvbSBBREFMJ3MgaWRUb2tlbiBcIik7XHJcbiAgICAgICAgICBsZXQgdG9rZW5SZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgPSB0aGlzLmJ1aWxkSURUb2tlblJlcXVlc3QocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgdGhpcy5zaWxlbnRMb2dpbiA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlblNpbGVudCh0b2tlblJlcXVlc3QpXHJcbiAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJVbmlmaWVkIGNhY2hlIGNhbGwgaXMgc3VjY2Vzc2Z1bFwiKTtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lsZW50TG9naW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBkdXJpbmcgdW5pZmllZCBjYWNoZSBBVFNcIik7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5Qb3B1cEhlbHBlcihudWxsLCByZXNvbHZlLCByZWplY3QsIHJlcXVlc3QsIHNjb3Blcyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZWxzZSBwcm9jZWVkIHdpdGggbG9naW5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubG9naW5Qb3B1cEhlbHBlcihudWxsLCByZXNvbHZlLCByZWplY3QsIHJlcXVlc3QsIHNjb3Blcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gbG9naW5Qb3B1cFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGFjY291bnRcclxuICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAqIEBwYXJhbSByZXNvbHZlXHJcbiAgICogQHBhcmFtIHJlamVjdFxyXG4gICAqIEBwYXJhbSBzY29wZXNcclxuICAgKi9cclxuICBwcml2YXRlIGxvZ2luUG9wdXBIZWxwZXIoYWNjb3VudDogQWNjb3VudCwgcmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSwgcmVxdWVzdD86IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgc2NvcGVzPzogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgaWYgKCFzY29wZXMpIHtcclxuICAgICAgc2NvcGVzID0gW3RoaXMuY2xpZW50SWRdO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2NvcGUgPSBzY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBhIHBvcHVwIHdpbmRvd1xyXG4gICAgY29uc3QgcG9wVXBXaW5kb3cgPSB0aGlzLm9wZW5XaW5kb3coXCJhYm91dDpibGFua1wiLCBcIl9ibGFua1wiLCAxLCB0aGlzLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgaWYgKCFwb3BVcFdpbmRvdykge1xyXG4gICAgICAvLyBXZSBwYXNzIHJlamVjdCBpbiBvcGVuV2luZG93LCB3ZSByZWplY3QgdGhlcmUgZHVyaW5nIGFuIGVycm9yXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUcmFjayBsb2dpbiBwcm9ncmVzc1xyXG4gICAgdGhpcy5sb2dpbkluUHJvZ3Jlc3MgPSB0cnVlO1xyXG5cclxuICAgIC8vIFJlc29sdmUgZW5kcG9pbnRcclxuICAgIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UucmVzb2x2ZUVuZHBvaW50c0FzeW5jKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGxldCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnModGhpcy5hdXRob3JpdHlJbnN0YW5jZSwgdGhpcy5jbGllbnRJZCwgc2NvcGVzLCBSZXNwb25zZVR5cGVzLmlkX3Rva2VuLCB0aGlzLmdldFJlZGlyZWN0VXJpKCksIHJlcXVlc3QgJiYgcmVxdWVzdC5zdGF0ZSk7XHJcblxyXG4gICAgICAvLyBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgKHNpZC9sb2dpbl9oaW50L2RvbWFpbl9oaW50KSBhbmQgYW55IG90aGVyIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHNldCBieSB0aGUgZGV2ZWxvcGVyO1xyXG4gICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSB0aGlzLnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgcmVxdWVzdCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlQ2FjaGVFbnRyaWVzKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cclxuICAgICAgLy8gQ2FjaGUgdGhlIHN0YXRlLCBub25jZSwgYW5kIGxvZ2luIHJlcXVlc3QgZGF0YVxyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5sb2dpblJlcXVlc3QsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0aGlzLmluQ29va2llKTtcclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubG9naW5FcnJvciwgXCJcIik7XHJcblxyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5ub25jZSwgdGhpcy5pbkNvb2tpZSk7XHJcblxyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIFwiXCIpO1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgXCJcIik7XHJcblxyXG4gICAgICAvLyBjYWNoZSBhdXRob3JpdHlLZXlcclxuICAgICAgdGhpcy5zZXRBdXRob3JpdHlDYWNoZShzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuYXV0aG9yaXR5KTtcclxuXHJcbiAgICAgIC8vIEJ1aWxkIHRoZSBVUkwgdG8gbmF2aWdhdGUgdG8gaW4gdGhlIHBvcHVwIHdpbmRvd1xyXG4gICAgICBsZXQgdXJsTmF2aWdhdGUgPSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuY3JlYXRlTmF2aWdhdGVVcmwoc2NvcGVzKSAgKyBDb25zdGFudHMucmVzcG9uc2VfbW9kZV9mcmFnbWVudDtcclxuXHJcbiAgICAgIHdpbmRvdy5yZW5ld1N0YXRlcy5wdXNoKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5sb2dpbjtcclxuXHJcbiAgICAgIC8vIFJlZ2lzdGVyIGNhbGxiYWNrIHRvIGNhcHR1cmUgcmVzdWx0cyBmcm9tIHNlcnZlclxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuXHJcbiAgICAgIC8vIE5hdmlnYXRlIHVybCBpbiBwb3B1cFdpbmRvd1xyXG4gICAgICBpZiAocG9wVXBXaW5kb3cpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKFwiTmF2aWdhdGVkIFBvcHVwIHdpbmRvdyB0bzpcIiArIHVybE5hdmlnYXRlKTtcclxuICAgICAgICBwb3BVcFdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsTmF2aWdhdGU7XHJcbiAgICAgIH1cclxuICAgIH0sICgpID0+IHtcclxuICAgICAgLy8gRW5kcG9pbnQgcmVzb2x1dGlvbiBmYWlsdXJlIGVycm9yXHJcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5lbmRwb2ludFJlc29sdXRpb25FcnJvci5jb2RlICsgXCI6XCIgKyBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yLmRlc2MpO1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuY29kZSk7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yLmRlc2MpO1xyXG5cclxuICAgICAgLy8gcmVqZWN0IHRoYXQgaXMgcGFzc2VkIGluIC0gUkVETyB0aGlzIGluIHRoZSBzdWJzZXF1ZW50IHJlZmFjdG9yLCBwYXNzaW5nIHJlamVjdCBpcyBjb25mdXNpbmdcclxuICAgICAgaWYgKHJlamVjdCkge1xyXG4gICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENsb3NlIHRoZSBwb3B1cCB3aW5kb3dcclxuICAgICAgaWYgKHBvcFVwV2luZG93KSB7XHJcbiAgICAgICAgcG9wVXBXaW5kb3cuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgLy8gdGhpcyBpcyBhbiBhbGwgY2F0Y2ggZm9yIGFueSBmYWlsdXJlIGZvciB0aGUgYWJvdmUgY29kZSBleGNlcHQgdGhlIHNwZWNpZmljICdyZWplY3QnIGNhbGxcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcImNvdWxkIG5vdCByZXNvbHZlIGVuZHBvaW50c1wiKTtcclxuICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVFbmRwb2ludFJlc29sdXRpb25FcnJvcihlcnIudG9TdHJpbmcpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHdoZW4geW91IHdhbnQgdG8gb2J0YWluIGFuIGFjY2Vzc190b2tlbiBmb3IgeW91ciBBUEkgdmlhIG9wZW5pbmcgYSBwb3B1cCB3aW5kb3cgaW4gdGhlIHVzZXIncyBicm93c2VyXHJcbiAgICogQHBhcmFtIHtAbGluayBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnN9XHJcbiAgICpcclxuICAgKiBUbyByZW5ldyBpZFRva2VuLCBwbGVhc2UgcGFzcyBjbGllbnRJZCBhcyB0aGUgb25seSBzY29wZSBpbiB0aGUgQXV0aGVudGljYXRpb24gUGFyYW1ldGVyc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlLjxBdXRoUmVzcG9uc2U+fSAtIGEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIHRoaXMgZnVuY3Rpb24gaGFzIGNvbXBsZXRlZCwgb3IgcmVqZWN0ZWQgaWYgYW4gZXJyb3Igd2FzIHJhaXNlZC4gUmV0dXJucyB0aGUge0BsaW5rIEF1dGhSZXNwb25zZX0gb2JqZWN0XHJcbiAgICovXHJcbiAgYWNxdWlyZVRva2VuUG9wdXAocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogUHJvbWlzZTxBdXRoUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBdXRoUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgLy8gVmFsaWRhdGUgYW5kIGZpbHRlciBzY29wZXMgKHRoZSB2YWxpZGF0ZSBmdW5jdGlvbiB3aWxsIHRocm93IGlmIHZhbGlkYXRpb24gZmFpbHMpXHJcbiAgICAgIHRoaXMudmFsaWRhdGVJbnB1dFNjb3BlKHJlcXVlc3Quc2NvcGVzLCB0cnVlKTtcclxuXHJcbiAgICAgIGNvbnN0IHNjb3BlID0gcmVxdWVzdC5zY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgIC8vIEdldCB0aGUgYWNjb3VudCBvYmplY3QgaWYgYSBzZXNzaW9uIGV4aXN0c1xyXG4gICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gcmVxdWVzdC5hY2NvdW50IHx8IHRoaXMuZ2V0QWNjb3VudCgpO1xyXG5cclxuICAgICAgLy8gSWYgYWxyZWFkeSBpbiBwcm9ncmVzcywgdGhyb3cgYW4gZXJyb3IgYW5kIHJlamVjdCB0aGUgcmVxdWVzdFxyXG4gICAgICBpZiAodGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlQWNxdWlyZVRva2VuSW5Qcm9ncmVzc0Vycm9yKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBJZiBubyBzZXNzaW9uIGV4aXN0cywgcHJvbXB0IHRoZSB1c2VyIHRvIGxvZ2luLlxyXG4gICAgICBpZiAoIWFjY291bnQgJiYgIShyZXF1ZXN0LnNpZCAgfHwgcmVxdWVzdC5sb2dpbkhpbnQpKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVzZXIgbG9naW4gaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlVXNlckxvZ2luUmVxdWlyZWRFcnJvcigpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gdHJhY2sgdGhlIGFjcXVpcmVUb2tlbiBwcm9ncmVzc1xyXG4gICAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSB0cnVlO1xyXG5cclxuICAgICAgbGV0IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnM7XHJcbiAgICAgIGNvbnN0IGFjcXVpcmVUb2tlbkF1dGhvcml0eSA9IHJlcXVlc3QuYXV0aG9yaXR5ID8gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShyZXF1ZXN0LmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSkgOiB0aGlzLmF1dGhvcml0eUluc3RhbmNlO1xyXG5cclxuICAgICAgLy8gT3BlbiB0aGUgcG9wdXAgd2luZG93XHJcbiAgICAgIGNvbnN0IHBvcFVwV2luZG93ID0gdGhpcy5vcGVuV2luZG93KFwiYWJvdXQ6YmxhbmtcIiwgXCJfYmxhbmtcIiwgMSwgdGhpcywgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgaWYgKCFwb3BVcFdpbmRvdykge1xyXG4gICAgICAgIC8vIFdlIHBhc3MgcmVqZWN0IHRvIG9wZW5XaW5kb3csIHNvIHdlIGFyZSByZWplY3RpbmcgdGhlcmUuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhY3F1aXJlVG9rZW5BdXRob3JpdHkucmVzb2x2ZUVuZHBvaW50c0FzeW5jKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gT24gZnVsbGZpbGxtZW50XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VUeXBlID0gdGhpcy5nZXRUb2tlblR5cGUoYWNjb3VudCwgcmVxdWVzdC5zY29wZXMsIGZhbHNlKTtcclxuICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMoXHJcbiAgICAgICAgICBhY3F1aXJlVG9rZW5BdXRob3JpdHksXHJcbiAgICAgICAgICB0aGlzLmNsaWVudElkLFxyXG4gICAgICAgICAgcmVxdWVzdC5zY29wZXMsXHJcbiAgICAgICAgICByZXNwb25zZVR5cGUsXHJcbiAgICAgICAgICB0aGlzLmdldFJlZGlyZWN0VXJpKCksXHJcbiAgICAgICAgICByZXF1ZXN0LnN0YXRlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gcG9wdWxhdGUgUXVlcnlQYXJhbWV0ZXJzIChzaWQvbG9naW5faGludC9kb21haW5faGludCkgYW5kIGFueSBvdGhlciBleHRyYVF1ZXJ5UGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxyXG4gICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IHRoaXMucG9wdWxhdGVRdWVyeVBhcmFtcyhhY2NvdW50LCByZXF1ZXN0LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNhY2hlRW50cmllcyhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFjY291bnQpO1xyXG5cclxuICAgICAgICAvLyBDb25zdHJ1Y3QgdGhlIHVybE5hdmlnYXRlXHJcbiAgICAgICAgbGV0IHVybE5hdmlnYXRlID0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmNyZWF0ZU5hdmlnYXRlVXJsKHJlcXVlc3Quc2NvcGVzKSArIENvbnN0YW50cy5yZXNwb25zZV9tb2RlX2ZyYWdtZW50O1xyXG5cclxuICAgICAgICB3aW5kb3cucmVuZXdTdGF0ZXMucHVzaChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5yZW5ld1Rva2VuO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFjayhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHNjb3BlLCByZXNvbHZlLCByZWplY3QpO1xyXG5cclxuICAgICAgICAvLyBvcGVuIHBvcHVwIHdpbmRvdyB0byB1cmxOYXZpZ2F0ZVxyXG4gICAgICAgIGlmIChwb3BVcFdpbmRvdykge1xyXG4gICAgICAgICAgcG9wVXBXaW5kb3cubG9jYXRpb24uaHJlZiA9IHVybE5hdmlnYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAvLyBFbmRwb2ludCByZXNvbHV0aW9uIGZhaWx1cmUgZXJyb3JcclxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuY29kZSArIFwiOlwiICsgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5lbmRwb2ludFJlc29sdXRpb25FcnJvci5kZXNjKTtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuY29kZSk7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuZGVzYyk7XHJcblxyXG4gICAgICAgIC8vIHJlamVjdCB0aGF0IGlzIHBhc3NlZCBpbiAtIFJFRE8gdGhpcyBpbiB0aGUgc3Vic2VxdWVudCByZWZhY3RvciwgcGFzc2luZyByZWplY3QgaXMgY29uZnVzaW5nXHJcbiAgICAgICAgaWYgKHJlamVjdCkge1xyXG4gICAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVFbmRwb2ludFJlc29sdXRpb25FcnJvcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvcFVwV2luZG93KSB7XHJcbiAgICAgICAgICAgIHBvcFVwV2luZG93LmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAvLyB0aGlzIGlzIGFuIGFsbCBjYXRjaCBmb3IgYW55IGZhaWx1cmUgZm9yIHRoZSBhYm92ZSBjb2RlIGV4Y2VwdCB0aGUgc3BlY2lmaWMgJ3JlamVjdCcgY2FsbFxyXG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcImNvdWxkIG5vdCByZXNvbHZlIGVuZHBvaW50c1wiKTtcclxuICAgICAgICByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVuZHBvaW50UmVzb2x1dGlvbkVycm9yKGVyci50b1N0cmluZygpKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICpcclxuICAgKiBVc2VkIHRvIHNlbmQgdGhlIHVzZXIgdG8gdGhlIHJlZGlyZWN0X3VyaSBhZnRlciBhdXRoZW50aWNhdGlvbiBpcyBjb21wbGV0ZS4gVGhlIHVzZXIncyBiZWFyZXIgdG9rZW4gaXMgYXR0YWNoZWQgdG8gdGhlIFVSSSBmcmFnbWVudCBhcyBhbiBpZF90b2tlbi9hY2Nlc3NfdG9rZW4gZmllbGQuXHJcbiAgICogVGhpcyBmdW5jdGlvbiBhbHNvIGNsb3NlcyB0aGUgcG9wdXAgd2luZG93IGFmdGVyIHJlZGlyZWN0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVybE5hdmlnYXRlXHJcbiAgICogQHBhcmFtIHRpdGxlXHJcbiAgICogQHBhcmFtIGludGVydmFsXHJcbiAgICogQHBhcmFtIGluc3RhbmNlXHJcbiAgICogQHBhcmFtIHJlc29sdmVcclxuICAgKiBAcGFyYW0gcmVqZWN0XHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgb3BlbldpbmRvdyh1cmxOYXZpZ2F0ZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBpbnRlcnZhbDogbnVtYmVyLCBpbnN0YW5jZTogdGhpcywgcmVzb2x2ZT86IEZ1bmN0aW9uLCByZWplY3Q/OiBGdW5jdGlvbik6IFdpbmRvdyB7XHJcbiAgICAvLyBHZW5lcmF0ZSBhIHBvcHVwIHdpbmRvd1xyXG4gICAgdmFyIHBvcHVwV2luZG93OiBXaW5kb3c7XHJcbiAgICB0cnkge1xyXG4gICAgICBwb3B1cFdpbmRvdyA9IHRoaXMub3BlblBvcHVwKHVybE5hdmlnYXRlLCB0aXRsZSwgQ29uc3RhbnRzLnBvcFVwV2lkdGgsIENvbnN0YW50cy5wb3BVcEhlaWdodCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGluc3RhbmNlLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICBpbnN0YW5jZS5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5jb2RlICsgXCI6XCIgKyBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuZGVzYyk7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmNvZGUpO1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmRlc2MpO1xyXG4gICAgICBpZiAocmVqZWN0KSB7XHJcbiAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVQb3B1cFdpbmRvd0Vycm9yKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1c2ggcG9wdXAgd2luZG93IGhhbmRsZSBvbnRvIHN0YWNrIGZvciB0cmFja2luZ1xyXG4gICAgd2luZG93Lm9wZW5lZFdpbmRvd3MucHVzaChwb3B1cFdpbmRvdyk7XHJcblxyXG4gICAgY29uc3QgcG9sbFRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgLy8gSWYgcG9wdXAgY2xvc2VkIG9yIGxvZ2luIGluIHByb2dyZXNzLCBjYW5jZWwgbG9naW5cclxuICAgICAgaWYgKHBvcHVwV2luZG93ICYmIHBvcHVwV2luZG93LmNsb3NlZCAmJiAoaW5zdGFuY2UubG9naW5JblByb2dyZXNzIHx8IGluc3RhbmNlLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MpKSB7XHJcbiAgICAgICAgaWYgKHJlamVjdCkge1xyXG4gICAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVVc2VyQ2FuY2VsbGVkRXJyb3IoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHBvbGxUaW1lcik7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZyYW1ld29yay5pc0FuZ3VsYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3QoXCJtc2FsOnBvcFVwQ2xvc2VkXCIsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckNhbmNlbGxlZEVycm9yLmNvZGUgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIgKyBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJDYW5jZWxsZWRFcnJvci5kZXNjKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnN0YW5jZS5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcG9wVXBXaW5kb3dMb2NhdGlvbiA9IHBvcHVwV2luZG93LmxvY2F0aW9uO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGUgcG9wdXAgaGFzaCBjaGFuZ2VzLCBjbG9zZSB0aGUgcG9wdXAgd2luZG93XHJcbiAgICAgICAgaWYgKHBvcFVwV2luZG93TG9jYXRpb24uaHJlZi5pbmRleE9mKHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSkgIT09IC0xKSB7XHJcbiAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChwb2xsVGltZXIpO1xyXG4gICAgICAgICAgaW5zdGFuY2UubG9naW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICBpbnN0YW5jZS5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiQ2xvc2luZyBwb3B1cCB3aW5kb3dcIik7XHJcbiAgICAgICAgICAvLyBUT0RPOiBDaGVjayBob3cgdGhpcyBjYW4gYmUgZXh0cmFjdGVkIGZvciBhbnkgZnJhbWV3b3JrIHNwZWNpZmljIGNvZGU/XHJcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcuZnJhbWV3b3JrLmlzQW5ndWxhcikge1xyXG4gICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0KFwibXNhbDpwb3BVcEhhc2hDaGFuZ2VkXCIsIHBvcFVwV2luZG93TG9jYXRpb24uaGFzaCk7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cub3BlbmVkV2luZG93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbmVkV2luZG93c1tpXS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBDcm9zcyBEb21haW4gdXJsIGNoZWNrIGVycm9yLlxyXG4gICAgICAgIC8vIFdpbGwgYmUgdGhyb3duIHVudGlsIEFBRCByZWRpcmVjdHMgdGhlIHVzZXIgYmFjayB0byB0aGUgYXBwXCJzIHJvb3QgcGFnZSB3aXRoIHRoZSB0b2tlbi5cclxuICAgICAgICAvLyBObyBuZWVkIHRvIGxvZyBvciB0aHJvdyB0aGlzIGVycm9yIGFzIGl0IHdpbGwgY3JlYXRlIHVubmVjZXNzYXJ5IHRyYWZmaWMuXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbnRlcnZhbCk7XHJcblxyXG4gICAgcmV0dXJuIHBvcHVwV2luZG93O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqXHJcbiAgICogQ29uZmlndXJlcyBwb3B1cCB3aW5kb3cgZm9yIGxvZ2luLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVybE5hdmlnYXRlXHJcbiAgICogQHBhcmFtIHRpdGxlXHJcbiAgICogQHBhcmFtIHBvcFVwV2lkdGhcclxuICAgKiBAcGFyYW0gcG9wVXBIZWlnaHRcclxuICAgKiBAaWdub3JlXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgb3BlblBvcHVwKHVybE5hdmlnYXRlOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIHBvcFVwV2lkdGg6IG51bWJlciwgcG9wVXBIZWlnaHQ6IG51bWJlcikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIGFkZGluZyB3aW5MZWZ0IGFuZCB3aW5Ub3AgdG8gYWNjb3VudCBmb3IgZHVhbCBtb25pdG9yXHJcbiAgICAgICAqIHVzaW5nIHNjcmVlbkxlZnQgYW5kIHNjcmVlblRvcCBmb3IgSUU4IGFuZCBlYXJsaWVyXHJcbiAgICAgICAqL1xyXG4gICAgICBjb25zdCB3aW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgPyB3aW5kb3cuc2NyZWVuTGVmdCA6IHdpbmRvdy5zY3JlZW5YO1xyXG4gICAgICBjb25zdCB3aW5Ub3AgPSB3aW5kb3cuc2NyZWVuVG9wID8gd2luZG93LnNjcmVlblRvcCA6IHdpbmRvdy5zY3JlZW5ZO1xyXG4gICAgICAvKipcclxuICAgICAgICogd2luZG93LmlubmVyV2lkdGggZGlzcGxheXMgYnJvd3NlciB3aW5kb3dcInMgaGVpZ2h0IGFuZCB3aWR0aCBleGNsdWRpbmcgdG9vbGJhcnNcclxuICAgICAgICogdXNpbmcgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIGZvciBJRTggYW5kIGVhcmxpZXJcclxuICAgICAgICovXHJcbiAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG4gICAgICBjb25zdCBsZWZ0ID0gKCh3aWR0aCAvIDIpIC0gKHBvcFVwV2lkdGggLyAyKSkgKyB3aW5MZWZ0O1xyXG4gICAgICBjb25zdCB0b3AgPSAoKGhlaWdodCAvIDIpIC0gKHBvcFVwSGVpZ2h0IC8gMikpICsgd2luVG9wO1xyXG5cclxuICAgICAgLy8gb3BlbiB0aGUgd2luZG93XHJcbiAgICAgIGNvbnN0IHBvcHVwV2luZG93ID0gd2luZG93Lm9wZW4odXJsTmF2aWdhdGUsIHRpdGxlLCBcIndpZHRoPVwiICsgcG9wVXBXaWR0aCArIFwiLCBoZWlnaHQ9XCIgKyBwb3BVcEhlaWdodCArIFwiLCB0b3A9XCIgKyB0b3AgKyBcIiwgbGVmdD1cIiArIGxlZnQpO1xyXG4gICAgICBpZiAoIXBvcHVwV2luZG93KSB7XHJcbiAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVBvcHVwV2luZG93RXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9wdXBXaW5kb3cuZm9jdXMpIHtcclxuICAgICAgICBwb3B1cFdpbmRvdy5mb2N1cygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcG9wdXBXaW5kb3c7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiZXJyb3Igb3BlbmluZyBwb3B1cCBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlUG9wdXBXaW5kb3dFcnJvcihlLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBTaWxlbnQgRmxvd1xyXG5cclxuICAvKipcclxuICAgKiBVc2UgdGhpcyBmdW5jdGlvbiB0byBvYnRhaW4gYSB0b2tlbiBiZWZvcmUgZXZlcnkgY2FsbCB0byB0aGUgQVBJIC8gcmVzb3VyY2UgcHJvdmlkZXJcclxuICAgKlxyXG4gICAqIE1TQUwgcmV0dXJuJ3MgYSBjYWNoZWQgdG9rZW4gd2hlbiBhdmFpbGFibGVcclxuICAgKiBPciBpdCBzZW5kJ3MgYSByZXF1ZXN0IHRvIHRoZSBTVFMgdG8gb2J0YWluIGEgbmV3IHRva2VuIHVzaW5nIGEgaGlkZGVuIGlmcmFtZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QGxpbmsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzfVxyXG4gICAqXHJcbiAgICogVG8gcmVuZXcgaWRUb2tlbiwgcGxlYXNlIHBhc3MgY2xpZW50SWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIFBhcmFtZXRlcnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZS48QXV0aFJlc3BvbnNlPn0gLSBhIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2hlbiB0aGlzIGZ1bmN0aW9uIGhhcyBjb21wbGV0ZWQsIG9yIHJlamVjdGVkIGlmIGFuIGVycm9yIHdhcyByYWlzZWQuIFJldHVybnMgdGhlIHtAbGluayBBdXRoUmVzcG9uc2V9IG9iamVjdFxyXG4gICAqXHJcbiAgICovXHJcbiAgQHJlc29sdmVUb2tlbk9ubHlJZk91dE9mSWZyYW1lXHJcbiAgYWNxdWlyZVRva2VuU2lsZW50KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IFByb21pc2U8QXV0aFJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAvLyBWYWxpZGF0ZSBhbmQgZmlsdGVyIHNjb3BlcyAodGhlIHZhbGlkYXRlIGZ1bmN0aW9uIHdpbGwgdGhyb3cgaWYgdmFsaWRhdGlvbiBmYWlscylcclxuICAgICAgdGhpcy52YWxpZGF0ZUlucHV0U2NvcGUocmVxdWVzdC5zY29wZXMsIHRydWUpO1xyXG5cclxuICAgICAgY29uc3Qgc2NvcGUgPSByZXF1ZXN0LnNjb3Blcy5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgLy8gaWYgdGhlIGRldmVsb3BlciBwYXNzZXMgYW4gYWNjb3VudCBnaXZlIGhpbSB0aGUgcHJpb3JpdHlcclxuICAgICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IHJlcXVlc3QuYWNjb3VudCB8fCB0aGlzLmdldEFjY291bnQoKTtcclxuXHJcbiAgICAgIC8vIGV4dHJhY3QgaWYgdGhlcmUgaXMgYW4gYWRhbElkVG9rZW4gc3Rhc2hlZCBpbiB0aGUgY2FjaGVcclxuICAgICAgY29uc3QgYWRhbElkVG9rZW4gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5hZGFsSWRUb2tlbik7XHJcblxyXG4gICAgICAvL2lmIHRoZXJlIGlzIG5vIGFjY291bnQgbG9nZ2VkIGluIGFuZCBubyBsb2dpbl9oaW50L3NpZCBpcyBwYXNzZWQgaW4gdGhlIHJlcXVlc3RcclxuICAgICAgaWYgKCFhY2NvdW50ICYmICEocmVxdWVzdC5zaWQgIHx8IHJlcXVlc3QubG9naW5IaW50KSAmJiBVdGlscy5pc0VtcHR5KGFkYWxJZFRva2VuKSApIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiVXNlciBsb2dpbiBpcyByZXF1aXJlZFwiKTtcclxuICAgICAgICByZXR1cm4gcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVVc2VyTG9naW5SZXF1aXJlZEVycm9yKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZVR5cGUgPSB0aGlzLmdldFRva2VuVHlwZShhY2NvdW50LCByZXF1ZXN0LnNjb3BlcywgdHJ1ZSk7XHJcblxyXG4gICAgICBsZXQgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxyXG4gICAgICAgIEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UocmVxdWVzdC5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpLFxyXG4gICAgICAgIHRoaXMuY2xpZW50SWQsXHJcbiAgICAgICAgcmVxdWVzdC5zY29wZXMsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlLFxyXG4gICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSxcclxuICAgICAgICByZXF1ZXN0ICYmIHJlcXVlc3Quc3RhdGVcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIHBvcHVsYXRlIFF1ZXJ5UGFyYW1ldGVycyAoc2lkL2xvZ2luX2hpbnQvZG9tYWluX2hpbnQpIGFuZCBhbnkgb3RoZXIgZXh0cmFRdWVyeVBhcmFtZXRlcnMgc2V0IGJ5IHRoZSBkZXZlbG9wZXJcclxuICAgICAgaWYgKFV0aWxzLmlzU1NPUGFyYW0ocmVxdWVzdCkgfHwgYWNjb3VudCkge1xyXG4gICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IHRoaXMucG9wdWxhdGVRdWVyeVBhcmFtcyhhY2NvdW50LCByZXF1ZXN0LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vaWYgdXNlciBkaWRuJ3QgcGFzcyBsb2dpbl9oaW50L3NpZCBhbmQgYWRhbCdzIGlkdG9rZW4gaXMgcHJlc2VudCwgZXh0cmFjdCB0aGUgbG9naW5faGludCBmcm9tIHRoZSBhZGFsSWRUb2tlblxyXG4gICAgICBlbHNlIGlmICghYWNjb3VudCAmJiAhVXRpbHMuaXNFbXB0eShhZGFsSWRUb2tlbikpIHtcclxuICAgICAgICAvLyBpZiBhZGFsSWRUb2tlbiBleGlzdHMsIGV4dHJhY3QgdGhlIFNTTyBpbmZvIGZyb20gdGhlIHNhbWVcclxuICAgICAgICBjb25zdCBhZGFsSWRUb2tlbk9iamVjdCA9IFV0aWxzLmV4dHJhY3RJZFRva2VuKGFkYWxJZFRva2VuKTtcclxuICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiQURBTCdzIGlkVG9rZW4gZXhpc3RzLiBFeHRyYWN0aW5nIGxvZ2luIGluZm9ybWF0aW9uIGZyb20gQURBTCdzIGlkVG9rZW4gXCIpO1xyXG4gICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IHRoaXMucG9wdWxhdGVRdWVyeVBhcmFtcyhhY2NvdW50LCBudWxsLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFkYWxJZFRva2VuT2JqZWN0KTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgdXNlckNvbnRhaW5lZENsYWltcyA9IHJlcXVlc3QuY2xhaW1zUmVxdWVzdCB8fCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuY2xhaW1zVmFsdWU7XHJcblxyXG4gICAgICBsZXQgYXV0aEVycjogQXV0aEVycm9yO1xyXG4gICAgICBsZXQgY2FjaGVSZXN1bHRSZXNwb25zZTtcclxuXHJcbiAgICAgIGlmICghdXNlckNvbnRhaW5lZENsYWltcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjYWNoZVJlc3VsdFJlc3BvbnNlID0gdGhpcy5nZXRDYWNoZWRUb2tlbihzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFjY291bnQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGF1dGhFcnIgPSBlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gcmVzb2x2ZS9yZWplY3QgYmFzZWQgb24gY2FjaGVSZXN1bHRcclxuICAgICAgaWYgKGNhY2hlUmVzdWx0UmVzcG9uc2UpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiVG9rZW4gaXMgYWxyZWFkeSBpbiBjYWNoZSBmb3Igc2NvcGU6XCIgKyBzY29wZSk7XHJcbiAgICAgICAgcmVzb2x2ZShjYWNoZVJlc3VsdFJlc3BvbnNlKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChhdXRoRXJyKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShhdXRoRXJyLmVycm9yQ29kZSArIFwiOlwiICsgYXV0aEVyci5lcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIHJlamVjdChhdXRoRXJyKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICAvLyBlbHNlIHByb2NlZWQgd2l0aCBsb2dpblxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpZiAodXNlckNvbnRhaW5lZENsYWltcykge1xyXG4gICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlNraXBwZWQgY2FjaGUgbG9va3VwIHNpbmNlIGNsYWltcyB3ZXJlIGdpdmVuLlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlRva2VuIGlzIG5vdCBpbiBjYWNoZSBmb3Igc2NvcGU6XCIgKyBzY29wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENhY2hlIHJlc3VsdCBjYW4gcmV0dXJuIG51bGwgaWYgY2FjaGUgaXMgZW1wdHkuIEluIHRoYXQgY2FzZSwgc2V0IGF1dGhvcml0eSB0byBkZWZhdWx0IHZhbHVlIGlmIG5vIGF1dGhvcml0eSBpcyBwYXNzZWQgdG8gdGhlIGFwaS5cclxuICAgICAgICBpZiAoIXNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHlJbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UgPSByZXF1ZXN0LmF1dGhvcml0eSA/IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UocmVxdWVzdC5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpIDogdGhpcy5hdXRob3JpdHlJbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2FjaGUgbWlzc1xyXG4gICAgICAgIHJldHVybiBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UucmVzb2x2ZUVuZHBvaW50c0FzeW5jKClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAvLyByZWZyZXNoIGF0dGVtcHQgd2l0aCBpZnJhbWVcclxuICAgICAgICAgIC8vIEFscmVhZHkgcmVuZXdpbmcgZm9yIHRoaXMgc2NvcGUsIGNhbGxiYWNrIHdoZW4gd2UgZ2V0IHRoZSB0b2tlbi5cclxuICAgICAgICAgIGlmICh3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJSZW5ldyB0b2tlbiBmb3Igc2NvcGU6IFwiICsgc2NvcGUgKyBcIiBpcyBpbiBwcm9ncmVzcy4gUmVnaXN0ZXJpbmcgY2FsbGJhY2tcIik7XHJcbiAgICAgICAgICAgIC8vIEFjdGl2ZSByZW5ld2FscyBjb250YWlucyB0aGUgc3RhdGUgZm9yIGVhY2ggcmVuZXdhbC5cclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV0sIHNjb3BlLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnNjb3BlcyAmJiByZXF1ZXN0LnNjb3Blcy5pbmRleE9mKHRoaXMuY2xpZW50SWQpID4gLTEgJiYgcmVxdWVzdC5zY29wZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgLy8gQXBwIHVzZXMgaWRUb2tlbiB0byBzZW5kIHRvIGFwaSBlbmRwb2ludHNcclxuICAgICAgICAgICAgICAvLyBEZWZhdWx0IHNjb3BlIGlzIHRyYWNrZWQgYXMgY2xpZW50SWQgdG8gc3RvcmUgdGhpcyB0b2tlblxyXG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJyZW5ld2luZyBpZFRva2VuXCIpO1xyXG4gICAgICAgICAgICAgIHRoaXMucmVuZXdJZFRva2VuKHJlcXVlc3Quc2NvcGVzLCByZXNvbHZlLCByZWplY3QsIGFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gcmVuZXcgYWNjZXNzIHRva2VuXHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcInJlbmV3aW5nIGFjY2Vzc3Rva2VuXCIpO1xyXG4gICAgICAgICAgICAgIHRoaXMucmVuZXdUb2tlbihyZXF1ZXN0LnNjb3BlcywgcmVzb2x2ZSwgcmVqZWN0LCBhY2NvdW50LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcImNvdWxkIG5vdCByZXNvbHZlIGVuZHBvaW50c1wiKTtcclxuICAgICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoZXJyLnRvU3RyaW5nKCkpKTtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBSZXR1cm5zIHdoZXRoZXIgY3VycmVudCB3aW5kb3cgaXMgaW4gaWZyYW0gZm9yIHRva2VuIHJlbmV3YWxcclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgcHVibGljIGlzSW5JZnJhbWUoKSB7XHJcbiAgICAgIHJldHVybiB3aW5kb3cucGFyZW50ICE9PSB3aW5kb3c7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogUmV0dXJucyB3aGV0aGVyIHBhcmVudCB3aW5kb3cgZXhpc3RzIGFuZCBoYXMgbXNhbFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcGFyZW50SXNNc2FsKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdyAmJiB3aW5kb3cucGFyZW50Lm1zYWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBpc0ludGVyYWN0aW9uUmVxdWlyZWQoZXJyb3JTdHJpbmc6IHN0cmluZykgOiBib29sZWFuIHtcclxuICAgIGlmIChlcnJvclN0cmluZy5pbmRleE9mKFwiaW50ZXJhY3Rpb25fcmVxdWlyZWRcIikgIT09IC0xIHx8XHJcbiAgICBlcnJvclN0cmluZy5pbmRleE9mKFwiY29uc2VudF9yZXF1aXJlZFwiKSAhPT0gLTEgfHxcclxuICAgIGVycm9yU3RyaW5nLmluZGV4T2YoXCJsb2dpbl9yZXF1aXJlZFwiKSAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQ2FsbGluZyBfbG9hZEZyYW1lIGJ1dCB3aXRoIGEgdGltZW91dCB0byBzaWduYWwgZmFpbHVyZSBpbiBsb2FkZnJhbWVTdGF0dXMuIENhbGxiYWNrcyBhcmUgbGVmdC5cclxuICAgKiByZWdpc3RlcmVkIHdoZW4gbmV0d29yayBlcnJvcnMgb2NjdXIgYW5kIHN1YnNlcXVlbnQgdG9rZW4gcmVxdWVzdHMgZm9yIHNhbWUgcmVzb3VyY2UgYXJlIHJlZ2lzdGVyZWQgdG8gdGhlIHBlbmRpbmcgcmVxdWVzdC5cclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBsb2FkSWZyYW1lVGltZW91dCh1cmxOYXZpZ2F0ZTogc3RyaW5nLCBmcmFtZU5hbWU6IHN0cmluZywgc2NvcGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgLy9zZXQgaWZyYW1lIHNlc3Npb24gdG8gcGVuZGluZ1xyXG4gICAgY29uc3QgZXhwZWN0ZWRTdGF0ZSA9IHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV07XHJcbiAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiU2V0IGxvYWRpbmcgc3RhdGUgdG8gcGVuZGluZyBmb3I6IFwiICsgc2NvcGUgKyBcIjpcIiArIGV4cGVjdGVkU3RhdGUpO1xyXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMucmVuZXdTdGF0dXMgKyBleHBlY3RlZFN0YXRlLCBDb25zdGFudHMudG9rZW5SZW5ld1N0YXR1c0luUHJvZ3Jlc3MpO1xyXG4gICAgdGhpcy5sb2FkRnJhbWUodXJsTmF2aWdhdGUsIGZyYW1lTmFtZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgZXhwZWN0ZWRTdGF0ZSkgPT09IENvbnN0YW50cy50b2tlblJlbmV3U3RhdHVzSW5Qcm9ncmVzcykge1xyXG4gICAgICAgIC8vIGZhaWwgdGhlIGlmcmFtZSBzZXNzaW9uIGlmIGl0XCJzIGluIHBlbmRpbmcgc3RhdGVcclxuICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiTG9hZGluZyBmcmFtZSBoYXMgdGltZWQgb3V0IGFmdGVyOiBcIiArICh0aGlzLmNvbmZpZy5zeXN0ZW0ubG9hZEZyYW1lVGltZW91dCAvIDEwMDApICsgXCIgc2Vjb25kcyBmb3Igc2NvcGUgXCIgKyBzY29wZSArIFwiOlwiICsgZXhwZWN0ZWRTdGF0ZSk7XHJcbiAgICAgICAgLy8gRXJyb3IgYWZ0ZXIgdGltZW91dFxyXG4gICAgICAgIGlmIChleHBlY3RlZFN0YXRlICYmIHdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0pIHtcclxuICAgICAgICAgIHdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0obnVsbCwgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVRva2VuUmVuZXdhbFRpbWVvdXRFcnJvcigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgZXhwZWN0ZWRTdGF0ZSwgQ29uc3RhbnRzLnRva2VuUmVuZXdTdGF0dXNDYW5jZWxsZWQpO1xyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzLmNvbmZpZy5zeXN0ZW0ubG9hZEZyYW1lVGltZW91dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogTG9hZHMgaWZyYW1lIHdpdGggYXV0aG9yaXphdGlvbiBlbmRwb2ludCBVUkxcclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBsb2FkRnJhbWUodXJsTmF2aWdhdGU6IHN0cmluZywgZnJhbWVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vIFRoaXMgdHJpY2sgb3ZlcmNvbWVzIGlmcmFtZSBuYXZpZ2F0aW9uIGluIElFXHJcbiAgICAvLyBJRSBkb2VzIG5vdCBsb2FkIHRoZSBwYWdlIGNvbnNpc3RlbnRseSBpbiBpZnJhbWVcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJMb2FkRnJhbWU6IFwiICsgZnJhbWVOYW1lKTtcclxuICAgIGNvbnN0IGZyYW1lQ2hlY2sgPSBmcmFtZU5hbWU7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZyYW1lSGFuZGxlID0gdGhpcy5hZGRIaWRkZW5JRnJhbWUoZnJhbWVDaGVjayk7XHJcbiAgICAgIGlmIChmcmFtZUhhbmRsZS5zcmMgPT09IFwiXCIgfHwgZnJhbWVIYW5kbGUuc3JjID09PSBcImFib3V0OmJsYW5rXCIpIHtcclxuICAgICAgICBmcmFtZUhhbmRsZS5zcmMgPSB1cmxOYXZpZ2F0ZTtcclxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKFwiRnJhbWUgTmFtZSA6IFwiICsgZnJhbWVOYW1lICsgXCIgTmF2aWdhdGVkIHRvOiBcIiArIHVybE5hdmlnYXRlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRoaXMuY29uZmlnLnN5c3RlbS5uYXZpZ2F0ZUZyYW1lV2FpdCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQWRkcyB0aGUgaGlkZGVuIGlmcmFtZSBmb3Igc2lsZW50IHRva2VuIHJlbmV3YWwuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgYWRkSGlkZGVuSUZyYW1lKGlmcmFtZUlkOiBzdHJpbmcpOiBIVE1MSUZyYW1lRWxlbWVudCB7XHJcbiAgICBpZiAodHlwZW9mIGlmcmFtZUlkID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJBZGQgbXNhbCBmcmFtZSB0byBkb2N1bWVudDpcIiArIGlmcmFtZUlkKTtcclxuICAgIGxldCBhZGFsRnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZnJhbWVJZCkgYXMgSFRNTElGcmFtZUVsZW1lbnQ7XHJcbiAgICBpZiAoIWFkYWxGcmFtZSkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAmJlxyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxyXG4gICAgICAgICh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRSA1LjBcIikgPT09IC0xKSkge1xyXG4gICAgICAgIGNvbnN0IGlmciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICAgICAgaWZyLnNldEF0dHJpYnV0ZShcImlkXCIsIGlmcmFtZUlkKTtcclxuICAgICAgICBpZnIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgaWZyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIGlmci5zdHlsZS53aWR0aCA9IGlmci5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcclxuICAgICAgICBpZnIuc3R5bGUuYm9yZGVyID0gXCIwXCI7XHJcbiAgICAgICAgYWRhbEZyYW1lID0gKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChpZnIpIGFzIEhUTUxJRnJhbWVFbGVtZW50KTtcclxuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5ICYmIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxpZnJhbWUgbmFtZT0nXCIgKyBpZnJhbWVJZCArIFwiJyBpZD0nXCIgKyBpZnJhbWVJZCArIFwiJyBzdHlsZT0nZGlzcGxheTpub25lJz48L2lmcmFtZT5cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh3aW5kb3cuZnJhbWVzICYmIHdpbmRvdy5mcmFtZXNbaWZyYW1lSWRdKSB7XHJcbiAgICAgICAgYWRhbEZyYW1lID0gd2luZG93LmZyYW1lc1tpZnJhbWVJZF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWRhbEZyYW1lO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBHZW5lcmFsIEhlbHBlcnNcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqXHJcbiAgICogQWRkcyBsb2dpbl9oaW50IHRvIGF1dGhvcml6YXRpb24gVVJMIHdoaWNoIGlzIHVzZWQgdG8gcHJlLWZpbGwgdGhlIHVzZXJuYW1lIGZpZWxkIG9mIHNpZ24gaW4gcGFnZSBmb3IgdGhlIHVzZXIgaWYga25vd24gYWhlYWQgb2YgdGltZVxyXG4gICAqIGRvbWFpbl9oaW50IGNhbiBiZSBvbmUgb2YgdXNlcnMvb3JnYW5pemF0aW9ucyB3aGljaCB3aGVuIGFkZGVkIHNraXBzIHRoZSBlbWFpbCBiYXNlZCBkaXNjb3ZlcnkgcHJvY2VzcyBvZiB0aGUgdXNlclxyXG4gICAqIGRvbWFpbl9yZXEgdXRpZCByZWNlaXZlZCBhcyBwYXJ0IG9mIHRoZSBjbGllbnRJbmZvXHJcbiAgICogbG9naW5fcmVxIHVpZCByZWNlaXZlZCBhcyBwYXJ0IG9mIGNsaWVudEluZm9cclxuICAgKiBBbHNvIGRvZXMgYSBzYW5pdHkgY2hlY2sgZm9yIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHBhc3NlZCBieSB0aGUgdXNlciB0byBlbnN1cmUgbm8gcmVwZWF0IHF1ZXJ5UGFyYW1ldGVyc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtAbGluayBBY2NvdW50fSBhY2NvdW50IC0gQWNjb3VudCBmb3Igd2hpY2ggdGhlIHRva2VuIGlzIHJlcXVlc3RlZFxyXG4gICAqIEBwYXJhbSBxdWVyeXBhcmFtc1xyXG4gICAqIEBwYXJhbSB7QGxpbmsgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnN9XHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgYWRkSGludFBhcmFtZXRlcnMoYWNjb3VudE9iajogQWNjb3VudCwgcVBhcmFtczogUVBEaWN0LCBzZXJ2ZXJSZXFQYXJhbXM6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKTogUVBEaWN0IHtcclxuXHJcbiAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gYWNjb3VudE9iaiB8fCB0aGlzLmdldEFjY291bnQoKTtcclxuXHJcbiAgICAvLyBUaGlzIGlzIGEgZmluYWwgY2hlY2sgZm9yIGFsbCBxdWVyeVBhcmFtcyBhZGRlZCBzbyBmYXI7IHByZWZlcmVuY2Ugb3JkZXI6IHNpZCA+IGxvZ2luX2hpbnRcclxuICAgIC8vIHNpZCBjYW5ub3QgYmUgcGFzc2VkIGFsb25nIHdpdGggbG9naW5faGludCBvciBkb21haW5faGludCwgaGVuY2Ugd2UgY2hlY2sgYm90aCBhcmUgbm90IHBvcHVsYXRlZCB5ZXQgaW4gcXVlcnlQYXJhbWV0ZXJzXHJcbiAgICBpZiAoYWNjb3VudCAmJiAhcVBhcmFtc1tTU09UeXBlcy5TSURdKSB7XHJcbiAgICAgIC8vIHNpZCAtIHBvcHVsYXRlIG9ubHkgaWYgbG9naW5faGludCBpcyBub3QgYWxyZWFkeSBwb3B1bGF0ZWQgYW5kIHRoZSBhY2NvdW50IGhhcyBzaWRcclxuICAgICAgY29uc3QgcG9wdWxhdGVTSUQgPSAhcVBhcmFtc1tTU09UeXBlcy5MT0dJTl9ISU5UXSAmJiBhY2NvdW50LnNpZCAmJiBzZXJ2ZXJSZXFQYXJhbXMucHJvbXB0VmFsdWUgPT09IFByb21wdFN0YXRlLk5PTkU7XHJcbiAgICAgIGlmIChwb3B1bGF0ZVNJRCkge1xyXG4gICAgICAgICAgcVBhcmFtcyA9IFV0aWxzLmFkZFNTT1BhcmFtZXRlcihTU09UeXBlcy5TSUQsIGFjY291bnQuc2lkLCBxUGFyYW1zKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBsb2dpbl9oaW50IC0gYWNjb3VudC51c2VyTmFtZVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBwb3B1bGF0ZUxvZ2luSGludCA9ICFxUGFyYW1zW1NTT1R5cGVzLkxPR0lOX0hJTlRdICYmIGFjY291bnQudXNlck5hbWUgJiYgIVV0aWxzLmlzRW1wdHkoYWNjb3VudC51c2VyTmFtZSk7XHJcbiAgICAgICAgaWYgKHBvcHVsYXRlTG9naW5IaW50KSB7XHJcbiAgICAgICAgICBxUGFyYW1zID0gVXRpbHMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLkxPR0lOX0hJTlQsIGFjY291bnQudXNlck5hbWUsIHFQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcG9wdWxhdGVSZXFQYXJhbXMgPSAhcVBhcmFtc1tTU09UeXBlcy5ET01BSU5fUkVRXSAmJiAhcVBhcmFtc1tTU09UeXBlcy5MT0dJTl9SRVFdO1xyXG4gICAgICBpZiAocG9wdWxhdGVSZXFQYXJhbXMpIHtcclxuICAgICAgICBxUGFyYW1zID0gVXRpbHMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLkhPTUVBQ0NPVU5UX0lELCBhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllciwgcVBhcmFtcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcVBhcmFtcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBVc2VkIHRvIHJlZGlyZWN0IHRoZSBicm93c2VyIHRvIHRoZSBTVFMgYXV0aG9yaXphdGlvbiBlbmRwb2ludFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxOYXZpZ2F0ZSAtIFVSTCBvZiB0aGUgYXV0aG9yaXphdGlvbiBlbmRwb2ludFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcHJvbXB0VXNlcih1cmxOYXZpZ2F0ZTogc3RyaW5nKSB7XHJcbiAgICAvLyBOYXZpZ2F0ZSBpZiB2YWxpZCBVUkxcclxuICAgIGlmICh1cmxOYXZpZ2F0ZSAmJiAhVXRpbHMuaXNFbXB0eSh1cmxOYXZpZ2F0ZSkpIHtcclxuICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIk5hdmlnYXRlIHRvOlwiICsgdXJsTmF2aWdhdGUpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh1cmxOYXZpZ2F0ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIk5hdmlnYXRlIHVybCBpcyBlbXB0eVwiKTtcclxuICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIk5hdmlnYXRlIHVybCBpcyBlbXB0eVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBVc2VkIHRvIGFkZCB0aGUgZGV2ZWxvcGVyIHJlcXVlc3RlZCBjYWxsYmFjayB0byB0aGUgYXJyYXkgb2YgY2FsbGJhY2tzIGZvciB0aGUgc3BlY2lmaWVkIHNjb3Blcy4gVGhlIHVwZGF0ZWQgYXJyYXkgaXMgc3RvcmVkIG9uIHRoZSB3aW5kb3cgb2JqZWN0XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cGVjdGVkU3RhdGUgLSBVbmlxdWUgc3RhdGUgaWRlbnRpZmllciAoZ3VpZCkuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjb3BlIC0gRGV2ZWxvcGVyIHJlcXVlc3RlZCBwZXJtaXNzaW9ucy4gTm90IGFsbCBzY29wZXMgYXJlIGd1YXJhbnRlZWQgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbiByZXR1cm5lZC5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIC0gVGhlIHJlc29sdmUgZnVuY3Rpb24gb2YgdGhlIHByb21pc2Ugb2JqZWN0LlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCAtIFRoZSByZWplY3QgZnVuY3Rpb24gb2YgdGhlIHByb21pc2Ugb2JqZWN0LlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcml2YXRlIHJlZ2lzdGVyQ2FsbGJhY2soZXhwZWN0ZWRTdGF0ZTogc3RyaW5nLCBzY29wZTogc3RyaW5nLCByZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgLy8gdHJhY2sgYWN0aXZlIHJlbmV3YWxzXHJcbiAgICB3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdID0gZXhwZWN0ZWRTdGF0ZTtcclxuXHJcbiAgICAvLyBpbml0aWFsaXplIGNhbGxiYWNrcyBtYXBwZWQgYXJyYXlcclxuICAgIGlmICghd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKSB7XHJcbiAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdID0gW107XHJcbiAgICB9XHJcbiAgICAvLyBpbmRleGluZyBvbiB0aGUgY3VycmVudCBzdGF0ZSwgcHVzaCB0aGUgY2FsbGJhY2sgcGFyYW1zIHRvIGNhbGxiYWNrcyBtYXBwZWRcclxuICAgIHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXS5wdXNoKHsgcmVzb2x2ZTogcmVzb2x2ZSwgcmVqZWN0OiByZWplY3QgfSk7XHJcblxyXG4gICAgLy8gU3RvcmUgdGhlIHNlcnZlciBlc3BvbnNlIGluIHRoZSBjdXJyZW50IHdpbmRvdz8/XHJcbiAgICBpZiAoIXdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0pIHtcclxuICAgICAgd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSA9XHJcbiAgICAgIChyZXNwb25zZTogQXV0aFJlc3BvbnNlLCBlcnJvcjogQXV0aEVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gcmVzZXQgYWN0aXZlIHJlbmV3YWxzXHJcbiAgICAgICAgd2luZG93LmFjdGl2ZVJlbmV3YWxzW3Njb3BlXSA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIGZvciBhbGwgcHJvbWlzZU1hcHBlZHRvUmVuZXdTdGF0ZXMgZm9yIGEgZ2l2ZW4gJ3N0YXRlJyAtIGNhbGwgdGhlIHJlamVjdC9yZXNvbHZlIHdpdGggZXJyb3IvdG9rZW4gcmVzcGVjdGl2ZWx5XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0ubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdW2ldLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXVtpXS5yZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiRXJyb3IgYW5kIHJlc3BvbnNlIGFyZSBib3RoIG51bGxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlc2V0XHJcbiAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdID0gbnVsbDtcclxuICAgICAgICB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdID0gbnVsbDtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gTG9nb3V0XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0byBsb2cgb3V0IHRoZSBjdXJyZW50IHVzZXIsIGFuZCByZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgcG9zdExvZ291dFJlZGlyZWN0VXJpLlxyXG4gICAqIERlZmF1bHQgYmVoYXZpb3VyIGlzIHRvIHJlZGlyZWN0IHRoZSB1c2VyIHRvIGB3aW5kb3cubG9jYXRpb24uaHJlZmAuXHJcbiAgICovXHJcbiAgbG9nb3V0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhckNhY2hlKCk7XHJcbiAgICB0aGlzLmFjY291bnQgPSBudWxsO1xyXG4gICAgbGV0IGxvZ291dCA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy5nZXRQb3N0TG9nb3V0UmVkaXJlY3RVcmkoKSkge1xyXG4gICAgICBsb2dvdXQgPSBcInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmdldFBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpKTtcclxuICAgIH1cclxuICAgIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UucmVzb2x2ZUVuZHBvaW50c0FzeW5jKCkudGhlbihhdXRob3JpdHkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVybE5hdmlnYXRlID0gYXV0aG9yaXR5LkVuZFNlc3Npb25FbmRwb2ludFxyXG4gICAgICAgICAgICA/IGAke2F1dGhvcml0eS5FbmRTZXNzaW9uRW5kcG9pbnR9PyR7bG9nb3V0fWBcclxuICAgICAgICAgICAgOiBgJHt0aGlzLmF1dGhvcml0eX1vYXV0aDIvdjIuMC9sb2dvdXQ/JHtsb2dvdXR9YDtcclxuICAgICAgICB0aGlzLnByb21wdFVzZXIodXJsTmF2aWdhdGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQ2xlYXIgYWxsIGFjY2VzcyB0b2tlbnMgaW4gdGhlIGNhY2hlLlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgY2xlYXJDYWNoZSgpOiB2b2lkIHtcclxuICAgIHdpbmRvdy5yZW5ld1N0YXRlcyA9IFtdO1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW5JdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy5ob21lQWNjb3VudElkZW50aWZpZXIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2Nlc3NUb2tlbkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5JdGVtc1tpXS5rZXkpKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlc2V0Q2FjaGVJdGVtcygpO1xyXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2UuY2xlYXJDb29raWUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBDbGVhciBhIGdpdmVuIGFjY2VzcyB0b2tlbiBmcm9tIHRoZSBjYWNoZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhY2Nlc3NUb2tlblxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBjbGVhckNhY2hlRm9yU2NvcGUoYWNjZXNzVG9rZW46IHN0cmluZykge1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW5JdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy5ob21lQWNjb3VudElkZW50aWZpZXIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2Nlc3NUb2tlbkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHRva2VuID0gYWNjZXNzVG9rZW5JdGVtc1tpXTtcclxuICAgICAgICBpZiAodG9rZW4udmFsdWUuYWNjZXNzVG9rZW4gPT09IGFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkodG9rZW4ua2V5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBSZXNwb25zZVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogVXNlZCB0byBjYWxsIHRoZSBjb25zdHJ1Y3RvciBjYWxsYmFjayB3aXRoIHRoZSB0b2tlbi9lcnJvclxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaD13aW5kb3cubG9jYXRpb24uaGFzaF0gLSBIYXNoIGZyYWdtZW50IG9mIFVybC5cclxuICAgKi9cclxuICBwcml2YXRlIHByb2Nlc3NDYWxsQmFjayhoYXNoOiBzdHJpbmcsIHN0YXRlSW5mbzogUmVzcG9uc2VTdGF0ZUluZm8sIHBhcmVudENhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJQcm9jZXNzaW5nIHRoZSBjYWxsYmFjayBmcm9tIHJlZGlyZWN0IHJlc3BvbnNlXCIpO1xyXG4gICAgLy8gZ2V0IHRoZSBzdGF0ZSBpbmZvIGZyb20gdGhlIGhhc2hcclxuICAgIGlmICghc3RhdGVJbmZvKSB7XHJcbiAgICAgIHN0YXRlSW5mbyA9IHRoaXMuZ2V0UmVzcG9uc2VTdGF0ZShoYXNoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVzcG9uc2UgOiBBdXRoUmVzcG9uc2U7XHJcbiAgICBsZXQgYXV0aEVyciA6IEF1dGhFcnJvcjtcclxuICAgIC8vIFNhdmUgdGhlIHRva2VuIGluZm8gZnJvbSB0aGUgaGFzaFxyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzcG9uc2UgPSB0aGlzLnNhdmVUb2tlbkZyb21IYXNoKGhhc2gsIHN0YXRlSW5mbyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgYXV0aEVyciA9IGVycjtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW1vdmUgaGFzaCBmcm9tIHRoZSBjYWNoZVxyXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShDb25zdGFudHMudXJsSGFzaCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gQ2xlYXIgdGhlIGNvb2tpZSBpbiB0aGUgaGFzaFxyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5jbGVhckNvb2tpZSgpO1xyXG4gICAgICBjb25zdCBhY2NvdW50U3RhdGU6IHN0cmluZyA9IHRoaXMuZ2V0QWNjb3VudFN0YXRlKHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmICgoc3RhdGVJbmZvLnJlcXVlc3RUeXBlID09PSBDb25zdGFudHMucmVuZXdUb2tlbikgfHwgcmVzcG9uc2UuYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAgIGlmICh3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIldpbmRvdyBpcyBpbiBpZnJhbWUsIGFjcXVpcmluZyB0b2tlbiBzaWxlbnRseVwiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJhY3F1aXJpbmcgdG9rZW4gaW50ZXJhY3RpdmUgaW4gcHJvZ3Jlc3NcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXNwb25zZS50b2tlblR5cGUgPSBDb25zdGFudHMuYWNjZXNzVG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0YXRlSW5mby5yZXF1ZXN0VHlwZSA9PT0gQ29uc3RhbnRzLmxvZ2luKSB7XHJcbiAgICAgICAgICByZXNwb25zZS50b2tlblR5cGUgPSBDb25zdGFudHMuaWRUb2tlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFwYXJlbnRDYWxsYmFjaykge1xyXG4gICAgICAgICAgdGhpcy5yZWRpcmVjdFN1Y2Nlc3NIYW5kbGVyKHJlc3BvbnNlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoIXBhcmVudENhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdEVycm9ySGFuZGxlcihhdXRoRXJyLCBidWlsZFJlc3BvbnNlU3RhdGVPbmx5KGFjY291bnRTdGF0ZSkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcGFyZW50Q2FsbGJhY2socmVzcG9uc2UsIGF1dGhFcnIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiRXJyb3Igb2NjdXJyZWQgaW4gdG9rZW4gcmVjZWl2ZWQgY2FsbGJhY2sgZnVuY3Rpb246IFwiICsgZXJyKTtcclxuICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVycm9ySW5DYWxsYmFja0Z1bmN0aW9uKGVyci50b1N0cmluZygpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBUaGlzIG1ldGhvZCBtdXN0IGJlIGNhbGxlZCBmb3IgcHJvY2Vzc2luZyB0aGUgcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSB0aGUgU1RTLiBJdCBleHRyYWN0cyB0aGUgaGFzaCwgcHJvY2Vzc2VzIHRoZSB0b2tlbiBvciBlcnJvciBpbmZvcm1hdGlvbiBhbmQgc2F2ZXMgaXQgaW4gdGhlIGNhY2hlLiBJdCB0aGVuXHJcbiAgICogY2FsbHMgdGhlIHJlZ2lzdGVyZWQgY2FsbGJhY2tzIGluIGNhc2Ugb2YgcmVkaXJlY3Qgb3IgcmVzb2x2ZXMgdGhlIHByb21pc2VzIHdpdGggdGhlIHJlc3VsdC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2hhc2g9d2luZG93LmxvY2F0aW9uLmhhc2hdIC0gSGFzaCBmcmFnbWVudCBvZiBVcmwuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVBdXRoZW50aWNhdGlvblJlc3BvbnNlKGhhc2g6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgLy8gcmV0cmlldmUgdGhlIGhhc2hcclxuICAgIGlmIChoYXNoID09IG51bGwpIHtcclxuICAgICAgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzZWxmID0gbnVsbDtcclxuICAgIGxldCBpc1BvcHVwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBsZXQgaXNXaW5kb3dPcGVuZXJNc2FsID0gZmFsc2U7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgd2luZG93IG9wZW5lZCB0aGUgaUZyYW1lL3BvcHVwXHJcbiAgICB0cnkge1xyXG4gICAgICBpc1dpbmRvd09wZW5lck1zYWwgPSB3aW5kb3cub3BlbmVyICYmIHdpbmRvdy5vcGVuZXIubXNhbCAmJiB3aW5kb3cub3BlbmVyLm1zYWwgIT09IHdpbmRvdy5tc2FsO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIC8vIGVyciA9IFNlY3VyaXR5RXJyb3I6IEJsb2NrZWQgYSBmcmFtZSB3aXRoIG9yaWdpbiBcIlt1cmxdXCIgZnJvbSBhY2Nlc3NpbmcgYSBjcm9zcy1vcmlnaW4gZnJhbWUuXHJcbiAgICAgIGlzV2luZG93T3BlbmVyTXNhbCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCB0aGUgc2VsZiB0byB0aGUgd2luZG93IHRoYXQgY3JlYXRlZCB0aGUgcG9wdXAvaWZyYW1lXHJcbiAgICBpZiAoaXNXaW5kb3dPcGVuZXJNc2FsKSB7XHJcbiAgICAgIHNlbGYgPSB3aW5kb3cub3BlbmVyLm1zYWw7XHJcbiAgICAgIGlzUG9wdXAgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cucGFyZW50ICYmIHdpbmRvdy5wYXJlbnQubXNhbCkge1xyXG4gICAgICBzZWxmID0gd2luZG93LnBhcmVudC5tc2FsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmICh3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cpLCBieSB1c2luZyBzZWxmLCB3aW5kb3cucGFyZW50IGJlY29tZXMgZXF1YWwgdG8gd2luZG93IGluIGdldFJlc3BvbnNlU3RhdGUgbWV0aG9kIHNwZWNpZmljYWxseVxyXG4gICAgY29uc3Qgc3RhdGVJbmZvID0gc2VsZi5nZXRSZXNwb25zZVN0YXRlKGhhc2gpO1xyXG5cclxuICAgIGxldCB0b2tlblJlc3BvbnNlQ2FsbGJhY2s6IChyZXNwb25zZTogQXV0aFJlc3BvbnNlLCBlcnJvcjogQXV0aEVycm9yKSA9PiB2b2lkID0gbnVsbDtcclxuXHJcbiAgICBzZWxmLmxvZ2dlci5pbmZvKFwiUmV0dXJuZWQgZnJvbSByZWRpcmVjdCB1cmxcIik7XHJcbiAgICAvLyBJZiBwYXJlbnQgd2luZG93IGlzIHRoZSBtc2FsIGluc3RhbmNlIHdoaWNoIG9wZW5lZCB0aGUgY3VycmVudCB3aW5kb3cgKGlmcmFtZSlcclxuICAgIGlmICh0aGlzLnBhcmVudElzTXNhbCgpKSB7XHJcbiAgICAgICAgdG9rZW5SZXNwb25zZUNhbGxiYWNrID0gd2luZG93LnBhcmVudC5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbc3RhdGVJbmZvLnN0YXRlXTtcclxuICAgIH1cclxuICAgIC8vIEN1cnJlbnQgd2luZG93IGlzIHdpbmRvdyBvcGVuZXIgKHBvcHVwKVxyXG4gICAgZWxzZSBpZiAoaXNXaW5kb3dPcGVuZXJNc2FsKSB7XHJcbiAgICAgICAgdG9rZW5SZXNwb25zZUNhbGxiYWNrID0gd2luZG93Lm9wZW5lci5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbc3RhdGVJbmZvLnN0YXRlXTtcclxuICAgIH1cclxuICAgIC8vIFJlZGlyZWN0IGNhc2VzXHJcbiAgICBlbHNlIHtcclxuICAgICAgdG9rZW5SZXNwb25zZUNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgLy8gaWYgc2V0IHRvIG5hdmlnYXRlIHRvIGxvZ2luUmVxdWVzdCBwYWdlIHBvc3QgbG9naW5cclxuICAgICAgaWYgKHNlbGYuY29uZmlnLmF1dGgubmF2aWdhdGVUb0xvZ2luUmVxdWVzdFVybCkge1xyXG4gICAgICAgIHNlbGYuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnVybEhhc2gsIGhhc2gpO1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFyZW50ID09PSB3aW5kb3cgJiYgIWlzUG9wdXApIHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gc2VsZi5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubG9naW5SZXF1ZXN0LCBzZWxmLmluQ29va2llKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQpIHtcclxuICAgICAgICAvLyBXZSByZWFjaGVkIHRoaXMgcG9pbnQgdG9vIGVhcmx5IC0gY2FjaGUgaGFzaCwgcmV0dXJuIGFuZCBwcm9jZXNzIGluIGhhbmRsZVJlZGlyZWN0Q2FsbGJhY2tzXHJcbiAgICAgICAgc2VsZi5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMudXJsSGFzaCwgaGFzaCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZi5wcm9jZXNzQ2FsbEJhY2soaGFzaCwgc3RhdGVJbmZvLCB0b2tlblJlc3BvbnNlQ2FsbGJhY2spO1xyXG5cclxuICAgIC8vIElmIGN1cnJlbnQgd2luZG93IGlzIG9wZW5lciwgY2xvc2UgYWxsIHdpbmRvd3NcclxuICAgIGlmIChpc1dpbmRvd09wZW5lck1zYWwpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cub3BlbmVyLm9wZW5lZFdpbmRvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB3aW5kb3cub3BlbmVyLm9wZW5lZFdpbmRvd3NbaV0uY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIFJldHVybnMgZGVzZXJpYWxpemVkIHBvcnRpb24gb2YgVVJMIGhhc2hcclxuICAgKiBAcGFyYW0gaGFzaFxyXG4gICAqL1xyXG4gIHByaXZhdGUgZGVzZXJpYWxpemVIYXNoKGhhc2g6IHN0cmluZykge1xyXG4gICAgaGFzaCA9IHRoaXMuZ2V0SGFzaChoYXNoKTtcclxuICAgIHJldHVybiBVdGlscy5kZXNlcmlhbGl6ZShoYXNoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBDcmVhdGVzIGEgc3RhdGVJbmZvIG9iamVjdCBmcm9tIHRoZSBVUkwgZnJhZ21lbnQgYW5kIHJldHVybnMgaXQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2ggIC0gIEhhc2ggcGFzc2VkIGZyb20gcmVkaXJlY3QgcGFnZVxyXG4gICAqIEByZXR1cm5zIHtUb2tlblJlc3BvbnNlfSBhbiBvYmplY3QgY3JlYXRlZCBmcm9tIHRoZSByZWRpcmVjdCByZXNwb25zZSBmcm9tIEFBRCBjb21wcmlzaW5nIG9mIHRoZSBrZXlzIC0gcGFyYW1ldGVycywgcmVxdWVzdFR5cGUsIHN0YXRlTWF0Y2gsIHN0YXRlUmVzcG9uc2UgYW5kIHZhbGlkLlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgZ2V0UmVzcG9uc2VTdGF0ZShoYXNoOiBzdHJpbmcpOiBSZXNwb25zZVN0YXRlSW5mbyB7XHJcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gdGhpcy5kZXNlcmlhbGl6ZUhhc2goaGFzaCk7XHJcbiAgICBsZXQgc3RhdGVSZXNwb25zZTogUmVzcG9uc2VTdGF0ZUluZm87XHJcbiAgICBpZiAoIXBhcmFtZXRlcnMpIHtcclxuICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIkhhc2ggd2FzIG5vdCBwYXJzZWQgY29ycmVjdGx5LlwiKTtcclxuICAgIH1cclxuICAgIGlmIChwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KFwic3RhdGVcIikpIHtcclxuICAgICAgc3RhdGVSZXNwb25zZSA9IHtcclxuICAgICAgICByZXF1ZXN0VHlwZTogQ29uc3RhbnRzLnVua25vd24sXHJcbiAgICAgICAgc3RhdGU6IHBhcmFtZXRlcnMuc3RhdGUsXHJcbiAgICAgICAgc3RhdGVNYXRjaDogZmFsc2VcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJIYXNoIGRvZXMgbm90IGNvbnRhaW4gc3RhdGUuXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gYXN5bmMgY2FsbHMgY2FuIGZpcmUgaWZyYW1lIGFuZCBsb2dpbiByZXF1ZXN0IGF0IHRoZSBzYW1lIHRpbWUgaWYgZGV2ZWxvcGVyIGRvZXMgbm90IHVzZSB0aGUgQVBJIGFzIGV4cGVjdGVkXHJcbiAgICAvLyBpbmNvbWluZyBjYWxsYmFjayBuZWVkcyB0byBiZSBsb29rZWQgdXAgdG8gZmluZCB0aGUgcmVxdWVzdCB0eXBlXHJcblxyXG4gICAgLy8gbG9naW5SZWRpcmVjdFxyXG4gICAgaWYgKHN0YXRlUmVzcG9uc2Uuc3RhdGUgPT09IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnN0YXRlTG9naW4sIHRoaXMuaW5Db29raWUpIHx8IHN0YXRlUmVzcG9uc2Uuc3RhdGUgPT09IHRoaXMuc2lsZW50QXV0aGVudGljYXRpb25TdGF0ZSkgeyAvLyBsb2dpblJlZGlyZWN0XHJcbiAgICAgIHN0YXRlUmVzcG9uc2UucmVxdWVzdFR5cGUgPSBDb25zdGFudHMubG9naW47XHJcbiAgICAgIHN0YXRlUmVzcG9uc2Uuc3RhdGVNYXRjaCA9IHRydWU7XHJcbiAgICAgIHJldHVybiBzdGF0ZVJlc3BvbnNlO1xyXG4gICAgfVxyXG4gICAgLy8gYWNxdWlyZVRva2VuUmVkaXJlY3RcclxuICAgIGVsc2UgaWYgKHN0YXRlUmVzcG9uc2Uuc3RhdGUgPT09IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnN0YXRlQWNxdWlyZVRva2VuLCB0aGlzLmluQ29va2llKSkgeyAvL2FjcXVpcmVUb2tlblJlZGlyZWN0XHJcbiAgICAgIHN0YXRlUmVzcG9uc2UucmVxdWVzdFR5cGUgPSBDb25zdGFudHMucmVuZXdUb2tlbjtcclxuICAgICAgc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0YXRlUmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXh0ZXJuYWwgYXBpIHJlcXVlc3RzIG1heSBoYXZlIG1hbnkgcmVuZXd0b2tlbiByZXF1ZXN0cyBmb3IgZGlmZmVyZW50IHJlc291cmNlXHJcbiAgICBpZiAoIXN0YXRlUmVzcG9uc2Uuc3RhdGVNYXRjaCkge1xyXG4gICAgICBzdGF0ZVJlc3BvbnNlLnJlcXVlc3RUeXBlID0gd2luZG93LnJlcXVlc3RUeXBlO1xyXG4gICAgICBjb25zdCBzdGF0ZXNJblBhcmVudENvbnRleHQgPSB3aW5kb3cucmVuZXdTdGF0ZXM7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzSW5QYXJlbnRDb250ZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlc0luUGFyZW50Q29udGV4dFtpXSA9PT0gc3RhdGVSZXNwb25zZS5zdGF0ZSkge1xyXG4gICAgICAgICAgc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGF0ZVJlc3BvbnNlO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBUb2tlbiBQcm9jZXNzaW5nIChFeHRyYWN0IHRvIFRva2VuUHJvY2Vzc2luZy50cylcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIFVzZWQgdG8gZ2V0IHRva2VuIGZvciB0aGUgc3BlY2lmaWVkIHNldCBvZiBzY29wZXMgZnJvbSB0aGUgY2FjaGVcclxuICAgKiBAcGFyYW0ge0BsaW5rIFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzfSAtIFJlcXVlc3Qgc2VudCB0byB0aGUgU1RTIHRvIG9idGFpbiBhbiBpZF90b2tlbi9hY2Nlc3NfdG9rZW5cclxuICAgKiBAcGFyYW0ge0FjY291bnR9IGFjY291bnQgLSBBY2NvdW50IGZvciB3aGljaCB0aGUgc2NvcGVzIHdlcmUgcmVxdWVzdGVkXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRDYWNoZWRUb2tlbihzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLCBhY2NvdW50OiBBY2NvdW50KTogQXV0aFJlc3BvbnNlIHtcclxuICAgIGxldCBhY2Nlc3NUb2tlbkNhY2hlSXRlbTogQWNjZXNzVG9rZW5DYWNoZUl0ZW0gPSBudWxsO1xyXG4gICAgY29uc3Qgc2NvcGVzID0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnNjb3BlcztcclxuXHJcbiAgICAvLyBmaWx0ZXIgYnkgY2xpZW50SWQgYW5kIGFjY291bnRcclxuICAgIGNvbnN0IHRva2VuQ2FjaGVJdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2Vucyh0aGlzLmNsaWVudElkLCBhY2NvdW50ID8gYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIgOiBudWxsKTtcclxuXHJcbiAgICAvLyBObyBtYXRjaCBmb3VuZCBhZnRlciBpbml0aWFsIGZpbHRlcmluZ1xyXG4gICAgaWYgKHRva2VuQ2FjaGVJdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsdGVyZWRJdGVtczogQXJyYXk8QWNjZXNzVG9rZW5DYWNoZUl0ZW0+ID0gW107XHJcblxyXG4gICAgLy8gaWYgbm8gYXV0aG9yaXR5IHBhc3NlZFxyXG4gICAgaWYgKCFzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5KSB7XHJcbiAgICAgIC8vIGZpbHRlciBieSBzY29wZVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlSXRlbSA9IHRva2VuQ2FjaGVJdGVtc1tpXTtcclxuICAgICAgICBjb25zdCBjYWNoZWRTY29wZXMgPSBjYWNoZUl0ZW0ua2V5LnNjb3Blcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgaWYgKFV0aWxzLmNvbnRhaW5zU2NvcGUoY2FjaGVkU2NvcGVzLCBzY29wZXMpKSB7XHJcbiAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2goY2FjaGVJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGlmIG9ubHkgb25lIGNhY2hlZCB0b2tlbiBmb3VuZFxyXG4gICAgICBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBhY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IGZpbHRlcmVkSXRlbXNbMF07XHJcbiAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlID0gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShhY2Nlc3NUb2tlbkNhY2hlSXRlbS5rZXkuYXV0aG9yaXR5LCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KTtcclxuICAgICAgfVxyXG4gICAgICAvLyBpZiBtb3JlIHRoYW4gb25lIGNhY2hlZCB0b2tlbiBpcyBmb3VuZFxyXG4gICAgICBlbHNlIGlmIChmaWx0ZXJlZEl0ZW1zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTXVsdGlwbGVNYXRjaGluZ1Rva2Vuc0luQ2FjaGVFcnJvcihzY29wZXMudG9TdHJpbmcoKSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gaWYgbm8gbWF0Y2ggZm91bmQsIGNoZWNrIGlmIHRoZXJlIHdhcyBhIHNpbmdsZSBhdXRob3JpdHkgdXNlZFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBhdXRob3JpdHlMaXN0ID0gdGhpcy5nZXRVbmlxdWVBdXRob3JpdHkodG9rZW5DYWNoZUl0ZW1zLCBcImF1dGhvcml0eVwiKTtcclxuICAgICAgICBpZiAoYXV0aG9yaXR5TGlzdC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTXVsdGlwbGVBdXRob3JpdGllc0luQ2FjaGVFcnJvcihzY29wZXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UgPSBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKGF1dGhvcml0eUxpc3RbMF0sIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBpZiBhbiBhdXRob3JpdHkgaXMgcGFzc2VkIGluIHRoZSBBUElcclxuICAgIGVsc2Uge1xyXG4gICAgICAvLyBmaWx0ZXIgYnkgYXV0aG9yaXR5IGFuZCBzY29wZVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlSXRlbSA9IHRva2VuQ2FjaGVJdGVtc1tpXTtcclxuICAgICAgICBjb25zdCBjYWNoZWRTY29wZXMgPSBjYWNoZUl0ZW0ua2V5LnNjb3Blcy5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgaWYgKFV0aWxzLmNvbnRhaW5zU2NvcGUoY2FjaGVkU2NvcGVzLCBzY29wZXMpICYmIFV0aWxzLkNhbm9uaWNhbGl6ZVVyaShjYWNoZUl0ZW0ua2V5LmF1dGhvcml0eSkgPT09IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHkpIHtcclxuICAgICAgICAgIGZpbHRlcmVkSXRlbXMucHVzaChjYWNoZUl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBubyBtYXRjaFxyXG4gICAgICBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICAvLyBpZiBvbmx5IG9uZSBjYWNoZWRUb2tlbiBGb3VuZFxyXG4gICAgICBlbHNlIGlmIChmaWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gZmlsdGVyZWRJdGVtc1swXTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAvLyBpZiBtb3JlIHRoYW4gY2FjaGVkIHRva2VuIGlzIGZvdW5kXHJcbiAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU11bHRpcGxlTWF0Y2hpbmdUb2tlbnNJbkNhY2hlRXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtICE9IG51bGwpIHtcclxuICAgICAgbGV0IGV4cGlyZWQgPSBOdW1iZXIoYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuZXhwaXJlc0luKTtcclxuICAgICAgLy8gSWYgZXhwaXJhdGlvbiBpcyB3aXRoaW4gb2Zmc2V0LCBpdCB3aWxsIGZvcmNlIHJlbmV3XHJcbiAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY29uZmlnLnN5c3RlbS50b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzIHx8IDMwMDtcclxuICAgICAgaWYgKGV4cGlyZWQgJiYgKGV4cGlyZWQgPiBVdGlscy5ub3coKSArIG9mZnNldCkpIHtcclxuICAgICAgICBsZXQgaWRUb2tlbiA9IG5ldyBJZFRva2VuKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmlkVG9rZW4pO1xyXG4gICAgICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICAgICAgYWNjb3VudCA9IHRoaXMuZ2V0QWNjb3VudCgpO1xyXG4gICAgICAgICAgaWYgKCFhY2NvdW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJBY2NvdW50IHNob3VsZCBub3QgYmUgbnVsbCBoZXJlLlwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYVN0YXRlID0gdGhpcy5nZXRBY2NvdW50U3RhdGUoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgOiBBdXRoUmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICB1bmlxdWVJZDogXCJcIixcclxuICAgICAgICAgIHRlbmFudElkOiBcIlwiLFxyXG4gICAgICAgICAgdG9rZW5UeXBlOiAoYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuaWRUb2tlbiA9PT0gYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuYWNjZXNzVG9rZW4pID8gQ29uc3RhbnRzLmlkVG9rZW4gOiBDb25zdGFudHMuYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICBpZFRva2VuOiBpZFRva2VuLFxyXG4gICAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgc2NvcGVzOiBhY2Nlc3NUb2tlbkNhY2hlSXRlbS5rZXkuc2NvcGVzLnNwbGl0KFwiIFwiKSxcclxuICAgICAgICAgIGV4cGlyZXNPbjogbmV3IERhdGUoZXhwaXJlZCAqIDEwMDApLFxyXG4gICAgICAgICAgYWNjb3VudDogYWNjb3VudCxcclxuICAgICAgICAgIGFjY291bnRTdGF0ZTogYVN0YXRlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVXRpbHMuc2V0UmVzcG9uc2VJZFRva2VuKHJlc3BvbnNlLCBpZFRva2VuKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShKU09OLnN0cmluZ2lmeShmaWx0ZXJlZEl0ZW1zWzBdLmtleSkpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBVc2VkIHRvIGdldCBhIHVuaXF1ZSBsaXN0IG9mIGF1dGhvcml0dWVzIGZyb20gdGhlIGNhY2hlXHJcbiAgICogQHBhcmFtIHtBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT59ICBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgLSBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgc2F2ZWQgaW4gdGhlIGNhY2hlXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0VW5pcXVlQXV0aG9yaXR5KGFjY2Vzc1Rva2VuQ2FjaGVJdGVtczogQXJyYXk8QWNjZXNzVG9rZW5DYWNoZUl0ZW0+LCBwcm9wZXJ0eTogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICBjb25zdCBhdXRob3JpdHlMaXN0OiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBjb25zdCBmbGFnczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmIChlbGVtZW50LmtleS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgKGZsYWdzLmluZGV4T2YoZWxlbWVudC5rZXlbcHJvcGVydHldKSA9PT0gLTEpKSB7XHJcbiAgICAgICAgZmxhZ3MucHVzaChlbGVtZW50LmtleVtwcm9wZXJ0eV0pO1xyXG4gICAgICAgIGF1dGhvcml0eUxpc3QucHVzaChlbGVtZW50LmtleVtwcm9wZXJ0eV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhdXRob3JpdHlMaXN0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIENoZWNrIGlmIEFEQUwgaWRfdG9rZW4gZXhpc3RzIGFuZCByZXR1cm4gaWYgZXhpc3RzLlxyXG4gICAqXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBleHRyYWN0QURBTElkVG9rZW4oKTogYW55IHtcclxuICAgIGNvbnN0IGFkYWxJZFRva2VuID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuYWRhbElkVG9rZW4pO1xyXG4gICAgaWYgKCFVdGlscy5pc0VtcHR5KGFkYWxJZFRva2VuKSkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5leHRyYWN0SWRUb2tlbihhZGFsSWRUb2tlbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBBY3F1aXJlcyBhY2Nlc3MgdG9rZW4gdXNpbmcgYSBoaWRkZW4gaWZyYW1lLlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcml2YXRlIHJlbmV3VG9rZW4oc2NvcGVzOiBBcnJheTxzdHJpbmc+LCByZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbiwgYWNjb3VudDogQWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2NvcGUgPSBzY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtcclxuICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJyZW5ld1Rva2VuIGlzIGNhbGxlZCBmb3Igc2NvcGU6XCIgKyBzY29wZSk7XHJcbiAgICBjb25zdCBmcmFtZUhhbmRsZSA9IHRoaXMuYWRkSGlkZGVuSUZyYW1lKFwibXNhbFJlbmV3RnJhbWVcIiArIHNjb3BlKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNhY2hlRW50cmllcyhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFjY291bnQpO1xyXG4gICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlJlbmV3IHRva2VuIEV4cGVjdGVkIHN0YXRlOiBcIiArIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XHJcblxyXG4gICAgLy8gQnVpbGQgdXJsTmF2aWdhdGUgd2l0aCBcInByb21wdD1ub25lXCIgYW5kIG5hdmlnYXRlIHRvIFVSTCBpbiBoaWRkZW4gaUZyYW1lXHJcbiAgICBsZXQgdXJsTmF2aWdhdGUgPSBVdGlscy51cmxSZW1vdmVRdWVyeVN0cmluZ1BhcmFtZXRlcihzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuY3JlYXRlTmF2aWdhdGVVcmwoc2NvcGVzKSwgQ29uc3RhbnRzLnByb21wdCkgKyBDb25zdGFudHMucHJvbXB0X25vbmU7XHJcblxyXG4gICAgd2luZG93LnJlbmV3U3RhdGVzLnB1c2goc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcclxuICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5yZW5ld1Rva2VuO1xyXG4gICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgc2NvcGUsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKFwiTmF2aWdhdGUgdG86XCIgKyB1cmxOYXZpZ2F0ZSk7XHJcbiAgICBmcmFtZUhhbmRsZS5zcmMgPSBcImFib3V0OmJsYW5rXCI7XHJcbiAgICB0aGlzLmxvYWRJZnJhbWVUaW1lb3V0KHVybE5hdmlnYXRlLCBcIm1zYWxSZW5ld0ZyYW1lXCIgKyBzY29wZSwgc2NvcGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIFJlbmV3cyBpZHRva2VuIGZvciBhcHBcInMgb3duIGJhY2tlbmQgd2hlbiBjbGllbnRJZCBpcyBwYXNzZWQgYXMgYSBzaW5nbGUgc2NvcGUgaW4gdGhlIHNjb3BlcyBhcnJheS5cclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZW5ld0lkVG9rZW4oc2NvcGVzOiBBcnJheTxzdHJpbmc+LCByZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbiwgYWNjb3VudDogQWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJyZW5ld2lkVG9rZW4gaXMgY2FsbGVkXCIpO1xyXG4gICAgY29uc3QgZnJhbWVIYW5kbGUgPSB0aGlzLmFkZEhpZGRlbklGcmFtZShcIm1zYWxJZFRva2VuRnJhbWVcIik7XHJcblxyXG4gICAgdGhpcy51cGRhdGVDYWNoZUVudHJpZXMoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LCBhY2NvdW50KTtcclxuXHJcbiAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiUmVuZXcgSWR0b2tlbiBFeHBlY3RlZCBzdGF0ZTogXCIgKyBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG5cclxuICAgIC8vIEJ1aWxkIHVybE5hdmlnYXRlIHdpdGggXCJwcm9tcHQ9bm9uZVwiIGFuZCBuYXZpZ2F0ZSB0byBVUkwgaW4gaGlkZGVuIGlGcmFtZVxyXG4gICAgbGV0IHVybE5hdmlnYXRlID0gVXRpbHMudXJsUmVtb3ZlUXVlcnlTdHJpbmdQYXJhbWV0ZXIoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmNyZWF0ZU5hdmlnYXRlVXJsKHNjb3BlcyksIENvbnN0YW50cy5wcm9tcHQpICsgQ29uc3RhbnRzLnByb21wdF9ub25lO1xyXG5cclxuICAgIGlmICh0aGlzLnNpbGVudExvZ2luKSB7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLmxvZ2luO1xyXG4gICAgICAgIHRoaXMuc2lsZW50QXV0aGVudGljYXRpb25TdGF0ZSA9IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLnJlbmV3VG9rZW47XHJcbiAgICAgICAgd2luZG93LnJlbmV3U3RhdGVzLnB1c2goc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBub3RlOiBzY29wZSBoZXJlIGlzIGNsaWVudElkXHJcbiAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCB0aGlzLmNsaWVudElkLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIk5hdmlnYXRlIHRvOlwiICsgdXJsTmF2aWdhdGUpO1xyXG4gICAgZnJhbWVIYW5kbGUuc3JjID0gXCJhYm91dDpibGFua1wiO1xyXG4gICAgdGhpcy5sb2FkSWZyYW1lVGltZW91dCh1cmxOYXZpZ2F0ZSwgXCJtc2FsSWRUb2tlbkZyYW1lXCIsIHRoaXMuY2xpZW50SWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqXHJcbiAgICogVGhpcyBtZXRob2QgbXVzdCBiZSBjYWxsZWQgZm9yIHByb2Nlc3NpbmcgdGhlIHJlc3BvbnNlIHJlY2VpdmVkIGZyb20gQUFELiBJdCBleHRyYWN0cyB0aGUgaGFzaCwgcHJvY2Vzc2VzIHRoZSB0b2tlbiBvciBlcnJvciwgc2F2ZXMgaXQgaW4gdGhlIGNhY2hlIGFuZCBjYWxscyB0aGUgcmVnaXN0ZXJlZCBjYWxsYmFja3Mgd2l0aCB0aGUgcmVzdWx0LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdXRob3JpdHkgYXV0aG9yaXR5IHJlY2VpdmVkIGluIHRoZSByZWRpcmVjdCByZXNwb25zZSBmcm9tIEFBRC5cclxuICAgKiBAcGFyYW0ge1Rva2VuUmVzcG9uc2V9IHJlcXVlc3RJbmZvIGFuIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGZyb20gQUFEIGNvbXByaXNpbmcgb2YgdGhlIGtleXMgLSBwYXJhbWV0ZXJzLCByZXF1ZXN0VHlwZSwgc3RhdGVNYXRjaCwgc3RhdGVSZXNwb25zZSBhbmQgdmFsaWQuXHJcbiAgICogQHBhcmFtIHtBY2NvdW50fSBhY2NvdW50IGFjY291bnQgb2JqZWN0IGZvciB3aGljaCBzY29wZXMgYXJlIGNvbnNlbnRlZCBmb3IuIFRoZSBkZWZhdWx0IGFjY291bnQgaXMgdGhlIGxvZ2dlZCBpbiBhY2NvdW50LlxyXG4gICAqIEBwYXJhbSB7Q2xpZW50SW5mb30gY2xpZW50SW5mbyBjbGllbnRJbmZvIHJlY2VpdmVkIGFzIHBhcnQgb2YgdGhlIHJlc3BvbnNlIGNvbXByaXNpbmcgb2YgZmllbGRzIHVpZCBhbmQgdXRpZC5cclxuICAgKiBAcGFyYW0ge0lkVG9rZW59IGlkVG9rZW4gaWRUb2tlbiByZWNlaXZlZCBhcyBwYXJ0IG9mIHRoZSByZXNwb25zZS5cclxuICAgKiBAaWdub3JlXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xyXG4gIHByaXZhdGUgc2F2ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGF1dGhvcml0eTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIGNsaWVudEluZm86IHN0cmluZyk6IEF1dGhSZXNwb25zZSB7XHJcbiAgICBsZXQgc2NvcGU6IHN0cmluZztcclxuICAgIGxldCBhY2Nlc3NUb2tlblJlc3BvbnNlID0geyAuLi5yZXNwb25zZSB9O1xyXG4gICAgY29uc3QgY2xpZW50T2JqOiBDbGllbnRJbmZvID0gbmV3IENsaWVudEluZm8oY2xpZW50SW5mbyk7XHJcblxyXG4gICAgLy8gaWYgdGhlIHJlc3BvbnNlIGNvbnRhaW5zIFwic2NvcGVcIlxyXG4gICAgaWYgKHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoXCJzY29wZVwiKSkge1xyXG4gICAgICAvLyByZWFkIHRoZSBzY29wZXNcclxuICAgICAgc2NvcGUgPSBwYXJhbWV0ZXJzW1wic2NvcGVcIl07XHJcbiAgICAgIGNvbnN0IGNvbnNlbnRlZFNjb3BlcyA9IHNjb3BlLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICAgIC8vIHJldHJpZXZlIGFsbCBhY2Nlc3MgdG9rZW5zIGZyb20gdGhlIGNhY2hlLCByZW1vdmUgdGhlIGR1cCBzY29yZXNcclxuICAgICAgY29uc3QgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKHRoaXMuY2xpZW50SWQsIGF1dGhvcml0eSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gYWNjZXNzVG9rZW5DYWNoZUl0ZW1zW2ldO1xyXG5cclxuICAgICAgICBpZiAoYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LmhvbWVBY2NvdW50SWRlbnRpZmllciA9PT0gcmVzcG9uc2UuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpIHtcclxuICAgICAgICAgIGNvbnN0IGNhY2hlZFNjb3BlcyA9IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleS5zY29wZXMuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgaWYgKFV0aWxzLmlzSW50ZXJzZWN0aW5nU2NvcGVzKGNhY2hlZFNjb3BlcywgY29uc2VudGVkU2NvcGVzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gR2VuZXJhdGUgYW5kIGNhY2hlIGFjY2Vzc1Rva2VuS2V5IGFuZCBhY2Nlc3NUb2tlblZhbHVlXHJcbiAgICAgIGNvbnN0IGV4cGlyZXNJbiA9IFV0aWxzLmV4cGlyZXNJbihwYXJhbWV0ZXJzW0NvbnN0YW50cy5leHBpcmVzSW5dKS50b1N0cmluZygpO1xyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbktleSA9IG5ldyBBY2Nlc3NUb2tlbktleShhdXRob3JpdHksIHRoaXMuY2xpZW50SWQsIHNjb3BlLCBjbGllbnRPYmoudWlkLCBjbGllbnRPYmoudXRpZCk7XHJcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuVmFsdWUgPSBuZXcgQWNjZXNzVG9rZW5WYWx1ZShwYXJhbWV0ZXJzW0NvbnN0YW50cy5hY2Nlc3NUb2tlbl0sIHJlc3BvbnNlLmlkVG9rZW4ucmF3SWRUb2tlbiwgZXhwaXJlc0luLCBjbGllbnRJbmZvKTtcclxuXHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5LZXkpLCBKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlblZhbHVlKSk7XHJcblxyXG4gICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLmFjY2Vzc1Rva2VuICA9IHBhcmFtZXRlcnNbQ29uc3RhbnRzLmFjY2Vzc1Rva2VuXTtcclxuICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5zY29wZXMgPSBjb25zZW50ZWRTY29wZXM7XHJcbiAgICAgIGxldCBleHAgPSBOdW1iZXIoZXhwaXJlc0luKTtcclxuICAgICAgaWYgKGV4cCkge1xyXG4gICAgICAgIGFjY2Vzc1Rva2VuUmVzcG9uc2UuZXhwaXJlc09uID0gbmV3IERhdGUoKFV0aWxzLm5vdygpICsgZXhwKSAqIDEwMDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiQ291bGQgbm90IHBhcnNlIGV4cGlyZXNJbiBwYXJhbWV0ZXIuIEdpdmVuIHZhbHVlOiBcIiArIGV4cGlyZXNJbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGlmIHRoZSByZXNwb25zZSBkb2VzIG5vdCBjb250YWluIFwic2NvcGVcIiAtIHNjb3BlIGlzIHVzdWFsbHkgY2xpZW50X2lkIGFuZCB0aGUgdG9rZW4gd2lsbCBiZSBpZF90b2tlblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNjb3BlID0gdGhpcy5jbGllbnRJZDtcclxuXHJcbiAgICAgIC8vIEdlbmVyYXRlIGFuZCBjYWNoZSBhY2Nlc3NUb2tlbktleSBhbmQgYWNjZXNzVG9rZW5WYWx1ZVxyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbktleSA9IG5ldyBBY2Nlc3NUb2tlbktleShhdXRob3JpdHksIHRoaXMuY2xpZW50SWQsIHNjb3BlLCBjbGllbnRPYmoudWlkLCBjbGllbnRPYmoudXRpZCk7XHJcblxyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlblZhbHVlID0gbmV3IEFjY2Vzc1Rva2VuVmFsdWUocGFyYW1ldGVyc1tDb25zdGFudHMuaWRUb2tlbl0sIHBhcmFtZXRlcnNbQ29uc3RhbnRzLmlkVG9rZW5dLCByZXNwb25zZS5pZFRva2VuLmV4cGlyYXRpb24sIGNsaWVudEluZm8pO1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuS2V5KSwgSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5WYWx1ZSkpO1xyXG4gICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLnNjb3BlcyA9IFtzY29wZV07XHJcbiAgICAgIGFjY2Vzc1Rva2VuUmVzcG9uc2UuYWNjZXNzVG9rZW4gPSBwYXJhbWV0ZXJzW0NvbnN0YW50cy5pZFRva2VuXTtcclxuICAgICAgbGV0IGV4cCA9IE51bWJlcihyZXNwb25zZS5pZFRva2VuLmV4cGlyYXRpb24pO1xyXG4gICAgICBpZiAoZXhwKSB7XHJcbiAgICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5leHBpcmVzT24gPSBuZXcgRGF0ZShleHAgKiAxMDAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkNvdWxkIG5vdCBwYXJzZSBleHBpcmVzSW4gcGFyYW1ldGVyXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjZXNzVG9rZW5SZXNwb25zZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBTYXZlcyB0b2tlbiBvciBlcnJvciByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgZnJvbSBBQUQgaW4gdGhlIGNhY2hlLiBJbiBjYXNlIG9mIGlkX3Rva2VuLCBpdCBhbHNvIGNyZWF0ZXMgdGhlIGFjY291bnQgb2JqZWN0LlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc2F2ZVRva2VuRnJvbUhhc2goaGFzaDogc3RyaW5nLCBzdGF0ZUluZm86IFJlc3BvbnNlU3RhdGVJbmZvKTogQXV0aFJlc3BvbnNlIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJTdGF0ZSBzdGF0dXM6XCIgKyBzdGF0ZUluZm8uc3RhdGVNYXRjaCArIFwiOyBSZXF1ZXN0IHR5cGU6XCIgKyBzdGF0ZUluZm8ucmVxdWVzdFR5cGUpO1xyXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBcIlwiKTtcclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBcIlwiKTtcclxuXHJcbiAgICBsZXQgcmVzcG9uc2UgOiBBdXRoUmVzcG9uc2UgPSB7XHJcbiAgICAgIHVuaXF1ZUlkOiBcIlwiLFxyXG4gICAgICB0ZW5hbnRJZDogXCJcIixcclxuICAgICAgdG9rZW5UeXBlOiBcIlwiLFxyXG4gICAgICBpZFRva2VuOiBudWxsLFxyXG4gICAgICBhY2Nlc3NUb2tlbjogbnVsbCxcclxuICAgICAgc2NvcGVzOiBbXSxcclxuICAgICAgZXhwaXJlc09uOiBudWxsLFxyXG4gICAgICBhY2NvdW50OiBudWxsLFxyXG4gICAgICBhY2NvdW50U3RhdGU6IFwiXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBlcnJvcjogQXV0aEVycm9yO1xyXG4gICAgY29uc3QgaGFzaFBhcmFtcyA9IHRoaXMuZGVzZXJpYWxpemVIYXNoKGhhc2gpO1xyXG4gICAgbGV0IGF1dGhvcml0eUtleTogc3RyaW5nID0gXCJcIjtcclxuICAgIGxldCBhY3F1aXJlVG9rZW5BY2NvdW50S2V5OiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIC8vIElmIHNlcnZlciByZXR1cm5zIGFuIGVycm9yXHJcbiAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbikgfHwgaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3IpKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoXCJFcnJvciA6XCIgKyBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvcl0gKyBcIjsgRXJyb3IgZGVzY3JpcHRpb246XCIgKyBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXSk7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JdKTtcclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb25dKTtcclxuXHJcbiAgICAgIC8vIGxvZ2luXHJcbiAgICAgIGlmIChzdGF0ZUluZm8ucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5sb2dpbikge1xyXG4gICAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubG9naW5FcnJvciwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0gKyBcIjpcIiArIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSk7XHJcbiAgICAgICAgYXV0aG9yaXR5S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZUluZm8uc3RhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhY3F1aXJlVG9rZW5cclxuICAgICAgaWYgKHN0YXRlSW5mby5yZXF1ZXN0VHlwZSA9PT0gQ29uc3RhbnRzLnJlbmV3VG9rZW4pIHtcclxuICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICBhdXRob3JpdHlLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlSW5mby5zdGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSB0aGlzLmdldEFjY291bnQoKTtcclxuICAgICAgICBsZXQgYWNjb3VudElkO1xyXG5cclxuICAgICAgICBpZiAoYWNjb3VudCAmJiAhVXRpbHMuaXNFbXB0eShhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgYWNjb3VudElkID0gYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhY2NvdW50SWQgPSBDb25zdGFudHMubm9fYWNjb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShhY2NvdW50SWQsIHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmlzSW50ZXJhY3Rpb25SZXF1aXJlZChoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXSkpIHtcclxuICAgICAgICBlcnJvciA9IG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVycm9yID0gbmV3IFNlcnZlckVycm9yKGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJZiB0aGUgc2VydmVyIHJldHVybnMgXCJTdWNjZXNzXCJcclxuICAgIGVsc2Uge1xyXG4gICAgICAvLyBWZXJpZnkgdGhlIHN0YXRlIGZyb20gcmVkaXJlY3QgYW5kIHJlY29yZCB0b2tlbnMgdG8gc3RvcmFnZSBpZiBleGlzdHNcclxuICAgICAgaWYgKHN0YXRlSW5mby5zdGF0ZU1hdGNoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlN0YXRlIGlzIHJpZ2h0XCIpO1xyXG4gICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5zZXNzaW9uU3RhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxTZXNzaW9uU3RhdGUsIGhhc2hQYXJhbXNbQ29uc3RhbnRzLnNlc3Npb25TdGF0ZV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNwb25zZS5hY2NvdW50U3RhdGUgPSB0aGlzLmdldEFjY291bnRTdGF0ZShzdGF0ZUluZm8uc3RhdGUpO1xyXG5cclxuICAgICAgICBsZXQgY2xpZW50SW5mbzogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgLy8gUHJvY2VzcyBhY2Nlc3NfdG9rZW5cclxuICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuYWNjZXNzVG9rZW4pKSB7XHJcbiAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiRnJhZ21lbnQgaGFzIGFjY2VzcyB0b2tlblwiKTtcclxuICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIC8vIHJldHJpZXZlIHRoZSBpZF90b2tlbiBmcm9tIHJlc3BvbnNlIGlmIHByZXNlbnQgOlxyXG4gICAgICAgICAgaWYgKGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmlkVG9rZW4pKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmlkVG9rZW4gPSBuZXcgSWRUb2tlbihoYXNoUGFyYW1zW0NvbnN0YW50cy5pZFRva2VuXSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IFV0aWxzLnNldFJlc3BvbnNlSWRUb2tlbihyZXNwb25zZSwgbmV3IElkVG9rZW4odGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuaWRUb2tlbktleSkpKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyByZXRyaWV2ZSB0aGUgYXV0aG9yaXR5IGZyb20gY2FjaGUgYW5kIHJlcGxhY2Ugd2l0aCB0ZW5hbnRJRFxyXG4gICAgICAgICAgY29uc3QgYXV0aG9yaXR5S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZUluZm8uc3RhdGUpO1xyXG4gICAgICAgICAgbGV0IGF1dGhvcml0eTogc3RyaW5nID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShhdXRob3JpdHlLZXksIHRoaXMuaW5Db29raWUpO1xyXG5cclxuICAgICAgICAgIGlmICghVXRpbHMuaXNFbXB0eShhdXRob3JpdHkpKSB7XHJcbiAgICAgICAgICAgIGF1dGhvcml0eSA9IFV0aWxzLnJlcGxhY2VUZW5hbnRQYXRoKGF1dGhvcml0eSwgcmVzcG9uc2UudGVuYW50SWQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIHJldHJpZXZlIGNsaWVudF9pbmZvIC0gaWYgaXQgaXMgbm90IGZvdW5kLCBnZW5lcmF0ZSB0aGUgdWlkIGFuZCB1dGlkIGZyb20gaWRUb2tlblxyXG4gICAgICAgICAgaWYgKGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmNsaWVudEluZm8pKSB7XHJcbiAgICAgICAgICAgIGNsaWVudEluZm8gPSBoYXNoUGFyYW1zW0NvbnN0YW50cy5jbGllbnRJbmZvXTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJDbGllbnRJbmZvIG5vdCByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgZnJvbSBBQURcIik7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVDbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3IoXCJDbGllbnRJbmZvIG5vdCByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXCIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJlc3BvbnNlLmFjY291bnQgPSBBY2NvdW50LmNyZWF0ZUFjY291bnQocmVzcG9uc2UuaWRUb2tlbiwgbmV3IENsaWVudEluZm8oY2xpZW50SW5mbykpO1xyXG5cclxuICAgICAgICAgIGxldCBhY2NvdW50S2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuYWNjb3VudCAmJiAhVXRpbHMuaXNFbXB0eShyZXNwb25zZS5hY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgYWNjb3VudEtleSA9IHJlc3BvbnNlLmFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFjY291bnRLZXkgPSBDb25zdGFudHMubm9fYWNjb3VudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhY3F1aXJlVG9rZW5BY2NvdW50S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUFjcXVpcmVUb2tlbkFjY291bnRLZXkoYWNjb3VudEtleSwgc3RhdGVJbmZvLnN0YXRlKTtcclxuICAgICAgICAgIGNvbnN0IGFjcXVpcmVUb2tlbkFjY291bnRLZXlfbm9hY2NvdW50ID0gU3RvcmFnZS5nZW5lcmF0ZUFjcXVpcmVUb2tlbkFjY291bnRLZXkoQ29uc3RhbnRzLm5vX2FjY291bnQsIHN0YXRlSW5mby5zdGF0ZSk7XHJcblxyXG4gICAgICAgICAgbGV0IGNhY2hlZEFjY291bnQ6IHN0cmluZyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYWNxdWlyZVRva2VuQWNjb3VudEtleSk7XHJcbiAgICAgICAgICBsZXQgYWNxdWlyZVRva2VuQWNjb3VudDogQWNjb3VudDtcclxuXHJcbiAgICAgICAgICAvLyBDaGVjayB3aXRoIHRoZSBhY2NvdW50IGluIHRoZSBDYWNoZVxyXG4gICAgICAgICAgaWYgKCFVdGlscy5pc0VtcHR5KGNhY2hlZEFjY291bnQpKSB7XHJcbiAgICAgICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnQgPSBKU09OLnBhcnNlKGNhY2hlZEFjY291bnQpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuYWNjb3VudCAmJiBhY3F1aXJlVG9rZW5BY2NvdW50ICYmIFV0aWxzLmNvbXBhcmVBY2NvdW50cyhyZXNwb25zZS5hY2NvdW50LCBhY3F1aXJlVG9rZW5BY2NvdW50KSkge1xyXG4gICAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zYXZlQWNjZXNzVG9rZW4ocmVzcG9uc2UsIGF1dGhvcml0eSwgaGFzaFBhcmFtcywgY2xpZW50SW5mbyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlRoZSB1c2VyIG9iamVjdCByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgaXMgdGhlIHNhbWUgYXMgdGhlIG9uZSBwYXNzZWQgaW4gdGhlIGFjcXVpcmVUb2tlbiByZXF1ZXN0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICBcIlRoZSBhY2NvdW50IG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIHJlc3BvbnNlIGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgb25lIHBhc3NlZCBpbiB0aGUgYWNxdWlyZVRva2VuIHJlcXVlc3RcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKCFVdGlscy5pc0VtcHR5KHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYWNxdWlyZVRva2VuQWNjb3VudEtleV9ub2FjY291bnQpKSkge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuc2F2ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlLCBhdXRob3JpdHksIGhhc2hQYXJhbXMsIGNsaWVudEluZm8pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHJvY2VzcyBpZF90b2tlblxyXG4gICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5pZFRva2VuKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiRnJhZ21lbnQgaGFzIGlkIHRva2VuXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gbG9naW4gbm8gbG9uZ2VyIGluIHByb2dyZXNzXHJcbiAgICAgICAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gVXRpbHMuc2V0UmVzcG9uc2VJZFRva2VuKHJlc3BvbnNlLCBuZXcgSWRUb2tlbihoYXNoUGFyYW1zW0NvbnN0YW50cy5pZFRva2VuXSkpO1xyXG4gICAgICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuY2xpZW50SW5mbykpIHtcclxuICAgICAgICAgICAgICBjbGllbnRJbmZvID0gaGFzaFBhcmFtc1tDb25zdGFudHMuY2xpZW50SW5mb107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcIkNsaWVudEluZm8gbm90IHJlY2VpdmVkIGluIHRoZSByZXNwb25zZSBmcm9tIEFBRFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXV0aG9yaXR5S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZUluZm8uc3RhdGUpO1xyXG4gICAgICAgICAgICBsZXQgYXV0aG9yaXR5OiBzdHJpbmcgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKGF1dGhvcml0eUtleSwgdGhpcy5pbkNvb2tpZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVV0aWxzLmlzRW1wdHkoYXV0aG9yaXR5KSkge1xyXG4gICAgICAgICAgICAgIGF1dGhvcml0eSA9IFV0aWxzLnJlcGxhY2VUZW5hbnRQYXRoKGF1dGhvcml0eSwgcmVzcG9uc2UuaWRUb2tlbi50ZW5hbnRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudCA9IEFjY291bnQuY3JlYXRlQWNjb3VudChyZXNwb25zZS5pZFRva2VuLCBuZXcgQ2xpZW50SW5mbyhjbGllbnRJbmZvKSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmFjY291bnQgPSB0aGlzLmFjY291bnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuaWRUb2tlbiAmJiByZXNwb25zZS5pZFRva2VuLm5vbmNlKSB7XHJcbiAgICAgICAgICAgICAgLy8gY2hlY2sgbm9uY2UgaW50ZWdyaXR5IGlmIGlkVG9rZW4gaGFzIG5vbmNlIC0gdGhyb3cgYW4gZXJyb3IgaWYgbm90IG1hdGNoZWRcclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaWRUb2tlbi5ub25jZSAhPT0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCB0aGlzLmluQ29va2llKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luRXJyb3IsIFwiTm9uY2UgTWlzbWF0Y2guIEV4cGVjdGVkIE5vbmNlOiBcIiArIHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgdGhpcy5pbkNvb2tpZSkgKyBcIixcIiArIFwiQWN0dWFsIE5vbmNlOiBcIiArIHJlc3BvbnNlLmlkVG9rZW4ubm9uY2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJOb25jZSBNaXNtYXRjaC5FeHBlY3RlZCBOb25jZTogXCIgKyB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHRoaXMuaW5Db29raWUpICsgXCIsXCIgKyBcIkFjdHVhbCBOb25jZTogXCIgKyByZXNwb25zZS5pZFRva2VuLm5vbmNlKTtcclxuICAgICAgICAgICAgICAgIGVycm9yID0gQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU5vbmNlTWlzbWF0Y2hFcnJvcih0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHRoaXMuaW5Db29raWUpLCByZXNwb25zZS5pZFRva2VuLm5vbmNlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy8gU2F2ZSB0aGUgdG9rZW5cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmlkVG9rZW5LZXksIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmlkVG9rZW5dKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxDbGllbnRJbmZvLCBjbGllbnRJbmZvKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTYXZlIGlkVG9rZW4gYXMgYWNjZXNzIHRva2VuIGZvciBhcHAgaXRzZWxmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVBY2Nlc3NUb2tlbihyZXNwb25zZSwgYXV0aG9yaXR5LCBoYXNoUGFyYW1zLCBjbGllbnRJbmZvKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgYXV0aG9yaXR5S2V5ID0gc3RhdGVJbmZvLnN0YXRlO1xyXG4gICAgICAgICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBzdGF0ZUluZm8uc3RhdGU7XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiSW52YWxpZCBpZF90b2tlbiByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgICAgZXJyb3IgPSBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZElkVG9rZW5FcnJvcihyZXNwb25zZS5pZFRva2VuKTtcclxuICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIGVycm9yLmVycm9yQ29kZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIGVycm9yLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gU3RhdGUgbWlzbWF0Y2ggLSB1bmV4cGVjdGVkL2ludmFsaWQgc3RhdGVcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgYXV0aG9yaXR5S2V5ID0gc3RhdGVJbmZvLnN0YXRlO1xyXG4gICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBzdGF0ZUluZm8uc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkU3RhdGUgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5zdGF0ZUxvZ2luLCB0aGlzLmluQ29va2llKTtcclxuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIlN0YXRlIE1pc21hdGNoLkV4cGVjdGVkIFN0YXRlOiBcIiArIGV4cGVjdGVkU3RhdGUgKyBcIixcIiArIFwiQWN0dWFsIFN0YXRlOiBcIiArIHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgICAgZXJyb3IgPSBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZFN0YXRlRXJyb3Ioc3RhdGVJbmZvLnN0YXRlLCBleHBlY3RlZFN0YXRlKTtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIGVycm9yLmVycm9yQ29kZSk7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIGVycm9yLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5yZW5ld1N0YXR1cyArIHN0YXRlSW5mby5zdGF0ZSwgQ29uc3RhbnRzLnRva2VuUmVuZXdTdGF0dXNDb21wbGV0ZWQpO1xyXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlQWNxdWlyZVRva2VuRW50cmllcygpO1xyXG4gICAgLy8gdGhpcyBpcyByZXF1aXJlZCBpZiBuYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsPWZhbHNlXHJcbiAgICBpZiAodGhpcy5pbkNvb2tpZSkge1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtQ29va2llKGF1dGhvcml0eUtleSwgXCJcIiwgLTEpO1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5jbGVhckNvb2tpZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzcG9uc2UpIHtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiUmVzcG9uc2UgaXMgbnVsbFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9XHJcbiAgLyogdHNsaW50OmVuYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIEFjY291bnRcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgc2lnbmVkIGluIGFjY291bnRcclxuICAgKiAodGhlIGFjY291bnQgb2JqZWN0IGlzIGNyZWF0ZWQgYXQgdGhlIHRpbWUgb2Ygc3VjY2Vzc2Z1bCBsb2dpbilcclxuICAgKiBvciBudWxsIHdoZW4gbm8gc3RhdGUgaXMgZm91bmRcclxuICAgKiBAcmV0dXJucyB7QGxpbmsgQWNjb3VudH0gLSB0aGUgYWNjb3VudCBvYmplY3Qgc3RvcmVkIGluIE1TQUxcclxuICAgKi9cclxuICBnZXRBY2NvdW50KCk6IEFjY291bnQge1xyXG4gICAgLy8gaWYgYSBzZXNzaW9uIGFscmVhZHkgZXhpc3RzLCBnZXQgdGhlIGFjY291bnQgZnJvbSB0aGUgc2Vzc2lvblxyXG4gICAgaWYgKHRoaXMuYWNjb3VudCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hY2NvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZyYW1lIGlzIHVzZWQgdG8gZ2V0IGlkVG9rZW4gYW5kIHBvcHVsYXRlIHRoZSBhY2NvdW50IGZvciB0aGUgZ2l2ZW4gc2Vzc2lvblxyXG4gICAgY29uc3QgcmF3SWRUb2tlbiA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLmlkVG9rZW5LZXkpO1xyXG4gICAgY29uc3QgcmF3Q2xpZW50SW5mbyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm1zYWxDbGllbnRJbmZvKTtcclxuXHJcbiAgICBpZiAoIVV0aWxzLmlzRW1wdHkocmF3SWRUb2tlbikgJiYgIVV0aWxzLmlzRW1wdHkocmF3Q2xpZW50SW5mbykpIHtcclxuICAgICAgY29uc3QgaWRUb2tlbiA9IG5ldyBJZFRva2VuKHJhd0lkVG9rZW4pO1xyXG4gICAgICBjb25zdCBjbGllbnRJbmZvID0gbmV3IENsaWVudEluZm8ocmF3Q2xpZW50SW5mbyk7XHJcbiAgICAgIHRoaXMuYWNjb3VudCA9IEFjY291bnQuY3JlYXRlQWNjb3VudChpZFRva2VuLCBjbGllbnRJbmZvKTtcclxuICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudDtcclxuICAgIH1cclxuICAgIC8vIGlmIGxvZ2luIG5vdCB5ZXQgZG9uZSwgcmV0dXJuIG51bGxcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqXHJcbiAgICogRXh0cmFjdHMgc3RhdGUgdmFsdWUgZnJvbSB0aGUgYWNjb3VudFN0YXRlIHNlbnQgd2l0aCB0aGUgYXV0aGVudGljYXRpb24gcmVxdWVzdC5cclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBzY29wZS5cclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgZ2V0QWNjb3VudFN0YXRlIChzdGF0ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgY29uc3Qgc3BsaXRJbmRleCA9IHN0YXRlLmluZGV4T2YoXCJ8XCIpO1xyXG4gICAgICBpZiAoc3BsaXRJbmRleCA+IC0xICYmIHNwbGl0SW5kZXggKyAxIDwgc3RhdGUubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlLnN1YnN0cmluZyhzcGxpdEluZGV4ICsgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0byBnZXQgYSBsaXN0IG9mIHVuaXF1ZSBhY2NvdW50cyBpbiBNU0FMIGNhY2hlIGJhc2VkIG9uIGhvbWVBY2NvdW50SWRlbnRpZmllci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QGxpbmsgQXJyYXk8QWNjb3VudD59IEFjY291bnQgLSBhbGwgdW5pcXVlIGFjY291bnRzIGluIE1TQUwgY2FjaGUuXHJcbiAgICovXHJcbiAgZ2V0QWxsQWNjb3VudHMoKTogQXJyYXk8QWNjb3VudD4ge1xyXG4gICAgY29uc3QgYWNjb3VudHM6IEFycmF5PEFjY291bnQ+ID0gW107XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRBbGxBY2Nlc3NUb2tlbnMoQ29uc3RhbnRzLmNsaWVudElkLCBDb25zdGFudHMuaG9tZUFjY291bnRJZGVudGlmaWVyKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBpZFRva2VuID0gbmV3IElkVG9rZW4oYWNjZXNzVG9rZW5DYWNoZUl0ZW1zW2ldLnZhbHVlLmlkVG9rZW4pO1xyXG4gICAgICBjb25zdCBjbGllbnRJbmZvID0gbmV3IENsaWVudEluZm8oYWNjZXNzVG9rZW5DYWNoZUl0ZW1zW2ldLnZhbHVlLmhvbWVBY2NvdW50SWRlbnRpZmllcik7XHJcbiAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSBBY2NvdW50LmNyZWF0ZUFjY291bnQoaWRUb2tlbiwgY2xpZW50SW5mbyk7XHJcbiAgICAgIGFjY291bnRzLnB1c2goYWNjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VW5pcXVlQWNjb3VudHMoYWNjb3VudHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqXHJcbiAgICogVXNlZCB0byBmaWx0ZXIgYWNjb3VudHMgYmFzZWQgb24gaG9tZUFjY291bnRJZGVudGlmaWVyXHJcbiAgICogQHBhcmFtIHtBcnJheTxBY2NvdW50Pn0gIEFjY291bnRzIC0gYWNjb3VudHMgc2F2ZWQgaW4gdGhlIGNhY2hlXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0VW5pcXVlQWNjb3VudHMoYWNjb3VudHM6IEFycmF5PEFjY291bnQ+KTogQXJyYXk8QWNjb3VudD4ge1xyXG4gICAgaWYgKCFhY2NvdW50cyB8fCBhY2NvdW50cy5sZW5ndGggPD0gMSkge1xyXG4gICAgICByZXR1cm4gYWNjb3VudHM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmxhZ3M6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIGNvbnN0IHVuaXF1ZUFjY291bnRzOiBBcnJheTxBY2NvdW50PiA9IFtdO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFjY291bnRzLmxlbmd0aDsgKytpbmRleCkge1xyXG4gICAgICBpZiAoYWNjb3VudHNbaW5kZXhdLmhvbWVBY2NvdW50SWRlbnRpZmllciAmJiBmbGFncy5pbmRleE9mKGFjY291bnRzW2luZGV4XS5ob21lQWNjb3VudElkZW50aWZpZXIpID09PSAtMSkge1xyXG4gICAgICAgIGZsYWdzLnB1c2goYWNjb3VudHNbaW5kZXhdLmhvbWVBY2NvdW50SWRlbnRpZmllcik7XHJcbiAgICAgICAgdW5pcXVlQWNjb3VudHMucHVzaChhY2NvdW50c1tpbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVuaXF1ZUFjY291bnRzO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBTY29wZXMgKEV4dHJhY3QgdG8gU2NvcGVzLnRzKVxyXG5cclxuICAvLyBOb3RlOiBcInRoaXNcIiBkZXBlbmRlbmN5IGluIHRoaXMgc2VjdGlvbiBpcyBtaW5pbWFsLlxyXG4gIC8vIElmIHBDYWNoZVN0b3JhZ2UgaXMgc2VwYXJhdGVkIGZyb20gdGhlIGNsYXNzIG9iamVjdCwgb3IgcGFzc2VkIGFzIGEgZm4gcGFyYW0sIHNjb3Blc1V0aWxzLnRzIGNhbiBiZSBjcmVhdGVkXHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKlxyXG4gICAqIFVzZWQgdG8gdmFsaWRhdGUgdGhlIHNjb3BlcyBpbnB1dCBwYXJhbWV0ZXIgcmVxdWVzdGVkICBieSB0aGUgZGV2ZWxvcGVyLlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gc2NvcGVzIC0gRGV2ZWxvcGVyIHJlcXVlc3RlZCBwZXJtaXNzaW9ucy4gTm90IGFsbCBzY29wZXMgYXJlIGd1YXJhbnRlZWQgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbiByZXR1cm5lZC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNjb3Blc1JlcXVpcmVkIC0gQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNjb3BlcyBhcnJheSBpcyByZXF1aXJlZCBvciBub3RcclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZUlucHV0U2NvcGUoc2NvcGVzOiBBcnJheTxzdHJpbmc+LCBzY29wZXNSZXF1aXJlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCFzY29wZXMpIHtcclxuICAgICAgaWYgKHNjb3Blc1JlcXVpcmVkKSB7XHJcbiAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVNjb3Blc1JlcXVpcmVkRXJyb3Ioc2NvcGVzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayB0aGF0IHNjb3BlcyBpcyBhbiBhcnJheSBvYmplY3QgKGFsc28gdGhyb3dzIGVycm9yIGlmIHNjb3BlcyA9PSBudWxsKVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNjb3BlcykpIHtcclxuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVNjb3Blc05vbkFycmF5RXJyb3Ioc2NvcGVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayB0aGF0IHNjb3BlcyBpcyBub3QgYW4gZW1wdHkgYXJyYXlcclxuICAgIGlmIChzY29wZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlRW1wdHlTY29wZXNBcnJheUVycm9yKHNjb3Blcy50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayB0aGF0IGNsaWVudElkIGlzIHBhc3NlZCBhcyBzaW5nbGUgc2NvcGVcclxuICAgIGlmIChzY29wZXMuaW5kZXhPZih0aGlzLmNsaWVudElkKSA+IC0xKSB7XHJcbiAgICAgIGlmIChzY29wZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVDbGllbnRJZFNpbmdsZVNjb3BlRXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICpcclxuICAgKiBFeHRyYWN0cyBzY29wZSB2YWx1ZSBmcm9tIHRoZSBzdGF0ZSBzZW50IHdpdGggdGhlIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gc2NvcGUuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0U2NvcGVGcm9tU3RhdGUoc3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgY29uc3Qgc3BsaXRJbmRleCA9IHN0YXRlLmluZGV4T2YoXCJ8XCIpO1xyXG4gICAgICBpZiAoc3BsaXRJbmRleCA+IC0xICYmIHNwbGl0SW5kZXggKyAxIDwgc3RhdGUubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlLnN1YnN0cmluZyhzcGxpdEluZGV4ICsgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIEFwcGVuZHMgZXh0cmFTY29wZXNUb0NvbnNlbnQgaWYgcGFzc2VkXHJcbiAgICogQHBhcmFtIHtAbGluayBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnN9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhcHBlbmRTY29wZXMocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogQXJyYXk8c3RyaW5nPiB7XHJcblxyXG4gICAgbGV0IHNjb3BlczogQXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgICBpZiAocmVxdWVzdCAmJiByZXF1ZXN0LnNjb3Blcykge1xyXG4gICAgICAgIGlmIChyZXF1ZXN0LmV4dHJhU2NvcGVzVG9Db25zZW50KSB7XHJcbiAgICAgICAgICAgIHNjb3BlcyA9IFsuLi5yZXF1ZXN0LnNjb3BlcywgLi4ucmVxdWVzdC5leHRyYVNjb3Blc1RvQ29uc2VudF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgIHNjb3BlcyA9IHJlcXVlc3Quc2NvcGVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2NvcGVzO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBBbmd1bGFyXHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKlxyXG4gICAqIEJyb2FkY2FzdCBtZXNzYWdlcyAtIFVzZWQgb25seSBmb3IgQW5ndWxhcj8gICpcclxuICAgKiBAcGFyYW0gZXZlbnROYW1lXHJcbiAgICogQHBhcmFtIGRhdGFcclxuICAgKi9cclxuICBwcml2YXRlIGJyb2FkY2FzdChldmVudE5hbWU6IHN0cmluZywgZGF0YTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7IGRldGFpbDogZGF0YSB9KTtcclxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICpcclxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIGNhY2hlZCB0b2tlblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAqIEBwYXJhbSB7QGxpbmsgQWNjb3VudH0gYWNjb3VudFxyXG4gICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAqIEByZXR1cm4ge0BsaW5rIEF1dGhSZXNwb25zZX0gQXV0aFJlc3BvbnNlXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGdldENhY2hlZFRva2VuSW50ZXJuYWwoc2NvcGVzIDogQXJyYXk8c3RyaW5nPiAsIGFjY291bnQ6IEFjY291bnQsIHN0YXRlOiBzdHJpbmcpOiBBdXRoUmVzcG9uc2Uge1xyXG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IHNlc3Npb24ncyBhY2NvdW50IG9iamVjdFxyXG4gICAgY29uc3QgYWNjb3VudE9iamVjdDogQWNjb3VudCA9IGFjY291bnQgfHwgdGhpcy5nZXRBY2NvdW50KCk7XHJcbiAgICBpZiAoIWFjY291bnRPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb25zdHJ1Y3QgQXV0aGVudGljYXRpb25SZXF1ZXN0IGJhc2VkIG9uIHJlc3BvbnNlIHR5cGVcclxuICAgIGNvbnN0IG5ld0F1dGhvcml0eSA9IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgPyB0aGlzLmF1dGhvcml0eUluc3RhbmNlIDogQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZSh0aGlzLmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSk7XHJcbiAgICBjb25zdCByZXNwb25zZVR5cGUgPSB0aGlzLmdldFRva2VuVHlwZShhY2NvdW50T2JqZWN0LCBzY29wZXMsIHRydWUpO1xyXG4gICAgY29uc3Qgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxyXG4gICAgICBuZXdBdXRob3JpdHksXHJcbiAgICAgIHRoaXMuY2xpZW50SWQsXHJcbiAgICAgIHNjb3BlcyxcclxuICAgICAgcmVzcG9uc2VUeXBlLFxyXG4gICAgICB0aGlzLmdldFJlZGlyZWN0VXJpKCksXHJcbiAgICAgIHN0YXRlXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGdldCBjYWNoZWQgdG9rZW5cclxuICAgIHJldHVybiB0aGlzLmdldENhY2hlZFRva2VuKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICpcclxuICAgKiBHZXQgc2NvcGVzIGZvciB0aGUgRW5kcG9pbnQgLSBVc2VkIGluIEFuZ3VsYXIgdG8gdHJhY2sgcHJvdGVjdGVkIGFuZCB1bnByb3RlY3RlZCByZXNvdXJjZXMgd2l0aG91dCBpbnRlcmFjdGlvbiBmcm9tIHRoZSBkZXZlbG9wZXIgYXBwXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZW5kcG9pbnRcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgZ2V0U2NvcGVzRm9yRW5kcG9pbnQoZW5kcG9pbnQ6IHN0cmluZykgOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIC8vIGlmIHVzZXIgc3BlY2lmaWVkIGxpc3Qgb2YgdW5wcm90ZWN0ZWRSZXNvdXJjZXMsIG5vIG5lZWQgdG8gc2VuZCB0b2tlbiB0byB0aGVzZSBlbmRwb2ludHMsIHJldHVybiBudWxsLlxyXG4gICAgaWYgKHRoaXMuY29uZmlnLmZyYW1ld29yay51bnByb3RlY3RlZFJlc291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbmZpZy5mcmFtZXdvcmsudW5wcm90ZWN0ZWRSZXNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVuZHBvaW50LmluZGV4T2YodGhpcy5jb25maWcuZnJhbWV3b3JrLnVucHJvdGVjdGVkUmVzb3VyY2VzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBwcm9jZXNzIGFsbCBwcm90ZWN0ZWQgcmVzb3VyY2VzIGFuZCBzZW5kIHRoZSBtYXRjaGVkIG9uZVxyXG4gICAgaWYgKHRoaXMuY29uZmlnLmZyYW1ld29yay5wcm90ZWN0ZWRSZXNvdXJjZU1hcC5zaXplID4gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBvZiBBcnJheS5mcm9tKHRoaXMuY29uZmlnLmZyYW1ld29yay5wcm90ZWN0ZWRSZXNvdXJjZU1hcC5rZXlzKCkpKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbmZpZ0VuZHBvaW50IGlzIGxpa2UgL2FwaS9Ub2RvIHJlcXVlc3RlZCBlbmRwb2ludCBjYW4gYmUgL2FwaS9Ub2RvLzFcclxuICAgICAgICAgICAgaWYgKGVuZHBvaW50LmluZGV4T2Yoa2V5KSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZnJhbWV3b3JrLnByb3RlY3RlZFJlc291cmNlTWFwLmdldChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGRlZmF1bHQgcmVzb3VyY2Ugd2lsbCBiZSBjbGllbnRpZCBpZiBub3RoaW5nIHNwZWNpZmllZFxyXG4gICAgLy8gQXBwIHdpbGwgdXNlIGlkdG9rZW4gZm9yIGNhbGxzIHRvIGl0c2VsZlxyXG4gICAgLy8gY2hlY2sgaWYgaXQncyBzdGFyaW5nIGZyb20gaHR0cCBvciBodHRwcywgbmVlZHMgdG8gbWF0Y2ggd2l0aCBhcHAgaG9zdFxyXG4gICAgaWYgKGVuZHBvaW50LmluZGV4T2YoXCJodHRwOi8vXCIpID4gLTEgfHwgZW5kcG9pbnQuaW5kZXhPZihcImh0dHBzOi8vXCIpID4gLTEpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRIb3N0RnJvbVVyaShlbmRwb2ludCkgPT09IHRoaXMuZ2V0SG9zdEZyb21VcmkodGhpcy5nZXRSZWRpcmVjdFVyaSgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5PHN0cmluZz4odGhpcy5jbGllbnRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgIC8vIGluIGFuZ3VsYXIgbGV2ZWwsIHRoZSB1cmwgZm9yICRodHRwIGludGVyY2VwdG9yIGNhbGwgY291bGQgYmUgcmVsYXRpdmUgdXJsLFxyXG4gICAgLy8gaWYgaXQncyByZWxhdGl2ZSBjYWxsLCB3ZSdsbCB0cmVhdCBpdCBhcyBhcHAgYmFja2VuZCBjYWxsLlxyXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXk8c3RyaW5nPih0aGlzLmNsaWVudElkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBub3QgdGhlIGFwcCdzIG93biBiYWNrZW5kIG9yIG5vdCBhIGRvbWFpbiBsaXN0ZWQgaW4gdGhlIGVuZHBvaW50cyBzdHJ1Y3R1cmVcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIGJvb2xlYW4gZmxhZyB0byBkZXZlbG9wZXIgdG8gaGVscCBpbmZvcm0gaWYgbG9naW4gaXMgaW4gcHJvZ3Jlc3NcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZS9mYWxzZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRMb2dpbkluUHJvZ3Jlc3MoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBwZW5kaW5nQ2FsbGJhY2sgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy51cmxIYXNoKTtcclxuICAgIGlmIChwZW5kaW5nQ2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmxvZ2luSW5Qcm9ncmVzcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbG9naW5JblByb2dyZXNzXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHNldGxvZ2luSW5Qcm9ncmVzcyhsb2dpbkluUHJvZ3Jlc3MgOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmxvZ2luSW5Qcm9ncmVzcyA9IGxvZ2luSW5Qcm9ncmVzcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICpcclxuICAgKiByZXR1cm5zIHRoZSBzdGF0dXMgb2YgYWNxdWlyZVRva2VuSW5Qcm9ncmVzc1xyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXRBY3F1aXJlVG9rZW5JblByb2dyZXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKlxyXG4gICAqIEBwYXJhbSBhY3F1aXJlVG9rZW5JblByb2dyZXNzXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHNldEFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MoYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA6IGJvb2xlYW4pIHtcclxuICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gYWNxdWlyZVRva2VuSW5Qcm9ncmVzcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICpcclxuICAgKiByZXR1cm5zIHRoZSBsb2dnZXIgaGFuZGxlXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGdldExvZ2dlcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnN5c3RlbS5sb2dnZXI7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIEdldHRlcnMgYW5kIFNldHRlcnNcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBVc2UgdG8gZ2V0IHRoZSByZWRpcmVjdCB1cmkgY29uZmlndXJlZCBpbiBNU0FMIG9yIG51bGwuXHJcbiAgICogRXZhbHVhdGVzIHJlZGlyZWN0VXJpIGlmIGl0cyBhIGZ1bmN0aW9uLCBvdGhlcndpc2Ugc2ltcGx5IHJldHVybnMgaXRzIHZhbHVlLlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJlZGlyZWN0IFVSTFxyXG4gICAqXHJcbiAgICovXHJcbiAgcHVibGljIGdldFJlZGlyZWN0VXJpKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmF1dGgucmVkaXJlY3RVcmkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5yZWRpcmVjdFVyaSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmF1dGgucmVkaXJlY3RVcmk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2UgdG8gZ2V0IHRoZSBwb3N0IGxvZ291dCByZWRpcmVjdCB1cmkgY29uZmlndXJlZCBpbiBNU0FMIG9yIG51bGwuXHJcbiAgICogRXZhbHVhdGVzIHBvc3RMb2dvdXRyZWRpcmVjdFVyaSBpZiBpdHMgYSBmdW5jdGlvbiwgb3RoZXJ3aXNlIHNpbXBseSByZXR1cm5zIGl0cyB2YWx1ZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHBvc3QgbG9nb3V0IHJlZGlyZWN0IFVSTFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRQb3N0TG9nb3V0UmVkaXJlY3RVcmkoKTogc3RyaW5nIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcuYXV0aC5wb3N0TG9nb3V0UmVkaXJlY3RVcmkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5wb3N0TG9nb3V0UmVkaXJlY3RVcmkoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5hdXRoLnBvc3RMb2dvdXRSZWRpcmVjdFVyaTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0byBnZXQgdGhlIGN1cnJlbnQge0BsaW5rIENvbmZpZ3VyYXRpb259IG9iamVjdCBpbiBNU0FMXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7QGxpbmsgQ29uZmlndXJhdGlvbn1cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0Q3VycmVudENvbmZpZ3VyYXRpb24oKTogQ29uZmlndXJhdGlvbiB7XHJcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVOb1NldENvbmZpZ3VyYXRpb25FcnJvcigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBTdHJpbmcgVXRpbCAoU2hvdWxkIGJlIGV4dHJhY3RlZCB0byBVdGlscy50cylcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKlxyXG4gICAqIFJldHVybnMgdGhlIGFuY2hvciBwYXJ0KCMpIG9mIHRoZSBVUkxcclxuICAgKi9cclxuICBwcml2YXRlIGdldEhhc2goaGFzaDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChoYXNoLmluZGV4T2YoXCIjL1wiKSA+IC0xKSB7XHJcbiAgICAgIGhhc2ggPSBoYXNoLnN1YnN0cmluZyhoYXNoLmluZGV4T2YoXCIjL1wiKSArIDIpO1xyXG4gICAgfSBlbHNlIGlmIChoYXNoLmluZGV4T2YoXCIjXCIpID4gLTEpIHtcclxuICAgICAgaGFzaCA9IGhhc2guc3Vic3RyaW5nKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoYXNoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKlxyXG4gICAqIGV4dHJhY3QgVVJJIGZyb20gdGhlIGhvc3RcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBVUklcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBob3N0IGZyb20gdGhlIFVSSVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0SG9zdEZyb21VcmkodXJpOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gcmVtb3ZlIGh0dHA6Ly8gb3IgaHR0cHM6Ly8gZnJvbSB1cmlcclxuICAgIGxldCBleHRyYWN0ZWRVcmkgPSBTdHJpbmcodXJpKS5yZXBsYWNlKC9eKGh0dHBzPzopXFwvXFwvLywgXCJcIik7XHJcbiAgICBleHRyYWN0ZWRVcmkgPSBleHRyYWN0ZWRVcmkuc3BsaXQoXCIvXCIpWzBdO1xyXG4gICAgcmV0dXJuIGV4dHJhY3RlZFVyaTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICpcclxuICAgKiBVdGlscyBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIEF1dGhlbnRpY2F0aW9uXHJcbiAgICogQHBhcmFtIHtAbGluayBhY2NvdW50fSBhY2NvdW50IG9iamVjdFxyXG4gICAqIEBwYXJhbSBzY29wZXNcclxuICAgKiBAcGFyYW0gc2lsZW50Q2FsbFxyXG4gICAqXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gdG9rZW4gdHlwZTogaWRfdG9rZW4gb3IgYWNjZXNzX3Rva2VuXHJcbiAgICpcclxuICAgKi9cclxuICBwcml2YXRlIGdldFRva2VuVHlwZShhY2NvdW50T2JqZWN0OiBBY2NvdW50LCBzY29wZXM6IHN0cmluZ1tdLCBzaWxlbnRDYWxsOiBib29sZWFuKTogc3RyaW5nIHtcclxuXHJcbiAgICAvLyBpZiBhY2NvdW50IGlzIHBhc3NlZCBhbmQgbWF0Y2hlcyB0aGUgYWNjb3VudCBvYmplY3Qvb3Igc2V0IHRvIGdldEFjY291bnQoKSBmcm9tIGNhY2hlXHJcbiAgICAvLyBpZiBjbGllbnQtaWQgaXMgcGFzc2VkIGFzIHNjb3BlLCBnZXQgaWRfdG9rZW4gZWxzZSB0b2tlbi9pZF90b2tlbl90b2tlbiAoaW4gY2FzZSBubyBzZXNzaW9uIGV4aXN0cylcclxuICAgIGxldCB0b2tlblR5cGU6IHN0cmluZztcclxuXHJcbiAgICAvLyBhY3F1aXJlVG9rZW5TaWxlbnRcclxuICAgIGlmIChzaWxlbnRDYWxsKSB7XHJcbiAgICAgIGlmIChVdGlscy5jb21wYXJlQWNjb3VudHMoYWNjb3VudE9iamVjdCwgdGhpcy5nZXRBY2NvdW50KCkpKSB7XHJcbiAgICAgICAgdG9rZW5UeXBlID0gKHNjb3Blcy5pbmRleE9mKHRoaXMuY29uZmlnLmF1dGguY2xpZW50SWQpID4gLTEpID8gUmVzcG9uc2VUeXBlcy5pZF90b2tlbiA6IFJlc3BvbnNlVHlwZXMudG9rZW47XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdG9rZW5UeXBlICA9IChzY29wZXMuaW5kZXhPZih0aGlzLmNvbmZpZy5hdXRoLmNsaWVudElkKSA+IC0xKSA/IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW4gOiBSZXNwb25zZVR5cGVzLmlkX3Rva2VuX3Rva2VuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdG9rZW5UeXBlO1xyXG4gICAgfVxyXG4gICAgLy8gYWxsIG90aGVyIGNhc2VzXHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKCFVdGlscy5jb21wYXJlQWNjb3VudHMoYWNjb3VudE9iamVjdCwgdGhpcy5nZXRBY2NvdW50KCkpKSB7XHJcbiAgICAgICAgICAgdG9rZW5UeXBlID0gUmVzcG9uc2VUeXBlcy5pZF90b2tlbl90b2tlbjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0b2tlblR5cGUgPSAoc2NvcGVzLmluZGV4T2YodGhpcy5jbGllbnRJZCkgPiAtMSkgPyBSZXNwb25zZVR5cGVzLmlkX3Rva2VuIDogUmVzcG9uc2VUeXBlcy50b2tlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRva2VuVHlwZTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqXHJcbiAgICogU2V0cyB0aGUgY2FjaGVrZXlzIGZvciBhbmQgc3RvcmVzIHRoZSBhY2NvdW50IGluZm9ybWF0aW9uIGluIGNhY2hlXHJcbiAgICogQHBhcmFtIGFjY291bnRcclxuICAgKiBAcGFyYW0gc3RhdGVcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRBY2NvdW50Q2FjaGUoYWNjb3VudDogQWNjb3VudCwgc3RhdGU6IHN0cmluZykge1xyXG5cclxuICAgIC8vIENhY2hlIGFjcXVpcmVUb2tlbkFjY291bnRLZXlcclxuICAgIGxldCBhY2NvdW50SWQgPSBhY2NvdW50ID8gdGhpcy5nZXRBY2NvdW50SWQoYWNjb3VudCkgOiBDb25zdGFudHMubm9fYWNjb3VudDtcclxuXHJcbiAgICBjb25zdCBhY3F1aXJlVG9rZW5BY2NvdW50S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUFjcXVpcmVUb2tlbkFjY291bnRLZXkoYWNjb3VudElkLCBzdGF0ZSk7XHJcbiAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKGFjcXVpcmVUb2tlbkFjY291bnRLZXksIEpTT04uc3RyaW5naWZ5KGFjY291bnQpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICpcclxuICAgKiBTZXRzIHRoZSBjYWNoZUtleSBmb3IgYW5kIHN0b3JlcyB0aGUgYXV0aG9yaXR5IGluZm9ybWF0aW9uIGluIGNhY2hlXHJcbiAgICogQHBhcmFtIHN0YXRlXHJcbiAgICogQHBhcmFtIGF1dGhvcml0eVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIHNldEF1dGhvcml0eUNhY2hlKHN0YXRlOiBzdHJpbmcsIGF1dGhvcml0eTogc3RyaW5nKSB7XHJcbiAgICAvLyBDYWNoZSBhdXRob3JpdHlLZXlcclxuICAgIGNvbnN0IGF1dGhvcml0eUtleSA9IFN0b3JhZ2UuZ2VuZXJhdGVBdXRob3JpdHlLZXkoc3RhdGUpO1xyXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShhdXRob3JpdHlLZXksIFV0aWxzLkNhbm9uaWNhbGl6ZVVyaShhdXRob3JpdHkpLCB0aGlzLmluQ29va2llKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgYWNjb3VudCwgYXV0aG9yaXR5LCBhbmQgbm9uY2UgaW4gY2FjaGVcclxuICAgKiBAcGFyYW0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0XHJcbiAgICogQHBhcmFtIGFjY291bnRcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgdXBkYXRlQ2FjaGVFbnRyaWVzKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMsIGFjY291bnQ6IEFjY291bnQsIGxvZ2luU3RhcnRQYWdlPzogYW55KSB7XHJcbiAgICAvLyBDYWNoZSBhY2NvdW50IGFuZCBhdXRob3JpdHlcclxuICAgIGlmIChsb2dpblN0YXJ0UGFnZSkge1xyXG4gICAgICAvLyBDYWNoZSB0aGUgc3RhdGUsIG5vbmNlLCBhbmQgbG9naW4gcmVxdWVzdCBkYXRhXHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luUmVxdWVzdCwgbG9naW5TdGFydFBhZ2UsIHRoaXMuaW5Db29raWUpO1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5sb2dpbkVycm9yLCBcIlwiKTtcclxuXHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnN0YXRlTG9naW4sIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgdGhpcy5pbkNvb2tpZSk7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0Lm5vbmNlLCB0aGlzLmluQ29va2llKTtcclxuXHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgXCJcIik7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBcIlwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0QWNjb3VudENhY2hlKGFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XHJcbiAgICB9XHJcbiAgICAvLyBDYWNoZSBhdXRob3JpdHlLZXlcclxuICAgIHRoaXMuc2V0QXV0aG9yaXR5Q2FjaGUoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5KTtcclxuXHJcbiAgICAvLyBDYWNoZSBub25jZVxyXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Qubm9uY2UsIHRoaXMuaW5Db29raWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBsb2dnZWQgaW4gYWNjb3VudFxyXG4gICAqIEBwYXJhbSBhY2NvdW50XHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwcml2YXRlIGdldEFjY291bnRJZChhY2NvdW50OiBBY2NvdW50KTogYW55IHtcclxuICAgIC8vcmV0dXJuIGAke2FjY291bnQuYWNjb3VudElkZW50aWZpZXJ9YCArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciArIGAke2FjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyfWA7XHJcbiAgICBsZXQgYWNjb3VudElkOiBzdHJpbmc7XHJcbiAgICBpZiAoIVV0aWxzLmlzRW1wdHkoYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgIGFjY291bnRJZCA9IGFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjb3VudElkID0gQ29uc3RhbnRzLm5vX2FjY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFjY291bnRJZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBAaWdub3JlXHJcbiAgICpcclxuICAgKiBDb25zdHJ1Y3QgJ3Rva2VuUmVxdWVzdCcgZnJvbSB0aGUgYXZhaWxhYmxlIGRhdGEgaW4gYWRhbElkVG9rZW5cclxuICAgKiBAcGFyYW0gZXh0cmFRdWVyeVBhcmFtZXRlcnNcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBidWlsZElEVG9rZW5SZXF1ZXN0KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyB7XHJcblxyXG4gICAgbGV0IHRva2VuUmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0ge1xyXG4gICAgICBzY29wZXM6IFt0aGlzLmNsaWVudElkXSxcclxuICAgICAgYXV0aG9yaXR5OiB0aGlzLmF1dGhvcml0eSxcclxuICAgICAgYWNjb3VudDogdGhpcy5nZXRBY2NvdW50KCksXHJcbiAgICAgIGV4dHJhUXVlcnlQYXJhbWV0ZXJzOiByZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0b2tlblJlcXVlc3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqXHJcbiAgICogVXRpbGl0eSB0byBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgYW5kIEV4dHJhUXVlcnlQYXJhbWV0ZXJzIHRvIFNlcnZlclJlcXVlc3RQYXJhbWVyZXJzXHJcbiAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgKiBAcGFyYW0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwb3B1bGF0ZVF1ZXJ5UGFyYW1zKGFjY291bnQ6IEFjY291bnQsIHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycywgYWRhbElkVG9rZW5PYmplY3Q/OiBhbnkpOiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyB7XHJcblxyXG4gICAgbGV0IHF1ZXJ5UGFyYW1ldGVyczogUVBEaWN0ID0ge307XHJcblxyXG4gICAgaWYgKHJlcXVlc3QpIHtcclxuICAgICAgLy8gYWRkIHRoZSBwcm9tcHQgcGFyYW1ldGVyIHRvIHNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIGlmIHBhc3NlZFxyXG4gICAgICBpZiAocmVxdWVzdC5wcm9tcHQpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRlUHJvbXB0UGFyYW1ldGVyKHJlcXVlc3QucHJvbXB0KTtcclxuICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QucHJvbXB0VmFsdWUgPSByZXF1ZXN0LnByb21wdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQWRkIGNsYWltcyBjaGFsbGVuZ2UgdG8gc2VydmVyUmVxdWVzdFBhcmFtZXRlcnMgaWYgcGFzc2VkXHJcbiAgICAgIGlmIChyZXF1ZXN0LmNsYWltc1JlcXVlc3QpIHtcclxuICAgICAgICB2YWxpZGF0ZUNsYWltc1JlcXVlc3QocmVxdWVzdCk7XHJcbiAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmNsYWltc1ZhbHVlID0gcmVxdWVzdC5jbGFpbXNSZXF1ZXN0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBpZiB0aGUgZGV2ZWxvcGVyIHByb3ZpZGVzIG9uZSBvZiB0aGVzZSwgZ2l2ZSBwcmVmZXJlbmNlIHRvIGRldmVsb3BlciBjaG9pY2VcclxuICAgICAgaWYgKFV0aWxzLmlzU1NPUGFyYW0ocmVxdWVzdCkpIHtcclxuICAgICAgICBxdWVyeVBhcmFtZXRlcnMgPSBVdGlscy5jb25zdHJ1Y3RVbmlmaWVkQ2FjaGVRdWVyeVBhcmFtZXRlcihyZXF1ZXN0LCBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhZGFsSWRUb2tlbk9iamVjdCkge1xyXG4gICAgICBxdWVyeVBhcmFtZXRlcnMgPSBVdGlscy5jb25zdHJ1Y3RVbmlmaWVkQ2FjaGVRdWVyeVBhcmFtZXRlcihudWxsLCBhZGFsSWRUb2tlbk9iamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkcyBzaWQvbG9naW5faGludCBpZiBub3QgcG9wdWxhdGVkOyBwb3B1bGF0ZXMgZG9tYWluX3JlcSwgbG9naW5fcmVxIGFuZCBkb21haW5faGludFxyXG4gICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIkNhbGxpbmcgYWRkSGludCBwYXJhbWV0ZXJzXCIpO1xyXG4gICAgcXVlcnlQYXJhbWV0ZXJzID0gdGhpcy5hZGRIaW50UGFyYW1ldGVycyhhY2NvdW50LCBxdWVyeVBhcmFtZXRlcnMsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCk7XHJcblxyXG4gICAgLy8gc2FuaXR5IGNoZWNrIGZvciBkZXZlbG9wZXIgcGFzc2VkIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICBsZXQgZVFQYXJhbXM6IFFQRGljdDtcclxuICAgIGlmIChyZXF1ZXN0KSB7XHJcbiAgICAgIGVRUGFyYW1zID0gdGhpcy5zYW5pdGl6ZUVRUGFyYW1zKHJlcXVlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBvcHVsYXRlIHRoZSBleHRyYVF1ZXJ5UGFyYW1ldGVycyB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXJcclxuICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5xdWVyeVBhcmFtZXRlcnMgPSBVdGlscy5nZW5lcmF0ZVF1ZXJ5UGFyYW1ldGVyc1N0cmluZyhxdWVyeVBhcmFtZXRlcnMpO1xyXG4gICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzID0gVXRpbHMuZ2VuZXJhdGVRdWVyeVBhcmFtZXRlcnNTdHJpbmcoZVFQYXJhbXMpO1xyXG5cclxuICAgIHJldHVybiBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqXHJcbiAgICogVXRpbGl0eSB0byB0ZXN0IGlmIHZhbGlkIHByb21wdCB2YWx1ZSBpcyBwYXNzZWQgaW4gdGhlIHJlcXVlc3RcclxuICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAqL1xyXG4gIHByaXZhdGUgdmFsaWRhdGVQcm9tcHRQYXJhbWV0ZXIgKHByb21wdDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIShbUHJvbXB0U3RhdGUuTE9HSU4sIFByb21wdFN0YXRlLlNFTEVDVF9BQ0NPVU5ULCBQcm9tcHRTdGF0ZS5DT05TRU5ULCBQcm9tcHRTdGF0ZS5OT05FXS5pbmRleE9mKHByb21wdCkgPj0gMCkpIHtcclxuICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlSW52YWxpZFByb21wdEVycm9yKHByb21wdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQGlnbm9yZVxyXG5cclxuICAgKiBSZW1vdmVzIHVubmVjZXNzYXJ5IG9yIGR1cGxpY2F0ZSBxdWVyeSBwYXJhbWV0ZXJzIGZyb20gZXh0cmFRdWVyeVBhcmFtZXRlcnNcclxuICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2FuaXRpemVFUVBhcmFtcyhyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpIDogUVBEaWN0IHtcclxuICAgIGxldCBlUVBhcmFtcyA6IFFQRGljdCA9IHJlcXVlc3QuZXh0cmFRdWVyeVBhcmFtZXRlcnM7XHJcbiAgICBpZiAoIWVRUGFyYW1zKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlcXVlc3QuY2xhaW1zUmVxdWVzdCkge1xyXG4gICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiUmVtb3ZlZCBkdXBsaWNhdGUgY2xhaW1zIGZyb20gZXh0cmFRdWVyeVBhcmFtZXRlcnMuIFBsZWFzZSB1c2UgZWl0aGVyIHRoZSBjbGFpbXNSZXF1ZXN0IGZpZWxkIE9SIHBhc3MgYXMgZXh0cmFRdWVyeVBhcmFtZXRlciAtIG5vdCBib3RoLlwiKTtcclxuICAgICAgZGVsZXRlIGVRUGFyYW1zW0NvbnN0YW50cy5jbGFpbXNdO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlIGVRUGFyYW1zW1NTT1R5cGVzLlNJRF07XHJcbiAgICBkZWxldGUgZVFQYXJhbXNbU1NPVHlwZXMuTE9HSU5fSElOVF07XHJcbiAgICByZXR1cm4gZVFQYXJhbXM7XHJcbiAgfVxyXG5cclxuIC8vI2VuZHJlZ2lvblxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBDbGllbnRJbmZvIH0gZnJvbSBcIi4vQ2xpZW50SW5mb1wiO1xyXG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4vSWRUb2tlblwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XHJcblxyXG4vKipcclxuICogYWNjb3VudElkZW50aWZpZXIgICAgICAgY29tYmluYXRpb24gb2YgaWRUb2tlbi51aWQgYW5kIGlkVG9rZW4udXRpZFxyXG4gKiBob21lQWNjb3VudElkZW50aWZpZXIgICBjb21iaW5hdGlvbiBvZiBjbGllbnRJbmZvLnVpZCBhbmQgY2xpZW50SW5mby51dGlkXHJcbiAqIHVzZXJOYW1lICAgICAgICAgICAgICAgIGlkVG9rZW4ucHJlZmVycmVkX3VzZXJuYW1lXHJcbiAqIG5hbWUgICAgICAgICAgICAgICAgICAgIGlkVG9rZW4ubmFtZVxyXG4gKiBpZFRva2VuICAgICAgICAgICAgICAgICBpZFRva2VuXHJcbiAqIHNpZCAgICAgICAgICAgICAgICAgICAgIGlkVG9rZW4uc2lkIC0gc2Vzc2lvbiBpZGVudGlmaWVyXHJcbiAqIGVudmlyb25tZW50ICAgICAgICAgICAgIGlkdG9rZW4uaXNzdWVyICh0aGUgYXV0aG9yaXR5IHRoYXQgaXNzdWVzIHRoZSB0b2tlbilcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50IHtcclxuXHJcbiAgICBhY2NvdW50SWRlbnRpZmllcjogc3RyaW5nO1xyXG4gICAgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaWRUb2tlbjogT2JqZWN0O1xyXG4gICAgc2lkOiBzdHJpbmc7XHJcbiAgICBlbnZpcm9ubWVudDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBBY2NvdW50IE9iamVjdFxyXG4gICAgICogQHByYXJhbSBhY2NvdW50SWRlbnRpZmllclxyXG4gICAgICogQHBhcmFtIGhvbWVBY2NvdW50SWRlbnRpZmllclxyXG4gICAgICogQHBhcmFtIHVzZXJOYW1lXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICogQHBhcmFtIGlkVG9rZW5cclxuICAgICAqIEBwYXJhbSBzaWRcclxuICAgICAqIEBwYXJhbSBlbnZpcm9ubWVudFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50SWRlbnRpZmllcjogc3RyaW5nLCBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZywgdXNlck5hbWU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBpZFRva2VuOiBPYmplY3QsIHNpZDogc3RyaW5nLCAgZW52aXJvbm1lbnQ6IHN0cmluZykge1xyXG4gICAgICB0aGlzLmFjY291bnRJZGVudGlmaWVyID0gYWNjb3VudElkZW50aWZpZXI7XHJcbiAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gaG9tZUFjY291bnRJZGVudGlmaWVyO1xyXG4gICAgICB0aGlzLnVzZXJOYW1lID0gdXNlck5hbWU7XHJcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuaWRUb2tlbiA9IGlkVG9rZW47XHJcbiAgICAgIHRoaXMuc2lkID0gc2lkO1xyXG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAcGFyYW0gaWRUb2tlblxyXG4gICAgICogQHBhcmFtIGNsaWVudEluZm9cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUFjY291bnQoaWRUb2tlbjogSWRUb2tlbiwgY2xpZW50SW5mbzogQ2xpZW50SW5mbyk6IEFjY291bnQge1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYWNjb3VudElkZW50aWZpZXJcclxuICAgICAgICBjb25zdCBhY2NvdW50SWRlbnRpZmllcjogc3RyaW5nID0gaWRUb2tlbi5vYmplY3RJZCB8fCAgaWRUb2tlbi5zdWJqZWN0O1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgaG9tZUFjY291bnRJZGVudGlmaWVyXHJcbiAgICAgICAgY29uc3QgdWlkOiBzdHJpbmcgPSBjbGllbnRJbmZvID8gY2xpZW50SW5mby51aWQgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHV0aWQ6IHN0cmluZyA9IGNsaWVudEluZm8gPyBjbGllbnRJbmZvLnV0aWQgOiBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKCFVdGlscy5pc0VtcHR5KHVpZCkgJiYgIVV0aWxzLmlzRW1wdHkodXRpZCkpIHtcclxuICAgICAgICAgICAgaG9tZUFjY291bnRJZGVudGlmaWVyID0gVXRpbHMuYmFzZTY0RW5jb2RlU3RyaW5nVXJsU2FmZSh1aWQpICsgXCIuXCIgKyBVdGlscy5iYXNlNjRFbmNvZGVTdHJpbmdVcmxTYWZlKHV0aWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEFjY291bnQoYWNjb3VudElkZW50aWZpZXIsIGhvbWVBY2NvdW50SWRlbnRpZmllciwgaWRUb2tlbi5wcmVmZXJyZWROYW1lLCBpZFRva2VuLm5hbWUsIGlkVG9rZW4uZGVjb2RlZElkVG9rZW4sIGlkVG9rZW4uc2lkLCBpZFRva2VuLmlzc3Vlcik7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IEF1dGhvcml0eSwgQXV0aG9yaXR5VHlwZSB9IGZyb20gXCIuL0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBYaHJDbGllbnQgfSBmcm9tIFwiLi9YSFJDbGllbnRcIjtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWFkQXV0aG9yaXR5IGV4dGVuZHMgQXV0aG9yaXR5IHtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBBYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50OiBzdHJpbmcgPSBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb24vZGlzY292ZXJ5L2luc3RhbmNlXCI7XHJcblxyXG4gIHByaXZhdGUgZ2V0IEFhZEluc3RhbmNlRGlzY292ZXJ5RW5kcG9pbnRVcmwoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIGAke0FhZEF1dGhvcml0eS5BYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50fT9hcGktdmVyc2lvbj0xLjAmYXV0aG9yaXphdGlvbl9lbmRwb2ludD0ke3RoaXMuQ2Fub25pY2FsQXV0aG9yaXR5fW9hdXRoMi92Mi4wL2F1dGhvcml6ZWA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihhdXRob3JpdHksIHZhbGlkYXRlQXV0aG9yaXR5KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgQXV0aG9yaXR5VHlwZSgpOiBBdXRob3JpdHlUeXBlIHtcclxuICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkFhZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRydXN0ZWRIb3N0TGlzdDogYW55ID0ge1xyXG4gICAgXCJsb2dpbi53aW5kb3dzLm5ldFwiOiBcImxvZ2luLndpbmRvd3MubmV0XCIsXHJcbiAgICBcImxvZ2luLmNoaW5hY2xvdWRhcGkuY25cIjogXCJsb2dpbi5jaGluYWNsb3VkYXBpLmNuXCIsXHJcbiAgICBcImxvZ2luLmNsb3VkZ292YXBpLnVzXCI6IFwibG9naW4uY2xvdWRnb3ZhcGkudXNcIixcclxuICAgIFwibG9naW4ubWljcm9zb2Z0b25saW5lLmNvbVwiOiBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS5jb21cIixcclxuICAgIFwibG9naW4ubWljcm9zb2Z0b25saW5lLmRlXCI6IFwibG9naW4ubWljcm9zb2Z0b25saW5lLmRlXCIsXHJcbiAgICBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS51c1wiOiBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS51c1wiXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIHByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIE9JREMgZW5kcG9pbnRcclxuICAgKiBPbmx5IHJlc3BvbmRzIHdpdGggdGhlIGVuZHBvaW50XHJcbiAgICovXHJcbiAgcHVibGljIEdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdFByb21pc2U6IFByb21pc2U8c3RyaW5nPiA9IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT5cclxuICAgICAgcmVzb2x2ZSh0aGlzLkRlZmF1bHRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQpKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuSXNWYWxpZGF0aW9uRW5hYmxlZCkge1xyXG4gICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaG9zdDogc3RyaW5nID0gdGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydDtcclxuICAgIGlmICh0aGlzLklzSW5UcnVzdGVkSG9zdExpc3QoaG9zdCkpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNsaWVudDogWGhyQ2xpZW50ID0gbmV3IFhockNsaWVudCgpO1xyXG5cclxuICAgIHJldHVybiBjbGllbnQuc2VuZFJlcXVlc3RBc3luYyh0aGlzLkFhZEluc3RhbmNlRGlzY292ZXJ5RW5kcG9pbnRVcmwsIFwiR0VUXCIsIHRydWUpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS50ZW5hbnRfZGlzY292ZXJ5X2VuZHBvaW50O1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGhvc3QgaXMgaW4gYSBsaXN0IG9mIHRydXN0ZWQgaG9zdHNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gVGhlIGhvc3QgdG8gbG9vayB1cFxyXG4gICAqL1xyXG4gIHB1YmxpYyBJc0luVHJ1c3RlZEhvc3RMaXN0KGhvc3Q6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEFhZEF1dGhvcml0eS5UcnVzdGVkSG9zdExpc3RbaG9zdC50b0xvd2VyQ2FzZSgpXTtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbi8qKlxyXG4gKiBYSFIgY2xpZW50IGZvciBKU09OIGVuZHBvaW50c1xyXG4gKiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9hc3luYy1wcm9taXNlXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBYaHJDbGllbnQge1xyXG4gIHB1YmxpYyBzZW5kUmVxdWVzdEFzeW5jKHVybDogc3RyaW5nLCBtZXRob2Q6IHN0cmluZywgZW5hYmxlQ2FjaGluZz86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCAvKmFzeW5jOiAqLyB0cnVlKTtcclxuICAgICAgaWYgKGVuYWJsZUNhY2hpbmcpIHtcclxuICAgICAgICAvLyBUT0RPOiAoc2hpdmIpIGVuc3VyZSB0aGF0IHRoaXMgY2FuIGJlIGNhY2hlZFxyXG4gICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ2FjaGUtQ29udHJvbFwiLCBcIlB1YmxpY1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgeGhyLm9ubG9hZCA9IChldikgPT4ge1xyXG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgfHwgeGhyLnN0YXR1cyA+PSAzMDApIHtcclxuICAgICAgICAgICAgICByZWplY3QodGhpcy5oYW5kbGVFcnJvcih4aHIucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICB2YXIganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICByZWplY3QodGhpcy5oYW5kbGVFcnJvcih4aHIucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmVzb2x2ZShqc29uUmVzcG9uc2UpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgeGhyLm9uZXJyb3IgPSAoZXYpID0+IHtcclxuICAgICAgICByZWplY3QoeGhyLnN0YXR1cyk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAobWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBcIm5vdCBpbXBsZW1lbnRlZFwiO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoYW5kbGVFcnJvcihyZXNwb25zZVRleHQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICB2YXIganNvblJlc3BvbnNlO1xyXG4gICAgdHJ5IHtcclxuICAgICAganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xyXG4gICAgICBpZiAoanNvblJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICByZXR1cm4ganNvblJlc3BvbnNlLmVycm9yO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhyb3cgcmVzcG9uc2VUZXh0O1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZVRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIENhY2hlIGxvY2F0aW9uIG9wdGlvbnMgc3VwcG9ydGVkIGJ5IE1TQUwgYXJlOlxyXG4gKiAtIGxvY2FsIHN0b3JhZ2U6IE1TQUwgdXNlcyBicm93c2VycyBsb2NhbCBzdG9yYWdlIHRvIHN0b3JlIGl0cyBjYWNoZVxyXG4gKiAtIHNlc3Npb24gc3RvcmFnZTogTVNBTCB1c2VzIHRoZSBicm93c2VycyBzZXNzaW9uIHN0b3JhZ2UgdG8gc3RvcmUgaXRzIGNhY2hlXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDYWNoZUxvY2F0aW9uID0gXCJsb2NhbFN0b3JhZ2VcIiB8IFwic2Vzc2lvblN0b3JhZ2VcIjtcclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0cyBmb3IgdGhlIENvbmZpZ3VyYXRpb24gT3B0aW9uc1xyXG4gKi9cclxuY29uc3QgRlJBTUVfVElNRU9VVCA9IDYwMDA7XHJcbmNvbnN0IE9GRlNFVCA9IDMwMDtcclxuY29uc3QgTkFWSUdBVEVfRlJBTUVfV0FJVCA9IDUwMDtcclxuXHJcblxyXG4vKipcclxuICogQHR5cGUgQXV0aE9wdGlvbnM6IFVzZSB0aGlzIHRvIGNvbmZpZ3VyZSB0aGUgYXV0aCBvcHRpb25zIGluIHRoZSBDb25maWd1cmF0aW9uIG9iamVjdFxyXG4gKlxyXG4gKiAgLSBjbGllbnRJZCAgICAgICAgICAgICAgICAgICAgLSBDbGllbnQgSUQgb2YgeW91ciBhcHAgcmVnaXN0ZXJlZCB3aXRoIG91ciBBcHBsaWNhdGlvbiByZWdpc3RyYXRpb24gcG9ydGFsIDogaHR0cHM6Ly9wb3J0YWwuYXp1cmUuY29tLyNibGFkZS9NaWNyb3NvZnRfQUFEX0lBTS9BY3RpdmVEaXJlY3RvcnlNZW51QmxhZGUvUmVnaXN0ZXJlZEFwcHNQcmV2aWV3IGluIE1pY3Jvc29mdCBJZGVudGl0eSBQbGF0Zm9ybVxyXG4gKiAgLSBhdXRob3JpdHkgICAgICAgICAgICAgICAgICAgLSBZb3UgY2FuIGNvbmZpZ3VyZSBhIHNwZWNpZmljIGF1dGhvcml0eSwgZGVmYXVsdHMgdG8gXCIgXCIgb3IgXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uXCJcclxuICogIC0gdmFsaWRhdGVBdXRob3JpdHkgICAgICAgICAgIC0gVXNlZCB0byB0dXJuIGF1dGhvcml0eSB2YWxpZGF0aW9uIG9uL29mZi4gV2hlbiBzZXQgdG8gdHJ1ZSAoZGVmYXVsdCksIE1TQUwgd2lsbCBjb21wYXJlIHRoZSBhcHBsaWNhdGlvbidzIGF1dGhvcml0eSBhZ2FpbnN0IHdlbGwta25vd24gVVJMcyB0ZW1wbGF0ZXMgcmVwcmVzZW50aW5nIHdlbGwtZm9ybWVkIGF1dGhvcml0aWVzLiBJdCBpcyB1c2VmdWwgd2hlbiB0aGUgYXV0aG9yaXR5IGlzIG9idGFpbmVkIGF0IHJ1biB0aW1lIHRvIHByZXZlbnQgTVNBTCBmcm9tIGRpc3BsYXlpbmcgYXV0aGVudGljYXRpb24gcHJvbXB0cyBmcm9tIG1hbGljaW91cyBwYWdlcy5cclxuICogIC0gcmVkaXJlY3RVcmkgICAgICAgICAgICAgICAgIC0gVGhlIHJlZGlyZWN0IFVSSSBvZiB0aGUgYXBwbGljYXRpb24sIHRoaXMgc2hvdWxkIGJlIHNhbWUgYXMgdGhlIHZhbHVlIGluIHRoZSBhcHBsaWNhdGlvbiByZWdpc3RyYXRpb24gcG9ydGFsLkRlZmF1bHRzIHRvIGB3aW5kb3cubG9jYXRpb24uaHJlZmAuXHJcbiAqICAtIHBvc3RMb2dvdXRSZWRpcmVjdFVyaSAgICAgICAtIFVzZWQgdG8gcmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhpcyBsb2NhdGlvbiBhZnRlciBsb2dvdXQuIERlZmF1bHRzIHRvIGB3aW5kb3cubG9jYXRpb24uaHJlZmAuXHJcbiAqICAtIHN0YXRlICAgICAgICAgICAgICAgICAgICAgICAtIFVzZSB0byBzZW5kIHRoZSBzdGF0ZSBwYXJhbWV0ZXIgd2l0aCBhdXRoZW50aWNhdGlvbiByZXF1ZXN0XHJcbiAqICAtIG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmwgICAtIFVzZWQgdG8gdHVybiBvZmYgZGVmYXVsdCBuYXZpZ2F0aW9uIHRvIHN0YXJ0IHBhZ2UgYWZ0ZXIgbG9naW4uIERlZmF1bHQgaXMgdHJ1ZS4gVGhpcyBpcyB1c2VkIG9ubHkgZm9yIHJlZGlyZWN0IGZsb3dzLlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQXV0aE9wdGlvbnMgPSB7XHJcbiAgY2xpZW50SWQ6IHN0cmluZztcclxuICBhdXRob3JpdHk/OiBzdHJpbmc7XHJcbiAgdmFsaWRhdGVBdXRob3JpdHk/OiBib29sZWFuO1xyXG4gIHJlZGlyZWN0VXJpPzogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XHJcbiAgcG9zdExvZ291dFJlZGlyZWN0VXJpPzogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XHJcbiAgbmF2aWdhdGVUb0xvZ2luUmVxdWVzdFVybD86IGJvb2xlYW47XHJcbn07XHJcblxyXG4vKipcclxuICogVXNlIHRoaXMgdG8gY29uZmlndXJlIHRoZSBiZWxvdyBjYWNoZSBjb25maWd1cmF0aW9uIG9wdGlvbnM6XHJcbiAqXHJcbiAqIC0gY2FjaGVMb2NhdGlvbiAgICAgICAgICAgIC0gVXNlZCB0byBzcGVjaWZ5IHRoZSBjYWNoZUxvY2F0aW9uIHVzZXIgd2FudHMgdG8gc2V0LiBWYWxpZCB2YWx1ZXMgYXJlIFwibG9jYWxTdG9yYWdlXCIgYW5kIFwic2Vzc2lvblN0b3JhZ2VcIlxyXG4gKiAtIHN0b3JlQXV0aFN0YXRlSW5Db29raWUgICAtIElmIHNldCwgTVNBTCBzdG9yZSdzIHRoZSBhdXRoIHJlcXVlc3Qgc3RhdGUgcmVxdWlyZWQgZm9yIHZhbGlkYXRpb24gb2YgdGhlIGF1dGggZmxvd3MgaW4gdGhlIGJyb3dzZXIgY29va2llcy4gQnkgZGVmYXVsdCB0aGlzIGZsYWcgaXMgc2V0IHRvIGZhbHNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2FjaGVPcHRpb25zID0ge1xyXG4gIGNhY2hlTG9jYXRpb24/OiBDYWNoZUxvY2F0aW9uO1xyXG4gIHN0b3JlQXV0aFN0YXRlSW5Db29raWU/OiBib29sZWFuO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIExpYnJhcnkgU3BlY2lmaWMgT3B0aW9uc1xyXG4gKlxyXG4gKiAtIGxvZ2dlciAgICAgICAgICAgICAgICAgICAgICAgLSBVc2VkIHRvIGluaXRpYWxpemUgdGhlIExvZ2dlciBvYmplY3Q7IFRPRE86IEV4cGFuZCBvbiBsb2dnZXIgZGV0YWlscyBvciBsaW5rIHRvIHRoZSBkb2N1bWVudGF0aW9uIG9uIGxvZ2dlclxyXG4gKiAtIGxvYWRGcmFtZVRpbWVvdXQgICAgICAgICAgICAgLSBtYXhpbXVtIHRpbWUgdGhlIGxpYnJhcnkgc2hvdWxkIHdhaXQgZm9yIGEgZnJhbWUgdG8gbG9hZFxyXG4gKiAtIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHMgICAgLSBzZXRzIHRoZSB3aW5kb3cgb2Ygb2Zmc2V0IG5lZWRlZCB0byByZW5ldyB0aGUgdG9rZW4gYmVmb3JlIGV4cGlyeVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3lzdGVtT3B0aW9ucyA9IHtcclxuICBsb2dnZXI/OiBMb2dnZXI7XHJcbiAgbG9hZEZyYW1lVGltZW91dD86IG51bWJlcjtcclxuICB0b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzPzogbnVtYmVyO1xyXG4gIG5hdmlnYXRlRnJhbWVXYWl0PzogbnVtYmVyO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFwcC9GcmFtZXdvcmsgc3BlY2lmaWMgZW52aXJvbm1lbnQgc3VwcG9ydFxyXG4gKlxyXG4gKiAtIGlzQW5ndWxhciAgICAgICAgICAgICAgICAtIGZsYWcgc2V0IHRvIGRldGVybWluZSBpZiBpdCBpcyBBbmd1bGFyIEZyYW1ld29yay4gTVNBTCB1c2VzIHRoaXMgdG8gYnJvYWRjYXN0IHRva2Vucy4gTW9yZSB0byBjb21lIGhlcmU6IGRldGFuZ2xlIHRoaXMgZGVwZW5kZW5jeSBmcm9tIGNvcmUuXHJcbiAqIC0gdW5wcm90ZWN0ZWRSZXNvdXJjZXMgICAgIC0gQXJyYXkgb2YgVVJJJ3Mgd2hpY2ggYXJlIHVucHJvdGVjdGVkIHJlc291cmNlcy4gTVNBTCB3aWxsIG5vdCBhdHRhY2ggYSB0b2tlbiB0byBvdXRnb2luZyByZXF1ZXN0cyB0aGF0IGhhdmUgdGhlc2UgVVJJLiBEZWZhdWx0cyB0byAnbnVsbCcuXHJcbiAqIC0gcHJvdGVjdGVkUmVzb3VyY2VNYXAgICAgIC0gVGhpcyBpcyBtYXBwaW5nIG9mIHJlc291cmNlcyB0byBzY29wZXMgdXNlZCBieSBNU0FMIGZvciBhdXRvbWF0aWNhbGx5IGF0dGFjaGluZyBhY2Nlc3MgdG9rZW5zIGluIHdlYiBBUEkgY2FsbHMuQSBzaW5nbGUgYWNjZXNzIHRva2VuIGlzIG9idGFpbmVkIGZvciB0aGUgcmVzb3VyY2UuIFNvIHlvdSBjYW4gbWFwIGEgc3BlY2lmaWMgcmVzb3VyY2UgcGF0aCBhcyBmb2xsb3dzOiB7XCJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20vdjEuMC9tZVwiLCBbXCJ1c2VyLnJlYWRcIl19LCBvciB0aGUgYXBwIFVSTCBvZiB0aGUgcmVzb3VyY2UgYXM6IHtcImh0dHBzOi8vZ3JhcGgubWljcm9zb2Z0LmNvbS9cIiwgW1widXNlci5yZWFkXCIsIFwibWFpbC5zZW5kXCJdfS4gVGhpcyBpcyByZXF1aXJlZCBmb3IgQ09SUyBjYWxscy5cclxuICpcclxuICovXHJcbmV4cG9ydCB0eXBlIEZyYW1ld29ya09wdGlvbnMgPSB7XHJcbiAgaXNBbmd1bGFyPzogYm9vbGVhbjtcclxuICB1bnByb3RlY3RlZFJlc291cmNlcz86IEFycmF5PHN0cmluZz47XHJcbiAgcHJvdGVjdGVkUmVzb3VyY2VNYXA/OiBNYXA8c3RyaW5nLCBBcnJheTxzdHJpbmc+PjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBVc2UgdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIGNvbmZpZ3VyZSBNU0FMIGFuZCBpbml0aWFsaXplIHRoZSBVc2VyQWdlbnRBcHBsaWNhdGlvbi5cclxuICpcclxuICogVGhpcyBvYmplY3QgYWxsb3dzIHlvdSB0byBjb25maWd1cmUgaW1wb3J0YW50IGVsZW1lbnRzIG9mIE1TQUwgZnVuY3Rpb25hbGl0eTpcclxuICogLSBhdXRoOiB0aGlzIGlzIHdoZXJlIHlvdSBjb25maWd1cmUgYXV0aCBlbGVtZW50cyBsaWtlIGNsaWVudElELCAgYXV0aG9yaXR5IHVzZWQgZm9yIGF1dGhlbnRpY2F0aW5nIGFnYWluc3QgdGhlIE1pY3Jvc29mdCBJZGVudGl0eSBQbGF0Zm9ybVxyXG4gKiAtIGNhY2hlOiB0aGlzIGlzIHdoZXJlIHlvdSBjb25maWd1cmUgY2FjaGUgbG9jYXRpb24gYW5kIHdoZXRoZXIgdG8gc3RvcmUgY2FjaGUgaW4gY29va2llc1xyXG4gKiAtIHN5c3RlbTogdGhpcyBpcyB3aGVyZSB5b3UgY2FuIGNvbmZpZ3VyZSB0aGUgbG9nZ2VyLCBmcmFtZSB0aW1lb3V0IGV0Yy5cclxuICogLSBmcmFtZXdvcms6IHRoaXMgaXMgd2hlcmUgeW91IGNhbiBjb25maWd1cmUgdGhlIHJ1bm5pbmcgbW9kZSBvZiBhbmd1bGFyLiBNb3JlIHRvIGNvbWUgaGVyZSBzb29uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29uZmlndXJhdGlvbiA9IHtcclxuICBhdXRoOiBBdXRoT3B0aW9ucyxcclxuICBjYWNoZT86IENhY2hlT3B0aW9ucyxcclxuICBzeXN0ZW0/OiBTeXN0ZW1PcHRpb25zLFxyXG4gIGZyYW1ld29yaz86IEZyYW1ld29ya09wdGlvbnNcclxufTtcclxuXHJcbmNvbnN0IERFRkFVTFRfQVVUSF9PUFRJT05TOiBBdXRoT3B0aW9ucyA9IHtcclxuICBjbGllbnRJZDogXCJcIixcclxuICBhdXRob3JpdHk6IG51bGwsXHJcbiAgdmFsaWRhdGVBdXRob3JpdHk6IHRydWUsXHJcbiAgcmVkaXJlY3RVcmk6ICgpID0+IFV0aWxzLmdldERlZmF1bHRSZWRpcmVjdFVyaSgpLFxyXG4gIHBvc3RMb2dvdXRSZWRpcmVjdFVyaTogKCkgPT4gVXRpbHMuZ2V0RGVmYXVsdFJlZGlyZWN0VXJpKCksXHJcbiAgbmF2aWdhdGVUb0xvZ2luUmVxdWVzdFVybDogdHJ1ZVxyXG59O1xyXG5cclxuY29uc3QgREVGQVVMVF9DQUNIRV9PUFRJT05TOiBDYWNoZU9wdGlvbnMgPSB7XHJcbiAgY2FjaGVMb2NhdGlvbjogXCJzZXNzaW9uU3RvcmFnZVwiLFxyXG4gIHN0b3JlQXV0aFN0YXRlSW5Db29raWU6IGZhbHNlXHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX1NZU1RFTV9PUFRJT05TOiBTeXN0ZW1PcHRpb25zID0ge1xyXG4gIGxvZ2dlcjogbmV3IExvZ2dlcihudWxsKSxcclxuICBsb2FkRnJhbWVUaW1lb3V0OiBGUkFNRV9USU1FT1VULFxyXG4gIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHM6IE9GRlNFVCxcclxuICBuYXZpZ2F0ZUZyYW1lV2FpdDogTkFWSUdBVEVfRlJBTUVfV0FJVFxyXG59O1xyXG5cclxuY29uc3QgREVGQVVMVF9GUkFNRVdPUktfT1BUSU9OUzogRnJhbWV3b3JrT3B0aW9ucyA9IHtcclxuICBpc0FuZ3VsYXI6IGZhbHNlLFxyXG4gIHVucHJvdGVjdGVkUmVzb3VyY2VzOiBuZXcgQXJyYXk8c3RyaW5nPigpLFxyXG4gIHByb3RlY3RlZFJlc291cmNlTWFwOiBuZXcgTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj4oKVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1TQUwgZnVuY3Rpb24gdGhhdCBzZXRzIHRoZSBkZWZhdWx0IG9wdGlvbnMgd2hlbiBub3QgZXhwbGljaXRseSBjb25maWd1cmVkIGZyb20gYXBwIGRldmVsb3BlclxyXG4gKlxyXG4gKiBAcGFyYW0gVEF1dGhPcHRpb25zXHJcbiAqIEBwYXJhbSBUQ2FjaGVPcHRpb25zXHJcbiAqIEBwYXJhbSBUU3lzdGVtT3B0aW9uc1xyXG4gKiBAcGFyYW0gVEZyYW1ld29ya09wdGlvbnNcclxuICpcclxuICogQHJldHVybnMgVENvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29uZmlndXJhdGlvbih7IGF1dGgsIGNhY2hlID0ge30sIHN5c3RlbSA9IHt9LCBmcmFtZXdvcmsgPSB7fX06IENvbmZpZ3VyYXRpb24pOiBDb25maWd1cmF0aW9uIHtcclxuICBjb25zdCBvdmVybGF5ZWRDb25maWc6IENvbmZpZ3VyYXRpb24gPSB7XHJcbiAgICBhdXRoOiB7IC4uLkRFRkFVTFRfQVVUSF9PUFRJT05TLCAuLi5hdXRoIH0sXHJcbiAgICBjYWNoZTogeyAuLi5ERUZBVUxUX0NBQ0hFX09QVElPTlMsIC4uLmNhY2hlIH0sXHJcbiAgICBzeXN0ZW06IHsgLi4uREVGQVVMVF9TWVNURU1fT1BUSU9OUywgLi4uc3lzdGVtIH0sXHJcbiAgICBmcmFtZXdvcms6IHsgLi4uREVGQVVMVF9GUkFNRVdPUktfT1BUSU9OUywgLi4uZnJhbWV3b3JrIH1cclxuICB9O1xyXG4gIHJldHVybiBvdmVybGF5ZWRDb25maWc7XHJcbn1cclxuXHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBLZXktVmFsdWUgdHlwZSB0byBzdXBwb3J0IHF1ZXJ5UGFyYW1zIGFuZCBleHRyYVF1ZXJ5UGFyYW1zXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBRUERpY3QgPSB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcclxuXHJcbi8qKlxyXG4gKiBAbGluayBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnN9QXV0aGVudGljYXRpb25QYXJhbWV0ZXJzXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgPSB7XHJcbiAgICBzY29wZXM/OiBBcnJheTxzdHJpbmc+O1xyXG4gICAgZXh0cmFTY29wZXNUb0NvbnNlbnQ/OiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcHJvbXB0Pzogc3RyaW5nO1xyXG4gICAgZXh0cmFRdWVyeVBhcmFtZXRlcnM/OiBRUERpY3Q7XHJcbiAgICBjbGFpbXNSZXF1ZXN0Pzogc3RyaW5nO1xyXG4gICAgYXV0aG9yaXR5Pzogc3RyaW5nO1xyXG4gICAgc3RhdGU/OiBzdHJpbmc7XHJcbiAgICBjb3JyZWxhdGlvbklkPzogc3RyaW5nO1xyXG4gICAgYWNjb3VudD86IEFjY291bnQ7XHJcbiAgICBzaWQ/OiBzdHJpbmc7XHJcbiAgICBsb2dpbkhpbnQ/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDbGFpbXNSZXF1ZXN0KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycykge1xyXG4gICAgaWYgKCFyZXF1ZXN0LmNsYWltc1JlcXVlc3QpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgY2xhaW1zO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjbGFpbXMgPSBKU09OLnBhcnNlKHJlcXVlc3QuY2xhaW1zUmVxdWVzdCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3IoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogTW9yZSB2YWxpZGF0aW9uIHdpbGwgYmUgYWRkZWQgd2hlbiB0aGUgc2VydmVyIHRlYW0gdGVsbHMgdXMgaG93IHRoZXkgaGF2ZSBhY3R1YWxseSBpbXBsZW1lbnRlZCBjbGFpbXNcclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgU2VydmVyRXJyb3IgfSBmcm9tIFwiLi9TZXJ2ZXJFcnJvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlID0ge1xyXG4gICAgbG9naW5SZXF1aXJlZDoge1xyXG4gICAgICAgIGNvZGU6IFwibG9naW5fcmVxdWlyZWRcIlxyXG4gICAgfSxcclxuICAgIGludGVyYWN0aW9uUmVxdWlyZWQ6IHtcclxuICAgICAgICBjb2RlOiBcImludGVyYWN0aW9uX3JlcXVpcmVkXCJcclxuICAgIH0sXHJcbiAgICBjb25zZW50UmVxdWlyZWQ6IHtcclxuICAgICAgICBjb2RlOiBcImNvbnNlbnRfcmVxdWlyZWRcIlxyXG4gICAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGUgdXNlciBpcyByZXF1aXJlZCB0byBwZXJmb3JtIGFuIGludGVyYWN0aXZlIHRva2VuIHJlcXVlc3QuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciBleHRlbmRzIFNlcnZlckVycm9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvclwiO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvci5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVMb2dpblJlcXVpcmVkQXV0aEVycm9yKGVycm9yRGVzYzogc3RyaW5nKTogSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmxvZ2luUmVxdWlyZWQuY29kZSwgZXJyb3JEZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihlcnJvckRlc2M6IHN0cmluZyk6IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5pbnRlcmFjdGlvblJlcXVpcmVkLmNvZGUsIGVycm9yRGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUNvbnNlbnRSZXF1aXJlZEF1dGhFcnJvcihlcnJvckRlc2M6IHN0cmluZyk6IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5jb25zZW50UmVxdWlyZWQuY29kZSwgZXJyb3JEZXNjKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuL0FjY291bnRcIjtcclxuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuL0lkVG9rZW5cIjtcclxuXHJcbi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5leHBvcnQgdHlwZSBBdXRoUmVzcG9uc2UgPSB7XHJcbiAgICB1bmlxdWVJZDogc3RyaW5nO1xyXG4gICAgdGVuYW50SWQ6IHN0cmluZztcclxuICAgIHRva2VuVHlwZTogc3RyaW5nO1xyXG4gICAgaWRUb2tlbjogSWRUb2tlbjtcclxuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgICBzY29wZXM6IEFycmF5PHN0cmluZz47XHJcbiAgICBleHBpcmVzT246IERhdGU7XHJcbiAgICBhY2NvdW50OiBBY2NvdW50O1xyXG4gICAgYWNjb3VudFN0YXRlOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRSZXNwb25zZVN0YXRlT25seShzdGF0ZTogc3RyaW5nKSA6IEF1dGhSZXNwb25zZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVuaXF1ZUlkOiBcIlwiLFxyXG4gICAgICAgIHRlbmFudElkOiBcIlwiLFxyXG4gICAgICAgIHRva2VuVHlwZTogXCJcIixcclxuICAgICAgICBpZFRva2VuOiBudWxsLFxyXG4gICAgICAgIGFjY2Vzc1Rva2VuOiBcIlwiLFxyXG4gICAgICAgIHNjb3BlczogbnVsbCxcclxuICAgICAgICBleHBpcmVzT246IG51bGwsXHJcbiAgICAgICAgYWNjb3VudDogbnVsbCxcclxuICAgICAgICBhY2NvdW50U3RhdGU6IHN0YXRlXHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCB7IFVzZXJBZ2VudEFwcGxpY2F0aW9uIH0gZnJvbSBcIi4vVXNlckFnZW50QXBwbGljYXRpb25cIjtcclxuZXhwb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XHJcbmV4cG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XHJcbmV4cG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XHJcbmV4cG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5leHBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcclxuZXhwb3J0IHsgQ2FjaGVSZXN1bHQgfSBmcm9tIFwiLi9Vc2VyQWdlbnRBcHBsaWNhdGlvblwiO1xyXG5leHBvcnQgeyBDYWNoZUxvY2F0aW9uLCBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4vQ29uZmlndXJhdGlvblwiO1xyXG5leHBvcnQgeyBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgfSBmcm9tIFwiLi9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnNcIjtcclxuZXhwb3J0IHsgQXV0aFJlc3BvbnNlIH0gZnJvbSBcIi4vQXV0aFJlc3BvbnNlXCI7XHJcblxyXG4vLyBFcnJvcnNcclxuZXhwb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQXV0aEVycm9yXCI7XHJcbmV4cG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5leHBvcnQgeyBTZXJ2ZXJFcnJvciB9IGZyb20gXCIuL2Vycm9yL1NlcnZlckVycm9yXCI7XHJcbmV4cG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xyXG5leHBvcnQgeyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvclwiO1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbktleSB7XHJcblxyXG4gIGF1dGhvcml0eTogc3RyaW5nO1xyXG4gIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgc2NvcGVzOiBzdHJpbmc7XHJcbiAgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGF1dGhvcml0eTogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nLCBzY29wZXM6IHN0cmluZywgdWlkOiBzdHJpbmcsIHV0aWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5hdXRob3JpdHkgPSBVdGlscy5DYW5vbmljYWxpemVVcmkoYXV0aG9yaXR5KTtcclxuICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcclxuICAgIHRoaXMuc2NvcGVzID0gc2NvcGVzO1xyXG4gICAgdGhpcy5ob21lQWNjb3VudElkZW50aWZpZXIgPSBVdGlscy5iYXNlNjRFbmNvZGVTdHJpbmdVcmxTYWZlKHVpZCkgKyBcIi5cIiArIFV0aWxzLmJhc2U2NEVuY29kZVN0cmluZ1VybFNhZmUodXRpZCk7XHJcbiAgfVxyXG59XHJcbiIsIi8qXG4gKiAgYmFzZTY0LmpzXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBCU0QgMy1DbGF1c2UgTGljZW5zZS5cbiAqICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqXG4gKiAgUmVmZXJlbmNlczpcbiAqICAgIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0XG4gKi9cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShnbG9iYWwpXG4gICAgICAgIDogdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kXG4gICAgICAgID8gZGVmaW5lKGZhY3RvcnkpIDogZmFjdG9yeShnbG9iYWwpXG59KChcbiAgICB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmXG4gICAgICAgIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3dcbiAgICAgICAgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFxuOiB0aGlzXG4pLCBmdW5jdGlvbihnbG9iYWwpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgLy8gZXhpc3RpbmcgdmVyc2lvbiBmb3Igbm9Db25mbGljdCgpXG4gICAgZ2xvYmFsID0gZ2xvYmFsIHx8IHt9O1xuICAgIHZhciBfQmFzZTY0ID0gZ2xvYmFsLkJhc2U2NDtcbiAgICB2YXIgdmVyc2lvbiA9IFwiMi41LjFcIjtcbiAgICAvLyBpZiBub2RlLmpzIGFuZCBOT1QgUmVhY3QgTmF0aXZlLCB3ZSB1c2UgQnVmZmVyXG4gICAgdmFyIGJ1ZmZlcjtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IGV2YWwoXCJyZXF1aXJlKCdidWZmZXInKS5CdWZmZXJcIik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgYnVmZmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnN0YW50c1xuICAgIHZhciBiNjRjaGFyc1xuICAgICAgICA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcbiAgICB2YXIgYjY0dGFiID0gZnVuY3Rpb24oYmluKSB7XG4gICAgICAgIHZhciB0ID0ge307XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYmluLmxlbmd0aDsgaSA8IGw7IGkrKykgdFtiaW4uY2hhckF0KGkpXSA9IGk7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH0oYjY0Y2hhcnMpO1xuICAgIHZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuICAgIC8vIGVuY29kZXIgc3R1ZmZcbiAgICB2YXIgY2JfdXRvYiA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgaWYgKGMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdmFyIGNjID0gYy5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgcmV0dXJuIGNjIDwgMHg4MCA/IGNcbiAgICAgICAgICAgICAgICA6IGNjIDwgMHg4MDAgPyAoZnJvbUNoYXJDb2RlKDB4YzAgfCAoY2MgPj4+IDYpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGZyb21DaGFyQ29kZSgweDgwIHwgKGNjICYgMHgzZikpKVxuICAgICAgICAgICAgICAgIDogKGZyb21DaGFyQ29kZSgweGUwIHwgKChjYyA+Pj4gMTIpICYgMHgwZikpXG4gICAgICAgICAgICAgICAgICAgKyBmcm9tQ2hhckNvZGUoMHg4MCB8ICgoY2MgPj4+ICA2KSAmIDB4M2YpKVxuICAgICAgICAgICAgICAgICAgICsgZnJvbUNoYXJDb2RlKDB4ODAgfCAoIGNjICAgICAgICAgJiAweDNmKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNjID0gMHgxMDAwMFxuICAgICAgICAgICAgICAgICsgKGMuY2hhckNvZGVBdCgwKSAtIDB4RDgwMCkgKiAweDQwMFxuICAgICAgICAgICAgICAgICsgKGMuY2hhckNvZGVBdCgxKSAtIDB4REMwMCk7XG4gICAgICAgICAgICByZXR1cm4gKGZyb21DaGFyQ29kZSgweGYwIHwgKChjYyA+Pj4gMTgpICYgMHgwNykpXG4gICAgICAgICAgICAgICAgICAgICsgZnJvbUNoYXJDb2RlKDB4ODAgfCAoKGNjID4+PiAxMikgJiAweDNmKSlcbiAgICAgICAgICAgICAgICAgICAgKyBmcm9tQ2hhckNvZGUoMHg4MCB8ICgoY2MgPj4+ICA2KSAmIDB4M2YpKVxuICAgICAgICAgICAgICAgICAgICArIGZyb21DaGFyQ29kZSgweDgwIHwgKCBjYyAgICAgICAgICYgMHgzZikpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHJlX3V0b2IgPSAvW1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGRl18W15cXHgwMC1cXHg3Rl0vZztcbiAgICB2YXIgdXRvYiA9IGZ1bmN0aW9uKHUpIHtcbiAgICAgICAgcmV0dXJuIHUucmVwbGFjZShyZV91dG9iLCBjYl91dG9iKTtcbiAgICB9O1xuICAgIHZhciBjYl9lbmNvZGUgPSBmdW5jdGlvbihjY2MpIHtcbiAgICAgICAgdmFyIHBhZGxlbiA9IFswLCAyLCAxXVtjY2MubGVuZ3RoICUgM10sXG4gICAgICAgIG9yZCA9IGNjYy5jaGFyQ29kZUF0KDApIDw8IDE2XG4gICAgICAgICAgICB8ICgoY2NjLmxlbmd0aCA+IDEgPyBjY2MuY2hhckNvZGVBdCgxKSA6IDApIDw8IDgpXG4gICAgICAgICAgICB8ICgoY2NjLmxlbmd0aCA+IDIgPyBjY2MuY2hhckNvZGVBdCgyKSA6IDApKSxcbiAgICAgICAgY2hhcnMgPSBbXG4gICAgICAgICAgICBiNjRjaGFycy5jaGFyQXQoIG9yZCA+Pj4gMTgpLFxuICAgICAgICAgICAgYjY0Y2hhcnMuY2hhckF0KChvcmQgPj4+IDEyKSAmIDYzKSxcbiAgICAgICAgICAgIHBhZGxlbiA+PSAyID8gJz0nIDogYjY0Y2hhcnMuY2hhckF0KChvcmQgPj4+IDYpICYgNjMpLFxuICAgICAgICAgICAgcGFkbGVuID49IDEgPyAnPScgOiBiNjRjaGFycy5jaGFyQXQob3JkICYgNjMpXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiBjaGFycy5qb2luKCcnKTtcbiAgICB9O1xuICAgIHZhciBidG9hID0gZ2xvYmFsLmJ0b2EgPyBmdW5jdGlvbihiKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwuYnRvYShiKTtcbiAgICB9IDogZnVuY3Rpb24oYikge1xuICAgICAgICByZXR1cm4gYi5yZXBsYWNlKC9bXFxzXFxTXXsxLDN9L2csIGNiX2VuY29kZSk7XG4gICAgfTtcbiAgICB2YXIgX2VuY29kZSA9IGJ1ZmZlciA/XG4gICAgICAgIGJ1ZmZlci5mcm9tICYmIFVpbnQ4QXJyYXkgJiYgYnVmZmVyLmZyb20gIT09IFVpbnQ4QXJyYXkuZnJvbVxuICAgICAgICA/IGZ1bmN0aW9uICh1KSB7XG4gICAgICAgICAgICByZXR1cm4gKHUuY29uc3RydWN0b3IgPT09IGJ1ZmZlci5jb25zdHJ1Y3RvciA/IHUgOiBidWZmZXIuZnJvbSh1KSlcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gICAgICAgIH1cbiAgICAgICAgOiAgZnVuY3Rpb24gKHUpIHtcbiAgICAgICAgICAgIHJldHVybiAodS5jb25zdHJ1Y3RvciA9PT0gYnVmZmVyLmNvbnN0cnVjdG9yID8gdSA6IG5ldyAgYnVmZmVyKHUpKVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygnYmFzZTY0JylcbiAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uICh1KSB7IHJldHVybiBidG9hKHV0b2IodSkpIH1cbiAgICA7XG4gICAgdmFyIGVuY29kZSA9IGZ1bmN0aW9uKHUsIHVyaXNhZmUpIHtcbiAgICAgICAgcmV0dXJuICF1cmlzYWZlXG4gICAgICAgICAgICA/IF9lbmNvZGUoU3RyaW5nKHUpKVxuICAgICAgICAgICAgOiBfZW5jb2RlKFN0cmluZyh1KSkucmVwbGFjZSgvWytcXC9dL2csIGZ1bmN0aW9uKG0wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG0wID09ICcrJyA/ICctJyA6ICdfJztcbiAgICAgICAgICAgIH0pLnJlcGxhY2UoLz0vZywgJycpO1xuICAgIH07XG4gICAgdmFyIGVuY29kZVVSSSA9IGZ1bmN0aW9uKHUpIHsgcmV0dXJuIGVuY29kZSh1LCB0cnVlKSB9O1xuICAgIC8vIGRlY29kZXIgc3R1ZmZcbiAgICB2YXIgcmVfYnRvdSA9IG5ldyBSZWdFeHAoW1xuICAgICAgICAnW1xceEMwLVxceERGXVtcXHg4MC1cXHhCRl0nLFxuICAgICAgICAnW1xceEUwLVxceEVGXVtcXHg4MC1cXHhCRl17Mn0nLFxuICAgICAgICAnW1xceEYwLVxceEY3XVtcXHg4MC1cXHhCRl17M30nXG4gICAgXS5qb2luKCd8JyksICdnJyk7XG4gICAgdmFyIGNiX2J0b3UgPSBmdW5jdGlvbihjY2NjKSB7XG4gICAgICAgIHN3aXRjaChjY2NjLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICB2YXIgY3AgPSAoKDB4MDcgJiBjY2NjLmNoYXJDb2RlQXQoMCkpIDw8IDE4KVxuICAgICAgICAgICAgICAgIHwgICAgKCgweDNmICYgY2NjYy5jaGFyQ29kZUF0KDEpKSA8PCAxMilcbiAgICAgICAgICAgICAgICB8ICAgICgoMHgzZiAmIGNjY2MuY2hhckNvZGVBdCgyKSkgPDwgIDYpXG4gICAgICAgICAgICAgICAgfCAgICAgKDB4M2YgJiBjY2NjLmNoYXJDb2RlQXQoMykpLFxuICAgICAgICAgICAgb2Zmc2V0ID0gY3AgLSAweDEwMDAwO1xuICAgICAgICAgICAgcmV0dXJuIChmcm9tQ2hhckNvZGUoKG9mZnNldCAgPj4+IDEwKSArIDB4RDgwMClcbiAgICAgICAgICAgICAgICAgICAgKyBmcm9tQ2hhckNvZGUoKG9mZnNldCAmIDB4M0ZGKSArIDB4REMwMCkpO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gZnJvbUNoYXJDb2RlKFxuICAgICAgICAgICAgICAgICgoMHgwZiAmIGNjY2MuY2hhckNvZGVBdCgwKSkgPDwgMTIpXG4gICAgICAgICAgICAgICAgICAgIHwgKCgweDNmICYgY2NjYy5jaGFyQ29kZUF0KDEpKSA8PCA2KVxuICAgICAgICAgICAgICAgICAgICB8ICAoMHgzZiAmIGNjY2MuY2hhckNvZGVBdCgyKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gIGZyb21DaGFyQ29kZShcbiAgICAgICAgICAgICAgICAoKDB4MWYgJiBjY2NjLmNoYXJDb2RlQXQoMCkpIDw8IDYpXG4gICAgICAgICAgICAgICAgICAgIHwgICgweDNmICYgY2NjYy5jaGFyQ29kZUF0KDEpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIGJ0b3UgPSBmdW5jdGlvbihiKSB7XG4gICAgICAgIHJldHVybiBiLnJlcGxhY2UocmVfYnRvdSwgY2JfYnRvdSk7XG4gICAgfTtcbiAgICB2YXIgY2JfZGVjb2RlID0gZnVuY3Rpb24oY2NjYykge1xuICAgICAgICB2YXIgbGVuID0gY2NjYy5sZW5ndGgsXG4gICAgICAgIHBhZGxlbiA9IGxlbiAlIDQsXG4gICAgICAgIG4gPSAobGVuID4gMCA/IGI2NHRhYltjY2NjLmNoYXJBdCgwKV0gPDwgMTggOiAwKVxuICAgICAgICAgICAgfCAobGVuID4gMSA/IGI2NHRhYltjY2NjLmNoYXJBdCgxKV0gPDwgMTIgOiAwKVxuICAgICAgICAgICAgfCAobGVuID4gMiA/IGI2NHRhYltjY2NjLmNoYXJBdCgyKV0gPDwgIDYgOiAwKVxuICAgICAgICAgICAgfCAobGVuID4gMyA/IGI2NHRhYltjY2NjLmNoYXJBdCgzKV0gICAgICAgOiAwKSxcbiAgICAgICAgY2hhcnMgPSBbXG4gICAgICAgICAgICBmcm9tQ2hhckNvZGUoIG4gPj4+IDE2KSxcbiAgICAgICAgICAgIGZyb21DaGFyQ29kZSgobiA+Pj4gIDgpICYgMHhmZiksXG4gICAgICAgICAgICBmcm9tQ2hhckNvZGUoIG4gICAgICAgICAmIDB4ZmYpXG4gICAgICAgIF07XG4gICAgICAgIGNoYXJzLmxlbmd0aCAtPSBbMCwgMCwgMiwgMV1bcGFkbGVuXTtcbiAgICAgICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xuICAgIH07XG4gICAgdmFyIF9hdG9iID0gZ2xvYmFsLmF0b2IgPyBmdW5jdGlvbihhKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwuYXRvYihhKTtcbiAgICB9IDogZnVuY3Rpb24oYSl7XG4gICAgICAgIHJldHVybiBhLnJlcGxhY2UoL1xcU3sxLDR9L2csIGNiX2RlY29kZSk7XG4gICAgfTtcbiAgICB2YXIgYXRvYiA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgcmV0dXJuIF9hdG9iKFN0cmluZyhhKS5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL10vZywgJycpKTtcbiAgICB9O1xuICAgIHZhciBfZGVjb2RlID0gYnVmZmVyID9cbiAgICAgICAgYnVmZmVyLmZyb20gJiYgVWludDhBcnJheSAmJiBidWZmZXIuZnJvbSAhPT0gVWludDhBcnJheS5mcm9tXG4gICAgICAgID8gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgcmV0dXJuIChhLmNvbnN0cnVjdG9yID09PSBidWZmZXIuY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAgICAgPyBhIDogYnVmZmVyLmZyb20oYSwgJ2Jhc2U2NCcpKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgcmV0dXJuIChhLmNvbnN0cnVjdG9yID09PSBidWZmZXIuY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAgICAgPyBhIDogbmV3IGJ1ZmZlcihhLCAnYmFzZTY0JykpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbihhKSB7IHJldHVybiBidG91KF9hdG9iKGEpKSB9O1xuICAgIHZhciBkZWNvZGUgPSBmdW5jdGlvbihhKXtcbiAgICAgICAgcmV0dXJuIF9kZWNvZGUoXG4gICAgICAgICAgICBTdHJpbmcoYSkucmVwbGFjZSgvWy1fXS9nLCBmdW5jdGlvbihtMCkgeyByZXR1cm4gbTAgPT0gJy0nID8gJysnIDogJy8nIH0pXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXS9nLCAnJylcbiAgICAgICAgKTtcbiAgICB9O1xuICAgIHZhciBub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBCYXNlNjQgPSBnbG9iYWwuQmFzZTY0O1xuICAgICAgICBnbG9iYWwuQmFzZTY0ID0gX0Jhc2U2NDtcbiAgICAgICAgcmV0dXJuIEJhc2U2NDtcbiAgICB9O1xuICAgIC8vIGV4cG9ydCBCYXNlNjRcbiAgICBnbG9iYWwuQmFzZTY0ID0ge1xuICAgICAgICBWRVJTSU9OOiB2ZXJzaW9uLFxuICAgICAgICBhdG9iOiBhdG9iLFxuICAgICAgICBidG9hOiBidG9hLFxuICAgICAgICBmcm9tQmFzZTY0OiBkZWNvZGUsXG4gICAgICAgIHRvQmFzZTY0OiBlbmNvZGUsXG4gICAgICAgIHV0b2I6IHV0b2IsXG4gICAgICAgIGVuY29kZTogZW5jb2RlLFxuICAgICAgICBlbmNvZGVVUkk6IGVuY29kZVVSSSxcbiAgICAgICAgYnRvdTogYnRvdSxcbiAgICAgICAgZGVjb2RlOiBkZWNvZGUsXG4gICAgICAgIG5vQ29uZmxpY3Q6IG5vQ29uZmxpY3QsXG4gICAgICAgIF9fYnVmZmVyX186IGJ1ZmZlclxuICAgIH07XG4gICAgLy8gaWYgRVM1IGlzIGF2YWlsYWJsZSwgbWFrZSBCYXNlNjQuZXh0ZW5kU3RyaW5nKCkgYXZhaWxhYmxlXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydHkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIG5vRW51bSA9IGZ1bmN0aW9uKHYpe1xuICAgICAgICAgICAgcmV0dXJuIHt2YWx1ZTp2LGVudW1lcmFibGU6ZmFsc2Usd3JpdGFibGU6dHJ1ZSxjb25maWd1cmFibGU6dHJ1ZX07XG4gICAgICAgIH07XG4gICAgICAgIGdsb2JhbC5CYXNlNjQuZXh0ZW5kU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUsICdmcm9tQmFzZTY0Jywgbm9FbnVtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh0aGlzKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLCAndG9CYXNlNjQnLCBub0VudW0oZnVuY3Rpb24gKHVyaXNhZmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZSh0aGlzLCB1cmlzYWZlKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLCAndG9CYXNlNjRVUkknLCBub0VudW0oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlKHRoaXMsIHRydWUpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvL1xuICAgIC8vIGV4cG9ydCBCYXNlNjQgdG8gdGhlIG5hbWVzcGFjZVxuICAgIC8vXG4gICAgaWYgKGdsb2JhbFsnTWV0ZW9yJ10pIHsgLy8gTWV0ZW9yLmpzXG4gICAgICAgIEJhc2U2NCA9IGdsb2JhbC5CYXNlNjQ7XG4gICAgfVxuICAgIC8vIG1vZHVsZS5leHBvcnRzIGFuZCBBTUQgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS5cbiAgICAvLyBtb2R1bGUuZXhwb3J0cyBoYXMgcHJlY2VkZW5jZS5cbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMuQmFzZTY0ID0gZ2xvYmFsLkJhc2U2NDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpeyByZXR1cm4gZ2xvYmFsLkJhc2U2NCB9KTtcbiAgICB9XG4gICAgLy8gdGhhdCdzIGl0IVxuICAgIHJldHVybiB7QmFzZTY0OiBnbG9iYWwuQmFzZTY0fVxufSkpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWNjZXNzVG9rZW5WYWx1ZSB7XHJcblxyXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgaWRUb2tlbjogc3RyaW5nO1xyXG4gIGV4cGlyZXNJbjogc3RyaW5nO1xyXG4gIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhY2Nlc3NUb2tlbjogc3RyaW5nLCBpZFRva2VuOiBzdHJpbmcsIGV4cGlyZXNJbjogc3RyaW5nLCBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZykge1xyXG4gICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xyXG4gICAgdGhpcy5pZFRva2VuID0gaWRUb2tlbjtcclxuICAgIHRoaXMuZXhwaXJlc0luID0gZXhwaXJlc0luO1xyXG4gICAgdGhpcy5ob21lQWNjb3VudElkZW50aWZpZXIgPSBob21lQWNjb3VudElkZW50aWZpZXI7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIE5vbmNlOiBPSURDIE5vbmNlIGRlZmluaXRpb246IGh0dHBzOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1jb3JlLTFfMC5odG1sI0lEVG9rZW5cclxuICogU3RhdGU6IE9BdXRoIFNwZWM6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tMTAuMTJcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIHtcclxuXHJcbiAgYXV0aG9yaXR5SW5zdGFuY2U6IEF1dGhvcml0eTtcclxuICBjbGllbnRJZDogc3RyaW5nO1xyXG4gIHNjb3BlczogQXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgbm9uY2U6IHN0cmluZztcclxuICBzdGF0ZTogc3RyaW5nO1xyXG5cclxuICAvLyB0ZWxlbWV0cnkgaW5mb3JtYXRpb25cclxuICB4Q2xpZW50VmVyOiBzdHJpbmc7XHJcbiAgeENsaWVudFNrdTogc3RyaW5nO1xyXG4gIGNvcnJlbGF0aW9uSWQ6IHN0cmluZztcclxuXHJcbiAgcmVzcG9uc2VUeXBlOiBzdHJpbmc7XHJcbiAgcmVkaXJlY3RVcmk6IHN0cmluZztcclxuXHJcbiAgcHJvbXB0VmFsdWU6IHN0cmluZztcclxuICBjbGFpbXNWYWx1ZTogc3RyaW5nO1xyXG5cclxuICBxdWVyeVBhcmFtZXRlcnM6IHN0cmluZztcclxuICBleHRyYVF1ZXJ5UGFyYW1ldGVyczogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgZ2V0IGF1dGhvcml0eSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgPyB0aGlzLmF1dGhvcml0eUluc3RhbmNlLkNhbm9uaWNhbEF1dGhvcml0eSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqIEBwYXJhbSBhdXRob3JpdHlcclxuICAgKiBAcGFyYW0gY2xpZW50SWRcclxuICAgKiBAcGFyYW0gc2NvcGVcclxuICAgKiBAcGFyYW0gcmVzcG9uc2VUeXBlXHJcbiAgICogQHBhcmFtIHJlZGlyZWN0VXJpXHJcbiAgICogQHBhcmFtIHN0YXRlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IgKGF1dGhvcml0eTogQXV0aG9yaXR5LCBjbGllbnRJZDogc3RyaW5nLCBzY29wZTogQXJyYXk8c3RyaW5nPiwgcmVzcG9uc2VUeXBlOiBzdHJpbmcsIHJlZGlyZWN0VXJpOiBzdHJpbmcsIHN0YXRlOiBzdHJpbmcgKSB7XHJcbiAgICB0aGlzLmF1dGhvcml0eUluc3RhbmNlID0gYXV0aG9yaXR5O1xyXG4gICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xyXG4gICAgdGhpcy5zY29wZXMgPSBzY29wZTtcclxuXHJcbiAgICB0aGlzLm5vbmNlID0gVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlICYmICFVdGlscy5pc0VtcHR5KHN0YXRlKSA/ICBVdGlscy5jcmVhdGVOZXdHdWlkKCkgKyBcInxcIiArIHN0YXRlICAgOiBVdGlscy5jcmVhdGVOZXdHdWlkKCk7XHJcblxyXG4gICAgLy8gVE9ETzogQ2hhbmdlIHRoaXMgdG8gdXNlciBwYXNzZWQgdnMgZ2VuZXJhdGVkIHdpdGggdGhlIG5ldyBQUlxyXG4gICAgdGhpcy5jb3JyZWxhdGlvbklkID0gVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xyXG5cclxuICAgIC8vIHRlbGVtZXRyeSBpbmZvcm1hdGlvblxyXG4gICAgdGhpcy54Q2xpZW50U2t1ID0gXCJNU0FMLkpTXCI7XHJcbiAgICB0aGlzLnhDbGllbnRWZXIgPSBVdGlscy5nZXRMaWJyYXJ5VmVyc2lvbigpO1xyXG5cclxuICAgIHRoaXMucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlO1xyXG4gICAgdGhpcy5yZWRpcmVjdFVyaSA9IHJlZGlyZWN0VXJpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZ2VuZXJhdGVzIHRoZSBVUkwgd2l0aCBRdWVyeVN0cmluZyBQYXJhbWV0ZXJzXHJcbiAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAqL1xyXG4gIGNyZWF0ZU5hdmlnYXRlVXJsKHNjb3BlczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzdHIgPSB0aGlzLmNyZWF0ZU5hdmlnYXRpb25VcmxTdHJpbmcoc2NvcGVzKTtcclxuICAgIGxldCBhdXRoRW5kcG9pbnQ6IHN0cmluZyA9IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UuQXV0aG9yaXphdGlvbkVuZHBvaW50O1xyXG4gICAgLy8gaWYgdGhlIGVuZHBvaW50IGFscmVhZHkgaGFzIHF1ZXJ5cGFyYW1zLCBsZXRzIGFkZCB0byBpdCwgb3RoZXJ3aXNlIGFkZCB0aGUgZmlyc3Qgb25lXHJcbiAgICBpZiAoYXV0aEVuZHBvaW50LmluZGV4T2YoXCI/XCIpIDwgMCkge1xyXG4gICAgICBhdXRoRW5kcG9pbnQgKz0gXCI/XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhdXRoRW5kcG9pbnQgKz0gXCImXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdFVybDogc3RyaW5nID0gYCR7YXV0aEVuZHBvaW50fSR7c3RyLmpvaW4oXCImXCIpfWA7XHJcbiAgICByZXR1cm4gcmVxdWVzdFVybDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlIHRoZSBhcnJheSBvZiBhbGwgUXVlcnlTdHJpbmdQYXJhbXMgdG8gYmUgc2VudCB0byB0aGUgc2VydmVyXHJcbiAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAqL1xyXG4gIGNyZWF0ZU5hdmlnYXRpb25VcmxTdHJpbmcoc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICBpZiAoIXNjb3Blcykge1xyXG4gICAgICBzY29wZXMgPSBbdGhpcy5jbGllbnRJZF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNjb3Blcy5pbmRleE9mKHRoaXMuY2xpZW50SWQpID09PSAtMSkge1xyXG4gICAgICBzY29wZXMucHVzaCh0aGlzLmNsaWVudElkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0cjogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgc3RyLnB1c2goXCJyZXNwb25zZV90eXBlPVwiICsgdGhpcy5yZXNwb25zZVR5cGUpO1xyXG5cclxuICAgIHRoaXMudHJhbnNsYXRlY2xpZW50SWRVc2VkSW5TY29wZShzY29wZXMpO1xyXG4gICAgc3RyLnB1c2goXCJzY29wZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnBhcnNlU2NvcGUoc2NvcGVzKSkpO1xyXG4gICAgc3RyLnB1c2goXCJjbGllbnRfaWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jbGllbnRJZCkpO1xyXG4gICAgc3RyLnB1c2goXCJyZWRpcmVjdF91cmk9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5yZWRpcmVjdFVyaSkpO1xyXG5cclxuICAgIHN0ci5wdXNoKFwic3RhdGU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5zdGF0ZSkpO1xyXG4gICAgc3RyLnB1c2goXCJub25jZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLm5vbmNlKSk7XHJcblxyXG4gICAgc3RyLnB1c2goXCJjbGllbnRfaW5mbz0xXCIpO1xyXG4gICAgc3RyLnB1c2goYHgtY2xpZW50LVNLVT0ke3RoaXMueENsaWVudFNrdX1gKTtcclxuICAgIHN0ci5wdXNoKGB4LWNsaWVudC1WZXI9JHt0aGlzLnhDbGllbnRWZXJ9YCk7XHJcbiAgICBpZiAodGhpcy5wcm9tcHRWYWx1ZSkge1xyXG4gICAgICBzdHIucHVzaChcInByb21wdD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnByb21wdFZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2xhaW1zVmFsdWUpIHtcclxuICAgICAgc3RyLnB1c2goXCJjbGFpbXM9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jbGFpbXNWYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnF1ZXJ5UGFyYW1ldGVycykge1xyXG4gICAgICBzdHIucHVzaCh0aGlzLnF1ZXJ5UGFyYW1ldGVycyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZXh0cmFRdWVyeVBhcmFtZXRlcnMpIHtcclxuICAgICAgc3RyLnB1c2godGhpcy5leHRyYVF1ZXJ5UGFyYW1ldGVycyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RyLnB1c2goXCJjbGllbnQtcmVxdWVzdC1pZD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNvcnJlbGF0aW9uSWQpKTtcclxuICAgIHJldHVybiBzdHI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhcHBlbmQgdGhlIHJlcXVpcmVkIHNjb3BlczogaHR0cHM6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWJhc2ljLTFfMC5odG1sI1Njb3Blc1xyXG4gICAqIEBwYXJhbSBzY29wZXNcclxuICAgKi9cclxuICB0cmFuc2xhdGVjbGllbnRJZFVzZWRJblNjb3BlKHNjb3BlczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xyXG4gICAgY29uc3QgY2xpZW50SWRJbmRleDogbnVtYmVyID0gc2NvcGVzLmluZGV4T2YodGhpcy5jbGllbnRJZCk7XHJcbiAgICBpZiAoY2xpZW50SWRJbmRleCA+PSAwKSB7XHJcbiAgICAgIHNjb3Blcy5zcGxpY2UoY2xpZW50SWRJbmRleCwgMSk7XHJcbiAgICAgIGlmIChzY29wZXMuaW5kZXhPZihcIm9wZW5pZFwiKSA9PT0gLTEpIHtcclxuICAgICAgICBzY29wZXMucHVzaChcIm9wZW5pZFwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc2NvcGVzLmluZGV4T2YoXCJwcm9maWxlXCIpID09PSAtMSkge1xyXG4gICAgICAgIHNjb3Blcy5wdXNoKFwicHJvZmlsZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2UgdGhlIHNjb3BlcyBpbnRvIGEgZm9ybWF0dGVkIHNjb3BlTGlzdFxyXG4gICAqIEBwYXJhbSBzY29wZXNcclxuICAgKi9cclxuICBwYXJzZVNjb3BlKHNjb3BlczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyB7XHJcbiAgICBsZXQgc2NvcGVMaXN0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaWYgKHNjb3Blcykge1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBzY29wZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBzY29wZUxpc3QgKz0gKGkgIT09IHNjb3Blcy5sZW5ndGggLSAxKSA/IHNjb3Blc1tpXSArIFwiIFwiIDogc2NvcGVzW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNjb3BlTGlzdDtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsaWVudEluZm8ge1xyXG5cclxuICBwcml2YXRlIF91aWQ6IHN0cmluZztcclxuICBnZXQgdWlkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdWlkID8gdGhpcy5fdWlkIDogXCJcIjtcclxuICB9XHJcblxyXG4gIHNldCB1aWQodWlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3VpZCA9IHVpZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3V0aWQ6IHN0cmluZztcclxuICBnZXQgdXRpZCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3V0aWQgPyB0aGlzLl91dGlkIDogXCJcIjtcclxuICB9XHJcblxyXG4gIHNldCB1dGlkKHV0aWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdXRpZCA9IHV0aWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihyYXdDbGllbnRJbmZvOiBzdHJpbmcpIHtcclxuICAgIGlmICghcmF3Q2xpZW50SW5mbyB8fCBVdGlscy5pc0VtcHR5KHJhd0NsaWVudEluZm8pKSB7XHJcbiAgICAgIHRoaXMudWlkID0gXCJcIjtcclxuICAgICAgdGhpcy51dGlkID0gXCJcIjtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRlY29kZWRDbGllbnRJbmZvOiBzdHJpbmcgPSBVdGlscy5iYXNlNjREZWNvZGVTdHJpbmdVcmxTYWZlKHJhd0NsaWVudEluZm8pO1xyXG4gICAgICBjb25zdCBjbGllbnRJbmZvOiBDbGllbnRJbmZvID0gPENsaWVudEluZm8+SlNPTi5wYXJzZShkZWNvZGVkQ2xpZW50SW5mbyk7XHJcbiAgICAgIGlmIChjbGllbnRJbmZvKSB7XHJcbiAgICAgICAgaWYgKGNsaWVudEluZm8uaGFzT3duUHJvcGVydHkoXCJ1aWRcIikpIHtcclxuICAgICAgICAgIHRoaXMudWlkID0gY2xpZW50SW5mby51aWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xpZW50SW5mby5oYXNPd25Qcm9wZXJ0eShcInV0aWRcIikpIHtcclxuICAgICAgICAgIHRoaXMudXRpZCA9IGNsaWVudEluZm8udXRpZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUNsaWVudEluZm9EZWNvZGluZ0Vycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSWRUb2tlbiB7XHJcblxyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG9iamVjdElkOiBzdHJpbmc7XHJcbiAgc3ViamVjdDogc3RyaW5nO1xyXG4gIHRlbmFudElkOiBzdHJpbmc7XHJcbiAgdmVyc2lvbjogc3RyaW5nO1xyXG4gIHByZWZlcnJlZE5hbWU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaG9tZU9iamVjdElkOiBzdHJpbmc7XHJcbiAgbm9uY2U6IHN0cmluZztcclxuICBleHBpcmF0aW9uOiBzdHJpbmc7XHJcbiAgcmF3SWRUb2tlbjogc3RyaW5nO1xyXG4gIGRlY29kZWRJZFRva2VuOiBPYmplY3Q7XHJcbiAgc2lkOiBzdHJpbmc7XHJcbiAgLyogdHNsaW50OmRpc2FibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cclxuICBjb25zdHJ1Y3RvcihyYXdJZFRva2VuOiBzdHJpbmcpIHtcclxuICAgIGlmIChVdGlscy5pc0VtcHR5KHJhd0lkVG9rZW4pKSB7XHJcbiAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJZFRva2VuTnVsbE9yRW1wdHlFcnJvcihyYXdJZFRva2VuKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMucmF3SWRUb2tlbiA9IHJhd0lkVG9rZW47XHJcbiAgICAgIHRoaXMuZGVjb2RlZElkVG9rZW4gPSBVdGlscy5leHRyYWN0SWRUb2tlbihyYXdJZFRva2VuKTtcclxuICAgICAgaWYgKHRoaXMuZGVjb2RlZElkVG9rZW4pIHtcclxuICAgICAgICBpZiAodGhpcy5kZWNvZGVkSWRUb2tlbi5oYXNPd25Qcm9wZXJ0eShcImlzc1wiKSkge1xyXG4gICAgICAgICAgdGhpcy5pc3N1ZXIgPSB0aGlzLmRlY29kZWRJZFRva2VuW1wiaXNzXCJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlZElkVG9rZW4uaGFzT3duUHJvcGVydHkoXCJvaWRcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYmplY3RJZCA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJvaWRcIl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kZWNvZGVkSWRUb2tlbi5oYXNPd25Qcm9wZXJ0eShcInN1YlwiKSkge1xyXG4gICAgICAgICAgdGhpcy5zdWJqZWN0ID0gdGhpcy5kZWNvZGVkSWRUb2tlbltcInN1YlwiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRlY29kZWRJZFRva2VuLmhhc093blByb3BlcnR5KFwidGlkXCIpKSB7XHJcbiAgICAgICAgICB0aGlzLnRlbmFudElkID0gdGhpcy5kZWNvZGVkSWRUb2tlbltcInRpZFwiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRlY29kZWRJZFRva2VuLmhhc093blByb3BlcnR5KFwidmVyXCIpKSB7XHJcbiAgICAgICAgICB0aGlzLnZlcnNpb24gPSB0aGlzLmRlY29kZWRJZFRva2VuW1widmVyXCJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlZElkVG9rZW4uaGFzT3duUHJvcGVydHkoXCJwcmVmZXJyZWRfdXNlcm5hbWVcIikpIHtcclxuICAgICAgICAgIHRoaXMucHJlZmVycmVkTmFtZSA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJwcmVmZXJyZWRfdXNlcm5hbWVcIl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kZWNvZGVkSWRUb2tlbi5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpIHtcclxuICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJuYW1lXCJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlZElkVG9rZW4uaGFzT3duUHJvcGVydHkoXCJub25jZVwiKSkge1xyXG4gICAgICAgICAgdGhpcy5ub25jZSA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJub25jZVwiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRlY29kZWRJZFRva2VuLmhhc093blByb3BlcnR5KFwiZXhwXCIpKSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGlyYXRpb24gPSB0aGlzLmRlY29kZWRJZFRva2VuW1wiZXhwXCJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlZElkVG9rZW4uaGFzT3duUHJvcGVydHkoXCJob21lX29pZFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhvbWVPYmplY3RJZCA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJob21lX29pZFwiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRlY29kZWRJZFRva2VuLmhhc093blByb3BlcnR5KFwic2lkXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lkID0gdGhpcy5kZWNvZGVkSWRUb2tlbltcInNpZFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgIC8qIHRzbGludDplbmFibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAvLyBUT0RPOiBUaGlzIGVycm9yIGhlcmUgd29uJ3QgcmVhbGx5IGV2ZXJ5IGJlIHRocm93biwgc2luY2UgZXh0cmFjdElkVG9rZW4oKSByZXR1cm5zIG51bGwgaWYgdGhlIGRlY29kZUp3dCgpIGZhaWxzLlxyXG4gICAgICAvLyBOZWVkIHRvIGFkZCBiZXR0ZXIgZXJyb3IgaGFuZGxpbmcgaGVyZSB0byBhY2NvdW50IGZvciBiZWluZyB1bmFibGUgdG8gZGVjb2RlIGp3dHMuXHJcbiAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJZFRva2VuUGFyc2luZ0Vycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkNhY2hlSXRlbSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuQ2FjaGVJdGVtXCI7XHJcbmltcG9ydCB7IENhY2hlTG9jYXRpb24gfSBmcm9tIFwiLi9Db25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IENhY2hlS2V5cyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RvcmFnZSB7Ly8gU2luZ2xldG9uXHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBTdG9yYWdlO1xyXG4gIHByaXZhdGUgbG9jYWxTdG9yYWdlU3VwcG9ydGVkOiBib29sZWFuO1xyXG4gIHByaXZhdGUgc2Vzc2lvblN0b3JhZ2VTdXBwb3J0ZWQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBjYWNoZUxvY2F0aW9uOiBDYWNoZUxvY2F0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjYWNoZUxvY2F0aW9uOiBDYWNoZUxvY2F0aW9uKSB7XHJcbiAgICBpZiAoU3RvcmFnZS5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm4gU3RvcmFnZS5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNhY2hlTG9jYXRpb24gPSBjYWNoZUxvY2F0aW9uO1xyXG4gICAgdGhpcy5sb2NhbFN0b3JhZ2VTdXBwb3J0ZWQgPSB0eXBlb2Ygd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0gIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0gIT0gbnVsbDtcclxuICAgIHRoaXMuc2Vzc2lvblN0b3JhZ2VTdXBwb3J0ZWQgPSB0eXBlb2Ygd2luZG93W2NhY2hlTG9jYXRpb25dICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvd1tjYWNoZUxvY2F0aW9uXSAhPSBudWxsO1xyXG4gICAgU3RvcmFnZS5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICBpZiAoIXRoaXMubG9jYWxTdG9yYWdlU3VwcG9ydGVkICYmICF0aGlzLnNlc3Npb25TdG9yYWdlU3VwcG9ydGVkKSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVOb1N0b3JhZ2VTdXBwb3J0ZWRFcnJvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBTdG9yYWdlLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgICAvLyBhZGQgdmFsdWUgdG8gc3RvcmFnZVxyXG4gICAgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZW5hYmxlQ29va2llU3RvcmFnZT86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBpZiAod2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0pIHtcclxuICAgICAgICAgICAgd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0uc2V0SXRlbShrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVuYWJsZUNvb2tpZVN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgb25lIGl0ZW0gYnkga2V5IGZyb20gc3RvcmFnZVxyXG4gICAgZ2V0SXRlbShrZXk6IHN0cmluZywgZW5hYmxlQ29va2llU3RvcmFnZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChlbmFibGVDb29raWVTdG9yYWdlICYmIHRoaXMuZ2V0SXRlbUNvb2tpZShrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1Db29raWUoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZSB2YWx1ZSBmcm9tIHN0b3JhZ2VcclxuICAgIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAod2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xlYXIgc3RvcmFnZSAocmVtb3ZlIGFsbCBpdGVtcyBmcm9tIGl0KVxyXG4gICAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXS5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxBY2Nlc3NUb2tlbnMoY2xpZW50SWQ6IHN0cmluZywgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcpOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHM6IEFycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPiA9IFtdO1xyXG4gICAgICAgIGxldCBhY2Nlc3NUb2tlbkNhY2hlSXRlbTogQWNjZXNzVG9rZW5DYWNoZUl0ZW07XHJcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dO1xyXG4gICAgICAgIGlmIChzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIGxldCBrZXk6IHN0cmluZztcclxuICAgICAgICAgICAgZm9yIChrZXkgaW4gc3RvcmFnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3JhZ2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkubWF0Y2goY2xpZW50SWQpICYmIGtleS5tYXRjaChob21lQWNjb3VudElkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzVG9rZW5DYWNoZUl0ZW0gPSBuZXcgQWNjZXNzVG9rZW5DYWNoZUl0ZW0oSlNPTi5wYXJzZShrZXkpLCBKU09OLnBhcnNlKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goYWNjZXNzVG9rZW5DYWNoZUl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBY3F1aXJlVG9rZW5FbnRyaWVzKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXTtcclxuICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGZvciAoa2V5IGluIHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoQ2FjaGVLZXlzLkFVVEhPUklUWSkgIT09IC0xIHx8IGtleS5pbmRleE9mKENhY2hlS2V5cy5BQ1FVSVJFX1RPS0VOX0FDQ09VTlQpICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0S2V5ID0ga2V5LnNwbGl0KENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0S2V5Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gc3BsaXRLZXlbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlICYmICF0aGlzLnRva2VuUmVuZXdhbEluUHJvZ3Jlc3Moc3RhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShDb25zdGFudHMucmVuZXdTdGF0dXMgKyBzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oQ29uc3RhbnRzLnN0YXRlTG9naW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKENvbnN0YW50cy5zdGF0ZUFjcXVpcmVUb2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1Db29raWUoa2V5LCBcIlwiLCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJDb29raWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRva2VuUmVuZXdhbEluUHJvZ3Jlc3Moc3RhdGVWYWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dO1xyXG4gICAgICAgIGNvbnN0IHJlbmV3U3RhdHVzID0gc3RvcmFnZVtDb25zdGFudHMucmVuZXdTdGF0dXMgKyBzdGF0ZVZhbHVlXTtcclxuICAgICAgICByZXR1cm4gISghcmVuZXdTdGF0dXMgfHwgcmVuZXdTdGF0dXMgIT09IENvbnN0YW50cy50b2tlblJlbmV3U3RhdHVzSW5Qcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRDYWNoZUl0ZW1zKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXTtcclxuICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGZvciAoa2V5IGluIHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoQ29uc3RhbnRzLm1zYWwpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBY3F1aXJlVG9rZW5FbnRyaWVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEl0ZW1Db29raWUoY05hbWU6IHN0cmluZywgY1ZhbHVlOiBzdHJpbmcsIGV4cGlyZXM/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY29va2llU3RyID0gY05hbWUgKyBcIj1cIiArIGNWYWx1ZSArIFwiO1wiO1xyXG4gICAgICAgIGlmIChleHBpcmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZVRpbWUgPSB0aGlzLmdldENvb2tpZUV4cGlyYXRpb25UaW1lKGV4cGlyZXMpO1xyXG4gICAgICAgICAgICBjb29raWVTdHIgKz0gXCJleHBpcmVzPVwiICsgZXhwaXJlVGltZSArIFwiO1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llU3RyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1Db29raWUoY05hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGNOYW1lICsgXCI9XCI7XHJcbiAgICAgICAgY29uc3QgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGMgPSBjYVtpXTtcclxuICAgICAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSBcIiBcIikge1xyXG4gICAgICAgICAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvb2tpZUV4cGlyYXRpb25UaW1lKGNvb2tpZUxpZmVEYXlzOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCBleHByID0gbmV3IERhdGUodG9kYXkuZ2V0VGltZSgpICsgY29va2llTGlmZURheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuICAgICAgICByZXR1cm4gZXhwci50b1VUQ1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQ29va2llKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShDb25zdGFudHMubm9uY2VJZFRva2VuLCBcIlwiLCAtMSk7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKENvbnN0YW50cy5zdGF0ZUxvZ2luLCBcIlwiLCAtMSk7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKENvbnN0YW50cy5sb2dpblJlcXVlc3QsIFwiXCIsIC0xKTtcclxuICAgICAgICB0aGlzLnNldEl0ZW1Db29raWUoQ29uc3RhbnRzLnN0YXRlQWNxdWlyZVRva2VuLCBcIlwiLCAtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYWNxdWlyZVRva2VuQWNjb3VudEtleSB0byBjYWNoZSBhY2NvdW50IG9iamVjdFxyXG4gICAgICogQHBhcmFtIGFjY291bnRJZFxyXG4gICAgICogQHBhcmFtIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZW5lcmF0ZUFjcXVpcmVUb2tlbkFjY291bnRLZXkoYWNjb3VudElkOiBhbnksIHN0YXRlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBDYWNoZUtleXMuQUNRVUlSRV9UT0tFTl9BQ0NPVU5UICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyICtcclxuICAgICAgICAgICAgYCR7YWNjb3VudElkfWAgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIgICsgYCR7c3RhdGV9YDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhdXRob3JpdHlLZXkgdG8gY2FjaGUgYXV0aG9yaXR5XHJcbiAgICAgKiBAcGFyYW0gc3RhdGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBDYWNoZUtleXMuQVVUSE9SSVRZICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyICsgYCR7c3RhdGV9YDtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5LZXkgfSBmcm9tIFwiLi9BY2Nlc3NUb2tlbktleVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlblZhbHVlIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5WYWx1ZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbkNhY2hlSXRlbSB7XHJcblxyXG4gIGtleTogQWNjZXNzVG9rZW5LZXk7XHJcbiAgdmFsdWU6IEFjY2Vzc1Rva2VuVmFsdWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGtleTogQWNjZXNzVG9rZW5LZXksIHZhbHVlOiBBY2Nlc3NUb2tlblZhbHVlKSB7XHJcbiAgICB0aGlzLmtleSA9IGtleTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB7IEFhZEF1dGhvcml0eSB9IGZyb20gXCIuL0FhZEF1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBCMmNBdXRob3JpdHkgfSBmcm9tIFwiLi9CMmNBdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5LCBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRob3JpdHlGYWN0b3J5IHtcclxuICAgIC8qKlxyXG4gICAgKiBQYXJzZSB0aGUgdXJsIGFuZCBkZXRlcm1pbmUgdGhlIHR5cGUgb2YgYXV0aG9yaXR5XHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgRGV0ZWN0QXV0aG9yaXR5RnJvbVVybChhdXRob3JpdHlVcmw6IHN0cmluZyk6IEF1dGhvcml0eVR5cGUge1xyXG4gICAgICAgIGF1dGhvcml0eVVybCA9IFV0aWxzLkNhbm9uaWNhbGl6ZVVyaShhdXRob3JpdHlVcmwpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBVdGlscy5HZXRVcmxDb21wb25lbnRzKGF1dGhvcml0eVVybCk7XHJcbiAgICAgICAgY29uc3QgcGF0aFNlZ21lbnRzID0gY29tcG9uZW50cy5QYXRoU2VnbWVudHM7XHJcbiAgICAgICAgc3dpdGNoIChwYXRoU2VnbWVudHNbMF0pIHtcclxuICAgICAgICAgICAgY2FzZSBcInRmcFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQjJDO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRmc1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQWRmcztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkFhZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIENyZWF0ZSBhbiBhdXRob3JpdHkgb2JqZWN0IG9mIHRoZSBjb3JyZWN0IHR5cGUgYmFzZWQgb24gdGhlIHVybFxyXG4gICAgKiBQZXJmb3JtcyBiYXNpYyBhdXRob3JpdHkgdmFsaWRhdGlvbiAtIGNoZWNrcyB0byBzZWUgaWYgdGhlIGF1dGhvcml0eSBpcyBvZiBhIHZhbGlkIHR5cGUgKGVnIGFhZCwgYjJjKVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlSW5zdGFuY2UoYXV0aG9yaXR5VXJsOiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKTogQXV0aG9yaXR5IHtcclxuICAgICAgICBpZiAoVXRpbHMuaXNFbXB0eShhdXRob3JpdHlVcmwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0eXBlID0gQXV0aG9yaXR5RmFjdG9yeS5EZXRlY3RBdXRob3JpdHlGcm9tVXJsKGF1dGhvcml0eVVybCk7XHJcbiAgICAgICAgLy8gRGVwZW5kaW5nIG9uIGFib3ZlIGRldGVjdGlvbiwgY3JlYXRlIHRoZSByaWdodCB0eXBlLlxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEF1dGhvcml0eVR5cGUuQjJDOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCMmNBdXRob3JpdHkoYXV0aG9yaXR5VXJsLCB2YWxpZGF0ZUF1dGhvcml0eSk7XHJcbiAgICAgICAgICAgIGNhc2UgQXV0aG9yaXR5VHlwZS5BYWQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEFhZEF1dGhvcml0eShhdXRob3JpdHlVcmwsIHZhbGlkYXRlQXV0aG9yaXR5KTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZEF1dGhvcml0eVR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG5cclxuaW1wb3J0IHsgQWFkQXV0aG9yaXR5IH0gZnJvbSBcIi4vQWFkQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IEF1dGhvcml0eSwgQXV0aG9yaXR5VHlwZSB9IGZyb20gXCIuL0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQjJjQXV0aG9yaXR5IGV4dGVuZHMgQWFkQXV0aG9yaXR5IHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihhdXRob3JpdHksIHZhbGlkYXRlQXV0aG9yaXR5KTtcclxuICAgIGNvbnN0IHVybENvbXBvbmVudHMgPSBVdGlscy5HZXRVcmxDb21wb25lbnRzKGF1dGhvcml0eSk7XHJcblxyXG4gICAgY29uc3QgcGF0aFNlZ21lbnRzID0gdXJsQ29tcG9uZW50cy5QYXRoU2VnbWVudHM7XHJcbiAgICBpZiAocGF0aFNlZ21lbnRzLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmIyY0F1dGhvcml0eVVyaUludmFsaWRQYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5ID0gYGh0dHBzOi8vJHt1cmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydH0vJHtwYXRoU2VnbWVudHNbMF19LyR7cGF0aFNlZ21lbnRzWzFdfS8ke3BhdGhTZWdtZW50c1syXX0vYDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgQXV0aG9yaXR5VHlwZSgpOiBBdXRob3JpdHlUeXBlIHtcclxuICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkIyQztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIFRlbmFudERpc2NvdmVyeUVuZHBvaW50XHJcbiAgICovXHJcbiAgcHVibGljIEdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBjb25zdCByZXN1bHRQcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PlxyXG4gICAgICByZXNvbHZlKHRoaXMuRGVmYXVsdE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCkpO1xyXG5cclxuICAgIGlmICghdGhpcy5Jc1ZhbGlkYXRpb25FbmFibGVkKSB7XHJcbiAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLklzSW5UcnVzdGVkSG9zdExpc3QodGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydCkpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT5cclxuICAgICAgcmVqZWN0KENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UudW5zdXBwb3J0ZWRBdXRob3JpdHlWYWxpZGF0aW9uKSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=