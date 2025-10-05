// Temporary Debug Data Extraction
const items = $input.all();
console.log("Webhook data:", items[0].json);

const headers = items[0].json.headers || {};
const ip = headers["cf-connecting-ip"] || "NO-IP-IN-HEADERS";
const country = headers["cf-ipcountry"] || "NO-COUNTRY-IN-HEADERS";

console.log("All headers:", Object.keys(headers));
console.log("CF-Connecting-IP:", headers["cf-connecting-ip"]);
console.log("CF-IPCountry:", headers["cf-ipcountry"]);

return [{
  json: {
    ip: ip,
    country: country,
    timestamp: new Date().toISOString(),
    debug: "Check browser console"
  }
}];