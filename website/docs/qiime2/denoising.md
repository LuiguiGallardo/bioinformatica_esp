---
sidebar_position: 6
---

# Denoising

Antes de comenzar el *denoising* , veamos la ayuda.

```bash
qiime dada2 denoise-paired --i-demultiplexed-seqs --help
```

Como habrás notado, es necesario tomar decisiones basadas en la calidad de nuestras lecturas para definir los valores de truncado. Es muy importante dener en cuenta la longitud de las lecturas y del amplicón deseado para tener una idea de la longitud del sobrelape que se obtendría. 

```bash
(longitud lectura Fordware) + (longitud lectura Reverse) − (longitud del amplicon) − 
(longitud lectura Fordware − --p-trunc-len-f value) − (longitud lectura Reverse − --p-trunc-len-r value) 
= sobrelape
```

En esta prueba consideraremos los siguientes parámetros:

```bash
qiime dada2 denoise-paired --i-demultiplexed-seqs results/02_demux_clean_adapter.qza --p-trunc-len-f 140 --p-trunc-len-r 140 --o-representative-sequences results/03_rep-seqs.qza --o-table results/03_feature-table.qza --o-denoising-stats results/03_denoising-stats.qza --p-n-threads 4
```

Para conocer la información del `denoising` podemos correr el siguiente comando:

```bash
qiime tools export --input-path results/03_denoising-stats.qza --output-path results/03_denoising-stats
```