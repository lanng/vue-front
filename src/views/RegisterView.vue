<script setup>
import {ref} from "vue";
import AppBar from "@/components/AppBar.vue";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore();
const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
});


</script>
<template>
  <AppBar/>
  <v-app class="bg-grey-lighten-1">
    <v-container class="ma-auto">
      <v-card class="mx-auto px-6 py-8" max-width="400">
        <form @submit.prevent="authStore.registerHandler(form)">
          <v-text-field
              v-model="form.name"
              :rules="[required]"
              label="Nome"
              required
          ></v-text-field>

          <div v-if="authStore.errors.name" class="d-flex">
            <span class="text-sm-body-2 text-red ma-auto mb-2">{{ authStore.errors.name[0] }}</span>
          </div>

          <v-text-field
              v-model="form.email"
              :rules="[required]"
              type="email"
              label="E-mail"
              required
          ></v-text-field>

          <div v-if="authStore.errors.email" class="d-flex">
            <span class="text-sm-body-2 text-red ma-auto mb-2">{{ authStore.errors.email[0] }}</span>
          </div>

          <v-text-field
              type="password"
              v-model="form.password"
              :rules="[required]"
              label="Senha"
              required
          ></v-text-field>
          <div v-if="authStore.errors.password" class="d-flex">
            <span class="text-sm-body-2 text-red ma-auto mb-2">{{ authStore.errors.password[0] }}</span>
          </div>
          <v-text-field
              type="password"
              v-model="form.password_confirmation"
              :rules="[required]"
              label="Confirme a senha"
              required
          ></v-text-field>
          <div v-if="authStore.errors.password_confirmation" class="d-flex">
            <span class="text-sm-body-2 text-red ma-auto mb-2">{{ authStore.errors.password_confirmation[0] }}</span>
          </div>

          <v-row class="ma-auto">
            <v-btn
                :loading="loading"
                block
                color="success"
                size="large"
                type="submit"
                variant="elevated"
            >
              Criar nova conta
            </v-btn>
          </v-row>
          <div class="text-center mt-4">
            Já possui cadastro?
            <router-link to="/login" class="text-decoration-none text-blue-accent-4">Realize o login aqui</router-link>
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