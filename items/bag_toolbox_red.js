//#include include/takeable.js

var label = "Red Toolbox";
var version = "1352136668";
var name_single = "Red Toolbox";
var name_plural = "Red Toolboxes";
var article = "a";
var description = "A sturdy, metal-y, red toolbox. It's a box. And you can put tools in it.";
var is_hidden = false;
var has_info = true;
var has_infopage = true;
var proxy_item = null;
var is_routable = false;
var adjusted_scale = 1;
var stackmax = 1;
var base_cost = 2500;
var input_for = [];
var parent_classes = ["bag_toolbox_red", "bag_toolbox_base", "bag_bigger", "takeable"];
var has_instance_props = false;

var classProps = {
	"collection_id"	: "",	// defined by takeable
	"can_specialize"	: "false"	// defined by bag_bigger
};

var instancePropsDef = {};

var verbs = {};

verbs.sort_all = { // defined by bag_bigger
	"name"				: "Sort: All",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 50,
	"tooltip"			: "Remove specialization from this bag",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (this.getClassProp('can_specialize') == 'true' && pc.imagination_has_upgrade('pack_internal_sortitude')) return {state:'enabled'};

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		this.removeSpecialize(pc);
	}
};

verbs.sort_keys = { // defined by bag_bigger
	"name"				: "Sort: Keys",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 51,
	"tooltip"			: "Specialize this bag for keys",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (this.getClassProp('can_specialize') == 'true' && pc.imagination_has_upgrade('pack_internal_sortitude')){
			if (this.bag_category_tags == 'key') return {state:'disabled', reason:'This bag is currently sorted by keys'};
			return {state:'enabled'};
		}

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		this.doSpecialize(pc, 'Keys', 'key');
	}
};

verbs.sort_cards = { // defined by bag_bigger
	"name"				: "Sort: Cards",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 52,
	"tooltip"			: "Specialize this bag for upgrade cards",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (this.getClassProp('can_specialize') == 'true' && pc.imagination_has_upgrade('pack_internal_sortitude')){
			if (this.bag_category_tags == 'upgrade_card') return {state:'disabled', reason:'This bag is currently sorted by cards'};
			return {state:'enabled'};
		}

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		this.doSpecialize(pc, 'Cards', 'upgrade_card');
	}
};

verbs.sort_alchemy = { // defined by bag_bigger
	"name"				: "Sort: Alchemy",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 53,
	"tooltip"			: "Specialize this bag for compounds and powders",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (this.getClassProp('can_specialize') == 'true' && pc.imagination_has_upgrade('pack_internal_sortitude')){
			if (this.bag_category_tags == 'compound,powder') return {state:'disabled', reason:'This bag is currently sorted by alchemy goods'};
			return {state:'enabled'};
		}

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		this.doSpecialize(pc, 'Alchemy', 'compound,powder');
	}
};

verbs.sort_manufacturing = { // defined by bag_bigger
	"name"				: "Sort: Manufacturing",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 54,
	"tooltip"			: "Specialize this bag for ingredients and products of earth, cloth, fuel, wood and metal",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (this.getClassProp('can_specialize') == 'true' && pc.imagination_has_upgrade('pack_internal_sortitude')){
			if (this.bag_category_tags == 'earth,firebogproduct,advanced_resource,fiberarts,woodproduct') return {state:'disabled', reason:'This bag is currently sorted by manufacturing goods'};
			return {state:'enabled'};
		}

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		this.doSpecialize(pc, 'Manufacturing', 'earth,firebogproduct,advanced_resource,fiberarts,woodproduct');
	}
};

verbs.sort_mining = { // defined by bag_bigger
	"name"				: "Sort: Mining, etc.",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 55,
	"tooltip"			: "Specialize this bag for ore chunks, rock chunks and metal ingots",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (this.getClassProp('can_specialize') == 'true' && pc.imagination_has_upgrade('pack_internal_sortitude')){
			if (this.bag_category_tags == 'rock,metal,gem') return {state:'disabled', reason:'This bag is currently sorted by mining goods'};
			return {state:'enabled'};
		}

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		this.doSpecialize(pc, 'Mining, etc.', 'rock,metal,gem');
	}
};

