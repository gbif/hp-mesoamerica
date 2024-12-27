---
layout: heroImage
title: Cursos
permalink: /courses
lang-ref: courses
background:  "{{ site.data.images.ateles.src }}"
imageLicense: "{{ site.data.images.ateles.caption.es }}"
full-width: true
---

<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100&icon_names=folder_open" rel="stylesheet" />

# Cursos

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
    {% for c in site.data.courses.es %}
    <tr>
      <td><a href="{{ c.program }}">{{ c.name }}</a></td>
      <td>{{ c.start }}</td>
      <td>{{ c.finish }}</td>
      <td>{{ c.instructors }}</td>
      {% if c.projects == "En proceso" %}
        <td style="text-align: center;">{{ c.projects }}</td>
      {% else %}
        <td style="text-align: center;">
            <a
              href="{{ c.projects }}"
              class="material-symbols-outlined"
              style="color: #ff5100;"
            >
                folder_open
            </a>
        </td>
      {% endif %}
    </tr>
    {% endfor %}
  </tbody>
</table>