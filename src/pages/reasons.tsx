import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ReasonCard } from "@/components/reason-card";
import { Typography } from "@/components/ui/typography";

const reasons = [
  {
    title: "Интересные задачи",
    description: "Ты будешь работать над крутыми фичами, которые действительно важны",
  },
  {
    title: "Гибкий график",
    description: "Работай так, как тебе удобно, главное - результат",
  },
  {
    title: "Развитие",
    description: "Ты сможешь освоить новые технологии и подходы",
  },
  {
    title: "Классная команда",
    description: "У нас очень дружный коллектив, который всегда поддержит",
  },
  {
    title: "Забота о тебе",
    description: "Мы ценим каждого члена команды и создаем комфортные условия",
  },
  {
    title: "Печеньки!",
    description: "Да-да, у нас всегда есть вкусные печеньки и чай ☕️",
  },
];

export function Reasons() {
  const navigate = useNavigate();

  return (
    <section className="container py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <Typography.H1>6 причин сказать "Да!" 💝</Typography.H1>
        <Typography.Lead>
          Маша, мы собрали для тебя самые важные причины, почему этот проект -
          именно то, что тебе нужно!
        </Typography.Lead>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <ReasonCard
            key={index}
            number={index + 1}
            title={reason.title}
            description={reason.description}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          size="lg"
          onClick={() => navigate("/please")}
          className="animate-bounce bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
        >
          Хочу узнать больше!
        </Button>
      </div>
    </section>
  );
}