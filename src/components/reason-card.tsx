import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Typography } from "./ui/typography";

interface ReasonCardProps {
  number: number;
  title: string;
  description: string;
}

export function ReasonCard({ number, title, description }: ReasonCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-colors hover:bg-accent">
      <CardHeader>
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Typography.Large>{number}</Typography.Large>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Typography.P className="text-muted-foreground">{description}</Typography.P>
      </CardContent>
    </Card>
  );
}