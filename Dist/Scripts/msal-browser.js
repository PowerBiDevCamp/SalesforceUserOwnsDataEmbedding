﻿/*! @azure/msal-browser v2.12.0 2021-03-03 */
'use strict';
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.msal = {}));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /*! @azure/msal-common v4.0.2 2021-03-03 */
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics$1 = function(d, b) {
        extendStatics$1 = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics$1(d, b);
    };

    function __extends$1(d, b) {
        extendStatics$1(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign$1 = function() {
        __assign$1 = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };

    function __awaiter$1(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator$1(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var Constants = {
        LIBRARY_NAME: "MSAL.JS",
        SKU: "msal.js.common",
        // Prefix for all library cache entries
        CACHE_PREFIX: "msal",
        // default authority
        DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
        DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
        // ADFS String
        ADFS: "adfs",
        // Default AAD Instance Discovery Endpoint
        AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
        // Resource delimiter - used for certain cache entries
        RESOURCE_DELIM: "|",
        // Placeholder for non-existent account ids/objects
        NO_ACCOUNT: "NO_ACCOUNT",
        // Claims
        CLAIMS: "claims",
        // Consumer UTID
        CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
        // Default scopes
        OPENID_SCOPE: "openid",
        PROFILE_SCOPE: "profile",
        OFFLINE_ACCESS_SCOPE: "offline_access",
        EMAIL_SCOPE: "email",
        // Default response type for authorization code flow
        CODE_RESPONSE_TYPE: "code",
        CODE_GRANT_TYPE: "authorization_code",
        RT_GRANT_TYPE: "refresh_token",
        FRAGMENT_RESPONSE_MODE: "fragment",
        S256_CODE_CHALLENGE_METHOD: "S256",
        URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
        AUTHORIZATION_PENDING: "authorization_pending",
        NOT_DEFINED: "not_defined",
        EMPTY_STRING: "",
        FORWARD_SLASH: "/"
    };
    var OIDC_DEFAULT_SCOPES = [
        Constants.OPENID_SCOPE,
        Constants.PROFILE_SCOPE,
        Constants.OFFLINE_ACCESS_SCOPE
    ];
    var OIDC_SCOPES = __spreadArrays(OIDC_DEFAULT_SCOPES, [
        Constants.EMAIL_SCOPE
    ]);
    /**
     * Request header names
     */
    var HeaderNames;
    (function (HeaderNames) {
        HeaderNames["CONTENT_TYPE"] = "Content-Type";
        HeaderNames["X_CLIENT_CURR_TELEM"] = "x-client-current-telemetry";
        HeaderNames["X_CLIENT_LAST_TELEM"] = "x-client-last-telemetry";
        HeaderNames["RETRY_AFTER"] = "Retry-After";
        HeaderNames["X_MS_LIB_CAPABILITY"] = "x-ms-lib-capability";
        HeaderNames["X_MS_LIB_CAPABILITY_VALUE"] = "retry-after, h429";
    })(HeaderNames || (HeaderNames = {}));
    /**
     * Persistent cache keys MSAL which stay while user is logged in.
     */
    var PersistentCacheKeys;
    (function (PersistentCacheKeys) {
        PersistentCacheKeys["ID_TOKEN"] = "idtoken";
        PersistentCacheKeys["CLIENT_INFO"] = "client.info";
        PersistentCacheKeys["ADAL_ID_TOKEN"] = "adal.idtoken";
        PersistentCacheKeys["ERROR"] = "error";
        PersistentCacheKeys["ERROR_DESC"] = "error.description";
    })(PersistentCacheKeys || (PersistentCacheKeys = {}));
    /**
     * String constants related to AAD Authority
     */
    var AADAuthorityConstants;
    (function (AADAuthorityConstants) {
        AADAuthorityConstants["COMMON"] = "common";
        AADAuthorityConstants["ORGANIZATIONS"] = "organizations";
        AADAuthorityConstants["CONSUMERS"] = "consumers";
    })(AADAuthorityConstants || (AADAuthorityConstants = {}));
    /**
     * Keys in the hashParams sent by AAD Server
     */
    var AADServerParamKeys;
    (function (AADServerParamKeys) {
        AADServerParamKeys["CLIENT_ID"] = "client_id";
        AADServerParamKeys["REDIRECT_URI"] = "redirect_uri";
        AADServerParamKeys["RESPONSE_TYPE"] = "response_type";
        AADServerParamKeys["RESPONSE_MODE"] = "response_mode";
        AADServerParamKeys["GRANT_TYPE"] = "grant_type";
        AADServerParamKeys["CLAIMS"] = "claims";
        AADServerParamKeys["SCOPE"] = "scope";
        AADServerParamKeys["ERROR"] = "error";
        AADServerParamKeys["ERROR_DESCRIPTION"] = "error_description";
        AADServerParamKeys["ACCESS_TOKEN"] = "access_token";
        AADServerParamKeys["ID_TOKEN"] = "id_token";
        AADServerParamKeys["REFRESH_TOKEN"] = "refresh_token";
        AADServerParamKeys["EXPIRES_IN"] = "expires_in";
        AADServerParamKeys["STATE"] = "state";
        AADServerParamKeys["NONCE"] = "nonce";
        AADServerParamKeys["PROMPT"] = "prompt";
        AADServerParamKeys["SESSION_STATE"] = "session_state";
        AADServerParamKeys["CLIENT_INFO"] = "client_info";
        AADServerParamKeys["CODE"] = "code";
        AADServerParamKeys["CODE_CHALLENGE"] = "code_challenge";
        AADServerParamKeys["CODE_CHALLENGE_METHOD"] = "code_challenge_method";
        AADServerParamKeys["CODE_VERIFIER"] = "code_verifier";
        AADServerParamKeys["CLIENT_REQUEST_ID"] = "client-request-id";
        AADServerParamKeys["X_CLIENT_SKU"] = "x-client-SKU";
        AADServerParamKeys["X_CLIENT_VER"] = "x-client-VER";
        AADServerParamKeys["X_CLIENT_OS"] = "x-client-OS";
        AADServerParamKeys["X_CLIENT_CPU"] = "x-client-CPU";
        AADServerParamKeys["POST_LOGOUT_URI"] = "post_logout_redirect_uri";
        AADServerParamKeys["ID_TOKEN_HINT"] = "id_token_hint";
        AADServerParamKeys["DEVICE_CODE"] = "device_code";
        AADServerParamKeys["CLIENT_SECRET"] = "client_secret";
        AADServerParamKeys["CLIENT_ASSERTION"] = "client_assertion";
        AADServerParamKeys["CLIENT_ASSERTION_TYPE"] = "client_assertion_type";
        AADServerParamKeys["TOKEN_TYPE"] = "token_type";
        AADServerParamKeys["REQ_CNF"] = "req_cnf";
        AADServerParamKeys["OBO_ASSERTION"] = "assertion";
        AADServerParamKeys["REQUESTED_TOKEN_USE"] = "requested_token_use";
        AADServerParamKeys["ON_BEHALF_OF"] = "on_behalf_of";
        AADServerParamKeys["FOCI"] = "foci";
    })(AADServerParamKeys || (AADServerParamKeys = {}));
    /**
     * Claims request keys
     */
    var ClaimsRequestKeys;
    (function (ClaimsRequestKeys) {
        ClaimsRequestKeys["ACCESS_TOKEN"] = "access_token";
        ClaimsRequestKeys["XMS_CC"] = "xms_cc";
    })(ClaimsRequestKeys || (ClaimsRequestKeys = {}));
    /**
     * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
     * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
     * internal partners too, hence the choice of generic "string" type instead of the "enum"
     */
    var PromptValue = {
        LOGIN: "login",
        SELECT_ACCOUNT: "select_account",
        CONSENT: "consent",
        NONE: "none",
    };
    /**
     * SSO Types - generated to populate hints
     */
    var SSOTypes;
    (function (SSOTypes) {
        SSOTypes["ACCOUNT"] = "account";
        SSOTypes["SID"] = "sid";
        SSOTypes["LOGIN_HINT"] = "login_hint";
        SSOTypes["ID_TOKEN"] = "id_token";
        SSOTypes["DOMAIN_HINT"] = "domain_hint";
        SSOTypes["ORGANIZATIONS"] = "organizations";
        SSOTypes["CONSUMERS"] = "consumers";
        SSOTypes["ACCOUNT_ID"] = "accountIdentifier";
        SSOTypes["HOMEACCOUNT_ID"] = "homeAccountIdentifier";
    })(SSOTypes || (SSOTypes = {}));
    /**
     * Disallowed extra query parameters.
     */
    var BlacklistedEQParams = [
        SSOTypes.SID,
        SSOTypes.LOGIN_HINT
    ];
    /**
     * allowed values for codeVerifier
     */
    var CodeChallengeMethodValues = {
        PLAIN: "plain",
        S256: "S256"
    };
    /**
     * allowed values for response_mode
     */
    var ResponseMode;
    (function (ResponseMode) {
        ResponseMode["QUERY"] = "query";
        ResponseMode["FRAGMENT"] = "fragment";
        ResponseMode["FORM_POST"] = "form_post";
    })(ResponseMode || (ResponseMode = {}));
    /**
     * allowed grant_type
     */
    var GrantType;
    (function (GrantType) {
        GrantType["IMPLICIT_GRANT"] = "implicit";
        GrantType["AUTHORIZATION_CODE_GRANT"] = "authorization_code";
        GrantType["CLIENT_CREDENTIALS_GRANT"] = "client_credentials";
        GrantType["RESOURCE_OWNER_PASSWORD_GRANT"] = "password";
        GrantType["REFRESH_TOKEN_GRANT"] = "refresh_token";
        GrantType["DEVICE_CODE_GRANT"] = "device_code";
        GrantType["JWT_BEARER"] = "urn:ietf:params:oauth:grant-type:jwt-bearer";
    })(GrantType || (GrantType = {}));
    /**
     * Account types in Cache
     */
    var CacheAccountType;
    (function (CacheAccountType) {
        CacheAccountType["MSSTS_ACCOUNT_TYPE"] = "MSSTS";
        CacheAccountType["ADFS_ACCOUNT_TYPE"] = "ADFS";
        CacheAccountType["MSAV1_ACCOUNT_TYPE"] = "MSA";
        CacheAccountType["GENERIC_ACCOUNT_TYPE"] = "Generic"; // NTLM, Kerberos, FBA, Basic etc
    })(CacheAccountType || (CacheAccountType = {}));
    /**
     * Separators used in cache
     */
    var Separators;
    (function (Separators) {
        Separators["CACHE_KEY_SEPARATOR"] = "-";
        Separators["CLIENT_INFO_SEPARATOR"] = ".";
    })(Separators || (Separators = {}));
    /**
     * Credential Type stored in the cache
     */
    var CredentialType;
    (function (CredentialType) {
        CredentialType["ID_TOKEN"] = "IdToken";
        CredentialType["ACCESS_TOKEN"] = "AccessToken";
        CredentialType["REFRESH_TOKEN"] = "RefreshToken";
    })(CredentialType || (CredentialType = {}));
    /**
     * Credential Type stored in the cache
     */
    var CacheSchemaType;
    (function (CacheSchemaType) {
        CacheSchemaType["ACCOUNT"] = "Account";
        CacheSchemaType["CREDENTIAL"] = "Credential";
        CacheSchemaType["ID_TOKEN"] = "IdToken";
        CacheSchemaType["ACCESS_TOKEN"] = "AccessToken";
        CacheSchemaType["REFRESH_TOKEN"] = "RefreshToken";
        CacheSchemaType["APP_METADATA"] = "AppMetadata";
        CacheSchemaType["TEMPORARY"] = "TempCache";
        CacheSchemaType["TELEMETRY"] = "Telemetry";
        CacheSchemaType["UNDEFINED"] = "Undefined";
        CacheSchemaType["THROTTLING"] = "Throttling";
    })(CacheSchemaType || (CacheSchemaType = {}));
    /**
     * Combine all cache types
     */
    var CacheType;
    (function (CacheType) {
        CacheType[CacheType["ADFS"] = 1001] = "ADFS";
        CacheType[CacheType["MSA"] = 1002] = "MSA";
        CacheType[CacheType["MSSTS"] = 1003] = "MSSTS";
        CacheType[CacheType["GENERIC"] = 1004] = "GENERIC";
        CacheType[CacheType["ACCESS_TOKEN"] = 2001] = "ACCESS_TOKEN";
        CacheType[CacheType["REFRESH_TOKEN"] = 2002] = "REFRESH_TOKEN";
        CacheType[CacheType["ID_TOKEN"] = 2003] = "ID_TOKEN";
        CacheType[CacheType["APP_METADATA"] = 3001] = "APP_METADATA";
        CacheType[CacheType["UNDEFINED"] = 9999] = "UNDEFINED";
    })(CacheType || (CacheType = {}));
    /**
     * More Cache related constants
     */
    var APP_METADATA = "appmetadata";
    var ClientInfo = "client_info";
    var THE_FAMILY_ID = "1";
    var AUTHORITY_METADATA_CONSTANTS = {
        CACHE_KEY: "authority-metadata",
        REFRESH_TIME_SECONDS: 3600 * 24 // 24 Hours
    };
    var AuthorityMetadataSource;
    (function (AuthorityMetadataSource) {
        AuthorityMetadataSource["CONFIG"] = "config";
        AuthorityMetadataSource["CACHE"] = "cache";
        AuthorityMetadataSource["NETWORK"] = "network";
    })(AuthorityMetadataSource || (AuthorityMetadataSource = {}));
    var SERVER_TELEM_CONSTANTS = {
        SCHEMA_VERSION: 2,
        MAX_HEADER_BYTES: 4000,
        CACHE_KEY: "server-telemetry",
        CATEGORY_SEPARATOR: "|",
        VALUE_SEPARATOR: ",",
        OVERFLOW_TRUE: "1",
        OVERFLOW_FALSE: "0",
        UNKNOWN_ERROR: "unknown_error"
    };
    /**
     * Type of the authentication request
     */

    (function (AuthenticationScheme) {
        AuthenticationScheme["POP"] = "pop";
        AuthenticationScheme["BEARER"] = "Bearer";
    })(exports.AuthenticationScheme || (exports.AuthenticationScheme = {}));
    /**
     * Constants related to throttling
     */
    var ThrottlingConstants = {
        // Default time to throttle RequestThumbprint in seconds
        DEFAULT_THROTTLE_TIME_SECONDS: 60,
        // Default maximum time to throttle in seconds, overrides what the server sends back
        DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
        // Prefix for storing throttling entries
        THROTTLING_PREFIX: "throttling"
    };
    var Errors = {
        INVALID_GRANT_ERROR: "invalid_grant",
        CLIENT_MISMATCH_ERROR: "client_mismatch",
    };
    /**
     * Password grant parameters
     */
    var PasswordGrantConstants;
    (function (PasswordGrantConstants) {
        PasswordGrantConstants["username"] = "username";
        PasswordGrantConstants["password"] = "password";
    })(PasswordGrantConstants || (PasswordGrantConstants = {}));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * AuthErrorMessage class containing string constants used by error codes and messages.
     */
    var AuthErrorMessage = {
        unexpectedError: {
            code: "unexpected_error",
            desc: "Unexpected error in authentication."
        }
    };
    /**
     * General error class thrown by the MSAL.js library.
     */
    var AuthError = /** @class */ (function (_super) {
        __extends$1(AuthError, _super);
        function AuthError(errorCode, errorMessage, suberror) {
            var _this = this;
            var errorString = errorMessage ? errorCode + ": " + errorMessage : errorCode;
            _this = _super.call(this, errorString) || this;
            Object.setPrototypeOf(_this, AuthError.prototype);
            _this.errorCode = errorCode || Constants.EMPTY_STRING;
            _this.errorMessage = errorMessage || "";
            _this.subError = suberror || "";
            _this.name = "AuthError";
            return _this;
        }
        /**
         * Creates an error that is thrown when something unexpected happens in the library.
         * @param errDesc
         */
        AuthError.createUnexpectedError = function (errDesc) {
            return new AuthError(AuthErrorMessage.unexpectedError.code, AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
        };
        return AuthError;
    }(Error));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var DEFAULT_CRYPTO_IMPLEMENTATION = {
        createNewGuid: function () {
            var notImplErr = "Crypto interface - createNewGuid() has not been implemented";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        base64Decode: function () {
            var notImplErr = "Crypto interface - base64Decode() has not been implemented";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        base64Encode: function () {
            var notImplErr = "Crypto interface - base64Encode() has not been implemented";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        generatePkceCodes: function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var notImplErr;
                return __generator$1(this, function (_a) {
                    notImplErr = "Crypto interface - generatePkceCodes() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        },
        getPublicKeyThumbprint: function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var notImplErr;
                return __generator$1(this, function (_a) {
                    notImplErr = "Crypto interface - getPublicKeyThumbprint() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        },
        signJwt: function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var notImplErr;
                return __generator$1(this, function (_a) {
                    notImplErr = "Crypto interface - signJwt() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        }
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * ClientAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var ClientAuthErrorMessage = {
        clientInfoDecodingError: {
            code: "client_info_decoding_error",
            desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
        },
        clientInfoEmptyError: {
            code: "client_info_empty_error",
            desc: "The client info was empty. Please review the trace to determine the root cause."
        },
        tokenParsingError: {
            code: "token_parsing_error",
            desc: "Token cannot be parsed. Please review stack trace to determine root cause."
        },
        nullOrEmptyToken: {
            code: "null_or_empty_token",
            desc: "The token is null or empty. Please review the trace to determine the root cause."
        },
        endpointResolutionError: {
            code: "endpoints_resolution_error",
            desc: "Error: could not resolve endpoints. Please check network and try again."
        },
        unableToGetOpenidConfigError: {
            code: "openid_config_error",
            desc: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints."
        },
        hashNotDeserialized: {
            code: "hash_not_deserialized",
            desc: "The hash parameters could not be deserialized. Please review the trace to determine the root cause."
        },
        blankGuidGenerated: {
            code: "blank_guid_generated",
            desc: "The guid generated was blank. Please review the trace to determine the root cause."
        },
        invalidStateError: {
            code: "invalid_state",
            desc: "State was not the expected format. Please check the logs to determine whether the request was sent using ProtocolUtils.setRequestState()."
        },
        stateMismatchError: {
            code: "state_mismatch",
            desc: "State mismatch error. Please check your network. Continued requests may cause cache overflow."
        },
        stateNotFoundError: {
            code: "state_not_found",
            desc: "State not found"
        },
        nonceMismatchError: {
            code: "nonce_mismatch",
            desc: "Nonce mismatch error. This may be caused by a race condition in concurrent requests."
        },
        nonceNotFoundError: {
            code: "nonce_not_found",
            desc: "nonce not found"
        },
        noTokensFoundError: {
            code: "no_tokens_found",
            desc: "No tokens were found for the given scopes, and no authorization code was passed to acquireToken. You must retrieve an authorization code before making a call to acquireToken()."
        },
        multipleMatchingTokens: {
            code: "multiple_matching_tokens",
            desc: "The cache contains multiple tokens satisfying the requirements. " +
                "Call AcquireToken again providing more requirements such as authority or account."
        },
        multipleMatchingAccounts: {
            code: "multiple_matching_accounts",
            desc: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account"
        },
        multipleMatchingAppMetadata: {
            code: "multiple_matching_appMetadata",
            desc: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata"
        },
        tokenRequestCannotBeMade: {
            code: "request_cannot_be_made",
            desc: "Token request cannot be made without authorization code or refresh token."
        },
        appendEmptyScopeError: {
            code: "cannot_append_empty_scope",
            desc: "Cannot append null or empty scope to ScopeSet. Please check the stack trace for more info."
        },
        removeEmptyScopeError: {
            code: "cannot_remove_empty_scope",
            desc: "Cannot remove null or empty scope from ScopeSet. Please check the stack trace for more info."
        },
        appendScopeSetError: {
            code: "cannot_append_scopeset",
            desc: "Cannot append ScopeSet due to error."
        },
        emptyInputScopeSetError: {
            code: "empty_input_scopeset",
            desc: "Empty input ScopeSet cannot be processed."
        },
        DeviceCodePollingCancelled: {
            code: "device_code_polling_cancelled",
            desc: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true."
        },
        DeviceCodeExpired: {
            code: "device_code_expired",
            desc: "Device code is expired."
        },
        NoAccountInSilentRequest: {
            code: "no_account_in_silent_request",
            desc: "Please pass an account object, silent flow is not supported without account information"
        },
        invalidCacheRecord: {
            code: "invalid_cache_record",
            desc: "Cache record object was null or undefined."
        },
        invalidCacheEnvironment: {
            code: "invalid_cache_environment",
            desc: "Invalid environment when attempting to create cache entry"
        },
        noAccountFound: {
            code: "no_account_found",
            desc: "No account found in cache for given key."
        },
        CachePluginError: {
            code: "no cache plugin set on CacheManager",
            desc: "ICachePlugin needs to be set before using readFromStorage or writeFromStorage"
        },
        noCryptoObj: {
            code: "no_crypto_object",
            desc: "No crypto object detected. This is required for the following operation: "
        },
        invalidCacheType: {
            code: "invalid_cache_type",
            desc: "Invalid cache type"
        },
        unexpectedAccountType: {
            code: "unexpected_account_type",
            desc: "Unexpected account type."
        },
        unexpectedCredentialType: {
            code: "unexpected_credential_type",
            desc: "Unexpected credential type."
        },
        invalidAssertion: {
            code: "invalid_assertion",
            desc: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515"
        },
        invalidClientCredential: {
            code: "invalid_client_credential",
            desc: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential"
        },
        tokenRefreshRequired: {
            code: "token_refresh_required",
            desc: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired."
        },
        userTimeoutReached: {
            code: "user_timeout_reached",
            desc: "User defined timeout for device code polling reached",
        },
        tokenClaimsRequired: {
            code: "token_claims_cnf_required_for_signedjwt",
            desc: "Cannot generate a POP jwt if the token_claims are not populated"
        },
        noAuthorizationCodeFromServer: {
            code: "authorization_code_missing_from_server_response",
            desc: "Srver response does not contain an authorization code to proceed"
        }
    };
    /**
     * Error thrown when there is an error in the client code running on the browser.
     */
    var ClientAuthError = /** @class */ (function (_super) {
        __extends$1(ClientAuthError, _super);
        function ClientAuthError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "ClientAuthError";
            Object.setPrototypeOf(_this, ClientAuthError.prototype);
            return _this;
        }
        /**
         * Creates an error thrown when client info object doesn't decode correctly.
         * @param caughtError
         */
        ClientAuthError.createClientInfoDecodingError = function (caughtError) {
            return new ClientAuthError(ClientAuthErrorMessage.clientInfoDecodingError.code, ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
        };
        /**
         * Creates an error thrown if the client info is empty.
         * @param rawClientInfo
         */
        ClientAuthError.createClientInfoEmptyError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.clientInfoEmptyError.code, "" + ClientAuthErrorMessage.clientInfoEmptyError.desc);
        };
        /**
         * Creates an error thrown when the id token extraction errors out.
         * @param err
         */
        ClientAuthError.createTokenParsingError = function (caughtExtractionError) {
            return new ClientAuthError(ClientAuthErrorMessage.tokenParsingError.code, ClientAuthErrorMessage.tokenParsingError.desc + " Failed with error: " + caughtExtractionError);
        };
        /**
         * Creates an error thrown when the id token string is null or empty.
         * @param invalidRawTokenString
         */
        ClientAuthError.createTokenNullOrEmptyError = function (invalidRawTokenString) {
            return new ClientAuthError(ClientAuthErrorMessage.nullOrEmptyToken.code, ClientAuthErrorMessage.nullOrEmptyToken.desc + " Raw Token Value: " + invalidRawTokenString);
        };
        /**
         * Creates an error thrown when the endpoint discovery doesn't complete correctly.
         */
        ClientAuthError.createEndpointDiscoveryIncompleteError = function (errDetail) {
            return new ClientAuthError(ClientAuthErrorMessage.endpointResolutionError.code, ClientAuthErrorMessage.endpointResolutionError.desc + " Detail: " + errDetail);
        };
        /**
         * Creates an error thrown when the openid-configuration endpoint cannot be reached or does not contain the required data
         */
        ClientAuthError.createUnableToGetOpenidConfigError = function (errDetail) {
            return new ClientAuthError(ClientAuthErrorMessage.unableToGetOpenidConfigError.code, ClientAuthErrorMessage.unableToGetOpenidConfigError.desc + " Attempted to retrieve endpoints from: " + errDetail);
        };
        /**
         * Creates an error thrown when the hash cannot be deserialized.
         * @param hashParamObj
         */
        ClientAuthError.createHashNotDeserializedError = function (hashParamObj) {
            return new ClientAuthError(ClientAuthErrorMessage.hashNotDeserialized.code, ClientAuthErrorMessage.hashNotDeserialized.desc + " Given Object: " + hashParamObj);
        };
        /**
         * Creates an error thrown when the state cannot be parsed.
         * @param invalidState
         */
        ClientAuthError.createInvalidStateError = function (invalidState, errorString) {
            return new ClientAuthError(ClientAuthErrorMessage.invalidStateError.code, ClientAuthErrorMessage.invalidStateError.desc + " Invalid State: " + invalidState + ", Root Err: " + errorString);
        };
        /**
         * Creates an error thrown when two states do not match.
         */
        ClientAuthError.createStateMismatchError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.stateMismatchError.code, ClientAuthErrorMessage.stateMismatchError.desc);
        };
        /**
         * Creates an error thrown when the state is not present
         * @param missingState
         */
        ClientAuthError.createStateNotFoundError = function (missingState) {
            return new ClientAuthError(ClientAuthErrorMessage.stateNotFoundError.code, ClientAuthErrorMessage.stateNotFoundError.desc + ":  " + missingState);
        };
        /**
         * Creates an error thrown when the nonce does not match.
         */
        ClientAuthError.createNonceMismatchError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.nonceMismatchError.code, ClientAuthErrorMessage.nonceMismatchError.desc);
        };
        /**
         * Creates an error thrown when the mnonce is not present
         * @param missingNonce
         */
        ClientAuthError.createNonceNotFoundError = function (missingNonce) {
            return new ClientAuthError(ClientAuthErrorMessage.nonceNotFoundError.code, ClientAuthErrorMessage.nonceNotFoundError.desc + ":  " + missingNonce);
        };
        /**
         * Creates an error thrown when the authorization code required for a token request is null or empty.
         */
        ClientAuthError.createNoTokensFoundError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.noTokensFoundError.code, ClientAuthErrorMessage.noTokensFoundError.desc);
        };
        /**
         * Throws error when multiple tokens are in cache.
         */
        ClientAuthError.createMultipleMatchingTokensInCacheError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingTokens.code, ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
        };
        /**
         * Throws error when multiple accounts are in cache for the given params
         */
        ClientAuthError.createMultipleMatchingAccountsInCacheError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingAccounts.code, ClientAuthErrorMessage.multipleMatchingAccounts.desc);
        };
        /**
         * Throws error when multiple appMetada are in cache for the given clientId.
         */
        ClientAuthError.createMultipleMatchingAppMetadataInCacheError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingAppMetadata.code, ClientAuthErrorMessage.multipleMatchingAppMetadata.desc);
        };
        /**
         * Throws error when no auth code or refresh token is given to ServerTokenRequestParameters.
         */
        ClientAuthError.createTokenRequestCannotBeMadeError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.tokenRequestCannotBeMade.code, ClientAuthErrorMessage.tokenRequestCannotBeMade.desc);
        };
        /**
         * Throws error when attempting to append a null, undefined or empty scope to a set
         * @param givenScope
         */
        ClientAuthError.createAppendEmptyScopeToSetError = function (givenScope) {
            return new ClientAuthError(ClientAuthErrorMessage.appendEmptyScopeError.code, ClientAuthErrorMessage.appendEmptyScopeError.desc + " Given Scope: " + givenScope);
        };
        /**
         * Throws error when attempting to append a null, undefined or empty scope to a set
         * @param givenScope
         */
        ClientAuthError.createRemoveEmptyScopeFromSetError = function (givenScope) {
            return new ClientAuthError(ClientAuthErrorMessage.removeEmptyScopeError.code, ClientAuthErrorMessage.removeEmptyScopeError.desc + " Given Scope: " + givenScope);
        };
        /**
         * Throws error when attempting to append null or empty ScopeSet.
         * @param appendError
         */
        ClientAuthError.createAppendScopeSetError = function (appendError) {
            return new ClientAuthError(ClientAuthErrorMessage.appendScopeSetError.code, ClientAuthErrorMessage.appendScopeSetError.desc + " Detail Error: " + appendError);
        };
        /**
         * Throws error if ScopeSet is null or undefined.
         * @param givenScopeSet
         */
        ClientAuthError.createEmptyInputScopeSetError = function (givenScopeSet) {
            return new ClientAuthError(ClientAuthErrorMessage.emptyInputScopeSetError.code, ClientAuthErrorMessage.emptyInputScopeSetError.desc + " Given ScopeSet: " + givenScopeSet);
        };
        /**
         * Throws error if user sets CancellationToken.cancel = true during polling of token endpoint during device code flow
         */
        ClientAuthError.createDeviceCodeCancelledError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.DeviceCodePollingCancelled.code, "" + ClientAuthErrorMessage.DeviceCodePollingCancelled.desc);
        };
        /**
         * Throws error if device code is expired
         */
        ClientAuthError.createDeviceCodeExpiredError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.DeviceCodeExpired.code, "" + ClientAuthErrorMessage.DeviceCodeExpired.desc);
        };
        /**
         * Throws error when silent requests are made without an account object
         */
        ClientAuthError.createNoAccountInSilentRequestError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.NoAccountInSilentRequest.code, "" + ClientAuthErrorMessage.NoAccountInSilentRequest.desc);
        };
        /**
         * Throws error when cache record is null or undefined.
         */
        ClientAuthError.createNullOrUndefinedCacheRecord = function () {
            return new ClientAuthError(ClientAuthErrorMessage.invalidCacheRecord.code, ClientAuthErrorMessage.invalidCacheRecord.desc);
        };
        /**
         * Throws error when provided environment is not part of the CloudDiscoveryMetadata object
         */
        ClientAuthError.createInvalidCacheEnvironmentError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.invalidCacheEnvironment.code, ClientAuthErrorMessage.invalidCacheEnvironment.desc);
        };
        /**
         * Throws error when account is not found in cache.
         */
        ClientAuthError.createNoAccountFoundError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.noAccountFound.code, ClientAuthErrorMessage.noAccountFound.desc);
        };
        /**
         * Throws error if ICachePlugin not set on CacheManager.
         */
        ClientAuthError.createCachePluginError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.CachePluginError.code, "" + ClientAuthErrorMessage.CachePluginError.desc);
        };
        /**
         * Throws error if crypto object not found.
         * @param operationName
         */
        ClientAuthError.createNoCryptoObjectError = function (operationName) {
            return new ClientAuthError(ClientAuthErrorMessage.noCryptoObj.code, "" + ClientAuthErrorMessage.noCryptoObj.desc + operationName);
        };
        /**
         * Throws error if cache type is invalid.
         */
        ClientAuthError.createInvalidCacheTypeError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.invalidCacheType.code, "" + ClientAuthErrorMessage.invalidCacheType.desc);
        };
        /**
         * Throws error if unexpected account type.
         */
        ClientAuthError.createUnexpectedAccountTypeError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.unexpectedAccountType.code, "" + ClientAuthErrorMessage.unexpectedAccountType.desc);
        };
        /**
         * Throws error if unexpected credential type.
         */
        ClientAuthError.createUnexpectedCredentialTypeError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.unexpectedCredentialType.code, "" + ClientAuthErrorMessage.unexpectedCredentialType.desc);
        };
        /**
         * Throws error if client assertion is not valid.
         */
        ClientAuthError.createInvalidAssertionError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.invalidAssertion.code, "" + ClientAuthErrorMessage.invalidAssertion.desc);
        };
        /**
         * Throws error if client assertion is not valid.
         */
        ClientAuthError.createInvalidCredentialError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.invalidClientCredential.code, "" + ClientAuthErrorMessage.invalidClientCredential.desc);
        };
        /**
         * Throws error if token cannot be retrieved from cache due to refresh being required.
         */
        ClientAuthError.createRefreshRequiredError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.tokenRefreshRequired.code, ClientAuthErrorMessage.tokenRefreshRequired.desc);
        };
        /**
         * Throws error if the user defined timeout is reached.
         */
        ClientAuthError.createUserTimeoutReachedError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.userTimeoutReached.code, ClientAuthErrorMessage.userTimeoutReached.desc);
        };
        /*
         * Throws error if token claims are not populated for a signed jwt generation
         */
        ClientAuthError.createTokenClaimsRequiredError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.tokenClaimsRequired.code, ClientAuthErrorMessage.tokenClaimsRequired.desc);
        };
        /**
         * Throws error when the authorization code is missing from the server response
         */
        ClientAuthError.createNoAuthCodeInServerResponseError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.noAuthorizationCodeFromServer.code, ClientAuthErrorMessage.noAuthorizationCodeFromServer.desc);
        };
        return ClientAuthError;
    }(AuthError));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * @hidden
     */
    var StringUtils = /** @class */ (function () {
        function StringUtils() {
        }
        /**
         * decode a JWT
         *
         * @param authToken
         */
        StringUtils.decodeAuthToken = function (authToken) {
            if (StringUtils.isEmpty(authToken)) {
                throw ClientAuthError.createTokenNullOrEmptyError(authToken);
            }
            var tokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
            var matches = tokenPartsRegex.exec(authToken);
            if (!matches || matches.length < 4) {
                throw ClientAuthError.createTokenParsingError("Given token is malformed: " + JSON.stringify(authToken));
            }
            var crackedToken = {
                header: matches[1],
                JWSPayload: matches[2],
                JWSSig: matches[3]
            };
            return crackedToken;
        };
        /**
         * Check if a string is empty.
         *
         * @param str
         */
        StringUtils.isEmpty = function (str) {
            return (typeof str === "undefined" || !str || 0 === str.length);
        };
        StringUtils.startsWith = function (str, search) {
            return str.indexOf(search) === 0;
        };
        StringUtils.endsWith = function (str, search) {
            return (str.length >= search.length) && (str.lastIndexOf(search) === (str.length - search.length));
        };
        /**
         * Parses string into an object.
         *
         * @param query
         */
        StringUtils.queryStringToObject = function (query) {
            var match; // Regex for replacing addition symbol with a space
            var pl = /\+/g;
            var search = /([^&=]+)=([^&]*)/g;
            var decode = function (s) { return decodeURIComponent(decodeURIComponent(s.replace(pl, " "))); };
            var obj = {};
            match = search.exec(query);
            while (match) {
                obj[decode(match[1])] = decode(match[2]);
                match = search.exec(query);
            }
            return obj;
        };
        /**
         * Trims entries in an array.
         *
         * @param arr
         */
        StringUtils.trimArrayEntries = function (arr) {
            return arr.map(function (entry) { return entry.trim(); });
        };
        /**
         * Removes empty strings from array
         * @param arr
         */
        StringUtils.removeEmptyStringsFromArray = function (arr) {
            return arr.filter(function (entry) {
                return !StringUtils.isEmpty(entry);
            });
        };
        /**
         * Attempts to parse a string into JSON
         * @param str
         */
        StringUtils.jsonParseHelper = function (str) {
            try {
                return JSON.parse(str);
            }
            catch (e) {
                return null;
            }
        };
        /**
         * Tests if a given string matches a given pattern, with support for wildcards.
         * @param pattern Wildcard pattern to string match. Supports "*" for wildcards
         * @param input String to match against
         */
        StringUtils.matchPattern = function (pattern, input) {
            // https://stackoverflow.com/a/3117248/4888559
            var regex = new RegExp(pattern.replace(/\*/g, "[^ ]*"));
            return regex.test(input);
        };
        return StringUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Log message level.
     */

    (function (LogLevel) {
        LogLevel[LogLevel["Error"] = 0] = "Error";
        LogLevel[LogLevel["Warning"] = 1] = "Warning";
        LogLevel[LogLevel["Info"] = 2] = "Info";
        LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
    })(exports.LogLevel || (exports.LogLevel = {}));
    /**
     * Class which facilitates logging of messages to a specific place.
     */
    var Logger = /** @class */ (function () {
        function Logger(loggerOptions, packageName, packageVersion) {
            // Current log level, defaults to info.
            this.level = exports.LogLevel.Info;
            var defaultLoggerCallback = function () { };
            this.localCallback = loggerOptions.loggerCallback || defaultLoggerCallback;
            this.piiLoggingEnabled = loggerOptions.piiLoggingEnabled || false;
            this.level = loggerOptions.logLevel || exports.LogLevel.Info;
            this.packageName = packageName || Constants.EMPTY_STRING;
            this.packageVersion = packageVersion || Constants.EMPTY_STRING;
        }
        /**
         * Create new Logger with existing configurations.
         */
        Logger.prototype.clone = function (packageName, packageVersion) {
            return new Logger({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level }, packageName, packageVersion);
        };
        /**
         * Log message with required options.
         */
        Logger.prototype.logMessage = function (logMessage, options) {
            if ((options.logLevel > this.level) || (!this.piiLoggingEnabled && options.containsPii)) {
                return;
            }
            var timestamp = new Date().toUTCString();
            var logHeader = StringUtils.isEmpty(this.correlationId) ? "[" + timestamp + "] : " : "[" + timestamp + "] : [" + this.correlationId + "]";
            var log = logHeader + " : " + this.packageName + "@" + this.packageVersion + " : " + exports.LogLevel[options.logLevel] + " - " + logMessage;
            // debug(`msal:${LogLevel[options.logLevel]}${options.containsPii ? "-Pii": ""}${options.context ? `:${options.context}` : ""}`)(logMessage);
            this.executeCallback(options.logLevel, log, options.containsPii || false);
        };
        /**
         * Execute callback with message.
         */
        Logger.prototype.executeCallback = function (level, message, containsPii) {
            if (this.localCallback) {
                this.localCallback(level, message, containsPii);
            }
        };
        /**
         * Logs error messages.
         */
        Logger.prototype.error = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Error,
                containsPii: false,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs error messages with PII.
         */
        Logger.prototype.errorPii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Error,
                containsPii: true,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs warning messages.
         */
        Logger.prototype.warning = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Warning,
                containsPii: false,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs warning messages with PII.
         */
        Logger.prototype.warningPii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Warning,
                containsPii: true,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs info messages.
         */
        Logger.prototype.info = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Info,
                containsPii: false,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs info messages with PII.
         */
        Logger.prototype.infoPii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Info,
                containsPii: true,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs verbose messages.
         */
        Logger.prototype.verbose = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Verbose,
                containsPii: false,
                correlationId: correlationId || ""
            });
        };
        /**
         * Logs verbose messages with PII.
         */
        Logger.prototype.verbosePii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: exports.LogLevel.Verbose,
                containsPii: true,
                correlationId: correlationId || ""
            });
        };
        /**
         * Returns whether PII Logging is enabled or not.
         */
        Logger.prototype.isPiiLoggingEnabled = function () {
            return this.piiLoggingEnabled || false;
        };
        return Logger;
    }());

    /* eslint-disable header/header */
    var name = "@azure/msal-common";
    var version = "4.0.2";

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Base type for credentials to be stored in the cache: eg: ACCESS_TOKEN, ID_TOKEN etc
     *
     * Key:Value Schema:
     *
     * Key: <home_account_id*>-<environment>-<credential_type>-<client_id>-<realm*>-<target*>
     *
     * Value Schema:
     * {
     *      homeAccountId: home account identifier for the auth scheme,
     *      environment: entity that issued the token, represented as a full host
     *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
     *      clientId: client ID of the application
     *      secret: Actual credential as a string
     *      familyId: Family ID identifier, usually only used for refresh tokens
     *      realm: Full tenant or organizational identifier that the account belongs to
     *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
     *      oboAssertion: access token passed in as part of OBO request
     * }
     */
    var CredentialEntity = /** @class */ (function () {
        function CredentialEntity() {
        }
        /**
         * Generate Account Id key component as per the schema: <home_account_id>-<environment>
         */
        CredentialEntity.prototype.generateAccountId = function () {
            return CredentialEntity.generateAccountIdForCacheKey(this.homeAccountId, this.environment);
        };
        /**
         * Generate Credential Id key component as per the schema: <credential_type>-<client_id>-<realm>
         */
        CredentialEntity.prototype.generateCredentialId = function () {
            return CredentialEntity.generateCredentialIdForCacheKey(this.credentialType, this.clientId, this.realm, this.familyId);
        };
        /**
         * Generate target key component as per schema: <target>
         */
        CredentialEntity.prototype.generateTarget = function () {
            return CredentialEntity.generateTargetForCacheKey(this.target);
        };
        /**
         * generates credential key
         */
        CredentialEntity.prototype.generateCredentialKey = function () {
            return CredentialEntity.generateCredentialCacheKey(this.homeAccountId, this.environment, this.credentialType, this.clientId, this.realm, this.target, this.familyId);
        };
        /**
         * returns the type of the cache (in this case credential)
         */
        CredentialEntity.prototype.generateType = function () {
            switch (this.credentialType) {
                case CredentialType.ID_TOKEN:
                    return CacheType.ID_TOKEN;
                case CredentialType.ACCESS_TOKEN:
                    return CacheType.ACCESS_TOKEN;
                case CredentialType.REFRESH_TOKEN:
                    return CacheType.REFRESH_TOKEN;
                default: {
                    throw ClientAuthError.createUnexpectedCredentialTypeError();
                }
            }
        };
        /**
         * helper function to return `CredentialType`
         * @param key
         */
        CredentialEntity.getCredentialType = function (key) {
            if (key.indexOf(CredentialType.ACCESS_TOKEN.toLowerCase()) !== -1) {
                return CredentialType.ACCESS_TOKEN;
            }
            else if (key.indexOf(CredentialType.ID_TOKEN.toLowerCase()) !== -1) {
                return CredentialType.ID_TOKEN;
            }
            else if (key.indexOf(CredentialType.REFRESH_TOKEN.toLowerCase()) !== -1) {
                return CredentialType.REFRESH_TOKEN;
            }
            return Constants.NOT_DEFINED;
        };
        /**
         * generates credential key
         */
        CredentialEntity.generateCredentialCacheKey = function (homeAccountId, environment, credentialType, clientId, realm, target, familyId) {
            var credentialKey = [
                this.generateAccountIdForCacheKey(homeAccountId, environment),
                this.generateCredentialIdForCacheKey(credentialType, clientId, realm, familyId),
                this.generateTargetForCacheKey(target),
            ];
            return credentialKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * generates Account Id for keys
         * @param homeAccountId
         * @param environment
         */
        CredentialEntity.generateAccountIdForCacheKey = function (homeAccountId, environment) {
            var accountId = [homeAccountId, environment];
            return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Generates Credential Id for keys
         * @param credentialType
         * @param realm
         * @param clientId
         * @param familyId
         */
        CredentialEntity.generateCredentialIdForCacheKey = function (credentialType, clientId, realm, familyId) {
            var clientOrFamilyId = credentialType === CredentialType.REFRESH_TOKEN
                ? familyId || clientId
                : clientId;
            var credentialId = [
                credentialType,
                clientOrFamilyId,
                realm || "",
            ];
            return credentialId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Generate target key component as per schema: <target>
         */
        CredentialEntity.generateTargetForCacheKey = function (scopes) {
            return (scopes || "").toLowerCase();
        };
        return CredentialEntity;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * ClientConfigurationErrorMessage class containing string constants used by error codes and messages.
     */
    var ClientConfigurationErrorMessage = {
        redirectUriNotSet: {
            code: "redirect_uri_empty",
            desc: "A redirect URI is required for all calls, and none has been set."
        },
        postLogoutUriNotSet: {
            code: "post_logout_uri_empty",
            desc: "A post logout redirect has not been set."
        },
        claimsRequestParsingError: {
            code: "claims_request_parsing_error",
            desc: "Could not parse the given claims request object."
        },
        authorityUriInsecure: {
            code: "authority_uri_insecure",
            desc: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options"
        },
        urlParseError: {
            code: "url_parse_error",
            desc: "URL could not be parsed into appropriate segments."
        },
        urlEmptyError: {
            code: "empty_url_error",
            desc: "URL was empty or null."
        },
        emptyScopesError: {
            code: "empty_input_scopes_error",
            desc: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token."
        },
        nonArrayScopesError: {
            code: "nonarray_input_scopes_error",
            desc: "Scopes cannot be passed as non-array."
        },
        clientIdSingleScopeError: {
            code: "clientid_input_scopes_error",
            desc: "Client ID can only be provided as a single scope."
        },
        invalidPrompt: {
            code: "invalid_prompt_value",
            desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'.  Please see here for valid configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
        },
        invalidClaimsRequest: {
            code: "invalid_claims",
            desc: "Given claims parameter must be a stringified JSON object."
        },
        tokenRequestEmptyError: {
            code: "token_request_empty",
            desc: "Token request was empty and not found in cache."
        },
        logoutRequestEmptyError: {
            code: "logout_request_empty",
            desc: "The logout request was null or undefined."
        },
        invalidCodeChallengeMethod: {
            code: "invalid_code_challenge_method",
            desc: "code_challenge_method passed is invalid. Valid values are \"plain\" and \"S256\"."
        },
        invalidCodeChallengeParams: {
            code: "pkce_params_missing",
            desc: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request"
        },
        invalidCloudDiscoveryMetadata: {
            code: "invalid_cloud_discovery_metadata",
            desc: "Invalid cloudDiscoveryMetadata provided. Must be a JSON object containing tenant_discovery_endpoint and metadata fields"
        },
        invalidAuthorityMetadata: {
            code: "invalid_authority_metadata",
            desc: "Invalid authorityMetadata provided. Must by a JSON object containing authorization_endpoint, token_endpoint, end_session_endpoint, issuer fields."
        },
        untrustedAuthority: {
            code: "untrusted_authority",
            desc: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter."
        },
        resourceRequestParametersRequired: {
            code: "resourceRequest_parameters_required",
            desc: "resourceRequestMethod and resourceRequestUri are required"
        }
    };
    /**
     * Error thrown when there is an error in configuration of the MSAL.js library.
     */
    var ClientConfigurationError = /** @class */ (function (_super) {
        __extends$1(ClientConfigurationError, _super);
        function ClientConfigurationError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "ClientConfigurationError";
            Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
            return _this;
        }
        /**
         * Creates an error thrown when the redirect uri is empty (not set by caller)
         */
        ClientConfigurationError.createRedirectUriEmptyError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.redirectUriNotSet.code, ClientConfigurationErrorMessage.redirectUriNotSet.desc);
        };
        /**
         * Creates an error thrown when the post-logout redirect uri is empty (not set by caller)
         */
        ClientConfigurationError.createPostLogoutRedirectUriEmptyError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.postLogoutUriNotSet.code, ClientConfigurationErrorMessage.postLogoutUriNotSet.desc);
        };
        /**
         * Creates an error thrown when the claims request could not be successfully parsed
         */
        ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.claimsRequestParsingError.code, ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
        };
        /**
         * Creates an error thrown if authority uri is given an insecure protocol.
         * @param urlString
         */
        ClientConfigurationError.createInsecureAuthorityUriError = function (urlString) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.authorityUriInsecure.code, ClientConfigurationErrorMessage.authorityUriInsecure.desc + " Given URI: " + urlString);
        };
        /**
         * Creates an error thrown if URL string does not parse into separate segments.
         * @param urlString
         */
        ClientConfigurationError.createUrlParseError = function (urlParseError) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.urlParseError.code, ClientConfigurationErrorMessage.urlParseError.desc + " Given Error: " + urlParseError);
        };
        /**
         * Creates an error thrown if URL string is empty or null.
         * @param urlString
         */
        ClientConfigurationError.createUrlEmptyError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.urlEmptyError.code, ClientConfigurationErrorMessage.urlEmptyError.desc);
        };
        /**
         * Error thrown when scopes are not an array
         * @param inputScopes
         */
        ClientConfigurationError.createScopesNonArrayError = function (inputScopes) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.nonArrayScopesError.code, ClientConfigurationErrorMessage.nonArrayScopesError.desc + " Given Scopes: " + inputScopes);
        };
        /**
         * Error thrown when scopes are empty.
         * @param scopesValue
         */
        ClientConfigurationError.createEmptyScopesArrayError = function (inputScopes) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.emptyScopesError.code, ClientConfigurationErrorMessage.emptyScopesError.desc + " Given Scopes: " + inputScopes);
        };
        /**
         * Error thrown when client id scope is not provided as single scope.
         * @param inputScopes
         */
        ClientConfigurationError.createClientIdSingleScopeError = function (inputScopes) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.clientIdSingleScopeError.code, ClientConfigurationErrorMessage.clientIdSingleScopeError.desc + " Given Scopes: " + inputScopes);
        };
        /**
         * Error thrown when prompt is not an allowed type.
         * @param promptValue
         */
        ClientConfigurationError.createInvalidPromptError = function (promptValue) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidPrompt.code, ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
        };
        /**
         * Creates error thrown when claims parameter is not a stringified JSON object
         */
        ClientConfigurationError.createInvalidClaimsRequestError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidClaimsRequest.code, ClientConfigurationErrorMessage.invalidClaimsRequest.desc);
        };
        /**
         * Throws error when token request is empty and nothing cached in storage.
         */
        ClientConfigurationError.createEmptyLogoutRequestError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.logoutRequestEmptyError.code, ClientConfigurationErrorMessage.logoutRequestEmptyError.desc);
        };
        /**
         * Throws error when token request is empty and nothing cached in storage.
         */
        ClientConfigurationError.createEmptyTokenRequestError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.tokenRequestEmptyError.code, ClientConfigurationErrorMessage.tokenRequestEmptyError.desc);
        };
        /**
         * Throws error when an invalid code_challenge_method is passed by the user
         */
        ClientConfigurationError.createInvalidCodeChallengeMethodError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCodeChallengeMethod.code, ClientConfigurationErrorMessage.invalidCodeChallengeMethod.desc);
        };
        /**
         * Throws error when both params: code_challenge and code_challenge_method are not passed together
         */
        ClientConfigurationError.createInvalidCodeChallengeParamsError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCodeChallengeParams.code, ClientConfigurationErrorMessage.invalidCodeChallengeParams.desc);
        };
        /**
         * Throws an error when the user passes invalid cloudDiscoveryMetadata
         */
        ClientConfigurationError.createInvalidCloudDiscoveryMetadataError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.code, ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.desc);
        };
        /**
         * Throws an error when the user passes invalid cloudDiscoveryMetadata
         */
        ClientConfigurationError.createInvalidAuthorityMetadataError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidAuthorityMetadata.code, ClientConfigurationErrorMessage.invalidAuthorityMetadata.desc);
        };
        /**
         * Throws error when provided authority is not a member of the trusted host list
         */
        ClientConfigurationError.createUntrustedAuthorityError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.untrustedAuthority.code, ClientConfigurationErrorMessage.untrustedAuthority.desc);
        };
        /**
         * Throws error when resourceRequestMethod or resourceRequestUri is missing
         */
        ClientConfigurationError.createResourceRequestParametersRequiredError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.resourceRequestParametersRequired.code, ClientConfigurationErrorMessage.resourceRequestParametersRequired.desc);
        };
        return ClientConfigurationError;
    }(ClientAuthError));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * The ScopeSet class creates a set of scopes. Scopes are case-insensitive, unique values, so the Set object in JS makes
     * the most sense to implement for this class. All scopes are trimmed and converted to lower case strings in intersection and union functions
     * to ensure uniqueness of strings.
     */
    var ScopeSet = /** @class */ (function () {
        function ScopeSet(inputScopes) {
            var _this = this;
            // Filter empty string and null/undefined array items
            var scopeArr = inputScopes ? StringUtils.trimArrayEntries(__spreadArrays(inputScopes)) : [];
            var filteredInput = scopeArr ? StringUtils.removeEmptyStringsFromArray(scopeArr) : [];
            // Validate and filter scopes (validate function throws if validation fails)
            this.validateInputScopes(filteredInput);
            this.scopes = new Set(); // Iterator in constructor not supported by IE11
            filteredInput.forEach(function (scope) { return _this.scopes.add(scope); });
        }
        /**
         * Factory method to create ScopeSet from space-delimited string
         * @param inputScopeString
         * @param appClientId
         * @param scopesRequired
         */
        ScopeSet.fromString = function (inputScopeString) {
            inputScopeString = inputScopeString || "";
            var inputScopes = inputScopeString.split(" ");
            return new ScopeSet(inputScopes);
        };
        /**
         * Used to validate the scopes input parameter requested  by the developer.
         * @param {Array<string>} inputScopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
         * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
         */
        ScopeSet.prototype.validateInputScopes = function (inputScopes) {
            // Check if scopes are required but not given or is an empty array
            if (!inputScopes || inputScopes.length < 1) {
                throw ClientConfigurationError.createEmptyScopesArrayError(inputScopes);
            }
        };
        /**
         * Check if a given scope is present in this set of scopes.
         * @param scope
         */
        ScopeSet.prototype.containsScope = function (scope) {
            var lowerCaseScopes = this.printScopesLowerCase().split(" ");
            var lowerCaseScopesSet = new ScopeSet(lowerCaseScopes);
            // compare lowercase scopes
            return !StringUtils.isEmpty(scope) ? lowerCaseScopesSet.scopes.has(scope.toLowerCase()) : false;
        };
        /**
         * Check if a set of scopes is present in this set of scopes.
         * @param scopeSet
         */
        ScopeSet.prototype.containsScopeSet = function (scopeSet) {
            var _this = this;
            if (!scopeSet || scopeSet.scopes.size <= 0) {
                return false;
            }
            return (this.scopes.size >= scopeSet.scopes.size && scopeSet.asArray().every(function (scope) { return _this.containsScope(scope); }));
        };
        /**
         * Check if set of scopes contains only the defaults
         */
        ScopeSet.prototype.containsOnlyOIDCScopes = function () {
            var _this = this;
            var defaultScopeCount = 0;
            OIDC_SCOPES.forEach(function (defaultScope) {
                if (_this.containsScope(defaultScope)) {
                    defaultScopeCount += 1;
                }
            });
            return this.scopes.size === defaultScopeCount;
        };
        /**
         * Appends single scope if passed
         * @param newScope
         */
        ScopeSet.prototype.appendScope = function (newScope) {
            if (!StringUtils.isEmpty(newScope)) {
                this.scopes.add(newScope.trim());
            }
        };
        /**
         * Appends multiple scopes if passed
         * @param newScopes
         */
        ScopeSet.prototype.appendScopes = function (newScopes) {
            var _this = this;
            try {
                newScopes.forEach(function (newScope) { return _this.appendScope(newScope); });
            }
            catch (e) {
                throw ClientAuthError.createAppendScopeSetError(e);
            }
        };
        /**
         * Removes element from set of scopes.
         * @param scope
         */
        ScopeSet.prototype.removeScope = function (scope) {
            if (StringUtils.isEmpty(scope)) {
                throw ClientAuthError.createRemoveEmptyScopeFromSetError(scope);
            }
            this.scopes.delete(scope.trim());
        };
        /**
         * Removes default scopes from set of scopes
         * Primarily used to prevent cache misses if the default scopes are not returned from the server
         */
        ScopeSet.prototype.removeOIDCScopes = function () {
            var _this = this;
            OIDC_SCOPES.forEach(function (defaultScope) {
                _this.scopes.delete(defaultScope);
            });
        };
        /**
         * Combines an array of scopes with the current set of scopes.
         * @param otherScopes
         */
        ScopeSet.prototype.unionScopeSets = function (otherScopes) {
            if (!otherScopes) {
                throw ClientAuthError.createEmptyInputScopeSetError(otherScopes);
            }
            var unionScopes = new Set(); // Iterator in constructor not supported in IE11
            otherScopes.scopes.forEach(function (scope) { return unionScopes.add(scope.toLowerCase()); });
            this.scopes.forEach(function (scope) { return unionScopes.add(scope.toLowerCase()); });
            return unionScopes;
        };
        /**
         * Check if scopes intersect between this set and another.
         * @param otherScopes
         */
        ScopeSet.prototype.intersectingScopeSets = function (otherScopes) {
            if (!otherScopes) {
                throw ClientAuthError.createEmptyInputScopeSetError(otherScopes);
            }
            // Do not allow OIDC scopes to be the only intersecting scopes
            if (!otherScopes.containsOnlyOIDCScopes()) {
                otherScopes.removeOIDCScopes();
            }
            var unionScopes = this.unionScopeSets(otherScopes);
            var sizeOtherScopes = otherScopes.getScopeCount();
            var sizeThisScopes = this.getScopeCount();
            var sizeUnionScopes = unionScopes.size;
            return sizeUnionScopes < (sizeThisScopes + sizeOtherScopes);
        };
        /**
         * Returns size of set of scopes.
         */
        ScopeSet.prototype.getScopeCount = function () {
            return this.scopes.size;
        };
        /**
         * Returns the scopes as an array of string values
         */
        ScopeSet.prototype.asArray = function () {
            var array = [];
            this.scopes.forEach(function (val) { return array.push(val); });
            return array;
        };
        /**
         * Prints scopes into a space-delimited string
         */
        ScopeSet.prototype.printScopes = function () {
            if (this.scopes) {
                var scopeArr = this.asArray();
                return scopeArr.join(" ");
            }
            return "";
        };
        /**
         * Prints scopes into a space-delimited lower-case string (used for caching)
         */
        ScopeSet.prototype.printScopesLowerCase = function () {
            return this.printScopes().toLowerCase();
        };
        return ScopeSet;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Function to build a client info object
     * @param rawClientInfo
     * @param crypto
     */
    function buildClientInfo(rawClientInfo, crypto) {
        if (StringUtils.isEmpty(rawClientInfo)) {
            throw ClientAuthError.createClientInfoEmptyError();
        }
        try {
            var decodedClientInfo = crypto.base64Decode(rawClientInfo);
            return JSON.parse(decodedClientInfo);
        }
        catch (e) {
            throw ClientAuthError.createClientInfoDecodingError(e);
        }
    }

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Authority types supported by MSAL.
     */
    var AuthorityType;
    (function (AuthorityType) {
        AuthorityType[AuthorityType["Default"] = 0] = "Default";
        AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
    })(AuthorityType || (AuthorityType = {}));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Type that defines required and optional parameters for an Account field (based on universal cache schema implemented by all MSALs).
     *
     * Key : Value Schema
     *
     * Key: <home_account_id>-<environment>-<realm*>
     *
     * Value Schema:
     * {
     *      homeAccountId: home account identifier for the auth scheme,
     *      environment: entity that issued the token, represented as a full host
     *      realm: Full tenant or organizational identifier that the account belongs to
     *      localAccountId: Original tenant-specific accountID, usually used for legacy cases
     *      username: primary username that represents the user, usually corresponds to preferred_username in the v2 endpt
     *      authorityType: Accounts authority type as a string
     *      name: Full name for the account, including given name and family name,
     *      clientInfo: Full base64 encoded client info received from ESTS
     *      lastModificationTime: last time this entity was modified in the cache
     *      lastModificationApp:
     *      oboAssertion: access token passed in as part of OBO request
     *      idTokenClaims: Object containing claims parsed from ID token
     * }
     */
    var AccountEntity = /** @class */ (function () {
        function AccountEntity() {
        }
        /**
         * Generate Account Id key component as per the schema: <home_account_id>-<environment>
         */
        AccountEntity.prototype.generateAccountId = function () {
            var accountId = [this.homeAccountId, this.environment];
            return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Generate Account Cache Key as per the schema: <home_account_id>-<environment>-<realm*>
         */
        AccountEntity.prototype.generateAccountKey = function () {
            return AccountEntity.generateAccountCacheKey({
                homeAccountId: this.homeAccountId,
                environment: this.environment,
                tenantId: this.realm,
                username: this.username,
                localAccountId: this.localAccountId
            });
        };
        /**
         * returns the type of the cache (in this case account)
         */
        AccountEntity.prototype.generateType = function () {
            switch (this.authorityType) {
                case CacheAccountType.ADFS_ACCOUNT_TYPE:
                    return CacheType.ADFS;
                case CacheAccountType.MSAV1_ACCOUNT_TYPE:
                    return CacheType.MSA;
                case CacheAccountType.MSSTS_ACCOUNT_TYPE:
                    return CacheType.MSSTS;
                case CacheAccountType.GENERIC_ACCOUNT_TYPE:
                    return CacheType.GENERIC;
                default: {
                    throw ClientAuthError.createUnexpectedAccountTypeError();
                }
            }
        };
        /**
         * Returns the AccountInfo interface for this account.
         */
        AccountEntity.prototype.getAccountInfo = function () {
            return {
                homeAccountId: this.homeAccountId,
                environment: this.environment,
                tenantId: this.realm,
                username: this.username,
                localAccountId: this.localAccountId,
                name: this.name,
                idTokenClaims: this.idTokenClaims
            };
        };
        /**
         * Generates account key from interface
         * @param accountInterface
         */
        AccountEntity.generateAccountCacheKey = function (accountInterface) {
            var accountKey = [
                accountInterface.homeAccountId,
                accountInterface.environment || "",
                accountInterface.tenantId || "",
            ];
            return accountKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Build Account cache from IdToken, clientInfo and authority/policy. Associated with AAD.
         * @param clientInfo
         * @param authority
         * @param idToken
         * @param policy
         */
        AccountEntity.createAccount = function (clientInfo, homeAccountId, authority, idToken, oboAssertion, cloudGraphHostName, msGraphHost) {
            var _a, _b, _c, _d, _e, _f;
            var account = new AccountEntity();
            account.authorityType = CacheAccountType.MSSTS_ACCOUNT_TYPE;
            account.clientInfo = clientInfo;
            account.homeAccountId = homeAccountId;
            var env = authority.getPreferredCache();
            if (StringUtils.isEmpty(env)) {
                throw ClientAuthError.createInvalidCacheEnvironmentError();
            }
            account.environment = env;
            // non AAD scenarios can have empty realm
            account.realm = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.tid) || "";
            account.oboAssertion = oboAssertion;
            if (idToken) {
                account.idTokenClaims = idToken.claims;
                // How do you account for MSA CID here?
                account.localAccountId = ((_b = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _b === void 0 ? void 0 : _b.oid) || ((_c = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _c === void 0 ? void 0 : _c.sub) || "";
                /*
                 * In B2C scenarios the emails claim is used instead of preferred_username and it is an array. In most cases it will contain a single email.
                 * This field should not be relied upon if a custom policy is configured to return more than 1 email.
                 */
                account.username = ((_d = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _d === void 0 ? void 0 : _d.preferred_username) || (((_e = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _e === void 0 ? void 0 : _e.emails) ? idToken.claims.emails[0] : "");
                account.name = (_f = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _f === void 0 ? void 0 : _f.name;
            }
            account.cloudGraphHostName = cloudGraphHostName;
            account.msGraphHost = msGraphHost;
            return account;
        };
        /**
         * Builds non-AAD/ADFS account.
         * @param authority
         * @param idToken
         */
        AccountEntity.createGenericAccount = function (authority, homeAccountId, idToken, oboAssertion, cloudGraphHostName, msGraphHost) {
            var _a, _b, _c, _d;
            var account = new AccountEntity();
            account.authorityType = (authority.authorityType === AuthorityType.Adfs) ? CacheAccountType.ADFS_ACCOUNT_TYPE : CacheAccountType.GENERIC_ACCOUNT_TYPE;
            account.homeAccountId = homeAccountId;
            // non AAD scenarios can have empty realm
            account.realm = "";
            account.oboAssertion = oboAssertion;
            var env = authority.getPreferredCache();
            if (StringUtils.isEmpty(env)) {
                throw ClientAuthError.createInvalidCacheEnvironmentError();
            }
            if (idToken) {
                // How do you account for MSA CID here?
                account.localAccountId = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.oid) || ((_b = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _b === void 0 ? void 0 : _b.sub) || "";
                // upn claim for most ADFS scenarios
                account.username = ((_c = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _c === void 0 ? void 0 : _c.upn) || "";
                account.name = ((_d = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _d === void 0 ? void 0 : _d.name) || "";
                account.idTokenClaims = idToken === null || idToken === void 0 ? void 0 : idToken.claims;
            }
            account.environment = env;
            account.cloudGraphHostName = cloudGraphHostName;
            account.msGraphHost = msGraphHost;
            /*
             * add uniqueName to claims
             * account.name = idToken.claims.uniqueName;
             */
            return account;
        };
        /**
         * Generate HomeAccountId from server response
         * @param serverClientInfo
         * @param authType
         */
        AccountEntity.generateHomeAccountId = function (serverClientInfo, authType, logger, cryptoObj, idToken) {
            var _a;
            var accountId = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.sub) ? idToken.claims.sub : Constants.EMPTY_STRING;
            // since ADFS does not have tid and does not set client_info
            if (authType === AuthorityType.Adfs) {
                return accountId;
            }
            // for cases where there is clientInfo
            if (serverClientInfo) {
                var clientInfo = buildClientInfo(serverClientInfo, cryptoObj);
                if (!StringUtils.isEmpty(clientInfo.uid) && !StringUtils.isEmpty(clientInfo.utid)) {
                    return "" + clientInfo.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfo.utid;
                }
            }
            // default to "sub" claim
            logger.verbose("No client info in response");
            return accountId;
        };
        /**
         * Validates an entity: checks for all expected params
         * @param entity
         */
        AccountEntity.isAccountEntity = function (entity) {
            if (!entity) {
                return false;
            }
            return (entity.hasOwnProperty("homeAccountId") &&
                entity.hasOwnProperty("environment") &&
                entity.hasOwnProperty("realm") &&
                entity.hasOwnProperty("localAccountId") &&
                entity.hasOwnProperty("username") &&
                entity.hasOwnProperty("authorityType"));
        };
        /**
         * Helper function to determine whether 2 accounts are equal
         * Used to avoid unnecessary state updates
         * @param arrayA
         * @param arrayB
         */
        AccountEntity.accountInfoIsEqual = function (accountA, accountB) {
            if (!accountA || !accountB) {
                return false;
            }
            return (accountA.homeAccountId === accountB.homeAccountId) &&
                (accountA.localAccountId === accountB.localAccountId) &&
                (accountA.username === accountB.username) &&
                (accountA.tenantId === accountB.tenantId) &&
                (accountA.environment === accountB.environment);
        };
        return AccountEntity;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * JWT Token representation class. Parses token string and generates claims object.
     */
    var AuthToken = /** @class */ (function () {
        function AuthToken(rawToken, crypto) {
            if (StringUtils.isEmpty(rawToken)) {
                throw ClientAuthError.createTokenNullOrEmptyError(rawToken);
            }
            this.rawToken = rawToken;
            this.claims = AuthToken.extractTokenClaims(rawToken, crypto);
        }
        /**
         * Extract token by decoding the rawToken
         *
         * @param encodedToken
         */
        AuthToken.extractTokenClaims = function (encodedToken, crypto) {
            var decodedToken = StringUtils.decodeAuthToken(encodedToken);
            // token will be decoded to get the username
            try {
                var base64TokenPayload = decodedToken.JWSPayload;
                // base64Decode() should throw an error if there is an issue
                var base64Decoded = crypto.base64Decode(base64TokenPayload);
                return JSON.parse(base64Decoded);
            }
            catch (err) {
                throw ClientAuthError.createTokenParsingError(err);
            }
        };
        return AuthToken;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Interface class which implement cache storage functions used by MSAL to perform validity checks, and store tokens.
     */
    var CacheManager = /** @class */ (function () {
        function CacheManager(clientId, cryptoImpl) {
            this.clientId = clientId;
            this.cryptoImpl = cryptoImpl;
        }
        /**
         * Returns all accounts in cache
         */
        CacheManager.prototype.getAllAccounts = function () {
            var _this = this;
            var currentAccounts = this.getAccountsFilteredBy();
            var accountValues = Object.keys(currentAccounts).map(function (accountKey) { return currentAccounts[accountKey]; });
            var numAccounts = accountValues.length;
            if (numAccounts < 1) {
                return [];
            }
            else {
                var allAccounts = accountValues.map(function (value) {
                    var accountEntity = CacheManager.toObject(new AccountEntity(), value);
                    var accountInfo = accountEntity.getAccountInfo();
                    var idToken = _this.readIdTokenFromCache(_this.clientId, accountInfo);
                    if (idToken && !accountInfo.idTokenClaims) {
                        accountInfo.idTokenClaims = new AuthToken(idToken.secret, _this.cryptoImpl).claims;
                    }
                    return accountInfo;
                });
                return allAccounts;
            }
        };
        /**
         * saves a cache record
         * @param cacheRecord
         */
        CacheManager.prototype.saveCacheRecord = function (cacheRecord) {
            if (!cacheRecord) {
                throw ClientAuthError.createNullOrUndefinedCacheRecord();
            }
            if (!!cacheRecord.account) {
                this.setAccount(cacheRecord.account);
            }
            if (!!cacheRecord.idToken) {
                this.setIdTokenCredential(cacheRecord.idToken);
            }
            if (!!cacheRecord.accessToken) {
                this.saveAccessToken(cacheRecord.accessToken);
            }
            if (!!cacheRecord.refreshToken) {
                this.setRefreshTokenCredential(cacheRecord.refreshToken);
            }
            if (!!cacheRecord.appMetadata) {
                this.setAppMetadata(cacheRecord.appMetadata);
            }
        };
        /**
         * saves access token credential
         * @param credential
         */
        CacheManager.prototype.saveAccessToken = function (credential) {
            var _this = this;
            var currentTokenCache = this.getCredentialsFilteredBy({
                clientId: credential.clientId,
                credentialType: CredentialType.ACCESS_TOKEN,
                environment: credential.environment,
                homeAccountId: credential.homeAccountId,
                realm: credential.realm,
            });
            var currentScopes = ScopeSet.fromString(credential.target);
            var currentAccessTokens = Object.keys(currentTokenCache.accessTokens).map(function (key) { return currentTokenCache.accessTokens[key]; });
            if (currentAccessTokens) {
                currentAccessTokens.forEach(function (tokenEntity) {
                    var tokenScopeSet = ScopeSet.fromString(tokenEntity.target);
                    if (tokenScopeSet.intersectingScopeSets(currentScopes)) {
                        _this.removeCredential(tokenEntity);
                    }
                });
            }
            this.setAccessTokenCredential(credential);
        };
        /**
         * retrieve accounts matching all provided filters; if no filter is set, get all accounts
         * not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
         * @param homeAccountId
         * @param environment
         * @param realm
         */
        CacheManager.prototype.getAccountsFilteredBy = function (accountFilter) {
            return this.getAccountsFilteredByInternal(accountFilter ? accountFilter.homeAccountId : "", accountFilter ? accountFilter.environment : "", accountFilter ? accountFilter.realm : "");
        };
        /**
         * retrieve accounts matching all provided filters; if no filter is set, get all accounts
         * not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
         * @param homeAccountId
         * @param environment
         * @param realm
         */
        CacheManager.prototype.getAccountsFilteredByInternal = function (homeAccountId, environment, realm) {
            var _this = this;
            var allCacheKeys = this.getKeys();
            var matchingAccounts = {};
            allCacheKeys.forEach(function (cacheKey) {
                var entity = _this.getAccount(cacheKey);
                if (!entity) {
                    return;
                }
                if (!!homeAccountId && !_this.matchHomeAccountId(entity, homeAccountId)) {
                    return;
                }
                if (!!environment && !_this.matchEnvironment(entity, environment)) {
                    return;
                }
                if (!!realm && !_this.matchRealm(entity, realm)) {
                    return;
                }
                matchingAccounts[cacheKey] = entity;
            });
            return matchingAccounts;
        };
        /**
         * retrieve credentails matching all provided filters; if no filter is set, get all credentials
         * @param homeAccountId
         * @param environment
         * @param credentialType
         * @param clientId
         * @param realm
         * @param target
         */
        CacheManager.prototype.getCredentialsFilteredBy = function (filter) {
            return this.getCredentialsFilteredByInternal(filter.homeAccountId, filter.environment, filter.credentialType, filter.clientId, filter.familyId, filter.realm, filter.target, filter.oboAssertion);
        };
        /**
         * Support function to help match credentials
         * @param homeAccountId
         * @param environment
         * @param credentialType
         * @param clientId
         * @param realm
         * @param target
         */
        CacheManager.prototype.getCredentialsFilteredByInternal = function (homeAccountId, environment, credentialType, clientId, familyId, realm, target, oboAssertion) {
            var _this = this;
            var allCacheKeys = this.getKeys();
            var matchingCredentials = {
                idTokens: {},
                accessTokens: {},
                refreshTokens: {},
            };
            allCacheKeys.forEach(function (cacheKey) {
                // don't parse any non-credential type cache entities
                var credType = CredentialEntity.getCredentialType(cacheKey);
                if (credType === Constants.NOT_DEFINED) {
                    return;
                }
                // Attempt retrieval
                var entity = _this.getSpecificCredential(cacheKey, credType);
                if (!entity) {
                    return;
                }
                if (!!oboAssertion && !_this.matchOboAssertion(entity, oboAssertion)) {
                    return;
                }
                if (!!homeAccountId && !_this.matchHomeAccountId(entity, homeAccountId)) {
                    return;
                }
                if (!!environment && !_this.matchEnvironment(entity, environment)) {
                    return;
                }
                if (!!realm && !_this.matchRealm(entity, realm)) {
                    return;
                }
                if (!!credentialType && !_this.matchCredentialType(entity, credentialType)) {
                    return;
                }
                if (!!clientId && !_this.matchClientId(entity, clientId)) {
                    return;
                }
                if (!!familyId && !_this.matchFamilyId(entity, familyId)) {
                    return;
                }
                /*
                 * idTokens do not have "target", target specific refreshTokens do exist for some types of authentication
                 * Resource specific refresh tokens case will be added when the support is deemed necessary
                 */
                if (!!target && !_this.matchTarget(entity, target)) {
                    return;
                }
                switch (credType) {
                    case CredentialType.ID_TOKEN:
                        matchingCredentials.idTokens[cacheKey] = entity;
                        break;
                    case CredentialType.ACCESS_TOKEN:
                        matchingCredentials.accessTokens[cacheKey] = entity;
                        break;
                    case CredentialType.REFRESH_TOKEN:
                        matchingCredentials.refreshTokens[cacheKey] = entity;
                        break;
                }
            });
            return matchingCredentials;
        };
        /**
         * retrieve appMetadata matching all provided filters; if no filter is set, get all appMetadata
         * @param filter
         */
        CacheManager.prototype.getAppMetadataFilteredBy = function (filter) {
            return this.getAppMetadataFilteredByInternal(filter.environment, filter.clientId);
        };
        /**
         * Support function to help match appMetadata
         * @param environment
         * @param clientId
         */
        CacheManager.prototype.getAppMetadataFilteredByInternal = function (environment, clientId) {
            var _this = this;
            var allCacheKeys = this.getKeys();
            var matchingAppMetadata = {};
            allCacheKeys.forEach(function (cacheKey) {
                // don't parse any non-appMetadata type cache entities
                if (!_this.isAppMetadata(cacheKey)) {
                    return;
                }
                // Attempt retrieval
                var entity = _this.getAppMetadata(cacheKey);
                if (!entity) {
                    return;
                }
                if (!!environment && !_this.matchEnvironment(entity, environment)) {
                    return;
                }
                if (!!clientId && !_this.matchClientId(entity, clientId)) {
                    return;
                }
                matchingAppMetadata[cacheKey] = entity;
            });
            return matchingAppMetadata;
        };
        /**
         * retrieve authorityMetadata that contains a matching alias
         * @param filter
         */
        CacheManager.prototype.getAuthorityMetadataByAlias = function (host) {
            var _this = this;
            var allCacheKeys = this.getAuthorityMetadataKeys();
            var matchedEntity = null;
            allCacheKeys.forEach(function (cacheKey) {
                // don't parse any non-authorityMetadata type cache entities
                if (!_this.isAuthorityMetadata(cacheKey) || cacheKey.indexOf(_this.clientId) === -1) {
                    return;
                }
                // Attempt retrieval
                var entity = _this.getAuthorityMetadata(cacheKey);
                if (!entity) {
                    return;
                }
                if (entity.aliases.indexOf(host) === -1) {
                    return;
                }
                matchedEntity = entity;
            });
            return matchedEntity;
        };
        /**
         * Removes all accounts and related tokens from cache.
         */
        CacheManager.prototype.removeAllAccounts = function () {
            var _this = this;
            var allCacheKeys = this.getKeys();
            allCacheKeys.forEach(function (cacheKey) {
                var entity = _this.getAccount(cacheKey);
                if (!entity) {
                    return;
                }
                _this.removeAccount(cacheKey);
            });
            return true;
        };
        /**
         * returns a boolean if the given account is removed
         * @param account
         */
        CacheManager.prototype.removeAccount = function (accountKey) {
            var account = this.getAccount(accountKey);
            if (!account) {
                throw ClientAuthError.createNoAccountFoundError();
            }
            return (this.removeAccountContext(account) && this.removeItem(accountKey, CacheSchemaType.ACCOUNT));
        };
        /**
         * returns a boolean if the given account is removed
         * @param account
         */
        CacheManager.prototype.removeAccountContext = function (account) {
            var _this = this;
            var allCacheKeys = this.getKeys();
            var accountId = account.generateAccountId();
            allCacheKeys.forEach(function (cacheKey) {
                // don't parse any non-credential type cache entities
                var credType = CredentialEntity.getCredentialType(cacheKey);
                if (credType === Constants.NOT_DEFINED) {
                    return;
                }
                var cacheEntity = _this.getSpecificCredential(cacheKey, credType);
                if (!!cacheEntity && accountId === cacheEntity.generateAccountId()) {
                    _this.removeCredential(cacheEntity);
                }
            });
            return true;
        };
        /**
         * returns a boolean if the given credential is removed
         * @param credential
         */
        CacheManager.prototype.removeCredential = function (credential) {
            var key = credential.generateCredentialKey();
            return this.removeItem(key, CacheSchemaType.CREDENTIAL);
        };
        /**
         * Removes all app metadata objects from cache.
         */
        CacheManager.prototype.removeAppMetadata = function () {
            var _this = this;
            var allCacheKeys = this.getKeys();
            allCacheKeys.forEach(function (cacheKey) {
                if (_this.isAppMetadata(cacheKey)) {
                    _this.removeItem(cacheKey, CacheSchemaType.APP_METADATA);
                }
            });
            return true;
        };
        /**
         * Retrieve the cached credentials into a cacherecord
         * @param account
         * @param clientId
         * @param scopes
         * @param environment
         */
        CacheManager.prototype.readCacheRecord = function (account, clientId, scopes, environment) {
            var cachedAccount = this.readAccountFromCache(account);
            var cachedIdToken = this.readIdTokenFromCache(clientId, account);
            var cachedAccessToken = this.readAccessTokenFromCache(clientId, account, scopes);
            var cachedRefreshToken = this.readRefreshTokenFromCache(clientId, account, false);
            var cachedAppMetadata = this.readAppMetadataFromCache(environment, clientId);
            if (cachedAccount && cachedIdToken) {
                cachedAccount.idTokenClaims = new AuthToken(cachedIdToken.secret, this.cryptoImpl).claims;
            }
            return {
                account: cachedAccount,
                idToken: cachedIdToken,
                accessToken: cachedAccessToken,
                refreshToken: cachedRefreshToken,
                appMetadata: cachedAppMetadata,
            };
        };
        /**
         * Retrieve AccountEntity from cache
         * @param account
         */
        CacheManager.prototype.readAccountFromCache = function (account) {
            var accountKey = AccountEntity.generateAccountCacheKey(account);
            return this.getAccount(accountKey);
        };
        /**
         * Retrieve IdTokenEntity from cache
         * @param clientId
         * @param account
         * @param inputRealm
         */
        CacheManager.prototype.readIdTokenFromCache = function (clientId, account) {
            var idTokenFilter = {
                homeAccountId: account.homeAccountId,
                environment: account.environment,
                credentialType: CredentialType.ID_TOKEN,
                clientId: clientId,
                realm: account.tenantId,
            };
            var credentialCache = this.getCredentialsFilteredBy(idTokenFilter);
            var idTokens = Object.keys(credentialCache.idTokens).map(function (key) { return credentialCache.idTokens[key]; });
            var numIdTokens = idTokens.length;
            if (numIdTokens < 1) {
                return null;
            }
            else if (numIdTokens > 1) {
                throw ClientAuthError.createMultipleMatchingTokensInCacheError();
            }
            return idTokens[0];
        };
        /**
         * Retrieve AccessTokenEntity from cache
         * @param clientId
         * @param account
         * @param scopes
         * @param inputRealm
         */
        CacheManager.prototype.readAccessTokenFromCache = function (clientId, account, scopes) {
            var accessTokenFilter = {
                homeAccountId: account.homeAccountId,
                environment: account.environment,
                credentialType: CredentialType.ACCESS_TOKEN,
                clientId: clientId,
                realm: account.tenantId,
                target: scopes.printScopesLowerCase(),
            };
            var credentialCache = this.getCredentialsFilteredBy(accessTokenFilter);
            var accessTokens = Object.keys(credentialCache.accessTokens).map(function (key) { return credentialCache.accessTokens[key]; });
            var numAccessTokens = accessTokens.length;
            if (numAccessTokens < 1) {
                return null;
            }
            else if (numAccessTokens > 1) {
                throw ClientAuthError.createMultipleMatchingTokensInCacheError();
            }
            return accessTokens[0];
        };
        /**
         * Helper to retrieve the appropriate refresh token from cache
         * @param clientId
         * @param account
         * @param familyRT
         */
        CacheManager.prototype.readRefreshTokenFromCache = function (clientId, account, familyRT) {
            var id = familyRT ? THE_FAMILY_ID : undefined;
            var refreshTokenFilter = {
                homeAccountId: account.homeAccountId,
                environment: account.environment,
                credentialType: CredentialType.REFRESH_TOKEN,
                clientId: clientId,
                familyId: id
            };
            var credentialCache = this.getCredentialsFilteredBy(refreshTokenFilter);
            var refreshTokens = Object.keys(credentialCache.refreshTokens).map(function (key) { return credentialCache.refreshTokens[key]; });
            var numRefreshTokens = refreshTokens.length;
            if (numRefreshTokens < 1) {
                return null;
            }
            // address the else case after remove functions address environment aliases
            return refreshTokens[0];
        };
        /**
         * Retrieve AppMetadataEntity from cache
         */
        CacheManager.prototype.readAppMetadataFromCache = function (environment, clientId) {
            var appMetadataFilter = {
                environment: environment,
                clientId: clientId,
            };
            var appMetadata = this.getAppMetadataFilteredBy(appMetadataFilter);
            var appMetadataEntries = Object.keys(appMetadata).map(function (key) { return appMetadata[key]; });
            var numAppMetadata = appMetadataEntries.length;
            if (numAppMetadata < 1) {
                return null;
            }
            else if (numAppMetadata > 1) {
                throw ClientAuthError.createMultipleMatchingAppMetadataInCacheError();
            }
            return appMetadataEntries[0];
        };
        /**
         * Return the family_id value associated  with FOCI
         * @param environment
         * @param clientId
         */
        CacheManager.prototype.isAppMetadataFOCI = function (environment, clientId) {
            var appMetadata = this.readAppMetadataFromCache(environment, clientId);
            return !!(appMetadata && appMetadata.familyId === THE_FAMILY_ID);
        };
        /**
         * helper to match account ids
         * @param value
         * @param homeAccountId
         */
        CacheManager.prototype.matchHomeAccountId = function (entity, homeAccountId) {
            return !!(entity.homeAccountId && homeAccountId === entity.homeAccountId);
        };
        /**
         * helper to match assertion
         * @param value
         * @param oboAssertion
         */
        CacheManager.prototype.matchOboAssertion = function (entity, oboAssertion) {
            return !!(entity.oboAssertion && oboAssertion === entity.oboAssertion);
        };
        /**
         * helper to match environment
         * @param value
         * @param environment
         */
        CacheManager.prototype.matchEnvironment = function (entity, environment) {
            var cloudMetadata = this.getAuthorityMetadataByAlias(environment);
            if (cloudMetadata && cloudMetadata.aliases.indexOf(entity.environment) > -1) {
                return true;
            }
            return false;
        };
        /**
         * helper to match credential type
         * @param entity
         * @param credentialType
         */
        CacheManager.prototype.matchCredentialType = function (entity, credentialType) {
            return (entity.credentialType && credentialType.toLowerCase() === entity.credentialType.toLowerCase());
        };
        /**
         * helper to match client ids
         * @param entity
         * @param clientId
         */
        CacheManager.prototype.matchClientId = function (entity, clientId) {
            return !!(entity.clientId && clientId === entity.clientId);
        };
        /**
         * helper to match family ids
         * @param entity
         * @param familyId
         */
        CacheManager.prototype.matchFamilyId = function (entity, familyId) {
            return !!(entity.familyId && familyId === entity.familyId);
        };
        /**
         * helper to match realm
         * @param entity
         * @param realm
         */
        CacheManager.prototype.matchRealm = function (entity, realm) {
            return !!(entity.realm && realm === entity.realm);
        };
        /**
         * Returns true if the target scopes are a subset of the current entity's scopes, false otherwise.
         * @param entity
         * @param target
         */
        CacheManager.prototype.matchTarget = function (entity, target) {
            if (entity.credentialType !== CredentialType.ACCESS_TOKEN || !entity.target) {
                return false;
            }
            var entityScopeSet = ScopeSet.fromString(entity.target);
            var requestTargetScopeSet = ScopeSet.fromString(target);
            if (!requestTargetScopeSet.containsOnlyOIDCScopes()) {
                requestTargetScopeSet.removeOIDCScopes(); // ignore OIDC scopes
            }
            else {
                requestTargetScopeSet.removeScope(Constants.OFFLINE_ACCESS_SCOPE);
            }
            return entityScopeSet.containsScopeSet(requestTargetScopeSet);
        };
        /**
         * returns if a given cache entity is of the type appmetadata
         * @param key
         */
        CacheManager.prototype.isAppMetadata = function (key) {
            return key.indexOf(APP_METADATA) !== -1;
        };
        /**
         * returns if a given cache entity is of the type authoritymetadata
         * @param key
         */
        CacheManager.prototype.isAuthorityMetadata = function (key) {
            return key.indexOf(AUTHORITY_METADATA_CONSTANTS.CACHE_KEY) !== -1;
        };
        /**
         * returns cache key used for cloud instance metadata
         */
        CacheManager.prototype.generateAuthorityMetadataCacheKey = function (authority) {
            return AUTHORITY_METADATA_CONSTANTS.CACHE_KEY + "-" + this.clientId + "-" + authority;
        };
        /**
         * Returns the specific credential (IdToken/AccessToken/RefreshToken) from the cache
         * @param key
         * @param credType
         */
        CacheManager.prototype.getSpecificCredential = function (key, credType) {
            switch (credType) {
                case CredentialType.ID_TOKEN: {
                    return this.getIdTokenCredential(key);
                }
                case CredentialType.ACCESS_TOKEN: {
                    return this.getAccessTokenCredential(key);
                }
                case CredentialType.REFRESH_TOKEN: {
                    return this.getRefreshTokenCredential(key);
                }
                default:
                    return null;
            }
        };
        /**
         * Helper to convert serialized data to object
         * @param obj
         * @param json
         */
        CacheManager.toObject = function (obj, json) {
            for (var propertyName in json) {
                obj[propertyName] = json[propertyName];
            }
            return obj;
        };
        return CacheManager;
    }());
    var DefaultStorageClass = /** @class */ (function (_super) {
        __extends$1(DefaultStorageClass, _super);
        function DefaultStorageClass() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DefaultStorageClass.prototype.setAccount = function () {
            var notImplErr = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getAccount = function () {
            var notImplErr = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.setIdTokenCredential = function () {
            var notImplErr = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getIdTokenCredential = function () {
            var notImplErr = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.setAccessTokenCredential = function () {
            var notImplErr = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getAccessTokenCredential = function () {
            var notImplErr = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.setRefreshTokenCredential = function () {
            var notImplErr = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getRefreshTokenCredential = function () {
            var notImplErr = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.setAppMetadata = function () {
            var notImplErr = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getAppMetadata = function () {
            var notImplErr = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.setServerTelemetry = function () {
            var notImplErr = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getServerTelemetry = function () {
            var notImplErr = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.setAuthorityMetadata = function () {
            var notImplErr = "Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getAuthorityMetadata = function () {
            var notImplErr = "Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getAuthorityMetadataKeys = function () {
            var notImplErr = "Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.setThrottlingCache = function () {
            var notImplErr = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getThrottlingCache = function () {
            var notImplErr = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.removeItem = function () {
            var notImplErr = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.containsKey = function () {
            var notImplErr = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getKeys = function () {
            var notImplErr = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.clear = function () {
            var notImplErr = "Storage interface - clear() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        return DefaultStorageClass;
    }(CacheManager));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    // Token renewal offset default in seconds
    var DEFAULT_TOKEN_RENEWAL_OFFSET_SEC = 300;
    var DEFAULT_SYSTEM_OPTIONS = {
        tokenRenewalOffsetSeconds: DEFAULT_TOKEN_RENEWAL_OFFSET_SEC
    };
    var DEFAULT_LOGGER_IMPLEMENTATION = {
        loggerCallback: function () {
            // allow users to not set loggerCallback
        },
        piiLoggingEnabled: false,
        logLevel: exports.LogLevel.Info
    };
    var DEFAULT_NETWORK_IMPLEMENTATION = {
        sendGetRequestAsync: function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var notImplErr;
                return __generator$1(this, function (_a) {
                    notImplErr = "Network interface - sendGetRequestAsync() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        },
        sendPostRequestAsync: function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var notImplErr;
                return __generator$1(this, function (_a) {
                    notImplErr = "Network interface - sendPostRequestAsync() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        }
    };
    var DEFAULT_LIBRARY_INFO = {
        sku: Constants.SKU,
        version: version,
        cpu: "",
        os: ""
    };
    var DEFAULT_CLIENT_CREDENTIALS = {
        clientSecret: "",
        clientAssertion: undefined
    };
    /**
     * Function that sets the default options when not explicitly configured from app developer
     *
     * @param Configuration
     *
     * @returns Configuration
     */
    function buildClientConfiguration(_a) {
        var userAuthOptions = _a.authOptions, userSystemOptions = _a.systemOptions, userLoggerOption = _a.loggerOptions, storageImplementation = _a.storageInterface, networkImplementation = _a.networkInterface, cryptoImplementation = _a.cryptoInterface, clientCredentials = _a.clientCredentials, libraryInfo = _a.libraryInfo, serverTelemetryManager = _a.serverTelemetryManager, persistencePlugin = _a.persistencePlugin, serializableCache = _a.serializableCache;
        return {
            authOptions: buildAuthOptions(userAuthOptions),
            systemOptions: __assign$1(__assign$1({}, DEFAULT_SYSTEM_OPTIONS), userSystemOptions),
            loggerOptions: __assign$1(__assign$1({}, DEFAULT_LOGGER_IMPLEMENTATION), userLoggerOption),
            storageInterface: storageImplementation || new DefaultStorageClass(userAuthOptions.clientId, DEFAULT_CRYPTO_IMPLEMENTATION),
            networkInterface: networkImplementation || DEFAULT_NETWORK_IMPLEMENTATION,
            cryptoInterface: cryptoImplementation || DEFAULT_CRYPTO_IMPLEMENTATION,
            clientCredentials: clientCredentials || DEFAULT_CLIENT_CREDENTIALS,
            libraryInfo: __assign$1(__assign$1({}, DEFAULT_LIBRARY_INFO), libraryInfo),
            serverTelemetryManager: serverTelemetryManager || null,
            persistencePlugin: persistencePlugin || null,
            serializableCache: serializableCache || null
        };
    }
    /**
     * Construct authoptions from the client and platform passed values
     * @param authOptions
     */
    function buildAuthOptions(authOptions) {
        return __assign$1({ clientCapabilities: [] }, authOptions);
    }

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Error thrown when there is an error with the server code, for example, unavailability.
     */
    var ServerError = /** @class */ (function (_super) {
        __extends$1(ServerError, _super);
        function ServerError(errorCode, errorMessage, subError) {
            var _this = _super.call(this, errorCode, errorMessage, subError) || this;
            _this.name = "ServerError";
            Object.setPrototypeOf(_this, ServerError.prototype);
            return _this;
        }
        return ServerError;
    }(AuthError));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var ThrottlingUtils = /** @class */ (function () {
        function ThrottlingUtils() {
        }
        /**
         * Prepares a RequestThumbprint to be stored as a key.
         * @param thumbprint
         */
        ThrottlingUtils.generateThrottlingStorageKey = function (thumbprint) {
            return ThrottlingConstants.THROTTLING_PREFIX + "." + JSON.stringify(thumbprint);
        };
        /**
         * Performs necessary throttling checks before a network request.
         * @param cacheManager
         * @param thumbprint
         */
        ThrottlingUtils.preProcess = function (cacheManager, thumbprint) {
            var _a;
            var key = ThrottlingUtils.generateThrottlingStorageKey(thumbprint);
            var value = cacheManager.getThrottlingCache(key);
            if (value) {
                if (value.throttleTime < Date.now()) {
                    cacheManager.removeItem(key, CacheSchemaType.THROTTLING);
                    return;
                }
                throw new ServerError(((_a = value.errorCodes) === null || _a === void 0 ? void 0 : _a.join(" ")) || Constants.EMPTY_STRING, value.errorMessage, value.subError);
            }
        };
        /**
         * Performs necessary throttling checks after a network request.
         * @param cacheManager
         * @param thumbprint
         * @param response
         */
        ThrottlingUtils.postProcess = function (cacheManager, thumbprint, response) {
            if (ThrottlingUtils.checkResponseStatus(response) || ThrottlingUtils.checkResponseForRetryAfter(response)) {
                var thumbprintValue = {
                    throttleTime: ThrottlingUtils.calculateThrottleTime(parseInt(response.headers[HeaderNames.RETRY_AFTER])),
                    error: response.body.error,
                    errorCodes: response.body.error_codes,
                    errorMessage: response.body.error_description,
                    subError: response.body.suberror
                };
                cacheManager.setThrottlingCache(ThrottlingUtils.generateThrottlingStorageKey(thumbprint), thumbprintValue);
            }
        };
        /**
         * Checks a NetworkResponse object's status codes against 429 or 5xx
         * @param response
         */
        ThrottlingUtils.checkResponseStatus = function (response) {
            return response.status === 429 || response.status >= 500 && response.status < 600;
        };
        /**
         * Checks a NetworkResponse object's RetryAfter header
         * @param response
         */
        ThrottlingUtils.checkResponseForRetryAfter = function (response) {
            if (response.headers) {
                return response.headers.hasOwnProperty(HeaderNames.RETRY_AFTER) && (response.status < 200 || response.status >= 300);
            }
            return false;
        };
        /**
         * Calculates the Unix-time value for a throttle to expire given throttleTime in seconds.
         * @param throttleTime
         */
        ThrottlingUtils.calculateThrottleTime = function (throttleTime) {
            if (throttleTime <= 0) {
                throttleTime = 0;
            }
            var currentSeconds = Date.now() / 1000;
            return Math.floor(Math.min(currentSeconds + (throttleTime || ThrottlingConstants.DEFAULT_THROTTLE_TIME_SECONDS), currentSeconds + ThrottlingConstants.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1000);
        };
        ThrottlingUtils.removeThrottle = function (cacheManager, clientId, authority, scopes, homeAccountIdentifier) {
            var thumbprint = {
                clientId: clientId,
                authority: authority,
                scopes: scopes,
                homeAccountIdentifier: homeAccountIdentifier
            };
            var key = this.generateThrottlingStorageKey(thumbprint);
            return cacheManager.removeItem(key, CacheSchemaType.THROTTLING);
        };
        return ThrottlingUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var NetworkManager = /** @class */ (function () {
        function NetworkManager(networkClient, cacheManager) {
            this.networkClient = networkClient;
            this.cacheManager = cacheManager;
        }
        /**
         * Wraps sendPostRequestAsync with necessary preflight and postflight logic
         * @param thumbprint
         * @param tokenEndpoint
         * @param options
         */
        NetworkManager.prototype.sendPostRequest = function (thumbprint, tokenEndpoint, options) {
            return __awaiter$1(this, void 0, void 0, function () {
                var response;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ThrottlingUtils.preProcess(this.cacheManager, thumbprint);
                            return [4 /*yield*/, this.networkClient.sendPostRequestAsync(tokenEndpoint, options)];
                        case 1:
                            response = _a.sent();
                            ThrottlingUtils.postProcess(this.cacheManager, thumbprint, response);
                            // Placeholder for Telemetry hook
                            return [2 /*return*/, response];
                    }
                });
            });
        };
        return NetworkManager;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Base application class which will construct requests to send to and handle responses from the Microsoft STS using the authorization code flow.
     */
    var BaseClient = /** @class */ (function () {
        function BaseClient(configuration) {
            // Set the configuration
            this.config = buildClientConfiguration(configuration);
            // Initialize the logger
            this.logger = new Logger(this.config.loggerOptions, name, version);
            // Initialize crypto
            this.cryptoUtils = this.config.cryptoInterface;
            // Initialize storage interface
            this.cacheManager = this.config.storageInterface;
            // Set the network interface
            this.networkClient = this.config.networkInterface;
            // Set the NetworkManager
            this.networkManager = new NetworkManager(this.networkClient, this.cacheManager);
            // Set TelemetryManager
            this.serverTelemetryManager = this.config.serverTelemetryManager;
            // set Authority
            this.authority = this.config.authOptions.authority;
        }
        /**
         * Creates default headers for requests to token endpoint
         */
        BaseClient.prototype.createDefaultTokenRequestHeaders = function () {
            var headers = this.createDefaultLibraryHeaders();
            headers[HeaderNames.CONTENT_TYPE] = Constants.URL_FORM_CONTENT_TYPE;
            headers[HeaderNames.X_MS_LIB_CAPABILITY] = HeaderNames.X_MS_LIB_CAPABILITY_VALUE;
            if (this.serverTelemetryManager) {
                headers[HeaderNames.X_CLIENT_CURR_TELEM] = this.serverTelemetryManager.generateCurrentRequestHeaderValue();
                headers[HeaderNames.X_CLIENT_LAST_TELEM] = this.serverTelemetryManager.generateLastRequestHeaderValue();
            }
            return headers;
        };
        /**
         * addLibraryData
         */
        BaseClient.prototype.createDefaultLibraryHeaders = function () {
            var headers = {};
            // client info headers
            headers[AADServerParamKeys.X_CLIENT_SKU] = this.config.libraryInfo.sku;
            headers[AADServerParamKeys.X_CLIENT_VER] = this.config.libraryInfo.version;
            headers[AADServerParamKeys.X_CLIENT_OS] = this.config.libraryInfo.os;
            headers[AADServerParamKeys.X_CLIENT_CPU] = this.config.libraryInfo.cpu;
            return headers;
        };
        /**
         * Http post to token endpoint
         * @param tokenEndpoint
         * @param queryString
         * @param headers
         * @param thumbprint
         */
        BaseClient.prototype.executePostToTokenEndpoint = function (tokenEndpoint, queryString, headers, thumbprint) {
            return __awaiter$1(this, void 0, void 0, function () {
                var response;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.networkManager.sendPostRequest(thumbprint, tokenEndpoint, { body: queryString, headers: headers })];
                        case 1:
                            response = _a.sent();
                            if (this.config.serverTelemetryManager && response.status < 500 && response.status !== 429) {
                                // Telemetry data successfully logged by server, clear Telemetry cache
                                this.config.serverTelemetryManager.clearTelemetryCache();
                            }
                            return [2 /*return*/, response];
                    }
                });
            });
        };
        /**
         * Updates the authority object of the client. Endpoint discovery must be completed.
         * @param updatedAuthority
         */
        BaseClient.prototype.updateAuthority = function (updatedAuthority) {
            if (!updatedAuthority.discoveryComplete()) {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
            }
            this.authority = updatedAuthority;
        };
        return BaseClient;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Validates server consumable params from the "request" objects
     */
    var RequestValidator = /** @class */ (function () {
        function RequestValidator() {
        }
        /**
         * Utility to check if the `redirectUri` in the request is a non-null value
         * @param redirectUri
         */
        RequestValidator.validateRedirectUri = function (redirectUri) {
            if (StringUtils.isEmpty(redirectUri)) {
                throw ClientConfigurationError.createRedirectUriEmptyError();
            }
        };
        /**
         * Utility to validate prompt sent by the user in the request
         * @param prompt
         */
        RequestValidator.validatePrompt = function (prompt) {
            if ([
                PromptValue.LOGIN,
                PromptValue.SELECT_ACCOUNT,
                PromptValue.CONSENT,
                PromptValue.NONE
            ].indexOf(prompt) < 0) {
                throw ClientConfigurationError.createInvalidPromptError(prompt);
            }
        };
        RequestValidator.validateClaims = function (claims) {
            try {
                JSON.parse(claims);
            }
            catch (e) {
                throw ClientConfigurationError.createInvalidClaimsRequestError();
            }
        };
        /**
         * Utility to validate code_challenge and code_challenge_method
         * @param codeChallenge
         * @param codeChallengeMethod
         */
        RequestValidator.validateCodeChallengeParams = function (codeChallenge, codeChallengeMethod) {
            if (StringUtils.isEmpty(codeChallenge) || StringUtils.isEmpty(codeChallengeMethod)) {
                throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
            }
            else {
                this.validateCodeChallengeMethod(codeChallengeMethod);
            }
        };
        /**
         * Utility to validate code_challenge_method
         * @param codeChallengeMethod
         */
        RequestValidator.validateCodeChallengeMethod = function (codeChallengeMethod) {
            if ([
                CodeChallengeMethodValues.PLAIN,
                CodeChallengeMethodValues.S256
            ].indexOf(codeChallengeMethod) < 0) {
                throw ClientConfigurationError.createInvalidCodeChallengeMethodError();
            }
        };
        /**
         * Removes unnecessary or duplicate query parameters from extraQueryParameters
         * @param request
         */
        RequestValidator.sanitizeEQParams = function (eQParams, queryParams) {
            if (!eQParams) {
                return {};
            }
            // Remove any query parameters already included in SSO params
            queryParams.forEach(function (value, key) {
                if (eQParams[key]) {
                    delete eQParams[key];
                }
            });
            return eQParams;
        };
        return RequestValidator;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var RequestParameterBuilder = /** @class */ (function () {
        function RequestParameterBuilder() {
            this.parameters = new Map();
        }
        /**
         * add response_type = code
         */
        RequestParameterBuilder.prototype.addResponseTypeCode = function () {
            this.parameters.set(AADServerParamKeys.RESPONSE_TYPE, encodeURIComponent(Constants.CODE_RESPONSE_TYPE));
        };
        /**
         * add response_mode. defaults to query.
         * @param responseMode
         */
        RequestParameterBuilder.prototype.addResponseMode = function (responseMode) {
            this.parameters.set(AADServerParamKeys.RESPONSE_MODE, encodeURIComponent((responseMode) ? responseMode : ResponseMode.QUERY));
        };
        /**
         * add scopes. set addOidcScopes to false to prevent default scopes in non-user scenarios
         * @param scopeSet
         * @param addOidcScopes
         */
        RequestParameterBuilder.prototype.addScopes = function (scopes, addOidcScopes) {
            if (addOidcScopes === void 0) { addOidcScopes = true; }
            var requestScopes = addOidcScopes ? __spreadArrays(scopes || [], OIDC_DEFAULT_SCOPES) : scopes || [];
            var scopeSet = new ScopeSet(requestScopes);
            this.parameters.set(AADServerParamKeys.SCOPE, encodeURIComponent(scopeSet.printScopes()));
        };
        /**
         * add clientId
         * @param clientId
         */
        RequestParameterBuilder.prototype.addClientId = function (clientId) {
            this.parameters.set(AADServerParamKeys.CLIENT_ID, encodeURIComponent(clientId));
        };
        /**
         * add redirect_uri
         * @param redirectUri
         */
        RequestParameterBuilder.prototype.addRedirectUri = function (redirectUri) {
            RequestValidator.validateRedirectUri(redirectUri);
            this.parameters.set(AADServerParamKeys.REDIRECT_URI, encodeURIComponent(redirectUri));
        };
        /**
         * add post logout redirectUri
         * @param redirectUri
         */
        RequestParameterBuilder.prototype.addPostLogoutRedirectUri = function (redirectUri) {
            RequestValidator.validateRedirectUri(redirectUri);
            this.parameters.set(AADServerParamKeys.POST_LOGOUT_URI, encodeURIComponent(redirectUri));
        };
        /**
         * add id_token_hint to logout request
         * @param idTokenHint
         */
        RequestParameterBuilder.prototype.addIdTokenHint = function (idTokenHint) {
            this.parameters.set(AADServerParamKeys.ID_TOKEN_HINT, encodeURIComponent(idTokenHint));
        };
        /**
         * add domain_hint
         * @param domainHint
         */
        RequestParameterBuilder.prototype.addDomainHint = function (domainHint) {
            this.parameters.set(SSOTypes.DOMAIN_HINT, encodeURIComponent(domainHint));
        };
        /**
         * add login_hint
         * @param loginHint
         */
        RequestParameterBuilder.prototype.addLoginHint = function (loginHint) {
            this.parameters.set(SSOTypes.LOGIN_HINT, encodeURIComponent(loginHint));
        };
        /**
         * add sid
         * @param sid
         */
        RequestParameterBuilder.prototype.addSid = function (sid) {
            this.parameters.set(SSOTypes.SID, encodeURIComponent(sid));
        };
        /**
         * add claims
         * @param claims
         */
        RequestParameterBuilder.prototype.addClaims = function (claims, clientCapabilities) {
            var mergedClaims = this.addClientCapabilitiesToClaims(claims, clientCapabilities);
            RequestValidator.validateClaims(mergedClaims);
            this.parameters.set(AADServerParamKeys.CLAIMS, encodeURIComponent(mergedClaims));
        };
        /**
         * add correlationId
         * @param correlationId
         */
        RequestParameterBuilder.prototype.addCorrelationId = function (correlationId) {
            this.parameters.set(AADServerParamKeys.CLIENT_REQUEST_ID, encodeURIComponent(correlationId));
        };
        /**
         * add library info query params
         * @param libraryInfo
         */
        RequestParameterBuilder.prototype.addLibraryInfo = function (libraryInfo) {
            // Telemetry Info
            this.parameters.set(AADServerParamKeys.X_CLIENT_SKU, libraryInfo.sku);
            this.parameters.set(AADServerParamKeys.X_CLIENT_VER, libraryInfo.version);
            this.parameters.set(AADServerParamKeys.X_CLIENT_OS, libraryInfo.os);
            this.parameters.set(AADServerParamKeys.X_CLIENT_CPU, libraryInfo.cpu);
        };
        /**
         * add prompt
         * @param prompt
         */
        RequestParameterBuilder.prototype.addPrompt = function (prompt) {
            RequestValidator.validatePrompt(prompt);
            this.parameters.set("" + AADServerParamKeys.PROMPT, encodeURIComponent(prompt));
        };
        /**
         * add state
         * @param state
         */
        RequestParameterBuilder.prototype.addState = function (state) {
            if (!StringUtils.isEmpty(state)) {
                this.parameters.set(AADServerParamKeys.STATE, encodeURIComponent(state));
            }
        };
        /**
         * add nonce
         * @param nonce
         */
        RequestParameterBuilder.prototype.addNonce = function (nonce) {
            this.parameters.set(AADServerParamKeys.NONCE, encodeURIComponent(nonce));
        };
        /**
         * add code_challenge and code_challenge_method
         * - throw if either of them are not passed
         * @param codeChallenge
         * @param codeChallengeMethod
         */
        RequestParameterBuilder.prototype.addCodeChallengeParams = function (codeChallenge, codeChallengeMethod) {
            RequestValidator.validateCodeChallengeParams(codeChallenge, codeChallengeMethod);
            if (codeChallenge && codeChallengeMethod) {
                this.parameters.set(AADServerParamKeys.CODE_CHALLENGE, encodeURIComponent(codeChallenge));
                this.parameters.set(AADServerParamKeys.CODE_CHALLENGE_METHOD, encodeURIComponent(codeChallengeMethod));
            }
            else {
                throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
            }
        };
        /**
         * add the `authorization_code` passed by the user to exchange for a token
         * @param code
         */
        RequestParameterBuilder.prototype.addAuthorizationCode = function (code) {
            this.parameters.set(AADServerParamKeys.CODE, encodeURIComponent(code));
        };
        /**
         * add the `authorization_code` passed by the user to exchange for a token
         * @param code
         */
        RequestParameterBuilder.prototype.addDeviceCode = function (code) {
            this.parameters.set(AADServerParamKeys.DEVICE_CODE, encodeURIComponent(code));
        };
        /**
         * add the `refreshToken` passed by the user
         * @param refreshToken
         */
        RequestParameterBuilder.prototype.addRefreshToken = function (refreshToken) {
            this.parameters.set(AADServerParamKeys.REFRESH_TOKEN, encodeURIComponent(refreshToken));
        };
        /**
         * add the `code_verifier` passed by the user to exchange for a token
         * @param codeVerifier
         */
        RequestParameterBuilder.prototype.addCodeVerifier = function (codeVerifier) {
            this.parameters.set(AADServerParamKeys.CODE_VERIFIER, encodeURIComponent(codeVerifier));
        };
        /**
         * add client_secret
         * @param clientSecret
         */
        RequestParameterBuilder.prototype.addClientSecret = function (clientSecret) {
            this.parameters.set(AADServerParamKeys.CLIENT_SECRET, encodeURIComponent(clientSecret));
        };
        /**
         * add clientAssertion for confidential client flows
         * @param clientAssertion
         */
        RequestParameterBuilder.prototype.addClientAssertion = function (clientAssertion) {
            this.parameters.set(AADServerParamKeys.CLIENT_ASSERTION, encodeURIComponent(clientAssertion));
        };
        /**
         * add clientAssertionType for confidential client flows
         * @param clientAssertionType
         */
        RequestParameterBuilder.prototype.addClientAssertionType = function (clientAssertionType) {
            this.parameters.set(AADServerParamKeys.CLIENT_ASSERTION_TYPE, encodeURIComponent(clientAssertionType));
        };
        /**
         * add OBO assertion for confidential client flows
         * @param clientAssertion
         */
        RequestParameterBuilder.prototype.addOboAssertion = function (oboAssertion) {
            this.parameters.set(AADServerParamKeys.OBO_ASSERTION, encodeURIComponent(oboAssertion));
        };
        /**
         * add grant type
         * @param grantType
         */
        RequestParameterBuilder.prototype.addRequestTokenUse = function (tokenUse) {
            this.parameters.set(AADServerParamKeys.REQUESTED_TOKEN_USE, encodeURIComponent(tokenUse));
        };
        /**
         * add grant type
         * @param grantType
         */
        RequestParameterBuilder.prototype.addGrantType = function (grantType) {
            this.parameters.set(AADServerParamKeys.GRANT_TYPE, encodeURIComponent(grantType));
        };
        /**
         * add client info
         *
         */
        RequestParameterBuilder.prototype.addClientInfo = function () {
            this.parameters.set(ClientInfo, "1");
        };
        /**
         * add extraQueryParams
         * @param eQparams
         */
        RequestParameterBuilder.prototype.addExtraQueryParameters = function (eQparams) {
            var _this = this;
            RequestValidator.sanitizeEQParams(eQparams, this.parameters);
            Object.keys(eQparams).forEach(function (key) {
                _this.parameters.set(key, eQparams[key]);
            });
        };
        RequestParameterBuilder.prototype.addClientCapabilitiesToClaims = function (claims, clientCapabilities) {
            var mergedClaims;
            // Parse provided claims into JSON object or initialize empty object
            if (!claims) {
                mergedClaims = {};
            }
            else {
                try {
                    mergedClaims = JSON.parse(claims);
                }
                catch (e) {
                    throw ClientConfigurationError.createInvalidClaimsRequestError();
                }
            }
            if (clientCapabilities && clientCapabilities.length > 0) {
                if (!mergedClaims.hasOwnProperty(ClaimsRequestKeys.ACCESS_TOKEN)) {
                    // Add access_token key to claims object
                    mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN] = {};
                }
                // Add xms_cc claim with provided clientCapabilities to access_token key
                mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN][ClaimsRequestKeys.XMS_CC] = {
                    values: clientCapabilities
                };
            }
            return JSON.stringify(mergedClaims);
        };
        /**
         * adds `username` for Password Grant flow
         * @param username
         */
        RequestParameterBuilder.prototype.addUsername = function (username) {
            this.parameters.set(PasswordGrantConstants.username, username);
        };
        /**
         * adds `password` for Password Grant flow
         * @param password
         */
        RequestParameterBuilder.prototype.addPassword = function (password) {
            this.parameters.set(PasswordGrantConstants.password, password);
        };
        /**
         * add pop_jwk to query params
         * @param cnfString
         */
        RequestParameterBuilder.prototype.addPopToken = function (cnfString) {
            if (!StringUtils.isEmpty(cnfString)) {
                this.parameters.set(AADServerParamKeys.TOKEN_TYPE, exports.AuthenticationScheme.POP);
                this.parameters.set(AADServerParamKeys.REQ_CNF, encodeURIComponent(cnfString));
            }
        };
        /**
         * Utility to create a URL from the params map
         */
        RequestParameterBuilder.prototype.createQueryString = function () {
            var queryParameterArray = new Array();
            this.parameters.forEach(function (value, key) {
                queryParameterArray.push(key + "=" + value);
            });
            return queryParameterArray.join("&");
        };
        return RequestParameterBuilder;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * ID_TOKEN Cache
     *
     * Key:Value Schema:
     *
     * Key Example: uid.utid-login.microsoftonline.com-idtoken-clientId-contoso.com-
     *
     * Value Schema:
     * {
     *      homeAccountId: home account identifier for the auth scheme,
     *      environment: entity that issued the token, represented as a full host
     *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
     *      clientId: client ID of the application
     *      secret: Actual credential as a string
     *      realm: Full tenant or organizational identifier that the account belongs to
     * }
     */
    var IdTokenEntity = /** @class */ (function (_super) {
        __extends$1(IdTokenEntity, _super);
        function IdTokenEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Create IdTokenEntity
         * @param homeAccountId
         * @param authenticationResult
         * @param clientId
         * @param authority
         */
        IdTokenEntity.createIdTokenEntity = function (homeAccountId, environment, idToken, clientId, tenantId, oboAssertion) {
            var idTokenEntity = new IdTokenEntity();
            idTokenEntity.credentialType = CredentialType.ID_TOKEN;
            idTokenEntity.homeAccountId = homeAccountId;
            idTokenEntity.environment = environment;
            idTokenEntity.clientId = clientId;
            idTokenEntity.secret = idToken;
            idTokenEntity.realm = tenantId;
            idTokenEntity.oboAssertion = oboAssertion;
            return idTokenEntity;
        };
        /**
         * Validates an entity: checks for all expected params
         * @param entity
         */
        IdTokenEntity.isIdTokenEntity = function (entity) {
            if (!entity) {
                return false;
            }
            return (entity.hasOwnProperty("homeAccountId") &&
                entity.hasOwnProperty("environment") &&
                entity.hasOwnProperty("credentialType") &&
                entity.hasOwnProperty("realm") &&
                entity.hasOwnProperty("clientId") &&
                entity.hasOwnProperty("secret") &&
                entity["credentialType"] === CredentialType.ID_TOKEN);
        };
        return IdTokenEntity;
    }(CredentialEntity));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Utility class which exposes functions for managing date and time operations.
     */
    var TimeUtils = /** @class */ (function () {
        function TimeUtils() {
        }
        /**
         * return the current time in Unix time (seconds).
         */
        TimeUtils.nowSeconds = function () {
            // Date.getTime() returns in milliseconds.
            return Math.round(new Date().getTime() / 1000.0);
        };
        /**
         * check if a token is expired based on given UTC time in seconds.
         * @param expiresOn
         */
        TimeUtils.isTokenExpired = function (expiresOn, offset) {
            // check for access token expiry
            var expirationSec = Number(expiresOn) || 0;
            var offsetCurrentTimeSec = TimeUtils.nowSeconds() + offset;
            // If current time + offset is greater than token expiration time, then token is expired.
            return (offsetCurrentTimeSec > expirationSec);
        };
        return TimeUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * ACCESS_TOKEN Credential Type
     *
     * Key:Value Schema:
     *
     * Key Example: uid.utid-login.microsoftonline.com-accesstoken-clientId-contoso.com-user.read
     *
     * Value Schema:
     * {
     *      homeAccountId: home account identifier for the auth scheme,
     *      environment: entity that issued the token, represented as a full host
     *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
     *      clientId: client ID of the application
     *      secret: Actual credential as a string
     *      familyId: Family ID identifier, usually only used for refresh tokens
     *      realm: Full tenant or organizational identifier that the account belongs to
     *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
     *      cachedAt: Absolute device time when entry was created in the cache.
     *      expiresOn: Token expiry time, calculated based on current UTC time in seconds. Represented as a string.
     *      extendedExpiresOn: Additional extended expiry time until when token is valid in case of server-side outage. Represented as string in UTC seconds.
     *      keyId: used for POP and SSH tokenTypes
     *      tokenType: Type of the token issued. Usually "Bearer"
     * }
     */
    var AccessTokenEntity = /** @class */ (function (_super) {
        __extends$1(AccessTokenEntity, _super);
        function AccessTokenEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Create AccessTokenEntity
         * @param homeAccountId
         * @param environment
         * @param accessToken
         * @param clientId
         * @param tenantId
         * @param scopes
         * @param expiresOn
         * @param extExpiresOn
         */
        AccessTokenEntity.createAccessTokenEntity = function (homeAccountId, environment, accessToken, clientId, tenantId, scopes, expiresOn, extExpiresOn, tokenType, oboAssertion) {
            var atEntity = new AccessTokenEntity();
            atEntity.homeAccountId = homeAccountId;
            atEntity.credentialType = CredentialType.ACCESS_TOKEN;
            atEntity.secret = accessToken;
            var currentTime = TimeUtils.nowSeconds();
            atEntity.cachedAt = currentTime.toString();
            /*
             * Token expiry time.
             * This value should be â€¯calculated based on the current UTC time measured locally and the value â€¯expires_in Represented as a string in JSON.
             */
            atEntity.expiresOn = expiresOn.toString();
            atEntity.extendedExpiresOn = extExpiresOn.toString();
            atEntity.environment = environment;
            atEntity.clientId = clientId;
            atEntity.realm = tenantId;
            atEntity.target = scopes;
            atEntity.oboAssertion = oboAssertion;
            atEntity.tokenType = StringUtils.isEmpty(tokenType) ? exports.AuthenticationScheme.BEARER : tokenType;
            return atEntity;
        };
        /**
         * Validates an entity: checks for all expected params
         * @param entity
         */
        AccessTokenEntity.isAccessTokenEntity = function (entity) {
            if (!entity) {
                return false;
            }
            return (entity.hasOwnProperty("homeAccountId") &&
                entity.hasOwnProperty("environment") &&
                entity.hasOwnProperty("credentialType") &&
                entity.hasOwnProperty("realm") &&
                entity.hasOwnProperty("clientId") &&
                entity.hasOwnProperty("secret") &&
                entity.hasOwnProperty("target") &&
                entity["credentialType"] === CredentialType.ACCESS_TOKEN);
        };
        return AccessTokenEntity;
    }(CredentialEntity));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * REFRESH_TOKEN Cache
     *
     * Key:Value Schema:
     *
     * Key Example: uid.utid-login.microsoftonline.com-refreshtoken-clientId--
     *
     * Value:
     * {
     *      homeAccountId: home account identifier for the auth scheme,
     *      environment: entity that issued the token, represented as a full host
     *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
     *      clientId: client ID of the application
     *      secret: Actual credential as a string
     *      familyId: Family ID identifier, '1' represents Microsoft Family
     *      realm: Full tenant or organizational identifier that the account belongs to
     *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
     * }
     */
    var RefreshTokenEntity = /** @class */ (function (_super) {
        __extends$1(RefreshTokenEntity, _super);
        function RefreshTokenEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Create RefreshTokenEntity
         * @param homeAccountId
         * @param authenticationResult
         * @param clientId
         * @param authority
         */
        RefreshTokenEntity.createRefreshTokenEntity = function (homeAccountId, environment, refreshToken, clientId, familyId, oboAssertion) {
            var rtEntity = new RefreshTokenEntity();
            rtEntity.clientId = clientId;
            rtEntity.credentialType = CredentialType.REFRESH_TOKEN;
            rtEntity.environment = environment;
            rtEntity.homeAccountId = homeAccountId;
            rtEntity.secret = refreshToken;
            rtEntity.oboAssertion = oboAssertion;
            if (familyId)
                rtEntity.familyId = familyId;
            return rtEntity;
        };
        /**
         * Validates an entity: checks for all expected params
         * @param entity
         */
        RefreshTokenEntity.isRefreshTokenEntity = function (entity) {
            if (!entity) {
                return false;
            }
            return (entity.hasOwnProperty("homeAccountId") &&
                entity.hasOwnProperty("environment") &&
                entity.hasOwnProperty("credentialType") &&
                entity.hasOwnProperty("clientId") &&
                entity.hasOwnProperty("secret") &&
                entity["credentialType"] === CredentialType.REFRESH_TOKEN);
        };
        return RefreshTokenEntity;
    }(CredentialEntity));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * InteractionRequiredAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var InteractionRequiredAuthErrorMessage = [
        "interaction_required",
        "consent_required",
        "login_required"
    ];
    var InteractionRequiredAuthSubErrorMessage = [
        "message_only",
        "additional_action",
        "basic_action",
        "user_password_expired",
        "consent_required"
    ];
    /**
     * Error thrown when user interaction is required at the auth server.
     */
    var InteractionRequiredAuthError = /** @class */ (function (_super) {
        __extends$1(InteractionRequiredAuthError, _super);
        function InteractionRequiredAuthError(errorCode, errorMessage, subError) {
            var _this = _super.call(this, errorCode, errorMessage, subError) || this;
            _this.name = "InteractionRequiredAuthError";
            Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
            return _this;
        }
        InteractionRequiredAuthError.isInteractionRequiredError = function (errorCode, errorString, subError) {
            var isInteractionRequiredErrorCode = !!errorCode && InteractionRequiredAuthErrorMessage.indexOf(errorCode) > -1;
            var isInteractionRequiredSubError = !!subError && InteractionRequiredAuthSubErrorMessage.indexOf(subError) > -1;
            var isInteractionRequiredErrorDesc = !!errorString && InteractionRequiredAuthErrorMessage.some(function (irErrorCode) {
                return errorString.indexOf(irErrorCode) > -1;
            });
            return isInteractionRequiredErrorCode || isInteractionRequiredErrorDesc || isInteractionRequiredSubError;
        };
        return InteractionRequiredAuthError;
    }(ServerError));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var CacheRecord = /** @class */ (function () {
        function CacheRecord(accountEntity, idTokenEntity, accessTokenEntity, refreshTokenEntity, appMetadataEntity) {
            this.account = accountEntity || null;
            this.idToken = idTokenEntity || null;
            this.accessToken = accessTokenEntity || null;
            this.refreshToken = refreshTokenEntity || null;
            this.appMetadata = appMetadataEntity || null;
        }
        return CacheRecord;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Class which provides helpers for OAuth 2.0 protocol specific values
     */
    var ProtocolUtils = /** @class */ (function () {
        function ProtocolUtils() {
        }
        /**
         * Appends user state with random guid, or returns random guid.
         * @param userState
         * @param randomGuid
         */
        ProtocolUtils.setRequestState = function (cryptoObj, userState, meta) {
            var libraryState = ProtocolUtils.generateLibraryState(cryptoObj, meta);
            return !StringUtils.isEmpty(userState) ? "" + libraryState + Constants.RESOURCE_DELIM + userState : libraryState;
        };
        /**
         * Generates the state value used by the common library.
         * @param randomGuid
         * @param cryptoObj
         */
        ProtocolUtils.generateLibraryState = function (cryptoObj, meta) {
            if (!cryptoObj) {
                throw ClientAuthError.createNoCryptoObjectError("generateLibraryState");
            }
            // Create a state object containing a unique id and the timestamp of the request creation
            var stateObj = {
                id: cryptoObj.createNewGuid()
            };
            if (meta) {
                stateObj.meta = meta;
            }
            var stateString = JSON.stringify(stateObj);
            return cryptoObj.base64Encode(stateString);
        };
        /**
         * Parses the state into the RequestStateObject, which contains the LibraryState info and the state passed by the user.
         * @param state
         * @param cryptoObj
         */
        ProtocolUtils.parseRequestState = function (cryptoObj, state) {
            if (!cryptoObj) {
                throw ClientAuthError.createNoCryptoObjectError("parseRequestState");
            }
            if (StringUtils.isEmpty(state)) {
                throw ClientAuthError.createInvalidStateError(state, "Null, undefined or empty state");
            }
            try {
                // Split the state between library state and user passed state and decode them separately
                var splitState = decodeURIComponent(state).split(Constants.RESOURCE_DELIM);
                var libraryState = splitState[0];
                var userState = splitState.length > 1 ? splitState.slice(1).join(Constants.RESOURCE_DELIM) : "";
                var libraryStateString = cryptoObj.base64Decode(libraryState);
                var libraryStateObj = JSON.parse(libraryStateString);
                return {
                    userRequestState: !StringUtils.isEmpty(userState) ? userState : "",
                    libraryState: libraryStateObj
                };
            }
            catch (e) {
                throw ClientAuthError.createInvalidStateError(state, e);
            }
        };
        return ProtocolUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Url object class which can perform various transformations on url strings.
     */
    var UrlString = /** @class */ (function () {
        function UrlString(url) {
            this._urlString = url;
            if (StringUtils.isEmpty(this._urlString)) {
                // Throws error if url is empty
                throw ClientConfigurationError.createUrlEmptyError();
            }
            if (StringUtils.isEmpty(this.getHash())) {
                this._urlString = UrlString.canonicalizeUri(url);
            }
        }
        Object.defineProperty(UrlString.prototype, "urlString", {
            get: function () {
                return this._urlString;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Ensure urls are lower case and end with a / character.
         * @param url
         */
        UrlString.canonicalizeUri = function (url) {
            if (url) {
                url = url.toLowerCase();
                if (StringUtils.endsWith(url, "?")) {
                    url = url.slice(0, -1);
                }
                else if (StringUtils.endsWith(url, "?/")) {
                    url = url.slice(0, -2);
                }
                if (!StringUtils.endsWith(url, "/")) {
                    url += "/";
                }
            }
            return url;
        };
        /**
         * Throws if urlString passed is not a valid authority URI string.
         */
        UrlString.prototype.validateAsUri = function () {
            // Attempts to parse url for uri components
            var components;
            try {
                components = this.getUrlComponents();
            }
            catch (e) {
                throw ClientConfigurationError.createUrlParseError(e);
            }
            // Throw error if URI or path segments are not parseable.
            if (!components.HostNameAndPort || !components.PathSegments) {
                throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
            }
            // Throw error if uri is insecure.
            if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
                throw ClientConfigurationError.createInsecureAuthorityUriError(this.urlString);
            }
        };
        /**
         * Function to remove query string params from url. Returns the new url.
         * @param url
         * @param name
         */
        UrlString.prototype.urlRemoveQueryStringParameter = function (name) {
            var regex = new RegExp("(\\&" + name + "=)[^\&]+");
            this._urlString = this.urlString.replace(regex, "");
            // name=value&
            regex = new RegExp("(" + name + "=)[^\&]+&");
            this._urlString = this.urlString.replace(regex, "");
            // name=value
            regex = new RegExp("(" + name + "=)[^\&]+");
            this._urlString = this.urlString.replace(regex, "");
            return this.urlString;
        };
        UrlString.removeHashFromUrl = function (url) {
            return UrlString.canonicalizeUri(url.split("#")[0]);
        };
        /**
         * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
         * @param href The url
         * @param tenantId The tenant id to replace
         */
        UrlString.prototype.replaceTenantPath = function (tenantId) {
            var urlObject = this.getUrlComponents();
            var pathArray = urlObject.PathSegments;
            if (tenantId && (pathArray.length !== 0 && (pathArray[0] === AADAuthorityConstants.COMMON || pathArray[0] === AADAuthorityConstants.ORGANIZATIONS))) {
                pathArray[0] = tenantId;
            }
            return UrlString.constructAuthorityUriFromObject(urlObject);
        };
        /**
         * Returns the anchor part(#) of the URL
         */
        UrlString.prototype.getHash = function () {
            return UrlString.parseHash(this.urlString);
        };
        /**
         * Parses out the components from a url string.
         * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
         */
        UrlString.prototype.getUrlComponents = function () {
            // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
            var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
            // If url string does not match regEx, we throw an error
            var match = this.urlString.match(regEx);
            if (!match) {
                throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
            }
            // Url component object
            var urlComponents = {
                Protocol: match[1],
                HostNameAndPort: match[4],
                AbsolutePath: match[5],
                QueryString: match[7]
            };
            var pathSegments = urlComponents.AbsolutePath.split("/");
            pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
            urlComponents.PathSegments = pathSegments;
            if (!StringUtils.isEmpty(urlComponents.QueryString) && urlComponents.QueryString.endsWith("/")) {
                urlComponents.QueryString = urlComponents.QueryString.substring(0, urlComponents.QueryString.length - 1);
            }
            return urlComponents;
        };
        UrlString.getDomainFromUrl = function (url) {
            var regEx = RegExp("^([^:/?#]+://)?([^/?#]*)");
            var match = url.match(regEx);
            if (!match) {
                throw ClientConfigurationError.createUrlParseError("Given url string: " + url);
            }
            return match[2];
        };
        UrlString.getAbsoluteUrl = function (relativeUrl, baseUrl) {
            if (relativeUrl[0] === Constants.FORWARD_SLASH) {
                var url = new UrlString(baseUrl);
                var baseComponents = url.getUrlComponents();
                return baseComponents.Protocol + "//" + baseComponents.HostNameAndPort + relativeUrl;
            }
            return relativeUrl;
        };
        /**
         * Parses hash string from given string. Returns empty string if no hash symbol is found.
         * @param hashString
         */
        UrlString.parseHash = function (hashString) {
            var hashIndex1 = hashString.indexOf("#");
            var hashIndex2 = hashString.indexOf("#/");
            if (hashIndex2 > -1) {
                return hashString.substring(hashIndex2 + 2);
            }
            else if (hashIndex1 > -1) {
                return hashString.substring(hashIndex1 + 1);
            }
            return "";
        };
        UrlString.constructAuthorityUriFromObject = function (urlObject) {
            return new UrlString(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"));
        };
        /**
         * Returns URL hash as server auth code response object.
         */
        UrlString.getDeserializedHash = function (hash) {
            // Check if given hash is empty
            if (StringUtils.isEmpty(hash)) {
                return {};
            }
            // Strip the # symbol if present
            var parsedHash = UrlString.parseHash(hash);
            // If # symbol was not present, above will return empty string, so give original hash value
            var deserializedHash = StringUtils.queryStringToObject(StringUtils.isEmpty(parsedHash) ? hash : parsedHash);
            // Check if deserialization didn't work
            if (!deserializedHash) {
                throw ClientAuthError.createHashNotDeserializedError(JSON.stringify(deserializedHash));
            }
            return deserializedHash;
        };
        /**
         * Check if the hash of the URL string contains known properties
         */
        UrlString.hashContainsKnownProperties = function (hash) {
            if (StringUtils.isEmpty(hash)) {
                return false;
            }
            var parameters = UrlString.getDeserializedHash(hash);
            return !!(parameters.code ||
                parameters.error_description ||
                parameters.error ||
                parameters.state);
        };
        return UrlString;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var KeyLocation;
    (function (KeyLocation) {
        KeyLocation["SW"] = "sw";
        KeyLocation["UHW"] = "uhw";
    })(KeyLocation || (KeyLocation = {}));
    var PopTokenGenerator = /** @class */ (function () {
        function PopTokenGenerator(cryptoUtils) {
            this.cryptoUtils = cryptoUtils;
        }
        PopTokenGenerator.prototype.generateCnf = function (resourceRequestMethod, resourceRequestUri) {
            return __awaiter$1(this, void 0, void 0, function () {
                var kidThumbprint, reqCnf;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.cryptoUtils.getPublicKeyThumbprint(resourceRequestMethod, resourceRequestUri)];
                        case 1:
                            kidThumbprint = _a.sent();
                            reqCnf = {
                                kid: kidThumbprint,
                                xms_ksl: KeyLocation.SW
                            };
                            return [2 /*return*/, this.cryptoUtils.base64Encode(JSON.stringify(reqCnf))];
                    }
                });
            });
        };
        PopTokenGenerator.prototype.signPopToken = function (accessToken, resourceRequestMethod, resourceRequestUri) {
            var _a;
            return __awaiter$1(this, void 0, void 0, function () {
                var tokenClaims, resourceUrlString, resourceUrlComponents;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            tokenClaims = AuthToken.extractTokenClaims(accessToken, this.cryptoUtils);
                            resourceUrlString = new UrlString(resourceRequestUri);
                            resourceUrlComponents = resourceUrlString.getUrlComponents();
                            if (!((_a = tokenClaims === null || tokenClaims === void 0 ? void 0 : tokenClaims.cnf) === null || _a === void 0 ? void 0 : _a.kid)) {
                                throw ClientAuthError.createTokenClaimsRequiredError();
                            }
                            return [4 /*yield*/, this.cryptoUtils.signJwt({
                                    at: accessToken,
                                    ts: "" + TimeUtils.nowSeconds(),
                                    m: resourceRequestMethod.toUpperCase(),
                                    u: resourceUrlComponents.HostNameAndPort || "",
                                    nonce: this.cryptoUtils.createNewGuid(),
                                    p: resourceUrlComponents.AbsolutePath,
                                    q: [[], resourceUrlComponents.QueryString],
                                }, tokenClaims.cnf.kid)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        return PopTokenGenerator;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * APP_METADATA Cache
     *
     * Key:Value Schema:
     *
     * Key: appmetadata-<environment>-<client_id>
     *
     * Value:
     * {
     *      clientId: client ID of the application
     *      environment: entity that issued the token, represented as a full host
     *      familyId: Family ID identifier, '1' represents Microsoft Family
     * }
     */
    var AppMetadataEntity = /** @class */ (function () {
        function AppMetadataEntity() {
        }
        /**
         * Generate AppMetadata Cache Key as per the schema: appmetadata-<environment>-<client_id>
         */
        AppMetadataEntity.prototype.generateAppMetadataKey = function () {
            return AppMetadataEntity.generateAppMetadataCacheKey(this.environment, this.clientId);
        };
        /**
         * Generate AppMetadata Cache Key
         */
        AppMetadataEntity.generateAppMetadataCacheKey = function (environment, clientId) {
            var appMetaDataKeyArray = [
                APP_METADATA,
                environment,
                clientId,
            ];
            return appMetaDataKeyArray.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Creates AppMetadataEntity
         * @param clientId
         * @param environment
         * @param familyId
         */
        AppMetadataEntity.createAppMetadataEntity = function (clientId, environment, familyId) {
            var appMetadata = new AppMetadataEntity();
            appMetadata.clientId = clientId;
            appMetadata.environment = environment;
            if (familyId) {
                appMetadata.familyId = familyId;
            }
            return appMetadata;
        };
        /**
         * Validates an entity: checks for all expected params
         * @param entity
         */
        AppMetadataEntity.isAppMetadataEntity = function (key, entity) {
            if (!entity) {
                return false;
            }
            return (key.indexOf(APP_METADATA) === 0 &&
                entity.hasOwnProperty("clientId") &&
                entity.hasOwnProperty("environment"));
        };
        return AppMetadataEntity;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * This class instance helps track the memory changes facilitating
     * decisions to read from and write to the persistent cache
     */ var TokenCacheContext = /** @class */ (function () {
        function TokenCacheContext(tokenCache, hasChanged) {
            this.cache = tokenCache;
            this.hasChanged = hasChanged;
        }
        Object.defineProperty(TokenCacheContext.prototype, "cacheHasChanged", {
            /**
             * boolean which indicates the changes in cache
             */
            get: function () {
                return this.hasChanged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TokenCacheContext.prototype, "tokenCache", {
            /**
             * function to retrieve the token cache
             */
            get: function () {
                return this.cache;
            },
            enumerable: true,
            configurable: true
        });
        return TokenCacheContext;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Class that handles response parsing.
     */
    var ResponseHandler = /** @class */ (function () {
        function ResponseHandler(clientId, cacheStorage, cryptoObj, logger, serializableCache, persistencePlugin) {
            this.clientId = clientId;
            this.cacheStorage = cacheStorage;
            this.cryptoObj = cryptoObj;
            this.logger = logger;
            this.serializableCache = serializableCache;
            this.persistencePlugin = persistencePlugin;
        }
        /**
         * Function which validates server authorization code response.
         * @param serverResponseHash
         * @param cachedState
         * @param cryptoObj
         */
        ResponseHandler.prototype.validateServerAuthorizationCodeResponse = function (serverResponseHash, cachedState, cryptoObj) {
            if (!serverResponseHash.state || !cachedState) {
                throw !serverResponseHash.state ? ClientAuthError.createStateNotFoundError("Server State") : ClientAuthError.createStateNotFoundError("Cached State");
            }
            if (decodeURIComponent(serverResponseHash.state) !== decodeURIComponent(cachedState)) {
                throw ClientAuthError.createStateMismatchError();
            }
            // Check for error
            if (serverResponseHash.error || serverResponseHash.error_description || serverResponseHash.suberror) {
                if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponseHash.error, serverResponseHash.error_description, serverResponseHash.suberror)) {
                    throw new InteractionRequiredAuthError(serverResponseHash.error || Constants.EMPTY_STRING, serverResponseHash.error_description, serverResponseHash.suberror);
                }
                throw new ServerError(serverResponseHash.error || Constants.EMPTY_STRING, serverResponseHash.error_description, serverResponseHash.suberror);
            }
            if (serverResponseHash.client_info) {
                buildClientInfo(serverResponseHash.client_info, cryptoObj);
            }
        };
        /**
         * Function which validates server authorization token response.
         * @param serverResponse
         */
        ResponseHandler.prototype.validateTokenResponse = function (serverResponse) {
            // Check for error
            if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
                if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
                    throw new InteractionRequiredAuthError(serverResponse.error, serverResponse.error_description, serverResponse.suberror);
                }
                var errString = serverResponse.error_codes + " - [" + serverResponse.timestamp + "]: " + serverResponse.error_description + " - Correlation ID: " + serverResponse.correlation_id + " - Trace ID: " + serverResponse.trace_id;
                throw new ServerError(serverResponse.error, errString);
            }
        };
        /**
         * Returns a constructed token response based on given string. Also manages the cache updates and cleanups.
         * @param serverTokenResponse
         * @param authority
         */
        ResponseHandler.prototype.handleServerTokenResponse = function (serverTokenResponse, authority, reqTimestamp, resourceRequestMethod, resourceRequestUri, authCodePayload, requestScopes, oboAssertion, handlingRefreshTokenResponse) {
            return __awaiter$1(this, void 0, void 0, function () {
                var idTokenObj, requestStateObj, cacheRecord, cacheContext, key, account;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (serverTokenResponse.id_token) {
                                idTokenObj = new AuthToken(serverTokenResponse.id_token || Constants.EMPTY_STRING, this.cryptoObj);
                                // token nonce check (TODO: Add a warning if no nonce is given?)
                                if (authCodePayload && !StringUtils.isEmpty(authCodePayload.nonce)) {
                                    if (idTokenObj.claims.nonce !== authCodePayload.nonce) {
                                        throw ClientAuthError.createNonceMismatchError();
                                    }
                                }
                            }
                            // generate homeAccountId
                            this.homeAccountIdentifier = AccountEntity.generateHomeAccountId(serverTokenResponse.client_info || Constants.EMPTY_STRING, authority.authorityType, this.logger, this.cryptoObj, idTokenObj);
                            if (!!authCodePayload && !!authCodePayload.state) {
                                requestStateObj = ProtocolUtils.parseRequestState(this.cryptoObj, authCodePayload.state);
                            }
                            cacheRecord = this.generateCacheRecord(serverTokenResponse, authority, reqTimestamp, idTokenObj, requestScopes, oboAssertion, authCodePayload);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, , 4, 7]);
                            if (!(this.persistencePlugin && this.serializableCache)) return [3 /*break*/, 3];
                            this.logger.verbose("Persistence enabled, calling beforeCacheAccess");
                            cacheContext = new TokenCacheContext(this.serializableCache, true);
                            return [4 /*yield*/, this.persistencePlugin.beforeCacheAccess(cacheContext)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            /*
                             * When saving a refreshed tokens to the cache, it is expected that the account that was used is present in the cache.
                             * If not present, we should return null, as it's the case that another application called removeAccount in between
                             * the calls to getAllAccounts and acquireTokenSilent. We should not overwrite that removal.
                             */
                            if (handlingRefreshTokenResponse && cacheRecord.account) {
                                key = cacheRecord.account.generateAccountKey();
                                account = this.cacheStorage.getAccount(key);
                                if (!account) {
                                    this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache");
                                    return [2 /*return*/, ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, idTokenObj, requestStateObj, resourceRequestMethod, resourceRequestUri)];
                                }
                            }
                            this.cacheStorage.saveCacheRecord(cacheRecord);
                            return [3 /*break*/, 7];
                        case 4:
                            if (!(this.persistencePlugin && this.serializableCache && cacheContext)) return [3 /*break*/, 6];
                            this.logger.verbose("Persistence enabled, calling afterCacheAccess");
                            return [4 /*yield*/, this.persistencePlugin.afterCacheAccess(cacheContext)];
                        case 5:
                            _a.sent();
                            _a.label = 6;
                        case 6: return [7 /*endfinally*/];
                        case 7: return [2 /*return*/, ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, idTokenObj, requestStateObj, resourceRequestMethod, resourceRequestUri)];
                    }
                });
            });
        };
        /**
         * Generates CacheRecord
         * @param serverTokenResponse
         * @param idTokenObj
         * @param authority
         */
        ResponseHandler.prototype.generateCacheRecord = function (serverTokenResponse, authority, reqTimestamp, idTokenObj, requestScopes, oboAssertion, authCodePayload) {
            var env = authority.getPreferredCache();
            if (StringUtils.isEmpty(env)) {
                throw ClientAuthError.createInvalidCacheEnvironmentError();
            }
            // IdToken: non AAD scenarios can have empty realm
            var cachedIdToken;
            var cachedAccount;
            if (!StringUtils.isEmpty(serverTokenResponse.id_token) && !!idTokenObj) {
                cachedIdToken = IdTokenEntity.createIdTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.id_token || Constants.EMPTY_STRING, this.clientId, idTokenObj.claims.tid || Constants.EMPTY_STRING, oboAssertion);
                cachedAccount = this.generateAccountEntity(serverTokenResponse, idTokenObj, authority, oboAssertion, authCodePayload);
            }
            // AccessToken
            var cachedAccessToken = null;
            if (!StringUtils.isEmpty(serverTokenResponse.access_token)) {
                // If scopes not returned in server response, use request scopes
                var responseScopes = serverTokenResponse.scope ? ScopeSet.fromString(serverTokenResponse.scope) : new ScopeSet(requestScopes || []);
                // Use timestamp calculated before request
                var tokenExpirationSeconds = reqTimestamp + (serverTokenResponse.expires_in || 0);
                var extendedTokenExpirationSeconds = tokenExpirationSeconds + (serverTokenResponse.ext_expires_in || 0);
                // non AAD scenarios can have empty realm
                cachedAccessToken = AccessTokenEntity.createAccessTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.access_token || Constants.EMPTY_STRING, this.clientId, idTokenObj ? idTokenObj.claims.tid || Constants.EMPTY_STRING : authority.tenant, responseScopes.printScopes(), tokenExpirationSeconds, extendedTokenExpirationSeconds, serverTokenResponse.token_type, oboAssertion);
            }
            // refreshToken
            var cachedRefreshToken = null;
            if (!StringUtils.isEmpty(serverTokenResponse.refresh_token)) {
                cachedRefreshToken = RefreshTokenEntity.createRefreshTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.refresh_token || Constants.EMPTY_STRING, this.clientId, serverTokenResponse.foci, oboAssertion);
            }
            // appMetadata
            var cachedAppMetadata = null;
            if (!StringUtils.isEmpty(serverTokenResponse.foci)) {
                cachedAppMetadata = AppMetadataEntity.createAppMetadataEntity(this.clientId, env, serverTokenResponse.foci);
            }
            return new CacheRecord(cachedAccount, cachedIdToken, cachedAccessToken, cachedRefreshToken, cachedAppMetadata);
        };
        /**
         * Generate Account
         * @param serverTokenResponse
         * @param idToken
         * @param authority
         */
        ResponseHandler.prototype.generateAccountEntity = function (serverTokenResponse, idToken, authority, oboAssertion, authCodePayload) {
            var authorityType = authority.authorityType;
            var cloudGraphHostName = authCodePayload ? authCodePayload.cloud_graph_host_name : "";
            var msGraphhost = authCodePayload ? authCodePayload.msgraph_host : "";
            // ADFS does not require client_info in the response
            if (authorityType === AuthorityType.Adfs) {
                this.logger.verbose("Authority type is ADFS, creating ADFS account");
                return AccountEntity.createGenericAccount(authority, this.homeAccountIdentifier, idToken, oboAssertion, cloudGraphHostName, msGraphhost);
            }
            // This fallback applies to B2C as well as they fall under an AAD account type.
            if (StringUtils.isEmpty(serverTokenResponse.client_info) && authority.protocolMode === "AAD") {
                throw ClientAuthError.createClientInfoEmptyError();
            }
            return serverTokenResponse.client_info ?
                AccountEntity.createAccount(serverTokenResponse.client_info, this.homeAccountIdentifier, authority, idToken, oboAssertion, cloudGraphHostName, msGraphhost) :
                AccountEntity.createGenericAccount(authority, this.homeAccountIdentifier, idToken, oboAssertion, cloudGraphHostName, msGraphhost);
        };
        /**
         * Creates an @AuthenticationResult from @CacheRecord , @IdToken , and a boolean that states whether or not the result is from cache.
         *
         * Optionally takes a state string that is set as-is in the response.
         *
         * @param cacheRecord
         * @param idTokenObj
         * @param fromTokenCache
         * @param stateString
         */
        ResponseHandler.generateAuthenticationResult = function (cryptoObj, authority, cacheRecord, fromTokenCache, idTokenObj, requestState, resourceRequestMethod, resourceRequestUri) {
            var _a, _b, _c;
            return __awaiter$1(this, void 0, void 0, function () {
                var accessToken, responseScopes, expiresOn, extExpiresOn, familyId, popTokenGenerator, uid, tid;
                return __generator$1(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            accessToken = "";
                            responseScopes = [];
                            expiresOn = null;
                            familyId = Constants.EMPTY_STRING;
                            if (!cacheRecord.accessToken) return [3 /*break*/, 4];
                            if (!(cacheRecord.accessToken.tokenType === exports.AuthenticationScheme.POP)) return [3 /*break*/, 2];
                            popTokenGenerator = new PopTokenGenerator(cryptoObj);
                            if (!resourceRequestMethod || !resourceRequestUri) {
                                throw ClientConfigurationError.createResourceRequestParametersRequiredError();
                            }
                            return [4 /*yield*/, popTokenGenerator.signPopToken(cacheRecord.accessToken.secret, resourceRequestMethod, resourceRequestUri)];
                        case 1:
                            accessToken = _d.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            accessToken = cacheRecord.accessToken.secret;
                            _d.label = 3;
                        case 3:
                            responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target).asArray();
                            expiresOn = new Date(Number(cacheRecord.accessToken.expiresOn) * 1000);
                            extExpiresOn = new Date(Number(cacheRecord.accessToken.extendedExpiresOn) * 1000);
                            _d.label = 4;
                        case 4:
                            if (cacheRecord.appMetadata) {
                                familyId = cacheRecord.appMetadata.familyId === THE_FAMILY_ID ? THE_FAMILY_ID : Constants.EMPTY_STRING;
                            }
                            uid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.oid) || (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.sub) || Constants.EMPTY_STRING;
                            tid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.tid) || Constants.EMPTY_STRING;
                            return [2 /*return*/, {
                                    authority: authority.canonicalAuthority,
                                    uniqueId: uid,
                                    tenantId: tid,
                                    scopes: responseScopes,
                                    account: cacheRecord.account ? cacheRecord.account.getAccountInfo() : null,
                                    idToken: idTokenObj ? idTokenObj.rawToken : Constants.EMPTY_STRING,
                                    idTokenClaims: idTokenObj ? idTokenObj.claims : {},
                                    accessToken: accessToken,
                                    fromCache: fromTokenCache,
                                    expiresOn: expiresOn,
                                    extExpiresOn: extExpiresOn,
                                    familyId: familyId,
                                    tokenType: ((_a = cacheRecord.accessToken) === null || _a === void 0 ? void 0 : _a.tokenType) || Constants.EMPTY_STRING,
                                    state: requestState ? requestState.userRequestState : Constants.EMPTY_STRING,
                                    cloudGraphHostName: ((_b = cacheRecord.account) === null || _b === void 0 ? void 0 : _b.cloudGraphHostName) || Constants.EMPTY_STRING,
                                    msGraphHost: ((_c = cacheRecord.account) === null || _c === void 0 ? void 0 : _c.msGraphHost) || Constants.EMPTY_STRING
                                }];
                    }
                });
            });
        };
        return ResponseHandler;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Oauth2.0 Authorization Code client
     */
    var AuthorizationCodeClient = /** @class */ (function (_super) {
        __extends$1(AuthorizationCodeClient, _super);
        function AuthorizationCodeClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * Creates the URL of the authorization request letting the user input credentials and consent to the
         * application. The URL target the /authorize endpoint of the authority configured in the
         * application object.
         *
         * Once the user inputs their credentials and consents, the authority will send a response to the redirect URI
         * sent in the request and should contain an authorization code, which can then be used to acquire tokens via
         * acquireToken(AuthorizationCodeRequest)
         * @param request
         */
        AuthorizationCodeClient.prototype.getAuthCodeUrl = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var queryString;
                return __generator$1(this, function (_a) {
                    queryString = this.createAuthCodeUrlQueryString(request);
                    return [2 /*return*/, this.authority.authorizationEndpoint + "?" + queryString];
                });
            });
        };
        /**
         * API to acquire a token in exchange of 'authorization_code` acquired by the user in the first leg of the
         * authorization_code_grant
         * @param request
         */
        AuthorizationCodeClient.prototype.acquireToken = function (request, authCodePayload) {
            return __awaiter$1(this, void 0, void 0, function () {
                var reqTimestamp, response, responseHandler;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.info("in acquireToken call");
                            if (!request || StringUtils.isEmpty(request.code)) {
                                throw ClientAuthError.createTokenRequestCannotBeMadeError();
                            }
                            reqTimestamp = TimeUtils.nowSeconds();
                            return [4 /*yield*/, this.executeTokenRequest(this.authority, request)];
                        case 1:
                            response = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                            // Validate response. This function throws a server error if an error is returned by the server.
                            responseHandler.validateTokenResponse(response.body);
                            return [4 /*yield*/, responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request.resourceRequestMethod, request.resourceRequestUri, authCodePayload)];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Handles the hash fragment response from public client code request. Returns a code response used by
         * the client to exchange for a token in acquireToken.
         * @param hashFragment
         */
        AuthorizationCodeClient.prototype.handleFragmentResponse = function (hashFragment, cachedState) {
            // Handle responses.
            var responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null);
            // Deserialize hash fragment response parameters.
            var hashUrlString = new UrlString(hashFragment);
            // Deserialize hash fragment response parameters.
            var serverParams = UrlString.getDeserializedHash(hashUrlString.getHash());
            // Get code response
            responseHandler.validateServerAuthorizationCodeResponse(serverParams, cachedState, this.cryptoUtils);
            // throw when there is no auth code in the response
            if (!serverParams.code) {
                throw ClientAuthError.createNoAuthCodeInServerResponseError();
            }
            return __assign$1(__assign$1({}, serverParams), { 
                // Code param is optional in ServerAuthorizationCodeResponse but required in AuthorizationCodePaylod
                code: serverParams.code });
        };
        /**
         * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
         * Default behaviour is to redirect the user to `window.location.href`.
         * @param authorityUri
         */
        AuthorizationCodeClient.prototype.getLogoutUri = function (logoutRequest) {
            // Throw error if logoutRequest is null/undefined
            if (!logoutRequest) {
                throw ClientConfigurationError.createEmptyLogoutRequestError();
            }
            if (logoutRequest.account) {
                // Clear given account.
                this.cacheManager.removeAccount(AccountEntity.generateAccountCacheKey(logoutRequest.account));
            }
            else {
                // Clear all accounts and tokens
                this.cacheManager.clear();
            }
            var queryString = this.createLogoutUrlQueryString(logoutRequest);
            // Construct logout URI.
            return StringUtils.isEmpty(queryString) ? this.authority.endSessionEndpoint : this.authority.endSessionEndpoint + "?" + queryString;
        };
        /**
         * Executes POST request to token endpoint
         * @param authority
         * @param request
         */
        AuthorizationCodeClient.prototype.executeTokenRequest = function (authority, request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var thumbprint, requestBody, headers;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            thumbprint = {
                                clientId: this.config.authOptions.clientId,
                                authority: authority.canonicalAuthority,
                                scopes: request.scopes
                            };
                            return [4 /*yield*/, this.createTokenRequestBody(request)];
                        case 1:
                            requestBody = _a.sent();
                            headers = this.createDefaultTokenRequestHeaders();
                            return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                    }
                });
            });
        };
        /**
         * Generates a map for all the params to be sent to the service
         * @param request
         */
        AuthorizationCodeClient.prototype.createTokenRequestBody = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var parameterBuilder, clientAssertion, popTokenGenerator, cnfString, correlationId;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            parameterBuilder = new RequestParameterBuilder();
                            parameterBuilder.addClientId(this.config.authOptions.clientId);
                            // validate the redirectUri (to be a non null value)
                            parameterBuilder.addRedirectUri(request.redirectUri);
                            // Add scope array, parameter builder will add default scopes and dedupe
                            parameterBuilder.addScopes(request.scopes);
                            // add code: user set, not validated
                            parameterBuilder.addAuthorizationCode(request.code);
                            // add code_verifier if passed
                            if (request.codeVerifier) {
                                parameterBuilder.addCodeVerifier(request.codeVerifier);
                            }
                            if (this.config.clientCredentials.clientSecret) {
                                parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
                            }
                            if (this.config.clientCredentials.clientAssertion) {
                                clientAssertion = this.config.clientCredentials.clientAssertion;
                                parameterBuilder.addClientAssertion(clientAssertion.assertion);
                                parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
                            }
                            parameterBuilder.addGrantType(GrantType.AUTHORIZATION_CODE_GRANT);
                            parameterBuilder.addClientInfo();
                            if (!(request.authenticationScheme === exports.AuthenticationScheme.POP && !!request.resourceRequestMethod && !!request.resourceRequestUri)) return [3 /*break*/, 2];
                            popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
                            return [4 /*yield*/, popTokenGenerator.generateCnf(request.resourceRequestMethod, request.resourceRequestUri)];
                        case 1:
                            cnfString = _a.sent();
                            parameterBuilder.addPopToken(cnfString);
                            _a.label = 2;
                        case 2:
                            correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
                            parameterBuilder.addCorrelationId(correlationId);
                            if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                                parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
                            }
                            return [2 /*return*/, parameterBuilder.createQueryString()];
                    }
                });
            });
        };
        /**
         * This API validates the `AuthorizationCodeUrlRequest` and creates a URL
         * @param request
         */
        AuthorizationCodeClient.prototype.createAuthCodeUrlQueryString = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            var requestScopes = __spreadArrays(request.scopes || [], request.extraScopesToConsent || []);
            parameterBuilder.addScopes(requestScopes);
            // validate the redirectUri (to be a non null value)
            parameterBuilder.addRedirectUri(request.redirectUri);
            // generate the correlationId if not set by the user and add
            var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
            parameterBuilder.addCorrelationId(correlationId);
            // add response_mode. If not passed in it defaults to query.
            parameterBuilder.addResponseMode(request.responseMode);
            // add response_type = code
            parameterBuilder.addResponseTypeCode();
            // add library info parameters
            parameterBuilder.addLibraryInfo(this.config.libraryInfo);
            // add client_info=1
            parameterBuilder.addClientInfo();
            if (request.codeChallenge && request.codeChallengeMethod) {
                parameterBuilder.addCodeChallengeParams(request.codeChallenge, request.codeChallengeMethod);
            }
            if (request.prompt) {
                parameterBuilder.addPrompt(request.prompt);
            }
            if (request.domainHint) {
                parameterBuilder.addDomainHint(request.domainHint);
            }
            // Add sid or loginHint with preference for sid -> loginHint -> username of AccountInfo object
            if (request.sid) {
                parameterBuilder.addSid(request.sid);
            }
            else if (request.loginHint) {
                parameterBuilder.addLoginHint(request.loginHint);
            }
            else if (request.account && request.account.username) {
                parameterBuilder.addLoginHint(request.account.username);
            }
            if (request.nonce) {
                parameterBuilder.addNonce(request.nonce);
            }
            if (request.state) {
                parameterBuilder.addState(request.state);
            }
            if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
            }
            if (request.extraQueryParameters) {
                parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
            }
            return parameterBuilder.createQueryString();
        };
        /**
         * This API validates the `EndSessionRequest` and creates a URL
         * @param request
         */
        AuthorizationCodeClient.prototype.createLogoutUrlQueryString = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            if (request.postLogoutRedirectUri) {
                parameterBuilder.addPostLogoutRedirectUri(request.postLogoutRedirectUri);
            }
            if (request.correlationId) {
                parameterBuilder.addCorrelationId(request.correlationId);
            }
            if (request.idTokenHint) {
                parameterBuilder.addIdTokenHint(request.idTokenHint);
            }
            return parameterBuilder.createQueryString();
        };
        return AuthorizationCodeClient;
    }(BaseClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * OAuth2.0 Device code client
     */
    var DeviceCodeClient = /** @class */ (function (_super) {
        __extends$1(DeviceCodeClient, _super);
        function DeviceCodeClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * Gets device code from device code endpoint, calls back to with device code response, and
         * polls token endpoint to exchange device code for tokens
         * @param request
         */
        DeviceCodeClient.prototype.acquireToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var deviceCodeResponse, reqTimestamp, response, responseHandler;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getDeviceCode(request)];
                        case 1:
                            deviceCodeResponse = _a.sent();
                            request.deviceCodeCallback(deviceCodeResponse);
                            reqTimestamp = TimeUtils.nowSeconds();
                            return [4 /*yield*/, this.acquireTokenWithDeviceCode(request, deviceCodeResponse)];
                        case 2:
                            response = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                            // Validate response. This function throws a server error if an error is returned by the server.
                            responseHandler.validateTokenResponse(response);
                            return [4 /*yield*/, responseHandler.handleServerTokenResponse(response, this.authority, reqTimestamp, request.resourceRequestMethod, request.resourceRequestUri)];
                        case 3: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Creates device code request and executes http GET
         * @param request
         */
        DeviceCodeClient.prototype.getDeviceCode = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var queryString, headers, thumbprint;
                return __generator$1(this, function (_a) {
                    queryString = this.createQueryString(request);
                    headers = this.createDefaultTokenRequestHeaders();
                    thumbprint = {
                        clientId: this.config.authOptions.clientId,
                        authority: request.authority,
                        scopes: request.scopes
                    };
                    return [2 /*return*/, this.executePostRequestToDeviceCodeEndpoint(this.authority.deviceCodeEndpoint, queryString, headers, thumbprint)];
                });
            });
        };
        /**
         * Executes POST request to device code endpoint
         * @param deviceCodeEndpoint
         * @param queryString
         * @param headers
         */
        DeviceCodeClient.prototype.executePostRequestToDeviceCodeEndpoint = function (deviceCodeEndpoint, queryString, headers, thumbprint) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _a, userCode, deviceCode, verificationUri, expiresIn, interval, message;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.networkManager.sendPostRequest(thumbprint, deviceCodeEndpoint, {
                                body: queryString,
                                headers: headers
                            })];
                        case 1:
                            _a = (_b.sent()).body, userCode = _a.user_code, deviceCode = _a.device_code, verificationUri = _a.verification_uri, expiresIn = _a.expires_in, interval = _a.interval, message = _a.message;
                            return [2 /*return*/, {
                                    userCode: userCode,
                                    deviceCode: deviceCode,
                                    verificationUri: verificationUri,
                                    expiresIn: expiresIn,
                                    interval: interval,
                                    message: message
                                }];
                    }
                });
            });
        };
        /**
         * Create device code endpoint query parameters and returns string
         */
        DeviceCodeClient.prototype.createQueryString = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addScopes(request.scopes);
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
            }
            return parameterBuilder.createQueryString();
        };
        /**
         * Creates token request with device code response and polls token endpoint at interval set by the device code
         * response
         * @param request
         * @param deviceCodeResponse
         */
        DeviceCodeClient.prototype.acquireTokenWithDeviceCode = function (request, deviceCodeResponse) {
            return __awaiter$1(this, void 0, void 0, function () {
                var requestBody, headers, userSpecifiedTimeout, deviceCodeExpirationTime, pollingIntervalMilli;
                var _this = this;
                return __generator$1(this, function (_a) {
                    requestBody = this.createTokenRequestBody(request, deviceCodeResponse);
                    headers = this.createDefaultTokenRequestHeaders();
                    userSpecifiedTimeout = request.timeout ? TimeUtils.nowSeconds() + request.timeout : undefined;
                    deviceCodeExpirationTime = TimeUtils.nowSeconds() + deviceCodeResponse.expiresIn;
                    pollingIntervalMilli = deviceCodeResponse.interval * 1000;
                    /*
                     * Poll token endpoint while (device code is not expired AND operation has not been cancelled by
                     * setting CancellationToken.cancel = true). POST request is sent at interval set by pollingIntervalMilli
                     */
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var intervalId = setInterval(function () { return __awaiter$1(_this, void 0, void 0, function () {
                                var thumbprint, response, error_1;
                                return __generator$1(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 6, , 7]);
                                            if (!request.cancel) return [3 /*break*/, 1];
                                            this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true");
                                            clearInterval(intervalId);
                                            reject(ClientAuthError.createDeviceCodeCancelledError());
                                            return [3 /*break*/, 5];
                                        case 1:
                                            if (!(userSpecifiedTimeout && userSpecifiedTimeout < deviceCodeExpirationTime && TimeUtils.nowSeconds() > userSpecifiedTimeout)) return [3 /*break*/, 2];
                                            this.logger.error("User defined timeout for device code polling reached. The timeout was set for " + userSpecifiedTimeout);
                                            clearInterval(intervalId);
                                            reject(ClientAuthError.createUserTimeoutReachedError());
                                            return [3 /*break*/, 5];
                                        case 2:
                                            if (!(TimeUtils.nowSeconds() > deviceCodeExpirationTime)) return [3 /*break*/, 3];
                                            if (userSpecifiedTimeout) {
                                                this.logger.verbose("User specified timeout ignored as the device code has expired before the timeout elapsed. The user specified timeout was set for " + userSpecifiedTimeout);
                                            }
                                            this.logger.error("Device code expired. Expiration time of device code was " + deviceCodeExpirationTime);
                                            clearInterval(intervalId);
                                            reject(ClientAuthError.createDeviceCodeExpiredError());
                                            return [3 /*break*/, 5];
                                        case 3:
                                            thumbprint = {
                                                clientId: this.config.authOptions.clientId,
                                                authority: request.authority,
                                                scopes: request.scopes
                                            };
                                            return [4 /*yield*/, this.executePostToTokenEndpoint(this.authority.tokenEndpoint, requestBody, headers, thumbprint)];
                                        case 4:
                                            response = _a.sent();
                                            if (response.body && response.body.error === Constants.AUTHORIZATION_PENDING) {
                                                // user authorization is pending. Sleep for polling interval and try again
                                                this.logger.info(response.body.error_description || "no_error_description");
                                            }
                                            else {
                                                clearInterval(intervalId);
                                                resolve(response.body);
                                            }
                                            _a.label = 5;
                                        case 5: return [3 /*break*/, 7];
                                        case 6:
                                            error_1 = _a.sent();
                                            clearInterval(intervalId);
                                            reject(error_1);
                                            return [3 /*break*/, 7];
                                        case 7: return [2 /*return*/];
                                    }
                                });
                            }); }, pollingIntervalMilli);
                        })];
                });
            });
        };
        /**
         * Creates query parameters and converts to string.
         * @param request
         * @param deviceCodeResponse
         */
        DeviceCodeClient.prototype.createTokenRequestBody = function (request, deviceCodeResponse) {
            var requestParameters = new RequestParameterBuilder();
            requestParameters.addScopes(request.scopes);
            requestParameters.addClientId(this.config.authOptions.clientId);
            requestParameters.addGrantType(GrantType.DEVICE_CODE_GRANT);
            requestParameters.addDeviceCode(deviceCodeResponse.deviceCode);
            var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
            requestParameters.addCorrelationId(correlationId);
            requestParameters.addClientInfo();
            if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                requestParameters.addClaims(request.claims, this.config.authOptions.clientCapabilities);
            }
            return requestParameters.createQueryString();
        };
        return DeviceCodeClient;
    }(BaseClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * OAuth2.0 refresh token client
     */
    var RefreshTokenClient = /** @class */ (function (_super) {
        __extends$1(RefreshTokenClient, _super);
        function RefreshTokenClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        RefreshTokenClient.prototype.acquireToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var reqTimestamp, response, responseHandler;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            reqTimestamp = TimeUtils.nowSeconds();
                            return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                        case 1:
                            response = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                            responseHandler.validateTokenResponse(response.body);
                            return [2 /*return*/, responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request.resourceRequestMethod, request.resourceRequestUri, undefined, [], undefined, true)];
                    }
                });
            });
        };
        /**
         * Gets cached refresh token and attaches to request, then calls acquireToken API
         * @param request
         */
        RefreshTokenClient.prototype.acquireTokenByRefreshToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var isFOCI, noFamilyRTInCache, clientMismatchErrorWithFamilyRT;
                return __generator$1(this, function (_a) {
                    // Cannot renew token if no request object is given.
                    if (!request) {
                        throw ClientConfigurationError.createEmptyTokenRequestError();
                    }
                    // We currently do not support silent flow for account === null use cases; This will be revisited for confidential flow usecases
                    if (!request.account) {
                        throw ClientAuthError.createNoAccountInSilentRequestError();
                    }
                    isFOCI = this.cacheManager.isAppMetadataFOCI(request.account.environment, this.config.authOptions.clientId);
                    // if the app is part of the family, retrive a Family refresh token if present and make a refreshTokenRequest
                    if (isFOCI) {
                        try {
                            return [2 /*return*/, this.acquireTokenWithCachedRefreshToken(request, true)];
                        }
                        catch (e) {
                            noFamilyRTInCache = e instanceof ClientAuthError && e.errorCode === ClientAuthErrorMessage.noTokensFoundError.code;
                            clientMismatchErrorWithFamilyRT = e instanceof ServerError && e.errorCode === Errors.INVALID_GRANT_ERROR && e.subError === Errors.CLIENT_MISMATCH_ERROR;
                            // if family Refresh Token (FRT) cache acquisition fails or if client_mismatch error is seen with FRT, reattempt with application Refresh Token (ART)
                            if (noFamilyRTInCache || clientMismatchErrorWithFamilyRT) {
                                return [2 /*return*/, this.acquireTokenWithCachedRefreshToken(request, false)];
                                // throw in all other cases
                            }
                            else {
                                throw e;
                            }
                        }
                    }
                    // fall back to application refresh token acquisition
                    return [2 /*return*/, this.acquireTokenWithCachedRefreshToken(request, false)];
                });
            });
        };
        /**
         * makes a network call to acquire tokens by exchanging RefreshToken available in userCache; throws if refresh token is not cached
         * @param request
         */
        RefreshTokenClient.prototype.acquireTokenWithCachedRefreshToken = function (request, foci) {
            return __awaiter$1(this, void 0, void 0, function () {
                var refreshToken, refreshTokenRequest;
                return __generator$1(this, function (_a) {
                    refreshToken = this.cacheManager.readRefreshTokenFromCache(this.config.authOptions.clientId, request.account, foci);
                    // no refresh Token
                    if (!refreshToken) {
                        throw ClientAuthError.createNoTokensFoundError();
                    }
                    refreshTokenRequest = __assign$1(__assign$1({}, request), { refreshToken: refreshToken.secret, authenticationScheme: exports.AuthenticationScheme.BEARER });
                    return [2 /*return*/, this.acquireToken(refreshTokenRequest)];
                });
            });
        };
        /**
         * Constructs the network message and makes a NW call to the underlying secure token service
         * @param request
         * @param authority
         */
        RefreshTokenClient.prototype.executeTokenRequest = function (request, authority) {
            return __awaiter$1(this, void 0, void 0, function () {
                var requestBody, headers, thumbprint;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.createTokenRequestBody(request)];
                        case 1:
                            requestBody = _a.sent();
                            headers = this.createDefaultTokenRequestHeaders();
                            thumbprint = {
                                clientId: this.config.authOptions.clientId,
                                authority: authority.canonicalAuthority,
                                scopes: request.scopes
                            };
                            return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                    }
                });
            });
        };
        /**
         * Helper function to create the token request body
         * @param request
         */
        RefreshTokenClient.prototype.createTokenRequestBody = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var parameterBuilder, correlationId, clientAssertion, popTokenGenerator, _a, _b;
                return __generator$1(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            parameterBuilder = new RequestParameterBuilder();
                            parameterBuilder.addClientId(this.config.authOptions.clientId);
                            parameterBuilder.addScopes(request.scopes);
                            parameterBuilder.addGrantType(GrantType.REFRESH_TOKEN_GRANT);
                            parameterBuilder.addClientInfo();
                            correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
                            parameterBuilder.addCorrelationId(correlationId);
                            parameterBuilder.addRefreshToken(request.refreshToken);
                            if (this.config.clientCredentials.clientSecret) {
                                parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
                            }
                            if (this.config.clientCredentials.clientAssertion) {
                                clientAssertion = this.config.clientCredentials.clientAssertion;
                                parameterBuilder.addClientAssertion(clientAssertion.assertion);
                                parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
                            }
                            if (!(request.authenticationScheme === exports.AuthenticationScheme.POP)) return [3 /*break*/, 2];
                            popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
                            if (!request.resourceRequestMethod || !request.resourceRequestUri) {
                                throw ClientConfigurationError.createResourceRequestParametersRequiredError();
                            }
                            _b = (_a = parameterBuilder).addPopToken;
                            return [4 /*yield*/, popTokenGenerator.generateCnf(request.resourceRequestMethod, request.resourceRequestUri)];
                        case 1:
                            _b.apply(_a, [_c.sent()]);
                            _c.label = 2;
                        case 2:
                            if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                                parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
                            }
                            return [2 /*return*/, parameterBuilder.createQueryString()];
                    }
                });
            });
        };
        return RefreshTokenClient;
    }(BaseClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * OAuth2.0 client credential grant
     */
    var ClientCredentialClient = /** @class */ (function (_super) {
        __extends$1(ClientCredentialClient, _super);
        function ClientCredentialClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * Public API to acquire a token with ClientCredential Flow for Confidential clients
         * @param request
         */
        ClientCredentialClient.prototype.acquireToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var cachedAuthenticationResult;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.scopeSet = new ScopeSet(request.scopes || []);
                            if (!request.skipCache) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: return [4 /*yield*/, this.getCachedAuthenticationResult()];
                        case 3:
                            cachedAuthenticationResult = _a.sent();
                            if (!cachedAuthenticationResult) return [3 /*break*/, 4];
                            return [2 /*return*/, cachedAuthenticationResult];
                        case 4: return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                        case 5: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * looks up cache if the tokens are cached already
         */
        ClientCredentialClient.prototype.getCachedAuthenticationResult = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var cachedAccessToken;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cachedAccessToken = this.readAccessTokenFromCache();
                            if (!cachedAccessToken ||
                                TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                                return [2 /*return*/, null];
                            }
                            return [4 /*yield*/, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, {
                                    account: null,
                                    idToken: null,
                                    accessToken: cachedAccessToken,
                                    refreshToken: null,
                                    appMetadata: null
                                }, true)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Reads access token from the cache
         * TODO: Move this call to cacheManager instead
         */
        ClientCredentialClient.prototype.readAccessTokenFromCache = function () {
            var accessTokenFilter = {
                homeAccountId: "",
                environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
                credentialType: CredentialType.ACCESS_TOKEN,
                clientId: this.config.authOptions.clientId,
                realm: this.authority.tenant,
                target: this.scopeSet.printScopesLowerCase()
            };
            var credentialCache = this.cacheManager.getCredentialsFilteredBy(accessTokenFilter);
            var accessTokens = Object.keys(credentialCache.accessTokens).map(function (key) { return credentialCache.accessTokens[key]; });
            if (accessTokens.length < 1) {
                return null;
            }
            else if (accessTokens.length > 1) {
                throw ClientAuthError.createMultipleMatchingTokensInCacheError();
            }
            return accessTokens[0];
        };
        /**
         * Makes a network call to request the token from the service
         * @param request
         * @param authority
         */
        ClientCredentialClient.prototype.executeTokenRequest = function (request, authority) {
            return __awaiter$1(this, void 0, void 0, function () {
                var requestBody, headers, thumbprint, reqTimestamp, response, responseHandler, tokenResponse;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            requestBody = this.createTokenRequestBody(request);
                            headers = this.createDefaultTokenRequestHeaders();
                            thumbprint = {
                                clientId: this.config.authOptions.clientId,
                                authority: request.authority,
                                scopes: request.scopes
                            };
                            reqTimestamp = TimeUtils.nowSeconds();
                            return [4 /*yield*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                        case 1:
                            response = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                            responseHandler.validateTokenResponse(response.body);
                            return [4 /*yield*/, responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request.resourceRequestMethod, request.resourceRequestUri, undefined, request.scopes)];
                        case 2:
                            tokenResponse = _a.sent();
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        /**
         * generate the request to the server in the acceptable format
         * @param request
         */
        ClientCredentialClient.prototype.createTokenRequestBody = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            parameterBuilder.addScopes(request.scopes, false);
            parameterBuilder.addGrantType(GrantType.CLIENT_CREDENTIALS_GRANT);
            var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
            parameterBuilder.addCorrelationId(correlationId);
            if (this.config.clientCredentials.clientSecret) {
                parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
            }
            if (this.config.clientCredentials.clientAssertion) {
                var clientAssertion = this.config.clientCredentials.clientAssertion;
                parameterBuilder.addClientAssertion(clientAssertion.assertion);
                parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
            }
            if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
            }
            return parameterBuilder.createQueryString();
        };
        return ClientCredentialClient;
    }(BaseClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * On-Behalf-Of client
     */
    var OnBehalfOfClient = /** @class */ (function (_super) {
        __extends$1(OnBehalfOfClient, _super);
        function OnBehalfOfClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * Public API to acquire tokens with on behalf of flow
         * @param request
         */
        OnBehalfOfClient.prototype.acquireToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var cachedAuthenticationResult;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.scopeSet = new ScopeSet(request.scopes || []);
                            if (!request.skipCache) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: return [4 /*yield*/, this.getCachedAuthenticationResult(request)];
                        case 3:
                            cachedAuthenticationResult = _a.sent();
                            if (!cachedAuthenticationResult) return [3 /*break*/, 4];
                            return [2 /*return*/, cachedAuthenticationResult];
                        case 4: return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                        case 5: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * look up cache for tokens
         * @param request
         */
        OnBehalfOfClient.prototype.getCachedAuthenticationResult = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var cachedAccessToken, cachedIdToken, idTokenObject, cachedAccount, localAccountId, accountInfo;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cachedAccessToken = this.readAccessTokenFromCache(request);
                            if (!cachedAccessToken ||
                                TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                                return [2 /*return*/, null];
                            }
                            cachedIdToken = this.readIdTokenFromCache(request);
                            cachedAccount = null;
                            if (cachedIdToken) {
                                idTokenObject = new AuthToken(cachedIdToken.secret, this.config.cryptoInterface);
                                localAccountId = idTokenObject.claims.oid ? idTokenObject.claims.oid : idTokenObject.claims.sub;
                                accountInfo = {
                                    homeAccountId: cachedIdToken.homeAccountId,
                                    environment: cachedIdToken.environment,
                                    tenantId: cachedIdToken.realm,
                                    username: Constants.EMPTY_STRING,
                                    localAccountId: localAccountId || ""
                                };
                                cachedAccount = this.readAccountFromCache(accountInfo);
                            }
                            return [4 /*yield*/, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, {
                                    account: cachedAccount,
                                    accessToken: cachedAccessToken,
                                    idToken: cachedIdToken,
                                    refreshToken: null,
                                    appMetadata: null
                                }, true, idTokenObject)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * read access token from cache TODO: CacheManager API should be used here
         * @param request
         */
        OnBehalfOfClient.prototype.readAccessTokenFromCache = function (request) {
            var accessTokenFilter = {
                environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
                credentialType: CredentialType.ACCESS_TOKEN,
                clientId: this.config.authOptions.clientId,
                realm: this.authority.tenant,
                target: this.scopeSet.printScopesLowerCase(),
                oboAssertion: request.oboAssertion
            };
            var credentialCache = this.cacheManager.getCredentialsFilteredBy(accessTokenFilter);
            var accessTokens = Object.keys(credentialCache.accessTokens).map(function (key) { return credentialCache.accessTokens[key]; });
            var numAccessTokens = accessTokens.length;
            if (numAccessTokens < 1) {
                return null;
            }
            else if (numAccessTokens > 1) {
                throw ClientAuthError.createMultipleMatchingTokensInCacheError();
            }
            return accessTokens[0];
        };
        /**
         * read idtoken from cache TODO: CacheManager API should be used here instead
         * @param request
         */
        OnBehalfOfClient.prototype.readIdTokenFromCache = function (request) {
            var idTokenFilter = {
                environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
                credentialType: CredentialType.ID_TOKEN,
                clientId: this.config.authOptions.clientId,
                realm: this.authority.tenant,
                oboAssertion: request.oboAssertion
            };
            var credentialCache = this.cacheManager.getCredentialsFilteredBy(idTokenFilter);
            var idTokens = Object.keys(credentialCache.idTokens).map(function (key) { return credentialCache.idTokens[key]; });
            // When acquiring a token on behalf of an application, there might not be an id token in the cache
            if (idTokens.length < 1) {
                return null;
            }
            return idTokens[0];
        };
        /**
         * read account from cache, TODO: CacheManager API should be used here instead
         * @param account
         */
        OnBehalfOfClient.prototype.readAccountFromCache = function (account) {
            return this.cacheManager.readAccountFromCache(account);
        };
        /**
         * Make a network call to the server requesting credentials
         * @param request
         * @param authority
         */
        OnBehalfOfClient.prototype.executeTokenRequest = function (request, authority) {
            return __awaiter$1(this, void 0, void 0, function () {
                var requestBody, headers, thumbprint, reqTimestamp, response, responseHandler, tokenResponse;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            requestBody = this.createTokenRequestBody(request);
                            headers = this.createDefaultTokenRequestHeaders();
                            thumbprint = {
                                clientId: this.config.authOptions.clientId,
                                authority: request.authority,
                                scopes: request.scopes
                            };
                            reqTimestamp = TimeUtils.nowSeconds();
                            return [4 /*yield*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                        case 1:
                            response = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                            responseHandler.validateTokenResponse(response.body);
                            return [4 /*yield*/, responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request.resourceRequestMethod, request.resourceRequestUri, undefined, request.scopes, request.oboAssertion)];
                        case 2:
                            tokenResponse = _a.sent();
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        /**
         * generate a server request in accepable format
         * @param request
         */
        OnBehalfOfClient.prototype.createTokenRequestBody = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            parameterBuilder.addScopes(request.scopes);
            parameterBuilder.addGrantType(GrantType.JWT_BEARER);
            parameterBuilder.addClientInfo();
            var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
            parameterBuilder.addCorrelationId(correlationId);
            parameterBuilder.addRequestTokenUse(AADServerParamKeys.ON_BEHALF_OF);
            parameterBuilder.addOboAssertion(request.oboAssertion);
            if (this.config.clientCredentials.clientSecret) {
                parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
            }
            if (this.config.clientCredentials.clientAssertion) {
                var clientAssertion = this.config.clientCredentials.clientAssertion;
                parameterBuilder.addClientAssertion(clientAssertion.assertion);
                parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
            }
            return parameterBuilder.createQueryString();
        };
        return OnBehalfOfClient;
    }(BaseClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var SilentFlowClient = /** @class */ (function (_super) {
        __extends$1(SilentFlowClient, _super);
        function SilentFlowClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * Retrieves a token from cache if it is still valid, or uses the cached refresh token to renew
         * the given token and returns the renewed token
         * @param request
         */
        SilentFlowClient.prototype.acquireToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var e_1, refreshTokenClient;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.acquireCachedToken(request)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            e_1 = _a.sent();
                            if (e_1 instanceof ClientAuthError && e_1.errorCode === ClientAuthErrorMessage.tokenRefreshRequired.code) {
                                refreshTokenClient = new RefreshTokenClient(this.config);
                                return [2 /*return*/, refreshTokenClient.acquireTokenByRefreshToken(request)];
                            }
                            else {
                                throw e_1;
                            }
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Retrieves token from cache or throws an error if it must be refreshed.
         * @param request
         */
        SilentFlowClient.prototype.acquireCachedToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var requestScopes, environment, cacheRecord;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Cannot renew token if no request object is given.
                            if (!request) {
                                throw ClientConfigurationError.createEmptyTokenRequestError();
                            }
                            // We currently do not support silent flow for account === null use cases; This will be revisited for confidential flow usecases
                            if (!request.account) {
                                throw ClientAuthError.createNoAccountInSilentRequestError();
                            }
                            requestScopes = new ScopeSet(request.scopes || []);
                            environment = request.authority || this.authority.getPreferredCache();
                            cacheRecord = this.cacheManager.readCacheRecord(request.account, this.config.authOptions.clientId, requestScopes, environment);
                            if (!this.isRefreshRequired(request, cacheRecord.accessToken)) return [3 /*break*/, 1];
                            throw ClientAuthError.createRefreshRequiredError();
                        case 1:
                            if (this.config.serverTelemetryManager) {
                                this.config.serverTelemetryManager.incrementCacheHits();
                            }
                            return [4 /*yield*/, this.generateResultFromCacheRecord(cacheRecord, request.resourceRequestMethod, request.resourceRequestUri)];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Helper function to build response object from the CacheRecord
         * @param cacheRecord
         */
        SilentFlowClient.prototype.generateResultFromCacheRecord = function (cacheRecord, resourceRequestMethod, resourceRequestUri) {
            return __awaiter$1(this, void 0, void 0, function () {
                var idTokenObj;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (cacheRecord.idToken) {
                                idTokenObj = new AuthToken(cacheRecord.idToken.secret, this.config.cryptoInterface);
                            }
                            return [4 /*yield*/, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, cacheRecord, true, idTokenObj, undefined, resourceRequestMethod, resourceRequestUri)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Given a request object and an accessTokenEntity determine if the accessToken needs to be refreshed
         * @param request
         * @param cachedAccessToken
         */
        SilentFlowClient.prototype.isRefreshRequired = function (request, cachedAccessToken) {
            if (request.forceRefresh || request.claims) {
                // Must refresh due to request parameters
                return true;
            }
            else if (!cachedAccessToken || TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                // Must refresh due to expired or non-existent access_token
                return true;
            }
            return false;
        };
        return SilentFlowClient;
    }(BaseClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Oauth2.0 Password grant client
     * Note: We are only supporting public clients for password grant and for purely testing purposes
     */
    var UsernamePasswordClient = /** @class */ (function (_super) {
        __extends$1(UsernamePasswordClient, _super);
        function UsernamePasswordClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * API to acquire a token by passing the username and password to the service in exchage of credentials
         * password_grant
         * @param request
         */
        UsernamePasswordClient.prototype.acquireToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var reqTimestamp, response, responseHandler, tokenResponse;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.info("in acquireToken call");
                            reqTimestamp = TimeUtils.nowSeconds();
                            return [4 /*yield*/, this.executeTokenRequest(this.authority, request)];
                        case 1:
                            response = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                            // Validate response. This function throws a server error if an error is returned by the server.
                            responseHandler.validateTokenResponse(response.body);
                            tokenResponse = responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp);
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        /**
         * Executes POST request to token endpoint
         * @param authority
         * @param request
         */
        UsernamePasswordClient.prototype.executeTokenRequest = function (authority, request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var thumbprint, requestBody, headers;
                return __generator$1(this, function (_a) {
                    thumbprint = {
                        clientId: this.config.authOptions.clientId,
                        authority: authority.canonicalAuthority,
                        scopes: request.scopes
                    };
                    requestBody = this.createTokenRequestBody(request);
                    headers = this.createDefaultTokenRequestHeaders();
                    return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                });
            });
        };
        /**
         * Generates a map for all the params to be sent to the service
         * @param request
         */
        UsernamePasswordClient.prototype.createTokenRequestBody = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            parameterBuilder.addUsername(request.username);
            parameterBuilder.addPassword(request.password);
            parameterBuilder.addScopes(request.scopes);
            parameterBuilder.addGrantType(GrantType.RESOURCE_OWNER_PASSWORD_GRANT);
            parameterBuilder.addClientInfo();
            var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
            parameterBuilder.addCorrelationId(correlationId);
            if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
            }
            return parameterBuilder.createQueryString();
        };
        return UsernamePasswordClient;
    }(BaseClient));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    function isOpenIdConfigResponse(response) {
        return (response.hasOwnProperty("authorization_endpoint") &&
            response.hasOwnProperty("token_endpoint") &&
            response.hasOwnProperty("end_session_endpoint") &&
            response.hasOwnProperty("issuer"));
    }

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Protocol modes supported by MSAL.
     */

    (function (ProtocolMode) {
        ProtocolMode["AAD"] = "AAD";
        ProtocolMode["OIDC"] = "OIDC";
    })(exports.ProtocolMode || (exports.ProtocolMode = {}));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var AuthorityMetadataEntity = /** @class */ (function () {
        function AuthorityMetadataEntity() {
            this.expiresAt = TimeUtils.nowSeconds() + AUTHORITY_METADATA_CONSTANTS.REFRESH_TIME_SECONDS;
        }
        /**
         * Update the entity with new aliases, preferred_cache and preferred_network values
         * @param metadata
         * @param fromNetwork
         */
        AuthorityMetadataEntity.prototype.updateCloudDiscoveryMetadata = function (metadata, fromNetwork) {
            this.aliases = metadata.aliases;
            this.preferred_cache = metadata.preferred_cache;
            this.preferred_network = metadata.preferred_network;
            this.aliasesFromNetwork = fromNetwork;
        };
        /**
         * Update the entity with new endpoints
         * @param metadata
         * @param fromNetwork
         */
        AuthorityMetadataEntity.prototype.updateEndpointMetadata = function (metadata, fromNetwork) {
            this.authorization_endpoint = metadata.authorization_endpoint;
            this.token_endpoint = metadata.token_endpoint;
            this.end_session_endpoint = metadata.end_session_endpoint;
            this.issuer = metadata.issuer;
            this.endpointsFromNetwork = fromNetwork;
        };
        /**
         * Save the authority that was used to create this cache entry
         * @param authority
         */
        AuthorityMetadataEntity.prototype.updateCanonicalAuthority = function (authority) {
            this.canonical_authority = authority;
        };
        /**
         * Reset the exiresAt value
         */
        AuthorityMetadataEntity.prototype.resetExpiresAt = function () {
            this.expiresAt = TimeUtils.nowSeconds() + AUTHORITY_METADATA_CONSTANTS.REFRESH_TIME_SECONDS;
        };
        /**
         * Returns whether or not the data needs to be refreshed
         */
        AuthorityMetadataEntity.prototype.isExpired = function () {
            return this.expiresAt <= TimeUtils.nowSeconds();
        };
        /**
         * Validates an entity: checks for all expected params
         * @param entity
         */
        AuthorityMetadataEntity.isAuthorityMetadataEntity = function (key, entity) {
            if (!entity) {
                return false;
            }
            return (key.indexOf(AUTHORITY_METADATA_CONSTANTS.CACHE_KEY) === 0 &&
                entity.hasOwnProperty("aliases") &&
                entity.hasOwnProperty("preferred_cache") &&
                entity.hasOwnProperty("preferred_network") &&
                entity.hasOwnProperty("canonical_authority") &&
                entity.hasOwnProperty("authorization_endpoint") &&
                entity.hasOwnProperty("token_endpoint") &&
                entity.hasOwnProperty("end_session_endpoint") &&
                entity.hasOwnProperty("issuer") &&
                entity.hasOwnProperty("aliasesFromNetwork") &&
                entity.hasOwnProperty("endpointsFromNetwork") &&
                entity.hasOwnProperty("expiresAt"));
        };
        return AuthorityMetadataEntity;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    function isCloudInstanceDiscoveryResponse(response) {
        return (response.hasOwnProperty("tenant_discovery_endpoint") &&
            response.hasOwnProperty("metadata"));
    }

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * The authority class validates the authority URIs used by the user, and retrieves the OpenID Configuration Data from the
     * endpoint. It will store the pertinent config data in this object for use during token calls.
     */
    var Authority = /** @class */ (function () {
        function Authority(authority, networkInterface, cacheManager, authorityOptions) {
            this.canonicalAuthority = authority;
            this._canonicalAuthority.validateAsUri();
            this.networkInterface = networkInterface;
            this.cacheManager = cacheManager;
            this.authorityOptions = authorityOptions;
        }
        Object.defineProperty(Authority.prototype, "authorityType", {
            // See above for AuthorityType
            get: function () {
                var pathSegments = this.canonicalAuthorityUrlComponents.PathSegments;
                if (pathSegments.length && pathSegments[0].toLowerCase() === Constants.ADFS) {
                    return AuthorityType.Adfs;
                }
                return AuthorityType.Default;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "protocolMode", {
            /**
             * ProtocolMode enum representing the way endpoints are constructed.
             */
            get: function () {
                return this.authorityOptions.protocolMode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "options", {
            /**
             * Returns authorityOptions which can be used to reinstantiate a new authority instance
             */
            get: function () {
                return this.authorityOptions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "canonicalAuthority", {
            /**
             * A URL that is the authority set by the developer
             */
            get: function () {
                return this._canonicalAuthority.urlString;
            },
            /**
             * Sets canonical authority.
             */
            set: function (url) {
                this._canonicalAuthority = new UrlString(url);
                this._canonicalAuthority.validateAsUri();
                this._canonicalAuthorityUrlComponents = null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "canonicalAuthorityUrlComponents", {
            /**
             * Get authority components.
             */
            get: function () {
                if (!this._canonicalAuthorityUrlComponents) {
                    this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
                }
                return this._canonicalAuthorityUrlComponents;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "hostnameAndPort", {
            /**
             * Get hostname and port i.e. login.microsoftonline.com
             */
            get: function () {
                return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "tenant", {
            /**
             * Get tenant for authority.
             */
            get: function () {
                return this.canonicalAuthorityUrlComponents.PathSegments[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "authorizationEndpoint", {
            /**
             * OAuth /authorize endpoint for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    var endpoint = this.replacePath(this.metadata.authorization_endpoint);
                    return this.replaceTenant(endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "tokenEndpoint", {
            /**
             * OAuth /token endpoint for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    var endpoint = this.replacePath(this.metadata.token_endpoint);
                    return this.replaceTenant(endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "deviceCodeEndpoint", {
            get: function () {
                if (this.discoveryComplete()) {
                    var endpoint = this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
                    return this.replaceTenant(endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "endSessionEndpoint", {
            /**
             * OAuth logout endpoint for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    var endpoint = this.replacePath(this.metadata.end_session_endpoint);
                    return this.replaceTenant(endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "selfSignedJwtAudience", {
            /**
             * OAuth issuer for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    var endpoint = this.replacePath(this.metadata.issuer);
                    return this.replaceTenant(endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Replaces tenant in url path with current tenant. Defaults to common.
         * @param urlString
         */
        Authority.prototype.replaceTenant = function (urlString) {
            return urlString.replace(/{tenant}|{tenantid}/g, this.tenant);
        };
        /**
         * Replaces path such as tenant or policy with the current tenant or policy.
         * @param urlString
         */
        Authority.prototype.replacePath = function (urlString) {
            var endpoint = urlString;
            var cachedAuthorityUrl = new UrlString(this.metadata.canonical_authority);
            var cachedAuthorityParts = cachedAuthorityUrl.getUrlComponents().PathSegments;
            var currentAuthorityParts = this.canonicalAuthorityUrlComponents.PathSegments;
            currentAuthorityParts.forEach(function (currentPart, index) {
                var cachedPart = cachedAuthorityParts[index];
                if (currentPart !== cachedPart) {
                    endpoint = endpoint.replace("/" + cachedPart + "/", "/" + currentPart + "/");
                }
            });
            return endpoint;
        };
        Object.defineProperty(Authority.prototype, "defaultOpenIdConfigurationEndpoint", {
            /**
             * The default open id configuration endpoint for any canonical authority.
             */
            get: function () {
                if (this.authorityType === AuthorityType.Adfs || this.protocolMode === exports.ProtocolMode.OIDC) {
                    return this.canonicalAuthority + ".well-known/openid-configuration";
                }
                return this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Boolean that returns whethr or not tenant discovery has been completed.
         */
        Authority.prototype.discoveryComplete = function () {
            return !!this.metadata;
        };
        /**
         * Perform endpoint discovery to discover aliases, preferred_cache, preferred_network
         * and the /authorize, /token and logout endpoints.
         */
        Authority.prototype.resolveEndpointsAsync = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var metadataEntity, cloudDiscoverySource, endpointSource, cacheKey;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            metadataEntity = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
                            if (!metadataEntity) {
                                metadataEntity = new AuthorityMetadataEntity();
                                metadataEntity.updateCanonicalAuthority(this.canonicalAuthority);
                            }
                            return [4 /*yield*/, this.updateCloudDiscoveryMetadata(metadataEntity)];
                        case 1:
                            cloudDiscoverySource = _a.sent();
                            this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, metadataEntity.preferred_network);
                            return [4 /*yield*/, this.updateEndpointMetadata(metadataEntity)];
                        case 2:
                            endpointSource = _a.sent();
                            if (cloudDiscoverySource !== AuthorityMetadataSource.CACHE && endpointSource !== AuthorityMetadataSource.CACHE) {
                                // Reset the expiration time unless both values came from a successful cache lookup
                                metadataEntity.resetExpiresAt();
                                metadataEntity.updateCanonicalAuthority(this.canonicalAuthority);
                            }
                            cacheKey = this.cacheManager.generateAuthorityMetadataCacheKey(metadataEntity.preferred_cache);
                            this.cacheManager.setAuthorityMetadata(cacheKey, metadataEntity);
                            this.metadata = metadataEntity;
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Update AuthorityMetadataEntity with new endpoints and return where the information came from
         * @param metadataEntity
         */
        Authority.prototype.updateEndpointMetadata = function (metadataEntity) {
            return __awaiter$1(this, void 0, void 0, function () {
                var metadata;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            metadata = this.getEndpointMetadataFromConfig();
                            if (metadata) {
                                metadataEntity.updateEndpointMetadata(metadata, false);
                                return [2 /*return*/, AuthorityMetadataSource.CONFIG];
                            }
                            if (this.isAuthoritySameType(metadataEntity) && metadataEntity.endpointsFromNetwork && !metadataEntity.isExpired()) {
                                // No need to update
                                return [2 /*return*/, AuthorityMetadataSource.CACHE];
                            }
                            return [4 /*yield*/, this.getEndpointMetadataFromNetwork()];
                        case 1:
                            metadata = _a.sent();
                            if (metadata) {
                                metadataEntity.updateEndpointMetadata(metadata, true);
                                return [2 /*return*/, AuthorityMetadataSource.NETWORK];
                            }
                            else {
                                throw ClientAuthError.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
                            }
                    }
                });
            });
        };
        /**
         * Compares the number of url components after the domain to determine if the cached authority metadata can be used for the requested authority
         * Protects against same domain different authority such as login.microsoftonline.com/tenant and login.microsoftonline.com/tfp/tenant/policy
         * @param metadataEntity
         */
        Authority.prototype.isAuthoritySameType = function (metadataEntity) {
            var cachedAuthorityUrl = new UrlString(metadataEntity.canonical_authority);
            var cachedParts = cachedAuthorityUrl.getUrlComponents().PathSegments;
            return cachedParts.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
        };
        /**
         * Parse authorityMetadata config option
         */
        Authority.prototype.getEndpointMetadataFromConfig = function () {
            if (this.authorityOptions.authorityMetadata) {
                try {
                    return JSON.parse(this.authorityOptions.authorityMetadata);
                }
                catch (e) {
                    throw ClientConfigurationError.createInvalidAuthorityMetadataError();
                }
            }
            return null;
        };
        /**
         * Gets OAuth endpoints from the given OpenID configuration endpoint.
         */
        Authority.prototype.getEndpointMetadataFromNetwork = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var response, e_1;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.networkInterface.sendGetRequestAsync(this.defaultOpenIdConfigurationEndpoint)];
                        case 1:
                            response = _a.sent();
                            return [2 /*return*/, isOpenIdConfigResponse(response.body) ? response.body : null];
                        case 2:
                            e_1 = _a.sent();
                            return [2 /*return*/, null];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Updates the AuthorityMetadataEntity with new aliases, preferred_network and preferred_cache and returns where the information was retrived from
         * @param cachedMetadata
         * @param newMetadata
         */
        Authority.prototype.updateCloudDiscoveryMetadata = function (metadataEntity) {
            return __awaiter$1(this, void 0, void 0, function () {
                var metadata;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            metadata = this.getCloudDiscoveryMetadataFromConfig();
                            if (metadata) {
                                metadataEntity.updateCloudDiscoveryMetadata(metadata, false);
                                return [2 /*return*/, AuthorityMetadataSource.CONFIG];
                            }
                            // If The cached metadata came from config but that config was not passed to this instance, we must go to the network
                            if (this.isAuthoritySameType(metadataEntity) && metadataEntity.aliasesFromNetwork && !metadataEntity.isExpired()) {
                                // No need to update
                                return [2 /*return*/, AuthorityMetadataSource.CACHE];
                            }
                            return [4 /*yield*/, this.getCloudDiscoveryMetadataFromNetwork()];
                        case 1:
                            metadata = _a.sent();
                            if (metadata) {
                                metadataEntity.updateCloudDiscoveryMetadata(metadata, true);
                                return [2 /*return*/, AuthorityMetadataSource.NETWORK];
                            }
                            else {
                                // Metadata could not be obtained from config, cache or network
                                throw ClientConfigurationError.createUntrustedAuthorityError();
                            }
                    }
                });
            });
        };
        /**
         * Parse cloudDiscoveryMetadata config or check knownAuthorities
         */
        Authority.prototype.getCloudDiscoveryMetadataFromConfig = function () {
            // Check if network response was provided in config
            if (this.authorityOptions.cloudDiscoveryMetadata) {
                try {
                    var parsedResponse = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata);
                    var metadata = Authority.getCloudDiscoveryMetadataFromNetworkResponse(parsedResponse.metadata, this.hostnameAndPort);
                    if (metadata) {
                        return metadata;
                    }
                }
                catch (e) {
                    throw ClientConfigurationError.createInvalidCloudDiscoveryMetadataError();
                }
            }
            // If cloudDiscoveryMetadata is empty or does not contain the host, check knownAuthorities
            if (this.isInKnownAuthorities()) {
                return Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
            }
            return null;
        };
        /**
         * Called to get metadata from network if CloudDiscoveryMetadata was not populated by config
         * @param networkInterface
         */
        Authority.prototype.getCloudDiscoveryMetadataFromNetwork = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var instanceDiscoveryEndpoint, match, response, metadata, e_2;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            instanceDiscoveryEndpoint = "" + Constants.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize";
                            match = null;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.networkInterface.sendGetRequestAsync(instanceDiscoveryEndpoint)];
                        case 2:
                            response = _a.sent();
                            metadata = isCloudInstanceDiscoveryResponse(response.body) ? response.body.metadata : [];
                            match = Authority.getCloudDiscoveryMetadataFromNetworkResponse(metadata, this.hostnameAndPort);
                            return [3 /*break*/, 4];
                        case 3:
                            e_2 = _a.sent();
                            return [2 /*return*/, null];
                        case 4:
                            if (!match) {
                                // Custom Domain scenario, host is trusted because Instance Discovery call succeeded 
                                match = Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
                            }
                            return [2 /*return*/, match];
                    }
                });
            });
        };
        /**
         * Helper function to determine if this host is included in the knownAuthorities config option
         */
        Authority.prototype.isInKnownAuthorities = function () {
            var _this = this;
            var matches = this.authorityOptions.knownAuthorities.filter(function (authority) {
                return UrlString.getDomainFromUrl(authority).toLowerCase() === _this.hostnameAndPort;
            });
            return matches.length > 0;
        };
        /**
         * Creates cloud discovery metadata object from a given host
         * @param host
         */
        Authority.createCloudDiscoveryMetadataFromHost = function (host) {
            return {
                preferred_network: host,
                preferred_cache: host,
                aliases: [host]
            };
        };
        /**
         * Searches instance discovery network response for the entry that contains the host in the aliases list
         * @param response
         * @param authority
         */
        Authority.getCloudDiscoveryMetadataFromNetworkResponse = function (response, authority) {
            for (var i = 0; i < response.length; i++) {
                var metadata = response[i];
                if (metadata.aliases.indexOf(authority) > -1) {
                    return metadata;
                }
            }
            return null;
        };
        /**
         * helper function to generate environment from authority object
         */
        Authority.prototype.getPreferredCache = function () {
            if (this.discoveryComplete()) {
                return this.metadata.preferred_cache;
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        };
        /**
         * Returns whether or not the provided host is an alias of this authority instance
         * @param host
         */
        Authority.prototype.isAlias = function (host) {
            return this.metadata.aliases.indexOf(host) > -1;
        };
        return Authority;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var AuthorityFactory = /** @class */ (function () {
        function AuthorityFactory() {
        }
        /**
         * Create an authority object of the correct type based on the url
         * Performs basic authority validation - checks to see if the authority is of a valid type (i.e. aad, b2c, adfs)
         *
         * Also performs endpoint discovery.
         *
         * @param authorityUri
         * @param networkClient
         * @param protocolMode
         */
        AuthorityFactory.createDiscoveredInstance = function (authorityUri, networkClient, cacheManager, authorityOptions) {
            return __awaiter$1(this, void 0, void 0, function () {
                var acquireTokenAuthority, e_1;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            acquireTokenAuthority = AuthorityFactory.createInstance(authorityUri, networkClient, cacheManager, authorityOptions);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, acquireTokenAuthority.resolveEndpointsAsync()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, acquireTokenAuthority];
                        case 3:
                            e_1 = _a.sent();
                            throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_1);
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Create an authority object of the correct type based on the url
         * Performs basic authority validation - checks to see if the authority is of a valid type (i.e. aad, b2c, adfs)
         *
         * Does not perform endpoint discovery.
         *
         * @param authorityUrl
         * @param networkInterface
         * @param protocolMode
         */
        AuthorityFactory.createInstance = function (authorityUrl, networkInterface, cacheManager, authorityOptions) {
            // Throw error if authority url is empty
            if (StringUtils.isEmpty(authorityUrl)) {
                throw ClientConfigurationError.createUrlEmptyError();
            }
            return new Authority(authorityUrl, networkInterface, cacheManager, authorityOptions);
        };
        return AuthorityFactory;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var ServerTelemetryEntity = /** @class */ (function () {
        function ServerTelemetryEntity() {
            this.failedRequests = [];
            this.errors = [];
            this.cacheHits = 0;
        }
        /**
         * validates if a given cache entry is "Telemetry", parses <key,value>
         * @param key
         * @param entity
         */
        ServerTelemetryEntity.isServerTelemetryEntity = function (key, entity) {
            var validateKey = key.indexOf(SERVER_TELEM_CONSTANTS.CACHE_KEY) === 0;
            var validateEntity = true;
            if (entity) {
                validateEntity =
                    entity.hasOwnProperty("failedRequests") &&
                        entity.hasOwnProperty("errors") &&
                        entity.hasOwnProperty("cacheHits");
            }
            return validateKey && validateEntity;
        };
        return ServerTelemetryEntity;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var ThrottlingEntity = /** @class */ (function () {
        function ThrottlingEntity() {
        }
        /**
         * validates if a given cache entry is "Throttling", parses <key,value>
         * @param key
         * @param entity
         */
        ThrottlingEntity.isThrottlingEntity = function (key, entity) {
            var validateKey = false;
            if (key) {
                validateKey = key.indexOf(ThrottlingConstants.THROTTLING_PREFIX) === 0;
            }
            var validateEntity = true;
            if (entity) {
                validateEntity = entity.hasOwnProperty("throttleTime");
            }
            return validateKey && validateEntity;
        };
        return ThrottlingEntity;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var StubbedNetworkModule = {
        sendGetRequestAsync: function () {
            var notImplErr = "Network interface - sendGetRequestAsync() has not been implemented for the Network interface.";
            return Promise.reject(AuthError.createUnexpectedError(notImplErr));
        },
        sendPostRequestAsync: function () {
            var notImplErr = "Network interface - sendPostRequestAsync() has not been implemented for the Network interface.";
            return Promise.reject(AuthError.createUnexpectedError(notImplErr));
        }
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var ServerTelemetryManager = /** @class */ (function () {
        function ServerTelemetryManager(telemetryRequest, cacheManager) {
            this.cacheManager = cacheManager;
            this.apiId = telemetryRequest.apiId;
            this.correlationId = telemetryRequest.correlationId;
            this.forceRefresh = telemetryRequest.forceRefresh || false;
            this.wrapperSKU = telemetryRequest.wrapperSKU || Constants.EMPTY_STRING;
            this.wrapperVer = telemetryRequest.wrapperVer || Constants.EMPTY_STRING;
            this.telemetryCacheKey = SERVER_TELEM_CONSTANTS.CACHE_KEY + Separators.CACHE_KEY_SEPARATOR + telemetryRequest.clientId;
        }
        /**
         * API to add MSER Telemetry to request
         */
        ServerTelemetryManager.prototype.generateCurrentRequestHeaderValue = function () {
            var forceRefreshInt = this.forceRefresh ? 1 : 0;
            var request = "" + this.apiId + SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR + forceRefreshInt;
            var platformFields = [this.wrapperSKU, this.wrapperVer].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
            return [SERVER_TELEM_CONSTANTS.SCHEMA_VERSION, request, platformFields].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
        };
        /**
         * API to add MSER Telemetry for the last failed request
         */
        ServerTelemetryManager.prototype.generateLastRequestHeaderValue = function () {
            var lastRequests = this.getLastRequests();
            var maxErrors = ServerTelemetryManager.maxErrorsToSend(lastRequests);
            var failedRequests = lastRequests.failedRequests.slice(0, 2 * maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
            var errors = lastRequests.errors.slice(0, maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
            var errorCount = lastRequests.errors.length;
            // Indicate whether this header contains all data or partial data
            var overflow = maxErrors < errorCount ? SERVER_TELEM_CONSTANTS.OVERFLOW_TRUE : SERVER_TELEM_CONSTANTS.OVERFLOW_FALSE;
            var platformFields = [errorCount, overflow].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
            return [SERVER_TELEM_CONSTANTS.SCHEMA_VERSION, lastRequests.cacheHits, failedRequests, errors, platformFields].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
        };
        /**
         * API to cache token failures for MSER data capture
         * @param error
         */
        ServerTelemetryManager.prototype.cacheFailedRequest = function (error) {
            var lastRequests = this.getLastRequests();
            lastRequests.failedRequests.push(this.apiId, this.correlationId);
            if (!StringUtils.isEmpty(error.subError)) {
                lastRequests.errors.push(error.subError);
            }
            else if (!StringUtils.isEmpty(error.errorCode)) {
                lastRequests.errors.push(error.errorCode);
            }
            else if (!!error && error.toString()) {
                lastRequests.errors.push(error.toString());
            }
            else {
                lastRequests.errors.push(SERVER_TELEM_CONSTANTS.UNKNOWN_ERROR);
            }
            this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
            return;
        };
        /**
         * Update server telemetry cache entry by incrementing cache hit counter
         */
        ServerTelemetryManager.prototype.incrementCacheHits = function () {
            var lastRequests = this.getLastRequests();
            lastRequests.cacheHits += 1;
            this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
            return lastRequests.cacheHits;
        };
        /**
         * Get the server telemetry entity from cache or initialize a new one
         */
        ServerTelemetryManager.prototype.getLastRequests = function () {
            var initialValue = new ServerTelemetryEntity();
            var lastRequests = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
            return lastRequests || initialValue;
        };
        /**
         * Remove server telemetry cache entry
         */
        ServerTelemetryManager.prototype.clearTelemetryCache = function () {
            var lastRequests = this.getLastRequests();
            var numErrorsFlushed = ServerTelemetryManager.maxErrorsToSend(lastRequests);
            var errorCount = lastRequests.errors.length;
            if (numErrorsFlushed === errorCount) {
                // All errors were sent on last request, clear Telemetry cache
                this.cacheManager.removeItem(this.telemetryCacheKey);
            }
            else {
                // Partial data was flushed to server, construct a new telemetry cache item with errors that were not flushed
                var serverTelemEntity = new ServerTelemetryEntity();
                serverTelemEntity.failedRequests = lastRequests.failedRequests.slice(numErrorsFlushed * 2); // failedRequests contains 2 items for each error
                serverTelemEntity.errors = lastRequests.errors.slice(numErrorsFlushed);
                this.cacheManager.setServerTelemetry(this.telemetryCacheKey, serverTelemEntity);
            }
        };
        /**
         * Returns the maximum number of errors that can be flushed to the server in the next network request
         * @param serverTelemetryEntity
         */
        ServerTelemetryManager.maxErrorsToSend = function (serverTelemetryEntity) {
            var i;
            var maxErrors = 0;
            var dataSize = 0;
            var errorCount = serverTelemetryEntity.errors.length;
            for (i = 0; i < errorCount; i++) {
                // failedRequests parameter contains pairs of apiId and correlationId, multiply index by 2 to preserve pairs
                var apiId = serverTelemetryEntity.failedRequests[2 * i] || Constants.EMPTY_STRING;
                var correlationId = serverTelemetryEntity.failedRequests[2 * i + 1] || Constants.EMPTY_STRING;
                var errorCode = serverTelemetryEntity.errors[i] || Constants.EMPTY_STRING;
                // Count number of characters that would be added to header, each character is 1 byte. Add 3 at the end to account for separators
                dataSize += apiId.toString().length + correlationId.toString().length + errorCode.length + 3;
                if (dataSize < SERVER_TELEM_CONSTANTS.MAX_HEADER_BYTES) {
                    // Adding this entry to the header would still keep header size below the limit
                    maxErrors += 1;
                }
                else {
                    break;
                }
            }
            return maxErrors;
        };
        return ServerTelemetryManager;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Constants
     */
    var BrowserConstants = {
        /**
         * Interaction in progress cache value
         */
        INTERACTION_IN_PROGRESS_VALUE: "interaction_in_progress",
        /**
         * Invalid grant error code
         */
        INVALID_GRANT_ERROR: "invalid_grant",
        /**
         * Default popup window width
         */
        POPUP_WIDTH: 483,
        /**
         * Default popup window height
         */
        POPUP_HEIGHT: 600,
        /**
         * Default popup monitor poll interval in milliseconds
         */
        POLL_INTERVAL_MS: 50,
        /**
         * Msal-browser SKU
         */
        MSAL_SKU: "msal.js.browser",
    };
    (function (BrowserCacheLocation) {
        BrowserCacheLocation["LocalStorage"] = "localStorage";
        BrowserCacheLocation["SessionStorage"] = "sessionStorage";
        BrowserCacheLocation["MemoryStorage"] = "memoryStorage";
    })(exports.BrowserCacheLocation || (exports.BrowserCacheLocation = {}));
    /**
     * HTTP Request types supported by MSAL.
     */
    var HTTP_REQUEST_TYPE;
    (function (HTTP_REQUEST_TYPE) {
        HTTP_REQUEST_TYPE["GET"] = "GET";
        HTTP_REQUEST_TYPE["POST"] = "POST";
    })(HTTP_REQUEST_TYPE || (HTTP_REQUEST_TYPE = {}));
    /**
     * Temporary cache keys for MSAL, deleted after any request.
     */
    var TemporaryCacheKeys;
    (function (TemporaryCacheKeys) {
        TemporaryCacheKeys["AUTHORITY"] = "authority";
        TemporaryCacheKeys["ACQUIRE_TOKEN_ACCOUNT"] = "acquireToken.account";
        TemporaryCacheKeys["SESSION_STATE"] = "session.state";
        TemporaryCacheKeys["REQUEST_STATE"] = "request.state";
        TemporaryCacheKeys["NONCE_IDTOKEN"] = "nonce.id_token";
        TemporaryCacheKeys["ORIGIN_URI"] = "request.origin";
        TemporaryCacheKeys["RENEW_STATUS"] = "token.renew.status";
        TemporaryCacheKeys["URL_HASH"] = "urlHash";
        TemporaryCacheKeys["REQUEST_PARAMS"] = "request.params";
        TemporaryCacheKeys["SCOPES"] = "scopes";
        TemporaryCacheKeys["INTERACTION_STATUS_KEY"] = "interaction.status";
    })(TemporaryCacheKeys || (TemporaryCacheKeys = {}));
    (function (ApiId) {
        ApiId[ApiId["acquireTokenRedirect"] = 861] = "acquireTokenRedirect";
        ApiId[ApiId["acquireTokenPopup"] = 862] = "acquireTokenPopup";
        ApiId[ApiId["ssoSilent"] = 863] = "ssoSilent";
        ApiId[ApiId["acquireTokenSilent_authCode"] = 864] = "acquireTokenSilent_authCode";
        ApiId[ApiId["handleRedirectPromise"] = 865] = "handleRedirectPromise";
        ApiId[ApiId["acquireTokenSilent_silentFlow"] = 61] = "acquireTokenSilent_silentFlow";
        ApiId[ApiId["logout"] = 961] = "logout";
    })(exports.ApiId || (exports.ApiId = {}));
    (function (InteractionType) {
        InteractionType["Redirect"] = "redirect";
        InteractionType["Popup"] = "popup";
        InteractionType["Silent"] = "silent";
    })(exports.InteractionType || (exports.InteractionType = {}));
    (function (InteractionStatus) {
        /**
         * Initial status before interaction occurs
         */
        InteractionStatus["Startup"] = "startup";
        /**
         * Status set when all login calls occuring
         */
        InteractionStatus["Login"] = "login";
        /**
         * Status set when logout call occuring
         */
        InteractionStatus["Logout"] = "logout";
        /**
         * Status set for acquireToken calls
         */
        InteractionStatus["AcquireToken"] = "acquireToken";
        /**
         * Status set for ssoSilent calls
         */
        InteractionStatus["SsoSilent"] = "ssoSilent";
        /**
         * Status set when handleRedirect in progress
         */
        InteractionStatus["HandleRedirect"] = "handleRedirect";
        /**
         * Status set when interaction is complete
         */
        InteractionStatus["None"] = "none";
    })(exports.InteractionStatus || (exports.InteractionStatus = {}));
    var DEFAULT_REQUEST = {
        scopes: OIDC_DEFAULT_SCOPES
    };
    /**
     * JWK Key Format string (Type MUST be defined for window crypto APIs)
     */
    var KEY_FORMAT_JWK = "jwk";
    (function (WrapperSKU) {
        WrapperSKU["React"] = "@azure/msal-react";
        WrapperSKU["Angular"] = "@azure/msal-angular";
    })(exports.WrapperSKU || (exports.WrapperSKU = {}));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Utility class for math specific functions in browser.
     */
    var MathUtils = /** @class */ (function () {
        function MathUtils() {
        }
        /**
         * Decimal to Hex
         *
         * @param num
         */
        MathUtils.decimalToHex = function (num) {
            var hex = num.toString(16);
            while (hex.length < 2) {
                hex = "0" + hex;
            }
            return hex;
        };
        return MathUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var GuidGenerator = /** @class */ (function () {
        function GuidGenerator(cryptoObj) {
            this.cryptoObj = cryptoObj;
        }
        /*
         * RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
         * pseudo-random numbers.
         * The algorithm is as follows:
         *     Set the two most significant bits (bits 6 and 7) of the
         *        clock_seq_hi_and_reserved to zero and one, respectively.
         *     Set the four most significant bits (bits 12 through 15) of the
         *        time_hi_and_version field to the 4-bit version number from
         *        Section 4.1.3. Version4
         *     Set all the other bits to randomly (or pseudo-randomly) chosen
         *     values.
         * UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
         * time-low               = 4hexOctet
         * time-mid               = 2hexOctet
         * time-high-and-version  = 2hexOctet
         * clock-seq-and-reserved = hexOctet:
         * clock-seq-low          = hexOctet
         * node                   = 6hexOctet
         * Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
         * y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
         * y values are 8, 9, A, B
         */
        GuidGenerator.prototype.generateGuid = function () {
            try {
                var buffer = new Uint8Array(16);
                this.cryptoObj.getRandomValues(buffer);
                // buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
                buffer[6] |= 0x40; // buffer[6] | 01000000 will set the 6 bit to 1.
                buffer[6] &= 0x4f; // buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
                // buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
                buffer[8] |= 0x80; // buffer[8] | 10000000 will set the 7 bit to 1.
                buffer[8] &= 0xbf; // buffer[8] & 10111111 will set the 6 bit to 0.
                return MathUtils.decimalToHex(buffer[0]) + MathUtils.decimalToHex(buffer[1])
                    + MathUtils.decimalToHex(buffer[2]) + MathUtils.decimalToHex(buffer[3])
                    + "-" + MathUtils.decimalToHex(buffer[4]) + MathUtils.decimalToHex(buffer[5])
                    + "-" + MathUtils.decimalToHex(buffer[6]) + MathUtils.decimalToHex(buffer[7])
                    + "-" + MathUtils.decimalToHex(buffer[8]) + MathUtils.decimalToHex(buffer[9])
                    + "-" + MathUtils.decimalToHex(buffer[10]) + MathUtils.decimalToHex(buffer[11])
                    + MathUtils.decimalToHex(buffer[12]) + MathUtils.decimalToHex(buffer[13])
                    + MathUtils.decimalToHex(buffer[14]) + MathUtils.decimalToHex(buffer[15]);
            }
            catch (err) {
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
        /**
         * verifies if a string is  GUID
         * @param guid
         */
        GuidGenerator.isGuid = function (guid) {
            var regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
            return regexGuid.test(guid);
        };
        return GuidGenerator;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Utility functions for strings in a browser. See here for implementation details:
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_JavaScript's_UTF-16_%3E_UTF-8_%3E_base64
     */
    var BrowserStringUtils = /** @class */ (function () {
        function BrowserStringUtils() {
        }
        /**
         * Converts string to Uint8Array
         * @param sDOMStr
         */
        BrowserStringUtils.stringToUtf8Arr = function (sDOMStr) {
            var nChr;
            var nArrLen = 0;
            var nStrLen = sDOMStr.length;
            /* mapping... */
            for (var nMapIdx = 0; nMapIdx < nStrLen; nMapIdx++) {
                nChr = sDOMStr.charCodeAt(nMapIdx);
                nArrLen += nChr < 0x80 ? 1 : nChr < 0x800 ? 2 : nChr < 0x10000 ? 3 : nChr < 0x200000 ? 4 : nChr < 0x4000000 ? 5 : 6;
            }
            var aBytes = new Uint8Array(nArrLen);
            /* transcription... */
            for (var nIdx = 0, nChrIdx = 0; nIdx < nArrLen; nChrIdx++) {
                nChr = sDOMStr.charCodeAt(nChrIdx);
                if (nChr < 128) {
                    /* one byte */
                    aBytes[nIdx++] = nChr;
                }
                else if (nChr < 0x800) {
                    /* two bytes */
                    aBytes[nIdx++] = 192 + (nChr >>> 6);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
                else if (nChr < 0x10000) {
                    /* three bytes */
                    aBytes[nIdx++] = 224 + (nChr >>> 12);
                    aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
                else if (nChr < 0x200000) {
                    /* four bytes */
                    aBytes[nIdx++] = 240 + (nChr >>> 18);
                    aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
                else if (nChr < 0x4000000) {
                    /* five bytes */
                    aBytes[nIdx++] = 248 + (nChr >>> 24);
                    aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
                else /* if (nChr <= 0x7fffffff) */ {
                    /* six bytes */
                    aBytes[nIdx++] = 252 + (nChr >>> 30);
                    aBytes[nIdx++] = 128 + (nChr >>> 24 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
            }
            return aBytes;
        };
        /**
         * Converst string to ArrayBuffer
         * @param dataString
         */
        BrowserStringUtils.stringToArrayBuffer = function (dataString) {
            var data = new ArrayBuffer(dataString.length);
            var dataView = new Uint8Array(data);
            for (var i = 0; i < dataString.length; i++) {
                dataView[i] = dataString.charCodeAt(i);
            }
            return data;
        };
        /**
         * Converts Uint8Array to a string
         * @param aBytes
         */
        BrowserStringUtils.utf8ArrToString = function (aBytes) {
            var sView = "";
            for (var nPart = void 0, nLen = aBytes.length, nIdx = 0; nIdx < nLen; nIdx++) {
                nPart = aBytes[nIdx];
                sView += String.fromCharCode(nPart > 251 && nPart < 254 && nIdx + 5 < nLen ? /* six bytes */
                    /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
                    (nPart - 252) * 1073741824 + (aBytes[++nIdx] - 128 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                    : nPart > 247 && nPart < 252 && nIdx + 4 < nLen ? /* five bytes */
                        (nPart - 248 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                        : nPart > 239 && nPart < 248 && nIdx + 3 < nLen ? /* four bytes */
                            (nPart - 240 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                            : nPart > 223 && nPart < 240 && nIdx + 2 < nLen ? /* three bytes */
                                (nPart - 224 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                                : nPart > 191 && nPart < 224 && nIdx + 1 < nLen ? /* two bytes */
                                    (nPart - 192 << 6) + aBytes[++nIdx] - 128
                                    : /* nPart < 127 ? */ /* one byte */
                                        nPart);
            }
            return sView;
        };
        return BrowserStringUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Class which exposes APIs to encode plaintext to base64 encoded string. See here for implementation details:
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_JavaScript's_UTF-16_%3E_UTF-8_%3E_base64
     */
    var Base64Encode = /** @class */ (function () {
        function Base64Encode() {
        }
        /**
         * Returns URL Safe b64 encoded string from a plaintext string.
         * @param input
         */
        Base64Encode.prototype.urlEncode = function (input) {
            return encodeURIComponent(this.encode(input)
                .replace(/=/g, "")
                .replace(/\+/g, "-")
                .replace(/\//g, "_"));
        };
        /**
         * Returns URL Safe b64 encoded string from an int8Array.
         * @param inputArr
         */
        Base64Encode.prototype.urlEncodeArr = function (inputArr) {
            return this.base64EncArr(inputArr)
                .replace(/=/g, "")
                .replace(/\+/g, "-")
                .replace(/\//g, "_");
        };
        /**
         * Returns b64 encoded string from plaintext string.
         * @param input
         */
        Base64Encode.prototype.encode = function (input) {
            var inputUtf8Arr = BrowserStringUtils.stringToUtf8Arr(input);
            return this.base64EncArr(inputUtf8Arr);
        };
        /**
         * Base64 encode byte array
         * @param aBytes
         */
        Base64Encode.prototype.base64EncArr = function (aBytes) {
            var eqLen = (3 - (aBytes.length % 3)) % 3;
            var sB64Enc = "";
            for (var nMod3 = void 0, nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
                nMod3 = nIdx % 3;
                /* Uncomment the following line in order to split the output in lines 76-character long: */
                /*
                 *if (nIdx > 0 && (nIdx * 4 / 3) % 76 === 0) { sB64Enc += "\r\n"; }
                 */
                nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
                if (nMod3 === 2 || aBytes.length - nIdx === 1) {
                    sB64Enc += String.fromCharCode(this.uint6ToB64(nUint24 >>> 18 & 63), this.uint6ToB64(nUint24 >>> 12 & 63), this.uint6ToB64(nUint24 >>> 6 & 63), this.uint6ToB64(nUint24 & 63));
                    nUint24 = 0;
                }
            }
            return eqLen === 0 ? sB64Enc : sB64Enc.substring(0, sB64Enc.length - eqLen) + (eqLen === 1 ? "=" : "==");
        };
        /**
         * Base64 string to array encoding helper
         * @param nUint6
         */
        Base64Encode.prototype.uint6ToB64 = function (nUint6) {
            return nUint6 < 26 ?
                nUint6 + 65
                : nUint6 < 52 ?
                    nUint6 + 71
                    : nUint6 < 62 ?
                        nUint6 - 4
                        : nUint6 === 62 ?
                            43
                            : nUint6 === 63 ?
                                47
                                :
                                    65;
        };
        return Base64Encode;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Class which exposes APIs to decode base64 strings to plaintext. See here for implementation details:
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_JavaScript's_UTF-16_%3E_UTF-8_%3E_base64
     */
    var Base64Decode = /** @class */ (function () {
        function Base64Decode() {
        }
        /**
         * Returns a URL-safe plaintext decoded string from b64 encoded input.
         * @param input
         */
        Base64Decode.prototype.decode = function (input) {
            var encodedString = input.replace(/-/g, "+").replace(/_/g, "/");
            switch (encodedString.length % 4) {
                case 0:
                    break;
                case 2:
                    encodedString += "==";
                    break;
                case 3:
                    encodedString += "=";
                    break;
                default:
                    throw new Error("Invalid base64 string");
            }
            var inputUtf8Arr = this.base64DecToArr(encodedString);
            return BrowserStringUtils.utf8ArrToString(inputUtf8Arr);
        };
        /**
         * Decodes base64 into Uint8Array
         * @param base64String
         * @param nBlockSize
         */
        Base64Decode.prototype.base64DecToArr = function (base64String, nBlockSize) {
            var sB64Enc = base64String.replace(/[^A-Za-z0-9\+\/]/g, "");
            var nInLen = sB64Enc.length;
            var nOutLen = nBlockSize ? Math.ceil((nInLen * 3 + 1 >>> 2) / nBlockSize) * nBlockSize : nInLen * 3 + 1 >>> 2;
            var aBytes = new Uint8Array(nOutLen);
            for (var nMod3 = void 0, nMod4 = void 0, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                nMod4 = nInIdx & 3;
                nUint24 |= this.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                if (nMod4 === 3 || nInLen - nInIdx === 1) {
                    for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                        aBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                    }
                    nUint24 = 0;
                }
            }
            return aBytes;
        };
        /**
         * Base64 string to array decoding helper
         * @param charNum
         */
        Base64Decode.prototype.b64ToUint6 = function (charNum) {
            return charNum > 64 && charNum < 91 ?
                charNum - 65
                : charNum > 96 && charNum < 123 ?
                    charNum - 71
                    : charNum > 47 && charNum < 58 ?
                        charNum + 4
                        : charNum === 43 ?
                            62
                            : charNum === 47 ?
                                63
                                :
                                    0;
        };
        return Base64Decode;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * BrowserAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var BrowserAuthErrorMessage = {
        pkceNotGenerated: {
            code: "pkce_not_created",
            desc: "The PKCE code challenge and verifier could not be generated."
        },
        cryptoDoesNotExist: {
            code: "crypto_nonexistent",
            desc: "The crypto object or function is not available."
        },
        httpMethodNotImplementedError: {
            code: "http_method_not_implemented",
            desc: "The HTTP method given has not been implemented in this library."
        },
        emptyNavigateUriError: {
            code: "empty_navigate_uri",
            desc: "Navigation URI is empty. Please check stack trace for more info."
        },
        hashEmptyError: {
            code: "hash_empty_error",
            desc: "Hash value cannot be processed because it is empty."
        },
        hashDoesNotContainStateError: {
            code: "no_state_in_hash",
            desc: "Hash does not contain state. Please verify that the request originated from msal."
        },
        unableToParseStateError: {
            code: "unable_to_parse_state",
            desc: "Unable to parse state. Please verify that the request originated from msal."
        },
        stateInteractionTypeMismatchError: {
            code: "state_interaction_type_mismatch",
            desc: "Hash contains state but the interaction type does not match the caller."
        },
        interactionInProgress: {
            code: "interaction_in_progress",
            desc: "Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API.  For more visit: aka.ms/msaljs/browser-errors."
        },
        popUpWindowError: {
            code: "popup_window_error",
            desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
        },
        emptyWindowError: {
            code: "empty_window_error",
            desc: "window.open returned null or undefined window object."
        },
        userCancelledError: {
            code: "user_cancelled",
            desc: "User cancelled the flow."
        },
        monitorPopupTimeoutError: {
            code: "monitor_window_timeout",
            desc: "Token acquisition in popup failed due to timeout."
        },
        monitorIframeTimeoutError: {
            code: "monitor_window_timeout",
            desc: "Token acquisition in iframe failed due to timeout."
        },
        redirectInIframeError: {
            code: "redirect_in_iframe",
            desc: "Code flow is not supported inside an iframe. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs."
        },
        blockTokenRequestsInHiddenIframeError: {
            code: "block_iframe_reload",
            desc: "Request was blocked inside an iframe because MSAL detected an authentication response. Please ensure monitorWindowForHash was called."
        },
        iframeClosedPrematurelyError: {
            code: "iframe_closed_prematurely",
            desc: "The iframe being monitored was closed prematurely."
        },
        silentSSOInsufficientInfoError: {
            code: "silent_sso_error",
            desc: "Silent SSO could not be completed - insufficient information was provided. Please provide either a loginHint or sid."
        },
        noAccountError: {
            code: "no_account_error",
            desc: "No account object provided to acquireTokenSilent and no active account has been set. Please call setActiveAccount or provide an account on the request."
        },
        silentPromptValueError: {
            code: "silent_prompt_value_error",
            desc: "The value given for the prompt value is not valid for silent requests - must be set to 'none'."
        },
        noTokenRequestCacheError: {
            code: "no_token_request_cache_error",
            desc: "No token request in found in cache."
        },
        unableToParseTokenRequestCacheError: {
            code: "unable_to_parse_token_request_cache_error",
            desc: "The cached token request could not be parsed."
        },
        noCachedAuthorityError: {
            code: "no_cached_authority_error",
            desc: "No cached authority found."
        },
        authRequestNotSet: {
            code: "auth_request_not_set_error",
            desc: "Auth Request not set. Please ensure initiateAuthRequest was called from the InteractionHandler"
        },
        invalidCacheType: {
            code: "invalid_cache_type",
            desc: "Invalid cache type"
        },
        notInBrowserEnvironment: {
            code: "non_browser_environment",
            desc: "Login and token requests are not supported in non-browser environments."
        },
        databaseNotOpen: {
            code: "database_not_open",
            desc: "Database is not open!"
        }
    };
    /**
     * Browser library error class thrown by the MSAL.js library for SPAs
     */
    var BrowserAuthError = /** @class */ (function (_super) {
        __extends(BrowserAuthError, _super);
        function BrowserAuthError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            Object.setPrototypeOf(_this, BrowserAuthError.prototype);
            _this.name = "BrowserAuthError";
            return _this;
        }
        /**
         * Creates an error thrown when PKCE is not implemented.
         * @param errDetail
         */
        BrowserAuthError.createPkceNotGeneratedError = function (errDetail) {
            return new BrowserAuthError(BrowserAuthErrorMessage.pkceNotGenerated.code, BrowserAuthErrorMessage.pkceNotGenerated.desc + " Detail:" + errDetail);
        };
        /**
         * Creates an error thrown when the crypto object is unavailable.
         * @param errDetail
         */
        BrowserAuthError.createCryptoNotAvailableError = function (errDetail) {
            return new BrowserAuthError(BrowserAuthErrorMessage.cryptoDoesNotExist.code, BrowserAuthErrorMessage.cryptoDoesNotExist.desc + " Detail:" + errDetail);
        };
        /**
         * Creates an error thrown when an HTTP method hasn't been implemented by the browser class.
         * @param method
         */
        BrowserAuthError.createHttpMethodNotImplementedError = function (method) {
            return new BrowserAuthError(BrowserAuthErrorMessage.httpMethodNotImplementedError.code, BrowserAuthErrorMessage.httpMethodNotImplementedError.desc + " Given Method: " + method);
        };
        /**
         * Creates an error thrown when the navigation URI is empty.
         */
        BrowserAuthError.createEmptyNavigationUriError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.emptyNavigateUriError.code, BrowserAuthErrorMessage.emptyNavigateUriError.desc);
        };
        /**
         * Creates an error thrown when the hash string value is unexpectedly empty.
         * @param hashValue
         */
        BrowserAuthError.createEmptyHashError = function (hashValue) {
            return new BrowserAuthError(BrowserAuthErrorMessage.hashEmptyError.code, BrowserAuthErrorMessage.hashEmptyError.desc + " Given Url: " + hashValue);
        };
        /**
         * Creates an error thrown when the hash string value is unexpectedly empty.
         */
        BrowserAuthError.createHashDoesNotContainStateError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.hashDoesNotContainStateError.code, BrowserAuthErrorMessage.hashDoesNotContainStateError.desc);
        };
        /**
         * Creates an error thrown when the hash string value is unexpectedly empty.
         */
        BrowserAuthError.createUnableToParseStateError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.unableToParseStateError.code, BrowserAuthErrorMessage.unableToParseStateError.desc);
        };
        /**
         * Creates an error thrown when the state value in the hash does not match the interaction type of the API attempting to consume it.
         */
        BrowserAuthError.createStateInteractionTypeMismatchError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.stateInteractionTypeMismatchError.code, BrowserAuthErrorMessage.stateInteractionTypeMismatchError.desc);
        };
        /**
         * Creates an error thrown when a browser interaction (redirect or popup) is in progress.
         */
        BrowserAuthError.createInteractionInProgressError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.interactionInProgress.code, BrowserAuthErrorMessage.interactionInProgress.desc);
        };
        /**
         * Creates an error thrown when the popup window could not be opened.
         * @param errDetail
         */
        BrowserAuthError.createPopupWindowError = function (errDetail) {
            var errorMessage = BrowserAuthErrorMessage.popUpWindowError.desc;
            errorMessage = !StringUtils.isEmpty(errDetail) ? errorMessage + " Details: " + errDetail : errorMessage;
            return new BrowserAuthError(BrowserAuthErrorMessage.popUpWindowError.code, errorMessage);
        };
        /**
         * Creates an error thrown when window.open returns an empty window object.
         * @param errDetail
         */
        BrowserAuthError.createEmptyWindowCreatedError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.emptyWindowError.code, BrowserAuthErrorMessage.emptyWindowError.desc);
        };
        /**
         * Creates an error thrown when the user closes a popup.
         */
        BrowserAuthError.createUserCancelledError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.userCancelledError.code, BrowserAuthErrorMessage.userCancelledError.desc);
        };
        /**
         * Creates an error thrown when monitorPopupFromHash times out for a given popup.
         */
        BrowserAuthError.createMonitorPopupTimeoutError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.monitorPopupTimeoutError.code, BrowserAuthErrorMessage.monitorPopupTimeoutError.desc);
        };
        /**
         * Creates an error thrown when monitorIframeFromHash times out for a given iframe.
         */
        BrowserAuthError.createMonitorIframeTimeoutError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.monitorIframeTimeoutError.code, BrowserAuthErrorMessage.monitorIframeTimeoutError.desc);
        };
        /**
         * Creates an error thrown when navigateWindow is called inside an iframe.
         * @param windowParentCheck
         */
        BrowserAuthError.createRedirectInIframeError = function (windowParentCheck) {
            return new BrowserAuthError(BrowserAuthErrorMessage.redirectInIframeError.code, BrowserAuthErrorMessage.redirectInIframeError.desc + " (window.parent !== window) => " + windowParentCheck);
        };
        /**
         * Creates an error thrown when an auth reload is done inside an iframe.
         */
        BrowserAuthError.createBlockReloadInHiddenIframeError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.blockTokenRequestsInHiddenIframeError.code, BrowserAuthErrorMessage.blockTokenRequestsInHiddenIframeError.desc);
        };
        /**
         * Creates an error thrown when an iframe is found to be closed before the timeout is reached.
         */
        BrowserAuthError.createIframeClosedPrematurelyError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.iframeClosedPrematurelyError.code, BrowserAuthErrorMessage.iframeClosedPrematurelyError.desc);
        };
        /**
         * Creates an error thrown when the login_hint, sid or account object is not provided in the ssoSilent API.
         */
        BrowserAuthError.createSilentSSOInsufficientInfoError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.silentSSOInsufficientInfoError.code, BrowserAuthErrorMessage.silentSSOInsufficientInfoError.desc);
        };
        /**
         * Creates an error thrown when the account object is not provided in the acquireTokenSilent API.
         */
        BrowserAuthError.createNoAccountError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.noAccountError.code, BrowserAuthErrorMessage.noAccountError.desc);
        };
        /**
         * Creates an error thrown when a given prompt value is invalid for silent requests.
         */
        BrowserAuthError.createSilentPromptValueError = function (givenPrompt) {
            return new BrowserAuthError(BrowserAuthErrorMessage.silentPromptValueError.code, BrowserAuthErrorMessage.silentPromptValueError.desc + " Given value: " + givenPrompt);
        };
        /**
         * Creates an error thrown when the cached token request could not be retrieved from the cache
         */
        BrowserAuthError.createUnableToParseTokenRequestCacheError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.unableToParseTokenRequestCacheError.code, BrowserAuthErrorMessage.unableToParseTokenRequestCacheError.desc);
        };
        /**
         * Creates an error thrown when the token request could not be retrieved from the cache
         */
        BrowserAuthError.createNoTokenRequestCacheError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.noTokenRequestCacheError.code, BrowserAuthErrorMessage.noTokenRequestCacheError.desc);
        };
        /**
         * Creates an error thrown when handleCodeResponse is called before initiateAuthRequest (InteractionHandler)
         */
        BrowserAuthError.createAuthRequestNotSetError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.authRequestNotSet.code, BrowserAuthErrorMessage.authRequestNotSet.desc);
        };
        /**
         * Creates an error thrown when the authority could not be retrieved from the cache
         */
        BrowserAuthError.createNoCachedAuthorityError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.noCachedAuthorityError.code, BrowserAuthErrorMessage.noCachedAuthorityError.desc);
        };
        /**
         * Creates an error thrown if cache type is invalid.
         */
        BrowserAuthError.createInvalidCacheTypeError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.invalidCacheType.code, "" + BrowserAuthErrorMessage.invalidCacheType.desc);
        };
        /**
         * Create an error thrown when login and token requests are made from a non-browser environment
         */
        BrowserAuthError.createNonBrowserEnvironmentError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.notInBrowserEnvironment.code, BrowserAuthErrorMessage.notInBrowserEnvironment.desc);
        };
        /**
         * Create an error thrown when indexDB database is not open
         */
        BrowserAuthError.createDatabaseNotOpenError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.databaseNotOpen.code, BrowserAuthErrorMessage.databaseNotOpen.desc);
        };
        return BrowserAuthError;
    }(AuthError));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    // Constant byte array length
    var RANDOM_BYTE_ARR_LENGTH = 32;
    /**
     * Class which exposes APIs to generate PKCE codes and code verifiers.
     */
    var PkceGenerator = /** @class */ (function () {
        function PkceGenerator(cryptoObj) {
            this.base64Encode = new Base64Encode();
            this.cryptoObj = cryptoObj;
        }
        /**
         * Generates PKCE Codes. See the RFC for more information: https://tools.ietf.org/html/rfc7636
         */
        PkceGenerator.prototype.generateCodes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var codeVerifier, codeChallenge;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            codeVerifier = this.generateCodeVerifier();
                            return [4 /*yield*/, this.generateCodeChallengeFromVerifier(codeVerifier)];
                        case 1:
                            codeChallenge = _a.sent();
                            return [2 /*return*/, {
                                    verifier: codeVerifier,
                                    challenge: codeChallenge
                                }];
                    }
                });
            });
        };
        /**
         * Generates a random 32 byte buffer and returns the base64
         * encoded string to be used as a PKCE Code Verifier
         */
        PkceGenerator.prototype.generateCodeVerifier = function () {
            try {
                // Generate random values as utf-8
                var buffer = new Uint8Array(RANDOM_BYTE_ARR_LENGTH);
                this.cryptoObj.getRandomValues(buffer);
                // encode verifier as base64
                var pkceCodeVerifierB64 = this.base64Encode.urlEncodeArr(buffer);
                return pkceCodeVerifierB64;
            }
            catch (e) {
                throw BrowserAuthError.createPkceNotGeneratedError(e);
            }
        };
        /**
         * Creates a base64 encoded PKCE Code Challenge string from the
         * hash created from the PKCE Code Verifier supplied
         */
        PkceGenerator.prototype.generateCodeChallengeFromVerifier = function (pkceCodeVerifier) {
            return __awaiter(this, void 0, void 0, function () {
                var pkceHashedCodeVerifier, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.cryptoObj.sha256Digest(pkceCodeVerifier)];
                        case 1:
                            pkceHashedCodeVerifier = _a.sent();
                            // encode hash as base64
                            return [2 /*return*/, this.base64Encode.urlEncodeArr(new Uint8Array(pkceHashedCodeVerifier))];
                        case 2:
                            e_1 = _a.sent();
                            throw BrowserAuthError.createPkceNotGeneratedError(e_1);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return PkceGenerator;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * See here for more info on RsaHashedKeyGenParams: https://developer.mozilla.org/en-US/docs/Web/API/RsaHashedKeyGenParams
     */
    // RSA KeyGen Algorithm
    var PKCS1_V15_KEYGEN_ALG = "RSASSA-PKCS1-v1_5";
    // SHA-256 hashing algorithm
    var S256_HASH_ALG = "SHA-256";
    // MOD length for PoP tokens
    var MODULUS_LENGTH = 2048;
    // Public Exponent
    var PUBLIC_EXPONENT = new Uint8Array([0x01, 0x00, 0x01]);
    /**
     * This class implements functions used by the browser library to perform cryptography operations such as
     * hashing and encoding. It also has helper functions to validate the availability of specific APIs.
     */
    var BrowserCrypto = /** @class */ (function () {
        function BrowserCrypto() {
            if (!(this.hasCryptoAPI())) {
                throw BrowserAuthError.createCryptoNotAvailableError("Browser crypto or msCrypto object not available.");
            }
            this._keygenAlgorithmOptions = {
                name: PKCS1_V15_KEYGEN_ALG,
                hash: S256_HASH_ALG,
                modulusLength: MODULUS_LENGTH,
                publicExponent: PUBLIC_EXPONENT
            };
        }
        /**
         * Returns a sha-256 hash of the given dataString as an ArrayBuffer.
         * @param dataString
         */
        BrowserCrypto.prototype.sha256Digest = function (dataString) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    data = BrowserStringUtils.stringToUtf8Arr(dataString);
                    return [2 /*return*/, this.hasIECrypto() ? this.getMSCryptoDigest(S256_HASH_ALG, data) : this.getSubtleCryptoDigest(S256_HASH_ALG, data)];
                });
            });
        };
        /**
         * Populates buffer with cryptographically random values.
         * @param dataBuffer
         */
        BrowserCrypto.prototype.getRandomValues = function (dataBuffer) {
            var cryptoObj = window["msCrypto"] || window.crypto;
            if (!cryptoObj.getRandomValues) {
                throw BrowserAuthError.createCryptoNotAvailableError("getRandomValues does not exist.");
            }
            cryptoObj.getRandomValues(dataBuffer);
        };
        /**
         * Generates a keypair based on current keygen algorithm config.
         * @param extractable
         * @param usages
         */
        BrowserCrypto.prototype.generateKeyPair = function (extractable, usages) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (this.hasIECrypto() ?
                            this.msCryptoGenerateKey(extractable, usages)
                            : window.crypto.subtle.generateKey(this._keygenAlgorithmOptions, extractable, usages))];
                });
            });
        };
        /**
         * Export key as Json Web Key (JWK)
         * @param key
         * @param format
         */
        BrowserCrypto.prototype.exportJwk = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.hasIECrypto() ? this.msCryptoExportJwk(key) : window.crypto.subtle.exportKey(KEY_FORMAT_JWK, key)];
                });
            });
        };
        /**
         * Imports key as Json Web Key (JWK), can set extractable and usages.
         * @param key
         * @param format
         * @param extractable
         * @param usages
         */
        BrowserCrypto.prototype.importJwk = function (key, extractable, usages) {
            return __awaiter(this, void 0, void 0, function () {
                var keyString, keyBuffer;
                return __generator(this, function (_a) {
                    keyString = BrowserCrypto.getJwkString(key);
                    keyBuffer = BrowserStringUtils.stringToArrayBuffer(keyString);
                    return [2 /*return*/, this.hasIECrypto() ?
                            this.msCryptoImportKey(keyBuffer, extractable, usages)
                            : window.crypto.subtle.importKey(KEY_FORMAT_JWK, key, this._keygenAlgorithmOptions, extractable, usages)];
                });
            });
        };
        /**
         * Signs given data with given key
         * @param key
         * @param data
         */
        BrowserCrypto.prototype.sign = function (key, data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.hasIECrypto() ?
                            this.msCryptoSign(key, data)
                            : window.crypto.subtle.sign(this._keygenAlgorithmOptions, key, data)];
                });
            });
        };
        /**
         * Check whether IE crypto or other browser cryptography is available.
         */
        BrowserCrypto.prototype.hasCryptoAPI = function () {
            return this.hasIECrypto() || this.hasBrowserCrypto();
        };
        /**
         * Checks whether IE crypto (AKA msCrypto) is available.
         */
        BrowserCrypto.prototype.hasIECrypto = function () {
            return "msCrypto" in window;
        };
        /**
         * Check whether browser crypto is available.
         */
        BrowserCrypto.prototype.hasBrowserCrypto = function () {
            return "crypto" in window;
        };
        /**
         * Helper function for SHA digest.
         * @param algorithm
         * @param data
         */
        BrowserCrypto.prototype.getSubtleCryptoDigest = function (algorithm, data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, window.crypto.subtle.digest(algorithm, data)];
                });
            });
        };
        /**
         * IE Helper function for SHA digest.
         * @param algorithm
         * @param data
         */
        BrowserCrypto.prototype.getMSCryptoDigest = function (algorithm, data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var digestOperation = window["msCrypto"].subtle.digest(algorithm, data.buffer);
                            digestOperation.addEventListener("complete", function (e) {
                                resolve(e.target.result);
                            });
                            digestOperation.addEventListener("error", function (error) {
                                reject(error);
                            });
                        })];
                });
            });
        };
        /**
         * IE Helper function for generating a keypair
         * @param extractable
         * @param usages
         */
        BrowserCrypto.prototype.msCryptoGenerateKey = function (extractable, usages) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var msGenerateKey = window["msCrypto"].subtle.generateKey(_this._keygenAlgorithmOptions, extractable, usages);
                            msGenerateKey.addEventListener("complete", function (e) {
                                resolve(e.target.result);
                            });
                            msGenerateKey.addEventListener("error", function (error) {
                                reject(error);
                            });
                        })];
                });
            });
        };
        /**
         * IE Helper function for exportKey
         * @param key
         * @param format
         */
        BrowserCrypto.prototype.msCryptoExportJwk = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var msExportKey = window["msCrypto"].subtle.exportKey(KEY_FORMAT_JWK, key);
                            msExportKey.addEventListener("complete", function (e) {
                                var resultBuffer = e.target.result;
                                var resultString = BrowserStringUtils.utf8ArrToString(new Uint8Array(resultBuffer))
                                    .replace(/\r/g, "")
                                    .replace(/\n/g, "")
                                    .replace(/\t/g, "")
                                    .split(" ").join("")
                                    .replace("\u0000", "");
                                try {
                                    resolve(JSON.parse(resultString));
                                }
                                catch (e) {
                                    reject(e);
                                }
                            });
                            msExportKey.addEventListener("error", function (error) {
                                reject(error);
                            });
                        })];
                });
            });
        };
        /**
         * IE Helper function for importKey
         * @param key
         * @param format
         * @param extractable
         * @param usages
         */
        BrowserCrypto.prototype.msCryptoImportKey = function (keyBuffer, extractable, usages) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var msImportKey = window["msCrypto"].subtle.importKey(KEY_FORMAT_JWK, keyBuffer, _this._keygenAlgorithmOptions, extractable, usages);
                            msImportKey.addEventListener("complete", function (e) {
                                resolve(e.target.result);
                            });
                            msImportKey.addEventListener("error", function (error) {
                                reject(error);
                            });
                        })];
                });
            });
        };
        /**
         * IE Helper function for sign JWT
         * @param key
         * @param data
         */
        BrowserCrypto.prototype.msCryptoSign = function (key, data) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var msSign = window["msCrypto"].subtle.sign(_this._keygenAlgorithmOptions, key, data);
                            msSign.addEventListener("complete", function (e) {
                                resolve(e.target.result);
                            });
                            msSign.addEventListener("error", function (error) {
                                reject(error);
                            });
                        })];
                });
            });
        };
        /**
         * Returns stringified jwk.
         * @param jwk
         */
        BrowserCrypto.getJwkString = function (jwk) {
            return JSON.stringify(jwk, Object.keys(jwk).sort());
        };
        return BrowserCrypto;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Storage wrapper for IndexedDB storage in browsers: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
     */
    var DatabaseStorage = /** @class */ (function () {
        function DatabaseStorage(dbName, tableName, version) {
            this.dbName = dbName;
            this.tableName = tableName;
            this.version = version;
            this.dbOpen = false;
        }
        /**
         * Opens IndexedDB instance.
         */
        DatabaseStorage.prototype.open = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            // TODO: Add timeouts?
                            var openDB = window.indexedDB.open(_this.dbName, _this.version);
                            openDB.addEventListener("upgradeneeded", function (e) {
                                var event = e;
                                event.target.result.createObjectStore(_this.tableName);
                            });
                            openDB.addEventListener("success", function (e) {
                                var event = e;
                                _this.db = event.target.result;
                                _this.dbOpen = true;
                                resolve();
                            });
                            openDB.addEventListener("error", function (error) { return reject(error); });
                        })];
                });
            });
        };
        /**
         * Retrieves item from IndexedDB instance.
         * @param key
         */
        DatabaseStorage.prototype.get = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!this.dbOpen) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.open()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                                // TODO: Add timeouts?
                                if (!_this.db) {
                                    return reject(BrowserAuthError.createDatabaseNotOpenError());
                                }
                                var transaction = _this.db.transaction([_this.tableName], "readonly");
                                var objectStore = transaction.objectStore(_this.tableName);
                                var dbGet = objectStore.get(key);
                                dbGet.addEventListener("success", function (e) {
                                    var event = e;
                                    resolve(event.target.result);
                                });
                                dbGet.addEventListener("error", function (e) { return reject(e); });
                            })];
                    }
                });
            });
        };
        /**
         * Adds item to IndexedDB under given key
         * @param key
         * @param payload
         */
        DatabaseStorage.prototype.put = function (key, payload) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!this.dbOpen) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.open()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                                // TODO: Add timeouts?
                                if (!_this.db) {
                                    return reject(BrowserAuthError.createDatabaseNotOpenError());
                                }
                                var transaction = _this.db.transaction([_this.tableName], "readwrite");
                                var objectStore = transaction.objectStore(_this.tableName);
                                var dbPut = objectStore.put(payload, key);
                                dbPut.addEventListener("success", function (e) {
                                    var event = e;
                                    resolve(event.target.result);
                                });
                                dbPut.addEventListener("error", function (e) { return reject(e); });
                            })];
                    }
                });
            });
        };
        return DatabaseStorage;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * This class implements MSAL's crypto interface, which allows it to perform base64 encoding and decoding, generating cryptographically random GUIDs and
     * implementing Proof Key for Code Exchange specs for the OAuth Authorization Code Flow using PKCE (rfc here: https://tools.ietf.org/html/rfc7636).
     */
    var CryptoOps = /** @class */ (function () {
        function CryptoOps() {
            // Browser crypto needs to be validated first before any other classes can be set.
            this.browserCrypto = new BrowserCrypto();
            this.b64Encode = new Base64Encode();
            this.b64Decode = new Base64Decode();
            this.guidGenerator = new GuidGenerator(this.browserCrypto);
            this.pkceGenerator = new PkceGenerator(this.browserCrypto);
            this.cache = new DatabaseStorage(CryptoOps.DB_NAME, CryptoOps.TABLE_NAME, CryptoOps.DB_VERSION);
        }
        /**
         * Creates a new random GUID - used to populate state and nonce.
         * @returns string (GUID)
         */
        CryptoOps.prototype.createNewGuid = function () {
            return this.guidGenerator.generateGuid();
        };
        /**
         * Encodes input string to base64.
         * @param input
         */
        CryptoOps.prototype.base64Encode = function (input) {
            return this.b64Encode.encode(input);
        };
        /**
         * Decodes input string from base64.
         * @param input
         */
        CryptoOps.prototype.base64Decode = function (input) {
            return this.b64Decode.decode(input);
        };
        /**
         * Generates PKCE codes used in Authorization Code Flow.
         */
        CryptoOps.prototype.generatePkceCodes = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.pkceGenerator.generateCodes()];
                });
            });
        };
        /**
         * Generates a keypair, stores it and returns a thumbprint
         * @param resourceRequestMethod
         * @param resourceRequestUri
         */
        CryptoOps.prototype.getPublicKeyThumbprint = function (resourceRequestMethod, resourceRequestUri) {
            return __awaiter(this, void 0, void 0, function () {
                var keyPair, publicKeyJwk, pubKeyThumprintObj, publicJwkString, publicJwkBuffer, publicJwkHash, privateKeyJwk, unextractablePrivateKey;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.browserCrypto.generateKeyPair(CryptoOps.EXTRACTABLE, CryptoOps.POP_KEY_USAGES)];
                        case 1:
                            keyPair = _a.sent();
                            return [4 /*yield*/, this.browserCrypto.exportJwk(keyPair.publicKey)];
                        case 2:
                            publicKeyJwk = _a.sent();
                            pubKeyThumprintObj = {
                                e: publicKeyJwk.e,
                                kty: publicKeyJwk.kty,
                                n: publicKeyJwk.n
                            };
                            publicJwkString = BrowserCrypto.getJwkString(pubKeyThumprintObj);
                            return [4 /*yield*/, this.browserCrypto.sha256Digest(publicJwkString)];
                        case 3:
                            publicJwkBuffer = _a.sent();
                            publicJwkHash = this.b64Encode.urlEncodeArr(new Uint8Array(publicJwkBuffer));
                            return [4 /*yield*/, this.browserCrypto.exportJwk(keyPair.privateKey)];
                        case 4:
                            privateKeyJwk = _a.sent();
                            return [4 /*yield*/, this.browserCrypto.importJwk(privateKeyJwk, false, ["sign"])];
                        case 5:
                            unextractablePrivateKey = _a.sent();
                            // Store Keypair data in keystore
                            this.cache.put(publicJwkHash, {
                                privateKey: unextractablePrivateKey,
                                publicKey: keyPair.publicKey,
                                requestMethod: resourceRequestMethod,
                                requestUri: resourceRequestUri
                            });
                            return [2 /*return*/, publicJwkHash];
                    }
                });
            });
        };
        /**
         * Signs the given object as a jwt payload with private key retrieved by given kid.
         * @param payload
         * @param kid
         */
        CryptoOps.prototype.signJwt = function (payload, kid) {
            return __awaiter(this, void 0, void 0, function () {
                var cachedKeyPair, publicKeyJwk, publicKeyJwkString, header, encodedHeader, encodedPayload, tokenString, tokenBuffer, signatureBuffer, encodedSignature;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.cache.get(kid)];
                        case 1:
                            cachedKeyPair = _a.sent();
                            return [4 /*yield*/, this.browserCrypto.exportJwk(cachedKeyPair.publicKey)];
                        case 2:
                            publicKeyJwk = _a.sent();
                            publicKeyJwkString = BrowserCrypto.getJwkString(publicKeyJwk);
                            header = {
                                alg: publicKeyJwk.alg,
                                type: KEY_FORMAT_JWK
                            };
                            encodedHeader = this.b64Encode.urlEncode(JSON.stringify(header));
                            // Generate payload
                            payload.cnf = {
                                jwk: JSON.parse(publicKeyJwkString)
                            };
                            encodedPayload = this.b64Encode.urlEncode(JSON.stringify(payload));
                            tokenString = encodedHeader + "." + encodedPayload;
                            tokenBuffer = BrowserStringUtils.stringToArrayBuffer(tokenString);
                            return [4 /*yield*/, this.browserCrypto.sign(cachedKeyPair.privateKey, tokenBuffer)];
                        case 3:
                            signatureBuffer = _a.sent();
                            encodedSignature = this.b64Encode.urlEncodeArr(new Uint8Array(signatureBuffer));
                            return [2 /*return*/, tokenString + "." + encodedSignature];
                    }
                });
            });
        };
        CryptoOps.POP_KEY_USAGES = ["sign", "verify"];
        CryptoOps.EXTRACTABLE = true;
        CryptoOps.DB_VERSION = 1;
        CryptoOps.DB_NAME = "msal.db";
        CryptoOps.TABLE_NAME = CryptoOps.DB_NAME + ".keys";
        return CryptoOps;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * BrowserAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var BrowserConfigurationAuthErrorMessage = {
        redirectUriNotSet: {
            code: "redirect_uri_empty",
            desc: "A redirect URI is required for all calls, and none has been set."
        },
        postLogoutUriNotSet: {
            code: "post_logout_uri_empty",
            desc: "A post logout redirect has not been set."
        },
        storageNotSupportedError: {
            code: "storage_not_supported",
            desc: "Given storage configuration option was not supported."
        },
        noRedirectCallbacksSet: {
            code: "no_redirect_callbacks",
            desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. " +
                "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
        },
        invalidCallbackObject: {
            code: "invalid_callback_object",
            desc: "The object passed for the callback was invalid. " +
                "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
        },
        stubPcaInstanceCalled: {
            code: "stubbed_public_client_application_called",
            desc: "Stub instance of Public Client Application was called. If using msal-react, please ensure context is not used without a provider. For more visit: aka.ms/msaljs/browser-errors"
        },
        inMemRedirectUnavailable: {
            code: "in_mem_redirect_unavailable",
            desc: "Redirect cannot be supported. In-memory storage was selected and storeAuthStateInCookie=false, which would cause the library to be unable to handle the incoming hash. If you would like to use the redirect API, please use session/localStorage or set storeAuthStateInCookie=true."
        }
    };
    /**
     * Browser library error class thrown by the MSAL.js library for SPAs
     */
    var BrowserConfigurationAuthError = /** @class */ (function (_super) {
        __extends(BrowserConfigurationAuthError, _super);
        function BrowserConfigurationAuthError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "BrowserConfigurationAuthError";
            Object.setPrototypeOf(_this, BrowserConfigurationAuthError.prototype);
            return _this;
        }
        /**
         * Creates an error thrown when the redirect uri is empty (not set by caller)
         */
        BrowserConfigurationAuthError.createRedirectUriEmptyError = function () {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.redirectUriNotSet.code, BrowserConfigurationAuthErrorMessage.redirectUriNotSet.desc);
        };
        /**
         * Creates an error thrown when the post-logout redirect uri is empty (not set by caller)
         */
        BrowserConfigurationAuthError.createPostLogoutRedirectUriEmptyError = function () {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.postLogoutUriNotSet.code, BrowserConfigurationAuthErrorMessage.postLogoutUriNotSet.desc);
        };
        /**
         * Creates error thrown when given storage location is not supported.
         * @param givenStorageLocation
         */
        BrowserConfigurationAuthError.createStorageNotSupportedError = function (givenStorageLocation) {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.storageNotSupportedError.code, BrowserConfigurationAuthErrorMessage.storageNotSupportedError.desc + " Given Location: " + givenStorageLocation);
        };
        /**
         * Creates error thrown when callback object is invalid.
         * @param callbackObject
         */
        BrowserConfigurationAuthError.createInvalidCallbackObjectError = function (callbackObject) {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.invalidCallbackObject.code, BrowserConfigurationAuthErrorMessage.invalidCallbackObject.desc + " Given value for callback function: " + callbackObject);
        };
        /**
         * Creates error thrown when redirect callbacks are not set before calling loginRedirect() or acquireTokenRedirect().
         */
        BrowserConfigurationAuthError.createRedirectCallbacksNotSetError = function () {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.noRedirectCallbacksSet.code, BrowserConfigurationAuthErrorMessage.noRedirectCallbacksSet.desc);
        };
        /**
         * Creates error thrown when the stub instance of PublicClientApplication is called.
         */
        BrowserConfigurationAuthError.createStubPcaInstanceCalledError = function () {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.stubPcaInstanceCalled.code, BrowserConfigurationAuthErrorMessage.stubPcaInstanceCalled.desc);
        };
        /*
         * Create an error thrown when in-memory storage is used and storeAuthStateInCookie=false.
         */
        BrowserConfigurationAuthError.createInMemoryRedirectUnavailableError = function () {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.inMemRedirectUnavailable.code, BrowserConfigurationAuthErrorMessage.inMemRedirectUnavailable.desc);
        };
        return BrowserConfigurationAuthError;
    }(AuthError));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var BrowserStorage = /** @class */ (function () {
        function BrowserStorage(cacheLocation) {
            this.validateWindowStorage(cacheLocation);
            this.windowStorage = window[cacheLocation];
        }
        BrowserStorage.prototype.validateWindowStorage = function (cacheLocation) {
            if (cacheLocation !== exports.BrowserCacheLocation.LocalStorage && cacheLocation !== exports.BrowserCacheLocation.SessionStorage) {
                throw BrowserConfigurationAuthError.createStorageNotSupportedError(cacheLocation);
            }
            var storageSupported = !!window[cacheLocation];
            if (!storageSupported) {
                throw BrowserConfigurationAuthError.createStorageNotSupportedError(cacheLocation);
            }
        };
        BrowserStorage.prototype.getItem = function (key) {
            return this.windowStorage.getItem(key);
        };
        BrowserStorage.prototype.setItem = function (key, value) {
            this.windowStorage.setItem(key, value);
        };
        BrowserStorage.prototype.removeItem = function (key) {
            this.windowStorage.removeItem(key);
        };
        BrowserStorage.prototype.getKeys = function () {
            return Object.keys(this.windowStorage);
        };
        BrowserStorage.prototype.containsKey = function (key) {
            return this.windowStorage.hasOwnProperty(key);
        };
        return BrowserStorage;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var MemoryStorage = /** @class */ (function () {
        function MemoryStorage() {
            this.cache = new Map();
        }
        MemoryStorage.prototype.getItem = function (key) {
            return this.cache.get(key) || null;
        };
        MemoryStorage.prototype.setItem = function (key, value) {
            this.cache.set(key, value);
        };
        MemoryStorage.prototype.removeItem = function (key) {
            this.cache.delete(key);
        };
        MemoryStorage.prototype.getKeys = function () {
            var cacheKeys = [];
            this.cache.forEach(function (value, key) {
                cacheKeys.push(key);
            });
            return cacheKeys;
        };
        MemoryStorage.prototype.containsKey = function (key) {
            return this.cache.has(key);
        };
        MemoryStorage.prototype.clear = function () {
            this.cache.clear();
        };
        return MemoryStorage;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var BrowserProtocolUtils = /** @class */ (function () {
        function BrowserProtocolUtils() {
        }
        /**
         * Extracts the BrowserStateObject from the state string.
         * @param browserCrypto
         * @param state
         */
        BrowserProtocolUtils.extractBrowserRequestState = function (browserCrypto, state) {
            if (StringUtils.isEmpty(state)) {
                return null;
            }
            try {
                var requestStateObj = ProtocolUtils.parseRequestState(browserCrypto, state);
                return requestStateObj.libraryState.meta;
            }
            catch (e) {
                throw ClientAuthError.createInvalidStateError(state, e);
            }
        };
        /**
         * Parses properties of server response from url hash
         * @param locationHash Hash from url
         */
        BrowserProtocolUtils.parseServerResponseFromHash = function (locationHash) {
            if (!locationHash) {
                return {};
            }
            var hashUrlString = new UrlString(locationHash);
            return UrlString.getDeserializedHash(hashUrlString.getHash());
        };
        return BrowserProtocolUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * This class implements the cache storage interface for MSAL through browser local or session storage.
     * Cookies are only used if storeAuthStateInCookie is true, and are only used for
     * parameters such as state and nonce, generally.
     */
    var BrowserCacheManager = /** @class */ (function (_super) {
        __extends(BrowserCacheManager, _super);
        function BrowserCacheManager(clientId, cacheConfig, cryptoImpl, logger) {
            var _this = _super.call(this, clientId, cryptoImpl) || this;
            // Cookie life calculation (hours * minutes * seconds * ms)
            _this.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1000;
            _this.cacheConfig = cacheConfig;
            _this.logger = logger;
            _this.internalStorage = new MemoryStorage();
            _this.browserStorage = _this.setupBrowserStorage(_this.cacheConfig.cacheLocation);
            _this.temporaryCacheStorage = _this.setupTemporaryCacheStorage(_this.cacheConfig.cacheLocation);
            // Migrate any cache entries from older versions of MSAL.
            _this.migrateCacheEntries();
            return _this;
        }
        /**
         * Returns a window storage class implementing the IWindowStorage interface that corresponds to the configured cacheLocation.
         * @param cacheLocation
         */
        BrowserCacheManager.prototype.setupBrowserStorage = function (cacheLocation) {
            switch (cacheLocation) {
                case exports.BrowserCacheLocation.LocalStorage:
                case exports.BrowserCacheLocation.SessionStorage:
                    try {
                        // Temporary cache items will always be stored in session storage to mitigate problems caused by multiple tabs
                        return new BrowserStorage(cacheLocation);
                    }
                    catch (e) {
                        this.logger.verbose(e);
                        break;
                    }
                case exports.BrowserCacheLocation.MemoryStorage:
            }
            this.cacheConfig.cacheLocation = exports.BrowserCacheLocation.MemoryStorage;
            return new MemoryStorage();
        };
        /**
         *
         * @param cacheLocation
         */
        BrowserCacheManager.prototype.setupTemporaryCacheStorage = function (cacheLocation) {
            switch (cacheLocation) {
                case exports.BrowserCacheLocation.LocalStorage:
                case exports.BrowserCacheLocation.SessionStorage:
                    try {
                        // Temporary cache items will always be stored in session storage to mitigate problems caused by multiple tabs
                        return new BrowserStorage(exports.BrowserCacheLocation.SessionStorage);
                    }
                    catch (e) {
                        this.logger.verbose(e);
                        return this.internalStorage;
                    }
                case exports.BrowserCacheLocation.MemoryStorage:
                default:
                    return this.internalStorage;
            }
        };
        /**
         * Migrate all old cache entries to new schema. No rollback supported.
         * @param storeAuthStateInCookie
         */
        BrowserCacheManager.prototype.migrateCacheEntries = function () {
            var _this = this;
            var idTokenKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ID_TOKEN;
            var clientInfoKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.CLIENT_INFO;
            var errorKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ERROR;
            var errorDescKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ERROR_DESC;
            var idTokenValue = this.browserStorage.getItem(idTokenKey);
            var clientInfoValue = this.browserStorage.getItem(clientInfoKey);
            var errorValue = this.browserStorage.getItem(errorKey);
            var errorDescValue = this.browserStorage.getItem(errorDescKey);
            var values = [idTokenValue, clientInfoValue, errorValue, errorDescValue];
            var keysToMigrate = [PersistentCacheKeys.ID_TOKEN, PersistentCacheKeys.CLIENT_INFO, PersistentCacheKeys.ERROR, PersistentCacheKeys.ERROR_DESC];
            keysToMigrate.forEach(function (cacheKey, index) { return _this.migrateCacheEntry(cacheKey, values[index]); });
        };
        /**
         * Utility function to help with migration.
         * @param newKey
         * @param value
         * @param storeAuthStateInCookie
         */
        BrowserCacheManager.prototype.migrateCacheEntry = function (newKey, value) {
            if (value) {
                this.setTemporaryCache(newKey, value, true);
            }
        };
        /**
         * Parses passed value as JSON object, JSON.parse() will throw an error.
         * @param input
         */
        BrowserCacheManager.prototype.validateAndParseJson = function (jsonValue) {
            try {
                var parsedJson = JSON.parse(jsonValue);
                /**
                 * There are edge cases in which JSON.parse will successfully parse a non-valid JSON object
                 * (e.g. JSON.parse will parse an escaped string into an unescaped string), so adding a type check
                 * of the parsed value is necessary in order to be certain that the string represents a valid JSON object.
                 *
                 */
                return (parsedJson && typeof parsedJson === "object") ? parsedJson : null;
            }
            catch (error) {
                return null;
            }
        };
        /**
         * fetches the entry from the browser storage based off the key
         * @param key
         */
        BrowserCacheManager.prototype.getItem = function (key) {
            return this.browserStorage.getItem(key);
        };
        /**
         * sets the entry in the browser storage
         * @param key
         * @param value
         */
        BrowserCacheManager.prototype.setItem = function (key, value) {
            this.browserStorage.setItem(key, value);
        };
        /**
         * fetch the account entity from the platform cache
         * @param accountKey
         */
        BrowserCacheManager.prototype.getAccount = function (accountKey) {
            var account = this.getItem(accountKey);
            if (!account) {
                return null;
            }
            var parsedAccount = this.validateAndParseJson(account);
            if (!parsedAccount) {
                return null;
            }
            var accountEntity = CacheManager.toObject(new AccountEntity(), parsedAccount);
            if (AccountEntity.isAccountEntity(accountEntity)) {
                return accountEntity;
            }
            return null;
        };
        /**
         * set account entity in the platform cache
         * @param key
         * @param value
         */
        BrowserCacheManager.prototype.setAccount = function (account) {
            this.logger.verbose("BrowserCacheManager.setAccount called");
            var key = account.generateAccountKey();
            this.setItem(key, JSON.stringify(account));
        };
        /**
         * generates idToken entity from a string
         * @param idTokenKey
         */
        BrowserCacheManager.prototype.getIdTokenCredential = function (idTokenKey) {
            this.logger.verbose("BrowserCacheManager.getIdTokenCredential called");
            var value = this.getItem(idTokenKey);
            if (!value) {
                return null;
            }
            var parsedIdToken = this.validateAndParseJson(value);
            if (!parsedIdToken) {
                return null;
            }
            var idToken = CacheManager.toObject(new IdTokenEntity(), parsedIdToken);
            if (IdTokenEntity.isIdTokenEntity(idToken)) {
                this.logger.verbose("BrowserCacheManager.getIdTokenCredential: cache hit");
                return idToken;
            }
            return null;
        };
        /**
         * set IdToken credential to the platform cache
         * @param idToken
         */
        BrowserCacheManager.prototype.setIdTokenCredential = function (idToken) {
            this.logger.verbose("BrowserCacheManager.setIdTokenCredential called");
            var idTokenKey = idToken.generateCredentialKey();
            this.setItem(idTokenKey, JSON.stringify(idToken));
        };
        /**
         * generates accessToken entity from a string
         * @param key
         */
        BrowserCacheManager.prototype.getAccessTokenCredential = function (accessTokenKey) {
            this.logger.verbose("BrowserCacheManager.getAccessTokenCredential called");
            var value = this.getItem(accessTokenKey);
            if (!value) {
                return null;
            }
            var parsedAccessToken = this.validateAndParseJson(value);
            if (!parsedAccessToken) {
                return null;
            }
            var accessToken = CacheManager.toObject(new AccessTokenEntity(), parsedAccessToken);
            if (AccessTokenEntity.isAccessTokenEntity(accessToken)) {
                this.logger.verbose("BrowserCacheManager.getAccessTokenCredential: cache hit");
                return accessToken;
            }
            return null;
        };
        /**
         * set accessToken credential to the platform cache
         * @param accessToken
         */
        BrowserCacheManager.prototype.setAccessTokenCredential = function (accessToken) {
            this.logger.verbose("BrowserCacheManager.setAccessTokenCredential called");
            var accessTokenKey = accessToken.generateCredentialKey();
            this.setItem(accessTokenKey, JSON.stringify(accessToken));
        };
        /**
         * generates refreshToken entity from a string
         * @param refreshTokenKey
         */
        BrowserCacheManager.prototype.getRefreshTokenCredential = function (refreshTokenKey) {
            this.logger.verbose("BrowserCacheManager.getRefreshTokenCredential called");
            var value = this.getItem(refreshTokenKey);
            if (!value) {
                return null;
            }
            var parsedRefreshToken = this.validateAndParseJson(value);
            if (!parsedRefreshToken) {
                return null;
            }
            var refreshToken = CacheManager.toObject(new RefreshTokenEntity(), parsedRefreshToken);
            if (RefreshTokenEntity.isRefreshTokenEntity(refreshToken)) {
                this.logger.verbose("BrowserCacheManager.getRefreshTokenCredential: cache hit");
                return refreshToken;
            }
            return null;
        };
        /**
         * set refreshToken credential to the platform cache
         * @param refreshToken
         */
        BrowserCacheManager.prototype.setRefreshTokenCredential = function (refreshToken) {
            this.logger.verbose("BrowserCacheManager.setRefreshTokenCredential called");
            var refreshTokenKey = refreshToken.generateCredentialKey();
            this.setItem(refreshTokenKey, JSON.stringify(refreshToken));
        };
        /**
         * fetch appMetadata entity from the platform cache
         * @param appMetadataKey
         */
        BrowserCacheManager.prototype.getAppMetadata = function (appMetadataKey) {
            this.logger.verbose("BrowserCacheManager.getAppMetadata called");
            var value = this.getItem(appMetadataKey);
            if (!value) {
                return null;
            }
            var parsedMetadata = this.validateAndParseJson(value);
            if (!parsedMetadata) {
                return null;
            }
            var appMetadata = CacheManager.toObject(new AppMetadataEntity(), parsedMetadata);
            if (AppMetadataEntity.isAppMetadataEntity(appMetadataKey, appMetadata)) {
                this.logger.verbose("BrowserCacheManager.getAppMetadata: cache hit");
                return appMetadata;
            }
            return null;
        };
        /**
         * set appMetadata entity to the platform cache
         * @param appMetadata
         */
        BrowserCacheManager.prototype.setAppMetadata = function (appMetadata) {
            this.logger.verbose("BrowserCacheManager.setAppMetadata called");
            var appMetadataKey = appMetadata.generateAppMetadataKey();
            this.setItem(appMetadataKey, JSON.stringify(appMetadata));
        };
        /**
         * fetch server telemetry entity from the platform cache
         * @param serverTelemetryKey
         */
        BrowserCacheManager.prototype.getServerTelemetry = function (serverTelemetryKey) {
            this.logger.verbose("BrowserCacheManager.getServerTelemetry called");
            var value = this.getItem(serverTelemetryKey);
            if (!value) {
                return null;
            }
            var parsedMetadata = this.validateAndParseJson(value);
            if (!parsedMetadata) {
                return null;
            }
            var serverTelemetryEntity = CacheManager.toObject(new ServerTelemetryEntity(), parsedMetadata);
            if (ServerTelemetryEntity.isServerTelemetryEntity(serverTelemetryKey, serverTelemetryEntity)) {
                this.logger.verbose("BrowserCacheManager.getServerTelemetry: cache hit");
                return serverTelemetryEntity;
            }
            return null;
        };
        /**
         * set server telemetry entity to the platform cache
         * @param serverTelemetryKey
         * @param serverTelemetry
         */
        BrowserCacheManager.prototype.setServerTelemetry = function (serverTelemetryKey, serverTelemetry) {
            this.logger.verbose("BrowserCacheManager.setServerTelemetry called");
            this.setItem(serverTelemetryKey, JSON.stringify(serverTelemetry));
        };
        /**
         *
         */
        BrowserCacheManager.prototype.getAuthorityMetadata = function (key) {
            this.logger.verbose("BrowserCacheManager.getAuthorityMetadata called");
            var value = this.internalStorage.getItem(key);
            if (!value) {
                return null;
            }
            var parsedMetadata = this.validateAndParseJson(value);
            if (parsedMetadata && AuthorityMetadataEntity.isAuthorityMetadataEntity(key, parsedMetadata)) {
                this.logger.verbose("BrowserCacheManager.getAuthorityMetadata: cache hit");
                return CacheManager.toObject(new AuthorityMetadataEntity(), parsedMetadata);
            }
            return null;
        };
        /**
         *
         */
        BrowserCacheManager.prototype.getAuthorityMetadataKeys = function () {
            var _this = this;
            var allKeys = this.internalStorage.getKeys();
            return allKeys.filter(function (key) {
                return _this.isAuthorityMetadata(key);
            });
        };
        /**
         *
         * @param entity
         */
        BrowserCacheManager.prototype.setAuthorityMetadata = function (key, entity) {
            this.logger.verbose("BrowserCacheManager.setAuthorityMetadata called");
            this.internalStorage.setItem(key, JSON.stringify(entity));
        };
        /**
         * fetch throttling entity from the platform cache
         * @param throttlingCacheKey
         */
        BrowserCacheManager.prototype.getThrottlingCache = function (throttlingCacheKey) {
            this.logger.verbose("BrowserCacheManager.getThrottlingCache called");
            var value = this.getItem(throttlingCacheKey);
            if (!value) {
                return null;
            }
            var parsedThrottlingCache = this.validateAndParseJson(value);
            if (!parsedThrottlingCache) {
                return null;
            }
            var throttlingCache = CacheManager.toObject(new ThrottlingEntity(), parsedThrottlingCache);
            if (ThrottlingEntity.isThrottlingEntity(throttlingCacheKey, throttlingCache)) {
                this.logger.verbose("BrowserCacheManager.getThrottlingCache: cache hit");
                return throttlingCache;
            }
            return null;
        };
        /**
         * set throttling entity to the platform cache
         * @param throttlingCacheKey
         * @param throttlingCache
         */
        BrowserCacheManager.prototype.setThrottlingCache = function (throttlingCacheKey, throttlingCache) {
            this.logger.verbose("BrowserCacheManager.setThrottlingCache called");
            this.setItem(throttlingCacheKey, JSON.stringify(throttlingCache));
        };
        /**
         * Gets cache item with given key.
         * Will retrieve frm cookies if storeAuthStateInCookie is set to true.
         * @param key
         */
        BrowserCacheManager.prototype.getTemporaryCache = function (cacheKey, generateKey) {
            this.logger.verbose("BrowserCacheManager.getTemporaryCache called");
            var key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
            if (this.cacheConfig.storeAuthStateInCookie) {
                this.logger.verbose("BrowserCacheManager.getTemporaryCache: storeAuthStateInCookies set to true, retrieving from cookies");
                var itemCookie = this.getItemCookie(key);
                if (itemCookie) {
                    return itemCookie;
                }
            }
            var value = this.temporaryCacheStorage.getItem(key);
            if (!value) {
                return null;
            }
            return value;
        };
        /**
         * Sets the cache item with the key and value given.
         * Stores in cookie if storeAuthStateInCookie is set to true.
         * This can cause cookie overflow if used incorrectly.
         * @param key
         * @param value
         */
        BrowserCacheManager.prototype.setTemporaryCache = function (cacheKey, value, generateKey) {
            var key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
            this.temporaryCacheStorage.setItem(key, value);
            if (this.cacheConfig.storeAuthStateInCookie) {
                this.logger.verbose("BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie");
                this.setItemCookie(key, value);
            }
        };
        /**
         * Removes the cache item with the given key.
         * Will also clear the cookie item if storeAuthStateInCookie is set to true.
         * @param key
         */
        BrowserCacheManager.prototype.removeItem = function (key) {
            this.browserStorage.removeItem(key);
            this.temporaryCacheStorage.removeItem(key);
            if (this.cacheConfig.storeAuthStateInCookie) {
                this.logger.verbose("BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie");
                this.clearItemCookie(key);
            }
            return true;
        };
        /**
         * Checks whether key is in cache.
         * @param key
         */
        BrowserCacheManager.prototype.containsKey = function (key) {
            return this.browserStorage.containsKey(key) || this.temporaryCacheStorage.containsKey(key);
        };
        /**
         * Gets all keys in window.
         */
        BrowserCacheManager.prototype.getKeys = function () {
            return __spread(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
        };
        /**
         * Clears all cache entries created by MSAL (except tokens).
         */
        BrowserCacheManager.prototype.clear = function () {
            var _this = this;
            this.removeAllAccounts();
            this.removeAppMetadata();
            this.getKeys().forEach(function (cacheKey) {
                // Check if key contains msal prefix; For now, we are clearing all the cache items created by MSAL.js
                if ((_this.browserStorage.containsKey(cacheKey) || _this.temporaryCacheStorage.containsKey(cacheKey)) && ((cacheKey.indexOf(Constants.CACHE_PREFIX) !== -1) || (cacheKey.indexOf(_this.clientId) !== -1))) {
                    _this.removeItem(cacheKey);
                }
            });
            this.internalStorage.clear();
        };
        /**
         * Add value to cookies
         * @param cookieName
         * @param cookieValue
         * @param expires
         */
        BrowserCacheManager.prototype.setItemCookie = function (cookieName, cookieValue, expires) {
            var cookieStr = encodeURIComponent(cookieName) + "=" + encodeURIComponent(cookieValue) + ";path=/;";
            if (expires) {
                var expireTime = this.getCookieExpirationTime(expires);
                cookieStr += "expires=" + expireTime + ";";
            }
            if (this.cacheConfig.secureCookies) {
                cookieStr += "Secure;";
            }
            document.cookie = cookieStr;
        };
        /**
         * Get one item by key from cookies
         * @param cookieName
         */
        BrowserCacheManager.prototype.getItemCookie = function (cookieName) {
            var name = encodeURIComponent(cookieName) + "=";
            var cookieList = document.cookie.split(";");
            for (var i = 0; i < cookieList.length; i++) {
                var cookie = cookieList[i];
                while (cookie.charAt(0) === " ") {
                    cookie = cookie.substring(1);
                }
                if (cookie.indexOf(name) === 0) {
                    return decodeURIComponent(cookie.substring(name.length, cookie.length));
                }
            }
            return "";
        };
        /**
         * Clear an item in the cookies by key
         * @param cookieName
         */
        BrowserCacheManager.prototype.clearItemCookie = function (cookieName) {
            this.setItemCookie(cookieName, "", -1);
        };
        /**
         * Get cookie expiration time
         * @param cookieLifeDays
         */
        BrowserCacheManager.prototype.getCookieExpirationTime = function (cookieLifeDays) {
            var today = new Date();
            var expr = new Date(today.getTime() + cookieLifeDays * this.COOKIE_LIFE_MULTIPLIER);
            return expr.toUTCString();
        };
        /**
         * Gets the cache object referenced by the browser
         */
        BrowserCacheManager.prototype.getCache = function () {
            return this.browserStorage;
        };
        /**
         * interface compat, we cannot overwrite browser cache; Functionality is supported by individual entities in browser
         */
        BrowserCacheManager.prototype.setCache = function () {
            // sets nothing
        };
        /**
         * Prepend msal.<client-id> to each key; Skip for any JSON object as Key (defined schemas do not need the key appended: AccessToken Keys or the upcoming schema)
         * @param key
         * @param addInstanceId
         */
        BrowserCacheManager.prototype.generateCacheKey = function (key) {
            var generatedKey = this.validateAndParseJson(key);
            if (!generatedKey) {
                if (StringUtils.startsWith(key, Constants.CACHE_PREFIX) || StringUtils.startsWith(key, PersistentCacheKeys.ADAL_ID_TOKEN)) {
                    return key;
                }
                return Constants.CACHE_PREFIX + "." + this.clientId + "." + key;
            }
            return JSON.stringify(key);
        };
        /**
         * Create authorityKey to cache authority
         * @param state
         */
        BrowserCacheManager.prototype.generateAuthorityKey = function (stateString) {
            var stateId = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString).libraryState.id;
            return this.generateCacheKey(TemporaryCacheKeys.AUTHORITY + "." + stateId);
        };
        /**
         * Create Nonce key to cache nonce
         * @param state
         */
        BrowserCacheManager.prototype.generateNonceKey = function (stateString) {
            var stateId = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString).libraryState.id;
            return this.generateCacheKey(TemporaryCacheKeys.NONCE_IDTOKEN + "." + stateId);
        };
        /**
         * Creates full cache key for the request state
         * @param stateString State string for the request
         */
        BrowserCacheManager.prototype.generateStateKey = function (stateString) {
            // Use the library state id to key temp storage for uniqueness for multiple concurrent requests
            var stateId = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString).libraryState.id;
            return this.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE + "." + stateId);
        };
        /**
         * Gets the cached authority based on the cached state. Returns empty if no cached state found.
         */
        BrowserCacheManager.prototype.getCachedAuthority = function (cachedState) {
            var stateCacheKey = this.generateStateKey(cachedState);
            var state = this.getTemporaryCache(stateCacheKey);
            if (!state) {
                return null;
            }
            var authorityCacheKey = this.generateAuthorityKey(state);
            return this.getTemporaryCache(authorityCacheKey);
        };
        /**
         * Updates account, authority, and state in cache
         * @param serverAuthenticationRequest
         * @param account
         */
        BrowserCacheManager.prototype.updateCacheEntries = function (state, nonce, authorityInstance) {
            this.logger.verbose("BrowserCacheManager.updateCacheEntries called");
            // Cache the request state
            var stateCacheKey = this.generateStateKey(state);
            this.setTemporaryCache(stateCacheKey, state, false);
            // Cache the nonce
            var nonceCacheKey = this.generateNonceKey(state);
            this.setTemporaryCache(nonceCacheKey, nonce, false);
            // Cache authorityKey
            var authorityCacheKey = this.generateAuthorityKey(state);
            this.setTemporaryCache(authorityCacheKey, authorityInstance, false);
        };
        /**
         * Reset all temporary cache items
         * @param state
         */
        BrowserCacheManager.prototype.resetRequestCache = function (state) {
            var _this = this;
            this.logger.verbose("BrowserCacheManager.resetRequestCache called");
            // check state and remove associated cache items
            this.getKeys().forEach(function (key) {
                if (!StringUtils.isEmpty(state) && key.indexOf(state) !== -1) {
                    _this.removeItem(key);
                }
            });
            // delete generic interactive request parameters
            if (state) {
                this.removeItem(this.generateStateKey(state));
                this.removeItem(this.generateNonceKey(state));
                this.removeItem(this.generateAuthorityKey(state));
            }
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.ORIGIN_URI));
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.URL_HASH));
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.INTERACTION_STATUS_KEY));
        };
        /**
         * Removes temporary cache for the provided state
         * @param stateString
         */
        BrowserCacheManager.prototype.cleanRequestByState = function (stateString) {
            this.logger.verbose("BrowserCacheManager.cleanRequestByState called");
            // Interaction is completed - remove interaction status.
            if (stateString) {
                var stateKey = this.generateStateKey(stateString);
                var cachedState = this.temporaryCacheStorage.getItem(stateKey);
                this.logger.info("BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: " + cachedState);
                this.resetRequestCache(cachedState || "");
            }
        };
        /**
         * Looks in temporary cache for any state values with the provided interactionType and removes all temporary cache items for that state
         * Used in scenarios where temp cache needs to be cleaned but state is not known, such as clicking browser back button.
         * @param interactionType
         */
        BrowserCacheManager.prototype.cleanRequestByInteractionType = function (interactionType) {
            var _this = this;
            this.logger.verbose("BrowserCacheManager.cleanRequestByInteractionType called");
            this.getKeys().forEach(function (key) {
                if (key.indexOf(TemporaryCacheKeys.REQUEST_STATE) === -1) {
                    return;
                }
                var value = _this.temporaryCacheStorage.getItem(key);
                if (!value) {
                    return;
                }
                var parsedState = BrowserProtocolUtils.extractBrowserRequestState(_this.cryptoImpl, value);
                if (parsedState && parsedState.interactionType === interactionType) {
                    _this.logger.info("BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: " + value);
                    _this.resetRequestCache(value);
                }
            });
        };
        BrowserCacheManager.prototype.cacheCodeRequest = function (authCodeRequest, browserCrypto) {
            this.logger.verbose("BrowserCacheManager.cacheCodeRequest called");
            var encodedValue = browserCrypto.base64Encode(JSON.stringify(authCodeRequest));
            this.setTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, encodedValue, true);
        };
        /**
         * Gets the token exchange parameters from the cache. Throws an error if nothing is found.
         */
        BrowserCacheManager.prototype.getCachedRequest = function (state, browserCrypto) {
            this.logger.verbose("BrowserCacheManager.getCachedRequest called");
            // Get token request from cache and parse as TokenExchangeParameters.
            var encodedTokenRequest = this.getTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, true);
            if (!encodedTokenRequest) {
                throw BrowserAuthError.createNoTokenRequestCacheError();
            }
            var parsedRequest = this.validateAndParseJson(browserCrypto.base64Decode(encodedTokenRequest));
            if (!parsedRequest) {
                throw BrowserAuthError.createUnableToParseTokenRequestCacheError();
            }
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
            // Get cached authority and use if no authority is cached with request.
            if (StringUtils.isEmpty(parsedRequest.authority)) {
                var authorityCacheKey = this.generateAuthorityKey(state);
                var cachedAuthority = this.getTemporaryCache(authorityCacheKey);
                if (!cachedAuthority) {
                    throw BrowserAuthError.createNoCachedAuthorityError();
                }
                parsedRequest.authority = cachedAuthority;
            }
            return parsedRequest;
        };
        return BrowserCacheManager;
    }(CacheManager));
    var DEFAULT_BROWSER_CACHE_MANAGER = function (clientId, logger) {
        var cacheOptions = {
            cacheLocation: exports.BrowserCacheLocation.MemoryStorage,
            storeAuthStateInCookie: false,
            secureCookies: false
        };
        return new BrowserCacheManager(clientId, cacheOptions, DEFAULT_CRYPTO_IMPLEMENTATION, logger);
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * This class implements the Fetch API for GET and POST requests. See more here: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
     */
    var FetchClient = /** @class */ (function () {
        function FetchClient() {
        }
        /**
         * Fetch Client for REST endpoints - Get request
         * @param url
         * @param headers
         * @param body
         */
        FetchClient.prototype.sendGetRequestAsync = function (url, options) {
            return __awaiter(this, void 0, void 0, function () {
                var response, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, fetch(url, {
                                method: HTTP_REQUEST_TYPE.GET,
                                headers: this.getFetchHeaders(options)
                            })];
                        case 1:
                            response = _b.sent();
                            _a = {
                                headers: this.getHeaderDict(response.headers)
                            };
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, (_a.body = (_b.sent()),
                                _a.status = response.status,
                                _a)];
                    }
                });
            });
        };
        /**
         * Fetch Client for REST endpoints - Post request
         * @param url
         * @param headers
         * @param body
         */
        FetchClient.prototype.sendPostRequestAsync = function (url, options) {
            return __awaiter(this, void 0, void 0, function () {
                var reqBody, response, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            reqBody = (options && options.body) || "";
                            return [4 /*yield*/, fetch(url, {
                                    method: HTTP_REQUEST_TYPE.POST,
                                    headers: this.getFetchHeaders(options),
                                    body: reqBody
                                })];
                        case 1:
                            response = _b.sent();
                            _a = {
                                headers: this.getHeaderDict(response.headers)
                            };
                            return [4 /*yield*/, response.json()];
                        case 2: return [2 /*return*/, (_a.body = (_b.sent()),
                                _a.status = response.status,
                                _a)];
                    }
                });
            });
        };
        /**
         * Get Fetch API Headers object from string map
         * @param inputHeaders
         */
        FetchClient.prototype.getFetchHeaders = function (options) {
            var headers = new Headers();
            if (!(options && options.headers)) {
                return headers;
            }
            var optionsHeaders = options.headers;
            Object.keys(optionsHeaders).forEach(function (key) {
                headers.append(key, optionsHeaders[key]);
            });
            return headers;
        };
        FetchClient.prototype.getHeaderDict = function (headers) {
            var headerDict = {};
            headers.forEach(function (value, key) {
                headerDict[key] = value;
            });
            return headerDict;
        };
        return FetchClient;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * This client implements the XMLHttpRequest class to send GET and POST requests.
     */
    var XhrClient = /** @class */ (function () {
        function XhrClient() {
        }
        /**
         * XhrClient for REST endpoints - Get request
         * @param url
         * @param headers
         * @param body
         */
        XhrClient.prototype.sendGetRequestAsync = function (url, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.sendRequestAsync(url, HTTP_REQUEST_TYPE.GET, options)];
                });
            });
        };
        /**
         * XhrClient for REST endpoints - Post request
         * @param url
         * @param headers
         * @param body
         */
        XhrClient.prototype.sendPostRequestAsync = function (url, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.sendRequestAsync(url, HTTP_REQUEST_TYPE.POST, options)];
                });
            });
        };
        /**
         * Helper for XhrClient requests.
         * @param url
         * @param method
         * @param options
         */
        XhrClient.prototype.sendRequestAsync = function (url, method, options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open(method, url, /* async: */ true);
                _this.setXhrHeaders(xhr, options);
                xhr.onload = function () {
                    if (xhr.status < 200 || xhr.status >= 300) {
                        reject(xhr.responseText);
                    }
                    try {
                        var jsonResponse = JSON.parse(xhr.responseText);
                        var networkResponse = {
                            headers: _this.getHeaderDict(xhr),
                            body: jsonResponse,
                            status: xhr.status
                        };
                        resolve(networkResponse);
                    }
                    catch (e) {
                        reject(xhr.responseText);
                    }
                };
                xhr.onerror = function () {
                    reject(xhr.status);
                };
                if (method === "POST" && options && options.body) {
                    xhr.send(options.body);
                }
                else if (method === "GET") {
                    xhr.send();
                }
                else {
                    throw BrowserAuthError.createHttpMethodNotImplementedError(method);
                }
            });
        };
        /**
         * Helper to set XHR headers for request.
         * @param xhr
         * @param options
         */
        XhrClient.prototype.setXhrHeaders = function (xhr, options) {
            if (options && options.headers) {
                var headers_1 = options.headers;
                Object.keys(headers_1).forEach(function (key) {
                    xhr.setRequestHeader(key, headers_1[key]);
                });
            }
        };
        /**
         * Gets a string map of the headers received in the response.
         *
         * Algorithm comes from https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
         * @param xhr
         */
        XhrClient.prototype.getHeaderDict = function (xhr) {
            var headerString = xhr.getAllResponseHeaders();
            var headerArr = headerString.trim().split(/[\r\n]+/);
            var headerDict = {};
            headerArr.forEach(function (value) {
                var parts = value.split(": ");
                var headerName = parts.shift();
                var headerVal = parts.join(": ");
                if (headerName && headerVal) {
                    headerDict[headerName] = headerVal;
                }
            });
            return headerDict;
        };
        return XhrClient;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Utility class for browser specific functions
     */
    var BrowserUtils = /** @class */ (function () {
        function BrowserUtils() {
        }
        // #region Window Navigation and URL management
        /**
         * Clears hash from window url.
         */
        BrowserUtils.clearHash = function () {
            // Office.js sets history.replaceState to null
            if (typeof history.replaceState === "function") {
                // Full removes "#" from url
                history.replaceState(null, Constants.EMPTY_STRING, "" + window.location.pathname + window.location.search);
            }
            else {
                window.location.hash = "";
            }
        };
        /**
         * Replaces current hash with hash from provided url
         */
        BrowserUtils.replaceHash = function (url) {
            var urlParts = url.split("#");
            urlParts.shift(); // Remove part before the hash
            window.location.hash = urlParts.length > 0 ? urlParts.join("#") : "";
        };
        /**
         * Returns boolean of whether the current window is in an iframe or not.
         */
        BrowserUtils.isInIframe = function () {
            return window.parent !== window;
        };
        // #endregion
        /**
         * Returns current window URL as redirect uri
         */
        BrowserUtils.getCurrentUri = function () {
            return window.location.href.split("?")[0].split("#")[0];
        };
        /**
         * Gets the homepage url for the current window location.
         */
        BrowserUtils.getHomepage = function () {
            var currentUrl = new UrlString(window.location.href);
            var urlComponents = currentUrl.getUrlComponents();
            return urlComponents.Protocol + "//" + urlComponents.HostNameAndPort + "/";
        };
        /**
         * Returns best compatible network client object.
         */
        BrowserUtils.getBrowserNetworkClient = function () {
            if (window.fetch && window.Headers) {
                return new FetchClient();
            }
            else {
                return new XhrClient();
            }
        };
        /**
         * Throws error if we have completed an auth and are
         * attempting another auth request inside an iframe.
         */
        BrowserUtils.blockReloadInHiddenIframes = function () {
            var isResponseHash = UrlString.hashContainsKnownProperties(window.location.hash);
            // return an error if called from the hidden iframe created by the msal js silent calls
            if (isResponseHash && BrowserUtils.isInIframe()) {
                throw BrowserAuthError.createBlockReloadInHiddenIframeError();
            }
        };
        /**
         * Block redirect operations in iframes unless explicitly allowed
         * @param interactionType Interaction type for the request
         * @param allowRedirectInIframe Config value to allow redirects when app is inside an iframe
         */
        BrowserUtils.blockRedirectInIframe = function (interactionType, allowRedirectInIframe) {
            var isIframedApp = BrowserUtils.isInIframe();
            if (interactionType === exports.InteractionType.Redirect && isIframedApp && !allowRedirectInIframe) {
                // If we are not in top frame, we shouldn't redirect. This is also handled by the service.
                throw BrowserAuthError.createRedirectInIframeError(isIframedApp);
            }
        };
        /**
         * Throws error if token requests are made in non-browser environment
         * @param isBrowserEnvironment Flag indicating if environment is a browser.
         */
        BrowserUtils.blockNonBrowserEnvironment = function (isBrowserEnvironment) {
            if (!isBrowserEnvironment) {
                throw BrowserAuthError.createNonBrowserEnvironmentError();
            }
        };
        /**
         * Returns boolean of whether current browser is an Internet Explorer or Edge browser.
         */
        BrowserUtils.detectIEOrEdge = function () {
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");
            var msie11 = ua.indexOf("Trident/");
            var msedge = ua.indexOf("Edge/");
            var isIE = msie > 0 || msie11 > 0;
            var isEdge = msedge > 0;
            return isIE || isEdge;
        };
        return BrowserUtils;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var NavigationClient = /** @class */ (function () {
        function NavigationClient() {
        }
        /**
         * Navigates to other pages within the same web application
         * @param url
         * @param options
         */
        NavigationClient.prototype.navigateInternal = function (url, options) {
            return NavigationClient.defaultNavigateWindow(url, options);
        };
        /**
         * Navigates to other pages outside the web application i.e. the Identity Provider
         * @param url
         * @param options
         */
        NavigationClient.prototype.navigateExternal = function (url, options) {
            return NavigationClient.defaultNavigateWindow(url, options);
        };
        /**
         * Default navigation implementation invoked by the internal and external functions
         * @param url
         * @param options
         */
        NavigationClient.defaultNavigateWindow = function (url, options) {
            if (options.noHistory) {
                window.location.replace(url);
            }
            else {
                window.location.assign(url);
            }
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve(true);
                }, options.timeout);
            });
        };
        return NavigationClient;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    // Default timeout for popup windows and iframes in milliseconds
    var DEFAULT_POPUP_TIMEOUT_MS = 60000;
    var DEFAULT_IFRAME_TIMEOUT_MS = 6000;
    var DEFAULT_REDIRECT_TIMEOUT_MS = 30000;
    /**
     * MSAL function that sets the default options when not explicitly configured from app developer
     *
     * @param auth
     * @param cache
     * @param system
     *
     * @returns Configuration object
     */
    function buildConfiguration(_a, isBrowserEnvironment) {
        var userInputAuth = _a.auth, userInputCache = _a.cache, userInputSystem = _a.system;
        // Default auth options for browser
        var DEFAULT_AUTH_OPTIONS = {
            clientId: "",
            authority: "" + Constants.DEFAULT_AUTHORITY,
            knownAuthorities: [],
            cloudDiscoveryMetadata: "",
            authorityMetadata: "",
            redirectUri: "",
            postLogoutRedirectUri: "",
            navigateToLoginRequestUrl: true,
            clientCapabilities: [],
            protocolMode: exports.ProtocolMode.AAD
        };
        // Default cache options for browser
        var DEFAULT_CACHE_OPTIONS = {
            cacheLocation: exports.BrowserCacheLocation.SessionStorage,
            storeAuthStateInCookie: false,
            secureCookies: false
        };
        // Default logger options for browser
        var DEFAULT_LOGGER_OPTIONS = {
            loggerCallback: function () { },
            logLevel: exports.LogLevel.Info,
            piiLoggingEnabled: false
        };
        // Default system options for browser
        var DEFAULT_BROWSER_SYSTEM_OPTIONS = __assign(__assign({}, DEFAULT_SYSTEM_OPTIONS), { loggerOptions: DEFAULT_LOGGER_OPTIONS, networkClient: isBrowserEnvironment ? BrowserUtils.getBrowserNetworkClient() : StubbedNetworkModule, navigationClient: new NavigationClient(), loadFrameTimeout: 0, 
            // If loadFrameTimeout is provided, use that as default.
            windowHashTimeout: (userInputSystem && userInputSystem.loadFrameTimeout) || DEFAULT_POPUP_TIMEOUT_MS, iframeHashTimeout: (userInputSystem && userInputSystem.loadFrameTimeout) || DEFAULT_IFRAME_TIMEOUT_MS, navigateFrameWait: isBrowserEnvironment && BrowserUtils.detectIEOrEdge() ? 500 : 0, redirectNavigationTimeout: DEFAULT_REDIRECT_TIMEOUT_MS, asyncPopups: false, allowRedirectInIframe: false });
        var overlayedConfig = {
            auth: __assign(__assign({}, DEFAULT_AUTH_OPTIONS), userInputAuth),
            cache: __assign(__assign({}, DEFAULT_CACHE_OPTIONS), userInputCache),
            system: __assign(__assign({}, DEFAULT_BROWSER_SYSTEM_OPTIONS), userInputSystem)
        };
        return overlayedConfig;
    }

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Abstract class which defines operations for a browser interaction handling class.
     */
    var InteractionHandler = /** @class */ (function () {
        function InteractionHandler(authCodeModule, storageImpl, authCodeRequest) {
            this.authModule = authCodeModule;
            this.browserStorage = storageImpl;
            this.authCodeRequest = authCodeRequest;
        }
        /**
         * Function to handle response parameters from hash.
         * @param locationHash
         */
        InteractionHandler.prototype.handleCodeResponse = function (locationHash, state, authority, networkModule) {
            return __awaiter(this, void 0, void 0, function () {
                var stateKey, requestState, authCodeResponse, nonceKey, cachedNonce, tokenResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Check that location hash isn't empty.
                            if (StringUtils.isEmpty(locationHash)) {
                                throw BrowserAuthError.createEmptyHashError(locationHash);
                            }
                            stateKey = this.browserStorage.generateStateKey(state);
                            requestState = this.browserStorage.getTemporaryCache(stateKey);
                            if (!requestState) {
                                throw ClientAuthError.createStateNotFoundError("Cached State");
                            }
                            authCodeResponse = this.authModule.handleFragmentResponse(locationHash, requestState);
                            nonceKey = this.browserStorage.generateNonceKey(requestState);
                            cachedNonce = this.browserStorage.getTemporaryCache(nonceKey);
                            // Assign code to request
                            this.authCodeRequest.code = authCodeResponse.code;
                            if (!authCodeResponse.cloud_instance_host_name) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.updateTokenEndpointAuthority(authCodeResponse.cloud_instance_host_name, authority, networkModule)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            authCodeResponse.nonce = cachedNonce || undefined;
                            authCodeResponse.state = requestState;
                            return [4 /*yield*/, this.authModule.acquireToken(this.authCodeRequest, authCodeResponse)];
                        case 3:
                            tokenResponse = _a.sent();
                            this.browserStorage.cleanRequestByState(state);
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        InteractionHandler.prototype.updateTokenEndpointAuthority = function (cloudInstanceHostname, authority, networkModule) {
            return __awaiter(this, void 0, void 0, function () {
                var cloudInstanceAuthorityUri, cloudInstanceAuthority;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cloudInstanceAuthorityUri = "https://" + cloudInstanceHostname + "/" + authority.tenant + "/";
                            return [4 /*yield*/, AuthorityFactory.createDiscoveredInstance(cloudInstanceAuthorityUri, networkModule, this.browserStorage, authority.options)];
                        case 1:
                            cloudInstanceAuthority = _a.sent();
                            this.authModule.updateAuthority(cloudInstanceAuthority);
                            return [2 /*return*/];
                    }
                });
            });
        };
        return InteractionHandler;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var RedirectHandler = /** @class */ (function (_super) {
        __extends(RedirectHandler, _super);
        function RedirectHandler(authCodeModule, storageImpl, authCodeRequest, browserCrypto) {
            var _this = _super.call(this, authCodeModule, storageImpl, authCodeRequest) || this;
            _this.browserCrypto = browserCrypto;
            return _this;
        }
        /**
         * Redirects window to given URL.
         * @param urlNavigate
         */
        RedirectHandler.prototype.initiateAuthRequest = function (requestUrl, params) {
            return __awaiter(this, void 0, void 0, function () {
                var navigationOptions, navigate;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.authModule.logger.verbose("RedirectHandler.initiateAuthRequest called");
                            if (!!StringUtils.isEmpty(requestUrl)) return [3 /*break*/, 7];
                            // Cache start page, returns to this page after redirectUri if navigateToLoginRequestUrl is true
                            if (params.redirectStartPage) {
                                this.authModule.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set to true, caching start page");
                                this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, params.redirectStartPage, true);
                            }
                            // Set interaction status in the library.
                            this.browserStorage.setTemporaryCache(TemporaryCacheKeys.INTERACTION_STATUS_KEY, BrowserConstants.INTERACTION_IN_PROGRESS_VALUE, true);
                            this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto);
                            this.authModule.logger.infoPii("RedirectHandler.initiateAuthRequest: Navigate to:" + requestUrl);
                            navigationOptions = {
                                apiId: exports.ApiId.acquireTokenRedirect,
                                timeout: params.redirectTimeout,
                                noHistory: false
                            };
                            if (!(typeof params.onRedirectNavigate === "function")) return [3 /*break*/, 4];
                            this.authModule.logger.verbose("RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback");
                            navigate = params.onRedirectNavigate(requestUrl);
                            if (!(navigate !== false)) return [3 /*break*/, 2];
                            this.authModule.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating");
                            return [4 /*yield*/, params.navigationClient.navigateExternal(requestUrl, navigationOptions)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                        case 2:
                            this.authModule.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate returned false, stopping navigation");
                            return [2 /*return*/];
                        case 3: return [3 /*break*/, 6];
                        case 4:
                            // Navigate window to request URL
                            this.authModule.logger.verbose("RedirectHandler.initiateAuthRequest: Navigating window to navigate url");
                            return [4 /*yield*/, params.navigationClient.navigateExternal(requestUrl, navigationOptions)];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                        case 6: return [3 /*break*/, 8];
                        case 7:
                            // Throw error if request URL is empty.
                            this.authModule.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty");
                            throw BrowserAuthError.createEmptyNavigationUriError();
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Handle authorization code response in the window.
         * @param hash
         */
        RedirectHandler.prototype.handleCodeResponse = function (locationHash, state, authority, networkModule, clientId) {
            return __awaiter(this, void 0, void 0, function () {
                var stateKey, requestState, authCodeResponse, nonceKey, cachedNonce, tokenResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.authModule.logger.verbose("RedirectHandler.handleCodeResponse called");
                            // Check that location hash isn't empty.
                            if (StringUtils.isEmpty(locationHash)) {
                                throw BrowserAuthError.createEmptyHashError(locationHash);
                            }
                            // Interaction is completed - remove interaction status.
                            this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.INTERACTION_STATUS_KEY));
                            stateKey = this.browserStorage.generateStateKey(state);
                            requestState = this.browserStorage.getTemporaryCache(stateKey);
                            if (!requestState) {
                                throw ClientAuthError.createStateNotFoundError("Cached State");
                            }
                            authCodeResponse = this.authModule.handleFragmentResponse(locationHash, requestState);
                            nonceKey = this.browserStorage.generateNonceKey(requestState);
                            cachedNonce = this.browserStorage.getTemporaryCache(nonceKey);
                            // Assign code to request
                            this.authCodeRequest.code = authCodeResponse.code;
                            if (!authCodeResponse.cloud_instance_host_name) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.updateTokenEndpointAuthority(authCodeResponse.cloud_instance_host_name, authority, networkModule)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            authCodeResponse.nonce = cachedNonce || undefined;
                            authCodeResponse.state = requestState;
                            // Remove throttle if it exists
                            if (clientId) {
                                ThrottlingUtils.removeThrottle(this.browserStorage, clientId, this.authCodeRequest.authority, this.authCodeRequest.scopes);
                            }
                            return [4 /*yield*/, this.authModule.acquireToken(this.authCodeRequest, authCodeResponse)];
                        case 3:
                            tokenResponse = _a.sent();
                            this.browserStorage.cleanRequestByState(state);
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        return RedirectHandler;
    }(InteractionHandler));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * This class implements the interaction handler base class for browsers. It is written specifically for handling
     * popup window scenarios. It includes functions for monitoring the popup window for a hash.
     */
    var PopupHandler = /** @class */ (function (_super) {
        __extends(PopupHandler, _super);
        function PopupHandler(authCodeModule, storageImpl, authCodeRequest) {
            var _this = _super.call(this, authCodeModule, storageImpl, authCodeRequest) || this;
            // Properly sets this reference for the unload event.
            _this.unloadWindow = _this.unloadWindow.bind(_this);
            return _this;
        }
        /**
         * Opens a popup window with given request Url.
         * @param requestUrl
         */
        PopupHandler.prototype.initiateAuthRequest = function (requestUrl, params) {
            // Check that request url is not empty.
            if (!StringUtils.isEmpty(requestUrl)) {
                // Set interaction status in the library.
                this.browserStorage.setTemporaryCache(TemporaryCacheKeys.INTERACTION_STATUS_KEY, BrowserConstants.INTERACTION_IN_PROGRESS_VALUE, true);
                this.authModule.logger.infoPii("Navigate to:" + requestUrl);
                // Open the popup window to requestUrl.
                return this.openPopup(requestUrl, params.popupName, params.popup);
            }
            else {
                // Throw error if request URL is empty.
                this.authModule.logger.error("Navigate url is empty");
                throw BrowserAuthError.createEmptyNavigationUriError();
            }
        };
        /**
         * Monitors a window until it loads a url with a known hash, or hits a specified timeout.
         * @param popupWindow - window that is being monitored
         * @param timeout - milliseconds until timeout
         * @param urlNavigate - url that was navigated to
         */
        PopupHandler.prototype.monitorPopupForHash = function (popupWindow, timeout) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (timeout < DEFAULT_POPUP_TIMEOUT_MS) {
                    _this.authModule.logger.warning("system.loadFrameTimeout or system.windowHashTimeout set to lower (" + timeout + "ms) than the default (" + DEFAULT_POPUP_TIMEOUT_MS + "ms). This may result in timeouts.");
                }
                var maxTicks = timeout / BrowserConstants.POLL_INTERVAL_MS;
                var ticks = 0;
                var intervalId = setInterval(function () {
                    if (popupWindow.closed) {
                        // Window is closed
                        _this.cleanPopup();
                        clearInterval(intervalId);
                        reject(BrowserAuthError.createUserCancelledError());
                        return;
                    }
                    var href = Constants.EMPTY_STRING;
                    try {
                        /*
                         * Will throw if cross origin,
                         * which should be caught and ignored
                         * since we need the interval to keep running while on STS UI.
                         */
                        href = popupWindow.location.href;
                    }
                    catch (e) { }
                    // Don't process blank pages or cross domain
                    if (StringUtils.isEmpty(href) || href === "about:blank") {
                        return;
                    }
                    // Only run clock when we are on same domain
                    ticks++;
                    var contentHash = popupWindow.location.hash;
                    if (UrlString.hashContainsKnownProperties(contentHash)) {
                        // Success case
                        _this.cleanPopup(popupWindow);
                        clearInterval(intervalId);
                        resolve(contentHash);
                        return;
                    }
                    else if (ticks > maxTicks) {
                        // Timeout error
                        _this.cleanPopup(popupWindow);
                        clearInterval(intervalId);
                        reject(BrowserAuthError.createMonitorPopupTimeoutError());
                        return;
                    }
                }, BrowserConstants.POLL_INTERVAL_MS);
            });
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
        PopupHandler.prototype.openPopup = function (urlNavigate, popupName, popup) {
            try {
                var popupWindow = void 0;
                // Popup window passed in, setting url to navigate to
                if (popup) {
                    popupWindow = popup;
                    popupWindow.location.assign(urlNavigate);
                }
                else if (typeof popup === "undefined") {
                    // Popup will be undefined if it was not passed in
                    popupWindow = PopupHandler.openSizedPopup(urlNavigate, popupName);
                }
                // Popup will be null if popups are blocked
                if (!popupWindow) {
                    throw BrowserAuthError.createEmptyWindowCreatedError();
                }
                if (popupWindow.focus) {
                    popupWindow.focus();
                }
                this.currentWindow = popupWindow;
                window.addEventListener("beforeunload", this.unloadWindow);
                return popupWindow;
            }
            catch (e) {
                this.authModule.logger.error("error opening popup " + e.message);
                this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.INTERACTION_STATUS_KEY));
                throw BrowserAuthError.createPopupWindowError(e.toString());
            }
        };
        PopupHandler.openSizedPopup = function (urlNavigate, popupName) {
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
            var left = Math.max(0, ((width / 2) - (BrowserConstants.POPUP_WIDTH / 2)) + winLeft);
            var top = Math.max(0, ((height / 2) - (BrowserConstants.POPUP_HEIGHT / 2)) + winTop);
            return window.open(urlNavigate, popupName, "width=" + BrowserConstants.POPUP_WIDTH + ", height=" + BrowserConstants.POPUP_HEIGHT + ", top=" + top + ", left=" + left + ", scrollbars=yes");
        };
        /**
         * Event callback to unload main window.
         */
        PopupHandler.prototype.unloadWindow = function (e) {
            this.browserStorage.cleanRequestByInteractionType(exports.InteractionType.Popup);
            if (this.currentWindow) {
                this.currentWindow.close();
            }
            // Guarantees browser unload will happen, so no other errors will be thrown.
            e.preventDefault();
        };
        /**
         * Closes popup, removes any state vars created during popup calls.
         * @param popupWindow
         */
        PopupHandler.prototype.cleanPopup = function (popupWindow) {
            if (popupWindow) {
                // Close window.
                popupWindow.close();
            }
            // Remove window unload function
            window.removeEventListener("beforeunload", this.unloadWindow);
            // Interaction is completed - remove interaction status.
            this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.INTERACTION_STATUS_KEY));
        };
        /**
         * Generates the name for the popup based on the client id and request
         * @param clientId
         * @param request
         */
        PopupHandler.generatePopupName = function (clientId, request) {
            return "msal." + clientId + "." + request.scopes.join("-") + "." + request.authority + "." + request.correlationId;
        };
        return PopupHandler;
    }(InteractionHandler));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var SilentHandler = /** @class */ (function (_super) {
        __extends(SilentHandler, _super);
        function SilentHandler(authCodeModule, storageImpl, authCodeRequest, navigateFrameWait) {
            var _this = _super.call(this, authCodeModule, storageImpl, authCodeRequest) || this;
            _this.navigateFrameWait = navigateFrameWait;
            return _this;
        }
        /**
         * Creates a hidden iframe to given URL using user-requested scopes as an id.
         * @param urlNavigate
         * @param userRequestScopes
         */
        SilentHandler.prototype.initiateAuthRequest = function (requestUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (StringUtils.isEmpty(requestUrl)) {
                                // Throw error if request URL is empty.
                                this.authModule.logger.info("Navigate url is empty");
                                throw BrowserAuthError.createEmptyNavigationUriError();
                            }
                            if (!this.navigateFrameWait) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.loadFrame(requestUrl)];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            _a = this.loadFrameSync(requestUrl);
                            _b.label = 3;
                        case 3: return [2 /*return*/, _a];
                    }
                });
            });
        };
        /**
         * Monitors an iframe content window until it loads a url with a known hash, or hits a specified timeout.
         * @param iframe
         * @param timeout
         */
        SilentHandler.prototype.monitorIframeForHash = function (iframe, timeout) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (timeout < DEFAULT_IFRAME_TIMEOUT_MS) {
                    _this.authModule.logger.warning("system.loadFrameTimeout or system.iframeHashTimeout set to lower (" + timeout + "ms) than the default (" + DEFAULT_IFRAME_TIMEOUT_MS + "ms). This may result in timeouts.");
                }
                /*
                 * Polling for iframes can be purely timing based,
                 * since we don't need to account for interaction.
                 */
                var nowMark = window.performance.now();
                var timeoutMark = nowMark + timeout;
                var intervalId = setInterval(function () {
                    if (window.performance.now() > timeoutMark) {
                        _this.removeHiddenIframe(iframe);
                        clearInterval(intervalId);
                        reject(BrowserAuthError.createMonitorIframeTimeoutError());
                        return;
                    }
                    var href = Constants.EMPTY_STRING;
                    var contentWindow = iframe.contentWindow;
                    try {
                        /*
                         * Will throw if cross origin,
                         * which should be caught and ignored
                         * since we need the interval to keep running while on STS UI.
                         */
                        href = contentWindow ? contentWindow.location.href : Constants.EMPTY_STRING;
                    }
                    catch (e) { }
                    if (StringUtils.isEmpty(href)) {
                        return;
                    }
                    var contentHash = contentWindow ? contentWindow.location.hash : Constants.EMPTY_STRING;
                    if (UrlString.hashContainsKnownProperties(contentHash)) {
                        // Success case
                        _this.removeHiddenIframe(iframe);
                        clearInterval(intervalId);
                        resolve(contentHash);
                        return;
                    }
                }, BrowserConstants.POLL_INTERVAL_MS);
            });
        };
        /**
         * @hidden
         * Loads iframe with authorization endpoint URL
         * @ignore
         */
        SilentHandler.prototype.loadFrame = function (urlNavigate) {
            /*
             * This trick overcomes iframe navigation in IE
             * IE does not load the page consistently in iframe
             */
            var _this = this;
            return new Promise(function (resolve, reject) {
                var frameHandle = _this.createHiddenIframe();
                setTimeout(function () {
                    if (!frameHandle) {
                        reject("Unable to load iframe");
                        return;
                    }
                    frameHandle.src = urlNavigate;
                    resolve(frameHandle);
                }, _this.navigateFrameWait);
            });
        };
        /**
         * @hidden
         * Loads the iframe synchronously when the navigateTimeFrame is set to `0`
         * @param urlNavigate
         * @param frameName
         * @param logger
         */
        SilentHandler.prototype.loadFrameSync = function (urlNavigate) {
            var frameHandle = this.createHiddenIframe();
            frameHandle.src = urlNavigate;
            return frameHandle;
        };
        /**
         * @hidden
         * Creates a new hidden iframe or gets an existing one for silent token renewal.
         * @ignore
         */
        SilentHandler.prototype.createHiddenIframe = function () {
            var authFrame = document.createElement("iframe");
            authFrame.style.visibility = "hidden";
            authFrame.style.position = "absolute";
            authFrame.style.width = authFrame.style.height = "0";
            authFrame.style.border = "0";
            authFrame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
            document.getElementsByTagName("body")[0].appendChild(authFrame);
            return authFrame;
        };
        /**
         * @hidden
         * Removes a hidden iframe from the page.
         * @ignore
         */
        SilentHandler.prototype.removeHiddenIframe = function (iframe) {
            if (document.body === iframe.parentNode) {
                document.body.removeChild(iframe);
            }
        };
        return SilentHandler;
    }(InteractionHandler));

    /* eslint-disable header/header */
    var name$1 = "@azure/msal-browser";
    var version$1 = "2.12.0";

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    (function (EventType) {
        EventType["LOGIN_START"] = "msal:loginStart";
        EventType["LOGIN_SUCCESS"] = "msal:loginSuccess";
        EventType["LOGIN_FAILURE"] = "msal:loginFailure";
        EventType["ACQUIRE_TOKEN_START"] = "msal:acquireTokenStart";
        EventType["ACQUIRE_TOKEN_SUCCESS"] = "msal:acquireTokenSuccess";
        EventType["ACQUIRE_TOKEN_FAILURE"] = "msal:acquireTokenFailure";
        EventType["ACQUIRE_TOKEN_NETWORK_START"] = "msal:acquireTokenFromNetworkStart";
        EventType["SSO_SILENT_START"] = "msal:ssoSilentStart";
        EventType["SSO_SILENT_SUCCESS"] = "msal:ssoSilentSuccess";
        EventType["SSO_SILENT_FAILURE"] = "msal:ssoSilentFailure";
        EventType["HANDLE_REDIRECT_START"] = "msal:handleRedirectStart";
        EventType["HANDLE_REDIRECT_END"] = "msal:handleRedirectEnd";
        EventType["LOGOUT_START"] = "msal:logoutStart";
        EventType["LOGOUT_SUCCESS"] = "msal:logoutSuccess";
        EventType["LOGOUT_FAILURE"] = "msal:logoutFailure";
    })(exports.EventType || (exports.EventType = {}));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var ClientApplication = /** @class */ (function () {
        /**
         * @constructor
         * Constructor for the PublicClientApplication used to instantiate the PublicClientApplication object
         *
         * Important attributes in the Configuration object for auth are:
         * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
         * - authority: the authority URL for your application.
         * - redirect_uri: the uri of your application registered in the portal.
         *
         * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
         * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
         * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
         * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
         * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
         * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
         *
         * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
         * Full B2C functionality will be available in this library in future versions.
         *
         * @param configuration Object for the MSAL PublicClientApplication instance
         */
        function ClientApplication(configuration) {
            /*
             * If loaded in an environment where window is not available,
             * set internal flag to false so that further requests fail.
             * This is to support server-side rendering environments.
             */
            this.isBrowserEnvironment = typeof window !== "undefined";
            // Set the configuration.
            this.config = buildConfiguration(configuration, this.isBrowserEnvironment);
            this.activeLocalAccountId = null;
            // Array of events
            this.eventCallbacks = new Map();
            // Initialize logger
            this.logger = new Logger(this.config.system.loggerOptions, name$1, version$1);
            // Initialize the network module class.
            this.networkClient = this.config.system.networkClient;
            // Initialize the navigation client class.
            this.navigationClient = this.config.system.navigationClient;
            // Initialize redirectResponse Map
            this.redirectResponse = new Map();
            if (!this.isBrowserEnvironment) {
                this.browserStorage = DEFAULT_BROWSER_CACHE_MANAGER(this.config.auth.clientId, this.logger);
                this.browserCrypto = DEFAULT_CRYPTO_IMPLEMENTATION;
                return;
            }
            // Initialize the crypto class.
            this.browserCrypto = new CryptoOps();
            // Initialize the browser storage class.
            this.browserStorage = new BrowserCacheManager(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger);
        }
        // #region Redirect Flow
        /**
         * Event handler function which allows users to fire events after the PublicClientApplication object
         * has loaded during redirect flows. This should be invoked on all page loads involved in redirect
         * auth flows.
         * @param hash Hash to process. Defaults to the current value of window.location.hash. Only needs to be provided explicitly if the response to be handled is not contained in the current value.
         * @returns Token response or null. If the return value is null, then no auth redirect was detected.
         */
        ClientApplication.prototype.handleRedirectPromise = function (hash) {
            return __awaiter(this, void 0, void 0, function () {
                var loggedInAccounts, redirectResponseKey, response;
                var _this = this;
                return __generator(this, function (_a) {
                    this.emitEvent(exports.EventType.HANDLE_REDIRECT_START, exports.InteractionType.Redirect);
                    this.logger.verbose("handleRedirectPromise called");
                    loggedInAccounts = this.getAllAccounts();
                    if (this.isBrowserEnvironment) {
                        redirectResponseKey = hash || Constants.EMPTY_STRING;
                        response = this.redirectResponse.get(redirectResponseKey);
                        if (typeof response === "undefined") {
                            this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise");
                            response = this.handleRedirectResponse(hash)
                                .then(function (result) {
                                if (result) {
                                    // Emit login event if number of accounts change
                                    var isLoggingIn = loggedInAccounts.length < _this.getAllAccounts().length;
                                    if (isLoggingIn) {
                                        _this.emitEvent(exports.EventType.LOGIN_SUCCESS, exports.InteractionType.Redirect, result);
                                        _this.logger.verbose("handleRedirectResponse returned result, login success");
                                    }
                                    else {
                                        _this.emitEvent(exports.EventType.ACQUIRE_TOKEN_SUCCESS, exports.InteractionType.Redirect, result);
                                        _this.logger.verbose("handleRedirectResponse returned result, acquire token success");
                                    }
                                }
                                _this.emitEvent(exports.EventType.HANDLE_REDIRECT_END, exports.InteractionType.Redirect);
                                return result;
                            })
                                .catch(function (e) {
                                // Emit login event if there is an account
                                if (loggedInAccounts.length > 0) {
                                    _this.emitEvent(exports.EventType.ACQUIRE_TOKEN_FAILURE, exports.InteractionType.Redirect, null, e);
                                }
                                else {
                                    _this.emitEvent(exports.EventType.LOGIN_FAILURE, exports.InteractionType.Redirect, null, e);
                                }
                                _this.emitEvent(exports.EventType.HANDLE_REDIRECT_END, exports.InteractionType.Redirect);
                                throw e;
                            });
                            this.redirectResponse.set(redirectResponseKey, response);
                        }
                        else {
                            this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call");
                        }
                        return [2 /*return*/, response];
                    }
                    this.logger.verbose("handleRedirectPromise returns null, not browser environment");
                    return [2 /*return*/, null];
                });
            });
        };
        /**
         * Checks if navigateToLoginRequestUrl is set, and:
         * - if true, performs logic to cache and navigate
         * - if false, handles hash string and parses response
         * @param hash
         */
        ClientApplication.prototype.handleRedirectResponse = function (hash) {
            return __awaiter(this, void 0, void 0, function () {
                var responseHash, state, loginRequestUrl, loginRequestUrlNormalized, currentUrlNormalized, handleHashResult, navigationOptions, processHashOnRedirect, homepage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.interactionInProgress()) {
                                this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null.");
                                return [2 /*return*/, null];
                            }
                            responseHash = this.getRedirectResponseHash(hash || window.location.hash);
                            if (!responseHash) {
                                // Not a recognized server response hash or hash not associated with a redirect request
                                this.logger.info("handleRedirectPromise did not detect a response hash as a result of a redirect. Cleaning temporary cache.");
                                this.browserStorage.cleanRequestByInteractionType(exports.InteractionType.Redirect);
                                return [2 /*return*/, null];
                            }
                            try {
                                state = this.validateAndExtractStateFromHash(responseHash, exports.InteractionType.Redirect);
                                BrowserUtils.clearHash();
                                this.logger.verbose("State extracted from hash");
                            }
                            catch (e) {
                                this.logger.info("handleRedirectPromise was unable to extract state due to: " + e);
                                this.browserStorage.cleanRequestByInteractionType(exports.InteractionType.Redirect);
                                return [2 /*return*/, null];
                            }
                            loginRequestUrl = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, true) || "";
                            loginRequestUrlNormalized = UrlString.removeHashFromUrl(loginRequestUrl);
                            currentUrlNormalized = UrlString.removeHashFromUrl(window.location.href);
                            if (!(loginRequestUrlNormalized === currentUrlNormalized && this.config.auth.navigateToLoginRequestUrl)) return [3 /*break*/, 2];
                            // We are on the page we need to navigate to - handle hash
                            this.logger.verbose("Current page is loginRequestUrl, handling hash");
                            return [4 /*yield*/, this.handleHash(responseHash, state)];
                        case 1:
                            handleHashResult = _a.sent();
                            if (loginRequestUrl.indexOf("#") > -1) {
                                // Replace current hash with non-msal hash, if present
                                BrowserUtils.replaceHash(loginRequestUrl);
                            }
                            return [2 /*return*/, handleHashResult];
                        case 2:
                            if (!!this.config.auth.navigateToLoginRequestUrl) return [3 /*break*/, 3];
                            this.logger.verbose("NavigateToLoginRequestUrl set to false, handling hash");
                            return [2 /*return*/, this.handleHash(responseHash, state)];
                        case 3:
                            if (!!BrowserUtils.isInIframe()) return [3 /*break*/, 8];
                            /*
                             * Returned from authority using redirect - need to perform navigation before processing response
                             * Cache the hash to be retrieved after the next redirect
                             */
                            this.browserStorage.setTemporaryCache(TemporaryCacheKeys.URL_HASH, responseHash, true);
                            navigationOptions = {
                                apiId: exports.ApiId.handleRedirectPromise,
                                timeout: this.config.system.redirectNavigationTimeout,
                                noHistory: true
                            };
                            processHashOnRedirect = true;
                            if (!(!loginRequestUrl || loginRequestUrl === "null")) return [3 /*break*/, 5];
                            homepage = BrowserUtils.getHomepage();
                            // Cache the homepage under ORIGIN_URI to ensure cached hash is processed on homepage
                            this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, homepage, true);
                            this.logger.warning("Unable to get valid login request url from cache, redirecting to home page");
                            return [4 /*yield*/, this.navigationClient.navigateInternal(homepage, navigationOptions)];
                        case 4:
                            processHashOnRedirect = _a.sent();
                            return [3 /*break*/, 7];
                        case 5:
                            // Navigate to page that initiated the redirect request
                            this.logger.verbose("Navigating to loginRequestUrl: " + loginRequestUrl);
                            return [4 /*yield*/, this.navigationClient.navigateInternal(loginRequestUrl, navigationOptions)];
                        case 6:
                            processHashOnRedirect = _a.sent();
                            _a.label = 7;
                        case 7:
                            // If navigateInternal implementation returns false, handle the hash now
                            if (!processHashOnRedirect) {
                                return [2 /*return*/, this.handleHash(responseHash, state)];
                            }
                            _a.label = 8;
                        case 8: return [2 /*return*/, null];
                    }
                });
            });
        };
        /**
         * Gets the response hash for a redirect request
         * Returns null if interactionType in the state value is not "redirect" or the hash does not contain known properties
         * @param hash
         */
        ClientApplication.prototype.getRedirectResponseHash = function (hash) {
            this.logger.verbose("getRedirectResponseHash called");
            // Get current location hash from window or cache.
            var isResponseHash = UrlString.hashContainsKnownProperties(hash);
            var cachedHash = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.URL_HASH, true);
            this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.URL_HASH));
            if (isResponseHash) {
                this.logger.verbose("Hash contains known properties, returning response hash");
                return hash;
            }
            this.logger.verbose("Hash does not contain known properties, returning cached hash");
            return cachedHash;
        };
        /**
         * @param hash
         * @param interactionType
         */
        ClientApplication.prototype.validateAndExtractStateFromHash = function (hash, interactionType) {
            this.logger.verbose("validateAndExtractStateFromHash called");
            // Deserialize hash fragment response parameters.
            var serverParams = UrlString.getDeserializedHash(hash);
            if (!serverParams.state) {
                throw BrowserAuthError.createHashDoesNotContainStateError();
            }
            var platformStateObj = BrowserProtocolUtils.extractBrowserRequestState(this.browserCrypto, serverParams.state);
            if (!platformStateObj) {
                throw BrowserAuthError.createUnableToParseStateError();
            }
            if (platformStateObj.interactionType !== interactionType) {
                throw BrowserAuthError.createStateInteractionTypeMismatchError();
            }
            this.logger.verbose("Returning state from hash");
            return serverParams.state;
        };
        /**
         * Checks if hash exists and handles in window.
         * @param hash
         * @param state
         */
        ClientApplication.prototype.handleHash = function (hash, state) {
            return __awaiter(this, void 0, void 0, function () {
                var cachedRequest, serverTelemetryManager, currentAuthority, authClient, interactionHandler, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("handleHash called");
                            cachedRequest = this.browserStorage.getCachedRequest(state, this.browserCrypto);
                            serverTelemetryManager = this.initializeServerTelemetryManager(exports.ApiId.handleRedirectPromise, cachedRequest.correlationId);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            currentAuthority = this.browserStorage.getCachedAuthority(state);
                            if (!currentAuthority) {
                                throw BrowserAuthError.createNoCachedAuthorityError();
                            }
                            return [4 /*yield*/, this.createAuthCodeClient(serverTelemetryManager, currentAuthority)];
                        case 2:
                            authClient = _a.sent();
                            interactionHandler = new RedirectHandler(authClient, this.browserStorage, cachedRequest, this.browserCrypto);
                            return [4 /*yield*/, interactionHandler.handleCodeResponse(hash, state, authClient.authority, this.networkClient, this.config.auth.clientId)];
                        case 3: return [2 /*return*/, _a.sent()];
                        case 4:
                            e_1 = _a.sent();
                            serverTelemetryManager.cacheFailedRequest(e_1);
                            this.browserStorage.cleanRequestByInteractionType(exports.InteractionType.Redirect);
                            throw e_1;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
         * the page, so any code that follows this function will not execute.
         *
         * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
         * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
         *
         * @param request
         */
        ClientApplication.prototype.acquireTokenRedirect = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var isLoggedIn, validRequest, serverTelemetryManager, authCodeRequest, authClient, interactionHandler, navigateUrl, redirectStartPage, e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Preflight request
                            this.preflightBrowserEnvironmentCheck(exports.InteractionType.Redirect);
                            this.logger.verbose("acquireTokenRedirect called");
                            isLoggedIn = this.getAllAccounts().length > 0;
                            if (isLoggedIn) {
                                this.emitEvent(exports.EventType.ACQUIRE_TOKEN_START, exports.InteractionType.Redirect, request);
                            }
                            else {
                                this.emitEvent(exports.EventType.LOGIN_START, exports.InteractionType.Redirect, request);
                            }
                            validRequest = this.preflightInteractiveRequest(request, exports.InteractionType.Redirect);
                            serverTelemetryManager = this.initializeServerTelemetryManager(exports.ApiId.acquireTokenRedirect, validRequest.correlationId);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 5, , 6]);
                            return [4 /*yield*/, this.initializeAuthorizationCodeRequest(validRequest)];
                        case 2:
                            authCodeRequest = _a.sent();
                            return [4 /*yield*/, this.createAuthCodeClient(serverTelemetryManager, validRequest.authority)];
                        case 3:
                            authClient = _a.sent();
                            interactionHandler = new RedirectHandler(authClient, this.browserStorage, authCodeRequest, this.browserCrypto);
                            return [4 /*yield*/, authClient.getAuthCodeUrl(validRequest)];
                        case 4:
                            navigateUrl = _a.sent();
                            redirectStartPage = this.getRedirectStartPage(request.redirectStartPage);
                            // Show the UI once the url has been created. Response will come back in the hash, which will be handled in the handleRedirectCallback function.
                            return [2 /*return*/, interactionHandler.initiateAuthRequest(navigateUrl, {
                                    navigationClient: this.navigationClient,
                                    redirectTimeout: this.config.system.redirectNavigationTimeout,
                                    redirectStartPage: redirectStartPage,
                                    onRedirectNavigate: request.onRedirectNavigate
                                })];
                        case 5:
                            e_2 = _a.sent();
                            // If logged in, emit acquire token events
                            if (isLoggedIn) {
                                this.emitEvent(exports.EventType.ACQUIRE_TOKEN_FAILURE, exports.InteractionType.Redirect, null, e_2);
                            }
                            else {
                                this.emitEvent(exports.EventType.LOGIN_FAILURE, exports.InteractionType.Redirect, null, e_2);
                            }
                            serverTelemetryManager.cacheFailedRequest(e_2);
                            this.browserStorage.cleanRequestByState(validRequest.state);
                            throw e_2;
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        // #endregion
        // #region Popup Flow
        /**
         * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
         *
         * @param request
         *
         * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
         */
        ClientApplication.prototype.acquireTokenPopup = function (request) {
            var validRequest;
            try {
                this.preflightBrowserEnvironmentCheck(exports.InteractionType.Popup);
                this.logger.verbose("acquireTokenPopup called");
                validRequest = this.preflightInteractiveRequest(request, exports.InteractionType.Popup);
            }
            catch (e) {
                // Since this function is syncronous we need to reject
                return Promise.reject(e);
            }
            var popupName = PopupHandler.generatePopupName(this.config.auth.clientId, validRequest);
            // asyncPopups flag is true. Acquires token without first opening popup. Popup will be opened later asynchronously.
            if (this.config.system.asyncPopups) {
                this.logger.verbose("asyncPopups set to true, acquiring token");
                return this.acquireTokenPopupAsync(validRequest, popupName);
            }
            else {
                // asyncPopups flag is set to false. Opens popup before acquiring token.
                this.logger.verbose("asyncPopup set to false, opening popup before acquiring token");
                var popup = PopupHandler.openSizedPopup("about:blank", popupName);
                return this.acquireTokenPopupAsync(validRequest, popupName, popup);
            }
        };
        /**
         * Helper which obtains an access_token for your API via opening a popup window in the user's browser
         * @param validRequest
         * @param popupName
         * @param popup
         *
         * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
         */
        ClientApplication.prototype.acquireTokenPopupAsync = function (validRequest, popupName, popup) {
            return __awaiter(this, void 0, void 0, function () {
                var loggedInAccounts, serverTelemetryManager, authCodeRequest, authClient, navigateUrl, interactionHandler, popupParameters, popupWindow, hash, state, result, isLoggingIn, e_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("acquireTokenPopupAsync called");
                            loggedInAccounts = this.getAllAccounts();
                            if (loggedInAccounts.length > 0) {
                                this.emitEvent(exports.EventType.ACQUIRE_TOKEN_START, exports.InteractionType.Popup, validRequest);
                            }
                            else {
                                this.emitEvent(exports.EventType.LOGIN_START, exports.InteractionType.Popup, validRequest);
                            }
                            serverTelemetryManager = this.initializeServerTelemetryManager(exports.ApiId.acquireTokenPopup, validRequest.correlationId);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 7, , 8]);
                            return [4 /*yield*/, this.initializeAuthorizationCodeRequest(validRequest)];
                        case 2:
                            authCodeRequest = _a.sent();
                            return [4 /*yield*/, this.createAuthCodeClient(serverTelemetryManager, validRequest.authority)];
                        case 3:
                            authClient = _a.sent();
                            return [4 /*yield*/, authClient.getAuthCodeUrl(validRequest)];
                        case 4:
                            navigateUrl = _a.sent();
                            interactionHandler = new PopupHandler(authClient, this.browserStorage, authCodeRequest);
                            popupParameters = {
                                popup: popup,
                                popupName: popupName
                            };
                            popupWindow = interactionHandler.initiateAuthRequest(navigateUrl, popupParameters);
                            return [4 /*yield*/, interactionHandler.monitorPopupForHash(popupWindow, this.config.system.windowHashTimeout)];
                        case 5:
                            hash = _a.sent();
                            state = this.validateAndExtractStateFromHash(hash, exports.InteractionType.Popup);
                            // Remove throttle if it exists
                            ThrottlingUtils.removeThrottle(this.browserStorage, this.config.auth.clientId, authCodeRequest.authority, authCodeRequest.scopes);
                            return [4 /*yield*/, interactionHandler.handleCodeResponse(hash, state, authClient.authority, this.networkClient)];
                        case 6:
                            result = _a.sent();
                            isLoggingIn = loggedInAccounts.length < this.getAllAccounts().length;
                            if (isLoggingIn) {
                                this.emitEvent(exports.EventType.LOGIN_SUCCESS, exports.InteractionType.Popup, result);
                            }
                            else {
                                this.emitEvent(exports.EventType.ACQUIRE_TOKEN_SUCCESS, exports.InteractionType.Popup, result);
                            }
                            return [2 /*return*/, result];
                        case 7:
                            e_3 = _a.sent();
                            if (loggedInAccounts.length > 0) {
                                this.emitEvent(exports.EventType.ACQUIRE_TOKEN_FAILURE, exports.InteractionType.Popup, null, e_3);
                            }
                            else {
                                this.emitEvent(exports.EventType.LOGIN_FAILURE, exports.InteractionType.Popup, null, e_3);
                            }
                            serverTelemetryManager.cacheFailedRequest(e_3);
                            this.browserStorage.cleanRequestByState(validRequest.state);
                            throw e_3;
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        // #endregion
        // #region Silent Flow
        /**
         * This function uses a hidden iframe to fetch an authorization code from the eSTS. There are cases where this may not work:
         * - Any browser using a form of Intelligent Tracking Prevention
         * - If there is not an established session with the service
         *
         * In these cases, the request must be done inside a popup or full frame redirect.
         *
         * For the cases where interaction is required, you cannot send a request with prompt=none.
         *
         * If your refresh token has expired, you can use this function to fetch a new set of tokens silently as long as
         * you session on the server still exists.
         * @param request {@link SsoSilentRequest}
         *
         * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
         */
        ClientApplication.prototype.ssoSilent = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var silentTokenResult, e_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.preflightBrowserEnvironmentCheck(exports.InteractionType.Silent);
                            this.logger.verbose("ssoSilent called");
                            this.emitEvent(exports.EventType.SSO_SILENT_START, exports.InteractionType.Silent, request);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.acquireTokenByIframe(request, exports.ApiId.ssoSilent)];
                        case 2:
                            silentTokenResult = _a.sent();
                            this.emitEvent(exports.EventType.SSO_SILENT_SUCCESS, exports.InteractionType.Silent, silentTokenResult);
                            return [2 /*return*/, silentTokenResult];
                        case 3:
                            e_4 = _a.sent();
                            this.emitEvent(exports.EventType.SSO_SILENT_FAILURE, exports.InteractionType.Silent, null, e_4);
                            throw e_4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * This function uses a hidden iframe to fetch an authorization code from the eSTS. To be used for silent refresh token acquisition and renewal.
         * @param request
         * @param apiId - ApiId of the calling function. Used for telemetry.
         */
        ClientApplication.prototype.acquireTokenByIframe = function (request, apiId) {
            return __awaiter(this, void 0, void 0, function () {
                var silentRequest, serverTelemetryManager, authCodeRequest, authClient, navigateUrl, e_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("acquireTokenByIframe called");
                            // Check that we have some SSO data
                            if (StringUtils.isEmpty(request.loginHint) && StringUtils.isEmpty(request.sid) && (!request.account || StringUtils.isEmpty(request.account.username))) {
                                throw BrowserAuthError.createSilentSSOInsufficientInfoError();
                            }
                            // Check that prompt is set to none, throw error if it is set to anything else.
                            if (request.prompt && request.prompt !== PromptValue.NONE) {
                                throw BrowserAuthError.createSilentPromptValueError(request.prompt);
                            }
                            silentRequest = this.initializeAuthorizationRequest(__assign(__assign({}, request), { prompt: PromptValue.NONE }), exports.InteractionType.Silent);
                            serverTelemetryManager = this.initializeServerTelemetryManager(apiId, silentRequest.correlationId);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 6, , 7]);
                            return [4 /*yield*/, this.initializeAuthorizationCodeRequest(silentRequest)];
                        case 2:
                            authCodeRequest = _a.sent();
                            return [4 /*yield*/, this.createAuthCodeClient(serverTelemetryManager, silentRequest.authority)];
                        case 3:
                            authClient = _a.sent();
                            return [4 /*yield*/, authClient.getAuthCodeUrl(silentRequest)];
                        case 4:
                            navigateUrl = _a.sent();
                            return [4 /*yield*/, this.silentTokenHelper(navigateUrl, authCodeRequest, authClient)];
                        case 5: return [2 /*return*/, _a.sent()];
                        case 6:
                            e_5 = _a.sent();
                            serverTelemetryManager.cacheFailedRequest(e_5);
                            this.browserStorage.cleanRequestByState(silentRequest.state);
                            throw e_5;
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Use this function to obtain a token before every call to the API / resource provider
         *
         * MSAL return's a cached token when available
         * Or it send's a request to the STS to obtain a new token using a refresh token.
         *
         * @param {@link SilentRequest}
         *
         * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
         * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
         */
        ClientApplication.prototype.acquireTokenByRefreshToken = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var silentRequest, serverTelemetryManager, refreshTokenClient, e_6, isServerError, isInteractionRequiredError, isInvalidGrantError;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.emitEvent(exports.EventType.ACQUIRE_TOKEN_NETWORK_START, exports.InteractionType.Silent, request);
                            // block the reload if it occurred inside a hidden iframe
                            BrowserUtils.blockReloadInHiddenIframes();
                            silentRequest = __assign(__assign({}, request), this.initializeBaseRequest(request));
                            serverTelemetryManager = this.initializeServerTelemetryManager(exports.ApiId.acquireTokenSilent_silentFlow, silentRequest.correlationId);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 7]);
                            return [4 /*yield*/, this.createRefreshTokenClient(serverTelemetryManager, silentRequest.authority)];
                        case 2:
                            refreshTokenClient = _a.sent();
                            return [4 /*yield*/, refreshTokenClient.acquireTokenByRefreshToken(silentRequest)];
                        case 3: 
                        // Send request to renew token. Auth module will throw errors if token cannot be renewed.
                        return [2 /*return*/, _a.sent()];
                        case 4:
                            e_6 = _a.sent();
                            serverTelemetryManager.cacheFailedRequest(e_6);
                            isServerError = e_6 instanceof ServerError;
                            isInteractionRequiredError = e_6 instanceof InteractionRequiredAuthError;
                            isInvalidGrantError = (e_6.errorCode === BrowserConstants.INVALID_GRANT_ERROR);
                            if (!(isServerError && isInvalidGrantError && !isInteractionRequiredError)) return [3 /*break*/, 6];
                            this.logger.verbose("Refresh token expired or invalid, attempting acquire token by iframe");
                            return [4 /*yield*/, this.acquireTokenByIframe(request, exports.ApiId.acquireTokenSilent_authCode)];
                        case 5: return [2 /*return*/, _a.sent()];
                        case 6: throw e_6;
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Helper which acquires an authorization code silently using a hidden iframe from given url
         * using the scopes requested as part of the id, and exchanges the code for a set of OAuth tokens.
         * @param navigateUrl
         * @param userRequestScopes
         */
        ClientApplication.prototype.silentTokenHelper = function (navigateUrl, authCodeRequest, authClient) {
            return __awaiter(this, void 0, void 0, function () {
                var silentHandler, msalFrame, hash, state;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            silentHandler = new SilentHandler(authClient, this.browserStorage, authCodeRequest, this.config.system.navigateFrameWait);
                            return [4 /*yield*/, silentHandler.initiateAuthRequest(navigateUrl)];
                        case 1:
                            msalFrame = _a.sent();
                            return [4 /*yield*/, silentHandler.monitorIframeForHash(msalFrame, this.config.system.iframeHashTimeout)];
                        case 2:
                            hash = _a.sent();
                            state = this.validateAndExtractStateFromHash(hash, exports.InteractionType.Silent);
                            // Handle response from hash string
                            return [2 /*return*/, silentHandler.handleCodeResponse(hash, state, authClient.authority, this.networkClient)];
                    }
                });
            });
        };
        // #endregion
        // #region Logout
        /**
         * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
         * Default behaviour is to redirect the user to `window.location.href`.
         * @param logoutRequest
         */
        ClientApplication.prototype.logout = function (logoutRequest) {
            return __awaiter(this, void 0, void 0, function () {
                var validLogoutRequest, serverTelemetryManager, authClient, logoutUri, navigationOptions, navigate, e_7;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.preflightBrowserEnvironmentCheck(exports.InteractionType.Redirect);
                            this.logger.verbose("logout called");
                            validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
                            serverTelemetryManager = this.initializeServerTelemetryManager(exports.ApiId.logout, validLogoutRequest.correlationId);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 9, , 10]);
                            this.emitEvent(exports.EventType.LOGOUT_START, exports.InteractionType.Redirect, logoutRequest);
                            return [4 /*yield*/, this.createAuthCodeClient(serverTelemetryManager, logoutRequest && logoutRequest.authority)];
                        case 2:
                            authClient = _a.sent();
                            logoutUri = authClient.getLogoutUri(validLogoutRequest);
                            this.emitEvent(exports.EventType.LOGOUT_SUCCESS, exports.InteractionType.Redirect, validLogoutRequest);
                            if (!validLogoutRequest.account || AccountEntity.accountInfoIsEqual(validLogoutRequest.account, this.getActiveAccount())) {
                                this.logger.verbose("Account not valid on validLogoutRequest, setting active account to null");
                                this.setActiveAccount(null);
                            }
                            navigationOptions = {
                                apiId: exports.ApiId.logout,
                                timeout: this.config.system.redirectNavigationTimeout,
                                noHistory: false
                            };
                            if (!(logoutRequest && typeof logoutRequest.onRedirectNavigate === "function")) return [3 /*break*/, 6];
                            navigate = logoutRequest.onRedirectNavigate(logoutUri);
                            if (!(navigate !== false)) return [3 /*break*/, 4];
                            this.logger.verbose("Logout onRedirectNavigate did not return false, navigating");
                            return [4 /*yield*/, this.navigationClient.navigateExternal(logoutUri, navigationOptions)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                        case 4:
                            this.logger.verbose("Logout onRedirectNavigate returned false, stopping navigation");
                            _a.label = 5;
                        case 5: return [3 /*break*/, 8];
                        case 6: return [4 /*yield*/, this.navigationClient.navigateExternal(logoutUri, navigationOptions)];
                        case 7:
                            _a.sent();
                            return [2 /*return*/];
                        case 8: return [3 /*break*/, 10];
                        case 9:
                            e_7 = _a.sent();
                            serverTelemetryManager.cacheFailedRequest(e_7);
                            this.emitEvent(exports.EventType.LOGOUT_FAILURE, exports.InteractionType.Redirect, null, e_7);
                            throw e_7;
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        // #endregion
        // #region Account APIs
        /**
         * Returns all accounts that MSAL currently has data for.
         * (the account object is created at the time of successful login)
         * or empty array when no accounts are found
         * @returns Array of account objects in cache
         */
        ClientApplication.prototype.getAllAccounts = function () {
            this.logger.verbose("getAllAccounts called");
            return this.isBrowserEnvironment ? this.browserStorage.getAllAccounts() : [];
        };
        /**
         * Returns the signed in account matching username.
         * (the account object is created at the time of successful login)
         * or null when no matching account is found.
         * This API is provided for convenience but getAccountById should be used for best reliability
         * @param userName
         * @returns The account object stored in MSAL
         */
        ClientApplication.prototype.getAccountByUsername = function (userName) {
            var allAccounts = this.getAllAccounts();
            if (!StringUtils.isEmpty(userName) && allAccounts && allAccounts.length) {
                this.logger.verbose("Account matching username found, returning");
                this.logger.verbosePii("Returning signed-in accounts matching username: " + userName);
                return allAccounts.filter(function (accountObj) { return accountObj.username.toLowerCase() === userName.toLowerCase(); })[0] || null;
            }
            else {
                this.logger.verbose("getAccountByUsername: No matching account found, returning null");
                return null;
            }
        };
        /**
         * Returns the signed in account matching homeAccountId.
         * (the account object is created at the time of successful login)
         * or null when no matching account is found
         * @param homeAccountId
         * @returns The account object stored in MSAL
         */
        ClientApplication.prototype.getAccountByHomeId = function (homeAccountId) {
            var allAccounts = this.getAllAccounts();
            if (!StringUtils.isEmpty(homeAccountId) && allAccounts && allAccounts.length) {
                this.logger.verbose("Account matching homeAccountId found, returning");
                this.logger.verbosePii("Returning signed-in accounts matching homeAccountId: " + homeAccountId);
                return allAccounts.filter(function (accountObj) { return accountObj.homeAccountId === homeAccountId; })[0] || null;
            }
            else {
                this.logger.verbose("getAccountByHomeId: No matching account found, returning null");
                return null;
            }
        };
        /**
         * Returns the signed in account matching localAccountId.
         * (the account object is created at the time of successful login)
         * or null when no matching account is found
         * @param localAccountId
         * @returns The account object stored in MSAL
         */
        ClientApplication.prototype.getAccountByLocalId = function (localAccountId) {
            var allAccounts = this.getAllAccounts();
            if (!StringUtils.isEmpty(localAccountId) && allAccounts && allAccounts.length) {
                this.logger.verbose("Account matching localAccountId found, returning");
                this.logger.verbosePii("Returning signed-in accounts matching localAccountId: " + localAccountId);
                return allAccounts.filter(function (accountObj) { return accountObj.localAccountId === localAccountId; })[0] || null;
            }
            else {
                this.logger.verbose("getAccountByLocalId: No matching account found, returning null");
                return null;
            }
        };
        /**
         * Sets the account to use as the active account. If no account is passed to the acquireToken APIs, then MSAL will use this active account.
         * @param account
         */
        ClientApplication.prototype.setActiveAccount = function (account) {
            if (account) {
                this.logger.verbose("setActiveAccount: Active account set");
                this.activeLocalAccountId = account.localAccountId;
            }
            else {
                this.logger.verbose("setActiveAccount: No account passed, active account not set");
                this.activeLocalAccountId = null;
            }
        };
        /**
         * Gets the currently active account
         */
        ClientApplication.prototype.getActiveAccount = function () {
            if (!this.activeLocalAccountId) {
                this.logger.verbose("getActiveAccount: No active account");
                return null;
            }
            return this.getAccountByLocalId(this.activeLocalAccountId);
        };
        // #endregion
        // #region Helpers
        /**
         *
         * Use to get the redirect uri configured in MSAL or null.
         * @param requestRedirectUri
         * @returns Redirect URL
         *
         */
        ClientApplication.prototype.getRedirectUri = function (requestRedirectUri) {
            this.logger.verbose("getRedirectUri called");
            var redirectUri = requestRedirectUri || this.config.auth.redirectUri || BrowserUtils.getCurrentUri();
            return UrlString.getAbsoluteUrl(redirectUri, BrowserUtils.getCurrentUri());
        };
        /**
         * Use to get the redirectStartPage either from request or use current window
         * @param requestStartPage
         */
        ClientApplication.prototype.getRedirectStartPage = function (requestStartPage) {
            this.logger.verbose("getRedirectStartPage called");
            var redirectStartPage = requestStartPage || window.location.href;
            return UrlString.getAbsoluteUrl(redirectStartPage, BrowserUtils.getCurrentUri());
        };
        /**
         * Used to get a discovered version of the default authority.
         * @param requestAuthority
         */
        ClientApplication.prototype.getDiscoveredAuthority = function (requestAuthority) {
            return __awaiter(this, void 0, void 0, function () {
                var authorityOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("getDiscoveredAuthority called");
                            authorityOptions = {
                                protocolMode: this.config.auth.protocolMode,
                                knownAuthorities: this.config.auth.knownAuthorities,
                                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                                authorityMetadata: this.config.auth.authorityMetadata
                            };
                            if (!requestAuthority) return [3 /*break*/, 2];
                            this.logger.verbose("Creating discovered authority with request authority");
                            return [4 /*yield*/, AuthorityFactory.createDiscoveredInstance(requestAuthority, this.config.system.networkClient, this.browserStorage, authorityOptions)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            this.logger.verbose("Creating discovered authority with configured authority");
                            return [4 /*yield*/, AuthorityFactory.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient, this.browserStorage, authorityOptions)];
                        case 3: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Helper to check whether interaction is in progress.
         */
        ClientApplication.prototype.interactionInProgress = function () {
            // Check whether value in cache is present and equal to expected value
            return (this.browserStorage.getTemporaryCache(TemporaryCacheKeys.INTERACTION_STATUS_KEY, true)) === BrowserConstants.INTERACTION_IN_PROGRESS_VALUE;
        };
        /**
         * Creates an Authorization Code Client with the given authority, or the default authority.
         * @param serverTelemetryManager
         * @param authorityUrl
         */
        ClientApplication.prototype.createAuthCodeClient = function (serverTelemetryManager, authorityUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var clientConfig;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("createAuthCodeClient called");
                            return [4 /*yield*/, this.getClientConfiguration(serverTelemetryManager, authorityUrl)];
                        case 1:
                            clientConfig = _a.sent();
                            return [2 /*return*/, new AuthorizationCodeClient(clientConfig)];
                    }
                });
            });
        };
        /**
         * Creates an Silent Flow Client with the given authority, or the default authority.
         * @param serverTelemetryManager
         * @param authorityUrl
         */
        ClientApplication.prototype.createSilentFlowClient = function (serverTelemetryManager, authorityUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var clientConfig;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("createSilentFlowClient called");
                            return [4 /*yield*/, this.getClientConfiguration(serverTelemetryManager, authorityUrl)];
                        case 1:
                            clientConfig = _a.sent();
                            return [2 /*return*/, new SilentFlowClient(clientConfig)];
                    }
                });
            });
        };
        /**
         * Creates a Refresh Client with the given authority, or the default authority.
         * @param serverTelemetryManager
         * @param authorityUrl
         */
        ClientApplication.prototype.createRefreshTokenClient = function (serverTelemetryManager, authorityUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var clientConfig;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("createRefreshTokenClient called");
                            return [4 /*yield*/, this.getClientConfiguration(serverTelemetryManager, authorityUrl)];
                        case 1:
                            clientConfig = _a.sent();
                            return [2 /*return*/, new RefreshTokenClient(clientConfig)];
                    }
                });
            });
        };
        /**
         * Creates a Client Configuration object with the given request authority, or the default authority.
         * @param serverTelemetryManager
         * @param requestAuthority
         */
        ClientApplication.prototype.getClientConfiguration = function (serverTelemetryManager, requestAuthority) {
            return __awaiter(this, void 0, void 0, function () {
                var discoveredAuthority;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("getClientConfiguration called");
                            return [4 /*yield*/, this.getDiscoveredAuthority(requestAuthority)];
                        case 1:
                            discoveredAuthority = _a.sent();
                            return [2 /*return*/, {
                                    authOptions: {
                                        clientId: this.config.auth.clientId,
                                        authority: discoveredAuthority,
                                        clientCapabilities: this.config.auth.clientCapabilities
                                    },
                                    systemOptions: {
                                        tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds
                                    },
                                    loggerOptions: {
                                        loggerCallback: this.config.system.loggerOptions.loggerCallback,
                                        piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled
                                    },
                                    cryptoInterface: this.browserCrypto,
                                    networkInterface: this.networkClient,
                                    storageInterface: this.browserStorage,
                                    serverTelemetryManager: serverTelemetryManager,
                                    libraryInfo: {
                                        sku: BrowserConstants.MSAL_SKU,
                                        version: version$1,
                                        cpu: "",
                                        os: ""
                                    }
                                }];
                    }
                });
            });
        };
        /**
         * Helper to validate app environment before making a request.
         * @param request
         * @param interactionType
         */
        ClientApplication.prototype.preflightInteractiveRequest = function (request, interactionType) {
            this.logger.verbose("preflightInteractiveRequest called, validating app environment");
            // block the reload if it occurred inside a hidden iframe
            BrowserUtils.blockReloadInHiddenIframes();
            // Check if interaction is in progress. Throw error if true.
            if (this.interactionInProgress()) {
                throw BrowserAuthError.createInteractionInProgressError();
            }
            return this.initializeAuthorizationRequest(request, interactionType);
        };
        /**
         * Helper to validate app environment before making an auth request
         * * @param interactionType
         */
        ClientApplication.prototype.preflightBrowserEnvironmentCheck = function (interactionType) {
            this.logger.verbose("preflightBrowserEnvironmentCheck started");
            // Block request if not in browser environment
            BrowserUtils.blockNonBrowserEnvironment(this.isBrowserEnvironment);
            // Block redirects if in an iframe
            BrowserUtils.blockRedirectInIframe(interactionType, this.config.system.allowRedirectInIframe);
            // Block auth requests inside a hidden iframe
            BrowserUtils.blockReloadInHiddenIframes();
            // Block redirects if memory storage is enabled but storeAuthStateInCookie is not
            if (interactionType === exports.InteractionType.Redirect &&
                this.config.cache.cacheLocation === exports.BrowserCacheLocation.MemoryStorage &&
                !this.config.cache.storeAuthStateInCookie) {
                throw BrowserConfigurationAuthError.createInMemoryRedirectUnavailableError();
            }
        };
        /**
         * Initializer function for all request APIs
         * @param request
         */
        ClientApplication.prototype.initializeBaseRequest = function (request) {
            this.logger.verbose("Initializing BaseAuthRequest");
            var authority = request.authority || this.config.auth.authority;
            var scopes = __spread(((request && request.scopes) || []));
            var correlationId = (request && request.correlationId) || this.browserCrypto.createNewGuid();
            var validatedRequest = __assign(__assign({}, request), { correlationId: correlationId,
                authority: authority,
                scopes: scopes });
            return validatedRequest;
        };
        /**
         *
         * @param apiId
         * @param correlationId
         * @param forceRefresh
         */
        ClientApplication.prototype.initializeServerTelemetryManager = function (apiId, correlationId, forceRefresh) {
            this.logger.verbose("initializeServerTelemetryManager called");
            var telemetryPayload = {
                clientId: this.config.auth.clientId,
                correlationId: correlationId,
                apiId: apiId,
                forceRefresh: forceRefresh || false,
                wrapperSKU: this.wrapperSKU,
                wrapperVer: this.wrapperVer
            };
            return new ServerTelemetryManager(telemetryPayload, this.browserStorage);
        };
        /**
         * Helper to initialize required request parameters for interactive APIs and ssoSilent()
         * @param request
         * @param interactionType
         */
        ClientApplication.prototype.initializeAuthorizationRequest = function (request, interactionType) {
            this.logger.verbose("initializeAuthorizationRequest called");
            var redirectUri = this.getRedirectUri(request.redirectUri);
            var browserState = {
                interactionType: interactionType
            };
            var state = ProtocolUtils.setRequestState(this.browserCrypto, (request && request.state) || "", browserState);
            var authenticationScheme = request.authenticationScheme || exports.AuthenticationScheme.BEARER;
            var validatedRequest = __assign(__assign({}, this.initializeBaseRequest(request)), { redirectUri: redirectUri, state: state, nonce: request.nonce || this.browserCrypto.createNewGuid(), responseMode: ResponseMode.FRAGMENT, authenticationScheme: authenticationScheme });
            var account = request.account || this.getActiveAccount();
            if (account) {
                this.logger.verbose("Setting validated request account");
                this.logger.verbosePii("Setting validated request account: " + account);
                validatedRequest.account = account;
            }
            // Check for ADAL SSO
            if (StringUtils.isEmpty(validatedRequest.loginHint)) {
                // Only check for adal token if no SSO params are being used
                var adalIdTokenString = this.browserStorage.getTemporaryCache(PersistentCacheKeys.ADAL_ID_TOKEN);
                if (adalIdTokenString) {
                    var adalIdToken = new AuthToken(adalIdTokenString, this.browserCrypto);
                    this.browserStorage.removeItem(PersistentCacheKeys.ADAL_ID_TOKEN);
                    if (adalIdToken.claims && adalIdToken.claims.upn) {
                        this.logger.verbose("No SSO params used and ADAL token retrieved, setting ADAL upn as loginHint");
                        validatedRequest.loginHint = adalIdToken.claims.upn;
                    }
                }
            }
            this.browserStorage.updateCacheEntries(validatedRequest.state, validatedRequest.nonce, validatedRequest.authority);
            return validatedRequest;
        };
        /**
         * Generates an auth code request tied to the url request.
         * @param request
         */
        ClientApplication.prototype.initializeAuthorizationCodeRequest = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var generatedPkceParams, authCodeRequest;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.browserCrypto.generatePkceCodes()];
                        case 1:
                            generatedPkceParams = _a.sent();
                            authCodeRequest = __assign(__assign({}, request), { redirectUri: request.redirectUri, code: "", codeVerifier: generatedPkceParams.verifier });
                            request.codeChallenge = generatedPkceParams.challenge;
                            request.codeChallengeMethod = Constants.S256_CODE_CHALLENGE_METHOD;
                            return [2 /*return*/, authCodeRequest];
                    }
                });
            });
        };
        /**
         * Initializer for the logout request.
         * @param logoutRequest
         */
        ClientApplication.prototype.initializeLogoutRequest = function (logoutRequest) {
            this.logger.verbose("initializeLogoutRequest called");
            var validLogoutRequest = __assign({ correlationId: this.browserCrypto.createNewGuid() }, logoutRequest);
            /*
             * Only set redirect uri if logout request isn't provided or the set uri isn't null.
             * Otherwise, use passed uri, config, or current page.
             */
            if (!logoutRequest || logoutRequest.postLogoutRedirectUri !== null) {
                if (logoutRequest && logoutRequest.postLogoutRedirectUri) {
                    this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request");
                    validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(logoutRequest.postLogoutRedirectUri, BrowserUtils.getCurrentUri());
                }
                else if (this.config.auth.postLogoutRedirectUri === null) {
                    this.logger.verbose("postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect");
                }
                else if (this.config.auth.postLogoutRedirectUri) {
                    this.logger.verbose("Setting postLogoutRedirectUri to configured uri");
                    validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, BrowserUtils.getCurrentUri());
                }
                else {
                    this.logger.verbose("Setting postLogoutRedirectUri to current page");
                    validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(BrowserUtils.getCurrentUri(), BrowserUtils.getCurrentUri());
                }
            }
            else {
                this.logger.verbose("postLogoutRedirectUri passed as null, not settibng post logout redirect uri");
            }
            return validLogoutRequest;
        };
        /**
         * Emits events by calling callback with event message
         * @param eventType
         * @param interactionType
         * @param payload
         * @param error
         */
        ClientApplication.prototype.emitEvent = function (eventType, interactionType, payload, error) {
            var _this = this;
            if (this.isBrowserEnvironment) {
                var message_1 = {
                    eventType: eventType,
                    interactionType: interactionType || null,
                    payload: payload || null,
                    error: error || null,
                    timestamp: Date.now()
                };
                this.logger.info("Emitting event: " + eventType);
                this.eventCallbacks.forEach(function (callback, callbackId) {
                    _this.logger.verbose("Emitting event to callback " + callbackId + ": " + eventType);
                    callback.apply(null, [message_1]);
                });
            }
        };
        /**
         * Adds event callbacks to array
         * @param callback
         */
        ClientApplication.prototype.addEventCallback = function (callback) {
            if (this.isBrowserEnvironment) {
                var callbackId = this.browserCrypto.createNewGuid();
                this.eventCallbacks.set(callbackId, callback);
                this.logger.verbose("Event callback registered with id: " + callbackId);
                return callbackId;
            }
            return null;
        };
        /**
         * Removes callback with provided id from callback array
         * @param callbackId
         */
        ClientApplication.prototype.removeEventCallback = function (callbackId) {
            this.eventCallbacks.delete(callbackId);
            this.logger.verbose("Event callback " + callbackId + " removed.");
        };
        /**
         * Returns the logger instance
         */
        ClientApplication.prototype.getLogger = function () {
            return this.logger;
        };
        /**
         * Replaces the default logger set in configurations with new Logger with new configurations
         * @param logger Logger instance
         */
        ClientApplication.prototype.setLogger = function (logger) {
            this.logger = logger;
        };
        /**
         * Called by wrapper libraries (Angular & React) to set SKU and Version passed down to telemetry, logger, etc.
         * @param sku
         * @param version
         */
        ClientApplication.prototype.initializeWrapperLibrary = function (sku, version) {
            // Validate the SKU passed in is one we expect
            this.wrapperSKU = sku;
            this.wrapperVer = version;
        };
        /**
         * Sets navigation client
         * @param navigationClient
         */
        ClientApplication.prototype.setNavigationClient = function (navigationClient) {
            this.navigationClient = navigationClient;
        };
        return ClientApplication;
    }());

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * The PublicClientApplication class is the object exposed by the library to perform authentication and authorization functions in Single Page Applications
     * to obtain JWT tokens as described in the OAuth 2.0 Authorization Code Flow with PKCE specification.
     */
    var PublicClientApplication = /** @class */ (function (_super) {
        __extends(PublicClientApplication, _super);
        /**
         * @constructor
         * Constructor for the PublicClientApplication used to instantiate the PublicClientApplication object
         *
         * Important attributes in the Configuration object for auth are:
         * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
         * - authority: the authority URL for your application.
         * - redirect_uri: the uri of your application registered in the portal.
         *
         * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
         * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
         * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
         * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
         * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
         * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
         *
         * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
         * Full B2C functionality will be available in this library in future versions.
         *
         * @param configuration object for the MSAL PublicClientApplication instance
         */
        function PublicClientApplication(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
         * any code that follows this function will not execute.
         *
         * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
         * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
         *
         * @param request
         */
        PublicClientApplication.prototype.loginRedirect = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.logger.verbose("loginRedirect called");
                    return [2 /*return*/, this.acquireTokenRedirect(request || DEFAULT_REQUEST)];
                });
            });
        };
        /**
         * Use when initiating the login process via opening a popup window in the user's browser
         *
         * @param request
         *
         * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
         */
        PublicClientApplication.prototype.loginPopup = function (request) {
            this.logger.verbose("loginPopup called");
            return this.acquireTokenPopup(request || DEFAULT_REQUEST);
        };
        /**
         * Silently acquire an access token for a given set of scopes. Will use cached token if available, otherwise will attempt to acquire a new token from the network via refresh token.
         *
         * @param {@link (SilentRequest:type)}
         * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
         */
        PublicClientApplication.prototype.acquireTokenSilent = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var account, silentRequest, serverTelemetryManager, silentAuthClient, cachedToken, e_1, tokenRenewalResult, tokenRenewalError_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.preflightBrowserEnvironmentCheck(exports.InteractionType.Silent);
                            this.logger.verbose("acquireTokenSilent called");
                            account = request.account || this.getActiveAccount();
                            if (!account) {
                                throw BrowserAuthError.createNoAccountError();
                            }
                            silentRequest = __assign(__assign(__assign({}, request), this.initializeBaseRequest(request)), { account: account, forceRefresh: request.forceRefresh || false });
                            this.emitEvent(exports.EventType.ACQUIRE_TOKEN_START, exports.InteractionType.Silent, request);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 9]);
                            serverTelemetryManager = this.initializeServerTelemetryManager(exports.ApiId.acquireTokenSilent_silentFlow, silentRequest.correlationId);
                            return [4 /*yield*/, this.createSilentFlowClient(serverTelemetryManager, silentRequest.authority)];
                        case 2:
                            silentAuthClient = _a.sent();
                            return [4 /*yield*/, silentAuthClient.acquireCachedToken(silentRequest)];
                        case 3:
                            cachedToken = _a.sent();
                            this.emitEvent(exports.EventType.ACQUIRE_TOKEN_SUCCESS, exports.InteractionType.Silent, cachedToken);
                            return [2 /*return*/, cachedToken];
                        case 4:
                            e_1 = _a.sent();
                            _a.label = 5;
                        case 5:
                            _a.trys.push([5, 7, , 8]);
                            return [4 /*yield*/, this.acquireTokenByRefreshToken(silentRequest)];
                        case 6:
                            tokenRenewalResult = _a.sent();
                            this.emitEvent(exports.EventType.ACQUIRE_TOKEN_SUCCESS, exports.InteractionType.Silent, tokenRenewalResult);
                            return [2 /*return*/, tokenRenewalResult];
                        case 7:
                            tokenRenewalError_1 = _a.sent();
                            this.emitEvent(exports.EventType.ACQUIRE_TOKEN_FAILURE, exports.InteractionType.Silent, null, tokenRenewalError_1);
                            throw tokenRenewalError_1;
                        case 8: return [3 /*break*/, 9];
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        return PublicClientApplication;
    }(ClientApplication));

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var stubbedPublicClientApplication = {
        acquireTokenPopup: function () {
            return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
        },
        acquireTokenRedirect: function () {
            return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
        },
        acquireTokenSilent: function () {
            return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
        },
        getAllAccounts: function () {
            return [];
        },
        getAccountByHomeId: function () {
            return null;
        },
        getAccountByUsername: function () {
            return null;
        },
        getAccountByLocalId: function () {
            return null;
        },
        handleRedirectPromise: function () {
            return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
        },
        loginPopup: function () {
            return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
        },
        loginRedirect: function () {
            return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
        },
        logout: function () {
            return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
        },
        ssoSilent: function () {
            return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
        },
        addEventCallback: function () {
            return null;
        },
        removeEventCallback: function () {
            return;
        },
        getLogger: function () {
            throw BrowserConfigurationAuthError.createStubPcaInstanceCalledError();
        },
        setLogger: function () {
            return;
        },
        setActiveAccount: function () {
            return;
        },
        getActiveAccount: function () {
            return null;
        },
        initializeWrapperLibrary: function () {
            return;
        },
        setNavigationClient: function () {
            return;
        }
    };

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var EventMessageUtils = /** @class */ (function () {
        function EventMessageUtils() {
        }
        /**
         * Gets interaction status from event message
         * @param message
         */
        EventMessageUtils.getInteractionStatusFromEvent = function (message) {
            switch (message.eventType) {
                case exports.EventType.LOGIN_START:
                    return exports.InteractionStatus.Login;
                case exports.EventType.SSO_SILENT_START:
                    return exports.InteractionStatus.SsoSilent;
                case exports.EventType.ACQUIRE_TOKEN_START:
                    if (message.interactionType === exports.InteractionType.Redirect || message.interactionType === exports.InteractionType.Popup) {
                        return exports.InteractionStatus.AcquireToken;
                    }
                    break;
                case exports.EventType.HANDLE_REDIRECT_START:
                    return exports.InteractionStatus.HandleRedirect;
                case exports.EventType.LOGOUT_START:
                    return exports.InteractionStatus.Logout;
                case exports.EventType.LOGIN_SUCCESS:
                case exports.EventType.SSO_SILENT_SUCCESS:
                case exports.EventType.HANDLE_REDIRECT_END:
                case exports.EventType.LOGIN_FAILURE:
                case exports.EventType.SSO_SILENT_FAILURE:
                case exports.EventType.LOGOUT_FAILURE:
                    return exports.InteractionStatus.None;
                case exports.EventType.ACQUIRE_TOKEN_SUCCESS:
                case exports.EventType.ACQUIRE_TOKEN_FAILURE:
                    if (message.interactionType === exports.InteractionType.Redirect || message.interactionType === exports.InteractionType.Popup) {
                        return exports.InteractionStatus.None;
                    }
                    break;
            }
            return null;
        };
        return EventMessageUtils;
    }());

    exports.AccountEntity = AccountEntity;
    exports.AuthError = AuthError;
    exports.AuthErrorMessage = AuthErrorMessage;
    exports.BrowserAuthError = BrowserAuthError;
    exports.BrowserAuthErrorMessage = BrowserAuthErrorMessage;
    exports.BrowserConfigurationAuthError = BrowserConfigurationAuthError;
    exports.BrowserConfigurationAuthErrorMessage = BrowserConfigurationAuthErrorMessage;
    exports.BrowserUtils = BrowserUtils;
    exports.EventMessageUtils = EventMessageUtils;
    exports.InteractionRequiredAuthError = InteractionRequiredAuthError;
    exports.Logger = Logger;
    exports.NavigationClient = NavigationClient;
    exports.PublicClientApplication = PublicClientApplication;
    exports.StringUtils = StringUtils;
    exports.UrlString = UrlString;
    exports.stubbedPublicClientApplication = stubbedPublicClientApplication;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=msal-browser.js.map
