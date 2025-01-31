import { useState } from "react";
import confetti from "canvas-confetti";
import { Typography } from "@/components/ui/typography";
import { PleaseButton } from "@/components/please-button";

export function Please() {
  const [clickCount, setClickCount] = useState(0);

  const messages = [
    "Пожалуйста! 🥺",
    "Ну пожалуйста-пожалуйста! 🙏",
    "Мы будем очень-очень рады! ✨",
    "Ты украсишь нашу команду! 🌸",
    "Без тебя всё не то! 💝",
    "Мы уже готовим печеньки! 🍪",
    "И вкусный кофе! ☕️",
    "Ты - именно тот человек, который нам нужен! 🌟",
    "Давай творить волшебство вместе! 🪄",
    "Пожалуйста? 🥺",
  ];

  const handleClick = () => {
    setClickCount((prev) => (prev + 1) % messages.length);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FF69B4", "#FFB6C1", "#FFC0CB"],
    });
  };

  return (
    <section className="container flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-8 py-24 text-center">
      <Typography.H1 className="max-w-3xl animate-fade-up">
        {messages[clickCount]}
      </Typography.H1>
      <Typography.Lead className="max-w-[42rem] animate-fade-up">
        Маша, ты сделаешь наш проект особенным! Мы очень хотим работать с тобой!
      </Typography.Lead>
      <PleaseButton onClick={handleClick} />
    </section>
  );
}