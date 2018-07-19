new Vue({
			el:'#app',
			data:{
				STR:{val:8,cost:0},
				DEX:{val:8,cost:0},
				CON:{val:8,cost:0},
				INT:{val:8,cost:0},
				WIS:{val:8,cost:0},
				CHA:{val:8,cost:0},
				
			},
			computed:{
				remaining: function(){
					let rem = 30;
					rem-=this.STR.cost;
					rem-=this.DEX.cost;
					rem-=this.CON.cost;
					rem-=this.INT.cost;
					rem-=this.WIS.cost;
					rem-=this.CHA.cost;
					return rem;
				}
			},
			methods:{
				increase : function(abil,inc){
					if(inc){
						if(this[abil].val<16){
							this[abil].val++;
						}
					}else{
						if(this[abil].val>7){
							this[abil].val--;
						}
					}
					
					this.determine_cost(abil);
				},
				determine_cost(abil){
					switch(this[abil].val){
						case 7:
						this[abil].cost = -2;
						break;
						case 8:
						this[abil].cost = 0;
						break;
						case 9:
						this[abil].cost = 1;
						break;
						case 10:
						this[abil].cost = 2;
						break;
						case 11:
						this[abil].cost = 3;
						break;
						case 12:
						this[abil].cost = 4;
						break;
						case 13:
						this[abil].cost = 5;
						break;
						case 14:
						this[abil].cost = 7;
						break;
						case 15:
						this[abil].cost = 9;
						break;
						case 16:
						this[abil].cost = 12;
						break;
						
					}
				}
			}
		})
		
