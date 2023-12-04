---
sidebar_position: 8
---

# Manipulación de directorios

## Creación de directorios `mkdir`
El comando `mkdir` cuyo significado es “make directory” nos permite crear un directorio. Por ejemplo, para poder crear un directorio llamado prueba podemos utilizar:

```bash
mkdir prueba
```

También funciona para dos directorios al mismo tiempo:

```bash
mkdir prueba_2 prueba_3
```

## Crear un directorio dentro de otro
Creamos el directorio `temporal` dentro del directorio genoma:

```bash
mkdir -p prueba/temporal
```

## Cambiar de directorio con `cd` 
Para acceder a un directorio utilizamos el comando cd seguido del nombre del directorio. Para salir de un directorio utilizamos `cd ..` lo que nos lleva al directorio anterior

Entramos al directorio `prueba`

```bash
cd prueba/
```

Si estamos dentro de `prueba`, lo siguiente nos llevará un directorio atrás.

```bash
cd ..
```

También podemos movernos de un directorio a otro usando la ruta absoluta o relativa:

```bash
# Con ruta absoluta
cd /mnt/luigui

# Con ruta relativa
cd ../
cd luigui/
```

## Copiar directorios `cp -r`
Al tratarse de un directorio agregamos el argumento `-r`:

```bash
# cp -r <directorio> <destino>
cp -r luigui Desktop/
```

## Borrar directorios `rm -r`
Al igual que con archivos, para borrar un directorio podemos utilizar el comando `rm` agregando `-r` para indicar que es un directorio. Por ejemplo, podemos borrar el archivo Borramos el directorio `temporal`:

```bash
rm -r temporal
```

## Mover directorios `mv`
Renombrar el directorio genoma a genomas:

```bash
mv prueba final 
```

## Listar contenido de un directorio `ls`
Si estamos dentro de un directorio y queremos ver su contenido, utilizamos el comando `ls`. Algunas de sus opciones de este comando son `-l`, y `-a`. Estas opciones acompañan al comando:

Nos da un listado del archivo más otras características entre ellas nombre del usuario que creó el  archivo, fecha, tamaño entre otros:

```bash
ls -l
```

Ordena los archivos por tiempo de modificación:

```bash
ls -t
```  

Muestra todos los archivos incluso los ocultos:

```bash
ls -a
```