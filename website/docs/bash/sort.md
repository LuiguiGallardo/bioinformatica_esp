---
sidebar_position: 15
---

# Comando `sort`

Para la manipulación de contenido de archivos es conveniente poder ordenar los datos de acuerdo a nuestros objetivos. El comando sort ordena el contenido de un archivo por el “carácter inicial de las líneas o columnas”. Las opciones más utilizadas son clasificación “alfanumérica”, por “numeración humana” y el inverso de estas.es de utilidad en los siguientes ejemplos:

Ordenar las líneas en base a la columna con el tipo de gen

```bash
sort -k 3 -d Ca_Mycoplasma_liparidae_GCA_009884515.1.gff 
```

Ordenar las líneas de numeración de la posición de los genes en el genoma

```bash
sort -k 4 -h Ca_Mycoplasma_liparidae_GCA_009884515.1.gff  
```