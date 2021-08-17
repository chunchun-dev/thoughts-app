import firebase from "../firebase"

const ref = firebase.firestore().collection('thoughts')

const AddThought = (content) => {
    ref
        .doc(content.id)
        .set(content)
        .catch((err) => {
            console.error(err)
        })
}

export default AddThought