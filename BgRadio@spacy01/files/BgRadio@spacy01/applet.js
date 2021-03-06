const Applet = imports.ui.applet;
const Main = imports.ui.main;
const PopupMenu = imports.ui.popupMenu;
const Util = imports.misc.util;
const UUID = 'BgRadio@spacy01';
const GLib = imports.gi.GLib;
const Gettext = imports.gettext;
const Lang = imports.lang;
const St = imports.gi.St;
const Cinnamon = imports.gi.Cinnamon;

Gettext.bindtextdomain(UUID, GLib.get_home_dir() + "/.local/share/locale")

function _(text) {
  let locText = Gettext.dgettext(UUID, text);
  return locText;
}

function ConfirmDialog(){
    this._init();
}

function MyApplet(orientation) {
    this._init(orientation);
}

MyApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(orientation) {        
        Applet.IconApplet.prototype._init.call(this, orientation);
        
        try {        
            this.set_applet_icon_symbolic_name("folder-videos-symbolic");
            this.set_applet_tooltip(_("Bulgarian Radio and TV Streams"));
            
            this.menuManager = new PopupMenu.PopupMenuManager(this);
            this.menu = new Applet.AppletPopupMenu(this, orientation);
            this.menuManager.addMenu(this.menu);        
                                                                
            this._contentSection = new PopupMenu.PopupMenuSection();
            this.menu.addMenuItem(this._contentSection);                                                                        

		//radio - dropdown menu		
		this.RadioItem = new PopupMenu.PopupSubMenuMenuItem(_("Radio")); 
		
		//bg radio
		this.RadioItem.menu.addAction(_("Bg Radio"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc http://149.13.0.81:80/bgradio.ogg &");
		Main.notify(_("Listening Bg Radio"));
		});
		
		//btv radio
		this.RadioItem.menu.addAction(_("bTV Radio"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc http://live.btvradio.bg/btv-radio.mp3 &");
		Main.notify(_("Listening bTV Radio"));
		});
		
		//city radio
		this.RadioItem.menu.addAction(_("City Radio"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc http://149.13.0.81:8000/city.ogg");
		Main.notify(_("Listening City Radio"));
		});
		
		//classicfm radio
		this.RadioItem.menu.addAction(_("Classic FM"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc http://live.btvradio.bg/classic-fm.mp3");
		Main.notify(_("Listening Classic FM"));
		});
		
		//darik radio
		this.RadioItem.menu.addAction(_("Darik"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc http://darikradio.by.host.bg:8000/S2-128");
		Main.notify(_("Listening Darik"));
		});
		
		//energy radio
		this.RadioItem.menu.addAction(_("Energy"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc http://149.13.0.80/nrj_low.ogg &");
		Main.notify(_("Listening Energy"));
		});
		
		//fmplus radio
		this.RadioItem.menu.addAction(_("FM+"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc http://193.108.24.21:8000/fmplus");
		Main.notify(_("Listening FM+"));
		});
		
		//fresh radio
		this.RadioItem.menu.addAction(_("Fresh"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc http://193.108.24.21:8000/fresh");
		Main.notify(_("Listening Fresh"));
		});
		
		//jazzfm radio
		this.RadioItem.menu.addAction(_("Jazz FM"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc http://live.btvradio.bg/jazz-fm.mp3");
		Main.notify(_("Listening Jazz FM"));
		});
		
		//k2 radio
		this.RadioItem.menu.addAction(_("K2"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc http://stream.radiok2.bg:8000/rk2-high");
		Main.notify(_("Listening K2"));
		});
		
		//melody radio
		this.RadioItem.menu.addAction(_("Melody"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc http://193.108.24.6:8000/melody");
		Main.notify(_("Listening Melody"));
		});
		
		//njoy radio
		this.RadioItem.menu.addAction(_("N-Joy"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc http://live.btvradio.bg/njoy.mp3");
		Main.notify(_("Listening N-Joy"));
		});
		
		//nova radio
		this.RadioItem.menu.addAction(_("Nova Radio"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc http://stream81.metacast.eu/nova.ogg");
		Main.notify(_("Listening Nova Radio"));
		});
		
		//radio1 radio
		this.RadioItem.menu.addAction(_("Radio 1"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc http://149.13.0.81/radio1.ogg");
		Main.notify(_("Listening Radio 1"));
		});
		
		//radio1rock radio
		this.RadioItem.menu.addAction(_("Radio 1 Rock"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc http://149.13.0.81/radio1rock.ogg");
		Main.notify(_("Listening Radio 1 Rock"));
		});
		
		//thevoice radio
		this.RadioItem.menu.addAction(_("The Voice Radio"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc rtsp://31.13.217.76:1935/rtplive/thevoiceradio_live.stream");
		Main.notify(_("Listening The Voice Radio"));
		});
		
		//zrock radio
		this.RadioItem.menu.addAction(_("Z-Rock"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("cvlc http://live.btvradio.bg/z-rock.mp3");
		Main.notify(_("Listening Z-Rock"));
		});
        
        //end radio drop down menu               
		this.menu.addMenuItem(this.RadioItem); 
		
		
		//tv - dropdown menu		
		this.TvItem = new PopupMenu.PopupSubMenuMenuItem(_("TV")); 
		
		//bnt
		this.TvItem.menu.addAction(_("BNT"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("bash -c \"rtmpdump -r 'http://ios.cdn.bg:2020/fls' -a 'fls' -f 'WIN 11,5,502,149' -p 'http://cdn.bg/live/8W5GA2ujvB' -W 'http://cdn.bg/eflash/jwplayer510/player.swf' -y 'bnt.stream?at=b0d1270b39e08ad9c78dc53f43a1ba5c' -b '0' | vlc --meta-title 'BNT' -\"");
		Main.notify(_("Watching BNT"));
		});
		
		//bnt2
		this.TvItem.menu.addAction(_("BNT 2"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("bash -c \"rtmpdump -r 'http://ios.cdn.bg:2020/fls' -a 'fls' -f 'WIN 11,5,502,149' -p 'http://cdn.bg/live/fkL0GWOoP6' -W 'http://cdn.bg/eflash/jwplayer510/player.swf' -y 'bnt2.stream?at=b0d1270b39e08ad9c78dc53f43a1ba5c' -b '0' - | vlc --meta-title 'BNT 2' -\"");
		Main.notify(_("Watching BNT 2"));
		});
		
		//bnthd
		this.TvItem.menu.addAction(_("BNT HD"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("bash -c \"rtmpdump -r 'http://ios.cdn.bg:2020/fls' -a 'fls' -f 'WIN 11,5,502,149' -p 'http://cdn.bg/live/fkL0GWOoP6' -W 'http://cdn.bg/eflash/jwplayer510/player.swf' -y 'bntHDt.stream?at=b0d1270b39e08ad9c78dc53f43a1ba5c' -b '0' - | vlc --meta-title 'BNT HD' -\"");
		Main.notify(_("Watching BNT HD"));
		});
		
		//bntsat
		this.TvItem.menu.addAction(_("BNT World"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("bash -c \"rtmpdump -r 'rtmp://edge11.cdn.bg:2020/fls' -a 'fls/' -p 'http://i.cdn.bg/live/ls4wHAbTmY' -y 'bntW.stream?at=b0d1270b39e08ad9c78dc53f43a1ba5c' -b '0' - | vlc --meta-title 'BNT World' -\"");
		Main.notify(_("Watching BNT World"));
		});
		
		//btv
		this.TvItem.menu.addAction(_("bTV"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("bash -c \"rtmpdump -r 'rtmp://46.10.150.113:80/alpha' -a 'alpha' -f 'WIN 11,5,502,149' -W 'http://www.btv.bg/static/bg/shared/app/flowplayer/flowplayer.rtmp-3.2.13.swf' -p 'http://www.btv.bg/live/' -y 'alpha' --quiet | vlc --meta-title 'bTV' -\"");
		Main.notify(_("Watching bTV"));
		});
		
		//city
		this.TvItem.menu.addAction(_("City"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("bash -c \"rtmpdump -r 'rtmp://nodeb.gocaster.net:1935/CGL/_definst_/' -W 'http://iphone.fmstreams.com/jwplayer/player.swf' -p 'http://city.bg/live/' -y 'mp4:TODAYFM_TEST2' -b '0' | vlc --meta-title 'City' -\"");
		Main.notify(_("Watching City"));
		});
		
		//nova
		this.TvItem.menu.addAction(_("Nova"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("bash -c \"rtmpdump -r 'rtmp://e1.cdn.bg:2060/fls' -T 'N0v4TV6#2' -a 'fls' -f 'WIN 18,0,0,232' -W 'http://i.cdn.bg/eflash/jwNTV/player.swf' -p 'http://i.cdn.bg/live/0OmMKJ4SgY' -y 'ntv_1.stream' | vlc --meta-title 'NOVA' -\"");
		Main.notify(_("Watching Nova"));
		});
		
		//onair
		this.TvItem.menu.addAction(_("On Air"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("vlc 'http://ios.cdn.bg:2006/fls/bonair.stream/playlist.m3u8' --meta-title 'On Air'");
		Main.notify(_("Watching On Air"));
		});
		
		//thevoice
		this.TvItem.menu.addAction(_("The Voice"), function(event) {
		Main.Util.spawnCommandLine("killall -9 vlc");
		Main.Util.spawnCommandLine("bash -c \"rtmpdump -r 'rtmp://31.13.217.76/rtplive' -W 'http://www.thevoice.bg/js/thevoice_videostreem.swf' -p 'http://www.thevoice.bg/' -y 'thevoice_live.stream' -b '0' | vlc --meta-title 'The Voice' -\"");
		Main.notify(_("Watching The Voice"));
		});

        //end tv drop down menu                
		this.menu.addMenuItem(this.TvItem); 



		//kill
		this.menu.addAction(_("Stop"), function(event) {
                Main.Util.spawnCommandLine("killall -9 vlc");
                Main.Util.spawnCommandLine("killall -9 rtmpdump");
                Main.notify(_("All Stop"));
		}); 
                        
        }
        catch (e) {
            global.logError(e);
        }
    },
    
    on_applet_clicked: function(event) {
        this.menu.toggle();        
    },
        
    
};

function main(metadata, orientation) {  
    let myApplet = new MyApplet(orientation);
    return myApplet;      
}
