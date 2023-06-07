<script setup>
import {ref} from "vue";
import AppBar from "@/components/AppBar.vue";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore();
const form = ref({
  email: '',
  password: '',
});

</script>
<template>
  <AppBar/>
  <v-app class="bg-grey-lighten-1">
    <v-container class="ma-auto">
      <v-card class="mx-auto px-6 py-8" max-width="400">
        <form @submit.prevent="authStore.loginHandler(form)">
          <v-text-field
              v-model="form.email"
              type="email"
              label="E-mail"
              required
          ></v-text-field>

          <v-text-field
              type="password"
              v-model="form.password"
              label="Senha"
              required
          ></v-text-field>

          <v-row class="mt-3" align="center" justify="center">
            <v-btn-toggle rounded>
              <v-btn type="submit">Entrar</v-btn>
              <v-btn>Limpar</v-btn>
            </v-btn-toggle>
          </v-row>

        </form>
      </v-card>
    </v-container>
  </v-app>

</template>