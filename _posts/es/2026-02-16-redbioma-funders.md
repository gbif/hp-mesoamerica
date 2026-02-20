---
layout: heroImage
title: Patrocinadores
permalink: /funders
lang-ref: funders
background: "{{ site.data.es.images.whale.src }}"
imageLicense: "{{ site.data.es.images.whale.caption }}"
height: 65vh
---

# Patrocinadores

<div style="text-align:center; width:100%; padding:2rem 0;">
  <table style="border-collapse:collapse; width:auto; min-width:420px; max-width:650px; margin:0 auto; background:#fff; border:3px solid #D2D9A3;">
    <thead>
      <tr style="background-color:#D2D9A3;">
        <th style="border:2px solid #D2D9A3; padding:14px 28px; color:black; text-align:center; font-size:1rem;">Logo</th>
        <th style="border:2px solid #D2D9A3; padding:14px 28px; color:black; text-align:center; font-size:1rem;">Institución</th>
      </tr>
    </thead>
    <tbody>
      {% for p in site.data.es.redbioma-funders %}
      <tr>
        <td style="border:2px solid #D2D9A3; padding:16px 24px; text-align:center; vertical-align:middle;">
          {% if p.logo %}
            <img src="{{ p.logo }}" alt="{{ p.name }}" style="width:160px; height:100px; object-fit:contain; display:block; margin:0 auto;">
          {% endif %}
        </td>
        <td style="border:2px solid #D2D9A3; padding:16px 24px; text-align:center; vertical-align:middle;">
          {% if p.link %}
            <a href="{{ p.link }}" style="text-decoration:none; color:#008B89; font-weight:600; font-size:1rem;">
              {{ p.name }}
              {% if p.acronym %}
                <span style="display:block; font-size:0.82rem; color:#BF4633; font-weight:400; margin-top:4px;">{{ p.acronym }}</span>
              {% endif %}
            </a>
          {% else %}
            {{ p.name }}
            {% if p.acronym %}
              <span style="display:block; font-size:0.82rem; color:#BF4633; font-weight:400; margin-top:4px;">{{ p.acronym }}</span>
            {% endif %}
          {% endif %}
        </td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>