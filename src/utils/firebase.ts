import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCXb49PmpcCpPCyXaUxCMJnpJpTs0t0nLI",
    authDomain: "recapeps-platform.firebaseapp.com",
    projectId: "recapeps-platform",
    storageBucket: "recapeps-platform.firebasestorage.app",
    messagingSenderId: "148248325935",
    appId: "1:148248325935:web:27093543499cf6a55b3bda",
    measurementId: "G-RK00EBVHZN"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
auth.settings.appVerificationDisabledForTesting = true;
