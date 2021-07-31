new Vue({
  el: "#v-model",
  data: {
    nyuryokugaku: "",
    zandaka: "",
  },
  methods: {
    nyukin: function() {
      // inputで入力される値はString型なので、Number() でNumber型に変換しないといけない。
      this.zandaka += Number(this.nyuryokugaku)
    },
    shuukin: function() {
      // inputで入力される値はString型なので、Number() でNumber型に変換しないといけない。
      this.zandaka -= Number(this.nyuryokugaku)
    },
  },

  logs: [
    {
      date: new Date("2021-07-23T12:00:00"),
      type: "入金",
      money: 1000,
    },
    {
      date: new Date("2021-07-23T13:00:00"),
      type: "出金",
      money: 1000,
    },
  ],
})

// new Date() で現在時刻を取得できる
const now = new Date()

// console.logやVueで表示させると、とりあえず良い感じで表示される
console.log(now) // Tue Jul 27 2021 21:34:33 GMT+0900 (日本標準時)

// 文字列で特定の日付時刻を指定することもできる
const birthday = new Date("1995-12-17T03:24:00")
