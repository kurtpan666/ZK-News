var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// src/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => entry_server_default,
  handleRequest: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
var import_dotenv = __toModule(require("dotenv"));
import_dotenv.default.config();
var handleRequest = (request, responseStatusCode, responseHeaders, remixContext) => {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
};
var entry_server_default = handleRequest;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());
var meta = () => {
  return { title: "ZK News" };
};
var ErrorBoundary = (props) => {
  const { error } = props;
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no!"), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", null, "Something went wrong."), false, /* @__PURE__ */ React.createElement(import_remix2.Scripts, null)));
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "referrer",
    content: "origin"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), false));
}

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__blank/forgot.tsx
var forgot_exports = {};
__export(forgot_exports, {
  default: () => forgot_default
});
init_react();

// src/layouts/blank-layout.tsx
init_react();
function BlankLayout(props) {
  const { children } = props;
  return /* @__PURE__ */ React.createElement("div", {
    className: "WordSection1"
  }, children);
}

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__blank/forgot.tsx
function ForgotPage() {
  return /* @__PURE__ */ React.createElement(BlankLayout, null, /* @__PURE__ */ React.createElement("b", null, "Reset your password"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    action: "/x"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "fnid",
    value: "SW3mxENlH7rdjgxwWaobR5"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "fnop",
    value: "forgot-password"
  }), "username: ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "s",
    size: 20
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    value: "Send reset email"
  })));
}
var forgot_default = ForgotPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__blank/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => login_default,
  loader: () => loader
});
init_react();
var import_react = __toModule(require("react"));
var import_remix4 = __toModule(require_remix());

// src/utils/validation/user.ts
init_react();

// src/config.ts
init_react();
var POSTS_PER_PAGE = 30;
var PASSWORD_MAX_LENGTH = 100;
var PASSWORD_MIN_LENGTH = 8;
var USERID_MAX_LENGTH = 30;
var USERID_MIN_LENGTH = 3;

// src/utils/validation/validation-error.ts
init_react();
var ValidationCode;
(function(ValidationCode2) {
  ValidationCode2["ID"] = "id";
  ValidationCode2["PASSWORD"] = "pw";
})(ValidationCode || (ValidationCode = {}));
var ValidationError = class extends Error {
  constructor(err) {
    super(err.message);
    this.code = err.code;
    Error.captureStackTrace(this, ValidationError);
  }
};

// src/utils/validation/user.ts
function validateUserId(id) {
  if (id.length < USERID_MIN_LENGTH || id.length > USERID_MAX_LENGTH) {
    throw new ValidationError({
      code: ValidationCode.ID,
      message: `User ID must be between ${USERID_MIN_LENGTH} and ${USERID_MAX_LENGTH} characters.`
    });
  }
  return true;
}
function validateNewUser({ id, password }) {
  if (id.length < USERID_MIN_LENGTH || id.length > USERID_MAX_LENGTH) {
    throw new ValidationError({
      code: ValidationCode.ID,
      message: `User ID must be between ${USERID_MIN_LENGTH} and ${USERID_MAX_LENGTH} characters.`
    });
  }
  if (password.length < PASSWORD_MIN_LENGTH || password.length > PASSWORD_MAX_LENGTH) {
    throw new ValidationError({
      code: ValidationCode.PASSWORD,
      message: `User password must be between ${PASSWORD_MIN_LENGTH} and ${PASSWORD_MAX_LENGTH} characters.`
    });
  }
  return true;
}

// src/utils/user-login-error-code.ts
init_react();
var UserLoginErrorCode;
(function(UserLoginErrorCode3) {
  UserLoginErrorCode3["INCORRECT_PASSWORD"] = "pw";
  UserLoginErrorCode3["INVALID_ID"] = "invalid_id";
  UserLoginErrorCode3["LOGGED_IN"] = "loggedin";
  UserLoginErrorCode3["LOGGED_IN_REGISTER"] = "user";
  UserLoginErrorCode3["LOGIN_UNSUCCESSFUL"] = "unsuccessful";
  UserLoginErrorCode3["LOGIN_UPVOTE"] = "up";
  UserLoginErrorCode3["USERNAME_TAKEN"] = "id";
  UserLoginErrorCode3["SUBMIT"] = "submit";
})(UserLoginErrorCode || (UserLoginErrorCode = {}));
var userLoginErrorCodeMessages = {
  [UserLoginErrorCode.INCORRECT_PASSWORD]: "Incorrect password.",
  [UserLoginErrorCode.INVALID_ID]: `User ID must be between ${USERID_MIN_LENGTH} and ${USERID_MAX_LENGTH} characters.`,
  [UserLoginErrorCode.LOGGED_IN]: "Logged in user must logout before logging in again.",
  [UserLoginErrorCode.LOGGED_IN_REGISTER]: "Logged in user must logout before registering a new user.",
  [UserLoginErrorCode.LOGIN_UNSUCCESSFUL]: "Login unsuccessful.",
  [UserLoginErrorCode.LOGIN_UPVOTE]: "You have to be logged in to vote.",
  [UserLoginErrorCode.USERNAME_TAKEN]: "Username is taken.",
  [UserLoginErrorCode.SUBMIT]: "You have to be logged in to submit."
};
function getErrorMessageForLoginErrorCode(code) {
  return userLoginErrorCodeMessages[code];
}

// src/cookies.ts
init_react();
var import_remix3 = __toModule(require_remix());
var SessionCookieProperties;
(function(SessionCookieProperties2) {
  SessionCookieProperties2["USER_ID"] = "userId";
})(SessionCookieProperties || (SessionCookieProperties = {}));
var { getSession, commitSession, destroySession } = (0, import_remix3.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    secrets: ["insecure_example"],
    sameSite: "strict",
    maxAge: 604800
  }
});

// src/server/bootstrap.server.ts
init_react();
var import_app = __toModule(require("@firebase/app"));
var import_database2 = __toModule(require("@firebase/database"));

// src/server/config.server.ts
init_react();
var IS_SERVER = typeof window === "undefined";
var dev = false;
var HN_DB_URI = process.env.DB_URI || "https://hacker-news.firebaseio.com";
var HN_API_VERSION = process.env.HN_API_VERSION || "/v0";
var HN_API_URL = process.env.HN_API_URL || `${HN_DB_URI}${HN_API_VERSION}`;
var HOST_NAME = process.env.HOST_NAME || "localhost";
var APP_PORT = process.env.APP_PORT || 3e3;
var ORIGIN = !IS_SERVER ? window.location.origin : `http://${HOST_NAME}:${APP_PORT}`;
var passwordIterations = 1e4;

// src/server/database/cache.ts
init_react();
var import_debug = __toModule(require("debug"));
var import_lru_cache = __toModule(require("lru-cache"));

// src/server/models/index.ts
init_react();

// src/server/models/item-model.ts
init_react();

// src/server/models/feed.ts
init_react();
var FeedType;
(function(FeedType3) {
  FeedType3["TOP"] = "top";
  FeedType3["NEW"] = "new";
  FeedType3["BEST"] = "best";
  FeedType3["SHOW"] = "show";
  FeedType3["ASK"] = "ask";
  FeedType3["JOB"] = "job";
})(FeedType || (FeedType = {}));

// src/server/models/story-model.ts
init_react();

// src/utils/is-valid-url.ts
init_react();
function isValidStoryUrl(str) {
  const pattern = new RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$", "i");
  return pattern.test(str);
}

// src/server/models/story-model.ts
var newPostIdCounter = 100;
var StoryModel = class {
  constructor(fields) {
    if (!fields.id) {
      throw new Error(`Error instantiating News Item, id is required: ${fields.id}`);
    } else if (!fields.submitterId) {
      throw new Error(`Error instantiating News Item, submitterId is required: ${fields.id}`);
    } else if (!fields.title) {
      throw new Error(`Error instantiating News Item, title is required: ${fields.id}`);
    } else if (fields.url && !isValidStoryUrl(fields.url)) {
      throw new Error(`Error instantiating News Item ${fields.id}, invalid URL: ${fields.url}`);
    }
    this.id = fields.id || (newPostIdCounter += 1);
    this.commentCount = fields.commentCount || 0;
    this.comments = fields.comments || [];
    this.creationTime = fields.creationTime || +new Date();
    this.hides = fields.hides || [];
    this.hiddenCount = this.hides.length;
    this.submitterId = fields.submitterId;
    this.text = fields.text || null;
    this.title = fields.title;
    this.type = fields.type;
    this.upvoteCount = fields.upvoteCount || 1;
    this.upvotes = fields.upvotes || new Set([fields.submitterId]);
    this.url = fields.url;
  }
};

// src/server/models/user-model.ts
init_react();
var UserModel = class {
  constructor(props) {
    if (!props.id) {
      throw new Error(`Error instantiating User, id invalid: ${props.id}`);
    }
    validateUserId(props.id);
    this.id = props.id;
    this.about = props.about || "";
    this.creationTime = props.creationTime || +new Date();
    this.dateOfBirth = props.dateOfBirth || null;
    this.email = props.email || null;
    this.firstName = props.firstName || null;
    this.hides = props.hides || [];
    this.karma = props.karma || 1;
    this.lastName = props.lastName || null;
    this.likes = props.likes || [];
    this.posts = props.posts || [];
    this.hashedPassword = props.hashedPassword || void 0;
    this.passwordSalt = props.passwordSalt || void 0;
  }
};

// src/server/models/comment-model.ts
init_react();
var CommentModel = class {
  constructor(fields) {
    if (!fields.id) {
      throw new Error(`Error instantiating Comment, id invalid: ${fields.id}`);
    } else if (!fields.parent) {
      throw new Error(`Error instantiating Comment, parent invalid: ${fields.parent}`);
    } else if (!fields.submitterId) {
      throw new Error(`Error instantiating Comment, submitterId invalid: ${fields.submitterId}`);
    } else if (!fields.text) {
      throw new Error(`Error instantiating Comment, text invalid: ${fields.text}`);
    }
    this.id = fields.id;
    this.creationTime = fields.creationTime || +new Date();
    this.comments = fields.comments || [];
    this.parent = fields.parent;
    this.submitterId = fields.submitterId;
    this.text = fields.text;
    this.type = fields.type;
    this.upvotes = fields.upvotes || new Set();
  }
};

