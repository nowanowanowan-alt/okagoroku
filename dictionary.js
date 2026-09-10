const dictionary = [
    {
        word: "いやいや出来ましたよ！って人",
        reading: "",
        meaning: "",
        example: "「この問題はやっぱり例年出来てる子少ないよね。いやいや出来ましたよ！って人 ナイス」",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "後学のため",
        reading: "こうがくのため",
        meaning: "",
        example: "「この辺はもはや英語関係ないけどね まあ後学のためにということで」",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "飛びついたらあかん",
        reading: "",
        meaning: "",
        example: "「選択肢みてすぐ飛びついたらあかん 問題作った人との対話ができてないかなちょっとそれは」",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "向こうの人",
        reading: "",
        meaning: "",
        example: "「ここ文法おかしいやーんって？そんなん僕に言われても...向こうの人も文法とか考えてないと思う」",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "一瞬頭かすめる",
        reading: "",
        meaning: "",
        example: "「(英作)ここの『〇〇』は仮定法も一瞬頭かすめるべきじゃない？」",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "一考",
        reading: "いっこう",
        meaning: "",
        example: "「ここの部分は意訳するのも…まあ一考じゃない？と思いますけどね」",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "も↓は↑や↓",
        reading: "",
        meaning: "",
        example: "",
        note: "一般的な発音(も↑はや↓)とは異なることに注意",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "樹液",
        reading: "じゅえき",
        meaning: "",
        example: "「樹液。いや樹液飲んだことないけどね？樹液飲んだらこんな味なんやろなーっていう味」",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "いいサンプル",
        reading: "",
        meaning: "",
        example: "「この問題めっちゃいいサンプルなんよ、でもみんなはこのレベルに合った答案書けてるの？っていう」",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "試金石",
        reading: "しきんせき",
        meaning: "",
        example: "",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "日本語って英語に比べて",
        reading: "",
        meaning: "",
        example: "「これは最近思ってることなんやけど、日本語って英語に比べてめっちゃ難しいやんか」",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "やっぱ結局そこよね",
        reading: "",
        meaning: "",
        example: "「んーなんていうかなー結局やっぱそこよね。」",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "ストック",
        reading: "",
        meaning: "",
        example: "「これはストック案件ですね？」",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "去年のA1",
        reading: "",
        meaning: "",
        example: "「だって去年のA1より悪いんはどうかしてるよ」",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "巡回",
        reading: "じゅんかい",
        meaning: "",
        example: "「こういうのって定期的に巡回しとかないとすぐ忘れるからね」",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "単位時間で",
        reading: "",
        meaning: "",
        example: "「この問題冗談抜きで単位時間で満点取れますが。」",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "ヤラセ",
        reading: "やらせ",
        meaning: "初見で正解することは難しいが、決まりきった答えがあるため知っていれば簡単に正解できる問題。",
        example: "「けどこの問題もはやヤラセなんよねー」",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "物量作戦",
        reading: "ぶつりょうさくせん",
        meaning: "",
        example: "「いや冗談抜きでね？結局最後は物量作戦なんよ」",
        note: "",
        type: "",
        grade: "",
        week: ""
    },

    {
        word: "モグラ叩き状態",
        reading: "",
        meaning: "",
        example: "「だからもうモグラ叩き状態なんよ。」",
        note: "",
        type: "",
        grade: "",
        week: ""
    }
];


document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    const resultList = document.getElementById("resultList");
    const resultCount = document.getElementById("resultCount");

    const radioButtons =
        document.querySelectorAll('input[name="searchType"]');


    function escapeHTML(text) {

        return String(text || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    function search() {

        const keyword =
            searchInput.value.trim().toLowerCase();


        let searchType = "all";

        radioButtons.forEach(function (radio) {

            if (radio.checked) {
                searchType = radio.value;
            }

        });


        const results = dictionary.filter(function (item) {

            if (keyword === "") {
                return true;
            }


            if (searchType === "word") {

                return item.word
                    .toLowerCase()
                    .includes(keyword);

            }


            if (searchType === "reading") {

                return item.reading
                    .toLowerCase()
                    .includes(keyword);

            }


            if (searchType === "meaning") {

                return item.meaning
                    .toLowerCase()
                    .includes(keyword);

            }


            // 「すべて」
            const allText = [
                item.word,
                item.reading,
                item.meaning,
                item.example,
                item.note,
                item.type,
                item.grade,
                item.week
            ].join(" ").toLowerCase();


            return allText.includes(keyword);

        });


        displayResults(results);

    }


    function displayResults(results) {

        resultList.innerHTML = "";

        resultCount.textContent =
            results.length + "件";


        if (results.length === 0) {

            resultList.innerHTML = `
                <div class="no-result">
                    該当する語録がありません。
                </div>
            `;

            return;
        }


        results.forEach(function (item) {

            const card =
                document.createElement("article");

            card.className = "word-card";


            card.innerHTML = `

                <h3>
                    ${escapeHTML(item.word)}
                </h3>

                ${
                    item.reading
                    ? `<p class="reading">
                        ${escapeHTML(item.reading)}
                       </p>`
                    : ""
                }

                <div class="word-info">

                    <div>
                        <strong>意味</strong>
                        <p>
                            ${
                                item.meaning
                                ? escapeHTML(item.meaning)
                                : "―"
                            }
                        </p>
                    </div>


                    <div>
                        <strong>用例</strong>
                        <p>
                            ${
                                item.example
                                ? escapeHTML(item.example)
                                : "―"
                            }
                        </p>
                    </div>


                    <div>
                        <strong>備考</strong>
                        <p>
                            ${
                                item.note
                                ? escapeHTML(item.note)
                                : "―"
                            }
                        </p>
                    </div>

                </div>


                <div class="tags">

                    ${
                        item.type
                        ? `<span>${escapeHTML(item.type)}</span>`
                        : ""
                    }

                    ${
                        item.grade
                        ? `<span>${escapeHTML(item.grade)}</span>`
                        : ""
                    }

                    ${
                        item.week
                        ? `<span>第${escapeHTML(item.week)}週</span>`
                        : ""
                    }

                </div>
            `;


            resultList.appendChild(card);

        });

    }


    // 検索ボタン
    searchButton.addEventListener(
        "click",
        search
    );


    // Enterキー
    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {
                search();
            }

        }
    );


    // ラジオボタン変更
    radioButtons.forEach(function (radio) {

        radio.addEventListener(
            "change",
            search
        );

    });


    // 入力中にもリアルタイム検索
    searchInput.addEventListener(
        "input",
        search
    );


    // ★ここが重要
    // ページを開いた瞬間に全単語を表示
    search();

});
