import "./style.css";

const button = document.querySelector("button");

button?.addEventListener("click", (e) => {
  e.preventDefault();

  const infoForm = document.forms.namedItem("info") as HTMLFormElement;
  const reservedDate = new Date(
    (infoForm.elements.namedItem("reservedDate") as HTMLInputElement).value,
  );
  const reservedOrder: number = Number(
    (infoForm.elements.namedItem("reservedOrder") as HTMLInputElement).value,
  );
  const isSameLibrary =
    (infoForm.elements.namedItem("isSameLibrary") as RadioNodeList).value ===
    "true"
      ? true
      : false;
  const holdPeriod = (
    infoForm.elements.namedItem("holdPeriod") as RadioNodeList
  ).value;
  const isOnBusinessDay =
    (infoForm.elements.namedItem("isOnBusinessDay") as RadioNodeList).value ===
    "true"
      ? true
      : false;

  const DaysLibraryDelivery: number = isSameLibrary ? 0 : 1;
  const DaysLibraryHold: number =
    holdPeriod === "shortest" ? 0 : holdPeriod === "normal" ? 1 : 7;
  const DaysPersonBorrow: number = isOnBusinessDay ? 14 : 15;

  const totalDaysPerPerson = calculateTotalDaysPerPerson(
    DaysLibraryDelivery,
    DaysLibraryHold,
    DaysPersonBorrow,
  );

  const totalDays: number = totalDaysPerPerson * reservedOrder;

  reservedDate.setDate(reservedDate.getDate() + totalDays);

  const expectedYear = reservedDate.getFullYear();
  const expectedMonth = reservedDate.getMonth() + 1;
  const expectedDate = reservedDate.getDate();
  const expectedDay = reservedDate.getDay();
  const expectedJapaneseDay = getJapaneseDay(expectedDay);

  renderExpectedDate(
    expectedYear,
    expectedMonth,
    expectedDate,
    expectedJapaneseDay,
  );
});

function calculateTotalDaysPerPerson(
  DaysLibraryDelivery: number,
  DaysLibraryHold: number,
  DaysPersonBorrow: number,
): number {
  return DaysLibraryDelivery + DaysLibraryHold + DaysPersonBorrow;
}

function getJapaneseDay(expectedDay: number): string {
  let day = "";
  switch (expectedDay) {
    case 0:
      day = "日";
      break;
    case 1:
      day = "月";
      break;
    case 2:
      day = "火";
      break;
    case 3:
      day = "水";
      break;
    case 4:
      day = "木";
      break;
    case 5:
      day = "金";
      break;
    case 6:
      day = "土";
      break;
  }

  return day;
}

function renderExpectedDate(
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