// src/server/sample-data.ts
init_react();
var now = Date.now() - 1e3;
var sampleData = {
  top: [
    1224,
    1225,
    1226,
    1222,
    1223,
    1227,
    1228,
    1229,
    1230,
    1231,
    1232,
    1233,
    1234,
    1235,
    1236,
    1237,
    1238,
    1239,
    1240,
    1241,
    1242,
    1243,
    1244,
    1245,
    1246,
    1247,
    1248,
    1249,
    1250,
    1251
  ],
  new: [
    1251,
    1250,
    1249,
    1248,
    1247,
    1246,
    1245,
    1244,
    1243,
    1242,
    1241,
    1240,
    1239,
    1238,
    1237,
    1236,
    1235,
    1234,
    1233,
    1232,
    1231,
    1230,
    1229,
    1228,
    1227,
    1226,
    1225,
    1224,
    1223,
    1222
  ],
  topStoriesCache: [
    {
      id: 1224,
      commentCount: 44,
      comments: [15289630, 15289567],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "\u201CLearning How to Learn,\u201D the most popular course on Coursera",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1225,
      commentCount: 38,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "luu",
      text: null,
      title: "Weird Python Integers",
      type: "story",
      upvoteCount: 125,
      upvotes: new Set(),
      url: "https://kate.io/blog/2017/08/22/weird-python-integers/"
    }
  ],
  newStoriesCache: [
    {
      id: 2e3,
      commentCount: 44,
      comments: [],
      creationTime: new Date().valueOf(),
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "new_user",
      text: null,
      title: "I love graphQL!!",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.graphql.org"
    }
  ],
  newsItems: [
    {
      id: 1224,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "\u201CLearning How to Learn,\u201D the most popular course on Coursera",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1225,
      commentCount: 38,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "luu",
      text: null,
      title: "Weird Python Integers",
      type: "story",
      upvoteCount: 125,
      upvotes: new Set(),
      url: "https://kate.io/blog/2017/08/22/weird-python-integers/"
    },
    {
      id: 1226,
      commentCount: 101,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "aLee",
      text: null,
      title: "I spent my career in tech and wasn\u2019t prepared for its effect on my kids",
      type: "story",
      upvoteCount: 90,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1222,
      commentCount: 0,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "clintonwoo",
      text: null,
      title: "Clinton wins again",
      type: "story",
      upvoteCount: 122,
      upvotes: new Set(["clintonwoo", "john"]),
      url: "https://www.shavelikeaboss.com.au"
    },
    {
      id: 1223,
      commentCount: 1,
      comments: [123331],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "john",
      text: "It's unbelievable.",
      title: "Clinton wins yet another time",
      type: "story",
      upvoteCount: 20,
      upvotes: new Set(),
      url: void 0
    },
    {
      id: 1227,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Water Found Deep Inside the Moon",
      type: "story",
      upvoteCount: 455,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1228,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "How did \u201CHandbook for Mortals\u201D get on the NYT bestseller list?",
      type: "story",
      upvoteCount: 331,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1229,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Titan in depth: Security in plaintext",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1230,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "The Librem 5: A Matrix-Native FLOSS Smartphone",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1231,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Generic GPU Kernels in Julia",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1232,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "VW Strike in Slovakia Exposes a European Divide",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1233,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Gtk-rs: The huge and long awaited release is finally here",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1234,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Rich Hickey's Greatest Hits",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1235,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Tesla\u2019s Push to Build a Self-Driving Car Sparks Dissent Among Its Engineers",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1236,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "How Redlining\u2019s Racist Effects Lasted for Decades",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1237,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Uber, Mired in Corporate Scandals, Sees Uptick in Bookings",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1238,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Feather: Open-source icons",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1239,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Spacex Launch Webcast: Formosat-5 Mission",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1240,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Ask HN: What is your favorite CS paper?",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1241,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Launch HN: Life Bot (YC S17) \u2013 Voice app to help with daily activities",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1242,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Debian reproducibility statistics",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1243,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "The Scotsmen Who Invented Modernity",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1244,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Deterministic Browser",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1245,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Deep Learning for Siri\u2019s Voice",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1246,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "I'm giving up on HPKP",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1247,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Introducing App Engine Firewall",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1248,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Profiling Internet Users in Africa: Insights from the Google Play Store",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1249,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Turing.jl: A Fresh Approach to Probabilistic Programming in Julia",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1250,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "GCC tiny",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    },
    {
      id: 1251,
      commentCount: 44,
      comments: [],
      creationTime: 1504740146516,
      hidden: false,
      hiddenCount: 0,
      hides: [],
      submitterId: "hvo",
      text: null,
      title: "Tesorio is hiring engineers and a product designer to modernize finance teams",
      type: "story",
      upvoteCount: 171,
      upvotes: new Set(),
      url: "https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well"
    }
  ],
  comments: [
    {
      comments: [],
      creationTime: now - 1e4,
      id: 15289630,
      parent: 1,
      submitterId: "megous",
      text: "It is part of it in this case. You&#x27;ve just eliminated most of non-targeted scanners. Your log is much more readable and what is left will probably be dedicated attackers.<p>This might help in forensic investigation afterwards. Less crap to wade through.",
      type: "comment",
      upvotes: new Set()
    },
    {
      comments: [15290063],
      creationTime: now - 3e4,
      id: 15289567,
      parent: 1,
      submitterId: "NeutronBoy",
      text: "&gt; Security through obscurity is not the solution, though<p>Security is about layers. Nothing is foolproof. It&#x27;s about implementing layers of controls to reduce your attack surface to an acceptable level, with the trade-off that many controls increase the complexity of your setup or compromises the convenience for your users.<p>For example, for SSH, this probably includes<p>* changing the default port<p>* enforcing SSH key authentication<p>* enforcing passwords on SSH keys<p>* implementing fail2ban<p>* installing jump hosts for internal machines<p>* implementing a VPN rather than external facing hosts (and with that comes all the additional layers for the VPN)<p>* etc...",
      type: "comment",
      upvotes: new Set()
    },
    {
      comments: [],
      creationTime: now - 5e4,
      id: 123331,
      parent: 1,
      submitterId: "mmargerum",
      text: 'Nice post! \r\n Question for you -- what are the performance implications of "re-keying" my records during the transform? Should I try to keep the same key for my transformed record as from my original record so that they align with the same partitions, or are they likely going to get sent to different partitions across different brokers anyway?',
      type: "comment",
      upvotes: new Set()
    },
    {
      comments: [],
      creationTime: now - 7e4,
      id: 123331,
      parent: 1,
      submitterId: "pgwhalen",
      text: "Vue/React/Svelte are pretty damned productive. 1/5 - 1/10th of typical server rendered or native UI LOC. If I never write another line of code directly manipulating UI controls I can die a happy man.",
      type: "comment",
      upvotes: new Set()
    },
    {
      comments: [],
      creationTime: now - 9e4,
      id: 123331,
      parent: 1,
      submitterId: "rererr",
      text: "Can you be precise about what they knew? Knowing a crash is coming isn\u2019t necessarily that interesting - a crash is always coming, it\u2019s just not clear on what time horizon, or what its secondary effects will be. \r\n JumpCrisscross did make the interesting point that the \u201Cbankers were selling crap\u201D narrative about the crisis is often overstated - the real reason that the situation was a crisis was the cascading liquidity issues, not so much defaulting debt.",
      type: "comment",
      upvotes: new Set()
    },
    {
      comments: [],
      creationTime: now - 11e4,
      id: 123331,
      parent: 1,
      submitterId: "reustle",
      text: "The arbitrary exceptions are pretty nice. In an industry I am aware of, people absolutely have to be onsite and also need to eat lunch. When lunch is being eaten in the cafeteria, you got a bunch of maskless people in the same room spread out at least six feet. It's been long established that the virus, particularly the omicron variant, easily spreads at distance. \r\n But those six feet, when blessed by corporate, make all the difference.",
      type: "comment",
      upvotes: new Set()
    },
    {
      comments: [],
      creationTime: now - 13e4,
      id: 123331,
      parent: 1,
      submitterId: "pcurve",
      text: "> At it\u2019s peak MySpace was one or two orders of magnitude smaller than Meta is today. \r\nWhile this may be true, what % of global internet DAUs did each of them house? I'm not sure if this relevant or not, but it seems the internet was just a much smaller place back then.",
      type: "comment",
      upvotes: new Set()
    },
    {
      comments: [],
      creationTime: now - 15e4,
      id: 123331,
      parent: 1,
      submitterId: "zeckalpha",
      text: `It's Jack Welsh playbook and it's stupid. I remember reading an interview with a head of company long time and he said something to the effect of "In any given company, top 20% of the workers push the company forward. middle 60% maintains status quo, and bottom 20% of the workers actively drag the company down." Interviewer ask: "why not just fire bottom 20%?" \r
His answer: "because, of the remaining, a new bottom 20% will be formed"`,
      type: "comment",
      upvotes: new Set()
    },
    {
      comments: [],
      creationTime: now - 17e4,
      id: 123331,
      parent: 1,
      submitterId: "clintonwoo",
      text: "I know this might come accross as bragging, but I just won the internet again.",
      type: "comment",
      upvotes: new Set(["clintonwoo", "john"])
    }
  ],
  users: [
    {
      id: "clintonwoo",
      about: "I am a software engineer who lives in New York.",
      creationTime: 1506024614e3,
      dateOfBirth: 723618e6,
      email: "clinton@hotmail.com",
      firstName: "Clinton",
      hashedPassword: "abc123",
      hides: [],
      karma: 3,
      lastName: "D'Annolfo",
      likes: [],
      passwordSalt: "123",
      posts: [1222]
    },
    {
      id: "john",
      about: "Just a bloke",
      creationTime: 1506024554e3,
      dateOfBirth: 5548752e5,
      email: "john@doe.com",
      firstName: "John",
      hashedPassword: "123",
      hides: [],
      karma: 1,
      lastName: "Doe",
      likes: [],
      passwordSalt: "abc",
      posts: [1223]
    }
  ]
};

// src/server/database/cache.ts
var logger = (0, import_debug.debug)("app:Cache");
logger.log = console.log.bind(console);
var STORY_MAX_AGE = 60 * 1e3;
var _a, _b, _c, _d, _e, _f;
var HnCache = class {
  constructor() {
    this.isReady = false;
    this[_a] = sampleData.top;
    this[_b] = sampleData.new;
    this[_c] = [];
    this[_d] = [];
    this[_e] = [];
    this[_f] = [];
    this.newComments = sampleData.comments;
    this.userCache = new import_lru_cache.default({
      max: 500,
      ttl: 1e3 * 60 * 60 * 2
    });
    this.itemCache = new import_lru_cache.default({
      max: 2e4,
      ttl: 1e3 * 60 * 5
    });
  }
  getStory(id) {
    return this.itemCache.get(id.toString());
  }
  setStory(id, newsItem) {
    return this.itemCache.set(id.toString(), newsItem, STORY_MAX_AGE);
  }
  getUser(id) {
    return this.userCache.get(id);
  }
  getUsers() {
    return this.userCache.dump();
  }
  setUser(id, user) {
    logger("Cache set user:", user);
    this.userCache.set(id, user);
    return user;
  }
  getComment(id) {
    return this.itemCache.get(id.toString());
  }
  setComment(id, comment) {
    this.itemCache.set(id.toString(), comment);
    logger("Cache set comment:", comment);
    return comment;
  }
  getItem(id) {
    return this.itemCache.get(id.toString());
  }
  setItem(id, item) {
    this.itemCache.set(id.toString(), item);
    logger("Cache set item:", item);
    return item;
  }
};
_a = FeedType.TOP, _b = FeedType.NEW, _c = FeedType.BEST, _d = FeedType.SHOW, _e = FeedType.ASK, _f = FeedType.JOB;

// src/server/database/feed-updater.ts
init_react();
var import_debug2 = __toModule(require("debug"));
var logger2 = (0, import_debug2.debug)("app:cache-warmer");
logger2.log = console.log.bind(console);
var TWO_MINUTES = 1e3 * 60 * 2;
async function updateFeed(db2, cache2, feedType) {
  setTimeout(() => updateFeed(db2, cache2, feedType), TWO_MINUTES);
  try {
    const feed = await db2.getFeed(feedType);
    if (feed) {
      cache2[feedType] = feed;
      logger2("Updated Feed ids for type: ", feedType);
    }
  } catch (err) {
    logger2("Error building feed: ", err);
  }
}
function watchFeeds(db2, cache2, delay2) {
  logger2("Waiting ms before seeding the app with data:", delay2);
  setTimeout(() => {
    logger2("Seeding cache");
    [FeedType.TOP, FeedType.NEW, FeedType.BEST, FeedType.SHOW, FeedType.ASK, FeedType.JOB].forEach((feedType) => updateFeed(db2, cache2, feedType));
  }, delay2);
}

// src/server/database/database.ts
init_react();
var import_debug3 = __toModule(require("debug"));
var import_database = __toModule(require("@firebase/database"));
var logger3 = (0, import_debug3.debug)("app:Database");
logger3.log = console.log.bind(console);
var newCommentIdCounter = 1e8;
var HnDatabase = class {
  constructor(db2, cache2) {
    this.db = db2;
    this.cache = cache2;
  }
  async fetchStory(id) {
    logger3("Fetching item:", `${HN_API_URL}/item/${id}.json`);
    return (0, import_database.get)((0, import_database.child)(this.db, `item/${id}`)).then((itemSnapshot) => {
      const item = itemSnapshot.val();
      if (item !== null) {
        const newsItem = new StoryModel({
          id: item.id,
          commentCount: item.descendants,
          comments: item.kids,
          creationTime: item.time * 1e3,
          submitterId: item.by,
          title: item.title,
          upvoteCount: item.score,
          url: item.url
        });
        this.cache.setStory(newsItem.id, newsItem);
        logger3("Saved item in cache:", item.id);
        return newsItem;
      }
      throw item;
    }).catch((reason) => logger3("Fetching post failed:", reason));
  }
  async fetchComment(id) {
    logger3("Fetching comment:", `${HN_API_URL}/item/${id}.json`);
    return (0, import_database.get)((0, import_database.child)(this.db, `item/${id}`)).then((itemSnapshot) => {
      const item = itemSnapshot.val();
      if (item !== null && !item.deleted && !item.dead) {
        const comment = new CommentModel({
          id: item.id,
          comments: item.kids,
          creationTime: item.time * 1e3,
          parent: item.parent,
          submitterId: item.by,
          text: item.text
        });
        this.cache.setComment(comment.id, comment);
        logger3("Created Comment:", item.id);
        return comment;
      }
      throw item;
    }).catch((reason) => logger3("Fetching comment failed:", reason));
  }
  async fetchUser(id) {
    logger3("Fetching user:", `${HN_API_URL}/user/${id}.json`);
    return (0, import_database.get)((0, import_database.child)(this.db, `user/${id}`)).then((itemSnapshot) => {
      const item = itemSnapshot.val();
      if (item !== null && !item.deleted && !item.dead) {
        const user = new UserModel({
          about: item.about,
          creationTime: item.created * 1e3,
          id: item.id,
          karma: item.karma,
          posts: item.submitted
        });
        this.cache.setUser(user.id, user);
        logger3("Created User:", item.id, item);
        return user;
      }
      throw item;
    }).catch((reason) => logger3("Fetching user failed:", reason));
  }
  async getFeed(feedType) {
    logger3("Fetching", `/${feedType}stories.json`);
    return (0, import_database.get)((0, import_database.child)(this.db, `${feedType}stories`)).then((feedSnapshot) => feedSnapshot.val()).then((feed) => feed.filter((newsItem) => newsItem !== void 0 && newsItem !== null)).catch((reason) => logger3("Fetching news feed failed:", reason));
  }
  getNewsItem(id) {
    return sampleData.newsItems.find((newsItem) => newsItem.id === id);
  }
  createNewsItem(newsItem) {
    sampleData.newsItems.push(newsItem);
    return newsItem;
  }
  async upvoteItem(id, userId) {
    const item = this.cache.getStory(id);
    if (item && !item.upvotes.has(userId)) {
      item.upvotes.add(userId);
      item.upvoteCount += 1;
      this.cache.setStory(id, item);
    }
    return item;
  }
  async unvoteItem(id, userId) {
    const item = this.cache.getStory(id);
    if (item && !item.upvotes.has(userId)) {
      item.upvotes.delete(userId);
      item.upvoteCount -= 1;
      this.cache.setStory(id, item);
    }
    return item;
  }
  async hideNewsItem(id, userId) {
    logger3("Hiding News Item id by userId:", id, userId);
    const newsItem = this.cache.getStory(id);
    const user = this.cache.getUser(userId);
    if (user && !user.hides.includes(id) && newsItem && !newsItem.hides.includes(userId)) {
      user.hides.push(id);
      this.cache.setUser(userId, user);
      newsItem.hides.push(userId);
      this.cache.setStory(id, newsItem);
      logger3("Hid News Item id by userId:", id, userId);
    } else {
      throw new Error(`Data error, user has already hidden ${id} by ${userId}`);
    }
    return newsItem;
  }
  async submitNewsItem(id, newsItem) {
    if (this.cache.setStory(id, newsItem)) {
      return newsItem;
    }
    throw new Error("Unable to submit News Item.");
  }
  async createComment(parent, submitterId, text) {
    return new CommentModel({ parent, submitterId, text, id: newCommentIdCounter++ });
  }
  async getNewNewsItems(first, skip) {
    return sampleData.newsItems.slice(skip, skip + first);
  }
  async getTopNewsItems(first, skip) {
    return sampleData.newsItems.slice(skip, skip + first);
  }
  async getHotNews() {
    return sampleData.newsItems;
  }
  async getNewsItems() {
    return sampleData.newsItems;
  }
  async getUser(id) {
    return sampleData.users.find((user) => user.id === id);
  }
  async getUsers() {
    return sampleData.users;
  }
  async createUser(user) {
    sampleData.users.push(user);
    return user;
  }
};

// src/server/services/comment-service.server.ts
init_react();
var import_debug4 = __toModule(require("debug"));

// src/server/responses/index.ts
init_react();

// src/server/responses/comment.ts
init_react();
function createResponseComment({ id, comments, creationTime, upvotes, parent, submitterId, text, type }, userId) {
  return {
    id,
    comments,
    creationTime,
    didUserUpvote: userId ? upvotes.has(userId) : false,
    parent,
    submitterId,
    text,
    type
  };
}

// src/server/responses/story.ts
init_react();
function ClientStory({
  commentCount,
  comments,
  creationTime,
  hidden,
  hiddenCount,
  id,
  submitterId,
  text,
  title,
  type,
  upvoteCount,
  upvotes,
  url
}, userId) {
  return {
    commentCount,
    comments,
    creationTime,
    didUserUpvote: userId ? upvotes.has(userId) : false,
    hidden,
    hiddenCount,
    id,
    submitterId,
    text,
    title,
    type,
    upvoteCount,
    url
  };
}

// src/server/responses/user.ts
init_react();

// src/server/services/comment-service.server.ts
var logger4 = (0, import_debug4.debug)("app:Comment");
logger4.log = console.log.bind(console);
var CommentService = class {
  constructor(db2, cache2) {
    this.db = db2;
    this.cache = cache2;
  }
  async getComment(id, userId) {
    const dbComment = await (this.cache.getComment(id) || this.db.fetchComment(id).catch((reason) => logger4("Rejected comment:", reason)));
    return dbComment ? createResponseComment(dbComment, userId) : void 0;
  }
  async getComments(ids, userId) {
    return Promise.all(ids.map((commentId) => this.getComment(commentId, userId))).then((comments) => comments.filter((comment) => comment !== void 0)).catch((reason) => logger4("Rejected comments:", reason));
  }
  async getCommentTree(ids, userId) {
    return Promise.all(ids.map(async (commentId) => {
      var _a2;
      if (Number.isNaN(Number(commentId))) {
        return commentId;
      }
      const comment = await this.getComment(commentId, userId);
      if ((_a2 = comment == null ? void 0 : comment.comments) == null ? void 0 : _a2.length) {
        comment.comments = await this.getCommentTree(comment.comments, userId);
      }
      return comment;
    })).then((comments) => comments.filter((comment) => comment !== void 0)).catch((reason) => logger4("Rejected comments:", reason));
  }
  async getNewComments(userId) {
    return this.cache.newComments.map((comment) => createResponseComment(__spreadProps(__spreadValues({}, comment), { comments: [] }), userId));
  }
  async createComment(parent, submitterId, text, userId) {
    const comment = await this.db.createComment(parent, submitterId, text);
    this.cache.setComment(comment.id, comment);
    const parentComment = this.cache.getComment(comment.parent);
    if (parentComment) {
      parentComment.comments.push(comment.id);
      this.cache.setComment(parentComment.id, parentComment);
    }
    return comment ? createResponseComment(comment, userId) : void 0;
  }
};

// src/server/services/feed-service.server.ts
init_react();
var import_debug5 = __toModule(require("debug"));
var logger5 = (0, import_debug5.debug)("app:Feed");
logger5.log = console.log.bind(console);
var FeedService = class {
  constructor(db2, cache2) {
    this.db = db2;
    this.cache = cache2;
  }
  async getForType(type, first, skip, userId) {
    logger5("Get first", first, type, "stories skip", skip);
    switch (type) {
      case FeedType.TOP: {
        const topStories = await Promise.all(this.cache.top.slice(skip, first + skip).map((id) => this.cache.getStory(id) || this.db.fetchStory(id)));
        return topStories.map((id) => id ? ClientStory(id, userId) : void 0);
      }
      case FeedType.NEW: {
        const newStories = await Promise.all(this.cache.new.slice(skip, first + skip).map((id) => this.cache.getStory(id) || this.db.fetchStory(id)));
        return newStories.map((id) => id ? ClientStory(id, userId) : void 0);
      }
      case FeedType.BEST: {
        const bestStories = await Promise.all(this.cache.best.slice(skip, first + skip).map((id) => this.cache.getStory(id) || this.db.fetchStory(id)));
        return bestStories.map((id) => id ? ClientStory(id, userId) : void 0);
      }
      case FeedType.SHOW: {
        const showStories = await Promise.all(this.cache.show.slice(skip, first + skip).map((id) => this.cache.getStory(id) || this.db.fetchStory(id)));
        return showStories.map((id) => id ? ClientStory(id, userId) : void 0);
      }
      case FeedType.ASK: {
        const askStories = await Promise.all(this.cache.ask.slice(skip, first + skip).map((id) => this.cache.getStory(id) || this.db.fetchStory(id)));
        return askStories.map((id) => id ? ClientStory(id, userId) : void 0);
      }
      case FeedType.JOB: {
        const jobStories = await Promise.all(this.cache.job.slice(skip, first + skip).map((id) => this.cache.getStory(id) || this.db.fetchStory(id)));
        return jobStories.map((id) => id ? ClientStory(id, userId) : void 0);
      }
      default:
        return sampleData.newsItems.slice(skip, skip + first).map((id) => id ? ClientStory(id, userId) : void 0);
    }
  }
};

// src/server/services/item-service.server.ts
init_react();
var import_debug6 = __toModule(require("debug"));
var logger6 = (0, import_debug6.debug)("app:NewsItem");
logger6.log = console.log.bind(console);
var ItemService = class {
  constructor(db2, cache2) {
    this.db = db2;
    this.cache = cache2;
  }
  async upvoteItem(id, userId) {
    return this.db.upvoteItem(id, userId);
  }
};

// src/server/services/story-service.server.ts
init_react();
var import_debug7 = __toModule(require("debug"));
var logger7 = (0, import_debug7.debug)("app:NewsItem");
logger7.log = console.log.bind(console);
var newPostIdCounter2 = 100;
var StoryService = class {
  constructor(db2, cache2) {
    this.db = db2;
    this.cache = cache2;
  }
  async getStory(id) {
    return this.cache.getStory(id) || this.db.getNewsItem(id) || this.db.fetchStory(id);
  }
  async getStories(ids) {
    return Promise.all(ids.map((id) => this.getStory(id))).then((newsItems) => newsItems.filter((newsItem) => newsItem !== void 0)).catch((reason) => logger7("Rejected News Items:", reason));
  }
  async hideStory(id, userId) {
    return this.db.hideNewsItem(id, userId);
  }
  async submitStory({ submitterId, title, text, url }) {
    const newsItem = new StoryModel({
      id: newPostIdCounter2 += 1,
      submitterId,
      text,
      title,
      url
    });
    return this.db.submitNewsItem(newsItem.id, newsItem);
  }
};

// src/server/services/user-service.server.ts
init_react();

// src/utils/hash-password.server.ts
init_react();
var crypto = __toModule(require("crypto"));
var createHash = (password, salt, iterations) => {
  return new Promise((resolve, reject) => {
    const saltBuffer = typeof salt === "string" ? Buffer.from(salt, "base64") : salt;
    const callback = (err, derivedKey) => err ? reject(err) : resolve(derivedKey.toString("base64"));
    crypto.pbkdf2(password, saltBuffer, iterations, 512 / 8, "sha512", callback);
  });
};
var createSalt = () => crypto.randomBytes(128).toString("base64");

// src/server/services/user-service.server.ts
var UserService = class {
  constructor(db2, cache2) {
    this.db = db2;
    this.cache = cache2;
  }
  async getUser(id) {
    return this.cache.getUser(id) || this.db.fetchUser(id);
  }
  async getPostsForUser(id) {
    return this.db.getNewsItems().filter((newsItem) => newsItem.submitterId === id);
  }
  async validatePassword(id, password) {
    const user = this.cache.getUser(id);
    if (user) {
      return await createHash(password, user.passwordSalt, passwordIterations) === user.hashedPassword;
    }
    return false;
  }
  async registerUser(user) {
    validateNewUser(user);
    if (this.cache.getUser(user.id)) {
      throw new Error("Username is taken.");
    }
    const passwordSalt = createSalt();
    const hashedPassword = await createHash(user.password, passwordSalt, passwordIterations);
    const newUser = new UserModel({
      hashedPassword,
      id: user.id,
      passwordSalt
    });
    this.cache.setUser(user.id, newUser);
    return newUser;
  }
  async updateUser(user) {
    const foundUser = this.cache.getUser(user.id);
    if (!foundUser) {
      throw new Error("User not found.");
    }
    if (user.email)
      foundUser.email = user.email;
    if (user.about)
      foundUser.about = user.about;
    this.cache.setUser(user.id, foundUser);
    return foundUser;
  }
};

// src/server/bootstrap.server.ts
var FIVE_SECONDS = 1e3 * 5;
var delay = dev ? FIVE_SECONDS : 0;
var firebaseApp = (0, import_app.initializeApp)({ databaseURL: HN_DB_URI });
var firebaseDb = (0, import_database2.getDatabase)(firebaseApp);
var firebaseRef = (0, import_database2.ref)(firebaseDb, HN_API_VERSION);
var cache = new HnCache();
var db = new HnDatabase(firebaseRef, cache);
watchFeeds(db, cache, delay);
var commentService = new CommentService(db, cache);
var feedService = new FeedService(db, cache);
var itemService = new ItemService(db, cache);
var newsItemService = new StoryService(db, cache);
var userService = new UserService(db, cache);

// src/utils/http-handlers.ts
init_react();
var URLSearchParamFields;
(function(URLSearchParamFields2) {
  URLSearchParamFields2["HOW"] = "how";
  URLSearchParamFields2["GOTO"] = "goto";
  URLSearchParamFields2["PAGE"] = "p";
  URLSearchParamFields2["ID"] = "id";
})(URLSearchParamFields || (URLSearchParamFields = {}));
var URLSearchParamHowValue;
(function(URLSearchParamHowValue2) {
  URLSearchParamHowValue2["UPVOTE"] = "up";
  URLSearchParamHowValue2["UNVOTE"] = "un";
})(URLSearchParamHowValue || (URLSearchParamHowValue = {}));
function getSearchParamsFromRequest(request) {
  return new URL(request.url).searchParams;
}
function isAsserted(value) {
  return value === void 0 || value === null || value === false;
}
function checkBadRequest(value, message) {
  if (isAsserted(value)) {
    throw new Response(message, { status: 400, statusText: "Bad Request" });
  }
  return;
}
function checkUnauthorized(value, message) {
  if (isAsserted(value)) {
    throw new Response(message, { status: 401, statusText: "Not Authorized" });
  }
  return;
}
function checkForbidden(value, message) {
  if (isAsserted(value)) {
    throw new Response(message, { status: 403, statusText: "Forbidden" });
  }
  return;
}
function checkNotFound(value, message) {
  if (isAsserted(value)) {
    throw new Response(message, { status: 404, statusText: "Not Found" });
  }
  return;
}

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__blank/login.tsx
var loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const data = { error: session.get("error") };
  return (0, import_remix4.json)(data, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};
var action = async (req) => {
  const session = await getSession(req.request.headers.get("Cookie"));
  const formData = await req.request.formData();
  const id = formData.get("id");
  const password = formData.get("password");
  const goto = formData.get("goto");
  const errors = {};
  if (!id)
    errors.id = true;
  if (!password)
    errors.password = true;
  if (Object.keys(errors).length > 0) {
    return (0, import_remix4.json)(errors);
  }
  const user = await userService.getUser(id);
  if (!user) {
    return (0, import_remix4.redirect)("/login?how=unsuccessful");
  }
  if (!await userService.validatePassword(id, password)) {
    return (0, import_remix4.redirect)("/login?how=unsuccessful");
  }
  session.set(SessionCookieProperties.USER_ID, user.id);
  return (0, import_remix4.redirect)(goto || "/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};
function LoginPage() {
  const [searchParams] = (0, import_remix4.useSearchParams)();
  const how = searchParams.get(URLSearchParamFields.HOW);
  const goto = searchParams.get(URLSearchParamFields.GOTO);
  const message = how ? getErrorMessageForLoginErrorCode(how) : void 0;
  const [loginId, setLoginId] = (0, import_react.useState)("");
  const [loginPassword, setLoginPassword] = (0, import_react.useState)("");
  const [registerId, setRegisterId] = (0, import_react.useState)("");
  const [registerPassword, setRegisterPassword] = (0, import_react.useState)("");
  const [validationMessage, setValidationMessage] = (0, import_react.useState)("");
  const validateLogin = (e) => {
    try {
      validateNewUser({ id: loginId, password: loginPassword });
    } catch (err) {
      e.preventDefault();
      setValidationMessage(err.message);
    }
  };
  const validateRegister = (e) => {
    try {
      validateNewUser({ id: registerId, password: registerPassword });
    } catch (err) {
      e.preventDefault();
      setValidationMessage(err.message);
    }
  };
  return /* @__PURE__ */ import_react.default.createElement(BlankLayout, null, message && /* @__PURE__ */ import_react.default.createElement("p", null, message), validationMessage && /* @__PURE__ */ import_react.default.createElement("p", null, validationMessage), /* @__PURE__ */ import_react.default.createElement("b", null, "Login"), /* @__PURE__ */ import_react.default.createElement("br", null), /* @__PURE__ */ import_react.default.createElement("br", null), /* @__PURE__ */ import_react.default.createElement(import_remix4.Form, {
    method: "post",
    action: "/login",
    onSubmit: (e) => validateLogin(e),
    style: { marginBottom: "1em" }
  }, /* @__PURE__ */ import_react.default.createElement("input", {
    type: "hidden",
    name: "goto",
    value: goto || "news"
  }), /* @__PURE__ */ import_react.default.createElement("table", {
    style: { border: "0px" }
  }, /* @__PURE__ */ import_react.default.createElement("tbody", null, /* @__PURE__ */ import_react.default.createElement("tr", null, /* @__PURE__ */ import_react.default.createElement("td", null, "username:"), /* @__PURE__ */ import_react.default.createElement("td", null, /* @__PURE__ */ import_react.default.createElement("input", {
    autoCapitalize: "off",
    autoCorrect: "off",
    name: "id",
    minLength: USERID_MIN_LENGTH,
    maxLength: USERID_MAX_LENGTH,
    onChange: (e) => setLoginId(e.target.value),
    size: 20,
    spellCheck: false,
    type: "text"
  }))), /* @__PURE__ */ import_react.default.createElement("tr", null, /* @__PURE__ */ import_react.default.createElement("td", null, "password:"), /* @__PURE__ */ import_react.default.createElement("td", null, /* @__PURE__ */ import_react.default.createElement("input", {
    type: "password",
    name: "password",
    minLength: PASSWORD_MIN_LENGTH,
    maxLength: PASSWORD_MAX_LENGTH,
    onChange: (e) => setLoginPassword(e.target.value),
    size: 20
  }))))), /* @__PURE__ */ import_react.default.createElement("br", null), /* @__PURE__ */ import_react.default.createElement("input", {
    type: "submit",
    value: "login"
  })), /* @__PURE__ */ import_react.default.createElement(import_remix4.Link, {
    to: "/forgot"
  }, "Forgot your password?"), /* @__PURE__ */ import_react.default.createElement("br", null), /* @__PURE__ */ import_react.default.createElement("br", null), /* @__PURE__ */ import_react.default.createElement("b", null, "Create Account"), /* @__PURE__ */ import_react.default.createElement("br", null), /* @__PURE__ */ import_react.default.createElement("br", null), /* @__PURE__ */ import_react.default.createElement(import_remix4.Form, {
    method: "post",
    action: "/register",
    onSubmit: (e) => validateRegister(e),
    style: { marginBottom: "1em" }
  }, /* @__PURE__ */ import_react.default.createElement("table", {
    style: { border: "0px" }
  }, /* @__PURE__ */ import_react.default.createElement("tbody", null, /* @__PURE__ */ import_react.default.createElement("tr", null, /* @__PURE__ */ import_react.default.createElement("td", null, "username:"), /* @__PURE__ */ import_react.default.createElement("td", null, /* @__PURE__ */ import_react.default.createElement("input", {
    type: "text",
    name: "id",
    minLength: USERID_MIN_LENGTH,
    maxLength: USERID_MAX_LENGTH,
    onChange: (e) => setRegisterId(e.target.value),
    size: 20,
    autoCorrect: "off",
    spellCheck: false,
    autoCapitalize: "off"
  }))), /* @__PURE__ */ import_react.default.createElement("tr", null, /* @__PURE__ */ import_react.default.createElement("td", null, "password:"), /* @__PURE__ */ import_react.default.createElement("td", null, /* @__PURE__ */ import_react.default.createElement("input", {
    type: "password",
    name: "password",
    minLength: PASSWORD_MIN_LENGTH,
    maxLength: PASSWORD_MAX_LENGTH,
    onChange: (e) => setRegisterPassword(e.target.value),
    size: 20
  }))))), /* @__PURE__ */ import_react.default.createElement("br", null), /* @__PURE__ */ import_react.default.createElement("input", {
    type: "submit",
    value: "create account"
  })));
}
var login_default = LoginPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__blank/dmca.tsx
var dmca_exports = {};
__export(dmca_exports, {
  DMCAPage: () => DMCAPage,
  default: () => dmca_default2,
  links: () => links,
  meta: () => meta2
});
init_react();

// src/assets/dmca.css
var dmca_default = "/build/_assets/dmca-C7PSAWFR.css";

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__blank/dmca.tsx
var spanStyle = { fontSize: "11.5pt", fontFamily: "Helvetica", color: "#444444" };
var paragraphStyle = { marginBottom: "7.5pt", lineHeight: "normal", background: "white" };
var liStyle = {
  color: "#444444",
  marginBottom: "15.0pt",
  lineHeight: "normal",
  background: "white"
};
var liSpanStyle = { fontSize: "10.5pt", fontFamily: "Helvetica" };
var paragraphStyle2 = {
  marginTop: "7.5pt",
  marginRight: "0in",
  marginBottom: "15.0pt",
  marginLeft: "0in",
  lineHeight: "normal",
  background: "white"
};
var bSpanStyle = { fontSize: "13.5pt", fontFamily: "Helvetica", color: "#444444" };
var links = () => [{ rel: "stylesheet", href: dmca_default, type: "text/css" }];
var meta2 = () => {
  return { title: "DMCA | Hacker News Clone" };
};
function DMCAPage() {
  return /* @__PURE__ */ React.createElement(BlankLayout, null, /* @__PURE__ */ React.createElement("p", {
    className: "MsoNormal",
    style: {
      marginBottom: "15.0pt",
      lineHeight: "normal",
      background: "white"
    }
  }, /* @__PURE__ */ React.createElement("span", {
    style: spanStyle
  }, "Y Combinator has adopted the following policy toward copyright infringement on the Services in accordance with the Digital Millennium Copyright Act (a copy of which is located at", " "), /* @__PURE__ */ React.createElement("a", {
    href: "http://www.loc.gov/copyright/legislation/dmca.pdf"
  }, /* @__PURE__ */ React.createElement("span", {
    style: { fontSize: "11.5pt", fontFamily: "Helvetica" }
  }, "http://www.loc.gov/copyright/legislation/dmca.pdf")), /* @__PURE__ */ React.createElement("span", {
    style: spanStyle
  }, ', the "', /* @__PURE__ */ React.createElement("b", null, "DMCA"), `"). The address of Y Combinator's Designated Agent for copyright takedown notices ("`, /* @__PURE__ */ React.createElement("b", null, "Designated Agent"), '") is listed below.')), /* @__PURE__ */ React.createElement("p", {
    className: "MsoNormal",
    style: paragraphStyle
  }, /* @__PURE__ */ React.createElement("b", null, /* @__PURE__ */ React.createElement("span", {
    style: bSpanStyle
  }, "Reporting Instances of Copyright Infringement:"))), /* @__PURE__ */ React.createElement("p", {
    className: "MsoNormal",
    style: paragraphStyle2
  }, /* @__PURE__ */ React.createElement("span", {
    style: spanStyle
  }, "If you believe that content residing or accessible on or through the our website (\u201CServices\u201D) infringes a copyright, please send a written notice (by fax or regular mail) to the Designated Agent at the address below.", " ", /* @__PURE__ */ React.createElement("b", null, "You may not communicate the information specified below by email. "), "Please note that you will be liable for damages (including costs and attorney\u2019s fees) if you materially misrepresent that material is infringing your copyright(s). Please use the following format (including section numbers) when you send written notice to us:", " ")), /* @__PURE__ */ React.createElement("ol", {
    style: { marginTop: "0in" },
    start: 1,
    type: "1"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "MsoNormal",
    style: liStyle
  }, /* @__PURE__ */ React.createElement("span", {
    style: liSpanStyle
  }, "Identification of the work or material being infringed. ", /* @__PURE__ */ React.createElement("i", null, "\xA0"))), /* @__PURE__ */ React.createElement("li", {
    className: "MsoNormal",
    style: liStyle
  }, /* @__PURE__ */ React.createElement("span", {
    style: liSpanStyle
  }, "Identification of the material that is claimed to be infringing, including its location, with sufficient detail so that Y Combinator is capable of finding it and verifying its existence.")), /* @__PURE__ */ React.createElement("li", {
    className: "MsoNormal",
    style: liStyle
  }, /* @__PURE__ */ React.createElement("span", {
    style: liSpanStyle
  }, 'Contact information for the notifying party (the "', /* @__PURE__ */ React.createElement("b", null, "Notifying Party"), '"), including name, address, telephone number and e-mail address.')), /* @__PURE__ */ React.createElement("li", {
    className: "MsoNormal",
    style: liStyle
  }, /* @__PURE__ */ React.createElement("span", {
    style: liSpanStyle
  }, "A statement that the Notifying Party has a good faith belief that the material is not authorized by the copyright owner, its agent or law.")), /* @__PURE__ */ React.createElement("li", {
    className: "MsoNormal",
    style: liStyle
  }, /* @__PURE__ */ React.createElement("span", {
    style: liSpanStyle
  }, "A statement made under penalty of perjury that the information provided in the notice is accurate and that the Notifying Party is either the copyright owner, or authorized to make the complaint on behalf of the copyright owner.")), /* @__PURE__ */ React.createElement("li", {
    className: "MsoNormal",
    style: liStyle
  }, /* @__PURE__ */ React.createElement("span", {
    style: liSpanStyle
  }, "A signature of the copyright owner, or a person authorized to act on behalf of the owner of the copyright that has been allegedly infringed."))), /* @__PURE__ */ React.createElement("p", {
    className: "MsoNormal",
    style: paragraphStyle2
  }, /* @__PURE__ */ React.createElement("span", {
    style: spanStyle
  }, "After removing material pursuant to a valid DMCA notice, Y Combinator will notify the Subscriber responsible for the allegedly infringing material that it has removed or disabled access to the material. Y Combinator reserves the right, in its sole discretion, to immediately terminate the account of any Subscriber who is the subject of repeated DMCA notifications.")), /* @__PURE__ */ React.createElement("p", {
    className: "MsoNormal",
    style: paragraphStyle
  }, /* @__PURE__ */ React.createElement("b", null, /* @__PURE__ */ React.createElement("span", {
    style: bSpanStyle
  }, "Submitting a DMCA Counter-Notification:"))), /* @__PURE__ */ React.createElement("p", {
    className: "MsoNormal",
    style: paragraphStyle2
  }, /* @__PURE__ */ React.createElement("span", {
    style: spanStyle
  }, "If you believe you are the wrongful subject of a DMCA notification, you may file a counter-notification with Y Combinator by providing the following information to the Designated Agent at the address below:")), /* @__PURE__ */ React.createElement("ul", {
    style: { listStyleType: "disc", marginTop: "0in" }
  }, /* @__PURE__ */ React.createElement("li", {
    className: "MsoNormal",
    style: liStyle
  }, /* @__PURE__ */ React.createElement("span", {
    style: liSpanStyle
  }, "The specific URLs of material that Y Combinator has removed or to which Y Combinator has disabled access.")), /* @__PURE__ */ React.createElement("li", {
    className: "MsoNormal",
    style: liStyle
  }, /* @__PURE__ */ React.createElement("span", {
    style: liSpanStyle
  }, "Your name, address, telephone number, and email address.")), /* @__PURE__ */ React.createElement("li", {
    className: "MsoNormal",
    style: liStyle
  }, /* @__PURE__ */ React.createElement("span", {
    style: liSpanStyle
  }, "A statement that you consent to the jurisdiction of Federal District Court for the judicial district in which your address is located (or the federal district courts located in San Francisco, CA if your address is outside of the United States), and that you will accept service of process from the person who provided the original DMCA notification or an agent of such person.")), /* @__PURE__ */ React.createElement("li", {
    className: "MsoNormal",
    style: liStyle
  }, /* @__PURE__ */ React.createElement("span", {
    style: liSpanStyle
  }, 'The following statement: "I swear, under penalty of perjury, that I have a good faith belief that the material was removed or disabled as a result of a mistake or misidentification of the material to be removed or disabled."')), /* @__PURE__ */ React.createElement("li", {
    className: "MsoNormal",
    style: liStyle
  }, /* @__PURE__ */ React.createElement("span", {
    style: liSpanStyle
  }, "Sign the written document."))), /* @__PURE__ */ React.createElement("p", {
    className: "MsoNormal",
    style: paragraphStyle2
  }, /* @__PURE__ */ React.createElement("span", {
    style: spanStyle
  }, "Upon receipt of a valid counter-notification, Y Combinator will forward it to Notifying Party who submitted the original DMCA notification. The original Notifying Party (or the copyright holder he or she represents) will then have ten (10) days to notify us that he or she has filed legal action relating to the allegedly infringing material. If Y Combinator does not receive any such notification within ten (10) days, we may restore the material to the Services.")), /* @__PURE__ */ React.createElement("p", {
    className: "MsoNormal",
    style: paragraphStyle
  }, /* @__PURE__ */ React.createElement("b", null, /* @__PURE__ */ React.createElement("span", {
    style: bSpanStyle
  }, "Designated Agent"))), /* @__PURE__ */ React.createElement("p", {
    className: "MsoNormal",
    style: paragraphStyle2
  }, /* @__PURE__ */ React.createElement("span", {
    style: spanStyle
  }, "Y Combinator", /* @__PURE__ */ React.createElement("br", null), "320 Pioneer Way, Mountain View, CA 94041", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", null, "Attn:"), " Copyright Agent; Legal ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", null, "Fax:"), " 650.360.3189", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null))), /* @__PURE__ */ React.createElement("p", {
    className: "MsoNormal"
  }, "\xA0"));
}
var dmca_default2 = DMCAPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__notice.tsx
var notice_exports = {};
__export(notice_exports, {
  default: () => notice_default,
  links: () => links2
});
init_react();
var import_remix5 = __toModule(require_remix());

// src/assets/yc.css
var yc_default = "/build/_assets/yc-L3C5LB6U.css";

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__notice.tsx
var links2 = () => [{ rel: "stylesheet", href: yc_default, type: "text/css" }];
function notice_default() {
  return /* @__PURE__ */ React.createElement(import_remix5.Outlet, null);
}

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__notice/newsguidelines.tsx
var newsguidelines_exports = {};
__export(newsguidelines_exports, {
  NewsGuidelinesPage: () => NewsGuidelinesPage,
  default: () => newsguidelines_default
});
init_react();
var import_remix6 = __toModule(require_remix());

// src/layouts/notice-layout.tsx
init_react();
var React3 = __toModule(require("react"));

// public/static/yc500.gif
var yc500_default = "/build/_assets/yc500-O6N4ODS7.gif";

// src/layouts/notice-layout.tsx
function NoticeLayout(props) {
  const { children } = props;
  return /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("br", null), /* @__PURE__ */ React3.createElement("br", null), /* @__PURE__ */ React3.createElement("table", {
    style: { marginLeft: "auto", marginRight: "auto", padding: "0px", width: "500px" }
  }, /* @__PURE__ */ React3.createElement("tbody", null, /* @__PURE__ */ React3.createElement("tr", null, /* @__PURE__ */ React3.createElement("td", {
    style: { backgroundColor: "#fafaf0" }
  }, /* @__PURE__ */ React3.createElement("a", {
    href: "http://www.ycombinator.com"
  }, /* @__PURE__ */ React3.createElement("img", {
    alt: "",
    src: yc500_default,
    style: { border: "0px" },
    width: "500"
  })), /* @__PURE__ */ React3.createElement("br", null), /* @__PURE__ */ React3.createElement("br", null), children)))));
}

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__notice/newsguidelines.tsx
function NewsGuidelinesPage() {
  return /* @__PURE__ */ React.createElement(NoticeLayout, null, /* @__PURE__ */ React.createElement("b", null, "Hacker News Guidelines"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", null, "What to Submit"), /* @__PURE__ */ React.createElement("p", null, "On-Topic: Anything that good hackers would find interesting. That includes more than hacking and startups. If you had to reduce it to a sentence, the answer might be: anything that gratifies one's intellectual curiosity."), /* @__PURE__ */ React.createElement("p", null, "Off-Topic: Most stories about politics, or crime, or sports, unless they're evidence of some interesting new phenomenon. Ideological or political battle or talking points. Videos of pratfalls or disasters, or cute animal pictures. If they'd cover it on TV news, it's probably off-topic."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "In Submissions")), /* @__PURE__ */ React.createElement("p", null, "Please don't do things to make titles stand out, like using uppercase or exclamation points, or adding a parenthetical remark saying how great an article is. It's implicit in submitting something that you think it's important."), /* @__PURE__ */ React.createElement("p", null, "If you submit a link to a video or pdf, please warn us by appending [video] or [pdf] to the title."), /* @__PURE__ */ React.createElement("p", null, "Please submit the original source. If a post reports on something found on another site, submit the latter."), /* @__PURE__ */ React.createElement("p", null, "If the original title includes the name of the site, please take it out, because the site name will be displayed after the link."), /* @__PURE__ */ React.createElement("p", null, `If the original title begins with a number or number + gratuitous adjective, we'd appreciate it if you'd crop it. E.g. translate "10 Ways To Do X" to "How To Do X," and "14 Amazing Ys" to "Ys." Exception: when the number is meaningful, e.g. "The 5 Platonic Solids."`), /* @__PURE__ */ React.createElement("p", null, "Otherwise please use the original title, unless it is misleading or linkbait."), /* @__PURE__ */ React.createElement("p", null, "Please don't post on HN to ask or tell us something. Instead, please send it to hn@ycombinator.com. Similarly, please don't use HN posts to ask YC-funded companies questions that you could ask by emailing them."), /* @__PURE__ */ React.createElement("p", null, "Please don't submit so many links at once that the new page is dominated by your submissions."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "In Comments")), /* @__PURE__ */ React.createElement("p", null, "Be civil. Don't say things you wouldn't say face-to-face. Don't be snarky. Comments should get more civil and substantive, not less, as a topic gets more divisive."), /* @__PURE__ */ React.createElement("p", null, 'When disagreeing, please reply to the argument instead of calling names. "That is idiotic; 1 + 1 is 2, not 3" can be shortened to "1 + 1 is 2, not 3."'), /* @__PURE__ */ React.createElement("p", null, "Please respond to the strongest plausible interpretation of what someone says, not a weaker one that's easier to criticize."), /* @__PURE__ */ React.createElement("p", null, "Eschew flamebait. Don't introduce flamewar topics unless you have something genuinely new to say. Avoid unrelated controversies and generic tangents."), /* @__PURE__ */ React.createElement("p", null, `Please don't insinuate that someone hasn't read an article. "Did you even read the article? It mentions that" can be shortened to "The article mentions that."`), /* @__PURE__ */ React.createElement("p", null, "Please don't use uppercase for emphasis. If you want to emphasize a word or phrase, put *asterisks* around it and it will get italicized."), /* @__PURE__ */ React.createElement("p", null, "Please don't accuse others of astroturfing or shillage. Email us instead and we'll look into it."), /* @__PURE__ */ React.createElement("p", null, "Please don't complain that a submission is inappropriate. If a story is spam or off-topic, flag it. Don't feed egregious comments by replying;", " ", /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "/newsfaq#cflag"
  }, "flag"), " them instead. When you flag something, please don't also comment that you did."), /* @__PURE__ */ React.createElement("p", null, "Please don't comment about the voting on comments. It never does any good, and it makes boring reading."), /* @__PURE__ */ React.createElement("p", null, "Throwaway accounts are ok for sensitive information, but please don't create them routinely. On HN, users need an identity that others can relate to."), /* @__PURE__ */ React.createElement("p", null, "We ban accounts that use Hacker News primarily for political or ideological battle, regardless of which politics they favor.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("table", {
    style: { padding: "0px", backgroundColor: "#ff6600", width: "100%" }
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", {
    style: { height: "0px" }
  }, /* @__PURE__ */ React.createElement("td", {
    style: { padding: "0px" }
  }))))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", {
    className: "foot"
  }, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null))));
}
var newsguidelines_default = NewsGuidelinesPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__notice/bookmarklet.tsx
var bookmarklet_exports = {};
__export(bookmarklet_exports, {
  BookmarkletPage: () => BookmarkletPage,
  default: () => bookmarklet_default
});
init_react();
var import_remix7 = __toModule(require_remix());
function BookmarkletPage() {
  return /* @__PURE__ */ React.createElement(NoticeLayout, null, /* @__PURE__ */ React.createElement("b", null, "Bookmarklet"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    id: "main"
  }, /* @__PURE__ */ React.createElement("p", {
    id: "first"
  }, "Thanks to Phil Kast for writing this bookmarklet for submitting links to", " ", /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/"
  }, "Hacker News"), ". When you click on the bookmarklet, it will submit the page you're on. To install, drag this link to your browser toolbar:", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("div", {
    style: { textAlign: "center" }
  }, /* @__PURE__ */ React.createElement("a", {
    style: { color: "#777", fontSize: "2em" },
    href: "javascript:window.location=%22http://news.ycombinator.com/submitlink?u=%22+encodeURIComponent(document.location)+%22&t=%22+encodeURIComponent(document.title)"
  }, "post to HN")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("table", {
    style: { padding: "0px", backgroundColor: "#ff6600", width: "100%" }
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", {
    style: { height: "0px" }
  }, /* @__PURE__ */ React.createElement("td", {
    style: { padding: "0px" }
  })))), /* @__PURE__ */ React.createElement("p", {
    style: { textAlign: "center" }
  }, /* @__PURE__ */ React.createElement("span", {
    className: "foot"
  }, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null)))));
}
var bookmarklet_default = BookmarkletPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__notice/newswelcome.tsx
var newswelcome_exports = {};
__export(newswelcome_exports, {
  NewsWelcomePage: () => NewsWelcomePage,
  default: () => newswelcome_default
});
init_react();
var import_remix8 = __toModule(require_remix());
function NewsWelcomePage() {
  return /* @__PURE__ */ React.createElement(NoticeLayout, null, /* @__PURE__ */ React.createElement("b", null, "Welcome to Hacker News"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "/"
  }, "Hacker News"), " is a bit different from other community sites, and we'd appreciate it if you'd take a minute to read the following as well as the", " ", /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "/newsguidelines"
  }, "official guidelines"), "."), /* @__PURE__ */ React.createElement("p", null, "HN is an experiment. As a rule, a community site that becomes popular will decline in quality. Our hypothesis is that this is not inevitable\u2014that by making a conscious effort to resist decline, we can keep it from happening."), /* @__PURE__ */ React.createElement("p", null, "Essentially there are two rules here: don't post or upvote crap links, and don't be rude or dumb in comment threads."), /* @__PURE__ */ React.createElement("p", null, "A crap link is one that's only superficially interesting. Stories on HN don't have to be about hacking, because good hackers aren't only interested in hacking, but they do have to be deeply interesting."), /* @__PURE__ */ React.createElement("p", null, 'What does "deeply interesting" mean? It means stuff that teaches you about the world. A story about a robbery, for example, would probably not be deeply interesting. But if this robbery was a sign of some bigger, underlying trend, perhaps it could be.'), /* @__PURE__ */ React.createElement("p", null, "The worst thing to post or upvote is something that's intensely but shallowly interesting: gossip about famous people, funny or cute pictures or videos, partisan political articles, etc. If you let", " ", /* @__PURE__ */ React.createElement("a", {
    href: "http://en.wikipedia.org/wiki/Nile_perch"
  }, "that sort of thing onto a news site, it will push aside the deeply interesting stuff, which tends to be quieter.")), /* @__PURE__ */ React.createElement("p", null, "The most important principle on HN, though, is to make thoughtful comments. Thoughtful in both senses: civil and substantial."), /* @__PURE__ */ React.createElement("p", null, `The test for substance is a lot like it is for links. Does your comment teach us anything? There are two ways to do that: by pointing out some consideration that hadn't previously been mentioned, and by giving more information about the topic, perhaps from personal experience. Whereas comments like "LOL!" or worse still, "That's retarded!" teach us nothing.`), /* @__PURE__ */ React.createElement("p", null, `Empty comments can be ok if they're positive. There's nothing wrong with submitting a comment saying just "Thanks." What we especially discourage are comments that are empty and negative\u2014comments that are mere name-calling.`), /* @__PURE__ */ React.createElement("p", null, "Which brings us to the most important principle on HN: civility. Since long before the web, the anonymity of online conversation has lured people into being much ruder than they'd be in person. So the principle here is: don't say anything you wouldn't say face to face. This doesn't mean you can't disagree. But disagree without calling names. If you're right, your argument will be more convincing without them.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("table", {
    style: { padding: "0px", backgroundColor: "#ff6600", width: "100%" }
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", {
    style: { height: "0px" }
  }, /* @__PURE__ */ React.createElement("td", {
    style: { padding: "0px" }
  }))))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", {
    className: "foot"
  }, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null))));
}
var newswelcome_default = NewsWelcomePage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__notice/security.tsx
var security_exports = {};
__export(security_exports, {
  SecurityPage: () => SecurityPage,
  default: () => security_default
});
init_react();
var import_remix9 = __toModule(require_remix());
function SecurityPage() {
  return /* @__PURE__ */ React.createElement(NoticeLayout, null, /* @__PURE__ */ React.createElement("b", null, "Hacker News Security"), /* @__PURE__ */ React.createElement("p", null, "If you find a security hole, please let us know at", " ", /* @__PURE__ */ React.createElement("a", {
    href: "mailto:security@ycombinator.com"
  }, "security@ycombinator.com"), ". We try to respond (with fixes!) as soon as possible, and really appreciate the help."), /* @__PURE__ */ React.createElement("p", null, "Thanks to the following people who have discovered and responsibly disclosed security holes in Hacker News:"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20170430: ", /* @__PURE__ */ React.createElement("a", {
    href: "http://www.michaelflaxman.com"
  }, "Michael Flaxman"))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "The minor version of bcrypt used for passwords was susceptible to a collision in some cases.")), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20170414: Blake Rand")), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Links in comments were vulnerable to an IDN homograph attack.")), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20170315: Blake Rand")), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "The right-to-left override character could be used to obscure link text in comments.")), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20170301: ", /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/_iamjk"
  }, "Jaikishan Tulswani"))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Logged-in users could bypass 'old password' form field.")), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20160217: ", /* @__PURE__ */ React.createElement("a", {
    href: "http://www.tjosse.me"
  }, "Eric Tjossem"))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Logout and login were vulnerable to CSRF.")), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20160113: ", /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/merttasci_"
  }, "Mert Ta\u015F\xE7i"))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "The 'forgot password' link was vulnerable to reflected XSS.")), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20150907: ", /* @__PURE__ */ React.createElement("a", {
    href: "http://www.s4ndeep.com"
  }, "Sandeep Singh"))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "An open redirect was possible by passing a URL with a mixed-case protocol as the", " ", /* @__PURE__ */ React.createElement("em", null, "goto"), " parameter.")), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20150904: ", /* @__PURE__ */ React.createElement("a", {
    href: "http://twitter.com/umenmactech"
  }, "Manish Bhattacharya"))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "The site name display for stories was vulnerable to an", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://en.wikipedia.org/wiki/IDN_homograph_attack"
  }, "IDN homograph attack."))), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20150827: ", /* @__PURE__ */ React.createElement("a", {
    href: "http://twitter.com/chrismarlow9"
  }, "Chris Marlow"))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Revisions to HN's markup caused an HTML injection regression.")), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20150624: ", /* @__PURE__ */ React.createElement("a", {
    href: "http://stephensclafani.com"
  }, "Stephen Sclafani"))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "A form handling bug led to a XSS vulnerability using", " ", /* @__PURE__ */ React.createElement("a", {
    href: "http://www.slideshare.net/Wisec/http-parameter-pollution-a-new-category-of-web-attacks"
  }, "HTTP parameter polution"), ".")), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20150302: Max Bond")), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Information leaked during /r processing allowed an attacker to discover valid profile edit links and the user for which they were valid."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("em", null, "goto"), " parameters functioned as open redirects.")), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20141101: Ovidiu Toader")), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "In rare cases some users' profiles (including email addresses and password hashes) were mistakenly published to the Firebase API.")), /* @__PURE__ */ React.createElement("p", null, "See", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://news.ycombinator.com/item?id=8604586"
  }, "https://news.ycombinator.com/item?id=8604586"), " ", "for details."), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20141027: San Tran")), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Some pages displaying forms were vulnerable to reflected XSS when provided malformed query string arguments.")), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20140501: ", /* @__PURE__ */ React.createElement("a", {
    href: "https://titanous.com"
  }, "Jonathan Rudenberg"))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Some YC internal pages were vulnerable to persistent XSS.")), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20120801: ", /* @__PURE__ */ React.createElement("a", {
    href: "http://louislang.com/"
  }, "Louis Lang"))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Redirects were vulnerable to HTTP response splitting via the ", /* @__PURE__ */ React.createElement("em", null, "whence"), " argument."), /* @__PURE__ */ React.createElement("li", null, "Persistent XSS could be achieved via the ", /* @__PURE__ */ React.createElement("em", null, "X-Forwarded-For"), " header.")), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20120720: ", /* @__PURE__ */ React.createElement("a", {
    href: "http://www.tinfoilsecurity.com"
  }, "Michael Borohovski"))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Incorrect handling of unauthenticated requests meant anyone could change rsvp status for Demo Day.")), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "20090603: ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.dfranke.us/"
  }, "Daniel Fox Franke"))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "The state of the PRNG used to generate cookies could be determined from observed outputs. This allowed an attacker to fairly easily determine valid user cookies and compromise accounts.")), /* @__PURE__ */ React.createElement("p", null, "See ", /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: "/item?id=639976"
  }, "https://news.ycombinator.com/item?id=639976"), " for details."), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Missing From This List?"), " If you reported a vulnerability to us and don't see your name, please shoot us an email and we'll happily add you. We crawled through tons of emails trying to find all reports but inevitably missed some."));
}
var security_default = SecurityPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__notice/newsfaq.tsx
var newsfaq_exports = {};
__export(newsfaq_exports, {
  NewsFaqPage: () => NewsFaqPage,
  default: () => newsfaq_default
});
init_react();
var import_remix10 = __toModule(require_remix());
function NewsFaqPage() {
  return /* @__PURE__ */ React.createElement(NoticeLayout, null, /* @__PURE__ */ React.createElement("b", null, "Hacker News FAQ"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", null, "Are there rules about submissions and comments?"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: "/newsguidelines"
  }, "https://news.ycombinator.com/newsguidelines")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "How are stories ranked?")), /* @__PURE__ */ React.createElement("p", null, "The basic algorithm divides points by a power of the time since a story was submitted. Comments in comment threads are ranked the same way."), /* @__PURE__ */ React.createElement("p", null, "Other factors affecting rank include user flags, anti-abuse software, software which downweights overheated discussions, and moderator intervention."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "How is a user's karma calculated?")), /* @__PURE__ */ React.createElement("p", null, "Roughly, the number of upvotes on their stories and comments minus the number of downvotes. The numbers don't match up exactly, because some votes aren't counted to prevent abuse."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Why don't I see down arrows?")), /* @__PURE__ */ React.createElement("p", null, "There are no down arrows on stories. They appear on comments after users reach a certain karma threshold, but never on direct replies."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "What kind of formatting can you use in comments?")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: "/formatdoc"
  }, "http://news.ycombinator.com/formatdoc")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "How do I submit a question?")), /* @__PURE__ */ React.createElement("p", null, "Use the submit link in the top bar, and leave the url field blank."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "How do I make a link in a question?")), /* @__PURE__ */ React.createElement("p", null, "You can't. This is to prevent people from submitting a link with their comments in a privileged position at the top of the page. If you want to submit a link with comments, just submit it, then add a regular comment."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", {
    id: "cflag"
  }, "How do I flag a comment?")), /* @__PURE__ */ React.createElement("p", null, "Click on its timestamp to go to its page, then click the 'flag' link at the top. There's a small karma threshold before flag links appear."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Are reposts ok?")), /* @__PURE__ */ React.createElement("p", null, "If a story has had significant attention in the last year or so, we kill reposts as duplicates. If not, a small number of reposts is ok."), /* @__PURE__ */ React.createElement("p", null, "Please don't delete and repost the same story, though. Accounts that do that eventually lose submission privileges."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Are paywalls ok?")), /* @__PURE__ */ React.createElement("p", null, "It's ok to post stories from sites with paywalls that have workarounds."), /* @__PURE__ */ React.createElement("p", null, "In comments, it's ok to ask how to read an article and to help other users do so. But please don't post complaints about paywalls. Those are off topic."), /* @__PURE__ */ React.createElement("p", null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Can I ask people to upvote my submission?")), /* @__PURE__ */ React.createElement("p", null, "No. Users should vote for a story because it's intellectually interesting, not because someone is promoting it."), /* @__PURE__ */ React.createElement("p", null, "When the software detects a voting ring, it penalizes the post. Accounts that vote like this eventually get their votes ignored."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Can I post a job ad?")), /* @__PURE__ */ React.createElement("p", null, "Please do not post job ads as story submissions to HN."), /* @__PURE__ */ React.createElement("p", null, 'A regular "Who Is Hiring?" thread appears on the first weekday of each month. Most job ads are welcome there. (But only an account called', " ", /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: "/submitted?id=whoishiring"
  }, "whoishiring"), " is allowed to submit the thread itself. This prevents a race to post it first.)"), /* @__PURE__ */ React.createElement("p", null, "The other kind of job ad is reserved for YC-funded startups. These appear on the front page, but are not stories: they have no vote arrows, points, or comments. They begin part-way down, then fall steadily, and only one should be on the front page at a time."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Why can't I post a comment to a thread?")), /* @__PURE__ */ React.createElement("p", null, "Threads are closed to new comments after two weeks, or if the submission has been killed by software, moderators, or user flags."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "In my profile, what does showdead do?")), /* @__PURE__ */ React.createElement("p", null, "If you turn it on, you'll see all the stories and comments that have been killed by HN's software, moderators, and user flags."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "In my profile, what is delay?")), /* @__PURE__ */ React.createElement("p", null, "It gives you time to edit your comments before they appear to others. Set it to the number of minutes you'd like. The maximum is 10."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "In my profile, what is noprocrast?")), /* @__PURE__ */ React.createElement("p", null, "It's a way to help you prevent yourself from spending too much time on HN. If you turn it on you'll only be allowed to visit the site for maxvisit minutes at a time, with gaps of minaway minutes in between. The defaults are 20 and 180, which would let you view the site for 20 minutes at a time, and then not allow you back in for 3 hours. You can override noprocrast if you want, in which case your visit clock starts over at zero."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "How do I submit a poll?")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: "/newpoll"
  }, "http://news.ycombinator.com/newpoll")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "How do I reset my password?")), /* @__PURE__ */ React.createElement("p", null, "If you have an email address in your profile, you can request a password reset", " ", /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: "/forgot?id="
  }, "here"), ". If you haven't, you can create a new account or email hn@ycombinator.com for help."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "My IP address seems to be banned. How can I unban it?")), /* @__PURE__ */ React.createElement("p", null, "If you request many pages too quickly, your IP address might get banned. The", " ", /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: "/item?id=4761102"
  }, "self-serve unbanning procedure"), " works most of the time."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("table", {
    style: { padding: "0px", backgroundColor: "#ff6600", width: "100%" }
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", {
    style: { height: "0px" }
  }, /* @__PURE__ */ React.createElement("td", {
    style: { padding: "0px" }
  }))))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", {
    className: "foot"
  }, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null))));
}
var newsfaq_default = NewsFaqPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__notice/showhn.tsx
var showhn_exports = {};
__export(showhn_exports, {
  ShowHNRulesPage: () => ShowHNRulesPage,
  default: () => showhn_default
});
init_react();
var import_remix11 = __toModule(require_remix());
function ShowHNRulesPage() {
  return /* @__PURE__ */ React.createElement(NoticeLayout, null, /* @__PURE__ */ React.createElement("b", null, "Show HN"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "Show HN is a way to share something that you've made on Hacker News."), /* @__PURE__ */ React.createElement("p", null, "The current Show HNs can be found via ", /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "/show"
  }, "show"), " in the top bar, and the newest are ", /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "/shownew"
  }, "here"), ". To post one, simply", " ", /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "/submit"
  }, "submit"), ' a story whose title begins with "Show HN".'), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "What to Submit")), /* @__PURE__ */ React.createElement("p", null, "Show HN is for something you've made that other people can play with. HN users can try it out, give you feedback, and ask questions in the thread."), /* @__PURE__ */ React.createElement("p", null, "A Show HN needn't be complicated or look slick. The community is comfortable with work that's at an early stage."), /* @__PURE__ */ React.createElement("p", null, "If your work isn't ready for people to try out yet, please don't do a Show HN. Once it's ready, come back and do it then."), /* @__PURE__ */ React.createElement("p", null, "Blog posts, sign-up pages, and fundraisers can't be tried out, so they can't be Show HNs."), /* @__PURE__ */ React.createElement("p", null, `New features and upgrades ("Foo 1.3.1 is out") generally aren't substantive enough to be Show HNs. A major overhaul is probably ok.`), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "In Comments")), /* @__PURE__ */ React.createElement("p", null, "Be respectful. Anyone sharing work is making a contribution, however modest."), /* @__PURE__ */ React.createElement("p", null, "Ask questions out of curiosity. Don't cross-examine."), /* @__PURE__ */ React.createElement("p", null, `Instead of "you're doing it wrong", suggest alternatives. When someone is learning, help them learn more.`), /* @__PURE__ */ React.createElement("p", null, "When something isn't good, you needn't pretend that it is. But don't be gratuitously negative."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("table", {
    style: { padding: "0px", backgroundColor: "#ff6600", width: "100%" }
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", {
    style: { height: "0px" }
  }, /* @__PURE__ */ React.createElement("td", {
    style: { padding: "0px" }
  }))))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", {
    className: "foot"
  }, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null))));
}
var showhn_default = ShowHNRulesPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/register.ts
var register_exports = {};
__export(register_exports, {
  action: () => action2
});
init_react();
var import_invariant = __toModule(require("invariant"));
var import_remix12 = __toModule(require_remix());
var action2 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const currentUserId = session.get(SessionCookieProperties.USER_ID);
  if (!currentUserId) {
    try {
      const formData = await request.formData();
      const id = formData.get("id");
      const password = formData.get("password");
      (0, import_invariant.default)(id, "id field is required.");
      (0, import_invariant.default)(password, "password field is required.");
      await userService.registerUser({ id, password });
      session.set(SessionCookieProperties.USER_ID, id);
      return (0, import_remix12.redirect)(`/user?id=${id}`, {
        headers: { "Set-Cookie": await commitSession(session) }
      });
    } catch (err) {
      return (0, import_remix12.redirect)(`/login?how=${err.code}`, {
        headers: { "Set-Cookie": await destroySession(session) }
      });
    }
  } else {
    return (0, import_remix12.redirect)("/login?how=user", {
      headers: { "Set-Cookie": await destroySession(session) }
    });
  }
};

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/comment.ts
var comment_exports = {};
__export(comment_exports, {
  action: () => action3
});
init_react();
var import_remix13 = __toModule(require_remix());
var action3 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get(SessionCookieProperties.USER_ID);
  checkUnauthorized(userId, "Must be logged in to comment.");
  const formData = await request.formData();
  const parentId = +formData.get("parent");
  checkBadRequest(parentId, '"parent" is required.');
  const text = formData.get("text");
  checkBadRequest(text, '"text" is required.');
  const goto = formData.get("goto");
  await commentService.createComment(parentId, userId, text, userId);
  return (0, import_remix13.redirect)(goto || `/item?${parentId}`);
};

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main.tsx
var main_exports = {};
__export(main_exports, {
  default: () => Main,
  links: () => links3,
  loader: () => loader2
});
init_react();
var import_remix14 = __toModule(require_remix());

