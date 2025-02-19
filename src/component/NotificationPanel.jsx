
const NotificationPanel = () => {
    const notifications = [
      {
        id: 1,
        type: "profileView",
        user: "Hamish Marsh",
        message: "viewed your profile",
        avatar: require("../image/Notificationlogo1.png"), // Replace with actual avatar URL
        isNew: true,
      },
      {
        id: 2,
        type: "jobPosting",
        company: "Grameenphone",
        message: "is hiring Product Designer",
        logo: require("../image/Notificationlogo2.png"), // Replace with actual logo URL
      },
      {
        id: 3,
        type: "profileView",
        user: "Hamish Marsh",
        message: "viewed your profile",
        avatar: require("../image/Notificationlogo2.png"), // Replace with actual avatar URL
        isNew: true,
      },
      {
        id: 4,
        type: "profileView",
        user: "Hamish Marsh",
        message: "viewed your profile",
        avatar: require("../image/Notificationlogo1.png")
      },
      {
        id: 5,
        type: "jobPosting",
        company: "Grameenphone",
        message: "is hiring Product Designer",
        logo: require("../image/Notificationlogo1.png"), // Replace with actual logo URL
      },
    ];
  
    return (
      <div className="w-[100%] mx-auto p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold text-black mb-4">Notifications</h2>
        <div className="space-y-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-center p-3 rounded-lg ${
                notification.type === "profileView" ? "bg-purple-50" : ""
              }`}
            >
              {notification.type === "profileView" ? (
                <img
                  src={notification.avatar}
                  alt={notification.user}
                  className="w-12 h-12 rounded-full"
                />
              ) : (
                <img
                  src={notification.logo}
                  alt={notification.company}
                  className="w-12 h-12"
                />
              )}
              <div className="ml-4 flex-1">
                {notification.type === "profileView" ? (
                  <p className="text-sm text-gray-900">
                    <span className="font-semibold">{notification.user}</span>{" "}
                    {notification.message}
                  </p>
                ) : (
                  <p className="text-sm text-gray-900">
                    <span className="font-semibold">{notification.company}</span>{" "}
                    {notification.message}
                  </p>
                )}
              </div>
              {notification.isNew && (
                <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default NotificationPanel;
  