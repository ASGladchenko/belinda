import { useTranslations } from 'next-intl';

import { AboutUs, Advantages, Buns, Offer, SliderMain } from '@/components';

export default function Home() {
  const page = useTranslations('home-page');

  return (
    <div>
      <SliderMain />

      <AboutUs
        title={page('about.title')}
        information={page('about.information')}
      />

      <Buns
        textProduct={page('buns.textProduct')}
        textManager={page('buns.textManager')}
        textImporter={page('buns.textImporter')}
        titleProduct={page('buns.titleProduct')}
        textSupplies={page('buns.textSupplies')}
        titleManager={page('buns.titleManager')}
        titleImporter={page('buns.titleImporter')}
        titleSupplies={page('buns.titleSupplies')}
      />

      <Advantages
        title={page('advantages.title')}
        first={page('advantages.first')}
        third={page('advantages.third')}
        fifth={page('advantages.fifth')}
        second={page('advantages.second')}
        fourth={page('advantages.fourth')}
      />

      <Offer
        title={page('offers.title')}
        first={page('offers.first')}
        third={page('offers.third')}
        fifth={page('offers.fifth')}
        sixth={page('offers.sixth')}
        second={page('offers.second')}
        fourth={page('offers.fourth')}
      />
    </div>
  );
}
