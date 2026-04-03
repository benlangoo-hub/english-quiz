/**
 * Personalized short encouragement in Chinese based on score ratio.
 */
export function getChineseFeedback(score: number, total: number): string {
  if (total <= 0) return "继续加油，下次再来！";

  const ratio = score / total;

  if (ratio === 1) {
    return "满分通关！你今天的英语脑细胞在线率 100%，可以骄傲三秒钟再走～";
  }
  if (ratio >= 0.8) {
    return "非常棒！错的只是一点点小细节，再巩固一下就稳了，继续保持！";
  }
  if (ratio >= 0.6) {
    return "不错不错，基础已经在线了。把错题复盘一下，下次还能再提一档！";
  }
  if (ratio >= 0.4) {
    return "有进步空间很正常～对照解析把语法点啃一啃，你会明显感觉更顺口。";
  }
  return "别灰心，每个人都是从错题堆里爬出来的。休息一下，再来一轮，你会更顺手！";
}
