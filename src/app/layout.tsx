import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "./redux/ReduxProvider";
import GetLedgerList from "./Components/GetLedgerList/GetLedgerList";
import BackButton from "./Components/common/BackButton/BackButton";

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
        <ReduxProvider>
          <BackButton />
          {children}
          <GetLedgerList />
        </ReduxProvider>
      </body>
    </html>
  );
}
