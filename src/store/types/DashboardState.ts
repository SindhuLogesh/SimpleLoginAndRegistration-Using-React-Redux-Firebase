import firebase from 'firebase/app';

import { BaseState } from './BaseState';
import { UserInfo } from './UserInfo';

export interface DashboardState extends BaseState {
    userInfo?: UserInfo;
}
