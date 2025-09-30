---
layout: heroImage
title: Approaches, methods, and tools for ecological connectivity Projects

background:  "{{ site.data.es.images.tabasco.src }}"
imageLicense: "{{ site.data.es.images.tabasco.caption }}"
height: 65vh
lang-ref: connectivity 
permalink: /en/projects/connectivity_program

---
<style>
  /* Estilo para el resumen (header)*/
  details summary {
    font-size: xx-large;
    color: '#f0f0f0'; 
    padding: 10px; 
    border-radius: 5px; 
    cursor: pointer; /* Cambia el cursor cuando pasa sobre el resumen */
  }


  details[open] summary {
    background-color: "#f0f0f0";
  }


  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }

  table th {
    background-color: #f2f2f2; 
  }

</style>


<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=visibility" />

<p style="text-align: justify;">
<p>We live in a world where environmental conditions are constantly changing due to various human pressures. Ecological connectivity—the degree to which the landscape facilitates the movement of organisms, gametes, and ecological processes—is essential for ecosystem functioning. However, it is threatened by habitat loss, fragmentation, and degradation. Analyzing and assessing ecological connectivity are crucial for conservation planning and spatial prioritization, ensuring species persistence and ecosystem resilience. Today, ecological connectivity is a key component of international conservation and ecosystem restoration goals, such as the Sustainable Development Goals (SDGs) and the Kunming-Montreal Global Biodiversity Framework, including its "30x30" target.</p>

<p>This course introduces the theoretical foundations of ecological connectivity studies and their spatial analysis, with a primary focus on the R package “Makurhini" (Godínez & Correa, 2020). This package is specifically designed to calculate landscape fragmentation and connectivity indices, which are widely used in conservation planning. Makurhini provides a set of functions to assess the connectivity of protected area networks and the importance of different landscape elements in maintaining connectivity.  Additionally, it allows the analysis of scenarios under landscape connectivity changes and incorporates territorial heterogeneity as a limiting factor.  The course is aimed at individuals interested in connectivity analysis, taking advantage of the processing capabilities and innovative metric calculations implemented in Makurhini. n this course, we will use the R programming language and its development environment, RStudio, both of which are open-source alternatives, making them legally and easily accessible for governmental, educational, and research institutions.</p> 

<details style="margin-bottom: 2rem;">
  <summary><strong>Agust, 2025</strong></summary>
  <table>
    <thead>
      <tr>
        <th>Project Name</th>
        <th>Students</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
      {% for proyecto in site.data.en.projects.connectivity-program-08-21 %}
      <tr>
        <td>{{ proyecto.name }}</td>
        <td>{{ proyecto.students }}</td>
        <td><a href="{{ proyecto.link }}" class="material-symbols-outlined">visibility</a></td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</details>

