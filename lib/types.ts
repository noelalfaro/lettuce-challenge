export interface FeaturedImage {
  url: string;
  alt_text: string | null;
}

export interface Event {
  created_at: string;
  ID: number;
  title: string;
  content: string;
  cta_url: string | null;
  cta_btn: string | null;
  permalink: string;
  cities: string[];
  featured_image: FeaturedImage | null;
  date: string | null;
}
