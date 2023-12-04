---
sidebar_position: 9
---

# Expresiones regulares y comodines

Las expresiones regulares (**regex**) en Bash son patrones de búsqueda utilizados para encontrar y manipular cadenas de texto de manera eficiente. Aquí hay una breve introducción junto con algunos ejemplos básicos:

## Búsqueda simple
Puedes utilizar expresiones regulares para buscar patrones específicos en texto. Por ejemplo, para encontrar todas las líneas que contienen la palabra "bash" en un archivo, puedes usar:

```bash
grep 'bash' archivo.txt
```

## Comodines básicos
Los comodines `''` y `.` son comunes en expresiones regulares. `''` representa cero o más ocurrencias del carácter anterior, mientras que `.` representa cualquier carácter. Por ejemplo, para encontrar todas las líneas que contienen `a` seguido de cualquier carácter y luego `o`, puedes usar:

```bash
grep 'a.o' archivo.txt
```

## Anclas
Las anclas `^` y `$` se utilizan para representar el principio y el final de una línea, respectivamente. Por ejemplo, para encontrar líneas que comienzan con `Inicio`, puedes usar:

```bash
grep '^Inicio' archivo.txt
```

## Clases de caracteres
Las clases de caracteres como `[0-9]` representan un solo dígito numérico. Por ejemplo, para encontrar líneas que contienen un número de un solo dígito al principio, puedes usar:

```bash
grep '^[0-9]' archivo.txt
```

## Cuantificadores
Los cuantificadores como `{n,m}` especifican un rango de repeticiones. Por ejemplo, para encontrar líneas que contienen de 2 a 4 letras `a`, puedes usar:

```bash
grep 'a\{2,4\}' archivo.txt
```

## Otros ejemplos de expresiones regulares con `ls`

En Bash, el comando `ls` se utiliza para listar archivos y directorios en un directorio específico. A continuación, se pueden observar algunos ejemplos de cómo puedes utilizar expresiones regulares con el comando `ls`:

* **Listar todos los archivos que terminan en `.txt`**
 
```bash
ls *.txt
```

* **Listar archivos que comienzan con "archivo" y tienen una extensión de tres letras:**

```bash
ls archivo???.*
```

* **Listar todos los archivos que tienen al menos un número en su nombre:**

```bash
ls *[0-9]*
```

* **Listar archivos que comienzan con una vocal:**

```bash
ls [aeiou]*
```

* **Listar archivos que tienen exactamente tres caracteres en su nombre:**

```bash
ls ???
```

* **Listar archivos que comienzan con una letra mayúscula:**

```bash
ls [A-Z]*
```

* **Listar archivos que tienen una `a` o `b` en el tercer lugar del nombre:**

```bash
ls ??[ab]*
```
