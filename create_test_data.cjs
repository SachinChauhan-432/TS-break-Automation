const XLSX = require("xlsx");

const data = [
  {
    "Error": "Invalid Date",
    "Party Firm Name": "Acme Corp",
    "Product Type": "Swaps",
    "Party Reference Number": "REF-001",
    "DTCC Trade Reference Identifer": "DTCC-001"
  },
  {
    "Error": "Missing LEI",
    "Party Firm Name": "Global Bank",
    "Product Type": "Futures",
    "Party Reference Number": "REF-002",
    "DTCC Trade Reference Identifer": "DTCC-002"
  },
  {
    "Error": "Invalid Date",
    "Party Firm Name": "Acme Corp",
    "Product Type": "Swaps",
    "Party Reference Number": "REF-003",
    "DTCC Trade Reference Identifer": "DTCC-003"
  }
];

const ws = XLSX.utils.json_to_sheet(data);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
XLSX.writeFile(wb, "test_data.xlsx");
console.log("Created test_data.xlsx");
