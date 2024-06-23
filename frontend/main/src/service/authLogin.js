import axiosClient from '@/config';
import { GenaralService } from './general';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyD7_i7PUSKvA1twQrxr5VwDF_qJ-TxWD9U',
    authDomain: 'tephim-81082.firebaseapp.com',
    databaseURL: 'https://tephim-81082-default-rtdb.firebaseio.com',
    id: 'tephim-81082',
    storageBucket: 'tephim-81082.appspot.com',
    messagingSenderId: '419364742297',
    appId: '1:419364742297:web:071f44f8f9e1cb70d50408',
    measurementId: 'G-1M9167ESB6',
};

const app = initializeApp(FIREBASE_CONFIG);
const auth = getAuth(app);

export class AuthLoginService extends GenaralService {
    constructor() {
        super('auth/login');
    }
    async loginWithGoogleFromBackEnd(data) {
        return axiosClient.post(`${this.url}/google`, data);
    }
}

export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const { user } = result;
    return { token, user };
};
