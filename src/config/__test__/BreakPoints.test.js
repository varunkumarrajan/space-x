// Testing library
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import device from './../BreakPoints';

afterEach(cleanup);

describe('Break Points', () => {
  it('Should Break Points', () => {
    expect(device.mobile).not.toBeNull();
    expect(device.tablet).not.toBeNull();
    expect(device.desktop).not.toBeNull();
    expect(device.desktopL).not.toBeNull();
  });
});
