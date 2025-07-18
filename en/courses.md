---
layout: heroImage
title: Courses
permalink: /en/courses
lang-ref: courses
background: "{{ site.data.en.images.tabernaemontana.src }}"
imageLicense: "{{ site.data.en.images.tabernaemontana.caption }}"
height: 65vh
---

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />

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
      <th style="text-align: center;">Course material</th>
      <th style="text-align: center;">Recordings</th>
    </tr>
  </thead>
  <tbody>
    {% for c in site.data.en.courses %}
    <tr>
      <td><a href="{{ c.program }}">{{ c.name }}</a></td>
      <td>{{ c.start }}</td>
      <td>{{ c.finish }}</td>
      <td>{{ c.instructors }}</td>
      {% if c.projects == "In progress" or c.projects == "Not applicable" %}
        <td style="text-align: center;">{{ c.projects }}</td>
      {% else %}
        <td style="text-align: center;">
          <a href="{{ c.projects }}" class="material-symbols-outlined">folder_open</a>
        </td>
      {% endif %}
      {% if c.material == "No disponible" %}
        <td style="text-align: center; align-content: center;">Not available</td>
      {% else %}
        <td style="text-align: center; align-content: center;">
            <a href="{{ c.material }}" class="material-symbols-outlined">drive_export</a>
        </td>
      {% endif %}
      {% if c.recordings == "No disponible" %}
        <td style="text-align: center; align-content: center;">Not available</td>
      {% else %}
        <td style="text-align: center; align-content: center;">
            <a href="{{ c.recordings }}" class="material-symbols-outlined">youtube_activity</a>
        </td>
      {% endif %}
    </tr>
    {% endfor %}
  </tbody>
</table>
