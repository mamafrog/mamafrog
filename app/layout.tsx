import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import WagmiProviderComp from "@/components/wgami-provider";
import {cookieToInitialState} from "wagmi";
import {config} from "@/lib/config";
import {headers} from "next/headers";

const weird = localFont({
    src: "./fonts/file.woff2",
    weight: "100 500 900",
    variable: "--font-weird"
});

const normal = localFont({
    src: "./fonts/GeistVF.woff",
    weight: "100 900",
    variable: "--font-normal"
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const initialState = cookieToInitialState(config, (await headers()).get("cookie"));

    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${weird.variable} ${normal.variable} antialiased`}
        >
        <WagmiProviderComp initialState={initialState}>

            {children}
        </WagmiProviderComp>

        </body>
        </html>
    );
}