---
layout: post
title: "Good Enough"
---

I once spoke with a consultant who admonished developers for being too much like the Dwarves from The Lord of the Rings. He said that developers will waste their time trying to build the perfect machine out of mithril, and that there are more important things to worry about than craftsmanship. I'm sorry to say that I've yet to read The Lord of the Rings, so I can't comment on the lore-accuracy of his statement, but I know what he means.

Unfortunately for him, I care deeply about my craft. I want to make Sailbrush incredibly high quality. First and foremost, it should be very stable. I could wax lyrical about all the ways that Rust helps me achieve that, but I'll spare you for now. Second, I'm a firm believer that performance is a feature. Optimization is something that's usually left until later in development, but it's important to at least be aware of the performance implications of design decisions made early in development. And third, the interface needs to be well designed and intuitive. The way to achieve that is with proper user testing, but it'll be some time until I reach that stage.

That being said, Mr. Consultant had a point. We only have so much time on this earth and we must spend it wisely. I really enjoy digging into the details, understanding constraints, and working out a solution to a problem that's mathematically perfect. But that takes time, and doing that for every module and feature across a massive codebase is not always wise.

So, my strategy for Sailbrush is twofold:

One, I must ruthlessly limit scope in the early stages of development. Eventually I want this software to have every feature an animator could ever want without sacrificing even an ounce of usability. This is an ambitious goal, and the only way to accomplish such goals is by starting small.

Now, even with a modest list of initial features, this is still a sizeable project! So, the second part of the strategy is what I might call the Eighty Percent Rule. The best laid plans rarely survive contact with reality, and early in development you never know if a module will need to be re-written, merged with another, or thrown out entirely. When you're still figuring out the shape of a problem, it doesn't make sense to build the solution out of mithril. So right now I'm not worried about making every line of code perfect. I'm ok with getting something to eighty percent complete and moving on to the next. I'm still getting the basics working and allowing myself the freedom to make major architectural changes if needed. Eventually I'll go back and build automated tests, do in-depth performance work, and all the other things it takes to really have confidence in a piece of code, but working out the gestalt first is more important.

All of that is to say, the build script I posted about earlier this week is at eighty percent. Nowhere near the quality of Rosin, but good enough to move on to the next bit.

In other news, I'm excited to announce that Hank Green (from the internet) just contributed $10,000 to the Sailbrush fundraiser, bringing the total raised to 69% of the goal. Nice.

Hank is one of my personal heroes, and I was very lucky to work with him for several years early in my career. He believed in me when I was just an over-eager nineteen year old, and it means the world that all these years later he still believes in me.

Thanks, Hank.
