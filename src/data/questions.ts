import type { Question } from "@/types/quiz";

export const QUESTIONS: Question[] = [
  // Elementary (小学)
  {
    id: "e1",
    level: "elementary",
    promptZh: "选出正确单词完成句子。",
    promptEn: "She ___ a story every night before bed.",
    options: ["read", "reads", "reading", "is read"],
    correctIndex: 1
  },
  {
    id: "e2",
    level: "elementary",
    promptZh: "选择正确的冠词填空。",
    promptEn: "___ hour ago, we started the quiz.",
    options: ["A", "An", "The", "/ (不填)"],
    correctIndex: 1
  },
  {
    id: "e3",
    level: "elementary",
    promptZh: "词汇：下列哪一项表示「疲倦的」？",
    promptEn: 'Which word means "feeling the need to sleep or rest"?',
    options: ["thirsty", "tired", "happy", "hungry"],
    correctIndex: 1
  },
  {
    id: "e4",
    level: "elementary",
    promptZh: "选出语法正确的句子。",
    promptEn: "Which sentence is correct?",
    options: [
      "He don't like milk.",
      "He doesn't like milk.",
      "He not like milk.",
      "He doesn't likes milk."
    ],
    correctIndex: 1
  },
  {
    id: "e5",
    level: "elementary",
    promptZh: "名词复数：选出正确形式。",
    promptEn: "one child → two ___",
    options: ["childs", "childes", "children", "childrens"],
    correctIndex: 2
  },

  // Middle school (初中)
  {
    id: "m1",
    level: "middle",
    promptZh: "虚拟语气：与现在事实相反，从句用 be 的哪种形式？",
    promptEn: "If I ___ you, I would save more pocket money.",
    options: ["am", "was", "were", "be"],
    correctIndex: 2
  },
  {
    id: "m2",
    level: "middle",
    promptZh: "固定搭配：be interested 后面常接哪个介词？",
    promptEn: "She is very interested ___ space science.",
    options: ["on", "at", "in", "for"],
    correctIndex: 2
  },
  {
    id: "m3",
    level: "middle",
    promptZh: "关系代词：选出最通顺的一项（指代前面的 book）。",
    promptEn: "The novel ___ I borrowed is a bestseller.",
    options: ["who", "whose", "which", "whom"],
    correctIndex: 2
  },
  {
    id: "m4",
    level: "middle",
    promptZh: "主谓一致：neither … nor … 连接主语时，谓语与谁一致？",
    promptEn: "Neither Tom nor his sister ___ ready yet.",
    options: ["are", "were", "is", "have"],
    correctIndex: 2
  },
  {
    id: "m5",
    level: "middle",
    promptZh: "时态：by + 将来时间，常与哪种时态连用？",
    promptEn: "By July, we ___ our group project.",
    options: ["finish", "will finish", "will have finished", "have finished"],
    correctIndex: 2
  },

  // High school (高中)
  {
    id: "h1",
    level: "high",
    promptZh: "倒装：以否定副词 not only 开头的句子，从句如何倒装？",
    promptEn: "Not only ___ she finish early, but she also checked every answer.",
    options: ["she did", "did she", "she does", "does she"],
    correctIndex: 1
  },
  {
    id: "h2",
    level: "high",
    promptZh: "倒装：seldom 置于句首时的语序。",
    promptEn: "Seldom ___ such helpful feedback from an online quiz.",
    options: [
      "I have received",
      "have I received",
      "I received",
      "did I received"
    ],
    correctIndex: 1
  },
  {
    id: "h3",
    level: "high",
    promptZh: "集体名词：The team 强调整体时，谓语常用？",
    promptEn: "The basketball team ___ practicing on the court every morning.",
    options: ["are", "were", "is", "is being"],
    correctIndex: 2
  },
  {
    id: "h4",
    level: "high",
    promptZh: "虚拟语气：与过去事实相反的 if 从句用过去完成时，主句用？",
    promptEn: "If I had left earlier, I ___ the last train.",
    options: [
      "would catch",
      "will catch",
      "would have caught",
      "had caught"
    ],
    correctIndex: 2
  },
  {
    id: "h5",
    level: "high",
    promptZh: "词汇：选出与 ambiguous（模糊不清的）意思最接近的词。",
    promptEn: 'Which word is closest in meaning to "ambiguous"?',
    options: ["obvious", "unclear", "simple", "polite"],
    correctIndex: 1
  }
];

export function questionsForLevel(level: Question["level"]): Question[] {
  return QUESTIONS.filter((q) => q.level === level);
}
