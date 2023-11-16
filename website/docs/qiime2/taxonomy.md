---
sidebar_position: 6
---

# Asignación taxonómica

   Utilizaremos `sklearn` para realizar la asignación taxonómica, por lo tanto utilizaremos una base de datos preentrenada. La puedes encontrar [aquí](https://docs.qiime2.org/2022.11/data-resources/).

   Recuerda que puedes modificar el script con la versión que obtuviste o cambiando algún parámetro.
   Prueba haciendo la asignación taxonómica con blast o vsearch. Consulta la ayuda para que veas como modificar el comando en este caso.

   ```bash
   echo "Get classification with sklearn"

qiime feature-classifier classify-sklearn --i-classifier data/silva-138-99-nb-classifier.qza \
--i-reads results/03.rep-seqs_v3.qza  --o-classification results/04.taxonomy_sklearn_assign.qza


echo "Get visual artefact"

qiime metadata tabulate --m-input-file results/04.taxonomy_sklearn_assign.qza --o-visualization results/04.taxonomy_sklearn_assign.qzv


echo "Get barplot"

qiime taxa barplot --i-table results/03.feature-table_v3.qza  --i-taxonomy results/04.taxonomy_sklearn_assign.qza \
 --m-metadata-file data/metadata.tsv --o-visualization results/04.taxonomy_sklearn_barplot.qzv
   ```

## Obtener tablas para analisis posteriores

Observa lo que contienen los scripts `src/08.filter_and_export_table.sh` y `09.phylogeny.sh`, puedes ejecutarlos para obtener tablas y secuencias filtradas de cloroplastos, puedes obtener una filogenia y los archivos necesarios para importarlos a R u otros programas para que proceses tus datos.

Recuerda que en los foros de QIIME también encontrarás formas de hacer análisis de diversidad, abunadancia diferencial, entre otras cosas dentro QIIME2.

## Bases de datos

Si hacemos la asignación taxonómica por `blast` o `vsearch` podemos descargar y usar directamente la base de datos desde [data-resources](https://docs.qiime2.org/2023.2/data-resources/) en QIIME2.

Para `sklearn`, es necesario reparar la base de datos de [Silva](https://www.arb-silva.de/), también se puede hacer con la [GTDB](https://data.gtdb.ecogenomic.org/) o [Greengenes](http://ftp.microbio.me/greengenes_release/2022.10/).

**Tomado de**: https://forum.qiime2.org/t/processing-filtering-and-evaluating-the-silva-database-and-other-reference-sequence-data-with-rescript/15494

```bash
#Dentro del ambiente de qiime
mamba install -c conda-forge -c bioconda -c qiime2 -c 2023.5-tested -c defaults xmltodict 'q2-types-genomics>2023.2' ncbi-datasets-pylib
pip install git+https://github.com/bokulich-lab/RESCRIPt.git

```

Obtener la base de datos

```bash
qiime rescript get-silva-data \
    --p-version '138.1' \
    --p-target 'SSURef_NR99' \
    --o-silva-sequences silva-138.1-ssu-nr99-rna-seqs.qza \
    --o-silva-taxonomy silva-138.1-ssu-nr99-tax.qza
```

Filtrar las secuencias de mala calidad: elimina secuencias que contengan 5 o más bases ambiguas y cualquier homopolímero que tenga 8 o más bases de longitud. 

```bash
qiime rescript cull-seqs --i-sequences silva-138.1-ssu-nr99-rna-seqs.qza --o-clean-sequences silva-138.1-ssu-nr99-seqs-cleaned.qza
```

Filtrar secuencias por longitud y taxonomía.

En lugar de filtrar ciegamente todas las secuencias de referencia por debajo de una determinada longitud, filtraremos diferencialmente según la taxonomía de la secuencia de referencia. La razón: si decidimos eliminar cualquier secuencia por debajo de 1000 o 1200 pb, muchas de las secuencias de referencia asociadas con Archaea (y algunas bacterias) se perderán. Esto aumentará potencialmente la retención de secuencias bacterianas o eucariotas más cortas y de menor calidad. En última instancia, provoca un sesgo indebido en la selección de la base de datos. Por lo tanto, intentaremos mitigar estos problemas filtrando diferencialmente según la longitud. Eliminaremos las secuencias de genes de ARNr que no *cumplan* con los siguientes criterios: Archaea (16S) >= 900 pb, Bacteria (16S) >= 1200 pb y cualquier Eucariota (18S) >= 1400 pb. Consulta la ayuda para obtener más información.

```bash
qiime rescript filter-seqs-length-by-taxon --i-sequences silva-138.1-ssu-nr99-seqs-cleaned.qza --i-taxonomy silva-138.1-ssu-nr99-tax.qza \
    --p-labels Archaea Bacteria Eukaryota \
    --p-min-lens 900 1200 1400 \
    --o-filtered-seqs silva-138.1-ssu-nr99-seqs-filt.qza \
    --o-discarded-seqs silva-138.1-ssu-nr99-seqs-discard.qza
```

Agrupar las secuencias de referencia antes de construir su clasificador, puede hacerlo agregando el `--p-perc-identity`parámetro. Aunque no siempre es necesario, esto es útil por un par de razones prácticas, por ejemplo, para ahorrar memoria y/o requisitos de almacenamiento. En el siguiente ejemplo, construimos una base de datos de secuencias de referencia del 97% con una taxonomía de consenso calculada 'lca'. 

```bash
qiime rescript dereplicate \
    --i-sequences silva-138.1-ssu-nr99-seqs-filt.qza \
    --i-taxa silva-138.1-ssu-nr99-tax.qza \
    --p-perc-identity 0.97 \
    --p-mode 'lca' \
    --o-dereplicated-sequences silva-138.1-ssu-c97-seqs-derep-lca.qza \
    --o-dereplicated-taxa silva-138.1-ssu-c97-tax-derep-lca.qza
```