export interface IToken {
    accessToken?: string;
    refreshToken?: string;
    expiresAt?: string;
}

interface GlobalVariableParams {
    tokenInfo?: IToken;
    activeRouteKey?: string;
    isFirstOpen?: boolean;
    isMatched?: boolean;
}

export const GlobalVariables: GlobalVariableParams = {};

export const clearGlobal = () => {
    delete GlobalVariables.tokenInfo;
};
