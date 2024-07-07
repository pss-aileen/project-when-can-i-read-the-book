export default function renderExpectedDate(
  year: number,
  month: number,
  date: number,
  day: string,
) {
  const outputDom = document.getElementById("result");

  if (outputDom) {
    outputDom.textContent = `${year}年${month}月${date}日(${day})`;
  }
}
