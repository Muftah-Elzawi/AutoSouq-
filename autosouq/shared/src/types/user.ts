export type UserRole = 'guest' | 'buyer' | 'seller' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  displayName?: string;
  createdAt: Date;
  updatedAt: Date;
}
