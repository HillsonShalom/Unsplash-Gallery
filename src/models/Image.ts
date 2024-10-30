export interface Image {
  id: string;
  created_at: Date;
  updated_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads: number;
  likes: number;
  liked_by_user: false;
  description: string;
  exif: Partial<Exif>;
  location: Partial<Location>;
  current_user_collections: Partial<CurrentUserCollection>[];
  urls: Partial<Urls>;
  links: Partial<Links>;
  user: Partial<User>;
}

interface Exif {
  make: string;
  model: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

interface Location {
  name: string;
  city: string;
  country: string;
  position: Position;
}

interface Position {
  latitude: number;
  longitude: number;
}

interface CurrentUserCollection {
  id: number;
  title: string;
  published_at: Date;
  last_collected_at: Date;
  updated_at: Date;
  cover_photo: null;
  user: null;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface User {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string;
  twitter_username: string;
  links: Partial<UserLinks>;
}

interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}
