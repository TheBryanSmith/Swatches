import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '9194c26e-fa85-4de7-9a04-430c6dd7f16b',
};

export const sampleWithPartialData: IAuthority = {
  name: 'f0933a01-cf48-456a-97d4-05216738a248',
};

export const sampleWithFullData: IAuthority = {
  name: 'e86994b8-468f-4c5e-987e-c768169bf7a8',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
