"use client";

import { useCallback, useMemo, useState } from "react";
import { questionsForLevel } from "@/data/questions";
import { getChineseFeedback } from "@/lib/chinese-feedback";
import { GradeSelection } from "@/components/GradeSelection";
import { QuizPanel } from "@/components/QuizPanel";
import { ResultsPanel } from "@/components/ResultsPanel";
import type { GradeLevel, Question } from "@/types/quiz";

type Phase = "home" | "quiz" | "results";

export default function HomePage() {
  const [phase, setPhase] = useState<Phase>("home");
  const [grade, setGrade] = useState<GradeLevel | null>(null);
  const [deck, setDeck] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const startQuiz = useCallback(() => {
    if (!grade) return;
    const q = questionsForLevel(grade);
    setDeck(q);
    setIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedIndex(null);
    setPhase("quiz");
  }, [grade]);

  const chooseOption = useCallback(
    (optionIndex: number) => {
      if (answered || !deck.length) return;
      const q = deck[index];
      if (!q) return;
      setSelectedIndex(optionIndex);
      setAnswered(true);
      if (optionIndex === q.correctIndex) {
        setScore((s) => s + 1);
      }
    },
    [answered, deck, index]
  );

  const goNext = useCallback(() => {
    if (index >= deck.length - 1) {
      setPhase("results");
      return;
    }
    setIndex((i) => i + 1);
    setAnswered(false);
    setSelectedIndex(null);
  }, [deck.length, index]);

  const retrySameLevel = useCallback(() => {
    if (!grade) return;
    const q = questionsForLevel(grade);
    setDeck(q);
    setIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedIndex(null);
    setPhase("quiz");
  }, [grade]);

  const goHome = useCallback(() => {
    setPhase("home");
    setGrade(null);
    setDeck([]);
    setIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedIndex(null);
  }, []);

  const feedbackMessage = useMemo(() => {
    const total = deck.length;
    return getChineseFeedback(score, total);
  }, [deck.length, score]);

  const current = deck[index];

  return (
    <div className="min-h-full bg-gradient-to-b from-[#f7f5f0] via-[#f2f4f0] to-[#e3ebe4]">
      <main className="mx-auto min-h-full max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-stone-900/5 backdrop-blur-sm sm:p-10">
          {phase === "home" && (
            <GradeSelection
              selected={grade}
              onSelect={setGrade}
              onStart={startQuiz}
              canStart={grade !== null}
            />
          )}

          {phase === "quiz" && current && grade && (
            <QuizPanel
              question={current}
              index={index}
              total={deck.length}
              selectedIndex={selectedIndex}
              answered={answered}
              correctIndex={current.correctIndex}
              onChoose={chooseOption}
              onNext={goNext}
              isLast={index === deck.length - 1}
            />
          )}

          {phase === "results" && grade && deck.length > 0 && (
            <ResultsPanel
              grade={grade}
              score={score}
              total={deck.length}
              messageZh={feedbackMessage}
              onRetry={retrySameLevel}
              onHome={goHome}
            />
          )}
        </div>

        <p className="mt-8 text-center text-xs text-zinc-400">
          English Quiz · 仅供学习练习使用
        </p>
      </main>
    </div>
  );
}
