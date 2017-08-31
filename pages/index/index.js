//index.js
//获取应用实例
import title from '../../plugins/title/title.js';
import media from '../../plugins/media/media.js';
import widget from '../../plugins/widget.js';

var app = getApp();
var plugins={'layer12B53ADFB29791777F32F10384CA45C7':{"left":227,"top":20,"width":100,"height":100,"zindex":0,"childprop":{"message":"Text1"},"type":"title"},
    'layer12B53ADFB29791777F32F10384CA45C8':{"left":227,"top":20,"width":100,"height":100,"zindex":0,"childprop":{"message":"Text2"},"type":"title"},
    'layer12B53ADFB29791777F32F10384CA45C9':{"left":227,"top":20,"width":100,"height":100,"zindex":0,"childprop":{"src":"https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=902858165,598258651&fm=85&s=4DA13C72D7227701067861D2030080B2"},"type":"media"}
    };
var modrel={'title':title,'media':media}

var pageconf={
  data: {
    plugins:plugins
  }
}
for(var modid in plugins){
  (function(){
    var moddata=plugins[modid];
    var cls=modrel[moddata.type];
    cls().install(pageconf, {scope:modid,
    static:{
      param:moddata.childprop
    }
    })
  })(modid)
}
Page(pageconf)
