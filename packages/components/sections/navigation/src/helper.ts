import { Logo } from "./types";

export function logoLink(logo?: Logo): string {
  if (!logo) return "/";
  return logo.linkExternal || "/";
}

export function getImageProperty(image?: any) {
  if (!image) return { width: 0, height: 0 };
  return {
    width: image.width || 0,
    height: image.height || 0,
  };
}
