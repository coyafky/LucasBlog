import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

export const GET: APIRoute = async () => {
  const ogImagePath = fileURLToPath(
    new URL("../../public/astropaper-og.jpg", import.meta.url)
  );
  const buffer = await readFile(ogImagePath);

  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/jpeg" },
  });
};