verbs.sort_herbs = { // defined by bag_bigger
	"name"				: "Sort: Herbs, etc.",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 56,
	"tooltip"			: "Specialize this bag for herbs, herb seeds and tinctures",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (this.getClassProp('can_specialize') == 'true' && pc.imagination_has_upgrade('pack_internal_sortitude')){
			if (this.bag_category_tags == 'herb,herb_seed,tincture') return {state:'disabled', reason:'This bag is currently sorted by herbs'};
			return {state:'enabled'};
		}

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		this.doSpecialize(pc, 'Herbs, etc.', 'herb,herb_seed,tincture');
	}
};

verbs.sort_crops = { // defined by bag_bigger
	"name"				: "Sort: Crops, etc.",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 57,
	"tooltip"			: "Specialize this bag for crops and crop seeds",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (this.getClassProp('can_specialize') == 'true' && pc.imagination_has_upgrade('pack_internal_sortitude')){
			if (this.bag_category_tags == 'crop,seed') return {state:'disabled', reason:'This bag is currently sorted by crops'};
			return {state:'enabled'};
		}

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		this.doSpecialize(pc, 'Crops, etc.', 'crop,seed');
	}
};

verbs.sort_musicblocks = { // defined by bag_bigger
	"name"				: "Sort: Musicblocks",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 58,
	"tooltip"			: "Specialize this bag for musicblocks",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (this.getClassProp('can_specialize') == 'true' && pc.imagination_has_upgrade('pack_internal_sortitude')){
			if (this.bag_category_tags == 'musicblock') return {state:'disabled', reason:'This bag is currently sorted by musicblocks'};
			return {state:'enabled'};
		}

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		this.doSpecialize(pc, 'Musicblocks', 'musicblock');
	}
};

verbs.sort_emblems = { // defined by bag_bigger
	"name"				: "Sort: Emblems",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 59,
	"tooltip"			: "Specialize this bag for emblems",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (this.getClassProp('can_specialize') == 'true' && pc.imagination_has_upgrade('pack_internal_sortitude')){
			if (this.bag_category_tags == 'emblem') return {state:'disabled', reason:'This bag is currently sorted by emblems'};
			return {state:'enabled'};
		}

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		this.doSpecialize(pc, 'Emblems', 'emblem');
	}
};

verbs.sort_drinks = { // defined by bag_bigger
	"name"				: "Sort: Drinks",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 60,
	"tooltip"			: "Specialize this bag for drinks",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (this.getClassProp('can_specialize') == 'true' && pc.imagination_has_upgrade('pack_internal_sortitude')){
			if (this.bag_category_tags == 'drink') return {state:'disabled', reason:'This bag is currently sorted by drinks'};
			return {state:'enabled'};
		}

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		this.doSpecialize(pc, 'Drinks', 'drink');
	}
};

verbs.sort_food = { // defined by bag_bigger
	"name"				: "Sort: Food",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 61,
	"tooltip"			: "Specialize this bag for food",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (this.getClassProp('can_specialize') == 'true' && pc.imagination_has_upgrade('pack_internal_sortitude')){
			if (this.bag_category_tags == 'foodbonus') return {state:'disabled', reason:'This bag is currently sorted by food'};
			return {state:'enabled'};
		}

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		this.doSpecialize(pc, 'Food', 'foodbonus');
	}
};

verbs.sort_staples_ab = { // defined by bag_bigger
	"name"				: "Sort: Staples A+B",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 62,
	"tooltip"			: "Specialize this bag for Staples A and B",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (this.getClassProp('can_specialize') == 'true' && pc.imagination_has_upgrade('pack_internal_sortitude')){
			if (this.bag_category_tags == 'animalproduct,trantproduct') return {state:'disabled', reason:'This bag is currently sorted by both sets of staples'};
			return {state:'enabled'};
		}

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		this.doSpecialize(pc, 'Staples A+B', 'animalproduct,trantproduct');
	}
};

