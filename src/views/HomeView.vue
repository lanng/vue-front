<script setup>
import {onMounted} from "vue";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();
});
</script>
<template>
  <v-app>
    <AppBar />
    <v-container align="center">
      <div v-if="authStore.user">
        <h1>Bem vindo - {{ authStore.user.name }}</h1>
        <p>{{ authStore.user.email }}</p>
      </div>
      <div v-else>
        <p>Realize o login para continuar!</p>
        <span class="text-red text-sm-body-1">{{ authStore.errors.message }}</span>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';

export default {
  name: 'HomeView',
  components: {
    AppBar
  }
}
</script>
