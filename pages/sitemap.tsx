import { navbarLinks } from '@/components/shared/Navbar';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getSitemapLinks } from '@/lib/graphcms/queries';
import { StoreType, JobListingType } from '@/lib/graphcms/types';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

interface SitemapPageProps {
  stores: StoreType[];
  joblistings: JobListingType[];
}

const Sitemap = ({ stores, joblistings }: SitemapPageProps) => (
  <div className='sitemap responsive-width-sitemap'>
    <h1 className='sitemap__header'>Sitemap</h1>
    <hr />
    <div className='sitemap__grid'>
      <SitemapSection header='Main'>
        <SitemapLink slug='/' name='Homepage' />
        {navbarLinks.map((link) => (
          <SitemapLink key={link.name} slug={link.slug} name={link.name} />
        ))}
      </SitemapSection>
      <SitemapSection header='Legal'>
        <SitemapLink slug='/policy' name='Privacy Policy' />
        <SitemapLink slug='/terms' name='Terms and Conditions' />
      </SitemapSection>
      <SitemapSection header='Stores'>
        {stores.map((store) => (
          <SitemapLink key={store.id} slug={`/stores/${store.slug}`} name={store.name} />
        ))}
      </SitemapSection>
      {joblistings.length > 0 && (
        <SitemapSection header='Job Listings'>
          {joblistings.map((job) => (
            <SitemapLink key={job.id} slug={`/apply/${job.id}`} name={job.title} />
          ))}
        </SitemapSection>
      )}
    </div>
  </div>
);

interface SitemapSectionProps {
  header: string;
  children: any;
}

interface SitemapLinkProps {
  slug: string;
  name: string;
}

const SitemapSection = ({ header, children }: SitemapSectionProps) => (
  <section className='sitemap__section'>
    <h2 className='sitemap__section--title'>{header}</h2>
    {children}
  </section>
);

const SitemapLink = ({ slug, name }: SitemapLinkProps) => (
  <Link href={slug}>
    <a className='sitemap__link'>{name}</a>
  </Link>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const { stores, joblistings } = await graphCMSClient.request(getSitemapLinks);

  return {
    props: { stores, joblistings },
  };
};

export default Sitemap;
