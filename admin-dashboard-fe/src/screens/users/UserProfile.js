import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { Button, Card, Descriptions, Space } from "antd";
import { useSelector } from "react-redux";

export default function UserProfile() {
  const { user, signOut } = useContext(AuthContext);

  const localUser = useSelector((state) => state.user.localUser);

  const items = [
    {
      key: "1",
      label: "Email",
      children: localUser.userEmail,
    },
    {
      key: "2",
      label: "Full Name",
      children: localUser.userFullName,
    },
    {
      key: "3",
      label: "User Type",
      children: localUser.userType,
    },
    {
      key: "4",
      label: "Email verified",
      children: user.email_verified,
    },
    {
      key: "5",
      label: "User Status",
      children: localUser.userActive ? "Active" : "Inactive",
    },
  ];

  return (
    <Card title="User Profile">
      <div>
        {user && (
          <div>
            <Descriptions items={items} layout="vertical" />
            <Space>
              <Button danger onClick={signOut}>
                Sign Out
              </Button>
              <Button disabled onClick={signOut}>
                Edit Profile
              </Button>
            </Space>
          </div>
        )}
      </div>
    </Card>
  );
}
