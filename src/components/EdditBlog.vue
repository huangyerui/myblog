<template>
  <div id="add-blog" >
   <h2>编辑博客</h2>
   <form v-if='!submmited'>
     <label>博客标题</label>
     <input type="text" v-model="blog.title">
     <label>博客内容</label>
     <textarea v-model='blog.content'></textarea>
     <div id="checkboxes">
       <label>Vue.js</label>
       <input type="checkbox" value="Vue.js" v-model='blog.categories'>
       <label>React.js</label>
       <input type="checkbox" value="React.js" v-model='blog.categories'>
       <label>Angular4</label>
       <input type="checkbox" value="Angular4" v-model='blog.categories'>
       <label>Node.js</label>
       <input type="checkbox" value="Node.js" v-model='blog.categories'>
     </div>
     <label>作者：</label>
     <select v-model='blog.author'>
       <option v-for='author in authors'>
         {{author}}
       </option>
     </select>
     <button v-on:click.prevent='Edit'>编辑博客</button>
   </form>
   <div v-if='submmited'>
     <h3>您的博客发布成功！</h3>
   </div>
   <form>
     <div id='preview'>
       <h3>博客总览</h3>
       <p>博客标题:{{blog.title}}</p>
       <p>博客内容:</p>
       <p>{{blog.content}}</p>
       <p>博客分类：</p>
       <ul>
         <li v-for='category in blog.categories'>
           {{category}}
         </li>
       </ul>
        <p>作者:{{blog.author}}</p>
     </div>

   </form>
  </div>
</template>

<script>
export default {
  //https://jsonplaceholder.typicode.com/
  name: 'add-blog',
  data () {
    return {
       id:this.$route.params.id,
      blog:{
      },
      authors:['大牛','中牛','小牛'],
      submmited:false
    }
  },
  // https:my-blog-c6e32.firebaseio.com/posts.json
  created(){
    this.$http.get("https://wd8430042382vrbdnq.wilddogio.com/posts/"+this.id+'.json')
    .then(function(data){
      return data.json();
    })
    .then(function(data){
      this.blog=data;
    })
  },
  methods:{
   Edit:function(){
   this.$http.put("https://wd8430042382vrbdnq.wilddogio.com/posts/"+this.id+'.json',this.blog)
   .then(function(data){
    this.submmited=true;
   });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #add-blog *{
      box-sizing: border-box;
    }
    #add-blog{
      margin: 20px auto;
      max-width: 800px;
      padding: 20px;
    }
    label{
      display: block;
      margin: 20px 0 10px;
    }
    input[type='text'],textarea,select{
      display: block;
      width: 100%;
      padding: 8px;
    }
    textarea{
      height: 200px;
    }
    #checkboxes label{
      display: inline-block;
      margin-top:0;
    }
     #checkboxes input{
      display: inline-block;
      margin-right:10px;
    }
    button{
      display: block;
      margin: 20px 0;
      background: crimson;
      color:#fff;
      border:0;
      padding: 14px;
      border-radius: 4px;
      font-size: 18px;
      cursor:pointer;
    }
    #preview{
      padding: 10px 20px;
      border:1px dotted #ccc;
      margin:30px 0;
    }
    h3{
      margin-top: 10px;
    }
</style>
