export type ChatRoomState = {
  [uuid: string]: Partial<ChatRoom.ChatRoom>;
};

export const initialChatRoomState: ChatRoomState = {
  uuid: {},
};
