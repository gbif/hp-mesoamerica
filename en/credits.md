---
layout: heroImage
title: Credits
permalink: /en/credits
lang-ref: credits
background:  "{{ site.data.en.images.clorospingus.src }}"
imageLicense: "{{ site.data.en.images.clorospingus.caption }}"
height: 65vh
---

<b>Coordinating consortium of Redbioma (alphabetical order):<b>
<ul>  
    <li>Gandhi Ponce Juárez, National Council of Protected Areas <a href="https://conap.gob.gt/">(CONAP)</a>, through the GBIF Node of Guatemala, Guatemala.</li>  
    <li>Hersson Ramírez Molina, Administrator of the National GBIF Node Costa Rica, through the Technical Office of the National Commission for Biodiversity Management <a href="https://www.conagebio.go.cr/">(Conagebio)</a>, Costa Rica.</li>  
    <li>Jean Michel Maes, Entomological Museum of León, Nicaragua.</li>  
    <li>Manuel Vargas Del Valle, Biodiversity Informatics Researcher, Costa Rica.</li>  
    <li>María Auxiliadora Mora Cross, Coordinator of Redbioma, School of Computer Engineering, Technological Institute of Costa Rica <a href="https://www.tec.ac.cr/">(ITCR)</a>, Alajuela, Costa Rica.</li>  
    <li>Melisa Ojeda, Independent Researcher, Guatemala.</li>  
    <li>Patricia Koleff Osorio, National Commission for the Knowledge and Use of Biodiversity <a href="https://www.gob.mx/conabio/en">(CONABIO)</a>, Mexico.</li>  
    <li>Tania R. Urquiza Haas, National Commission for the Knowledge and Use of Biodiversity <a href="https://www.gob.mx/conabio/en">(CONABIO)</a>, Mexico.</li>  
</ul>  
<br>  

<b>Portal development (alphabetical order):<b>
<ul>  
    <li>Josué Castro Ramírez, Computer Engineer, ITCR.</li>  
    <li>María Biarreta Portillo, Computer Engineer, ITCR.</li>  
    <li>Paula Fernanda Kirsvt Duarte, Computer Engineering Student, ITCR, Alajuela.</li>  
    <li>Global Biodiversity Information Facility <a href="https://www.gbif.org/">(GBIF)</a>.</li>  
</ul>  
<br>  

<b>Graphic design:<b>
<ul>  
    <li>Leila Calderón Gómez <a href="mailto:leilarocio@gmail.com">(leilarocio@gmail.com)</a>.</li>  
</ul>  
<br>  

<b>Portal hosting:<b>
<ul>  
    <li>Global Biodiversity Information Facility <a href="https://www.gbif.org/">(GBIF)</a>.</li>  
</ul>  
<br>  

<b>Project:<b>
<div style="text-align: justify">  
<p>This work has been accomplished thanks to the grant awarded by the CSUCA-IDRC Project, funded by the International Development Research Centre <a href="https://idrc-crdi.ca/">(IDRC)</a>, Ottawa, Canada, and led by the Central American University Superior Council <a href="https://pridca.csuca.org/">(CSUCA)</a>.</p>  
<p>The opinions expressed here do not automatically reflect those of CSUCA, IDRC, or the Board of Governors.</p>  
</div>  

<br>

<b>Funders:<b>
<div style="text-align:center; width:100%; padding:1rem 0;">
  <table style="border-collapse:collapse; width:auto; min-width:420px; max-width:650px; margin:0 auto; background:#fff;">
    <thead>
      <tr style="background-color:#D2D9A3;">
        <th style="border-bottom:1px solid #aab89a; padding:8px 28px; color:black; text-align:center; font-size:1rem; width:180px;"></th>
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