// src/utils/context.ts
init_react();
var React4 = __toModule(require("react"));
var MeContext = React4.createContext(void 0);

// src/assets/news.css
var news_default = "/build/_assets/news-EGMB5VPJ.css";

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main.tsx
var links3 = () => [{ rel: "stylesheet", href: news_default, type: "text/css" }];
var loader2 = async (req) => {
  const session = await getSession(req.request.headers.get("Cookie"));
  const loggedInUserId = session.get(SessionCookieProperties.USER_ID);
  const loggedInUser = loggedInUserId ? await userService.getUser(loggedInUserId) : void 0;
  const me = loggedInUser && { id: loggedInUser.id, karma: loggedInUser.karma };
  return { me };
};
function Main() {
  const { me } = (0, import_remix14.useLoaderData)();
  return /* @__PURE__ */ React.createElement(MeContext.Provider, {
    value: me
  }, /* @__PURE__ */ React.createElement(import_remix14.Outlet, null));
}

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/bestcomments.tsx
var bestcomments_exports = {};
__export(bestcomments_exports, {
  BestCommentsPage: () => BestCommentsPage,
  default: () => bestcomments_default,
  meta: () => meta3
});
init_react();

// src/layouts/main-layout.tsx
init_react();
var React5 = __toModule(require("react"));

