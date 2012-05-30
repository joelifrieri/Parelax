Parelax is a jQuery plugin that provides parallax scrolling on iOS.
-------------------------------------------------------------------

Based on code originally by Francesco Bertelli (<a href="http://twitter.com/_ll_l">@_ll_l</a>), 
Parelax allows you to pass a few elements to a jQuery method to easily create Parelax scrolling.
(The name is a dumb pun: parallax scrolling is hard. So why not pa-RELAX? GET IT YOU GUYZ?!)

It's very light, right now, but I plan on adding lots of optional features in the future,
including negative scrolling, horizontal scrolling, and callbacks for the the initial touch events.

For now, feel free to fork! Thanks so much!

How to use Parelax
------------------

Within document.ready, invoke parelax on the jQuery element that you want to scroll, like the wrapper element of a blog article or something. 
You want to aim higher up in the DOM rather than lower, so like...don't put it on a `p` tag.

Example: `$("#wrapper").parelax();`

Next, create an object literal within document.ready. This is where we pass parelax the other elements to scroll and how fast to scroll them.
Names are mostly unimportant here, with two exceptions, which we'll get into in a second:

Example: `$(document).ready(function(){  
	var optionzzz = {  
		navigation: {  
			"element": $("#nav"),  
			"speed": 3  
		},  
		articleHeadline: {  
			"element": $("#headline"),  
			"speed": 0.5  
		}  
	};  
});`


The object literal can have any name you want, and its immediate children can have any name you want, so feel free to name things in a way that makes sense to you.
However, the properties of those child elements must be named "element" and "speed". 


Within `element`, pass the jQuery object of the element you want to move around.
Within `speed`, set the speed at which this object will move in relation to how far you've scrolled. It's a coefficient, so numbers between 0 and 1 will make the object move
slower than scrolled, and a number higher than 1 will make it scroll faster. If that description is confusing, just play around with it. You'll get it in like 2 seconds.


Next, pass the object literal we just created to parelax as an argument.
Example: `$("#wrapper").parelax(optionzzz);`

It should be working at this point! Ta-da!

There's only one option, currently. You're able to pass a pixel value of how far you'd like to be able to scroll before stopping as an argument.

Example: `$("#wrapper").parelax(optionzzz, 500);`

So in that example, the #wrapper element and the other elements on the page would scroll up 500 pixels before stopping. Simple, huh?


Who made this?
--------------
Parelax was made by <a href="http://hugsformonsters.com">Joe Lifrieri</a> (<a href="http://twitter.com/hugsformonsters">@hugsformonsters</a>), 
a product designer at <a href="http://hugeinc.com">HUGE</a> in Brooklyn.

If you need any help, I'll do my best! This plugin is suuuper experimental and very young.
Contact me via email (<a href="mailto:joe@hugsformonsters.com">joe@hugsformonsters.com</a>) and I'll do my best to sort things out!
This is my first jQuery plugin ever and the first thing I've ever released open source, so be gentle :P

Big thanks to the following for all their help:
* Rafael Mumme (<a href="http://twitter.com/mumme">@mumme</a>)
* Francesco Bertelli (<a href="http://twitter.com/_ll_l">@_ll_l</a>)
* Brett Bergeron (<a href="https://twitter.com/brettbergeron">@brettbergeron</a>)

Legal
-----

Copyright (c) 2012, Joe Lifrieri

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

This program is free software. It comes without any warranty, to
the extent permitted by applicable law. You can redistribute it
and/or modify it under the terms of the Do What The Fuck You Want To Public License, 
Version 2, as published by Sam Hocevar. See
http://sam.zoy.org/wtfpl/COPYING for more details.
