---
sidebar_position: 17
---

# Redirección de salida y tuberías

## Redirección de Salidas

La redirección de salidas en la terminal de Unix y Linux permite dirigir la salida estándar (stdout) y la salida de errores (stderr) de un comando a un archivo o a otro destino, en lugar de imprimirlo en la pantalla.

### Redirigir la salida estándar a un archivo
```bash
comando > archivo_salida.txt
```
Este comando ejecuta `comando` y guarda su salida estándar en el archivo `archivo_salida.txt`. Si el archivo ya existe, se sobrescribe; si no, se crea.

### Añadir la salida estándar a un archivo (sin sobrescribir)
```bash
comando >> archivo_salida.txt
```
Similar al ejemplo anterior, pero añade la salida al final del archivo en lugar de sobrescribirlo.

### Redirigir la salida de errores a un archivos
```bash
comando 2> archivo_errores.txt
```
Este comando guarda los mensajes de error (stderr) generados por `comando` en el archivo `archivo_errores.txt`.

### Redirigir ambas salidas (stdout y stderr) a un archivo
```bash
comando > archivo_todas_las_salidas.txt 2>&1
```
Este comando redirige tanto la salida estándar como la salida de errores al mismo archivo.

## Uso de Tuberías (Pipes)

Las tuberías (`|`) permiten conectar la salida de un comando directamente como entrada a otro. Esto es útil para combinar múltiples comandos en una única línea. Aquí hay algunos ejemplos:

### Usar una tubería para pasar la salida de un comando como entrada a otro
```bash
comando1 | comando2
```
La salida de `comando1` se utiliza como entrada para `comando2`.

### Contar las líneas de un archivo con `wc`
```bash
cat archivo.txt | wc -l
```
`cat` muestra el contenido del archivo, y `wc -l` cuenta las líneas.

### Filtrar resultados con `grep` y `sort`
```bash
comando | grep "patrón" | sort
```
La salida de `comando` se filtra con `grep` y luego se ordena con `sort`.

### Mostrar procesos con `ps` y buscar un proceso específico con `grep`
```bash
ps aux | grep "nombre_del_proceso"
```
`ps aux` muestra información sobre todos los procesos, y `grep` filtra las líneas que contienen el nombre del proceso deseado.

La combinación de redirección y tuberías proporciona una potente capacidad para manipular y procesar datos en la línea de comandos de Unix y Linux.