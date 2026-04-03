"use client";

import type { Question } from "@/types/quiz";

type Props = {
  question: Question;
  index: number;
  total: number;
  selectedIndex: number | null;
  answered: boolean;
  correctIndex: number;
  onChoose: (optionIndex: number) => void;
  onNext: () => void;
  isLast: boolean;
};

export function QuizPanel({
  question,
  index,
  total,
  selectedIndex,
  answered,
  correctIndex,
  onChoose,
  onNext,
  isLast
}: Props) {
  const progress = ((index + 1) / total) * 100;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-4 text-sm text-zinc-500">
        <span className="font-medium text-zinc-700">
          第 {index + 1} / {total} 题
        </span>
        <span>{Math.round(progress)}% 完成</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-zinc-200"
        role="progressbar"
        aria-valuenow={index + 1}
        aria-valuemin={1}
        aria-valuemax={total}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-teal-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <article className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-medium leading-relaxed text-sky-800">
          {question.promptZh}
        </p>
        <p className="mt-3 text-lg font-medium leading-snug text-zinc-900 sm:text-xl">
          {question.promptEn}
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {question.options.map((label, i) => {
            const isChosen = selectedIndex === i;
            const isCorrect = i === correctIndex;
            let box =
              "border-zinc-200 bg-zinc-50/80 hover:border-sky-300 hover:bg-white";

            if (answered) {
              if (isCorrect) {
                box =
                  "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-200/80";
              } else if (isChosen) {
                box = "border-rose-500 bg-rose-50 ring-2 ring-rose-200/80";
              } else {
                box = "border-zinc-100 bg-zinc-50 opacity-60";
              }
            }

            return (
              <li key={i}>
                <button
                  type="button"
                  disabled={answered}
                  onClick={() => onChoose(i)}
                  className={[
                    "flex w-full items-start gap-3 rounded-xl border-2 px-4 py-3.5 text-left text-sm font-medium text-zinc-800 transition disabled:cursor-default sm:text-base",
                    box
                  ].join(" ")}
                >
                  <span
                    className={[
                      "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                      answered && isCorrect
                        ? "bg-emerald-600 text-white"
                        : answered && isChosen && !isCorrect
                          ? "bg-rose-600 text-white"
                          : "bg-zinc-200 text-zinc-700"
                    ].join(" ")}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="pt-0.5">{label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {answered && (
          <div className="mt-8 flex flex-col items-stretch gap-3 border-t border-zinc-100 pt-6 sm:flex-row sm:justify-end">
            <p className="flex-1 text-sm text-zinc-600">
              {selectedIndex === correctIndex ? (
                <span className="font-medium text-emerald-700">回答正确！</span>
              ) : (
                <span className="font-medium text-rose-700">
                  再想想也没关系，正确答案已标绿。
                </span>
              )}
            </p>
            <button
              type="button"
              onClick={onNext}
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-zinc-800"
            >
              {isLast ? "查看成绩" : "下一题"}
            </button>
          </div>
        )}
      </article>
    </div>
  );
}
