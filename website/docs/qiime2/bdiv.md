---
sidebar_position: 9
---

# Diversidad beta

```bash
qiime phylogeny align-to-tree-mafft-fasttree --i-sequences results/05_rep-seqs_filter_chloro.qza --o-alignment results/07_aligned-rep-seqs.qza --o-masked-alignment results/07_masked-aligned-rep-seqs.qza --o-tree results/07_unrooted-tree.qza --o-rooted-tree results/07_rooted-tree.qza --verbose
```

```bash
qiime diversity beta-phylogenetic \
  --i-table results/05_feature-table_filter_chloro.qza \
  --i-phylogeny results/07_rooted-tree.qza \
 --p-metric unweighted_unifrac \
 --o-distance-matrix results/11_unweighted_unifrac_distance_matrix.qza
 
qiime diversity core-metrics-phylogenetic   --i-phylogeny results/07_rooted-tree.qza  --i-table results/05_feature-table_filter_chloro.qza  --m-metadata-file rawdata/metadata.tsv   --output-dir results/13_core-metrics-results --p-sampling-depth 1109
 
 qiime diversity beta-group-significance \
  --i-distance-matrix results/11_unweighted_unifrac_distance_matrix.qza \
  --m-metadata-file rawdata/metadata.tsv \
  --m-metadata-column group \
  --o-visualization results/12_unweighted-unifrac-body-site-significance.qzv \
  --p-pairwise
  
```