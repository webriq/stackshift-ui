import { PortableTextComponents } from "@portabletext/react";

export type StyleVariants<T extends string> = Record<T, string>;

export type Socials = "facebook" | "instagram" | "youtube" | "linkedin" | "twitter";
export interface MainImage {
  image: string;
  alt?: string;
}

export interface MegaMenu {
  _type: string;
  showcaseLink?: ShowcaseLink[];
  links?: MegaMenuLink[];
  _key: string;
  title?: string;
  groupOfLinks?: GroupOfLink[];
  label?: string;
  linkTarget?: string;
  linkType?: string;
  url?: string;
  linkExternal?: string;
}

export interface Logo extends ConditionalLink {
  alt?: string;
  linkTarget?: string;
  image?: string;
}

export interface Logos {
  logo: Logo[];
}

export interface GroupOfLink {
  _type: string;
  links: GroupOfLinkRoot[];
  _key: string;
  title: string;
  primaryButton: LabeledRouteWithKey;
}

export interface GroupOfLinkRoot {
  title: string;
  _type: string;
  label?: string;
  links: LabeledRouteWithKey[];
  _key: string;
}
export interface MegaMenu {
  _type: string;
  showcaseLink?: ShowcaseLink[];
  links?: MegaMenuLink[];
  _key: string;
  title?: string;
  groupOfLinks?: GroupOfLink[];
  label?: string;
  linkTarget?: string;
  linkType?: string;
  url?: string;
}

export interface ShowcaseLink {
  mainImage: MainImage;
  _type: string;
  primaryButton: LabeledRouteWithKey;
  _key: string;
}

export interface MegaMenuLink {
  _key: string;
  title: string;
  _type: string;
  links: LabeledRouteWithKey[];
  primaryButton: LabeledRouteWithKey;
  label: string;
}

export interface LabeledRoute extends ConditionalLink {
  ariaLabel?: string;
  label?: string;
  linkTarget?: string;
  linkType?: string;
  _type?: string;
  linkInternal?: any;
  linkExternal?: any;
  referenceType?: string;
  multipleRoutes?: LabeledRouteWithKey[];
  multipleInnerRoutes?: LabeledRouteWithKey[];
}
export interface ConditionalLink {
  type?: string;
  internalLink?: string | null;
  externalLink?: string | null;
}

export interface StatItems {
  label?: string;
  mainImage?: MainImage;
  value?: string;
  _key?: string;
  _type?: string;
}

export interface Logo {
  alt?: string;
  linkTarget?: string;
  image?: string;
  type?: string;
  internalLink?: string;
  externalLink?: string;
  linkExternal?: string;
  linkInternal?: string;
}

export interface Images {
  image?: string;
  _key?: string;
  _type?: string;
  alt?: string;
}

export interface ContactDetails {
  addressInfo?: string;
  contactInfo?: string;
  emailInfo?: string;
  _key?: string;
}

export interface SocialLink {
  socialMedia?: string | null;
  socialMediaLink?: string | null;
  _key?: string | null;
  _type?: string | null;
  socialMediaIcon?: {
    alt?: string;
    image?: string;
  } | null;
  socialMediaPlatform?: string | null;
}

export interface LabeledRouteWithKey extends LabeledRoute {
  _key?: string;
  image?: string;
  alt?: string;
  multipleRoutes?: LabeledRouteWithKey[];
  featuredRoute?: {
    featuredLink: LabeledRoute;
    mainImage: {
      image: string;
      alt: string;
    };
  };
  routeType?: string;
}

export interface ArrayOfImageTitleAndText {
  mainImage?: {
    alt?: string;
    image?: string;
  };
  plainText?: string;
  title?: string;
  _key?: string;
  _type?: string;
}

export interface FeaturedItem {
  description?: string;
  mainImage?: MainImage;
  title?: string;
  subtitle?: string;
  _key?: string;
  _type?: string;
}

export interface ArrayOfTitleAndText {
  _key?: string;
  plainText?: string;
  title?: string;
}

export interface BlogPost extends SanityBody {
  authors?: Author[] | null;
  body?: any;
  categories?: Category[] | null;
  excerpt?: string | null;
  link?: string | null;
  mainImage?: string | null;
  publishedAt?: string;
  seo?: Seo | null;
  slug?: SanitySlug | null;
  title?: string;
}

