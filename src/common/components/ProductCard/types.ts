import { StaticImageData } from "next/image";

interface StaticRequire {
  default: StaticImageData;
}

type StaticImport = StaticRequire | StaticImageData;
export interface ProductCardProps {
  title: string;
  price: number;
  brand: string;
  lastPrice?: number;
  imageURL: string | StaticImport;
}
