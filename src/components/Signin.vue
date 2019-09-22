<template>
    <div class="signin">
        <h2>Sign in</h2>
        <input type="text" plaseholder="Username" v-model="username">
        <input type="password" plaseholder="Password" v-model="password">
        <button>Signin</button>
        <p>You don't have an acount.
            <router-link to="/signup">create account now!</router-link>
        </p>
    </div>
</template>

<script>
export default {
  name: 'Signin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {}
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
.signin {
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
