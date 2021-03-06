import { ReactNode } from "react";
import styled, { ThemedStyledProps } from "styled-components";
import { Size } from "../../theme/theme";

type StyledInputProps = {
  _size: Size;
  error: boolean;
  disabled: boolean;
  leftAdornment?: ReactNode;
  rightAdornment?: ReactNode;
};

type StyledInputContainerProps = {
  fullWidth: boolean;
};

/* helpers start */
const getHeight = (props: ThemedStyledProps<StyledInputProps, any>) => {
  const mapSizeToHeights: { [key in Size]: string } = {
    lg: "2.5rem",
    md: "2rem",
    sm: "1.5rem",
    xl: "3rem",
  };

  return mapSizeToHeights[props._size];
};

const getFontSize = (props: ThemedStyledProps<StyledInputProps, any>) => {
  const mapSizeToFontSize: { [key in Size]: string } = {
    lg: "1rem",
    md: "0.875rem",
    sm: "0.75rem",
    xl: "1.125rem",
  };

  return mapSizeToFontSize[props._size];
};

const getPadding = (props: ThemedStyledProps<StyledInputProps, any>) => {
  const mapSizeToPadding: { [key in Size]: string } = {
    lg: "0 1rem",
    md: "0 0.75rem",
    sm: "0 0.5rem",
    xl: "0 1rem",
  };

  return mapSizeToPadding[props._size];
};
/* helpers end */

export const StyledInputContainer = styled.span<StyledInputContainerProps>`
  display: inline-flex;
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? `100%` : `auto`)};

  & > .error-text {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translate(0, 110%);
    font-size: 0.625rem;
    margin-left: 2px;
  }
`;

export const StyledInput = styled.input<StyledInputProps>`
  padding: ${getPadding};
  height: ${getHeight};
  width: 100%;
  outline: none;

  border-radius: 0.25rem;
  border: solid 2px
    ${({ theme, error }) =>
      error ? theme.colors.danger.main : theme.colors.disabled.main};
  font-size: ${getFontSize};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.disabled.light : `transparent`};
  transition: border-color 0.4s, box-shadow 0.4s;

  &:hover {
    border-color: ${({ theme, error }) =>
      error ? theme.colors.danger.dark : theme.colors.disabled.dark};
    ${({ disabled, theme }) =>
      disabled
        ? `
        cursor: not-allowed;
        border-color: ${theme.colors.disabled.main};
    `
        : ``}
  }
  &:focus {
    border-color: ${({ theme, error }) =>
      error ? theme.colors.danger.main : theme.colors.primary.main};
    box-shadow: ${({ theme, error }) =>
        error ? theme.colors.danger.main : theme.colors.primary.main}
      0 0 0 1px;
  }
  /* create space for start or end adornments */
  ${({ leftAdornment }) => (leftAdornment ? `padding-left: 1.5rem;` : ``)}
  ${({ rightAdornment }) => (rightAdornment ? `padding-right: 1.5rem;` : ``)}
`;

export const StyledLeftAdornmentContainer = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

export const StyledRightAdornmentContainer = styled(
  StyledLeftAdornmentContainer
)`
  left: auto;
  right: 0.5rem;
`;
