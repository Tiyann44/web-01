// TODO #export-functions: export function parseUrl
export function parseUrl(url = window.location.href) {
  return (url.split("?")[1] || "")
  .split("&")
  // TODO #functional-programming: Use Array.map() & Array.reduce()
  .map((q) => q.split("="))
    .reduce((params, [k, v]) => ({ ...params, [k]: v }), {});
}