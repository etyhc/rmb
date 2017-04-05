//index.js
//获取应用实例
var app = getApp()

//数字前面补零
function pad(num, n) {
  var len = num.toString().length
  while(len < n) {
    num = "0" + num
    len++
  }
  return num
}

//查询荧光 code是代码,head是冠号,须大写
function getLight(that,code,head) {
  var endout=[]

  //早期冠号,第一大组第二大组都是早期冠号
  for(var i=0 ;i<200;i++ ) {
  if(that.data.head_code[i] == head) {
          endout.push('早期冠号')
          break
      }
  }
  
  //查冠号
  for(var o in that.data.light_opts[code]) {
      for (var hh in that.data.light_opts[code][o][0])
          if(that.data.light_opts[code][o][0][hh] == head)
              endout.push(that.data.light_opts[code][o][1])
  }

  if(endout.length == 0)
    endout.push('普通')
  return endout;
}
Page({
  data: {
    year_opts:[[1980,1990,1996],[80,90,96]],
    currency_opts:[
      ["1角","2角","5角","1元","2元","5元"],
      ["付","位","信","仁","伙","佳"],
      [50000,50000,50000,40000,40000,25000]],
    code_opts: [
      [1,2,3,4,5,6,7,8,9,0],
      ["扎","打","扛","抖","拉","持","捎","接","揖","搞"]],
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
    'light_opts': {
    '902': [
        [['DT', 'FW', 'FY', 'HP', 'HR', 'PA', 'PC', 'PD'], '绿幽灵'],
        [['JX', 'ZJ'], '珍稀绿幽灵'],
        [['JU', 'JW', 'JX', 'ZH', 'ZI', 'ZJ'], '补号']],
    '802': [
        [[
          'CP32', 'CS33', 'CT61', 'CU32', 'CX37', 'GR77', 'GU86', 'GW44', 'IS83', 'IW65',
          'AX31', 'AY59]'], '绿钻'],
        [['JZ'], '补号']],
    '805': [
        [[
            'CZ', 'EP', 'ER', 'ES', 'EU', 'EW', 'EZ', 'GP', 'GQ', 'GR',
            'GY', 'GZ', 'AT', 'AU', 'AX', 'AY', 'IR', 'IS', 'IT', 'IW',
            'IX', 'IY', 'IZ', 'BP', 'BQ', 'BR', 'BS', 'BT', 'BU', 'BW',
            'BX', 'BY', 'BZ', 'DP', 'DQ', 'DR', 'DS', 'DT', 'DU', 'DZ',
            'FP', 'FQ', 'FX', 'FY'],'苍松翠鹤'],
        [['JX', 'JZ', 'JN', 'JO', 'ZI', 'ZJ', 'ZM', 'ZN', 'ZO'], '补号']],
    '8001': [
        [['WG98', 'WC53', 'WH22', 'WA21', 'WA70', 'WB69'], '青天白日'],
        [['WE000693'], '双面银白强光'],
        [['WN', 'WO', 'YK', 'YL', 'YM', 'YN', 'QL'], '强荧光黄金甲'],
        [[
          'CW', 'CY', 'ET', 'ER', 'EW', 'EU', 'EX', 'GR', 'GS', 'GW',
          'GU', 'AY', 'AS', 'BT', 'BZ'], '两边双面背红荧光'],
        [['CL31', 'AL67'], '中间荧光'],
        [['CL147', 'CK001', 'CL647', 'CK070', 'BK15', 'BK27', 'BK55'], '中间荧光头有'],//文档看不懂
        [[
            'ZH', 'WG', 'RA', 'RH', 'RM', 'RK', 'RG', 'YA', 'YG', 'XC',
            'XF', 'SE', 'SB', 'TF', 'TH', 'TB', 'QK', 'PO', 'DU', 'YI'], '中强黄金甲'],
        [[
            'WG', 'XB', 'XC', 'XE', 'XF', 'XG', 'XH', 'YI', 'YJ', 'RL',
            'RM', 'DT', 'DU', 'DW', 'DX', 'FS', 'FT', 'FU', 'FW', 'FY',
            'FZ', 'HP', 'HQ', 'HR', 'HS', 'HT', 'JP', 'JQ', 'JR', 'JW',
            'PA', 'PB', 'PC', 'PD', 'PE', 'PF', 'PG', 'PH', 'PI', 'PJ',
            'QA', 'QB', 'QC', 'QF', 'QH', 'QJ', 'RA', 'RB', 'RC', 'RD',
            'RE', 'RF', 'RG', 'RH', 'RJ', 'SA', 'SB', 'SC', 'SD', 'SE',
            'SF', 'SG', 'SI', 'TA', 'TB', 'TD', 'TF', 'TG', 'TH', 'TI',
            'TJ', 'UA', 'UB', 'UC', 'UD', 'UE', 'UG', 'UF', 'UH', 'UI',
            'UJ', 'WE', 'WF', 'WJ', 'XA', 'XD', 'XI', 'XJ', 'YA', 'YB',
            'YC', 'YE', 'YF', 'YG', 'YH', 'ZA', 'ZB', 'ZC', 'ZE', 'ZF',
            'ZG', 'ZH', 'PK', 'PL', 'PN', 'PM', 'PO', 'QK', 'RK', 'RI',
            'BK', 'SH', 'XN', 'YO', 'ZO'], '弱荧光'],
        [[
            'JT', 'JU', 'JW', 'JX', 'JZ', 'ZH', 'ZI', 'ZJ', 'JN', 'JO',
            'ZM', 'ZN', 'ZO', 'NJ', 'NY', 'NZ', 'JG', 'JH', 'JI', 'JJ',
            'JA', 'JB', 'JC', 'ZT', 'ZU', 'ZW', 'ZX', 'ZY', 'ZZ', 'NN'], '补号']],
    '8002': [
        [['CT', 'CY', 'CZ', 'ES', 'GX', 'PA', 'PB', 'PC', 'PD'], '青绿美翠'],//文档看不懂
        [['DQ', 'HP'], '部分青绿美翠'],
        [[
            'XW', 'CX', 'CY', 'DP', 'DQ', 'DR', 'DS', 'DT', 'DU', 'DW',
            'ET', 'EU', 'EW', 'EX', 'EY', 'GP', 'GQ', 'GR', 'GS', 'GT',
            'GU', 'GW', 'GX', 'GY', 'GZ', 'IQ', 'IR', 'IS', 'IT', 'IU',
            'IW', 'AS', 'BU', 'JZ', 'ZI'], '一星稀有冠号'],
        [['CQ', 'CR', 'CS', 'CT', 'CU', 'CZ', 'ER', 'E', 'ZJ', 'ZO'], '二星稀有冠号'],
        [['CP', 'EP', 'EQ', 'ZN'],'三星稀有冠号']
            [['JX'], '四星稀有冠号']],
    '8010': [
        [['NY', 'NI', 'ZI', 'ZH', 'ZO', 'QC'],'火凤凰']],
    '801': [
        [['TG', 'TH', 'UF', 'UG', 'UH', 'UI', 'UJ', 'WD', 'WE', 'WF', 'WG', 'ZH'], '红金龙'],
        [['ZH', 'UI', 'UJ'], '珍稀红金龙'],
        [['RJ', 'TA', 'TB', 'TC', 'TD', 'TE', 'TF'], '部分红金龙'],
        [[
            'AZ', 'BP', 'BQ', 'BR', 'BS', 'BT', 'BU', 'BW', 'BX', 'BY',
            'GS', 'GT', 'GU', 'GW', 'GX', 'JQ', 'JR', 'JS', 'JT', 'JW',
            'PA', 'PB', 'PC', 'PD', 'PE', 'RJ', 'TA'], '金龙王'],
        [['HU'], '五星稀有冠号'],
        [['JU', 'AT', 'JT', 'JG'], '四星稀有冠号'],
        [['NY', 'JI', 'NM'], '三星稀有冠号'],
        [['FX', 'GP', 'IX', 'ZM', 'JB', 'JH', 'ZU'], '二星稀有冠号'],
        [[
            'BX', 'CP', 'CQ', 'CR', 'CU', 'CW', 'CX', 'CY', 'CZ', 'DT',
            'ES', 'GT', 'IP', 'IQ', 'IR', 'IT', 'IU', 'JW', 'JX', 'JZ',
            'ZH', 'ZI', 'ZJ', 'ZN', 'ZO', 'JN', 'JO', 'NZ', 'JA', 'JC',
            'JJ', 'NJ', 'ZT', 'ZW', 'ZX', 'ZY', 'ZZ', 'NN', 'NO'], '一星稀有冠号']],
    '8005': [
        [[
            'FY', 'FZ', 'HP', 'HQ', 'HR', 'HS', 'HT', 'HU', 'PF', 'PG',
            'PH', 'PI', 'PJ', 'QF', 'QG', 'QH', 'QI', 'QJ', 'RA', 'RB',
            'RC', 'RD', 'RE', 'RF', 'RG', 'RH', 'RI', 'RJ', 'SA', 'SB',
            'SC', 'SD', 'SE', 'SF', 'SG', 'SH', 'SI', 'SJ', 'UA', 'UB',
            'WC', 'WD', 'XF', 'XG', 'XH', 'XI', 'XJ', 'YA', 'YB', 'YC',
            'YD', 'YE', 'YF', 'YG', 'YH', 'ZA', 'ZB', 'ZC', 'ZD', 'ZE',
            'ZF', 'ZG', 'ZH', 'QK', 'QL', 'QM', 'QN', 'QO', 'RK', 'RL',
            'RM', 'RN', 'RO', 'SK', 'SL', 'SM', 'SN', 'SO', 'TK', 'TL',
            'UK', 'UL', 'UM', 'UN', 'UO', 'XK', 'XL', 'XM', 'XN', 'XO',
            'YK', 'YL', 'YM', 'YN', 'YO', 'ZK', 'ZL', 'ZM', 'GB', 'GC',
            'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GJ'], '中国红'],
        [['JU', 'JH', 'ZI','ZN'], '珍稀中国红'],
        [['SJ76', 'YG15', 'QF20', 'QI52', 'YB92', 'XI091', 'XI130'], '满版荧光'],//文档看不懂
        [['AL08'],'两边荧光'],//无文档
        [['WK', 'WE'], '正面太阳红荧光'],
        [['GU', 'JX'], '五星稀有冠号'],
        [['JZ', 'ZO'], '四星稀有冠号'],
        [['CP', 'IS', 'IU', 'JI'], '三星稀有冠号'],
        [[
            'ER', 'ES', 'EU', 'EY', 'GQ', 'GR', 'GS', 'GT', 'GX', 'IP',
            'JU', 'JW', 'ZN', 'JH', 'JJ', 'ZX', 'ZZ', 'JO'], '二星稀有冠号'],
        [[
            'AS', 'AU', 'AW', 'BY', 'CR', 'CS', 'CT', 'CW', 'CX', 'CY',
            'EQ', 'EW', 'EX', 'EZ', 'GP', 'GY', 'IR', 'IT', 'IW', 'IY',
            'ZI', 'ZJ', 'ZW', 'ZY', 'NO'],'一星稀有冠号']],
    '901': [
        [[
          'AK', 'AM', 'AO', 'AN', 'CK', 'CL', 'CM', 'XB', 'XH', 'XE',
          'XJ', 'XG', 'XA', 'XF', 'ZB'], '强荧光版'],
        [['ZB', 'ZC', 'ZD', 'ZE', 'ZL', 'ZM', 'ZN', 'ZO', 'JK', 'JL', 'JM', 'JO'], '补号']],
    '961': [
        [[
          'XA', 'XB', 'XE', 'XF', 'XG', 'XH', 'XI', 'XJ', 'ZB',
          'AK', 'AL', 'AM', 'AN', 'AO', 'CK', 'CL', 'CM', 'CN',
          'CO', 'JM'], '燕子桃花红'],
        [[
          'JR', 'JT', 'JU', 'JW', 'JX', 'JY', 'JZ', 'JO', 'ZM',
          'ZN', 'ZO', 'ZE', 'ZF', 'ZG', 'ZH', 'ZJ', 'NX', 'NY',
          'NZ'], '补号']]

},

    value: [1,2,2,2,2],
    year:1,
    currency:2,
    head:332,
    input:'N',
    serial:"00000NaN~00000NaN",
    light_code:'',
    light_head:'',
    light:['普通']
  },

  //4套整件查询
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

  //4套整件查询流水号
  bindKeyInput: function(e) {
    var s=parseInt(e.detail.value) * this.data.currency_opts[2][this.data.currency]
    this.setData({
      input:e.detail.value,
      serial:pad(s  - this.data.currency_opts[2][this.data.currency] + 1,8)+ "~" + pad(s ,8)
    })
  },

  //荧光查询输入代码
  bindKeylightCodeInput: function(e) {
    this.setData({
      light_code:e.detail.value,
      light:getLight(this,e.detail.value , this.data.light_head)
    })
  },

  //荧光查询输入冠号
  bindKeylightHeadInput: function(e) {
    this.setData({
      light_head:e.detail.value.toUpperCase(),
      light:getLight(this,this.data.light_code , e.detail.value.toUpperCase())
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
