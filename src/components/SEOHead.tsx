import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  schema?: object | object[];
}

/**
 * SEOHead — Dynamically sets page <title>, <meta description>, canonical,
 * Open Graph tags, and injects a JSON-LD schema script per page.
 * Restores defaults when unmounted (navigating away from a page).
 */
export const SEOHead = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "https://www.tnalphaacademy.in/alpha-academy-logo.jpg",
  schema,
}: SEOHeadProps) => {
  useEffect(() => {
    // Title
    const prevTitle = document.title;
    document.title = title;

    // Helper: set or create a meta tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        if (selector.startsWith("meta[name")) {
          el.setAttribute("name", attr);
        } else {
          el.setAttribute("property", attr);
        }
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
      return el;
    };

    // Helper: set or create a link tag
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
      return el;
    };

    setMeta('meta[name="description"]', "description", description);
    setMeta('meta[name="title"]', "title", title);
    setLink("canonical", canonical);

    const resolvedOgTitle = ogTitle ?? title;
    const resolvedOgDesc = ogDescription ?? description;

    setMeta('meta[property="og:title"]', "og:title", resolvedOgTitle);
    setMeta('meta[property="og:description"]', "og:description", resolvedOgDesc);
    setMeta('meta[property="og:url"]', "og:url", canonical);
    setMeta('meta[property="og:image"]', "og:image", ogImage);
    setMeta('meta[property="twitter:title"]', "twitter:title", resolvedOgTitle);
    setMeta('meta[property="twitter:description"]', "twitter:description", resolvedOgDesc);
    setMeta('meta[property="twitter:url"]', "twitter:url", canonical);

    // Inject JSON-LD schema
    let schemaScript: HTMLScriptElement | null = null;
    if (schema) {
      schemaScript = document.createElement("script");
      schemaScript.type = "application/ld+json";
      schemaScript.id = "page-schema";
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

    return () => {
      document.title = prevTitle;
      if (schemaScript && document.head.contains(schemaScript)) {
        document.head.removeChild(schemaScript);
      }
    };
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, schema]);

  return null;
};
