---
sidebar_position: 3
---

# Instalar QIIME 2

QIIME2 se puede correr en un ambiente Conda, las instrucciones de instalación para cada sistema operativo las puedes encontrar aquí.

## Entrar al servidor
Para el servidor en el que trabajamos, se instaló con las siguientes lineas:

```bash
wget https://data.qiime2.org/distro/core/qiime2-2022.11-py38-linux-conda.yml
conda env create -n qiime2-2022.11 --file qiime2-2022.11-py38-linux-conda.yml
```

## Inicia conda
**NOTA:** Iniciar conda sólo se hace una vez.

```bash
/opt/anaconda3/bin/conda init bash
```

- Sal del servidor
- Vuelve a entrar y entra a tu espacio en `/botete/usuario`

## Activar el ambiente de QIIME2

**NOTA** Este paso si se hace cada vez que entres al servidor y trabajes con QIIME2

```bash
conda activate /botete/diana/.conda/envs/qiime2-2022.11
```
### 0.3 Crear directorios de trabajo
- [ ] Vamos a crear el directorio y espacio de trabajo

```bash
mkdir -p 02.Amplicones_16S_Qiime2/{data,src,results}
cd 02.Amplicones_16S_Qiime2/
```