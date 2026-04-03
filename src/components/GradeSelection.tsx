"use client";

import type { GradeLevel } from "@/types/quiz";

const GRADES: {
  id: GradeLevel;
  titleZh: string;
  titleEn: string;
  blurb: string;
}[] = [
  {
    id: "elementary",
    titleZh: "小学",
    titleEn: "Elementary",
    blurb: "基础词汇与简单语法"
  },
  {
    id: "middle",
    titleZh: "初中",
    titleEn: "Middle School",
    blurb: "常考搭配与复合句"
  },
  {
    id: "high",
    titleZh: "高中",
    titleEn: "High School",
    blurb: "倒装、虚拟语气与高阶词汇"
  }
];

type Props = {
  selected: GradeLevel | null;
  onSelect: (level: GradeLevel) => void;
  onStart: () => void;
  canStart: boolean;
};

export function GradeSelection({
  selected,
  onSelect,
  onStart,
  canStart
}: Props) {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-sky-700/80">
          Grade 4–12 · 中英对照
        </p>
        <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          English Quiz
        </h1>
        <p className="mx-auto mt-3 max-w-md text-pretty text-zinc-600">
          选择一个学段，完成 5 道语法与词汇小测。题目为中英双语，一次一题、即时反馈。
        </p>
      </header>

      <section aria-label="学段选择">
        <h2 className="mb-4 text-center text-sm font-semibold text-zinc-800">
          选择你的学段
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {GRADES.map((g) => {
            const isActive = selected === g.id;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => onSelect(g.id)}
                className={[
                  "group rounded-2xl border-2 px-5 py-5 text-left transition-all duration-200",
                  isActive
                    ? "border-sky-500 bg-white shadow-lg shadow-sky-900/10 ring-2 ring-sky-200"
                    : "border-zinc-200/80 bg-white/80 hover:border-sky-300 hover:shadow-md"
                ].join(" ")}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-lg font-semibold text-zinc-900">
                    {g.titleZh}
                  </span>
                  <span className="text-xs font-medium text-sky-600">
                    {g.titleEn}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {g.blurb}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={onStart}
          disabled={!canStart}
          className={[
            "inline-flex min-h-12 min-w-[200px] items-center justify-center rounded-full px-8 text-base font-semibold transition",
            canStart
              ? "bg-sky-600 text-white shadow-md shadow-sky-900/20 hover:bg-sky-700 active:scale-[0.98]"
              : "cursor-not-allowed bg-zinc-200 text-zinc-400"
          ].join(" ")}
        >
          开始测验 · Start Quiz
        </button>
      </div>
    </div>
  );
}
