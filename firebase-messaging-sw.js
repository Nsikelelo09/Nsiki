importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyB941JrVMoffS9PitRJK2ha-uM2_Sj7nUU",
    authDomain: "ozonewater-a9a7b.firebaseapp.com",
    databaseURL: "https://ozonewater-a9a7b-default-rtdb.firebaseio.com",
    projectId: "ozonewater-a9a7b",
    storageBucket: "ozonewater-a9a7b.firebasestorage.app",
    messagingSenderId: "971028673535",
    appId: "1:971028673535:web:22c0da399ede6b0550adca",
    measurementId: "G-HV7F0LJ0ST"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {

    console.log("🔔 Background notification received:", payload);

    const notificationTitle =
        payload.notification?.title || "Ozone Water";

    const notificationOptions = {
        body:
            payload.notification?.body ||
            "You have an update about your Ozone Water order.",
        icon: "/favicon.ico"
    };

    self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});