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
html {
  scroll-behavior: smooth;
}

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
  max-width: 700px;
  margin: auto;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  scroll-margin-top: 120px;
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

.project-card h2 a {
  text-decoration: none;
  color: inherit;
}

.project-card h2 a:hover {
  color: #ff5100;
}

.project-card .description {
  margin: 0 1rem 1rem 1rem;
  text-align: justify;
}
</style>

<div class="projects-grid">
  {% for project in site.data.es.research.projects %}
  <div class="project-card" id="{{ project.id }}">
    <h2>
      <a href="#{{ project.id }}">{{ project.title }}</a>
    </h2>
    <img src="{{ project.background }}" alt="{{ project.title }}">
    <p class="description">{{ project.description | newline_to_br }}</p>
  </div>
  {% endfor %}
</div>
