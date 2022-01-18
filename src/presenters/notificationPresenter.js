import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {clear} from "../reducers/notification";

import Notification from "../components/notification/notification";

function NotificationPresenter() {
    const notification = useSelector(state => state.notification)
    const dispatch = useDispatch()

    const close = async () => {
        dispatch(clear())
    }

    return (
        <Notification onClose={close} notification={notification}/>
    )
}

export default NotificationPresenter