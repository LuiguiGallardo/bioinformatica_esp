---
sidebar_position: 4
---

# Descarga de documentos

- [ ] Crea una liga simbólica a los datos, copia el archivo de metadata y los scripts.

```bash
# Liga simbólica
ln -s /botete/diana/Hackeando_las_comunidades_microbianas_v1/02.Amplicones_16S_Qiime2/data/*.gz data/
# copiar el metadata
cp /botete/diana/Hackeando_las_comunidades_microbianas_v1/02.Amplicones_16S_Qiime2/data/metadata.tsv data/
# copiar los scripts
cp /botete/diana/Hackeando_las_comunidades_microbianas_v1/02.Amplicones_16S_Qiime2/src/* src/
# Copiar la base de datos
cp /botete/diana/Hackeando_las_comunidades_microbianas_v1/02.Amplicones_16S_Qiime2/data/*.qza data/

```
## Crear el archivo manifest

Ya que copiaste los archivos necesarios, lista el contenido de tus directorio `data` , veamos que contiene el archivo `metadata.tsv`

Recordemos que Qiime2 requiere de un archivo `manifest` que contenga la ubicación e información de los archivos `fastq`. Así que ejecuta el `script 02` para crear tu archivo manifest:

```bash
bash src/02.create_manifest.sh
```

- [ ] Observa que contiene el archivo `manifest.csv`

Ahora si tenemos todos los datos de entrada para comenzar con el *pipeline*.

## Importar los datos

   Observa el contenido de `03.import_data.sh` y ve a la ayuda de qiime para conocer cada uno de los *plugins* que estamos poniendo. 

   Para conocer más el tipo de datos que se pueden importar, puedes visitar [esta página.](https://docs.qiime2.org/2023.7/tutorials/importing/)

```bash
bash src/03.import_data.sh
```

- [ ] Veamos como se ven las secuencias que estamos analizando. Puedes descargar el archivo `results/01.demux.qzv` que acabas de generar o puedes descargarlo desde este repositorio y verlo en [QIIME2view](https://view.qiime2.org/).