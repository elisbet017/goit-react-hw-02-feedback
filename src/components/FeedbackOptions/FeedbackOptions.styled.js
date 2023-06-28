import styled from 'styled-components';

export const Button = styled.button`
  background-color: inherit;
  border-radius: 20px;
  border: 2px solid #242424;
  padding: 7px 12px;
  color: #c8c8c8;
  cursor: pointer;
  transition: all 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:first-of-type {
    margin-left: 15px;
  }
  &:not(:first-of-type) {
    margin-left: 7px;
  }

  &:nth-of-type(1):hover {
    background-color: #488d00;
  }
  &:nth-of-type(2):hover {
    background-color: #676866;
  }
  &:nth-of-type(3):hover {
    background-color: #bc4646;
  }
`;
