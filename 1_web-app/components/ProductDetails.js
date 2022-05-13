app.component('product-details',{
    props:{
        detail:{
            type:String,
            required:true
        }
    },
    template:
    /*html*/
    `<p>{{detail}}</p>`,
    data: function(){
        return {
            
        }
    },
    computed:{}
})