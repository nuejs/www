
# Syntax highlighting
Nue uses [Glow](/blog/introducing-glow/) syntax highlighter for styling code blocks:

[code numbered="true"]
  // This is a styled code block

  >Highlight lines by prefixing them with ">", "+", or "-"

  Here's a •highlighted region•

  export default { ••bring out errors•• }

  // enable line numbers with `numbered` property
  const html = glow(code, { •numbered: true• })


## Special characters
Use the following characters at the beginning of the line to highlight them:

[.options]
  `>` highlights the line. The default background color is blue.

  `-` marks the line as removed with a red background (default)

  `+` marks the line as inserted with green background (default)

  `|` highlights the line. Similar to ">" but for markdown syntax only

  `\` escapes the first character


Use bullet character (`•`) to highlight text regions within a line. The following sentence

`These •two words• are highlighted and ••these words•• are erroneous`

Is rendered as:

```
These •two words• are highlighted and ••these words•• are erroneous
```


## Classless design system [system]
Glow generates a classless HTML layout where the language tokens are marked up with semantic HTML tags. The generated structure looks like this:

```
<pre glow>
  <code language="typescript">
    <sup>// a comment</sup>
    <em>"A string value"</em>
    ...
  </code>
</pre>
```

The ´glow` attribute on the root elements acts as a hook for external styling and the styling is based on CSS variables. For example:

```
/* setting glow variables */
[glow] {
  --glow-base-color: #eee;
  --glow-primary-color: #823;
  --glow-padding: 2em;
}
```

### CSS variable reference
List of all CSS variable names and the associative HTML elements

[table.glow-colors "CSS variable | Default value | HTML tag | Description"]
  - accent-color    | \#419fff       | strong   | special emphasis
  - base-color      | \#555          |          | foreground color
  - char-color      | \#64748b       | i        | brackets, commas...
  - comment-color   | \#4e5d61       | sup      | comments
  - counter-color   | \#475569       |          | line numbers
  - del-color       | 250, 110, 130  | del      | deleted lines
  - error-color     | \#ff0          | u        | erroreous words
  - ins-color       | 50, 210, 190   | ins      | inserted lines
  - line-color      | 50, 180, 250   | dfn      | highlighted lines
  - line-opacity    | 0.15           |          | highligted line opacity
  - padding         | 1em            |          | container padding
  - primary-color   | \#7dd3fc       | b        | primary accent color
  - secondary-color | \#f472b6       | em       | secondary accent color
  - selected-color  | \#2dd4bf26     | mark     | marked code
  - special-color   | \#fff          | label    | special words to stand out


#### Exceptions

* Some of the variables are attached to a root element (`[glow]`) and others for HTML elements inside the root when the element name is explicitly given on the list.

* Glow separates lines with a `span` element and the `--glow-line-number` variable is attached to `span:before` pseudo-elements.

* line/del/ins colors are given as comma comma-separated list of RGB values so that they can be manipulated with CSS color functions. They represent the bright border color on the left edge of the highlighted line. The line background color is calculated with the RGB values and the `--glow-line-opacity` variable. Setting a value such as `rgb(1, 2, 3)` won't work.


### Light theme
Glow uses a dark theme by default, because according to [a survey][survey] 70% of software engineers prefer a Dark theme IDE over a light theme. It's easy to build a light theme by adjusting the variables or using this [light.css][light] as a template.

[light]: //github.com/nuejs/nue/blob/dev/packages/glow/css/light.css
[survey]: //surajondev.com/2021/02/11/why-most-developers-prefer-the-dark-theme-ide/


### Language-specific tweaks
Use the `language` attribute for language-specific CSS tweaks:

```
[language="html"] {
  --glow-accent-color: green;
}
```

### Bolding, italics, and other formatting
By default glow uses bolding only together with `--glow-special-color`. Other than that all elements have no formatting. Use the HTML element selectors to fine-tune:

```
[glow] {
  em { font-weight: bold }
}
```

### Using your stylesheet
You can skip the inclusion of glow.css by setting `glow_css: false` in the [configuration](/docs/reference/configuration-options.html).


### Nue users
Nue has built-in support of Glow in fenced code blocks and there are three [Nuemark tags](../reference/nuemark-tags.html#code) to be used in your markdown content: `[code]`, `[codeblocks]`, and `[codetabs]`.

### Standalone users
If you are using Glow as a standalone library (outside the Nue environment), you have two CSS files available under the [minified](//github.com/nuejs/nue/tree/master/packages/glow/minified) directory:

- `glow.css` a 0.8 KB (minzipped) with all features
- `glow.nano.css` 0.5 KB (minzipped) with all but highlighting features

And of course, you can always replace these with your own CSS if these aren't working for your use case.


## JavaScript API
Glow exports a single function called `glow`. Here's how it works:


[code numbered="1"]
  import { glow } from 'nue-glow'

  const code = '<h1>Hello, World</h1>'

  >const html = glow(code, { language: 'html', numbered: true })

  console.info(html) // <code language="html">...</code>


[.options]
  `language` tells glow the language of the code. This is optional. When not provided, glow attempts to guess the language.

  `numbered` is a boolean flag indicating whether line numbers should be rendered

If you are formatting markdown, the language parameter "md" must be given so that Glow can deal with all the special cases like "-" starts a new list item, instead of a deleted line.

### Return value

```
<code language="html">...</code>
```


Note that the `<pre>` code is not returned. It is reserved for the markdown processor who can assign any attributes an class names to it.


## Marked integration
Here's how you integrate Glow into [Marked](//github.com/markedjs/marked) markdown processor:

```
import { marked } from 'marked'
import { glow } from 'nue-glow'

// setup a custom renderer for code blocks
const renderer = {
  code(input, language) {
    const html = glow(input, { language, numbered: true })
    return `<pre glow>${ html }</pre>`
  }
}
marked.use({ renderer })

// render markdown with a Glow- formatted code block
const html = marked.parse('# Hello, World\n```\n// sample code\n```');
```





