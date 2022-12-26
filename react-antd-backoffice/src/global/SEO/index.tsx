import { Helmet } from "react-helmet";
import defaultProps from "./defaultProps";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  published?: string;
}

function SEO({ title, description, image, url, type, published }: SEOProps) {
  const webTitle = title ? `${title} - Reach Dashboard` : defaultProps.title;
  const webDescription = description || defaultProps.description;
  const webImage = image || defaultProps.image;
  const webUrl = url || defaultProps.url;

  return (
    <Helmet>
      <title>{webTitle}</title>
      <meta name="description" content={webDescription} />
      <meta name="image" content={webImage} />
      <meta name="url" content={webUrl} />
      <meta name="type" content="website" />
      <meta name="published" content={published} />

      <meta property="og:title" content={webTitle} />
      <meta property="og:description" content={webDescription} />
      <meta property="og:image" content={webImage} />
      <meta property="og:url" content={webUrl} />
      <meta property="og:type" content={"website"} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={webTitle} />
      <meta name="twitter:description" content={webDescription} />
      <meta name="twitter:image" content={webImage} />
      <meta name="twitter:url" content={webUrl} />

      <meta itemProp="name" content={webTitle} />
      <meta itemProp="description" content={webDescription} />
      <meta itemProp="image" content={webImage} />
      <meta itemProp="url" content={webUrl} />
      <meta itemProp="type" content={type} />
      <meta itemProp="published" content={published} />

      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  );
}

export default SEO;
