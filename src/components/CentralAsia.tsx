import React from 'react';
import { useTranslations } from 'next-intl';

export default function CentralAsia() {
    const t = useTranslations('CentralAsia');

    return (
        <section
            id="central-asia"
            className="relative flex flex-col justify-center items-center bg-gradient-to-r from-yellow-300 to-orange-500 text-black py-20 md:py-28 lg:py-32"
        >
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-normal mb-4">
                    {t('subtitle')}
                </h3>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                    {t('title')}
                </h2>
                <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed">
                    {t('description')}
                </p>
            </div>
            
            {/* Bottom gradient fade for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white/30"></div>
        </section>
    );
}
