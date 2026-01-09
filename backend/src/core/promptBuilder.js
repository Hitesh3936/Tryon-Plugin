export function buildPrompt(category) {
  return `
You are a high-end ecommerce image generation system.

TASK:
Apply the product image to the person image according to category rules.

REPLACEMENTS:
${category.rules.replace.join(", ")}

PRESERVE STRICTLY:
${category.rules.preserve.join(", ")}

REQUIREMENTS:
- Photorealistic
- Natural folds and lighting
- No identity change
- No distortion
- Ecommerce quality output
`;
}