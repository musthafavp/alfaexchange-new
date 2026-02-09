
'use client'
import { useTranslations } from 'next-intl';
import Head from 'next/head';

export default function MainContent() {
  const t = useTranslations('aml-policies');

  return (
    <>
   
      <div >
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-semibold text-gray-900 sm:text-3xl">
              {t('title')}
            </h1>
         
          </div>

          {/* Content */}
          <div className="bg-white  overflow-hidden">
            {/* Company Policy Section */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {t('companyPolicy.title')}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('companyPolicy.description')}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {t('companyPolicy.localLaws.title')}
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {t.raw('companyPolicy.localLaws.items').map((item:any, index:number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-medium text-gray-900">
                  {t('companyPolicy.internationalLaws.title')}
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {t.raw('companyPolicy.internationalLaws.items').map((item:any, index:number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Declaration Policy Section */}
            <div className="p-6 border-b border-gray-200 bg-blue-50">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {t('declaration.title')}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('declaration.paragraph1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('declaration.paragraph2')}
              </p>
              <p className="text-gray-700">
                {t('declaration.paragraph3')}
              </p>
            </div>

            {/* Key Sections - Two Column Layout for Desktop */}
            <div className="border-b border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {/* Compliance Officer */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {t('complianceOfficer.title')}
                  </h2>
                  <p className="text-gray-700">
                    {t('complianceOfficer.description')}
                  </p>
                </div>

                {/* KYC */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {t('kyc.title')}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {t('kyc.paragraph1')}
                  </p>
                  <p className="text-gray-700 mb-4">
                    {t('kyc.paragraph2')}
                  </p>
                  <p className="text-gray-700">
                    {t('kyc.paragraph3')}
                  </p>
                </div>
              </div>
            </div>

            {/* CDD and EDD */}
            <div className="border-b border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {/* CDD */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {t('cdd.title')}
                  </h2>
                  <p className="text-gray-700">
                    {t('cdd.description')}
                  </p>
                </div>

                {/* EDD */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {t('edd.title')}
                  </h2>
                  <p className="text-gray-700">
                    {t('edd.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Risk Based Approach */}
            <div className="p-6 border-b border-gray-200 bg-blue-50">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {t('riskBasedApproach.title')}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('riskBasedApproach.paragraph1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('riskBasedApproach.paragraph2')}
              </p>
              <p className="text-gray-700">
                {t('riskBasedApproach.paragraph3')}
              </p>
            </div>

            {/* Staff Training */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {t('staffTraining.title')}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('staffTraining.paragraph1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('staffTraining.paragraph2')}
              </p>

              <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">
                {t('staffTraining.materials.title')}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {t.raw('staffTraining.materials.items').map((item:any, index:number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Final Sections */}
            <div className="grid md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Suspicious Transactions */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('suspiciousTransactions.title')}
                </h2>
                <p className="text-gray-700">
                  {t('suspiciousTransactions.description')}
                </p>
              </div>

              {/* Record Keeping */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('recordKeeping.title')}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t('recordKeeping.paragraph1')}
                </p>
                <p className="text-gray-700 mb-4">
                  {t('recordKeeping.paragraph2')}
                </p>
                <p className="text-gray-700">
                  {t('recordKeeping.paragraph3')}
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
}
