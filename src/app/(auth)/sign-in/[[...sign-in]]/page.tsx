import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="p-8 bg-white shadow-lg rounded-2xl border border-gray-300 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Please sign in to continue.
        </p>
        <SignIn />
      </div>
    </div>
  );
}
