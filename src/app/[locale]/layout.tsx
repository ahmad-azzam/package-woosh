import clsx from "clsx";
import { poppinsFont } from "@/ui/font";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Package Woosh",
  description: "Deliver your package",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={clsx(poppinsFont.className)}>
        <NextIntlClientProvider messages={messages}>
          <AntdRegistry>{children}</AntdRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
