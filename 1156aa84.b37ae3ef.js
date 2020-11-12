/*! For license information please see 1156aa84.b37ae3ef.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return f}));var n=r(2),o=r(9),c=(r(191),r(190)),i={id:"api-reference-atomic-block-utils",title:"AtomicBlockUtils"},u={id:"api-reference-atomic-block-utils",title:"AtomicBlockUtils",description:"The AtomicBlockUtils module is a static set of utility functions for atomic",source:"@site/../docs/APIReference-AtomicBlockUtils.md",permalink:"/docs/api-reference-atomic-block-utils",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/APIReference-AtomicBlockUtils.md",lastUpdatedBy:"dependabot-preview[bot]",lastUpdatedAt:1598902066,sidebar:"docs",previous:{title:"RichUtils",permalink:"/docs/api-reference-rich-utils"},next:{title:"KeyBindingUtil",permalink:"/docs/api-reference-key-binding-util"}},a=[{value:"Static Methods",id:"static-methods",children:[{value:"<code>insertAtomicBlock()</code>",id:"insertatomicblock",children:[]},{value:"<code>moveAtomicBlock()</code>",id:"moveatomicblock",children:[]}]}],l={rightToc:a};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"AtomicBlockUtils")," module is a static set of utility functions for atomic\nblock editing."),Object(c.b)("p",null,"In each case, these methods accept ",Object(c.b)("inlineCode",{parentName:"p"},"EditorState")," objects with relevant\nparameters and return ",Object(c.b)("inlineCode",{parentName:"p"},"EditorState")," objects."),Object(c.b)("h2",{id:"static-methods"},"Static Methods"),Object(c.b)("h3",{id:"insertatomicblock"},Object(c.b)("inlineCode",{parentName:"h3"},"insertAtomicBlock()")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"insertAtomicBlock: function(\n  editorState: EditorState,\n  entityKey: string,\n  character: string\n): EditorState\n")),Object(c.b)("h3",{id:"moveatomicblock"},Object(c.b)("inlineCode",{parentName:"h3"},"moveAtomicBlock()")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"moveAtomicBlock: function(\n  editorState: EditorState,\n  atomicBlock: ContentBlock,\n  targetRange: SelectionState,\n  insertionMode?: DraftInsertionType\n): EditorState\n")))}f.isMDXComponent=!0},190:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),s=f(r),d=n,y=s["".concat(i,".").concat(d)]||s[d]||p[d]||c;return r?o.a.createElement(y,u(u({ref:t},l),{},{components:r})):o.a.createElement(y,u({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<c;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},191:function(e,t,r){"use strict";e.exports=r(192)},192:function(e,t,r){"use strict";var n=r(193),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||v}function g(){}function k(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=j.prototype;var w=k.prototype=new g;w.constructor=k,n(w,j.prototype),w.isPureReactComponent=!0;var S={current:null},E=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n,o={},i=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)E.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:c,type:e,key:i,ref:u,props:o,_owner:S.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var x=/\/+/g,A=[];function R(e,t,r,n){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function B(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var a=!1;if(null===t)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case c:case i:a=!0}}if(a)return n(o,t,""===r?"."+U(t,0):r),1;if(a=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=r+U(u=t[l],l);a+=e(u,f,n,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=b&&t[b]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(u=t.next()).done;)a+=e(u=u.value,f=r+U(u,l++),n,o);else if("object"===u)throw n=""+t,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return a}(e,"",t,r)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function N(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,n,r,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+r)),n.push(e))}function I(e,t,r,n,o){var c="";null!=r&&(c=(""+r).replace(x,"$&/")+"/"),B(e,T,t=R(t,c,n,o)),$(t)}var D={current:null};function M(){var e=D.current;if(null===e)throw Error(h(321));return e}var q={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return I(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;B(e,N,t=R(null,null,t,r)),$(t)},count:function(e){return B(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=j,t.Fragment=u,t.Profiler=l,t.PureComponent=k,t.StrictMode=a,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var o=n({},e.props),i=e.key,u=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,a=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)E.call(t,f)&&!P.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:c,type:e.type,key:i,ref:u,props:o,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return M().useCallback(e,t)},t.useContext=function(e,t){return M().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return M().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return M().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return M().useLayoutEffect(e,t)},t.useMemo=function(e,t){return M().useMemo(e,t)},t.useReducer=function(e,t,r){return M().useReducer(e,t,r)},t.useRef=function(e){return M().useRef(e)},t.useState=function(e){return M().useState(e)},t.version="16.13.1"},193:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,a=i(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))o.call(r,f)&&(a[f]=r[f]);if(n){u=n(r);for(var s=0;s<u.length;s++)c.call(r,u[s])&&(a[u[s]]=r[u[s]])}}return a}}}]);