interface IFormData {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

interface UserProfile {
  displayName: string;
}

export type { IFormData, UserProfile };