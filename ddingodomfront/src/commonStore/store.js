import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';


const store = createStore({
  state:{
    //변수
    mainmenu : [],
    menu : [{
      mainname : "기준정보",
      items : [{
        name : "Home",
        icon : "mdi-vector-square",
        title : "창고 현황"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "창고별 구역"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "아이템 기준 정보"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "아이템 보관 속성"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "아이템 속성"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "부속 설비 기준 정보"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "설비 운영 기준 정보"
      }]
    },{
      mainname : "창고별 현황",
      items : [{
        name : "Home",
        icon : "mdi-vector-square",
        title : "창고별 현황"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "창고 구역별 현황"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "아이템 현황"
      }]
    },{
      mainname : "아이템 입고",
      items : [{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "아이템 입고"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "입고 히스토리"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "수입 검사 이력"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "반납 처리"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "반납 히스토리"
      }]
    },{
      mainname : "아이템 출고",
      items : [{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "아이템 출고"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "출고 히스토리"
      }]
    },{
      mainname : "아이템 폐기",
      items : [{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "아이템 폐기"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "폐기 현황"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "아이템 리싸이클"
      }]
    },{
      mainname : "시스템",
      items : [{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "사용자 관리"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "사용자 권한 관리"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "사용자별 권한 관리"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "메뉴 관리"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "권한별 메뉴 관리"
      },{
        name : "barchart",
        icon : "mdi-order-numeric-ascending",
        title : "다국어 관리"
      }]
    }],
    name : "ddingo",
    drawer : true,
  },
  getters:{
    //State의 변수 호출
    getUserInfo(state){
      return "이름" + state.name
    },
    getMainMent(state){
      return state.mainmenu
    }
  },
  mutations :{
    //변수 조작
    setUserInfo(state,name){
      state.name = name;
    },
    setMainmenu(state,menu){
      state.mainmenu = menu
    }
  },
  actions : {
    //비동기 처리
  },
  plugins: [createPersistedState({
    paths: ["mainmenu"]
  })]
})

export default  store;
