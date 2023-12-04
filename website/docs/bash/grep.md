---
sidebar_position: 14
---

# Comando `grep`

El comando grep es una poderosa herramienta de búsqueda de patrones en archivos o en la salida de otros comandos en sistemas Unix y Linux. Aquí tienes una explicación del comando grep con ejemplos:

## Formato básico de grep:

```bash
grep [opciones] patrón [archivo...]
```

* **opciones:** Son modificadores que ajustan el comportamiento de grep.
* **patrón:** Es la cadena de texto que estás buscando.
* **archivo:** Son los archivos en los que se realizará la búsqueda. Si no se proporcionan, grep lee desde la entrada estándar.


Por ejemplo, para buscar una palabra en un archivo:

```bash
grep "texto" archivo.txt
```
Esto buscará la palabra "texto" en el archivo.txt y mostrará las líneas que la contienen.

Para hacer una búsqueda recursiva en directorios:

```bash
grep -r "patrón" directorio/
```

Busca el patrón de manera recursiva en todos los archivos dentro del directorio y sus subdirectorios.

Para hacer una búsqueda con coincidencia de patrones en mayúsculas/minúsculas:

```bash
grep -i "Texto" archivo.txt
```

Busca "Texto" en el archivo.txt sin importar si las mayúsculas y minúsculas coinciden.

Mostrar número de línea y contexto:

```bash
grep -n -C 2 "patrón" archivo.txt
```

Muestra el número de línea y dos líneas de contexto alrededor del patrón.

Búsqueda inversa (excluir líneas que coinciden):

```bash
grep -v "patrón" archivo.txt
```

Muestra todas las líneas que no contienen el patrón especificado.

Buscar líneas que coincidan con múltiples patrones:

```bash
grep -e "patrón1" -e "patrón2" archivo.txt
```

Busca líneas que contengan cualquiera de los dos patrones especificados.

Estos son solo ejemplos básicos, y grep tiene muchas opciones y funcionalidades adicionales. Puedes consultar la página de manual (`man grep`) para obtener más información sobre las opciones disponibles.