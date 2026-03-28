export interface UserData {
  email: string;
  avatar: string;
  last_name: string;
  first_name: string;
}

export interface ApiItem {
  data: UserData;
}

export interface ApiResponse {
  data: ApiItem[];
  meta: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}
