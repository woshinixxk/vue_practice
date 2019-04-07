
// 实例化Vue
new Vue({
	el:"#box",// 需要获取的html中的元素
	data:{	  // 用于存储数据
		name:"米斯特薛",
		age:18,
		x:0,
		y:0,
		website:"http://www.baidu.com",
		websiteTag:'<a href="http://www.baidu.com">aa</a>'
	},
	methods:{// 用于存储各种方法
		add:function(){
			this.age++; 
		},
		subtract:function(){
			this.age--; 
		},
		updateXY:function(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
		}
	}
});