(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{124:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var l=t(3),a=t(7),i=(t(0),t(151)),r={id:"relatednessmoments",title:"RelatednessMoments.jl",sidebar_label:"RelatednessMoments.jl"},o={unversionedId:"api/relatednessmoments",id:"api/relatednessmoments",isDocsHomePage:!1,title:"RelatednessMoments.jl",description:"Blouin",source:"@site/docs/api/RelatednessMoments.md",slug:"/api/relatednessmoments",permalink:"/PopGen.jl/docs/api/relatednessmoments",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/RelatednessMoments.md",version:"current",lastUpdatedAt:1598060716,formattedLastUpdatedAt:"8/22/2020",sidebar_label:"RelatednessMoments.jl",sidebar:"docs",previous:{title:"Read.jl",permalink:"/PopGen.jl/docs/api/read"},next:{title:"Cross.jl",permalink:"/PopGen.jl/docs/api/PopGenSims/popgensims_cross"}},s=[{value:"<code>Blouin</code>",id:"blouin",children:[]},{value:"<code>LiHorvitz</code>",id:"lihorvitz",children:[]},{value:"<code>Loiselle</code>",id:"loiselle",children:[]},{value:"<code>Lynch</code>",id:"lynch",children:[]},{value:"<code>LynchLi</code>",id:"lynchli",children:[]},{value:"<code>LynchRitland</code>",id:"lynchritland",children:[]},{value:"<code>Moran</code>",id:"moran",children:[]},{value:"<code>QuellerGoodnight</code>",id:"quellergoodnight",children:[]},{value:"<code>Ritland</code>",id:"ritland",children:[]},{value:"<code>Wang</code>",id:"wang",children:[]}],c={toc:s};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(l.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"blouin"},Object(i.b)("inlineCode",{parentName:"h3"},"Blouin")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Blouin(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),Object(i.b)("p",null,"Allele sharing index described by Blouin (1996)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Single Locus Equation: The number of alleles shared between individuals over ploidy.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If both allele positions are shared (e.g. AA x AA or AB x AB) then 1"),Object(i.b)("li",{parentName:"ul"},"If one allele position is shared (e.g. AB x AC) then 0.5"),Object(i.b)("li",{parentName:"ul"},"If neither allele position is shared (e.g. AB x CD) then 0"))),Object(i.b)("li",{parentName:"ul"},"How to combine multiple loci: Single locus estimates are simply averaged together"),Object(i.b)("li",{parentName:"ul"},"Assumes no inbreeding")),Object(i.b)("p",null,"Blouin, M. S., Parsons, M., Lacaille, V., & Lotz, S. (1996). Use of microsatellite loci to classify individuals by relatedness. Molecular ecology, 5(3), 393-401."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"lihorvitz"},Object(i.b)("inlineCode",{parentName:"h3"},"LiHorvitz")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"LiHorvitz(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),Object(i.b)("p",null,"Allele sharing index described by Li and Horvitz (1953)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Single Locus Equation: If all alleles are the same between individuals (eg. AA x AA) then 1.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If two alleles are shared between individuals (eg.  AA x AB or AB x AB) then 0.5."),Object(i.b)("li",{parentName:"ul"},"If only one allele is shared between individuals (eg. AB x AC) then 0.25."),Object(i.b)("li",{parentName:"ul"},"If no alleles are shared (eg. AB x CD) then 0."))),Object(i.b)("li",{parentName:"ul"},"How to combine multiple loci: Single locus estimates are simply averaged together"),Object(i.b)("li",{parentName:"ul"},"Assumes no inbreeding")),Object(i.b)("p",null,"Li, C. C., & Horvitz, D. G. (1953). Some methods of estimating the inbreeding coefficient. American journal of human genetics, 5(2), 107."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"loiselle"},Object(i.b)("inlineCode",{parentName:"h3"},"Loiselle")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Loiselle(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),Object(i.b)("p",null,"Calculates the moments based estimator of pairwise relatedness using the estimator propsed by\nLoiselle et al (1995) and modified to individual dyads by Heuertz et al. (2003)."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Multiple Locus Equation:"),Object(i.b)("li",{parentName:"ul"},"Assumes no inbreeding")),Object(i.b)("p",null,"See equations 22 in: Wang(2017) for variant of estimator used"),Object(i.b)("p",null,"Loiselle, B. A., Sork, V. L., Nason, J., & Graham, C. (1995). Spatial genetic structure of a tropical understory shrub, ",Object(i.b)("em",{parentName:"p"},"Psychotria officinalis")," (Rubiaceae). American journal of botany, 82(11), 1420-1425."),Object(i.b)("p",null,"Heuertz, M., Vekemans, X., Hausman, J. F., Palada, M., & Hardy, O. J. (2003). Estimating seed vs. pollen dispersal from spatial genetic structure in the common ash. Molecular Ecology, 12(9), 2483-2495."),Object(i.b)("p",null,"Wang, J. (2017). Estimating pairwise relatedness in a small sample of individuals. Heredity, 119(5), 302-313."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"lynch"},Object(i.b)("inlineCode",{parentName:"h3"},"Lynch")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Lynch(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),Object(i.b)("p",null,"Allele sharing index described by Lynch (1988)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Single Locus Equation: If all alleles are the same between individuals (eg. AA x AA) then 1.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If both individuals are heterozygous with the same alleles or one is homozygous for the shared allele (eg. AB x AB or AA x AB) then 0.75."),Object(i.b)("li",{parentName:"ul"},"If only one allele is shared between individuals (eg. AB x AC) then 0.5."),Object(i.b)("li",{parentName:"ul"},"If no alleles are shared (eg. AB x CD) then 0."))),Object(i.b)("li",{parentName:"ul"},"How to combine multiple loci: Single locus estimates are simply averaged together"),Object(i.b)("li",{parentName:"ul"},"Assumes no inbreeding")),Object(i.b)("p",null,"Lynch, M. (1988). Estimation of relatedness by DNA fingerprinting. Molecular biology and evolution, 5(5), 584-599."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"lynchli"},Object(i.b)("inlineCode",{parentName:"h3"},"LynchLi")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"LynchLi(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),Object(i.b)("p",null,"Calculates the moments based estimator of pairwise relatedness by Lynch (1988) & improved by Li et al. (1993)."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Single Locus Equation:"),Object(i.b)("li",{parentName:"ul"},"How to combine multiple loci: Sum the difference between observed and expected similarity across all loci and then divide by the sum of 1 - the expected similarity"),Object(i.b)("li",{parentName:"ul"},"Assumes no inbreeding")),Object(i.b)("p",null,"See equations 13 - 16 in Wang (2017) for variant of estimator used"),Object(i.b)("p",null,"Li, C. C., Weeks, D. E., & Chakravarti, A. (1993). Similarity of DNA fingerprints due to chance and relatedness. Human heredity, 43(1), 45-52."),Object(i.b)("p",null,"Wang, J. (2017). Estimating pairwise relatedness in a small sample of individuals. Heredity, 119(5), 302-313."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"lynchritland"},Object(i.b)("inlineCode",{parentName:"h3"},"LynchRitland")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"LynchRitland(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),Object(i.b)("p",null,"Calculates the moments based estimator of pairwise relatedness by Lynch and Ritland (1999)."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Single Locus Equation:"),Object(i.b)("li",{parentName:"ul"},"How to combine multiple loci: Weighted average of each term seperately weighted by the sample variance (assuming zero relatedness) and subsequently divided by the average sampling variance"),Object(i.b)("li",{parentName:"ul"},"Assumes no inbreeding")),Object(i.b)("p",null,"See equation 10 in Wang (2017) for variant of estimator used"),Object(i.b)("p",null,"Lynch, M., & Ritland, K. (1999). Estimation of pairwise relatedness with molecular markers. Genetics, 152(4), 1753-1766."),Object(i.b)("p",null,"Wang, J. (2017). Estimating pairwise relatedness in a small sample of individuals. Heredity, 119(5), 302-313."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"moran"},Object(i.b)("inlineCode",{parentName:"h3"},"Moran")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Moran(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),Object(i.b)("p",null,"Reinterpretation of Moran's I (commonly used for spatial autocorrelation) to estimate genetic relatedness\nby Hardy and Vekemans (1999)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Multiple Locus Equation:"),Object(i.b)("li",{parentName:"ul"},"Assumes no inbreeding")),Object(i.b)("p",null,"Hardy, O. J., & Vekemans, X. (1999). Isolation by distance in a continuous population: reconciliation between spatial autocorrelation analysis and population genetics models. Heredity, 83(2), 145-154."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"quellergoodnight"},Object(i.b)("inlineCode",{parentName:"h3"},"QuellerGoodnight")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"QuellerGoodnight(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),Object(i.b)("p",null,"Calculates the moments based estimator of pairwise relatedness developed by Queller & Goodnight (1989)."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Single Locus Equation:"),Object(i.b)("li",{parentName:"ul"},"How to combine multiple loci:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Multiple loci are combined by independently summing the two numerator and two denominator terms before performing the final division and averaging the two components."))),Object(i.b)("li",{parentName:"ul"},"Assumes no inbreeding")),Object(i.b)("p",null,"See equation 3 in Wang (2017) for variant of estimator used."),Object(i.b)("p",null,"Queller, D. C., & Goodnight, K. F. (1989). Estimating relatedness using genetic markers. Evolution, 43(2), 258-275."),Object(i.b)("p",null,"Wang, J. (2017). Estimating pairwise relatedness in a small sample of individuals. Heredity, 119(5), 302-313."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"ritland"},Object(i.b)("inlineCode",{parentName:"h3"},"Ritland")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Ritland(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),Object(i.b)("p",null,"Calculates the moments based estimator of pairwise relatedness proposed by Li and Horvitz (1953) and implemented/made popular by Ritland (1996)."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Single Locus Equation:"),Object(i.b)("li",{parentName:"ul"},"How to combine multiple loci: A weighted average of individual locus specific estimates weighted by sampling variance"),Object(i.b)("li",{parentName:"ul"},"Assumes no inbreeding")),Object(i.b)("p",null,"See equation 7 in: Wang (2017) for variant of estimator used"),Object(i.b)("p",null,"Ritland, K. (1996). Estimators for pairwise relatedness and individual inbreeding coefficients. Genetics Research, 67(2), 175-185."),Object(i.b)("p",null,"Wang, J. (2017). Estimating pairwise relatedness in a small sample of individuals. Heredity, 119(5), 302-313."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"wang"},Object(i.b)("inlineCode",{parentName:"h3"},"Wang")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Wang(ind1::GenoArray, ind2::GenoArray, locus_names::Vector{Symbol}; alleles::NamedTuple)\n")),Object(i.b)("p",null,"Calculates the moments based estimator of pairwise relatedness by Wang (2002)."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Single Locus Equation:"),Object(i.b)("li",{parentName:"ul"},"How to combine multiple loci: Each individual locus subcomponent (b-g) and each genotypic state (P1-P3) is averaged weighted by the average similarity of unrelated dyads at each locus. Then the values of V, \u03a6, \u0394, and r are calculated"),Object(i.b)("li",{parentName:"ul"},"Assumes no inbreeding"),Object(i.b)("li",{parentName:"ul"},"Corrected for sampling bias in allele frequencies to get an unbiased estimator")),Object(i.b)("p",null,"Wang, J. (2002). An estimator for pairwise relatedness using molecular markers. Genetics, 160(3), 1203-1215."))}b.isMDXComponent=!0},151:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var l=t(0),a=t.n(l);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),b=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=b(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(t),m=l,p=d["".concat(r,".").concat(m)]||d[m]||u[m]||i;return t?a.a.createElement(p,o(o({ref:n},c),{},{components:t})):a.a.createElement(p,o({ref:n},c))}));function p(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=t[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);