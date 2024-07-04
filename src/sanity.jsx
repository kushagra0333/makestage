import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "bdqq83ia",
  dataset: "production",
  apiVersion: "2024-03-11",
  // Set to `true` for production environments
  useCdn: true,
});
