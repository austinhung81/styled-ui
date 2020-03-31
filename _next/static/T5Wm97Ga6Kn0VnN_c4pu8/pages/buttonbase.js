(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+wNj":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("+wNj");function r(e,t){if(null==e)return{};var n,r,c=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},Km8e:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n("ERkP"),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"===typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=u(n),s=a,O=p["".concat(o,".").concat(s)]||p[s]||d[s]||c;return n?r.a.createElement(O,l({ref:t},b,{components:n})):r.a.createElement(O,l({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var c=n.length,o=new Array(c);o[0]=O;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"===typeof e?e:a,o[1]=l;for(var b=2;b<c;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},dPkj:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n("cxan"),r=n("HbGN"),c=n("ERkP"),o=n.n(c),l=n("ZVZ0"),i=(o.a.createElement,{}),b="wrapper";function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)(b,Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"ButtonBase"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"ButtonBase")," does not have appearance settings including default border, color, outline, and padding. It aims to be a simple building block for creating a button."),Object(l.b)("h2",null,"Import"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import ButtonBase from '@trendmicro/react-styled-core/ButtonBase';\n// or\nimport { ButtonBase } from '@trendmicro/react-styled-core';\n")),Object(l.b)("h2",null,"Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<ButtonBase>Click Me</ButtonBase>\n")),Object(l.b)("h3",null,"Attributes"),Object(l.b)("p",null,"Standard button attributes are supported, e.g., ",Object(l.b)("inlineCode",{parentName:"p"},"type"),", ",Object(l.b)("inlineCode",{parentName:"p"},"disabled"),", etc."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"disabled")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<ButtonBase disabled>Disabled</ButtonBase>\n")),Object(l.b)("h3",null,"Plain button"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'function Example() {\n  const [value, setValue] = React.useState(0);\n  const handleClear = () => setValue(0);\n  const handleAdd = () => setValue(value => value + 1);\n\n  return (\n    <Stack direction="column" alignItems="flex-start">\n      <ButtonBase onClick={handleClear}>\n        <Badge>{value}</Badge>\n      </ButtonBase>\n      <Space height="1rem" />\n      <ButtonBase\n        opacity={.6}\n        _hover={{ opacity: .8 }}\n        onClick={handleAdd}\n      >\n        Click Me\n      </ButtonBase>\n    </Stack>\n  );\n}\n')),Object(l.b)("h3",null,"Adding an icon to a plain button"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"function Example() {\n  const [value, setValue] = React.useState(false);\n  const handleClick = () => {\n    setValue(value => !value);\n  };\n  const btnStyleProps = {\n    color: value > 0 ? 'blue:50' : 'inherit',\n    opacity: value > 0 ? 1 : .6,\n    _active: {\n      opacity: 1,\n    },\n    _hover: {\n      opacity: .8,\n    },\n  };\n\n  return (\n    <Stack direction=\"column\" alignItems=\"flex-start\">\n      <Badge>{value ? '1' : '0'}</Badge>\n      <Space height=\"1rem\" />\n      <ButtonBase\n        onClick={handleClick}\n        {...btnStyleProps}\n      >\n        <FontAwesomeIcon icon=\"thumbs-up\" fixedWidth style={{ color: 'inherit' }} />\n        <Space width=\".25rem\" />\n        Like\n      </ButtonBase>\n    </Stack>\n  );\n}\n")),Object(l.b)("h2",null,"Props"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"ButtonBase")," composes ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"./pseudobox"}),Object(l.b)("inlineCode",{parentName:"a"},"PseudoBox")),". You can override the default styles with style props."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"disabled")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", the input will be disabled. This sets ",Object(l.b)("inlineCode",{parentName:"td"},"aria-disabled=true")," and you can style this state by passing the ",Object(l.b)("inlineCode",{parentName:"td"},"_disabled")," prop.")))))}u.isMDXComponent=!0},zPCL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buttonbase",function(){return n("dPkj")}])}},[["zPCL",0,1]]]);