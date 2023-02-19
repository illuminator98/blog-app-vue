<template>
  <div>
    <div class="container d-flex justify-content-center">
      
  
      <div  class="text-center w-50">
        
          <h1>THIS IS THE CREATE POST VIEW</h1>
          <form class="w">
            <label>
              <span>Post Title</span>
              <input
                class="form-control px-3 py-2"
                type="text"
                placeholder="Post Title"
                v-model="title"
              />
            </label>

            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Enter something..."
              rows="4"
              class="mt-3"
            ></b-form-textarea>
            <br />
            <button class="btn btn-primary mt-4" @click.prevent="createPost">
              Create Post
            </button>
          </form>
          </div>
        </div>
      </div>
   
</template>

<script>
import { apiFetch } from "../main.js";

export default {
  name: "CreatePostView",
  data() {
    return {
      title: "",
      text: "",
      posts: [],
    };
  },

  methods: {
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
    },
  },
};
</script>