export interface RegisterBody {
  username: string;
  password: string;
  email: string;
  birthDate: string;
  gender: string;
}

export interface LoginBody {
  login: string;
  password: string;
}

export interface ResponseToken {
  accessToken: string;
}

export interface AuthResponse {
  accessToken: string;
  user: {
    username: string;
    email: string;
    password: string;
    birthDate: string;
    gender: string;
    bio: string | null;
    avatar: string | null;
    id: number;
  };
}
