# heading-outline
[![NPM](https://nodei.co/npm/heading-outline.png)](https://nodei.co/npm/heading-outline/)

See the outline of your html document as semantically structured by your heading 
elements. This is useful to optimize your page for accessibility (a11y). 

This module is inspired by the same feature in the [WAVE testing tool](wave.webaim.org)

# Usage

If you pipe this 

```html
<html>
  <head>
    <title></title>
  </head>
  <body>
    <h1>heading <span>1</span></h1>
    What is going on?
    <h2>heading 2</h2>
    <h3><strong>heading 3</strong></h3>
    <h2>heading 2b</h2>
    wat
  </body>
</html>
```
into it like this:

```sh
cat index.html | heading-outline
```

you would get an outline like this

```
- heading 1
-- heading 2
--- heading 3
-- heading 2b
```