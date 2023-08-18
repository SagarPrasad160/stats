export function dateStringToDate(dateString: string): Date {
  const dateStrArr = dateString
    .split("/")
    .map((a: string): number => parseInt(a));
  return new Date(dateStrArr[2], dateStrArr[1] - 1, dateStrArr[0]);
}
