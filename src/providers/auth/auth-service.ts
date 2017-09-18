import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import { User } from '../../models/user';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService{
    user: Observable<firebase.User>;

    constructor(
        private angularFireAuth: AngularFireAuth,
        /* private googlePlus: GooglePlus,
        private facebook: Facebook,
        private twitter: TwitterConnect */) { }

    createUser(user: User) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }

    signIn(user: User) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    }

    /* signInWithGoogle() {
        return this.googlePlus.login({
            'webClientId': '638933829742-i0av628updkc723cb3gnirhh3b0829up.apps.googleusercontent.com',
            'offline': true
        })
            .then(res => {
                return this.angularFireAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
                    .then((user: firebase.User) => {
                        // atualizando o profile do usuario
                        return user.updateProfile({ displayName: res.displayName, photoURL: res.imageUrl });
                    });
            });
    }

    signInWithFacebook() {
        return this.facebook.login(['public_profile', 'email'])
            .then((res: FacebookLoginResponse) => {
                //https://developers.facebook.com/docs/graph-api/reference/user
                //Ao logar com o facebook o profile do usuario é automaticamente atualizado.
                return this.angularFireAuth.auth.signInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken));
            });
    }

    signInWithTwitter() {
        return this.twitter.login()
            .then((res) => {
                return this.angularFireAuth.auth.signInWithCredential(firebase.auth.TwitterAuthProvider.credential(res.token, res.secret));
            });
    } */

    /* signOut(): firebase.Promise<any> {
        if (this.angularFireAuth.auth.currentUser.providerData.length) {
            for (var i = 0; i < this.angularFireAuth.auth.currentUser.providerData.length; i++) {
                var provider = this.angularFireAuth.auth.currentUser.providerData[i];

                if (provider.providerId == firebase.auth.GoogleAuthProvider.PROVIDER_ID) { // Se for o gooogle
                    // o disconnect limpa o oAuth token e tambem esquece qual conta foi selecionada para o login
                    return this.googlePlus.disconnect()
                        .then(() => {
                            return this.signOutFirebase();
                        });
                } else if (provider.providerId == firebase.auth.FacebookAuthProvider.PROVIDER_ID) { // Se for facebook
                    return this.facebook.logout()
                        .then(() => {
                            return this.signOutFirebase();
                        })
                } else if (provider.providerId == firebase.auth.TwitterAuthProvider.PROVIDER_ID) { // Se for twitter
                    return this.twitter.logout()
                        .then(() => {
                            return this.signOutFirebase();
                        })
                }
            }
        }

        return this.signOutFirebase();
    } */

    signOutFirebase() {
        return this.angularFireAuth.auth.signOut();
    }

    resetPassword(email: string) {
        return this.angularFireAuth.auth.sendPasswordResetEmail(email);
    }
}