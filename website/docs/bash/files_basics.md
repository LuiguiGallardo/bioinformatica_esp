---
sidebar_position: 6
---

# Manipulación de archivos

## Creación de archivos vacíos con `touch`
El comando `touch` se utiliza para crear un archivo el que estará vacio en contenido. Al momento de crear archivos es importante poner una extencion, si es un archivo de texto podemos agregar .txt, si es un archivo que contendrá secuencias de nucleotidos se puede agregar .fna. Esto nos va a permitir tener una idea de lo que contiene ese archivo sin necesidad de abrirlo:

```bash
touch genomas.txt
```


## Copiar archivos `cp`
Indicamos primero el nombre del archivo y posteriormente la dirección a donde lo queremos copiar.
```bash
cp <archivo> <destino>
```


## Borrar archivos `rm`
Borramos el archivo genes.txt:

```bash
rm genes.txt
```


## Mover archivos `mv`
Movemos el archivo genes.txt afuera de la carpeta

```bash
mv genes.txt ../ 
```

## Renombrar archivos `mv`
Cambiaremos de nombre al archivo proteínas.txt a genes.txt:

```bash
mv proteínas.txt genes.txt
```