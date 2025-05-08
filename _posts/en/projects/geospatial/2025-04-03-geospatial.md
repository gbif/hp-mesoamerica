---
layout: heroImage
title: Geospatial biodiversity data processing using the Python programming language

background:  "{{ site.data.es.images.tabasco.src }}"
imageLicense: "{{ site.data.es.images.tabasco.caption }}"
height: 65vh
lang-ref: gis
permalink: /en/projects/gis

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
This course is focused on handling, visualizing, and analyzing geospatial biodiversity data using the Python programming language. It covers the fundamentals of Python, its geospatial modules, and its application to processing biodiversity data. The course demonstrates how data science methodologies and techniques can be applied to the geospatial component of biodiversity data.
</p>

<details style="margin-bottom: 2rem;">
  <summary><strong>March, 2025</strong></summary>
  <table>
    <thead>
      <tr>
        <th>Project Name</th>
        <th>Members</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
      {% for project in site.data.en.projects.geospatial-04-25 %}
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
