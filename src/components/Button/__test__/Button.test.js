// React
import React from 'react';
// Testing library
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import Button from './../Button';

// Mock data
const buttonMock = {
  defaultValue: 'test',
  key: 'test',
  value: 'test',
  type: 'test',
}
const buttonMockFunc = () => {};

afterEach(cleanup);

describe('Button', () => {
  it('Should Render Button With Props', () => {
    const { getByTestId } = render(<Button button={buttonMock} handleButtonClick={buttonMockFunc} />);
    const buttonId = getByTestId('buttonId');
    const element = screen.getByText(/test/i);
    fireEvent.click(buttonId, buttonMockFunc);
    expect(element).toBeInTheDocument();
  });

  it('Button Snapshot', () => {
    const button = renderer.create(<Button  button={buttonMock} handleButtonClick={buttonMockFunc} />).toJSON();
    expect(button).toMatchSnapshot();
  });
});
