import { CTAType } from '@/lib/graphcms/types';
import Link from 'next/link';

const CTA = ({ header, subheader }: CTAType) => (
  <header className='cta'>
    <div className='cta__content'>
      <div className='cta__contentgrid responsive-width-cta'>
        <h1 className='cta__header'>{header}</h1>
        <span className='cta__subheader'>{subheader}</span>
        <div className='cta__buttongrid'>
          <Link href='/#locations'>
            <a className='cta__button cta--primary'>Locations</a>
          </Link>
          <Link href='/contact'>
            <a className='cta__button cta--secondary'>Contact Us</a>
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default CTA;
