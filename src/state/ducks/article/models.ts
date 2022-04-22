import { denormalize, normalize, schema } from 'normalizr';

import {
  User,
  userNormalizrSchema,
  userNormalizrSchemaKey,
  NormalizedUsers,
} from '~/state/ducks/user/models';

/** The type of Article. */
export type Article = {
  id: number;
  title: string;
  author: User;
};

/** The type of normalized Article. */
export type NormalizedArticle = Omit<Article, 'author'> & {
  author: User['id'];
};

/** The normalizr schema key of Article. */
export const articleNormalizrSchemaKey = 'articles';

/** The normalizr schema of Article. */
export const articleNormalizrSchema = new schema.Entity<Article>(
  articleNormalizrSchemaKey,
  { author: userNormalizrSchema },
  { idAttribute: 'id' },
);

/** The type of normalized Articles. */
export type NormalizedArticles = {
  [id: number]: NormalizedArticle;
};

/** Normalized Articles. */
export const normalizeArticles = (articles: Article[]) =>
  normalize<
    Article,
    { [articleNormalizrSchemaKey]: NormalizedArticles; [userNormalizrSchemaKey]: NormalizedUsers },
    Article['id'][]
  >(articles, [articleNormalizrSchema]);

/** Denormalized Articles. */
export const denormalizeArticles = (articles: ReturnType<typeof normalizeArticles>): Article[] =>
  denormalize(articles.result, [articleNormalizrSchema], articles.entities);
