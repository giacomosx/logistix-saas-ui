import {z} from "zod";

export const RequestSchema = z.object({
    prospect: z.string().min(3),
    localUnit: z.string(),
    referentMail: z.string().email(),
    referentName: z.string(),
    referentPhone: z.string().min(10),
})