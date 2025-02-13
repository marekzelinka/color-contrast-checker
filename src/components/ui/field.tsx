import { Field as ChakraField } from "@chakra-ui/react";
import { forwardRef, type ReactNode } from "react";

export const Field = forwardRef<
  HTMLDivElement,
  Omit<ChakraField.RootProps, "label"> & {
    label?: ReactNode;
    helperText?: ReactNode;
    errorText?: ReactNode;
    optionalText?: ReactNode;
  }
>(({ label, children, helperText, errorText, optionalText, ...rest }, ref) => (
  <ChakraField.Root ref={ref} {...rest}>
    {label ? (
      <ChakraField.Label>
        {label}
        <ChakraField.RequiredIndicator fallback={optionalText} />
      </ChakraField.Label>
    ) : null}
    {children}
    {helperText ? (
      <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
    ) : null}
    {errorText ? (
      <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>
    ) : null}
  </ChakraField.Root>
));
