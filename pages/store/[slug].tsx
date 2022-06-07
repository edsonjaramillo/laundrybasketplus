import { StoreRichTextRenderer, BlurImage, HeadOpenGraph } from '@/components/index';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getStore, getStoreSlugs } from '@/lib/graphcms/queries';
import { StoreType } from '@/lib/graphcms/types';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

interface StorePageProps {
  store: StoreType;
}

const StorePage = ({ store }: StorePageProps) => {
  return (
    <>
      <HeadOpenGraph
        title={`${store.name} in ${store.address.city}, ${store.address.state}`}
        description={store.description}
        image={store.image.url}
        alt={store.description}
      />
      <div className='store responsive-width-store'>
        <h1 className='store__h1'>{store.name}</h1>
        <span className='store__location'>{`${store.address.city}, ${store.address.state}`}</span>
        <div className='store__image'>
          <BlurImage
            src={store.image.url}
            alt={store.image.alt}
            width={store.image.width}
            height={store.image.height}
            quality={65}
            layout='responsive'
            priority
          />
        </div>
        <p className='store__p'>{store.description}</p>
        <StoreRichTextRenderer content={store.article.raw} />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { stores } = await graphCMSClient.request(getStoreSlugs);

  const paths = stores.map((store: any) => ({
    params: { slug: store.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const { slug } = ctx.params as { slug: string };

  const { store } = await graphCMSClient.request(getStore, { slug });

  return {
    props: { store },
  };
};

export default StorePage;
