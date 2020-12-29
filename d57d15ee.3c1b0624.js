(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),l=(a(0),a(148)),o=a(152),r=a(153),s=a(156),c={id:"relatedness",title:"Relatedness (Kinship)",sidebar_label:"Relatedness (Kinship)"},b={unversionedId:"analyses/relatedness",id:"analyses/relatedness",isDocsHomePage:!1,title:"Relatedness (Kinship)",description:"Background",source:"@site/docs/analyses/relatedness.md",slug:"/analyses/relatedness",permalink:"/PopGen.jl/docs/analyses/relatedness",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/analyses/relatedness.md",version:"current",lastUpdatedAt:1607709449,sidebar_label:"Relatedness (Kinship)",sidebar:"docs",previous:{title:"Hardy-Weinberg Equilibrium",permalink:"/PopGen.jl/docs/analyses/hardyweinberg"},next:{title:"Simulating Samples",permalink:"/PopGen.jl/docs/simulations/simulate_samples"}},d=[{value:"Background",id:"background",children:[]},{value:"Calculate Relatedness",id:"calculate-relatedness",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Keyword Arguments",id:"keyword-arguments",children:[]},{value:"Arguments",id:"arguments-1",children:[]},{value:"Keyword Arguments",id:"keyword-arguments-1",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Relatedness Estimators",id:"relatedness-estimators",children:[{value:"Blouin",id:"blouin",children:[]},{value:"Li &amp; Horvitz",id:"li--horvitz",children:[]},{value:"Loiselle",id:"loiselle",children:[]},{value:"Lynch",id:"lynch",children:[]},{value:"Lynch / Li",id:"lynch--li",children:[]},{value:"Lynch &amp; Ritland",id:"lynch--ritland",children:[]},{value:"Moran",id:"moran",children:[]},{value:"Queller &amp; Goodnight",id:"queller--goodnight",children:[]},{value:"Ritland",id:"ritland",children:[]},{value:"Incomplete",id:"incomplete",children:[]}]},{value:"Posthoc analyses",id:"posthoc-analyses",children:[{value:"Arguments",id:"arguments-2",children:[]},{value:"Keyword Arguments",id:"keyword-arguments-2",children:[]}]},{value:"Acknowledgements",id:"acknowledgements",children:[]}],m={toc:d};function p(e){var t=e.components,c=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},m,c,{components:t,mdxType:"MDXLayout"}),Object(l.b)("link",{rel:"stylesheet",href:Object(s.a)("katex/katex.min.css")}),Object(l.b)("h2",{id:"background"},"Background"),Object(l.b)("p",null,"Sometimes you want or need to know the relatedness of individuals in a sample. Relatedness is exactly what its name implies: how related individuals are given some provided genetic information (e.g. full siblings, half siblings, etc.). Relatedness can be used in quantitative genetics to estimate heritability, additive genetic variances, and covariances. It can also be used in population genetics to study isolation-by-distance or population structure."),Object(l.b)("p",null,'The goal of calculating relatedness from molecular markers is to accurately estimate the proportion of the genome which is identical by descent between two individuals. With a pedigree this is "relatively" straightforward. However, for large, natural, populations pedigrees tend not to exist and some brilliant minds have developed various equations to estimate the relatedness from a set of molecular markers. Given two diploid individuals, there are 9 "identity by descent" models available between them (',Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.springer.com/gp/book/9783642884177"}),"Jacquard 1975"),", paywall), as shown below (from ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.genetics.org/content/163/3/1153.full"}),"Milligan 2003"),"):"),Object(l.b)("p",null,Object(l.b)("img",{alt:"Jacquard IBD",src:a(237).default})),Object(l.b)("p",null,"Broadly speaking there are two different ways of estimating genetic relatedness using molecular markers: methods of moments, and likelihood estimators. Generally, moments estimators will be faster but aren't constrained to being between the theoretical minimum and maximum values of 0 and 1. The likelihood estimators use likelihood functions derived from the set of Jacquard Identity States (above) to determine the most likely inheritance pattern. One difference between the two classes is (generally) moments estimators require an assumption of no inbreeding, while that assumption isn't necessarily required for likelihood estimators (though it does simplify the math). It is increasingly common to use multiple estimators on pairs, simulated from your molecular markers, with known relationships to determine the most appropriate estimator to use with your data."),Object(l.b)("p",null,"PopGen.jl implements a wide variety of moments-based estimators: Blouin, Li & Horvitz, Loiselle, Lynch, Lynch/Li, Lynch & Ritland, Moran, Queller & Goodnight, Ritland, and Wang. Along with these, we provide an option to estimate mean, median, standard error, and confidence intervals using bootstrapping. Have a look at ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/blog/relatedness"}),"the guide")," we provide detailing how to perform a basic relatedness analysis."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"A note about removing kin")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"There are reasons for removing kin in population genetics datasets. For one, there are no siblings/kin or mixed-generations in a Hardy-Weinberg Equilibrium population, and the inclusion of siblings/kin in analyses that rely on HWE assumptions ","[technically]"," violate those assumptions. However, there are also arguments to keep kin/siblings in your data, those data are important for effective population size, linkage disequilibrium, etc. "),Object(l.b)("p",{parentName:"div"},"see  ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://onlinelibrary.wiley.com/doi/full/10.1111/mec.14022"}),"Waples and Anderson (2017)")))),Object(l.b)("h2",{id:"calculate-relatedness"},"Calculate Relatedness"),Object(l.b)(o.a,{block:!0,defaultValue:"a",values:[{label:"All vs. All",value:"a"},{label:"Specific Samples",value:"s"}],mdxType:"Tabs"},Object(l.b)(r.a,{value:"a",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"relatedness(data::PopData; method::F, iterations::Int64, interval::Tuple(Float64, Float64))\n")),Object(l.b)("p",null,"Return a dataframe of pairwise relatedness estimates for all individuals in a ",Object(l.b)("inlineCode",{parentName:"p"},"PopData")," object using\nmethod ",Object(l.b)("inlineCode",{parentName:"p"},"F")," (see below). To calculate means, median, standard error, and confidence intervals using bootstrapping,\nset ",Object(l.b)("inlineCode",{parentName:"p"},"iterations = n")," where ",Object(l.b)("inlineCode",{parentName:"p"},"n")," is an integer greater than ",Object(l.b)("inlineCode",{parentName:"p"},"0")," (the default) corresponding to the number\nof bootstrap iterations you wish to perform for each pair. The default confidence interval is ",Object(l.b)("inlineCode",{parentName:"p"},"(0.275, 0.975)")," (i.e. 95%), however that can be changed by supplying a ",Object(l.b)("inlineCode",{parentName:"p"},"Tuple{Float64, Float64}")," of ",Object(l.b)("inlineCode",{parentName:"p"},"(low, high)")," to the keyword ",Object(l.b)("inlineCode",{parentName:"p"},"interval"),". ",Object(l.b)("strong",{parentName:"p"},"Note:")," samples must be diploid."),Object(l.b)("h3",{id:"arguments"},"Arguments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"data")," : A PopData object"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"sample_names")," : A list of samples names to calculate relatedness for (optional)")),Object(l.b)("h3",{id:"keyword-arguments"},"Keyword Arguments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"method")," : A method function or vector of method functions (see below)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"iterations")," : The number of iterations to perform bootstrapping (default: ",Object(l.b)("inlineCode",{parentName:"li"},"0"),", will not perform bootstrapping)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"interval")," : A Tuple of (low, high) indicating the confidence intervals you would like for bootstrapping (default: ",Object(l.b)("inlineCode",{parentName:"li"},"(0.275, 0.975)"),", i.e. 95%)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"inbreeding")," : true/false of whether to consider inbreeding in the calculations (default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"). Only used in ",Object(l.b)("inlineCode",{parentName:"li"},"dyadML"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Examples")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"julia> cats = @nancycats;\n\njulia> relatedness(cats, method = Ritland)\n27966\xd74 DataFrame\n    Row \u2502 sample_1  sample_2  n_loci  Ritland\n        \u2502 String    String    Int64   Float64?\n \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n      1 \u2502 N215      N216           8   0.258824\n      2 \u2502 N215      N217           8   0.193238\n      3 \u2502 N215      N218           8   0.127497\n      4 \u2502 N215      N219           8   0.0453471\n   \u22ee   \u2502    \u22ee         \u22ee        \u22ee          \u22ee\n  27963 \u2502 N297      N290           7   0.189647\n  27964 \u2502 N281      N289           8   0.0892068\n  27965 \u2502 N281      N290           7   0.104614\n  27966 \u2502 N289      N290           7   0.0511663\n                                27958 rows omitted\n"))),Object(l.b)(r.a,{value:"s",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"relatedness(data::PopData, sample_names::Vector{String}; method::F, iterations::Int64, interval::Tuple(Float64, Float64))\n")),Object(l.b)("p",null,"Return a dataframe of pairwise relatedness estimates for all pairs of the supplied sample names in a ",Object(l.b)("inlineCode",{parentName:"p"},"PopData")," object using\nmethod ",Object(l.b)("inlineCode",{parentName:"p"},"F")," (see below). To calculate means, median, standard error, and confidence intervals using bootstrapping,\nset ",Object(l.b)("inlineCode",{parentName:"p"},"iterations = n")," where ",Object(l.b)("inlineCode",{parentName:"p"},"n")," is an integer greater than ",Object(l.b)("inlineCode",{parentName:"p"},"0")," (the default) corresponding to the number\nof bootstrap iterations you wish to perform for each pair. The default confidence interval is ",Object(l.b)("inlineCode",{parentName:"p"},"(0.275, 0.975)")," (i.e. 95%),\nhowever that can be changed by supplying a ",Object(l.b)("inlineCode",{parentName:"p"},"Tuple{Float64, Float64}")," of ",Object(l.b)("inlineCode",{parentName:"p"},"(low, high)")," to the keyword ",Object(l.b)("inlineCode",{parentName:"p"},"interval"),".\n",Object(l.b)("strong",{parentName:"p"},"Note:")," samples must be diploid."),Object(l.b)("h3",{id:"arguments-1"},"Arguments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"data")," : A PopData object"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"sample_names")," : A list of samples names to calculate relatedness for (optional)")),Object(l.b)("h3",{id:"keyword-arguments-1"},"Keyword Arguments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"method")," : A method function or vector of method functions (see below)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"iterations")," : The number of iterations to perform bootstrapping (default: ",Object(l.b)("inlineCode",{parentName:"li"},"0"),", will not perform bootstrapping)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"interval")," : A Tuple of (low, high) indicating the confidence intervals you would like for bootstrapping (default: ",Object(l.b)("inlineCode",{parentName:"li"},"(0.275, 0.975)"),", i.e. 95%)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"inbreeding")," : true/false of whether to consider inbreeding in the calculations (default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"). Only used in ",Object(l.b)("inlineCode",{parentName:"li"},"dyadML"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Examples")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'julia> cats = @nancycats;\n\njulia> relatedness(cats, ["N7", "N111", "N115"], method = [Ritland, Wang])\n3\xd75 DataFrame\n\u2502 Row \u2502 sample_1 \u2502 sample_2 \u2502 n_loci \u2502 Ritland    \u2502 Wang      \u2502\n\u2502     \u2502 String   \u2502 String   \u2502 Int64  \u2502 Float64?   \u2502 Float64?  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 N7       \u2502 N111     \u2502 9      \u2502 -0.129432  \u2502 -0.395806 \u2502\n\u2502 2   \u2502 N7       \u2502 N115     \u2502 9      \u2502 -0.0183925 \u2502 0.0024775 \u2502\n\u2502 3   \u2502 N111     \u2502 N115     \u2502 9      \u2502 0.0240152  \u2502 0.183966  \u2502\n\n\njulia> relatedness(cats, ["N7", "N111", "N115"], method = [Loiselle, Moran], iterations = 100, interval = (0.025, 0.975))\n3\xd713 DataFrame. Omitted printing of 7 columns\n\u2502 Row \u2502 sample_1 \u2502 sample_2 \u2502 n_loci \u2502 Loiselle   \u2502 Loiselle_mean \u2502 Loiselle_median \u2502\n\u2502     \u2502 String   \u2502 String   \u2502 Int64  \u2502 Float64?   \u2502 Float64?      \u2502 Float64?        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 N7       \u2502 N111     \u2502 9      \u2502 -0.101618  \u2502 0.0141364     \u2502 0.00703954      \u2502\n\u2502 2   \u2502 N7       \u2502 N115     \u2502 9      \u2502 -0.0428898 \u2502 0.0743497     \u2502 0.0798708       \u2502\n\u2502 3   \u2502 N111     \u2502 N115     \u2502 9      \u2502 0.13681    \u2502 0.266043      \u2502 0.257748        \u2502\n')))),Object(l.b)("h3",{id:"methods"},"Methods"),Object(l.b)("p",null,"There are several estimators available and are listed below. ",Object(l.b)("inlineCode",{parentName:"p"},"relatedness")," takes the\nfunction names as arguments (",Object(l.b)("strong",{parentName:"p"},"case sensitive"),"), therefore do not use quotes or colons\nin specifying the methods. Methods can be supplied as a vector. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/PopGen.jl/docs/analyses/relatedness#blouin"}),"Blouin")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/PopGen.jl/docs/analyses/relatedness#li--horvitz"}),"LiHorvitz")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/PopGen.jl/docs/analyses/relatedness#loiselle"}),"Loiselle")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/PopGen.jl/docs/analyses/relatedness#lynch"}),"Lynch")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/PopGen.jl/docs/analyses/relatedness#lynch--li"}),"LynchLi")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/PopGen.jl/docs/analyses/relatedness#lynch--ritland"}),"LynchRitland")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/PopGen.jl/docs/analyses/relatedness#lynch--moran"}),"Moran")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/PopGen.jl/docs/analyses/relatedness#queller--goodnight"}),"QuellerGoodnight")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/PopGen.jl/docs/analyses/relatedness#ritland"}),"Ritland"))),Object(l.b)("h5",{id:"in-progress-incomplete"},"In Progress (incomplete*)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/PopGen.jl/docs/analyses/relatedness#dyadic-maximum-likelihood"}),"dyadML")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/PopGen.jl/docs/analyses/relatedness#wang"}),"Wang"))),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"*more relatedness")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Contact us or submit a pull request if you're interested in contributing to the relatedness methods. We're currently in the process of adding dryadML and Wang (2002) estimators and speeding up the existing methods. More help is always welcomed! \ud83d\ude04"))),Object(l.b)("h4",{id:"examples"},"Examples"),Object(l.b)(o.a,{block:!0,defaultValue:"s",values:[{label:"Single Method",value:"s"},{label:"Multiple Methods",value:"m"},{label:"With Bootstrapping",value:"b"}],mdxType:"Tabs"},Object(l.b)(r.a,{value:"s",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> cats = @nancycats;\n\njulia> cat_kin = relatendess(cats, samples(cats)[1:10], method = Ritland)\n"))),Object(l.b)(r.a,{value:"m",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> cats = @nancycats;\n\njulia> cat_kin = relatendess(cats, samples(cats)[1:10], method = [Moran, QuellerGoodnight])\n"))),Object(l.b)(r.a,{value:"b",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> cats = @nancycats;\n\njulia> cat_kin = relatendess(cats, method = [Ritland, Wang], iterations = 100)\n")))),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"autocompletion")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Since the methods correspond to function names, they will tab-autocomplete when\ninputting them. For more information on a specific method, please see the respective docstring (e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"?Loiselle"),")."))),Object(l.b)("h2",{id:"relatedness-estimators"},"Relatedness Estimators"),Object(l.b)("h3",{id:"blouin"},"Blouin"),Object(l.b)("p",null,"The moments based estimator developed by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://onlinelibrary.wiley.com/doi/10.1046/j.1365-294X.1996.00094.x"}),"Blouin (1996)"),". Call ",Object(l.b)("inlineCode",{parentName:"p"},"method = Blouin")," to use this method. "),Object(l.b)("h3",{id:"li--horvitz"},"Li & Horvitz"),Object(l.b)("p",null,"The moments based estimator developed by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1716461/"}),"Li & Horvitz (1953)"),". Call ",Object(l.b)("inlineCode",{parentName:"p"},"method = LiHorvitz")," to use this method. "),Object(l.b)("h3",{id:"loiselle"},"Loiselle"),Object(l.b)("p",null,"The moments based estimator developed by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://bsapubs.onlinelibrary.wiley.com/doi/abs/10.1002/j.1537-2197.1995.tb12679.x"}),"Loiselle (1995)"),". Call ",Object(l.b)("inlineCode",{parentName:"p"},"method = Loiselle")," to use this method. "),Object(l.b)("h3",{id:"lynch"},"Lynch"),Object(l.b)("p",null,"The moments based estimator developed by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://pubmed.ncbi.nlm.nih.gov/3193879/"}),"Lynch (1988)"),". Call ",Object(l.b)("inlineCode",{parentName:"p"},"method = Lynch")," to use this method. "),Object(l.b)("h3",{id:"lynch--li"},"Lynch / Li"),Object(l.b)("p",null,"The moments based estimator developed by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://pubmed.ncbi.nlm.nih.gov/8514326/"}),"Lynch/Li (1993)"),". Call ",Object(l.b)("inlineCode",{parentName:"p"},"method = LynchLi")," to use this method. "),Object(l.b)("h3",{id:"lynch--ritland"},"Lynch & Ritland"),Object(l.b)("p",null,"The moments based estimator developed by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.genetics.org/content/152/4/1753.short"}),"Lynch & Ritland (1999)"),". Call ",Object(l.b)("inlineCode",{parentName:"p"},"method = LynchRitland")," to use this method. "),Object(l.b)("h3",{id:"moran"},"Moran"),Object(l.b)("p",null,"The moments based estimator developed by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.jstor.org/stable/2332142?origin=crossref&seq=1#metadata_info_tab_contents"}),"Moran (1950)"),". Call ",Object(l.b)("inlineCode",{parentName:"p"},"method = Moran")," to use this method. "),Object(l.b)("h3",{id:"queller--goodnight"},"Queller & Goodnight"),Object(l.b)("p",null,"The moments based estimator developed by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1558-5646.1989.tb04226.x"}),"Queller & Goodnight (1989)"),". Call ",Object(l.b)("inlineCode",{parentName:"p"},"method = QuellerGoodnight")," to use this method. "),Object(l.b)("h3",{id:"ritland"},"Ritland"),Object(l.b)("p",null,"The moments based estimator developed by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1558-5646.1996.tb02347.x"}),"Ritland (1996)"),". Call ",Object(l.b)("inlineCode",{parentName:"p"},"method = Ritland")," to use this method. "),Object(l.b)("h3",{id:"incomplete"},"Incomplete"),Object(l.b)("h4",{id:"dyadic-maximum-likelihood"},"Dyadic Maximum Likelihood"),Object(l.b)("p",null,"The moments based estimator developed by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://pubmed.ncbi.nlm.nih.gov/12663552/"}),"Milligan (2003)"),"."),Object(l.b)("h4",{id:"wang"},"Wang"),Object(l.b)("p",null,"The moments based estimator developed by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.genetics.org/content/160/3/1203.short"}),"Wang (2002)"),"."),Object(l.b)("h2",{id:"posthoc-analyses"},"Posthoc analyses"),Object(l.b)("p",null,"There are several different kinds of things you can do with kinship information (e.g. network analysis), and one that's provided is lovingly\ncalled ",Object(l.b)("inlineCode",{parentName:"p"},"relatedness_posthoc()"),", which performs a permutation analysis to\ntest if within-population relatedness is significantly greater than between-population relatedness for each population. We recommend that you\ncorrect for multiple testing using ",Object(l.b)("inlineCode",{parentName:"p"},"MultipleTesting.jl"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"relatedness_posthoc(data::PopData, results::Union{DataFrame, NamedTuple}; iterations::Int)\n")),Object(l.b)("h3",{id:"arguments-2"},"Arguments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"data")," : A PopData object"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"results")," : the DataFrame or NamedTuple results from ",Object(l.b)("inlineCode",{parentName:"li"},"relatedness()"))),Object(l.b)("h3",{id:"keyword-arguments-2"},"Keyword Arguments"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"iterations")," : number of iterations for the permutation tests (default: ",Object(l.b)("inlineCode",{parentName:"li"},"20000"),")")),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"not a great name")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},'We admit "relatedness_posthoc" is not a great name for this function. Please\ncontact us with better ideas! \ud83d\ude01'))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"julia> cats = @nancycats ;\n\njulia> rel_out = relatedness(cats, method = [Ritland, Moran], iterations = 100);\n\njulia> relatedness_posthoc(cats, rel_out)\n17x3 DataFrame\n Row \u2502 population  Ritland_P  Moran_P\n     \u2502 String      Float64    Float64\n\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   1 \u2502 1              5.0e-5   5.0e-5\n   2 \u2502 2              5.0e-5   5.0e-5\n   3 \u2502 3              5.0e-5   5.0e-5\n   4 \u2502 4              5.0e-5   5.0e-5\n   5 \u2502 5              5.0e-5   5.0e-5\n   6 \u2502 6              5.0e-5   5.0e-5\n   7 \u2502 7              5.0e-5   5.0e-5\n   8 \u2502 8              5.0e-5   5.0e-5\n   9 \u2502 9              5.0e-5   5.0e-5\n  10 \u2502 10             5.0e-5   5.0e-5\n  11 \u2502 11             5.0e-5   5.0e-5\n  12 \u2502 12             5.0e-5   5.0e-5\n  13 \u2502 13             5.0e-5   5.0e-5\n  14 \u2502 14             5.0e-5   5.0e-5\n  15 \u2502 15             5.0e-5   5.0e-5\n  16 \u2502 16             5.0e-5   5.0e-5\n  17 \u2502 17             5.0e-5   5.0e-5\n")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"acknowledgements"},"Acknowledgements"),Object(l.b)("p",null,"The relatedness methods were dutifully written and verified against R analogues by Jason Selwyn. These anaylses can take a while, especially if performing bootstrapping; we provide a progress bar via ",Object(l.b)("inlineCode",{parentName:"p"},"ProgressMeter.jl")," so you can move on and focus on other things in the meantime. "))}p.isMDXComponent=!0},148:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,u=d["".concat(o,".").concat(p)]||d[p]||m[p]||l;return a?i.a.createElement(u,r(r({ref:t},c),{},{components:a})):i.a.createElement(u,r({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var c=2;c<l;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},149:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},150:function(e,t,a){"use strict";var n=a(0),i=a(151);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},151:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},152:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(150),o=a(149),r=a(54),s=a.n(r),c=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,d=e.values,m=e.groupId,p=e.className,u=Object(l.a)(),h=u.tabGroupChoices,j=u.setTabGroupChoices,O=Object(n.useState)(r),f=O[0],g=O[1],v=n.Children.toArray(e.children);if(null!=m){var N=h[m];null!=N&&N!==f&&d.some((function(e){return e.value===N}))&&g(N)}var y=function(e){g(e),null!=m&&j(m,e)},w=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},p)},d.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},153:function(e,t,a){"use strict";var n=a(3),i=a(0),l=a.n(i);t.a=function(e){var t=e.children,a=e.hidden,i=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:i}),t)}},156:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return o}));var n=a(21),i=a(157);function l(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var l=void 0===n?{}:n,o=l.forcePrependBaseUrl,r=void 0!==o&&o,s=l.absolute,c=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(i.b)(a))return a;if(r)return t+a;var b=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+b:b}(l,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},157:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}))},237:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/jacquard_identitiies-dd9e2b1bc1f371819ea078c6ad3fc86c.jpg"}}]);