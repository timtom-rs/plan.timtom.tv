---
layout: post
title: "Another One"
---

Another day, another handful of todo list items checked off.

One of the features I added to Rosin yesterday was technically not as fast as it could be. Even though it's exceedingly unlikely that the poor time complexity would ever be a problem in practice, (because in the common case it should only ever deal with a single digit number of elements) I woke up this morning with the realization that having an O(n^2) algorithm anywhere in my code makes me physically uncomfortable, haha. So that was the first thing I fixed today.
