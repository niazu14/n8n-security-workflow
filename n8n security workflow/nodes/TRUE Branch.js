// TRUE Branch - Safe data access
let reputationData = {};

if ($input && $input[0] && $input[0].json) {
  reputationData = $input[0].json;
}

const score = reputationData.reputationScore || 0;
let priority = "LOW";
if (score < 30) priority = "HIGH";
else if (score < 60) priority = "MEDIUM";

return [
  {
    "Timestamp": reputationData.timestamp || new Date().toISOString(),
    "IP Address": reputationData.ip || "Unknown",
    "Reputation Score": score,
    "Is Malicious": "YES",
    "VirusTotal Malicious": reputationData.vtMalicious || 0,
    "AbuseIPDB Score": reputationData.abuseScore || 0,
    "Country": reputationData.country || "Unknown",
    "Action Taken": "BLOCKED",
    "Priority": priority,
    "Status": "ACTION REQUIRED",
    "Notes": "Auto-blocked via firewall"
  }
];