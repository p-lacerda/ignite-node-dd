import { Answer } from '../../src/domain/forum/enterprise/entities/answer'
import { AnswersRepository } from '../../src/domain/forum/application/repositories/answers-repository'

export class InMemoryAnswersRepository implements AnswersRepository {
  public items: Answer[] = []

  async findById(id: string) {
    const answer = this.items.find((item) => item.id.toString() === id)

    if (!answer) {
      return null
    }

    return answer
  }

  async create(answer: Answer) {
    this.items.push(answer)
  }

  async delete(answer: Answer) {
    const index = this.items.findIndex((item) => item.id === answer.id)

    this.items.splice(index, 1)
  }

  async save(answer: Answer) {
    const index = this.items.findIndex((item) => item.id === answer.id)

    this.items[index] = answer
  }
}
