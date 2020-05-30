/*! For license information please see 55d31459.d793d66e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(165)),o=n(173),l=n(172),c={id:"genepop",title:"Genepop format",sidebar_label:"Genepop format"},p={id:"io/genepop",title:"Genepop format",description:"Import a genepop file as PopData",source:"@site/docs/io/genepop.md",permalink:"/docs/io/genepop",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/io/genepop.md",sidebar_label:"Genepop format",sidebar:"docs",previous:{title:"Delimited format",permalink:"/docs/io/delimited"},next:{title:"Variant Call Format",permalink:"/docs/io/vcf"}},s=[{value:"Import a genepop file as <code>PopData</code>",id:"import-a-genepop-file-as-popdata",children:[{value:"arguments",id:"arguments",children:[]},{value:"keyword Arguments",id:"keyword-arguments",children:[]}]},{value:"Format",id:"format",children:[]},{value:"Acknowledgements",id:"acknowledgements",children:[]}],b={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"import-a-genepop-file-as-popdata"},"Import a genepop file as ",Object(i.b)("inlineCode",{parentName:"h2"},"PopData")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'genepop(infile; kwargs...)\n\n# Example\njulia> b = genepop("/data/wasp_hive.gen", digits = 3, popsep = "POP")\n')),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Windows users")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Make sure to change your backslashes ",Object(i.b)("inlineCode",{parentName:"p"},"\\")," to forward slashes ",Object(i.b)("inlineCode",{parentName:"p"},"/")," "))),Object(i.b)("h3",{id:"arguments"},"arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"infile::String")," : path to genepop file, in quotes")),Object(i.b)("h3",{id:"keyword-arguments"},"keyword Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"digits::Integer"),": number of digits denoting each allele (default: ",Object(i.b)("inlineCode",{parentName:"li"},"3"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"popsep::String")," : word that separates populations in ",Object(i.b)("inlineCode",{parentName:"li"},"infile"),' (default: "POP")'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"diploid::Bool"),"  : whether samples are diploid for parsing optimizations (default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"silent::Bool"),"   : whether to print file information during import (default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),")")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"population names")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"By default, the file reader will assign numbers as population ID's (as Strings) in order of appearance in the genepop file. Use the ",Object(i.b)("inlineCode",{parentName:"p"},"populations!")," function to rename these with your own population ID's."))),Object(i.b)("h2",{id:"format"},"Format"),Object(i.b)("p",null,"Files must follow standard Genepop formatting:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"First line is a comment (and skipped)"),Object(i.b)("li",{parentName:"ul"},"Loci are listed after first line as one-per-line without commas or in single comma-separated row"),Object(i.b)("li",{parentName:"ul"},"A line with a particular and consistent keyword must delimit populations"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Must")," be the same word each time and not a unique population name"),Object(i.b)("li",{parentName:"ul"},"File is ",Object(i.b)("strong",{parentName:"li"},"tab")," delimited or ",Object(i.b)("strong",{parentName:"li"},"space")," delimited, but not both")),Object(i.b)(o.a,{defaultValue:"v",values:[{label:"genepop w/loci stacked vertically",value:"v"},{label:"genepop w/loci stacked horizontally",value:"h"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"v",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Wasp populations in New York\nLocus1\nLocus2\nLocus3\nPOP\nOneida_01,  250230  564568  110100\nOneida_02,  252238  568558  100120\nOneida_03,  254230  564558  090100\nPOP\nNewcomb_01, 254230  564558  080100\nNewcomb_02, 000230  564558  090080\nNewcomb_03, 254230  000000  090100\nNewcomb_04, 254230  564000  090120\n"))),Object(i.b)(l.a,{value:"h",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Wasp populations in New York\nLocus1,Locus2,Locus3\nPOP\nOneida_01,  250230  564568  110100\nOneida_02,  252238  568558  100120\nOneida_03,  254230  564558  090100\nPOP\nNewcomb_01, 254230  564558  080100\nNewcomb_02, 000230  564558  090080\nNewcomb_03, 254230  000000  090100\nNewcomb_04, 254230  564000  090120\n")))),Object(i.b)("h2",{id:"acknowledgements"},"Acknowledgements"),Object(i.b)("p",null,"The original implementations of this parser were written using only Base Julia, and while the speed was fantastic, the memory footprint involved seemed unusually high (~650mb RAM to parse ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks"),", which is only 3.2mb in size). However, thanks to the efforts of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JuliaData/CSV.jl"}),"CSV.jl")," , we leverage that package to preserve the speed and reducie the memory footprint quite a bit!"))}u.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,l(l({ref:t},p),{},{components:n})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},166:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},169:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=r},172:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},173:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(169);var o=function(){return Object(a.useContext)(i.a)},l=n(166),c=n.n(l),p=n(92),s=n.n(p);const b=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:l,groupId:p}=e,{tabGroupChoices:m,setTabGroupChoices:d}=o(),[f,O]=Object(a.useState)(i);if(null!=p){const e=m[p];null!=e&&e!==f&&O(e)}const h=e=>{O(e),null!=p&&d(p,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},l.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===e,className:c()("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),onFocus:()=>h(e),onClick:()=>h(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===f)[0]))}}}]);