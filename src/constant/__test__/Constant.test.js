// Testing library
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import constant from './../Constant';

afterEach(cleanup);

describe('Constant', () => {
  it('Should Constant', () => {
      expect(constant.layout).not.toBeNull();
      expect(constant.filters).not.toBeNull();
      expect(constant.noContent).not.toBeNull();
    });
});