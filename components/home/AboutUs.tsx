import { AboutUsType } from '@/lib/graphcms/types';

const AboutUs = ({ header, subheader }: AboutUsType) => (
  <div className='aboutus'>
    <div className='aboutus__content responsive-width-cta'>
      <h2 className='aboutus__header'>{header}</h2>
      <span className='aboutus__subheader'>{subheader}</span>
    </div>
  </div>
);

export default AboutUs;
