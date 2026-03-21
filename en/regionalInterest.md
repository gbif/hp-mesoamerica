---
layout: heroImage
title: Regional Interest Projects
permalink: /en/regionalInterest
lang-ref: regional-interest
background: "{{ site.data.en.images.caiman.src }}"
imageLicense: "{{ site.data.en.images.caiman.caption }}"
height: 65vh
---

# Regional Interest Projects

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

td:first-child,
th:first-child {
  border-right: 2px solid #bbb !important;
}

td {
  background-color: white;
}

th {
  text-align: left;
}
</style>

<table>
  <thead>
    <tr>
      <th>Project Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {% for p in site.data.en.regionalInterest %}
    <tr>
      <td>
        {% if p.link %}
          <a href="{{ p.link }}">{{ p.name }}</a>
        {% else %}
          {{ p.name }}
        {% endif %}
      </td>
      <td>{{ p.description }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>