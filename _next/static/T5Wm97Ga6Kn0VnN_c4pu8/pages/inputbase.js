(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"+wNj":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("+wNj");function r(e,t){if(null==e)return{};var n,r,c=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},Iuqc:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/inputbase",function(){return n("X4gt")}])},Km8e:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},X4gt:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n("cxan"),r=n("HbGN"),c=n("ERkP"),l=n.n(c),b=n("ZVZ0"),o=(l.a.createElement,{}),i="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)(i,Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",null,"InputBase"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"InputBase")," does not have appearance settings including default border, color, outline, and padding. It aims to be a simple building block for creating an input."),Object(b.b)("h2",null,"Import"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import InputBase from '@trendmicro/react-styled-core/InputBase';\n// or\nimport { InputBase } from '@trendmicro/react-styled-core';\n")),Object(b.b)("h2",null,"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<InputBase placeholder="Placeholder text" />\n')),Object(b.b)("h3",null,"Attributes"),Object(b.b)("p",null,"Standard input attributes are supported, e.g., ",Object(b.b)("inlineCode",{parentName:"p"},"type"),", ",Object(b.b)("inlineCode",{parentName:"p"},"disabled"),", ",Object(b.b)("inlineCode",{parentName:"p"},"readOnly"),", ",Object(b.b)("inlineCode",{parentName:"p"},"required"),", etc."),Object(b.b)("h4",null,Object(b.b)("inlineCode",{parentName:"h4"},"type")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Grid\n  templateColumns="min-content auto"\n  columnGap="2x"\n  rowGap="3x"\n>\n  <Grid>\n    <InputLabel>Name:</InputLabel>\n  </Grid>\n  <Grid>\n    <InputBase type="text" placeholder="John Doe" />\n  </Grid>\n  <Grid>\n    <InputLabel>Password:</InputLabel>\n  </Grid>\n  <Grid>\n    <InputBase type="password" placeholder="Password" />\n  </Grid>\n</Grid>\n')),Object(b.b)("h4",null,Object(b.b)("inlineCode",{parentName:"h4"},"disabled")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack directin="column" spacing="4x">\n  <InputBase disabled placeholder="Placeholder text" />\n  <InputBase disabled placeholder="Placeholder text" defaultValue="Disabled" />\n</Stack>\n')),Object(b.b)("h4",null,Object(b.b)("inlineCode",{parentName:"h4"},"readOnly")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack directin="column" spacing="4x">\n  <InputBase readOnly placeholder="Placeholder text" />\n  <InputBase readOnly placeholder="Placeholder text" defaultValue="Read-only" />\n</Stack>\n')),Object(b.b)("h4",null,Object(b.b)("inlineCode",{parentName:"h4"},"required")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<InputBase\n  required\n  placeholder="Placeholder text"\n  px="2x"\n  py="1x"\n  border={1}\n  borderColor="transparent"\n  _invalid={{\n    borderColor: \'red:50\',\n  }}\n/>\n')),Object(b.b)("h2",null,"Props"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"InputBase")," composes ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"./pseudobox"}),Object(b.b)("inlineCode",{parentName:"a"},"PseudoBox")),". You can override the default styles with style props."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"disabled")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", the input will be disabled. This sets ",Object(b.b)("inlineCode",{parentName:"td"},"aria-disabled=true")," and you can style this state by passing the ",Object(b.b)("inlineCode",{parentName:"td"},"_disabled")," prop.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"readOnly")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", prevents the value of the input from being edited.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"aria-invalid")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", the input will indicate an error. You can style this state by passing the ",Object(b.b)("inlineCode",{parentName:"td"},"_invalid")," prop.")))))}p.isMDXComponent=!0},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n("ERkP"),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):b({},t,{},e)),n},d=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,O=d["".concat(l,".").concat(u)]||d[u]||s[u]||c;return n?r.a.createElement(O,b({ref:t},i,{components:n})):r.a.createElement(O,b({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var c=n.length,l=new Array(c);l[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b[u]="string"===typeof e?e:a,l[1]=b;for(var i=2;i<c;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))}},[["Iuqc",0,1]]]);