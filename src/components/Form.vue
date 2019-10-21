<template>
    <div>
        <button @click="showCreateForm">comment</button>
        <button @click="hideCreateForm">hide</button>
        <div v-if="displayFrom" max-width="500px">
            <h2>コメント追加</h2>
            <input v-model="inputComment">
            <button @click="addComment">send</button>
        </div>
    </div>
</template>

<script>
import {firebaseDb} from '@/main'

export default {
  name: 'CreateForm',
  data: () => ({
    // form入力データ
    inputComment: '',
    // バリデーション
    // valid: true,
    displayFrom: false
  }),
  methods: {
    // コメント追加
    addComment () {
      const now = new Date()
      // コメントをFirestoreへ登録
      firebaseDb.collection('comments').add({
        content: this.inputComment,
        avatar: 'https://picsum.photos/50?imagr=' + (Math.floor(Math.random() * 400) + 1),
        createdAt: now
      })
      this.hideCreateForm()
    },
    // Formの初期化
    clear () {
      this.$refs.form.reset()
    },
    // Forの表示
    showCreateForm () {
      this.displayFrom = true
    },
    // Formの非表示
    hideCreateForm () {
      this.clear()
      this.displayFrom = false
    }
  }
}
</script>

<style>

</style>
