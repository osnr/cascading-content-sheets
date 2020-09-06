# [cascading-content-sheets](https://osnr.github.io/cascading-content-sheets/)

[![](ccs-example.gif)](https://twitter.com/rsnous/status/1302189421324767235)

See [index.html](https://osnr.github.io/cascading-content-sheets/).

### how does it work?

See [ccs.js](ccs.js). (You should be able to just add that to any
page, by the way.)

It polls `window.getComputedStyle()` for every element on the page on
every animation frame, then sees if any of the custom properties have
changed, and if so, it does some action like setting `onclick` handler
or changing `innerText`.

It will be, uh, really slow, but I think the properties do cascade
correctly?

### why

I have no idea.

I guess I'm [not much of a
believer](https://twitter.com/rsnous/status/1262867035828023296) in
the so-called "separation of presentation and content", so I like to
find ways to make fun of it.

... and [I](https://twitter.com/rsnous) kind of like the subversive
energy of [learning further
into](https://twitter.com/rsnous/status/1113157229207740416) the
low-status thing (CSS) and augmenting it to do more stuff, instead of
giving up on CSS in favor of doing everything in "Real Programming"
(which is how I see CSS-in-JS or whatever).

You could imagine a smooth, low-stress experience for
[someone](https://twitter.com/meekaale/status/1281178177856049152) who
isn't a programmer but knows some CSS, where they can start tweaking
content and adding
[bits](https://twitter.com/rsnous/status/720460081645625344) of
dynamic behavior without the
[dread](https://twitter.com/rsnous/status/1257165715238313986) of
leaving
familiar-[feeling](https://twitter.com/rsnous/status/1301276635358851072)
CSS world.

plus there is a lot of cool, concrete, direct-manipulation tooling
around CSS. You can point the browser inspector at an element, you can
see all the properties in one place, you can do queries and install
effects [without writing explicit
loops](https://twitter.com/rsnous/status/1269019565188501504), you can
turn things off and back on...
