import { Header } from "src/widgets/header";

export const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Header title="Header" className="text-red-500 flex items-center" />
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Main Page
          </h2>
        </div>
      </div>
    </div>
  );
};
