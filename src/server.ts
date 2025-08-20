import fastify from "fastify";
import {
  validatorCompiler,
  serializerCompiler,
  type ZodTypeProvider,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";
import { fastifySwagger } from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { createCourseRoute } from "./routes/create-course.ts";
import { getCourseByIdRoute } from "./routes/get-course-by-id.ts";
import { getCoursesRoute } from "./routes/get-courses.ts";
import scalarAPIReference from "@scalar/fastify-api-reference";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

if (process.env.NODE_ENV === "development") {
  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: "Desafio Node.js",
        version: "1.0.0",
      },
    },
    transform: jsonSchemaTransform,
  });
}

app.register(scalarAPIReference, {
  routePrefix: "/docs",
});

app.register(createCourseRoute);
app.register(getCourseByIdRoute);
app.register(getCoursesRoute);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running");
});
