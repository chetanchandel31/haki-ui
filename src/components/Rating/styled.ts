import styled, { ThemedStyledProps } from "styled-components";
import { Size } from "../../theme/theme";

type StyledRatingContainerProps = {
  size: Size;
};

type StyledStarProps = {
  selected: boolean;
};

const getSize = ({
  size,
}: ThemedStyledProps<StyledRatingContainerProps, any>) => {
  const sizes: { [key in Size]: string } = {
    sm: "18px",
    md: "24px",
    lg: "30px",
    xl: "34px",
  };

  return sizes[size];
};

export const StyledRatingContainer = styled.div<StyledRatingContainerProps>`
  display: inline-flex;
  align-items: center;
  border: solid 1px black;
  line-height: 1;
  font-size: ${getSize};
  user-select: none;
`;

export const StyledStar = styled.span<StyledStarProps>`
  color: ${({ selected }) => (selected ? "gold" : "grey")};
  transition: color 0.2s;
`;
