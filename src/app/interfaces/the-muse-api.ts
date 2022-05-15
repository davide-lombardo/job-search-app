export interface JobsPaged {
  page: number;
  page_count: number;
  items_per_page: number;
  took: number;
  timed_out: boolean;
  total: number;
  results: Job[];
}

export interface Job {
  contents: string;
  name: string;
  type: string;
  publication_date: string;
  short_name: string;
  model_type: string;
  id: number;
  locations: Location[];
  categories: Category[];
  levels: Level[];
  tags: any[];
  refs: Refs;
  company: {
    id: string;
    short_name: string;
    name: string;
  };
}

export interface Company {
  description: string;
  locations: Location[];
  industries: Industry[];
  tags: any[];
  short_name: string;
  name: string;
  publication_date: string;
  model_type: string;
  twitter: any;
  id: string;
  size: Size;
  refs: Refs;
}


export interface Industries {
  name: string;
}

export interface Level {
  name: string;
  short_name: string;
}
  
export interface Location {
  name: string;
}
  
export interface Industry {
  name: string;
}

export interface Category {
  name: string;
}

export interface Size {
  name: string;
  short_name: string;
}

export interface Refs {
  landing_page: string;
  jobs_page: string;
  mini_f1_image: string;
  f2_image: string;
  logo_image: string;
  f1_image: string;
  f3_image: string;
}