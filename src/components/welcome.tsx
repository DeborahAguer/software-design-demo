export default function Welcome() {
  return (
    <main>
      <div className="flex flex-col sm:flex-row justify-between p-4 text-white font-medium">
        <button className="mb-4 sm:mb-0 sm:mr-4 px-4 py-2 bg-blue-500 rounded-full">
          View Menu
        </button>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
          <button className="px-4 py-2 bg-green-500 rounded-full">
            Sign In
          </button>
          <button className="px-4 py-2 bg-red-500 rounded-full">
            Sign Up
          </button>
          <button className="px-4 py-2 bg-gray-500 rounded-full">
            Continue as Guest
          </button>
        </div>
      </div>
      <div className="text-center my-8">
        <h1 className="text-4xl font-semibold mb-4">Welcome to Our Club!</h1>
        <p className="text-lg text-gray-700">
          Welcome to our club app where you can order delicious meals.
        </p>
      </div>
      {/* Menu component can be added here */}
    </main>
  );
}
