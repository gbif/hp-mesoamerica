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

<div class="search-container">
  <input type="text" id="projectSearch" placeholder="Search projects..." onkeyup="filterProjects()">
</div>

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

.search-container {
  margin-bottom: 20px;
}

#projectSearch {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

#projectSearch:focus {
  border-color: #ff5100;
  outline: none;
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

<script>
function filterProjects() {
  const input = document.getElementById('projectSearch');
  const filter = input.value.toLowerCase();
  const table = document.querySelector('table');
  const tr = table.getElementsByTagName('tr');

  for (let i = 1; i < tr.length; i++) {
    const tdName = tr[i].getElementsByTagName('td')[0];
    const tdDesc = tr[i].getElementsByTagName('td')[1];
    if (tdName || tdDesc) {
      const txtValueName = tdName.textContent || tdName.innerText;
      const txtValueDesc = tdDesc.textContent || tdDesc.innerText;
      if (txtValueName.toLowerCase().indexOf(filter) > -1 || txtValueDesc.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
</script>