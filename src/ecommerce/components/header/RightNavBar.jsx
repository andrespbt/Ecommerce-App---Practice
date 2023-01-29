import { useSelector } from 'react-redux';
import { NavHeartIcon, NavSearchIcon, NavShopIcon, NavUserIcon } from '@/ecommerce/icons/header';
import { NavCaretUpIcon } from '@/ecommerce/icons/header/NavCaretUpIcon';

export const RightNavBar = () => {
  const { status } = useSelector(state => state.auth);

  return (
    <div className="flex h-full w-40 items-center justify-around text-xl md:justify-evenly xl:basis-1/6 xl:justify-start xl:gap-8">
      <NavSearchIcon className="h-[1.1em] w-[1.1em] fill-white stroke-[0.1px] hover:cursor-pointer sm:hidden sm:h-[1.3em] sm:w-[1.3em]" />
      <div className="inline-block h-full">
        <div className="relative flex h-full items-center">
          <div className="peer/user absolute h-full w-full"></div>
          <NavUserIcon className="w-[1.2em] items-center fill-white stroke-[0.1px] sm:h-[1.3em] sm:w-[1.3em] lg:h-[1.8em] lg:w-[1.8em]" />
          {/* User menu on hover */}

          <div className="absolute left-[-127px] hidden h-fit w-72 animate-fade-in overflow-hidden bg-transparent hover:inline-block peer-hover/user:inline md:top-[64px] lg:top-[80px] xl:left-[-120px] xl:top-[65px]">
            <NavCaretUpIcon className="relative left-[127px] top-3 h-fit animate-fade-in fill-gray-200 peer-hover/user:inline peer-hover/menu:inline" />
            <div className="flex h-14 items-center justify-center bg-gray-200">
              <span className="w-full border-r-2 border-r-gray-400 text-center text-base text-gray-400 hover:cursor-pointer hover:underline">
                {status === 3 ? 'Logout' : 'Sign In'}
              </span>
              <span className="w-full text-center text-base text-gray-400 hover:cursor-pointer hover:underline ">
                {status === 3 ? '' : 'Join'}
              </span>
            </div>

            <div className="bg-gray-5 grid grid-cols-10 grid-rows-5 bg-gray-50">
              {/*  */}
              <div className="col-start-2 col-end-8 row-start-2 row-end-3 flex flex-row-reverse items-center justify-end hover:cursor-pointer hover:fill-gray-400 hover:text-gray-400">
                <span className="peer text-base xl:text-lg ">My Account</span>
                <NavUserIcon className="mr-2 h-[1.1em] w-[1.1em] stroke-black stroke-[0.1px] lg:h-[1.3em] lg:w-[1.3em]" />
              </div>
              {/*  */}
              <div className="col-start-2 col-end-8 row-start-4 row-end-5 flex flex-row-reverse items-center justify-end hover:cursor-pointer hover:fill-gray-400 hover:text-gray-400">
                <span className="peer text-base xl:text-lg">My orders</span>
                <NavShopIcon className="mr-2 h-[1.1em] w-[1.1em] stroke-black stroke-[0.1px] lg:h-[1.3em] lg:w-[1.3em]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <NavHeartIcon className="h-[1.1em] w-[1.1em] fill-white stroke-[0.1px] hover:cursor-pointer sm:h-[1.2em] sm:w-[1.2em] lg:h-[1.6em] lg:w-[1.6em]" />
      <NavShopIcon className="h-[1.1em] w-[1.1em] fill-white stroke-[0.1px] hover:cursor-pointer sm:h-[1.2em] sm:w-[1.2em] lg:h-[1.6em] lg:w-[1.6em]" />
    </div>
  );
};
