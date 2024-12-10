import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="p-8 bg-white shadow-xl rounded-3xl border border-gray-300 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Create Your Account
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Get started by sign up. It's quick and easy.
        </p>
        <SignUp />
      </div>
    </div>
  );
}
