import avatars from "../../data/avatars";
import { CheckCircle } from "lucide-react";
export default function AvatarSelector({
  selectedAvatar,
  onSelect,
}) {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">

      {avatars.map((avatar) => (

        <button
          key={avatar.id}
          onClick={() => onSelect(avatar.url)}
          className={`relative rounded-2xl p-3 border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
  selectedAvatar === avatar.url
    ? "border-blue-600 shadow-lg bg-blue-50"
    : "border-gray-200 bg-white"
}`}
        >

          <img
            src={avatar.url}
            alt={avatar.name}
            className="w-20 h-20 rounded-full mx-auto border object-cover"
          />
          {selectedAvatar === avatar.url && (

  <div className="absolute top-2 right-2 bg-white rounded-full">
    <CheckCircle
      size={22}
      className="text-blue-600"
    />
  </div>
)}

          <p className="text-sm font-medium text-gray-700 mt-2 text-center">
            {avatar.name}
          </p>

        </button>

      ))}

    </div>
  );
}