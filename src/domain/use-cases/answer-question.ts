import { UniqueEntityID } from "../../core/entities/unique-entity-id";
import { Answer } from "../entities/answer";
import { AnswersRepository } from "../repositories/answers-repository";

interface AnswerQuestionDTO {
  content: string;
  instructorId: UniqueEntityID;
  questionId: UniqueEntityID;
}

export class AnswerQuestionUseCase {
  constructor(
    private answersRepository: AnswersRepository
  ) { }

  async execute({ content, instructorId, questionId }: AnswerQuestionDTO) {
    const answer = new Answer({
      content, authorId: instructorId, questionId, createdAt: new Date()
    });

    await this.answersRepository.create(answer);

    return answer;
  }
}