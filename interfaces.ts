export interface I_bubble {
  top: string;
  right: string;
  width: string | number;
  height: string | number;
  skill: string;
  backgroundColor: string;
  icon?: React.ReactElement;
  image_url?: string;
  image_width?: number;
  image_height?: number;
  font_size: number;
}

export interface I_empty_bubble {
  width: string;
  height: string;
  top: string;
  right: string;
  backgroundColor: string;
}

export interface I_store {
  is_form: boolean;
  set_is_form: () => void;
  is_tech: boolean;
  set_is_tech: () => void;
  currently: boolean;
  set_currently: () => void;
}

export interface I_tech_tab {
  id: number;
  title: string;
  img_url: string;
}

export interface I_project_card {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  live_link?: string;
  repo_link: string;
  video_link: string;
  img1: string;
  img2: string;
  img3: string;
  tech_stack: T_tech_tab_info[];
}

export interface I_project_section {
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
  tech_upper: string[];
  tech_lower: string[];
  next_project_link?: string;
}
