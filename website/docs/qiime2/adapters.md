---
sidebar_position: 5
---

# Remoción de adaptadores

   Como no hemos hecho ningún preprocesamiento a los datos y sabemos que nuestras secuencias tienen adaptadores, los removeremos con `cutadapt` dentro de QIIME2.

   - [ ] Primero observa la ayuda de este paso de limpieza.

     ```bash
     qiime cutadapt trim-paired --help
     ```

   - [ ] Ahora si removamos los adaptadores, puedes modificar, agregar parámetros al script para mejorar.

   ```bash
#Trim adapters
qiime cutadapt trim-paired --i-demultiplexed-sequences results/01.demux.qza\
 --p-front-f CTCCTACGGGAGGCAGCAG --p-front-r CTTGTGCGGGCCCCCGTCAATTC\
 --o-trimmed-sequences results/02.demux_clean_adapter.qza

#Get visualization file
qiime demux summarize --i-data results/02.demux_clean_adapter.qza --o-visualization results/0>

   ```

   Observemos el archivo `02.demux_clean_adapter.qzv` , ¿qué ocurrió con la calidad?

### 3. Eliminación de ruido y agrupamiento con Dada2

   Antes de comenzar el *denoising* , veamos la ayuda.

   ```bash
   qiime dada2 denoise-paired --i-demultiplexed-seqs --help
   ```

   Como habrás notado, es necesario tomar decisiones basadas en la calidad de nuestras lecturas para definir los valores de truncado.
   Es muy importante dener en cuenta la longitud de las lecturas y del amplicón deseado para tener una idea de la longitud del sobrelape que se obtendría. 

   
```bash
(longitud lectura Fordware) + (longitud lectura Reverse) − (longitud del amplicon) − 
(longitud lectura Fordware − --p-trunc-len-f value) − (longitud lectura Reverse − --p-trunc-len-r value) 
= sobrelape
```


   - [ ] Edita el script `src/05.denoising.sh` y modifica los valores de truncado del *denoising* y/o los que consideres que pueden mejorar los resultados.

   ```bash
   bash src/05.denoising.sh
   ```

   - [ ] **Opcional**: Si realizaste más de una versión extra a las 3 versiones propuestas, puedes obtener sus estadisticos con el siguiente script.

   ```bash
   #bash src/06.get_denoising_info.sh
   ```

   - [ ] O puedes obtener los estadísticos de la versión 4 que creaste con la siguiente línea

   ```bash
   qiime tools export --input-path results/03.denoising-stats_v4.qza --output-path results/03.denoising-stats_v4
   ```

   - [ ] Observa  los estadísticos de los resultados que obtuviste y compáralos con los de las versiones v1-v3, para ello, copia los resultados de las versiones 1 a 3 y de la nueva versión 4 que ya hiciste, a un nuevo directorio de estadísticos de las versiones de denoising.

   - [ ] Vamos a compararlos

   ```bash
  head results/03.denoising-stats_v*/stats.tsv
   ```

   Antes de conocer el resultado que obtuviste, al comparar las tres versiones, seleccionamos la v3 por ser con la que se recuperó un mayor número de ASVs. Así que en adelante trabajaremos con esta versión.
