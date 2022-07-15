<script setup lang="ts">
import { getUser } from '@/core/firebase';

type Mode = 'Signup' | 'Login'

const mode = useState<Mode>('mode', () => 'Login');

const authUser = useUser();
const username = useState<string>('username', () => undefined);
const password = useState<string>('password', () => undefined);

function createUser() {
  getUser(username.value, password.value, true).then(({ user }) => {
    authUser.value = user
  })
}

function loginUser() {
  getUser(username.value, password.value).then(({ user }) => {
    authUser.value = user
  })
}
</script>

<template>
  <div class="space-y-2 my-2">
    <p>Email Address</p>
    <input v-model="username" class="w-full border px-3 py-1 text-left" placeholder="name@sample.com" />
    <span class="flex justify-between">
      <p>Password</p>
      <a>Forget password?</a>
    </span>
    <input type="password" class="w-full border px-3 py-1 text-left" v-model="password" placeholder="*******" />
    <div v-if="mode === 'Login'" class="space-y-2">
      <Button :class="`w-full h-8 ${(!password || !username) && 'cursor-not-allowed'}`" @click="loginUser" label="Login"
        :disabled="!password || !username" />
      <span class="flex space-x-2">
        <p>Not a member?</p>
        <Button @click="mode = 'Signup'" label="Signup" />
      </span>
    </div>
    <div v-if="mode === 'Signup'" class="space-y-2">
      <Button :class="`w-full h-8 ${(!password || !username) && 'cursor-not-allowed'}`" @click="createUser"
        label="Sign up" :disabled="!password || !username" />
      <span class="flex space-x-2">
        <p>Already a member?</p>
        <Button @click="mode = 'Login'" label="Login" />
      </span>
    </div>
  </div>
</template>