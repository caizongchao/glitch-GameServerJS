var name		= "Golden Hock Award";
var collection_type	= 0;
var is_secret		= 0;
var desc		= "Wolfed down 503 meats";
var status_text		= "Good lard! You've wolfed down a lot of meat. You are hereby awarded our highest honor: the coveted Golden Hock Award.";
var last_published	= 1348798841;
var is_shareworthy	= 1;
var url		= "golden-hock-award";
var category		= "player";
var url_swf		= "http:\/\/c2.glitch.bz\/achievements\/2011-05-09\/golden_hock_award_1304983518.swf";
var url_img_180		= "http:\/\/c2.glitch.bz\/achievements\/2011-05-09\/golden_hock_award_1304983518_180.png";
var url_img_60		= "http:\/\/c2.glitch.bz\/achievements\/2011-05-09\/golden_hock_award_1304983518_60.png";
var url_img_40		= "http:\/\/c2.glitch.bz\/achievements\/2011-05-09\/golden_hock_award_1304983518_40.png";
function on_apply(pc){
	
}
var conditions = {
	55 : {
		type	: "counter",
		group	: "items_eaten",
		label	: "meat",
		value	: "503"
	},
};
function onComplete(pc){ // generated from rewards
	var multiplier = pc.buffs_has('gift_of_gab') ? 1.2 : pc.buffs_has('silvertongue') ? 1.05 : 1.0;
	multiplier += pc.imagination_get_achievement_modifier();
	if (/completist/i.exec(this.name)) { 
		 var level = pc.stats_get_level(); 
		 if (level > 4) {  
				multiplier *= (pc.stats_get_level()/4); 
		} 
	} 
	pc.stats_add_xp(round_to_5(600 * multiplier), true);
	pc.stats_add_favor_points("pot", round_to_5(125 * multiplier));
	if(pc.buffs_has('gift_of_gab')) {
		pc.buffs_remove('gift_of_gab');
	}
	else if(pc.buffs_has('silvertongue')) {
		pc.buffs_remove('silvertongue');
	}
}
var rewards	= {
	"xp"	: 600,
	"favor"	: {
		"giant"		: "pot",
		"points"	: 125
	}
};

//log.info("golden_hock_award.js LOADED");

// generated ok (NO DATE)
