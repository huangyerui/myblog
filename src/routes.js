 import AddBlog from './components/AddBlog.vue'
 import ShowBlogs from './components/ShowBlogs.vue'
 import SingleBlog from './components/SingleBlog.vue'
 import EdditBlog from './components/EdditBlog.vue'
 export default[
 {path:'/',component:ShowBlogs},
 {path:'/add',component:AddBlog},
 {path:'/edit/:id',component:EdditBlog},
 {path:'/blog/:id',component:SingleBlog}
 ]