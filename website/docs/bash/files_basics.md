---
sidebar_position: 6
---

# Manipulación de archivos

## Creación de archivos vacíos con `touch`
El comando `touch` se emplea para crear un archivo que estará vacío en cuanto a contenido. Al momento de crear archivos, es crucial asignar una extensión. Por ejemplo, si se trata de un archivo de texto, podemos agregar `.txt`; si contendrá secuencias de nucleótidos, podría ser apropiado añadir `.fna`. Esta práctica nos facilita obtener una comprensión preliminar del contenido del archivo sin necesidad de abrirlo.

```bash
touch ejemplo.txt
```

## Copiar archivos `cp`
Primero especificamos el nombre del archivo y luego la ubicación a la que deseamos copiarlo. Por ejemplo:

```bash
# cp <archivo> <destino>
cp ejemplo.txt copia_ejemplo.txt
```


## Borrar archivos `rm`
Borramos el archivo genes.txt:

```bash
rm ejemplo.txt
```

## Mover archivos `mv`
Movemos el archivo genes.txt afuera de la carpeta

```bash
mv ejempl.txt ../ 
```

## Renombrar archivos `mv`
Cambiaremos de nombre al archivo proteínas.txt a genes.txt:

```bash
mv proteínas.txt genes.txt
```