import { Terms, HeadOpenGraph } from '@/components/index';
import { NextPage } from 'next';

const TermsPage: NextPage = () => (
  <>
    <HeadOpenGraph
      title='Terms and Conditions'
      description='Laundry Basket Plus Terms and Conditions'
      image='https://media.graphassets.com/rGIffdyDQHSL0ePjy3ti'
      alt='Laundry Basket Plus logo'
    />
    <Terms
      name='Laundry Basket Plus'
      email='LTJHoldingsLLC@gmail.com'
      phone='(256) 503-8895'
      website='https://laundrybasketplus.com'
    />
  </>
);

export default TermsPage;
