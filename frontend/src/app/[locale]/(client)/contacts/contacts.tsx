import { useTranslations } from 'next-intl';

import bg from '@/assets/contacts/contact-bg.jpg';

export const Contacts = () => {
  const page = useTranslations('contacts-client');

  return (
    <section>
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-bold w-full h-[346px] bg-cover flex items-center justify-center text-white"
      >
        <h2 className="uppercase">{page('title')}</h2>
      </div>

      <div className="container flex flex-col gap-5 py-6 md:py-12">
        <div className="flex flex-col mx-auto w-full gap-3 max-w-[640px] p-4 border-double border-4 border-black rounded-3xl dark:border-white md:p-8">
          <h3 className="font-bold text-[26px] mb-4 text-center">
            {page('card1.title')}
          </h3>

          <p>
            <span className="font-bold">{page('card1.title-person')} : </span>
            <span>{page('card1.person')}</span>
          </p>

          <p>
            <span className="font-bold">{page('card1.title-phone')} : </span>
            <span>{page('card1.phone')}</span>
          </p>

          <p>
            <span className="font-bold">{page('card1.title-email')} : </span>
            <span>{page('card1.email')}</span>
          </p>

          <p>
            <span className="font-bold">{page('card1.title-address')} : </span>
            <span>{page('card1.address')}</span>
          </p>
        </div>

        <div className="flex flex-col mx-auto w-full gap-3 max-w-[640px] p-3 border-double border-4 border-black rounded-3xl dark:border-white md:p-6">
          <h3 className="font-bold text-[26px] mb-4 text-center">
            {page('card2.title')}
          </h3>

          <p>
            <span className="font-bold">{page('card2.title-person')} : </span>
            <span>{page('card2.person')}</span>
          </p>

          <p>
            <span className="font-bold">{page('card2.title-phone')} : </span>
            <span>{page('card2.phone')}</span>
          </p>

          <p>
            <span className="font-bold">{page('card2.title-email')} : </span>
            <span>{page('card2.email')}</span>
          </p>

          <p>
            <span className="font-bold">{page('card2.title-address')} : </span>
            <span>{page('card2.address')}</span>
          </p>
        </div>

        <div className="flex flex-col mx-auto w-full gap-3 max-w-[640px] p-3 border-double border-4 border-black rounded-3xl dark:border-white md:p-6">
          <h3 className="font-bold text-[26px] mb-4 text-center">
            {page('card3.title')}
          </h3>

          <p>
            <span className="font-bold">{page('card3.title-person')} : </span>
            <span>{page('card3.person')}</span>
          </p>

          <p>
            <span className="font-bold">{page('card3.title-phone')} : </span>
            <span>{page('card3.phone')}</span>
          </p>

          <p>
            <span className="font-bold">{page('card3.title-email')} : </span>
            <span>{page('card3.email')}</span>
          </p>

          <p>
            <span className="font-bold">{page('card3.title-address')} : </span>
            <span>{page('card3.address')}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