export interface Seo {
  _type?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: string;
  seoKeywords?: string;
  seoSynonyms?: string;
}

export interface SanitySlug {
  current?: string;
  _type?: "slug";
}

export interface SanityBody {
  _createdAt?: string;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: string;
}

export interface Author extends SanityBody {
  link?: string | null;
  bio?: string | null;
  name?: string | null;
  slug?: SanitySlug | null;
  image?: string | null;
  profile?: {
    alt: string;
    image: string;
  } | null;
}

export interface Category extends SanityBody {
  title?: string;
}

export interface Form {
  id?: string | null;
  buttonLabel?: string | null;
  name?: string | null;
  subtitle?: string | null;
  fields?: FormFields[] | null;
  thankYouPage?: ThankYouPage | null;
}

export interface FormFields {
  name?: string;
  placeholder?: string;
  pricingType?: string;
  type?: FormTypes;
  _key?: string;
  _type?: string;
  isRequired?: boolean;
  label?: string;
  items?: string[];
}

export type FormTypes =
  | "inputText"
  | "inputEmail"
  | "inputPassword"
  | "inputNumber"
  | "textarea"
  | "inputFile"
  | "inputRadio"
  | "inputCheckbox"
  | "inputSelect";

export interface ThankYouPage {
  externalLink?: string | null;
  internalLink?: string | null;
  linkInternal?: any;
  linkTarget?: string;
  linkType?: string;
  type?: string;
}

//Used on different sections
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

//*EDIT THIS SECTION WHEN CREATING/UPDATING SCHEMAS ON STUDIO */
export interface Variants {
  template?: Template;
  multipleMenus?: any;
  multipleLinks?: any;
  megaMenu?: MegaMenu[];
  arrayOfTitleAndText?: ArrayOfTitleAndText[] | null;
  logo?: Logo | null;
  logos?: Logos[] | null;
  primaryButton?: LabeledRoute | null;
  secondaryButton?: LabeledRoute | null;
  routes?: LabeledRouteWithKey[] | null;
  menu?: LabeledRouteWithKey[] | null;
  dropdownMenu?: LabeledRouteWithKey[] | null;
  iconLinks?: LabeledRouteWithKey[] | null;
  plans?: Plans[] | null;
  formLinks?: LabeledRouteWithKey[] | null;
  portfolios?: Portfolios[] | null;
  portfoliosWithCategories?: PortfoliosWithCategories[] | null;
  length?: number;
  signInLink?: LabeledRoute | null;
  signinLink?: LabeledRoute | null;
  tags?: string[] | null;
  posts?: BlogPost[] | null;
  blogsPerPage?: number | null;
  form?: Form | null;
  collections?: Collection | null;
  products?: CollectionProduct | null;
  allProducts?: Collection[];
  subtitle?: string | null;
  caption?: string | null;
  title?: string | null;
  plainText?: string | null;
  contactDescription?: string | null;
  officeInformation?: string | null;
  contactEmail?: string | null;
  contactNumber?: string | null;
  socialLinks?: SocialLink[] | null;
  socialMedia?: SocialLink[] | null;
  block?: any;
  heading?: string | null;
  acceptButtonLabel?: string | null;
  declineButtonLabel?: string | null;
  faqsWithCategories?: FaqsWithCategory[] | null;
  faqs?: AskedQuestion[] | null;
  arrayOfImageTitleAndText?: ArrayOfImageTitleAndText[] | null;
  description?: string | null;
  featuredItems?: FeaturedItem[] | null;
  images?: Images[] | null;
  contactDetails?: ContactDetails[] | null;
  copyright?: string | null;
  mainImage?: MainImage | null;
  youtubeLink?: string | null;
  banner?: any;
  stats?: StatItems[] | null;
  teams?: Team[] | null;
  testimonials?: Testimonial[] | null;
  selectStripeAccount?: string;
  annualBilling?: string;
  monthlyBilling?: string;
  productDetails?: ProductDetail[];
  btnLabel?: string;
  selectAccount?: string;
  hashtags?: string[];
  numberOfPosts?: number;
  text?: string;
  button?: LabeledRoute;
  features?: string[];
  config?: {
    enableAnalytics: boolean;
    cookiePolicy?: {
      siteName: string;
      cookiePolicyPage: Reference;
    };
    consentModalPosition?: string;
  };
  contactLink?: LabeledRoute;
}

