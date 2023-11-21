import { StaticImageData } from "next/image";

interface StaticRequire {
  default: StaticImageData;
}

type StaticImport = StaticRequire | StaticImageData;
export interface PaymentCardProps {
  id: number;
  name?: string;
  cardNumber?: string | number;
  netCredit?: string;
}
