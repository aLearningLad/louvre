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
