// FALSE BRANCH - DEBUG DATA ISSUE
console.log("=== FALSE BRANCH DEBUG ===");

// Check what data is actually arriving
console.log("Full input:", JSON.stringify($input, null, 2));

let receivedData = {};
if ($input && Array.isArray($input) && $input[0] && $input[0].json) {
  receivedData = $input[0].json;
  console.log("✅ Data structure:", Object.keys(receivedData));
} else {
  console.log("❌ No valid input data");
}

// Debug the specific fields
console.log("IP field exists:", 'ip' in receivedData);
console.log("Country field exists:", 'country' in receivedData);
console.log("IP value:", receivedData.ip);
console.log("Country value:", receivedData.country);

// Use the data or fallbacks
const ip = receivedData.ip || "59.103.246.24"; // Your IP as fallback
const country = receivedData.country || "PK"; // Your country as fallback
const score = receivedData.reputationScore || 100;

console.log("Final values - IP:", ip, "Country:", country);

return {
  json: {
    timestamp: new Date().toISOString(),
    ip_address: ip,
    country: country,
    reputation_score: score,
    status: "ALLOWED",
    virus_total_malicious: receivedData.virusTotalMalicious || 0,
    abuseipdb_score: receivedData.abuseIPDBScore || 0,
    decision_reason: `Good reputation score: ${score}`,
    action_taken: "AUTOMATIC_ALLOW",
    priority: "LOW",
    debug_note: "Using fallback IP/country"
  }
};