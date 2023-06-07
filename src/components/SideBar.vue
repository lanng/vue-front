<template>
    <v-navigation-drawer expand-on-hover rail>
        <v-list density="compact" nav>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">Bem vindo - User</v-list-item-title>
                    <v-list-item-subtitle>Função</v-list-item-subtitle>
                </v-list-item-content>

            </v-list-item>
            <v-divider></v-divider>
            <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
            <router-link to="/" style="text-decoration: none; color: inherit;"><v-list-item prepend-icon="mdi-forum"
                    title="About" value="about"></v-list-item></router-link>

        </v-list>
    </v-navigation-drawer>
</template>