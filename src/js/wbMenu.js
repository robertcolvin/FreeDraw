(function() {
 'use strict';  

 /**
 *@author Rcolvin
 * Creates Menu that holds MenuBar And floating menu
 * @param {String} id 
 * @return {String} color
 */
	///var scope;// SAME AS static dynamic var
	function Menu(id, color ) {
		this.Container_constructor();
		this.id=this.name=id;
		this.color = color;
		this.hi_Y=0;
		this.Controller =null;
		this.matrix = new createjs.Matrix2D();
		this.angle = Math.PI/12;
		this.currentMenu="";
		//menu items
		this.options= new Object();
		this.subscriberWL = {"select":true,"line":true,"fill":true,"math":true,"media":true,"select":false,"print":true,"clear":true,"delete":true};
		this.hostWL = {"select":true,"line":true,"fill":true,"math":true,"media":true,"select":true,"print":true,"clear":true,"delete":true};
		/**
		* 
		* Each name for main menu MUST match a "class" name like "menu" to match "Menu"
		* sub menu names must match the function needed in Each class to SUPPORT drawing like "free" for free/freePerm 
		*
		**/
		this.options["BR"]=[ 
			{"name":"select", "btns":{"icon":"ss.png","hint":"select opject","action":"select"}},
			{"name":"line", "btns":{"icon":"ss.png","hint":"line",">":[{"name":"free","icon":"ss.png","action":"method1","hint":""},
					{"name":"straight","icon":"ss.png","action":"method1","hint":""},
					{"name":"bezier","icon":"ss.png","action":"method1","hint":""}]}},
			{"name":"fill", "btns":{"icon":"ss.png","hint":"fill",">":[{"name":"square","icon":"ss.png","action":"method1","hint":""},
					{"name":"circle","icon":"ss.png","action":"method1","hint":""},
					{"name":"star","icon":"ss.png","action":"method1","hint":""}]}},
			{"name":"math", "btns":{"icon":"ss.png","hint":"math",">":[{"name":"sqrt","icon":"ss.png","action":"method1","hint":""},
					{"name":"axis","icon":"ss.png","action":"method1","hint":""},
					{"name":"graph","icon":"ss.png","action":"method1","hint":""}]}},
			{"name":"media", "btns":{"icon":"ss.png","hint":"media",">":[{"name":"ppt","icon":"ss.png","action":"method1","hint":""},
					{"name":"video","icon":"ss.png","action":"method1","hint":""}]}},
			{"name":"select_area", "btns":{"icon":"ss.png","hint":"selectable area",">":[{"name":"add","icon":"ss.png","action":"method1","hint":""},
					{"name":"remove","icon":"ss.png","action":"method1","hint":""}]}},
			{"name":"print", "btns":{"icon":"ss.png","hint":"selectable area","action":"print"}},
			{"name":"clear", "btns":{"icon":"ss.png","hint":"selectable area","action":"print"}},
			{"name":"delete", "btns":{"icon":"ss.png","hint":"selectable area","action":"print"}}
		];
		this.options["EN"]=[ 
			{"name":"select", "btns":{"icon":"ss.png","hint":"select opject","action":"select"}},
			{"name":"line", "btns":{"icon":"ss.png","hint":"line",">":[{"name":"free","icon":"ss.png","action":"method1","hint":""},
					{"name":"straight","icon":"ss.png","action":"method1","hint":""},
					{"name":"bezier","icon":"ss.png","action":"method1","hint":""}]}},
			{"name":"fill", "btns":{"icon":"ss.png","hint":"fill",">":[{"name":"square","icon":"ss.png","action":"method1","hint":""},
					{"name":"circle","icon":"ss.png","action":"method1","hint":""},
					{"name":"star","icon":"ss.png","action":"method1","hint":""}]}},
			{"name":"math", "btns":{"icon":"ss.png","hint":"math",">":[{"name":"sqrt","icon":"ss.png","action":"method1","hint":""},
					{"name":"axis","icon":"ss.png","action":"method1","hint":""},
					{"name":"graph","icon":"ss.png","action":"method1","hint":""}]}},
			{"name":"media", "btns":{"icon":"ss.png","hint":"media",">":[{"name":"ppt","icon":"ss.png","action":"method1","hint":""},
					{"name":"video","icon":"ss.png","action":"method1","hint":""}]}},
			{"name":"select_area", "btns":{"icon":"ss.png","hint":"selectable area",">":[{"name":"add","icon":"ss.png","action":"method1","hint":""},
					{"name":"remove","icon":"ss.png","action":"method1","hint":""}]}},
			{"name":"print", "btns":{"icon":"ss.png","hint":"selectable area","action":"print"}},
			{"name":"clear", "btns":{"icon":"ss.png","hint":"selectable area","action":"print"}},
			{"name":"delete", "btns":{"icon":"ss.png","hint":"selectable area","action":"print"}}
		];
		
		this.setup();
	}
	createjs.EventDispatcher.initialize(Menu.prototype);
	var p = createjs.extend(Menu, createjs.Container);
	
	p.getLayer = function (id){ 
		return this.layers[id]; 
	}

	p.hi_Y=0;
	p.width=0;
	p.height=0;
	
	p.setup = function() {
		var bg = new createjs.Shape();
		var hi = new createjs.Shape();
		bg.alpha=1;
		bg.name=bg.id="bg";
		hi.alpha=1;
		hi.name=hi.id="hi";
		
		this.menucontain= new MenuBar("wbmenu");
		this.submenu= new MenuBar("sub_wbmenu");
		this.menubuttons(this.options);
		this.addChild(bg,this.menucontain,hi,this.submenu);
		//this.on("click", this.handleClick);
		//this.on("mousedown", this.handlePress);
		//this.on("pressup", this.handleRelease);
		
		console.log("box1");
		//this.cursor = "pointer";
		//this.mouseChildren = false;
		
		this.offset = Math.random()*10;
		this.count = 0;
	};
	
	
	p.setSize = function (width,height,color){
		this.setBgSize(width,height,color);
		this.width=width;
		this.height=height;
		for (var i in this.layers){
			this.layers[i].setSize(width,height,color);
		}
		p.width=width;
		p.height=height;
	};
	
	p.setBgSize = function(width,height,color){
		var bg=this.getChildByName("bg");
		if (bg!=null){
			bg.graphics.clear()
					.beginStroke('#ccc')
					.beginFill(color)
					.drawRect(0,0,width,height);
		}
	}
	p.setHiSize = function(width,height,color){
		var hi=this.getChildByName("hi");
		if (hi!=null){
			hi.graphics.clear()
					.beginFill(color)
					.drawRect(0,0,width,height);
		}
	}
	p.getWidth = function(){
		console.log("get width");
		return width;
	}
	p.wbRegister = function (wbid,tabid){
		
	}
	p.clear = function(type,wbid){
		//clear all objects in view based on type  ;
	}
	p.wbSwitch = function (wbid){
		
	}
	p.unshift =function(items){}//to front
	p.push =function(items){}//toback
	

	p.handleClick = function (event) {
		//alert("You clicked on a button: "+this.label);
		console.log("click1");
	};
	
	p.handlePress = function(event){
        //mainStage.addEventListener("stagemousemove", this.drawLine);
        //mainStage.addEventListener("stagemouseup", this.endDraw);
		console.log("pressing....21acfsa");
		this.controller.shapeStart();
		this.on("pressmove", this.drawLine);
	};
	p.handleRelease = function(event){
		this.controller.drawdone();
		this.off("pressmove", this.drawLine);
	};

	p.menubuttons = function(buttons, language){
		if (language==null) language = "EN";
		options =  buttons[language];   //array
		stot = options.length;
		this.hostWL=null;
		var old=null;
		var btn=null;
		var invoke=this.oInvoke;
		var btn = new Button("up","up.png","back to menu",'up','#999',oUp);
		this.menucontain.addChild(btn);
		old=btn;
		for (var i =0;i<stot;++i){
			var opt = options[i];
			if ( !this.subscriberWL[opt["name"]] ){
				continue;
			}
			invoke=(opt["btns"][">"]==undefined? oInvoke : invoke=oInvokeSub);
			btn = new Button(opt["name"],opt["btns"]["icon"],opt["btns"]["hint"],opt["name"],'#'+Math.floor(Math.random()*16777215).toString(16),invoke);
			if (old!=null){
				btn.x=0;
				btn.y=old.y+old.height+10;
			}else{
				btn.x=btn.y=0;
			}		
			btn.alpha=.5;
			this.menucontain.addChild(btn,(old==null?true:false));
			
			old = btn;
		}
		console.log("________done...");
		var mPoint=this.menucontain.getSize();
		//this.setSize(mPoint.x,mPoint.y);
		console.log(mPoint);
		//this.menucontain.x=400
		
		var tween = createjs.Tween.get(this).wait(1);
		tween.wait(300).call(this.setBgSize,[mPoint.x,mPoint.y, "#DDD"],this);
		//this.setBgSize(120,200, Math.floor(Math.random()*16777215).toString(16));
		
	}
	
	function oBack(btn,btnID){
		var owner = btn.parent.parent;
		animateOut(owner);
	}	
	function oUp(btn,btnID){
		var owner = btn.parent.parent;
		//animateOut(owner);
	}
	
	function subButtons(owner,aBtns,selected, language){
		if (language==null) language = "EN";
		var options =  aBtns[language];   //array
		stot = options.length;
		owner.hostWL=null;
		var old=null;
		if (owner.submenu.currentMenu!=selected){
			owner.submenu.requestedMenu(selected);
			owner.submenu.removeAllBtns();
			var btn = new Button("back","back.png","back to menu",'back','#999',oBack);
			owner.submenu.addChild(btn);
			old=btn;
			for (var i =0;i<stot;++i){
				var opt=options[i];
				if ( !owner.subscriberWL[opt["name"]] || opt["name"] != selected)
					continue;
				var subs = opt["btns"][">"];
				stot = subs.length;
				for (var j=0; j < stot; ++j){
					btn = new Button(subs[j]["name"],subs[j]["icon"],subs[j]["hint"],subs[j]["name"],'#'+Math.floor(Math.random()*16777215).toString(16),oInvoke);
					if (old!=null){
						btn.x=0;
						btn.y=old.y+old.height+10;
					}else{
						btn.x=btn.y=0;
					}		
					btn.alpha=.5;
					owner.submenu.addChild(btn);
					old = btn;
				}
				break;
			}
			console.log(".........FINISHED ");
			owner.submenu.setSize(owner.menucontain.width,owner.menucontain.height,'#'+Math.floor(Math.random()*16777215).toString(16),true)
			owner.submenu.x=owner.menucontain.width;
			owner.submenu.scaleX=0;
		}
		animateIn(owner);
	}
	
	function animateOut(owner){
		createjs.Tween.get(owner.submenu, {override:true}).to({x: owner.menucontain.width, scaleX:0}, 250, createjs.Ease.quadIn);
		createjs.Tween.get(owner.menucontain, {override:true}).to({x: 0, scaleX:1}, 250, createjs.Ease.quadIn);
		console.log("----->OUT");
		console.log(owner);
		console.log(owner.hi_Y);
		if (owner.hi_Y!=0){
			var hi=owner.getChildByName("hi");
			createjs.Tween.get(hi, {override:true}).to({y:owner.hi_Y},250,createjs.Ease.quadIn);
		}
	}
	
	function animateIn(owner){
		createjs.Tween.get(owner.submenu, {override:true}).to({x:0,scaleX:1},250,createjs.Ease.quadIn);
		createjs.Tween.get(owner.menucontain, {override:true}).to({x:0, scaleX:.01},250,createjs.Ease.quadIn);
		console.log("----->IN");
		console.log(owner.hi_Y);
		if (owner.hi_Y!=0){
			var hi=owner.getChildByName("hi");
			createjs.Tween.get(hi, {override:true}).to({y:-20},250,createjs.Ease.quadIn);
		}
	}
		
	function oInvokeSub(btn,btnID){ 
		var m = btn.parent.parent;
		if (m.options==undefined){
			console.log("[E] submenu functions out of context. Please make sure function is delegated");
		}
		subButtons(m,m.options,btnID);
	}
	
	function getMainByBtn(owner,btn){
		var options =  owner.options["EN"];   //array
		tot = options.length;
		for (var i=0;i<tot;++i){
			var opt = options[i];
			var subs = opt["btns"][">"];
			if (subs != undefined){
				var stot = subs.length;
				for (var j=0;j<stot;++j){
					if(subs[j]["name"] == btn.name)	
					return [opt.name,btn.name];
				}
			}
		}
		return [btn.name];
	}
	
	function oInvoke(btn,btnID){
		//alert(" execute   function directly in controller for immediate or subMenu effect:: "+btnID);
		var owner = btn.parent.parent;
		console.log(btn.height);
		var hi=owner.getChildByName("hi");
		console.log(owner.submenu);
		var form="";
		var subType="";
		var mbtn;
		if (owner.submenu.currentMenu==""){
			form=btn.name;
			mbtn=btn;
		}else{
			mbtn=owner.menucontain.getChildByName(owner.submenu.currentMenu);
			var w=4;
			var types = getMainByBtn(owner,btn);
			if (types.length>1){
				form=types[0];
				subType=types[1];
			}
		}
		hi.x = owner.menucontain.x + owner.menucontain.width;
		owner.hi_Y = mbtn.y;
			//hi.y = mbtn.y;
		owner.setHiSize(w,mbtn.height,'#FF0000');
		console.log("---==>> ||>>  main:"+ form +"  sub:"+ subType);
		
		//owner.controller.drawinit(form,subType);
		
			console.log("........---------__bb__--->>>>>   event Controller>>>>>   ");
		var myevent = {
			 type: "MenuEvent",
			 param: [form,subType]
		   };
		owner.dispatchEvent(myevent);
		
		if (owner.submenu.x==0)
			animateOut(owner);
		
		//createjs.Tween.get(hi, {override:true}).to({y:-10},250,createjs.Ease.quadIn);
	}
	window.Menu = createjs.promote(Menu, "Container");
}());