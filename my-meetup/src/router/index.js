import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Profile from '../components/User/Profile'
import CreateMeetup from '../components/MeetUp/createmeetup'
import Signup from'../components/User/Signup'
import Signin from '../components/User/Signin'
import Meetups from '../components/MeetUp/meetups'
import Meetup from '../components/MeetUp/meetup'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/profile',
      component: Profile,
      name:'Profile'
    },

    {
      path: '/signup',
      name:'Signup',
      component: Signup,

    },
    {
      path: '/signin',
      name:'Signin',
      component: Signin,
    },
    {
      path: '/meetup/meetups',
      name:'Meetups',
      component: Meetups,
    },
    {
      path:'/meetup/createmeetup',
      component: CreateMeetup,
      name:'CreateMeetup'
    },
    {
      props: true,
      path: '/meetups/:id',
      name: 'Meetup',
      component: Meetup
    },





  ],
  mode: 'history'

})
