---
layout: heroImage
title: Biodiversity monitoring with camera traps in Costa Rica using MegaDetector and Vision Transformers
permalink: /en/camera-traps
lang-ref: camera-traps
background: "{{ site.data.en.images.whale.src }}"
imageLicense: "{{ site.data.en.images.whale.caption }}"
height: 65vh
---

## Summary

<p>This project presents an automated biodiversity monitoring pipeline based on camera traps in Costa Rica, using records collected at the CEMEDE watering site of the National University. The work introduces the <em>cemede-redbioma-ct</em> dataset, a new resource of local species images, and compares two classification strategies: one that uses MegaDetector as a detection and cropping stage before fine-tuning Vision Transformers, and another that fine-tunes MegaDetector itself for direct species classification.</p>

<div style="display: flex; flex-wrap: wrap; gap: 20px;">
  <div style="flex: 1 1 300px;">
    <img src="/assets/regionalInterest/cameraTraps/sample_venado_tinamu_less_quality.jpg" alt="cropped cemede-redbioma-ct samples" style="width: 100%; height: auto; display: block;">
  </div>
  <div style="flex: 2 1 300px;">
    <p>Costa Rica hosts an extraordinary share of global biodiversity, yet monitoring that richness remains costly and time-consuming when images must be reviewed manually. In this case study, camera traps were deployed from 2022 to 2024 in a dry tropical forest fragment next to El Cornizuelo Trail, within the Yaguarundí Forests Biological Corridor, to evaluate the ecological contribution of a watering place built to support local wildlife.</p>
    <p>The images reflect real field conditions: rain, low light, night scenes, motion blur, limited resolution, and animals that appear small or only partially visible. These constraints, together with severe class imbalance, make automatic species classification especially difficult and at the same time especially valuable for accelerating tropical biodiversity monitoring.</p>
  </div>
</div>

<div style="background-color: #e0f2f7; padding: 20px; border-radius: 5px; margin-top: 30px;">
  <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: stretch;">
    <div style="flex: 1 1 240px;">
      <h1 style="font-size: 2em; margin-bottom: 8px; line-height: 1.1;">cemede-redbioma-ct</h1>
      <p style="margin-top: 0;">New open dataset for tropical biodiversity monitoring with camera traps.</p>
      <p><strong>9,000+</strong> processed videos</p>
      <p><strong>29,498</strong> images generated after re-sampling</p>
      <p><strong>11,674</strong> final images across train, validation, and test splits</p>
      <p><strong>26</strong> species classes</p>
      <p style="margin-bottom: 0;">
        Available on
        <a href="https://huggingface.co/datasets/redbioma/cemede-redbioma-ct/" target="_blank" rel="noopener noreferrer">Hugging Face</a>.
      </p>
    </div>
    <div style="flex: 2 1 320px;">
      <img src="/assets/regionalInterest/cameraTraps/trapCamera.png" alt="Methodology overview" style="width: 100%; height: auto; display: block;">
    </div>
  </div>
</div>

<div>
  <p>The proposed method follows two branches. In the first one, MegaDetector is used to detect animals and generate cropped regions of interest; those crops are then used to fine-tune three transformer classifiers: DeiT, Swin, and EfficientViT. In the second branch, MegaDetector itself is fine-tuned to classify species from the original images and their annotations. To avoid leakage, the split into training, validation, and test sets was performed at the video level.</p>
  <p>The study also evaluates model robustness on interaction images containing multiple animals, a relevant scenario for ecological interpretation. Beyond classification, the pipeline includes an individual counting stage for these interaction images, increasing the ecological value of the results for monitoring and conservation.</p>

  <img src="/assets/regionalInterest/cameraTraps/interaccion_identificada_normal.png" alt="Multi-animal interaction image with MegaDetector annotation" style="max-width: 100%; height: auto; display: block; margin: 20px auto;">

  <p>The results show that <strong>DeiT</strong> achieved the best overall performance, with <strong>82% accuracy</strong>, outperforming Swin (76.2%), EfficientViT (74.1%), and the fine-tuned MegaDetector used for direct classification (75.1%). In multi-animal images, DeiT also ranked first with 0.8280 accuracy, followed by EfficientViT (0.7850), Swin (0.7742), and MegaDetector (0.7556). These results are competitive relative to other reported studies, especially given the adverse tropical conditions and the difficulty of the dataset.</p>
  <p>The paper concludes that Vision Transformers are a strong option for automated biodiversity monitoring in Costa Rica, although major challenges remain, including class imbalance, the scarcity of samples for rare species, and the low quality of part of the imagery. Future work includes advanced data augmentation, semi-supervised learning, and the extraction of behavioral information directly from video.</p>

  <img src="/assets/regionalInterest/cameraTraps/results.png" alt="F1-score comparison by species across models" style="max-width: 100%; height: auto; display: block; margin: 20px auto;">

  <p>
    More information is available in the
    <a href="https://huggingface.co/datasets/redbioma/cemede-redbioma-ct/" target="_blank" rel="noopener noreferrer">cemede-redbioma-ct dataset</a>.
  </p>
</div>

### References

- Biarreta-Portillo, M., Mora-Cross, M., Morataya-Sandoval, P., Salinas-Acosta, A., Víquez-Mora, E., López-Venegas, M., Gomez-Solís, W. & Bautista-Solís, P. (2025). *Deep Learning Pipelines for Biodiversity Monitoring: MegaDetector and Vision Transformer Approaches with Camera Traps in Costa Rica*.

- Salinas-Acosta, A., Lopez-Venegas, M., Biarreta-Portillo, M., Morataya-Sandoval, P., Víquez-Mora, E., Mora-Cross, M., Gomez-Solís, W. & Bautista-Solís, P. (2025). *redbioma/cemede-redbioma-ct*. Hugging Face.
<a href="https://huggingface.co/datasets/redbioma/cemede-redbioma-ct/" target="_blank" rel="noopener noreferrer">https://huggingface.co/datasets/redbioma/cemede-redbioma-ct/</a>.

- Sánchez Brenes, R. J., Salinas Acosta, A. & López Venegas, M. F. (2025). *Richness, abundance, and activity of wild mammals captured at a watering site on El Cornizuelo trail, Costa Rica*. Revista Iberoamericana Ambiente & Sustentabilidad, 8, e474.
<a href="https://doi.org/10.46380/rias.v8.e474" target="_blank" rel="noopener noreferrer">https://doi.org/10.46380/rias.v8.e474</a>.

- Gadot, T., Istrate, Ș., Kim, H., Morris, D., Beery, S., Birch, T. & Ahumada, J. (2024). *To crop or not to crop: Comparing whole-image and cropped classification on a large dataset of camera trap images*. IET Computer Vision.
<a href="https://doi.org/10.1049/cvi2.12318" target="_blank" rel="noopener noreferrer">https://doi.org/10.1049/cvi2.12318</a>.

- Kyathanahally, S. P., Hardeman, T., Reyes, M. et al. (2022). *Ensembles of data-efficient vision transformers as a new paradigm for automated classification in ecology*. Scientific Reports, 12, 18590.
<a href="https://doi.org/10.1038/s41598-022-21910-0" target="_blank" rel="noopener noreferrer">https://doi.org/10.1038/s41598-022-21910-0</a>.
