<template>
  <div id="home">
    <div class="container d-flex justify-content-center">
      <div class="text-center w-50">
        <h1 class="text-white">Welcome <br /></h1>
        <div>
          <div>
            <b-button class="bg-dark post" v-b-modal.modal-center
              >Create New Post</b-button
            >

            <b-modal
              id="modal-center"
              ok-title="Create Post"
              @ok="createPost"
              header-class="d-none"
              footer-class="custom-footer"
            >
              <div class="container d-flex justify-content-center">
                <div class="text-center w-100">
                  <form class="">
                    <input
                      id="modal-form"
                      class="form-control px-3 py-2"
                      type="text"
                      placeholder="Post Title"
                      v-model="title"
                    />

                    <b-form-textarea
                      id="textarea"
                      v-model="text"
                      placeholder="Write something..."
                      rows="4"
                      class="mt-3"
                    ></b-form-textarea>
                    <br />
                  </form>
                </div>
              </div>
            </b-modal>
          </div>
        </div>

        <div class="m-2">
          <b-card
            @click="selectPost(post)"
            class="card-style mt-4"
            v-for="post in posts.slice().reverse()"
            :key="post.id"
          >
            <div class="d-flex card-style justify-content-between">
              <div>
                <b-avatar
                  button
                  src="https://placekitten.com/300/300"
                ></b-avatar>
                {{ user.username }}
              </div>
              <div>
                <b-button
                  class="bg-dark mb-2  buttonstyle mx-1"
                  v-b-modal.modal-center-edit
                  >✎</b-button
                >
                <b-button class="bg-dark buttonstyle mb-2 px-3" v-b-modal.my-modal-1
                  >x</b-button
                >
              </div>
            </div>

            <b-card-body class="card-style">
              <b-card-title class="card-style"> {{ post.title }}</b-card-title>
            </b-card-body>

            <b-list-group class="card-style" flush>
              <b-list-group-item class="card-style">
                {{ post.text }}</b-list-group-item
              >
              <b-list-group-item class="card-style">
                <button
                  
                  @click="commentsShown = !commentsShown"
                  class="bg-dark buttonstyle p-2 btn"
                >
                  {{ commentsShown&&selectedPost === post ? "Hide" : "Show" }} Comments
                </button></b-list-group-item
              >
              <div v-if="selectedPost === post&&commentsShown" >
                
                <b-list-group-item 
                  v-for="(comm,index) in post.comment_set"
                  :key="comm.id+index
                  "
                  @click="selectComment(comm)"
                  
                  class="card-style-comment d-flex justify-content-between"
                >  
                  <div   class="d-flex" >  <p v-if="!isBeeingEddited&&selectedComment.id !== comm.id">{{ comm.text }}</p> 
                     <b-form-input
                      v-if="selectedComment.id === comm.id&&showInput"
                      id="comment-input-edit"
                      v-model="selectedComment.text"
                      placeholder="write a comment..."
                      
                      
                    >
                    
                    </b-form-input>
                    <button v-if="selectedComment.id === comm.id&&showInput" @click="editComment">enter</button>
                  </div>
                  
                  <div>
                  <button   @click="showInputFunction" class="btn  comment-button">✎</button>
                  <button   @click="showInput=true" class="btn  comment-button" v-b-modal.my-modal-deleteComment>x</button>
                   
              </div>
                
                   
               
                </b-list-group-item
                >
                
                
                <b-list-group-item class="card-style">
                  <div class="d-flex">
                    <b-form-input
                    
                      id="comment-input"
                      v-model="comment"
                      placeholder="write a comment..."
                    >
                    
                    </b-form-input>
                    <button  @click="createComment" class="btn btn-dark buttonstyle p-2">
                      enter
                    </button>
                    
                  </div>
                </b-list-group-item>
                
              </div>
            </b-list-group>
            

            <b-card-body />
          </b-card>
           <b-modal
          id="my-modal-deleteComment"
          class="text-white"
          ok-title="Delete"
          header-class="d-none"
          footer-class="custom-footer"
          @ok="deleteComment()"
          @cancel="showInputFunction()"
        >
          Are you sure you want to delete this comment?
        </b-modal>
        </div>
        
        <b-modal
          id="my-modal-1"
          class="text-white"
          ok-title="Delete"
          header-class="d-none"
          footer-class="custom-footer"
          @ok="DeletePost()"
        >
          Are you sure you want to delete this post?
        </b-modal>
        
        
        
      </div>
    </div>
    <b-modal
      id="modal-center-edit"
      ok-title="Edit Post"
      @ok="EditPost"
      header-class="d-none"
      footer-class="custom-footer"
    >
    
      <div class="container d-flex justify-content-center">
        <div class="text-center w-100">
          <form class="">
            <label>
              <input
                id="modal-edit"
                class="form-control px-3 py-2"
                type="text"
                placeholder="Post Title"
                v-model="selectedPost.title"
              />
            </label>

            <b-form-textarea
              id="textarea"
              
              placeholder="Write something..."
              rows="4"
              class="mt-3"
              v-model="selectedPost.text"
            ></b-form-textarea>
            <br />
          </form>
        </div>
      </div>
    </b-modal>
  </div>
