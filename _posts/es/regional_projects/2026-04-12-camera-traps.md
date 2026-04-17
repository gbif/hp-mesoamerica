---
layout: heroImage
title: Monitoreo de biodiversidad con cámaras trampa en Costa Rica mediante MegaDetector y Vision Transformers
permalink: /camera-traps
lang-ref: camera-traps
background: "{{ site.data.es.images.whale.src }}"
imageLicense: "{{ site.data.es.images.whale.caption }}"
height: 65vh
---

## Resumen

<p>Este proyecto presenta una tubería automatizada para el monitoreo de biodiversidad con cámaras trampa en Costa Rica, desarrollada a partir de registros obtenidos en el abrevadero del CEMEDE de la Universidad Nacional. El trabajo introduce el dataset <em>cemede-redbioma-ct</em>, un nuevo recurso con imágenes de especies locales, y compara dos estrategias de clasificación: una basada en MegaDetector como etapa previa de detección y recorte, seguida por el ajuste fino de modelos Vision Transformer, y otra basada en el ajuste fino de MegaDetector para clasificación directa.</p>

<div style="display: flex; flex-wrap: wrap; gap: 20px;">
  <div style="flex: 1 1 300px;">
    <img src="/assets/regionalInterest/cameraTraps/sample_venado_tinamu_less_quality.jpg" alt="Muestras recortadas del dataset cemede-redbioma-ct" style="width: 100%; height: auto; display: block;">
  </div>
  <div style="flex: 2 1 300px;">
    <p>Costa Rica alberga una proporción extraordinaria de la biodiversidad mundial, pero monitorear esa riqueza biológica sigue siendo costoso y laborioso cuando las imágenes deben revisarse manualmente. En este caso de estudio, las cámaras trampa se instalaron entre 2022 y 2024 en un fragmento de bosque tropical seco junto al Sendero El Cornizuelo, dentro del corredor biológico Bosques del Yaguarundí, para evaluar el aporte ecológico de un abrevadero construido como apoyo a la fauna local.</p>
    <p>Las imágenes presentan retos reales de campo: lluvia, baja iluminación, escenas nocturnas, movimiento, resolución limitada y animales pequeños o parcialmente visibles. Estas condiciones, sumadas al fuerte desbalance entre clases, hacen que la clasificación automática de especies sea especialmente difícil y al mismo tiempo muy valiosa para acelerar el monitoreo de biodiversidad tropical.</p>
  </div>
</div>

<div style="background-color: #e0f2f7; padding: 20px; border-radius: 5px; margin-top: 30px;">
  <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: stretch;">
    <div style="flex: 1 1 240px;">
      <h1 style="font-size: 2em; margin-bottom: 8px; line-height: 1.1;">cemede-redbioma-ct</h1>
      <p style="margin-top: 0;">Nuevo dataset abierto para monitoreo de biodiversidad tropical con cámaras trampa.</p>
      <p><strong>9,000+</strong> videos procesados</p>
      <p><strong>29,498</strong> imágenes generadas tras re-muestreo</p>
      <p><strong>11,674</strong> imágenes finales en entrenamiento, validación y prueba</p>
      <p><strong>26</strong> clases de especies</p>
      <p style="margin-bottom: 0;">
        Disponible en
        <a href="https://huggingface.co/datasets/redbioma/cemede-redbioma-ct/" target="_blank" rel="noopener noreferrer">Hugging Face</a>.
      </p>
    </div>
    <div style="flex: 2 1 320px;">
      <img src="/assets/regionalInterest/cameraTraps/trapCamera.png" alt="Diagrama general de la metodología" style="width: 100%; height: auto; display: block;">
    </div>
  </div>
</div>

