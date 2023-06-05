import { randomUUID } from "node:crypto";
import { Slug } from "./value-objects/slug";

interface QuestionProps {
  title: string;
  content: string;
  slug: Slug;
  authorId: string;
}

export class Question {
  id: string;
  title: string;
  slug: Slug;
  content: string;
  public authorId: string;

  constructor(props: QuestionProps, id?: string) {
    this.title = props.title;
    this.authorId = props.authorId;
    this.content = props.content;
    this.slug = props.slug;
    this.id = id ?? randomUUID();
  }
}