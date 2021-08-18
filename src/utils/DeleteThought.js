import firebase from "../firebase"

const ref = firebase.firestore().collection('thoughts')

const DeleteThought = (content) => {
    ref
        .doc(content.id)
        .delete(content)
        .catch((err) => {
            console.error(err)
        })
}

export default DeleteThought