import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'


test('create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    content: 'Nova resposta',
    instructorUuid: '1',
    questionUuid: '1'
  })

  expect(answer.content).toBe('Nova resposta')
})