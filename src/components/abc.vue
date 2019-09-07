<template>
    <ul>
        <li v-for="(item,index) in option" :key="index">
            <div @click="item.method">{{item.name}}</div>
            <!-- <div @click="goBack"></div> -->
        </li>
        <div @click="changeboo">取消</div>
    </ul>
</template>

<script>
export default {
    props:["option"],
    name:"abc",
    data(){
        return{
            boo1:true
        }
    },
    methods:{
        changeboo(){
            this.$emit("chenge",!this.boo1);
        }
    }
}
</script>

<style scoped>
  ul{
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      list-style: none;
      z-index: 100;
  }
  li{
      list-style: none;
  }
    div{
        height: 50px;
        width: 100%;
        background-color: #f40;
        color: #fff;
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>