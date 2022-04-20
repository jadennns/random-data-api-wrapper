export interface Address {
  id: number;
  uid: string;
  city: string;
  street_name: string;
  street_address: string;
  secondary_address: string;
  building_number: string;
  mail_box: string;
  community: string;
  zip_code: string;
  zip: string;
  postcode: string;
  time_zone: string;
  street_suffix: string;
  city_suffix: string;
  city_prefix: string;
  state: string;
  state_abbr: string;
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
  full_address: string;
}

export interface Appliance {
  id: number;
  uid: string;
  brand: string;
  equipment: string;
}

export interface App {
  id: number;
  uid: string;
  app_name: string;
  app_version: string;
  app_author: string;
  app_semantic_version: string;
  app_major_version: string;
  app_minor_version: string;
  app_patch_version: string;
}

export interface Bank {
  id: number;
  uid: string;
  account_number: string;
  iban: string;
  bank_name: string;
  routing_number: string;
  swift_bic: string;
}

export interface Beer {
  id: number;
  uid: string;
  brand: string;
  name: string;
  style: string;
  hop: string;
  yeast: string;
  malts: string;
  ibu: string;
  alcohol: string;
  blg: string;
}

export interface Blood {
  id: number;
  uid: string;
  type: string;
  rh_factor: string;
  group: string;
}

export interface BusinessCard {
  id: number;
  uid: string;
  credit_card_number: string;
  credit_card_expiry_date: string;
  credit_card_type: string;
}

export interface Cannabis {
  id: number;
  uid: string;
  strain: string;
  cannabinoid_abbreviation: string;
  cannabinoid: string;
  terpene: string;
  medical_use: string;
  health_benefit: string;
  category: string;
  type: string;
  buzzword: string;
  brand: string;
}

export interface Code {
  id: number;
  uid: string;
  npi: string;
  isbn: string;
  ean: string;
  rut: string;
  nric: string;
  imei: string;
  asin: string;
  sin: string;
}

export interface Coffee {
  id: number;
  uid: string;
  blend_name: string;
  origin: string;
  variety: string;
  notes: string;
  intensifier: string;
}

export interface Commerce {
  id: number;
  uid: string;
  color: string;
  department: string;
  material: string;
  product_name: string;
  price: number;
  price_string: string;
  promo_code: string;
}

export interface Company {
  id: number;
  uid: string;
  business_name: string;
  suffix: string;
  industry: string;
  catch_phrase: string;
  buzzword: string;
  bs_company_statement: string;
  employee_identification_number: string;
  duns_number: string;
  logo: string;
  type: string;
  phone_number: string;
  full_address: string;
  latitude: number;
  longitude: number;
}

export interface Computer {
  id: number;
  uid: string;
  platform: string;
  type: string;
  os: string;
  stack: string;
}

