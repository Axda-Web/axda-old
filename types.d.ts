import { z } from "zod"

export const skillSchema = z.object({
    id: z.number(),
    tech: z.string(),
    exp: z.number()
})

type Skill = z.infer<typeof skillSchema>

export type Skills = Skill[]