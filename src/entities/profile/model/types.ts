import { Country, Currency } from 'shared/const';

export interface Profile {
  first: string,
  lastname: string,
  age: string,
  currency: Currency,
  country: Country,
  city: string,
  username: string,
  avatar: string
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
