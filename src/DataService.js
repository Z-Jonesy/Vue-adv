import Axios from 'axios';

export const BACKEND_URL = 'http://localhost:3000';
export const FIREBASE_URL = 'https://fizu-ace0d.firebaseio.com';
const apiKey = "AIzaSyA7eft0Dfqn3yemE-L4z2OvND4Fv6kVb8I";
const signUpUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${apiKey}`;
const signInUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`;


export default {
    // sign in
    SignIn({email, password}) {
        return Axios.post(signInUrl, {
                email: email,
                password: password,
                returnSecureToken: true
            })
            .then(r => r.data)
            .then(r => {
                console.log("lognapló:", r);
                return r;
            })
            .catch(console.warn);
    },

    // posts
    GetPosts() {
        return Axios.get(FIREBASE_URL + '/blogposts/' + '.json').then(result => {
            return result.data;
        });
    },

    GetPost(postID) {
        return Axios.get(FIREBASE_URL + '/blogposts/' + postID + '.json').then(result => {
            return result.data;
        });
    },

    // contact message

    PostContactMessage(data) {
        return Axios.post(FIREBASE_URL + '/contactMessages.json', data)
            .then(() => {
                return true;
            })
            .catch(error => {
                console.warn(error);
                return false;
            });
    },

    // survey

    GetSurveyData() {
        return Axios.get(FIREBASE_URL + '/surveyResponses.json').then(result => {
            return result.data;
        });
    },

    PostSurveyResponse(data) {
        return Axios.post(FIREBASE_URL + '/surveyResponses.json', data)
            .then(() => {
                return true;
            })
            .catch(error => {
                console.warn(error);
                return false;
            });
    }
};