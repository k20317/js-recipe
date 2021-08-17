<template>
  <div>
    <h1>Firestoreを使う</h1>
    <div>
      <input type="text" v-model="inputValue" />

      <button v-on:click="postMessage">メッセージをFirestoreに保存する</button>

      <div v-for="(message, index) in messages" v-bind:key="index">
        {{ message.text }}
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  data() {
    return {
      messages: [],
      inputValue: "",
    }
  },
  methods: {
    postMessage() {
      const data = { text: this.inputValue }
      firebase
        .firestore()
        .collection("messages")
        .add(data)
        .then(() => {
          this.messages.push(data)
        })
    },
    postTest() {
      const data = { text: "ハロー" }
      firebase
        .firestore()
        .collection("test")
        .doc("0")
        .set({})
        .then(() => {
          console.log("Document successfully written!")
        })
        .catch((error) => {
          console.error("Error writing document: ", error)
        })
    },
  },
  created() {
    firebase
      .firestore()
      .collection("messages")
      .get()
      .then((snapshot) => {
        for (let i = 0; i < snapshot.docs.length; i++) {
          this.messages.push(snapshot.docs[i].data())
        }
      })
  },
}
</script>
