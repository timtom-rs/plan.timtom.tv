---
layout: post
title: "Build Script"
---

Today I got the build script more or less working the way I want. It handles all of the edge cases and configuration parameters I think I'll need. Tomorrow I'll clean it up and consider moving some of the code into a sub-crate that the main app can also depend on. Both the build script and the main app need to be able to render templates, and I'd like to avoid duplicating that logic.
