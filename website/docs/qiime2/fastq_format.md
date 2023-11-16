---
sidebar_position: 2
---

# Formato FASTQ

Normalmente se compone de cuatro lineas por secuencia:

```
@HWI-D00525:129:C6ACWANXX:5:1106:11467:38087
TGTCAAGACAGGCACGCACGTTCTGAATCAGCCGACGGTCGGTACGTAAGGCCATGTATATCGTGGCGTCCTTGTAAGTGATTTCCTTGCGTCCG
+
CCCCCGGGGGGGGGGGGGGGGGGGGGGGGGGGGGDGGFGGGGGGGGGGGGGGGGGGGGGGGGGGGGFGGGGGGGGGFGGGGGFGGGGGGEDGGGG
```

L1 Comienza con '@' seguido del identificador de la secuencia y una descripción opcional
L2 La secuencia de nucleótidos
L3 Comienza con un '+' opcionalmente incluye el identificador de la secuencia
L4 Indica los valores de calidad de la secuencia, debe contener el mismo número de símbolos que el número de nucleótidos. (Actualmente se usa phred+33, puedes ver explicaciones más detalladas aquí).
