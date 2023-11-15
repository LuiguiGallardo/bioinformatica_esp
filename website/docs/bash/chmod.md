---
sidebar_position: 9
---

# Cambiar permisos con `chmod`
Cuando listamos el contenido de un directorio ls -l obervamos que se compone de 7 columnas. Discutiremos en detalle la primera columna (Figura5) que nos da información acerca de los permisos de los archivos. Los permisos otorgan capacidad a los usuarios para leer (read), modificar (write) y ejecutar los archivos. Esto se vuelve relevante cuando trabajamos en servidores compartidos y queremos otorgar permisos a usuarios específicos. En estos servidores pueden existir grupos de trabajo, en este caso ellos pueden compartir permisos sobre algunos archivos. Adicionalmente podemos dar permiso a todos los usuarios para que modifiquen los archivos.

La primera columna se compone de 10 caracteres (Figura5)

Figura 5 Ejemplo de salida del comando ls -l

Los 3 primeros caracteres (rwx) pertenecen al propietario, los siguientes tres guiones (---) se refieren al grupo, los últimos 3 (--) representan a todos los usuarios

D rwx --- ---     

D=      #Indica que el archivo es un directorio
r=      #Indica que el propietario puede tener acceso a este archivo (read)
w=      #Indica que el propietario puede modificar este archivo (read)
x=      #Indica si el archivo es ejecutable (execute)

El comando `chmod` nos permite modificar los permisos a los archivos.

Le estamos dando permisos al grupo (g) de poder escribrir sobre esos archivos agregando el simbolo "+"

```bash
chmod g+w nombre_archivo s archivos
``` 

Permisos a todos (a) para  modificar los archivos

```bash
chmod a+w nombre_archivo
```

Quitamos los permisos sustituyendo el símbolo “+” por “-”

```bash
chmod g+w nombre_archivo
```

Hacemos ejecutable el archivo

```bash
chmod u+x nombre_archivo
```