<div>
  <p>La metodología propuesta sigue dos ramas. En la primera, MegaDetector se utiliza para detectar animales y generar recortes de las regiones de interés; luego esos recortes alimentan tres clasificadores basados en transformers: DeiT, Swin y EfficientViT. En la segunda, MegaDetector se ajusta directamente para clasificar las especies a partir de las imágenes originales y sus anotaciones. Para evitar fuga de información, la división entre entrenamiento, validación y prueba se realizó a nivel de video.</p>
  <p>El estudio también evaluó la robustez de los modelos en escenas con múltiples animales, un escenario relevante para interpretar interacciones ecológicas. Además de clasificar especies, la tubería incorpora el conteo de individuos en imágenes con interacción, lo que amplía el valor ecológico de los resultados para monitoreo y conservación.</p>

  <img src="/assets/regionalInterest/cameraTraps/interaccion_identificada_normal.png" alt="Imagen con múltiples especímenes y anotación de MegaDetector" style="max-width: 100%; height: auto; display: block; margin: 20px auto;">

  <p>Los resultados muestran que <strong>DeiT</strong> obtuvo el mejor desempeño global, con <strong>82% de accuracy</strong>, superando a Swin (76.2%), EfficientViT (74.1%) y MegaDetector ajustado para clasificación directa (75.1%). En imágenes con múltiples animales, DeiT también lideró con 0.8280 de accuracy, seguido por EfficientViT (0.7850), Swin (0.7742) y MegaDetector (0.7556). Estos resultados son competitivos frente a otros estudios reportados en el área, especialmente considerando las condiciones tropicales adversas y la complejidad del conjunto de datos.</p>
  <p>El trabajo concluye que los Vision Transformers son una alternativa sólida para el monitoreo automatizado de biodiversidad en Costa Rica, aunque persisten retos importantes como el desbalance de clases, la escasez de ejemplos para especies raras y la baja calidad de parte de las capturas. Como trabajo futuro, el artículo propone explorar técnicas avanzadas de aumento de datos, aprendizaje semi-supervisado y extracción de comportamiento directamente desde video.</p>

  <img src="/assets/regionalInterest/cameraTraps/results.png" alt="Placeholder de la Figura 4 del paper: comparacion del F1-score por especie entre los modelos" style="max-width: 100%; height: auto; display: block; margin: 20px auto;">

  <p>
    Más información está disponible en el dataset
    <a href="https://huggingface.co/datasets/redbioma/cemede-redbioma-ct/" target="_blank" rel="noopener noreferrer">cemede-redbioma-ct</a>.
  </p>
</div>

### Referencias

- Biarreta-Portillo, M., Mora-Cross, M., Morataya-Sandoval, P., Salinas-Acosta, A., Víquez-Mora, E., López-Venegas, M., Gomez-Solís, W. & Bautista-Solís, P. (2025). *Deep Learning Pipelines for Biodiversity Monitoring: MegaDetector and Vision Transformer Approaches with Camera Traps in Costa Rica*.

- Salinas-Acosta, A., Lopez-Venegas, M., Biarreta-Portillo, M., Morataya-Sandoval, P., Víquez-Mora, E., Mora-Cross, M., Gomez-Solís, W. & Bautista-Solís, P. (2025). *redbioma/cemede-redbioma-ct*. Hugging Face.
<a href="https://huggingface.co/datasets/redbioma/cemede-redbioma-ct/" target="_blank" rel="noopener noreferrer">https://huggingface.co/datasets/redbioma/cemede-redbioma-ct/</a>.

- Sánchez Brenes, R. J., Salinas Acosta, A. & López Venegas, M. F. (2025). *Riqueza, abundancia y actividad de mamíferos silvestres captados en un abrevadero, sendero El Cornizuelo, Costa Rica*. Revista Iberoamericana Ambiente & Sustentabilidad, 8, e474.
<a href="https://doi.org/10.46380/rias.v8.e474" target="_blank" rel="noopener noreferrer">https://doi.org/10.46380/rias.v8.e474</a>.

- Gadot, T., Istrate, Ș., Kim, H., Morris, D., Beery, S., Birch, T. & Ahumada, J. (2024). *To crop or not to crop: Comparing whole-image and cropped classification on a large dataset of camera trap images*. IET Computer Vision.
<a href="https://doi.org/10.1049/cvi2.12318" target="_blank" rel="noopener noreferrer">https://doi.org/10.1049/cvi2.12318</a>.

- Kyathanahally, S. P., Hardeman, T., Reyes, M. et al. (2022). *Ensembles of data-efficient vision transformers as a new paradigm for automated classification in ecology*. Scientific Reports, 12, 18590.
<a href="https://doi.org/10.1038/s41598-022-21910-0" target="_blank" rel="noopener noreferrer">https://doi.org/10.1038/s41598-022-21910-0</a>.
