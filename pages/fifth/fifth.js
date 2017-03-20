//index.js
//获取应用实例
var app = getApp()
const date = new Date()

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
    start_year:1999,
    end_year:date.getFullYear(),
    year_opts:[],
    count:50000,
  currency_opts:[["1元","10元"],["玑","玮"]],
  code_opts: [[1,2,3,4,5,6,7,8,9,0],["艺","驭","令","怀","庚","诠","宾","晾","喆","榕"]],
  head_code:[
    //第一大组（1组）
    "FA","FB","FC","FD","FE","FF","FG","FH","FI","FJ", //F组
    "EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ", //E组
    "GA","GB","GC","GD","GE","GF","GG","GH","GI","GJ", //G组
    "DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ", //D组
    "HA","HB","HC","HD","HE","HF","HG","HH","HI","HJ", //H组
    "CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ", //C组
    "IA","IB","IC","ID","IE","IF","IG","IH","II","IJ", //I组
    "BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ", //B组
    "JA","JB","JC","JD","JE","JF","JG","JH","JI","JJ", //J组
    "AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ", //A组
    //第二大组（2组，艺组）
    "PA","PB","PC","PD","PE","PF","PG","PH","PI","PJ", //P组
    "ZA","ZB","ZC","ZD","ZE","ZF","ZG","ZH","ZI","ZJ", //Z组
    "QA","QB","QC","QD","QE","QF","QG","QH","QI","QJ", //Q组
    "YA","YB","YC","YD","YE","YF","YG","YH","YI","YJ", //Y组
    "RA","RB","RC","RD","RE","RF","RG","RH","RI","RJ", //R组
    "XA","XB","XC","XD","XE","XF","XG","XH","XI","XJ", //X组
    "SA","SB","SC","SD","SE","SF","SG","SH","SI","SJ", //S组
    "WA","WB","WC","WD","WE","WF","WG","WH","WI","WJ", //W组
    "TA","TB","TC","TD","TE","TF","TG","TH","TI","TJ", //T组
    "UA","UB","UC","UD","UE","UF","UG","UH","UI","UJ", //U组
    //第三大组（3组，驭组）
    "AP","AQ","AR","AS","AT","AU","AW","AX","AY","AZ", //A组
    "DP","DQ","DR","DS","DT","DU","DW","DX","DY","DZ", //D组
    "GP","GQ","GR","GS","GT","GU","GW","GX","GY","GZ", //G组
    "JP","JQ","JR","JS","JT","JU","JW","JX","JY","JZ", //J组
    "CP","CQ","CR","CS","CT","CU","CW","CX","CY","CZ", //C组
    "FP","FQ","FR","FS","FT","FU","FW","FX","FY","FZ", //F组
    "IP","IQ","IR","IS","IT","IU","IW","IX","IY","IZ", //I组
    "BP","BQ","BR","BS","BT","BU","BW","BX","BY","BZ", //B组
    "EP","EQ","ER","ES","ET","EU","EW","EX","EY","EZ", //E组
    "HP","HQ","HR","HS","HT","HU","HW","HX","HY","HZ", //H组
    //第四大组（4组，令组）
    "PP","PQ","PR","PS","PT","PU","PW","PX","PY","PZ", //P组
    "SP","SQ","SR","SS","ST","SU","SW","SX","SY","SZ", //S组
    "WP","WQ","WR","WS","WT","WU","WW","WX","WY","WZ", //W组
    "ZP","ZQ","ZR","ZS","ZT","ZU","ZW","ZX","ZY","ZZ", //Z组
    "RP","RQ","RR","RS","RT","RU","RW","RX","RY","RZ", //R组
    "UP","UQ","UR","US","UT","UU","UW","UX","UY","UZ", //U组
    "YP","YQ","YR","YS","YT","YU","YW","YX","YY","YZ", //Y组
    "QP","QQ","QR","QS","QT","QU","QW","QX","QY","QZ", //Q组
    "TP","TQ","TR","TS","TT","TU","TW","TX","TY","TZ", //T组
    "XP","XQ","XR","XS","XT","XU","XW","XX","XY","XZ", //X组
    //第五、六大组（5组，怀组）
    "QK","QL","QM","QN","QO","TK","TL","TM","TN","TO", //Q T组
    "XK","XL","XM","XN","XO","PK","PL","PM","PN","PO", //X P组
    "SK","SL","SM","SN","SO","WK","WL","WM","WN","WO", //S W组
    "ZK","ZL","ZM","ZN","ZO","RK","RL","RM","RN","RO", //Z R组
    "UK","UL","UM","UN","UO","YK","YL","YM","YN","YO", //U Y组
    "KP","KQ","KR","KS","KT","KU","KW","KX","KY","KZ", //K组
    "NP","NQ","NR","NS","NT","NU","NW","NX","NY","NZ", //N组
    "LP","LQ","LR","LS","LT","LU","LW","LX","LY","LZ", //L组
    "OP","OQ","OR","OS","OT","OU","OW","OX","OY","OZ", //O组
    "MP","MQ","MR","MS","MT","MU","MW","MX","MY","MZ", //M组
    //第七、八大组（6组，庚组）
    "CK","CL","CM","CN","CO","FK","FL","FM","FN","FO", //C F组
    "IK","IL","IM","IN","IO","BK","BL","BM","BN","BO", //I B组
    "EK","EL","EM","EN","EO","HK","HL","HM","HN","HO", //E H组
    "AK","AL","AM","AN","AO","DK","DL","DM","DN","DO", //A D组
    "GK","GL","GM","GN","GO","JK","JL","JM","JN","JO", //G J组
    "KA","KB","KC","KD","KE","KF","KG","KH","KI","KJ", //K组
    "NA","NB","NC","ND","NE","NF","NG","NH","NI","NJ", //N组
    "LA","LB","LC","LD","LE","LF","LG","LH","LI","LJ", //L组
    "OA","OB","OC","OD","OE","OF","OG","OH","OI","OJ", //O组
    "MA","MB","MC","MD","ME","MF","MG","MH","MI","MJ", //M组
    //第九大组（7组，诠组）
    "MK","ML","MM","MN","MO",                          //M组
    "KK","KL","KM","KN","KO",                          //K组
    "NK","NL","NM","NN","NO",                          //N组
    "LK","LL","LM","LN","LO",                          //L组
    "OK","OL","OM","ON","OO"],                         //O组
    value: [0,1,2,2,2],
    year:0,
    currency:1,
    head:332,
    serial:"00000NaN~00000NaN"
  },

  bindDateChange: function(e) {
      const val = e.detail.value
      this.setData({
      year: val[0],
      currency: val[1],
      head: this.data.code_opts[0][val[2]]*100 + this.data.code_opts[0][val[3]]*10 + this.data.code_opts[0][val[4]] - 1
    })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.redirectTo({
      url: '../index/index'
    })
  },
  
  bindKeyInput: function(e) {
    var s=parseInt(e.detail.value) * this.data.count
    this.setData({
      serial:pad(s - this.data.count + 1,8)+ "~" + pad(s,8)
    })
  },

  onLoad: function () {
    var t = []
    var c =[]
    var b=[]
    for (let i = this.data.start_year ; i <= this.data.end_year; i++) {
      c.push(i)
      b.push(pad(i%100,2))
    }
    t.push(c,b)

    this.setData({
      year_opts:t
    })

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
