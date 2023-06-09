const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      {children}
    </div>
  );
};

export { MainWrapper };
