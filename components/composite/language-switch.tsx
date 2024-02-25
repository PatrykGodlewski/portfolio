"use client";
import { LOCALES } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  currentLocale: LOCALES;
}

function LanguageSwitch({ currentLocale }: Props) {
  const pathname = usePathname();
  const nextLocale =
    Object.values(LOCALES)
      .filter((locale) => currentLocale !== locale)
      .at(0) ?? currentLocale;
  const link = `/${nextLocale}/${
    pathname.split("/").slice(2).join("/") || "/"
  }`;

  return (
    <Link
      href={link}
      className="font-semibold underline hover:text-accent focus:text-accent"
    >
      {nextLocale.toUpperCase()}
    </Link>
  );
}

export default LanguageSwitch;
