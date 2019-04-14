<template>
    <div class='col-md-4'>
        <form  role="form">
            <div class="form-group">
                <label for="name">用户名：</label>
                <input type="text" class="form-control" id="name" placeholder="用户名" v-model="name">
            </div>
            <div class="form-group">
                <label for="content">内容：</label>
                <textarea id="content" class="form-control" cols="30" rows="10" v-model="content" placeholder="请输入您的看法"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="add">提交</button>
        </form>
    </div>
</template>
<script>
export default {
    props:['addComment'],
    data() {
       return {
           name:'',
           content:''
       }
    },
    methods:{
        add(){
            if(!this.name || !this.content){
                alert('名字和内容不能为空')
                return
            }
            let {name,content}=this
            this.addComment({name,content})
            this.name=this.content=''
        }
    }
}
</script>
<style>

</style>
