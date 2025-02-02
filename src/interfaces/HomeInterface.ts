export interface PostInterface {
  comments: string | number[];
  id: number;
  type: string;
  description: string;
  mediaUrl: string;
  user: User;
}

export interface User {
  avatar: string,
  bio: string,
  birthDate: string,
  email: string,
  gender: string,
  id: number,
  passsword: string,
  username: string
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}

bio: null;
birthDate: "1990-01-01T00:00:00.000Z";
email: "johndoe@example.com";
gender: "male";
id: 2;
password: "$2b$10$Pi.8ZeB4ryNUDiDEWCn0dux39oZYwtgbEi22ntSj3NeTFnpaQV6wy";
username: "john_doe";
