import { AboutUs, Advantages, Buns, Offer, SliderMain } from '@/components';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  console.log(t('tile'));
  return (
    <div>
      <SliderMain />
      <AboutUs />
      <Buns />
      <Advantages />
      <Offer />
    </div>
  );
}
