export interface QuizItem {
    category: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: [string];
}