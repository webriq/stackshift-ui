export interface SectionsProps {
  template?: Template;
  data?: Sections;
  variant?: string | null | undefined;
  schema?: Variants;
}

export interface Sections extends SanityBody {
  label?: string;
  variant?: string;
  variants?: Variants;
  _key?: string;
}

export interface SanityBody {
  _createdAt?: string;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: string;
}

export interface Variants {
  template?: Template;
  [key: string]: any;
}

export interface Template {
  bg?: string;
  color?: string;
}
