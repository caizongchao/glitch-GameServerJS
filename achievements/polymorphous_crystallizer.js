var name		= "Polymorphous Crystallizer";
var collection_type	= 0;
var is_secret		= 0;
var desc		= "Made 251 Plain Crystals";
var status_text		= "We're not exactly sure what the title Polymorphous Crystallizer even means. All we know is that we give it out any time someone creates their 251st Plain Crystal. So, um, here's yours.";
var last_published	= 1348802227;
var is_shareworthy	= 1;
var url		= "polymorphous-crystallizer";
var category		= "alchemy";
var url_swf		= "http:\/\/c2.glitch.bz\/achievements\/2011-09-10\/polymorphous_crystallizer_1315685882.swf";
var url_img_180		= "http:\/\/c2.glitch.bz\/achievements\/2011-09-10\/polymorphous_crystallizer_1315685882_180.png";
var url_img_60		= "http:\/\/c2.glitch.bz\/achievements\/2011-09-10\/polymorphous_crystallizer_1315685882_60.png";
var url_img_40		= "http:\/\/c2.glitch.bz\/achievements\/2011-09-10\/polymorphous_crystallizer_1315685882_40.png";
function on_apply(pc){
	
}
var conditions = {
	481 : {
		type	: "counter",
		group	: "crystallizer",
		label	: "crystalmalize",
		value	: "251"
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
	pc.stats_add_xp(round_to_5(800 * multiplier), true);
	pc.stats_add_favor_points("ti", round_to_5(175 * multiplier));
	if(pc.buffs_has('gift_of_gab')) {
		pc.buffs_remove('gift_of_gab');
	}
	else if(pc.buffs_has('silvertongue')) {
		pc.buffs_remove('silvertongue');
	}
}
var rewards	= {
	"xp"	: 800,
	"favor"	: {
		"giant"		: "ti",
		"points"	: 175
	}
};

//log.info("polymorphous_crystallizer.js LOADED");

// generated ok (NO DATE)
