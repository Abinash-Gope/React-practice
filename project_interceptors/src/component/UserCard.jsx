const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-8 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold text-indigo-600 shadow-md">
          {user.name.firstname[0].toUpperCase()}
          {user.name.lastname[0].toUpperCase()}
        </div>

        <h2 className="mt-4 text-xl font-bold capitalize text-white">
          {user.name.firstname} {user.name.lastname}
        </h2>

        <p className="text-sm text-indigo-100">@{user.username}</p>
      </div>

      {/* User details */}
      <div className="space-y-4 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Email
          </p>
          <p className="mt-1 text-sm text-gray-700">{user.email}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Phone
          </p>
          <p className="mt-1 text-sm text-gray-700">{user.phone}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Address
          </p>
          <p className="mt-1 text-sm text-gray-700">
            {user.address.number} {user.address.street}
            <br />
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            User ID: {user.id}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;