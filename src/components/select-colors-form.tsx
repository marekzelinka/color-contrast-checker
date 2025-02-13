import type { Colors } from "@/types";
import { GridItem, parseColor, SimpleGrid } from "@chakra-ui/react";
import type { Dispatch, SetStateAction } from "react";
import {
  ColorPickerArea,
  ColorPickerChannelSlider,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerInput,
  ColorPickerRoot,
  ColorPickerTrigger,
} from "./ui/color-picker";
import { Field } from "./ui/field";

export function SelectColorsForm({
  colors,
  onChange,
}: {
  colors: Colors;
  onChange: Dispatch<SetStateAction<Colors>>;
}) {
  return (
    <SimpleGrid columns={2} gap={6}>
      <GridItem>
        <Field id="foregroundColor" label="Text color">
          <ColorPickerRoot
            defaultValue={parseColor(colors.foreground)}
            onValueChange={(event) =>
              onChange((colors) => ({
                ...colors,
                foreground: event.valueAsString,
              }))
            }
          >
            <ColorPickerControl>
              <ColorPickerInput name="foregroundColor" id="foregroundColor" />
              <ColorPickerTrigger />
            </ColorPickerControl>
            <ColorPickerContent>
              <ColorPickerArea />
              <ColorPickerChannelSlider channel="hue" />
            </ColorPickerContent>
          </ColorPickerRoot>
        </Field>
      </GridItem>
      <GridItem>
        <Field id="backgroundColor" label="Background color">
          <ColorPickerRoot
            defaultValue={parseColor(colors.background)}
            onValueChange={(event) =>
              onChange((colors) => ({
                ...colors,
                background: event.valueAsString,
              }))
            }
          >
            <ColorPickerControl>
              <ColorPickerInput name="backgroundColor" id="backgroundColor" />
              <ColorPickerTrigger />
            </ColorPickerControl>
            <ColorPickerContent>
              <ColorPickerArea />
              <ColorPickerChannelSlider channel="hue" />
            </ColorPickerContent>
          </ColorPickerRoot>
        </Field>
      </GridItem>
    </SimpleGrid>
  );
}
