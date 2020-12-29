(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{148:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,u=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return a?r.a.createElement(u,s(s({ref:t},l),{},{components:a})):r.a.createElement(u,s({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(148)),o={id:"datasets",title:"Provided datasets",sidebar_label:"Provided datasets"},s={unversionedId:"getting_started/datasets",id:"getting_started/datasets",isDocsHomePage:!1,title:"Provided datasets",description:"PopGen.jl provides two datasets as examples, nancycats and gulfsharks. The datasets can be retrieved using the dataset function, or their names as macros  (e.g. @gulfsharks).",source:"@site/docs/getting_started/datasets.md",slug:"/getting_started/datasets",permalink:"/PopGen.jl/docs/getting_started/datasets",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/getting_started/datasets.md",version:"current",lastUpdatedAt:1605726280,sidebar_label:"Provided datasets",sidebar:"docs",previous:{title:"Other data types",permalink:"/PopGen.jl/docs/getting_started/other_types"},next:{title:"Reading in data",permalink:"/PopGen.jl/docs/io/file_import"}},c=[{value:"datasets",id:"datasets",children:[{value:"nancycats",id:"nancycats",children:[]},{value:"gulfsharks",id:"gulfsharks",children:[]}]}],l={toc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"PopGen.jl provides two datasets as examples, ",Object(i.b)("inlineCode",{parentName:"p"},"nancycats")," and ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks"),". The datasets can be retrieved using the ",Object(i.b)("inlineCode",{parentName:"p"},"dataset")," function, or their names as macros  (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"@gulfsharks"),")."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"As of v0.4.2 we are deprecating ",Object(i.b)("inlineCode",{parentName:"p"},"nancycats()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks()")," in favor of their macros. You will still be able to use them, but you'll get a deprecation warning. We will remove ",Object(i.b)("inlineCode",{parentName:"p"},"nancycats()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks()")," in the v0.5.0 release."))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"identitcal methods")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The methods are identical (one is a wrapper for the other), but the benefit of calling the datasets directly by name is that you get the luxury of tab auto-completion \ud83d\ude01"))),Object(i.b)("h2",{id:"datasets"},"datasets"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"dataset(::String)\n")),Object(i.b)("p",null,"Returns a ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," object of the dataset you would like to retrieve by calling the dataset as a string by name."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'sharks = dataset("gulfsharks")\ncats = dataset("nancycats")\n')),Object(i.b)("h3",{id:"nancycats"},"nancycats"),Object(i.b)("p",null,"We include the familiar nancycats microsatellite data, as featured in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://adegenet.r-forge.r-project.org"}),"adegenet"),", for easy importing into PopGen.jl as ",Object(i.b)("inlineCode",{parentName:"p"},"PopData"),". As an alternative to ",Object(i.b)("inlineCode",{parentName:"p"},"datasets"),", you can invoke the ",Object(i.b)("inlineCode",{parentName:"p"},"@nancycats")," macro."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> cats = @nancycats\nPopData Object\n  Markers: Microsatellite\n  Ploidy: 2\n  Samples: 237\n  Loci: 9\n  Populations: 17\n  Coordinates: absent\n")),Object(i.b)("p",null,"The spatial coordinates provided for the dataset in ",Object(i.b)("inlineCode",{parentName:"p"},"adegenet")," are completely unfamiliar to us (and some geospatial folks we spoke to), so they have been omitted. If you recognize what coordinate system has 485.111 appear in Nancy, France, please let us know!"),Object(i.b)("h3",{id:"gulfsharks"},"gulfsharks"),Object(i.b)("p",null,"We also include the SNP dataset used in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://link.springer.com/article/10.1007/s00227-019-3533-1"}),"Dimens ",Object(i.b)("em",{parentName:"a"},"et al.")," 2019")," since it was already on hand. Like ",Object(i.b)("inlineCode",{parentName:"p"},"nancycats"),", we provide a convenient function to load these data into PopGen.jl as ",Object(i.b)("inlineCode",{parentName:"p"},"PopData"),". As an alternative to ",Object(i.b)("inlineCode",{parentName:"p"},"datasets"),", you can invoke the ",Object(i.b)("inlineCode",{parentName:"p"},"@gulfsharks")," macro. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> sharks = @gulfsharks\nPopData Object\n  Markers: SNP\n  Ploidy: 2\n  Samples: 212\n  Loci: 2209\n  Populations: 7\n  Coordinates: present\n")))}d.isMDXComponent=!0}}]);