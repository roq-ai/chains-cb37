import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  feedback?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  feedback?: string;
  user_id?: string;
}
