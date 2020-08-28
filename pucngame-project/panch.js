new Vue({
	el:"#app1",
	data:{
		data:100,
		ended:false,
		hit:false,
	},
	methods:{
		punch:function () {
			this.data -= 10
			if(this.data == 0){
				this.ended = true
			}
			else if(this.data==90) {
				document.getElementById('div1').style.visibility = "visible"

			}
			else if(this.data==80){
					document.getElementById('div3').style.visibility = "visible"

			}
			else if(this.data==70){
					document.getElementById('div4').style.visibility = "visible"

			}
			else if(this.data==60){
					document.getElementById('div5').style.visibility = "visible"

			}
			else if(this.data==50){
					document.getElementById('div6').style.visibility = "visible"

			}
			else if(this.data==40){
					document.getElementById('div7').style.visibility = "visible"

			}
			else if(this.data==30){
					document.getElementById('div8').style.visibility = "visible"

			}
			else if(this.data==20){
					document.getElementById('div9').style.visibility = "visible"

			}
			else if(this.data==10){
				document.getElementById('div8').style.visibility = "visible"
			}
		},
		restart:function (argument) {
			this.data = 100
			this.ended = false
				document.getElementById('div1').style.visibility = "hidden"
				document.getElementById('div2').style.visibility = "hidden"
				document.getElementById('div3').style.visibility = "hidden"
				document.getElementById('div4').style.visibility = "hidden"
				document.getElementById('div5').style.visibility = "hidden"
				document.getElementById('div6').style.visibility = "hidden"
				document.getElementById('div7').style.visibility = "hidden"
				document.getElementById('div8').style.visibility = "hidden"
				document.getElementById('div9').style.visibility = "hidden"
		}
	}
})
// direct dom
document.getElementById('div1').style.visibility = "hidden"
document.getElementById('div2').style.visibility = "hidden"
document.getElementById('div3').style.visibility = "hidden"
document.getElementById('div4').style.visibility = "hidden"
document.getElementById('div5').style.visibility = "hidden"
document.getElementById('div6').style.visibility = "hidden"
document.getElementById('div7').style.visibility = "hidden"
document.getElementById('div8').style.visibility = "hidden"
document.getElementById('div9').style.visibility = "hidden"
