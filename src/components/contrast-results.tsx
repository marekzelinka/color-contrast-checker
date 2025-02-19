import { getRandomContentPlaceholder, type ContentItem } from "@/lib/content";
import type { Colors } from "@/types";
import { Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function ContrastResult({ colors }: { colors: Colors }) {
  const [contentItem, setContentItem] = useState<ContentItem>({
    title: "",
    text: "",
  });

  useEffect(() => {
    setContentItem(getRandomContentPlaceholder());
  }, []);

  return (
    <Stack
      gap={2}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      backgroundColor={colors.background}
    >
      <Text
        fontSize="3xl"
        fontWeight="semibold"
        textWrap="balance"
        color={colors.foreground}
      >
        {contentItem.title}
      </Text>
      <Text textWrap="pretty" color={colors.foreground}>
        {contentItem.text}
      </Text>
    </Stack>
  );
}