verbs.sort_staples_b = { // defined by bag_bigger
	"name"				: "Sort: Staples B",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 63,
	"tooltip"			: "Specialize this bag for Allspice, Plain Beans, Plain Bubbles, Cherries, Eggs, and General Vapour",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (this.getClassProp('can_specialize') == 'true' && pc.imagination_has_upgrade('pack_internal_sortitude')){
			if (this.bag_category_tags == 'trantproduct') return {state:'disabled', reason:'This bag is currently sorted by this set of staples'};
			return {state:'enabled'};
		}

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		this.doSpecialize(pc, 'Sort: Staples B', 'trantproduct');
	}
};

verbs.sort_staples_a = { // defined by bag_bigger
	"name"				: "Sort: Staples A",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 64,
	"tooltip"			: "Specialize this bag for Meat, Grain and Milk",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (this.getClassProp('can_specialize') == 'true' && pc.imagination_has_upgrade('pack_internal_sortitude')){
			if (this.bag_category_tags == 'animalproduct') return {state:'disabled', reason:'This bag is currently sorted by this set of staples'};
			return {state:'enabled'};
		}

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		this.doSpecialize(pc, 'Sort: Staples A', 'animalproduct');
	}
};

verbs.magic_sort = { // defined by bag_bigger
	"name"				: "magic sort",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 65,
	"tooltip"			: "Magically sort your items based on bag specialization",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if ((this.getClassProp('can_specialize') == 'true' || this.getCustomBagCategories) && pc.imagination_has_upgrade('pack_magic_sort')){
			if (this.getCustomBagCategories || (this.bag_categories && this.bag_categories.__length > 0)){
				return {state:'enabled'};
			}else{
				return {state:'disabled', reason:'This bag needs to be specialized before it can be magically sorted.'};
			}
		}

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		pc.sendActivity('You have sorted your bag quite magically!');
		pc.apiInventoryMagicSort(this);

		return true;
	}
};

verbs.stack_up = { // defined by bag_bigger
	"name"				: "stack up",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 66,
	"tooltip"			: "Finds all partial stacks in all your bags and cleans them up",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (pc.imagination_has_upgrade('pack_stack_up_bags')) return {state:'enabled'};

		return {state:null};
	},
	"handler"			: function(pc, msg, suppress_activity){

		pc.sendActivity('Your inventory has been stacked up!');
		pc.apiInventoryStackUp();

		return true;
	}
};

verbs.rename = { // defined by bag_bigger
	"name"				: "rename",
	"ok_states"			: ["in_location","in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 67,
	"tooltip"			: "Give me a new name",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		if (!this.isOnGround()) return {state:'enabled'};

		if (this.dropper && this.dropper != pc.tsid){
			var dropper = this.container.activePlayers[this.dropper];
			if (dropper && this.distanceFromPlayer(dropper) < 100){
				return {state:'disabled', reason: "You are not allowed to rename this."};
			}
			else{
				delete this.dropper;
				delete this.dropped_on;
			}
		}
			
		return {state:'enabled'};
	},
	"handler"			: function(pc, msg, suppress_activity){

		var args = {
			input_label: 'My new name:',
			cancelable: true,
			input_focus: true,
			input_max_chars: 32,
			input_restrict: 'A-Z a-z 0-9',

			itemstack_tsid: this.tsid,
		        follow:true
		};

		if (this.user_name) args.input_value = this.user_name;
		delete this.specialization_name;

		this.askPlayer(pc, 'name', 'Name Me!', args);
		return true;
	}
};