// src/components/footer.tsx
init_react();
var import_remix15 = __toModule(require_remix());

// public/static/s.gif
var s_default = "/build/_assets/s-YXUNBMUG.gif";

// src/components/footer.tsx
function Footer() {
  return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    style: { padding: "0px" }
  }, /* @__PURE__ */ React.createElement("img", {
    alt: "",
    src: s_default,
    height: "10",
    width: "0"
  }), /* @__PURE__ */ React.createElement("table", {
    style: { height: "2px", width: "100%", borderSpacing: "0px" }
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    style: { backgroundColor: "#ff6600" }
  })))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    style: { textAlign: "center" }
  }, /* @__PURE__ */ React.createElement("span", {
    className: "yclinks"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/newsguidelines"
  }, "Guidelines"), "\xA0| ", /* @__PURE__ */ React.createElement(import_remix15.Link, {
    to: "/newsfaq"
  }, "FAQ"), "\xA0| ", /* @__PURE__ */ React.createElement("a", {
    href: "mailto:hn@ycombinator.com"
  }, "Support"), "\xA0| ", /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/HackerNews/API"
  }, "API"), "\xA0| ", /* @__PURE__ */ React.createElement(import_remix15.Link, {
    to: "/security"
  }, "Security"), "\xA0| ", /* @__PURE__ */ React.createElement(import_remix15.Link, {
    to: "/lists"
  }, "Lists"), "\xA0| ", /* @__PURE__ */ React.createElement(import_remix15.Link, {
    to: "/bookmarklet"
  }, "Bookmarklet"), "\xA0| ", /* @__PURE__ */ React.createElement(import_remix15.Link, {
    to: "/dmca"
  }, "DMCA"), "\xA0| ", /* @__PURE__ */ React.createElement("a", {
    href: "http://www.ycombinator.com/apply/"
  }, "Apply to YC"), "\xA0| ", /* @__PURE__ */ React.createElement("a", {
    href: "mailto:hn@ycombinator.com"
  }, "Contact")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("form", {
    method: "get",
    action: "//hn.algolia.com/",
    style: { marginBottom: "1em" }
  }, "Search:", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "q",
    size: 17,
    autoCorrect: "off",
    spellCheck: false,
    autoCapitalize: "off",
    autoComplete: "false"
  })))));
}

