export interface ApiResponse {
  data: ApiItem[];
  meta: Meta;
}

export interface ApiItem {
  id: string;
  collection_id: string;
  project_id: number;
  app_user_id: null;
  created_by: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  data: UserData;
}

export interface UserData {
  userId: string;
  email: string;
  avatar: string;
  last_name: string;
  first_name: string;
}

export interface Meta {
  page: number;
  limit: number;
  total: number;
  pages: number;
}
