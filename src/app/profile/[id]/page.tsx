export default function UserProfile({ params }: any) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center">
      <div className="bg-gray-900 border border-gray-700 p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          User Profile
        </h1>
        <p className="text-gray-400 text-lg">
          Viewing profile of user: <span className="text-white font-medium">{params.id}</span>
        </p>
      </div>
    </div>
  );
}
