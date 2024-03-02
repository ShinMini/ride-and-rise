declare namespace Profile {
  export type Profile = {
    complete: boolean;
    // 프로필 이미지
    images?: Array<Partial<Image.Image>> | null;
    // 자기소개
    oneLineIntroduction: string | null;
    selfIntroduction: string | null;

    mobile?: string | null;
    age?: number | null;
    height?: number | null;
    birthday?: Date | null;
    address?: string | null;
    company?: string | null;
    jobTitle?: string | null;

    bodyShape?: string | null;

    hobbies?: string[];
    personality?: string[];
    isSmoking?: boolean;
    drinking?: string | null;
    religion?: string | null;

    location?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    locationLastUpdated?: Date | null;

    userUUID: string;
    user?: Partial<User.User> | null;

    createdAt?: Date | null;
    updatedAt?: Date | null;
  };

  // API TYPES
  // REQUEST PARAMS
  export type GetProfileParams = {
    userUUID: string;
  };

  // RESPONSE
  export type GetProfileResponse = api.BasicReq<Partial<Profile>>;
}
