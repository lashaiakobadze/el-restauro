export interface IProviders {
  providers: Provider[];
  totalElements: number;
}

export interface Provider {
  id: string;
  parentId: string;
  providerType: string;
  name: string;
  phone: string;
  email: string;
  categories: string[];
  bankAccountId: string;
  description: string;
  responsiblePersonMobileNumber: string;
  responsiblePersonEmail: string;
  country: string;
  cityId: string;
  postalCode: string;
  rating: number;
  priceRange: string;
  address: Address;
  socialMedias: SocialMedia[];
  website: string;
  amenities: Amenities;
  rooms: Room[];
  status: string;
  workingHours: WorkingHour[];
  attachments: Attachment[];
}

export interface Address {
  latitude: number;
  longitude: number;
  description: string;
}

export interface SocialMedia {
  socialMedia: string;
  url: string;
}

export interface Amenities {
  hasWifi: boolean;
  hasParking: boolean;
  hasOutdoorSeating: boolean;
  hasSmokingArea: boolean;
  hasPrivateDining: boolean;
  wheelchairAccessible: boolean;
  petFriendly: boolean;
}

export interface Room {
  id: string;
  providerId: string;
  name: string;
  description: string;
  attachments: Attachment[];
  status: string;
}

export interface Attachment {
  id: string;
  url: string;
  objectType: string;
  objectId: string;
  attributes: Attribute[];
  objectKey: string;
  orderId: number;
}

export interface Attribute {
  name: string;
  value: string;
}

export interface WorkingHour {
  day: string;
  startHour: Hour;
  endHour: Hour;
}

export interface Hour {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}
