/** @odoo-module alias=mana_dashboard.theme_builder **/
var a0_0x34f201=a0_0x5f48;(function(_0x25f6f7,_0x284207){var _0x17956c=a0_0x5f48,_0x1764a4=_0x25f6f7();while(!![]){try{var _0x54631b=parseInt(_0x17956c(0x114))/0x1*(-parseInt(_0x17956c(0x131))/0x2)+-parseInt(_0x17956c(0x156))/0x3+-parseInt(_0x17956c(0x124))/0x4+parseInt(_0x17956c(0x11f))/0x5*(-parseInt(_0x17956c(0x170))/0x6)+-parseInt(_0x17956c(0x126))/0x7*(parseInt(_0x17956c(0x174))/0x8)+parseInt(_0x17956c(0x163))/0x9*(parseInt(_0x17956c(0x125))/0xa)+parseInt(_0x17956c(0x14a))/0xb;if(_0x54631b===_0x284207)break;else _0x1764a4['push'](_0x1764a4['shift']());}catch(_0x5bead6){_0x1764a4['push'](_0x1764a4['shift']());}}}(a0_0x86e4,0x23456));
 function a0_0x5f48(_0x1fa291,_0x5bfe4c){var _0x86e468=a0_0x86e4();return a0_0x5f48=function(_0x5f4819,_0x2f8b31){_0x5f4819=_0x5f4819-0x110;var _0x1e37f0=_0x86e468[_0x5f4819];return _0x1e37f0;},a0_0x5f48(_0x1fa291,_0x5bfe4c);}
 import {Component,useState,onPatched,reactive,toRaw,useRef,useEffect,onWillStart}  from '@odoo/owl';
 import {useService}  from '@web/core/utils/hooks';
 import  ManaColorPicker  from 'mana_dashboard.color_picker';
 import  ManaConfigNumber  from 'mana_dashboard.config_number';
 function a0_0x86e4(){var _0x5ac7a0=['timelineControlColor','symbol','backgroundColor','timelineItemColor','kColor','datazoomDataColor','extend','textColor','axisLabelShow','getTheme','axisTickShow','42MbyaKj','mapBorderWidth','axes','splitLineShow','2213328yZnbqe','env','loadThemes','saveThemeInfo','stringify','toolboxColor','115441rJHGdh','rpc','length','getAxis','kBorderColor','get_dashboard_id','visualMapColor','rootRef','splitLineColor','theme','borderWidth','27230unPiAI','state','timelineLineWidth','userAgent','open','671972FDwxOj','891370GbsNeh','7rOXcEh','components','axex','datazoomLabelColor','timelineLabelColor','legendTextColor','mapAreaColorE','mapBorderColor','timelineControlBorderWidth','kBorderWidth','symbolBorderWidth','2ezpZGz','defaultProps','timelineItemBorderWidth','textColorShow','getDashboardId','markTextColor','trigger','data','lineStyle','lineWidth','axisSeperateSettingChanges','attr','onThemeImported','mapLabelColorE','splitAreaShow','mapBorderColorE','mapAreaColor','push','config_id','color','updateSymbol','widget','timelineControlBorderColor','indexOf','axisSeperateSetting','6197807NTsMKw','dashboard_id','kBorderColor0','axis','selectPreDefinedTheme','label','mapLabelColor','bus','themeName','loadedThemes','props','tooltipAxisWidth','264468DRuOFJ','json','toolboxEmphasisColor','tooltipAxisColor','version','axisTickColor','graphLineWidth','datazoomBackgroundColor','datazoomHandleColor','render','error','setup','datazoomFillColor','27sZrxru','borderColor'];a0_0x86e4=function(){return _0x5ac7a0;};return a0_0x86e4();}
 import  ManaColorPickerList  from 'mana_dashboard.color_picker_list';
 import  ManaConfigColor  from 'mana_dashboard.config_color';
 import  ManaConfigColorList  from 'mana_dashboard.config_color_list';var VERSION=0x1;
 import  ManaAccordion  from 'mana_dashboard.accordion';var PRE_DEFINED_THEMES=[{'id':0x0,'name':'vintage','background':'#fef8ef','theme':['#d87c7c','#919e8b','#d7ab82','#6e7074','#61a0a8','#efa18d','#787464','#cc7e63','#724e58','#4b565b']},{'id':0x1,'name':'dark','background':'#333','theme':['#dd6b66','#759aa0','#e69d87','#8dc1a9','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab','#91ca8c','#f49f42']},{'id':0x2,'name':'westeros','background':'transparent','theme':['#516b91','#59c4e6','#edafda','#93b7e3','#a5e7f0','#cbb0e3']},{'id':0x3,'name':'essos','background':'rgba(242,234,191,0.15)','theme':['#893448','#d95850','#eb8146','#ffb248','#f2d643','#ebdba4']},{'id':0x4,'name':'wonderland','background':'transparent','theme':['#4ea397','#22c3aa','#7bd9a5','#d0648a','#f58db2','#f2b3c9']},{'id':0x5,'name':'walden','background':'rgba(252,252,252,0)','theme':['#3fb1e3','#6be6c1','#626c91','#a0a7e6','#c4ebad','#96dee8']},{'id':0x6,'name':'chalk','background':'#293441','theme':['#fc97af','#87f7cf','#f7f494','#72ccff','#f7c5a0','#d4a4eb','#d2f5a6','#76f2f2']},{'id':0x7,'name':'infographic','background':'transparent','theme':['#C1232B','#27727B','#FCCE10','#E87C25','#B5C334','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD','#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0']},{'id':0x8,'name':'macarons','background':'transparent','theme':['#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80','#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa','#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050','#59678c','#c9ab00','#7eb00a','#6f5553','#c14089']},{'id':0x9,'name':'roma','background':'transparent','theme':['#E01F54','#001852','#f5e8c8','#b8d2c7','#c6b38e','#a4d8c2','#f3d999','#d3758f','#dcc392','#2e4783','#82b6e9','#ff6347','#a092f1','#0a915d','#eaf889','#6699FF','#ff6666','#3cb371','#d5b158','#38b6b6']},{'id':0xa,'name':'shine','background':'transparent','theme':['#ff0000','#0cff00','#f7ff00']},{'id':0xb,'name':'purple-passion','background':'rgba(91,92,110,1)','theme':['#8a7ca8','#e098c7','#8fd3e8','#71669e','#cc70af','#7cb4cc']}],defaultTheme={'seriesCnt':0x3,'backgroundColor':'rgba(0, 0, 0, 0)','titleColor':'#464646','subtitleColor':'#6E7079','textColorShow':![],'textColor':'#333','markTextColor':'#eee','color':['#5470c6','#91cc75','#fac858','#ee6666','#73c0de','#3ba272','#fc8452','#9a60b4','#ea7ccc'],'borderColor':'#ccc','borderWidth':0x0,'visualMapColor':['#bf444c','#d88273','#f6efa6'],'legendTextColor':'#333','kColor':'#eb5454','kColor0':'#47b262','kBorderColor':'#eb5454','kBorderColor0':'#47b262','kBorderWidth':0x1,'lineWidth':0x2,'symbolSize':0x4,'symbol':'emptyCircle','symbolBorderWidth':0x1,'lineSmooth':![],'graphLineWidth':0x1,'graphLineColor':'#aaa','mapLabelColor':'#000','mapLabelColorE':'rgb(100,0,0)','mapBorderColor':'#444','mapBorderColorE':'#444','mapBorderWidth':0.5,'mapBorderWidthE':0x1,'mapAreaColor':'#eee','mapAreaColorE':'rgba(255,215,0,0.8)','axes':(function(){var _0x4eb31d=a0_0x5f48,_0x35ed11=['all','category','value','log','time'],_0x13a78b=['通用','类目','数值','对数','时间'],_0x238130=[];for(var _0xbf9a52=0x0;_0xbf9a52<_0x35ed11[_0x4eb31d(0x116)];++_0xbf9a52){_0x238130[_0x4eb31d(0x142)]({'type':_0x35ed11[_0xbf9a52],'name':_0x13a78b[_0xbf9a52]+'坐标轴','axisLineShow':_0x35ed11[_0xbf9a52]!=='value'&&_0x35ed11[_0xbf9a52]!=='log','axisLineColor':'#6E7079','axisTickShow':_0x35ed11[_0xbf9a52]!=='value'&&_0x35ed11[_0xbf9a52]!=='log','axisTickColor':'#6E7079','axisLabelShow':!![],'axisLabelColor':'#6E7079','splitLineShow':_0x35ed11[_0xbf9a52]!=='category'&&_0x35ed11[_0xbf9a52]!=='time','splitLineColor':['#E0E6F1'],'splitAreaShow':![],'splitAreaColor':['rgba(250,250,250,0.2)','rgba(210,219,238,0.2)']});}return _0x238130;}()),'axisSeperateSetting':!![],'axis':null,'toolboxColor':'#999','toolboxEmphasisColor':'#666','tooltipAxisColor':'#ccc','tooltipAxisWidth':0x1,'timelineLineColor':'#DAE1F5','timelineLineWidth':0x2,'timelineItemColor':'#A4B1D7','timelineItemColorE':'#FFF','timelineCheckColor':'#316bf3','timelineCheckBorderColor':'fff','timelineItemBorderWidth':0x1,'timelineControlColor':'#A4B1D7','timelineControlBorderColor':'#A4B1D7','timelineControlBorderWidth':0x1,'timelineLabelColor':'#A4B1D7'};defaultTheme['axis']=[defaultTheme[a0_0x34f201(0x172)][0x0]];
 function cloneObject(_0x3cd5ea){var _0x6ba514=a0_0x34f201;return $[_0x6ba514(0x16b)](!![],{},_0x3cd5ea);}
 function saveFile(_0x41dd96,_0x339bba,_0xa2a8f8){var _0x33068e=a0_0x34f201;if(isSafari())window[_0x33068e(0x123)]('data:text/plain;charset=utf-8,'+encodeURIComponent(_0x41dd96));else try{var _0x3b4b4a=new Blob([_0x41dd96],{'type':_0xa2a8f8});saveAs(_0x3b4b4a,_0x339bba);}catch(_0x51f9af){console[_0x33068e(0x160)](_0x51f9af),window['open']('data:text/plain;charset=utf-8,'+encodeURIComponent(_0x41dd96));}}
 function isSafari(){var _0x1558f4=a0_0x34f201;return navigator[_0x1558f4(0x122)][_0x1558f4(0x148)]('Safari')>0x0&&navigator[_0x1558f4(0x122)][_0x1558f4(0x148)]('Chrome')<0x0;}
 function isIe(){var _0x5c9733=a0_0x34f201;return navigator[_0x5c9733(0x122)][_0x5c9733(0x148)]('MSIE')>0x0;}
 function isEdge(){var _0x3606b9=a0_0x34f201;return navigator[_0x3606b9(0x122)][_0x3606b9(0x148)]('Trident')>0x0;}
 function isMac(){var _0x1b2a69=a0_0x34f201;return navigator[_0x1b2a69(0x122)][_0x1b2a69(0x148)]('Mac OS X')>0x0;}
