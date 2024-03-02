declare namespace Preference {
  export type Preference = {
    id?: number;
    userUUID?: string;
    user?: Partial<User.User> | null;

    location?: string[];
    personality?: string[];

    height?: number | null;
    bodyShape?: string | null;
    age?: number | null;

    hobbies?: string[];
    isSmoking?: boolean;

    drinking?: string | null;
    religion?: string | null;

    createdAt?: Date | null;
    updatedAt?: Date | null;
  };
}
