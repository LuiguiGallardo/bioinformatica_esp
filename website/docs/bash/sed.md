---
sidebar_position: 14
---

# Comando `sed`

El comando `sed` se usa principalmente en remplazo de texto por otro dentro en un archivo, sin embargo también nos permite borrar o imprimir lineas especificas. `sed` es una abreviatura de stream editor.

Substitución de la palabra naranja por Orange

```bash
sed 's/naranja/Orange/' frutas.txt    
```

Impresión de la linea número 3

```bash
sed -n '3p' frutas.txt  
```

Borra la linea número 2

```bash
sed  '2d' frutas.txt    
```
El amperson (&), almacena el texto a encontrar (Banana) y lo complementa con el  nuevo texto "_platano"

```bash
sed  's/Banana/&_platano/' frutas.txt 
```
