import { AboutUs } from '@/components/about-us';
import { Advantages } from '@/components/advantages';
import { SliderMain } from '@/components/main-slider';
import { AnimationBlock } from '@/components/animation-block';

export default function Home() {
  return (
    <div>
      <SliderMain />
      <AboutUs />
      <Advantages />
    </div>
  );
}
