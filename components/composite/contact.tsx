import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Philosopher } from "next/font/google";
import Link from "../ui/link";
import Title from "../ui/title";
import IconGrid from "./icon-grid";

const font = Philosopher({
  weight: ["700"],
  subsets: ["latin"],
});

function Contact() {
  const t = useTranslations("contact");

  const contactLinks = [
    { title: "LinkedIn", link: "https://www.linkedin.com/in/patrykgodlewski/" },
    { title: "Email", link: "mailto:pgodlewski099@gmail.com" },
  ];

  const socialLinks = [
    { title: "LinkedIn", link: "https://www.linkedin.com/in/patrykgodlewski/" },
    { title: "Github", link: "https://github.com/PatrykGodlewski" },
  ];

  return (
    <div className="relative py-[500px]">
      <HalfCircle className="absolute z-0 w-full left-0 top-[150px]" />
      <div className="relative z-10 reverse-dark-mode bg-background text-foreground">
        <div className="relative py-24 z-10 px-20">
          <Title className="text-accent pb-28" id="contact">
            {t("getInTouch")}
          </Title>
          <p className="pb-14 text-2xl max-w-3xl">{t("contactDescription")}</p>
          <div className="space-y-4 pb-32">
            {contactLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <h2
            className={cn("text-6xl pb-14 text-accent max-w-", font.className)}
          >
            {t("followMeOnSocials")}
          </h2>
          <div className="space-y-4">
            {socialLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute left-0 z-0 top-0 py-20 px-20 w-full h-full flex justify-end items-end">
          <IconGrid />
        </div>
      </div>
      <HalfCircle className="absolute z-0 w-full left-0 bottom-[150px]" />
    </div>
  );
}

function HalfCircle({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className={cn("flex justify-center")}>
        <div className="w-1/2 aspect-square rounded-full border border-foreground"></div>
      </div>
    </div>
  );
}

export default Contact;
