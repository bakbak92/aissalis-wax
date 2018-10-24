<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="nav-mobile"></v-toolbar-side-icon>
      <v-toolbar-title router :to="{name: 'Products'}">AissaLis wax</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat router :to="{name: 'Products'}">
            Produits
      </v-btn>
      <v-btn flat router :to="{name: 'FaisTonWax'}">
        Se connecter
      </v-btn>
      <v-btn flat router :to="{name: 'Panier'}">
        <v-badge left>
          <span slot="badge">6</span>
          <v-icon
            large
            color="grey lighten-1"
          >
            shopping_cart
          </v-icon>
        </v-badge>
      </v-btn>
      <v-btn flat router :to="{name: 'Admin'}">
        Admin
      </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  name: 'App'
}
</script>
<style lang="scss">
.nav-mobile{
  display: none;
}
.v-toolbar__items{
  a{
    text-decoration: none;
    color: #202020;
  }
}
</style>
