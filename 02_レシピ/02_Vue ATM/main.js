new Vue({
  el: "#v-model",
  data: {
    nyuuryokugaku: 0,
    zandaka: 0,
    logs: [
      {
        date: new Date(),
        type: "入金",
        move: 1000,
        money: 1000,
      },
      {
        date: new Date(),
        type: "出金",
        move: 1000,
        money: 1000,
      },
    ],
  },

  methods: {
    nyuukin: function() {
      // inputで入力される値はString型なので、Number() でNumber型に変換しないといけない。
      this.zandaka += Number(this.nyuuryokugaku)
    },
    shuukin: function() {
      // inputで入力される値はString型なので、Number() でNumber型に変換しないといけない。
      this.zandaka -= Number(this.nyuuryokugaku)
    },
  },

  methods: {
    nyuukin: function() {
      this.zandaka += Number(this.nyuuryokugaku) //Number型に変換する
      let nowTime = new Date() //現在時刻
      console.log(nowTime)
    },

    shukkin: function() {
      this.zandaka -= Number(this.nyuuryokugaku)
    },
  },
})

// // new Date() で現在時刻を取得できる
// const now = new Date();

// // console.logやVueで表示させると、とりあえず良い感じで表示される
// console.log(now); // Tue Jul 27 2021 21:34:33 GMT+0900 (日本標準時)

// // 文字列で特定の日付時刻を指定することもできる
// const birthday = new Date("1995-12-17T03:24:00");
