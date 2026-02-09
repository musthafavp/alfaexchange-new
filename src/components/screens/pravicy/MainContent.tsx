// pages/privacy-policy.js
import { useTranslations } from 'next-intl';
import Head from 'next/head';

export default function MainContent() {
  const t = useTranslations('privacy-policy');

  // Privacy policy content structure
  const content = {
    title: t('title'),
    introduction: [
      t('regulated'),
      t('fundamental'),
      t('informYou'),
    ],
    personalInfo: {
      title: t('personalInfoTitle'),
      description: t('personalInfoDescription'),
      items: [
        t('personalInfoItem1'),
        t('personalInfoItem2'),
        t('personalInfoItem3'),
        t('personalInfoItem4'),
        t('personalInfoItem5'),
        t('personalInfoItem6'),
      ]
    },
    security: {
      title: t('securityTitle'),
      measures: [
        t('securityMeasure1'),
        t('securityMeasure2'),
        t('securityMeasure3'),
      ]
    },
    changes: {
      title: t('changesTitle'),
      description: t('changesDescription')
    },
    inquiries: {
      title: t('inquiriesTitle'),
      description: t('inquiriesDescription')
    }
  };

  return (
    <>
      <Head>
        <title>{content.title} | Alfa Exchange</title>
        <meta name="description" content="Privacy Policy for Alfa Exchange" />
      </Head>

        <div className="container-md my-12">
         

          {/* Content */}
          <div className="bg-white  rounded-lg overflow-hidden">
            {/* Introduction */}
            <div className="p-6 border-b border-gray-200">
              {content.introduction.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Personal Information */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {content.personalInfo.title}
              </h2>
              <p className="text-gray-700 mb-4">
                {content.personalInfo.description}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {content.personalInfo.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Security Measures */}
            <div className="p-6 border-b border-gray-200 bg-blue-50">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {content.security.title}
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {content.security.measures.map((measure, index) => (
                  <li key={index}>{measure}</li>
                ))}
              </ul>
            </div>

            {/* Changes */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {content.changes.title}
              </h2>
              <p className="text-gray-700">
                {content.changes.description}
              </p>
            </div>

            {/* Inquiries */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {content.inquiries.title}
              </h2>
              <p className="text-gray-700">
                {content.inquiries.description}
              </p>
              <div className="mt-4 flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                <a
                  href="tel:042233302"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  04-2233302
                </a>
                <a
                  href="mailto:info@alfaexchange.com"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@alfaexchange.com
                </a>
              </div>
            </div>
          </div>

          
        </div>
    </>
  );
}

