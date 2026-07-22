import { Edit, Camera } from "lucide-react";
export default function ProfileHeader({
    user,
    avatar,
    onEdit,
    onAvatar,
}){
    
    
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
         

      {/* Cover Banner */}
      <div className="h-40 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

      <div className="px-8 pb-8">

        {/* Avatar */}
        <div className="-mt-16 flex justify-between items-end">

          <div className="flex items-end gap-6">

            <div className="relative">

              <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
<img
    src={avatar}
    alt="Avatar"
    className="w-full h-full rounded-full object-cover"
/>

              </div>

              <button
    onClick={onAvatar}
  className="absolute bottom-1 right-1 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700"
>
  <Camera size={18} />
</button>

            </div>

            <div>

              <h1 className="text-3xl font-bold">

                {user?.username || "Guest"}

              </h1>

              <p className="text-gray-500 mt-1">

                AI & Full Stack Developer

              </p>

              <p className="text-gray-500">

                {user?.email}

              </p>
              <p className="text-gray-500">
    {user?.profession}
</p>

<p className="text-gray-400">
    📍 {user?.location}
</p>

              <p className="text-sm text-gray-400 mt-2">

                Member Since 2026

              </p>

            </div>

          </div>

         <button
  onClick={onEdit}
  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
>
            <Edit size={18} />

            Edit Profile

          </button>

        </div>

      </div>

    </div>
  );
}