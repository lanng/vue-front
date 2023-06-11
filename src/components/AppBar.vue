<script setup>
import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore()
</script>
<template>
  <v-toolbar flat border>
    <template v-slot:prepend>
      <div class="text-h6">AppLogin</div>
    </template>

    <v-divider
        class="ms-3"
        inset
        vertical
    ></v-divider>

    <v-toolbar-title>{{ $route.name }} Page</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-spacer></v-spacer>

    <v-toolbar-items>

      <v-btn variant="text" @click="$router.push('/')">Home</v-btn>
      <v-divider vertical></v-divider>
      <template v-if="!authStore.user">
        <v-btn variant="text" @click="$router.push('/login')">Login</v-btn>
        <v-divider vertical></v-divider>

        <v-btn variant="text" @click="$router.push('/register')">Registro</v-btn>
        <v-divider vertical></v-divider>
      </template>
      <v-menu v-else>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-account" v-bind="props"></v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title @click="authStore.logoutHandler()">Sair</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>