import {Flowbite, ThemeModeScript} from "flowbite-react";
import "./globals.css";


export const metadata = {
  title: "Eco Saas",
  description: "Software as a Service App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head>
            <ThemeModeScript mode={'auto'}/>
        </head>
      <body className={`antialiased`} suppressHydrationWarning>
      <Flowbite theme={{mode: 'auto'}}>
        {children}
      </Flowbite>
      </body>
    </html>
  );
}
