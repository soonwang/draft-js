/*! For license information please see ee3a8fdc.2c8b4225.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(191),n(190)),c={id:"advanced-topics-decorators",title:"Decorators"},i={id:"advanced-topics-decorators",title:"Decorators",description:"Inline and block styles aren't the only kind of rich styling that we might",source:"@site/../docs/Advanced-Topics-Decorators.md",permalink:"/docs/advanced-topics-decorators",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/Advanced-Topics-Decorators.md",lastUpdatedBy:"dependabot-preview[bot]",lastUpdatedAt:1598902066,sidebar:"docs",previous:{title:"v0.10 API Migration",permalink:"/docs/v0-10-api-migration"},next:{title:"Key Bindings",permalink:"/docs/advanced-topics-key-bindings"}},l=[{value:"CompositeDecorator",id:"compositedecorator",children:[]},{value:"Decorator Components",id:"decorator-components",children:[{value:"Beyond CompositeDecorator",id:"beyond-compositedecorator",children:[]}]},{value:"Setting new decorators",id:"setting-new-decorators",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Inline and block styles aren't the only kind of rich styling that we might\nwant to add to our editor. The Facebook comment input, for example, provides\nblue background highlights for mentions and hashtags."),Object(a.b)("p",null,'To support flexibility for custom rich text, Draft provides a "decorator"\nsystem. The ',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/tweet"}),"tweet example"),"\noffers a live example of decorators in action."),Object(a.b)("h2",{id:"compositedecorator"},"CompositeDecorator"),Object(a.b)("p",null,"The decorator concept is based on scanning the contents of a given\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference-content-block"}),"ContentBlock"),"\nfor ranges of text that match a defined strategy, then rendering them\nwith a specified React component."),Object(a.b)("p",null,"You can use the ",Object(a.b)("inlineCode",{parentName:"p"},"CompositeDecorator")," class to define your desired\ndecorator behavior. This class allows you to supply multiple ",Object(a.b)("inlineCode",{parentName:"p"},"DraftDecorator"),"\nobjects, and will search through a block of text with each strategy in turn."),Object(a.b)("p",null,"Decorators are stored within the ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," record. When creating a new\n",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object, e.g. via ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState.createEmpty()"),", a decorator may\noptionally be provided."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Under the hood"),Object(a.b)("p",{parentName:"blockquote"},"When contents change in a Draft editor, the resulting ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object\nwill evaluate the new ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," with its decorator, and identify ranges\nto be decorated. A complete tree of blocks, decorators, and inline styles is\nformed at this time, and serves as the basis for our rendered output."),Object(a.b)("p",{parentName:"blockquote"},"In this way, we always ensure that as contents change, rendered decorations\nare in sync with our ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState"),".")),Object(a.b)("p",null,'In the "Tweet" editor example, for instance, we use a ',Object(a.b)("inlineCode",{parentName:"p"},"CompositeDecorator")," that\nsearches for @-handle strings as well as hashtag strings:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const compositeDecorator = new CompositeDecorator([\n  {\n    strategy: handleStrategy,\n    component: HandleSpan,\n  },\n  {\n    strategy: hashtagStrategy,\n    component: HashtagSpan,\n  },\n]);\n")),Object(a.b)("p",null,"This composite decorator will first scan a given block of text for @-handle\nmatches, then for hashtag matches."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Note: these aren't very good regexes, don't use them!\nconst HANDLE_REGEX = /\\@[\\w]+/g;\nconst HASHTAG_REGEX = /\\#[\\w\\u0590-\\u05ff]+/g;\n\nfunction handleStrategy(contentBlock, callback, contentState) {\n  findWithRegex(HANDLE_REGEX, contentBlock, callback);\n}\n\nfunction hashtagStrategy(contentBlock, callback, contentState) {\n  findWithRegex(HASHTAG_REGEX, contentBlock, callback);\n}\n\nfunction findWithRegex(regex, contentBlock, callback) {\n  const text = contentBlock.getText();\n  let matchArr, start;\n  while ((matchArr = regex.exec(text)) !== null) {\n    start = matchArr.index;\n    callback(start, start + matchArr[0].length);\n  }\n}\n")),Object(a.b)("p",null,"The strategy functions execute the provided callback with the ",Object(a.b)("inlineCode",{parentName:"p"},"start")," and\n",Object(a.b)("inlineCode",{parentName:"p"},"end")," values of the matching range of text."),Object(a.b)("h2",{id:"decorator-components"},"Decorator Components"),Object(a.b)("p",null,"For your decorated ranges of text, you must define a React component to use\nto render them. These tend to be plain ",Object(a.b)("inlineCode",{parentName:"p"},"span")," elements with CSS classes or\nstyles applied to them."),Object(a.b)("p",null,"In our current example, the ",Object(a.b)("inlineCode",{parentName:"p"},"CompositeDecorator")," object names ",Object(a.b)("inlineCode",{parentName:"p"},"HandleSpan")," and\n",Object(a.b)("inlineCode",{parentName:"p"},"HashtagSpan")," as the components to use for decoration. These are basic\nstateless components:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const HandleSpan = props => {\n  return (\n    <span {...props} style={styles.handle}>\n      {props.children}\n    </span>\n  );\n};\n\nconst HashtagSpan = props => {\n  return (\n    <span {...props} style={styles.hashtag}>\n      {props.children}\n    </span>\n  );\n};\n")),Object(a.b)("p",null,"The Decorator Component will receive various pieces of metadata in ",Object(a.b)("inlineCode",{parentName:"p"},"props"),",\nincluding a copy of the ",Object(a.b)("inlineCode",{parentName:"p"},"contentState"),", the ",Object(a.b)("inlineCode",{parentName:"p"},"entityKey")," if there is one, and the\n",Object(a.b)("inlineCode",{parentName:"p"},"blockKey"),". For a full list of props supplied to a Decorator Component see the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecorator.js"}),"DraftDecoratorComponentProps type"),"."),Object(a.b)("p",null,"Note that ",Object(a.b)("inlineCode",{parentName:"p"},"props.children")," is passed through to the rendered output. This is\ndone to ensure that the text is rendered within the decorated ",Object(a.b)("inlineCode",{parentName:"p"},"span"),"."),Object(a.b)("p",null,"You can use the same approach for links, as demonstrated in our\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/link"}),"link example"),"."),Object(a.b)("h3",{id:"beyond-compositedecorator"},"Beyond CompositeDecorator"),Object(a.b)("p",null,"The decorator object supplied to an ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," need only match the expectations\nof the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecoratorType.js"}),"DraftDecoratorType"),"\nFlow type definition, which means that you can create any decorator classes\nyou wish, as long as they match the expected type -- you are not bound by\n",Object(a.b)("inlineCode",{parentName:"p"},"CompositeDecorator"),"."),Object(a.b)("h2",{id:"setting-new-decorators"},"Setting new decorators"),Object(a.b)("p",null,"Further, it is acceptable to set a new ",Object(a.b)("inlineCode",{parentName:"p"},"decorator")," value on the ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState"),"\non the fly, during normal state propagation, through immutable means."),Object(a.b)("p",null,"This means that during your app workflow, if your decorator becomes invalid or\nrequires a modification, you can create a new decorator object (or use\n",Object(a.b)("inlineCode",{parentName:"p"},"null")," to remove all decorations) and ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState.set()")," to make use of the new\ndecorator setting."),Object(a.b)("p",null,"For example, if for some reason we wished to disable the creation of @-handle\ndecorations while the user interacts with the editor, it would be fine to do the\nfollowing:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function turnOffHandleDecorations(editorState) {\n  const onlyHashtags = new CompositeDecorator([\n    {\n      strategy: hashtagStrategy,\n      component: HashtagSpan,\n    },\n  ]);\n  return EditorState.set(editorState, {decorator: onlyHashtags});\n}\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," for this ",Object(a.b)("inlineCode",{parentName:"p"},"editorState")," will be re-evaluated with the new\ndecorator, and @-handle decorations will no longer be present in the next\nrender pass."),Object(a.b)("p",null,"Again, this remains memory-efficient due to data persistence across immutable\nobjects."))}u.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,i(i({ref:t},s),{},{components:n})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},191:function(e,t,n){"use strict";e.exports=n(192)},192:function(e,t,n){"use strict";var r=n(193),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function O(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||g}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=O.prototype;var C=w.prototype=new v;C.constructor=w,r(C,O.prototype),C.isPureReactComponent=!0;var k={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var D=/\/+/g,T=[];function P(e,t,n,r){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function _(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function R(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case c:l=!0}}if(l)return r(o,t,""===n?"."+A(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var s=0;s<t.length;s++){var u=n+A(i=t[s],s);l+=e(i,u,r,o)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=m&&t[m]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),s=0;!(i=t.next()).done;)l+=e(i=i.value,u=n+A(i,s++),r,o);else if("object"===i)throw r=""+t,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function H(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+n)),r.push(e))}function I(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(D,"$&/")+"/"),R(e,H,t=P(t,a,r,o)),_(t)}var B={current:null};function q(){var e=B.current;if(null===e)throw Error(y(321));return e}var F={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return I(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;R(e,$,t=P(null,null,t,n)),_(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(y(143));return e}},t.Component=O,t.Fragment=i,t.Profiler=s,t.PureComponent=w,t.StrictMode=l,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,n){if(null==e)throw Error(y(267,e));var o=r({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=k.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!x.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){s=Array(u);for(var p=0;p<u;p++)s[p]=arguments[p+2];o.children=s}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return q().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,n){return q().useReducer(e,t,n)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1"},193:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,l=c(e),s=1;s<arguments.length;s++){for(var u in n=Object(arguments[s]))o.call(n,u)&&(l[u]=n[u]);if(r){i=r(n);for(var p=0;p<i.length;p++)a.call(n,i[p])&&(l[i[p]]=n[i[p]])}}return l}}}]);