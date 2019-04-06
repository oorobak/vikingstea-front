export interface User {
  id?: number;
  login?: string;
  email?: string;
  password?: string;
  roles?: any;
  is_active?: boolean;
  is_email_verified: boolean;
  registration_date: string;
  token?: string;
}

// todo: przeanalizować parametr 'roles' po zrobieniu backend'u
