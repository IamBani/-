<template>
    <div class="firder">
        <ul class="habox" @click="search">
            <li class="iamge"><img src="../assets/2.jpg" alt=""></li>
            <li class="newfir">新的朋友</li>
        </ul>
    </div>
</template>

<script>
export default{
    name:"contacts",
    data(){
        return{

        }
    },
    methods:{
        search(){
            this.$router.push({path:'/search'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .firder{
        display: flex;
        flex-direction: column;
        >.habox{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 10px;
            box-sizing: border-box;
            >.iamge img{
                width: 50px;
            }
            >.newfir{
                margin-left: 10px;
            }
        }
    }

</style>