---
layout: heroImage
title: Patrocinadores
permalink: /en/funders
lang-ref: funders
background: "{{ site.data.es.images.whale.src }}"
imageLicense: "{{ site.data.es.images.whale.caption }}"
height: 65vh
---

# Funders

<div style="text-align:center; width:100%; padding:1rem 0;">
  <table style="border-collapse:collapse; width:auto; min-width:420px; max-width:650px; margin:0 auto; background:#fff;">
    <thead>
      <tr style="background-color:#D2D9A3;">
        <th style="border-bottom:1px solid #aab89a; solid #aab89a; padding:8px 28px; color:black; text-align:center; font-size:1rem; width:180px;"></th>
        <th style="border-bottom:1px solid #aab89a; padding:8px 28px; color:black; text-align:center; font-size:1rem;">Institutions</th>
      </tr>
    </thead>
    <tbody>
      {% for p in site.data.es.redbioma-funders %}
      <tr>
        <td style="border-bottom:1px solid #D2D9A3; border-right:1px solid #D2D9A3; padding:8px 16px; text-align:center; vertical-align:middle;">
          {% if p.logo %}
            <img src="{{ p.logo }}" alt="{{ p.name }}" style="width:160px; height:80px; object-fit:contain; display:block; margin:0 auto;">
          {% endif %}
        </td>
        <td style="border-bottom:1px solid #D2D9A3; padding:8px 16px; text-align:center; vertical-align:middle;">
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