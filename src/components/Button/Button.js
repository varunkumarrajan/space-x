// React
import React from 'react';
// Prop types
import PropTypes from 'prop-types'; // ES6
// Styled component
import styled from 'styled-components';

// Styled button wrapper
const ButtonWrapper = styled.button`
  background-color: ${(props) => (props.active ? '#5aa55a' : '#afe3af')};
  display: inline-block;
  margin: 8px 18px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 4px 20px;
  font-size: 14px;
  line-height: 1.3;
  border-radius: 5px;
  width: auto;
  &:hover {
    background-color: #5aa55a;
  }
  &:focus {
    outline: 0;
  }
`;

/**
 * @description html button with extended style with styled component
 * @param {object} { button, handleButtonClick }
 */
const Button = ({ button, handleButtonClick }) => (
  <ButtonWrapper
    data-testid="buttonId"
    active={
      button.defaultValue
        ? button.defaultValue.split(',').includes(button.key)
        : false
    }
    onClick={() => handleButtonClick(button.key, button.type)}
  >
    {button.value}
  </ButtonWrapper>
);

// Default export
export default Button;

// Default props
Button.defaultProps = {
  button: {
    defaultValue: '',
    key: '',
    value: '',
    type: '',
  },
  handleButtonClick: () => {},
};

// Prop types
Button.propTypes = {
  button: PropTypes.shape({
    defaultValue: PropTypes.string,
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
  handleButtonClick: PropTypes.func.isRequired,
};
