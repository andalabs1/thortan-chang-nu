/** Best-effort check for the LINE in-app browser. Safe to call during SSR. */
export function isLineInAppBrowser(userAgent?: string): boolean {
  const value = userAgent ?? (typeof navigator !== "undefined" ? navigator.userAgent : "");
  return /\bLine\//i.test(value);
}