export interface Crypto {
  id: number;
  uid: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface CryptoCoin {
  id: number;
  uid: string;
  coin_name: string;
  acronym: string;
  logo: string;
}

export interface Color {
  id: number;
  uid: string;
  hex_value: string;
  color_name: string;
  hsl_value: number[];
  hsla_value: number[];
}

export interface Dessert {
  id: number;
  uid: string;
  variety: string;
  topping: string;
  flavor: string;
}

export interface Device {
  id: number;
  uid: string;
  build_number: number;
  manufacturer: string;
  model: string;
  platform: string;
  serial_number: string;
  version: number;
}

export interface Food {
  id: number;
  uid: string;
  dish: string;
  description: string;
  ingredient: string;
  measurement: string;
}

export interface Name {
  id: number;
  uid: string;
  name: string;
  two_word_name: string;
  four_word_name: string;
  name_with_initials: string;
  name_with_middle: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  male_first_name: string;
  female_first_name: string;
  prefix: string;
  initials: string;
}

export interface HipsterStuff {
  id: number;
  uid: string;
  word: string;
  words: string[];
  sentence: string;
  sentences: string[];
  paragraph: string;
  paragraphs: string[];
}

export interface Invoice {
  id: number;
  uid: string;
  reference: string;
  creditor_reference: string;
}

export interface Employment {
  title: string;
  key_skill: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface UserAddress {
  city: string;
  street_name: string;
  street_address: string;
  zip_code: string;
  state: string;
  country: string;
  coordinates: Coordinates;
}

export interface CreditCard {
  cc_number: string;
}

export interface Subscription {
  plan: string;
  status: string;
  payment_method: string;
  term: string;
}

export interface User {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: string;
  employment: Employment;
  address: UserAddress;
  credit_card: CreditCard;
  subscription: Subscription;
}

export interface Stripe {
  id: number;
  uid: string;
  valid_card: string;
  token: string;
  invalid_card: string;
  month: string;
  year: string;
  ccv: string;
  ccv_amex: string;
}

export interface Subscription {
  id: number;
  uid: string;
  plan: string;
  status: string;
  payment_method: string;
  subscription_term: string;
  payment_term: string;
}

export interface Vehicle {
  id: number;
  uid: string;
  vin: string;
  make_and_model: string;
  color: string;
  transmission: string;
  drive_type: string;
  fuel_type: string;
  car_type: string;
  car_options: string[];
  specs: string[];
  doors: number;
  mileage: number;
  kilometrage: number;
  license_plate: string;
}

export interface IdNumber {
  id: number;
  uid: string;
  valid_us_ssn: string;
  invalid_us_ssn: string;
}

export interface InternetStuff {
  id: number;
  uid: string;
  email: string;
  username: string;
  password: string;
  domain_name: string;
  ip_v4_address: string;
  private_ip_v4_address: string;
  public_ip_v4_address: string;
  ip_v4_cidr: string;
  ip_v6_address: string;
  ip_v6_cidr: string;
  mac_address: string;
  url: string;
  slug: string;
  user_agent: string;
}

export interface LoremIpsum {
  id: number;
  uid: string;
  word: string;
  words: string[];
  characters: string;
  short_sentence: string;
  long_sentence: string;
  very_long_sentence: string;
  paragraphs: string[];
  question: string;
  questions: string[];
}

export interface LoremFlickr {
  id: number;
  uid: string;
  image: string;
  image_50_60: string;
  image_100_100: string;
  image_200_100: string;
  image_500_500: string;
  image_1920_1080: string;
}

export interface LoremPixel {
  id: number;
  uid: string;
  image: string;
  image_50_60: string;
  image_100_100: string;
  image_200_100: string;
  image_500_500: string;
  image_1920_1080: string;
}

export interface Nation {
  id: number;
  uid: string;
  nationality: string;
  language: string;
  capital: string;
  national_sport: string;
  flag: string;
}

export interface DataNumber {
  id: number;
  uid: string;
  number: number;
  leading_zero_number: string;
  decimal: number;
  normal: number;
  hexadecimal: string;
  positive: number;
  negative: number;
  non_zero_number: number;
  digit: number;
}

export interface PhoneNumber {
  id: number;
  uid: string;
  phone_number: string;
  cell_phone: string;
  cell_phone_in_e164: string;
}

export interface Placeholdit {
  id: number;
  uid: string;
  image: string;
  image_jpg: string;
  image_gif: string;
}

export interface Monday {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}

export interface Tuesday {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}

export interface Wednesday {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}

export interface Thursday {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}

export interface Friday {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}

export interface Saturday {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}

export interface Sunday {
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}

export interface Hours {
  monday: Monday;
  tuesday: Tuesday;
  wednesday: Wednesday;
  thursday: Thursday;
  friday: Friday;
  saturday: Saturday;
  sunday: Sunday;
}

export interface Restaurant {
  id: number;
  uid: string;
  name: string;
  type: string;
  description: string;
  review: string;
  logo: string;
  phone_number: string;
  address: string;
  hours: Hours;
}

export function getRandomAddress(): Promise<Address>;
export function getRandomAppliance(): Promise<Appliance>;
export function getRandomApp(): Promise<App>;
export function getRandomBank(): Promise<Bank>;
export function getRandomBeer(): Promise<Beer>;
export function getRandomBlood(): Promise<Blood>;
export function getRandomBusinessCreditCard(): Promise<BusinessCard>;
export function getRandomCannabis(): Promise<Cannabis>;
export function getRandomCode(): Promise<Code>;
export function getRandomCoffee(): Promise<Coffee>;
export function getRandomCommerce(): Promise<Commerce>;
export function getRandomCompany(): Promise<Company>;
export function getRandomComputer(): Promise<Computer>;
export function getRandomCrypto(): Promise<Crypto>;
export function getRandomCryptoCoin(): Promise<CryptoCoin>;
export function getRandomColor(): Promise<Color>;
export function getRandomDessert(): Promise<Dessert>;
export function getRandomDevice(): Promise<Device>;
export function getRandomFood(): Promise<Food>;
export function getRandomName(): Promise<Name>;
export function getRandomHipsterStuff(): Promise<HipsterStuff>;
export function getRandomInvoice(): Promise<Invoice>;
export function getRandomUser(): Promise<User>;
export function getRandomStripe(): Promise<Stripe>;
export function getRandomSubscription(): Promise<Subscription>;
export function getRandomVehicle(): Promise<Vehicle>;
export function getRandomIdNumber(): Promise<IdNumber>;
export function getRandomInternetStuff(): Promise<InternetStuff>;
export function getRandomLoremIpsum(): Promise<LoremIpsum>;
export function getRandomLoremFlickr(): Promise<LoremFlickr>;
export function getRandomLoremPixel(): Promise<LoremPixel>;
export function getRandomNation(): Promise<Nation>;
export function getRandomNumber(): Promise<DataNumber>;
export function getRandomPhoneNumber(): Promise<PhoneNumber>;
export function getRandomPlaceholdit(): Promise<Placeholdit>;
export function getRandomRestaurant(): Promise<Restaurant>;
