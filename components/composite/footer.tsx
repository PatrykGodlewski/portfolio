import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Philosopher } from "next/font/google";
import Link from "../ui/link";
import Logo from "../ui/logo";

const font = Philosopher({
  weight: ["700"],
  subsets: ["latin"],
});

function Footer() {
  const tCommon = useTranslations("common");
  const tFotter = useTranslations("footer");

  return (
    <footer className="reverse-dark-mode pt-24">
      <div className="bg-background text-foreground">
        <div className="h-28 dark:dark light bg-background w-full rounded-[0_0_64px_64px]">
          <div className="reverse-dark-mode flex items-end justify-center h-full pb-6">
            <div className="bg-background h-[14px] rounded-full w-44" />
          </div>
        </div>
        <div className="container mx-auto">
          <div className="py-20 flex justify-between">
            <div className="space-y-10">
              <Logo />
              <ul className="space-y-6">
                <li>
                  <Link href="#work">{tCommon("work")}</Link>
                </li>
                <li>
                  <Link href="#projects">{tCommon("projects")}</Link>
                </li>
                <li>
                  <Link href="#contact">{tCommon("contact")}</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className={cn("text-6xl", font.className)}>
                  {tFotter("curiosity")}
                </h1>
                <p className="text-xl pt-4 font-extralight max-w-md">
                  {tFotter("description")}
                </p>
              </div>
              <span className="text-xl font-medium text-red-800">
                {tFotter("tag")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
