import { lazy } from "react";
import { SectionsProps, SocialLink, Form } from "./types";

const Variants = {
  variant_a: lazy(() => import("./contact_a")),
  variant_b: lazy(() => import("./contact_b")),
};

export interface ContactProps {
  title?: string;
  contactDescription?: string;
  officeInformation?: string;
  contactEmail?: string;
  contactNumber?: string;
  socialLinks?: SocialLink[];
  form?: Form;
  block?: any;
}

const displayName = "Contact";

export const Contact: React.FC<SectionsProps> = ({ data }) => {
  const variant = data?.variant;
  const Variant = variant && Variants[variant as keyof typeof Variants];

  const props = {
    title: data?.variants?.title ?? undefined,
    contactDescription: data?.variants?.contactDescription ?? undefined,
    officeInformation: data?.variants?.officeInformation ?? undefined,
    contactEmail: data?.variants?.contactEmail ?? undefined,
    contactNumber: data?.variants?.contactNumber ?? undefined,
    socialLinks: data?.variants?.socialLinks ?? undefined,
    form: data?.variants?.form ?? undefined,
    block: data?.variants?.block ?? undefined,
  };

  return Variant ? <Variant {...props} /> : null;
};

Contact.displayName = displayName;
