---
layout: heroImage
title: Proyectos de Enfoques, métodos y herramientas para el análisis de la conectividad ecológica

background:  "{{ site.data.es.images.tabasco.src }}"
imageLicense: "{{ site.data.es.images.tabasco.caption }}"
height: 65vh
lang-ref: connectivity 
permalink: /projects/connectivity_program

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
<p>Vivimos en un mundo donde las condiciones ambientales cambian constantemente debido a diversas presiones humanas. La conectividad ecológica —el grado en que el territorio facilita los movimientos de organismos, gametos y procesos ecológicos— es fundamental para el funcionamiento de los ecosistemas. Sin embargo, está comprometida por la pérdida, fragmentación y degradación del hábitat. El análisis y la evaluación de la conectividad ecológica son esenciales para la planificación de la conservación y la priorización espacial, con el objetivo de asegurar la persistencia de las especies y la resiliencia de los ecosistemas. Actualmente, la conectividad ecológica es un elemento clave en las metas internacionales de conservación y restauración de ecosistemas, como los Objetivos de Desarrollo Sostenible (ODS) y el Marco Mundial Kunming-Montreal sobre Biodiversidad, incluyendo su objetivo «30x30».</p>
<p>Este curso introduce las bases teóricas del estudio de la conectividad ecológica y su análisis espacial, tomando como referencia principal el paquete de R “Makurhini" (Godínez y Correa, 2020). Este paquete ha sido diseñado específicamente para calcular índices de fragmentación y conectividad del paisaje, utilizados en la planificación de la conservación. Makurhini proporciona un conjunto de funciones para evaluar la conectividad de redes de áreas protegidas y la importancia de distintos elementos del paisaje para mantenerla. Además, permite analizar escenarios bajo cambios en la conectividad del paisaje e incorporar la heterogeneidad del territorio como un factor limitante para la conectividad. El curso está dirigido a personas interesadas en el análisis de conectividad, aprovechando las capacidades de procesamiento e innovación en el cálculo de métricas implementadas en Makurhini. En este curso usaremos el lenguaje de programación R y su entorno de programación RStudio, ambos de uso libre, una alternativa legal y accesible para instituciones gubernamentales, educativas y de investigación.
</p>

<details style="margin-bottom: 2rem;">
  <summary><strong>Agosto, 2025</strong></summary>
  <table>
    <thead>
      <tr>
        <th>Nombre del proyecto</th>
        <th>Integrantes</th>
        <th>Ver</th>
      </tr>
    </thead>
    <tbody>
      {% for proyecto in site.data.es.projects.connectivity-program-08-21 %}
      <tr>
        <td>{{ proyecto.name }}</td>
        <td>{{ proyecto.students }}</td>
        <td><a href="{{ proyecto.link }}" class="material-symbols-outlined">visibility</a></td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</details>