export interface Template {
  bg?: string;
  color?: string;
}

export type Plans = {
  _key?: string | null;
  _type?: "planItems" | null;
  checkoutButtonName?: string | null;
  description?: string | null;
  monthlyPrice?: string | null;
  planType?: string | null;
  yearlyPrice?: string | null;
  planIncludes?: string[] | null;
  primaryButton?: LabeledRoute | null;
} & Record<string, string>;

export interface Portfolios {
  dateAdded?: string | null;
  mainImage?: {
    image?: string | null;
    alt?: string | null;
  } | null;
  primaryButton?: LabeledRoute | null;
  title?: string | null;
  _key?: string | null;
  _type?: string | null;
}

export interface PortfoliosWithCategories {
  category?: string | null;
  content?: Content[] | null;
  primaryButton?: LabeledRoute | null;
  _key?: string | null;
  _type?: string | null;
}

export interface Content extends Portfolios {
  description?: string | null;
  subtitle?: string | null;
}

export interface Collection extends SanityBody {
  collectionInfoVariant?: {
    variant?: string;
  } | null;
  name?: string | null;
  products?: CollectionProduct[] | null;
  sections?: any; //todo
  seo?: Seo | null;
  slug?: SanitySlug | null;
}

export interface CollectionProduct extends SanityBody {
  compareToPrice?: number | null;
  description?: string | null;
  ecwidProductId?: number | null;
  name?: string | null;
  price?: number | null;
  productInfo?: ProductInfo | null;
  productInfoVariant?: {
    variant?: string;
  } | null;
  sections?: any; //todo
  seo?: Seo | null;
  slug?: SanitySlug | null;
}

//TODO, RECHECK PRODUCT INFO DATA FROM SANITY
interface ProductInfo {
  btnLabel?: string | null;
  images?: ProductInfoImage[] | null;
  productDetails?: ProductDetail[] | null;
  socialLinks?: SocialLink[] | null;
  subtitle?: string | null;
}

//TODO, RECHECK PRODUCT INFO DATA FROM SANITY
export interface ProductDetail {
  blockContent?: any;
  contentType?: string;
  tabName?: string;
  _key?: string;
  [key: string]: any;
}
interface ProductInfoImage {
  alt?: string | null;
  _key: string;
  _type: string;
  image?: string | null;
}

export interface FaqsWithCategory {
  askedQuestions?: AskedQuestion[] | null;
  category?: string | null;
  _key?: string;
  _type?: string;
}

export interface AskedQuestion {
  answer?: string | null;
  question?: string | null;
  hidden?: boolean;
  _key?: string;
  _type?: string;
}

export interface Team {
  jobTitle?: string;
  mainImage?: MainImage;
  name?: string;
  plainText?: string;
  _key?: string;
  _type?: string;
}

export interface Testimonial {
  jobTitle?: string;
  mainImage?: MainImage;
  name?: string;
  rating?: string;
  testimony?: string;
  _key?: string;
  _type?: string;
}

export declare interface Reference {
  _type: string;
  _ref: string;
  _key?: string;
  _weak?: boolean;
  _strengthenOnPublish?: {
    type: string;
    weak?: boolean;
    template?: {
      id: string;
      params: Record<string, string | number | boolean>;
    };
  };
}

export type MyPortableTextComponents = PortableTextComponents & {
  code?: ({ value }: { value: { language?: string; code?: string } }) => JSX.Element;
};

export interface ConditionalLinkTypes {
  className?: string;
  ariaLabel: string; // required for A11Y
  style?: any;
  children: string | React.ReactNode;
  link: LabeledRoute | LabeledRouteWithKey | undefined;
  target?: string;
}

export interface IconLink {
  _key: string;
  image: string;
  alt?: string;
  linkExternal: string;
  linkTarget?: "_blank" | "_self";
}
