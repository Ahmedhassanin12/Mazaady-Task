import type { SubCategory } from "./subCategory.type";


export type ApiResponse<T> = {
  message: {
    txt: (string | null)[];
  };
  data: {
    ios_version: string;
    ios_latest_version: string;
    google_version: string;
    huawei_version: string;
    [key: string]: unknown; // Allow any key with any value
  } & {
    [key: string]: T[]; // Specifically for dynamic array keys
  };
};

export type SubCat = {
  message: {
    txt: (string | null)[];
  };
  data: SubCategory[]
}