<script setup>
import {ref} from "vue";
import AppBar from "@/components/AppBar.vue";
import {useAuthStore} from "@/stores/auth";
import { useRoute } from "vue-router";

const route = useRoute();
const authStore = useAuthStore();
const form = ref({
  password: '',
  password_confirmation: '',
  email: route.query.email,
  token: route.params.token,
});

</script>
<template>
  <AppBar/>
  <v-app class="bg-grey-lighten-1">
    <v-container class="ma-auto">
      <v-card class="mx-auto px-6 py-8" max-width="400">
        <form @submit.prevent="authStore.resetPasswordHandler(form)">
          <v-text-field
              type="password"
              v-model="form.password"
              :rules="[required]"
              label="Nova Senha"
              required
          ></v-text-field>

          <v-text-field
              type="password"
              v-model="form.password_confirmation"
              :rules="[required]"
              label="Confirme a senha"
              required
          ></v-text-field>

          <div v-if="authStore.errors.password" class="d-flex">
            <span class="text-sm-body-2 text-red ma-auto mb-2">{{ authStore.errors.password[0] }}</span>
          </div>

          <v-row class="ma-auto mt-2">
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