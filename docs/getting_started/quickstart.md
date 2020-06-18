---
id: quickstart
title: Quick Start
sidebar_label: Quick Start
---
## 1. Install PopGen
Invoke the package manager with `]` in the REPL and use

```julia
add "https://github.com/pdimens/PopGen.jl"
```

![install](/PopGen.jl/img/install_repl.gif)



## 2. Invoke the package

Simply run:

```julia
julia> using PopGen
```



## 3. Start playing around

To help get started, you can either call `?PopGen` or `PopGen.quickstart()` and be greeted with some information to help you get started:

```
julia> PopGen.quickstart()

        Quickstart for PopGen

Documentation: https://pdimens.github.io/PopGen.jl/
Motivational(?) quote: "I am so clever that sometimes I don’t understand a single word of what I am saying." Oscar Wilde

A few things things you can do to get started:

Load in data

- read_from(filename; kwargs...)
- genepop(infile; kwargs...)  or similar file-specific importer
- use available gulfsharks() or nancycats() datasets

Explore PopData

- populations(PopData) to view population information
- loci(PopData) to view locus names
- samples(PopData) to view sample names
- missing(PopData, by = ...) to view missing information

Manipulate PopData

- populations!(PopData, ...) to rename populations
- locations!(PopData, ...) to add geographical coordinates
- exclude!(PopData, kwargs...) to selectively remove data

Analyses

- richness(PopData) to calculate allelic richness
- allele_avg(PopData) to calculate average # of alleles
- summary(PopData) to calculate F-statistics, heterozygosity, etc.
- hwe_test(PopData) to test for Hardy-Weinberg Equilibrium
```
