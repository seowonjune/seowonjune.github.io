---
title: "ReQOR: Operator-Discrepancy Subspace Repair for Quantization-Conditioned Backdoors in Large Language Models"
author: "Wonjune Seo, Minkyung Park, Saerom Park"
date: "2026-11-24"
journal: "Under review at ICLR 2027"
external_url: "https://arxiv.org/abs/2611.32755"
description: "A training-free defense that repairs quantization-conditioned backdoors in LLMs without any attack information."
tags:
  - "LLM Security"
  - "Quantization"
  - "Backdoor"
---

Quantization-conditioned backdoors (QCBs) make an LLM behave normally at full precision but maliciously once it is quantized for deployment, so detectors that inspect the full-precision model cannot see them.

ReQOR compares the full-precision and quantized versions of each module on the same input state, isolates the module's own quantization effect from upstream drift, and restores the full-precision computation along the dominant directions of this discrepancy in closed form. It needs neither attack information nor gradient-based training.

Across four LLMs, three attacks, three malicious behaviors, and three quantization formats, ReQOR brings the average attack success rate below 4% in most settings while largely preserving utility, and remains effective on an outlier-injection attack where existing defenses largely fail.

[arXiv](https://arxiv.org/abs/2611.32755)
