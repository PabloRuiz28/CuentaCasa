export class HouseholdCodeService {
  private static readonly ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  generate(): string {
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += HouseholdCodeService.ALPHABET.charAt(
        Math.floor(Math.random() * HouseholdCodeService.ALPHABET.length),
      );
    }
    return `HOGAR-${code}`;
  }
}
