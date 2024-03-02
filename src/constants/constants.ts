import Config from "./config";

export const ITEM_LOAD = 20 as const;

// export const TIME_OUT = 60 * 1000; // ms
export const TIME_OUT = 60_000 as const; // ms

export const DECIMAL_AMOUNT = {
    INPUT: 6,
    DISPLAY: 6,
    MARKET_LIST: 4,
} as const;

export const genMobileRoute = (route: string) => `${Config.API_URL}api/v1/${route}`;

export enum AuthorizationMode {
    PUBLIC = 0,
    ACCESS_TOKEN = 1,
}

export const MAX_LEN_EMAIL = 100 as const;
export const MAX_LEN_FULL_NAME = 100 as const;
export const MAX_LEN_MOBILE = 11 as const;
export const MAX_LEN_OTP = 6 as const;
export const MAX_LEN_PASSWORD = 72 as const;
export const COUNT_DOWN_TIME = 60_000 as const; // 1 second

export const STATUS = {
    MATCHING_IN_PROGRESS: 'MATCHING_IN_PROGRESS',
    MATCHING_COMPLETED: 'MATCHING_COMPLETED',
    CARWASH_IN_PROGRESS: 'MATCHING_IN_PROGRESS',
    CARWASH_COMPLETED: 'MATCHING_COMPLETED',
    PAYMENT_IN_PROGRESS: 'PAYMENT_IN_PROGRESS', // 결제모듈를 시작하기 전 상태,주문정보 등록
    PAYMENT_FAILED: 'PAYMENT_FAILED',
    REJECT: 'REJECT',
    CANCELLED: 'CANCELLED',
    REVIEW: 'REVIEW',
    ALL: 'ALL',
} as const;

export const STATUS_FILTER = [
    'ALL',
    'MATCHING_IN_PROGRESS',
    'MATCHING_COMPLETED',
    'MATCHING_IN_PROGRESS',
    'MATCHING_COMPLETED',
    'PAYMENT_IN_PROGRESS',
    'PAYMENT_FAILED',
] as const;

export const TOAST = {
    POSITION: {
        TOP: 'top',
        BOTTOM: 'bottom',
    } as const,
} as const;

export const MAX_LEN_DETAIL_CANCEL = 200;
