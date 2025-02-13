import type {
  ColorPickerContentProps,
  IconButtonProps,
  StackProps,
} from "@chakra-ui/react";
import {
  ColorPicker as ChakraColorPicker,
  For,
  IconButton,
  Portal,
  Span,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { forwardRef, type CSSProperties, type RefObject } from "react";
import { LuCheck, LuPipette } from "react-icons/lu";

export const ColorPickerTrigger = forwardRef<
  HTMLButtonElement,
  ChakraColorPicker.TriggerProps & { fitContent?: boolean }
>(({ fitContent, children, ...rest }, ref) => (
  <ChakraColorPicker.Trigger
    ref={ref}
    data-fit-content={fitContent || undefined}
    {...rest}
  >
    {children || <ChakraColorPicker.ValueSwatch />}
  </ChakraColorPicker.Trigger>
));

export const ColorPickerInput = forwardRef<
  HTMLInputElement,
  Omit<ChakraColorPicker.ChannelInputProps, "channel">
>((props, ref) => (
  <ChakraColorPicker.ChannelInput ref={ref} channel="hex" {...props} />
));

export const ColorPickerContent = forwardRef<
  HTMLDivElement,
  ColorPickerContentProps &
    ChakraColorPicker.ContentProps & {
      portalled?: boolean;
      portalRef?: RefObject<HTMLElement>;
    }
>(({ portalled = true, portalRef, ...rest }, ref) => (
  <Portal disabled={!portalled} container={portalRef}>
    <ChakraColorPicker.Positioner>
      <ChakraColorPicker.Content ref={ref} {...rest} />
    </ChakraColorPicker.Positioner>
  </Portal>
));

export const ColorPickerInlineContent = forwardRef<
  HTMLDivElement,
  ChakraColorPicker.ContentProps
>((props, ref) => (
  <ChakraColorPicker.Content
    ref={ref}
    animation="none"
    shadow="none"
    padding="0"
    {...props}
  />
));

export const ColorPickerSliders = forwardRef<HTMLDivElement, StackProps>(
  (props, ref) => (
    <Stack ref={ref} gap="1" flex="1" px="1" {...props}>
      <ColorPickerChannelSlider channel="hue" />
      <ColorPickerChannelSlider channel="alpha" />
    </Stack>
  ),
);

export const ColorPickerArea = forwardRef<
  HTMLDivElement,
  ChakraColorPicker.AreaProps
>((props, ref) => (
  <ChakraColorPicker.Area ref={ref} {...props}>
    <ChakraColorPicker.AreaBackground />
    <ChakraColorPicker.AreaThumb />
  </ChakraColorPicker.Area>
));

export const ColorPickerEyeDropper = forwardRef<
  HTMLButtonElement,
  IconButtonProps
>((props, ref) => (
  <ChakraColorPicker.EyeDropperTrigger asChild>
    <IconButton ref={ref} size="xs" variant="outline" {...props}>
      <LuPipette />
    </IconButton>
  </ChakraColorPicker.EyeDropperTrigger>
));

export const ColorPickerChannelSlider = forwardRef<
  HTMLDivElement,
  ChakraColorPicker.ChannelSliderProps
>((props, ref) => (
  <ChakraColorPicker.ChannelSlider ref={ref} {...props}>
    <ChakraColorPicker.TransparencyGrid size="0.6rem" />
    <ChakraColorPicker.ChannelSliderTrack />
    <ChakraColorPicker.ChannelSliderThumb />
  </ChakraColorPicker.ChannelSlider>
));

export const ColorPickerSwatchTrigger = forwardRef<
  HTMLButtonElement,
  ChakraColorPicker.SwatchTriggerProps & {
    swatchSize?: ChakraColorPicker.SwatchTriggerProps["boxSize"];
  }
>(({ swatchSize, children, ...rest }, ref) => {
  return (
    <ChakraColorPicker.SwatchTrigger
      ref={ref}
      style={{ "--color": rest.value } as CSSProperties}
      {...rest}
    >
      {children || (
        <ChakraColorPicker.Swatch boxSize={swatchSize} value={rest.value}>
          <ChakraColorPicker.SwatchIndicator>
            <LuCheck />
          </ChakraColorPicker.SwatchIndicator>
        </ChakraColorPicker.Swatch>
      )}
    </ChakraColorPicker.SwatchTrigger>
  );
});

export const ColorPickerRoot = forwardRef<
  HTMLDivElement,
  ChakraColorPicker.RootProps
>((props, ref) => (
  <ChakraColorPicker.Root ref={ref} {...props}>
    {props.children}
    <ChakraColorPicker.HiddenInput tabIndex={-1} />
  </ChakraColorPicker.Root>
));

const formatMap = {
  rgba: ["red", "green", "blue", "alpha"],
  hsla: ["hue", "saturation", "lightness", "alpha"],
  hsba: ["hue", "saturation", "brightness", "alpha"],
  hexa: ["hex", "alpha"],
} as const;

export const ColorPickerChannelInputs = forwardRef<
  HTMLDivElement,
  ChakraColorPicker.ViewProps
>((props, ref) => {
  const channels = formatMap[props.format];

  return (
    <ChakraColorPicker.View ref={ref} flexDirection="row" {...props}>
      {channels.map((channel) => (
        <VStack gap="1" key={channel} flex="1">
          <ColorPickerChannelInput
            channel={channel}
            px="0"
            height="7"
            textStyle="xs"
            textAlign="center"
          />
          <Text textStyle="xs" color="fg.muted" fontWeight="medium">
            {channel.charAt(0).toUpperCase()}
          </Text>
        </VStack>
      ))}
    </ChakraColorPicker.View>
  );
});

export const ColorPickerChannelSliders = forwardRef<
  HTMLDivElement,
  ChakraColorPicker.ViewProps
>((props, ref) => {
  const channels = formatMap[props.format];

  return (
    <ChakraColorPicker.View {...props} ref={ref}>
      <For each={channels}>
        {(channel) => (
          <Stack gap="1" key={channel}>
            <Span
              textStyle="xs"
              minW="5ch"
              textTransform="capitalize"
              fontWeight="medium"
            >
              {channel}
            </Span>
            <ColorPickerChannelSlider channel={channel} />
          </Stack>
        )}
      </For>
    </ChakraColorPicker.View>
  );
});

export const ColorPickerLabel = ChakraColorPicker.Label;
export const ColorPickerControl = ChakraColorPicker.Control;
export const ColorPickerValueText = ChakraColorPicker.ValueText;
export const ColorPickerValueSwatch = ChakraColorPicker.ValueSwatch;
export const ColorPickerChannelInput = ChakraColorPicker.ChannelInput;
export const ColorPickerSwatchGroup = ChakraColorPicker.SwatchGroup;
