---
layout: post
title: "Kill Your Babies"
---

It's been quite some time since I posted an update! Sorry about that! I've been hard at work, but the daily posts added an unhelpful extra layer of stress, so after the move I kept delaying my next post just a little longer, and before I knew it a few weeks turned into a few months! Not an excuse, just an explanation.

There's some advice commonly given to writers that you should "Kill Your Babies" meaning you should ruthlessly delete characters or scenes that don't serve the broader story, even if you really like them. Turns out that's also really good programming advice!

Earlier this year I talked a lot about the hot-reload feature of Rosin. It lets you swap out compiled Rust code at runtime, which theoretically lets you see the results of your changes faster, speeding up development. Making that feature work required some fun gymnastics in the Rosin codebase, but I didn't foresee the gymnastics that would be required to use it in projects built on top of Rosin. Every addition to Sailbrush needed to be written with hot-reload in mind, and I quickly realized that the tradeoff wasn't worth it. It's honestly very disappointing. I spent so much time getting it to work! So I left the feature in, unused, hoping that one day it would be useful, but the time has come to kill my darling feature. Removing it deletes over 1,500 lines across 20 files, which is a meaningful simplification that should reduce the surface area for bugs and make it easier to maintain Rosin going forward. Rip hot-reload, we hardly knew ye.

But development has been going well! I'll have some videos up in a couple weeks showing off what I've been up to, and I'm excited to get Sailbrush into the hands of users. I want to prioritize everyone who contributed to the fundraiser, and I want to release the app to a smaller group of people at first to catch any obvious low-hanging-fruit problems before it's available to the wider public, so I think it makes sense to have a period of early access for contributors only. I'm aiming for late this month. The macOS version will be first, followed closely by the Windows and Linux versions.

Thanks again for all your support! I can't wait to show you what I've been building these last few months. :)
