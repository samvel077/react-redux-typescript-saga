import { UserAction, UserActionTypes } from "../../types/user";

export function CallUser(): UserAction {
  return { type: UserActionTypes.CALL_USER };
}
