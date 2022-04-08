export function getBrandInfo(slug: string): IBrandInfo | undefined;

export interface IBrandInfo {
  name: string;
  website: string;
  icons: {
    [key: string]: string;
  };
  labels: string[];
}
