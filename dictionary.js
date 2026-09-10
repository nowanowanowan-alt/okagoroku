const dictionary = [
  {
    word: "ヤラセ",
    meaning: "初見で正解することは難しいが、決まりきった答えがあるため知っていれば簡単に正解できる問題。",
    example: "けどこの問題もはやヤラセなんよねー",
    note: "",
    type: "",
    grade: "",
    week: ""
  },

  {
    word: "巡回",
    meaning: "",
    example: "こういうのって定期的に巡回しとかないとすぐ忘れるからね",
    note: "",
    type: "",
    grade: "",
    week: ""
  },

  {
    word: "物量作戦",
    meaning: "",
    example: "結局最後は物量作戦なんよ",
    note: "",
    type: "",
    grade: "",
    week: ""
  },

  {
    word: "モグラ叩き状態",
    meaning: "",
    example: "だからもうモグラ叩き状態なんよ。",
    note: "",
    type: "",
    grade: "",
    week: ""
  },

  {
    word: "試金石",
    meaning: "",
    example: "",
    note: "",
    type: "",
    grade: "",
    week: ""
  },

  {
    word: "一考",
    meaning: "",
    example: "ここの部分は意訳するのも…まあ一考じゃない？",
    note: "",
    type: "",
    grade: "",
    week: ""
  },

  {
    word: "ストック",
    meaning: "",
    example: "これはストック案件ですね？",
    note: "",
    type: "",
    grade: "",
    week: ""
  },

  {
    word: "樹液",
    meaning: "",
    example: "樹液。いや樹液飲んだことないけどね？",
    note: "",
    type: "",
    grade: "",
    week: ""
  },

  {
    word: "いいサンプル",
    meaning: "",
    example: "この問題めっちゃいいサンプルなんよ",
    note: "",
    type: "",
    grade: "",
    week: ""
  },

  {
    word: "後学のため",
    meaning: "",
    example: "まあ後学のためにということで",
    note: "",
    type: "",
    grade: "",
    week: ""
  }
];

document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("searchInput");
  const typeFilter = document.getElementById("typeFilter");
  const gradeFilter = document.getElementById("gradeFilter");
  const weekFilter = document.getElementById("weekFilter");
  const resultList = document.getElementById("resultList");
  const resultCount = document.getElementById("resultCount");
  const resetButton = document.getElementById("resetButton");

  function displayWords() {

    const keyword = searchInput.value.toLowerCase();

    const results = dictionary.filter(function (item) {

      const text =
        item.word +
        item.meaning +
        item.example +
        item.note +
        item.type +
        item.grade +
        item.week;

      const keywordMatch =
        text.toLowerCase().includes(keyword);

      const typeMatch =
        !typeFilter.value ||
        item.type === typeFilter.value;

      const gradeMatch =
        !gradeFilter.value ||
        item.grade === gradeFilter.value;

      const weekMatch =
        !weekFilter.value ||
        item.week === weekFilter.value;

      return keywordMatch &&
             typeMatch &&
             gradeMatch &&
             weekMatch;
    });

    resultCount.textContent = results.length + "件";

    resultList.innerHTML = "";

    results.forEach(function (item) {

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h2>${item.word}</h2>

        <div class="field">
          <strong>意味</strong>
          <p>${item.meaning || "―"}</p>
        </div>

        <div class="field">
          <strong>用例</strong>
          <p>${item.example || "―"}</p>
        </div>

        <div class="field">
          <strong>備考</strong>
          <p>${item.note || "―"}</p>
        </div>

        <div class="tags">
          ${item.type ? `<span>${item.type}</span>` : ""}
          ${item.grade ? `<span>${item.grade}</span>` : ""}
          ${item.week ? `<span>第${item.week}週</span>` : ""}
        </div>
      `;

      resultList.appendChild(card);
    });
  }

  searchInput.addEventListener("input", displayWords);
  typeFilter.addEventListener("change", displayWords);
  gradeFilter.addEventListener("change", displayWords);
  weekFilter.addEventListener("change", displayWords);

  resetButton.addEventListener("click", function () {
    searchInput.value = "";
    typeFilter.value = "";
    gradeFilter.value = "";
    weekFilter.value = "";

    displayWords();
  });

  // ページを開いた瞬間に全単語を表示
  displayWords();

});