verbs.pickup = { // defined by takeable
	"name"				: "pick up",
	"ok_states"			: ["in_location"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 68,
	"tooltip"			: "Put it in your pack",
	"is_drop_target"		: false,
	"proximity_override"			: 800,
	"conditions"			: function(pc, drop_stack){

		return this.takeable_pickup_conditions(pc, drop_stack);
	},
	"handler"			: function(pc, msg, suppress_activity){

		return this.takeable_pickup(pc, msg);
	}
};

verbs.give = { // defined by takeable
	"name"				: "give",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: true,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 69,
	"tooltip"			: "Or, drag item to player",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		return this.takeable_give_conditions(pc, drop_stack);
	},
	"handler"			: function(pc, msg, suppress_activity){

		return this.takeable_give(pc, msg);
	}
};

verbs.drop = { // defined by takeable
	"name"				: "drop",
	"ok_states"			: ["in_pack"],
	"requires_target_pc"		: false,
	"requires_target_item"		: false,
	"include_target_items_from_location"		: false,
	"is_default"			: false,
	"is_emote"			: false,
	"sort_on"			: 70,
	"tooltip"			: "Drop it on the ground",
	"is_drop_target"		: false,
	"conditions"			: function(pc, drop_stack){

		return this.takeable_drop_conditions(pc, drop_stack);
	},
	"handler"			: function(pc, msg, suppress_activity){

		return this.takeable_drop(pc, msg);
	}
};

function canContain(stack){ // defined by bag_toolbox_base
	return stack.hasTag('tool') ? stack.count : 0;
}

function getCustomBagCategories(){ // defined by bag_toolbox_base
	return ['tool'];
}

function bag_bigger_canContain(stack){ // defined by bag_bigger
	return stack.getProp('is_bag') || stack.getProp('is_element') || stack.has_parent('furniture_base') || stack.hasTag('no_bag') ? 0  : stack.getProp('count');
}

function getLabel(){ // defined by bag_bigger
	if (this.user_name){
		return this.user_name;
	}

	return this.label;
}

function onCreate(){ // defined by bag_bigger
	this.is_pack = 0;
	this.capacity = 16;
}

function onInputBoxResponse(pc, uid, value){ // defined by bag_bigger
	value = value.substr(0, 32).replace(/[^a-z0-9 ]/gi,'');

	if (uid == 'name' && value){
		this.user_name = value;
	}
}

function getDescExtras(pc){
	var out = [];

	// automatically generated source information...
	out.push([2, "This can be purchased from a <a href=\"\/items\/1000005\/\" glitch=\"item|npc_streetspirit_hardware\">Hardware Vendor<\/a> or a <a href=\"\/items\/411\/\" glitch=\"item|npc_tool_vendor\">Tool Vendor<\/a>."]);
	return out;
}

var tags = [
	"bag",
	"no_rube"
];


// this is a temporary fix, while the client doesn't load item defs
// from the XML files. we pass this data on login events.

