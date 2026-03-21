---
layout: heroImage
title: Optimización de modelos de lenguaje para la recuperación y generación segura de información sobre especies
permalink: /optimization
lang-ref: optimization
background: "{{ site.data.es.images.pitahaya.src }}"
imageLicense: "{{ site.data.es.images.pitahaya.caption }}"
height: 65vh
---

## Resumen

<p> La biodiversidad es uno de los recursos más valiosos del planeta, ya que sustenta el funcionamiento de los ecosistemas y proporciona servicios esenciales para la vida humana, como alimentos, medicinas y regulación ambiental.</p>
<div style="display: flex; flex-wrap: wrap; gap: 20px;">
  <div style="flex: 1 1 300px; position: relative;">
    <img src="{{ site.data.es.images.sula.src }}" alt="Mariposa" style="width: 100%; height: 100%; object-fit: cover; display: block;">
    <div class="feature-img-license">
       <div class="feature-img-license-c"><span class="icon"><i class="fa fa-info-circle"></i></span></div>
       <div class="feature-img-license-text">{{ site.data.es.images.sula.caption | markdownify }}</div>
    </div>
  </div>
  <div style="flex: 2 1 300px;">
    <p>Sin embargo, este patrimonio natural enfrenta múltiples amenazas derivadas de las actividades humanas, como la pérdida de hábitats, la contaminación, las especies invasoras y el cambio climático, lo que está provocando una rápida disminución de la biodiversidad. En este contexto, el conocimiento científico sobre las especies y sus interacciones es fundamental para apoyar su conservación.</p>
    <p> Gran parte del conocimiento sobre las especies y sus características se encuentra fragmentado y disperso en textos no estructurados. A pesar de los esfuerzos por digitalizar y organizar esta información, existe una carencia significativa en la capacidad de recuperar y generar información precisa y contextualizada sobre especies de manera eficiente para apoyar el desarrollo de la ciencia, la educación y la conservación de la biodiversidad (Sonter et al., 2018; Mora et al.; 2011). La cantidad de documentos sobre biodiversidad es grande, incluyendo decenas de millones de documentos técnicos y tratamientos taxonómicos, la mayoría de estos documentos en formato de texto. La Biblioteca del Patrimonio de la Biodiversidad, la biblioteca digital de acceso abierto más grande del mundo para la literatura y archivos sobre biodiversidad (Gwinn y Rinaldo; 2009), integra actualmente más de 61 millones de páginas digitalizadas.</p>

  </div>
</div>

<div style="background-color: #e0f2f7; padding: 20px; border-radius: 5px; margin-top: 30px;">
  <div style="display: flex; flex-wrap: wrap; align-items: flex-end; gap: 20px;">

    <div style="flex: 1 1 150px;">
      <img src="assets/images/icons/ico_BHL.png" alt="BHL" style="max-width: 100%; height: auto;">
    </div>
    
    <div style="flex: 2 1 300px;">
      <h1 style="font-size: 2.2em; margin-bottom: 0px; line-height: 1.1;">
        Biodiversity Heritage Library BHL
      </h1>
      <h2 style="font-size: 1.3em; margin-top: 5px; font-weight: normal;">
        Manual de Plantas de Costa Rica Volumen III
      </h2>
    </div>
  </div>
  <img src="assets/images/img_pantallaBHL.jpg" alt="Captura de pantalla del manual de datos del BHL" style="max-width: 100%; height: auto; display: block; margin: 15px auto;">
  <p>
  Hammel, Barry Edward, Grayum, Michael Howard, Herrera, Cecilia., & Zamora Villalobos, Nelson. (2003).
  Manual de plantas de Costa Rica (Vol. 111, p. 24). Missouri Botanical Garden.
  <a href="https://www.biodiversitylibrary.org/page/59946827" target="_blank">
  https://www.biodiversitylibrary.org/page/59946827
  </a>
  </p>
  <img src="assets/images/img_NowOlnine_BHL.jpg" alt="Cantidad de datos online de BHL" style="max-width: 100%; height: auto; display: block; margin: 15px auto;">
