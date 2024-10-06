"use client";

import { Switch } from "@nextui-org/switch";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        isSelected={theme === "dark" ? false : true}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
      />
    </div>
  );
}
