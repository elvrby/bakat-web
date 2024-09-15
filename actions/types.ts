// src/actions/types.ts
export interface UserData {
    email: string;
    name: string;
    username: string;
    uid: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    roles: any; // Ubah ini sesuai dengan struktur data peran Anda
    bio: string;
    following: string[];
    followers: string[];
    likes: string[];
    posts: string[];
    profileImage: string;
    theme: string;
  }
  