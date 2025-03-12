import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "./redux/ReduxProvider";
import GetLedgerList from "./Components/GetLedgerList/GetLedgerList";

export const metadata: Metadata = {
  title: "Pocket Share",
  description: "Pocket Share",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
        <GetLedgerList />
      </body>
    </html>
  );
}
