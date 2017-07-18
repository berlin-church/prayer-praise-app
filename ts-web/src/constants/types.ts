import { PrayerPraise, ShareStatus } from './enums';
import { MessagesStateType } from './types';

interface IAppState {
  accessToken?: string;
  auth0: any;
  error?: string;
  idToken?: string;
  jwtToken?: string;
  profilePic?: string;
  tokenExpiresAt?: number;
  username?: string;
}
export type AppStateType = IAppState;

interface IMessagesState {
  messageType: PrayerPraise;
  messageText: string;
  sharingStatus: ShareStatus;
  loading: boolean;
  error?: string;
  displayMessage?: string;
}
export type MessagesStateType = IMessagesState;

interface IStateType {
  app: IAppState;
  messages: IMessagesState;
}

export type StateType = IStateType;
