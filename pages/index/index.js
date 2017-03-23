//index.js
//获取应用实例
var app = getApp()

function pad(num, n) {
  var len = num.toString().length
  while(len < n) {
    num = "0" + num
    len++
  }
  return num
}

Page({
  data: {
    year_opts:[[1980,1990,1996],[80,90,96]],
    currency_opts:[["1角","2角","5角","1元","2元","5元"],["付","位","信","仁","伙","佳"],[50000,50000,50000,40000,40000,25000]],
    code_opts: [[1,2,3,4,5,6,7,8,9,0],["扎","打","扛","抖","拉","持","捎","接","揖","搞"]],
  head_code:[
    //第一大组（1组）
    "CP","CQ","CR","CS","CT","CU","CW","CX","CY","CZ",      //C组
    "EP","EQ","ER","ES","ET","EU","EW","EX","EY","EZ",      //E组
    "GP","GQ","GR","GS","GT","GU","GW","GX","GY","GZ",      //G组
    "IP","IQ","IR","IS","IT","IU","IW","IX","IY","IZ",      //I组
    "AP","AQ","AR","AS","AT","AU","AW","AX","AY","AZ",      //A组
    "BP","BQ","BR","BS","BT","BU","BW","BX","BY","BZ",      //B组
    "DP","DQ","DR","DS","DT","DU","DW","DX","DY","DZ",      //D组
    "FP","FQ","FR","FS","FT","FU","FW","FX","FY","FZ",      //F组
    "HP","HQ","HR","HS","HT","HU","HW","HX","HY","HZ",      //H组
    "JP","JQ","JR","JS","JT","JU","JW","JX","JY","JZ",      //J组
    //第二大组（2组，扎组
    "PA","PB","PC","PD","PE","PF","PG","PH","PI","PJ",      //P组
    "RA","RB","RC","RD","RE","RF","RG","RH","RI","RJ",      //R组
    "TA","TB","TC","TD","TE","TF","TG","TH","TI","TJ",      //T组
    "WA","WB","WC","WD","WE","WF","WG","WH","WI","WJ",      //W组
    "YA","YB","YC","YD","YE","YF","YG","YH","YI","YJ",      //Y组
    "QA","QB","QC","QD","QE","QF","QG","QH","QI","QJ",      //Q组
    "SA","SB","SC","SD","SE","SF","SG","SH","SI","SJ",      //S组
    "UA","UB","UC","UD","UE","UF","UG","UH","UI","UJ",      //U组
    "XA","XB","XC","XD","XE","XF","XG","XH","XI","XJ",      //X组
    "ZA","ZB","ZC","ZD","ZE","ZF","ZG","ZH","ZI","ZJ",      //Z组
    //第三、四大组（3组，打组）
    "PK","PL","PM","PN","PO","RK","RL","RM","RN","RO",      //P、R组
    "TK","TL","TM","TN","TO","WK","WL","WM","WN","WO",      //T、W组
    "YK","YL","YM","YN","YO","QK","QL","QM","QN","QO",      //Y、Q组
    "SK","SL","SM","SN","SO","UK","UL","UM","UN","UO",      //S、U组
    "XK","XL","XM","XN","XO","ZK","ZL","ZM","ZN","ZO",      //X、Z组
    "AK","AL","AM","AN","AO","CK","CL","CM","CN","CO",      //A、C组
    "EK","EL","EM","EN","EO","GK","GL","GM","GN","GO",      //E、G组
    "IK","IL","IM","IN","IO","BK","BL","BM","BN","BO",      //I、B组
    "DK","DL","DM","DN","DO","FK","FL","FM","FN","FO",      //D、F组
    "HK","HL","HM","HN","HO","JK","JL","JM","JN","JO",      //H、J组
    //第五、六大组（4组，扛组）
    "KP","KQ","KR","KS","KT","KU","KW","KX","KY","KZ",      //K组
    "MP","MQ","MR","MS","MT","MU","MW","MX","MY","MZ",      //M组
    "OP","OQ","OR","OS","OT","OU","OW","OX","OY","OZ",      //O组
    "LP","LQ","LR","LS","LT","LU","LW","LX","LY","LZ",      //L组
    "NP","NQ","NR","NS","NT","NU","NW","NX","NY","NZ",      //N组
    "KA","KB","KC","KD","KE","KF","KG","KH","KI","KJ",      //K组
    "MA","MB","MC","MD","ME","MF","MG","MH","MI","MJ",      //M组
    "OA","OB","OC","OD","OE","OF","OG","OH","OI","OJ",      //O组
    "LA","LB","LC","LD","LE","LF","LG","LH","LI","LJ",      //L组
    "NA","NB","NC","ND","NE","NF","NG","NH","NI","NJ",      //N组
    //第七大组（5组，抖组）
    "AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ",      //A组
    "CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ",      //C组
    "EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ",      //E组
    "GA","GB","GC","GD","GE","GF","GG","GH","GI","GJ",      //G组
    "IA","IB","IC","ID","IE","IF","IG","IH","II","IJ",      //I组
    "BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ",      //B组
    "DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ",      //D组
    "FA","FB","FC","FD","FE","FF","FG","FH","FI","FJ",      //F组
    "HA","HB","HC","HD","HE","HF","HG","HH","HI","HJ",      //H组
    "JA","JB","JC","JD","JE","JF","JG","JH","JI","JJ",      //J组
    //第八大组（6组，拉组）
    "PP","PQ","PR","PS","PT","PU","PW","PX","PY","PZ",      //P组
    "RP","RQ","RR","RS","RT","RU","RW","RX","RY","RZ",      //R组
    "TP","TQ","TR","TS","TT","TU","TW","TX","TY","TZ",      //T组
    "WP","WQ","WR","WS","WT","WU","WW","WX","WY","WZ",      //W组
    "YP","YQ","YR","YS","YT","YU","YW","YX","YY","YZ",      //Y组
    "QP","QQ","QR","QS","QT","QU","QW","QX","QY","QZ",      //Q组
    "SP","SQ","SR","SS","ST","SU","SW","SX","SY","SZ",      //S组
    "UP","UQ","UR","US","UT","UU","UW","UX","UY","UZ",      //U组
    "XP","XQ","XR","XS","XT","XU","XW","XX","XY","XZ",      //X组
    "ZP","ZQ","ZR","ZS","ZT","ZU","ZW","ZX","ZY","ZZ",      //Z组
    //第九大组（7组，持组）
    "KK","KL","KM","KN","KO",                     //K组
    "MK","ML","MM","MN","MO",                     //M组
    "OK","OL","OM","ON","OO",                     //O组
    "LK","LL","LM","LN","LO",                     //L组
    "NK","NL","NM","NN","NO"],                    //N组
    value: [1,2,2,2,2],
    year:1,
    currency:2,
    head:332,
    input:'N',
    serial:"00000NaN~00000NaN"
  },

  bindDateChange: function(e) {
      const val = e.detail.value
      var s = parseInt(this.data.input) * this.data.currency_opts[2][val[1]]
      this.setData({
      year: val[0],
      currency: val[1],
      head: this.data.code_opts[0][val[2]]*100 + this.data.code_opts[0][val[3]]*10 + this.data.code_opts[0][val[4]] - 1,
      serial:pad(s  - this.data.currency_opts[2][val[1]] + 1,8)+ "~" + pad(s ,8)
    })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.redirectTo({
      url: '../fifth/fifth'
    })
  },

  bindKeyInput: function(e) {
    var s=parseInt(e.detail.value) * this.data.currency_opts[2][this.data.currency]
    this.setData({
      input:e.detail.value,
      serial:pad(s  - this.data.currency_opts[2][this.data.currency] + 1,8)+ "~" + pad(s ,8)
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
