(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,y=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(y,s(s({ref:t},p),{},{components:n})):r.a.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(148)),o={id:"other_types",title:"Other data types",sidebar_label:"Other data types"},s={unversionedId:"getting_started/other_types",id:"getting_started/other_types",isDocsHomePage:!1,title:"Other data types",description:"While not strictly their own composite types, we also define aliases for genotypes and vectors of genotypes, as their explicit types can get a little unwieldy to use. The types shown below in the code blocks include their name and type (all types are of type DataType) on the first line, and what the alias actually defines on the second line.",source:"@site/docs/getting_started/other_types.md",slug:"/getting_started/other_types",permalink:"/PopGen.jl/docs/getting_started/other_types",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/getting_started/other_types.md",version:"current",lastUpdatedAt:1590785696,sidebar_label:"Other data types",sidebar:"docs",previous:{title:"PopObj and PopData types",permalink:"/PopGen.jl/docs/getting_started/types"},next:{title:"Provided datasets",permalink:"/PopGen.jl/docs/getting_started/datasets"}},c=[{value:"Genotype",id:"genotype",children:[]},{value:"GenoArray",id:"genoarray",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"While not strictly their own composite types, we also define aliases for genotypes and vectors of genotypes, as their explicit types can get a little unwieldy to use. The types shown below in the code blocks include their name and type (all types are of type ",Object(i.b)("inlineCode",{parentName:"p"},"DataType"),") on the first line, and what the alias actually defines on the second line."),Object(i.b)("h3",{id:"genotype"},"Genotype"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"Genotype::DataType\nNTuple{N,<:Signed} where N\n")),Object(i.b)("p",null,"An ",Object(i.b)("inlineCode",{parentName:"p"},"NTuple")," is itself an alias for a ",Object(i.b)("inlineCode",{parentName:"p"},"Tuple{Vararg{}}")," , but you can think of it as Tuple of ",Object(i.b)("inlineCode",{parentName:"p"},"N")," length composed of items of a particular type, in this case it's items that are subtypes of ",Object(i.b)("inlineCode",{parentName:"p"},"Signed")," (the integer types). The length of the tuple (",Object(i.b)("inlineCode",{parentName:"p"},"N"),") will vary based on the ploidy of the sample, and the element ",Object(i.b)("inlineCode",{parentName:"p"},"Type")," will vary whether the markers are snps (",Object(i.b)("inlineCode",{parentName:"p"},"Int8"),") or microsatellites (",Object(i.b)("inlineCode",{parentName:"p"},"Int16"),"), making this a pretty flexible (but immutable) structure."),Object(i.b)("h3",{id:"genoarray"},"GenoArray"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"GenoArray::DataType\nAbstractVector{S} where S<:Union{Missing,Genotype}\n")),Object(i.b)("p",null,"As you can guess from the name, this Type wraps ",Object(i.b)("inlineCode",{parentName:"p"},"Genotype")," into a Vector, while permitting ",Object(i.b)("inlineCode",{parentName:"p"},"missing")," values (what's genetics without missing data!?). By using ",Object(i.b)("inlineCode",{parentName:"p"},"AbstractVector")," (rather than ",Object(i.b)("inlineCode",{parentName:"p"},"Vector"),"), we also have the flexibility of functions working on things like ",Object(i.b)("inlineCode",{parentName:"p"},"SubArrays")," out of the box. "),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"why bother defining these aliases?")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Getting the most out of Julia and demonstrating good practices means making sure functions work on the things they're supposed to, and give informative error messages when the input isn't suitable for the function (a rare case of ",Object(i.b)("em",{parentName:"p"},"wanting")," MethodErrors). Without these aliases, functions would either have vague definitions like ",Object(i.b)("inlineCode",{parentName:"p"},"f(x,y,z) where x <: AbstractArray")," and potentially cause errors, or overly complicated definitions like ",Object(i.b)("inlineCode",{parentName:"p"},"f(x::AbstractVector{S},y,z) where {N, T<:Signed,S<:NTuple{N,T}}")," and not be very legible. Instead, functions are written as ",Object(i.b)("inlineCode",{parentName:"p"},"f(x,y,z) where x<:GenotypeArray"),", and that seems like a good compromise of getting the latter while looking like the former."))))}l.isMDXComponent=!0}}]);