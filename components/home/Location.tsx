import { BlurImage } from '@/components/index';
import { StoreType } from '@/lib/graphcms/types';
import Link from 'next/link';

interface HomeStoresProps {
  store: StoreType;
  isReverse: boolean;
}

const Location = ({ store, isReverse }: HomeStoresProps) => {
  const bgColor = isReverse ? 'location--main' : 'location--secondary';
  const imagePosition = isReverse ? ' location--reverse' : null;
  const textColor = isReverse ? 'location--maintext' : 'location--secondarytext';

  return (
    <div className={`location ${bgColor}`}>
      <div className={`location__image ${imagePosition}`}>
        <BlurImage src={store.image.url} alt={store.image.alt} layout='fill' objectFit='cover' />
      </div>
      <div className='location__information'>
        <h3 className='location__header'>{store.name}</h3>
        <p className='location__subtext'>{store.description}</p>
        {store.hasExternalPage ? (
          <ExternalLink href={store.externalUrl} textColor={textColor} />
        ) : (
          <InternalLink href={`store/${store.slug}`} textColor={textColor} />
        )}
      </div>
    </div>
  );
};

interface LinkProps {
  href: string;
  textColor: string;
}

const InternalLink = (link: LinkProps) => (
  <Link href={link.href}>
    <a className={`location__link ${link.textColor}`}>More Information</a>
  </Link>
);

const ExternalLink = (link: LinkProps) => (
  <a
    rel='noopener external'
    target='_blank'
    href={link.href}
    className={`location__link ${link.textColor}`}>
    More Information
  </a>
);

const isExternalLink = (href: string) => {
  const pattern = /^(http|https):\/\//;
  return pattern.test(href);
};

export default Location;
