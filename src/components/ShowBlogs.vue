<template>
  <div id="show-blogs" v-theme="'wide'">
  	<h1>博客总览</h1>
  	<input type="text" placeholder="搜索" v-model='search'>
  	<div v-for='blog in filteredBlogs' class="single-blog">
  		<router-link v-bind:to="'/blog/'+blog.id">
  			<h2 v-rainbow>{{blog.title | toUppercase}}</h2>
  		</router-link>
  		<article>
  			{{blog.content | snippet}}
  		</article>
  	</div>
  </div>
</template>

<script>
   import axios from 'axios'
export default {

  name: 'show-blogs',
  data(){
  	return {
  		blogs:[],
  		search:''
  	}
  },
  created(){
  	// this.$http.get('https://wd8430042382vrbdnq.wilddogio.com/posts.json')
      axios.get('https://wd8430042382vrbdnq.wilddogio.com/posts.json')
  	.then(function(data){
  		return data.data;
  	})
  	.then((data)=>{
        var blogArray=[];
        for(let key in data)
        {
        	data[key].id=key;
        	 blogArray.push(data[key]);
        	  
        }
        this.blogs=blogArray;

  	})
  },
  computed:{
     filteredBlogs:function(){
     	return this.blogs.filter((blog)=>{
     		return blog.title.match(this.search);
     	})
     }
  },
  filters:{
  	toUppercase(value){
  		return value.toUpperCase();
  	},
  	snippet(value){
  		return value.slice(0,100)+"...";
  	}
  },
  directives:{
  	'rainbow':{
  		bind(el,binding,vnode){
  			el.style.color ='#'+Math.random().toString(16).slice(2,8)
  		}
  	}
  }
}
</script>

<style scoped>
#show-blogs{
	max-width: 800px;
	margin: 0 auto;
}
.single-blog{
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
}
input[type='text']{
	padding:8px; 
	width:100%;
	box-sizing: border-box;
}
.single-blog a{
	text-decoration: none;
	color:#444;
}
</style>
