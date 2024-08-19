import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 31103,
  login: 'VOqio',
};

export const sampleWithPartialData: IUser = {
  id: 9326,
  login: 'z~ca@fX\\%te-',
};

export const sampleWithFullData: IUser = {
  id: 18446,
  login: '2HsS@1Q',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
