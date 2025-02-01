export interface PostInterface {
    id: number,
    type: string,
    description: string,
    mediaUrl: string,
}

export interface User {
    name: string,
}

export interface AuthResponse {
    accessToken: string,
    user: User
}

