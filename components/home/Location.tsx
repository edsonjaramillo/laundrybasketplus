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
        <BlurImage
          src={store.image.url}
          alt={store.name}
          layout='fill'
          objectFit='cover'
          quality={55}
        />
      </div>
      <div className='location__information'>
        <h3 className='location__header'>{store.name}</h3>
        <p className='location__subtext'>{store.description}</p>
        {store.hasExternalPage ? (
          <ExternalLink title={store.name} href={store.externalUrl} textColor={textColor} />
        ) : (
          <InternalLink title={store.name} href={`/store/${store.slug}`} textColor={textColor} />
        )}
      </div>
    </div>
  );
};

interface LinkProps {
  title: string;
  href: string;
  textColor: string;
}

const InternalLink = (link: LinkProps) => (
  <Link href={link.href}>
    <a
      title={`More Information for ${link.title} location`}
      className={`location__link ${link.textColor}`}>
      More Information
    </a>
  </Link>
);

const ExternalLink = (link: LinkProps) => (
  <a
    title={`More Information for ${link.title} location`}
    rel='noopener nofollow noreferrer external'
    target='_blank'
    href={link.href}
    className={`location__link ${link.textColor}`}>
    More Information
  </a>
);

export default Location;
