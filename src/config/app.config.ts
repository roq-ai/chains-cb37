interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['HR Manager', 'Employee', 'Administrator', 'Owner'],
  tenantName: 'Organization',
  applicationName: 'chains',
  addOns: ['chat', 'notifications'],
};
