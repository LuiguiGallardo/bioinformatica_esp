---
sidebar_position: 18
---

# Creación de un script
Un script se define como un conjunto de instrucciones en código de programación. Este código contiene una secuencia de comandos u órdenes que se ejecutan de manera secuencial, y generalmente se utilizan para dirigir un flujo de trabajo o controlar el comportamiento de programas. Durante la ejecución, los comandos dentro del script son interpretados por un intérprete, el cual se encarga de ejecutar las instrucciones. En el entorno Unix, estos scripts suelen llevar la extensión `.sh`.

Estos son los pasos para crear tu primer script:
1. **Abre tu editor de texto favorito.** Puedes usar `nano`, `vim`, `gedit` o cualquier otro que prefieras. Por ejemplo, para usar `nano`, escribe en tu terminal:

```bash
nano saludo.sh
```

3. **Escribe el siguiente código en el archivo:**
```bash
#!/bin/bash
# Este es un script simple que saluda al usuario.
echo "¡Hola, bienvenido a mi script de saludo!"
echo "¿Cuál es tu nombre?"
read nombre
echo "¡Hola, $nombre!"
```

Este script utiliza `echo` para imprimir mensajes y `read` para obtener la entrada del usuario.

4. **Guarda y cierra el archivo.**
  En `nano`, presiona `Ctrl + X`, luego `Y` para confirmar que deseas guardar y, finalmente, `Enter` para salir.

5. **Haz el script ejecutable.**
```bash
chmod +x saludo.sh
```

6. **Ejecuta el script:**
```bash
./saludo.sh
```

El script solicitará tu nombre y te dará la bienvenida personalizada.

Este es un ejemplo básico, pero los scripts de Bash pueden incluir lógica más compleja, variables, bucles y condicionales.