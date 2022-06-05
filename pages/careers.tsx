import { JobPosting } from '@/components/index';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getJobListings } from '@/lib/graphcms/queries';
import { JobListingType } from '@/lib/graphcms/types';
import { GetStaticProps } from 'next';

interface JobListingPageProps {
  joblistings: JobListingType[];
}

const CareersPage = ({ joblistings }: JobListingPageProps) => (
  <section className='responsive-width-jobs'>
    <h1 className='jobs__header'>Careers</h1>
    {joblistings.length > 0 ? (
      <div className='jobpostingsgrid'>
        {joblistings.map((career) => (
          <JobPosting key={career.id} {...career} />
        ))}
      </div>
    ) : (
      <h2 className='jobs__subheader'>No job listings available at this time.</h2>
    )}
  </section>
);

export const getStaticProps: GetStaticProps = async () => {
  const { joblistings } = await graphCMSClient.request(getJobListings);

  return {
    props: { joblistings },
  };
};

export default CareersPage;
