(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{144:function(e,n,a){"use strict";a.d(n,"a",(function(){return s})),a.d(n,"b",(function(){return m}));var t=a(0),r=a.n(t);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var n=r.a.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},s=function(e){var n=b(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=b(a),d=t,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||l;return a?r.a.createElement(m,c(c({ref:n},p),{},{components:a})):r.a.createElement(m,c({ref:n},p))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<l;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return c})),a.d(n,"rightToc",(function(){return o})),a.d(n,"default",(function(){return b}));var t=a(3),r=a(7),l=(a(0),a(144)),i={id:"dataexploration",title:"DataExploration.jl",sidebar_label:"DataExploration.jl"},c={unversionedId:"api/dataexploration",id:"api/dataexploration",isDocsHomePage:!1,title:"DataExploration.jl",description:"allele_freqtable",source:"@site/docs/api/DataExploration.md",slug:"/api/dataexploration",permalink:"/PopGen.jl/docs/api/dataexploration",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/DataExploration.md",version:"current",lastUpdatedAt:1607718334,sidebar_label:"DataExploration.jl",sidebar:"docs",previous:{title:"Datasets.jl",permalink:"/PopGen.jl/docs/api/datasets"},next:{title:"Delimited.jl",permalink:"/PopGen.jl/docs/api/delimited"}},o=[{value:"<code>allele_freqtable</code>",id:"allele_freqtable",children:[]},{value:"<code>geno_freqtable</code>",id:"geno_freqtable",children:[]},{value:"<code>missing</code>",id:"missing",children:[]},{value:"<code>pairwise_identical</code>",id:"pairwise_identical",children:[]}],p={rightToc:o};function b(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"allele_freqtable"},Object(l.b)("inlineCode",{parentName:"h3"},"allele_freqtable")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),'allele_freqtable(data::PopData; by::String = "global")\n')),Object(l.b)("p",null,"Return a table of the observed ",Object(l.b)("inlineCode",{parentName:"p"},"global")," (default) or ",Object(l.b)("inlineCode",{parentName:"p"},"population")," allele frequencies in a PopData object."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),'julia> cats = @nancycats ;\n\njulia> allele_freqtable(cats)\n108\xd74 DataFrame\n Row \u2502 locus   allele  count  frequency  \n     \u2502 String  Int16?  Int64  Float64    \n\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   1 \u2502 fca8       135    105  0.241935\n   2 \u2502 fca8       143     44  0.101382\n   3 \u2502 fca8       133     33  0.0760369\n   4 \u2502 fca8       137     83  0.191244\n  \u22ee  \u2502   \u22ee       \u22ee       \u22ee        \u22ee\n 105 \u2502 fca37      226      2  0.00421941\n 106 \u2502 fca37      216      7  0.0147679\n 107 \u2502 fca37      224      2  0.00421941\n 108 \u2502 fca37      204      6  0.0126582\n                         100 rows omitted\n\njulia> allele_freqtable(cats, by = "population")\n839\xd75 DataFrame\n Row \u2502 locus   population  allele  count  frequency \n     \u2502 String  String      Int16?  Int64  Float64   \n\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   1 \u2502 fca8    1              135      9  0.5625\n   2 \u2502 fca8    1              143      4  0.25\n   3 \u2502 fca8    1              133      2  0.125\n   4 \u2502 fca8    1              137      1  0.0625\n  \u22ee  \u2502   \u22ee         \u22ee         \u22ee       \u22ee        \u22ee\n 836 \u2502 fca37   16             210      5  0.208333\n 837 \u2502 fca37   17             208     22  0.846154\n 838 \u2502 fca37   17             182      3  0.115385\n 839 \u2502 fca37   17             220      1  0.0384615\n                                    831 rows omitted\n')),Object(l.b)("hr",null),Object(l.b)("h3",{id:"geno_freqtable"},Object(l.b)("inlineCode",{parentName:"h3"},"geno_freqtable")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),'geno_freqtable(data::PopData; by::String = "global")\n')),Object(l.b)("p",null,"Return a table of the observed ",Object(l.b)("inlineCode",{parentName:"p"},"global")," (default) or ",Object(l.b)("inlineCode",{parentName:"p"},"population")," genotype frequencies in a PopData object."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),'julia> cats = @nancycats ;\n\njulia> geno_freqtable(cats)\n\n341\xd74 DataFrame\n Row \u2502 locus   genotype    count  frequency  \n     \u2502 String  Tuple\u2026      Int64  Float64    \n\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   1 \u2502 fca8    (135, 143)     16  0.0737327\n   2 \u2502 fca8    (133, 135)      9  0.0414747\n   3 \u2502 fca8    (135, 135)     23  0.105991\n   4 \u2502 fca8    (137, 143)      8  0.0368664\n  \u22ee  \u2502   \u22ee         \u22ee         \u22ee        \u22ee\n 338 \u2502 fca37   (206, 220)      1  0.00421941\n 339 \u2502 fca37   (208, 218)      1  0.00421941\n 340 \u2502 fca37   (184, 184)      3  0.0126582\n 341 \u2502 fca37   (208, 210)      3  0.0126582\n                             333 rows omitted\n\njulia> geno_freqtable(cats, by = "population")\n1094\xd75 DataFrame\n  Row \u2502 locus   population  genotype    count  frequency         \n      \u2502 String  String      Tuple\u2026      Int64  Float64           \n\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500        \n    1 \u2502 fca8    1           (135, 143)      3  0.375\n    2 \u2502 fca8    1           (133, 135)      2  0.25\n    3 \u2502 fca8    1           (135, 135)      2  0.25\n    4 \u2502 fca8    1           (137, 143)      1  0.125\n  \u22ee   \u2502   \u22ee         \u22ee           \u22ee         \u22ee        \u22ee\n 1091 \u2502 fca37   17          (208, 208)     10  0.769231\n 1092 \u2502 fca37   17          (182, 182)      1  0.0769231\n 1093 \u2502 fca37   17          (182, 208)      1  0.0769231\n 1094 \u2502 fca37   17          (208, 220)      1  0.0769231\n                                        1086 rows omitted \n')),Object(l.b)("hr",null),Object(l.b)("h3",{id:"missing"},Object(l.b)("inlineCode",{parentName:"h3"},"missing")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),'missing(data::PopData; by::String = "sample")\n')),Object(l.b)("p",null,"Get missing genotype information in a ",Object(l.b)("inlineCode",{parentName:"p"},"PopData"),". Specify a mode of operation to return a DataFrame corresponding with that missing information."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Modes")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"sample"')," - returns a count and list of missing loci per individual (default)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"pop"')," - returns a count of missing genotypes per population"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"locus"')," - returns a count of missing genotypes per locus"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"full"')," - returns a count of missing genotypes per locus per population")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),'missing(@gulfsharks, by = "pop")\n')),Object(l.b)("hr",null),Object(l.b)("h3",{id:"pairwise_identical"},Object(l.b)("inlineCode",{parentName:"h3"},"pairwise_identical")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"pairwise_identical(data::PopData)\n")),Object(l.b)("p",null,"Return a table of the percent of identical genotypes at each locus between all pairs of all individuals in a PopData object."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),"julia> cats = @nancycats;\n\njulia> pairwise_identical(cats)\n27966\xd74 DataFrame\n   Row \u2502 sample_1  sample_2  identical  n     \n       \u2502 String    String    Float64    Int64 \n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n     1 \u2502 N215      N216           0.5       8\n     2 \u2502 N215      N217           0.25      8\n     3 \u2502 N215      N218           0.38      8\n     4 \u2502 N215      N219           0.38      8\n   \u22ee   \u2502    \u22ee         \u22ee          \u22ee        \u22ee\n 27963 \u2502 N297      N290           0.29      7\n 27964 \u2502 N281      N289           0.25      8\n 27965 \u2502 N281      N290           0.43      7\n 27966 \u2502 N289      N290           0.14      7\n                            27958 rows omitted\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"pairwise_identical(data::PopData, sample_names::Vector{String})\n")),Object(l.b)("p",null,"Return a table of the percent of identical genotypes at each locus\nbetween all pairs of provided ",Object(l.b)("inlineCode",{parentName:"p"},"sample_names"),"."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-julia"}),'julia> cats = @nancycats;\n\njulia> interesting_cats = samples(cats)[1:5]\n5-element Array{String,1}:\n "N215"\n "N216"\n "N217"\n "N218"\n "N219"\n\njulia> pairwise_identical(cats, interesting_cats)\n10\xd74 DataFrame\n Row \u2502 sample_1  sample_2  identical  n     \n     \u2502 String    String    Float64    Int64 \n\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   1 \u2502 N215      N216           0.5       8 \n   2 \u2502 N215      N217           0.25      8 \n   3 \u2502 N215      N218           0.38      8 \n   4 \u2502 N215      N219           0.38      8 \n   5 \u2502 N216      N217           0.12      8 \n   6 \u2502 N216      N218           0.25      8 \n   7 \u2502 N216      N219           0.38      8 \n   8 \u2502 N217      N218           0.0       9 \n   9 \u2502 N217      N219           0.11      9 \n  10 \u2502 N218      N219           0.33      9 \n')))}b.isMDXComponent=!0}}]);