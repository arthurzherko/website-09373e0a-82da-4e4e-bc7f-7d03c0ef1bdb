import { Heart, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { cn } from "@/lib/utils";
import { Typography } from "./ui/typography";
import { Button } from "./ui/button";

const navigationLinks = [
  { to: "/", label: "Главная" },
  { to: "/reasons", label: "Причины" },
  { to: "/please", label: "Пожалуйста" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-foreground hover:text-foreground/80"
        >
          <Heart className="h-6 w-6 text-primary" />
          <Typography.Large className="hidden sm:block">
            Пожалуйста, Маша
          </Typography.Large>
          <Typography.Large className="sm:hidden">Маша</Typography.Large>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {navigationLinks.map((link) => (
              <NavigationMenuItem key={link.to}>
                <Link to={link.to}>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-foreground"
                    )}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Открыть меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left">Меню</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-foreground hover:text-foreground/80"
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-lg"
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <ModeToggle />
      </div>
    </header>
  );
}