import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Philosopher } from "next/font/google";
import ScrollBelow from "./scroll-below";

const font = Philosopher({
  weight: ["400", "700"],
  subsets: ["latin"],
});

function Landing() {
  const t = useTranslations("landing");
  return (
    <section className="relative w-full flex flex-col h-svh pt-[var(--navbar-height)] px-4">
      <div className="flex items-center h-full justify-center">
        <div
          className={cn(
            "flex flex-col w-full gap-4 max-w-[835px] pt-8",
            font.className
          )}
        >
          <span className="">
            <SmallText>{t("from")}</SmallText>
            <LargeText>{t("design").toUpperCase()}</LargeText>
          </span>
          <span className="md:self-end block md:inline">
            <SmallText>{t("to")}</SmallText>
            <LargeText>{t("product").toUpperCase()}</LargeText>
          </span>
        </div>
      </div>
      <div className="flex justify-center py-16">
        <ScrollBelow />
      </div>
    </section>
  );
}

interface Props {
  readonly children: React.ReactNode;
}

const LargeText = ({ children }: Props) => {
  return (
    <span className="text-[60px] sm:text-[80px] block md:inline md:text-[100px] font-bold md:leading-7  sm:leading-[80px] leading-[60px] text-center">
      {children}
    </span>
  );
};
const SmallText = ({ children }: Props) => {
  return (
    <span className="block md:inline text-[28px] md:text-[36px] text-center">
      {children}
    </span>
  );
};

export default Landing;
