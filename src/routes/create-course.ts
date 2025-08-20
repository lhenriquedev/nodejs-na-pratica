import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { db } from "../database/client.ts";
import { courses } from "../database/schema.ts";
import z from "zod";

export const createCourseRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/courses",
    {
      schema: {
        tags: ["courses"],
        summary: "Create a course",
        description: "Essa rota recebe um titulo e cria um curso",
        body: z.object({
          title: z.string().min(5, "Título precisa ter 5 caracteres."),
        }),
        response: {
          201: z
            .object({ courseId: z.uuid() })
            .describe("Curso criado com sucesso"),
        },
      },
    },
    async (request, reply) => {
      const { title } = request.body;

      const result = await db.insert(courses).values({ title }).returning();

      return reply.status(201).send({ courseId: result[0].id });
    }
  );
};
