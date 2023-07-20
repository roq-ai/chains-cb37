import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  profile_data?: string;
  work_hours?: number;
  performance_evaluation?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  profile_data?: string;
  performance_evaluation?: string;
  user_id?: string;
}
