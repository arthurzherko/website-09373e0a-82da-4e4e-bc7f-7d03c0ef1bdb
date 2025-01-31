import { useNavigate } from "react-router-dom";
import { HeroSection } from "@/components/hero-section";
import { FeatureCard } from "@/components/feature-card";
import { Heart, Sparkles, Star } from "lucide-react";
import { Typography } from "@/components/ui/typography";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection
        title="Привет, Маша! 🌸 Этот сайт создан специально для тебя!"
        description="Мы очень хотим, чтобы ты присоединилась к нашему новому проекту. Он будет самым-самым особенным, как и ты! ✨"
        ctaText="Узнать больше"
        onCtaClick={() => navigate("/reasons")}
      />

      <section className="container py-24">
        <div className="mx-auto mb-12 text-center">
          <Typography.H2>Почему этот проект особенный? ✨</Typography.H2>
          <Typography.Lead>
            Вот несколько причин, почему тебе обязательно понравится!
          </Typography.Lead>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Heart}
            title="С любовью к деталям"
            description="Каждая строчка кода будет написана с особой заботой и вниманием"
          />
          <FeatureCard
            icon={Sparkles}
            title="Творческая свобода"
            description="Ты сможешь воплотить все свои самые смелые идеи"
          />
          <FeatureCard
            icon={Star}
            title="Дружная команда"
            description="Мы не просто коллеги, мы - одна большая семья"
          />
        </div>
      </section>
    </>
  );
}