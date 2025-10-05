// REPUTATION ANALYSIS - ULTRA SAFE
console.log("=== REPUTATION ANALYSIS ===");

// Check input structure first
console.log("Input type:", typeof $input);
console.log("Is array:", Array.isArray($input));

let ip = "59.103.246.24"; // Your IP as fallback
let country = "PK"; // Your country as fallback
let reputationScore = 100;

// Safe data extraction with try-catch
try {
  if ($input && Array.isArray($input) && $input.length > 0) {
    console.log("Number of inputs:", $input.length);
    
    // Try to get data from first input
    if ($input[0] && $input[0].json) {
      const data = $input[0].json;
      console.log("First input data:", data);
      
      // Try different data structures
      if (data.ip) ip = data.ip;
      if (data.country) country = data.country;
      
      // Try header extraction
      if (data.headers) {
        const headers = data.headers;
        ip = headers["cf-connecting-ip"] || ip;
        country = headers["cf-ipcountry"] || country;
      }
    }
    
    // Process VirusTotal if available
    if ($input[1] && $input[1].json && $input[1].json.data) {
      const vtData = $input[1].json;
      const malicious = vtData.data.attributes?.last_analysis_stats?.malicious || 0;
      reputationScore -= malicious * 10;
      console.log("VirusTotal malicious:", malicious);
    }
    
    // Process AbuseIPDB if available
    if ($input[2] && $input[2].json && $input[2].json.data) {
      const abuseData = $input[2].json;
      reputationScore -= abuseData.data.abuseConfidenceScore || 0;
      console.log("AbuseIPDB score:", abuseData.data.abuseConfidenceScore);
    }
  }
} catch (error) {
  console.log("Error processing data:", error.message);
}

// Final calculation
reputationScore = Math.max(0, Math.min(100, reputationScore));
const isMalicious = reputationScore < 70;

console.log("Final result:");
console.log("IP:", ip);
console.log("Country:", country);
console.log("Score:", reputationScore);
console.log("Action:", isMalicious ? "BLOCK" : "ALLOW");

return {
  ip: ip,
  country: country,
  reputationScore: reputationScore,
  isMalicious: isMalicious,
  timestamp: new Date().toISOString(),
  decision: isMalicious ? "BLOCK" : "ALLOW"
};