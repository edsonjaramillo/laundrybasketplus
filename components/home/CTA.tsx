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
          <a
            rel='noopener nofollow noreferrer external'
            target='_blank'
            href='https://www.google.com/maps/place/Hola+Michoac%C3%A1n+ice+cream+and+coffee+shop/@34.3210944,-86.312755,17z/data=!3m1!4b1!4m5!3m4!1s0x8889f919acd21945:0xb5a3288ef5ab0a37!8m2!3d34.32109!4d-86.310561'
            className='cta__button cta--secondary'>
            Visit Us
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default CTA;
