import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import AvatarSelector from "./AvatarSelector";

export default function EditProfileModal({
  isOpen,
  onClose,
  user,
  onSave,
  avatar,
  setAvatar,
}) {
  const [form, setForm] = useState({
    username: user?.username || "",
    email: user?.email || "",
    profession: "AI Developer",
    bio: "Passionate about Artificial Intelligence and Full Stack Development.",
    location: "India",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onSave(form);

    onClose();
};

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/40" />

      <div className="fixed inset-0 flex items-center justify-center p-4">

        <DialogPanel className="bg-white rounded-2xl w-full max-w-xl p-8">

          <DialogTitle className="text-3xl font-bold mb-6">
            ✏️ Edit Profile
          </DialogTitle>

          <div className="space-y-5">

            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full border rounded-lg p-3"
            />
            <div className="mt-6">

  <h3 className="text-lg font-semibold mb-3">
    Choose Avatar
  </h3>

  <AvatarSelector
    selectedAvatar={avatar}
    onSelect={setAvatar}
  />

</div>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border rounded-lg p-3"
            />

            <input
              name="profession"
              value={form.profession}
              onChange={handleChange}
              placeholder="Profession"
              className="w-full border rounded-lg p-3"
            />

            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full border rounded-lg p-3"
            />

            <textarea
              rows={4}
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="Bio"
              className="w-full border rounded-lg p-3"
            />

          </div>

          <div className="flex justify-end gap-4 mt-8">

            <button
              onClick={onClose}
              className="px-6 py-3 rounded-lg border"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>

          </div>

        </DialogPanel>

      </div>
    </Dialog>
  );
}