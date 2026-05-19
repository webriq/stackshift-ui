import React from "react";
import AIChatbot_A from "./ai-chatbot_a";
import { SectionsProps } from "./types";

const Variants = {
  variant_a: AIChatbot_A,
};

export interface AIChatbotProps {}

const displayName = "AIChatbot";

export const AIChatbot: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props: AIChatbotProps = {};

  return Variant ? <Variant {...props} /> : null;
};

AIChatbot.displayName = displayName;
