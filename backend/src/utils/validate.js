import { CATEGORY_REGISTRY } from "../core/categoryRegistry.js";

export function validateCategory(id) {
  return Object.values(CATEGORY_REGISTRY).find(c => c.id === id);
}