---
sidebar_position: 12
---

# Comando `cut`

Permite extraer carácteres, columnas y campos separados por un delimitador, en todas las líneas del contenido del archivo. Se utiliza frecuentemente para extraer columnas que contienen información relevante, por ejemplo, la columna que contiene el nombre del gen, o su identificador en el NCBI.

Cuando se desea extraer los carácteres de una posición pueden usarse las opciones `-b` o `-c`. Ambas opciones consideran los espacios o tabuladores como un carácter.

Imprimir los caracteres del 1 al 50

```bash
cut -c 1-50 genes_s_typhimurium.fa
```

Imprimir los bytes del 30-50

```bash
cut -b 30-50 genes_s_typhimurium.fa  
```

Los archivos de tablas generalmente se encuentran delimitados por un carácter especial, por ejemplo , o tabulador. Cuando se desea extraer campos separados por esos caracteres, se usa la opción `-f`. Esta opción permite extraer campos que no se encuentran en la misma posición de carácter en todas las lineas, pero sí en el mismo número de delimitador.

Extraer las columnas 3 y 7

```bash
cut -f1,7 genes_s_typhimurium.gff  
```

Si el delimitador es diferente a tabulador se aclara con la opción `-d`, por ejemplo ","

```bash
cut -d "," -f3,7 genes_s_typhimurium.csv 
```