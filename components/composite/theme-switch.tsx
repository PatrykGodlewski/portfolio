"use client";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useThemeSwitcher = () => {
  const [mode, setMode] = useState<string | undefined>(undefined);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMode(theme);
  }, [theme]);

  useEffect(() => {
    if (!window) return;
    // @ts-ignore
    const node = document.getElementsByTagName("meta")["theme-color"];
    if (!node) return;
    node.setAttribute("content", mode === "dark" ? "#000" : "#fff");
  });

  return [mode, setTheme] as const;
};

export default function ThemeSwitch() {
  const [theme, setTheme] = useThemeSwitcher();
  return (
    <div>
      <Button
        variant={"ghost"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
}
