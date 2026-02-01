import React from "react";
import { Helmet } from "react-helmet";

type Maybe<T> = T | null | undefined;

type SeoImage = {
  sourceUrl?: Maybe<string>;
  mediaItemUrl?: Maybe<string>;
  altText?: Maybe<string>;
};

type SeoSchema = {
  raw?: Maybe<string>;
};

type SeoFields = {
  title?: Maybe<string>;
  metaDesc?: Maybe<string>;
  metaKeywords?: Maybe<string>;
  metaRobotsNoindex?: Maybe<string | boolean>;
  metaRobotsNofollow?: Maybe<string | boolean>;
  opengraphTitle?: Maybe<string>;
  opengraphDescription?: Maybe<string>;
  opengraphImage?: Maybe<SeoImage>;
  twitterTitle?: Maybe<string>;
  twitterDescription?: Maybe<string>;
  twitterImage?: Maybe<SeoImage>;
  canonical?: Maybe<string>;
  schema?: Maybe<SeoSchema>;
};

type SeoEntity = {
  title?: Maybe<string>;
  seo?: Maybe<SeoFields>;
  [key: string]: unknown;
};

type SeoProps = {
  post?: Maybe<SeoEntity>;
};

const normalizeRobotValue = (value?: Maybe<string | boolean>) => {
  if (value === undefined || value === null) return false;
  if (typeof value === "boolean") return value;
  return value.toLowerCase() === "noindex" || value.toLowerCase() === "nofollow";
};

const Seo = ({ post }: SeoProps) => {
  const seo = post?.seo;
  if (!seo) return null;

  const isNoIndex = normalizeRobotValue(seo.metaRobotsNoindex);
  const isNoFollow = normalizeRobotValue(seo.metaRobotsNofollow);
  const robotsDirectives = [
    isNoIndex ? "noindex" : null,
    isNoFollow ? "nofollow" : null,
  ].filter(Boolean);

  const title = seo.title ?? post?.title ?? undefined;
  const description = seo.metaDesc ?? undefined;
  const canonical = seo.canonical ?? undefined;

  const ogTitle = seo.opengraphTitle ?? title;
  const ogDescription = seo.opengraphDescription ?? description;
  const ogImage =
    seo.opengraphImage?.sourceUrl ??
    seo.opengraphImage?.mediaItemUrl ??
    seo.twitterImage?.sourceUrl ??
    seo.twitterImage?.mediaItemUrl;
  const ogImageAlt =
    seo.opengraphImage?.altText ??
    seo.twitterImage?.altText ??
    undefined;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {seo.metaKeywords && (
        <meta name="keywords" content={seo.metaKeywords} />
      )}
      {robotsDirectives.length > 0 && (
        <meta name="robots" content={robotsDirectives.join(", ")} />
      )}
      {canonical && <link rel="canonical" href={canonical} />}

      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}

      {seo.twitterTitle && (
        <meta name="twitter:title" content={seo.twitterTitle} />
      )}
      {seo.twitterDescription && (
        <meta name="twitter:description" content={seo.twitterDescription} />
      )}
      {seo.twitterImage?.sourceUrl && (
        <meta name="twitter:image" content={seo.twitterImage.sourceUrl} />
      )}

      {seo.schema?.raw && (
        <script type="application/ld+json">{seo.schema.raw}</script>
      )}
    </Helmet>
  );
};

export default Seo;

