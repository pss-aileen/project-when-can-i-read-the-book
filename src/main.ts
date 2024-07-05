import "./style.css";

const button = document.querySelector("button");

button?.addEventListener("click", (e) => {
  // ページ遷移のを防ぐ、でも理解不十分。
  e.preventDefault();

  const infoForm = document.forms.namedItem("info") as HTMLFormElement;
  const reservedDate = (
    infoForm.elements.namedItem("reservedDate") as HTMLInputElement
  ).value;
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

  console.log(reservedDate);

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

  console.log(totalDaysPerPerson, totalDays);
});

function calculateTotalDaysPerPerson(
  DaysLibraryDelivery: number,
  DaysLibraryHold: number,
  DaysPersonBorrow: number,
): number {
  return DaysLibraryDelivery + DaysLibraryHold + DaysPersonBorrow;
}
