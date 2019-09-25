<template>
    <div class="signup">
        <h2>Sign up</h2>
        <input type="text" plaseholder="Username" v-model="username">
        <input type="password" plaseholder="Password" v-model="password">
        <button @click='signUp'>Register</button>
        <p>Do you have a acount?
            <router-link to="/signin">sign in now!</router-link>
        </p>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          console.log(user)
          alert('Create account: ' + user.user.email)
          this.$router.push('/')
        })
        .catch(err => {
          alert(err.message)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.signup {
    margin-top: 20px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}
input {
    margin: 10px 0;
    padding: 10px;
}
</style>
