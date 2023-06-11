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
              :rules="[required]"
              type="email"
              label="E-mail"
              required
          ></v-text-field>

          <v-text-field
              type="password"
              v-model="form.password"
              :rules="[required]"
              label="Senha"
              required
          ></v-text-field>

          <v-row class="ma-auto">
            <v-btn
                :loading="loading"
                block
                color="success"
                size="large"
                type="submit"
                variant="elevated"
            >
              Entrar
            </v-btn>
          </v-row>

          <div class="flex-row text-center mt-3">
            <v-banner-text class="ma-1">
              <router-link to="/forgot-password" class="text-decoration-none text-black">
                Esqueceu a senha?
              </router-link>
            </v-banner-text>
            <v-banner-text class="ma-1">
              Não tem cadastro ainda? <router-link to="/register" class="text-decoration-none text-blue-accent-4">Crie uma conta</router-link>
            </v-banner-text>
          </div>

        </form>
      </v-card>
    </v-container>
  </v-app>

</template>
<script>
export default {
  data: () => ({
    loading: false,
  }),

  methods: {
    onSubmit() {
      if (!this.form) return

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    required(v) {
      return !!v || 'Campo Obrigatório!'
    },
  },
}
</script>