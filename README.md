# n8n Security Incident Response System

Automated IP reputation analysis and blocking system using n8n.

## 🚀 Features
- Real-time IP threat analysis
- VirusTotal integration
- AbuseIPDB integration
- Automated blocking decisions
- Google Sheets logging

## 📋 Workflow
1. **Webhook** - Receives security alerts
2. **Data Extraction** - Extracts IP and country from headers
3. **VirusTotal Check** - Analyzes IP for malware
4. **AbuseIPDB Check** - Checks IP reputation
5. **Reputation Analysis** - Calculates risk score
6. **Decision Branch** - Blocks or allows based on score

## ⚙️ Setup
1. Import `workflow.json` into n8n
2. Configure API keys for VirusTotal and AbuseIPDB
3. Set up Google Sheets integration
4. Configure webhook endpoint

## 🔑 API Keys Required
- VirusTotal API key
- AbuseIPDB API key
- Google Sheets credentials
