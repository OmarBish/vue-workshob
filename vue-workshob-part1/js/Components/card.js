Vue.component('card', {
    props:['title','text','index'],
    template: `
    <div class="card" style="width: 18rem;">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
              <h5 class="card-title">{{title}}</h5>
              <p class="card-text">{{text}}</p>
               <a href="#" @click="deleteCard" class="btn btn-danger">Delete</a> 
            </div>
</div>
    `,
    methods: {
        deleteCard(){
            this.$emit('delete',this.index)
        }
    },
})