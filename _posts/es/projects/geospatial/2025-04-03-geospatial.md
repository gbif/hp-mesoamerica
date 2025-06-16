---
layout: heroImage
title: Procesamiento de datos geoespaciales de biodiversidad mediante el lenguaje de programación Python

background:  "{{ site.data.es.images.tabasco.src }}"
imageLicense: "{{ site.data.es.images.tabasco.caption }}"
height: 65vh
lang-ref: gis
permalink: /projects/gis

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
Este curso trata sobre el manejo, visualización y análisis de datos geoespaciales de biodiversidad mediante el lenguaje de programación Python. Se estudian los fundamentos de Python, sus módulos geoespaciales y su aplicación al procesamiento de datos de biodiversidad. Se demuestra como metodologías y técnicas de ciencia de datos pueden ser aplicadas al componente geoespacial de datos de biodiversidad.
</p>

<details style="margin-bottom: 2rem;">
  <summary><strong>Marzo, 2025</strong></summary>
  <table>
    <thead>
      <tr>
        <th>Nombre del proyecto</th>
        <th>Integrantes</th>
        <th>Ver</th>
      </tr>
    </thead>
    <tbody>
      {% for project in site.data.es.projects.geospatial-04-25 %}
      <tr>
        <td>{{ project.name }}</td>
        <td>{{ project.students }}</td>
        <td><a href="{{ project.link }}" class="material-symbols-outlined">visibility</a></td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</details>
---
