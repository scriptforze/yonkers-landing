import { StaticImageData } from "next/image";

interface StaticRequire {
  default: StaticImageData;
}

type StaticImport = StaticRequire | StaticImageData;
export interface OrderProductCardProps {
  id: number;
  title: string;
  price: number;
  brand?: string;
  lastPrice?: number;
  imageURL: string | StaticImport;
  alt: string;
  appear?: string;
}
