---
layout: heroImage
title: Ecosystem Simulator Using Large Language Models (LLM)
permalink: /en/ecosystem-llm
lang-ref: ecosystem-llm
background: "{{ site.data.en.images.caiman.src }}"
imageLicense: "{{ site.data.en.images.caiman.caption }}"
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

## Summary

<div class="ecosystem-shell">
  <div class="ecosystem-lead">
    <div class="ecosystem-panel">
      <img src="/assets/regionalInterest/ecosystemLLM/00-hero-llm.png" alt="Conceptual illustration of the ecosystem simulator with agents and language models">
    </div>
    <div>
      <p>This regional project is building an ecosystem simulator where agents with different ecological roles learn to survive, compete, and adapt inside a shared environment. The approach combines deep reinforcement learning with Large Language Models (LLMs) to study how strategies for foraging, evasion, predation, and decision-making emerge in dynamic ecological settings.</p>
      <p>The first phase focuses on a 2D multi-agent environment with resources and interaction rules. Herbivores and predators are trained inside that world to observe whether functional behaviors appear, measure performance across thousands of episodes, and document which patterns emerge through experience.</p>
      <p>Beyond its value as an artificial intelligence testbed, the simulator is intended to become a practical platform for exploring ecological dynamics, agent communication, and future integrations with three-dimensional environments.</p>
    </div>
  </div>

  <div class="ecosystem-stats">
    <div class="ecosystem-stat">
      <strong>2000</strong>
      episodes analyzed in the current phase
    </div>
    <div class="ecosystem-stat">
      <strong>350</strong>
      steps per episode used to assess survival
    </div>
    <div class="ecosystem-stat">
      <strong>2</strong>
      main roles: herbivores and predators
    </div>
    <div class="ecosystem-stat">
      <strong>2D</strong>
      initial environment with a future 3D roadmap
    </div>
  </div>

  <div>
    <h2>Work architecture</h2>
    <div class="ecosystem-flow">
      <div class="ecosystem-stage">
        <h3>1. Environment</h3>
        <p>A simplified ecosystem is built with agents, food, water, and interaction rules to enable controlled experimentation.</p>
      </div>
      <div class="ecosystem-stage">
        <h3>2. Learning</h3>
        <p>Agents train survival strategies through deep reinforcement learning, adjusting behavior from reward feedback.</p>
      </div>
      <div class="ecosystem-stage">
        <h3>3. Interpretation</h3>
        <p>LLMs provide a future layer for reasoning, explanation, and natural communication so the system can describe why agents act the way they do.</p>
      </div>
      <div class="ecosystem-stage">
        <h3>4. Scaling</h3>
        <p>The roadmap includes exploring a 3D version with Minecraft and MineRL to assess richer and more complex interactions.</p>
      </div>
    </div>
  </div>

  <div>
    <h2>Observed emergent behaviors</h2>
    <div class="ecosystem-grid">
      <div class="ecosystem-story">
        <span class="tag">Godot environment</span>
        <h3>Food seeking</h3>
        <p>One shared scene shows a peccary-like agent just before eating, suggesting that the agent is already recognizing a useful resource and executing a survival-oriented action.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/01-godot-comida-caza.jpg" alt="Godot agents, a peccary about to eat, and jaguars learning to hunt" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Image 1: Godot agents, peccary about to eat, and jaguars learning to hunt
            <small>Expected filename: <code>01-godot-comida-caza.jpg</code></small>
          </div>
        </div>
      </div>
      <div class="ecosystem-story">
        <span class="tag">Godot environment</span>
        <h3>Predator avoidance</h3>
        <p>Another visualization indicates that prey agents start changing their movement to move away from predators, a sign that training is producing adaptive responses beyond random motion.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/02-godot-evasion-depredadores.jpg" alt="Prey learning to move away from predators" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Image 2: prey learning to move away from predators
            <small>Expected filename: <code>02-godot-evasion-depredadores.jpg</code></small>
          </div>
        </div>
      </div>
      <div class="ecosystem-story">
        <span class="tag">Godot environment</span>
        <h3>Simultaneous learning</h3>
        <p>A third scene brings both processes together: some agents improve their ability to find food while others learn to avoid threats in the same shared environment.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/03-godot-comportamientos-juntos.jpg" alt="Food seeking and predator avoidance together" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Image 3: food seeking and predator avoidance together
            <small>Expected filename: <code>03-godot-comportamientos-juntos.jpg</code></small>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h2>Metrics and preliminary findings</h2>
    <div class="ecosystem-grid ecosystem-metrics-grid">
      <div class="ecosystem-metric">
        <span class="tag">Global performance</span>
        <h3>Steady progress</h3>
        <p>The training summary across 2000 episodes shows a clear improvement in overall agent performance, indicating that the system is learning more useful policies over time.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/04-progreso-2000-episodios.jpg" alt="Training progress summary across 2000 episodes" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Image 4: training progress summary across 2000 episodes
            <small>Expected filename: <code>04-progreso-2000-episodios.jpg</code></small>
          </div>
        </div>
        <p class="ecosystem-reading-note"><strong>How to read it:</strong> the left panels show the per-iteration signal and its moving average, while the right panels summarize the cumulative average. When reward and episode length trend upward, the agents are improving over training.</p>
      </div>
      <div class="ecosystem-metric">
        <span class="tag">Return</span>
        <h3>Role-specific rewards</h3>
        <p>The return curves reveal distinct trajectories for herbivores and predators. Those differences suggest that both groups are discovering different strategies for maximizing rewards inside the ecosystem.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/05-retorno-por-agente.jpg" alt="Return by agent, with dotted lines for herbivores and solid lines for predators" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Image 5: return by agent, dotted lines for herbivores and solid lines for predators
            <small>Expected filename: <code>05-retorno-por-agente.jpg</code></small>
          </div>
        </div>
        <p class="ecosystem-reading-note"><strong>How to read it:</strong> each line represents a different agent. Dotted lines correspond to herbivores and solid lines to predators; higher return means that agent earned more reward.</p>
      </div>
      <div class="ecosystem-metric">
        <span class="tag">Survival</span>
        <h3>Current environment limit</h3>
        <p>Role-specific survival remains below the full 350-step horizon in every episode, showing that the environment is still demanding and that learned policies still have room to improve.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/06-supervivencia-por-rol.jpg" alt="Role-based metrics with survival split by role" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Image 6: role-based metrics with survival split by role
            <small>Expected filename: <code>06-supervivencia-por-rol.jpg</code></small>
          </div>
        </div>
        <p class="ecosystem-reading-note"><strong>How to read it:</strong> this figure compares return, episode length, survival, and critical ratio for herbivores and predators. The survival curve stays flat because no agent reaches the full 350-step episode limit at this stage of training.</p>
      </div>
      <div class="ecosystem-metric">
        <span class="tag">Episode length</span>
        <h3>Growing resilience</h3>
        <p>Agent episode length tracks how long each individual survives before dying. This metric helps separate real learning from gains that only appear in the reward signal.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/07-longitud-por-agente.jpg" alt="Episode length for each agent across training" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Image 7: episode length for each agent across training
            <small>Expected filename: <code>07-longitud-por-agente.jpg</code></small>
          </div>
        </div>
        <p class="ecosystem-reading-note"><strong>How to read it:</strong> as in the return chart, each line represents one agent and the line style separates herbivores from predators. Higher values mean that the agent survived more steps before dying.</p>
      </div>
      <div class="ecosystem-metric">
        <span class="tag">Causes of death</span>
        <h3>Changing ecological pressure</h3>
        <p>Herbivores initially die more often from hunger or thirst, but later predation becomes more common. For predators, lack of water becomes a stronger limiting factor than lack of food.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/08-causas-de-muerte.jpg" alt="Causes of death by role" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Image 8: causes of death by role
            <small>Expected filename: <code>08-causas-de-muerte.jpg</code></small>
          </div>
        </div>
        <p class="ecosystem-reading-note"><strong>How to read it:</strong> each panel corresponds to one role and each color marks a different termination cause. The highest curve at a given point shows the dominant cause of death in that part of training.</p>
      </div>
      <div class="ecosystem-metric">
        <span class="tag">Resources</span>
        <h3>Predator food advantage</h3>
        <p>The average resource intake by role suggests that predators obtain food more easily, but consume very little water, which aligns with their later mortality patterns.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/09-recursos-por-rol.jpg" alt="Average resources obtained by each role" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Image 9: average resources obtained by each role
            <small>Expected filename: <code>09-recursos-por-rol.jpg</code></small>
          </div>
        </div>
        <p class="ecosystem-reading-note"><strong>How to read it:</strong> the four curves compare normalized averages for food and water across both roles. A higher line means that group obtained more of that resource during the episodes.</p>
      </div>
      <div class="ecosystem-metric">
        <span class="tag">Attacks</span>
        <h3>Tactical activation threshold</h3>
        <p>From roughly iteration 1100 onward, the number of predator attacks increases noticeably. That shift is consistent with the emergence of more active hunting behaviors in the other metrics.</p>
        <img class="ecosystem-image" src="/assets/regionalInterest/ecosystemLLM/10-ataques-por-episodio.jpg" alt="Successful and unsuccessful attacks over time" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="ecosystem-placeholder is-hidden">
          <div>
            Image 10: successful and unsuccessful attacks over time
            <small>Expected filename: <code>10-ataques-por-episodio.jpg</code></small>
          </div>
        </div>
        <p class="ecosystem-reading-note"><strong>How to read it:</strong> the blue line counts attempted attacks, the orange line counts successful hits, and the green line counts attacks that ended in a kill. The jump around iteration 1100 suggests a clear shift in hunting behavior.</p>
      </div>
    </div>
  </div>

  <div class="ecosystem-note">
    <strong>Overall reading:</strong> the early results suggest that the simulator is already producing role-specific behaviors and clear learning signals. Rather than functioning only as a visual environment, the platform is beginning to operate as a laboratory for studying adaptation, competition for resources, and emergent behavior in multi-agent systems.
  </div>

  <div>
    <h2>Next stage</h2>
    <p>The next phase includes enriching the environment, refining reward structures, incorporating LLM-generated explanations to interpret agent decisions, and evaluating a transition to 3D scenarios with Minecraft and MineRL. That step would open the door to more complex interactions, advanced spatial navigation, and richer forms of cooperation or competition.</p>
  </div>
</div>
