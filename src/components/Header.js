import useNotifications from "../hooks/useNotification";
import Notification from "./Notification";
import { useEffect } from 'react'

function Header() {
    const { notifications } = useNotifications()

    useEffect(() => {
        console.log('notifications', notifications)
    }, [notifications]);


    return (
        <nav className="navbar navbar-light bg-light justify-content-between p-2">
            <span className="navbar-brand">Good Green Groceries</span>
            <span className="navbar-text">We are good - and we are green!</span>
            {notifications.map(notification => <Notification>
                {notification.text}
            </Notification>)}
        </nav>
    );
}

export default Header;
