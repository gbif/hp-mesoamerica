---
layout: heroImage
title: Créditos
permalink: /credits
lang-ref: credits
background:  "{{ site.data.es.images.clorospingus.src }}"
imageLicense: "{{ site.data.es.images.clorospingus.caption }}"
height: 65vh
---

<b>Consorcio coordinador de Redbioma (orden alfabético):<b>
<ul>
    <li>Gandhi Ponce Juárez, Consejo Nacional de Áreas Protegidas <a href="https://conap.gob.gt/">(CONAP)</a>, a través del Nodo GBIF de Guatemala, Guatemala.</li>
    <li>Hersson Ramírez Molina, Administrador del Nodo Nacional GBIF Costa Rica, a través de la Oficina Técnica de la Comisión Nacional para la Gestión de la Biodiversidad <a href="https://www.conagebio.go.cr/">(Conagebio)</a>, Costa Rica.</li>
    <li>Jean Michel Maes, Museo Entomológico de León, Nicaragua.</li>
    <li>Manuel Vargas Del Valle, Investigador en Informática de la Biodiversidad, Costa Rica.</li>
    <li>María Auxiliadora Mora Cross, Coordinadora de Redbioma, Escuela de Ingeniería en Computación, Instituto Tecnológico de Costa Rica <a href="https://www.tec.ac.cr/">(ITCR)</a>, Alajuela, Costa Rica.</li>
    <li>Melisa Ojeda, Investigadora independiente, Guatemala.</li>
    <li>Patricia Koleff Osorio, Comisión Nacional para el Conocimiento y Uso de la Biodiversidad <a href="https://www.gob.mx/conabio">(CONABIO)</a>, México.</li>
    <li>Tania R. Urquiza Haas, Comisión Nacional para el Conocimiento y Uso de la Biodiversidad <a href="https://www.gob.mx/conabio">(CONABIO)</a>, México.</li>
</ul>
<br>

<b>Desarrollo del portal (orden alfabético):<b>
<ul>
    <li>Josué Castro Ramírez, Ingeniero en Computación, ITCR.</li>
    <li>María Biarreta Portillo, Ingeniera en Computación, ITCR.</li>
    <li>Paula Fernanda Kirsvt Duarte, Estudiante de Ingeniería en Computación, ITCR, Alajuela.</li>
    <li>Sistema Global de Información sobre Biodiversidad <a href="https://www.gbif.org/">(GBIF)</a>.</li>
</ul>
<br>

<b>Diseño gráfico:<b>
<ul>
    <li>Leila Calderón Gómez <a href="mailto:leilarocio@gmail.com">(leilarocio@gmail.com)</a>.</li>
</ul>
<br>

<b>Alojamiento del Portal:<b>
<ul>
    <li>Sistema Global de Información sobre Biodiversidad <a href="https://www.gbif.org/">(GBIF)</a>.</li>
</ul>
<br>

<b>Proyecto:<b>
<div style="text-align: justify">
<p>Este trabajo se llevó a cabo gracias a la subvención concedida por el Proyecto CSUCA-IDRC, financiado por el Centro Internacional de Investigaciones para el Desarrollo <a href="https://idrc-crdi.ca/es">(IDRC)</a>, Ottawa, Canadá, liderado por el Consejo Superior Universitario Centroamericano <a href="https://pridca.csuca.org/">(CSUCA)</a>.</p>
<p>Las opiniones aquí expresadas no representan necesariamente las del CSUCA, IDRC o las de la Junta de Gobernadores.</p>
</div>

<br>

<b>Patrocinadores:<b>
<div style="text-align:center; width:100%; padding:1rem 0;">
  <table style="border-collapse:collapse; width:auto; min-width:420px; max-width:650px; margin:0 auto; background:#fff;">
    <thead>
      <tr style="background-color:#D2D9A3;">
        <th style="border-bottom:1px solid #aab89a; padding:8px 28px; color:black; text-align:center; font-size:1rem; width:180px;"></th>
        <th style="border-bottom:1px solid #aab89a; padding:8px 28px; color:black; text-align:center; font-size:1rem;">Institución</th>
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
