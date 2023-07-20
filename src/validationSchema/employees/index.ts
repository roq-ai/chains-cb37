import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  profile_data: yup.string(),
  work_hours: yup.number().integer(),
  performance_evaluation: yup.string(),
  user_id: yup.string().nullable(),
});
