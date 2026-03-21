---
layout: heroImage
title: Optimization of language models for the retrieval and safe generation of information about species
permalink: /en/optimization
lang-ref: optimization
background: "{{ site.data.en.images.pitahaya.src }}"
imageLicense: "{{ site.data.en.images.pitahaya.caption }}"
height: 65vh
---

## Summary

<p>Biodiversity is one of the planet's most valuable resources, as it sustains ecosystem functioning and provides essential services for human life, such as food, medicine, and environmental regulation.</p>
<div style="display: flex; flex-wrap: wrap; gap: 20px;">
  <div style="flex: 1 1 300px; position: relative;">
    <img src="{{ site.data.en.images.sula.src }}" alt="Butterfly" style="width: 100%; height: 100%; object-fit: cover; display: block;">
    <div class="feature-img-license">
       <div class="feature-img-license-c"><span class="icon"><i class="fa fa-info-circle"></i></span></div>
       <div class="feature-img-license-text">{{ site.data.es.images.sula.caption | markdownify }}</div>
    </div>
  </div>
  <div style="flex: 2 1 300px;">
    <p>However, this natural heritage faces multiple threats from human activities, such as habitat loss, pollution, invasive species, and climate change, leading to a rapid decline in biodiversity. In this context, scientific knowledge about species and their interactions is essential to support their conservation.</p>
    <p>Much of the knowledge about species and their characteristics is fragmented and scattered across unstructured texts. Despite efforts to digitize and organize this information, there is a significant gap in the ability to efficiently retrieve and generate accurate, contextualized information about species to support science, education, and biodiversity conservation (Sonter et al., 2018; Mora et al., 2011). The amount of biodiversity literature is large, including tens of millions of technical documents and taxonomic treatments, most of them in text format. The Biodiversity Heritage Library, the world's largest open-access digital library for biodiversity literature and archives (Gwinn & Rinaldo, 2009), currently integrates more than 61 million digitized pages.</p>
  </div>
</div>

<div style="background-color: #e0f2f7; padding: 20px; border-radius: 5px; margin-top: 30px;">
  <div style="display: flex; flex-wrap: wrap; align-items: flex-end; gap: 20px;">

    <div style="flex: 1 1 150px;">
      <img src="/assets/images/icons/ico_BHL.png" alt="BHL" style="max-width: 100%; height: auto;">
    </div>
    
    <div style="flex: 2 1 300px;">
      <h1 style="font-size: 2.2em; margin-bottom: 0px; line-height: 1.1;">
        Biodiversity Heritage Library BHL
      </h1>
      <h2 style="font-size: 1.3em; margin-top: 5px; font-weight: normal;">
        Manual of Plants of Costa Rica Volume III
      </h2>
    </div>
  </div>
  <img src="/assets/images/img_pantallaBHL.jpg" alt="Screenshot of BHL data manual" style="max-width: 100%; height: auto; display: block; margin: 15px auto;">
  <p>
  Hammel, Barry Edward, Grayum, Michael Howard, Herrera, Cecilia., & Zamora Villalobos, Nelson. (2003).
  Manual de plantas de Costa Rica (Vol. 111, p. 24). Missouri Botanical Garden.
  <a href="https://www.biodiversitylibrary.org/page/59946827" target="_blank">
  https://www.biodiversitylibrary.org/page/59946827
  </a>
  </p>
  <img src="/assets/images/img_NowOlnine_BHL.jpg" alt="Amount of BHL data online" style="max-width: 100%; height: auto; display: block; margin: 15px auto;">
</div>
<div>
  <p>This project proposes to address the inefficiency in retrieving and managing species information by developing and optimizing large language models (LLMs) that integrate the Plinian Core Standard, advanced information extraction techniques, and the Retrieval-Augmented Generation (RAG) approach. The Plinian Core is a widely recognized standard for integrating species data, used in the development of national and regional portals to share biodiversity data (Mora-Cross et al., 2022; Vargas et al., 2019).</p>
  <img src="/assets/images/diagrama_optimizacion_img_generacionAumentada_Recuperacion.png" alt="RAG project diagram" style="max-width: 100%; height: auto; display: block; margin: 20px auto;">
  <p>
  Through an approach called Retrieval-Augmented Generation (RAG), data from sources such as the National Biodiversity Institute of Costa Rica (INBio) and the Biodiversity Heritage Library (BHL) are integrated with optimized language models. This allows queries, for example, "What does the scarlet macaw eat?" to retrieve precise information from biological descriptions enriched with context in Plinian Core format (from the vector database), process it, and generate a response using large language models, accompanied by a confidence level. In this way, an innovative tool is built to bring scientific knowledge about regional species to society, facilitating access to validated and useful information for education, research, and biodiversity conservation.

  More information about the project is available in 
  <a href="https://aclanthology.org/2024.naacl-industry.31/" target="_blank" rel="noopener noreferrer">
  the ACL Anthology paper
  </a> 
  and in 
  <a href="https://github.com/biodiversidad-itcr" target="_blank" rel="noopener noreferrer">
  the GitHub repository
  </a>.
  </p>
</div>

### References

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