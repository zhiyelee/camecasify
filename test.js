import test from 'ava';
import camelcasify from './';

test('array', t => {
  const src = [1, 2, 3];

  t.same(camelcasify(src), [1, 2, 3]);
});

test('regex, Date, primary will not be change', t => {
  const reg = /123/;
  const str = '123';
  const dt = new Date();

  t.same(camelcasify(reg), reg);
  t.same(camelcasify(str), str);
  t.same(camelcasify(dt), dt);
});

test('object', t => {
  const src = {
    'content_id': 123,
    contentType: 'movie',
  };

  t.same(camelcasify(src), {
    contentId: 123,
    contentType: 'movie'
  });
})

test('nested object: val is an array of objec', t => {
  const src = {
    'content_id': 123,
    episodes: [
      {
        content_id: 456,
      },
      {
        content_id: 457
      }
    ]
  };

  t.same(camelcasify(src), {
    contentId: 123,
    episodes: [
      {
        contentId: 456,
      },
      {
        contentId: 457,
      }
    ]
  });
});

test('nested: nested value is an object', t => {
  var src = {
    parent_video: {
      content_id: 123
    }
  };

  t.same(camelcasify(src), {
    parentVideo: {
      contentId: 123
    }
  });
})

test('complex', t => {
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

    const dest = {
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

    t.same(camelcasify(src), dest);

})
