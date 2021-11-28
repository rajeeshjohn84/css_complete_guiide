# CSS Masterclass

## CSS types

- Inline
- `<style>` tag in `<head>` section.
- External stylesheet in a `.css` file and used by `<link>` tag

## Combinators

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
