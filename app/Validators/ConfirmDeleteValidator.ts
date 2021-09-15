import { schema } from "@ioc:Adonis/Core/Validator";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ConfirmDeleteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    entity: schema.string(),
    id: schema.string(),
    formAction: schema.string(),
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
  public messages = {
    "entity.required": "Le paramètre entity est requis",
    "title.required": "Le paramètre title est requis",
    "id.required": "Le paramètre id est requis",
    "formAction.required": "Le paramètre formAction est requis",
    "redirect.required": "Le paramètre redirect est requis",
  };
}