</div>
<div>
  <p> Este proyecto propone abordar la problemática de la ineficacia en la recuperación y manejo de información sobre especies mediante el desarrollo y optimización de modelos grandes de lenguaje (LLM) que integren el Estándar Plinian Core, técnicas avanzadas de extracción de información y el enfoque de generación aumentada por recuperación (RAG). El Plinian Core es un estándar ampliamente reconocido para la integración de datos de especies, utilizado en el desarrollo de portales nacionales y regionales para compartir datos de biodiversidad (Mora-Cross et al., 2022; Vargas et al., 2019). </p>
  <img src="assets/images/diagrama_optimizacion_img_generacionAumentada_Recuperacion.png" alt="Diagrama del proyecto RAG" style="max-width: 100%; height: auto; display: block; margin: 20px auto;">
  <p>
  A través de un enfoque llamado Generación Aumentada por Recuperación (RAG), se integran datos de fuentes como el Instituto Nacional de Biodiversidad de Costa Rica (INBio) y la Biblioteca del Patrimonio de la Biodiversity (BHL) con modelos de lenguaje optimizados. Esto permite que al realizar una consulta, por ejemplo, "¿De qué se alimenta la lapa roja?" el sistema recupere información precisa de descripciones biológicas enriquecida con contexto en formato Plinian Core (a partir de la base de datos vectorial), la procese y genere una respuesta, utilizando modelos grandes de lenguaje, acompañada de un nivel de certeza. De esta forma, se construye una herramienta innovadora para acercar el conocimiento científico sobre especies de una región a la sociedad, facilitando el acceso a información validada y útil para educación, investigación y conservación de la biodiversidad. 

  Más información sobre el proyecto está disponible en 
  <a href="https://aclanthology.org/2024.naacl-industry.31/" target="_blank" rel="noopener noreferrer">
  el artículo en ACL Anthology
  </a> 
  y en 
  <a href="https://github.com/biodiversidad-itcr" target="_blank" rel="noopener noreferrer">
  el repositorio en GitHub
  </a>.
  </p>
</div>

### Referencias

- Gwinn, N. & Rinaldo, C. (2009) *The Biodiversity Heritage Library: sharing biodiversity literature with the world*. IFLA Journal: Official Journal of the International Federation of Library Associations and Institutions. 
<a href="https://doi.org/10.1177/0340035208102032" target="_blank" rel="noopener noreferrer">https://doi.org/10.1177/0340035208102032</a>.

- Mora-Cross, M. & Calderon-Ramirez, S. (2024) *Uncertainty Estimation in Large Language Models to Support Biodiversity Conservation*. In Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 6: Industry Track), pages 368–378, Mexico City, Mexico. Association for Computational Linguistics.

- Mora-Cross, M., Vargas, M. & Ulate, U. (2022) *Sharing Species Pages through Living Atlases using Plinian Core: Current state and new developments*. Biodiversity Information Science and Standards. 
<a href="https://biss.pensoft.net/article/94718/" target="_blank" rel="noopener noreferrer">https://biss.pensoft.net/article/94718/</a>.

- Mora, C., Tittensor, D. P., Adl, S., Simpson, A. G. & Worm, B. (2011) *How many species are there on Earth and in the ocean?* PLoS Biology, 9(8): e1001127. 
<a href="https://doi.org/10.1371/journal.pbio.1001127" target="_blank" rel="noopener noreferrer">https://doi.org/10.1371/journal.pbio.1001127</a>.

- Sonter, L., Saleem, H. & Watson, J. (2018) *Mining and biodiversity: key issues and research needs in conservation science*. Proceedings of the Royal Society B. 
<a href="https://royalsocietypublishing.org/doi/10.1098/rspb.2018.1926" target="_blank" rel="noopener noreferrer">https://royalsocietypublishing.org/doi/10.1098/rspb.2018.1926</a>.

- Vargas, M., Mora-Cross, M., Cuadra, J. & Ulate-Rodríguez, W. (2019) *Sharing Species Pages in the Atlas of Living Costa Rica using Plinian Core*. Biodiversity Information Science and Standards. 
<a href="https://biss.pensoft.net/article/35474" target="_blank" rel="noopener noreferrer">https://biss.pensoft.net/article/35474</a>.