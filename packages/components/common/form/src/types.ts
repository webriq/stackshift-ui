export interface LabeledRoute extends ConditionalLink {
  ariaLabel?: string;
  label?: string;
  linkTarget?: string;
  linkType?: string;
  _type?: string;
  linkInternal?: any;
}

export interface ConditionalLink {
  type?: string;
  internalLink?: string | null;
  externalLink?: string | null;
}
