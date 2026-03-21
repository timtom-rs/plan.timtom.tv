---
layout: post
title: "Nerd Stuff"
---

I don't remember where I heard this, or how true it is, but someone once said that Photoshop makes a complete copy of the document in memory every time you make a change so that it can roll back to a previous snapshot when you undo an action. It's much simpler to use the same system to undo every type of action than it is to design a custom undo method for every possible operation. How do you undo a brush stroke? You'll have to remember the values of the pixels that were painted over, etc.

In order for Sailbrush to have undo/redo I'm implementing a similar snapshot system, but I'm using structural sharing so the parts of the document that haven't changed between snapshots aren't duplicated in memory. The cool part is that from the code's perspective, it looks like it *did* take a full snapshot, which makes it somewhat easier to work with. So, this approach is faster because fewer bytes need to be copied, it's simpler because I use the same code for undo/redo everywhere, and it doesn't use nearly as much ram.
