export interface WordItem {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase';
  meaningVi: string;
  exampleEn: string;
  exampleVi: string;
  masteryLevel: number; // 0 to 5
}
