---
layout: heroImage
title: Publicaciones
permalink: /publications
lang-ref: publications
background: "{{ site.data.es.images.robinsonella.src }}"
imageLicense: "{{ site.data.es.images.robinsonella.caption }}"
height: 65vh
---

# Publicaciones

<table style="width:100%">
  <thead>
    <tr>
      <th>Título</th>
      <th style="text-align: center;">Año</th>
      <th>Conferencia</th>
      <th>Autores</th>
    </tr>
  </thead>
  <tbody>
    {% assign sorted_publications = site.data.es.redbioma-publications | sort: "year" | reverse %}
    {% for p in sorted_publications %}
    <tr>
        {% if p.doi == "" %}
            <td>{{ p.title }}</td>
        {% else %}
            <td><a href="{{ p.doi }}">{{ p.title }}</a></td>
        {% endif %}
      <td>{{ p.year }}</td>
      <td>{{ p.conference }}</td>
      <td>{{ p.authors }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
