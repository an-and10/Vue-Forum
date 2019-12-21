<template>

    <div class="post" >
          <div class="user-info">
            <a href="#" class="user-name">{{user.name}}</a>

            <a href="#">
              <img class="avatar-large" :src="user.avatar" alt="">
            </a>

            <p class="desktop-only text-small">{{userPostsCount}} posts</p>
          </div>

          <div class="post-content">
            <div>
              {{post.text}}
            </div>
          </div>

          <div class="post-date text-faded">
            {{humanFriendlyDate}}
          </div>
        </div>


</template>

<script>
import sourceData from '@/data'
import moment from 'moment'
export default {

  props:{
    post:{
      required: true,
      type:Object
    }
  },
  computed:{
    user(){
      return sourceData.users[this.post.userId]
    },
    userPostsCount () {
          return Object.keys(this.user.posts).length
        },

        humanFriendlyDate(){
            return moment.unix(this.post.publishedAt).format("MMMM DO YYYY, h:mm:ss a")

        }
  }


}
</script>
