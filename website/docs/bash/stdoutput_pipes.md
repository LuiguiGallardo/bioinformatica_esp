---
sidebar_position: 16
---

# Redirección de salida y tuberías

## Salida estándar (STDOUT)
Empezaremos definiendo la salida estandar (STDOUT), al ejecutar un comando el resultado por default se va a mostrar en la consola de la terminar, es decir, nuestra pantalla del ordenador.

La salida del comando ls representa una salida estandar

```bash
ls -l
```

Siempre que se ejecute un comando veremos el resultado en nuestra pantalla, sin embargo nosotros podemos redirigir esta salida y enviarla a un archivo o documento, para esto ocuparemos el símbolo de mayor que `>`, al hacer esto nosotros estaremos creando un nuevo documento con la información de salida del comando que ejecutemos.

Crear un archivo que contenga el resultado del comando `ls -l` y que se llame listado.txt

```bash
ls -l > listado.txt
```

El archivo que nosotros creamos contiene el resultado del comando ls -l.

Si nosotros deseamos adicionar contenido a un archivo existente lo podemos hacer empleando `>>`, veamos un ejemplo:

```bash
# Crearemos dos archios en vim, uno llamado numeros.txt que contenga lo siguiente:
1
2
3
4
5
6

#Y otro archivo llamado faltantes.txt que contenga lo siguiente:
7
8
9
10
11

# Posteriormente añadiremos al archivo numeros.txt los numeros que contiene el archivo faltantes.txt. Al ocupar >> estamos indicando que la informacion de

more faltantes.txt >> numeros.txt  faltantes.txt 

#Ahora al abrir el archivo numeros.txt este contiene tambien los numeros que se encontraban en el archivo faltantes.txt.

more numeros.txt 
1
2
3
4
5
6
7
8
9
10
11
```

## Tuberías (pipes)

El uso de pipes o tuberias es muy común cuando se trabaja en Unix, estas nos sirven para encadenar una serie de comandos para llegar a un resultado en un “sólo paso”, es decir, en lugar de teclear todos los comandos por separado, estos se pueden encadenar y hacerlo en “un solo comando” para esto nosotros utilizamos el síbolo “|”. Veamos un ejemplo:

```bash
# Tenemos un archivo multifasta que contiene secuencias de proteínas, de este archivo  queremos extraer las proteínas ribosomales y después saber cuantas tenemos. Empecemos haciendolo por partes y seguido de esto empleando el uso de tuberias.


# Empecemos por extraer las proteinas ribosomales que contiene el archivo empleando grep y creando un archivo nuevo que llamaremos ribosomales.txt

grep "ribosomal protein" GCF_002284945.1_ASM228494v1_protein > ribosomales.txt 
.faa

more ribosomales.txt 

>WP_018604832.1 50S ribosomal protein L34 [Uliginosibacterium gangwonense]
>WP_095523304.1 50S ribosomal protein L3 N(5)-glutamine methyltransferase [Candidatus Dactylopiibacterium carminicum]
>WP_095523490.1 30S ribosomal protein S21 [Candidatus Dactylopiibacterium carminicum]
>WP_095524063.1 50S ribosomal protein L28 [Candidatus Dactylopiibacterium carminicum]
>WP_095524064.1 50S ribosomal protein L33 [Candidatus Dactylopiibacterium carminicum]
>WP_095524081.1 50S ribosomal protein L9 [Candidatus Dactylopiibacterium carminicum]

# Posteriormente con el comando wc contamos cuantas proteinas ribosomales hay.
wc -l ribosomales.txt   
58 ribosomales.txt

# Ahora hagamoslo todo en un sólo paso: Encadenamos el resultado del grep al siguiente comando que es wc, con esto extraemos y contamos en una sola operación.

grep "ribosomal protein " GCF_002284945.1_ASM228494v1_protein.faa | wc -l

58
```