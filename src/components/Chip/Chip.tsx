import React, { MouseEventHandler, ReactNode } from "react";
import { ColorName } from "../../theme/theme";
import { Text } from "../Typography/Typography";
import { StyledChip, StyledCrossButton } from "./styled";

export type ChipSize = "sm" | "md";
export type ChipVariant = "filled" | "outlined";

export type HakiChipProps = {
  children: ReactNode;
  color?: ColorName;
  /** if this function is passed as prop, a cross icon button will be present on the chip
   *  component and this function will run when that icon is clicked
   */
  onClose?: MouseEventHandler<HTMLSpanElement>;
  size?: ChipSize;
  variant?: ChipVariant;
};

export const Chip = ({
  children,
  color = "primary",
  onClose,
  size = "md",
  variant = "filled",
}: HakiChipProps) => {
  return (
    <StyledChip color={color} onClose={onClose} size={size} variant={variant}>
      <Text variant="body2">{children}</Text>

      {onClose && (
        <StyledCrossButton
          color={color}
          onClick={onClose}
          size={size}
          variant={variant}
        >
          ✕
        </StyledCrossButton>
      )}
    </StyledChip>
  );
};
