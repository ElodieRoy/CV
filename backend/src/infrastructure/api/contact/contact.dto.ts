import { z } from 'zod';

export const contactInputDTO = z.object({
  name: z
    .string()
    .min(1, 'Le nom doit contenir au moins 1 caractère')
    .max(70, 'Le nom ne doit pas dépasser 70 caractères'),
  email: z.string().email("L'adresse e-mail n'est pas valide"),
  message: z
    .string()
    .min(20, 'Le message doit contenir au moins 20 caractères.')
    .max(3000, 'Le message ne doit pas dépasser 3000 caractères.'),
});

// export type ContactInputDTO = z.infer<typeof contactInputDTO>;
// Fixme: with tsoa version infer from zod not working : https://github.com/lukeautry/tsoa/issues/1256
export type ContactInputDTO = {
  name: string;
  email: string;
  message: string;
};
