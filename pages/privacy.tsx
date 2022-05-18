import { HeadOpenGraph, PrivacyPolicy } from '@/components/index';
import { NextPage } from 'next';

const PrivacyPage: NextPage = () => (
  <>
    <HeadOpenGraph
      title='Privacy Policy'
      description='Laundry Basket Plus Privacy Policy'
      image='https://media.graphassets.com/rGIffdyDQHSL0ePjy3ti'
      alt='Laundry Basket Plus logo'
    />
    <PrivacyPolicy
      name='Laundry Basket Plus'
      email='LTJHoldingsLLC@gmail.com'
      phone='(256) 503-8895'
      website='https://laundrybasketplus.com'
    />
  </>
);

export default PrivacyPage;
