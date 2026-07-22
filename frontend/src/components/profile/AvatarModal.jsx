import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import AvatarSelector from "./AvatarSelector";

export default function AvatarModal({
    isOpen,
    onClose,
    avatar,
    setAvatar,
}) {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            className="relative z-50"
        >
            <div className="fixed inset-0 bg-black/40" />

            <div className="fixed inset-0 flex items-center justify-center p-4">

                <DialogPanel className="bg-white rounded-2xl p-8 max-w-2xl w-full">

                    <DialogTitle className="text-2xl font-bold mb-6">
                        Choose Your Avatar
                    </DialogTitle>

                    <AvatarSelector
                        selectedAvatar={avatar}
                        onSelect={setAvatar}
                    />

                    <div className="flex justify-end mt-8">

                        <button
                            onClick={onClose}
                            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
                        >
                            Done
                        </button>

                    </div>

                </DialogPanel>

            </div>

        </Dialog>
    );
}