# <center>**CSS Masterclass**</center>

---

## <ins>CSS types</ins>

- Inline
- `<style>` tag in `<head>` section.
- External stylesheet in a `.css` file and used by `<link>` tag

## <ins>Combinators</ins>

| Operator  | Description               |
| --------- | ------------------------- |
| `+`       | **adjacent sibling**      |
| `~`       | **general sibling**       |
| `>`       | **Child combinator**      |
| `<space>` | **Descendant combinator** |

## **Examples:-**

```css
/*Adjacent Sibling*/
div + p {
}

/*general sibling*/
div ~ p {
}

/* Child Element */
div > p {
}

/* descendant */
div p {
}
```

---

## <ins>CSS Box Model</ins>

- Everything in CSS is a wrapped in a box
- Each box has:
  - `content-width` & `content-height`
  - `padding`
  - `border`
  - `margin`
- Of these `margin` is not part of the element `width` & `height`
- The `width` & `height` properties affect the content and not the margin, border or padding. Although when the browser renders the element it takes into account all the properties. Hence affecting the size & positioning of the element on the page.
- `box-sizing` has a default value of `content-box` that gives the previous result for `width` and `height`. Changing `box-sizing` to `border-box` will include `border` and `padding` to the `content-width` and `content-height` (does not include margin).

## <ins>CSS Margin Collapse</ins>

- <ins>**Adjacent Siblings**</ins>: CSS will collapse the margin and only apply the bigger one between the elements.
- <ins>**Parent with children that have margin**</ins>: Same as above, the bigger margin is applied. If the parent element has padding, inline-content or a border, this behaviour should not occur, the child margin will instead be added to the content of the wrapping parent element.
- <ins>**An empty element with margins**</ins>: This case probably doesn't occur that often but if you got an element with no content, no padding, no border and no height, then the top and bottom margin will be merged into single margin. Again, the bigger one wins.

## <ins>Shorthand Properties</ins>

Many css properties have shorthand versions for instance:

```css
h1 {
  border-color: #ffddee;
  border-style: solid;
  border-width: 5px;
}
```

These three properties can be squeezed in to one property:

```css
h1 {
  border: 5px solid #ffddee;
}
```

Use shorthands where ever possible but sometimes we need to have extra control on the styling our element.

```css
div {
  margin: 10px; /* all around 10px margin*/
}

section {
  margin: 10px 5px; /*top-bottom 10px; left-right 5px*/
}

p {
  /* top, right, bottom, left*/
  margin: 10px 15px 20px 30px;
}
```

_Refer [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) to see other such properties_

## <ins>Pseudo Classes & Pseudo Elements</ins>

- **pseudo-classes** defines the style of a _special state_ of an element. It is represented using a `:`
- **pseudo-element** defines the style of a _specific part_ of an element. It is represented using a `::`

## <ins>Positioning</ins>

- The `position` property is already set to `static` by browser css engine.
- Available values for `position` is `static`, `absolute`, `relative`, `fixed`, `sticky`.
- When `position` is not `static`, we can assign values to `top`, `bottom`, `left`, `right` properties of the element to position it in the document/webpage.
