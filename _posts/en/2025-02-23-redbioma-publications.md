---
layout: heroImage
title: Publications
permalink: /en/publications
lang-ref: publications
background: "{{ site.data.en.images.robinsonella.src }}"
imageLicense: "{{ site.data.en.images.robinsonella.caption }}"
height: 65vh
---

# Publications

<table style="width:100%">
  <thead>
    <tr>
      <th>Title</th>
      <th style="text-align: center;">Year</th>
      <th>Conference</th>
      <th>Authors</th>
    </tr>
  </thead>
  <tbody>
    {% for p in site.data.en.redbioma-publications %}
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