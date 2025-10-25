declare type T_nav_info = {
  id: number;
  title: string;
  href: string;
};

declare type T_landing_links = {
  id: number;
  text: string;
  link: string;
  icon: React.ReactElement;
  target: string;
};

declare type T_tech_tab_info = {
  id: number;
  title: string;
  img_url: string;
};

declare type T_tech_card = {
  title: string;
  img_url: string;
};

declare type T_individual_project = {
  is_type: string; // ---> either full stack, clientside, api or mobile from enum
  img1?: string;
  img2?: string;
  img3?: string;
  architecture_urls?: string[]; // ---> only for API route examples
  video_url?: string;
  title: string;
  subtitle: string;
  category1: string; // create enum --> 'full stack', 'frontend', 'API'
  category2?: string; // create enum --> 'full stack', 'frontend', 'API'
  par1: string;
  par2?: string;
  par3?: string;
  lesson_par1: string;
  lesson_par2?: string;
  lesson_par3?: string;
  github_url: string;
  live_link?: string;
  tech_upper: React.HTMLDivElement[];
  tech_lower: React.HTMLDivElement[];
  next_project_link?: string;
  subtitle_icon?: React.ReactElement;
  id: string;
  next_project_name?: string;
  route_demos?: T_route_demo[];
};

declare type T_route_demo = {
  id: number;
  route_name: string; // --> /api/v1/... etc
  route_type: string; // ---> GET, POST, UPDATE, DELETE
  img_setter_fxn: (route_name: string) => void; // ---> use zustand
};
