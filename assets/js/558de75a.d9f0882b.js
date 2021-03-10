(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{151:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=b(n),u=a,s=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?i.a.createElement(s,o(o({ref:t},c),{},{components:n})):i.a.createElement(s,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(151)),l={id:"genepop",title:"Genepop.jl",sidebar_label:"Genepop.jl"},o={unversionedId:"api/genepop",id:"api/genepop",isDocsHomePage:!1,title:"Genepop.jl",description:"genepop",source:"@site/docs/api/Genepop.md",slug:"/api/genepop",permalink:"/PopGen.jl/docs/api/genepop",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/Genepop.md",version:"current",lastUpdatedAt:1609339045,formattedLastUpdatedAt:"12/30/2020",sidebar_label:"Genepop.jl",sidebar:"docs",previous:{title:"Delimited.jl",permalink:"/PopGen.jl/docs/api/delimited"},next:{title:"HardyWeinberg.jl",permalink:"/PopGen.jl/docs/api/hardyweinberg"}},p=[{value:"<code>genepop</code>",id:"genepop",children:[]},{value:"<code>genepop</code>",id:"genepop-1",children:[]}],c={toc:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"genepop"},Object(r.b)("inlineCode",{parentName:"h3"},"genepop")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},"genepop(infile::String; kwargs...)\n")),Object(r.b)("p",null,"Load a Genepop format file into memory as a PopData object."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"infile::String")," : path to Genepop file")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Keyword Arguments")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"digits::Integer"),": number of digits denoting each allele (default: ",Object(r.b)("inlineCode",{parentName:"li"},"3"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"popsep::String")," : word that separates populations in ",Object(r.b)("inlineCode",{parentName:"li"},"infile"),' (default: "POP")'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"diploid::Bool"),"  : whether samples are diploid for parsing optimizations (default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"silent::Bool"),"   : whether to print file information during import (default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"allow_monomorphic")," : whether to keep monomorphic loci in the dataset (default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),")")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"File must follow standard Genepop formatting")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"First line is a comment (and skipped)"),Object(r.b)("li",{parentName:"ul"},"Loci are listed after first line as one-per-line without commas or in single comma-separated row"),Object(r.b)("li",{parentName:"ul"},"A line with a particular keyword (default ",Object(r.b)("inlineCode",{parentName:"li"},"POP"),") must delimit populations"),Object(r.b)("li",{parentName:"ul"},"Sample name is immediately followed by a ",Object(r.b)("em",{parentName:"li"},"comma")),Object(r.b)("li",{parentName:"ul"},"File is ",Object(r.b)("em",{parentName:"li"},"tab or space delimted")," (but not both!)")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Genepop file example:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"wasp_hive.gen: Wasp populations in New York \\n\nLocus1\nLocus2\nLocus3\npop\nOneida_01,  250230  564568  110100\nOneida_02,  252238  568558  100120\nOneida_03,  254230  564558  090100\npop\nNewcomb_01, 254230  564558  080100\nNewcomb_02, 000230  564558  090080\nNewcomb_03, 254230  000000  090100\nNewcomb_04, 254230  564000  090120\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},'waspsNY = genepop("wasp_hive.gen", digits = 3, popsep = "pop")\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"genepop-1"},Object(r.b)("inlineCode",{parentName:"h3"},"genepop")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},'genepop(data::PopData; filename::String = "output.gen", digits::Int = 3, format::String = "vertical")\n')),Object(r.b)("p",null,"Writes a ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," object to a Genepop-formatted file"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data"),": the ",Object(r.b)("inlineCode",{parentName:"li"},"PopData")," object you wish to convert to a Genepop file")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Keyword arguments")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filename"),": a ",Object(r.b)("inlineCode",{parentName:"li"},"String")," of the output filename"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"digits")," : an ",Object(r.b)("inlineCode",{parentName:"li"},"Integer")," indicating how many digits to format each allele as (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"(1, 2)")," => ",Object(r.b)("inlineCode",{parentName:"li"},"001002")," for ",Object(r.b)("inlineCode",{parentName:"li"},"digits = 3"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"format")," : a ",Object(r.b)("inlineCode",{parentName:"li"},"String")," indicating whether loci should be formatted ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"vertically (",Object(r.b)("inlineCode",{parentName:"li"},'"v"')," or ",Object(r.b)("inlineCode",{parentName:"li"},'"vertical"'),")"),Object(r.b)("li",{parentName:"ul"},"hortizontally (",Object(r.b)("inlineCode",{parentName:"li"},'"h"'),", or ",Object(r.b)("inlineCode",{parentName:"li"},'"horizontal"'),")"),Object(r.b)("li",{parentName:"ul"},"Genepop Isolation-By-Distance (",Object(r.b)("inlineCode",{parentName:"li"},'"ibd"'),") where each sample is a population with long/lat data prepended")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},'cats = @nancycats;\nfewer_cats = omit_samples(cats, samples(cats)[1:10]);\njulia> genepop(fewer_cats, filename = "filtered_nancycats.gen", digits = 3, format = "h")\n')))}b.isMDXComponent=!0}}]);