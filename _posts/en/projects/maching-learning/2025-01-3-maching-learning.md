---
layout: heroImage
title: Projects on Machine Learning Applied to Biodiversity Data
background:  "{{ site.data.es.images.tabasco.src }}"
imageLicense: "{{ site.data.es.images.tabasco.caption }}"
height: 65vh
lang-ref: ml
permalink: /en/projects/ml

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
Artificial intelligence, and in particular, the field of machine learning, has experienced rapid growth in recent years, with a wide variety of techniques that can be used individually or in combination to analyze data, extract patterns, and generate new insights across countless application areas. This progress has led to significant advancements in these disciplines.

This course was developed in response to the training needs identified by the Mesoamerican Biodiversity Conservation Data Science Network (Redbioma) in various areas of data science. It is designed for professionals working in biodiversity conservation-related activities and focuses on problem-solving and developing knowledge and skills in designing and implementing simple machine learning models (using the Python programming language) applied to datasets relevant to the participants' professional fields.
</p>

<details style="margin-bottom: 2rem;">
  <summary><strong>July, 2024</strong></summary>
  <table>
    <thead>
      <tr>
        <th>Project Name</th>
        <th>Members</th>
        <th>view</th>
      </tr>
    </thead>
    <tbody>
      {% for project in site.data.en.projects.maching-learning-07-24 %}
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
