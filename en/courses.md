---
layout: heroImage
title: Courses
permalink: /en/courses
lang-ref: courses
background:  "{{ site.data.images.ateles.src }}"
imageLicense: "{{ site.data.images.ateles.caption.en }}"
full-width: true
---

<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100&icon_names=folder_open" rel="stylesheet" />

# Courses

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
    {% for c in site.data.courses.en %}
    <tr>
      <td><a href="{{ c.program }}">{{ c.name }}</a></td>
      <td>{{ c.start }}</td>
      <td>{{ c.finish }}</td>
      <td>{{ c.instructors }}</td>
      {% if c.projects == "In progress" %}
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