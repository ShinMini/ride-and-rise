import { ChatRoomStatus } from './chat-room.const';
import { CardGrade, MatchingStatus } from './matching-card.const';
import { OrderStatus } from './order.const';
import { RequestStatus } from './profile-update-request.const';
import { ReviewStatus } from './review.const';

export const constants = {
  chatRoom: {
    status: ChatRoomStatus,
  },
  matchingCard: {
    grade: CardGrade,
    status: MatchingStatus,
  },
  order: {
    status: OrderStatus,
  },
  profileUpdateRequest: {
    status: RequestStatus,
  },
  review: {
    status: ReviewStatus,
  },
} as const;
