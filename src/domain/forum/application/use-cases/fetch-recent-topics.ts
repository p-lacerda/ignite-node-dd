import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../../application/repositories/questions-repository'

interface FetchRecentTopicsUseCaseRequest {
  page: number
}

interface FetchRecentTopicsUseCaseResponse {
  questions: Question[]
}

export class FetchRecentTopicsUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    page,
  }: FetchRecentTopicsUseCaseRequest): Promise<FetchRecentTopicsUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page })

    return {
      questions,
    }
  }
}
