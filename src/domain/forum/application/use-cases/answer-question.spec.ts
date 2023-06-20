import { AnswerQuestionUseCase } from './answer-question'
import { InMemoryAnswersRepository } from '../../../../../test/repositories/in-memory-answers-repository'

let inMemoryQuestionsRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Answer Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to create an answer', async () => {
    const { answer } = await sut.execute({
      content: 'Nova resposta',
      instructorId: '1',
      questionId: '1',
    })

    expect(answer.content).toBe('Nova resposta')
    expect(inMemoryQuestionsRepository.items[0].id).toBe(answer.id)
  })
})
