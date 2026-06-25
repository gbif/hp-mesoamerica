---
layout: heroImage
title: Simulador de Ecosistemas utilizando Modelos Grandes de Lenguaje (LLM)
permalink: /ecosystem-llm
lang-ref: ecosystem-llm
background: "{{ site.data.es.images.caiman.src }}"
imageLicense: "{{ site.data.es.images.caiman.caption }}"
height: 65vh
---

<style>
.ecosystem-shell {
  display: grid;
  gap: 24px;
}

.ecosystem-lead {
  display: grid;
  grid-template-columns: minmax(340px, 1.45fr) minmax(260px, 0.95fr);
  gap: 24px;
  align-items: center;
}

.ecosystem-panel,
.ecosystem-metric,
.ecosystem-story,
.ecosystem-stage {
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 28px rgba(25, 46, 62, 0.08);
}

.ecosystem-panel {
  background: linear-gradient(145deg, #f2fbff 0%, #e2f4ee 100%);
}

.ecosystem-panel img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}

.ecosystem-stats,
.ecosystem-grid,
.ecosystem-flow {
  display: grid;
  gap: 18px;
}

.ecosystem-stats {
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.ecosystem-stat {
  background: #0f3e4a;
  color: #fff;
  border-radius: 14px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.ecosystem-stat strong {
  display: block;
  font-size: 2.3rem;
  line-height: 1;
  margin-bottom: 8px;
  color: #fffdf6;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
  font-weight: 800;
  letter-spacing: 0.02em;
}

.ecosystem-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.ecosystem-metrics-grid {
  grid-template-columns: 1fr;
}

.ecosystem-metrics-grid .ecosystem-metric {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
}

.ecosystem-story {
  background: #fff7ef;
  border: 1px solid #f2ddc6;
}

.ecosystem-story h3,
.ecosystem-metric h3,
.ecosystem-stage h3 {
  margin-top: 0;
}

.ecosystem-story .tag,
.ecosystem-metric .tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.1;
  min-height: 32px;
  vertical-align: middle;
}

.ecosystem-story .tag {
  background: #ffd7ae;
  color: #7d3d06;
}

.ecosystem-metric {
  background: #f7fbff;
  border: 1px solid #d7e7f5;
}

.ecosystem-metric .tag {
  background: #d8edf9;
  color: #124f6a;
}

.ecosystem-flow {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.ecosystem-stage {
  background: #f6f7fb;
  border: 1px solid #e0e4ef;
}

.ecosystem-note {
  background: #eef9f1;
  border-left: 5px solid #2c8b57;
  padding: 18px 20px;
  border-radius: 10px;
}

.ecosystem-placeholder {
  margin-top: 16px;
  min-height: 180px;
  border: 2px dashed #97a6b5;
  border-radius: 12px;
  background: repeating-linear-gradient(
    -45deg,
    #f8fafc,
    #f8fafc 12px,
    #eef3f7 12px,
    #eef3f7 24px
  );
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 18px;
  color: #355066;
  font-weight: 600;
}

.ecosystem-placeholder.is-hidden {
  display: none;
}

.ecosystem-image {
  width: 100%;
  height: auto;
  display: block;
  margin-top: 16px;
  border-radius: 12px;
  border: 1px solid #d8e2ea;
}

.ecosystem-reading-note {
  margin-top: 14px;
  padding: 12px 14px;
  border-radius: 12px;
  background: #edf5fb;
  border: 1px solid #d5e3ef;
  color: #244355;
  font-size: 0.95rem;
  line-height: 1.5;
}

.ecosystem-reading-note strong {
  color: #124f6a;
}

.ecosystem-placeholder small {
  display: block;
  margin-top: 8px;
  font-weight: 400;
  color: #4f677a;
}

@media (max-width: 800px) {
  .ecosystem-lead {
    grid-template-columns: 1fr;
  }
}
</style>

## Resumen

<div class="ecosystem-shell">
  <div class="ecosystem-lead">
    <div class="ecosystem-panel">
      <img src="/assets/regionalInterest/ecosystemLLM/00-hero-llm.png" alt="Ilustración conceptual del simulador de ecosistemas con agentes y modelos de lenguaje">
    </div>
    <div>
      <p>Este proyecto regional desarrolla un simulador de ecosistemas donde agentes con distintos roles aprenden a sobrevivir, competir y adaptarse dentro de un entorno compartido. La propuesta combina aprendizaje por refuerzo profundo con Modelos Grandes de Lenguaje (LLM) para estudiar cómo emergen estrategias de búsqueda de alimento, evasión, depredación y toma de decisiones en escenarios ecológicos dinámicos.</p>
      <p>La primera fase se concentra en un entorno 2D con múltiples agentes, recursos y reglas de interacción. Sobre esa base se entrena a herbívoros y depredadores para observar si aprenden comportamientos funcionales, medir su desempeño a lo largo de miles de episodios y documentar qué patrones aparecen de manera espontánea a partir de la experiencia.</p>
      <p>Además de su valor como plataforma experimental en inteligencia artificial, el simulador busca convertirse en una herramienta útil para explorar dinámicas ecológicas, comunicación entre agentes y futuras integraciones con entornos tridimensionales.</p>
    </div>
  </div>

  <div class="ecosystem-stats">
    <div class="ecosystem-stat">
      <strong>2000</strong>
      episodios analizados en la fase actual
    </div>
    <div class="ecosystem-stat">
      <strong>350</strong>
      pasos por episodio para evaluar supervivencia
    </div>
    <div class="ecosystem-stat">
      <strong>2</strong>
      roles principales: herbívoros y depredadores
    </div>
    <div class="ecosystem-stat">
      <strong>2D</strong>
      entorno inicial con proyección futura a 3D
    </div>
  </div>

  <div>
    <h2>Arquitectura de trabajo</h2>
    <div class="ecosystem-flow">
      <div class="ecosystem-stage">
        <h3>1. Entorno</h3>
        <p>Se construye un ecosistema simplificado con agentes, alimento, agua y reglas de interacción para permitir experimentación controlada.</p>
      </div>
      <div class="ecosystem-stage">
        <h3>2. Aprendizaje</h3>
        <p>Los agentes entrenan estrategias de supervivencia mediante aprendizaje por refuerzo profundo, ajustando su comportamiento a partir de recompensas.</p>
      </div>
      <div class="ecosystem-stage">
        <h3>3. Interpretación</h3>
        <p>Los LLM aportan una capa futura de razonamiento, explicación y comunicación natural para describir por qué los agentes actúan como lo hacen.</p>
      </div>
      <div class="ecosystem-stage">
        <h3>4. Escalamiento</h3>
        <p>La hoja de ruta contempla explorar una versión 3D con Minecraft y MineRL para evaluar interacciones más complejas.</p>
      </div>
    </div>
  </div>

  <div>
    <h2>Comportamientos emergentes observados</h2>
    <div class="ecosystem-grid">
      <div class="ecosystem-story">
        <span class="tag">Entorno Godot</span>
        <h3>Búsqueda de alimento</h3>
        <p>En una de las escenas compartidas se observa a un chancho de monte en el instante previo a comer, mostrando que el agente ya reconoce el recurso y ejecuta una acción orientada a su supervivencia.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/01-godot-comida-caza.jpg" alt="Agentes en Godot, con un chancho a punto de comer y jaguares aprendiendo a cazar" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Imagen 1: agentes en Godot, chancho a punto de comer y jaguares aprendiendo a cazar
            <small>Sugerencia de archivo: <code>01-godot-comida-caza.jpg</code></small>
          </div>
        </div>
      </div>
      <div class="ecosystem-story">
        <span class="tag">Entorno Godot</span>
        <h3>Evasión de depredadores</h3>
        <p>Otra visualización muestra cómo los chanchos empiezan a modificar su movimiento para alejarse de los depredadores, señal de que el entrenamiento está generando respuestas adaptativas más allá del movimiento aleatorio.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/02-godot-evasion-depredadores.jpg" alt="Chanchos aprendiendo a alejarse de los depredadores" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Imagen 2: chanchos aprendiendo a alejarse de los depredadores
            <small>Sugerencia de archivo: <code>02-godot-evasion-depredadores.jpg</code></small>
          </div>
        </div>
      </div>
      <div class="ecosystem-story">
        <span class="tag">Entorno Godot</span>
        <h3>Aprendizaje simultáneo</h3>
        <p>En una tercera escena se combinan ambos procesos: mientras unos agentes mejoran su capacidad para encontrar comida, otros aprenden a evitar amenazas dentro del mismo entorno compartido.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/03-godot-comportamientos-juntos.jpg" alt="Búsqueda de comida y evasión de depredadores al mismo tiempo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Imagen 3: búsqueda de comida y evasión de depredadores al mismo tiempo
            <small>Sugerencia de archivo: <code>03-godot-comportamientos-juntos.jpg</code></small>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h2>Métricas y hallazgos preliminares</h2>
    <div class="ecosystem-grid ecosystem-metrics-grid">
      <div class="ecosystem-metric">
        <span class="tag">Rendimiento global</span>
        <h3>Progreso sostenido</h3>
        <p>El resumen de entrenamiento a lo largo de 2000 episodios evidencia una mejora clara en el rendimiento de los agentes, indicando que el sistema sí está aprendiendo políticas más útiles con el tiempo.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/04-progreso-2000-episodios.jpg" alt="Resumen del progreso durante 2000 episodios" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Imagen 4: resumen del progreso durante 2000 episodios
            <small>Sugerencia de archivo: <code>04-progreso-2000-episodios.jpg</code></small>
          </div>
        </div>
        <p class="ecosystem-reading-note"><strong>Cómo leerla:</strong> los paneles de la izquierda muestran el valor por iteración y su media móvil, mientras que los de la derecha resumen el promedio acumulado. Si las curvas de recompensa y longitud suben con el entrenamiento, los agentes están mejorando su desempeño.</p>
      </div>
      <div class="ecosystem-metric">
        <span class="tag">Retorno</span>
        <h3>Recompensas diferenciadas por rol</h3>
        <p>La comparación de retornos muestra trayectorias distintas entre herbívoros y depredadores. Las curvas sugieren que ambos grupos descubren estrategias diferentes para maximizar sus recompensas dentro del ecosistema.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/05-retorno-por-agente.jpg" alt="Retorno de cada agente, con líneas punteadas para herbívoros y rectas para depredadores" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Imagen 5: retorno de cada agente, líneas punteadas para herbívoros y rectas para depredadores
            <small>Sugerencia de archivo: <code>05-retorno-por-agente.jpg</code></small>
          </div>
        </div>
        <p class="ecosystem-reading-note"><strong>Cómo leerla:</strong> cada línea representa un agente distinto. Las líneas punteadas corresponden a los herbívoros y las continuas a los depredadores; cuanto más alto es el retorno, mayor fue la recompensa obtenida por ese agente.</p>
      </div>
      <div class="ecosystem-metric">
        <span class="tag">Supervivencia</span>
        <h3>Límite actual del entorno</h3>
        <p>La supervivencia por rol se mantiene lejos de los 350 pasos completos en todos los episodios, lo que deja claro que el entorno sigue siendo exigente y que aún hay espacio para mejorar las políticas aprendidas.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/06-supervivencia-por-rol.jpg" alt="Métricas por rol con supervivencia diferenciada" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Imagen 6: métricas por rol con supervivencia diferenciada
            <small>Sugerencia de archivo: <code>06-supervivencia-por-rol.jpg</code></small>
          </div>
        </div>
        <p class="ecosystem-reading-note"><strong>Cómo leerla:</strong> aquí se comparan retorno, longitud, supervivencia y <em>critical ratio</em> entre herbívoros y depredadores. La supervivencia aparece plana porque ningún agente logra completar los 350 pasos del episodio en esta etapa del entrenamiento.</p>
      </div>
      <div class="ecosystem-metric">
        <span class="tag">Duración</span>
        <h3>Mayor resistencia con el entrenamiento</h3>
        <p>La longitud de los episodios por agente permite observar cuánto tiempo logra sostenerse cada individuo antes de morir. Esta métrica ayuda a distinguir aprendizaje real de mejoras aparentes solo en recompensa.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/07-longitud-por-agente.jpg" alt="Longitud de cada agente a lo largo de los episodios" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Imagen 7: longitud de cada agente a lo largo de los episodios
            <small>Sugerencia de archivo: <code>07-longitud-por-agente.jpg</code></small>
          </div>
        </div>
        <p class="ecosystem-reading-note"><strong>Cómo leerla:</strong> igual que en el gráfico de retorno, cada línea representa un agente y el estilo de línea separa herbívoros de depredadores. Valores más altos significan que el agente resistió más pasos antes de morir.</p>
      </div>
      <div class="ecosystem-metric">
        <span class="tag">Causas de muerte</span>
        <h3>Cambio de presión ecológica</h3>
        <p>Los herbívoros comienzan muriendo principalmente por hambre o sed, pero luego aumenta la mortalidad por depredación. En los depredadores ocurre lo contrario: la falta de agua termina siendo un problema más importante que la falta de alimento.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/08-causas-de-muerte.jpg" alt="Causas de muerte por rol" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Imagen 8: causas de muerte por rol
            <small>Sugerencia de archivo: <code>08-causas-de-muerte.jpg</code></small>
          </div>
        </div>
        <p class="ecosystem-reading-note"><strong>Cómo leerla:</strong> cada panel corresponde a un rol y cada color indica una causa de terminación distinta. La curva que queda más arriba marca la causa de muerte dominante en ese tramo del entrenamiento.</p>
      </div>
      <div class="ecosystem-metric">
        <span class="tag">Recursos</span>
        <h3>Ventaja alimentaria de depredadores</h3>
        <p>El promedio de recursos obtenidos por rol sugiere que los depredadores consiguen alimento con mayor facilidad, aunque casi no consumen agua, lo cual coincide con sus patrones posteriores de mortalidad.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/09-recursos-por-rol.jpg" alt="Promedio de recursos obtenidos por rol" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Imagen 9: promedio de recursos obtenidos por rol
            <small>Sugerencia de archivo: <code>09-recursos-por-rol.jpg</code></small>
          </div>
        </div>
        <p class="ecosystem-reading-note"><strong>Cómo leerla:</strong> las cuatro curvas comparan el promedio normalizado de comida y agua para ambos roles. Una línea más alta indica que ese grupo consiguió más de ese recurso durante los episodios.</p>
      </div>
      <div class="ecosystem-metric">
        <span class="tag">Ataques</span>
        <h3>Umbral de activación táctica</h3>
        <p>A partir de aproximadamente la iteración 1100 aumenta la cantidad de ataques realizados por los depredadores. Este cambio es consistente con la aparición de conductas más activas de caza en las demás métricas.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/10-ataques-por-episodio.jpg" alt="Cantidad de ataques acertados y fallidos" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Imagen 10: cantidad de ataques acertados y fallidos
            <small>Sugerencia de archivo: <code>10-ataques-por-episodio.jpg</code></small>
          </div>
        </div>
        <p class="ecosystem-reading-note"><strong>Cómo leerla:</strong> la línea azul cuenta los ataques intentados, la naranja los acertados y la verde los que terminaron en muerte. El salto a partir de alrededor de la iteración 1100 sugiere un cambio claro en la conducta de caza.</p>
      </div>
    </div>
  </div>

  <div class="ecosystem-note">
    <strong>Lectura general:</strong> los resultados preliminares apuntan a que el simulador ya produce comportamientos diferenciados por rol y señales claras de aprendizaje. Más que un simple entorno visual, la plataforma empieza a funcionar como laboratorio para estudiar adaptación, competencia por recursos y comportamientos emergentes en sistemas multiagente.
  </div>

  <div>
    <h2>Siguiente etapa</h2>
    <p>La proyección del proyecto incluye enriquecer el entorno, refinar las recompensas, incorporar explicaciones generadas por LLM para interpretar decisiones de los agentes y evaluar una expansión a escenarios 3D con Minecraft y MineRL. Esa transición permitiría estudiar interacciones más complejas, navegación espacial avanzada y nuevas formas de cooperación o competencia.</p>
  </div>
</div>
