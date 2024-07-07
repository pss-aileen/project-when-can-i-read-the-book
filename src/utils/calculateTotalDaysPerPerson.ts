export default function calculateTotalDaysPerPerson(
  DaysLibraryDelivery: number,
  DaysLibraryHold: number,
  DaysPersonBorrow: number,
): number {
  return DaysLibraryDelivery + DaysLibraryHold + DaysPersonBorrow;
}