// src/components/header.tsx
init_react();
var import_remix18 = __toModule(require_remix());
var import_react2 = __toModule(require("react"));

// src/utils/hooks.ts
init_react();
var import_remix16 = __toModule(require_remix());

// src/utils/news-page-number.ts
init_react();
function getPageNumberFromSearchParams(searchParams) {
  const p = searchParams.get(URLSearchParamFields.PAGE);
  const pageNumber = +(p || 1);
  return Number.isNaN(pageNumber) ? 1 : pageNumber;
}

// src/utils/hooks.ts
function useCurrentPathname() {
  const loc = (0, import_remix16.useLocation)();
  return loc.pathname;
}
function usePageNumber() {
  const [searchParams] = (0, import_remix16.useSearchParams)();
  return getPageNumberFromSearchParams(searchParams);
}

// src/components/header-links.tsx
init_react();
var import_remix17 = __toModule(require_remix());
function HeaderLinks(props) {
  const { userId, currentUrl, isNavVisible, title } = props;
  return isNavVisible ? /* @__PURE__ */ React.createElement("span", {
    className: "pagetop"
  }, /* @__PURE__ */ React.createElement("b", {
    className: "hnname"
  }, /* @__PURE__ */ React.createElement(import_remix17.Link, {
    to: "/"
  }, title)), "\xA0", userId && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix17.Link, {
    to: "/newswelcome"
  }, "welcome"), " | "), /* @__PURE__ */ React.createElement(import_remix17.Link, {
    className: currentUrl === "/newest" ? "topsel" : "",
    prefetch: "intent",
    to: "/newest"
  }, "new"), userId && /* @__PURE__ */ React.createElement(React.Fragment, null, " | ", /* @__PURE__ */ React.createElement(import_remix17.Link, {
    className: currentUrl === "/threads" ? "topsel" : "",
    prefetch: "intent",
    to: `/threads?id=${userId}`
  }, "threads")), " | ", /* @__PURE__ */ React.createElement(import_remix17.Link, {
    className: currentUrl === "/newcomments" ? "topsel" : "",
    prefetch: "intent",
    to: "/newcomments"
  }, "comments"), " | ", /* @__PURE__ */ React.createElement(import_remix17.Link, {
    className: currentUrl === "/show" ? "topsel" : "",
    prefetch: "intent",
    to: "/show"
  }, "show"), " | ", /* @__PURE__ */ React.createElement(import_remix17.Link, {
    className: currentUrl === "/ask" ? "topsel" : "",
    prefetch: "intent",
    to: "/ask"
  }, "ask"), " | ", /* @__PURE__ */ React.createElement(import_remix17.Link, {
    className: currentUrl === "/jobs" ? "topsel" : "",
    prefetch: "intent",
    to: "/jobs"
  }, "jobs"), " | ", /* @__PURE__ */ React.createElement(import_remix17.Link, {
    className: currentUrl === "/submit" ? "topsel" : "",
    to: "/submit"
  }, "submit"), currentUrl === "/best" && /* @__PURE__ */ React.createElement(React.Fragment, null, " | ", /* @__PURE__ */ React.createElement(import_remix17.Link, {
    className: "topsel",
    prefetch: "intent",
    to: "/best"
  }, "best"))) : /* @__PURE__ */ React.createElement("span", {
    className: "pagetop"
  }, /* @__PURE__ */ React.createElement("b", null, title));
}

// public/static/favicon.ico
var favicon_default = "/build/_assets/favicon-6S5NB5GW.ico";

// src/components/header.tsx
function Header(props) {
  const { isNavVisible, title } = props;
  const currentUrl = useCurrentPathname();
  const me = (0, import_react2.useContext)(MeContext);
  return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    style: { backgroundColor: "#ff6600", padding: "0px" }
  }, /* @__PURE__ */ React.createElement("table", {
    style: { border: "0px", padding: "2px", borderSpacing: "0px", width: "100%" }
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    style: { width: "18px", padding: "0px", paddingRight: "4px" }
  }, /* @__PURE__ */ React.createElement(import_remix18.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: favicon_default,
    style: {
      border: "1px",
      borderColor: "white",
      borderStyle: "solid",
      height: "18px",
      width: "18px"
    }
  }))), /* @__PURE__ */ React.createElement("td", {
    style: { lineHeight: "12px", height: "10px", padding: "0px" }
  }, /* @__PURE__ */ React.createElement(HeaderLinks, {
    currentUrl,
    isNavVisible,
    title
  })), /* @__PURE__ */ React.createElement("td", {
    style: { textAlign: "right", padding: "0px", paddingRight: "4px" }
  }, me ? /* @__PURE__ */ React.createElement("span", {
    className: "pagetop"
  }, /* @__PURE__ */ React.createElement(import_remix18.Link, {
    to: `/user?id=${me.id}`
  }, me.id), ` (${me.karma}) | `, /* @__PURE__ */ React.createElement("a", {
    href: `/logout?auth=d78ccc2c6120ffe08f32451519c2ff46d34c51ab&amp;goto=${currentUrl}`
  }, "logout")) : /* @__PURE__ */ React.createElement("span", {
    className: "pagetop"
  }, /* @__PURE__ */ React.createElement(import_remix18.Link, {
    to: `/login?goto=${currentUrl}`
  }, "login"))))))));
}

// src/layouts/main-layout.tsx
function MainLayout(props) {
  const { children, isNavVisible = true, isFooterVisible = true, title = "ZK News" } = props;
  return /* @__PURE__ */ React5.createElement("div", null, /* @__PURE__ */ React5.createElement("table", {
    id: "hnmain",
    style: {
      backgroundColor: "#f6f6ef",
      border: "0px",
      borderCollapse: "collapse",
      borderSpacing: "0px",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "0px",
      width: "85%"
    }
  }, /* @__PURE__ */ React5.createElement("tbody", null, /* @__PURE__ */ React5.createElement(Header, {
    isNavVisible: !!isNavVisible,
    title
  }), /* @__PURE__ */ React5.createElement("tr", {
    style: { height: "10px" }
  }), children, isFooterVisible && /* @__PURE__ */ React5.createElement(Footer, null))));
}

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/bestcomments.tsx
var meta3 = () => {
  return { title: "Best Comments | Hacker News Clone" };
};
function BestCommentsPage() {
  return /* @__PURE__ */ React.createElement(MainLayout, null, "Hacker News API does not publicly provide this data!");
}
var bestcomments_default = BestCommentsPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/noobcomments.tsx
var noobcomments_exports = {};
__export(noobcomments_exports, {
  NoobCommentsPage: () => NoobCommentsPage,
  default: () => noobcomments_default,
  meta: () => meta4
});
init_react();
var meta4 = () => {
  return { title: "Noob Comments | Hacker News Clone" };
};
function NoobCommentsPage() {
  return /* @__PURE__ */ React.createElement(MainLayout, null, "Hacker News API does not publicly provide this data!");
}
var noobcomments_default = NoobCommentsPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/newcomments.tsx
var newcomments_exports = {};
__export(newcomments_exports, {
  NewCommentsPage: () => NewCommentsPage,
  default: () => newcomments_default,
  loader: () => loader3,
  meta: () => meta5
});
init_react();
var import_remix20 = __toModule(require_remix());

// src/components/comments.tsx
init_react();
var React7 = __toModule(require("react"));

// src/components/comment.tsx
init_react();
var React6 = __toModule(require("react"));
var import_remix19 = __toModule(require_remix());

// src/utils/convert-number-to-time-ago.ts
init_react();
var convertNumberToTimeAgo = (number) => {
  const now2 = +new Date();
  const timeAgo = now2 - number;
  const ONE_YEAR = 3154e7;
  const ONE_MONTH = 2628e6;
  const ONE_DAY = 864e5;
  const ONE_HOUR = 36e5;
  const ONE_MINUTE = 6e4;
  if (timeAgo >= ONE_YEAR * 2) {
    return `${Math.floor(timeAgo / ONE_YEAR)} years ago`;
  } else if (timeAgo >= ONE_YEAR) {
    return "a year ago";
  } else if (timeAgo >= ONE_MONTH * 2) {
    return `${Math.floor(timeAgo / ONE_MONTH)} months ago`;
  } else if (timeAgo >= ONE_MONTH) {
    return "1 month ago";
  } else if (timeAgo >= ONE_DAY * 2) {
    return `${Math.floor(timeAgo / ONE_DAY)} days ago`;
  } else if (timeAgo >= ONE_DAY) {
    return "1 day ago";
  } else if (timeAgo >= ONE_HOUR * 2) {
    return `${Math.floor(timeAgo / ONE_HOUR)} hours ago`;
  } else if (timeAgo >= ONE_HOUR) {
    return "1 hour ago";
  } else if (timeAgo >= ONE_MINUTE * 2) {
    return `${Math.floor(timeAgo / ONE_MINUTE)} minutes ago`;
  } else if (timeAgo >= 0) {
    return "1 minute ago";
  } else {
    console.error(`convertNumberToTimeAgo: number ${number} timeAgo ${timeAgo}, is date older than 1970 or in the future?`);
    return "";
  }
};

// src/components/comment.tsx
function Comment(props) {
  const {
    creationTime,
    collapsedChildrenCommentsCount,
    id,
    indentationLevel,
    isCollapsed,
    submitterId,
    text,
    toggleCollapseComment
  } = props;
  const collapseComment = React6.useCallback(() => {
    toggleCollapseComment(id);
  }, [toggleCollapseComment, id]);
  return /* @__PURE__ */ React6.createElement("tr", {
    className: "athing comtr ",
    id: id.toString()
  }, /* @__PURE__ */ React6.createElement("td", null, /* @__PURE__ */ React6.createElement("table", {
    style: { border: "0" }
  }, /* @__PURE__ */ React6.createElement("tbody", null, /* @__PURE__ */ React6.createElement("tr", null, /* @__PURE__ */ React6.createElement("td", {
    className: "ind"
  }, /* @__PURE__ */ React6.createElement("img", {
    alt: "",
    src: s_default,
    height: "1",
    width: indentationLevel * 40
  })), /* @__PURE__ */ React6.createElement("td", {
    style: { verticalAlign: "top" },
    className: "votelinks"
  }, /* @__PURE__ */ React6.createElement("div", {
    style: { textAlign: "center" }
  }, /* @__PURE__ */ React6.createElement("a", {
    id: `up_${id}`,
    href: `vote?id=${id}&how=up&auth=4eb97bf0d2568aa743691210b904f0c5182bb0fc&goto=item?id=${id}`
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "votearrow",
    title: "upvote"
  })))), /* @__PURE__ */ React6.createElement("td", {
    className: "default"
  }, /* @__PURE__ */ React6.createElement("div", {
    style: { marginTop: "2px", marginBottom: "-10px" }
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "comhead"
  }, /* @__PURE__ */ React6.createElement(import_remix19.Link, {
    className: "hnuser",
    to: `/user?id=${submitterId}`
  }, submitterId), /* @__PURE__ */ React6.createElement("span", {
    className: "age"
  }, " ", /* @__PURE__ */ React6.createElement(import_remix19.Link, {
    to: `/item?id=${id}`
  }, convertNumberToTimeAgo(creationTime))), " ", /* @__PURE__ */ React6.createElement("span", {
    id: "unv_15238246"
  }), /* @__PURE__ */ React6.createElement("span", {
    className: "par"
  }), " ", /* @__PURE__ */ React6.createElement("span", {
    className: "togg",
    id: "24",
    onClick: collapseComment
  }, isCollapsed ? `[${collapsedChildrenCommentsCount ? `${collapsedChildrenCommentsCount + 1} more` : "+"}] ` : "[-]"), /* @__PURE__ */ React6.createElement("span", {
    className: "storyon"
  }))), /* @__PURE__ */ React6.createElement("br", null), /* @__PURE__ */ React6.createElement("div", {
    key: "help",
    className: "comment"
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "c00"
  }, !isCollapsed && /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("div", {
    dangerouslySetInnerHTML: { __html: text }
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "reply"
  }, /* @__PURE__ */ React6.createElement("p", {
    style: { fontSize: "1" }
  }, /* @__PURE__ */ React6.createElement(import_remix19.Link, {
    to: `/reply?id=${id}&goto=item?id=${id}`
  }, "reply"))))))))))));
}

// src/components/comments.tsx
function countChildrenComments(comments) {
  return comments.length + comments.reduce((count, comment) => {
    if (comment.comments)
      count += countChildrenComments(comment.comments);
    return count;
  }, 0);
}
function renderCommentTreeAsFlatArray(array, comments, level, shouldIndent, collapsedComments, toggleCollapseComment) {
  for (const comment of comments) {
    if (typeof comment === "number")
      continue;
    const isCollapsed = collapsedComments[comment.id];
    const children = comment.comments;
    array.push(/* @__PURE__ */ React7.createElement(Comment, {
      key: comment.id,
      collapsedChildrenCommentsCount: isCollapsed ? countChildrenComments(children) : void 0,
      submitterId: comment.submitterId,
      text: comment.text,
      toggleCollapseComment,
      creationTime: comment.creationTime,
      id: comment.id,
      indentationLevel: level,
      isCollapsed
    }));
    if (!isCollapsed && Array.isArray(children) && children.length > 0) {
      renderCommentTreeAsFlatArray(array, children, level + (shouldIndent ? 1 : 0), shouldIndent, collapsedComments, toggleCollapseComment);
    }
  }
  return array;
}
function Comments(props) {
  const { comments, shouldIndent } = props;
  const [collapsedComments, setCollapsedComments] = React7.useState({});
  const toggleCollapseComment = React7.useCallback((id) => {
    setCollapsedComments(__spreadProps(__spreadValues({}, collapsedComments), { [id]: !collapsedComments[id] }));
  }, [collapsedComments, setCollapsedComments]);
  return /* @__PURE__ */ React7.createElement("table", {
    className: "comment-tree",
    style: { border: "0" }
  }, /* @__PURE__ */ React7.createElement("tbody", null, renderCommentTreeAsFlatArray([], comments, 0, shouldIndent, collapsedComments, toggleCollapseComment)));
}

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/newcomments.tsx
var loader3 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get(SessionCookieProperties.USER_ID);
  const comments = await commentService.getNewComments(userId);
  return { comments };
};
var meta5 = () => {
  return { title: "New Comments | Hacker News Clone" };
};
function NewCommentsPage() {
  const { comments } = (0, import_remix20.useLoaderData)();
  return /* @__PURE__ */ React.createElement(MainLayout, null, /* @__PURE__ */ React.createElement(Comments, {
    comments,
    shouldIndent: false
  }));
}
var newcomments_default = NewCommentsPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/noobstories.tsx
var noobstories_exports = {};
__export(noobstories_exports, {
  NoobStoriesPage: () => NoobStoriesPage,
  default: () => noobstories_default,
  meta: () => meta6
});
init_react();
var meta6 = () => {
  return { title: "Noob Submissions | Hacker News Clone" };
};
function NoobStoriesPage() {
  return /* @__PURE__ */ React.createElement(MainLayout, null, "Hacker News API does not publicly provide this data!");
}
var noobstories_default = NoobStoriesPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/favorites.tsx
var favorites_exports = {};
__export(favorites_exports, {
  FavoritesPage: () => FavoritesPage,
  default: () => favorites_default,
  meta: () => meta7
});
init_react();
var meta7 = () => {
  return { title: "Favorites | Hacker News Clone" };
};
function FavoritesPage() {
  return /* @__PURE__ */ React.createElement(MainLayout, null, "Hacker News API does not publicly provide this data!");
}
var favorites_default = FavoritesPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/formatdoc.tsx
var formatdoc_exports = {};
__export(formatdoc_exports, {
  FormatDocPage: () => FormatDocPage,
  default: () => formatdoc_default,
  meta: () => meta8
});
init_react();
var meta8 = () => {
  return { title: "Formatting Options | Hacker News Clone" };
};
function FormatDocPage() {
  return /* @__PURE__ */ React.createElement(MainLayout, {
    isFooterVisible: false,
    isNavVisible: false,
    title: "Formatting Options"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("span", {
    className: "admin"
  }, /* @__PURE__ */ React.createElement("div", {
    style: { textAlign: "center" }
  }, /* @__PURE__ */ React.createElement("table", {
    style: { width: "500px" }
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "Blank lines separate paragraphs.", /* @__PURE__ */ React.createElement("p", null, "Text after a blank line that is indented by two or more spaces is reproduced verbatim. (This is intended for code.)"), /* @__PURE__ */ React.createElement("p", null, "Text surrounded by asterisks is italicized, if the character after the first asterisk isn't whitespace."), /* @__PURE__ */ React.createElement("p", null, "Urls become links, except in the text field of a submission.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null)))))))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null))));
}
var formatdoc_default = FormatDocPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/submitted.tsx
var submitted_exports = {};
__export(submitted_exports, {
  SubmittedPage: () => SubmittedPage,
  default: () => submitted_default,
  meta: () => meta9
});
init_react();
var meta9 = ({ location: location2 }) => {
  const params = new URLSearchParams(location2.search);
  return { title: `${params.get("id")}'s submissions | Hacker News Clone` };
};
function SubmittedPage() {
  return /* @__PURE__ */ React.createElement(MainLayout, null, "Hacker News API does not publicly provide this data!");
}
var submitted_default = SubmittedPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/changepw.tsx
var changepw_exports = {};
__export(changepw_exports, {
  ChangePasswordPage: () => ChangePasswordPage,
  default: () => changepw_default
});
init_react();
function ChangePasswordPage() {
  return /* @__PURE__ */ React.createElement(MainLayout, null, "Not implemented.");
}
var changepw_default = ChangePasswordPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/leaders.tsx
var leaders_exports = {};
__export(leaders_exports, {
  LeadersPage: () => LeadersPage,
  default: () => leaders_default,
  meta: () => meta10
});
init_react();
var meta10 = () => {
  return { title: "Leaders | Hacker News Clone" };
};
function LeadersPage() {
  return /* @__PURE__ */ React.createElement(MainLayout, null, "Hacker News API does not publicly provide this data!");
}
var leaders_default = LeadersPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/newpoll.tsx
var newpoll_exports = {};
__export(newpoll_exports, {
  NewPollPage: () => NewPollPage,
  default: () => newpoll_default
});
init_react();
function NewPollPage() {
  return /* @__PURE__ */ React.createElement(MainLayout, null, "Hacker News API does not publicly provide this data!");
}
var newpoll_default = NewPollPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/shownew.tsx
var shownew_exports = {};
__export(shownew_exports, {
  ShowNewPage: () => ShowNewPage,
  default: () => shownew_default,
  loader: () => loader4,
  meta: () => meta11
});
init_react();
var import_remix23 = __toModule(require_remix());

// src/components/news-feed.tsx
init_react();

// src/components/loading-spinner.tsx
init_react();
function LoadingSpinner() {
  return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", {
    className: "sk-circle"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sk-circle1 sk-child"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "sk-circle2 sk-child"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "sk-circle3 sk-child"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "sk-circle4 sk-child"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "sk-circle5 sk-child"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "sk-circle6 sk-child"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "sk-circle7 sk-child"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "sk-circle8 sk-child"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "sk-circle9 sk-child"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "sk-circle10 sk-child"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "sk-circle11 sk-child"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "sk-circle12 sk-child"
  }))));
}

// src/components/item-detail.tsx
init_react();
var import_remix21 = __toModule(require_remix());
var HIDE_BUTTON_STYLE = { cursor: "pointer" };
function ItemDetail(props) {
  const {
    commentCount,
    creationTime,
    hidden,
    id,
    isFavoriteVisible = true,
    isJobListing = false,
    isPostScrutinyVisible = false,
    submitterId,
    upvoteCount
  } = props;
  return isJobListing ? /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: 2
  }), /* @__PURE__ */ React.createElement("td", {
    className: "subtext"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "age"
  }, /* @__PURE__ */ React.createElement(import_remix21.Link, {
    to: `/item?id=${id}`
  }, convertNumberToTimeAgo(creationTime))))) : /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: 2
  }), /* @__PURE__ */ React.createElement("td", {
    className: "subtext"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "score"
  }, upvoteCount, " points"), " by ", /* @__PURE__ */ React.createElement(import_remix21.Link, {
    className: "hnuser",
    to: `/user?id=${submitterId}`
  }, submitterId), " ", /* @__PURE__ */ React.createElement("span", {
    className: "age"
  }, /* @__PURE__ */ React.createElement(import_remix21.Link, {
    to: `/item?id=${id}`
  }, convertNumberToTimeAgo(creationTime))), " | ", hidden ? /* @__PURE__ */ React.createElement(import_remix21.Link, {
    to: `/hide?id=${id}&how=un&goto=news`,
    style: HIDE_BUTTON_STYLE
  }, "unhide") : /* @__PURE__ */ React.createElement(import_remix21.Link, {
    to: `/hide?id=${id}&how=up&goto=news`,
    style: HIDE_BUTTON_STYLE
  }, "hide"), isPostScrutinyVisible && /* @__PURE__ */ React.createElement("span", null, " | ", /* @__PURE__ */ React.createElement("a", {
    href: "https://hn.algolia.com/?query=Sublime%20Text%203.0&sort=byDate&dateRange=all&type=story&storyText=false&prefix&page=0"
  }, "past"), " | ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.google.com/search?q=Sublime%20Text%203.0"
  }, "web")), " | ", /* @__PURE__ */ React.createElement(import_remix21.Link, {
    to: `/item?id=${id}`
  }, commentCount === 0 ? "discuss" : commentCount === 1 ? "1 comment" : `${commentCount} comments`), isFavoriteVisible && " | favorite"));
}

