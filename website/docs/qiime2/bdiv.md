---
sidebar_position: 9
---

# Diversidad beta

La diversidad beta se refiere a la variabilidad en composición de especies entre diferentes hábitats. Se utiliza para cuantificar la heterogeneidad o similitud biológica entre diferentes comunidades o muestras. Los métodos de análisis de diversidad beta pueden incluir el cálculo de índices de disimilitud, como el índice de Jaccard o el índice de Bray-Curtis, y la representación gráfica de relaciones entre muestras mediante análisis de coordenadas principales (PCoA) o análisis de clasificación. La diversidad beta complementa la diversidad alfa (diversidad dentro de una comunidad) proporcionando información sobre cómo las comunidades biológicas difieren entre sí en diferentes ubicaciones o condiciones.

Antes de obtener la diversidad, alfa o beta, podemos optar por obtener una filogenia con nuestros `ASVs` y que esta filogenia sea considerar para los siguientes análisis. Si ya obtuviste la filogenía en la diversidad alfa, no es necesario que la vuelvas a obtener. Si no cuentas con ella puedes crearla con el siguiente comando:

```bash
qiime phylogeny align-to-tree-mafft-fasttree --i-sequences results/05_rep-seqs_filter_chloro.qza --o-alignment results/07_aligned-rep-seqs.qza --o-masked-alignment results/07_masked-aligned-rep-seqs.qza --o-tree results/07_unrooted-tree.qza --o-rooted-tree results/07_rooted-tree.qza --verbose
```

Ahora obtenemos la diversidad beta utilizando la métrica `Unweighted Unifrac`:

```bash
qiime diversity beta-phylogenetic --i-table results/05_feature-table_filter_chloro.qza --i-phylogeny results/07_rooted-tree.qza --p-metric unweighted_unifrac --o-distance-matrix results/11_unweighted_unifrac_distance_matrix.qza

# Para saber si hay diferencias significativas entre los grupos utilizamos
qiime diversity beta-group-significance --i-distance-matrix results/11_unweighted_unifrac_distance_matrix.qza --m-metadata-file rawdata/metadata.tsv --m-metadata-column group --o-visualization results/12_unweighted-unifrac-body-site-significance.qzv --p-pairwise
```

:::info
Existe una ruta más rápida para obtener tanto diversidad alfa como beta en un solo comando. Para nuestro set de datos podemos utilizar el siguiente comando:
```bash
qiime diversity core-metrics-phylogenetic   --i-phylogeny results/07_rooted-tree.qza  --i-table results/05_feature-table_filter_chloro.qza  --m-metadata-file rawdata/metadata.tsv   --output-dir results/13_core-metrics-results --p-sampling-depth 5000
```
:::