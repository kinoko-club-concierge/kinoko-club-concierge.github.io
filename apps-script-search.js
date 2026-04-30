/**
 * Kinoko 施設検索 Proxy
 * 部署方式: Google Apps Script → デプロイ → ウェブアプリ（全員）→ URL をフロントエンドに設定
 */
const GEMINI_KEY = 'AIzaSyBcyMWMfDTomn6xKSva2qKkX-Y_-3q-f-s';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const city = data.city || '';
    const hints = data.hints || '';

    if (!city && !hints) {
      return json({ success: false, error: '都市または施設名を入力してください' });
    }

    const prompt = `日本 ${city} にある「${hints}」について、公式情報を日本語で簡潔にまとめてください：

■ 施設名
  開館時間：
  休館日：
  料金：
  現在の展示/イベント：
  公式URL：

情報が見つからない項目は「要確認」と記載。`;

    const resp = UrlFetchApp.fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': GEMINI_KEY
        },
        payload: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        }),
        muteHttpExceptions: true
      }
    );

    const result = JSON.parse(resp.getContentText());

    if (resp.getResponseCode() !== 200) {
      return json({
        success: false,
        error: `Gemini API error ${resp.getResponseCode()}: ${JSON.stringify(result)}`
      });
    }

    const text = result.candidates?.[0]?.content?.parts?.[0]?.text || '';
    if (!text) {
      return json({ success: false, error: '空の応答' });
    }

    return json({ success: true, text: text });

  } catch (err) {
    return json({ success: false, error: err.message || '不明なエラー' });
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
