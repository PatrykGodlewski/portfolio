"use client";
import {
  BriefcaseIcon,
  GitPullRequest,
  Languages,
  Moon,
  Search,
  Sun,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useThemeSwitcher } from "./theme-switch";

export type PageNaviagtionItem = {
  Icon: React.ElementType;
  text: string;
};

export type PageFunctionItem = {
  Icon: React.ElementType;
  text: string;
  callback: () => void;
};

interface Props {
  options: {
    placeholder: string;
    emptyText: string;
    navigationHeadingText: string;
    functionHeadingText: string;
  };
}

export function CommandSearch({
  options: {
    placeholder,
    emptyText,
    navigationHeadingText,
    functionHeadingText,
  },
}: Props) {
  const t = useTranslations("commandSearch");
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useThemeSwitcher();
  const locale = useLocale();
  const router = useRouter();

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const teleportTo = (id: string) => {
    router.push(`#${id}`, {
      scroll: true,
      padStart: 200,
    });
    close();
  };

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const switchLanguage = () => {
    if (locale === "en") {
      router.push("/pl");
    } else {
      router.push("/en");
    }
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const ThemeIcon = theme === "dark" ? Sun : Moon;

  return (
    <>
      <Button onClick={open} variant={"ghost"}>
        <Search />
      </Button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder={placeholder} />
        <CommandList>
          <CommandEmpty>{emptyText}</CommandEmpty>
          <CommandGroup heading={navigationHeadingText}>
            <CommandItem onSelect={() => teleportTo("work")}>
              <BriefcaseIcon className="mr-2 h-4 w-4" />
              <span>{t("work")}</span>
            </CommandItem>
            <CommandItem onSelect={() => teleportTo("projects")}>
              <GitPullRequest className="mr-2 h-4 w-4" />
              <span>{t("projects")}</span>
            </CommandItem>
            <CommandItem onSelect={() => teleportTo("contact")}>
              <BriefcaseIcon className="mr-2 h-4 w-4" />
              <span>{t("contact")}</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading={functionHeadingText}>
            <CommandItem onSelect={switchTheme}>
              <ThemeIcon className="mr-2 h-4 w-4" />
              <span>
                {t("themeSwitch")} {theme === "dark" ? t("light") : t("dark")}
              </span>
            </CommandItem>
            <CommandItem onSelect={switchLanguage}>
              <Languages className="mr-2 h-4 w-4" />
              <span>
                {t("languageSwitch")}{" "}
                {locale === "en" ? t("polish") : t("english")}
              </span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
