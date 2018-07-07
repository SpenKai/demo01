var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    counter : 0,
    price : 0,
    input : "",
    total : "",
    productList: [
      {
          pro_name: '标准票',
          pro_purity: '',
          pro_price: 199,
          less : '仅剩2张',
          checkid : 'ticiet1',
          satus : false 
      },
      {
          pro_name: '站票',
          pro_purity: '无座位,可自备小板凳...',
          pro_price: 99,
          less : '',
          checkid : 'ticiet2',
          satus : false 
      },
      {
          pro_name: '远程支持票',
          pro_purity: '可获得活动PPT等资料',
          pro_price: 9.99,
          less : '',
          checkid : 'ticiet3',
          satus : false 
      },
      {
          pro_name: '赞助商',
          pro_purity: '获得品牌露出机会,详情联系...',
          pro_price: 999.99,
          less : '',
          checkid : 'ticiet4',
          satus : false 
      },
      
  ],
  },
  methods: {
      setprice : function (){
          this.price = this.input.item.pro_price.toFixed(2);
      },
      itemChange:function(){
        var vm=this;
        var select=vm.list.filter(function(v,o){
            return v.satus == true
        })
        select.length==vm.list.length ? vm.allCheck=true:vm.allCheck=false
    }
  },
  
  computed: {
    //计算总价
    pricetotale: function() {
        var tatol = 0;
        for(var i = 0; i < this.list.length; i++) {
            var item = this.list[i];
            if(item.satus==true){
                tatol += item.pro_price * counter
            }
        }
        //千位分隔符正则
        return tatol.toString().replace(/\B(?=(\d{3})+$)/g, ',')
    }},
})