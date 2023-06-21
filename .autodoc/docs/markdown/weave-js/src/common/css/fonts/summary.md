[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/common/css/fonts)

The `.autodoc/docs/json/weave-js/src/common/css/fonts` folder contains two CSS files that define font styles for the Source Code Pro and Source Sans Pro font families. These files ensure that the font families are available and properly styled for use in the larger project.

### source-code-pro.css

This file defines the font styles for the Source Code Pro font family in various weights and styles. The font family is defined as 'Source Code Pro' and each `@font-face` rule specifies a different weight and style combination. 

For example, if the project has a code editor component, it may use the Source Code Pro font family to display code snippets. The component can reference the font family and apply the appropriate weight and style to the code text based on the user's preferences or the default styling defined in the project.

```css
.code-snippet {
  font-family: 'Source Code Pro', monospace;
  font-weight: 400;
}
```

This would apply the regular weight of the Source Code Pro font family to the text in an element with the class 'code-snippet'.

### source-sans-pro.css

This file defines font styles for the Source Sans Pro font family in various weights and styles. The `@font-face` rule is used to specify the font family, style, weight, and source of the font files. The `src` property specifies the location of the font files in different formats, such as WOFF and WOFF2, which are supported by different browsers.

By defining the font styles in this way, the website or application can reference the font family in its CSS and apply the desired font weight and style to different elements. For example, the following CSS rule could be used to apply the regular weight of the Source Sans Pro font to all paragraphs on a website:

```css
p {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
}
```

This code is part of the larger project, which likely includes other CSS and HTML files that reference the Source Sans Pro font family and apply it to different elements. By defining the font styles in a separate file, the project can ensure consistency in the appearance of text across different pages and sections of the website or application.
