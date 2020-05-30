/*! For license information please see 99164b56.e40bb92d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{137:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return p})),t.d(a,"default",(function(){return m}));var n=t(2),r=t(6),i=(t(0),t(165)),o=t(173),s=t(172),l={id:"comparison",title:"Comparison",sidebar_label:"Comparison"},c={id:"getting_started/comparison",title:"Comparison",description:"There's a reason we started investing so many hours and so many new grey hairs into writing PopGen.jl when there was an existing ecosystem in R to perform these same tasks. Like we explain in the home page of these docs, we want a platform that is:",source:"@site/docs/getting_started/comparison.md",permalink:"/docs/getting_started/comparison",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting_started/comparison.md",sidebar_label:"Comparison",sidebar:"docs",previous:{title:"A quick Julia primer",permalink:"/docs/getting_started/julia_primer"},next:{title:"PopObj and PopData types",permalink:"/docs/getting_started/types"}},p=[{value:"Benchmarks",id:"benchmarks",children:[{value:"Loading in data",id:"loading-in-data",children:[]},{value:"<code>PopData</code> vs <code>genind</code> size",id:"popdata-vs-genind-size",children:[]},{value:"Chi-squared test for HWE",id:"chi-squared-test-for-hwe",children:[]}]}],b={rightToc:p};function m(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There's a reason we started investing so many hours and so many new grey hairs into writing PopGen.jl when there was an existing ecosystem in R to perform these same tasks. Like we explain in the home page of these docs, we want a platform that is:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"fast(er)"),Object(i.b)("li",{parentName:"ol"},"written in a single language"),Object(i.b)("li",{parentName:"ol"},"easy to use")),Object(i.b)("p",null,"So, we'd like to prove that Julia and PopGen.jl actually achieves that by showing a few benchmarks comparing PopGen.jl to ",Object(i.b)("inlineCode",{parentName:"p"},"adegenet")," and ",Object(i.b)("inlineCode",{parentName:"p"},"pegas"),", which along with ",Object(i.b)("inlineCode",{parentName:"p"},"ape")," are arguably the most commonly used and robust population genetic packages available. It's worth mentioning that we ourselves use and have published work incorporating these packages, and are tremendously grateful for the work invested in those packages. We appreciate those folks and have tremendous respect and envy for the work they continue to do! Here are links to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/thibautjombart/adegenet"}),"adegenet"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://academic.oup.com/bioinformatics/article/26/3/419/215731/"}),"pegas"),", and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cran.r-project.org/package=ape"}),"ape"),".  "),Object(i.b)("h2",{id:"benchmarks"},"Benchmarks"),Object(i.b)("p",null,"To make this a practical comparison, we're going to use the ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks")," data because it is considerably larger (212 samples x 2213 loci) than ",Object(i.b)("inlineCode",{parentName:"p"},"nancycats"),' (237 x 9) and a bit more of a "stress test".  All benchmarks in R are performed using the ',Object(i.b)("inlineCode",{parentName:"p"},"microbenchmark")," package, and  ",Object(i.b)("inlineCode",{parentName:"p"},"BenchmarkTools")," are used for Julia. "),Object(i.b)(o.a,{defaultValue:"j",values:[{label:"load Julia packages",value:"j"},{label:"load R packages",value:"r"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"j",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"using BenchmarkTools, PopGen\n"))),Object(i.b)(s.a,{value:"r",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),"library(adegenet)\nlibrary(pegas)\nlibrary(microbenchmark)\n")))),Object(i.b)("p",null,"As a note, the reported benchmarks are being performed on a 64-bit Manjaro Linux system on a nothing-special Lenovo Thinkbook 14S  with 8gigs of RAM and a 8th gen Intel i5 mobile processor. ",Object(i.b)("strong",{parentName:"p"},"Note:")," all of the Julia benchmarks, unless explicitly stated, are performed single-threaded (i.e. not parallel, distributed, or GPU). "),Object(i.b)("h3",{id:"loading-in-data"},"Loading in data"),Object(i.b)("p",null,"Since ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks")," is shamelessly provided in PopGen.jl, we will just load it with ",Object(i.b)("inlineCode",{parentName:"p"},"genepop()"),".  If you would like to try this yourself in R, find the ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks.gen")," file in the package repository under ",Object(i.b)("inlineCode",{parentName:"p"},"/data/source/gulfsharks.gen"),". Since the file importer now uses CSV.jl to read files, there is one step of the genepop parser that is multithreaded. However, the majority of the data parsing (formatting the raw data into a correct PopData structure) occurs using a single thread. This R benchmark will take a few minutes. Consider making some tea while you wait."),Object(i.b)(o.a,{defaultValue:"j",values:[{label:"Julia",value:"j"},{label:"R",value:"r"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"j",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'@benchmark sharks = genepop("data/source/gulfsharks.gen", silent = true)\nBenchmarkTools.Trial: \n  memory estimate:  330.58 MiB\n  allocs estimate:  6905285\n  --------------\n  minimum time:     806.202 ms (5.91% GC)\n  median time:      884.887 ms (5.61% GC)\n  mean time:        910.722 ms (5.41% GC)\n  maximum time:     1.071 s (4.82% GC)\n  --------------\n  samples:          6\n  evals/sample:     1\n'))),Object(i.b)(s.a,{value:"r",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),'> microbenchmark(read.genepop(file = "/home/pdimens/gulfsharks.gen", ncode = 3L, quiet = TRUE))\nUnit: seconds\n read.genepop(file = "/home/pdimens/gulfsharks.gen", ncode = 3L, quiet = FALSE)\n      min       lq     mean   median       uq      max neval\n 5.670637 6.218719 6.745065 6.387936 7.019667 9.173005   100\nmicrobenchmark)\n')))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/speedplot.png",alt:"import plot"}))),Object(i.b)("p",null,"Comparing averages, PopGen.jl clocks in at ",Object(i.b)("inlineCode",{parentName:"p"},"910ms")," versus adegenet's ",Object(i.b)("inlineCode",{parentName:"p"},"6.745s")," , so ~7.4x faster."),Object(i.b)("h3",{id:"popdata-vs-genind-size"},Object(i.b)("inlineCode",{parentName:"h3"},"PopData")," vs ",Object(i.b)("inlineCode",{parentName:"h3"},"genind")," size"),Object(i.b)("p",null,"It was pretty tricky to come up with a sensible/efficient/convenient data structure for PopGen.jl, and the original attempt was a Julian variant to a ",Object(i.b)("inlineCode",{parentName:"p"},"genind"),", which itself is something known as an ",Object(i.b)("inlineCode",{parentName:"p"},"S4 class object"),'. While the two-DataFrames design might not seem like it took a lot of effort, we ultimately decided that the column-major style and available tools, combined with careful genotype Typing was a decent "middle-ground" of ease-of-use vs performance. Plus, we are suckers for consistent syntax, which ',Object(i.b)("inlineCode",{parentName:"p"},"genind"),"'s don't have compared to standard R syntax (looking at you too, Tidyverse/ggplot!). "),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Anyway"),", it's important to understand how much space your data will take up in memory (your RAM) when you load it in, especially since data's only getting bigger! Keep in mind that ",Object(i.b)("inlineCode",{parentName:"p"},"gulfsharks")," in PopGen.jl also provides lat/long data, which ",Object(i.b)("em",{parentName:"p"},"should")," inflate the size of the object somewhat compared to the ",Object(i.b)("inlineCode",{parentName:"p"},"genind"),", which we won't add any location data to."),Object(i.b)(o.a,{defaultValue:"j",values:[{label:"Julia",value:"j"},{label:"R",value:"r"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"j",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> Base.summarysize(sharks)\n3527765\n#bytes\n"))),Object(i.b)(s.a,{value:"r",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),"> object.size(gen)\n5331536 bytes\n")))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/objectplot.png",alt:"data structure plot"}))),Object(i.b)("p",null,"The original file is ",Object(i.b)("inlineCode",{parentName:"p"},"3.2mb"),", and our ",Object(i.b)("inlineCode",{parentName:"p"},"PopData")," object takes up ~",Object(i.b)("inlineCode",{parentName:"p"},"3.5mb")," in memory (300kb larger than the source file) versus the ~",Object(i.b)("inlineCode",{parentName:"p"},"5.3mb")," of a ",Object(i.b)("inlineCode",{parentName:"p"},"genind"),", which is ~1.5x larger than the source file. That's quite a big difference!"),Object(i.b)("h3",{id:"chi-squared-test-for-hwe"},"Chi-squared test for HWE"),Object(i.b)("p",null,"This is a classic population genetics test and a relatively simple one. The R benchmark will take a while again, so if you're following along, this would be a good time to reconnect with an old friend."),Object(i.b)(o.a,{defaultValue:"j",values:[{label:"Julia",value:"j"},{label:"R",value:"r"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"j",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> @benchmark hwe_test(sharks)\nBenchmarkTools.Trial: \n  memory estimate:  46.22 MiB\n  allocs estimate:  1050525\n  --------------\n  minimum time:     145.476 ms (0.00% GC)\n  median time:      179.146 ms (4.35% GC)\n  mean time:        176.142 ms (3.56% GC)\n  maximum time:     204.813 ms (0.00% GC)\n  --------------\n  samples:          29\n  evals/sample:     1\n"))),Object(i.b)(s.a,{value:"r",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-r"}),"> microbenchmark(hw.test(gen, B = 0))\nUnit: seconds\n                expr      min       lq     mean   median       uq      max neval\n hw.test(gen, B = 0) 5.100298 5.564807 6.265948 5.878842 6.917006 8.815179   100\n")))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/chisqplot.png",alt:"chi squared plot"}))),Object(i.b)("p",null,"Comparing averages, PopGen.jl clocks in at ~",Object(i.b)("inlineCode",{parentName:"p"},"176ms")," versus adegenet's ",Object(i.b)("inlineCode",{parentName:"p"},"6.3s"),", so ~",Object(i.b)("strong",{parentName:"p"},"35.8x")," faster(!) "))}m.isMDXComponent=!0},165:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var a=r.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},b=function(e){var a=p(e.components);return r.a.createElement(c.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(t),u=n,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return t?r.a.createElement(d,s(s({ref:a},c),{},{components:t})):r.a.createElement(d,s({ref:a},c))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},166:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===i)for(var s in n)t.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},169:function(e,a,t){"use strict";var n=t(0);const r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});a.a=r},172:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement("div",null,e.children)}},173:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(169);var o=function(){return Object(n.useContext)(i.a)},s=t(166),l=t.n(s),c=t(92),p=t.n(c);const b=37,m=39;a.a=function(e){const{block:a,children:t,defaultValue:i,values:s,groupId:c}=e,{tabGroupChoices:u,setTabGroupChoices:d}=o(),[h,g]=Object(n.useState)(i);if(null!=c){const e=u[c];null!=e&&e!==h&&g(e)}const j=e=>{g(e),null!=c&&d(c,e)},f=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":a})},s.map(({value:e,label:a})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===e,className:l()("tabs__item",p.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>f.push(e),onKeyDown:e=>((e,a,t)=>{switch(t.keyCode){case m:((e,a)=>{const t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()})(e,a);break;case b:((e,a)=>{const t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,a)}})(f,e.target,e),onFocus:()=>j(e),onClick:()=>j(e)},a))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter(e=>e.props.value===h)[0]))}}}]);