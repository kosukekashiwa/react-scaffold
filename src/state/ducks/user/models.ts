import { denormalize, normalize, schema } from 'normalizr';

/** The type of User. */
export type User = {
  id: string;
  name: string;
};

/** The type of normalized User. */
export type NormalizedUser = User;

/** The normalizr schema key of User. */
export const userNormalizrSchemaKey = 'users';

/** The normalizr schema of User. */
export const userNormalizrSchema = new schema.Entity<User>(
  userNormalizrSchemaKey,
  {},
  { idAttribute: 'id' },
);

/** The type of normalized Users. */
export type NormalizedUsers = {
  [id: string]: NormalizedUser;
};

/** Normalized Users. */
export const normalizeUsers = (users: User[]) =>
  normalize<User, { [userNormalizrSchemaKey]: NormalizedUsers }, User['id'][]>(users, [
    userNormalizrSchema,
  ]);

/** Denormalized Users. */
export const denormalizeUsers = (users: ReturnType<typeof normalizeUsers>): User[] =>
  denormalize(users.result, [userNormalizrSchema], users.entities);
