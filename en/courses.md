---
title: Cursos - EN
lang-ref: cursos
toc: true
background: /assets/images/banners/Mariposa_recortada.PNG
imageLicense: |
  TODO: you should write a license or caption here
layout: post
---

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=visibility" />

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

<table>
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
    {% for curso in site.data.courses %}
      <tr>
        <td><a href="{{ curso.programa }}">{{ curso.nombre }}</a></td>
        <td>{{ curso.inicio }}</td>
        <td>{{ curso.fin }}</td>
        <td>{{ curso.instructores }}</td>
        {% if curso.proyectos == "En proceso" %}
          <td style="text-align: center;">{{ curso.proyectos }}</td>
        {% else %}
          <td style="text-align: center;">
            <a href="{{ curso.proyectos }}" class="material-symbols-outlined">folder_open</a>
          </td>
        {% endif %}
      </tr>
    {% endfor %}
  </tbody>
</table>
