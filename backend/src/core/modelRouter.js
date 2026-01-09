import { nanoBananaGenerate } from "../adapters/nanoBananaAdapter.js";

export async function generateImage({ userImage, productImage, prompt }) {
  return nanoBananaGenerate({ userImage, productImage, prompt });
}