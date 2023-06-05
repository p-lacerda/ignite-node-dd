import { Answer } from "../entities/answer";

interface AnswerQuestionDTO {
  content: string;
  instructorUuid: string;
  questionUuid: string;
}

export class AnswerQuestionUseCase {
  execute({ content, instructorUuid, questionUuid }: AnswerQuestionDTO): Answer {
    const answer = new Answer(content);

    return answer;
  }
}