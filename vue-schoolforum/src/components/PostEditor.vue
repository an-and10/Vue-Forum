<template>

 <form @submit.prevent="save">
        <div class="form-group">
          <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="text"
          class="form-input">
          </textarea>
          <div class="form-actions">
            <button class="btn-blue"> Submit Post</button>
          </div>
        </div>
      </form>



</template>

<script>
export default {

  props:{

    threadId :{
      required:  true,

    }

  },

 data(){
   return{
     text:''
   }

 },

methods:{

   save(){
    const postId = "greatePost" + Math.random();

   const  post =  {
      text: this.text,
      publishedAt: Math.floor(Date.now()/1000),
      threadId :this.threadId,
      userId : 'Miej9zSGMRZKDvMXzfxjVOyv3RF3',
      '.key' : postId

    }
    // this.$set(sourceData.posts, postId, post)
    // this.$set(this.thread.posts, postId, postId)
    // this.$set(sourceData.users[post.userId].posts, postId, postId)

    this.text = ''
    this.$emit('save', {post})
    // console.log(sourceData.posts, this.thread.posts)
  }
}

}
</script>
