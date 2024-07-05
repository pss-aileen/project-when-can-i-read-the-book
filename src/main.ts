import "./style.css";

const button = document.querySelector("button");

button?.addEventListener("click", (e) => {
  // ページ遷移のを防ぐ、でも理解不十分。
  e.preventDefault();

  const infoForm = document.forms.namedItem("info") as HTMLFormElement;
  const reservedDate = (
    infoForm.elements.namedItem("reservedDate") as HTMLInputElement
  ).value;
  const reservedOrder = (
    infoForm.elements.namedItem("reservedOrder") as HTMLInputElement
  ).value;
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

  console.log(
    reservedDate,
    reservedOrder,
    isSameLibrary,
    holdPeriod,
    isOnBusinessDay,
  );
});

function calculateTotalDaysPerPerson(
  DaysLibraryDelivery: number,
  DaysLibraryHold: number,
  DaysPersonBorrow: number,
): number | undefined {
  if (!DaysLibraryDelivery || !DaysLibraryDelivery || !DaysPersonBorrow) {
    return;
  }

  return DaysLibraryDelivery + DaysLibraryHold + DaysPersonBorrow;
}

console.log(calculateTotalDaysPerPerson(1, 2, 3));
