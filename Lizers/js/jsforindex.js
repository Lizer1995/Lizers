// JavaScript Document
$(document).ready(function(){
	$("#left").mouseover(function(){
		 $(this).animate({width:"280"},500);
		 $(this).css("box-shaow","-4px","-4px","10px","#333399");
	});
	$("#left").mouseout(function(){
		 $(this).animate({width:'243'},500);
	});
	$("#left").click(function(){
		 document.location="./html5.html";
	});
	
	$("#center").mouseover(function(){
		 $(this).animate({width:"310"},500);
		 $(this).css("box-shaow","-4px","-4px","10px","#333399");
	});
	$("#center").mouseout(function(){
		 $(this).animate({width:'275'},500);
	});
	$("#center").click(function(){
		 document.location="http://www.baidu.com";
	});
	
	$("#right").mouseover(function(){
		 $(this).animate({width:"280"},500);
		 $(this).css("box-shaow","-4px","-4px","10px","#333399");
	});
	$("#right").mouseout(function(){
		 $(this).animate({width:'243'},500);
	});
	$("#right").click(function(){
		 document.location="http://www.baidu.com";
	});
});



		
