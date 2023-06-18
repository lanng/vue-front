<script setup>
import {ref} from "vue";
import AppBar from "@/components/AppBar.vue";
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore();
const email = ref();

</script>
<template>
  <AppBar/>
  <v-app class="bg-grey-lighten-1">
    <v-container class="ma-auto">
      <v-card class="mx-auto px-6 py-8" max-width="400">
        <form @submit.prevent="authStore.forgotPasswordHandler(email)">
          <v-text-field
              v-model="email"
              :rules="[required]"
              type="email"
              label="E-mail"
              required
          ></v-text-field>
          <div v-if="authStore.errors.email" class="d-flex">
            <span class="text-sm-body-2 text-red ma-auto mb-2">{{ authStore.errors.email[0] }}</span>
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
              Solicitar nova senha
            </v-btn>
          </v-row>
        </form>
      </v-card>
      <div v-if="authStore.status" class="text-center ma-2">
        <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
        >
          {{ authStore.status }}

          <template v-slot:actions>
            <v-btn
                color="green"
                variant="text"
                @click="snackbar = false"
            >
              Fechar
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </v-container>
  </v-app>

</template>
<script>
export default {
  data: () => ({
    loading: false,
    snackbar: true,
    timeout: 2000,
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