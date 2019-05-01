<template>
	<div id='single-blog'>
		<h1>{{blog.title}}</h1>
		<article>{{blog.content}}</article>
		<p>作者：{{blog.author}}</p>
		<p>分类：</p>
		<ul>
				<li v-for='category in blog.categories'>
					{{category}}
				</li>
			</ul>
		<button id="btn" v-on:click='Deleteblog' >删除</button>
		<button id="btn1"><router-link v-bind:to="'/edit/'+id">编辑</router-link></button>
		
	</div>
</template>
<script >
	import axios from "axios"
	export default{
name:'single-blog',
data(){
	return{
		 id:this.$route.params.id,
		blog:{}
	}
	},
	created(){
		 // this.$http.get("https://wd8430042382vrbdnq.wilddogio.com/posts/"+this.id+'.json')
		  axios.get("https://wd8430042382vrbdnq.wilddogio.com/posts/"+this.id+'.json')
		.then(function(data){
			return data.data;
		})
		.then((data)=>{
			this.blog=data;
		})
	},
	methods:{
		Deleteblog(){
			this.$http.delete("https://wd8430042382vrbdnq.wilddogio.com/posts/"+this.id+".json")
			.then(response=>{
				this.$router.push({path:'/'})
	})
		}
		}
	
}
</script>
<style>
#single-blog{
	padding: 20px;
	box-sizing: border-box;
	background: #eee;
	max-width: 800px;
	margin:20px auto;
}
#btn{
	display: inline-block;
	zoom: 1; /* zoom and *display = ie7 hack for display:inline-block */
	*display: inline;
	vertical-align: baseline;
	margin: 0 1px;
	outline: none;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	font: 10px/100% Arial, Helvetica, sans-serif;
	padding: .5em 2em .55em;
	text-shadow: 0 1px 1px rgba(0,0,0,.3);
	-webkit-border-radius: .5em; 
	-moz-border-radius: .5em;
	border-radius: .5em;
	-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);
	-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);
	box-shadow: 0 1px 2px rgba(0,0,0,.2);
}
#btn1{
	display: inline-block;
	zoom: 1; /* zoom and *display = ie7 hack for display:inline-block */
	*display: inline;
	vertical-align: baseline;
	margin: 0 1px;
	outline: none;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	font: 10px/100% Arial, Helvetica, sans-serif;
	padding: .5em 2em .55em;
	text-shadow: 0 1px 1px rgba(0,0,0,.3);
	-webkit-border-radius: .5em; 
	-moz-border-radius: .5em;
	border-radius: .5em;
	-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);
	-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);
	box-shadow: 0 1px 2px rgba(0,0,0,.2);
}
a{ 
	display: inline-block;
		text-decoration: none;
	}	
</style>