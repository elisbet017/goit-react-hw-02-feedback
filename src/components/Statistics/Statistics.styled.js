import styled from "styled-components";

export const StatList = styled.ul`
  margin-left: 15px;

  & > li > p {
    color: #c8c8c8;
  }

  & > li:not(:last-of-type) {
    margin-bottom: 7px;
  }
`;