</template>


<script>
import { apiFetch } from "../main.js";
export default {
  name: "HomeView",
  data() {
    return {
      posts: [],
      users:[],
      user: "",
      avatar: "",
      title: "",
      comment:'',
      text: "",
      selectedPost: {},
      commentsShown: false,
      selectedComment:{},
      showInput:false,
      isBeeingEddited:false,
      
      
      
    };
  },
  methods: {
    selectPost(post) {
      this.selectedPost = post;
    },
    selectComment(comm) {
       if (this.showInput) {
      this.selectedComment=comm}
     

      

    },
showInputFunction (){
  this.showInput=!this.showInput
  this.selectedComment=''
  
},
    async createPost() {
      if (!this.title || !this.text) {
        alert("Post title and post text are required");
        return;
      }
      let requestData = {
        title: this.title,
        text: this.text,
      };
      let response = await apiFetch("http://localhost:8000/blogs/create/post", {
        method: "POST",
        body: JSON.stringify(requestData),
      });
      let responseData = await response.json();
      this.posts.push(responseData);
      alert("Post Created Successfully");
    },
    async EditPost() {
      

      let requestData = {
        title: this.selectedPost.title,
        text:  this.selectedPost.text
      };
      let response = await apiFetch(
        "http://localhost:8000/blogs/posts/" + this.selectedPost.id,
        {
          method: "PATCH",
          body: JSON.stringify(requestData),
        }
      );
      let responseData = await response.json();
      console.log(responseData);
      console.log(this.SelectedPost);
      this.selectedPost.title = responseData.title;
      this.selectedPost.text = responseData.text;
    },
    DeletePost() {
      apiFetch("http://localhost:8000/blogs/posts/" + this.selectedPost.id, {
        method: "DELETE",
      })
        .then((data) => {
          console.log(data);
          // remove the item from the local data
          this.posts = this.posts.filter(
            (post) => post.id !== this.selectedPost.id
          );
        })

        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
    async createComment() {
      let requestData = {
        text: this.comment,
        user: this.user.id,
      };
      let response = await apiFetch(
        "http://localhost:8000/blogs/posts/" +
          this.selectedPost.id +
          "/comment",
        {
          method: "POST",
          body: JSON.stringify(requestData),
        }
      );
      let responseData = await response.json();
      this.selectedPost.comment_set.push(responseData);
      this.comment='';

      
     
    },
async editComment () {
  let requestData={text:this.selectedComment.text}
  let response = await apiFetch(
        "http://localhost:8000/blogs/posts/" +
          this.selectedPost.id +
          "/comment/"+this.selectedComment.id,
        {
          method: "PATCH",
          body: JSON.stringify(requestData),
        }
      );
       let responseData = await response.json();
       this.selectedComment.text=responseData.text
       this.showInput=false;
       this.isBeeingEddited=false;
       this.selectedComment=''

  

},
deleteComment() {

   apiFetch("http://localhost:8000/blogs/posts/" +
          this.selectedPost.id +
          "/comment/"+ this.selectedComment.id, {
        method: "DELETE",
      })
        .then((data) => {
          console.log(data);
          // remove the item from the local data
          this.selectedPost.comment_set = this.selectedPost.comment_set.filter(
            (comment) => comment.id !== this.selectedComment.id,
            this.showInput=false,
          );
        })

        .catch((error) => {
          // handle error
          console.log(error);
        });
        
    },
  


  },
  async created() {
    let user = await apiFetch("http://localhost:8000/blogs/username");
    let response = await apiFetch("http://localhost:8000/blogs/posts/all");
    let responseData = await response.json();
    let responseUser = await user.json();
  

    console.log(response);
    console.log(responseData);
    console.log(user);
    console.log(responseUser);
    this.posts = responseData;
    this.user = responseUser;
    
  },
};
</script>

<style >
.cardtext {
  border-bottom: 1px solid grey;
}
.modal-body {
  background-color: #222427;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border: 10px, solid, #222427 !important;
}
#comment-input {
  opacity: 30;
  background-color: #222427;
  color: rgb(156, 235, 215);
}

.custom-footer {
  background-color: #222427 !important;
  border: none !important;
}
#modal-form,
#modal-edit {
  background-color: #333533;
  color: #03dac5;
}
#textarea {
  background-color: #333533;
  color: #03dac5;
}
#home {
  background-color: rgb(28, 30, 33);
}

.card-style {
  background-color: #303338 !important;
  color: #03dac5 !important;
}
.card-style-comment {
  background-color: #303338 !important;
  color: rgb(156, 235, 215) !important;
}
#my-modal-1 , #my-modal-deleteComment {
  color: #03dac5;
}
.post {
  color: #03dac5 !important ;
  padding: 5rem;
  margin-top: 0.5rem;
}
.buttonstyle {
  color: rgb(156, 235, 215) !important; 
  
}
.post:hover {
  opacity: 10;
}
.comment-button {
  color:rgb(218, 218, 218) !important;
}
.comment-button:hover {
  color: #03dac5 !important;

}
.buttonstyle:hover{
  color: #03dac5 !important;
  opacity: 10;
}
</style>