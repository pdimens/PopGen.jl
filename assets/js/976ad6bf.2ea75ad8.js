(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(3),a=n(7),l=(n(0),n(151)),r={id:"delimited",title:"Delimited.jl",sidebar_label:"Delimited.jl"},o={unversionedId:"api/delimited",id:"api/delimited",isDocsHomePage:!1,title:"Delimited.jl",description:"delimited",source:"@site/docs/api/Delimited.md",slug:"/api/delimited",permalink:"/PopGen.jl/docs/api/delimited",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/Delimited.md",version:"current",lastUpdatedAt:1609339045,formattedLastUpdatedAt:"12/30/2020",sidebar_label:"Delimited.jl",sidebar:"docs",previous:{title:"DataExploration.jl",permalink:"/PopGen.jl/docs/api/dataexploration"},next:{title:"Genepop.jl",permalink:"/PopGen.jl/docs/api/genepop"}},c=[{value:"<code>delimited</code>",id:"delimited",children:[]},{value:"<code>delimtied</code>",id:"delimtied",children:[]}],b={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"delimited"},Object(l.b)("inlineCode",{parentName:"h3"},"delimited")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-julia"},'delimited(infile::String; delim::Union{Char,String,Regex} = "auto", digits::Int64 = 3, silent::Bool = false)\n')),Object(l.b)("p",null,"Load a delimited-type file into memory as a PopData object. ",Object(l.b)("em",{parentName:"p"},"There should be no empty cells\nin your file")),Object(l.b)("h4",{id:"arguments"},"Arguments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"infile")," : path to file")),Object(l.b)("h4",{id:"keyword-arguments"},"Keyword Arguments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delim")," : delimiter characters. By default uses auto-parsing of ",Object(l.b)("inlineCode",{parentName:"li"},"CSV.File")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"digits")," : number of digits denoting each allele (default: ",Object(l.b)("inlineCode",{parentName:"li"},"3"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"diploid"),"  : whether samples are diploid for parsing optimizations (default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"silent"),"   : whether to print file information during import (default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"allow_monomorphic")," : whether to keep monomorphic loci in the dataset (default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),")")),Object(l.b)("h4",{id:"file-formatting"},"File formatting:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The first row is column names (names don't matter)"),Object(l.b)("li",{parentName:"ul"},"The columns must be in this order:",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"sample name"),Object(l.b)("li",{parentName:"ol"},"population name"),Object(l.b)("li",{parentName:"ol"},"longitude"),Object(l.b)("li",{parentName:"ol"},"latitude"),Object(l.b)("li",{parentName:"ol"},"locus_1 genotypes"),Object(l.b)("li",{parentName:"ol"},"locus_2 genotypes"),Object(l.b)("li",{parentName:"ol"},"etc...")))),Object(l.b)("h4",{id:"missing-data"},"Missing data"),Object(l.b)("h5",{id:"genotypes"},"Genotypes"),Object(l.b)("p",null,"Missing genotypes can be formatted as all-zeros ",Object(l.b)("inlineCode",{parentName:"p"},"000000"),", left empty, or negative-nine ",Object(l.b)("inlineCode",{parentName:"p"},"-9")),Object(l.b)("h5",{id:"location-data"},"Location data"),Object(l.b)("p",null,"If location data is missing for a sample (which is ok!), make sure the value is\nblank, otherwise there will be transcription errors! (look at line 3 in the example below)"),Object(l.b)("h4",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'lizardsCA = delimited("CA_lizards.csv", digits = 3);\n')),Object(l.b)("h4",{id:"formatting-example"},"Formatting example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"name,population,long,lat,Locus1,Locus2,Locus3\nsierra_01,mountain,11.11,-22.22,001001,-9,001001\nsierra_02,mountain,11.12,-22.21,001001,001001,001002\nsnbarb_01,coast,,,001001,001001,001002\nsnbarb_02,coast,11.14,-22.24,001001,001001,001001\nsnbarb_03,coast,11.15,,001002,001001,001001\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-julia"},'lizardsCA = delimited("CA_lizards.csv", digits = 3);\n')),Object(l.b)("hr",null),Object(l.b)("h3",{id:"delimtied"},Object(l.b)("inlineCode",{parentName:"h3"},"delimtied")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-julia"},'delimited(data::PopData; filename::String, delim::String = ",", digits::Integer = 3, format::String = "wide")\n')),Object(l.b)("p",null,"Write PopData to a text-delimited file. "),Object(l.b)("h4",{id:"keyword-arguments-1"},"Keyword Arguments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"filename"),": a ",Object(l.b)("inlineCode",{parentName:"li"},"String")," of the output filename"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"digits")," : an ",Object(l.b)("inlineCode",{parentName:"li"},"Integer")," indicating how many digits to format each allele as (e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"(1, 2)")," => ",Object(l.b)("inlineCode",{parentName:"li"},"001002")," for ",Object(l.b)("inlineCode",{parentName:"li"},"digits = 3"),")"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"format")," : a ",Object(l.b)("inlineCode",{parentName:"li"},"String")," indicating whether to output in",Object(l.b)("inlineCode",{parentName:"li"},'"wide"')," or ",Object(l.b)("inlineCode",{parentName:"li"},'"long"')," (aka ",Object(l.b)("inlineCode",{parentName:"li"},'"tidy"'),") format "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delim")," : the ",Object(l.b)("inlineCode",{parentName:"li"},"String")," delimiter to use for writing the file. ")),Object(l.b)("h4",{id:"example-1"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-julia"},'cats = @nancycats;\nfewer_cats = omit_samples(cats, samples(cats)[1:10]);\ndelimited(fewer_cats, filename = "filtered_nancycats.csv", digits = 3, format = "wide", delim = " ")\n')))}d.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),d=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=d(n),s=i,u=p["".concat(r,".").concat(s)]||p[s]||m[s]||l;return n?a.a.createElement(u,o(o({ref:t},b),{},{components:n})):a.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var b=2;b<l;b++)r[b]=n[b];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);