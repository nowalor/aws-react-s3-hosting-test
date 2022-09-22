import { useState } from "react";

function useNotifications() {
  const [notifications, setNotifications] = useState(['initial']);

  const createNotification = (text) => {
    setNotifications(() => [...notifications, text])
  };

  return { notifications, createNotification };
}

export default useNotifications;
