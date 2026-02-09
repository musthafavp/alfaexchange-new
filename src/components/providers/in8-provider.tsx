"use client";

import {NextIntlClientProvider} from "next-intl";
import {ReactNode} from "react";

export function In8Providers({children, locale}: {children: ReactNode; locale: string}) {
  const messages = require(`../public/locales/${locale}.json`);

  return <NextIntlClientProvider locale={locale} messages={messages}>{children}</NextIntlClientProvider>;
}