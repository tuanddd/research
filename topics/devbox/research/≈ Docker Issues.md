---
title: Docker Build Issues
date: 2024-08-01
description: An overview of the non-deterministic nature of Docker builds and related issues
authors:
  - bievh
tags:
  - docker
  - devbox
---

Docker build is not deterministic. This means that with the same `Dockerfile`, different build times (or builds on different machines) can result in different outcomes.

This issue stems from the fact that _Docker build has access to the public internet_. While this ability is often necessary for pulling packages from repositories like Ubuntu's, it can also lead to some unexpected consequences. One of these consequences is mentioned above.

Some specific issues related to this problem include:

- [Unstable package installation](Unstable%20package%20installation.md)
- [Shadow copies](Shadow%20copies.md)
