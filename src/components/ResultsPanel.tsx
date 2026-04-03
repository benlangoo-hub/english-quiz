"use client";

import type { GradeLevel } from "@/types/quiz";

const LEVEL_LABEL: Record<GradeLevel, string> = {
  elementary: "小学 Elementary",
  middle: "初中 Middle School",
  high: "高中 High School"
};

type Props = {
  grade: GradeLevel;
  score: number;
  total: number;
  messageZh: string;
  onRetry: () => void;
  onHome: () => void;
};

export function ResultsPanel({
  grade,
  score,
  total,
  messageZh,
  onRetry,
  onHome
}: Props) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <div className="space-y-8 text-center">
      <div>
        <p className="text-sm font-medium text-sky-700">{LEVEL_LABEL[grade]}</p>
        <h2 className="mt-2 text-2xl font-bold text-zinc-900 sm:text-3xl">
          测验完成
        </h2>
      </div>

      <div className="mx-auto flex h-44 w-44 flex-col items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-teal-500 p-1 shadow-xl shadow-sky-900/20">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white">
          <span className="text-4xl font-bold tabular-nums text-zinc-900">
            {score}/{total}
          </span>
          <span className="mt-1 text-sm font-medium text-zinc-500">
            得分 {pct}%
          </span>
        </div>
      </div>

      <blockquote className="mx-auto max-w-lg rounded-2xl border border-zinc-200 bg-white px-6 py-5 text-left text-base leading-relaxed text-zinc-800 shadow-sm">
        {messageZh}
      </blockquote>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-sky-600 px-8 text-sm font-semibold text-white shadow hover:bg-sky-700"
        >
          再测一次
        </button>
        <button
          type="button"
          onClick={onHome}
          className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-zinc-300 bg-white px-8 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
        >
          返回首页
        </button>
      </div>
    </div>
  );
}
