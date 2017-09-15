import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import { User } from '../../models/user';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService{
    user: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
    }

    createUser(user: User) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }
    signIn(user: User) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    }
    signOut() {
        return this.afAuth.auth.signOut();
    }

    resetPassword(email: string) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }
}