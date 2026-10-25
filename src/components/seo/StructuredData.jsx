import { Helmet } from 'react-helmet-async';
import { contactInfo, faqs } from '../../data/services';

const SITE_URL = 'https://www.ame-levallois.fr';

/* ── DrivingSchool schema (homepage) ── */
export function DrivingSchoolSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DrivingSchool',
    name: 'AME Levallois — Auto Moto École',
    image: `${SITE_URL}/images/ameauto.png`,
    url: SITE_URL,
    telephone: '+33155639330',
    email: contactInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactInfo.address,
      addressLocality: contactInfo.city,
      postalCode: contactInfo.postalCode,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8933,
      longitude: 2.2833,
    },
    openingHoursSpecification: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '222',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

/* ── FAQPage schema (about page) ── */
export function FAQPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

/* ── BreadcrumbList schema (any page) ── */
export function BreadcrumbSchema({ items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