// src/components/item-title.tsx
init_react();
var import_remix22 = __toModule(require_remix());
function ItemTitle(props) {
  const { id, isRankVisible = true, isUpvoteVisible = true, rank, title, upvoted, url } = props;
  const loc = (0, import_remix22.useLocation)();
  const hostname = url ? new URL(url).hostname : void 0;
  return /* @__PURE__ */ React.createElement("tr", {
    className: "athing"
  }, /* @__PURE__ */ React.createElement("td", {
    style: { textAlign: "right", verticalAlign: "top" },
    className: "title"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "rank"
  }, isRankVisible && `${rank}.`)), /* @__PURE__ */ React.createElement("td", {
    style: { verticalAlign: "top" },
    className: "votelinks"
  }, /* @__PURE__ */ React.createElement("div", {
    style: { textAlign: "center" }
  }, isUpvoteVisible && /* @__PURE__ */ React.createElement(import_remix22.Link, {
    className: upvoted ? "nosee" : " ",
    to: `/vote?id=${id}&how=up&goto=${loc.pathname + loc.search}`,
    style: { cursor: "pointer" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "votearrow",
    title: "upvote"
  })))), /* @__PURE__ */ React.createElement("td", {
    className: "title"
  }, url ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("a", {
    className: "storylink",
    href: url
  }, title), /* @__PURE__ */ React.createElement("span", {
    className: "sitebit comhead"
  }, " ", "(", /* @__PURE__ */ React.createElement(import_remix22.Link, {
    to: `/from?site=${hostname}`
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sitestr"
  }, hostname)), ")")) : /* @__PURE__ */ React.createElement(import_remix22.Link, {
    className: "storylink",
    to: `/item?id=${id}`
  }, title)));
}

// src/components/news-feed.tsx
function NewsFeed(props) {
  const {
    error,
    isJobListing = false,
    isLoading,
    isPostScrutinyVisible = false,
    isRankVisible = true,
    isUpvoteVisible = true,
    notice = null,
    pageNumber,
    postsPerPage,
    stories
  } = props;
  const currentPathname = useCurrentPathname();
  if (error) {
    return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "Error loading news items."));
  }
  if (isLoading) {
    return /* @__PURE__ */ React.createElement(LoadingSpinner, null);
  }
  if (!(stories == null ? void 0 : stories.length)) {
    return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "No stories found."));
  }
  const nextPage = pageNumber + 1;
  return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    style: { padding: "0px" }
  }, /* @__PURE__ */ React.createElement("table", {
    style: {
      border: "0px",
      padding: "0px",
      borderCollapse: "collapse",
      borderSpacing: "0px"
    },
    className: "itemlist"
  }, /* @__PURE__ */ React.createElement("tbody", null, notice && notice, /* @__PURE__ */ React.createElement(React.Fragment, null, stories.filter((newsItem) => !!newsItem && !newsItem.hidden).flatMap((newsItem, index) => [
    /* @__PURE__ */ React.createElement(ItemTitle, {
      key: `${newsItem.id}title`,
      id: newsItem.id,
      isRankVisible,
      isUpvoteVisible,
      rank: postsPerPage * (pageNumber - 1) + index + 1,
      title: newsItem.title,
      upvoted: newsItem.didUserUpvote,
      url: newsItem.url
    }),
    /* @__PURE__ */ React.createElement(ItemDetail, {
      key: `${newsItem.id}detail`,
      commentCount: newsItem.commentCount,
      creationTime: newsItem.creationTime,
      hidden: newsItem.hidden,
      id: newsItem.id,
      isFavoriteVisible: false,
      isJobListing,
      isPostScrutinyVisible,
      submitterId: newsItem.submitterId,
      upvoteCount: newsItem.upvoteCount
    }),
    /* @__PURE__ */ React.createElement("tr", {
      className: "spacer",
      key: `${newsItem.id}spacer`,
      style: { height: 5 }
    })
  ]), /* @__PURE__ */ React.createElement("tr", {
    key: "morespace",
    className: "morespace",
    style: { height: "10px" }
  }), /* @__PURE__ */ React.createElement("tr", {
    key: "morelinktr"
  }, /* @__PURE__ */ React.createElement("td", {
    key: "morelinkcolspan",
    colSpan: 2
  }), /* @__PURE__ */ React.createElement("td", {
    key: "morelinktd",
    className: "title"
  }, /* @__PURE__ */ React.createElement("a", {
    key: "morelink",
    href: `${currentPathname}?p=${nextPage}`,
    className: "morelink",
    rel: "nofollow"
  }, "More"))))))));
}

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/shownew.tsx
var loader4 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get(SessionCookieProperties.USER_ID);
  const searchParams = getSearchParamsFromRequest(request);
  const pageNumber = getPageNumberFromSearchParams(searchParams);
  const first = POSTS_PER_PAGE;
  const skip = POSTS_PER_PAGE * (pageNumber - 1);
  return { stories: await feedService.getForType(FeedType.SHOW, first, skip, userId) };
};
var meta11 = () => {
  return { title: "New Show | Hacker News Clone" };
};
function ShowNewPage() {
  const { stories } = (0, import_remix23.useLoaderData)();
  const pageNumber = usePageNumber();
  return /* @__PURE__ */ React.createElement(MainLayout, null, /* @__PURE__ */ React.createElement(NewsFeed, {
    stories,
    pageNumber,
    postsPerPage: POSTS_PER_PAGE,
    notice: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("tr", {
      key: "noticetopspacer",
      style: { height: "5px" }
    }), /* @__PURE__ */ React.createElement("tr", {
      key: "notice"
    }, /* @__PURE__ */ React.createElement("td", {
      colSpan: 2
    }), /* @__PURE__ */ React.createElement("td", null, "Please read the", " ", /* @__PURE__ */ React.createElement(import_remix23.Link, {
      to: "/showhn"
    }, /* @__PURE__ */ React.createElement("u", null, "rules")), ". You can also browse the", " ", /* @__PURE__ */ React.createElement(import_remix23.Link, {
      to: "/shownew"
    }, /* @__PURE__ */ React.createElement("u", null, "newest")), " ", "Show HNs.")), /* @__PURE__ */ React.createElement("tr", {
      key: "noticebottomspacer",
      style: { height: "10px" }
    }))
  }));
}
var shownew_default = ShowNewPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/threads.tsx
var threads_exports = {};
__export(threads_exports, {
  ThreadsPage: () => ThreadsPage,
  default: () => threads_default,
  meta: () => meta12
});
init_react();
var meta12 = ({ location: location2 }) => {
  const params = new URLSearchParams(location2.search);
  return { title: `${params.get("id")}'s comments | Hacker News Clone` };
};
function ThreadsPage() {
  return /* @__PURE__ */ React.createElement(MainLayout, null, "Hacker News API does not publicly provide this data!");
}
var threads_default = ThreadsPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/upvoted.tsx
var upvoted_exports = {};
__export(upvoted_exports, {
  UpvotedPage: () => UpvotedPage,
  default: () => upvoted_default,
  meta: () => meta13
});
init_react();
var meta13 = () => {
  return { title: "Upvoted submissions | Hacker News Clone" };
};
function UpvotedPage() {
  return /* @__PURE__ */ React.createElement(MainLayout, null, "Hacker News API does not publicly provide this data!");
}
var upvoted_default = UpvotedPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/active.tsx
var active_exports = {};
__export(active_exports, {
  ActivePage: () => ActivePage,
  default: () => active_default,
  meta: () => meta14
});
init_react();
var meta14 = () => {
  return { title: "Active Threads | Hacker News Clone" };
};
function ActivePage() {
  return /* @__PURE__ */ React.createElement(MainLayout, null, "Hacker News API does not publicly provide this data!");
}
var active_default = ActivePage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/hidden.tsx
var hidden_exports = {};
__export(hidden_exports, {
  HiddenPage: () => HiddenPage,
  default: () => hidden_default,
  meta: () => meta15
});
init_react();
var meta15 = () => {
  return { title: "Hidden | Hacker News Clone" };
};
function HiddenPage() {
  return /* @__PURE__ */ React.createElement(MainLayout, null, "Hacker News API does not publicly provide this data!");
}
var hidden_default = HiddenPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/newest.tsx
var newest_exports = {};
__export(newest_exports, {
  NewestPage: () => NewestPage,
  default: () => newest_default,
  loader: () => loader5,
  meta: () => meta16
});
init_react();
var import_remix24 = __toModule(require_remix());
var loader5 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get(SessionCookieProperties.USER_ID);
  const searchParams = getSearchParamsFromRequest(request);
  const pageNumber = getPageNumberFromSearchParams(searchParams);
  const first = POSTS_PER_PAGE;
  const skip = POSTS_PER_PAGE * (pageNumber - 1);
  return { stories: await feedService.getForType(FeedType.NEW, first, skip, userId) };
};
var meta16 = () => ({
  title: "New Links | Hacker News Clone"
});
function NewestPage() {
  const { stories } = (0, import_remix24.useLoaderData)();
  const pageNumber = usePageNumber();
  return /* @__PURE__ */ React.createElement(MainLayout, null, /* @__PURE__ */ React.createElement(NewsFeed, {
    stories,
    pageNumber,
    postsPerPage: POSTS_PER_PAGE
  }));
}
var newest_default = NewestPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/submit.tsx
var submit_exports = {};
__export(submit_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action4,
  default: () => submit_default,
  loader: () => loader6,
  meta: () => meta17
});
init_react();
var import_remix25 = __toModule(require_remix());
var import_remix26 = __toModule(require_remix());
var loader6 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const currentUserId = session.get(SessionCookieProperties.USER_ID);
  if (!currentUserId) {
    return (0, import_remix26.redirect)("/login?how=submit&goto=submit");
  }
  return null;
};
var meta17 = () => {
  return { title: "Submit | Hacker News Clone" };
};
var action4 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const submitterId = session.get(SessionCookieProperties.USER_ID);
  if (!submitterId) {
    return (0, import_remix26.redirect)("/login?how=submit&goto=submit");
  }
  const formData = await request.formData();
  const title = formData.get("title");
  const text = formData.get("text");
  const url = formData.get("url");
  const errors = {};
  if (!title)
    errors.title = true;
  if (!text && !url)
    errors.textOrUrl = true;
  if (url && !isValidStoryUrl(url))
    errors.url = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  const newsItem = await newsItemService.submitStory({ submitterId, title, text, url });
  return (0, import_remix26.redirect)(`/item?id=${newsItem.id}`);
};
function SubmitPage() {
  const actionData = (0, import_remix25.useActionData)();
  return /* @__PURE__ */ React.createElement(MainLayout, {
    title: "Submit",
    isNavVisible: false,
    isFooterVisible: false
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(import_remix26.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "fnid",
    value: "GvyHFpy11L26dCAIgGQ9rv"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "fnop",
    value: "submit-page"
  }), (actionData == null ? void 0 : actionData.textOrUrl) && /* @__PURE__ */ React.createElement("div", null, "URL or Text is required."), (actionData == null ? void 0 : actionData.url) && /* @__PURE__ */ React.createElement("div", null, "URL is not correctly formatted."), /* @__PURE__ */ React.createElement("table", {
    style: { border: "0" }
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "title"), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    defaultValue: "",
    size: 50
  }), /* @__PURE__ */ React.createElement("span", {
    style: { marginLeft: "10px" }
  }))), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "url"), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "url",
    defaultValue: "",
    size: 50
  }))), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("b", null, "or"))), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "text"), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("textarea", {
    name: "text",
    rows: 4,
    cols: 49
  }))), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null), /* @__PURE__ */ React.createElement("td", null)), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    value: "submit"
  }))), /* @__PURE__ */ React.createElement("tr", {
    style: { height: "20px" }
  }), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null), /* @__PURE__ */ React.createElement("td", null, "Leave url blank to submit a question for discussion. If there is no url, the text (if any) will appear at the top of the thread.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "You can also submit via", " ", /* @__PURE__ */ React.createElement(import_remix25.Link, {
    to: "/bookmarklet",
    rel: "nofollow"
  }, /* @__PURE__ */ React.createElement("u", null, "bookmarklet")), "."))))))));
}
var ErrorBoundary2 = ({ error }) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, "Something went wrong."), /* @__PURE__ */ React.createElement("div", null, error.message));
};
var submit_default = SubmitPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/front.tsx
var front_exports = {};
__export(front_exports, {
  FrontPage: () => FrontPage,
  default: () => front_default,
  meta: () => meta18
});
init_react();
var meta18 = () => {
  return { title: "Front | Hacker News Clone" };
};
function FrontPage() {
  return /* @__PURE__ */ React.createElement(MainLayout, null, "Hacker News API does not publicly provide this data!");
}
var front_default = FrontPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/index.tsx
var main_exports2 = {};
__export(main_exports2, {
  default: () => IndexPage,
  loader: () => loader7,
  meta: () => meta19
});
init_react();
var import_remix27 = __toModule(require_remix());
var loader7 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get(SessionCookieProperties.USER_ID);
  const searchParams = getSearchParamsFromRequest(request);
  const pageNumber = getPageNumberFromSearchParams(searchParams);
  const first = POSTS_PER_PAGE;
  const skip = POSTS_PER_PAGE * (pageNumber - 1);
  return { stories: await feedService.getForType(FeedType.TOP, first, skip, userId) };
};
var meta19 = () => {
  return {
    description: "The top stories from technology and startup business hackers around the world."
  };
};
function IndexPage() {
  const { stories } = (0, import_remix27.useLoaderData)();
  const pageNumber = usePageNumber();
  return /* @__PURE__ */ React.createElement(MainLayout, null, /* @__PURE__ */ React.createElement(NewsFeed, {
    stories,
    pageNumber,
    postsPerPage: POSTS_PER_PAGE
  }));
}

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/lists.tsx
var lists_exports = {};
__export(lists_exports, {
  ListsPage: () => ListsPage,
  default: () => lists_default,
  meta: () => meta20
});
init_react();
var import_remix28 = __toModule(require_remix());
var meta20 = () => {
  return { title: "Lists | Hacker News Clone" };
};
function ListsPage() {
  return /* @__PURE__ */ React.createElement(MainLayout, null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("table", {
    style: { borderSpacing: "7px 0px" }
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(import_remix28.Link, {
    to: "/leaders"
  }, "leaders")), /* @__PURE__ */ React.createElement("td", null, "Users with most karma.")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(import_remix28.Link, {
    to: "/front"
  }, "front")), /* @__PURE__ */ React.createElement("td", null, "Front page submissions for a given day (e.g.", " ", /* @__PURE__ */ React.createElement("a", {
    href: "/front?day=2016-06-20"
  }, "2016-06-20"), "), ordered by time spent there.")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(import_remix28.Link, {
    to: "/best"
  }, "best")), /* @__PURE__ */ React.createElement("td", null, "Highest-voted recent links.")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(import_remix28.Link, {
    to: "/active"
  }, "active")), /* @__PURE__ */ React.createElement("td", null, "Most active current discussions.")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(import_remix28.Link, {
    to: "/bestcomments"
  }, "bestcomments")), /* @__PURE__ */ React.createElement("td", null, "Highest-voted recent comments.")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(import_remix28.Link, {
    to: "/noobstories"
  }, "noobstories")), /* @__PURE__ */ React.createElement("td", null, "Submissions from new accounts.")), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(import_remix28.Link, {
    to: "/noobcomments"
  }, "noobcomments ")), /* @__PURE__ */ React.createElement("td", null, "Comments from new accounts.")))))));
}
var lists_default = ListsPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/reply.tsx
var reply_exports = {};
__export(reply_exports, {
  default: () => reply_default,
  loader: () => loader8,
  meta: () => meta21
});
init_react();
var import_remix29 = __toModule(require_remix());
var loader8 = async ({ request }) => {
  const searchParams = getSearchParamsFromRequest(request);
  const commentId = +searchParams.get(URLSearchParamFields.ID);
  checkBadRequest(commentId, '"id" is required.');
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get(SessionCookieProperties.USER_ID);
  const comment = await commentService.getComment(commentId, userId);
  return { comment };
};
var meta21 = () => {
  return { title: "Add Comment | Hacker News Clone" };
};
function ReplyPage() {
  const { comment } = (0, import_remix29.useLoaderData)();
  return /* @__PURE__ */ React.createElement(MainLayout, {
    title: "Add Comment",
    isNavVisible: false
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("table", {
    className: "fatitem",
    style: { border: "0" }
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", {
    className: "athing",
    id: comment.id.toString()
  }, /* @__PURE__ */ React.createElement("td", {
    className: "ind"
  }), /* @__PURE__ */ React.createElement("td", {
    style: { verticalAlign: "top" },
    className: "votelinks"
  }, /* @__PURE__ */ React.createElement("div", {
    style: { textAlign: "center" }
  }, /* @__PURE__ */ React.createElement("a", {
    id: `up_${comment.id}`,
    href: `vote?id=${comment.id}&how=up&goto=reply?goto=item?id=${comment.parent}#${comment.id}&id=${comment.id}#${comment.id}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "votearrow",
    title: "upvote"
  })))), /* @__PURE__ */ React.createElement("td", {
    className: "default"
  }, /* @__PURE__ */ React.createElement("div", {
    style: { marginTop: "2px", marginBottom: "-10px" }
  }, /* @__PURE__ */ React.createElement("span", {
    className: "comhead"
  }, /* @__PURE__ */ React.createElement(import_remix29.Link, {
    to: `user?id=${comment.submitterId}`,
    className: "hnuser"
  }, comment.submitterId), /* @__PURE__ */ React.createElement("span", {
    className: "age"
  }, /* @__PURE__ */ React.createElement(import_remix29.Link, {
    to: `item?id=${comment.id}`
  }, "2 hours ago")), /* @__PURE__ */ React.createElement("span", {
    id: `unv_${comment.id}`
  }), /* @__PURE__ */ React.createElement("span", {
    className: "par"
  }, " ", "| ", /* @__PURE__ */ React.createElement("a", {
    href: `item?id=${comment.parent}`
  }, "parent")), /* @__PURE__ */ React.createElement("span", {
    className: "storyon"
  }, " ", "| on:", " ", /* @__PURE__ */ React.createElement("a", {
    href: `item?id=${comment.parent}`
  }, "Electric dump truck stores as much energy as 8 Mod...")))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    className: "comment"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "c00",
    dangerouslySetInnerHTML: { __html: comment.text }
  }), /* @__PURE__ */ React.createElement("div", {
    className: "reply"
  })))), /* @__PURE__ */ React.createElement("tr", {
    style: { height: "10px" }
  }), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: 2
  }), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("form", {
    method: "post",
    action: "comment"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "parent",
    value: `${comment.id}`
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "goto",
    value: `item?id=${comment.parent}#${comment.id}`
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "hmac",
    value: "d4cda96b7000a0e0cd578dde21feb6c9070cda8a"
  }), /* @__PURE__ */ React.createElement("textarea", {
    name: "text",
    rows: 6,
    cols: 60
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    value: "reply"
  })))))))));
}
var reply_default = ReplyPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/best.tsx
var best_exports = {};
__export(best_exports, {
  BestPage: () => BestPage,
  default: () => best_default,
  loader: () => loader9,
  meta: () => meta22
});
init_react();
var import_remix30 = __toModule(require_remix());
var loader9 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get(SessionCookieProperties.USER_ID);
  const searchParams = getSearchParamsFromRequest(request);
  const pageNumber = getPageNumberFromSearchParams(searchParams);
  const first = POSTS_PER_PAGE;
  const skip = POSTS_PER_PAGE * (pageNumber - 1);
  return { stories: await feedService.getForType(FeedType.BEST, first, skip, userId) };
};
var meta22 = () => {
  return { title: "Top Links | Hacker News Clone" };
};
function BestPage() {
  const { stories } = (0, import_remix30.useLoaderData)();
  const pageNumber = usePageNumber();
  return /* @__PURE__ */ React.createElement(MainLayout, null, /* @__PURE__ */ React.createElement(NewsFeed, {
    stories,
    pageNumber,
    postsPerPage: POSTS_PER_PAGE
  }));
}
var best_default = BestPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/from.tsx
var from_exports = {};
__export(from_exports, {
  FrontPage: () => FrontPage2,
  default: () => from_default,
  meta: () => meta23
});
init_react();
var meta23 = () => {
  const params = new URLSearchParams(location.search);
  const site = params.get("site") || "site";
  return { title: `Submissions from ${site} | Hacker News Clone` };
};
function FrontPage2() {
  return /* @__PURE__ */ React.createElement(MainLayout, null, "Hacker News API does not publicly provide this data!");
}
var from_default = FrontPage2;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/item.tsx
var item_exports = {};
__export(item_exports, {
  ItemPage: () => ItemPage,
  default: () => item_default,
  loader: () => loader10,
  meta: () => meta24
});
init_react();
var import_remix31 = __toModule(require_remix());

