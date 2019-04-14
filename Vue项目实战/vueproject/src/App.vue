<template>
  <div>
    <div class="header">
      <h1>请发表对Vue的评论</h1>
    </div>
    <div class="container">
      <div class="row">
        <Add :addComment='addComment'/>
        <List :comments='comments' :delComment='delComment'/>
      </div>
    </div>
  </div>
</template>
<script>
import Add from './components/Add'
import List from './components/List'
export default {
  data() {
    return {
      comments:[
          {name:'bom',content:'Vue是个好东西'},
          {name:'TOm',content:'Vue so easy'},
          {name:'CAt',content:'Vue很好玩'},
          {name:'Lily',content:'Vue不难学'}
      ]
    }
  },
  methods:{
    addComment(commentObj){
      this.comments.unshift(commentObj)
    },
    delComment(index){
      this.comments.splice(index,1)
    }
  },
  components:{
    Add,
    List
  }
}
</script>
<style>
  .header{
    height: 150px;
    background: #bfa;
  }
  .header h1{
    box-sizing: content-box;
    padding: 50px 0 0 100px;
    font-size: 40px;
    color: gray;
    font-weight: 600;
  }
</style>
