import { CTA, HeadOpenGraph, LocationSection, AboutUs } from '@/components/index';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getHomepageProps } from '@/lib/graphcms/queries';
import { AboutUsType, CTAType, StoreType } from '@/lib/graphcms/types';
import { GetStaticProps } from 'next';

interface HomepageProps {
  stores: StoreType[];
  callToAction: CTAType;
  aboutus: AboutUsType;
}

const Home = ({ stores, callToAction, aboutus }: HomepageProps) => (
  <>
    <HeadOpenGraph
      title={callToAction.header}
      description={aboutus.subheader}
      image='https://media.graphassets.com/rGIffdyDQHSL0ePjy3ti'
      alt='Laundry Basket Plus logo'
    />
    <CTA {...callToAction} />
    <AboutUs {...aboutus} />
    <LocationSection stores={stores} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { stores, callToAction, aboutus } = await graphCMSClient.request(getHomepageProps);

  return {
    props: { stores, callToAction, aboutus },
  };
};

export default Home;
