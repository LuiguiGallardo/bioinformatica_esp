---
sidebar_position: 8
---

# Expresiones regulares y comodines

## Comodines
Nos facilitan seleccionar archivos en base algunas caracteristicas presentes en el nombre del archivo. Uno de los comodines mas utilizados es *. Representa cualquier tipo de carácter (es), siendo estos letras o números

Listar cualquier archivo con terminación .txt

```bash
ls *.txt
```

Listar cualquier archivo que empiece con el nombre genes seguido de cualquier otra serie de caracteres, pero que incluya la terminación .txt

```bash
ls genes*.txt
```
