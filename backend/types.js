const z = require("zod");

const userZod = z.object({
  username: z.string(),
  password: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

const updateBodyZod = z.object({
  password: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

module.exports = { userZod, updateBodyZod };
