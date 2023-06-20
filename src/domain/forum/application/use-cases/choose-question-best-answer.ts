import { Question } from '../../enterprise/entities/question'
import { AnswersRepository } from '../../application/repositories/answers-repository'
import { QuestionsRepository } from '../../application/repositories/questions-repository'

interface ChooseBestQuestionAnswerRequest {
  authorId: string
  answerId: string
}

interface ChooseBestQuestionAnswerResponse {
  question: Question
}

export class ChooseBestQuestionAnswerUseCase {
  constructor(
    private questionsRepository: QuestionsRepository,
    private answersRepository: AnswersRepository,
  ) {}

  async execute({
    authorId,
    answerId,
  }: ChooseBestQuestionAnswerRequest): Promise<ChooseBestQuestionAnswerResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found')
    }

    const question = await this.questionsRepository.findById(
      answer.questionId.toString(),
    )

    if (!question) {
      throw new Error('Question not found')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error(
        'Only the author of the question can choose the best answer',
      )
    }

    question.bestAnswerId = answer.id

    await this.questionsRepository.save(question)

    return { question }
  }
}
