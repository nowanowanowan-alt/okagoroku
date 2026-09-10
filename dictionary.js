// ===============================
// 辞書データ
// ===============================

const dictionary = [
    {
        word: "abandon",
        meaning: "捨てる、放棄する",
        example: "They abandoned the plan.",
        note: "完全に手放す、というニュアンス。",
        tags: {
            type: "OK",
            grade: "高2",
            week: 12
        }
    },

    {
        word: "accomplish",
        meaning: "成し遂げる、達成する",
        example: "She accomplished her goal.",
        note: "目的や仕事などを最後までやり遂げる。",
        tags: {
            type: "TRT",
            grade: "高2",
            week: 15
        }
    },

    {
        word: "試金石",
        meaning: "物事の価値や能力などを判断する基準となるもの。",
        example: "",
        note: "",
        tags: {
            type: "OK",
            grade: "高1",
            week: 3
        }
    },

    {
        word: "巡回",
        meaning: "一定の場所を順番に回ること。",
        example: "こういうのって定期的に巡回しとかないとすぐ忘れるからね。",
        note: "",
        tags: {
            type: "TRT",
            grade: "高1",
            week: 5
        }
    }
];


// ===============================
// HTMLの要素を取得
// ===============================

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const typeFilter = document.getElementById("typeFilter");
const gradeFilter = document.getElementById("gradeFilter");
const weekFilter = document.getElementById("weekFilter");

const resetButton = document.getElementById("resetButton");

const resultList = document.getElementById("resultList");
const resultCount = document.getElementById("resultCount");


// ===============================
// 第1週〜第43週を作る
// ===============================

for (let i = 1; i <= 43; i++) {

    const option = document.createElement("option");

    option.value = i;
    option.textContent = `第${i}週`;

    weekFilter.appendChild(option);
}


// ===============================
// 検索
// ===============================

function searchDictionary() {

    const keyword =
        searchInput.value
            .trim()
            .toLowerCase();

    const selectedType = typeFilter.value;
    const selectedGrade = gradeFilter.value;
    const selectedWeek = weekFilter.value;


    const results = dictionary.filter(item => {

        // -------------------------
        // 文字検索
        // -------------------------

        const text = [
            item.word,
            item.meaning,
            item.example,
            item.note
        ]
            .join(" ")
            .toLowerCase();


        const keywordOK =
            keyword === "" ||
            text.includes(keyword);


        // -------------------------
        // OK / TRT
        // -------------------------

        const typeOK =
            selectedType === "all" ||
            item.tags.type === selectedType;


        // -------------------------
        // 学年
        // -------------------------

        const gradeOK =
            selectedGrade === "all" ||
            item.tags.grade === selectedGrade;


        // -------------------------
        // 週
        // -------------------------

        const weekOK =
            selectedWeek === "all" ||
            String(item.tags.week) === selectedWeek;


        // -------------------------
        // 全条件を満たす
        // -------------------------

        return (
            keywordOK &&
            typeOK &&
            gradeOK &&
            weekOK
        );
    });


    displayResults(results);
}


// ===============================
// 結果を表示
// ===============================

function displayResults(results) {

    resultList.innerHTML = "";

    resultCount.textContent =
        `${results.length}件`;


    if (results.length === 0) {

        resultList.innerHTML = `
            <div class="no-result">
                該当する単語がありません。
            </div>
        `;

        return;
    }


    results.forEach(item => {

        const card =
            document.createElement("div");

        card.className = "word-card";


        card.innerHTML = `

            <div class="word-title">
                <span class="word">
                    ${item.word}
                </span>
            </div>


            <div class="tags">

                <span class="tag">
                    ${item.tags.type}
                </span>

                <span class="tag">
                    ${item.tags.grade}
                </span>

                <span class="tag">
                    第${item.tags.week}週
                </span>

            </div>


            <div class="dictionary-item">

                <div class="dictionary-label">
                    意味
                </div>

                <div class="dictionary-content">
                    ${item.meaning || "―"}
                </div>

            </div>


            <div class="dictionary-item">

                <div class="dictionary-label">
                    用例
                </div>

                <div class="dictionary-content example-content">
                    ${item.example || "―"}
                </div>

            </div>


            <div class="dictionary-item">

                <div class="dictionary-label">
                    備考
                </div>

                <div class="dictionary-content note-content">
                    ${item.note || "―"}
                </div>

            </div>

        `;


        resultList.appendChild(card);
    });
}


// ===============================
// イベント
// ===============================

// 検索ボタン
searchButton.addEventListener(
    "click",
    searchDictionary
);


// Enterキー
searchInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            searchDictionary();
        }

    }
);


// フィルター変更
typeFilter.addEventListener(
    "change",
    searchDictionary
);

gradeFilter.addEventListener(
    "change",
    searchDictionary
);

weekFilter.addEventListener(
    "change",
    searchDictionary
);


// リセット
resetButton.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        typeFilter.value = "all";

        gradeFilter.value = "all";

        weekFilter.value = "all";

        searchDictionary();
    }
);


// ===============================
// 最初に全単語を表示
// ===============================

displayResults(dictionary);
