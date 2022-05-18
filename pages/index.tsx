import { CTA, HeadOpenGraph, LocationSection, AboutUs } from '@/components/index';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getHomepageProps } from '@/lib/graphcms/queries';
import { AboutUsType, CTAType, StoreType } from '@/lib/graphcms/types';
import { GetServerSideProps } from 'next';

interface HomepageProps {
  stores: StoreType[];
  callToAction: CTAType;
  aboutus: AboutUsType;
}

const Home = ({ stores, callToAction, aboutus }: HomepageProps) => (
  <>
    <HeadOpenGraph
      title='Homepage'
      description='Laundry Basket Plus description goes here'
      image='https://laundrybasketplus.com/static/images/logo.png'
      alt='Hola Michoacan'
    />
    <CTA {...callToAction} />
    <AboutUs {...aboutus} />
    <LocationSection stores={stores} />
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const { stores, callToAction, aboutus } = await graphCMSClient.request(getHomepageProps);

  return {
    props: { stores, callToAction, aboutus },
  };
};

export default Home;
