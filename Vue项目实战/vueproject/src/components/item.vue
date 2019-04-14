<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item list-item" v-for="(comment, index) in comments" :key="index">
                <div class="handle">
                    <button class='btn btn-primary' @click.prevent="delData(index)">删除</button>
                </div>
                <p class="name"><span>{{comment.name}}</span></p>
                <p class='center'><span>{{comment.content}}</span></p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:['comments','delComment'],
    methods:{
        delData(i){
            if(window.confirm(`确定删除${this.comments[i].name}吗？`)){
                this.delComment(i)
            }
           }
        }
    }
</script>
<style>
    .list-item{
        position: relative;
    }
    .list-item .name{
        font-size: 20px;
    }
    .list-item .center{
        text-align: center;
        color:deeppink;
        font-size: 15px;
    }
    .handle{
        position: absolute;
        right: 10px;
        bottom: 10px;
    }

</style>
