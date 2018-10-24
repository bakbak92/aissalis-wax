<template>
    <v-container>
         <v-layout row wrap>
                <v-flex xs12 sm4 v-for="product in products" :key="product.id">
                    <v-card>
                        <v-img
                        :src="product.img"
                        aspect-ratio="2.75"
                        ></v-img>

                        <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{product.title}}</h3>
                            <div>{{product.description}} <br>{{product.prix}}</div>
                        </div>
                        </v-card-title>

                        <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import {db, storageService, storageRef, authi} from '@/firebase/init'

export default {
    data(){
        return {
            products: []
        }
    },
    created(){
        db.collection('products').get()
        .then(snapchot => {
            snapchot.forEach(doc => {
                let products = doc.data()
                products.id = doc.id
                this.products.push(products)
            });
        })
    }
}
</script>
<style lang="scss">

</style>
