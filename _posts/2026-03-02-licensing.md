---
layout: post
title: "Licensing"
---

I'd like to control as much of Sailbrush's code as I can. I never want to be in a situation where I'm waiting on someone else to fix a bug or add a feature. But modern software is incredibly complicated, and it would be a waste of time to build *everything* from scratch. For some functionality, using libraries of code that other people have written is the way to go.

When people release software libraries, they typically publish them under a license that tells you what you're allowed to do with the code. There are a handful of widely used open source licenses that basically say "you can do whatever you want with this code as long as you keep this notice attached."

Sailbrush might directly depend on only a couple dozen libraries, but each of those libraries might depend on several others, and each of *those*... you get the idea. Currently there are a couple hundred libraries in the full dependency tree, and I need to include each of their license notices in Sailbrush so that I'm not breaking the rules.

I don't want to spend too much time on a screen that almost nobody will look at or appreciate, but making it look kind of nice is one way I can show appreciation to the hundreds of people who worked very hard to make the libraries that I'm depending on.

Today I worked on a build script that walks through the dependency tree and gathers licensing information for each of the libraries that I'm using. I want this to be as automatic as possible so that when I add more libraries they'll be added to the list of acknowledgements with no possibility of forgetting any.

It's a little tricky because each notice is customized slightly, typically with the author name and year. I don't want to include hundreds of copies of blocks of text that are all essentially the same, so I'm building a simple template system that only stores the unique bits for each library.
