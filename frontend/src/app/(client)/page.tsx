import { Buns } from '@/components/buns';
import { AboutUs } from '@/components/about-us';
import { Advantages } from '@/components/advantages';
import { SliderMain } from '@/components/main-slider';

export default function Home() {
  return (
    <div>
      <SliderMain />
      <AboutUs />
      <Buns />
      <Advantages />
    </div>
  );
}
