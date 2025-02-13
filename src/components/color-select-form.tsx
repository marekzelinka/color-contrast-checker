import { formatColorCode } from "@/lib/utils";
import type { Colors } from "@/types";
import { GridItem, Input, SimpleGrid } from "@chakra-ui/react";
import type { FormEvent } from "react";
import { Field } from "./ui/field";

export function ColorSelectForm({
  colors,
  onSubmit,
}: {
  colors: Colors;
  onSubmit: (nextColors: Colors) => void;
}) {
  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);

    const foregroundColor = formatColorCode(
      String(formData.get("foregroundColor")),
    );
    const backgroundColor = formatColorCode(
      String(formData.get("backgroundColor")),
    );

    onSubmit({ foreground: foregroundColor, background: backgroundColor });
  };

  return (
    <form onChange={handleChange}>
      <SimpleGrid columns={2} gap={6}>
        <GridItem>
          <Field label="Text color">
            <Input
              type="text"
              name="foregroundColor"
              defaultValue={colors.foreground}
            />
          </Field>
        </GridItem>
        <GridItem>
          <Field label="Background color">
            <Input
              type="text"
              name="backgroundColor"
              defaultValue={colors.background}
            />
          </Field>
        </GridItem>
      </SimpleGrid>
    </form>
  );
}
