import { StoreRichTextRenderer, BlurImage, HeadOpenGraph } from '@/components/index';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getStore } from '@/lib/graphcms/queries';
import { StoreType } from '@/lib/graphcms/types';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

interface StorePageProps {
  store: StoreType;
}

const StorePage = ({ store }: StorePageProps) => {
  return (
    <>
      <HeadOpenGraph
        title={store.name}
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

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { slug } = ctx.query;

  const { store } = await graphCMSClient.request(getStore, { slug });

  return {
    props: { store },
  };
};

export default StorePage;
