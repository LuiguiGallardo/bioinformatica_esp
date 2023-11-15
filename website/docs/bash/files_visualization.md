---
sidebar_position: 11
---

# Visualización de contenido de archivos

![Less, more and cat](../../static/img/bash/less_more_cat.png)

## Comando `more`
El comando `more` es de los más antiguos y a su vez sigue siendo de los más utilizados. Una de sus características notorias es que imprime el contenido del archivo leido en la pantalla de comandos.

Visualización del archivo e_coli.gff:

```bash
more e_coli.gff
```

Tambien podemos vizualizar los archivos que creamos en nano y vim en el paso anterior. 

## Comando `less`
El comando `less` está basado en su antecesor `more` pero con características adicionales. Una de las más notorias es que ejecuta una pantalla en donde se visualiza el contenido del archivo.

Se utiliza comúnmente para revisar archivos con contenido extenso, ya que muestra una página a la vez, únicamente la pantalla que se muestra al usuario. Esto significa que no tiene que cargar todo el archivo antes de comenzar a mostrar su contenido. Al sallir del visualizador se limpia todo lo que `less` muestra.

Visualización del archivo e_coli.gff:

```bash
less e_coli.gff
```

## Similitudes entre `more` y `less`.
Los comandos `more` y `less` son muy similares. Aunque `more` es el antecesor, ha recibido actualizaciónes y funciona de manera muy similar a `less`.

Mismas opciones de navegación dentro de `less` y `more`:

Opciones

Acciones

flecha abajo

Avanzar línea por línea

flecha arriba

Retroceder línea por línea

barra espaciadora o f

Avanzar por página

b

Retroceder por página

/patró

Busca patrón avanzando

?patrón

Busca patrón retrocediendo

n

Repetir búsqueda anterior avanzando

N

Repetir búsqueda retrocediendo

g

Ir a la primera línea

Ng

Ir a un número de línea ej. 100g va a la línea 100

G

 Ir a la última línea

h

Muestra ayuda

q

salir de la visualización

## Comando `cat`
El comando `cat` es utilizado para leer archivos de forma concatenada, esto quiere decir, que muestra varios archivos al mismo tiempo, uno tras otro. Esta característica puede ser de utilidad cuando se quiere comparar el contenido de archivos cortos. Es un visualizador que imprime todo el contenido de uno o varios archivos a la vez en la pantalla.

Imprimir en pantalla TODO EL CONTENIDO del archivo:

```bash
cat secuencia1.fa
```

Imprimir TODO EL CONTENIDO de los tres archivos en el orden que se mencionan:

```bash
cat secuencia1.fa secuencia2.fa secuencia3.fa 
```

No es recomendable utilizarlo con archivos extensos, ya que imprime en pantalla todo su contenido hasta su fin, y no permite su navegación.

## Comando `head`
Imprime las primeras lineas del contenido del archivo. Por defecto imprime 10 líneas, pero puede modificarse el número con la opción -n [número].

Impresión de las primeras lineas (10 por defecto):

```bash
head secuencia1.fa
```

Impresión de las primeras 5 líneas:

```bash
head -n 5 secuencia1.fa   
```

## Comando `tail`

Imprime las últimas lineas del contenido del archivo. Por defecto imprime 10 líneas, pero puede modificarse el número con la opción -n [número].

Impresión de las últimas lineas (10 por defecto):

```bash
tail m_mycoides_16s.fa
```

Impresión de las ultimas 3 líneas:

```bash
tail -n 3 m_mycoides_16s.fa  
```

Los comandos `head` y `tail` muestran el inicio y final del contenido de un archivo como la cabeza y cola de un pingüino.

![Head and tail](../../static/img/bash/head_tail.png)