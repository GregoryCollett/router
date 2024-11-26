import { createServerFn as serverFn } from '@tanstack/start';
import { z } from 'zod';
export const withUseServer = serverFn({
  method: 'GET'
}).handler(opts => {
  "use server";

  return withUseServer.__executeServer(opts);
});
export const withoutUseServer = serverFn({
  method: 'GET'
}).handler(opts => {
  "use server";

  return withoutUseServer.__executeServer(opts);
});
export const withVariable = serverFn({
  method: 'GET'
}).handler(opts => {
  "use server";

  return withVariable.__executeServer(opts);
});
async function abstractedFunction() {
  console.info('Fetching posts...');
  await new Promise(r => setTimeout(r, 500));
  return axios.get<Array<PostType>>('https://jsonplaceholder.typicode.com/posts').then(r => r.data.slice(0, 10));
}
function zodValidator<TSchema extends z.ZodSchema, TResult>(schema: TSchema, fn: (input: z.output<TSchema>) => TResult) {
  return async (input: unknown) => {
    return fn(schema.parse(input));
  };
}
export const withZodValidator = serverFn({
  method: 'GET'
}).handler(opts => {
  "use server";

  return withZodValidator.__executeServer(opts);
});