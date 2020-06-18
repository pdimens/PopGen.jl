---
id: delimited
title: Delimited format
sidebar_label: Delimited format
---

## Import a delimited file as `PopData`

```julia
delimited(infile::String; kwargs...)
```

### Arguments

- `infile::String` : path to the input file, in quotes

### Keyword Arguments

- `delim::String` : delimiter characters. The default (`"auto"`) uses auto-parsing of `CSV.File`

- `digits::Integer` : the number of digits used to denote an allele (default: `3`)
- `diploid::Bool`  : whether samples are diploid for parsing optimizations (default: `true`)
- `silent::Bool` : whether to print file information during import (default: `true`)

### Example
```
lizardsCA = delimited("CA_lizards.csv", digits = 3);
```
:::caution Windows users
make sure to change your backslashes `\` to forward slashes `/` 
:::

### Format

First row is column names, and they occur in this order:
1. name
2. population
3. longitude
4. latitude
5. locus_1_name
6. locus_2_name
7. etc...

**Formatting example:**
```
name,population,long,lat,Locus1,Locus2,Locus3   \n
sierra_01,mountain,11.11,-22.22,001001,-9,001001   \n
sierra_02,mountain,11.12,-22.21,001001,001001,001002   \n
snbarb_01,coast,,,001001,001001,001002 \n
snbarb_02,coast,11.14,-22.24,001001,001001,001001 \n
snbarb_03,coast,11.15,,001002,001001,001001 \n
```

### Missing data
#### Genotypes
Missing genotypes can be formatted as all-zeros (ex.`000000`) or negative-nine `-9`

#### Location data
If location data is missing for a sample (which is ok!), make sure the value is blank, otherwise there will be transcription errors! (example at line 3 in the example above)

:::info alias
You can also use the command `csv()` synonymously with `delimited()`. 
:::

## Writing to a delimited file
All file writing options can be performed using `write_to()`, which calls `popdata2delimited` when writing to a delimited file.
```julia
popdata2delimited(data::PopData; filename::String, delim::String = ",", digits::Integer = 3, format::String = "wide")
```
Write PopData to a text-delimited file. 
### Keyword Arguments
- `filename`: a `String` of the output filename
- `digits` : an `Integer` indicating how many digits to format each allele as (e.g. `(1, 2)` => `001002` for `digits = 3`)
- `format` : a `String` indicating whether to output in`"wide"` or `"long"` (aka `"tidy"`) format 
  - `wide` : the standard format CSV for importing into PopGen.jl
  - `long` : the `loci` table with `longitude` and `latitude` columns added
- `delim` : the `String` delimiter to use for writing the file. 


### Example
```julia
cats = nancycats();
fewer_cats = omit_samples(cats, samples(cats)[1:10]);
popdata2delimited(fewer_cats, filename = "filtered_nancycats.gen", digits = 3, format = "wide", delim = " ")
```

## Acknowledgements
Thanks to the efforts of the [CSV.jl](https://github.com/JuliaData/CSV.jl) team, we are able leverage that package to do much of the heavy lifting within this parser. 