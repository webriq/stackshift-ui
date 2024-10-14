export interface Logo extends ConditionalLink {
  alt?: string;
  linkTarget?: string;
  image?: string;
}

export interface ConditionalLink {
  type?: string;
  internalLink?: string | null;
  externalLink?: string | null;
}
