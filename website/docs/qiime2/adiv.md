---
sidebar_position: 8
---

# Diversidad alfa

```bash
qiime phylogeny align-to-tree-mafft-fasttree --i-sequences results/05_rep-seqs_filter_chloro.qza --o-alignment results/07_aligned-rep-seqs.qza --o-masked-alignment results/07_masked-aligned-rep-seqs.qza --o-tree results/07_unrooted-tree.qza --o-rooted-tree results/07_rooted-tree.qza --verbose
```

```bash
qiime diversity alpha-phylogenetic \
  --i-table results/05_feature-table_filter_chloro.qza \
  --i-phylogeny results/07_rooted-tree.qza \
  --p-metric faith_pd \
  --o-alpha-diversity results/08_faith_pd_vector.qza
```

```bash
qiime diversity alpha-group-significance \
  --i-alpha-diversity results/08_faith_pd_vector.qza \
  --m-metadata-file rawdata/metadata.tsv \
  --o-visualization results/09_faith-pd-group-significance.qzv
  
 qiime diversity alpha-rarefaction \
  --i-table results/05_feature-table_filter_chloro.qza \
  --i-phylogeny results/07_rooted-tree.qza \
  --p-max-depth 118 \
  --m-metadata-file results/metadata.tsv \
  --o-visualization rawdata/10_alpha-rarefaction.qzv

```