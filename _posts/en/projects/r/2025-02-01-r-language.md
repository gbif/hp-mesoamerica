---
layout: heroImage
title: Introduction to R Language Projects
background:  "{{ site.data.es.images.tabasco.src }}"
imageLicense: "{{ site.data.es.images.tabasco.caption }}"
height: 65vh
lang-ref: r
permalink: /en/projects/r

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
The course is focused on introducing some of the basic tools for doing data science using the R language. Since it is an introductory course, some fundamental concepts of the general use of R will also be reviewed. The course is expected to provide the foundations for students to develop their own projects focused on analyzing biodiversity data.
</p>

<details style="margin-bottom: 2rem;">
  <summary><strong>Octuber, 2025</strong></summary>
  <table>
    <thead>
      <tr>
        <th>Poject Name</th>
        <th>Students</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
      {% for project in site.data.en.projects.r-language-10-24 %}
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
