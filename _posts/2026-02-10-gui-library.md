---
layout: post
title: "GUI Library"
---

I woke up before my alarm today because I'm so excited to work. Still taking it easy at the gym because the last time I came back from a hiatus I pushed too hard and it made me so sore I couldn't straighten my arms all the way. Spent a week walking around like Mr. Burns.

I re-read yesterday's post and I'm a little embarrassed at how poorly it's written. But I guess the point of these is to post a daily stream of consciousness so everyone can get a sense for what I'm currently thinking about and working on, so it's fine. There's no time to edit, I have code to write!

When building desktop applications, people typically use a library of pre-existing code that makes it easy to get up and running quickly. When I first started dreaming of Sailbrush in like 2018, I already knew that none of the popular GUI libraries were quite what I needed. One option would be to build on top of Electron, but I felt that packaging an entire web browser to run an app that should be incredibly light-weight and high-performance wasn't an option. It might have made development easier, but I wouldn't be proud of the final product.

I also strongly feel that Rust is a breakthrough technology because the language design makes certain types of bugs impossible to write. Microsoft has [famously said](https://www.microsoft.com/en-us/msrc/blog/2019/07/a-proactive-approach-to-more-secure-code) that about 70% of their bugs would have been prevented by Rust. (That's oversimplifying, but essentially true) Unfortunately, Rust is a very young language, which means the ecosystem didn't have a wide range of GUI libraries available in 2018. That's slowly changing, but I didn't want to wait around hoping someone else would build what I needed, so I built my own.

For context: in 2014 I asked on a forum for advice about building my own GUI library, and I remember somebody said that it was almost too much work for one person, so I'm very proud to have come this far.

I feel strongly that it's one of the best GUI libraries in the Rust ecosystem, and I'm excited to publish it so that other Rust devs can build with it. Before I release it, there are a few things I want to polish up. Today I integrated [AccessKit](https://accesskit.dev) so that applications can easily support screen readers and assistive technologies. I'm not sure how important screen reader support will be for an animation tool, but I know other applications will benefit, so it was on my todo list.

I have one other major feature and a bunch of documentation to write before I publish, but I think I can finish that this week. Very exciting!
