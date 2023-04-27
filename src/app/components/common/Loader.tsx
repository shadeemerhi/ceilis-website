import Spinner from "../design-system/Spinner";

const Loader = () => {
  return (
    <div className="flex justify-center py-10">
      <Spinner size="w-16 h-16" color="text-amber-500" />
    </div>
  );
};

export default Loader;
