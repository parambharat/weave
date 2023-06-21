[View code on GitHub](https://github.com/wandb/weave/weave-js/src/common/util/html.ts)

The `weave` project includes a file that contains three functions: `blankifyLinks`, `shiftHeadings`, and `escapeHTML`. These functions are designed to manipulate HTML strings in various ways.

The `blankifyLinks` function takes an HTML string as input and returns a modified version of the string where all anchor tags (`<a>`) have a `target="_blank"` attribute added to them. This is useful for security reasons, as it ensures that links opened from the page will not replace the current page, potentially leading to data loss or other issues. Here is an example usage of the `blankifyLinks` function:

```javascript
const html = '<a href="https://example.com">Example</a>';
const modifiedHtml = blankifyLinks(html);
console.log(modifiedHtml); // '<a href="https://example.com" target="_blank">Example</a>'
```

The `shiftHeadings` function is designed to modify the heading tags (`<h1>` through `<h6>`) in an HTML string. Specifically, it shifts all headings down by one level (e.g. `<h1>` becomes `<h2>`, `<h2>` becomes `<h3>`, etc.). This is done to prevent users from adding `<h1>` tags for SEO purposes, which can negatively impact the accessibility of the page. Here is an example usage of the `shiftHeadings` function:

```javascript
const html = '<h1>Heading 1</h1><h2>Heading 2</h2>';
const modifiedHtml = shiftHeadings(html);
console.log(modifiedHtml); // '<h2>Heading 1</h2><h3>Heading 2</h3>'
```

The `escapeHTML` function is used to escape special characters in an HTML string, such as `<`, `>`, and `&`. This is important for security reasons, as it prevents users from injecting malicious code into the page. Here is an example usage of the `escapeHTML` function:

```javascript
const html = '<script>alert("Hello!");</script>';
const escapedHtml = escapeHTML(html);
console.log(escapedHtml); // '&lt;script&gt;alert(&quot;Hello!&quot;);&lt;/script&gt;'
```

Overall, these functions are useful for ensuring the security and accessibility of HTML content in the `weave` project.
## Questions: 
 1. What does the `blankifyLinks` function do?
   - The `blankifyLinks` function takes an HTML string as input and adds `target="_blank"` attribute to all anchor tags in the HTML string.
2. Why is the `shiftHeadings` function necessary?
   - The `shiftHeadings` function is used to shift all headings in the HTML string down by one level to prevent users from adding `h1` tags for SEO purposes.
3. What does the `escapeHTML` function do?
   - The `escapeHTML` function takes a string as input and replaces special characters like `&`, `<`, `>`, `"`, and `'` with their corresponding HTML entities to prevent XSS attacks.