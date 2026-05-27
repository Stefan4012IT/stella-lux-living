const SHEET_NAME = "lead";
const HEADERS = [
  "submittedAt",
  "fullName",
  "phone",
  "email",
  "locale",
  "source",
];

function doPost(event) {
  const data = event && event.parameter ? event.parameter : {};

  if (data.company) {
    return jsonResponse({ ok: true, spam: true });
  }

  const errors = validateLead(data);

  if (errors.length > 0) {
    return jsonResponse({ ok: false, errors });
  }

  const sheet = getLeadSheet();
  const row = HEADERS.map((header) => {
    if (header === "submittedAt") {
      return data.submittedAt || new Date().toISOString();
    }

    if (header === "phone") {
      return cleanPhone(data[header] || "");
    }

    return cleanValue(data[header] || "");
  });

  const nextRow = sheet.getLastRow() + 1;
  const range = sheet.getRange(nextRow, 1, 1, HEADERS.length);
  range.setNumberFormat("@");
  range.setValues([row]);

  return jsonResponse({ ok: true });
}

function getLeadSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const hasHeaders = HEADERS.every((header, index) => firstRow[index] === header);

  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function validateLead(data) {
  const errors = [];
  const fullName = cleanValue(data.fullName || "");
  const email = cleanValue(data.email || "");
  const phone = cleanValue(data.phone || "");

  if (fullName.length < 3) {
    errors.push("fullName");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.push("email");
  }

  if (phone.replace(/[^\d+]/g, "").length < 8) {
    errors.push("phone");
  }

  return errors;
}

function cleanValue(value) {
  return String(value).trim().replace(/\s+/g, " ");
}

function cleanPhone(value) {
  return cleanValue(value).replace(/[^\d+]/g, "");
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
