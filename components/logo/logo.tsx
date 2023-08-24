import { roboto_mono } from "@/config/fonts";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className={`${roboto_mono.className} text-xl text-clementine font-bold`}
    >
      Actually Frank
    </Link>
  );
}
