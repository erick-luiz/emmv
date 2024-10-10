import React, { useEffect, useState } from "react";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Store } from 'react-notifications-component';

const NotificationPopup = () => {
    Store.addNotification({
      title: "Wonderful!",
      message: "teodosii@react-notifications-component",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });

  return <ReactNotifications />;
};


export default NotificationPopup;
