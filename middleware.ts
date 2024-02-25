import createMiddleware from "next-intl/middleware";
import { DEFAULT_LOCALE, LOCALES_LIST } from "./i18n";

export default createMiddleware({
  locales: LOCALES_LIST,
  defaultLocale: DEFAULT_LOCALE,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/([\\w-]+)?/users/(.+)"],
};
