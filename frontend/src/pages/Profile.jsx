import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileStats from "../components/profile/ProfileStats";
import RecentActivity from "../components/profile/RecentActivity";
import Achievements from "../components/profile/Achievements";
import AccountSettings from "../components/profile/AccountSettings";
import { useState } from "react";
import EditProfileModal from "../components/profile/EditProfileModal";
import AvatarModal from "../components/profile/AvatarModal";



export default function Profile() {
    
    const { user } = useAuth();
    const [avatar, setAvatar] = useState(
  "https://api.dicebear.com/9.x/adventurer/svg?seed=Developer"
);

const [profile, setProfile] = useState({
  username: user?.username || "",
  email: user?.email || "",
  profession: "AI Developer",
  bio: "Passionate about AI and Full Stack Development.",
  location: "India",
});
    const navigate = useNavigate();
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isAvatarOpen, setIsAvatarOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-slate-100">

    <div className="max-w-6xl mx-auto p-8">

        <ProfileHeader
    user={profile}
    avatar={avatar}
    onEdit={() => setIsEditOpen(true)}
    onAvatar={() => setIsAvatarOpen(true)}
/>
        <ProfileStats />
        <RecentActivity />
        <Achievements />
        <AccountSettings />
<EditProfileModal
    isOpen={isEditOpen}
    onClose={() => setIsEditOpen(false)}
    user={profile}
    onSave={setProfile}
    avatar={avatar}
    setAvatar={setAvatar}
/>
<AvatarModal
    isOpen={isAvatarOpen}
    onClose={() => setIsAvatarOpen(false)}
    avatar={avatar}
    setAvatar={setAvatar}
/>
    </div>

</div>
    );
}