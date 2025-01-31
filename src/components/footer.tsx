import { Heart, Sparkles } from "lucide-react";
import { Typography } from "./ui/typography";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex h-16 items-center justify-center gap-2">
        <Typography.P className="flex items-center gap-2">
          Сделано с <Heart className="h-4 w-4 text-primary" /> и{" "}
          <Sparkles className="h-4 w-4 text-primary" /> для Маши
        </Typography.P>
      </div>
    </footer>
  );
}