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
      gap={8}
      py={14}
      px={7}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      backgroundColor={colors.background}
    >
      <Text fontSize="4xl" fontWeight="bold" color={colors.foreground}>
        {contentItem.title}
      </Text>
      <Text fontSize="lg" color={colors.foreground}>
        {contentItem.text}
      </Text>
    </Stack>
  );
}
