import { Button } from "./ui/button";
import { Typography } from "./ui/typography";

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  onCtaClick: () => void;
}

export function HeroSection({
  title,
  description,
  ctaText,
  onCtaClick,
}: HeroSectionProps) {
  return (
    <section className="container flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-8 py-24 text-center">
      <Typography.H1 className="max-w-3xl animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
        {title}
      </Typography.H1>
      <Typography.Lead className="max-w-[42rem] animate-fade-up text-muted-foreground">
        {description}
      </Typography.Lead>
      <Button
        size="lg"
        onClick={onCtaClick}
        className="animate-fade-up bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
      >
        {ctaText}
      </Button>
    </section>
  );
}