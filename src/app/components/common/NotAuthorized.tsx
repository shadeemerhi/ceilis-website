const NotAuthorized = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center p-6">
      <span className="text-2xl">Not authorized</span>
      <span className="text-lg">
        Please contact Ceili's Administration to be granted access
      </span>
    </div>
  );
};

export default NotAuthorized;
