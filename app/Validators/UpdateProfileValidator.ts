import { schema, rules } from "@ioc:Adonis/Core/Validator";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class UpdateProfileValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id: schema.string(),
    email: schema.string({ trim: true }),
    name: schema.string({ trim: true }),
    password: schema.string.optional({ trim: true }, [
      rules.confirmed("password_confirmation"),
      rules.minLength(6),
      rules.maxLength(255),
    ]),
    password_confirmation: schema.string.optional({ trim: true }, [
      rules.minLength(6),
      rules.maxLength(255),
    ]),
    picture: schema.file.optional({
      size: "5mb",
      extnames: ["jpg", "gif", "png", "webp", "jpeg"],
    }),
    // ! do NOT put role here, we don't want a user to be able
    // to change its own role with a POST request !
  });

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {};
}