import z from 'zod';
export declare const taskInput: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    completed: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    title: string;
    completed: boolean;
    description?: string | undefined;
}, {
    title: string;
    completed: boolean;
    description?: string | undefined;
}>;
export type taskInput = z.infer<typeof taskInput>;
