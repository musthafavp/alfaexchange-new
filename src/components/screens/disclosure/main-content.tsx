'use client'
import { useTranslations } from 'next-intl';

export default function MainContent() {
  const t = useTranslations('disclosure');

  return (
    <div className="py-8 container-md max-w-5xl mx-auto">
      <div className="bg-white overflow-hidden">
       

        <div className="p-5">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              {t('importantInformation.title')}
            </h2>
            
            <ul className="space-y-4">
              {Array.from({ length: t.raw('importantInformation.items').length }).map((_, index) => (
                <li key={index} className="text-gray-700">
                  <span className="font-medium">{index + 1}- </span>
                  {t(`importantInformation.items.${index}`)}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <div className="bg-blue-50 p-4 rounded-md border border-blue-200 text-center">
              <p className="font-semibold text-blue-800">
                {t('contactInfo.title')}
              </p>
              <p className="mt-2 text-blue-700">
                {t('contactInfo.email')} <span className="font-bold">CSD@ALFAEXCHANGE.COM</span> {t('contactInfo.or')} {t('contactInfo.call')} <span className="font-bold">04-2286231</span>
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              {t('grievance.title')}
            </h2>
            
            <p className="mb-4 text-gray-700">
              {t('grievance.description')}
            </p>

            <ul className="space-y-3 list-disc pl-5">
              {Array.from({ length: t.raw('grievance.levels').length }).map((_, index) => (
                <li key={index} className="text-gray-700">
                  {t(`grievance.levels.${index}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        
      </div>
    </div>
  );
}