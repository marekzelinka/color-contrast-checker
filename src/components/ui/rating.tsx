import { RatingGroup } from "@chakra-ui/react";
import { forwardRef, type ReactElement, type ReactNode } from "react";

export const Rating = forwardRef<
  HTMLDivElement,
  RatingGroup.RootProps & {
    icon?: ReactElement;
    count?: number;
    label?: ReactNode;
  }
>(({ icon, count = 5, label, ...rest }, ref) => (
  <RatingGroup.Root ref={ref} count={count} {...rest}>
    {label ? <RatingGroup.Label>{label}</RatingGroup.Label> : null}
    <RatingGroup.HiddenInput />
    <RatingGroup.Control>
      {Array.from({ length: count }).map((_, index) => (
        <RatingGroup.Item key={index} index={index + 1}>
          <RatingGroup.ItemIndicator icon={icon} />
        </RatingGroup.Item>
      ))}
    </RatingGroup.Control>
  </RatingGroup.Root>
));
