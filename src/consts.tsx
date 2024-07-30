export const Setting = {
  OffersNumber: 5,
} as const;

export enum AppRoute {
  Login = '/login',
  Favorites = 'favorites',
  Offer = 'offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
