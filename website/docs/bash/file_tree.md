---
sidebar_position: 4
---

# Organización de archivos y directorios en linux
En Linux, la organización de los directorios (equivalentes a carpetas o folders en Windows) sigue una jerarquía clara. Cada archivo o directorio creado en Linux estará ubicado dentro de un directorio principal llamado "root" (raíz), representado por el símbolo "/". Dentro del directorio "root", encontramos niveles que representan distintos directorios. Algunos de estos directorios tienen nombres predefinidos y contienen archivos esenciales para el funcionamiento adecuado del sistema, por lo que se recomienda no modificarlos.

Linux organiza sus directorios de la siguiente manera:

* **/bin:** Contiene comandos y utilidades esenciales.
  
* **/dev:** Almacena archivos de dispositivos conectados al sistema.

* **/etc:** Incluye comandos y archivos utilizados en la administración del sistema.

* **/lib:** Contiene bibliotecas compartidas utilizadas por diversos programas o lenguajes.

* **/proc:** Ofrece información detallada sobre los procesos en ejecución.

* **/tmp:** Guarda archivos temporales creados por algunos programas.

* **/usr:** Alberga aplicaciones instaladas por el usuario.

* **/home:** Es el directorio personal de cada usuario, donde se encuentran archivos, música, videos, etc.

## Tipos de archivos

* **Archivos regulares:** También conocidos como archivos de texto, este documento, por ejemplo, sería un archivo regular.

* **Archivos ejecutables:** Se refiere a programas, también conocidos como scripts, que ejecutan tareas específicas.

* **Directorios:** También denominados folders o carpetas. Utilizaremos el término "directorios" para referirnos a ellos.

Es relevante tener en cuenta que en Linux, la premisa fundamental es que todo es tratado como un archivo.

## Organización jerárquica de los directorios en Linux.
Siguiendo el siguiente árbol, el directorio `mthomas` está dentro del directorio `home` que a su vez esta dentro del directorio raíz.

![Files tree](../../static/img/bash/files_tree.png)