export  default class ThemeBuilder extends Component{[a0_0x34f201(0x161)](){var _0x365cd1=a0_0x34f201;super[_0x365cd1(0x161)](),this[_0x365cd1(0x115)]=useService('rpc'),this[_0x365cd1(0x11b)]=useRef('root'),this[_0x365cd1(0x120)]=useState({'theme':_[_0x365cd1(0x16b)]({},defaultTheme),'themeName':'my theme','show_prevew':![],'charts':[],'options':[],'isPauseChartUpdating':![],'copyKbd':isMac()?'cmd':'ctrl','downloadable':!isIe()&&!isEdge(),'preDefinedThemes':PRE_DEFINED_THEMES,'loadedThemes':[],'chartDisplay':{'background':'#fff','title':'#000'}}),onWillStart(async()=>{var _0x5bbdac=_0x365cd1;await this[_0x5bbdac(0x110)]();}),onPatched(()=>{var _0x417ea4=_0x365cd1;this[_0x417ea4(0x111)]();});}[a0_0x34f201(0x119)](){var _0x21d873=a0_0x34f201;return this[_0x21d873(0x154)][_0x21d873(0x146)]['dashboard_id'];}async['loadThemes'](){var _0x33a801=a0_0x34f201;for(var _0x4bd9ca=0x0;_0x4bd9ca<PRE_DEFINED_THEMES['length'];++_0x4bd9ca){let _0x23bf9a='/mana_dashboard/static/themes/'+PRE_DEFINED_THEMES[_0x4bd9ca]['name']+'.json';const _0xfd8f7c=await fetch(_0x23bf9a,{'method':'GET'});let _0x5507ca=await _0xfd8f7c[_0x33a801(0x157)]();this[_0x33a801(0x120)]['loadedThemes'][_0x4bd9ca]={'id':_0x4bd9ca,'data':_0x5507ca};}let _0x315e81=this[_0x33a801(0x154)][_0x33a801(0x146)]['get_theme_info']();if(_0x315e81)try{this[_0x33a801(0x120)][_0x33a801(0x152)]=_0x315e81['themeName'],this[_0x33a801(0x120)][_0x33a801(0x11d)]=_0x315e81['themeData'],this[_0x33a801(0x15f)]();}catch(_0x1a6e01){console[_0x33a801(0x160)](_0x1a6e01);}this[_0x33a801(0x13b)]();}[a0_0x34f201(0x14e)](_0x56f0b9){var _0xb7d1b5=a0_0x34f201;for(var _0x1ffb1e=0x0;_0x1ffb1e<this[_0xb7d1b5(0x120)][_0xb7d1b5(0x153)][_0xb7d1b5(0x116)];++_0x1ffb1e){if(this[_0xb7d1b5(0x120)]['loadedThemes'][_0x1ffb1e]['id']===_0x56f0b9){this[_0xb7d1b5(0x13d)](this['state']['loadedThemes'][_0x1ffb1e][_0xb7d1b5(0x138)]);return;}}}[a0_0x34f201(0x13d)](_0x269f76){var _0x7325bc=a0_0x34f201;try{var _0x3d0afa=_0x269f76;if(_0x3d0afa[_0x7325bc(0x152)]===undefined&&_0x3d0afa[_0x7325bc(0x15a)]===undefined)return;this['state'][_0x7325bc(0x152)]=_0x3d0afa[_0x7325bc(0x152)]||'customed';if(_0x3d0afa['version']<VERSION){var _0x3e5279=[],_0x33dfcb=_0x3d0afa['theme'];for(var _0xa55d49 in defaultTheme){_0xa55d49!=='axis'&&(typeof _0x3d0afa[_0x7325bc(0x11d)][_0xa55d49]!=='undefined'?_0x33dfcb['attr']=_0x3d0afa[_0x7325bc(0x11d)][_0xa55d49]:_0x3e5279[_0x7325bc(0x142)](_0x3d0afa['theme'][_0x7325bc(0x13c)]));}if(_0x3e5279[_0x7325bc(0x116)]>0x0){}else console['warn']('导入的主题版本较低\uFF0C可能有部分属性未生效\u3002');}this[_0x7325bc(0x120)][_0x7325bc(0x11d)]=_0x3d0afa[_0x7325bc(0x11d)],this[_0x7325bc(0x13b)]();}catch(_0x2af8b6){alert('非法 JSON 格式\uFF01请使用本网站导出的 *.json 文件\u3002'),console['error'](_0x2af8b6);}}[a0_0x34f201(0x13b)](){var _0x16c389=a0_0x34f201;this[_0x16c389(0x120)][_0x16c389(0x11d)][_0x16c389(0x149)]?this[_0x16c389(0x120)][_0x16c389(0x11d)][_0x16c389(0x14d)]=this[_0x16c389(0x120)][_0x16c389(0x11d)]['axes']:this[_0x16c389(0x120)][_0x16c389(0x11d)][_0x16c389(0x128)]?this[_0x16c389(0x120)][_0x16c389(0x11d)][_0x16c389(0x14d)]=[this['state'][_0x16c389(0x11d)][_0x16c389(0x172)][0x0]]:this[_0x16c389(0x120)][_0x16c389(0x11d)][_0x16c389(0x14d)]=[];}[a0_0x34f201(0x16e)](_0x39cf2b=!![]){var _0x1b4323=a0_0x34f201,_0xd8d699='path://M237.062,81.761L237.062,81.761c-12.144-14.24-25.701-20.1-40.68-19.072 c-10.843,0.747-20.938,5.154-30.257,13.127c-9.51-5.843-19.8-9.227-30.859-10.366c0.521-3.197,1.46-6.306,2.85-9.363 c3.458-7.038,8.907-12.741,16.331-17.296c-5.609-3.384-11.227-6.799-16.854-10.279c-16.257,8.104-25.06,20.601-26.463,38.417 c-7.599,1.705-14.685,4.486-21.247,8.437c-9.164-7.677-18.996-11.917-29.496-12.632c-14.819-0.998-28.467,4.787-40.938,18.827 C6.445,96.182,0,114.867,0,136.242c-0.007,6.371,0.674,12.646,2.053,18.738c4.593,22.785,15.398,41.367,32.558,55.344 c15.43,12.773,29.901,18.023,43.362,16.981c7.074-0.561,13.624-3.977,19.685-10.192c10.534,5.49,20.391,8.217,29.561,8.203 c9.856-0.012,20.236-2.953,31.125-8.898c6.227,6.692,12.966,10.346,20.211,10.933c13.795,1.073,28.614-4.111,44.377-16.84 c17.49-14.104,28.043-32.79,31.796-55.485c0.836-5.624,1.272-11.292,1.272-16.966C255.998,115.814,249.707,96.601,237.062,81.761z  M54.795,97.7l40.661,14.496c-4.402,8.811-10.766,13.219-19.06,13.219c-2.542,0-4.917-0.419-7.122-1.274 C58.103,118.38,53.263,109.572,54.795,97.7z M150.613,185.396l-9.156-8.389l-7.619,12.951c-3.391,0.341-6.615,0.514-9.665,0.514 c-4.401,0-8.635-0.263-12.708-0.777l-8.634-14.973l-9.151,9.909c-4.91-2.717-9.15-5.856-12.708-9.413 c-8.81-8.295-13.384-17.959-13.727-28.97c2.877,1.692,7.427,3.461,13.675,5.308l10.636,13.629l9.44-9.852 c4.734,0.702,9.234,1.12,13.466,1.275l10.689,11.498l9.671-11.949c3.559-0.173,7.285-0.515,11.182-1.01l9.924,10.159l10.933-14.227 c5.931-1.351,11.196-2.798,15.771-4.323C179.747,163.538,169.068,176.414,150.613,185.396z M175.258,124.907 c-2.209,0.849-4.66,1.273-7.369,1.273c-8.134,0-14.489-4.415-19.052-13.224l40.905-14.477 C191.105,110.331,186.273,119.141,175.258,124.907z',_0x39b59c={'itemStyle':{'borderWidth':this[_0x1b4323(0x120)]['theme'][_0x1b4323(0x130)]},'lineStyle':{'width':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x13a)]},'symbolSize':this['state'][_0x1b4323(0x11d)]['symbolSize'],'symbol':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x166)],'smooth':this[_0x1b4323(0x120)][_0x1b4323(0x11d)]['lineSmooth']},_0x42b8e8={'borderWidth':this[_0x1b4323(0x120)]['theme'][_0x1b4323(0x11e)],'borderColor':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x164)]},_0x1b4b6b={'itemStyle':_0x42b8e8};this[_0x1b4323(0x120)]['themeName']==='halloween'&&(_0x39b59c[_0x1b4323(0x166)]=_0xd8d699,_0x1b4b6b[_0x1b4323(0x166)]=_0xd8d699);var _0x5581b7={'itemStyle':{'areaColor':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x141)],'borderColor':this[_0x1b4323(0x120)]['theme'][_0x1b4323(0x12d)],'borderWidth':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x171)]},'label':{'color':this[_0x1b4323(0x120)]['theme'][_0x1b4323(0x150)]},'emphasis':{'itemStyle':{'areaColor':this['state'][_0x1b4323(0x11d)][_0x1b4323(0x12c)],'borderColor':this[_0x1b4323(0x120)]['theme'][_0x1b4323(0x140)],'borderWidth':this[_0x1b4323(0x120)][_0x1b4323(0x11d)]['mapBorderWidthE']},'label':{'color':this[_0x1b4323(0x120)]['theme'][_0x1b4323(0x13e)]}}};return{'color':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x144)],'backgroundColor':_0x39cf2b?this['state'][_0x1b4323(0x11d)][_0x1b4323(0x167)]:'transparent','textStyle':this['state'][_0x1b4323(0x11d)][_0x1b4323(0x134)]?{'color':this['state'][_0x1b4323(0x11d)][_0x1b4323(0x16c)]}:{},'title':{'textStyle':{'color':this[_0x1b4323(0x120)][_0x1b4323(0x11d)]['titleColor']},'subtextStyle':{'color':this[_0x1b4323(0x120)][_0x1b4323(0x11d)]['subtitleColor']}},'line':_0x39b59c,'radar':_0x39b59c,'bar':((()=>{var _0x1242a3=_0x1b4323,_0x490156={'barBorderWidth':this[_0x1242a3(0x120)]['theme'][_0x1242a3(0x11e)],'barBorderColor':this['state'][_0x1242a3(0x11d)][_0x1242a3(0x164)]};return{'itemStyle':_0x490156};})()),'pie':_0x1b4b6b,'scatter':_0x1b4b6b,'boxplot':_0x1b4b6b,'parallel':_0x1b4b6b,'sankey':_0x1b4b6b,'funnel':_0x1b4b6b,'gauge':_0x1b4b6b,'candlestick':((()=>{var _0x220a4c=_0x1b4323,_0x1b1a14={'color':this[_0x220a4c(0x120)][_0x220a4c(0x11d)][_0x220a4c(0x169)],'color0':this[_0x220a4c(0x120)]['theme']['kColor0'],'borderColor':this[_0x220a4c(0x120)][_0x220a4c(0x11d)][_0x220a4c(0x118)],'borderColor0':this[_0x220a4c(0x120)][_0x220a4c(0x11d)][_0x220a4c(0x14c)],'borderWidth':this['state'][_0x220a4c(0x11d)][_0x220a4c(0x12f)]};return{'itemStyle':_0x1b1a14};})()),'graph':((()=>{var _0x375b4a=_0x1b4323,_0x5c91e8=cloneObject(_0x39b59c);_0x5c91e8[_0x375b4a(0x144)]=this['state'][_0x375b4a(0x11d)][_0x375b4a(0x144)];var _0x854c8e={'width':this[_0x375b4a(0x120)][_0x375b4a(0x11d)][_0x375b4a(0x15c)],'color':this[_0x375b4a(0x120)]['theme']['graphLineColor']},_0x5253c3={'color':this[_0x375b4a(0x120)]['theme']['markTextColor']};_0x5c91e8[_0x375b4a(0x139)]=_0x854c8e,_0x5c91e8[_0x375b4a(0x14f)]=_0x5253c3;var _0x25a8c6=_0x5c91e8['itemStyle'];return _0x25a8c6['borderWidth']=this[_0x375b4a(0x120)]['theme']['borderWidth'],_0x25a8c6[_0x375b4a(0x164)]=this[_0x375b4a(0x120)][_0x375b4a(0x11d)][_0x375b4a(0x164)],_0x5c91e8;})()),'map':_0x5581b7,'geo':_0x5581b7,'categoryAxis':this[_0x1b4323(0x117)](0x1),'valueAxis':this[_0x1b4323(0x117)](0x2),'logAxis':this['getAxis'](0x3),'timeAxis':this[_0x1b4323(0x117)](0x4),'toolbox':{'iconStyle':{'borderColor':this['state']['theme'][_0x1b4323(0x113)]},'emphasis':{'iconStyle':{'borderColor':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x158)]}}},'legend':{'textStyle':{'color':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x12b)]}},'tooltip':{'axisPointer':{'lineStyle':{'color':this[_0x1b4323(0x120)]['theme'][_0x1b4323(0x159)],'width':this['state'][_0x1b4323(0x11d)][_0x1b4323(0x155)]},'crossStyle':{'color':this[_0x1b4323(0x120)][_0x1b4323(0x11d)]['tooltipAxisColor'],'width':this[_0x1b4323(0x120)][_0x1b4323(0x11d)]['tooltipAxisWidth']}}},'timeline':{'lineStyle':{'color':this['state'][_0x1b4323(0x11d)]['timelineLineColor'],'width':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x121)]},'itemStyle':{'color':this['state'][_0x1b4323(0x11d)][_0x1b4323(0x168)],'borderWidth':this[_0x1b4323(0x120)]['theme'][_0x1b4323(0x133)]},'controlStyle':{'color':this['state']['theme'][_0x1b4323(0x165)],'borderColor':this[_0x1b4323(0x120)]['theme'][_0x1b4323(0x147)],'borderWidth':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x12e)]},'checkpointStyle':{'color':this['state'][_0x1b4323(0x11d)]['timelineCheckColor'],'borderColor':this[_0x1b4323(0x120)][_0x1b4323(0x11d)]['timelineCheckBorderColor']},'label':{'color':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x12a)]},'emphasis':{'itemStyle':{'color':this[_0x1b4323(0x120)][_0x1b4323(0x11d)]['timelineItemColorE']},'controlStyle':{'color':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x165)],'borderColor':this[_0x1b4323(0x120)]['theme'][_0x1b4323(0x147)],'borderWidth':this[_0x1b4323(0x120)]['theme'][_0x1b4323(0x12e)]},'label':{'color':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x12a)]}}},'visualMap':{'color':this[_0x1b4323(0x120)]['theme'][_0x1b4323(0x11a)]},'dataZoom':{'backgroundColor':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x15d)],'dataBackgroundColor':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x16a)],'fillerColor':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x162)],'handleColor':this['state'][_0x1b4323(0x11d)][_0x1b4323(0x15e)],'handleSize':this['state'][_0x1b4323(0x11d)]['datazoomHandleWidth']+'%','textStyle':{'color':this[_0x1b4323(0x120)][_0x1b4323(0x11d)][_0x1b4323(0x129)]}},'markPoint':((()=>{var _0x5820c5=_0x1b4323,_0x5baa38={'color':this['state']['theme'][_0x5820c5(0x136)]};return{'label':_0x5baa38,'emphasis':{'label':_0x5baa38}};})())};}[a0_0x34f201(0x145)](_0x49921b){var _0x305957=a0_0x34f201;this[_0x305957(0x120)][_0x305957(0x11d)][_0x305957(0x166)]=_0x49921b;}[a0_0x34f201(0x117)](_0x3e8806){var _0x1b09ac=a0_0x34f201;return!this['state'][_0x1b09ac(0x11d)]['axisSeperateSetting']&&(_0x3e8806=0x0),{'axisLine':{'show':this[_0x1b09ac(0x120)]['theme'][_0x1b09ac(0x172)][_0x3e8806]['axisLineShow'],'lineStyle':{'color':this[_0x1b09ac(0x120)][_0x1b09ac(0x11d)]['axes'][_0x3e8806]['axisLineColor']}},'axisTick':{'show':this[_0x1b09ac(0x120)][_0x1b09ac(0x11d)][_0x1b09ac(0x172)][_0x3e8806][_0x1b09ac(0x16f)],'lineStyle':{'color':this[_0x1b09ac(0x120)]['theme']['axes'][_0x3e8806][_0x1b09ac(0x15b)]}},'axisLabel':{'show':this[_0x1b09ac(0x120)]['theme']['axes'][_0x3e8806][_0x1b09ac(0x16d)],'color':this[_0x1b09ac(0x120)][_0x1b09ac(0x11d)][_0x1b09ac(0x172)][_0x3e8806]['axisLabelColor']},'splitLine':{'show':this[_0x1b09ac(0x120)][_0x1b09ac(0x11d)]['axes'][_0x3e8806][_0x1b09ac(0x173)],'lineStyle':{'color':this[_0x1b09ac(0x120)][_0x1b09ac(0x11d)]['axes'][_0x3e8806][_0x1b09ac(0x11c)]}},'splitArea':{'show':this[_0x1b09ac(0x120)][_0x1b09ac(0x11d)][_0x1b09ac(0x172)][_0x3e8806][_0x1b09ac(0x13f)],'areaStyle':{'color':this['state']['theme'][_0x1b09ac(0x172)][_0x3e8806]['splitAreaColor']}}};}[a0_0x34f201(0x135)](){var _0x5a1a87=a0_0x34f201;return this[_0x5a1a87(0x154)][_0x5a1a87(0x146)][_0x5a1a87(0x14b)];}async[a0_0x34f201(0x111)](){var _0x3be2c2=a0_0x34f201;let _0x543dc9={'version':VERSION,'themeName':this[_0x3be2c2(0x120)]['themeName'],'themeData':toRaw(this[_0x3be2c2(0x120)]['theme']),'theme':this[_0x3be2c2(0x16e)]()};if(!this[_0x3be2c2(0x154)][_0x3be2c2(0x143)])await this[_0x3be2c2(0x115)]({'model':'mana_dashboard.dashboard','method':'save_theme_info','args':[this['props'][_0x3be2c2(0x146)]['dashboard_id'],JSON[_0x3be2c2(0x112)](_0x543dc9)]},{'shadow':!![]}),this[_0x3be2c2(0x154)]['widget']['set_theme'](_0x543dc9,{});else{let _0x2cae49=this[_0x3be2c2(0x154)][_0x3be2c2(0x143)];await this['rpc']({'model':'mana_dashboard.any_config','method':'save_theme_info','args':[_0x2cae49,JSON[_0x3be2c2(0x112)](_0x543dc9)]},{'shadow':!![]}),this[_0x3be2c2(0x175)][_0x3be2c2(0x151)][_0x3be2c2(0x137)]('mana_dashboard.config_theme_changed',{'config_id':_0x2cae49,'theme_info':_0x543dc9});}}};ThemeBuilder[a0_0x34f201(0x154)]={'widget':{'required':!![]},'inDialog':{'type':Boolean,'optional':!![]},'config_id':{'type':Number,'optional':!![]}},ThemeBuilder[a0_0x34f201(0x132)]={'inDialog':![],'config_id':0x0},ThemeBuilder['template']='mana_dashboard.theme_builder',ThemeBuilder[a0_0x34f201(0x127)]={'ManaColorPicker':ManaColorPicker,'ManaConfigNumber':ManaConfigNumber,'ManaConfigColor':ManaConfigColor,'ManaConfigColorList':ManaConfigColorList,'ManaColorPickerList':ManaColorPickerList,'ManaAccordion':ManaAccordion};