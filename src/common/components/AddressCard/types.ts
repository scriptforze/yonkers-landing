import { StaticImageData } from "next/image";

interface StaticRequire {
  default: StaticImageData;
}

type StaticImport = StaticRequire | StaticImageData;
export interface AddressCardProps {
  id: number;
  name?: string;
  address?: string;
  city?: string;
  country?: string;
  phone?: string | number;
}
