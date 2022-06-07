import Head from 'next/head';
import { useRouter } from 'next/router';

type RobotTagTypes = 'index, follow' | 'noindex, nofollow';
type OpenGraphTypes = 'article' | 'website' | 'profile' | 'book';

interface HeadOpenGraphProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  ogType?: OpenGraphTypes;
  robots?: RobotTagTypes;
}

const HeadOpenGraph = ({
  title,
  description,
  image,
  alt,
  ogType = 'website',
  robots = 'index, follow',
}: HeadOpenGraphProps) => {
  const { asPath } = useRouter();
  const url = 'https://laundrybasketplus.com';
  const cannonicalURL = url + asPath;
  const siteTitle = `${title} | Laundry Basket Plus`;

  const websiteJson = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: cannonicalURL,
    name: siteTitle,
    description: description,
    publisher: 'Laundry Basket Plus',
  };

  return (
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJson) }}
      />
      <title>{siteTitle}</title>
      <meta name='description' content={description} />
      <meta property='og:url' content={cannonicalURL} />
      <meta property='og:type' content={ogType} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:image:alt' content={alt} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:domain' content={cannonicalURL} />
      <meta property='twitter:url' content={cannonicalURL} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:image:alt' content={alt} />
      <link rel='canonical' href={cannonicalURL} />
      <meta name='theme-color' content='#16304b' />
      <meta name='robots' content={robots} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
  );
};

export default HeadOpenGraph;
