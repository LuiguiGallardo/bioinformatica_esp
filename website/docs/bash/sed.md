---
sidebar_position: 15
---

# Comando `sed`
El comando `sed` (Stream Editor) es una herramienta poderosa para la manipulación de texto en sistemas Unix y Linux. Se utiliza para realizar ediciones en el flujo de texto, ya sea leyendo desde un archivo o mediante la entrada estándar.

## Formato básico de `sed`
```bash
sed [opciones] 'script' archivo
```

- **`opciones`:** Son modificadores que ajustan el comportamiento de `sed`.
- **`script`:** Es una serie de comandos de edición de texto que se aplicarán a cada línea del archivo.
- **`archivo`:** Es el archivo en el que se realizarán las ediciones. Si no se proporciona, `sed` lee desde la entrada estándar.


## Sustituir texto
   ```bash
   sed 's/antiguo/nuevo/' archivo.txt
   ```
   Reemplaza la primera ocurrencia de "antiguo" con "nuevo" en cada línea del archivo.txt.

## Sustituir todas las ocurrencias en una línea
```bash
sed 's/antiguo/nuevo/g' archivo.txt
```

Reemplaza todas las ocurrencias de "antiguo" con "nuevo" en cada línea del archivo.txt.

## Eliminar líneas que coincidan con un patrón
```bash
sed '/patron/d' archivo.txt
```

Elimina todas las líneas que contienen el patrón especificado.

## Agregar texto al final de cada línea
```bash
sed 's/$/ texto_adicional/' archivo.txt
```

Agrega "texto_adicional" al final de cada línea.

## Seleccionar rangos de líneas
```bash
sed '2,5d' archivo.txt
```

Elimina las líneas del 2 al 5.

## Guardar los cambios en el mismo archivo
```bash
sed -i 's/antiguo/nuevo/g' archivo.txt
```

Realiza los cambios directamente en el `archivo.txt`.

Estos son solo ejemplos básicos, y `sed` tiene una variedad de comandos y opciones avanzadas. Puedes consultar la página de manual (`man sed`) para obtener más información y detalles sobre su uso.