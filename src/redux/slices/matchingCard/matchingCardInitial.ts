export type MatchingCardState = {
  phase: number;
  card?: Partial<MatchingCard.MatchingCard>;
  woman?: Partial<User.User> | null;
  man?: Partial<User.User> | null;
};

export const initialMatchingCardState: MatchingCardState = {
  phase: 0,
  card: undefined,
  woman: undefined,
  man: undefined,
};
