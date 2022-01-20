const { google } = require("googleapis");

module.exports = async (range) => {
  const auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: "1-i7G11p1VQZDeEEsVDelelFsP-IZ4nIEIyNne0TRLPo",
      range,
    });

    const { data } = res;
    return data;
  } catch (error) {
    console.error(error);
  }
};
