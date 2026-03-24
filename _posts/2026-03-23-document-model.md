---
layout: post
title: "Document Model"
---

I spent more time today improving the document model data types. Rust makes structural sharing really easy with the Arc type, but the naive approach causes lots of memory fragmentation and results in pointer chasing, which would slow things down when dealing with large files. The hard part is designing things in a way that supports all of the features that I need, while also having good data locality so everything remains fast, even when scenes get very complicated. You can think of the document model as the heart of the Sailbrush codebase, so it's worth taking the time to get it right.

I also spent a few hours on boring business accounting stuff this evening.

Overall, a very productive day!
