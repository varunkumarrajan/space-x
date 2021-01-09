// Testing library
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import config from './../Config';

afterEach(cleanup);

describe('Config', () => {
  it('Should Config', () => {
      expect(config.apiURL).not.toBeNull();
      expect(config.filterTypes).not.toBeNull();
      expect(config.filterTypes).not.toHaveLength(0);
      expect(config.filterDetails).not.toBeNull();
    });
});