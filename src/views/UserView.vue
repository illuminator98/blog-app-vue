<template>
  <div>
    <div class="m-2">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <b-card
            @click="selectPost(post)"
            class="card-style mt-4"
            style="width: 100%"
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
                  {{
                    commentsShown && selectedPost.id === post.id
                      ? "Hide"
                      : "Show"
                  }}
                  Comments
                </button></b-list-group-item
              >
              <div v-if="selectedPost.id === post.id && commentsShown">
                <b-list-group-item
                  v-for="comm in post.comment_set"
                  :key="comm.id"
                  @click="selectComment(comm)"
                  class="card-style-comment d-flex justify-content-between"
                >
                  <div class="d-flex d-lg-block flex-column">
                    <b-avatar
                      button
                      src="https://placekitten.com/300/300"
                    ></b-avatar>
                    {{ comm.user.user.username }}
                  </div>
                  <div class="d-flex align-items-center">
                    <p
                      class="m-0"
                      v-if="!isBeeingEddited && selectedComment.id !== comm.id"
                    >
                      {{ comm.text }}
                    </p>
                    <b-form-input
                      v-if="selectedComment.id === comm.id && showInput"
                      id="comment-input-edit"
                      v-model="selectedComment.text"
                      placeholder="write a comment..."
                      class="bg-dark text-white"
                    >
                    </b-form-input>
                    <button
                      class="btn -btn-primary bg-dark text-white"
                      v-if="selectedComment.id === comm.id && showInput"
                      @click="editComment"
                    >
                      enter
                    </button>
                  </div>

                  <div class="d-flex align-items-center">
                    <button
                      @click="showInputFunction"
                      class="btn comment-button"
                      v-if="comm.user.user.id === currentUser.id"
                    >
                      ✎
                    </button>
                    <button
                      @click="showInput = true"
                      class="btn comment-button"
                      v-if="comm.user.user.id === currentUser.id"
                      v-b-modal.my-modal-deleteComment
                    >
                      x
                    </button>
                  </div>
                </b-list-group-item>

                <b-list-group-item class="card-style">
                  <div class="d-flex">
                    <b-form-input
                      id="comment-input"
                      v-model="comment"
                      placeholder="write a comment..."
                    >
                    </b-form-input>
                    <button
                      @click="createComment"
                      class="btn btn-dark buttonstyle p-2"
                    >
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
      </div>
    </div>
  </div>
</template>

<script>
import { apiFetch } from "../main.js";
export default {
  name: "UserView",
  data() {
    return {
      posts: [],
      user: {},
      currentUser: {},
      showInput: false,
      selectedComment: {},
      selectedPost: {},
      comment: "",
      commentsShown: false,
      isBeeingEddited: false,
    };
  },
  methods: {
    async getPosts() {
      let response = await apiFetch(
        "https://dimitarvuik.pythonanywhere.com/blogs/posts/" + this.$route.params.username
      );
      let responseData = await response.json();
      this.posts = responseData.posts;
      console.log(responseData);
    },

    selectPost(post) {
      this.selectedPost = post;
    },
    selectComment(comm) {
      if (this.showInput) {
        this.selectedComment = comm;
      }
    },
    showInputFunction() {
      this.showInput = !this.showInput;
      this.selectedComment = "";
    },
    async createComment() {
      let requestData = {
        text: this.comment,
      };
      await apiFetch(
        "https://dimitarvuik.pythonanywhere.com/blogs/posts/" +
          this.selectedPost.id +
          "/comment",
        {
          method: "POST",
          body: JSON.stringify(requestData),
        }
      );
      this.comment = "";
      await this.getPosts();
    },
    async editComment() {
      let requestData = { text: this.selectedComment.text };
      let response = await apiFetch(
        "https://dimitarvuik.pythonanywhere.com/blogs/posts/" +
          this.selectedPost.id +
          "/comment/" +
          this.selectedComment.id,
        {
          method: "PATCH",
          body: JSON.stringify(requestData),
        }
      );
      let responseData = await response.json();
      this.selectedComment.text = responseData.text;
      this.showInput = false;
      this.isBeeingEddited = false;
      this.selectedComment = "";
    },
    deleteComment() {
      apiFetch(
        "https://dimitarvuik.pythonanywhere.com/blogs/posts/" +
          this.selectedPost.id +
          "/comment/" +
          this.selectedComment.id,
        {
          method: "DELETE",
        }
      )
        .then((data) => {
          console.log(data);
          // remove the item from the local data
          this.selectedPost.comment_set = this.selectedPost.comment_set.filter(
            (comment) => comment.id !== this.selectedComment.id,
            (this.showInput = false)
          );
        })

        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
  },
  async created() {
    console.log("wjatever");
    let response = await apiFetch(
      `https://dimitarvuik.pythonanywhere.com/blogs/posts/${this.$route.params.username}`
    );
    let responseData = await response.json();

    this.posts = responseData.posts;
    this.user = responseData.user;
    const currentUserResponse = await apiFetch("https://dimitarvuik.pythonanywhere.com/blogs/username");
     this.currentUser = await currentUserResponse.json();
  },
};
</script>