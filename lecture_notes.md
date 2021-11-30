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

## <ins>CSS Margin Collapse</ins>

- <ins>**Adjacent Siblings**</ins>: CSS will collapse the margin and only apply the bigger one between the elements.
- <ins>**Parent with children that have margin**</ins>: Same as above, the bigger margin is applied. If the parent element has padding, inline-content or a border, this behaviour should not occur, the child margin will instead be added to the content of the wrapping parent element.
- <ins>**An empty element with margins**</ins>: This case probably doesn't occur that often but if you got an element with no content, no padding, no border and no height, then the top and bottom margin will be merged into single margin. Again, the bigger one wins.
