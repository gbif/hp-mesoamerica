---
layout: heroImage
title: Proyectos de Python para Ciencia de Datos 

background:  "{{ site.data.es.images.tabasco.src }}"
imageLicense: "{{ site.data.es.images.tabasco.caption }}"
height: 55vh
lang-ref: about
permalink: /projects/python_data_science

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
El presente curso está enfocado en introducir los conceptos básicos de Ciencia de Datos utilizando el lenguaje de programación Python. A lo largo del curso, los estudiantes adquirirán los conocimientos necesarios sobre la sintaxis y la semántica del lenguaje, logrando así un fundamento sólido que les permitirá abordar futuros proyectos en esta área de aplicación.
En las siguientes secciones, se presentan los proyectos realizados por los estudiantes que participaron en el curso durante el periodo lectivo de abril de 2024.
</p>

<details style="margin-bottom: 2rem;">
  <summary><strong>Abril, 2024</strong></summary>
  <table>
    <thead>
      <tr>
        <th>Nombre del proyecto</th>
        <th>Integrantes</th>
        <th>Ver</th>
      </tr>
    </thead>
    <tbody>
      {% for proyecto in site.data.proyectos.python-ciencia-datos-04-24 %}
      <tr>
        <td>{{ proyecto.nombre }}</td>
        <td>{{ proyecto.integrantes }}</td>
        <td><a href="{{ proyecto.link }}" class="material-symbols-outlined">visibility</a></td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</details>

---

<details>
  <summary><strong>Julio, 2024</strong></summary>
  <table>
    <thead>
      <tr>
        <th>Nombre del proyecto</th>
        <th>Integrantes</th>
        <th>Ver</th>
      </tr>
    </thead>
    <tbody>
      {% for proyecto in site.data.proyectos.python-ciencia-datos-07-24 %}
      <tr>
        <td>{{ proyecto.nombre }}</td>
        <td>{{ proyecto.integrantes }}</td>
        <td><a href="{{ proyecto.link }}" class="material-symbols-outlined">visibility</a></td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</details>
