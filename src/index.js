import "./styles.css";
//テキストボックスの値を取得し、初期化する
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createCompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//関数群

//未完了リストに追加する関数
const createCompleteList = (text) => {
  //divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liを生成
  const li = document.createElement("li");
  li.className = "hoge";
  li.innerText = text;

  //button(完了)を生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了タスクから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストへ追加する要素
    const addTarget = completeButton.parentNode;

    //Todo内容（li）のテキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //li要素を追加
    const li = document.createElement("li");
    li.innerText = text;

    //ボタンタグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押されたボタンの親(divタグ)を完了タスクから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstChild.innerText;
      createCompleteList(text);
    });

    //divタグの配下に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了タスクへ追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除タグ)を生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押されたボタンの未完了タスクのdiv要素を削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素をいれる
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了タスクに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
