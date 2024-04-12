import { LOCALES } from "@/lib/constants";
import pick from "lodash/pick";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import Logo from "../ui/logo";
import { CommandSearch } from "./command-search";
import LanguageSwitch from "./language-switch";
import ThemeSwitch from "./theme-switch";

interface Props {
  locale: LOCALES;
}

function Navbar({ locale }: Props) {
  const t = useTranslations("commandSearch");
  const messages = useMessages();

  return (
    <nav className="grid grid-cols-3 z-50 fixed px-4 md:p-8 w-full top-0 h-[var(--mobile-navbar-height)] md:h-[var(--navbar-height)] bg-background">
      <div />
      <div className="flex justify-center items-center">
        <Logo />
      </div>
      <div className="flex gap-4 items-center justify-end">
        <div className="gap-4 hidden items-center sm:flex">
          <LanguageSwitch currentLocale={locale} />
          <ThemeSwitch />
        </div>
        <NextIntlClientProvider messages={pick(messages, "commandSearch")}>
          <CommandSearch
            options={{
              emptyText: t("noItemsFound"),
              functionHeadingText: t("webPageFunctions"),
              navigationHeadingText: t("webPageNavigation"),
              placeholder: t("search"),
            }}
          />
        </NextIntlClientProvider>
      </div>
    </nav>
  );
}

export default Navbar;
