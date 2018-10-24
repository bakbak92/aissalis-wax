<template>
    <v-container>
        <h2>Gere ta boutique</h2>
         <v-data-table
            :headers="headers"
            :items="products"
            hide-actions
            class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td class="titre">
                    <span v-if="!props.item.editMode">{{ props.item.title }}</span>
                    <input type="text" v-else v-model="props.item.title"/>
                </td>
                <td class="">
                    <span v-if="!props.item.editMode">{{ props.item.description }}</span>
                    <input type="text" v-else v-model="props.item.description"/>
                </td>
                <td class="">
                    <span v-if="!props.item.editMode">{{ props.item.prix }}</span>
                    <input type="text" v-else v-model="props.item.prix"/>
                </td>
                <td class="">
                    <img :src="props.item.img" height="20px" width="20px"/>
                </td>
                <td class="">
                    <span v-if="!props.item.editMode">{{ props.item.categories }}</span>
                    <input type="text" v-else v-model="props.item.categories"/>
                    <v-icon class="icon-edit" @click="props.item.editMode = !props.item.editMode">edit</v-icon>
                    <v-icon class="icon-delete">delete</v-icon>
                </td>
            </template>
        </v-data-table>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-text>
                <h2>Ajoute ton produit</h2>
                <v-text-field
                v-model="title"
                label="Titre du produit"
                required
                ></v-text-field>
                <v-text-field
                v-model="description"
                label="Description du produit"
                required
                ></v-text-field>
                <v-select
                v-model="select"
                :items="categories"
                label="Selectionner la categorie"
                required
                ></v-select>
                <v-text-field
                v-model="prix"
                label="Prix du produit"
                >

                </v-text-field>
                <div class="field">
                    <label for="" class="addImage">Ajouter une image</label>
                    <input type="file" accept="image/*"  @change="handleFileUploadChange">
                </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                @click="addProduct"
                >
                submit
            </v-btn>
              <!--<v-btn flat color="primary" @click.native="dialog = false">Submit</v-btn>-->
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-btn
            color="pink"
            dark
            small
            fixed
            bottom
            right
            fab
            @click="dialog = !dialog"
        >
            <v-icon>add</v-icon>
        </v-btn>
    </v-container>
</template>
<script>
import {db, storageService, storageRef, authi} from '@/firebase/init'

export default {
    data(){
        return {
            title: null,
            description: null,
            prix: null,
            img: null,
            categories: ['Vetement', 'Object'],
            select: null,
            imgName: null,
            uploadImg: null,
            formAdd: false,
            dialog: false,
            headers: [
                {
                    text: 'Titre',
                    align: 'left',
                    sortable: false,
                    value: 'title'
                },
                { text: 'Description', value: 'description' },
                { text: 'Prix', value: 'prix' },
                { text: 'Image', value: 'img' },
                { text: 'Categories', value: 'categories' },
            ],
        products: []
        }
    },
    created(){
        db.collection('products').get()
        .then(snapchot => {
            snapchot.forEach(doc => {
                let products = doc.data()
                products.id = doc.id
                products.editMode = false
                this.products.push(products)
                console.log(this.products)
            });
        })
    },
    methods: {
        addProduct(){
            storageRef.child(`images/${this.imgName}`).put(this.uploadImg).then(() => {
                let product = {
                    title: this.title,
                    description: this.description,
                    prix: this.prix,
                    categories: this.select
                }
                 storageService.ref(`images/${this.imgName}`).getDownloadURL().then(function(url) {
                    // add method qui ajoute un doc avec un id automatique
                    db.collection('products').add({
                        title: product.title,
                        description: product.description,
                        prix: product.prix,
                        img: url,
                        categories: product.categories
                    })
                    .then(() => {
                        this.$router.push({name: 'Product'})
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                })
            })
        },
        handleFileUploadChange(e){
            // recup l'image charger
            let selectedFile = e.target.files[0]
            // recup nom de l'image
            this.imgName = selectedFile.name
            // stocker l'image
            this.uploadImg = selectedFile
            // pour afficher l'image upload
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.img = fileReader.result
            })
            fileReader.readAsDataURL(selectedFile) // fin
        },
    }
}
</script>
<style lang="scss">
.addImage{
    display: block;
    color: #717070;
    margin-bottom: 0.5rem;
    font-size: 16px;
    font-weight: 300;
}
.v-datatable{
    input{
        border: 1px solid grey;
        padding: 0.3rem;
    }
    tbody{
        td{
            position: relative;
            .icon-delete{
                position: absolute;
                right: 5px;
            }
            .icon-edit{
                position: absolute;
                right: 2.5rem;
            }
        }
        .titre{/*
            span{
                padding-left: 0.5rem;
            }
            .icon-edit{
                position: absolute;
                left: 5px;
            }*/
        }
    }
}
</style>
