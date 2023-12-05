---
sidebar_position: 8
---

# Diversidad alfa

La diversidad alfa se refiere a la diversidad dentro de un hábitat o una comunidad en particular. Esta puede ser contrastada entre condiciones, como grupos, hábitats, etc. Se utilizan diferentes métricas para medir la diversidad alfa, como la riqueza de especies (número total de especies presentes), la equidad (cómo están distribuidas las abundancias de las especies), y otros índices más complejos que tienen en cuenta la abundancia relativa y la rareza de las especies. Mientras mayor sea la diversidad alfa, es probable que la comunidad sea más resiliente a cambios ambientales y biológicos.

Antes de obtener la diversidad, alfa o beta, podemos optar por obtener una filogenia con nuestros `ASVs` y que esta filogenia sea considerar para los siguientes análisis. Para crear la filogenía utilizamos el siguiente comando:

```bash
qiime phylogeny align-to-tree-mafft-fasttree --i-sequences results/05_rep-seqs_filter_chloro.qza --o-alignment results/07_aligned-rep-seqs.qza --o-masked-alignment results/07_masked-aligned-rep-seqs.qza --o-tree results/07_unrooted-tree.qza --o-rooted-tree results/07_rooted-tree.qza --verbose
```

Ahora podemos obtener la diversidad alfa con los diferentes índices. Generalmente lo que buscamos visualizar primero es una curva de rarefacción para darnos una idea de la diversidad en las diferentes muestras/grupos:

```bash
 qiime diversity alpha-rarefaction \
  --i-table results/05_feature-table_filter_chloro.qza \
  --i-phylogeny results/07_rooted-tree.qza \
  --p-max-depth 118 \
  --m-metadata-file rawdata/metadata.tsv \
  --o-visualization results/10_alpha-rarefaction.qzv
```

Posteriormente podemos obtener la diversidad con un índice en específico y determinar si hay diferencias significativas entre los grupos:

```bash
qiime diversity alpha-phylogenetic \
  --i-table results/05_feature-table_filter_chloro.qza \
  --i-phylogeny results/07_rooted-tree.qza \
  --p-metric faith_pd \
  --o-alpha-diversity results/08_faith_pd_vector.qza

# Para saber si hay diferencias significativas entre los grupos utilizamos
qiime diversity alpha-group-significance \
  --i-alpha-diversity results/08_faith_pd_vector.qza \
  --m-metadata-file rawdata/metadata.tsv \
  --o-visualization results/09_faith-pd-group-significance.qzv
```

:::info
Existe una ruta más rápida para obtener tanto diversidad alfa como beta en un solo comando. Para nuestro set de datos podemos utilizar el siguiente comando:
```bash
qiime diversity core-metrics-phylogenetic   --i-phylogeny results/07_rooted-tree.qza  --i-table results/05_feature-table_filter_chloro.qza  --m-metadata-file rawdata/metadata.tsv   --output-dir results/13_core-metrics-results --p-sampling-depth 5000
```
:::