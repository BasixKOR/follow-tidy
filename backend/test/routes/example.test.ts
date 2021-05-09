import { test } from 'tap';
import { build } from '../helper';

test('example is loaded', async (t) => {
  const app = await build(t);

  const response = await app.inject({
    url: '/example',
  });

  t.equal(response.payload, 'this is an example');
});
