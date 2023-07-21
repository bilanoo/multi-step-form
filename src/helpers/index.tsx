export function isValueValid(input: any, regex: RegExp): boolean {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return regex.test(input);
}
