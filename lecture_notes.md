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
- `z-index` can only be applied to elements that has `position` property.
- Two elements with same `position` & `z-index` value of `auto`, the arrangement on the webpage will be based on their order in the HTML document. Elements that occur earlier in the document is send behind the ones that come after.

### `fixed`

- Keeps the element _fixed_ to the webpage as defined by `top`, `right`, `bottom`, `left`.
- Takes element out of document flow.
- Uses position of **view-port**.

### `absolute`

- If the parent element (or any element up the heirarchy) has no value for `position`; then position value of `<html>` is used.
- If we have a positioned parent element, then its position on webpage is used as reference (source point) to position the element.

### `relative`

- Unlike `fixed` & `absolute`, `relative` positioning uses the elements original position into account.
- It is not removed from the document flow.
- The reference point is the element's original position in the DOM.

**`overflow: hidden`**

- When applied to parent element, the child elements outside its margins will not be visible.
- When applied to `body`, it is passed on to `html` element. This is default browser behaviour. Unless `html` already has an explicitly defined `overflow` property.

### `sticky`

- A hybrid of `fixed` & `relative`.
- Behaves like `relative` until a certain threshold is reached in relation to the _viewport_.
- When the threshold is reached, the element behaves like `fixed` position element until the boundaries of parent/content end is reached.

## <ins>Background</ins>

### `background-sizing`

```css
div {
  background-image: url("path/to/image.jpg");
  background-sizing: 100px;
  /* OR */
  background-sizing: contain; /* cover is also a predefined value */
}
```

**`cover`** crops the image to fit the width & height of container.
**`contain`** tries to fit the entire image in the container. Depending on the image size, it may or may not fill the container.

### `background-position`

- Sets the initial position for each background image
- The position is relative to the position layer set by `background-origin`

```css
/* Keyword values */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* <percentage> values */
background-position: 25% 75%;
background-position: 25% left;
background-position: top 25%;

/* <length> values */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Multiple images */
background-position: 0 0, center;

/* Edge offset values */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* Global values */
background-position: inherit;
background-position: initial;
background-position: revert;
background-position: unset;
```

- The `background-position property is specified as one or more _position_ values, separated by commas

<u>_position_</u> : defines an x/y coordinate to place an item relative to the edges of an element's box. If two non-keyword values are used, the <u>first value</u> represents <u>horizontal position</u> & the <u>second value</u> represents <u>vertical position</u>. If only one value is specified, the _second value_ is considered to be **center**. If <u>three || four</u> values are used, the length-percentage values are <u>offsets for the preceding keyword/values.</u>

**1-value syntax** the value may be

- The keyword value `center`, which centers the image.
- One of the keyword values `top`, `left`, `bottom`, `right`. This specifies an edge against which to place the item. The other dimension is then set to 50%, so the item is placed in the middle of the edge specified.
- A _length_ || _percentage_ specifies the x-coordinate relative to the left edge, with the y-coordinate set to 50%

**2-value syntax**: One defines the X and the other defines Y. Each value may be:

- One of the keyword values `top`, `left`, `bottom`, `right`. If `left` || `right` are given here, then one defines X and the other given value defines Y. If `top` || `bottom` are given, then this defines Y and the other value defines X.
- A _length_ || _percenteage_. If the other value is `left` || `right`, then this value defines Y, relative to the top edge. If the other value is `top` || `bottom`, then this value defines X, relative to the left edge. If both values are _length_ || _percentage_ values, then the first defines X and the second defines Y.
- The default value is `top left` || `0% 0%`.

**3-value syntax**: Two values are keyword values, and the third is the offset for the preceeding value:

- The first value is one of the keyword values `top`, `left`, `bottom`, `right` or `center`. If `left` || `right` are given here, then this defines X. If `top` || `bottom` are given, then this defines Y and the other keyword defines X.
- The _length_ || _percentage_ value, if it is the second value, it is the offset for the first value. If it is the third value, it is the offset for the second value.
- The single _length_ || _percentage_ value is an offset for the keyword vlaue that precedes it.
- The combination of one keyword with two _length_ || _percentage_ values is not valid.

**4-value syntax**: The first and third values are keyword value defining X and Y. The second and fourth values are offsets for the preceding X and Y keyword values:

- The first value and third values one of the keyword values `top`, `left`, `bottom`, `right`. If `left` || `right` are given here, then this defines X. if `top` || `bottom` are given, then this defines Y and the other keyword value defines X.
- The second and fourth values are _length_ || _percentage_ values. The second value is the offset for the first keyword. The fourth value is the offset for the second keyword.

#### Regarding Percentages:

- The percentage offset of the given background image's position is relative to the container.

  A value of `0%` means that the left (or top) edge of the background image is aligned with corresponding left (or top) edge of the container. The `0%` mark of the image will be on the `0%` mark of the container.

  A value of `100%` means that the right/bottom edge of the background image is aligned with the right/bottom edge of the container. The `100%` mark of the image will be on the `100%` mark of the container.

  Thus a value of `50%` horizontally or vertically _centers_ the background image as the `50%` of the image will be at the `50%` mark of the container.

  Similarly `background-position: 25% 75%` means the spot on the image that is `25%` from the _left_ and `75%` from the _top_ will be placed at the spot of the container that is `25%` from the container's _left_ and `75%` from the container's _top_.

  > Essentially what happens is the background image dimension is subtracted from the corresponding container dimension, and then a percentage of the resulting value is used as the direct offset from the left/top edge.
  > (container width - image width) - (position x%) = (x offset value)
  > (container height - image height) - (position y%) = (y offset value)
