# Shared parts are just bricks in application

This directory must contain shared parts

Shared part used as little application component as button or some
specifig interface object, or whatever, must be useful for easy adding to
application modules

Shared parts must lie with all stuff they need, maybe even with scss or less
files, so directory must contain:
- <partName>Controller.js
- <partName>Service.js
- <partName>View.js
- _maybe_ <partName>Style.(scss|less|css)
