# camelCasify

Convert an object to camel case

## Usage

```js
const camelCasify = require('camelCasify');

  const src = {
    content_id: 123,
    parent_content: {
      nested_attr: {
        nested_nested_attr: [
          {
            content_id: 1
          },
          {
            content_types: ['movie', 'episode']
          }
        ]
      }
    }
  };

console.log(camelCasify(src));
// output
/**
  {
    contentId: 123,
    parentContent: {
      nestedAttr: {
        nestedNestedAttr: [
          {
            contentId: 1
          },
          {
            contentTypes: ['movie', 'episode']
          }
        ]
      }
    }
   };
**/

```

## LICENCE
MIT
