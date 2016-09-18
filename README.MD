# This is realy dump seed

> There is a big chance that you want to edit config

### [ESlint](http://eslint.org/)
> (maybe you want use [JSlint](http://www.jslint.com/) or 
> [JShint](http://www.jslint.com/)? or [JS))

eslint dependencies with rules may be optional:
- eslint-config-wallmart
- eslint-config-default
- eslint-config-standard
  
you may want to remove unnecessary or use something else?  

### [Editorconfig](http://editorconfig.org/)

There is a default .editorconfig file, which must be good enouth, but you 
may wat to use [eslint-to-editorconfig](https://github.com/sun1x/eslint-to-editorconfig)
to generate another by you specifig eslint file. If it so, next command may 
be used:
```bash
nodejs ./node_modules/eslint-to-editorconfig/bin.js
```

### [Babel](https://babeljs.io/)
for using es6 syntax

### [SASS](http://sass-lang.com/)
ofc you may want to use [LESS](http://lesscss.org/), if so changing sass to
less in config files will be enough, so you need `less-loader` instead of
`sass-loader` for webpack and you'l need node-less i guess