function getAssetInfo(){
	return {
		'position': {"x":-33,"y":-33,"w":65,"h":33},
		'thumb': "iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM\/rhtAAAIB0lEQVR42u3Y+VdTZxoHcP4DZ84Z\nFtnCkoQtIZCEVSAhwLApIIIoi2GRfZvRKYo6pOoZdaQYQStqwYBjpUUxKEqBokEBBVygpVqptbRq\ncehMh1\/m9+8895JAooLUYucX33PeA9xcks\/9Ps\/73iRmZu\/Gu\/FuvN1xp6ur\/G5Pp+7+9au6B306\n9Q93h1X\/\/W5C9JsBZs4ekk1Xpil\/3luk+qkqp3ym7q8yw2PDVzpUW\/JyZw5V7VTuKitRNdZUa5pr\n1ZNXzjRB19Y62tZ4fPmhM8f3iJ5nhSmnt6Zo\/7UzE\/\/MjcLzrPC5+WN+LB4eqMCD6kqderdqpi4x\nXH00RsExfo7CrAyZRl0zsyU\/d3RZcf\/+oEI5lR2JJxtW4QeaT1JD8DRDhqnMsDngWGEi9m3ehO2Z\n6dgeLcd4mpw9PpUVNjmhVGjp3PLnWaGykx8cLG86XIOC9FTVsuCmK7PVUwR6xuDWB2IyOQCPk\/zx\naJ0fJhJ9MUE\/H9Gx7zYG45ky1CTVhaa2TIlDqqqZQ0mR8VM7czhvBHscLlnxY2qwZmpjEJj5NCWQ\ngARJ9icgodb54uFaHzxIkGI8Towv13hjdLUX7sV64Ss6NsGcmxr8SuC3yjBUZqahpf4oujQnMVKS\nMnk\/M1I7XbBaxaT8n9YDK17fcx\/u0X69PgiPNwTjKaXDAL\/XA7+l1L5JnAXe1wO\/YICEuxMjwki0\nJ4aihBiMFKD\/jx4YoePjdP43KavwLFPBIsczwtCcGsPOlkQ5dElBJhcxlRk++jxboWFb48\/JspcT\nzItT347zwfAaKW6tluB2vC\/GaN5f68vimPk14RjglwQcI+A9PXA4WohbUQIMEq4\/wh3Xw12hC3NF\nr4KPHjkPfRFuGIoVYZwu9Pt02ZLa4qetKRhKD9edUbjNtsSjdIXKGDgYK0Z\/tDeuR4mgixShL9IT\ng9Ei3ImT4It4KcbY8opwO8YTw5TeTUpvQA\/sI+A1BhjKR7eMh89kXFwJdkZHkBMurnKk6YRrDJqe\n42FaCKbLElkUs1M82ZaB9hQFqqTOKOBZoIBrrmOBo3lJqkHCLQS8GiHE5+ECdId5oDPUHT30dx89\nNhDthWFKcojKzABv6IFXFS74\/AXgJYK1BzriQgAH5\/zt8amfLc762LCzg15LkxKBEoE9NnMtkcez\nRCEBi+lnEc+y3OznxhrVo9L1uJcdi5sJfuiNlaA3wnNB4GW5Gy7JXHExxBXaYD66woXQ0Yv0x3jT\nBYqhC3djgV2E6wxxxmVK7xKl1x7ogDY98BPfeWCDnyOyuRbIIVwuzXzCzQG5Fiqzx7SixhIDqIQ+\nGKEUh+Kk6I\/zRS+leTHKC+1ydxOg7r18nN+7E\/s3JmCHiF40iI9zgTx8EuCMs\/5USjq\/iy5qYDU9\nF7VEd6gLW16tHtjqZzcHvEgXUepu\/UpgCQFLuBZa6kE5C5zrw1jTMg+s8UE7QTsJ3BwpQffpRlw+\nrUFDTTXqdlehzNPRBHiGEvmHrwOafDg4JbGHlhLvof+\/Ri1xi8CdchcW2EpJahRCZBKOARrKW2AC\npD5kgHdo1bLpEeImAQdixLhBwD7jMtPsZV6o6STaNQ3ISknBnve2IkHIR2sgd0Fgg9gOJ71scVxk\ng4+87dAW6oYb8X4YTVWgwNUaWfr0jIElfEtUiZ1R6mE3C1wovT7CXaN+7CVcT5gAnevkGO7sYIGV\npcXYEREAtVyEU8EuOBHAxTExZ1HgMU9rHBVaoc7DEntdLaAknDEwx9kcf\/Kww188HZDHt2KO6cwm\nMhTqESrjoumxPSjA1cx4XL9wDr2tLfhbZQXWxcZgV5DXbB+u4uE89WgjpfmRvzMOi+1xghJbCPi+\nHmjovxJ3W2whWC7ParYfeZazwIdpMt0wAV+XXpfCA1civdDdcgb1f9\/HAjclJ6FKwsV5wrUGOpuU\n+eMAJ5yi348QtI6g1YKVJsBtfAu2\/4rcbFEu5CDfdX6x5OjLncsAv0oJ0i0lvc8YICXEJFi+OZsF\nxvpLsVtow6b3KeFaCPWxvsTNVOIm6XyZmxmsty1qvWygJmil20rkuNgg18WahWYZ4WZXM01mkdxN\n8NctJT3DHthcvR8bEuJxcNcOVLhaocHH4aX0DECN1B6NEjt2cZygMteLrOdS3O5qiU3c+T7MfmGx\n5LMbtvmo2Y0Y8eStJabXQcDDUYFYGyZHftoGHJM6LCk90x5ciSMCK5TxF8PNbjXMNHtfxBk9G+K+\npPQuydxwjhbEHqEtTRs0+znp03P6RekdEViiWN+DxjjDRm3YC4sYIDOyHS1ExS4r1Wpfp8nzdCdY\nKD3mFtce4sLe4gwr903SYxZJMe9lnPFGXcTe7vRA45Hq+DvODoFteb0vd7QtxM0kPcP99wLh5lfu\nL0uvjtKr9bBAmYuVyaJ4Fa6Uji36ZpbB7vW0L6\/zcRw9HcBbtvQOu1ugQmhvgjPuu2L2VkcX8Tqg\n8Uh2+v2KSg8b5UEvjvao1OFXpafWAzcvgmPSK+VaTr7R5xgGW0zYA4StldCmTMilpFerT+9DOr6N\ngK9aFCUszGKmjN5q5TmZrfjVnwYN2H1iB61a4oBTlODr0jsh4WA7AV\/GMQmaa4qptd7KtxAMNsvZ\nXKkS2Gr3i+xxjJAvpscAmwP5bHlNFgXdNQq5f5D9Zl+ZzGFFHO1+b3vUU2oMkgFu48\/jCqjPium8\n\/+sXTAZspchOW0igbHrHUupiOVOwXH223IO5MeS8rT57N96NZR7\/A\/VxWqcS9sARAAAAAElFTkSu\nQmCC",
	};
};

