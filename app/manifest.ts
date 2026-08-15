import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.role}`,
    short_name: siteConfig.name,
    description: siteConfig.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a12",
    theme_color: "#4c6fff",
    icons: [
      {
        src: siteConfig.avatarUrl,
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