// src/components/item-with-comments.tsx
init_react();

// src/components/comment-box.tsx
init_react();
function CommentBox(props) {
  const { parentId } = props;
  return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    colSpan: 2
  }), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("form", {
    method: "post",
    action: "comment"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "parent",
    value: parentId
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "goto",
    value: `item?id=${parentId}`
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "hmac",
    value: "02641d0660c89c1a83ccf0d171e42497d10d2135"
  }), /* @__PURE__ */ React.createElement("textarea", {
    name: "text",
    rows: 6,
    cols: 60
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    value: "add comment"
  }))));
}

// src/components/item-with-comments.tsx
function ItemWithComments(props) {
  const {
    newsItem: {
      commentCount,
      comments,
      creationTime,
      id,
      rank,
      submitterId,
      title,
      upvoteCount,
      url
    }
  } = props;
  return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
    style: { padding: "0px" }
  }, /* @__PURE__ */ React.createElement("table", {
    style: {
      border: "0px",
      padding: "0px",
      borderCollapse: "collapse",
      borderSpacing: "0px"
    },
    className: "itemlist"
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement(ItemTitle, {
    id,
    rank,
    title,
    url,
    isRankVisible: false,
    upvoted: false
  }), /* @__PURE__ */ React.createElement(ItemDetail, {
    isPostScrutinyVisible: true,
    commentCount,
    id,
    submitterId,
    upvoteCount,
    creationTime
  }), /* @__PURE__ */ React.createElement("tr", {
    key: "morespace",
    className: "morespace",
    style: { height: "10px" }
  }), /* @__PURE__ */ React.createElement(CommentBox, {
    parentId: id
  }))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Comments, {
    comments,
    shouldIndent: true
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null)));
}

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/item.tsx
var loader10 = async ({ request }) => {
  const searchParams = getSearchParamsFromRequest(request);
  const newsItemId = searchParams.get(URLSearchParamFields.ID);
  checkBadRequest(newsItemId, '"id" is required.');
  const newsItem = await newsItemService.getStory(+newsItemId);
  checkNotFound(newsItem, "NewsItem not found");
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get(SessionCookieProperties.USER_ID);
  const comments = await commentService.getCommentTree(newsItem.comments, userId);
  newsItem.comments = comments;
  return { newsItem };
};
var meta24 = ({ data }) => {
  if (data) {
    return { title: `${data.newsItem.title} | Hacker News Clone` };
  }
  return { title: "Story not found | Hacker News Clone" };
};
function ItemPage() {
  const { newsItem } = (0, import_remix31.useLoaderData)();
  return /* @__PURE__ */ React.createElement(MainLayout, null, /* @__PURE__ */ React.createElement(ItemWithComments, {
    newsItem
  }));
}
var item_default = ItemPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/jobs.tsx
var jobs_exports = {};
__export(jobs_exports, {
  JobsPage: () => JobsPage,
  default: () => jobs_default,
  loader: () => loader11,
  meta: () => meta25
});
init_react();
var import_remix32 = __toModule(require_remix());
var loader11 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get(SessionCookieProperties.USER_ID);
  const searchParams = getSearchParamsFromRequest(request);
  const pageNumber = getPageNumberFromSearchParams(searchParams);
  const first = POSTS_PER_PAGE;
  const skip = POSTS_PER_PAGE * (pageNumber - 1);
  return {
    stories: await feedService.getForType(FeedType.JOB, first, skip, userId)
  };
};
var meta25 = () => {
  return { title: "jobs | Hacker News Clone" };
};
function JobsPage() {
  const { stories } = (0, import_remix32.useLoaderData)();
  const pageNumber = usePageNumber();
  return /* @__PURE__ */ React.createElement(MainLayout, null, /* @__PURE__ */ React.createElement(NewsFeed, {
    isJobListing: true,
    isRankVisible: false,
    isUpvoteVisible: false,
    stories,
    pageNumber,
    postsPerPage: POSTS_PER_PAGE,
    notice: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("tr", {
      key: "noticetopspacer",
      style: { height: "20px" }
    }), /* @__PURE__ */ React.createElement("tr", {
      key: "notice"
    }, /* @__PURE__ */ React.createElement("td", null), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("img", {
      alt: "",
      src: s_default,
      height: "1",
      width: "14"
    })), /* @__PURE__ */ React.createElement("td", null, "These are jobs at startups that were funded by Y Combinator. You can also get a job at a YC startup through", " ", /* @__PURE__ */ React.createElement("a", {
      href: "https://triplebyte.com/?ref=yc_jobs"
    }, /* @__PURE__ */ React.createElement("u", null, "Triplebyte")), ".")), /* @__PURE__ */ React.createElement("tr", {
      key: "noticebottomspacer",
      style: { height: "20px" }
    }))
  }));
}
var jobs_default = JobsPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/show.tsx
var show_exports = {};
__export(show_exports, {
  ShowHNPage: () => ShowHNPage,
  default: () => show_default,
  loader: () => loader12,
  meta: () => meta26
});
init_react();
var import_remix33 = __toModule(require_remix());
var loader12 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get(SessionCookieProperties.USER_ID);
  const searchParams = getSearchParamsFromRequest(request);
  const pageNumber = getPageNumberFromSearchParams(searchParams);
  const first = POSTS_PER_PAGE;
  const skip = POSTS_PER_PAGE * (pageNumber - 1);
  return { stories: await feedService.getForType(FeedType.SHOW, first, skip, userId) };
};
var meta26 = () => {
  return { title: "Show | Hacker News Clone" };
};
function ShowHNPage() {
  const { stories } = (0, import_remix33.useLoaderData)();
  const pageNumber = usePageNumber();
  return /* @__PURE__ */ React.createElement(MainLayout, null, /* @__PURE__ */ React.createElement(NewsFeed, {
    stories,
    pageNumber,
    postsPerPage: POSTS_PER_PAGE,
    notice: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("tr", {
      key: "noticetopspacer",
      style: { height: "5px" }
    }), /* @__PURE__ */ React.createElement("tr", {
      key: "notice"
    }, /* @__PURE__ */ React.createElement("td", {
      colSpan: 2
    }), /* @__PURE__ */ React.createElement("td", null, "Please read the", " ", /* @__PURE__ */ React.createElement(import_remix33.Link, {
      to: "/showhn"
    }, /* @__PURE__ */ React.createElement("u", null, "rules")), ". You can also browse the", " ", /* @__PURE__ */ React.createElement(import_remix33.Link, {
      to: "/shownew"
    }, /* @__PURE__ */ React.createElement("u", null, "newest")), " ", "Show HNs.")), /* @__PURE__ */ React.createElement("tr", {
      key: "noticebottomspacer",
      style: { height: "10px" }
    }))
  }));
}
var show_default = ShowHNPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/user.tsx
var user_exports = {};
__export(user_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => user_default,
  loader: () => loader13,
  meta: () => meta27
});
init_react();
var import_invariant2 = __toModule(require("invariant"));
var import_remix34 = __toModule(require_remix());
var React8 = __toModule(require("react"));
var loader13 = async ({ request }) => {
  const searchParams = getSearchParamsFromRequest(request);
  const userId = searchParams.get(URLSearchParamFields.ID);
  (0, import_invariant2.default)(userId, '"id" must be provided.');
  const rawUser = await userService.getUser(userId);
  checkNotFound(rawUser, "No such user.");
  const user = {
    id: rawUser.id,
    about: rawUser.about,
    creationTime: rawUser.creationTime,
    email: rawUser.email,
    karma: rawUser.karma
  };
  return { user };
};
var meta27 = ({ location: location2 }) => {
  const params = new URLSearchParams(location2.search);
  return { title: `Profile: ${params.get("id")} | Hacker News Clone` };
};
function UserPage() {
  const { user } = (0, import_remix34.useLoaderData)();
  const me = React8.useContext(MeContext);
  let about = user.about || "";
  let email = user.email || "";
  const onAboutChange = (e) => {
    about = e.target.value;
  };
  const onEmailChange = (e) => {
    email = e.target.value;
  };
  if (!!me && user.id === me.id) {
    return /* @__PURE__ */ React8.createElement(MainLayout, {
      isFooterVisible: false
    }, /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement("form", {
      className: "profileform",
      method: "post",
      action: "/xuser"
    }, /* @__PURE__ */ React8.createElement("input", {
      type: "hidden",
      name: "id",
      value: user.id
    }), /* @__PURE__ */ React8.createElement("input", {
      type: "hidden",
      name: "hmac",
      value: "71104445c3c41b4167c38db67a656e610d5fbad9"
    }), /* @__PURE__ */ React8.createElement("table", {
      style: { border: "0px" }
    }, /* @__PURE__ */ React8.createElement("tbody", null, /* @__PURE__ */ React8.createElement("tr", {
      className: "athing"
    }, /* @__PURE__ */ React8.createElement("td", {
      style: { verticalAlign: "top" }
    }, "user:"), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement(import_remix34.Link, {
      className: "hnuser",
      style: { color: "#3c963c" },
      to: `/user?id=${user.id}`
    }, user.id))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", {
      style: { verticalAlign: "top" }
    }, "created:"), /* @__PURE__ */ React8.createElement("td", null, convertNumberToTimeAgo(user.creationTime))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", {
      style: { verticalAlign: "top" }
    }, "karma:"), /* @__PURE__ */ React8.createElement("td", null, user.karma)), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", {
      style: { verticalAlign: "top" }
    }, "about:"), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement("textarea", {
      cols: 60,
      defaultValue: about,
      name: "about",
      onChange: onAboutChange,
      rows: 5,
      style: { fontSize: "-2" },
      wrap: "virtual"
    }), /* @__PURE__ */ React8.createElement(import_remix34.Link, {
      to: "/formatdoc",
      tabIndex: -1,
      style: { color: "#afafaf" }
    }, "help"))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", {
      style: { verticalAlign: "top" }
    }, "email:"), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement("input", {
      type: "text",
      name: "uemail",
      defaultValue: email,
      onChange: onEmailChange,
      size: 60
    }))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", {
      style: { verticalAlign: "top" }
    }, "showdead:"), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement("select", {
      defaultValue: "no",
      name: "showd"
    }, /* @__PURE__ */ React8.createElement("option", {
      value: "yes"
    }, "yes"), /* @__PURE__ */ React8.createElement("option", {
      value: "no"
    }, "no")))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", {
      style: { verticalAlign: "top" }
    }, "noprocrast:"), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement("select", {
      defaultValue: "no",
      name: "nopro"
    }, /* @__PURE__ */ React8.createElement("option", {
      value: "yes"
    }, "yes"), /* @__PURE__ */ React8.createElement("option", {
      value: "no"
    }, "no")))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", {
      style: { verticalAlign: "top" }
    }, "maxvisit:"), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement("input", {
      type: "text",
      name: "maxv",
      defaultValue: "20",
      size: 16
    }))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", {
      style: { verticalAlign: "top" }
    }, "minaway:"), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement("input", {
      type: "text",
      name: "mina",
      defaultValue: "180",
      size: 16
    }))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", {
      style: { verticalAlign: "top" }
    }, "delay:"), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement("input", {
      type: "text",
      name: "delay",
      defaultValue: "0",
      size: 16
    }))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", null), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement(import_remix34.Link, {
      to: "/changepw"
    }, /* @__PURE__ */ React8.createElement("u", null, "change password")))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", null), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement(import_remix34.Link, {
      to: `/submitted?id=${user.id}`
    }, /* @__PURE__ */ React8.createElement("u", null, "submissions")))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", null), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement(import_remix34.Link, {
      to: `/threads?id=${user.id}`
    }, /* @__PURE__ */ React8.createElement("u", null, "comments")))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", null), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement(import_remix34.Link, {
      to: "/hidden"
    }, /* @__PURE__ */ React8.createElement("u", null, "hidden")))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", null), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement(import_remix34.Link, {
      to: `/upvoted?id=${user.id}`
    }, /* @__PURE__ */ React8.createElement("u", null, "upvoted submissions")), " / ", /* @__PURE__ */ React8.createElement(import_remix34.Link, {
      to: `/upvoted?id=${user.id}&comments=t`
    }, /* @__PURE__ */ React8.createElement("u", null, "comments")), "\xA0\xA0", /* @__PURE__ */ React8.createElement("span", {
      style: { fontStyle: "italic" }
    }, "(private)"))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", null), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement(import_remix34.Link, {
      to: `/favorites?id=${user.id}`
    }, /* @__PURE__ */ React8.createElement("u", null, "favorite submissions")), " / ", /* @__PURE__ */ React8.createElement(import_remix34.Link, {
      to: `/favorites?id=${user.id}&amp;comments=t`
    }, /* @__PURE__ */ React8.createElement("u", null, "comments")), "\xA0\xA0", /* @__PURE__ */ React8.createElement("span", {
      style: { fontStyle: "italic" }
    }, "(shared)"))))), /* @__PURE__ */ React8.createElement("br", null), /* @__PURE__ */ React8.createElement("input", {
      type: "submit",
      value: "update"
    })), /* @__PURE__ */ React8.createElement("br", null), /* @__PURE__ */ React8.createElement("br", null))));
  }
  return /* @__PURE__ */ React8.createElement(MainLayout, {
    isFooterVisible: false
  }, /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement("table", {
    style: { border: "0" }
  }, /* @__PURE__ */ React8.createElement("tbody", null, /* @__PURE__ */ React8.createElement("tr", {
    className: "athing"
  }, /* @__PURE__ */ React8.createElement("td", {
    style: { verticalAlign: "top" }
  }, "user:"), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement("a", {
    href: `user?id=${user.id}`,
    className: "hnuser"
  }, user.id))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", {
    style: { verticalAlign: "top" }
  }, "created:"), /* @__PURE__ */ React8.createElement("td", null, convertNumberToTimeAgo(user.creationTime))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", {
    style: { verticalAlign: "top" }
  }, "karma:"), /* @__PURE__ */ React8.createElement("td", null, user.karma)), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", {
    style: { verticalAlign: "top" }
  }, "about:"), /* @__PURE__ */ React8.createElement("td", {
    dangerouslySetInnerHTML: { __html: user.about }
  })), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", null), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement("a", {
    href: `submitted?id=${user.id}`
  }, /* @__PURE__ */ React8.createElement("u", null, "submissions")))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", null), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement("a", {
    href: `threads?id=${user.id}`
  }, /* @__PURE__ */ React8.createElement("u", null, "comments")))), /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", null), /* @__PURE__ */ React8.createElement("td", null, /* @__PURE__ */ React8.createElement("a", {
    href: `favorites?id=${user.id}`
  }, /* @__PURE__ */ React8.createElement("u", null, "favorites")))))), /* @__PURE__ */ React8.createElement("br", null), /* @__PURE__ */ React8.createElement("br", null))));
}
function CatchBoundary() {
  const error = (0, import_remix34.useCatch)();
  return /* @__PURE__ */ React8.createElement(BlankLayout, null, error.data);
}
var user_default = UserPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/ask.tsx
var ask_exports = {};
__export(ask_exports, {
  AskPage: () => AskPage,
  default: () => ask_default,
  loader: () => loader14,
  meta: () => meta28
});
init_react();
var import_remix35 = __toModule(require_remix());
var loader14 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get(SessionCookieProperties.USER_ID);
  const searchParams = getSearchParamsFromRequest(request);
  const pageNumber = getPageNumberFromSearchParams(searchParams);
  const first = POSTS_PER_PAGE;
  const skip = POSTS_PER_PAGE * (pageNumber - 1);
  return { stories: await feedService.getForType(FeedType.ASK, first, skip, userId) };
};
var meta28 = () => {
  return { title: "ask | Hacker News Clone" };
};
function AskPage() {
  const { stories } = (0, import_remix35.useLoaderData)();
  const pageNumber = usePageNumber();
  return /* @__PURE__ */ React.createElement(MainLayout, null, /* @__PURE__ */ React.createElement(NewsFeed, {
    stories,
    pageNumber,
    postsPerPage: POSTS_PER_PAGE
  }));
}
var ask_default = AskPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/__main/x.tsx
var x_exports = {};
__export(x_exports, {
  default: () => x_default
});
init_react();
function PasswordRecoveryPage() {
  return /* @__PURE__ */ React.createElement(MainLayout, {
    isFooterVisible: false,
    isNavVisible: false,
    isUserVisible: false,
    title: "Message"
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("tr", {
    style: { height: 10 }
  }), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("span", {
    className: "admin"
  }, /* @__PURE__ */ React.createElement("table", {
    style: { width: 500 }
  }, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "Password recovery message sent. If you don't see it, you might want to check your spam folder."))))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null)))));
}
var x_default = PasswordRecoveryPage;

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/logout.ts
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader15
});
init_react();
var import_remix36 = __toModule(require_remix());
var loader15 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  return (0, import_remix36.redirect)("/login", {
    headers: { "Set-Cookie": await destroySession(session) }
  });
};

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/xuser.ts
var xuser_exports = {};
__export(xuser_exports, {
  action: () => action5
});
init_react();
var import_remix37 = __toModule(require_remix());
var action5 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const formData = await request.formData();
  const currentUserId = session.get(SessionCookieProperties.USER_ID);
  checkUnauthorized(currentUserId, "Must be logged in.");
  const id = formData.get("id");
  checkBadRequest(id, '"id" must be provided.');
  checkForbidden(currentUserId && currentUserId === id, "User can only update their own profile data.");
  const about = formData.get("about");
  const email = formData.get("uemail");
  await userService.updateUser({ id, about, email });
  return (0, import_remix37.redirect)(`/user?id=${id}`);
};

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/hide.ts
var hide_exports = {};
__export(hide_exports, {
  loader: () => loader16
});
init_react();
var import_remix38 = __toModule(require_remix());
var loader16 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get(SessionCookieProperties.USER_ID);
  const searchParams = getSearchParamsFromRequest(request);
  const id = searchParams.get(URLSearchParamFields.ID);
  const how = searchParams.get(URLSearchParamFields.HOW);
  const goto = searchParams.get(URLSearchParamFields.GOTO);
  if (!userId) {
    return (0, import_remix38.redirect)(`/login?how=${UserLoginErrorCode.LOGIN_UPVOTE}&goto=${goto}`);
  }
  checkBadRequest(id, 'item "id" is required to hide.');
  if (how === URLSearchParamHowValue.UNVOTE) {
  } else {
  }
  return (0, import_remix38.redirect)(goto || `/item?id=${id}`);
};

