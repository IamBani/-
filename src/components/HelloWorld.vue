<template>
  <div class="hello">
    <el-container style="height:100%">
      <el-header><div class="title">数据</div></el-header>
      <el-main>
         <div class="triangle_left"></div>
         <ul class="text" v-for="(item,index) in list" :key="index">
           <div v-if="item.id==num" class="box">
              <li :class="[item.id==num?'active':'active1']">{{item.text}}</li>
              <img :src="item.url" alt="">
           </div>
           <div class="box1" v-else>
              <img :src="item.url" alt="">
              <li :class="[item.id==num?'active':'active1']">{{item.text}}</li>
           </div>
         </ul>
     </el-main>
      <el-footer>
         <el-row :gutter="20">
            <el-col :span="18">
              <el-input  @keydown.enter.native="mag"
                  placeholder="请输入内容"
                  v-model="textarea"
                  clearable>
            </el-input>
          </el-col>
         <el-col :span="4"><el-button type="success" @click="mag">发送</el-button></el-col>
        </el-row>
    </el-footer>
    </el-container>
    
       
  </div>
</template>

<script>
import tu from "../assets/1.jpg";
import tu1 from "../assets/2.jpg";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '点击',
      boo:true,
      num:"",
      num1:5,
      textarea:"",
      list:[{
        id:1,
        text:"你好吗",
        url:tu
      },{
         id:2,
        text:"我很好",
        url:tu1
      }
      ]
    }
  },
  created(){
    this.num=parseInt(Math.random()*100);
    // console.log(this.num);
  },
  methods:{
      mag(){
        if(this.textarea==""){
          this.$message({
          showClose: true,
          message: '不能为空',
          type: 'warning'
        });
        return;
        }
        // this.list.push({
        //   id:2,
        //   text:this.textarea,
        //   url:tu
        // })
        // console.log(this.num);
        this.$socket.emit('message',{num:this.num,text:this.textarea});
        // this.$socket.emit("private_message",this.textarea);
        this.textarea="";
      }
  },
  mounted(){
    this.sockets.subscribe('message', (data) => {
        // console.log(data);
         this.list.push({
          id:data.num,
          text:data.text,
          url:tu
        })
      })
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height: 100%;
}
.title{
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f40;
  color: #fff;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active,.active1{
    display: inline-block;
    position: relative;
    padding: 0 10px;
    max-width: calc(100% - 75px);
    min-height: 35px;
    line-height: 2.1;
    font-size: 15px;
    padding: 6px 10px;
    text-align: left;
    word-break: break-all;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    box-shadow: 0px 1px 7px -5px #000;
    background-color: #67C23A;
}
.active1{
  background-color: #fff;
}
.active::before{
     width: 0px;
     height: 0px;
     border: 6px solid transparent;
     border-left: 6px solid #67C23A;
    content: " ";
    position: absolute;
    top: 9px;
    /* right: 0; */
    left: 100%;
    /* border: 6px solid transparent; */
    /* border-right-color: #fff; */
}
.box{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5px;
}
.box1{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
}
img{
  height:40px;
  width: 40px;
}
.el-main{
  background-color: #f5f5f5;
}
</style>