var itemDef = {
	label		: this.label,
	name_plural	: this.name_plural,
	stackmax	: this.stackmax,
	is_hidden	: this.is_hidden,
	has_info	: this.has_info,
	adjusted_scale	: this.adjusted_scale,
	asset_swf_v	: "http:\/\/c2.glitch.bz\/items\/2012-04\/bag_toolbox_red-1334339752.swf",
	admin_props	: false,
	obey_physics	: true,
	in_background	: false,
	in_foreground	: false,
	has_status	: false,
	not_selectable	: false,
};

if (this.consumable_label_single) itemDef.consumable_label_single = this.consumable_label_single;
if (this.consumable_label_plural) itemDef.consumable_label_plural = this.consumable_label_plural;

itemDef.verbs = {
};
itemDef.hasConditionalVerbs = 1;
itemDef.emote_verbs = {
};
itemDef.hasConditionalEmoteVerbs = 0;
itemDef.tags = [
	"bag",
	"no_rube"
];
itemDef.keys_in_location = {
	"p"	: "pickup",
	"e"	: "rename"
};
itemDef.keys_in_pack = {
	"r"	: "drop",
	"g"	: "give",
	"c"	: "magic_sort",
	"e"	: "rename",
	"o"	: "sort_alchemy",
	"t"	: "sort_all",
	"h"	: "sort_cards",
	"j"	: "sort_crops",
	"n"	: "sort_drinks",
	"k"	: "sort_emblems",
	"q"	: "sort_food",
	"u"	: "sort_herbs",
	"y"	: "sort_keys",
	"v"	: "sort_manufacturing",
	"x"	: "sort_mining",
	"z"	: "sort_musicblocks"
};

log.info("bag_toolbox_red.js LOADED");

// generated ok 2012-11-05 09:31:08 by mygrant
