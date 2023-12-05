---
sidebar_position: 3
---

# Instalación de QIIME 2

**Requisitos previos:**
- Linux o macOS (QIIME 2 no es compatible con Windows, pero puedes usar una máquina virtual o un entorno basado en contenedores como Docker).
- Python 3.6 o superior.

**Pasos generales para la instalación:**

1. **Crear un entorno virtual (opcional pero recomendado):**
   - Crea un entorno virtual para QIIME 2 utilizando `conda`. Puedes instalar `conda` desde [Anaconda](https://www.anaconda.com/products/individual) o [Miniconda](https://docs.conda.io/en/latest/miniconda.html).

     ```bash
     conda create -n qiime2-2023.9 python=3.10
     conda activate qiime2-2023.9
     ```

   - Ten en cuenta que "2023.9" es la versión específica de QIIME 2. Puedes verificar la versión más reciente en la [página de instalación de QIIME 2](https://docs.qiime2.org/2023.9/install/).

2. **Instalar QIIME 2:**
   - Utiliza el siguiente comando para instalar QIIME 2 en el entorno virtual que creaste.

     ```bash
    wget https://data.qiime2.org/distro/amplicon/qiime2-amplicon-2023.9-py38-linux-conda.yml
    conda env create -n sabana --file qiime2-amplicon-2023.9-py38-linux-conda.yml
     ```

   - Esto instalará la versión específica de QIIME 2 (2023.9) junto con las dependencias necesarias.

3. **Activar QIIME 2:**
   - Después de la instalación, activa el entorno QIIME 2.

     ```bash
     conda activate sabana
     ```

4. **Verificar la instalación:**
   - Puedes verificar que QIIME 2 está instalado correctamente ejecutando el siguiente comando:

     ```bash
     qiime --help
     ```

   - Esto debería mostrar la ayuda de QIIME 2.

Recuerda que estos pasos están basados en la información disponible hasta la última actualización disponible al 1 de Diciembre del 2023. Te recomiendo consultar la [documentación oficial de QIIME 2](https://docs.qiime2.org/2023.9/install/) para obtener la información más reciente sobre la instalación.