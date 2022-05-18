// import { formatPrice } from '@/lib/graphcms/helper';
import Head from 'next/head';
import { JobListingType } from '@/lib/graphcms/types';
import { formatPrice } from '@/lib/graphcms/helper';

const JobListingJSONLD = (job: JobListingType) => {
  const JobListing = `
    {
        "@context": "http://schema.org",
        "@type": "JobPosting",
        "datePosted": "${job.datePosted}",
        "title": "${job.title}",
        "description": "${job.description}",
        "employmentType": "${job.isFulltime ? 'FULL_TIME' : 'PART_TIME'}",
        "hiringOrganization": {
            "@type": "Organization",
            "name": "Laundry Basket Plus",
            "sameAs": "https://www.linkedin.com/company/mmcenters",
            "logo": "https://media-exp1.licdn.com/dms/image/C4E0BAQEucYU1Xo6V9g/company-logo_200_200/0/1643207889101?e=1660780800&amp;v=beta&amp;t=9H7beLhI7YsClJ9qcPiXuuu2hOUfAdXReG0bZ3qYtNw"
        },
        "image": "https://media-exp1.licdn.com/dms/image/C4E0BAQEucYU1Xo6V9g/company-logo_100_100/0/1643207889101?e=1660780800&amp;v=beta&amp;t=ClE2Erk-DnO_Tds2R9Ycz1Gka-O7mvMXTBqStWmETcE",
        "industry": "Cleaning and Facilities",
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "US",
                "addressLocality": "${job.store.address.city}",
                "addressRegion": "${job.store.address.state}",
                "streetAddress": "${job.store.address.street}",
                "postalCode": "${job.store.address.zipcode}"
            }
        },
        "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": {
                "@type": "QuantitativeValue",
                "value": "${job.wage.toFixed(2)}",
                "unitText": "HOUR"
            }
          }

    }`;

  return (
    <Head>
      <script type='application/ld+json'>{JobListing}</script>
    </Head>
  );
};

export default JobListingJSONLD;
