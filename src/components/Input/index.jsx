import styled, { css } from "styled-components";

const Base = css`
  border: 0px;
  padding: 5px;
  &:focus {
    outline: none;
  }
`;
export const Input = styled.input`
  ${Base}
`;
export const TextAreaMessage = styled.textarea`
  ${Base}
`;
