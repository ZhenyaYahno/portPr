    window.onload = function (){


        Vue.component('newnav', {
    
            props: {
               postTitel: '',
               displayNav: ''
               

            },
            data(){
                return {
                 x: 20,
                 
                 display: 'none'
                  
                    
                }
            },
            methods: {

                clickHref: function($ev){
                    let prom = new Promise((resolve,reject)=>{
                        

                        resolve(this.display)
                    })
                    console.log(nav.elems)
                    if(this.display == 'none'){
                        this.display = 'block';
                    }

                 },
                 styleFnc: function(){
                     console.log(this.display);
                     return this.display;
                     
                 }
                
               
            },
            created: function(){
            
            },
            
            template: `
            <a href="#" @click="clickHref"><nav>{{postTitel}}
               <div class="BlueLine"  :style="{ display: styleFnc() }">
                   <div class="BlueLineLeft"></div>
                   <div class="BlueLineRight"></div>
                  </div>
            </nav>
           
            </a>
            
            
            `
        })
            




        var nav = new Vue ({
            el: '#nav',
            data: {
                elems:[
                  {id:1,postTitel:'Home',display: this.display},
                  {id:2,postTitel:'Contact',display: this.display},
                  {id:3,postTitel:'Pricing',display: this.display},
                  {id:4,postTitel:'Testimonials',display: this.display},
                  {id:5,postTitel:'About',display: this.display},
                  {id:6,postTitel:'Features',display: this.display}
                ] 
                
            },
            methods:{
              
        
            }
          });

        }


        
    

