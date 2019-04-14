<template>
    <div class="list col-md-8">
       <h1>评论回复</h1> 
       <div v-show='comments.length===0' style="color:red;font-size:25px;">暂时没有评论，请先发表评论</div>
       <Item :comments='comments' :delComment='delComment'/>
    </div>
</template>
<script>
import Item from './item'
export default {
    data(){
        return {

        }
    },
    props:['comments','delComment'],
    components:{
        Item
    }
}
</script>
<style>
    .list h1{
        color: gray;
        font-size: 24px;
        font-weight: 500;
    }
</style>
