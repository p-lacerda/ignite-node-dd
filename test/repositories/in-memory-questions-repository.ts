import { PaginationParams } from '../../src/core/repositories/pagination-params'
import { Question } from '../../src/domain/forum/enterprise/entities/question'
import { QuestionsRepository } from '../../src/domain/forum/application/repositories/questions-repository'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public items: Question[] = []

  async findById(id: string) {
    const question = this.items.find((item) => item.id.toString() === id)

    if (!question) {
      return null
    }

    return question
  }

  async findBySlug(slug: string) {
    const question = this.items.find((item) => item.slug.value === slug)

    if (!question) {
      return null
    }

    return question
  }

  async findManyRecent({ page }: PaginationParams) {
    const questions = this.items
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice((page - 1) * 20, page * 20)

    return questions
  }

  async create(question: Question) {
    this.items.push(question)
  }

  async delete(question: Question) {
    const index = this.items.findIndex((item) => item.id === question.id)

    this.items.splice(index, 1)
  }

  async save(question: Question) {
    const index = this.items.findIndex((item) => item.id === question.id)

    this.items[index] = question
  }
}
