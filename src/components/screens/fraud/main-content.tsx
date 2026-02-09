'use client'
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react';

export default function MainContent() {
  const t = useTranslations('fraud');
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index:any) => {
    if (activeSection === index) {
      setActiveSection(null);
    } else {
      setActiveSection(index);
    }
  };

  // Get mediums from translations
  const fraudMediums = [];
  for (let i = 0; i < t.raw('mediums').length; i++) {
    fraudMediums.push(t(`mediums.${i}`));
  }

  // Get protection tips from translations
  const protectionTips = [];
  for (let i = 0; i < t.raw('protectionTips').length; i++) {
    protectionTips.push(t(`protectionTips.${i}`));
  }

  // Get fraud types from translations
  const fraudTypes = [];
  for (let i = 0; i < t.raw('fraudTypes').length; i++) {
    fraudTypes.push({
      title: t(`fraudTypes.${i}.title`),
      description: t(`fraudTypes.${i}.description`),
      whatToDoTitle: t(`fraudTypes.${i}.whatToDoTitle`),
      whatToDo: t(`fraudTypes.${i}.whatToDo`)
    });
  }

  return (
    <div className="py-12 container-md">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">{t('introTitle')}</h1>
        <p className="mb-4">{t('introParagraph')}</p>
        <p className="mb-4">{t('zeroTolerance')}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">{t('commonFraudsTitle')}</h2>
        <p className="mb-2">{t('commonFraudsIntro')}</p>
        <div className="flex flex-wrap gap-3 mb-4">
          {fraudMediums.map((medium, index) => (
            <div key={index} className="bg-gray-100 px-3 py-1 rounded">
              -{medium}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">{t('protectYourselfTitle')}</h2>
        <p className="mb-4">
          {t('reportingInfo')}
        </p>
        <h3 className="font-semibold mb-2">{t('tipsTitle')}</h3>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          {protectionTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">{t('fraudTypesTitle')}</h2>
        <div className="space-y-4">
          {fraudTypes.map((fraud, index) => (
            <div key={index} className="border border-gray-200 rounded">
              <button
                onClick={() => toggleSection(index)}
                className="flex w-full justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100"
              >
                <span className="font-medium">{fraud.title}</span>
                {activeSection === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {activeSection === index && (
                <div className="p-4 border-t">
                  <p className="mb-3">{fraud.description}</p>
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium mb-2">{fraud.whatToDoTitle}</h4>
                    <p>{fraud.whatToDo}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded">
        <h2 className="text-xl font-bold mb-3">{t('reportFraudTitle')}</h2>
        <p>{t('reportFraudDescription')}</p>
        <div className="mt-4">
          <div className="flex items-center mb-2">
            <Phone className="w-5 h-5 mr-2" />
            <span>{t('phoneNumber')}</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            <span>{t('email')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}