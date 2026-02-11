---
layout: post
title: "The Magician's Secret"
---

A magician never reveals their secrets. You might think this is because their methods are so wonderful and fantastic that if mere mortals were to discover the truth, the foundations of the world as we know it would crumble. Rabbits pouring out of every hat, etc.

No, the real secret is that no matter how fantastic the illusion, nine times out of ten, the methods used to achieve it are completely mundane. If you were to know how simple and easy the trick was to accomplish, you would lose all interest and perhaps even your respect for the performer. Luckily, there's a rare second kind of trick. The kind that remains remarkable even after you know how it's done.

Unfortunately, today I've been working on the first kind of trick.

Rust is a compiled language, which means that after you write your code, you run a program that transforms it into machine code that your computer can understand and execute. Any time you make a change, you have to stop your program, recompile it, and run it again from the start. That can take quite a bit of time.

One of the keys to developing high quality software is fast iteration times. When I make a change to my code, I want to see the result as soon as possible. You can imagine that if I have to wait several minutes every time I tweak something, development would be much slower than if I could see the results of my changes immediately.

So, one of the features of my GUI framework is the ability to hot-reload Rust code. When you make a change, the machine code will be automatically swapped out at runtime, keeping your application state intact. It's a bit like swapping out the engine of your car while driving down the highway.

Imagine you're developing something that has several pages, and you want to tweak the behavior of the final page. With most GUI libraries, you would have to start from the beginning and click through to the last page every time you tweak something. My GUI library doesn't have that problem. Make a change, see the results.

This sounds like a really wonderful and fantastic trick, but the reality is pretty mundane. I'll let you in on the secret if you promise not to lose respect for me.

The UI is already built by a standalone function, so all I do is export that function and compile the application as a dynamic library. A watchdog script recompiles the code when it's changed. Then, when the running instance sees a new dylib on disk, it loads it, serializes and deserializes the app state to match the memory layout expectations of the new code, and starts calling the new version of the UI function.

It's very simple, but I haven't seen any other project do this, so I think it's pretty neat.

A refactor I did kind of broke it though, so today has been about getting hot-reload working again. It's the final major feature (if you don't count documentation) that I want to finish up before the initial release of the library.
