---
sidebar_position: 1
---

# Introducción tutorial Bash

Este curso está diseñado con el objetivo de dar a conocer las bases de UNIX/LINUX necesarias para manipular los directorios y archivos, así como su contenido. El conocimiento que se busca adquirir es el primer paso para poder hacer uso del software y edición de archivos en el análisis de datos en linea de comandos.

## Motivaciones
Si te inscribiste a este curso, seguramente es porqué quieres empezar a analizar tus secuencias de DNA o RNA. Es muy posible que ya hayas escuchado alguna de estas palabras: “Unix”, “Linux”, “Línea de comandos” y “Terminal”. Si tu conocimiento no va mas allá de eso estás en el curso adecuado. El uso de la linea de comandos es algo que se debe conocer previo al inicio tus análisis bioinformáticos. Aunque posiblemente en los próximos años veremos un mayor surgimiento de software gráfico para resolver tareas bioinformáticas, hoy en día el uso de la terminal sigue siendo necesario y de gran utilidad.

## Material de este curso
Este manual forma parte de un curso presencial o en línea sobre introducción a bash. Es un material complementario a las 20 horas que comprenden el curso. Por lo que se recomienda su lectura junto a su participación en el curso.

## Relevancia para la bioinformática

Una de las razones proviene del hecho de que la mayoría de los datos biológicos se representan en forma de texto. Pensemos en secuencias de nucleótidos (A,T,C,G) o la representación de los aminoácidos (A,T,F,M…). Linux cuenta con diversos comandos que pueden combinarse para manipular este tipo de archivos de forma eficiente. Adicionalmente es gratuito, ambas características han contribuido a su relevancia en el área bioinformática.


## Un poco de historia
Aunque varios de nosotros crecimos con computadoras con sistema operativo Windows, existen otros sistemas que fueron desarrollados antes o a la par que Windows, tal es el caso de Unix. Unix es un sistema operativo multi-usuario, multi-tarea y portable desarrollado en 1969, en los laboratorios Bell de AT&T (Hoy la conocemos más por la telefonía celular). Fue desarrollado por Ken Thompson y Dennis Ritchie.

Las características de Unix lo hicieron muy popular, su uso (bajo una respectiva licencia), se extendió rápidamente durante los 70´s y 80´s. En esos años, Unix se distribuyó entre universidades y dependencias de gobierno. Una de estás licencias fue adquirida por la Universidad de California, con sede en Berkeley, aquí se hicieron algunas adiciones (programas) y mejoras al Unix de A&T. Estás adiciones llamaron la atención de otros usuarios por lo que empezaron a ser distribuidas, esto bajo el nombre de Berkeley Software Distribution (BSD), parece que esto no fue bien visto por AT&T, ya que inició una demanda contra el Unix de Berkeley.

En esta misma década (seguimos en los 80s), Richard Stallman, (EUA, MIT), empezó a llamar la atención dentro de la comunidad de programadores. Stallman promovía ideales de software libre (free-software). Con libre se referia a que el usuario debe tener la libertad de modificar y distribuit un sistema operativo u otro programa. Bajo estos ideales, en 1984 comenzó a desarrollar un Sistema operativo denominado GNU (GNU´s not unix, GNU´s no es Unix), motivado también por las restricciones que imponia Unix a sus usuarios.

Richard Stallman y colaboradores escribieron diferentes utilidades (programas) para este nuevo sistema, excepto el programa que se encargaría de gestionar los recursos del sistema operativo (lo dejaron para más tarde). A este programa se le conoce como kernel (de la raíz germánica Kern, núcleo o hueso). En palabras de Richard Stallman, “kernel is the program in the system that allocates the machine’s resources to the other programs that you run”.

De manera independiente, en 1991 y por motivos personales, un estudiante de la universidad de Helsinki, Linus Torvalds se encontraba desarrollando un kernel al que llamaba informalmente Linux. Este kernel fue el que se fusionó con GNU y dio origen a lo que hoy conocemos como Linux. Algo curioso es que el nombre Linux en realidad se referia al kernel no al sistema operativo, sin embargo fue el nombre que se popularizó. De acuerdo a Richard Stallman el nombre correcto es GNU/Linux. Finalmente ¿Unix y GNU/Linux es lo mismo? La respuesta es no. El sistema operativo Unix es una marca registrada, solo aquellos sistemas que cumplen con ciertos requisitos y han pagado las regalías correspondientes poden denominarse Unix, aquellos sistemas como GNU/Linux o MacOSX, se les denominá sistemas basados en Unix.

Actualmente el termino free-software propuesto por Richard Stallman fue superado por el movimiento de código abierto (open source code), cuya filosofia también se basa en darle al usuario la habilidad para ver, editar y distribuir el código bajo ciertos criterios.

Lo que debes recordar de todo lo anterior, es que todos los sistemas operativos tienen un kernel y utilidades. El kernel es el que controla la memoria de la computadora y asigna una parte a cada proceso, esto hace que los procesos sean más eficientes.
Otra de las funciones del kernel es que permitir la comunicación entre software y dispositivos físicos de la computadora. Con utilidades nos referimos a programas, por ejemplo un procesador de textos, una hoja de calculo juegos entre otros.

## Distribuciones

Hoy en día tenemos diferentes “versiones” de Linux, coloquialmente se les conoce como distro (distribución Linux, Figura 1). Una de las mas conocidas es Ubuntu, sin embargo, existe una gran diversidad de distros a elegir dependiendo los gustos y necesidades de los usuarios. Algunas de ellas ofrecen mayor soporte para el usuario, aspecto a considerar al momento de elegir un distro.

Figura 1. Algunos distros de GNU/Linux. Ubuntu probablemente es de los más conocidos. Bio-Linux (no se muestra en la imagen), es un distro que viene con algunos programas instalados que se usan en el área bioinformática.

El Pingüino “Tux” es la mascota oficial del sistema Linux (Fig1). Una historia sobre su nombre es que proviene de las palabras Torval Unix. La otra se refiere a que parece usar un smoking (tuxedo en ingles), abreviado tux.