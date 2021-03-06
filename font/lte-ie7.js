/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-home' : '&#xe000;',
			'icon-home-2' : '&#xe001;',
			'icon-home-3' : '&#xe002;',
			'icon-office' : '&#xe003;',
			'icon-newspaper' : '&#xe013;',
			'icon-pencil' : '&#xe014;',
			'icon-pencil-2' : '&#xe015;',
			'icon-quill' : '&#xe016;',
			'icon-pen' : '&#xe017;',
			'icon-blog' : '&#xe018;',
			'icon-droplet' : '&#xe019;',
			'icon-paint-format' : '&#xe01a;',
			'icon-image' : '&#xe01b;',
			'icon-image-2' : '&#xe01c;',
			'icon-images' : '&#xe01d;',
			'icon-camera' : '&#xe01e;',
			'icon-music' : '&#xe01f;',
			'icon-headphones' : '&#xe020;',
			'icon-play' : '&#xe021;',
			'icon-film' : '&#xe022;',
			'icon-camera-2' : '&#xe023;',
			'icon-dice' : '&#xe024;',
			'icon-pacman' : '&#xe025;',
			'icon-spades' : '&#xe026;',
			'icon-clubs' : '&#xe027;',
			'icon-diamonds' : '&#xe028;',
			'icon-pawn' : '&#xe029;',
			'icon-bullhorn' : '&#xe02a;',
			'icon-connection' : '&#xe02b;',
			'icon-podcast' : '&#xe02c;',
			'icon-feed' : '&#xe02d;',
			'icon-book' : '&#xe02e;',
			'icon-books' : '&#xe02f;',
			'icon-library' : '&#xe030;',
			'icon-file' : '&#xe031;',
			'icon-profile' : '&#xe032;',
			'icon-file-2' : '&#xe033;',
			'icon-file-3' : '&#xe034;',
			'icon-file-4' : '&#xe035;',
			'icon-copy' : '&#xe036;',
			'icon-copy-2' : '&#xe037;',
			'icon-copy-3' : '&#xe038;',
			'icon-paste' : '&#xe039;',
			'icon-paste-2' : '&#xe03a;',
			'icon-paste-3' : '&#xe03b;',
			'icon-stack' : '&#xe03c;',
			'icon-folder' : '&#xe03d;',
			'icon-folder-open' : '&#xe03e;',
			'icon-tag' : '&#xe03f;',
			'icon-tags' : '&#xe040;',
			'icon-barcode' : '&#xe041;',
			'icon-qrcode' : '&#xe042;',
			'icon-ticket' : '&#xe043;',
			'icon-cart' : '&#xe044;',
			'icon-cart-2' : '&#xe045;',
			'icon-cart-3' : '&#xe046;',
			'icon-coin' : '&#xe047;',
			'icon-credit' : '&#xe048;',
			'icon-calculate' : '&#xe049;',
			'icon-support' : '&#xe04a;',
			'icon-phone' : '&#xe04b;',
			'icon-phone-hang-up' : '&#xe04c;',
			'icon-address-book' : '&#xe04d;',
			'icon-notebook' : '&#xe04e;',
			'icon-envelop' : '&#xe04f;',
			'icon-pushpin' : '&#xe050;',
			'icon-location' : '&#xe051;',
			'icon-location-2' : '&#xe052;',
			'icon-compass' : '&#xe053;',
			'icon-map' : '&#xe054;',
			'icon-map-2' : '&#xe055;',
			'icon-history' : '&#xe056;',
			'icon-clock' : '&#xe057;',
			'icon-clock-2' : '&#xe058;',
			'icon-alarm' : '&#xe059;',
			'icon-alarm-2' : '&#xe05a;',
			'icon-bell' : '&#xe05b;',
			'icon-stopwatch' : '&#xe05c;',
			'icon-calendar' : '&#xe05d;',
			'icon-calendar-2' : '&#xe05e;',
			'icon-print' : '&#xe05f;',
			'icon-keyboard' : '&#xe060;',
			'icon-screen' : '&#xe061;',
			'icon-laptop' : '&#xe062;',
			'icon-mobile' : '&#xe063;',
			'icon-mobile-2' : '&#xe064;',
			'icon-tablet' : '&#xe065;',
			'icon-tv' : '&#xe066;',
			'icon-cabinet' : '&#xe067;',
			'icon-drawer' : '&#xe068;',
			'icon-drawer-2' : '&#xe069;',
			'icon-drawer-3' : '&#xe06a;',
			'icon-box-add' : '&#xe06b;',
			'icon-box-remove' : '&#xe06c;',
			'icon-download' : '&#xe06d;',
			'icon-upload' : '&#xe06e;',
			'icon-disk' : '&#xe06f;',
			'icon-storage' : '&#xe070;',
			'icon-undo' : '&#xe071;',
			'icon-redo' : '&#xe072;',
			'icon-flip' : '&#xe073;',
			'icon-flip-2' : '&#xe074;',
			'icon-undo-2' : '&#xe075;',
			'icon-redo-2' : '&#xe076;',
			'icon-forward' : '&#xe077;',
			'icon-reply' : '&#xe078;',
			'icon-bubble' : '&#xe079;',
			'icon-bubbles' : '&#xe07a;',
			'icon-bubbles-2' : '&#xe07b;',
			'icon-bubble-2' : '&#xe07c;',
			'icon-bubbles-3' : '&#xe07d;',
			'icon-bubbles-4' : '&#xe07e;',
			'icon-user' : '&#xe07f;',
			'icon-users' : '&#xe080;',
			'icon-user-2' : '&#xe081;',
			'icon-users-2' : '&#xe082;',
			'icon-user-3' : '&#xe083;',
			'icon-user-4' : '&#xe084;',
			'icon-quotes-left' : '&#xe085;',
			'icon-busy' : '&#xe086;',
			'icon-spinner' : '&#xe087;',
			'icon-spinner-2' : '&#xe088;',
			'icon-spinner-3' : '&#xe089;',
			'icon-spinner-4' : '&#xe08a;',
			'icon-spinner-5' : '&#xe08b;',
			'icon-spinner-6' : '&#xe08c;',
			'icon-binoculars' : '&#xe08d;',
			'icon-search' : '&#xe08e;',
			'icon-zoom-in' : '&#xe08f;',
			'icon-zoom-out' : '&#xe090;',
			'icon-expand' : '&#xe091;',
			'icon-contract' : '&#xe092;',
			'icon-expand-2' : '&#xe093;',
			'icon-contract-2' : '&#xe094;',
			'icon-key' : '&#xe095;',
			'icon-key-2' : '&#xe096;',
			'icon-lock' : '&#xe097;',
			'icon-lock-2' : '&#xe098;',
			'icon-unlocked' : '&#xe099;',
			'icon-wrench' : '&#xe09a;',
			'icon-settings' : '&#xe09b;',
			'icon-equalizer' : '&#xe09c;',
			'icon-cog' : '&#xe09d;',
			'icon-cogs' : '&#xe09e;',
			'icon-cog-2' : '&#xe09f;',
			'icon-hammer' : '&#xe0a0;',
			'icon-wand' : '&#xe0a1;',
			'icon-aid' : '&#xe0a2;',
			'icon-bug' : '&#xe0a3;',
			'icon-pie' : '&#xe0a4;',
			'icon-stats' : '&#xe0a5;',
			'icon-bars' : '&#xe0a6;',
			'icon-bars-2' : '&#xe0a7;',
			'icon-gift' : '&#xe0a8;',
			'icon-trophy' : '&#xe0a9;',
			'icon-glass' : '&#xe0aa;',
			'icon-mug' : '&#xe0ab;',
			'icon-food' : '&#xe0ac;',
			'icon-leaf' : '&#xe0ad;',
			'icon-rocket' : '&#xe0ae;',
			'icon-meter' : '&#xe0af;',
			'icon-meter2' : '&#xe0b0;',
			'icon-dashboard' : '&#xe0b1;',
			'icon-hammer-2' : '&#xe0b2;',
			'icon-fire' : '&#xe0b3;',
			'icon-lab' : '&#xe0b4;',
			'icon-magnet' : '&#xe0b5;',
			'icon-remove' : '&#xe0b6;',
			'icon-remove-2' : '&#xe0b7;',
			'icon-briefcase' : '&#xe0b8;',
			'icon-airplane' : '&#xe0b9;',
			'icon-truck' : '&#xe0ba;',
			'icon-road' : '&#xe0bb;',
			'icon-accessibility' : '&#xe0bc;',
			'icon-target' : '&#xe0bd;',
			'icon-shield' : '&#xe0be;',
			'icon-lightning' : '&#xe0bf;',
			'icon-switch' : '&#xe0c0;',
			'icon-power-cord' : '&#xe0c1;',
			'icon-signup' : '&#xe0c2;',
			'icon-list' : '&#xe0c3;',
			'icon-list-2' : '&#xe0c4;',
			'icon-numbered-list' : '&#xe0c5;',
			'icon-menu' : '&#xe0c6;',
			'icon-menu-2' : '&#xe0c7;',
			'icon-tree' : '&#xe0c8;',
			'icon-cloud' : '&#xe0c9;',
			'icon-cloud-download' : '&#xe0ca;',
			'icon-cloud-upload' : '&#xe0cb;',
			'icon-download-2' : '&#xe0cc;',
			'icon-upload-2' : '&#xe0cd;',
			'icon-download-3' : '&#xe0ce;',
			'icon-upload-3' : '&#xe0cf;',
			'icon-globe' : '&#xe0d0;',
			'icon-earth' : '&#xe0d1;',
			'icon-link' : '&#xe0d2;',
			'icon-flag' : '&#xe0d3;',
			'icon-attachment' : '&#xe0d4;',
			'icon-eye' : '&#xe0d5;',
			'icon-eye-blocked' : '&#xe0d6;',
			'icon-eye-2' : '&#xe0d7;',
			'icon-bookmark' : '&#xe0d8;',
			'icon-bookmarks' : '&#xe0d9;',
			'icon-brightness-medium' : '&#xe0da;',
			'icon-brightness-contrast' : '&#xe0db;',
			'icon-contrast' : '&#xe0dc;',
			'icon-star' : '&#xe0dd;',
			'icon-star-2' : '&#xe0de;',
			'icon-star-3' : '&#xe0df;',
			'icon-heart' : '&#xe0e0;',
			'icon-heart-2' : '&#xe0e1;',
			'icon-heart-broken' : '&#xe0e2;',
			'icon-thumbs-up' : '&#xe0e3;',
			'icon-thumbs-up-2' : '&#xe0e4;',
			'icon-happy' : '&#xe0e5;',
			'icon-happy-2' : '&#xe0e6;',
			'icon-smiley' : '&#xe0e7;',
			'icon-smiley-2' : '&#xe0e8;',
			'icon-tongue' : '&#xe0e9;',
			'icon-tongue-2' : '&#xe0ea;',
			'icon-sad' : '&#xe0eb;',
			'icon-sad-2' : '&#xe0ec;',
			'icon-wink' : '&#xe0ed;',
			'icon-wink-2' : '&#xe0ee;',
			'icon-grin' : '&#xe0ef;',
			'icon-grin-2' : '&#xe0f0;',
			'icon-cool' : '&#xe0f1;',
			'icon-cool-2' : '&#xe0f2;',
			'icon-angry' : '&#xe0f3;',
			'icon-angry-2' : '&#xe0f4;',
			'icon-evil' : '&#xe0f5;',
			'icon-evil-2' : '&#xe0f6;',
			'icon-shocked' : '&#xe0f7;',
			'icon-shocked-2' : '&#xe0f8;',
			'icon-confused' : '&#xe0f9;',
			'icon-confused-2' : '&#xe0fa;',
			'icon-neutral' : '&#xe0fb;',
			'icon-neutral-2' : '&#xe0fc;',
			'icon-wondering' : '&#xe0fd;',
			'icon-wondering-2' : '&#xe0fe;',
			'icon-point-up' : '&#xe0ff;',
			'icon-point-right' : '&#xe100;',
			'icon-point-down' : '&#xe101;',
			'icon-point-left' : '&#xe102;',
			'icon-warning' : '&#xe103;',
			'icon-notification' : '&#xe104;',
			'icon-question' : '&#xe105;',
			'icon-info' : '&#xe106;',
			'icon-info-2' : '&#xe107;',
			'icon-blocked' : '&#xe108;',
			'icon-cancel-circle' : '&#xe109;',
			'icon-checkmark-circle' : '&#xe10a;',
			'icon-spam' : '&#xe10b;',
			'icon-close' : '&#xe10c;',
			'icon-checkmark' : '&#xe10d;',
			'icon-checkmark-2' : '&#xe10e;',
			'icon-spell-check' : '&#xe10f;',
			'icon-minus' : '&#xe110;',
			'icon-plus' : '&#xe111;',
			'icon-enter' : '&#xe112;',
			'icon-exit' : '&#xe113;',
			'icon-play-2' : '&#xe114;',
			'icon-pause' : '&#xe115;',
			'icon-stop' : '&#xe116;',
			'icon-backward' : '&#xe117;',
			'icon-forward-2' : '&#xe118;',
			'icon-play-3' : '&#xe119;',
			'icon-pause-2' : '&#xe11a;',
			'icon-stop-2' : '&#xe11b;',
			'icon-backward-2' : '&#xe11c;',
			'icon-forward-3' : '&#xe11d;',
			'icon-first' : '&#xe11e;',
			'icon-last' : '&#xe11f;',
			'icon-previous' : '&#xe120;',
			'icon-next' : '&#xe121;',
			'icon-eject' : '&#xe122;',
			'icon-volume-high' : '&#xe123;',
			'icon-volume-medium' : '&#xe124;',
			'icon-volume-low' : '&#xe125;',
			'icon-volume-mute' : '&#xe126;',
			'icon-volume-mute-2' : '&#xe127;',
			'icon-volume-increase' : '&#xe128;',
			'icon-volume-decrease' : '&#xe129;',
			'icon-loop' : '&#xe12a;',
			'icon-loop-2' : '&#xe12b;',
			'icon-loop-3' : '&#xe12c;',
			'icon-shuffle' : '&#xe12d;',
			'icon-arrow-up-left' : '&#xe12e;',
			'icon-arrow-up' : '&#xe12f;',
			'icon-arrow-up-right' : '&#xe130;',
			'icon-arrow-right' : '&#xe131;',
			'icon-arrow-down-right' : '&#xe132;',
			'icon-arrow-down' : '&#xe133;',
			'icon-arrow-down-left' : '&#xe134;',
			'icon-arrow-left' : '&#xe135;',
			'icon-arrow-up-left-2' : '&#xe136;',
			'icon-arrow-up-2' : '&#xe137;',
			'icon-arrow-up-right-2' : '&#xe138;',
			'icon-arrow-right-2' : '&#xe139;',
			'icon-arrow-down-right-2' : '&#xe13a;',
			'icon-arrow-down-2' : '&#xe13b;',
			'icon-arrow-down-left-2' : '&#xe13c;',
			'icon-arrow-left-2' : '&#xe13d;',
			'icon-arrow-up-left-3' : '&#xe13e;',
			'icon-arrow-up-3' : '&#xe13f;',
			'icon-arrow-up-right-3' : '&#xe140;',
			'icon-arrow-right-3' : '&#xe141;',
			'icon-arrow-down-right-3' : '&#xe142;',
			'icon-arrow-down-3' : '&#xe143;',
			'icon-arrow-down-left-3' : '&#xe144;',
			'icon-arrow-left-3' : '&#xe145;',
			'icon-tab' : '&#xe146;',
			'icon-checkbox-checked' : '&#xe147;',
			'icon-checkbox-unchecked' : '&#xe148;',
			'icon-checkbox-partial' : '&#xe149;',
			'icon-radio-checked' : '&#xe14a;',
			'icon-radio-unchecked' : '&#xe14b;',
			'icon-crop' : '&#xe14c;',
			'icon-scissors' : '&#xe14d;',
			'icon-filter' : '&#xe14e;',
			'icon-right-to-left' : '&#xe004;',
			'icon-paragraph-left' : '&#xe005;',
			'icon-paragraph-center' : '&#xe006;',
			'icon-paragraph-right' : '&#xe007;',
			'icon-paragraph-justify' : '&#xe008;',
			'icon-paragraph-left-2' : '&#xe009;',
			'icon-paragraph-center-2' : '&#xe00a;',
			'icon-paragraph-right-2' : '&#xe00b;',
			'icon-paragraph-justify-2' : '&#xe00c;',
			'icon-indent-increase' : '&#xe00d;',
			'icon-indent-decrease' : '&#xe00e;',
			'icon-new-tab' : '&#xe00f;',
			'icon-embed' : '&#xe010;',
			'icon-code' : '&#xe011;',
			'icon-console' : '&#xe012;',
			'icon-share' : '&#xe14f;',
			'icon-mail' : '&#xe150;',
			'icon-mail-2' : '&#xe151;',
			'icon-mail-3' : '&#xe152;',
			'icon-mail-4' : '&#xe153;',
			'icon-google' : '&#xe154;',
			'icon-google-plus' : '&#xe155;',
			'icon-google-plus-2' : '&#xe156;',
			'icon-google-plus-3' : '&#xe157;',
			'icon-google-plus-4' : '&#xe158;',
			'icon-google-drive' : '&#xe159;',
			'icon-facebook' : '&#xe15a;',
			'icon-facebook-2' : '&#xe15b;',
			'icon-facebook-3' : '&#xe15c;',
			'icon-instagram' : '&#xe15d;',
			'icon-twitter' : '&#xe15e;',
			'icon-twitter-2' : '&#xe15f;',
			'icon-twitter-3' : '&#xe160;',
			'icon-feed-2' : '&#xe161;',
			'icon-feed-3' : '&#xe162;',
			'icon-feed-4' : '&#xe163;',
			'icon-youtube' : '&#xe164;',
			'icon-youtube-2' : '&#xe165;',
			'icon-vimeo' : '&#xe166;',
			'icon-vimeo2' : '&#xe167;',
			'icon-vimeo-2' : '&#xe168;',
			'icon-lanyrd' : '&#xe169;',
			'icon-flickr' : '&#xe16a;',
			'icon-flickr-2' : '&#xe16b;',
			'icon-flickr-3' : '&#xe16c;',
			'icon-flickr-4' : '&#xe16d;',
			'icon-picassa' : '&#xe16e;',
			'icon-picassa-2' : '&#xe16f;',
			'icon-dribbble' : '&#xe170;',
			'icon-dribbble-2' : '&#xe171;',
			'icon-dribbble-3' : '&#xe172;',
			'icon-forrst' : '&#xe173;',
			'icon-forrst-2' : '&#xe174;',
			'icon-deviantart' : '&#xe175;',
			'icon-deviantart-2' : '&#xe176;',
			'icon-steam' : '&#xe177;',
			'icon-steam-2' : '&#xe178;',
			'icon-github' : '&#xe179;',
			'icon-github-2' : '&#xe17a;',
			'icon-github-3' : '&#xe17b;',
			'icon-github-4' : '&#xe17c;',
			'icon-github-5' : '&#xe17d;',
			'icon-wordpress' : '&#xe17e;',
			'icon-wordpress-2' : '&#xe17f;',
			'icon-joomla' : '&#xe180;',
			'icon-blogger' : '&#xe181;',
			'icon-blogger-2' : '&#xe182;',
			'icon-tumblr' : '&#xe183;',
			'icon-tumblr-2' : '&#xe184;',
			'icon-yahoo' : '&#xe185;',
			'icon-tux' : '&#xe186;',
			'icon-apple' : '&#xe187;',
			'icon-finder' : '&#xe188;',
			'icon-android' : '&#xe189;',
			'icon-windows' : '&#xe18a;',
			'icon-windows8' : '&#xe18b;',
			'icon-soundcloud' : '&#xe18c;',
			'icon-soundcloud-2' : '&#xe18d;',
			'icon-skype' : '&#xe18e;',
			'icon-reddit' : '&#xe18f;',
			'icon-linkedin' : '&#xe190;',
			'icon-lastfm' : '&#xe191;',
			'icon-lastfm-2' : '&#xe192;',
			'icon-delicious' : '&#xe193;',
			'icon-stumbleupon' : '&#xe194;',
			'icon-stumbleupon-2' : '&#xe195;',
			'icon-stackoverflow' : '&#xe196;',
			'icon-pinterest' : '&#xe197;',
			'icon-pinterest-2' : '&#xe198;',
			'icon-xing' : '&#xe199;',
			'icon-xing-2' : '&#xe19a;',
			'icon-flattr' : '&#xe19b;',
			'icon-foursquare' : '&#xe19c;',
			'icon-foursquare-2' : '&#xe19d;',
			'icon-paypal' : '&#xe19e;',
			'icon-paypal-2' : '&#xe19f;',
			'icon-paypal-3' : '&#xe1a0;',
			'icon-yelp' : '&#xe1a1;',
			'icon-libreoffice' : '&#xe1a2;',
			'icon-file-pdf' : '&#xe1a3;',
			'icon-file-openoffice' : '&#xe1a4;',
			'icon-file-word' : '&#xe1a5;',
			'icon-file-excel' : '&#xe1a6;',
			'icon-file-zip' : '&#xe1a7;',
			'icon-file-powerpoint' : '&#xe1a8;',
			'icon-file-xml' : '&#xe1a9;',
			'icon-file-css' : '&#xe1aa;',
			'icon-html5' : '&#xe1ab;',
			'icon-html5-2' : '&#xe1ac;',
			'icon-css3' : '&#xe1ad;',
			'icon-chrome' : '&#xe1ae;',
			'icon-firefox' : '&#xe1af;',
			'icon-IE' : '&#xe1b0;',
			'icon-opera' : '&#xe1b1;',
			'icon-safari' : '&#xe1b2;',
			'icon-IcoMoon' : '&#xe1b3;',
			'icon-left-to-right' : '&#xe1b4;',
			'icon-filter-2' : '&#xe1b5;',
			'icon-font' : '&#xe1b6;',
			'icon-text-height' : '&#xe1b7;',
			'icon-text-width' : '&#xe1b8;',
			'icon-bold' : '&#xe1b9;',
			'icon-underline' : '&#xe1ba;',
			'icon-italic' : '&#xe1bb;',
			'icon-strikethrough' : '&#xe1bc;',
			'icon-omega' : '&#xe1bd;',
			'icon-table' : '&#xe1be;',
			'icon-table-2' : '&#xe1bf;',
			'icon-insert-template' : '&#xe1c0;',
			'icon-pilcrow' : '&#xe1c1;',
			'icon-sigma' : '&#xe1c2;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};