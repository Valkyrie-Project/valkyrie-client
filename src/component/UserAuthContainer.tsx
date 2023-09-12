type UserAuthContainerProps = {
  children: React.ReactNode;
};

const UserAuthContainer = ({ children }: UserAuthContainerProps) => {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <div className="flex h-fit flex-col items-center sm:px-0">
        <div className="my-8 flex h-full w-5/6 rounded-lg bg-zinc-900 sm:my-10 md:w-3/5 xl:w-2/6">{children}</div>
      </div>
    </div>
  );
};

export default UserAuthContainer;
