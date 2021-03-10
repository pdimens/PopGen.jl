(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{140:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(3),l=t(7),r=(t(0),t(151)),c={id:"allelefreq",title:"AlleleFreq.jl",sidebar_label:"AlleleFreq.jl"},o={unversionedId:"api/allelefreq",id:"api/allelefreq",isDocsHomePage:!1,title:"AlleleFreq.jl",description:"allele_freq",source:"@site/docs/api/AlleleFreq.md",slug:"/api/allelefreq",permalink:"/PopGen.jl/docs/api/allelefreq",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/AlleleFreq.md",version:"current",lastUpdatedAt:1612464823,formattedLastUpdatedAt:"2/4/2021",sidebar_label:"AlleleFreq.jl",sidebar:"docs",previous:{title:"API",permalink:"/PopGen.jl/docs/api/api"},next:{title:"Datasets.jl",permalink:"/PopGen.jl/docs/api/datasets"}},p=[{value:"allele_freq",id:"allele_freq",children:[]},{value:"<code>allele_freq</code>",id:"allele_freq-1",children:[]},{value:"<code>allele_freq</code>",id:"allele_freq-2",children:[]},{value:"<code>allele_freq</code>",id:"allele_freq-3",children:[]},{value:"<code>avg_allele_freq</code>",id:"avg_allele_freq",children:[]},{value:"<code>allele_freq_vec</code>",id:"allele_freq_vec",children:[]},{value:"<code>geno_count_observed</code>",id:"geno_count_observed",children:[]},{value:"<code>geno_count_expected</code>",id:"geno_count_expected",children:[]},{value:"<code>geno_freq</code>",id:"geno_freq",children:[]},{value:"<code>geno_freq</code>",id:"geno_freq-1",children:[]},{value:"<code>geno_freq</code>",id:"geno_freq-2",children:[]},{value:"<code>geno_freq_expected</code>",id:"geno_freq_expected",children:[]}],i={toc:p};function b(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"allele_freq"},"allele_freq"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},"allele_freq(allele::Int, genos::GenoArray)\n")),Object(r.b)("p",null,"Return the frequency of a specific ",Object(r.b)("inlineCode",{parentName:"p"},"allele")," from a vector of Genotypes ",Object(r.b)("inlineCode",{parentName:"p"},"genos"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Example"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'using DataFramesMeta\nncats = @nancycats;\nncats_sub @where(ncats.loci, :locus .== "fca8", :genotype .!== missing)\npop_grp = groupby(ncats_sub, :population)\nDataFrames.combine(pop_grp, :genotype => (geno -> allele_freq(137, geno)) => :freq_137)\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"allele_freq-1"},Object(r.b)("inlineCode",{parentName:"h3"},"allele_freq")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},"allele_freq(geno::Genotype)\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of allele frequencies of the alleles within a single Genotype in a ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),"\nobject."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"allele_freq-2"},Object(r.b)("inlineCode",{parentName:"h3"},"allele_freq")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},"allele_freq(locus::T) where T<:GenotypeArray\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of allele frequencies of a single locus in a ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),"\nobject."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"allele_freq-3"},Object(r.b)("inlineCode",{parentName:"h3"},"allele_freq")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},"allele_freq(data::PopData, locus::String; population::Bool = false)\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of allele frequencies of a single locus in a ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),"\nobject. Use ",Object(r.b)("inlineCode",{parentName:"p"},"population = true")," to return a table of allele frequencies\nof that locus per population."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},'cats = @nancycats\nallele_freq(cats, "fca8")\nallele_freq(cats, "fca8", population = true)\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"avg_allele_freq"},Object(r.b)("inlineCode",{parentName:"h3"},"avg_allele_freq")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},"avg_allele_freq(allele_dicts::AbstractVector{Dict{T, Float64}}, power::Int = 1) where T<:Signed  \n")),Object(r.b)("p",null,"Takes a Vector of Dicts generated by ",Object(r.b)("inlineCode",{parentName:"p"},"allele_freq")," and returns a Dict of the average\nallele frequencies raised to the ",Object(r.b)("inlineCode",{parentName:"p"},"power")," (exponent) specified (default: ",Object(r.b)("inlineCode",{parentName:"p"},"1"),").\nThis is typically done to calculate average allele frequencies across populations."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Example"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cats = @nancycats;\nalleles_df = DataFrames.combine(\n    groupby(cats.loci, [:locus, :population]),\n    :genotype => allele_freq => :alleles\n);\nDataFrames.combine(\n    groupby(alleles_df, :locus),\n    :alleles => (i -> sum(avg_allele_freq(i, 2))) => :avg_freq\n)\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"allele_freq_vec"},Object(r.b)("inlineCode",{parentName:"h3"},"allele_freq_vec")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},"allele_freq_vec(locus::T) where T<:GenotypeArray\n")),Object(r.b)("p",null,"Return a Vector of allele frequencies of a single locus in a ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," object. Similar to ",Object(r.b)("inlineCode",{parentName:"p"},"allele_freq()"),", except it returns only the frequencies, without the allele names, meaning they can be in any order. This can be useful for getting the expected genotype frequencies."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"geno_count_observed"},Object(r.b)("inlineCode",{parentName:"h3"},"geno_count_observed")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},"geno_count_observed(locus::T) where T<:GenotypeArray\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of genotype counts of a single locus in a\n",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," object."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"geno_count_expected"},Object(r.b)("inlineCode",{parentName:"h3"},"geno_count_expected")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},"geno_count_expected(locus::T) where T<:GenotypeArray\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of the expected genotype counts of a single locus in a\n",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," object. Expected counts are calculated as the product of observed allele frequencies multiplied by the number of non-missing genotypes."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"geno_freq"},Object(r.b)("inlineCode",{parentName:"h3"},"geno_freq")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},"geno_freq(locus::T) where T<:GenotypeArray\n`PopData` object.\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of genotype frequencies of a single locus in a"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"geno_freq-1"},Object(r.b)("inlineCode",{parentName:"h3"},"geno_freq")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},"geno_freq(data::PopData, locus::String; population::Bool = false)\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of genotype frequencies of a single locus in a ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),"\nobject. Use ",Object(r.b)("inlineCode",{parentName:"p"},"population = true")," to return a table of genotype frequencies\nof that locus per population."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},'cats = @nancycats\ngeno_freq(cats, "fca8")\ngeno_freq(cats, "fca8", population = true)\n')),Object(r.b)("hr",null),Object(r.b)("h3",{id:"geno_freq-2"},Object(r.b)("inlineCode",{parentName:"h3"},"geno_freq")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},"geno_freq_expected(locus::T) where T<:GenotypeArray\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of the expected genotype frequencies of a single locus in a ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," object. Expected frequencies are calculated as the product of\nobserved allele frequencies."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"geno_freq_expected"},Object(r.b)("inlineCode",{parentName:"h3"},"geno_freq_expected")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-julia"},"geno_freq_expected(data::PopData, locus::String; population::Bool = false)\n")),Object(r.b)("p",null,"Return a ",Object(r.b)("inlineCode",{parentName:"p"},"Dict")," of expected genotype frequencies of a single locus in a\n",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," object. Use ",Object(r.b)("inlineCode",{parentName:"p"},"population = true")," to return a table of expected genotype frequencies of that locus per population."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'cats = @nancycats\ngeno_freq_expeced(cats, "fca8")\ngeno_freq_expected(cats, "fca8", population = true)\n')))}b.isMDXComponent=!0},151:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var a=t(0),l=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=l.a.createContext({}),b=function(e){var n=l.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=b(e.components);return l.a.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},d=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=b(t),d=a,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||r;return t?l.a.createElement(f,o(o({ref:n},i),{},{components:t})):l.a.createElement(f,o({ref:n},i))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var i=2;i<r;i++)c[i]=t[i];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);