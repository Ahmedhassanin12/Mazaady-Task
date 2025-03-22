type ImagePlaceHolder = {
  small_no_bg: string;
  medium_bg: string;
  small_bg: string;
};

type Image = {
  medium: string;
  thumbnail: string;
  id: number | null;
  custom_properties: unknown | null;
  place_holder: ImagePlaceHolder;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  parent_id: number | null;
  properties_count: number;
  image: Image;
  is_other: boolean;
};
