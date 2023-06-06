import { randomUUID } from "node:crypto";
import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";

interface QuestionProps {
  title: string;
  content: string;
  slug: Slug;
  authorId: UniqueEntityID;
  createdAt: Date
  updatedAt?: Date
  bestAnswerId?: UniqueEntityID
}

export class Question extends Entity<QuestionProps> {

}