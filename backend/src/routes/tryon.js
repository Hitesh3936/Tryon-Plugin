import fs from "fs";
import { buildPrompt } from "../core/promptBuilder.js";
import { generateImage } from "../core/modelRouter.js";
import { validateCategory } from "../utils/validate.js";

export async function handleTryOn(req, res) {
  try {
    const category = validateCategory(req.body.category);
    if (!category) return res.status(400).json({ error: "Invalid category" });

    const userImageBase64 = fs.readFileSync(req.file.path, "base64");
    const productImageBase64 = req.body.product_image;

    const prompt = buildPrompt(category);

    const output = await generateImage({
      userImage: userImageBase64,
      productImage: productImageBase64,
      prompt
    });

    fs.unlinkSync(req.file.path);

    res.json({ image: output });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Try-on failed safely" });
  }
}