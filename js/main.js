var figure = {//每个段落用<p></p>包起来
	0: '<p>oL的召唤师拥有很多MMORPG网游中才会出现的天赋系统，在召唤者信息面板中点击天赋就可以看到3系天赋树。每系的终极天赋均为21点，召唤师等级每提升1级，就可以多获得一点天赋点，用以自由学习天赋，最多为30点，召唤师的天赋并非是固定的，根据你选择控制的英雄不同，你需要修改天赋以适应召唤师的需要，点击界面右下方的“重置天赋点”可以进行洗点。</p><p>oL的召唤师拥有很多MMORPG网游中才会出现的天赋系统，在召唤者信息面板中点击天赋就可以看到3系天赋树。每系的终极天赋均为21点，召唤师等级每提升1级，就可以多获得一点天赋点，用以自由</p><p>oL的召唤师拥有很多MMORPG网游中才会出现的天赋系统，在召唤者信息面板中点击天赋就可以看到3系天赋树。每系的终极天赋均为21点，召唤师等级每提升1级，就可以多获得一点天赋点，用以自由</p><p>oL的召唤师拥有很多MMORPG网游中才会出现的天赋系统，在召唤者信息面板中点击天赋就可以看到3系天赋树。每系的终极天赋均为21点，召唤师等级每提升1级，就可以多获得一点天赋点，用以自由</p>',
	1: '<p>1</p>',
	2: '<p>2</p>',
	3: '<p>3</p>',
	4: '<p>4</p>',
	5: '<p>5</p>',
	6: '<p>6</p>',
	7: '<p>7</p>',
	8: '<p>8</p>',
	9: '<p>9</p>',
	10: '<p>10</p>',
	11: '<p>11</p>',
	12: '<p>12</p>',
};
var sword = window.sword || {};
(function () {
	sword = {
		swiptInit: function() {
			var self = this;
			window.mySwipe = Swipe(document.getElementById('swipe'), {
				startSlide: 0,
				speed: 400,
				auto: 3000,
				continuous: true,
				disableScroll: false,
				stopPropagation: false,
				callback: function(pos) {
					var i = bullets.length;
					while (i--) {
						bullets[i].className = ' ';
					}
					bullets[pos].className = 'on';
				}
			});
			var bullets = document.getElementById('position').getElementsByTagName('li');
		},
		openTab: function (index) {
			var tab_items = $('.tab_detail_item');
			if(index){
				index = Number(index);
				var tab_item = tab_items.eq(index);
			}else{
				var tab_item = tab_items.eq(0);
			}
			tab_items.removeClass('active').addClass('hidden');
			tab_item.removeClass('hidden').addClass('active');
			$('.light_box').removeClass('hidden');
			$('.light_model').removeClass('hidden');
		},
		closeTab: function () {
			$('.tab_detail_item').removeClass('active').addClass('hidden');
			$('.light_box').addClass('hidden');
			$('.light_model').addClass('hidden');
		},
		showFigure: function (index) {
			var index = Number(index)
			var text = figure[index];
			$('.figure_img').attr('src', 'img/figure/figure_' + index + '.png')
			$('.figure_main').html(text);
			$('.figure_detail').removeClass('hidden');
		},
		showList: function () {
			
		}
	};
	$('.figure_item_btn').on('click', function () {
		var index = $(this).attr('index');
		sword.openTab(index)
	});
	$('.tab_item').on('click',function () {
		var type = $(this).attr('type');
		$('.tab_detail_item').addClass('hidden').removeClass('active');
		$('#' + type + '_item').removeClass('hidden').addClass('active');
		$('.figure_list').removeClass('hidden');
		$('.figure_detail').addClass('hidden');
	});
	$('.light_model_close').on('click',function () {
		sword.closeTab();
	});
	$('.figure_list_item').on('click',function(){
		$(this).closest('.figure_list').addClass('hidden');
		var index = $(this).attr('index');
		sword.showFigure(index);
	});
	$('.figure_detail').on('click', function () {
		$(this).addClass('hidden');
		$('.figure_list').removeClass('hidden');
	})
})();







