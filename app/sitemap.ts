import type { MetadataRoute } from "next";
import { projects } from "./data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lkmarchitecture.com";

  const pages = [
    "",
    "/work",
    "/services",
    "/about",
    "/journal",
    "/editions",
    "/start-a-project",
    "/contact",
  ];

  const staticPages = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticPages,
    ...projectPages,
  ];
}