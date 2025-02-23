---
layout: heroImage
title: Python Projects for Data Science

background:  "{{ site.data.es.images.tabasco.src }}"
imageLicense: "{{ site.data.es.images.tabasco.caption }}"
height: 55vh
lang-ref: python_data_science
permalink: /en/projects/python_data_science

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
This course is focused on introducing the basic concepts of Data Science using the Python programming language. Throughout the course, students will acquire the necessary knowledge of the language's syntax and semantics, building a solid foundation that will enable them to tackle future projects in this field.

The following sections present the projects carried out by students who participated in the course during the academic term of April and July, 2024.
</p>

<details style="margin-bottom: 2rem;">
  <summary><strong>April, 2024</strong></summary>
  <table>
    <thead>
      <tr>
        <th>Project Name</th>
        <th>Members</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
      {% for proyecto in site.data.en.projects.python-data-science-04-24 %}
      <tr>
        <td>{{ proyecto.name }}</td>
        <td>{{ proyecto.students }}</td>
        <td><a href="{{ proyecto.link }}" class="material-symbols-outlined">visibility</a></td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</details>

---

<details>
  <summary><strong>July, 2024</strong></summary>
  <table>
    <thead>
      <tr>
        <th>Project name</th>
        <th>Members</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
      {% for proyecto in site.data.en.projects.python-data-science-07-24 %}
      <tr>
        <td>{{ proyecto.name }}</td>
        <td>{{ proyecto.students }}</td>
        <td><a href="{{ proyecto.link }}" class="material-symbols-outlined">visibility</a></td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</details>
