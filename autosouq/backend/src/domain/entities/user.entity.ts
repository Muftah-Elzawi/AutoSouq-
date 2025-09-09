export interface UserEntity {
  id: string;
  email: string;
  role: 'guest' | 'buyer' | 'seller' | 'admin';
  displayName?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
