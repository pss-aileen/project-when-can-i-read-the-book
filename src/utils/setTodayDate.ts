export default function setTodayDate() {
  const infoForm = document.forms.namedItem("info") as HTMLFormElement;
  const reservedDate = infoForm.elements.namedItem(
    "reservedDate",
  ) as HTMLInputElement;

  const today = new Date();
  const todayYear = today.getFullYear();

  // toString() でオブジェクトを文字列表現に変更する、null や undefined には使えない
  // String() はどんな値も文字列に変換
  const todayMonth = (today.getMonth() + 1).toString().padStart(2, "0");
  const todayDate = today.getDate().toString().padStart(2, "0");

  reservedDate.value = `${todayYear}-${todayMonth}-${todayDate}`;
}
