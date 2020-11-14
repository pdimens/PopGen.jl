(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{117:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return b})),t.d(a,"default",(function(){return p}));var n=t(2),i=t(6),c=(t(0),t(138)),r=t(142),l=t(143),o={id:"dataexploration",title:"Data Exploration",sidebar_label:"Data exploration"},s={unversionedId:"basics/dataexploration",id:"basics/dataexploration",isDocsHomePage:!1,title:"Data Exploration",description:"Missing Data",source:"@site/docs/basics/dataexploration.md",slug:"/basics/dataexploration",permalink:"/PopGen.jl/docs/basics/dataexploration",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/basics/dataexploration.md",version:"current",lastUpdatedAt:1605303084,sidebar_label:"Data exploration",sidebar:"docs",previous:{title:"Viewing Data",permalink:"/PopGen.jl/docs/basics/viewdata"},next:{title:"Hardy-Weinberg Equilibrium",permalink:"/PopGen.jl/docs/analyses/hardyweinberg"}},b=[{value:"Missing Data",id:"missing-data",children:[]},{value:"Pairwise Identical Genotypes",id:"pairwise-identical-genotypes",children:[]},{value:"Allelic Richness",id:"allelic-richness",children:[]},{value:"Average Number of Alleles",id:"average-number-of-alleles",children:[]},{value:"Summary Statistics",id:"summary-statistics",children:[]}],u={rightToc:b};function p(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"missing-data"},"Missing Data"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'missing(data::PopData; by::String = "sample")\n')),Object(c.b)("p",null,"Get missing genotype information in a ",Object(c.b)("inlineCode",{parentName:"p"},"PopData")," object. Specify a mode of operation using the ",Object(c.b)("inlineCode",{parentName:"p"},"by =")," keyword to return a table corresponding with that missing information type."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"by"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"alternative name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"what it does"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},'"sample"')),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},'"individual"')),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"returns a count of missing loci per individual (default)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},'"pop"')),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},'"population"')),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"returns a count of missing genotypes per population")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},'"locus"')),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},'"loci"')),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"returns a count of missing genotypes per locus")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},'"full"')),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},'"detailed"')),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"returns a count of missing genotypes per locus per population")))),Object(c.b)(r.a,{block:!0,defaultValue:"s",values:[{label:"sample",value:"s"},{label:"population",value:"p"},{label:"locus",value:"l"},{label:"detailed",value:"f"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"s",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"julia> missing(sharks)\n212\xd72 DataFrame\n\u2502 Row \u2502 name    \u2502 missing \u2502\n\u2502     \u2502 String  \u2502 Int64   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 cc_001  \u2502 124     \u2502\n\u2502 2   \u2502 cc_002  \u2502 94      \u2502\n\u2502 3   \u2502 cc_003  \u2502 100     \u2502\n\u2502 4   \u2502 cc_005  \u2502 0       \u2502\n\u2502 5   \u2502 cc_007  \u2502 2       \u2502\n\u2502 6   \u2502 cc_008  \u2502 1       \u2502\n\u22ee\n\u2502 206 \u2502 seg_025 \u2502 0       \u2502\n\u2502 207 \u2502 seg_026 \u2502 0       \u2502\n\u2502 208 \u2502 seg_027 \u2502 2       \u2502\n\u2502 209 \u2502 seg_028 \u2502 25      \u2502\n\u2502 210 \u2502 seg_029 \u2502 0       \u2502\n\u2502 211 \u2502 seg_030 \u2502 1       \u2502\n\u2502 212 \u2502 seg_031 \u2502 1       \u2502\n"))),Object(c.b)(l.a,{value:"p",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'julia> missing(sharks, by = "pop")\n7\xd72 DataFrame\n\u2502 Row \u2502 population     \u2502 missing \u2502\n\u2502     \u2502 String         \u2502 Int64   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 Florida Keys   \u2502 1246    \u2502\n\u2502 2   \u2502 Cape Canaveral \u2502 666     \u2502\n\u2502 3   \u2502 Mideast Gulf   \u2502 99      \u2502\n\u2502 4   \u2502 Georgia        \u2502 425     \u2502\n\u2502 5   \u2502 Northeast Gulf \u2502 474     \u2502\n\u2502 6   \u2502 Southeast Gulf \u2502 1504    \u2502\n\u2502 7   \u2502 South Carolina \u2502 234     \u2502\n'))),Object(c.b)(l.a,{value:"l",mdxType:"TabItem"},"s",Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'julia> missing(sharks, by = "locus")\n2213\xd72 DataFrame\n\u2502 Row  \u2502 locus        \u2502 missing \u2502\n\u2502      \u2502 String       \u2502 Int64   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1    \u2502 contig_35208 \u2502 0       \u2502\n\u2502 2    \u2502 contig_23109 \u2502 6       \u2502\n\u2502 3    \u2502 contig_4493  \u2502 3       \u2502\n\u2502 4    \u2502 contig_10742 \u2502 2       \u2502\n\u2502 5    \u2502 contig_14898 \u2502 0       \u2502\n\u2502 6    \u2502 contig_8483  \u2502 0       \u2502\n\u22ee\n\u2502 2207 \u2502 contig_18959 \u2502 0       \u2502\n\u2502 2208 \u2502 contig_43517 \u2502 6       \u2502\n\u2502 2209 \u2502 contig_27356 \u2502 2       \u2502\n\u2502 2210 \u2502 contig_475   \u2502 0       \u2502\n\u2502 2211 \u2502 contig_19384 \u2502 5       \u2502\n\u2502 2212 \u2502 contig_22368 \u2502 3       \u2502\n\u2502 2213 \u2502 contig_2784  \u2502 7       \u2502\n'))),Object(c.b)(l.a,{value:"f",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'julia> missing(sharks, by = "full")\n15491\xd73 DataFrame\n\u2502 Row   \u2502 locus        \u2502 population     \u2502 missing \u2502\n\u2502       \u2502 String       \u2502 String         \u2502 Int64   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1     \u2502 contig_35208 \u2502 Cape Canaveral \u2502 0       \u2502\n\u2502 2     \u2502 contig_35208 \u2502 Georgia        \u2502 0       \u2502\n\u2502 3     \u2502 contig_35208 \u2502 South Carolina \u2502 0       \u2502\n\u2502 4     \u2502 contig_35208 \u2502 Florida Keys   \u2502 0       \u2502\n\u2502 5     \u2502 contig_35208 \u2502 Mideast Gulf   \u2502 0       \u2502\n\u2502 6     \u2502 contig_35208 \u2502 Northeast Gulf \u2502 0       \u2502\n\u22ee\n\u2502 15485 \u2502 contig_2784  \u2502 Cape Canaveral \u2502 0       \u2502\n\u2502 15486 \u2502 contig_2784  \u2502 Georgia        \u2502 2       \u2502\n\u2502 15487 \u2502 contig_2784  \u2502 South Carolina \u2502 1       \u2502\n\u2502 15488 \u2502 contig_2784  \u2502 Florida Keys   \u2502 2       \u2502\n\u2502 15489 \u2502 contig_2784  \u2502 Mideast Gulf   \u2502 1       \u2502\n\u2502 15490 \u2502 contig_2784  \u2502 Northeast Gulf \u2502 0       \u2502\n\u2502 15491 \u2502 contig_2784  \u2502 Southeast Gulf \u2502 1       \u2502\n')))),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"alternative names")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Each mode of operation has an extra synonymous (alternative) name just because we can and want you to have the option of more explicitly legible code. If you get the ",Object(c.b)("inlineCode",{parentName:"p"},"by = "),"  argument wrong, it will let you know with an error message and run the default ",Object(c.b)("inlineCode",{parentName:"p"},'"sample"')," mode anyway."))),Object(c.b)("h2",{id:"pairwise-identical-genotypes"},"Pairwise Identical Genotypes"),Object(c.b)("p",null,"While not a substitute for a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"docs/analyses/relatedness"}),"kinship analysis"),", it may be useful to know or verify how similar your data are in a very literal sense:\nhow many identical genotypes do two individuals have across all loci? To do this, we use ",Object(c.b)("inlineCode",{parentName:"p"},"pairwise_identical()")," to perform an all x all comparison of identical genotypes. This can be done for all individuals in a ",Object(c.b)("inlineCode",{parentName:"p"},"PopData")," object, or restricted to a specific set of individuals:"),Object(c.b)(r.a,{block:!0,defaultValue:"a",values:[{label:"all samples",value:"a"},{label:"some samples",value:"s"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"a",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> cats = nancycats();\n\njulia> cats_pw = pairwise_identical(cats)\n27966\xd74 DataFrame\n\u2502 Row   \u2502 sample_1 \u2502 sample_2 \u2502 identical \u2502 n     \u2502\n\u2502       \u2502 String   \u2502 String   \u2502 Float64   \u2502 Int64 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1     \u2502 N215     \u2502 N216     \u2502 0.5       \u2502 8     \u2502\n\u2502 2     \u2502 N215     \u2502 N217     \u2502 0.25      \u2502 8     \u2502\n\u2502 3     \u2502 N215     \u2502 N218     \u2502 0.38      \u2502 8     \u2502\n\u2502 4     \u2502 N215     \u2502 N219     \u2502 0.38      \u2502 8     \u2502\n\u2502 5     \u2502 N215     \u2502 N220     \u2502 0.25      \u2502 8     \u2502\n\u2502 6     \u2502 N215     \u2502 N221     \u2502 0.5       \u2502 8     \u2502\n\u22ee\n\u2502 27960 \u2502 N296     \u2502 N290     \u2502 0.0       \u2502 7     \u2502\n\u2502 27961 \u2502 N297     \u2502 N281     \u2502 0.14      \u2502 7     \u2502\n\u2502 27962 \u2502 N297     \u2502 N289     \u2502 0.43      \u2502 7     \u2502\n\u2502 27963 \u2502 N297     \u2502 N290     \u2502 0.29      \u2502 7     \u2502\n\u2502 27964 \u2502 N281     \u2502 N289     \u2502 0.25      \u2502 8     \u2502\n\u2502 27965 \u2502 N281     \u2502 N290     \u2502 0.43      \u2502 7     \u2502\n\u2502 27966 \u2502 N289     \u2502 N290     \u2502 0.14      \u2502 7     \u2502\n"))),Object(c.b)(l.a,{value:"s",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> cats = nancycats(); some_cats = samples(cats)[1:4]\n\njulia> pairwise_identical(cats, some_cats)\n6\xd74 DataFrame\n\u2502 Row \u2502 sample_1 \u2502 sample_2 \u2502 identical \u2502 n     \u2502\n\u2502     \u2502 String   \u2502 String   \u2502 Float64   \u2502 Int64 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 N215     \u2502 N216     \u2502 0.5       \u2502 8     \u2502\n\u2502 2   \u2502 N215     \u2502 N217     \u2502 0.25      \u2502 8     \u2502\n\u2502 3   \u2502 N215     \u2502 N218     \u2502 0.38      \u2502 8     \u2502\n\u2502 4   \u2502 N216     \u2502 N217     \u2502 0.12      \u2502 8     \u2502\n\u2502 5   \u2502 N216     \u2502 N218     \u2502 0.25      \u2502 8     \u2502\n\u2502 6   \u2502 N217     \u2502 N218     \u2502 0.0       \u2502 9     \u2502\n")))),Object(c.b)("h2",{id:"allelic-richness"},"Allelic Richness"),Object(c.b)("p",null,"If you were curious about allelic richness (number of alleles per locus), then you can use ",Object(c.b)("inlineCode",{parentName:"p"},"richness()")," to find that out. Use ",Object(c.b)("inlineCode",{parentName:"p"},"population = true")," to return a table by locus by population."),Object(c.b)(r.a,{block:!0,defaultValue:"l",values:[{label:"by locus",value:"l"},{label:"by locus by population",value:"p"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"l",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> cats = nancycats();\n\njulia> richness(cats)\n9\xd72 DataFrame\n\u2502 Row \u2502 locus  \u2502 richness \u2502\n\u2502     \u2502 String \u2502 Int64    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 fca8   \u2502 16       \u2502\n\u2502 2   \u2502 fca23  \u2502 11       \u2502\n\u2502 3   \u2502 fca43  \u2502 10       \u2502\n\u2502 4   \u2502 fca45  \u2502 9        \u2502\n\u2502 5   \u2502 fca77  \u2502 12       \u2502\n\u2502 6   \u2502 fca78  \u2502 8        \u2502\n\u2502 7   \u2502 fca90  \u2502 12       \u2502\n\u2502 8   \u2502 fca96  \u2502 12       \u2502\n\u2502 9   \u2502 fca37  \u2502 18       \u2502\n"))),Object(c.b)(l.a,{value:"p",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> richness(cats, population = true)\n153\xd73 DataFrame\n\u2502 Row \u2502 locus  \u2502 population \u2502 richness \u2502\n\u2502     \u2502 String \u2502 String     \u2502 Int64    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 fca8   \u2502 1          \u2502 4        \u2502\n\u2502 2   \u2502 fca8   \u2502 2          \u2502 6        \u2502\n\u2502 3   \u2502 fca8   \u2502 3          \u2502 7        \u2502\n\u2502 4   \u2502 fca8   \u2502 4          \u2502 10       \u2502\n\u2502 5   \u2502 fca8   \u2502 5          \u2502 8        \u2502\n\u2502 6   \u2502 fca8   \u2502 6          \u2502 7        \u2502\n\u22ee\n\u2502 147 \u2502 fca37  \u2502 11         \u2502 7        \u2502\n\u2502 148 \u2502 fca37  \u2502 12         \u2502 7        \u2502\n\u2502 149 \u2502 fca37  \u2502 13         \u2502 5        \u2502\n\u2502 150 \u2502 fca37  \u2502 14         \u2502 3        \u2502\n\u2502 151 \u2502 fca37  \u2502 15         \u2502 4        \u2502\n\u2502 152 \u2502 fca37  \u2502 16         \u2502 3        \u2502\n\u2502 153 \u2502 fca37  \u2502 17         \u2502 3        \u2502\n")))),Object(c.b)("h2",{id:"average-number-of-alleles"},"Average Number of Alleles"),Object(c.b)("p",null,"Similar to richness, if you wanted to know the average number of alleles per locus, use ",Object(c.b)("inlineCode",{parentName:"p"},"allele_avg()"),". Use ",Object(c.b)("inlineCode",{parentName:"p"},"rounding = false")," if you don't want the answer rounded to 4 decimal places."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> allele_avg(nancycats())\n(mean = 12.0, stdev = 0.2668)\n\njulia> allele_avg(nancycats(), rounding = false)\n(mean = 12.0, stdev = 0.2667968432263687)\n")),Object(c.b)("h2",{id:"summary-statistics"},"Summary Statistics"),Object(c.b)("p",null,"Population genetics famously includes all manner of coefficients with which to summarize data. Use ",Object(c.b)("inlineCode",{parentName:"p"},"summary()")," to view FST, DST, HT, etc. (like ",Object(c.b)("inlineCode",{parentName:"p"},"Hierfstat::basic.stats"),"). "),Object(c.b)(r.a,{block:!0,defaultValue:"g",values:[{label:"global",value:"g"},{label:"by locus",value:"l"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"g",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),"julia> summary(nancycats())\n\n1\xd710 DataFrame\n\u2502 Row \u2502 Het_obs \u2502 HS      \u2502 HT      \u2502 DST     \u2502 HT\u2032     \u2502 DST\u2032    \u2502 FST     \u2502 FST\u2032    \u2502 FIS     \u2502 DEST    \u2502\n\u2502     \u2502 Float64 \u2502 Float64 \u2502 Float64 \u2502 Float64 \u2502 Float64 \u2502 Float64 \u2502 Float64 \u2502 Float64 \u2502 Float64 \u2502 Float64 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 0.6299  \u2502 0.7083  \u2502 0.7717  \u2502 0.0634  \u2502 0.7757  \u2502 0.0674  \u2502 0.0821  \u2502 0.0869  \u2502 0.1108  \u2502 0.231   \u2502\n"))),Object(c.b)(l.a,{value:"l",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-julia"}),'julia> summary(nancycats(), by = "locus")\n9\xd711 DataFrame\n\u2502 Row \u2502 locus  \u2502 Het_obs \u2502 HS      \u2502 HT      \u2502 DST     \u2502 HT\u2032     \u2502 DST\u2032    \u2502 FST     \u2502 FST\u2032    \u2502 FIS     \u2502 DEST    \u2502\n\u2502     \u2502 String \u2502 Float64 \u2502 Float64 \u2502 Float64 \u2502 Float64 \u2502 Float64 \u2502 Float64 \u2502 Float64 \u2502 Float64 \u2502 Float64 \u2502 Float64 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1   \u2502 fca8   \u2502 0.667   \u2502 0.779   \u2502 0.8619  \u2502 0.0829  \u2502 0.8671  \u2502 0.0881  \u2502 0.0962  \u2502 0.1016  \u2502 0.1438  \u2502 0.3987  \u2502\n\u2502 2   \u2502 fca23  \u2502 0.6838  \u2502 0.7439  \u2502 0.7994  \u2502 0.0555  \u2502 0.8029  \u2502 0.0589  \u2502 0.0694  \u2502 0.0734  \u2502 0.0809  \u2502 0.2302  \u2502\n\u2502 3   \u2502 fca43  \u2502 0.6814  \u2502 0.7442  \u2502 0.7937  \u2502 0.0495  \u2502 0.7968  \u2502 0.0526  \u2502 0.0623  \u2502 0.066   \u2502 0.0844  \u2502 0.2054  \u2502\n\u2502 4   \u2502 fca45  \u2502 0.71    \u2502 0.7085  \u2502 0.7642  \u2502 0.0557  \u2502 0.7679  \u2502 0.0594  \u2502 0.0729  \u2502 0.0774  \u2502 -0.0021 \u2502 0.2039  \u2502\n\u2502 5   \u2502 fca77  \u2502 0.6295  \u2502 0.7828  \u2502 0.8659  \u2502 0.0831  \u2502 0.8711  \u2502 0.0883  \u2502 0.096   \u2502 0.1014  \u2502 0.1958  \u2502 0.4067  \u2502\n\u2502 6   \u2502 fca78  \u2502 0.5773  \u2502 0.6339  \u2502 0.6773  \u2502 0.0434  \u2502 0.6801  \u2502 0.0462  \u2502 0.0641  \u2502 0.0679  \u2502 0.0893  \u2502 0.1261  \u2502\n\u2502 7   \u2502 fca90  \u2502 0.6454  \u2502 0.7408  \u2502 0.8144  \u2502 0.0736  \u2502 0.819   \u2502 0.0782  \u2502 0.0904  \u2502 0.0955  \u2502 0.1287  \u2502 0.3017  \u2502\n\u2502 8   \u2502 fca96  \u2502 0.6259  \u2502 0.6747  \u2502 0.7657  \u2502 0.091   \u2502 0.7714  \u2502 0.0967  \u2502 0.1189  \u2502 0.1254  \u2502 0.0723  \u2502 0.2973  \u2502\n\u2502 9   \u2502 fca37  \u2502 0.4485  \u2502 0.5671  \u2502 0.6027  \u2502 0.0356  \u2502 0.6049  \u2502 0.0379  \u2502 0.0591  \u2502 0.0626  \u2502 0.2091  \u2502 0.0874  \u2502\n')))),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"prime symbol")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The column names above use the unicode prime symbol ",Object(c.b)("inlineCode",{parentName:"p"},"\u2032"),' to better reflect the actual coefficient ("FST prime" etc.). To print that character, press ',Object(c.b)("inlineCode",{parentName:"p"},"\\prime<TAB>"),", which reads \"backslash, the word 'prime', and the TAB button\"."))))}p.isMDXComponent=!0},138:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return d}));var n=t(0),i=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),b=function(e){var a=i.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=b(e.components);return i.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},m=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=b(t),m=n,d=u["".concat(r,".").concat(m)]||u[m]||p[m]||c;return t?i.a.createElement(d,l(l({ref:a},s),{},{components:t})):i.a.createElement(d,l({ref:a},s))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,r=new Array(c);r[0]=m;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var s=2;s<c;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},139:function(e,a,t){"use strict";function n(e){var a,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(i&&(i+=" "),i+=t);else for(a in e)e[a]&&(i&&(i+=" "),i+=a);return i}a.a=function(){for(var e,a,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(i&&(i+=" "),i+=a);return i}},140:function(e,a,t){"use strict";var n=t(0),i=t(141);a.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},141:function(e,a,t){"use strict";var n=t(0),i=Object(n.createContext)(void 0);a.a=i},142:function(e,a,t){"use strict";var n=t(0),i=t.n(n),c=t(140),r=t(139),l=t(46),o=t.n(l),s=37,b=39;a.a=function(e){var a=e.block,t=e.children,l=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=Object(c.a)(),j=d.tabGroupChoices,f=d.setTabGroupChoices,O=Object(n.useState)(l),g=O[0],v=O[1],y=Object(n.useState)(!1),N=y[0],h=y[1];if(null!=p){var w=j[p];null!=w&&w!==g&&u.some((function(e){return e.value===w}))&&v(w)}var T=function(e){v(e),null!=p&&f(p,e)},_=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},x=function(){h(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",x),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",x)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},m)},u.map((function(e){var a=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===a,className:Object(r.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===a}),style:N?{}:{outline:"none"},key:a,ref:function(e){return _.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case b:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case s:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(_,e.target,e),C(e)},onFocus:function(){return T(a)},onClick:function(){T(a),h(!1)},onPointerDown:function(){return h(!1)}},t)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===g}))[0]))}},143:function(e,a,t){"use strict";var n=t(0),i=t.n(n);a.a=function(e){return i.a.createElement("div",null,e.children)}}}]);