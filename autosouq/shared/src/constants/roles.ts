export const ROLES = {
  GUEST: 'guest',
  BUYER: 'buyer',
  SELLER: 'seller',
  ADMIN: 'admin'
} as const;

export type RoleValue = typeof ROLES[keyof typeof ROLES];
