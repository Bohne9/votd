import firebase from 'firebase';

var firebaseConfig = {
     apiKey: process.env.NEXT_PUBLIC_apiKey,
     authDomain: process.env.NEXT_PUBLIC_authDomain,
     databaseURL: process.env.NEXT_PUBLIC_databaseURL,
     projectId: process.env.NEXT_PUBLIC_projectId,
     storageBucket: process.env.NEXT_PUBLIC_storageBucket,
     messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
     appId: process.env.NEXT_PUBLIC_appId
};

try {
     firebase.initializeApp(firebaseConfig);
} catch(err){
     if (!/already exists/.test(err.message)) {
          console.error('Firebase initialization error', err.stack)
     }
}

export default firebase;