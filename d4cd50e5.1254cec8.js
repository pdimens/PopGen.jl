(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),i=(n(0),n(138)),o=n(142),l=n(143),c={id:"structure",title:"Structure format",sidebar_label:"Structure format"},u={unversionedId:"io/structure",id:"io/structure",isDocsHomePage:!1,title:"Structure format",description:"More often than not, your Structure file was created by a conversion from another format. While PopGen.jl offers a Structure file reader, we generally recommend using whatever previous format it was in because the Structure reader has more specific format requirements than the other readers, which can cause unneeded frustration. Additionally, fewer data conversions mean less chance of conversion errors occuring.",source:"@site/docs/io/structure.md",slug:"/io/structure",permalink:"/PopGen.jl/docs/io/structure",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/io/structure.md",version:"current",lastUpdatedAt:1600798406,sidebar_label:"Structure format",sidebar:"docs",previous:{title:"Genepop format",permalink:"/PopGen.jl/docs/io/genepop"},next:{title:"Variant Call Format",permalink:"/PopGen.jl/docs/io/vcf"}},s=[{value:"Import a Structure file as <code>PopData</code>",id:"import-a-structure-file-as-popdata",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Keyword Arguments",id:"keyword-arguments",children:[]},{value:"File formatting",id:"file-formatting",children:[]}]},{value:"Writing to a Structure file",id:"writing-to-a-structure-file",children:[{value:"Arguments",id:"arguments-1",children:[]},{value:"Keyword Arguments",id:"keyword-arguments-1",children:[]}]}],b={rightToc:s};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"More often than not, your Structure file was created by a conversion from another format. While PopGen.jl offers a Structure file reader, we generally recommend using whatever previous format it was in because the Structure reader has more specific format requirements than the other readers, which can cause unneeded frustration. Additionally, fewer data conversions mean less chance of conversion errors occuring. "))),Object(i.b)("h2",{id:"import-a-structure-file-as-popdata"},"Import a Structure file as ",Object(i.b)("inlineCode",{parentName:"h2"},"PopData")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"    structure(infile::String; kwargs...)\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"infile::String")," : path to Structure file")),Object(i.b)("h3",{id:"keyword-arguments"},"Keyword Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"extracols::Integer"),": how many additional optional columns there are beyond Stucture's POPDATA the reader needs to ignore (default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),")",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"these include POPFLAG, LOCDATA, or anything else you might have added"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"extrarows::Integer")," : how many additional optional rows there are beyond the first row of locus names (default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"missingval::String"),"  : the value used to identify missing values in the data (default: ",Object(i.b)("inlineCode",{parentName:"li"},'"-9"'),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"silent::Bool"),"   : whether to print file information during import (default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"allow_monomorphic::Bool")," : whether to keep monomorphic loci in the dataset (default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"faststructure::Bool"),": whether the file is fastStructure format (default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),")")),Object(i.b)("h3",{id:"file-formatting"},"File formatting"),Object(i.b)("p",null,"Structure files are not an ideal format because there is a bit too much wiggle room in the specifications that are later cleaned up with a config file when running the software. As such, PopGen.jl requires somewhat more specificity in how the files are formatted for things to work correctly:"),Object(i.b)(o.a,{block:!0,defaultValue:"s",values:[{label:"Stucture",value:"s"},{label:"fastStructre",value:"f"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"s",mdxType:"TabItem"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the file is ",Object(i.b)("inlineCode",{parentName:"li"},"tab")," or ",Object(i.b)("inlineCode",{parentName:"li"},"space")," delimited ",Object(i.b)("strong",{parentName:"li"},"but not both")),Object(i.b)("li",{parentName:"ul"},"first row is locus names separated by the delimiter",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"leading/trailing whitespaces are tolerated"),Object(i.b)("li",{parentName:"ul"},"optional rows allowed ",Object(i.b)("strong",{parentName:"li"},"after")," the locus names"))),Object(i.b)("li",{parentName:"ul"},"number of rows per sample = ploidy",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"e.g. if diploid, that sample would have 2 rows"),Object(i.b)("li",{parentName:"ul"},"multi-column variant not supported"))),Object(i.b)("li",{parentName:"ul"},"first data column is sample name"),Object(i.b)("li",{parentName:"ul"},"second data column is population ID",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"optional columns allowed ",Object(i.b)("strong",{parentName:"li"},"after")," the population ID (2nd) column"))),Object(i.b)("li",{parentName:"ul"},"remaining columns are the genotype for that individual for that locus")),Object(i.b)("h4",{id:"structure-file-example"},"Structure file example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"locus_1 locus_2 locus_3 locus_4 locus_5\nwalnut_01   1   -9  145 66  0   92\nwalnut_01   1   -9  -9  64  0   94\nwalnut_02   1   106 142 68  1   92\nwalnut_02   1   106 148 64  0   94\nwalnut_03   2   110 145 -9  0   92\nwalnut_03   2   110 148 66  1   -9\n")),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'walnuts = structure("juglans_nigra.str", extracols = 0, extrarows = 0)\n'))),Object(i.b)(l.a,{value:"f",mdxType:"TabItem"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the file is ",Object(i.b)("inlineCode",{parentName:"li"},"tab")," or ",Object(i.b)("inlineCode",{parentName:"li"},"space")," delimited ",Object(i.b)("strong",{parentName:"li"},"but not both")),Object(i.b)("li",{parentName:"ul"},"no first row of loci names"),Object(i.b)("li",{parentName:"ul"},"number of rows per sample = ploidy",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"e.g. if diploid, that sample would have 2 rows"))),Object(i.b)("li",{parentName:"ul"},"first data column is sample name"),Object(i.b)("li",{parentName:"ul"},"second data column is population ID"),Object(i.b)("li",{parentName:"ul"},"remaining columns are the genotype for that individual for that locus"),Object(i.b)("li",{parentName:"ul"},"usually, first 6 colums are empty (but not necessary)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"no")," extra rows or columns.")),Object(i.b)("h4",{id:"faststructure-file-example"},"fastStructure file example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"chestnut_01 1   -9  145 66  0   92\nchestnut_01 1   -9  -9  64  0   94\nchestnut_02 1   106 142 68  1   92\nchestnut_02 1   106 148 64  0   94\nchestnut_03 2   110 145 -9  0   92\nchestnut_03 2   110 148 66  1   -9\n")),Object(i.b)("h4",{id:"example-1"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'chestnuts = structure("castanea_dentata.str", faststructure = true)\n')))),Object(i.b)("h2",{id:"writing-to-a-structure-file"},"Writing to a Structure file"),Object(i.b)("p",null,"All file writing options can be performed using ",Object(i.b)("inlineCode",{parentName:"p"},"write_to()"),", which calls ",Object(i.b)("inlineCode",{parentName:"p"},"popdata2structure")," when writing to a Structure/fastStructure file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"  popdata2structure(data::PopData; filename::String, faststructure::Bool, delim::String)\n")),Object(i.b)("p",null,"Write a ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," object to a Stucture format file"),Object(i.b)("h3",{id:"arguments-1"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data"),": the ",Object(i.b)("inlineCode",{parentName:"li"},"PopData")," object you wish to convert to a Structure file")),Object(i.b)("h3",{id:"keyword-arguments-1"},"Keyword Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filename"),": a ",Object(i.b)("inlineCode",{parentName:"li"},"String")," of the output filename"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"delim")," : a ",Object(i.b)("inlineCode",{parentName:"li"},"String")," of either ",Object(i.b)("inlineCode",{parentName:"li"},'"tab"')," or ",Object(i.b)("inlineCode",{parentName:"li"},'"space"')," indicating the delimiter (default: ",Object(i.b)("inlineCode",{parentName:"li"},'"tab"'),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"faststructure"),": true/false of whether the output should be formatted for fastStructure (default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),")")),Object(i.b)("h4",{id:"example-2"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'cats = nancycats();\nfewer_cats = omit(cats, name = samples(cats)[1:10]);\npopdata2structure(fewer_cats, filename = "filtered_nancycats.str", faststructure = true)\n')))}m.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),p=a,d=b["".concat(o,".").concat(p)]||b[p]||m[p]||i;return n?r.a.createElement(d,l(l({ref:t},u),{},{components:n})):r.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},139:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},140:function(e,t,n){"use strict";var a=n(0),r=n(141);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},141:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},142:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(140),o=n(139),l=n(46),c=n.n(l),u=37,s=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,b=e.values,m=e.groupId,p=e.className,d=Object(i.a)(),f=d.tabGroupChoices,O=d.setTabGroupChoices,j=Object(a.useState)(l),h=j[0],g=j[1],w=Object(a.useState)(!1),v=w[0],N=w[1];if(null!=m){var y=f[m];null!=y&&y!==h&&b.some((function(e){return e.value===y}))&&g(y)}var C=function(e){g(e),null!=m&&O(m,e)},S=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},P=function(){N(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",P),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",P)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},p)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return S.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(S,e.target,e),x(e)},onFocus:function(){return C(t)},onClick:function(){C(t),N(!1)},onPointerDown:function(){return N(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},143:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);