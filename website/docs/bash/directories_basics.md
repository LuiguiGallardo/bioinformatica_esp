---
sidebar_position: 7
---

# Manipulación de directorios

## Creación de directorios `mkdir`
El comando `mkdir` cuyo significado es “make directory” nos permite crear un directorio

Creamos un directorio llamado prueba:

```bash
mkdir prueba
```

Creamos dos directorios al mismo tiempo:

```bash
mkdir secuencias genomas
```

## Crear un directorio dentro de otro
Creamos el directorio bacteria dentro del directorio genoma:

```bash
mkdir -p genoma/bacteria
```

## Cambiar de directorio con `cd` 
Para acceder a un directorio utilizamos el comando cd seguido del nombre del directorio. Para salir de un directorio utilizamos `cd ..` lo que nos lleva al directorio anterior

Entramos al directorio `genoma`

```bash
cd genoma/
```

Si estamos dentro de `genoma`, lo siguiente nos llevará un directorio atrás.

```bash
cd ..
```

También podemos movernos de un directorio a otro usando la ruta absoluta o relativa:

```bash
cd /mnt/luigui
```

## Copiar directorios `cp -r`
Al tratarse de un directorio agregamos el argumento -r:

```bash
cp -r <directorio destino>
```

## Borrar directorios `rm -r`
Borramos el directorio bacteria:

```bash
rm -r bacteria
```

## Mover directorios `mv`
Renombrar el directorio genoma a genomas:

```bash
mv genoma genomas
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