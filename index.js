sessionStorage.clear();

const data = [
	["Afghanistan", "South Asia", "https://data.un.org/common/flags/afg_flag.png"],
	["Albania", "Europe and Central Asia", "https://data.un.org/common/flags/alb_flag.png"],
	["Algeria", "Middle East and North Africa", "https://data.un.org/common/flags/dza_flag.png"],
	["American Samoa", "East Asia and Pacific", "https://data.un.org/common/flags/asm_flag.png"],
	["Andorra", "Europe and Central Asia", "https://data.un.org/common/flags/and_flag.png"],
	["Angola", "Sub-Saharan Africa", "https://data.un.org/common/flags/ago_flag.png"],
	["Antigua and Barbuda", "Latin America and Caribbean", "https://data.un.org/common/flags/atg_flag.png"],
	["Argentina", "Latin America and Caribbean", "https://data.un.org/common/flags/arg_flag.png"],
	["Armenia", "Europe and Central Asia", "https://data.un.org/common/flags/arm_flag.png"],
	["Aruba", "Latin America and Caribbean", "https://data.un.org/common/flags/abw_flag.png"],
	["Australia", "East Asia and Pacific", "https://data.un.org/common/flags/aus_flag.png"],
	["Austria", "Europe and Central Asia", "https://data.un.org/common/flags/aut_flag.png"],
	["Azerbaijan", "Europe and Central Asia", "https://data.un.org/common/flags/aze_flag.png"],
	["Bahamas, The", "Latin America and Caribbean", "https://data.un.org/common/flags/bhs_flag.png"],
	["Bahrain", "Middle East and North Africa", "https://data.un.org/common/flags/bhr_flag.png"],
	["Bangladesh", "South Asia", "https://data.un.org/common/flags/bgd_flag.png"],
	["Barbados", "Latin America and Caribbean", "https://data.un.org/common/flags/brb_flag.png"],
	["Belarus", "Europe and Central Asia", "https://data.un.org/common/flags/blr_flag.png"],
	["Belgium", "Europe and Central Asia", "https://data.un.org/common/flags/bel_flag.png"],
	["Belize", "Latin America and Caribbean", "https://data.un.org/common/flags/blz_flag.png"],
	["Benin", "Sub-Saharan Africa", "https://data.un.org/common/flags/ben_flag.png"],
	["Bermuda", "Latin America and Caribbean", "https://data.un.org/common/flags/bmu_flag.png"],
	["Bhutan", "South Asia", "https://data.un.org/common/flags/btn_flag.png"],
	["Bolivia", "Latin America and Caribbean", "https://data.un.org/common/flags/bol_flag.png"],
	["Bosnia and Herzegovina", "Europe and Central Asia", "https://data.un.org/common/flags/bih_flag.png"],
	["Botswana", "Sub-Saharan Africa", "https://data.un.org/common/flags/bwa_flag.png"],
	["Brazil", "Latin America and Caribbean", "https://data.un.org/common/flags/bra_flag.png"],
	["British Virgin Islands", "Latin America and Caribbean", "https://data.un.org/common/flags/vgb_flag.png"],
	["Brunei Darussalam", "East Asia and Pacific", "https://data.un.org/common/flags/brn_flag.png"],
	["Bulgaria", "Europe and Central Asia", "https://data.un.org/common/flags/bgr_flag.png"],
	["Burkina Faso", "Sub-Saharan Africa", "https://data.un.org/common/flags/bfa_flag.png"],
	["Burundi", "Sub-Saharan Africa", "https://data.un.org/common/flags/bdi_flag.png"],
	["Cabo Verde", "Sub-Saharan Africa", "https://data.un.org/common/flags/cpv_flag.png"],
	["Cambodia", "East Asia and Pacific", "https://data.un.org/common/flags/khm_flag.png"],
	["Cameroon", "Sub-Saharan Africa", "https://data.un.org/common/flags/cmr_flag.png"],
	["Canada", "Latin America and Caribbean", "https://data.un.org/common/flags/can_flag.png"],
	["Cayman Islands", "Latin America and Caribbean", "https://data.un.org/common/flags/cym_flag.png"],
	["Central African Republic", "Sub-Saharan Africa", "https://data.un.org/common/flags/caf_flag.png"],
	["Chad", "Sub-Saharan Africa", "https://data.un.org/common/flags/tcd_flag.png"],
	["Chile", "Latin America and Caribbean", "https://data.un.org/common/flags/chl_flag.png"],
	["China", "East Asia and Pacific", "https://data.un.org/common/flags/chn_flag.png"],
	["Colombia", "Latin America and Caribbean", "https://data.un.org/common/flags/col_flag.png"],
	["Comoros", "Sub-Saharan Africa", "https://data.un.org/common/flags/com_flag.png"],
	["Congo, Dem. Rep.", "Sub-Saharan Africa", "https://data.un.org/common/flags/cod_flag.png"],
	["Congo, Rep.", "Sub-Saharan Africa", "https://data.un.org/common/flags/cog_flag.png"],
	["Costa Rica", "Latin America and Caribbean", "https://data.un.org/common/flags/cri_flag.png"],
	["Cote d\'Ivoire", "Sub-Saharan Africa", "https://data.un.org/common/flags/civ_flag.png"],
	["Croatia", "Europe and Central Asia", "https://data.un.org/common/flags/hrv_flag.png"],
	["Cuba", "Latin America and Caribbean", "https://data.un.org/common/flags/cub_flag.png"],
	["Curacao", "Latin America and Caribbean", "https://data.un.org/common/flags/cuw_flag.png"],
	["Cyprus", "Europe and Central Asia", "https://data.un.org/common/flags/cyp_flag.png"],
	["Czech Republic", "Europe and Central Asia", "https://data.un.org/common/flags/cze_flag.png"],
	["Denmark", "Europe and Central Asia", "https://data.un.org/common/flags/dnk_flag.png"],
	["Djibouti", "Middle East and North Africa", "https://data.un.org/common/flags/dji_flag.png"],
	["Dominica", "Latin America and Caribbean", "https://data.un.org/common/flags/dma_flag.png"],
	["Dominican Republic", "Latin America and Caribbean", "https://data.un.org/common/flags/dom_flag.png"],
	["Ecuador", "Latin America and Caribbean", "https://data.un.org/common/flags/ecu_flag.png"],
	["Egypt, Arab Rep.", "Middle East and North Africa", "https://data.un.org/common/flags/egy_flag.png"],
	["El Salvador", "Latin America and Caribbean", "https://data.un.org/common/flags/slv_flag.png"],
	["Equatorial Guinea", "Sub-Saharan Africa", "https://data.un.org/common/flags/gnq_flag.png"],
	["Eritrea", "Sub-Saharan Africa", "https://data.un.org/common/flags/eri_flag.png"],
	["Estonia", "Europe and Central Asia", "https://data.un.org/common/flags/est_flag.png"],
	["Eswatini", "Sub-Saharan Africa", "https://data.un.org/common/flags/swz_flag.png"],
	["Ethiopia", "Sub-Saharan Africa", "https://data.un.org/common/flags/eth_flag.png"],
	["Faroe Islands", "Europe and Central Asia", "https://data.un.org/common/flags/fro_flag.png"],
	["Fiji", "East Asia and Pacific", "https://data.un.org/common/flags/fji_flag.png"],
	["Finland", "Europe and Central Asia", "https://data.un.org/common/flags/fin_flag.png"],
	["France", "Europe and Central Asia", "https://data.un.org/common/flags/fra_flag.png"],
	["French Polynesia", "East Asia and Pacific", "https://data.un.org/common/flags/pyf_flag.png"],
	["Gabon", "Sub-Saharan Africa", "https://data.un.org/common/flags/gab_flag.png"],
	["Gambia, The", "Sub-Saharan Africa", "https://data.un.org/common/flags/gmb_flag.png"],
	["Georgia", "Europe and Central Asia", "https://data.un.org/common/flags/geo_flag.png"],
	["Germany", "Europe and Central Asia", "https://data.un.org/common/flags/deu_flag.png"],
	["Ghana", "Sub-Saharan Africa", "https://data.un.org/common/flags/gha_flag.png"],
	["Gibraltar", "Europe and Central Asia", "https://data.un.org/common/flags/gib_flag.png"],
	["Greece", "Europe and Central Asia", "https://data.un.org/common/flags/grc_flag.png"],
	["Greenland", "Europe and Central Asia", "https://data.un.org/common/flags/grl_flag.png"],
	["Grenada", "Latin America and Caribbean", "https://data.un.org/common/flags/grd_flag.png"],
	["Guam", "East Asia and Pacific", "https://data.un.org/common/flags/gum_flag.png"],
	["Guatemala", "Latin America and Caribbean", "https://data.un.org/common/flags/gtm_flag.png"],
	["Guinea", "Sub-Saharan Africa", "https://data.un.org/common/flags/gin_flag.png"],
	["Guinea-Bissau", "Sub-Saharan Africa", "https://data.un.org/common/flags/gnb_flag.png"],
	["Guyana", "Latin America and Caribbean", "https://data.un.org/common/flags/guy_flag.png"],
	["Haiti", "Latin America and Caribbean", "https://data.un.org/common/flags/hti_flag.png"],
	["Honduras", "Latin America and Caribbean", "https://data.un.org/common/flags/hnd_flag.png"],
	["Hong Kong SAR, China", "East Asia and Pacific", "https://data.un.org/common/flags/hkg_flag.png"],
	["Hungary", "Europe and Central Asia", "https://data.un.org/common/flags/hun_flag.png"],
	["Iceland", "Europe and Central Asia", "https://data.un.org/common/flags/isl_flag.png"],
	["India", "South Asia", "https://data.un.org/common/flags/ind_flag.png"],
	["Indonesia", "East Asia and Pacific", "https://data.un.org/common/flags/idn_flag.png"],
	["Iran, Islamic Rep.", "Middle East and North Africa", "https://data.un.org/common/flags/irn_flag.png"],
	["Iraq", "Middle East and North Africa", "https://data.un.org/common/flags/irq_flag.png"],
	["Ireland", "Europe and Central Asia", "https://data.un.org/common/flags/irl_flag.png"],
	["Isle of Man", "Europe and Central Asia", "https://data.un.org/common/flags/imn_flag.png"],
	["Israel", "Middle East and North Africa", "https://data.un.org/common/flags/isr_flag.png"],
	["Italy", "Europe and Central Asia", "https://data.un.org/common/flags/ita_flag.png"],
	["Jamaica", "Latin America and Caribbean", "https://data.un.org/common/flags/jam_flag.png"],
	["Japan", "East Asia and Pacific", "https://data.un.org/common/flags/jpn_flag.png"],
	["Jordan", "Middle East and North Africa", "https://data.un.org/common/flags/jor_flag.png"],
	["Kazakhstan", "Europe and Central Asia", "https://data.un.org/common/flags/kaz_flag.png"],
	["Kenya", "Sub-Saharan Africa", "https://data.un.org/common/flags/ken_flag.png"],
	["Kiribati", "East Asia and Pacific", "https://data.un.org/common/flags/kir_flag.png"],
	["Korea, Dem. People's Rep.", "East Asia and Pacific", "https://data.un.org/common/flags/prk_flag.png"],
	["Korea, Rep.", "East Asia and Pacific", "https://data.un.org/common/flags/kor_flag.png"],
	["Kuwait", "Middle East and North Africa", "https://data.un.org/common/flags/kwt_flag.png"],
	["Kyrgyz Republic", "Europe and Central Asia", "https://data.un.org/common/flags/kgz_flag.png"],
	["Lao PDR", "East Asia and Pacific", "https://data.un.org/common/flags/lao_flag.png"],
	["Latvia", "Europe and Central Asia", "https://data.un.org/common/flags/lva_flag.png"],
	["Lebanon", "Middle East and North Africa", "https://data.un.org/common/flags/lbn_flag.png"],
	["Lesotho", "Sub-Saharan Africa", "https://data.un.org/common/flags/lso_flag.png"],
	["Liberia", "Sub-Saharan Africa", "https://data.un.org/common/flags/lbr_flag.png"],
	["Libya", "Middle East and North Africa", "https://data.un.org/common/flags/lby_flag.png"],
	["Liechtenstein", "Europe and Central Asia", "https://data.un.org/common/flags/lie_flag.png"],
	["Lithuania", "Europe and Central Asia", "https://data.un.org/common/flags/ltu_flag.png"],
	["Luxembourg", "Europe and Central Asia", "https://data.un.org/common/flags/lux_flag.png"],
	["Macao SAR, China", "East Asia and Pacific", "https://data.un.org/common/flags/mac_flag.png"],
	["Madagascar", "Sub-Saharan Africa", "https://data.un.org/common/flags/mdg_flag.png"],
	["Malawi", "Sub-Saharan Africa", "https://data.un.org/common/flags/mwi_flag.png"],
	["Malaysia", "East Asia and Pacific", "https://data.un.org/common/flags/mys_flag.png"],
	["Maldives", "South Asia", "https://data.un.org/common/flags/mdv_flag.png"],
	["Mali", "Sub-Saharan Africa", "https://data.un.org/common/flags/mli_flag.png"],
	["Malta", "Middle East and North Africa", "https://data.un.org/common/flags/mlt_flag.png"],
	["Marshall Islands", "East Asia and Pacific", "https://data.un.org/common/flags/mhl_flag.png"],
	["Mauritania", "Sub-Saharan Africa", "https://data.un.org/common/flags/mrt_flag.png"],
	["Mauritius", "Sub-Saharan Africa", "https://data.un.org/common/flags/mus_flag.png"],
	["Mexico", "Latin America and Caribbean", "https://data.un.org/common/flags/mex_flag.png"],
	["Micronesia, Fed. Sts.", "East Asia and Pacific", "https://data.un.org/common/flags/fsm_flag.png"],
	["Moldova", "Europe and Central Asia", "https://data.un.org/common/flags/mda_flag.png"],
	["Monaco", "Europe and Central Asia", "https://data.un.org/common/flags/mco_flag.png"],
	["Mongolia", "East Asia and Pacific", "https://data.un.org/common/flags/mng_flag.png"],
	["Montenegro", "Europe and Central Asia", "https://data.un.org/common/flags/mne_flag.png"],
	["Morocco", "Middle East and North Africa", "https://data.un.org/common/flags/mar_flag.png"],
	["Mozambique", "Sub-Saharan Africa", "https://data.un.org/common/flags/moz_flag.png"],
	["Myanmar", "East Asia and Pacific", "https://data.un.org/common/flags/mmr_flag.png"],
	["Namibia", "Sub-Saharan Africa", "https://data.un.org/common/flags/nam_flag.png"],
	["Nauru", "East Asia and Pacific", "https://data.un.org/common/flags/nru_flag.png"],
	["Nepal", "South Asia", "https://data.un.org/common/flags/npl_flag.png"],
	["Netherlands", "Europe and Central Asia", "https://data.un.org/common/flags/nld_flag.png"],
	["New Caledonia", "East Asia and Pacific", "https://data.un.org/common/flags/ncl_flag.png"],
	["New Zealand", "East Asia and Pacific", "https://data.un.org/common/flags/nzl_flag.png"],
	["Nicaragua", "Latin America and Caribbean", "https://data.un.org/common/flags/nic_flag.png"],
	["Niger", "Sub-Saharan Africa", "https://data.un.org/common/flags/ner_flag.png"],
	["Nigeria", "Sub-Saharan Africa", "https://data.un.org/common/flags/nga_flag.png"],
	["North Macedonia", "Europe and Central Asia", "https://data.un.org/common/flags/mkd_flag.png"],
	["Northern Mariana Islands", "East Asia and Pacific", "https://data.un.org/common/flags/mnp_flag.png"],
	["Norway", "Europe and Central Asia", "https://data.un.org/common/flags/nor_flag.png"],
	["Oman", "Middle East and North Africa", "https://data.un.org/common/flags/omn_flag.png"],
	["Pakistan", "South Asia", "https://data.un.org/common/flags/pak_flag.png"],
	["Palau", "East Asia and Pacific", "https://data.un.org/common/flags/plw_flag.png"],
	["Panama", "Latin America and Caribbean", "https://data.un.org/common/flags/pan_flag.png"],
	["Papua New Guinea", "East Asia and Pacific", "https://data.un.org/common/flags/png_flag.png"],
	["Paraguay", "Latin America and Caribbean", "https://data.un.org/common/flags/pry_flag.png"],
	["Peru", "Latin America and Caribbean", "https://data.un.org/common/flags/per_flag.png"],
	["Philippines", "East Asia and Pacific", "https://data.un.org/common/flags/phl_flag.png"],
	["Poland", "Europe and Central Asia", "https://data.un.org/common/flags/pol_flag.png"],
	["Portugal", "Europe and Central Asia", "https://data.un.org/common/flags/prt_flag.png"],
	["Puerto Rico", "Latin America and Caribbean", "https://data.un.org/common/flags/pri_flag.png"],
	["Qatar", "Middle East and North Africa", "https://data.un.org/common/flags/qat_flag.png"],
	["Romania", "Europe and Central Asia", "https://data.un.org/common/flags/rou_flag.png"],
	["Russian Federation", "Europe and Central Asia", "https://data.un.org/common/flags/rus_flag.png"],
	["Rwanda", "Sub-Saharan Africa", "https://data.un.org/common/flags/rwa_flag.png"],
	["Samoa", "East Asia and Pacific", "https://data.un.org/common/flags/wsm_flag.png"],
	["San Marino", "Europe and Central Asia", "https://data.un.org/common/flags/smr_flag.png"],
	["Sao Tome and Principe", "Sub-Saharan Africa", "https://data.un.org/common/flags/stp_flag.png"],
	["Saudi Arabia", "Middle East and North Africa", "https://data.un.org/common/flags/sau_flag.png"],
	["Senegal", "Sub-Saharan Africa", "https://data.un.org/common/flags/sen_flag.png"],
	["Serbia", "Europe and Central Asia", "https://data.un.org/common/flags/srb_flag.png"],
	["Seychelles", "Sub-Saharan Africa", "https://data.un.org/common/flags/syc_flag.png"],
	["Sierra Leone", "Sub-Saharan Africa", "https://data.un.org/common/flags/sle_flag.png"],
	["Singapore", "East Asia and Pacific", "https://data.un.org/common/flags/sgp_flag.png"],
	["Sint Maarten (Dutch part)", "Latin America and Caribbean", "https://data.un.org/common/flags/sxm_flag.png"],
	["Slovak Republic", "Europe and Central Asia", "https://data.un.org/common/flags/svk_flag.png"],
	["Slovenia", "Europe and Central Asia", "https://data.un.org/common/flags/svn_flag.png"],
	["Solomon Islands", "East Asia and Pacific", "https://data.un.org/common/flags/slb_flag.png"],
	["Somalia", "Sub-Saharan Africa", "https://data.un.org/common/flags/som_flag.png"],
	["South Africa", "Sub-Saharan Africa", "https://data.un.org/common/flags/zaf_flag.png"],
	["South Sudan", "Sub-Saharan Africa", "https://data.un.org/common/flags/ssd_flag.png"],
	["Spain", "Europe and Central Asia", "https://data.un.org/common/flags/esp_flag.png"],
	["Sri Lanka", "South Asia", "https://data.un.org/common/flags/lka_flag.png"],
	["St. Kitts and Nevis", "Latin America and Caribbean", "https://data.un.org/common/flags/kna_flag.png"],
	["St. Lucia", "Latin America and Caribbean", "https://data.un.org/common/flags/lca_flag.png"],
	["St. Martin (French part)", "Latin America and Caribbean", "https://data.un.org/common/flags/maf_flag.png"],
	["St. Vincent and the Grenadines", "Latin America and Caribbean", "https://data.un.org/common/flags/vct_flag.png"],
	["Sudan", "Sub-Saharan Africa", "https://data.un.org/common/flags/sdn_flag.png"],
	["Suriname", "Latin America and Caribbean", "https://data.un.org/common/flags/sur_flag.png"],
	["Sweden", "Europe and Central Asia", "https://data.un.org/common/flags/swe_flag.png"],
	["Switzerland", "Europe and Central Asia", "https://data.un.org/common/flags/che_flag.png"],
	["Syrian Arab Republic", "Middle East and North Africa", "https://data.un.org/common/flags/syr_flag.png"],
	["Tajikistan", "Europe and Central Asia", "https://data.un.org/common/flags/tjk_flag.png"],
	["Tanzania", "Sub-Saharan Africa", "https://data.un.org/common/flags/tza_flag.png"],
	["Thailand", "East Asia and Pacific", "https://data.un.org/common/flags/tha_flag.png"],
	["Timor-Leste", "East Asia and Pacific", "https://data.un.org/common/flags/tls_flag.png"],
	["Togo", "Sub-Saharan Africa", "https://data.un.org/common/flags/tgo_flag.png"],
	["Tonga", "East Asia and Pacific", "https://data.un.org/common/flags/ton_flag.png"],
	["Trinidad and Tobago", "Latin America and Caribbean", "https://data.un.org/common/flags/tto_flag.png"],
	["Tunisia", "Middle East and North Africa", "https://data.un.org/common/flags/tun_flag.png"],
	["Turkey", "Europe and Central Asia", "https://data.un.org/common/flags/tur_flag.png"],
	["Turkmenistan", "Europe and Central Asia", "https://data.un.org/common/flags/tkm_flag.png"],
	["Turks and Caicos Islands", "Latin America and Caribbean", "https://data.un.org/common/flags/tca_flag.png"],
	["Tuvalu", "East Asia and Pacific", "https://data.un.org/common/flags/tuv_flag.png"],
	["Uganda", "Sub-Saharan Africa", "https://data.un.org/common/flags/uga_flag.png"],
	["Ukraine", "Europe and Central Asia", "https://data.un.org/common/flags/ukr_flag.png"],
	["United Arab Emirates", "Middle East and North Africa", "https://data.un.org/common/flags/are_flag.png"],
	["United Kingdom", "Europe and Central Asia", "https://data.un.org/common/flags/gbr_flag.png"],
	["United States", "Latin America and Caribbean", "https://data.un.org/common/flags/usa_flag.png"],
	["Uruguay", "Latin America and Caribbean", "https://data.un.org/common/flags/ury_flag.png"],
	["Uzbekistan", "Europe and Central Asia", "https://data.un.org/common/flags/uzb_flag.png"],
	["Vanuatu", "East Asia and Pacific", "https://data.un.org/common/flags/vut_flag.png"],
	["Venezuela, RB", "Latin America and Caribbean", "https://data.un.org/common/flags/ven_flag.png"],
	["Vietnam", "East Asia and Pacific", "https://data.un.org/common/flags/vnm_flag.png"],
	["Virgin Islands (U.S.)", "Latin America and Caribbean", "https://data.un.org/common/flags/vir_flag.png"],
	["West Bank and Gaza", "Middle East and North Africa", "https://data.un.org/common/flags/pse_flag.png"],
	["Yemen, Rep.", "Middle East and North Africa", "https://data.un.org/common/flags/yem_flag.png"],
	["Zambia", "Sub-Saharan Africa", "https://data.un.org/common/flags/zmb_flag.png"],
	["Zimbabwe", "Sub-Saharan Africa", "https://data.un.org/common/flags/zwe_flag.png"]
];

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

sessionStorage.setItem("score", "0");
sessionStorage.setItem("current-round", "1");
sessionStorage.setItem("previousChoices", JSON.stringify([]));

const regionSelection = document.getElementById("regions-selection");
const roundsElement = document.getElementById("rounds-selection");

let filtered = [];

function regionOnChange() {

	removeAllChildNodes(roundsElement);
	filtered = data.filter((element, key) => {
		return data[key][1] == regionSelection.value;
	});

	for (let i = 1; i <= filtered.length; i++) {
		const option = document.createElement("option");
		option.value = i;
		option.innerHTML = i;
		roundsElement.appendChild(option);
	}

}

regionOnChange();

function playButton() {
	const roundsSelection = parseInt(document.getElementById("rounds-selection").value);
	
	sessionStorage.setItem("filtered", JSON.stringify(filtered));
	sessionStorage.setItem("max-rounds", roundsSelection);

	window.location.href = "game.html";
}