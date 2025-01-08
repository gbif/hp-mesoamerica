---
layout: heroImage
title: Courses
permalink: /en/courses
lang-ref: courses
background:  "{{ site.data.en.images.ateles.src }}"
imageLicense: "{{ site.data.en.images.ateles.caption }}"
height: 55vh
---

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=folder_open" />

# Courses

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
      <th>Course program</th>
      <th style="text-align: center;">Start date</th>
      <th style="text-align: center;">End date</th>
      <th>Instructors</th>
      <th style="text-align: center;">Course projects</th>
    </tr>
  </thead>
  <tbody>
    {% for c in site.data.en.courses %}
    <tr>
      <td><a href="{{ c.program }}">{{ c.name }}</a></td>
      <td>{{ c.start }}</td>
      <td>{{ c.finish }}</td>
      <td>{{ c.instructors }}</td>
      {% if c.projects == "In progress" %}
        <td style="text-align: center;">{{ c.projects }}</td>
      {% else %}
        <td style="text-align: center;">
          <a href="{{ curso.proyectos }}" class="material-symbols-outlined">folder_open</a>
        </td>
      {% endif %}
    </tr>
    {% endfor %}
  </tbody>
</table>