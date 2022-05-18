export interface StoreType {
  id: number;
  name: string;
  description: string;
  image: ImageType;
  slug: string;
  address: AddressType;
  article: RichTextType;
  hasExternalPage: boolean;
  externalUrl: string;
}

export interface AddressType {
  id: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface ImageType {
  id: string;
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface JobListingType {
  id: string;
  datePosted: string;
  title: string;
  description: string;
  isFulltime: boolean;
  wage: number;
  estimatedHours: number;
  article: RichTextType;
  store: StoreType;
}
interface RichTextType {
  raw: any[];
}

export interface CTAType {
  id: string;
  header: string;
  subheader: string;
}

export interface AboutUsType {
  id: string;
  header: string;
  subheader: string;
}
