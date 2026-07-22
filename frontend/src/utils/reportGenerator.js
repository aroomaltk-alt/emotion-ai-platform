import jsPDF from "jspdf";

export function generateReport(result) {

  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(22);
  doc.text("Emotion Intelligence Report", 20, y);

  y += 15;

  doc.setFontSize(12);

  doc.text(
    "Generated: " + new Date().toLocaleString(),
    20,
    y
  );

  y += 15;

  doc.text(
    `Text Emotion: ${result.text.emotion}`,
    20,
    y
  );

  y += 10;

  doc.text(
    `Face Emotion: ${result.face.emotion}`,
    20,
    y
  );

  y += 10;

  doc.text(
    `Voice Emotion: ${result.voice.emotion}`,
    20,
    y
  );

  y += 15;

  doc.setFontSize(16);

  doc.text(
    `Final Emotion: ${result.fusion.final_emotion}`,
    20,
    y
  );

  y += 10;

  doc.text(
    `Confidence: ${result.fusion.confidence}%`,
    20,
    y
  );

  y += 20;

  doc.setFontSize(14);

  doc.text("AI Explanation", 20, y);

  y += 10;

  doc.setFontSize(11);

  result.explanation.forEach((item) => {

    doc.text("- " + item, 20, y);

    y += 8;

  });

  doc.save("emotion_report.pdf");

}