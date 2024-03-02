// redux/slices/chatRoom/chatRoomSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialChatRoomState } from './chatRoomInitial';

const initialState = initialChatRoomState;

const chatRoomSlice = createSlice({
    name: 'chatRoom',
    initialState,
    reducers: {
        SET_CHAT_ROOM: (state, action: PayloadAction<Partial<ChatRoom.ChatRoom>>) => {
            if (!action.payload.uuid) return state;

            return {
                ...state,
                [action.payload.uuid]: {
                    ...action.payload,
                },
            };
        },
        PUSH_MESSAGE: (state, action: PayloadAction<Partial<Message.Message>>) => {
            if (!action.payload.chatRoomUUID) return state;

            const chatRoom = state[action.payload.chatRoomUUID];
            return {
                ...state,
                [action.payload.chatRoomUUID]: {
                    ...chatRoom,
                    messages: chatRoom.messages?.concat(action.payload),
                },
            };
        },
        RESET_CHAT_ROOM: _state => {
            return initialState;
        },
        DELETE_CHAT_ROOM: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                [action.payload]: {},
            };
        },
    },
});

export const { SET_CHAT_ROOM, RESET_CHAT_ROOM, PUSH_MESSAGE } = chatRoomSlice.actions;

export default chatRoomSlice.reducer;
