/*! For license information please see 1480bea2.5bf8aa68.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(191),n(190)),c={id:"advanced-topics-custom-block-render-map",title:"Custom Block Rendering"},l={id:"advanced-topics-custom-block-render-map",title:"Custom Block Rendering",description:"This article discusses how to customize Draft default block rendering.",source:"@site/../docs/Advanced-Topics-Custom-Block-Render.md",permalink:"/docs/advanced-topics-custom-block-render-map",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/Advanced-Topics-Custom-Block-Render.md",lastUpdatedBy:"dependabot-preview[bot]",lastUpdatedAt:1598902066,sidebar:"docs",previous:{title:"Block Styling",permalink:"/docs/advanced-topics-block-styling"},next:{title:"Custom Block Components",permalink:"/docs/advanced-topics-block-components"}},i=[{value:"Draft default block render map",id:"draft-default-block-render-map",children:[]},{value:"Configuring block render map",id:"configuring-block-render-map",children:[]},{value:"Custom block wrappers",id:"custom-block-wrappers",children:[]}],u={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This article discusses how to customize Draft default block rendering.\nThe block rendering is used to define supported block types and their respective\nrenderers, as well as converting pasted content to known Draft block types."),Object(o.b)("p",null,"When pasting content, or when calling\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference-data-conversion#convertfromhtml"}),"convertFromHTML"),",\nDraft will convert pasted content to the respective block rendering type\nby matching the Draft block render map with the matched tag."),Object(o.b)("h2",{id:"draft-default-block-render-map"},"Draft default block render map"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"HTML element"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Draft block type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<h1/>")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"header-one")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<h2/>")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"header-two")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<h3/>")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"header-three")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<h4/>")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"header-four")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<h5/>")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"header-five")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<h6/>")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"header-six")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<blockquote/>")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"blockquote")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<pre/>")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"code-block")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<figure/>")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"atomic")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<li/>")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"unordered-list-item,ordered-list-item","*","*")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"<div/>")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"unstyled","*","*","*")))),Object(o.b)("p",null,"*","*"," - Block type will be based on the parent ",Object(o.b)("inlineCode",{parentName:"p"},"<ul/>")," or ",Object(o.b)("inlineCode",{parentName:"p"},"<ol/>")),Object(o.b)("p",null,"*","*","*"," - Any block that is not recognized by the block rendering mapping will be treated as unstyled"),Object(o.b)("h2",{id:"configuring-block-render-map"},"Configuring block render map"),Object(o.b)("p",null,"Draft's default block render map can be overwritten by passing an\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://web.archive.org/web/20150623131347/http://facebook.github.io:80/immutable-js/docs/#/Map"}),"Immutable Map")," to\nthe editor blockRender props."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"example of overwriting default block render map:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// The example below deliberately only allows\n// 'heading-two' as the only valid block type and\n// updates the unstyled element to also become a h2.\nconst blockRenderMap = Immutable.Map({\n  'header-two': {\n    element: 'h2'\n  },\n  'unstyled': {\n    element: 'h2'\n  }\n});\n\nclass RichEditor extends React.Component {\n  render() {\n    return (\n      <Editor\n        ...\n        blockRenderMap={blockRenderMap}\n      />\n    );\n  }\n}\n")),Object(o.b)("p",null,"There are cases where instead of overwriting the defaults, we only want to add new block types.\nThis can be done by using the DefaultDraftBlockRenderMap reference to create a new blockRenderMap"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"example of extending default block render map:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const blockRenderMap = Immutable.Map({\n  'section': {\n    element: 'section'\n  }\n});\n\n// Include 'paragraph' as a valid block and updated the unstyled element but\n// keep support for other draft default block types\nconst extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap);\n\nclass RichEditor extends React.Component {\n  render() {\n    return (\n      <Editor\n        ...\n        blockRenderMap={extendedBlockRenderMap}\n      />\n    );\n  }\n}\n")),Object(o.b)("p",null,"When Draft parses pasted HTML, it maps from HTML elements back into\nDraft block types. If you want to specify other HTML elements that map to a\nparticular block type, you can add the array ",Object(o.b)("inlineCode",{parentName:"p"},"aliasedElements")," to the block config."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"example of unstyled block type alias usage:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"'unstyled': {\n  element: 'div',\n  aliasedElements: ['p'],\n}\n")),Object(o.b)("h2",{id:"custom-block-wrappers"},"Custom block wrappers"),Object(o.b)("p",null,"By default, the html element is used to wrap block types. However, a react component\ncan also be provided to the ",Object(o.b)("em",{parentName:"p"},"blockRenderMap")," to wrap the EditorBlock."),Object(o.b)("p",null,"During pasting, or when calling\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference-data-conversion#convertfromhtml"}),"convertFromHTML"),",\nthe html will be scanned for matching tag elements. A wrapper will be used when there is a definition for\nit on the ",Object(o.b)("em",{parentName:"p"},"blockRenderMap")," to wrap that particular block type. For example:"),Object(o.b)("p",null,"Draft uses wrappers to wrap ",Object(o.b)("inlineCode",{parentName:"p"},"<li/>")," inside either ",Object(o.b)("inlineCode",{parentName:"p"},"<ol/>")," or ",Object(o.b)("inlineCode",{parentName:"p"},"<ul/>"),", but wrappers can also be used\nto wrap any other custom block type."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"example of extending default block render map to use a react component for a custom block:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"class MyCustomBlock extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return (\n      <div className='MyCustomBlock'>\n        {/* here, this.props.children contains a <section> container, as that was the matching element */}\n        {this.props.children}\n      </div>\n    );\n  }\n}\n\nconst blockRenderMap = Immutable.Map({\n  'MyCustomBlock': {\n    // element is used during paste or html conversion to auto match your component;\n    // it is also retained as part of this.props.children and not stripped out\n    element: 'section',\n    wrapper: <MyCustomBlock />,\n  }\n});\n\n// keep support for other draft default block types and add our myCustomBlock type\nconst extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap);\n\nclass RichEditor extends React.Component {\n  ...\n  render() {\n    return (\n      <Editor\n        ...\n        blockRenderMap={extendedBlockRenderMap}\n      />\n    );\n  }\n}\n")))}p.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,f=b["".concat(c,".").concat(s)]||b[s]||d[s]||o;return n?a.a.createElement(f,l(l({ref:t},u),{},{components:n})):a.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},191:function(e,t,n){"use strict";e.exports=n(192)},192:function(e,t,n){"use strict";var r=n(193),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,i=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,b=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.forward_ref"):60112,s=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||j}function k(){}function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||j}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(O(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var w=v.prototype=new k;w.constructor=v,r(w,g.prototype),w.isPureReactComponent=!0;var N={current:null},C=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,a={},c=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)C.call(t,r)&&!R.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var u=Array(i),p=0;p<i;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return{$$typeof:o,type:e,key:c,ref:l,props:a,_owner:N.current}}function M(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g,S=[];function P(e,t,n,r){if(S.length){var a=S.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>S.length&&S.push(e)}function _(e,t,n){return null==e?0:function e(t,n,r,a){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var i=!1;if(null===t)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case o:case c:i=!0}}if(i)return r(a,t,""===n?"."+T(t,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var p=n+T(l=t[u],u);i+=e(l,p,r,a)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=y&&t[y]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),u=0;!(l=t.next()).done;)i+=e(l=l.value,p=n+T(l,u++),r,a);else if("object"===l)throw r=""+t,Error(O(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return i}(e,"",t,n)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function B(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,r,n,(function(e){return e})):null!=e&&(M(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function A(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(E,"$&/")+"/"),_(e,$,t=P(t,o,r,a)),D(t)}var I={current:null};function L(){var e=I.current;if(null===e)throw Error(O(321));return e}var U={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return A(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;_(e,B,t=P(null,null,t,n)),D(t)},count:function(e){return _(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!M(e))throw Error(O(143));return e}},t.Component=g,t.Fragment=l,t.Profiler=u,t.PureComponent=v,t.StrictMode=i,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,n){if(null==e)throw Error(O(267,e));var a=r({},e.props),c=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=N.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in t)C.call(t,p)&&!R.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==u?u[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=n;else if(1<p){u=Array(p);for(var b=0;b<p;b++)u[b]=arguments[b+2];a.children=u}return{$$typeof:o,type:e.type,key:c,ref:l,props:a,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:b,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=M,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return L().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,n){return L().useReducer(e,t,n)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="16.13.1"},193:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,i=c(e),u=1;u<arguments.length;u++){for(var p in n=Object(arguments[u]))a.call(n,p)&&(i[p]=n[p]);if(r){l=r(n);for(var b=0;b<l.length;b++)o.call(n,l[b])&&(i[l[b]]=n[l[b]])}}return i}}}]);