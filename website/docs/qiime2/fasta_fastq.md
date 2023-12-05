---
sidebar_position: 2
---
# Formatos comunes de secuencias

## Formato FASTQ
- **Descripción:** El formato FASTQ se utiliza comúnmente para almacenar secuencias de ADN, ARN o proteínas junto con información de calidad asociada para cada base.
- **Estructura:**
  - Línea 1: Encabezado que comienza con el carácter "@" seguido de un identificador único para la secuencia.
  - Línea 2: Secuencia de ADN, ARN o proteína.
  - Línea 3: Encabezado opcional que comienza con el carácter "+" seguido del mismo identificador que en la línea 1.
  - Línea 4: Calidad de cada base correspondiente a la secuencia en la línea 2.
- **Ejemplo:**
  ```
  @ID:1
  GATTCA
  +
  !''&$%
  ```

## Formato FASTA
- **Descripción:** El formato FASTA es utilizado para representar secuencias biológicas, como ADN, ARN o proteínas, junto con una línea de encabezado descriptiva.
- **Estructura:**
  - Línea 1: Encabezado que comienza con el carácter ">" seguido de una descripción o identificador de la secuencia.
  - Líneas siguientes: La secuencia de ADN, ARN o proteína, a menudo dividida en líneas de longitud fija para facilitar la lectura.
- **Ejemplo:**
  ```
  >Secuencia1
  GATTCAAGGCT
  ACGTACGTAGCT
  ```

Ambos formatos son ampliamente utilizados en bioinformática para el intercambio y almacenamiento de datos relacionados con secuencias biológicas. El formato FASTQ es especialmente útil cuando se necesita información de calidad para cada base, mientras que el formato FASTA es más simple y se centra en la representación de las secuencias con un encabezado descriptivo.