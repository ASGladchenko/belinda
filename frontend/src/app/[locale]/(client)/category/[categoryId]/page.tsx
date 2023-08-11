import garlic from '@/assets/tmp/garlic.png';
import * as Images from '@/assets/category/index';
import { AnimationBlock } from '@/components/animation-block';

const ClientCategory = ({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${
            Object.values(Images)[Math.round(Math.random() * 1)].src
          })`,
        }}
        className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-bold w-full h-[346px] bg-cover flex items-center justify-center text-white"
      >
        <h2 className="uppercase">Fruits {categoryId}</h2>
      </div>

      <div className="container flex flex-wrap items-center justify-start gap-6 py-[50px] md:gap-3 lg:py-[100px] lg:px-0">
        <AnimationBlock
          animation="animate-down-appearance"
          styles="opacity-0 max-w-[300px] w-full mx-auto"
        >
          <div className="w-full">
            <h3 className=" text-[28px] capitalize font-pacifico mb-3 text-center">
              Garlic
            </h3>
            <div
              style={{
                backgroundImage: `url(${garlic.src})`,
              }}
              className="relative cursor-pointer max-w-[260px] bg-no-repeat  w-full bg-contain bg-center aspect-[3/2] hover:scale-110 transition duration-500 mx-auto"
            ></div>

            <div className="flex flex-wrap w-full gap-1">
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>
            </div>
          </div>
        </AnimationBlock>

        <AnimationBlock
          animation="animate-down-appearance"
          styles="opacity-0 max-w-[300px] w-full mx-auto"
        >
          <div className="w-full ">
            <h3 className=" text-[28px] capitalize font-pacifico mb-3 text-center">
              Garlic
            </h3>
            <div
              style={{
                backgroundImage: `url(${garlic.src})`,
              }}
              className="relative cursor-pointer max-w-[260px] bg-no-repeat  w-full bg-contain bg-center aspect-[3/2] hover:scale-110 transition duration-500 mx-auto"
            ></div>

            <div className="flex flex-wrap w-full gap-1">
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>
            </div>
          </div>
        </AnimationBlock>

        <AnimationBlock
          animation="animate-down-appearance"
          styles="opacity-0 max-w-[300px] w-full mx-auto"
        >
          {' '}
          <div className="w-full">
            <h3 className=" text-[28px] capitalize font-pacifico mb-3 text-center">
              Sweet Pepper
            </h3>
            <div
              style={{
                backgroundImage: `url(${garlic.src})`,
              }}
              className="relative cursor-pointer max-w-[260px] bg-no-repeat  w-full bg-contain bg-center aspect-[3/2] hover:scale-110 transition duration-500 mx-auto"
            ></div>

            <div className="flex flex-wrap w-full gap-1">
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>
            </div>
          </div>
        </AnimationBlock>

        <AnimationBlock
          animation="animate-down-appearance"
          styles="opacity-0 max-w-[300px] w-full mx-auto"
        >
          <div className="w-full">
            <h3 className=" text-[28px] capitalize font-pacifico mb-3 text-center">
              tomato
            </h3>
            <div
              style={{
                backgroundImage: `url(${garlic.src})`,
              }}
              className="relative cursor-pointer max-w-[260px] bg-no-repeat  w-full bg-contain bg-center aspect-[3/2] hover:scale-110 transition duration-500 mx-auto"
            ></div>

            <div className="flex flex-wrap w-full gap-1">
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>{' '}
              <span className="flex items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-pointer transition duration-100">
                APR
              </span>
            </div>
          </div>
        </AnimationBlock>
      </div>
    </section>
  );
};

export default ClientCategory;
