"use client";

import { ThemeProvider } from "next-themes";

interface Props {
  readonly children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
