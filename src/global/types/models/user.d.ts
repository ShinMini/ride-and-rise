declare namespace User {
  export interface User {
    id?: number;
    role?: Role;
    loginVia?: LoginVia;
    socialAccount?: SocialAccount.SocialAccount[];

    uuid?: string;
    password?: string | null;
    email?: string;

    username?: string | null;
    nickname?: string | null;

    gender?: Gender | null;

    fcmToken?: FcmToken.FcmToken[];
    refreshToken?: string | null;

    grade?: Grade;
    avatar?: string;
    likeImages?: Partial<Image.Image>[];

    profile?: Partial<Profile.Profile>;
    profileUpdateRequest?: Partial<ProfileUpdateRequest.ProfileUpdateRequest>;

    properties?: Property[];
    preference?: Partial<Preference.Preference>;

    matchingCard?: Partial<MatchingCard.MatchingCard>[];
    chatRooms?: Partial<ChatRoom.ChatRoom>[];

    orders?: Partial<Order.Order>[];
    // default 0
    points?: number;

    reports?: Partial<Report.Report>[];

    reviews?: Partial<Review.Review>[];
    messages?: Partial<Message.Message>[];

    blockedUsers?: number[];
    registerAt?: Date | string;
  }

  export type UserState = {
    isLogin: boolean;
    accessToken: string | null;
    refreshToken: string | null;
  } & User &
    Omit<pass.PassAuthDataResponse, 'success' | 'message'>;

  export type PassVerifiedData = {
    username: string;
    mobile: string;
    birthday: string;
    gender: User.Gender;
  };

  export type UpdatePassVerifiedData = {
    uuid: string;
    loginVia: LoginVia;

    username: string;
    mobile: string;
    gender: Gender;
    birthday: string;
  };

  export type Role = 'USER' | 'ADMIN';
  export type LoginVia = 'EMAIL' | 'KAKAO' | 'GOOGLE' | 'APPLE';
  export type Property =
    | 'HEIGHT'
    | 'FACE'
    | 'BODY'
    | 'PROPERTY'
    | 'FAMILY'
    | 'GRADUATION'
    | 'JOB'
    | 'INCOME';
  export type Gender = 'MAN' | 'WOMAN';
  export type Grade = 'NORMAL' | 'VIP' | 'SPECIAL';
  export type ReviewStatus = 'CREATED' | 'PENDING' | 'APPROVED' | 'REJECTED';

  export type ListReq = api.BasicListReq<Partial<User>>;
  export type ListRes = Promise<api.BasicListRes<User>>;

  export type FindOneReq = api.BasicReq<Partial<User>>;
  export type FindOneRes = api.BasicRes<User>;

  export type Res = Promise<api.BasicRes<User>>;
  export type ResWithJwt = (api.SuccessRes<User> & auth.JwtTypes) | api.FailRes;

  export type UserOrNull = User | null;

  export type RegisterWithEmail = {
    email: string;
    password: string;
    loginVia?: LoginVia;
  };

  export type RegisterWithSocial = {
    uuid: string;
    loginVia: LoginVia;
    email?: string;
  };
  export type CreateRes = api.BasicRes<User>;
  export type LoginResponse = CreateRes & {
    accessToken: string;
    refreshToken?: string;
  };
}
