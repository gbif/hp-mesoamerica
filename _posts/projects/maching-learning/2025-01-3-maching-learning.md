---
layout: heroImage
title: Proyectos de Aprendizaje automático aplicado a datos de biodiversidad

background:  "{{ site.data.es.images.tabasco.src }}"
imageLicense: "{{ site.data.es.images.tabasco.caption }}"
height: 65vh
lang-ref: ml
permalink: /projects/ml

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
La inteligencia artificial y en particular, la rama del aprendizaje automático ha tenido un crecimiento acelerado en los últimos años existiendo una gran diversidad de técnicas que pueden ser utilizadas en forma individual o en conjunto para analizar, extraer patrones y generar nuevos datos en innumerables áreas de aplicación, lo que ha permitido importantes avances en dichas disciplinas.

Este curso surge en respuesta a las necesidades de capacitación en diferentes áreas de la ciencia de datos diagnosticadas por la Red de Ciencia de Datos para la Conservación de la Biodiversidad Mesoamericana (Redbioma). Está dirigido a profesionales que se desempeñan en actividades relacionadas con la conservación de la biodiversidad, por lo que se encuentra enfocado en la solución de problemas y el desarrollo de conocimientos y habilidades en el diseño e implementación de modelos simples de aprendizaje automático (utilizando el lenguaje Python) aplicados a conjuntos de datos afines con las áreas profesionales de los participantes.
</p>

<details style="margin-bottom: 2rem;">
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
      {% for project in site.data.es.projects.maching-learning-07-24 %}
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
