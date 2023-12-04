"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[974],{9421:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=s(5893),i=s(1151);const r={sidebar_position:6},t="Asignaci\xf3n taxon\xf3mica",o={id:"qiime2/taxonomy",title:"Asignaci\xf3n taxon\xf3mica",description:"Utilizaremos sklearn para realizar la asignaci\xf3n taxon\xf3mica, por lo tanto utilizaremos una base de datos preentrenada. La puedes encontrar aqu\xed.",source:"@site/docs/qiime2/taxonomy.md",sourceDirName:"qiime2",slug:"/qiime2/taxonomy",permalink:"/bioinformatica_esp/docs/qiime2/taxonomy",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Remoci\xf3n de adaptadores",permalink:"/bioinformatica_esp/docs/qiime2/adapters"},next:{title:"Diversidad alfa",permalink:"/bioinformatica_esp/docs/qiime2/adiv"}},c={},l=[{value:"Obtener tablas para analisis posteriores",id:"obtener-tablas-para-analisis-posteriores",level:2},{value:"Bases de datos",id:"bases-de-datos",level:2}];function d(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"asignaci\xf3n-taxon\xf3mica",children:"Asignaci\xf3n taxon\xf3mica"}),"\n",(0,n.jsxs)(a.p,{children:["Utilizaremos ",(0,n.jsx)(a.code,{children:"sklearn"})," para realizar la asignaci\xf3n taxon\xf3mica, por lo tanto utilizaremos una base de datos preentrenada. La puedes encontrar ",(0,n.jsx)(a.a,{href:"https://docs.qiime2.org/2022.11/data-resources/",children:"aqu\xed"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"Recuerda que puedes modificar el script con la versi\xf3n que obtuviste o cambiando alg\xfan par\xe1metro.\nPrueba haciendo la asignaci\xf3n taxon\xf3mica con blast o vsearch. Consulta la ayuda para que veas como modificar el comando en este caso."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'echo "Get classification with sklearn"\n\nqiime feature-classifier classify-sklearn --i-classifier data/silva-138-99-nb-classifier.qza \\\n--i-reads results/03.rep-seqs_v3.qza  --o-classification results/04.taxonomy_sklearn_assign.qza\n\n\necho "Get visual artefact"\n\nqiime metadata tabulate --m-input-file results/04.taxonomy_sklearn_assign.qza --o-visualization results/04.taxonomy_sklearn_assign.qzv\n\n\necho "Get barplot"\n\nqiime taxa barplot --i-table results/03.feature-table_v3.qza  --i-taxonomy results/04.taxonomy_sklearn_assign.qza \\\n--m-metadata-file data/metadata.tsv --o-visualization results/04.taxonomy_sklearn_barplot.qzv\n'})}),"\n",(0,n.jsx)(a.h2,{id:"obtener-tablas-para-analisis-posteriores",children:"Obtener tablas para analisis posteriores"}),"\n",(0,n.jsxs)(a.p,{children:["Observa lo que contienen los scripts ",(0,n.jsx)(a.code,{children:"src/08.filter_and_export_table.sh"})," y ",(0,n.jsx)(a.code,{children:"09.phylogeny.sh"}),", puedes ejecutarlos para obtener tablas y secuencias filtradas de cloroplastos, puedes obtener una filogenia y los archivos necesarios para importarlos a R u otros programas para que proceses tus datos."]}),"\n",(0,n.jsx)(a.p,{children:"Recuerda que en los foros de QIIME tambi\xe9n encontrar\xe1s formas de hacer an\xe1lisis de diversidad, abunadancia diferencial, entre otras cosas dentro QIIME2."}),"\n",(0,n.jsx)(a.h2,{id:"bases-de-datos",children:"Bases de datos"}),"\n",(0,n.jsxs)(a.p,{children:["Si hacemos la asignaci\xf3n taxon\xf3mica por ",(0,n.jsx)(a.code,{children:"blast"})," o ",(0,n.jsx)(a.code,{children:"vsearch"})," podemos descargar y usar directamente la base de datos desde ",(0,n.jsx)(a.a,{href:"https://docs.qiime2.org/2023.2/data-resources/",children:"data-resources"})," en QIIME2."]}),"\n",(0,n.jsxs)(a.p,{children:["Para ",(0,n.jsx)(a.code,{children:"sklearn"}),", es necesario reparar la base de datos de ",(0,n.jsx)(a.a,{href:"https://www.arb-silva.de/",children:"Silva"}),", tambi\xe9n se puede hacer con la ",(0,n.jsx)(a.a,{href:"https://data.gtdb.ecogenomic.org/",children:"GTDB"})," o ",(0,n.jsx)(a.a,{href:"http://ftp.microbio.me/greengenes_release/2022.10/",children:"Greengenes"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Tomado de"}),": ",(0,n.jsx)(a.a,{href:"https://forum.qiime2.org/t/processing-filtering-and-evaluating-the-silva-database-and-other-reference-sequence-data-with-rescript/15494",children:"https://forum.qiime2.org/t/processing-filtering-and-evaluating-the-silva-database-and-other-reference-sequence-data-with-rescript/15494"})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"#Dentro del ambiente de qiime\nmamba install -c conda-forge -c bioconda -c qiime2 -c 2023.5-tested -c defaults xmltodict 'q2-types-genomics>2023.2' ncbi-datasets-pylib\npip install git+https://github.com/bokulich-lab/RESCRIPt.git\n\n"})}),"\n",(0,n.jsx)(a.p,{children:"Obtener la base de datos"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"qiime rescript get-silva-data \\\n    --p-version '138.1' \\\n    --p-target 'SSURef_NR99' \\\n    --o-silva-sequences silva-138.1-ssu-nr99-rna-seqs.qza \\\n    --o-silva-taxonomy silva-138.1-ssu-nr99-tax.qza\n"})}),"\n",(0,n.jsx)(a.p,{children:"Filtrar las secuencias de mala calidad: elimina secuencias que contengan 5 o m\xe1s bases ambiguas y cualquier homopol\xedmero que tenga 8 o m\xe1s bases de longitud."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"qiime rescript cull-seqs --i-sequences silva-138.1-ssu-nr99-rna-seqs.qza --o-clean-sequences silva-138.1-ssu-nr99-seqs-cleaned.qza\n"})}),"\n",(0,n.jsx)(a.p,{children:"Filtrar secuencias por longitud y taxonom\xeda."}),"\n",(0,n.jsxs)(a.p,{children:["En lugar de filtrar ciegamente todas las secuencias de referencia por debajo de una determinada longitud, filtraremos diferencialmente seg\xfan la taxonom\xeda de la secuencia de referencia. La raz\xf3n: si decidimos eliminar cualquier secuencia por debajo de 1000 o 1200 pb, muchas de las secuencias de referencia asociadas con Archaea (y algunas bacterias) se perder\xe1n. Esto aumentar\xe1 potencialmente la retenci\xf3n de secuencias bacterianas o eucariotas m\xe1s cortas y de menor calidad. En \xfaltima instancia, provoca un sesgo indebido en la selecci\xf3n de la base de datos. Por lo tanto, intentaremos mitigar estos problemas filtrando diferencialmente seg\xfan la longitud. Eliminaremos las secuencias de genes de ARNr que no ",(0,n.jsx)(a.em,{children:"cumplan"})," con los siguientes criterios: Archaea (16S) >= 900 pb, Bacteria (16S) >= 1200 pb y cualquier Eucariota (18S) >= 1400 pb. Consulta la ayuda para obtener m\xe1s informaci\xf3n."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"qiime rescript filter-seqs-length-by-taxon --i-sequences silva-138.1-ssu-nr99-seqs-cleaned.qza --i-taxonomy silva-138.1-ssu-nr99-tax.qza \\\n    --p-labels Archaea Bacteria Eukaryota \\\n    --p-min-lens 900 1200 1400 \\\n    --o-filtered-seqs silva-138.1-ssu-nr99-seqs-filt.qza \\\n    --o-discarded-seqs silva-138.1-ssu-nr99-seqs-discard.qza\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Agrupar las secuencias de referencia antes de construir su clasificador, puede hacerlo agregando el ",(0,n.jsx)(a.code,{children:"--p-perc-identity"}),"par\xe1metro. Aunque no siempre es necesario, esto es \xfatil por un par de razones pr\xe1cticas, por ejemplo, para ahorrar memoria y/o requisitos de almacenamiento. En el siguiente ejemplo, construimos una base de datos de secuencias de referencia del 97% con una taxonom\xeda de consenso calculada 'lca'."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"qiime rescript dereplicate \\\n    --i-sequences silva-138.1-ssu-nr99-seqs-filt.qza \\\n    --i-taxa silva-138.1-ssu-nr99-tax.qza \\\n    --p-perc-identity 0.97 \\\n    --p-mode 'lca' \\\n    --o-dereplicated-sequences silva-138.1-ssu-c97-seqs-derep-lca.qza \\\n    --o-dereplicated-taxa silva-138.1-ssu-c97-tax-derep-lca.qza\n"})})]})}function u(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,a,s)=>{s.d(a,{Z:()=>o,a:()=>t});var n=s(7294);const i={},r=n.createContext(i);function t(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);