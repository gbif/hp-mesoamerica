---
layout: heroImage
title: Proyectos de Investigación en Inteligencia Artificial
permalink: /research
lang-ref: projectsIA
background: "{{ site.data.es.images.coati.src }}"
imageLicense: "{{ site.data.es.images.coati.caption }}"
height: 65vh
---
<style>
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-card {
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  max-width: 700px; /* ancho consistente */
  margin: auto;     /* centrado en pantalla */
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.project-card img {
  display: block;
  width: 100%;
  height: auto;
}

.project-card h2 {
  margin: 1rem;
  font-size: 1.4rem;
}

.project-card .description {
  margin: 0 1rem 1rem 1rem;
  text-align: justify;
}
</style>

<div class="projects-grid">
  {% for project in site.data.es.research.projects %}
  <div class="project-card">
   <h2>{{ project.title }}</h2>
   <img src="{{ project.background }}" alt="{{ project.title }}">
    <p class="description">{{ project.description | newline_to_br }}</p>
  </div>
  {% endfor %}
</div>
