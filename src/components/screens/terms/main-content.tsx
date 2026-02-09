'use client'
import { useTranslations } from 'next-intl';

export default function MainContent() {
    const t = useTranslations('terms');

    // Define sections
    const sections = [
      {
        title: t('responsibilities.title'),
        content: t.raw('responsibilities.items')
      },
      {
        title: t('understanding.title'),
        content: t.raw('understanding.items')
      },
      {
        title: t('cancellations.title'),
        content: t.raw('cancellations.items')
      },
      {
        title: t('privacy.title'),
        content: t.raw('privacy.items')
      },
      {
        title: t('general.title'),
        content: t.raw('general.items')
      }
    ];
  
    return (
      <div className="py-8 container-md max-w-5xl mx-auto">
        <div className="bg-white  overflow-hidden">
         
  
          <div className="p-5">
            {sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                  {section.title}
                </h2>
                
                <div className="pl-1">
                  <ul className="space-y-2 list-disc">
                    {section.content.map((item:any, itemIndex:number) => (
                      <li key={itemIndex} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
  
         
        </div>
      </div>
    );
}