import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { hourlyFormat } from '@/components/careers/JobPosting';
import { Application, LaundryBasketLogo } from '@/components/index';
import { JobListingRichTextRenderer, JobListingJSONLD } from '@/components/index';
import { JobListingType } from '@/lib/graphcms/types';
import { getJobListing } from '@/lib/graphcms/queries';
import { graphCMSClient } from '@/lib/graphcms/client';

interface ApplyPageProps {
  joblisting: JobListingType;
}

const ApplyPage = ({ joblisting }: ApplyPageProps) => (
  <>
    <JobListingJSONLD {...joblisting} />
    <div className='apply responsive-width-apply'>
      <div className='apply__header'>
        <div className='apply__logo'>
          <LaundryBasketLogo />
        </div>
        <h1 className='apply__title'>{joblisting.title}</h1>
        <div className='apply__group'>
          <span>{joblisting.store.name}</span>
          <span className='apply__location'>{`${joblisting.store.address.city}, ${joblisting.store.address.state}`}</span>
        </div>
        <span className='apply__timesince'>{`Posted on: ${joblisting.datePosted}`}</span>
        <a className='apply__applynow' href='#application'>
          Apply Now
        </a>
      </div>
      <p className='apply__p'>{joblisting.store.description}</p>
      <p className='apply__p'>{joblisting.description}</p>
      <h2 className='apply__h2'>Job Information</h2>
      <ul className='apply__list'>
        <ListItem
          title='Position Type'
          message={joblisting.isFulltime ? 'Full-time' : 'Part-time'}
        />
        <ListItem title='Estimated Hours' message={joblisting.estimatedHours} />
        <ListItem title='Starting Wage' message={hourlyFormat(joblisting.wage)} />
      </ul>
      <JobListingRichTextRenderer content={joblisting.article.raw} />
      <em>
        Laundry Basket Plus is committed to equal opportunity for all employees and applicants. As a
        proud Equal Opportunity Employer (EOE), we do not discriminate based on race, color,
        national origin, ancestry, citizenship status, religion, sex, sexual stereotyping, sexual
        orientation, gender, gender identity, gender expression, age, marital status, mental or
        physical disability, medical condition, genetic information, military or veteran status,
        pregnancy (which includes pregnancy, childbirth, and medical conditions related to
        pregnancy, childbirth, or breastfeeding), or any other protected characteristic. Employment
        may be contingent upon Laundry Basket Plus&apos; receipt of an acceptable and job-related
        drug test, motor vehicle report, and/or reference check, as applicable and permissible by
        law.
      </em>
      <Application title={joblisting.title} />
    </div>
  </>
);

interface JobListItemType {
  title: string;
  message: string | number;
}

const ListItem = ({ title, message }: JobListItemType) => (
  <li>
    <strong>{`${title}: `}</strong>
    <span>{message}</span>
  </li>
);

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { id } = ctx.query;

  const { joblisting } = await graphCMSClient.request(getJobListing, { id });

  return {
    props: { joblisting },
  };
};

export default ApplyPage;
