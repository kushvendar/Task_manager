import z, { boolean, string } from 'zod'


export const taskInput = z.object({
  title: z.string(),
  description: z.string().optional(),
  completed: z.boolean()
})

// to check the input from the frontend side you should export the type inference file

export type taskInput= z.infer<typeof taskInput>     