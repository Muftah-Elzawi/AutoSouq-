export declare const ROLES: {
    readonly GUEST: "guest";
    readonly BUYER: "buyer";
    readonly SELLER: "seller";
    readonly ADMIN: "admin";
};
export type RoleValue = typeof ROLES[keyof typeof ROLES];
