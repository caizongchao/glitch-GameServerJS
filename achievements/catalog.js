var achievements = [
	"junior_ok_explorer",
	"senior_ok_explorer",
	"rambler_third_class",
	"rambler_second_class",
	"rambler_first_class",
	"wanderer",
	"world_class_traveler",
	"globetrotter_extraordinaire",
	"beginner_decoctifier",
	"chowhound",
	"junior_dough_puncher",
	"senior_dough_puncher",
	"seasoned_scullery_sleuth",
	"culinarian_supreme",
	"able_chopper",
	"fine_mincer",
	"nice_dicer",
	"silver_cleaver_award",
	"master_whacker",
	"decent_hash_slinger",
	"pretty_good_griddler",
	"grease_monkey",
	"saute_savant",
	"sizzler_supreme",
	"butterfly_whisperer",
	"brazier_apprentice",
	"grill_jockey",
	"master_carbonifier",
	"killer_griller",
	"broil_king",
	"rolling_boiler",
	"roux_guru",
	"gravy_maven",
	"super_saucier",
	"a1_saucier",
	"1star_cuisinartist",
	"2star_cuisinartist",
	"3star_cuisinartist",
	"4star_cuisinartist",
	"5star_cuisinartist",
	"golden_ladle_award",
	"dedicated_meataterian",
	"hardcore_carnivore",
	"silver_gristle_award",
	"golden_hock_award",
	"eggy_wegger",
	"local_yolkel",
	"outstanding_coddler",
	"golden_ovum_award",
	"gastro_gnome",
	"glutton_for_nourishment",
	"bonbon_vivant",
	"noted_epicure",
	"gourmand_supreme",
	"promising_lush",
	"hollow_leg_award",
	"certified_boozehound",
	"superior_mixologist",
	"middling_mixologist",
	"mediocre_mixologist",
	"blendmaster",
	"high_speed_commingler",
	"pulse_frappe_mix_blend",
	"collection_gems",
	"collection_bubbles",
	"collection_musicblocks_db",
	"collection_musicblocks_dg",
	"collection_musicblocks_dr",
	"collection_musicblocks_xs",
	"collection_gasses",
	"collection_spices",
	"collection_fruits",
	"spice_examiner",
	"make_a_crab_happy",
	"mad_gasser",
	"first_alph_emblem",
	"first_cosma_emblem",
	"first_friendly_emblem",
	"first_grendaline_emblem",
	"first_humbaba_emblem",
	"first_lem_emblem",
	"first_mab_emblem",
	"first_pot_emblem",
	"first_spriggan_emblem",
	"first_ti_emblem",
	"first_zille_emblem",
	"all_giant_emblems",
	"chicken_tender",
	"piggy_nibbler",
	"pork_fondler",
	"swine_snuggler",
	"hoochmeister",
	"aftershock_award",
	"firetongue_award",
	"nervous_belch_award",
	"protein_time",
	"cheesemongerer",
	"basic_beangrower",
	"whizbang_plantifier",
	"johnny_anyseed",
	"soso_sower",
	"amateur_agronomist",
	"notsogrim_reaper",
	"ace_propagationist",
	"mulcher",
	"betterthanaverage_mulcher",
	"pretty_fine_mulcher",
	"mighty_fine_mulcher",
	"fecundationist",
	"novice_precipitator",
	"secondrate_rainmaker",
	"firstrate_rainmaker",
	"h2oh_award",
	"superior_irrigationist",
	"golden_shower_award",
	"ok_hewer",
	"creditable_delver",
	"serious_scrabbler",
	"master_blaster",
	"shiny_nugget_award",
	"clumsy1",
	"darwin_award_winner",
	"necromonger",
	"zombie",
	"dracula",
	"pennypincher",
	"moneybags",
	"lovable_skinflint",
	"fine_friend",
	"good_buddy",
	"jolly_good_chap",
	"a1_comrade",
	"best_pal",
	"gumflapper",
	"chatterbox",
	"competent_windbag",
	"garrulous_prolixificator",
	"coat_of_open_arms",
	"decent_citizen",
	"pretty_good_samaritan",
	"noble_philanthropizer",
	"unconfounded_compounder",
	"really_unconfounded_compounder",
	"loyal_alloyer",
	"fertilivert",
	"sneezeorama",
	"critter_catalyzer",
	"sparkle_buddy",
	"dragon_chaser",
	"hallowed_be_shrine_name",
	"entrylevel_admixificator",
	"midlevel_admixificator",
	"senior_admixificator",
	"apprentice_lepidopteral_manipulator",
	"practical_lepidopteral_manipulator",
	"master_lepidopteral_manipulator",
	"nighmystical_lepidopteral_manipulator",
	"basic_larva_lover",
	"intermediate_larva_lover",
	"advanced_larva_lover",
	"all_right_hatcher",
	"best_nester",
	"incubator_par_eggcellence",
	"hen_hugger",
	"hen_hugger_deluxe",
	"hen_hugger_supremalicious",
	"the_hugginator",
	"pullet_provenderizer",
	"capon_caterer",
	"bacon_biter",
	"ham_hocker",
	"transrational_meat_aficionado",
	"pork_petter_extraordinaire",
	"3rd_rate_piggy_hash_slinger",
	"2nd_rate_piggy_piggy_hash_slinger",
	"piggy_hash_slinger_1st_class",
	"bubble_tea_aficionado",
	"nouveau_whack_job",
	"regular_whack_job",
	"whack_job_deluxe",
	"whack_job_extraordinaire",
	"paul_bunions",
	"bubble_coaxer",
	"novice_fruit_metamorphosizer",
	"spice_intern",
	"gas_dabbler",
	"beanorator_2nd_class",
	"egg_transmutator_apprentice",
	"effervescence_consultant",
	"intermediate_fruit_metamorphosizer",
	"assistant_spice_manager",
	"bonafide_gas_wrangler",
	"beanorator_1st_class",
	"egg_transmutator_pro",
	"generalissimo_beanorator",
	"egg_transmutator_maxipro",
	"bubble_transubstantiator",
	"fruit_metamorphosizin_tycoon",
	"executive_in_charge_of_spice_reformatation",
	"gastronaut",
	"participant_award__bean_division",
	"egg_enthusiast",
	"good_bubble_farmer",
	"entrylevel_fruit_tree_harvester",
	"novice_spice_collector",
	"occasional_gas_fancier",
	"bean_counter",
	"egg_poacher",
	"better_bubble_farmer",
	"midmanagement_fruit_tree_harvester",
	"intermediate_spice_collector",
	"hobbyist_gas_fancier",
	"bean_counter_pro",
	"egg_aficianado",
	"secondbest_bubble_farmer",
	"overpaid_executive_fruit_tree_harvester",
	"advanced_spice_collector",
	"dedicated_gas_fancier",
	"master_bean_counter",
	"egg_freak",
	"firstbest_bubble_farmer",
	"president_and_ceo_of_fruit_tree_harvesting_inc",
	"master_overlord_of_the_spice_dominion",
	"obsessive_gas_fancier",
	"okbutneedsimprovement_tree_hugger",
	"amateur_bean_tree_fondler",
	"egg_plant_coddler",
	"rookie_bubble_tree_cuddler",
	"newbie_fruit_tree_pettifier",
	"tentative_petter",
	"sprout_stroker",
	"decent_tree_hugger",
	"notquitepro_bean_tree_fondler",
	"supreme_egg_plant_coddler",
	"midlevel_bubble_tree_cuddler",
	"betterthanmediocre_fruit_tree_pettifier",
	"confident_petter",
	"bush_whacker",
	"super_supreme_egg_plant_coddler",
	"gettingthere_tree_hugger",
	"professional_bean_tree_fondler",
	"chief_bubble_tree_cuddler",
	"masterful_fruit_tree_pettifier",
	"heavy_petter",
	"shrub_snuggler",
	"extremely_promising_tree_hugger",
	"definitelymuchbetter_tree_hugger",
	"finallyprettygood_tree_hugger",
	"rainmaking_noob",
	"junior_irrigationist",
	"water_wings",
	"ok_soaker",
	"beginner_drizzler",
	"little_squirt",
	"betterthanlousy_douser",
	"about_average_irrigationist",
	"senor_sprinkles",
	"super_soaker",
	"big_splasher",
	"wet_william",
	"the_dampinator",
	"compulsive_moisturizer",
	"the_saturator",
	"super_duper_soaker",
	"the_hydrophile",
	"mayor_of_sprayerville",
	"fledgling_crest_collector",
	"significant_insignia_collector",
	"fancy_medal_fancier",
	"crest_connoisseur",
	"novice_novitiate",
	"soso_supplicator",
	"highranking_supplicant",
	"shriner_fortyniner",
	"major_player",
	"minor_refiner_green_class",
	"fine_refiner_green_class",
	"pretty_fine_refiner_green_class",
	"exceptionally_fine_refiner_green_class",
	"minor_refiner_blue_class",
	"fine_refiner_blue_class",
	"pretty_fine_refiner_blue_class",
	"exceptionally_fine_refiner_blue_class",
	"minor_refiner_red_class",
	"fine_refiner_red_class",
	"pretty_fine_refiner_red_class",
	"exceptionally_fine_refiner_red_class",
	"minor_refiner_shiny_class",
	"fine_refiner_shiny_class",
	"pretty_fine_refiner_shiny_class",
	"exceptionally_fine_refiner_shiny_class",
	"stalker_noncreepy_designation",
	"glitch_train",
	"hanky_splanky",
	"tinker_trainee_kitchen_division",
	"assistant_to_the_mending_manager_kitchen_division",
	"senior_mending_manager_kitchen_division",
	"executive_flunky_tinkering_ops",
	"chief_of_tinkering_operations",
	"special_agent_tinkering_ops",
	"grand_poobah_tinkering_ops",
	"homesteader",
	"big_spender",
	"el_big_spenderino",
	"moneybags_magoo",
	"trader_joe",
	"trader_vic",
	"trader_carl",
	"emblem_skill_unlock_alph_1",
	"emblem_skill_unlock_cosma_1",
	"emblem_skill_unlock_friendly_1",
	"emblem_skill_unlock_grendaline_1",
	"emblem_skill_unlock_humbaba_1",
	"emblem_skill_unlock_lem_1",
	"emblem_skill_unlock_mab_1",
	"emblem_skill_unlock_pot_1",
	"emblem_skill_unlock_spriggan_1",
	"emblem_skill_unlock_ti_1",
	"emblem_skill_unlock_zille_1",
	"collection_street_creator_dirt",
	"collection_street_creator_wood",
	"collection_street_creator_rock",
	"collection_street_creator_earth",
	"collection_all_emblems",
	"firefly_whistling",
	"card_carrying_qualification",
	"you_have_papers",
	"impossible_achievement",
	"collection_egg_hunter",
	"tower_secret_areas",
	"collection_musicblocks_bb",
	"collection_cubimals",
	"constable_coppersmith",
	"sergeant_coppersmith",
	"chief_inspector_coppersmith",
	"heavy_metallurgist",
	"thrash_metallurgist",
	"death_metallurgist",
	"starter_for_tinsmithery",
	"middling_tinsmitherer",
	"top_tinsmith",
	"bounder_untenured",
	"leapist",
	"bounder_tenured",
	"trainee_tree_medic",
	"qualified_botanical_health_professional",
	"respected_tree_doctor",
	"world_class_tree_surgeon",
	"numismatizer_leprechaun_class",
	"numismatizer_gryphon_class",
	"numismatizer_dragon_class",
	"plain_crystallizer",
	"amorphous_crystallizer",
	"polymorphous_crystallizer",
	"perseverating_dipsomaniac",
	"groddle_forest_completist",
	"groddle_heights_completist",
	"groddle_meadows_completist",
	"shimla_mirch_completist",
	"chakra_phool_completist",
	"jethimadh_completist",
	"alakol_completist",
	"bortola_completist",
	"ilmenskie_caverns_completist",
	"ilmenskie_deeps_completist",
	"uralia_completist",
	"kajuu_completist",
	"andra_completist",
	"baqala_completist",
	"zhambu_completist",
	"choru_completist",
	"amateur_decrustifier",
	"decrustifying_enthusiast",
	"semi_pro_decrustifier",
	"big_league_decrustifier",
	"bigger_league_decrustifier",
	"shovel_jockey",
	"dirt_monkey",
	"loamist",
	"dirtomancer",
	"dirt_diggler",
	"pretty_fly_flycatcher",
	"wannabe_fly_flycatcher",
	"supafly_flycatcher",
	"somewhat_fly_flycatcher",
	"slime_harvester",
	"goo_getter",
	"sac_bagger",
	"glop_grappler",
	"gloopmeister",
	"paper_plucker",
	"sheet_snatcher",
	"pad_pincher",
	"parchment_purloiner",
	"re_peater",
	"compulsive_re_peater",
	"obsessive_compulsive_re_peater",
	"feat_of_peat_excellence",
	"saint_peater",
	"wood_wacker",
	"timber_jack",
	"loggerator",
	"wood_abettor",
	"lumber_lover",
	"timber_nut",
	"ace_of_om",
	"harmony_hound",
	"full_time_swami",
	"master_of_internal_emptiness",
	"participant",
	"interested_party",
	"team_player",
	"project_enthusiast",
	"up_n_comer",
	"deeply_concerned_citizen",
	"odd_jobber",
	"chore_buff",
	"elbow_grease_monkey",
	"workaholist",
	"head_honcho",
	"forgey_laforge",
	"crucible_jockey",
	"metal_masseuse",
	"metalhead",
	"hephaestite",
	"subwayfarer",
	"ground_hogger",
	"commuter_mug",
	"chute_jockey",
	"licenced_teleporter_pfft_class",
	"licenced_teleporter_whoa_class",
	"unlicensed_teleporter_z_class",
	"unlicensed_teleporter_g_class",
	"unlicensed_teleporter_n_class",
	"unlicenced_teleporter_f_class",
	"licensed_super_gragarious_glitch_beamer",
	"licensed_teleporter_gee_class",
	"toolie_apprentice",
	"toolwright",
	"toolsmith",
	"tool_artiste",
	"total_tool",
	"twinkle_toed_trap_triggerer",
	"dust_busting_trigger_trappist",
	"trigger_happy_trap_duster",
	"slippery_customer",
	"jammy_dodger",
	"right_honorable_robber_ducker",
	"haughty_culturist",
	"mixed_herbalist",
	"aggressive_agrarian",
	"multi_cultivator",
	"awesome_apothecary",
	"uberculturalist",
	"ranger_of_the_nights_watch",
	"knight_of_the_kingsguard",
	"kingslayer",
	"hand_of_the_king",
	"monarch_of_the_seven_kingdoms",
	"order_of_the_rearing_piggy",
	"order_of_the_chicken_dormant",
	"order_of_the_dragon_sejant",
	"order_of_the_unicorn_salient",
	"order_of_the_manatee_rampant",
	"ix_completist",
	"the_imp",
	"order_of_the_butterfly_passant",
	"ascended",
	"ascended_level11",
	"ascended_level23",
	"ascended_level41",
	"ascended_level61",
	"ascended_level31",
	"ascended_level83",
	"ascended_level101",
	"super_awesome_intern_hburger",
	"xalanga_completist",
	"kalavana_completist",
	"muufo_completist",
	"eleven_secret_locations",
	"ice_cruncher",
	"tamila_completist",
	"besara_completist",
	"salatu_completist",
	"pollokoo_completist",
	"callopee_completist",
	"aranna_completist",
	"ormonos_completist",
	"lida_completist",
	"pumpkin_carver",
	"lanternerer",
	"candy_muncher",
	"candy_snaffler",
	"candy_nommer",
	"candy_caner",
	"candy_stripper",
	"mini_tricksy_treater",
	"minor_tricksy_treater",
	"major_tricksy_treater",
	"super_tricksy_treater",
	"the_candyglitch",
	"naraka_completist",
	"moonshiner",
	"rumrunner",
	"hoochhawker",
	"bootleg_facilitator",
	"captain_of_the_anti_temperance_league",
	"dandy_tincturer",
	"crackpot_infuser",
	"enchanting_extractorator",
	"elementary_penguin",
	"hairball_gonzales",
	"rook_ranger",
	"moste_potente_potioning_medal",
	"slughorn_medallion",
	"jiggers_ribbon",
	"severus_sash",
	"libatious_borage_award",
	"potion_patron",
	"elixir_enthusiast",
	"philter_fiend",
	"libation_lover",
	"potionographer",
	"rasana_completist",
	"giant_lover",
	"confounder_of_logic",
	"brillah_completist",
	"tahli_completist",
	"pop_star",
	"haraiva_completist",
	"fox_brushing_license",
	"sura_completist",
	"cauda_completist",
	"fenneq_completist",
	"folivoria_completist",
	"collection_cubimals_2",
	"chairman_of_the_board",
	"post_master",
	"hill_of_beams",
	"bar_fly",
	"girder_herder",
	"noisebringer",
	"curious_george",
	"friend_of_the_urth",
	"gas_guzzler",
	"bowser",
	"spin_doctor",
	"string_practicioner",
	"seamster",
	"novice_furniturer",
	"professional_furniturerer",
	"master_furniturererer",
	"honourable_chairperson",
	"framer_ranger",
	"court_hoarder",
	"captain_tchotchke",
	"corporate_cabinetmaker",
	"into_the_light",
	"domestic_completist",
	"better_homes_and_gardens",
	"order_of_the_hoarder",
	"aspirational_home_improver",
	"inspirational_home_improver",
	"happy_foxbrusher",
	"delirious_foxbrusher",
	"maniacal_foxbrusher",
	"fox_tourist",
	"fleet_foxer",
	"cunning_like_a_foxbrusher",
	"fox_flurrier",
	"circle_crunch",
	"sloth_stuffer",
	"common_snail_collector",
	"dedicated_snail_getter",
	"giant_snail_lander",
	"showered_with_sloth_dribble",
	"bathed_in_sloth_slobber",
	"first_series_releaser",
	"second_series_liberator",
	"friend_of_cubimals",
	"hero_of_the_cubimals",
	"cubimal_emancipationist",
	"landgrabber",
	"crowded_house",
	"house_party",
	"epic_blowout",
	"humble_bragger",
	"good_neighbour",
	"quiet_tragedy",
	"self_sufficientiser",
	"healthy_img_turnover",
	"raking_in_the_img",
	"the_kindness_of_strangers",
	"cultivation_nurturer",
	"restorer_of_stuff",
	"make_do_and_mender",
	"loyal_tender",
	"dedicated_restorationizer",
	"barman_of_death",
	"sociable_susan",
	"affable_anthony",
	"gregarious_gunther",
	"hot_rodmaker",
	"philanthropic_member_of_the_social_construct",
	"balzare_completist",
	"roobrik_completist",
	"loneliness_of_the_long_distance_cubimal",
	"the_swarm",
	"first_eleven_skills",
	"kloro_completist",
	"haoma_completist",
	"massadoe_completist",
	"karnata_completist",
	"firozi_completist",
	"jal_completist",
	"nottis_completist",
	"vantalu_completist",
	"feat_first",
	"five_feat_under",
	"feater_of_glory",
	"featist_of_renown",
	"super_featy",
	"famous_featologist",
	"epic_hero",
	"epic_poet",
	"epic_urian",
	"covered_in_epic_win",
	"order_of_the_third_otter",
	"order_of_the_seventh_seal",
	"the_cigar",
	"quick_on_your_feat",
	"down_to_the_wire",
	"student_of_artifactology",
	"qualified_artifactologist",
	"bead_threader",
	"threader_of_renown",
	"social_butterfly",
	"member_of_hi_society",
	"hi_and_mighty",
	"hi_baller",
	"hi_priest",
	"master_of_the_hi_coup",
	"hi_flyer",
	"ice_baby",
	"ice_ice_baby",
	"on_thin_ice",
	"cold_as_ice",
	"icebreaker",
	"rainbow_taster",
	"rainbow_brite",
	"rainbow_connection",
	"walking_frozed",
	"hi_speed_chase",
	"hi_as_a_kite",
	"hi_velocity",
	"daily_hi_skipper",
	"social_hi_skipper",
	"antisocial_hi_skipper",
	"long_distance_hi_skipper",
	"endurance_hi_skipper",
	"samudra_completist",
	"drifa_completist",
];
