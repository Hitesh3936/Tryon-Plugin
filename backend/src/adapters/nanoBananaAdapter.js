import fetch from "node-fetch";

export async function nanoBananaGenerate({ userImage, productImage, prompt }) {
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/images:generate",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GOOGLE_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt,
        images: [userImage, productImage]
      })
    }
  );

  if (!response.ok) throw new Error("Nano Banana API failed");

  const data = await response.json();

  if (!data.generated_images || !data.generated_images[0])
    throw new Error("Invalid Nano Banana response");

  return data.generated_images[0];
}