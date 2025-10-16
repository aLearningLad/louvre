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
  img1: string;
  img2: string;
  img3: string;
  video_url: string;
  title: string;
  subtitle: string;
  category: string; // create enum --> 'full stack', 'frontend', 'API'
  par1: string;
  par2?: string;
  par3?: string;
  lesson_par1: string;
  lesson_par2?: string;
  lesson_par3?: string;
  github_url: string;
  live_link?: string;
  tech_upper: T_tech_card[];
  tech_lower: T_tech_card[];
  next_project_link?: string;
  subtitle_icon?: React.ReactElement;
  id: string;
};
