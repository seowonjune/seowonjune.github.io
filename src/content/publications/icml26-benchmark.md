---
title: "Proactive Defense Benchmark against Deepfake Generation"
author: "Joonhyuk Baek*, Wonjune Seo*, Jaeyun Kim, Saerom Park, Hoki Kim"
date: "2026-07-01"
journal: "ICML 2026"
external_url: "https://proceedings.mlr.press/v306/baek26e.html"
description: "The first unified benchmark for proactive defenses against deepfake generation, covering disruption, robustness, and transferability."
tags:
  - "Deepfake"
  - "Benchmark"
  - "Generative AI Security"
---

Proactive defenses protect images before they are published so that deepfake generators produce broken outputs, but each work evaluated them with different metrics and generators.

We built the first comprehensive benchmark that evaluates these defenses under one protocol across pixel, perceptual, and identity metrics, and introduced a calibrated identity metric (CIDR) that corrects identity bias introduced by generators themselves. We find that fidelity and identity metrics capture distinct performance axes, and that peak white-box performance often signals overfitting rather than genuine protection.

[Paper](https://proceedings.mlr.press/v306/baek26e.html) · [arXiv](https://arxiv.org/abs/2611.27253) · [Project page](https://proactivedefensebenchmark.github.io/)
