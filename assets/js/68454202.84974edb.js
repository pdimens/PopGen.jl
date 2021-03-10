(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(151)),l=n(155),o=n(156),c={slug:"/",title:"Installation",sidebar_label:"Installation"},s={unversionedId:"getting_started/install",id:"getting_started/install",isDocsHomePage:!1,title:"Installation",description:"Installation is simple!",source:"@site/docs/getting_started/install.md",slug:"/",permalink:"/PopGen.jl/docs/",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/getting_started/install.md",version:"current",lastUpdatedAt:1615218513,formattedLastUpdatedAt:"3/8/2021",sidebar_label:"Installation",sidebar:"docs",next:{title:"A quick Julia primer",permalink:"/PopGen.jl/docs/getting_started/julia_primer"}},u=[{value:"Using PopGen",id:"using-popgen",children:[]},{value:"&quot;Installing&quot; the docs",id:"installing-the-docs",children:[]}],p={toc:u};function b(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Installation is simple!"),Object(i.b)(l.a,{block:!0,defaultValue:"repl",values:[{label:"REPL/Juno",value:"repl"},{label:"Jupyter/nteract",value:"jupyter"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"repl",mdxType:"TabItem"},Object(i.b)("p",null,"Invoke the package manager with ",Object(i.b)("inlineCode",{parentName:"p"},"]")," in the REPL and use"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-julia"},"add PopGen\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"install",src:n(178).default}))),Object(i.b)(o.a,{value:"jupyter",mdxType:"TabItem"},Object(i.b)("p",null,"Slightly different than the REPL, you will need to invoke ",Object(i.b)("inlineCode",{parentName:"p"},"using Pkg"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-julia"},'using Pkg\nPkg.add("PopGen")\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"install",src:n(179).default})))),Object(i.b)("h2",{id:"using-popgen"},"Using PopGen"),Object(i.b)("p",null,"Like all Julia packages, to activate PopGen.jl, simply run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-julia"},"julia> using PopGen\n")),Object(i.b)("p",null,"Feel free to play around with the test data in ",Object(i.b)("inlineCode",{parentName:"p"},"/data/")," or add it to your workspace with the ",Object(i.b)("inlineCode",{parentName:"p"},"@nancycats")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@gulfsharks")," commands."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Arch Linux users")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If you compiled Julia from source, your PopGen.jl installation may fail due to incorrectly building ",Object(i.b)("inlineCode",{parentName:"p"},"Arpack"),", which is expected to be in one place, but the compilation puts in another."),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Solutions"),":"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"install official Julia binaries from the AUR (",Object(i.b)("inlineCode",{parentName:"li"},"julia-bin"),"), which includes a correctly bundled ",Object(i.b)("inlineCode",{parentName:"li"},"Arpack")," (recommended)"),Object(i.b)("li",{parentName:"ul"},"if Julia was compiled from source: install ",Object(i.b)("inlineCode",{parentName:"li"},"julia-arpack")," from the AUR and make sure to delete ",Object(i.b)("inlineCode",{parentName:"li"},"~/.julia/packages/Arpack")," if it exists. That ",Object(i.b)("em",{parentName:"li"},"should")," fix things, but sometimes it still acts up.")))),Object(i.b)("h2",{id:"installing-the-docs"},'"Installing" the docs'),Object(i.b)("p",null,"The magic of Docusaurus (the engine these docs are built on) lets you \"install\" this documentation as a progressive web app (fancy web shortcut) if you're using a Chromium-based browser (e.g. Chrome, Chromium, Brave, Vivaldi, Edge). Doing so gives you quick-access to these docs as easy as double-clicking an application. Here's what that looks like using the Edge browser on Windows:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"edge_pwa",src:n(237).default})),Object(i.b)("p",null,"which then shows up in your Start menu like a plain-regular application!"),Object(i.b)("p",null,Object(i.b)("img",{alt:"pwa_app",src:n(238).default})))}b.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},152:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},153:function(e,t,n){"use strict";var a=n(0),r=n(154);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},155:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(153),l=n(152),o=n(55),c=n.n(o);var s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(i.a)(),f=m.tabGroupChoices,g=m.setTabGroupChoices,j=Object(a.useState)(o),v=j[0],h=j[1],O=a.Children.toArray(e.children),y=[];if(null!=b){var w=f[b];null!=w&&w!==v&&p.some((function(e){return e.value===w}))&&h(w)}var N=function(e){var t=e.target,n=y.indexOf(t),a=O[n].props.value;h(a),null!=b&&(g(b,a),setTimeout((function(){var e,n,a,r,i,l,o,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,n>=0&&i<=s&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},k=function(e){var t,n;switch(e.keyCode){case u:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case s:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:k,onFocus:N,onClick:N},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},156:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},178:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/install_repl-d6dc918e24043afff66846542927cecc.gif"},179:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/install_jupyter-b2d669963d67e5c5d9d0c960ad39a528.gif"},237:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pwa_screenshot-23e630043500561c7f275de34e924387.png"},238:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pwa_icon-db9d48a0b4aefc91a1452c0de0c56eb0.png"}}]);