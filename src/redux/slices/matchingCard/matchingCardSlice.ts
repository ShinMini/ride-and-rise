// redux/slices/matchingCard/matchingCardSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialMatchingCardState, MatchingCardState } from './matchingCardInitial';

const initialState = initialMatchingCardState;

const matchingCardSlice = createSlice({
    name: 'matchingCard',
    initialState,
    reducers: {
        CREATE_MATCHING_CARD: (state, action: PayloadAction<MatchingCard.CreateMatchingCard>) => {
            return {
                ...state,
                card: {
                    ...action.payload,
                },
                phase: 3,
            };
        },
        RESET_MATCHING_CARD: _state => {
            return initialState;
        },
        DELETE_MATCHING_CARD_USER: (state, action: PayloadAction<'man' | 'woman'>) => {
            const phase = action.payload === 'man' && state.woman ? 1 : 0;
            return {
                ...state,
                [action.payload]: undefined,
                phase,
            };
        },
        UPDATE_MATCHING_CARD: (state, action: PayloadAction<Partial<MatchingCardState>>) => {
            const isWomanReady = !!(action.payload.woman ?? state.woman);
            const isManReady = !!(action.payload.man ?? state.man);

            const phase = isWomanReady ? (isManReady ? 2 : 1) : 0;

            return {
                ...state,
                ...action.payload,
                phase,
            };
        },
    },
});

export const { CREATE_MATCHING_CARD, RESET_MATCHING_CARD, UPDATE_MATCHING_CARD, DELETE_MATCHING_CARD_USER } =
    matchingCardSlice.actions;

export default matchingCardSlice.reducer;
