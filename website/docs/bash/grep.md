---
sidebar_position: 13
---

# Comando `grep`

El comando `grep` permite buscar las líneas que contengan un patrón de interés en un archivo. Es de gran utilidad cuando se requiere comprobar si un archivo contiene una palabra, código, patrón; conocer su contexto en la linea; conocer en cuantas aparece un patrón. `grep` proviene de “globally search for a regular expression and print matching lines”.

Búsquedad de la palabra "16S" en una lista de genes

```bash
grep 16S genes_B_aphidicola.list    
```

Búsquedad de la palabra "rna" en una lista de genes, al agregar la opcion "i", no  importa si está con mayúsculas o minúsculas

```bash
grep -i rna genes_B_aphidicola.list   
```

Contar las líneas en las que aparece un patrón

```bash
grep -c ribosomal genes_B_aphidicola.list 
```