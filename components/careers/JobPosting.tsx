import { CareerType } from '@/data/careers';
import { JobListingType } from '@/lib/graphcms/types';
import Link from 'next/link';

export const hourlyFormat = (wage: number) => {
  return `$${wage.toFixed(2)}\\hr`;
};

const JobPosting = ({ id, title, isFulltime, store }: JobListingType) => (
  <article className='jobposting'>
    <div className='jobposting__content'>
      <div className='jobposting__top'>
        <h2 className='jobposting__title'>{title}</h2>
        <span
          className={`jobposting__type ${
            isFulltime ? 'jobposting--fulltime' : 'jobposting--parttime'
          }`}>
          {isFulltime ? 'Full-time' : 'Part-time'}
        </span>
      </div>
      <div className='jobposting__bottom'>
        <span className='jobposting__location'>{store.name}</span>
        <span>{`${store.address.city}, ${store.address.state}`}</span>
        {/* <span>{hourlyFormat(wage)}</span> */}
      </div>
    </div>
    <Link href={`/apply/${id}`}>
      <a className='jobposting__link'>More Info</a>
    </Link>
  </article>
);

export default JobPosting;
