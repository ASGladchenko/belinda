export const Month = ({ month }: { month: string }) => {
  return (
    <span className="flex uppercase items-center hover:bg-green-400 hover:text-white dark:hover:text-black justify-center border border-green-400 w-[15%] h-[20px] text-[12px] cursor-default transition duration-100">
      {month}
    </span>
  );
};
