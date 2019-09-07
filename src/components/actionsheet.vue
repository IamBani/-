<template>
    <div>
        <div @click="boo=true">点击</div>
        <abc :option="option" v-show="boo" @chenge="chenge1"></abc>
    </div>
</template>

<script>
import abc from "./abc";
export default {
    name:"actionsheet",
    data(){
        return{
            option:[],
            boo:false
        }
    },
    components:{
        abc
    },
    mounted(){
         this.option = [{
        name: '拍照',
        method: this.takePhoto
      }, {
        name: '从相册中选择',
        method: this.openAlbum
      },{
          name:'选择',
          method:this.goBack
      }];
    },
    methods:{
         takePhoto() {
        console.log('taking photo');
      },

      openAlbum() {
        console.log('opening album');
      },

      goBack() {
        // history.go(-1);
        console.log(123);
      },
      chenge1(v){
          this.boo=v;
      }
    }
}
</script>

<style scoped>
    div{
        color: #FFF;
        background-color: #409EFF;
        border-color: #409EFF;
        display: inline-block;

    }
</style>