// route:/Users/kurtpan/Documents/KurtPan-GitHub/ZK-News/src/routes/vote.ts
var vote_exports = {};
__export(vote_exports, {
  loader: () => loader17
});
init_react();
var import_remix39 = __toModule(require_remix());
var loader17 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const searchParams = getSearchParamsFromRequest(request);
  const id = searchParams.get(URLSearchParamFields.ID);
  const how = searchParams.get(URLSearchParamFields.HOW);
  const goto = searchParams.get(URLSearchParamFields.GOTO);
  const currentUserId = session.get(SessionCookieProperties.USER_ID);
  if (!currentUserId) {
    return (0, import_remix39.redirect)(`/login?how=${UserLoginErrorCode.LOGIN_UPVOTE}goto=${goto}`);
  }
  checkBadRequest(id, '"id" must be provided.');
  if (how === URLSearchParamHowValue.UNVOTE) {
    return;
  } else {
    await itemService.upvoteItem(+id, currentUserId);
    return (0, import_remix39.redirect)(goto || "/");
  }
};

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "a2ebc5b8", "entry": { "module": "/build/entry.client-K7QPK3UU.js", "imports": ["/build/_shared/chunk-MC7GRPCH.js", "/build/_shared/chunk-EFF4OLHG.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-UMEM5KWQ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/__blank/dmca": { "id": "routes/__blank/dmca", "parentId": "root", "path": "dmca", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__blank/dmca-NTWQFV77.js", "imports": ["/build/_shared/chunk-CIXNZTO5.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__blank/forgot": { "id": "routes/__blank/forgot", "parentId": "root", "path": "forgot", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__blank/forgot-LSEUDLDG.js", "imports": ["/build/_shared/chunk-CIXNZTO5.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__blank/login": { "id": "routes/__blank/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__blank/login-XGN6A7RV.js", "imports": ["/build/_shared/chunk-F7PSREVK.js", "/build/_shared/chunk-5JCIXUXO.js", "/build/_shared/chunk-GIHLUJCG.js", "/build/_shared/chunk-3IKFFQMB.js", "/build/_shared/chunk-EN27VTUB.js", "/build/_shared/chunk-SXRUWXCK.js", "/build/_shared/chunk-CIXNZTO5.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main": { "id": "routes/__main", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main-FM37SEPP.js", "imports": ["/build/_shared/chunk-4EU6SQ7H.js", "/build/_shared/chunk-Y25FTT6B.js", "/build/_shared/chunk-EN27VTUB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/active": { "id": "routes/__main/active", "parentId": "routes/__main", "path": "active", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/active-XNHHVPSH.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/ask": { "id": "routes/__main/ask", "parentId": "routes/__main", "path": "ask", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/ask-TZUQZP7C.js", "imports": ["/build/_shared/chunk-5ZCQUOMH.js", "/build/_shared/chunk-LLRPIPIM.js", "/build/_shared/chunk-NLY2KWBI.js", "/build/_shared/chunk-6QBFS4I5.js", "/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-5JCIXUXO.js", "/build/_shared/chunk-GIHLUJCG.js", "/build/_shared/chunk-3IKFFQMB.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/best": { "id": "routes/__main/best", "parentId": "routes/__main", "path": "best", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/best-JNQBG2VP.js", "imports": ["/build/_shared/chunk-5ZCQUOMH.js", "/build/_shared/chunk-LLRPIPIM.js", "/build/_shared/chunk-NLY2KWBI.js", "/build/_shared/chunk-6QBFS4I5.js", "/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-5JCIXUXO.js", "/build/_shared/chunk-GIHLUJCG.js", "/build/_shared/chunk-3IKFFQMB.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/bestcomments": { "id": "routes/__main/bestcomments", "parentId": "routes/__main", "path": "bestcomments", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/bestcomments-XVCGJO22.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/changepw": { "id": "routes/__main/changepw", "parentId": "routes/__main", "path": "changepw", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/changepw-SUSZFG6F.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/favorites": { "id": "routes/__main/favorites", "parentId": "routes/__main", "path": "favorites", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/favorites-ZL7O26MI.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/formatdoc": { "id": "routes/__main/formatdoc", "parentId": "routes/__main", "path": "formatdoc", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/formatdoc-EKQIYLHX.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/from": { "id": "routes/__main/from", "parentId": "routes/__main", "path": "from", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/from-RRUK46CU.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/front": { "id": "routes/__main/front", "parentId": "routes/__main", "path": "front", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/front-PQETFDVW.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/hidden": { "id": "routes/__main/hidden", "parentId": "routes/__main", "path": "hidden", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/hidden-5CQO7EP2.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/index": { "id": "routes/__main/index", "parentId": "routes/__main", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/__main/index-B3ZWA5FV.js", "imports": ["/build/_shared/chunk-5ZCQUOMH.js", "/build/_shared/chunk-LLRPIPIM.js", "/build/_shared/chunk-NLY2KWBI.js", "/build/_shared/chunk-6QBFS4I5.js", "/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-5JCIXUXO.js", "/build/_shared/chunk-GIHLUJCG.js", "/build/_shared/chunk-3IKFFQMB.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/item": { "id": "routes/__main/item", "parentId": "routes/__main", "path": "item", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/item-OFLKKM3T.js", "imports": ["/build/_shared/chunk-LLRPIPIM.js", "/build/_shared/chunk-NSGMNZWI.js", "/build/_shared/chunk-6QBFS4I5.js", "/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-3IKFFQMB.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/jobs": { "id": "routes/__main/jobs", "parentId": "routes/__main", "path": "jobs", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/jobs-GNCUAG5N.js", "imports": ["/build/_shared/chunk-5ZCQUOMH.js", "/build/_shared/chunk-LLRPIPIM.js", "/build/_shared/chunk-NLY2KWBI.js", "/build/_shared/chunk-6QBFS4I5.js", "/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-5JCIXUXO.js", "/build/_shared/chunk-GIHLUJCG.js", "/build/_shared/chunk-3IKFFQMB.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/leaders": { "id": "routes/__main/leaders", "parentId": "routes/__main", "path": "leaders", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/leaders-IGLKKXFL.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/lists": { "id": "routes/__main/lists", "parentId": "routes/__main", "path": "lists", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/lists-7VHEE7NB.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/newcomments": { "id": "routes/__main/newcomments", "parentId": "routes/__main", "path": "newcomments", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/newcomments-GDYSUFNQ.js", "imports": ["/build/_shared/chunk-NSGMNZWI.js", "/build/_shared/chunk-6QBFS4I5.js", "/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-3IKFFQMB.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/newest": { "id": "routes/__main/newest", "parentId": "routes/__main", "path": "newest", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/newest-SYGBZMTM.js", "imports": ["/build/_shared/chunk-5ZCQUOMH.js", "/build/_shared/chunk-LLRPIPIM.js", "/build/_shared/chunk-NLY2KWBI.js", "/build/_shared/chunk-6QBFS4I5.js", "/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-5JCIXUXO.js", "/build/_shared/chunk-GIHLUJCG.js", "/build/_shared/chunk-3IKFFQMB.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/newpoll": { "id": "routes/__main/newpoll", "parentId": "routes/__main", "path": "newpoll", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/newpoll-L6O463R2.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/noobcomments": { "id": "routes/__main/noobcomments", "parentId": "routes/__main", "path": "noobcomments", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/noobcomments-UJURG5TK.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/noobstories": { "id": "routes/__main/noobstories", "parentId": "routes/__main", "path": "noobstories", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/noobstories-TKZO4PAG.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/reply": { "id": "routes/__main/reply", "parentId": "routes/__main", "path": "reply", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/reply-2PBK6F6H.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-3IKFFQMB.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/show": { "id": "routes/__main/show", "parentId": "routes/__main", "path": "show", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/show-W2FABL5L.js", "imports": ["/build/_shared/chunk-5ZCQUOMH.js", "/build/_shared/chunk-LLRPIPIM.js", "/build/_shared/chunk-NLY2KWBI.js", "/build/_shared/chunk-6QBFS4I5.js", "/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-5JCIXUXO.js", "/build/_shared/chunk-GIHLUJCG.js", "/build/_shared/chunk-3IKFFQMB.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/shownew": { "id": "routes/__main/shownew", "parentId": "routes/__main", "path": "shownew", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/shownew-YRQ6EJ2Y.js", "imports": ["/build/_shared/chunk-5ZCQUOMH.js", "/build/_shared/chunk-LLRPIPIM.js", "/build/_shared/chunk-NLY2KWBI.js", "/build/_shared/chunk-6QBFS4I5.js", "/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-5JCIXUXO.js", "/build/_shared/chunk-GIHLUJCG.js", "/build/_shared/chunk-3IKFFQMB.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/submit": { "id": "routes/__main/submit", "parentId": "routes/__main", "path": "submit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/submit-VFQDDXDT.js", "imports": ["/build/_shared/chunk-NLY2KWBI.js", "/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-3IKFFQMB.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/__main/submitted": { "id": "routes/__main/submitted", "parentId": "routes/__main", "path": "submitted", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/submitted-F3CY4NSQ.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/threads": { "id": "routes/__main/threads", "parentId": "routes/__main", "path": "threads", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/threads-XGGZGVCF.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/upvoted": { "id": "routes/__main/upvoted", "parentId": "routes/__main", "path": "upvoted", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/upvoted-624VX43T.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__main/user": { "id": "routes/__main/user", "parentId": "routes/__main", "path": "user", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/user-PZ3BFNFR.js", "imports": ["/build/_shared/chunk-6QBFS4I5.js", "/build/_shared/chunk-K2NIQJCE.js", "/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-3IKFFQMB.js", "/build/_shared/chunk-SXRUWXCK.js", "/build/_shared/chunk-CIXNZTO5.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/__main/x": { "id": "routes/__main/x", "parentId": "routes/__main", "path": "x", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__main/x-XFY6YNU6.js", "imports": ["/build/_shared/chunk-OIVM2HRQ.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__notice": { "id": "routes/__notice", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__notice-4OTTK7MU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__notice/bookmarklet": { "id": "routes/__notice/bookmarklet", "parentId": "routes/__notice", "path": "bookmarklet", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__notice/bookmarklet-WW7JGKJF.js", "imports": ["/build/_shared/chunk-XXI3X274.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__notice/newsfaq": { "id": "routes/__notice/newsfaq", "parentId": "routes/__notice", "path": "newsfaq", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__notice/newsfaq-PEOFFXC4.js", "imports": ["/build/_shared/chunk-XXI3X274.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__notice/newsguidelines": { "id": "routes/__notice/newsguidelines", "parentId": "routes/__notice", "path": "newsguidelines", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__notice/newsguidelines-BIJPFLRT.js", "imports": ["/build/_shared/chunk-XXI3X274.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__notice/newswelcome": { "id": "routes/__notice/newswelcome", "parentId": "routes/__notice", "path": "newswelcome", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__notice/newswelcome-4YOGI2SZ.js", "imports": ["/build/_shared/chunk-XXI3X274.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__notice/security": { "id": "routes/__notice/security", "parentId": "routes/__notice", "path": "security", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__notice/security-2NGKNAW2.js", "imports": ["/build/_shared/chunk-XXI3X274.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/__notice/showhn": { "id": "routes/__notice/showhn", "parentId": "routes/__notice", "path": "showhn", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/__notice/showhn-N5NQOPD4.js", "imports": ["/build/_shared/chunk-XXI3X274.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/comment": { "id": "routes/comment", "parentId": "root", "path": "comment", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/comment-KKHMDFRK.js", "imports": ["/build/_shared/chunk-4EU6SQ7H.js", "/build/_shared/chunk-EN27VTUB.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/hide": { "id": "routes/hide", "parentId": "root", "path": "hide", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/hide-MQV5AEMO.js", "imports": ["/build/_shared/chunk-F7PSREVK.js", "/build/_shared/chunk-GIHLUJCG.js", "/build/_shared/chunk-EN27VTUB.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-PBTS76YA.js", "imports": ["/build/_shared/chunk-EN27VTUB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register": { "id": "routes/register", "parentId": "root", "path": "register", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register-FXQGVEFY.js", "imports": ["/build/_shared/chunk-K2NIQJCE.js", "/build/_shared/chunk-4EU6SQ7H.js", "/build/_shared/chunk-EN27VTUB.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/vote": { "id": "routes/vote", "parentId": "root", "path": "vote", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/vote-UCBAJCM3.js", "imports": ["/build/_shared/chunk-4EU6SQ7H.js", "/build/_shared/chunk-F7PSREVK.js", "/build/_shared/chunk-GIHLUJCG.js", "/build/_shared/chunk-EN27VTUB.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/xuser": { "id": "routes/xuser", "parentId": "root", "path": "xuser", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/xuser-6XJYLBW2.js", "imports": ["/build/_shared/chunk-4EU6SQ7H.js", "/build/_shared/chunk-EN27VTUB.js", "/build/_shared/chunk-SXRUWXCK.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-A2EBC5B8.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/__blank/forgot": {
    id: "routes/__blank/forgot",
    parentId: "root",
    path: "forgot",
    index: void 0,
    caseSensitive: void 0,
    module: forgot_exports
  },
  "routes/__blank/login": {
    id: "routes/__blank/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/__blank/dmca": {
    id: "routes/__blank/dmca",
    parentId: "root",
    path: "dmca",
    index: void 0,
    caseSensitive: void 0,
    module: dmca_exports
  },
  "routes/__notice": {
    id: "routes/__notice",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: notice_exports
  },
  "routes/__notice/newsguidelines": {
    id: "routes/__notice/newsguidelines",
    parentId: "routes/__notice",
    path: "newsguidelines",
    index: void 0,
    caseSensitive: void 0,
    module: newsguidelines_exports
  },
  "routes/__notice/bookmarklet": {
    id: "routes/__notice/bookmarklet",
    parentId: "routes/__notice",
    path: "bookmarklet",
    index: void 0,
    caseSensitive: void 0,
    module: bookmarklet_exports
  },
  "routes/__notice/newswelcome": {
    id: "routes/__notice/newswelcome",
    parentId: "routes/__notice",
    path: "newswelcome",
    index: void 0,
    caseSensitive: void 0,
    module: newswelcome_exports
  },
  "routes/__notice/security": {
    id: "routes/__notice/security",
    parentId: "routes/__notice",
    path: "security",
    index: void 0,
    caseSensitive: void 0,
    module: security_exports
  },
  "routes/__notice/newsfaq": {
    id: "routes/__notice/newsfaq",
    parentId: "routes/__notice",
    path: "newsfaq",
    index: void 0,
    caseSensitive: void 0,
    module: newsfaq_exports
  },
  "routes/__notice/showhn": {
    id: "routes/__notice/showhn",
    parentId: "routes/__notice",
    path: "showhn",
    index: void 0,
    caseSensitive: void 0,
    module: showhn_exports
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/comment": {
    id: "routes/comment",
    parentId: "root",
    path: "comment",
    index: void 0,
    caseSensitive: void 0,
    module: comment_exports
  },
  "routes/__main": {
    id: "routes/__main",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: main_exports
  },
  "routes/__main/bestcomments": {
    id: "routes/__main/bestcomments",
    parentId: "routes/__main",
    path: "bestcomments",
    index: void 0,
    caseSensitive: void 0,
    module: bestcomments_exports
  },
  "routes/__main/noobcomments": {
    id: "routes/__main/noobcomments",
    parentId: "routes/__main",
    path: "noobcomments",
    index: void 0,
    caseSensitive: void 0,
    module: noobcomments_exports
  },
  "routes/__main/newcomments": {
    id: "routes/__main/newcomments",
    parentId: "routes/__main",
    path: "newcomments",
    index: void 0,
    caseSensitive: void 0,
    module: newcomments_exports
  },
  "routes/__main/noobstories": {
    id: "routes/__main/noobstories",
    parentId: "routes/__main",
    path: "noobstories",
    index: void 0,
    caseSensitive: void 0,
    module: noobstories_exports
  },
  "routes/__main/favorites": {
    id: "routes/__main/favorites",
    parentId: "routes/__main",
    path: "favorites",
    index: void 0,
    caseSensitive: void 0,
    module: favorites_exports
  },
  "routes/__main/formatdoc": {
    id: "routes/__main/formatdoc",
    parentId: "routes/__main",
    path: "formatdoc",
    index: void 0,
    caseSensitive: void 0,
    module: formatdoc_exports
  },
  "routes/__main/submitted": {
    id: "routes/__main/submitted",
    parentId: "routes/__main",
    path: "submitted",
    index: void 0,
    caseSensitive: void 0,
    module: submitted_exports
  },
  "routes/__main/changepw": {
    id: "routes/__main/changepw",
    parentId: "routes/__main",
    path: "changepw",
    index: void 0,
    caseSensitive: void 0,
    module: changepw_exports
  },
  "routes/__main/leaders": {
    id: "routes/__main/leaders",
    parentId: "routes/__main",
    path: "leaders",
    index: void 0,
    caseSensitive: void 0,
    module: leaders_exports
  },
  "routes/__main/newpoll": {
    id: "routes/__main/newpoll",
    parentId: "routes/__main",
    path: "newpoll",
    index: void 0,
    caseSensitive: void 0,
    module: newpoll_exports
  },
  "routes/__main/shownew": {
    id: "routes/__main/shownew",
    parentId: "routes/__main",
    path: "shownew",
    index: void 0,
    caseSensitive: void 0,
    module: shownew_exports
  },
  "routes/__main/threads": {
    id: "routes/__main/threads",
    parentId: "routes/__main",
    path: "threads",
    index: void 0,
    caseSensitive: void 0,
    module: threads_exports
  },
  "routes/__main/upvoted": {
    id: "routes/__main/upvoted",
    parentId: "routes/__main",
    path: "upvoted",
    index: void 0,
    caseSensitive: void 0,
    module: upvoted_exports
  },
  "routes/__main/active": {
    id: "routes/__main/active",
    parentId: "routes/__main",
    path: "active",
    index: void 0,
    caseSensitive: void 0,
    module: active_exports
  },
  "routes/__main/hidden": {
    id: "routes/__main/hidden",
    parentId: "routes/__main",
    path: "hidden",
    index: void 0,
    caseSensitive: void 0,
    module: hidden_exports
  },
  "routes/__main/newest": {
    id: "routes/__main/newest",
    parentId: "routes/__main",
    path: "newest",
    index: void 0,
    caseSensitive: void 0,
    module: newest_exports
  },
  "routes/__main/submit": {
    id: "routes/__main/submit",
    parentId: "routes/__main",
    path: "submit",
    index: void 0,
    caseSensitive: void 0,
    module: submit_exports
  },
  "routes/__main/front": {
    id: "routes/__main/front",
    parentId: "routes/__main",
    path: "front",
    index: void 0,
    caseSensitive: void 0,
    module: front_exports
  },
  "routes/__main/index": {
    id: "routes/__main/index",
    parentId: "routes/__main",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: main_exports2
  },
  "routes/__main/lists": {
    id: "routes/__main/lists",
    parentId: "routes/__main",
    path: "lists",
    index: void 0,
    caseSensitive: void 0,
    module: lists_exports
  },
  "routes/__main/reply": {
    id: "routes/__main/reply",
    parentId: "routes/__main",
    path: "reply",
    index: void 0,
    caseSensitive: void 0,
    module: reply_exports
  },
  "routes/__main/best": {
    id: "routes/__main/best",
    parentId: "routes/__main",
    path: "best",
    index: void 0,
    caseSensitive: void 0,
    module: best_exports
  },
  "routes/__main/from": {
    id: "routes/__main/from",
    parentId: "routes/__main",
    path: "from",
    index: void 0,
    caseSensitive: void 0,
    module: from_exports
  },
  "routes/__main/item": {
    id: "routes/__main/item",
    parentId: "routes/__main",
    path: "item",
    index: void 0,
    caseSensitive: void 0,
    module: item_exports
  },
  "routes/__main/jobs": {
    id: "routes/__main/jobs",
    parentId: "routes/__main",
    path: "jobs",
    index: void 0,
    caseSensitive: void 0,
    module: jobs_exports
  },
  "routes/__main/show": {
    id: "routes/__main/show",
    parentId: "routes/__main",
    path: "show",
    index: void 0,
    caseSensitive: void 0,
    module: show_exports
  },
  "routes/__main/user": {
    id: "routes/__main/user",
    parentId: "routes/__main",
    path: "user",
    index: void 0,
    caseSensitive: void 0,
    module: user_exports
  },
  "routes/__main/ask": {
    id: "routes/__main/ask",
    parentId: "routes/__main",
    path: "ask",
    index: void 0,
    caseSensitive: void 0,
    module: ask_exports
  },
  "routes/__main/x": {
    id: "routes/__main/x",
    parentId: "routes/__main",
    path: "x",
    index: void 0,
    caseSensitive: void 0,
    module: x_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/xuser": {
    id: "routes/xuser",
    parentId: "root",
    path: "xuser",
    index: void 0,
    caseSensitive: void 0,
    module: xuser_exports
  },
  "routes/hide": {
    id: "routes/hide",
    parentId: "root",
    path: "hide",
    index: void 0,
    caseSensitive: void 0,
    module: hide_exports
  },
  "routes/vote": {
    id: "routes/vote",
    parentId: "root",
    path: "vote",
    index: void 0,
    caseSensitive: void 0,
    module: vote_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
