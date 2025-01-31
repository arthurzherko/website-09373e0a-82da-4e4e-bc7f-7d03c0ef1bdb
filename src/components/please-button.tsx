import { useState } from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface PleaseButtonProps {
  onClick: () => void;
}

export function PleaseButton({ onClick }: PleaseButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      size="lg"
      className={cn(
        "group relative transition-all duration-300",
        isHovered && "scale-110"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <Heart
        className={cn(
          "absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-primary opacity-0 transition-all duration-300",
          isHovered && "scale-150 opacity-10"
        )}
      />
      <span className="relative z-10 flex items-center gap-2">
        Пожалуйста
        <Heart className="h-4 w-4 animate-pulse text-primary" />
      </span>
    </Button>
  );
}