export default function getJapaneseDay(expectedDay: number): string {
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
