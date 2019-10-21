<template>
  <ul>
    <p>hello fs</p>
     {{comments}}
    <li v-for="(comment, index) in comments" :key="index">
      <!-- <v-list-tile :key="index" avatar> -->
        <!-- <img :src="comment.avatar"> -->
        <p>{{comment.createdAt.toDate().toLocaleString()}}</p>

      <!-- <v-divider :key="comment.id"></v-divider> -->
    </li>
  </ul>
</template>

<script>
import {firebaseDb} from '@/main'

export default {
  name: 'ChatBoard',
  data: () => ({
    comments: []
  }),
  firestore () {
    return {
      // firestoreのcommentsコレクションを参照
      comments: firebaseDb.collection('comments').orderBy('createdAt')
    }
  }
}
</script>
