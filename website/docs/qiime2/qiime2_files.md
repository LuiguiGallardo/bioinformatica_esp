---
sidebar_position: 4
---

# Documentos iniciales

## Datos crudos
Crea una liga simbólica (`ln -s`) a los datos crudos, `metadata.tsv` y `manifest.csv`.

```bash
ln -s /home/luigui/rawdata . 
```

Ya que copiaste los archivos necesarios, lista el contenido de tus directorio `rawdata` .

## Metadata
Veamos que contiene el archivo `metadata.tsv`

```bash
cat rawdata/metadata.tsv
```

| sample-id | group      |
| --------- | ---------- |
| sample_1  | probiotics |
| sample_2  | probiotics |
| sample_3  | probiotics |
| sample_4  | control    |
| sample_5  | control    |
| sample_6  | control    |

## Archivo `manifest`
Qiime2 requiere de un archivo `manifest` que contenga la ubicación e información de los archivos `fastq`. Para visualizar el archivo `manifest` utiliza la siguiente línea de comando:

```bash
cat rawdata/manifest.tsv
```

| sample-id | absolute-filepath                         | direction |
| --------- | ----------------------------------------- | --------- |
| sample_1  | /home/luigui/rawdata/sample_1_R1.fastq.gz | forward   |
| sample_1  | /home/luigui/rawdata/sample_1_R2.fastq.gz | reverse   |
| sample_2  | /home/luigui/rawdata/sample_2_R1.fastq.gz | forward   |
| sample_2  | /home/luigui/rawdata/sample_2_R2.fastq.gz | reverse   |
| sample_3  | /home/luigui/rawdata/sample_3_R1.fastq.gz | forward   |
| sample_3  | /home/luigui/rawdata/sample_3_R2.fastq.gz | reverse   |
| sample_4  | /home/luigui/rawdata/sample_4_R1.fastq.gz | forward   |
| sample_4  | /home/luigui/rawdata/sample_4_R2.fastq.gz | reverse   |
| sample_5  | /home/luigui/rawdata/sample_5_R1.fastq.gz | forward   |
| sample_5  | /home/luigui/rawdata/sample_5_R2.fastq.gz | reverse   |
| sample_6  | /home/luigui/rawdata/sample_6_R1.fastq.gz | forward   |
| sample_6  | /home/luigui/rawdata/sample_6_R2.fastq.gz | reverse   |

Ahora si tenemos todos los datos de entrada para comenzar con el *pipeline*.

## Visualizar calidad de los archivos
Una de las herramientas más utilizadas para visualizar la calidad de los archivos `fastq` es `fastqc`. Para usar este comando en nuestros datos podemos utilizar los siguientes comandos:

```bash
# Para crear el directorio donde depositar los resultados
mkdir results/00_fastqc

# Para correr fastqc en todos nuestros archivos
for s in rawdata/*gz ; do fastqc $s -o results/00_fastqc ; done
```

## Importar los datos
Para importar los datos utiliza los siguientes comandos:

```bash
mkdir results

qiime tools import --type 'SampleData[PairedEndSequencesWithQuality]' --input-format 'PairedEndFastqManifestPhred33' --input-path rawdata/manifest.csv  --output-path results/01_demux.qza 
```

Veamos como se ven las secuencias que estamos analizando. Puedes descargar el archivo `results/01.demux.qzv` que acabas de generar o puedes descargarlo desde este repositorio y verlo en [QIIME2view](https://view.qiime2.org/).

:::info
Recuerda que cada comando tiene parámetros que hay que ajustar al set de datos en cuestión. Para conocer más el tipo de datos que se pueden importar, puedes visitar [esta página.](https://docs.qiime2.org/2023.7/tutorials/importing/)
:::