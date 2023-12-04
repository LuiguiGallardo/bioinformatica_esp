---
sidebar_position: 13
---

# Comando `cut`
Su funcionalidad principal es recortar y mostrar partes seleccionadas del contenido de un archivo o de la salida de otros comandos, utilizando delimitadores o posiciones específicas. `cut` es útil para manipular y trabajar con datos tabulares o estructurados, donde es necesario extraer información específica.

Cuando se desea extraer los carácteres de una posición pueden usarse las opciones `-b` o `-c`. Ambas opciones consideran los espacios o tabuladores como un carácter.

Imprimir los caracteres del 1 al 50

```bash
cut -c 1-50 archivo.txt
```

Imprimir los bytes del 30-50

```bash
cut -b 30-50 archivo.txt  
```

Los archivos de tablas generalmente se encuentran delimitados por un carácter especial, por ejemplo , o tabulador. Cuando se desea extraer campos separados por esos caracteres, se usa la opción `-f`. Esta opción permite extraer campos que no se encuentran en la misma posición de carácter en todas las lineas, pero sí en el mismo número de delimitador.

Extraer las columnas 3 y 7

```bash
cut -f1,7 archivo.txt  
```

Si el delimitador es diferente a tabulador se aclara con la opción `-d`, por ejemplo ","

```bash
cut -d "," -f3,7 archivo.txt 
```