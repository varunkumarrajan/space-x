// Testing library
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import labels from './../Labels';

afterEach(cleanup);

describe('Labels', () => {
  it('Should Labels', () => {
      expect(labels.layout).not.toBeNull();
      expect(labels.filters).not.toBeNull();
      expect(labels.noContent).not.toBeNull();
    });
});