---
sidebar_position: 5
---

# Remoción de adaptadores

Como no hemos hecho ningún preprocesamiento a los datos y sabemos que nuestras secuencias tienen adaptadores, los removeremos con `cutadapt` dentro de QIIME2.

¿Qué tanto podemos hacer con este comando?
```bash
qiime cutadapt trim-paired --help
```

Ahora si removamos los adaptadores, puedes modificar, agregar parámetros al script para mejorar.

```bash
# Quitar los adaptadores
qiime cutadapt trim-paired --i-demultiplexed-sequences results/01_demux.qza --p-front-f CTCCTACGGGAGGCAGCAG --p-front-r CTTGTGCGGGCCCCCGTCAATTC --o-trimmed-sequences results/02_demux_clean_adapter.qza

# Obtener archivo visualizable
qiime demux summarize --i-data results/02_demux_clean_adapter.qza --o-visualization results/02_demux_clean_adapter.qzv
```

Observemos el archivo `02_demux_clean_adapter.qzv` , ¿qué ocurrió con la calidad?
