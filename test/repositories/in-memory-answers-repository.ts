import { Answer } from '../../src/domain/forum/application/entities/answer'
import { AnswersRepository } from '../../src/domain/forum/application/repositories/answers-repository'

export class InMemoryAnswersRepository implements AnswersRepository {
  public items: Answer[] = []

  async create(answer: Answer) {
    this.items.push(answer)
  }
}
