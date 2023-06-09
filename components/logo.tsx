import Link from "next/link";
import { roboto_mono } from "./fonts";

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
