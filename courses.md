---
layout: heroImage
title: Cursos
permalink: /courses
lang-ref: courses
background:  "{{ site.data.es.images.tabernaemontana.src }}"
imageLicense: "{{ site.data.es.images.tabernaemontana.caption }}"
height: 65vh
---

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=folder_open" />

# Cursos

<style>
a, .material-symbols-outlined {
  color: "#ff5100";
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

</style>

<table style="width:100%">
  <thead>
    <tr>
      <th>Programa del curso</th>
      <th style="text-align: center;">Inicio</th>
      <th style="text-align: center;">Fin</th>
      <th>Instructores</th>
      <th style="text-align: center;">Proyectos del curso</th>
    </tr>
  </thead>
  <tbody>
    {% for c in site.data.es.courses %}
    <tr>
      <td><a href="{{ c.program }}">{{ c.name }}</a></td>
      <td>{{ c.start }}</td>
      <td>{{ c.finish }}</td>
      <td>{{ c.instructors }}</td>
      {% if c.projects == "En proceso" or c.projects == "No se aplica" %}
        <td style="text-align: center;">{{ c.projects }}</td>
      {% else %}
        <td style="text-align: center;">
            <a href="{{ c.projects }}" class="material-symbols-outlined">folder_open</a>
        </td>
      {% endif %}
    </tr>
    {% endfor %}
  </tbody>
</table>