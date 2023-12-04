---
sidebar_position: 3
---

# Conexión con `ssh` y `sftp`

## SSH (Secure Shell):
SSH es un protocolo de red que permite acceder y gestionar de forma segura un sistema remoto. Para utilizar SSH:

* **Conexión a un Servidor:**

```bash
ssh usuario@direccion_del_servidor
```

Reemplaza "usuario" con tu nombre de usuario y "direccion_del_servidor" con la dirección IP o el nombre del servidor al que te estás conectando.

* **Autenticación:**
Introduce tu contraseña cuando se te solicite. También puedes usar autenticación basada en clave SSH para una mayor seguridad.

* **Cerrar la Sesión:**
Para cerrar la sesión de SSH, simplemente escribe:

```bash
exit
```

* **SFTP (Secure File Transfer Protocol):**

SFTP es un protocolo que utiliza SSH para la transferencia segura de archivos. Puedes utilizarlo de la siguiente manera:

* **Conexión a un Servidor:**

```bash
sftp usuario@direccion_del_servidor
```

Al igual que con SSH, sustituye "usuario" y "direccion_del_servidor" con tus credenciales y la dirección del servidor.

* **Operaciones Básicas:**

* `put archivo_local`: Sube un archivo al servidor.
* `get archivo_remoto`: Descarga un archivo desde el servidor.
* `ls`: Lista los archivos en el directorio remoto.
* `cd directorio`: Cambia al directorio especificado en el servidor.
* **Cerrar la Sesión de SFTP**:
Simplemente escribe `exit` para cerrar la sesión de SFTP.

Ambos comandos son parte de las utilidades SSH y vienen preinstalados en muchas distribuciones de Linux. SSH y SFTP son herramientas esenciales para administrar sistemas remotos y transferir archivos de manera segura.
