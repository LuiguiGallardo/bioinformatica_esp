---
sidebar_position: 17
---

# Creación de un script

Un script puede definirse como un código de programación, el cual contiene una serie de comandos u ordenes que se ejecutan de manera secuencial y estos suelen utilizarse para controlar un flujo de trabajo o el comportamiento de programas. Al momento de ejecutarse los comandos contenidos dentro del script son “leídos” por un interprete y este ejecuta los comandos. En Unix los podemos encontrar con la extensión .sh.

Hagamos nuestro primer script:

```bash
Crearemos en vim un script que nos haga un directorio llamado ribosomals, nos mueva dentro de ese directorio y copie un archivo que contiene secuencias de proteinas en el (el archivo se localiza un directorio arriba), seguido de esto vamos a extraer las proteinas ribosomales empleando grep y generaremos un nuevo archivo, contaremos cuantas proteinas ribosomales hay en ese nuevo archivo y el resultado se imprimirá en pantalla.

rafabust$ vim cuentas.sh  #Estamos creando un nuevo documento que se llamará cuentas.sh, al darle enter veremos que este se encuentra vacio.
Dentro de vim escribiremos lo siguiente:
#!/bin/bash #Esta línea indica el interprete que se usara para leer el script, es necesario pornerla para saber que esta escrito en bash.

echo "Mi primer script"   #Esta linea nos imprimirá en pantalla lo que está entre comillas.

mkdir ribosomals  #Creamos el directorio ribosomals.

cd ribosomals   #Nos movemos dentro de ribosomals.

cp ../GCF_002284945.1_ASM228494v1_protein.faa .   #Copiamos el archivo multifasta de proteinas que se encuentra un directorio arriba.

grep "ribosomal protein" GCF_002284945.1_ASM228494v1_protein.faa > solo_pr.txt    #Extraemos la información que deseamos y creamos un nuevo documento.

echo "Tenemos un total de $(grep -chi ">" solo_pr.txt) proteinas ribosomales"   #Con esta linea nosotros sabremos cuantas proteinas ribosomales tenemos en nuestro archivo.

Al terminar de escribir los comandos salimos de vim guardando los cambios realizados. Oprimiendo la tecla esc para regresar a el modo comandos y tecleando la opción :wq para que guarde los cambios

rafabust$ chmod +x cuentas.sh   #Volvemos ejecutabe el archivo.
rafabust$ ./cuentas.sh ó sh cuentas.sh    #Podemos ocupar cualquier de las dos opciones para ejecutar el script.
rafabust$ sh cuentas.sh
Mi primer script
Tenemos un total de 58 proteinas ribosomales  #Listo! acabamos de ejecutar nuestro primer script!!
```