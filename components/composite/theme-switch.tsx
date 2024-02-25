"use client";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [mode, setMode] = useState<string | undefined>(undefined);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMode(theme);
  }, [theme]);

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
