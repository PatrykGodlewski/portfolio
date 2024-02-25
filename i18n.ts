import { getRequestConfig } from "next-intl/server";
import { redirect } from "next/navigation";
import { LOCALES } from "./lib/constants";

export const LOCALES_LIST = Object.values(LOCALES);
export const DEFAULT_LOCALE = LOCALES_LIST[0];

export default getRequestConfig(async ({ locale }) => {
  if (!LOCALES_LIST.includes(locale as any)) redirect("/en");

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
