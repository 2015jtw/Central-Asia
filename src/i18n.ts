import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
// const locales = ['en', 'de'];
const validLocales = ["de", "en"];
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!validLocales.includes(locale as string)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
