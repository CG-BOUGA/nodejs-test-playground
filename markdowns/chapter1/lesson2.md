# Become a Ninja

<a href="test"><script>alert('XSS')</script></a>

<a href="https://www.youtube.com/watch?v=2yrMGMyEWsE">Raw link</a>

<a href="https://youtu.be/2yrMGMyEWsE">Minified link</a>

<a href="https://www.youtube.com/embed/watch?v=2yrMGMyEWsE">Embedded link</a>

Iframe:
<iframe width="560" height="315" src="https://www.youtube.com/embed/2yrMGMyEWsE" frameborder="0" allowfullscreen></iframe>

<a href="&quot;><script>alert('XSS')</script><a &quot;" title>Test XSS in href</a>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas
tincidunt eleifend. Nullam tincidunt ligula ipsum, ac volutpat ante viverra
non. Vivamus congue bibendum venenatis. Donec cursus, eros quis aliquet
semper, est turpis gravida lacus, eu porta quam justo vitae mauris. 

@[Coucou]({"stubs": ["pwet.js"], "command": "npm test -- test/test-pwet.js"})

?[This is a quiz!](multiple)
- [ ] A
- [x] B
- [ ] C

Phasellus sollicitudin imperdiet finibus. Vivamus egestas molestie
consectetur. Duis sit amet semper enim. Sed fermentum elit augue, nec semper
tortor ultrices sed. Fusce ac elit suscipit, auctor augue et, sollicitudin
metus. Nunc tempor tincidunt ipsum. Suspendisse potenti. Fusce blandit massa
quam.

Testing blockquotes:
> Blockquote (markdown)

<bloquote>Blockquote (html)</bloquote>

Testing link:
<a href="http://www.google.com">Testing links</a>

Testing iframe:
<iframe id="player" type="text/html" width="640" height="360"
  src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
  frameborder="0"></iframe>

Testing js script:
<script>alert('kikou')</script>

Testing img:
<img src="http://dreamatico.com/data_images/kitten/kitten-3.jpg" style="height: 1000px;">

Testing XSS img onerror:
<img src="http://gloubiboulga-codingame.jpg" onerror="window.alert('xss')">
