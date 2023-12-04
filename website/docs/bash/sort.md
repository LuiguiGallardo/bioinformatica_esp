---
sidebar_position: 16
---

# Comando `sort`
El comando `sort` en sistemas Unix y Linux se utiliza para ordenar líneas de texto en un archivo o desde la entrada estándar.

## Formato básico de `sort`
```bash
sort [opciones] [archivo...]
```

- **`opciones`:** Son modificadores que ajustan el comportamiento de `sort`.
- **`archivo`:** Son los archivos cuyas líneas se ordenarán. Si no se proporcionan, `sort` lee desde la entrada estándar.

## Ordenar líneas en un archivo
```bash
sort archivo.txt
```
Esto ordenará alfabéticamente las líneas de archivo.txt y mostrará el resultado en la salida estándar.

## Ordenar y mostrar líneas únicas
```bash
sort -u archivo.txt
```
Ordena y muestra únicamente las líneas únicas del archivo.txt.

## Ordenar en orden numérico
```bash
sort -n archivo.txt
```
Ordena las líneas numéricamente en lugar de alfabéticamente.

## Ordenar en orden inverso
```bash
sort -r archivo.txt
```
Ordena las líneas en orden inverso (descendente).

## Ordenar campos específicos delimitados por espacios
```bash
sort -k2,2 archivo.txt
```
Ordena las líneas basándose en el segundo campo (delimitado por espacios).

## Ordenar y eliminar duplicados consecutivos
```bash
sort -u archivo.txt
```
Ordena el archivo.txt y elimina líneas duplicadas consecutivas.

## Ordenar archivos y unirlos (`sort` + `join`)
```bash
sort archivo1.txt > archivo1_sorted.txt
sort archivo2.txt > archivo2_sorted.txt
join archivo1_sorted.txt archivo2_sorted.txt
```
Ordena dos archivos y luego los une basándose en las líneas coincidentes.

Estos ejemplos proporcionan una idea de cómo utilizar el comando `sort` para ordenar y manipular líneas de texto. Puedes explorar más opciones y detalles ejecutando `man sort` en la terminal para acceder al manual completo del comando.