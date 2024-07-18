export const IndividualBlogSkeleton = () => {
  return (
    <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-24 mt-1">
        <div className="lg:col-span-7">
          <div className="h-12 bg-gray-300 w-3/4 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 w-1/4 rounded mb-6"></div>
          <div className="space-y-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 w-full rounded"></div>
            ))}
            <div className="h-4 bg-gray-200 w-3/4 rounded"></div>
          </div>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 mt-8 lg:mt-0">
          <div className="h-6 bg-gray-200 w-2/3 rounded mb-6"></div>
          <div className="flex items-start mb-6">
            <div className="h-16 w-16 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
            <div className="flex-1 space-y-2">
              <div className="h-6 bg-gray-300 w-full rounded"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 w-full rounded"></div>
            <div className="h-4 bg-gray-200 w-full rounded"></div>
            <div className="h-4 bg-gray-200 w-3/4 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
