---
sidebar_position: 7
---

# Asignación taxonómica

Utilizaremos `sklearn` para realizar la asignación taxonómica, por lo tanto utilizaremos una base de datos preentrenada. La puedes encontrar [aquí](https://docs.qiime2.org/2023.9/data-resources/).

```bash
# Clasificación con sklearn
qiime feature-classifier classify-sklearn --i-classifier /home/luigui/databases/silva-138-99-515-806-nb-classifier.qza --i-reads results/03_rep-seqs.qza  --o-classification results/04_taxonomy_sklearn_assign.qza --p-n-jobs 4

# Obtener artefacto visualizable
qiime metadata tabulate --m-input-file results/04_taxonomy_sklearn_assign.qza --o-visualization results/04_taxonomy_sklearn_assign.qzv
```

Para poder visualizar diferencias signifcativas entre los grupos, podemos crear una serie de barplots con el siguiente comando:

```bash
# Obtener barplot
qiime taxa barplot --i-table results/03_feature-table.qza --i-taxonomy results/04_taxonomy_sklearn_assign.qza --m-metadata-file rawdata/metadata.tsv --o-visualization results/04_taxonomy_sklearn_barplot.qzv
```

Se puede exportar una tabla con la taxonomía para poder usarla fuera del *pipeline* de `qiime`.

```bash
qiime tools export --input-path results/04_taxonomy_sklearn_assign.qza --output-path results/05_taxonomy_exported
```

Podemos excluir grupos considerados como contaminantes, en este caso `Chloroplast`, para los siguientes análisis:

```bash
# Filtrar el cloroplasto
qiime taxa filter-table --i-table results/03_feature-table.qza --i-taxonomy results/04_taxonomy_sklearn_assign.qza  --p-exclude Chloroplast --o-filtered-table results/05_feature-table_filter_chloro.qza

qiime feature-table filter-seqs --i-data results/03_rep-seqs.qza --i-table results/05_feature-table_filter_chloro.qza --o-filtered-data results/05_rep-seqs_filter_chloro.qza
```

Para obtener la clasificación estratificada por niveles, utilizamos los siguientes comandos:

```bash
# Colapsar tabla por taxonomía con 7 niveles taxonómicos
qiime taxa collapse --i-table results/05_feature-table_filter_chloro.qza --i-taxonomy results/04_taxonomy_sklearn_assign.qza --p-level 7 --o-collapsed-table results/06_filter_table_collapse_sp.qza
```

:::info
También puedes hacer la prueba haciendo la asignación taxonómica con `blast` o `vsearch`. Consulta la ayuda para que veas como modificar el comando en este caso.
:::