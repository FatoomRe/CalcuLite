import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Language, MacroResults } from '../types';

// Generate a high-quality, multi-page PDF from the on-screen results section
export const generatePDF = async (_results: MacroResults, language: Language) => {

  // Grab the full results section so layout, RTL, and styles are preserved
  const resultsEl = document.getElementById('results-section');
  if (!resultsEl) return;

  // Render the element to canvas at high scale for crisp output
  // Exclude elements with no-pdf class from PDF generation
  const canvas = await html2canvas(resultsEl, {
    scale: 2, // increase for sharper PDF; 2 is a good balance
    useCORS: true,
    backgroundColor: '#ffffff',
    logging: false,
    windowWidth: document.documentElement.scrollWidth,
    ignoreElements: (el) => {
      // Ignore elements with data-html2canvas-ignore or no-pdf class
      const element = el as HTMLElement;
      return !!(element.dataset?.html2canvasIgnore || 
               element.classList?.contains('no-pdf') ||
               element.closest('.no-pdf'));
    },
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const margin = 10; // mm
  const imgWidth = pageWidth - margin * 2;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0; // y-offset in mm

  // Add title header on the first page (optional)
  // You can remove this if you prefer exact screenshot only
  // pdf.setFontSize(16);
  // pdf.text(t.title, 10, 10);
  // position = 15;

  // Draw the image, adding pages as needed
  pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight, undefined, 'FAST');
  heightLeft -= (pageHeight - margin * 2);
  position = margin - (pageHeight - margin * 2); // shift image upward for subsequent pages

  while (heightLeft > 0) {
  pdf.addPage();
  pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight, undefined, 'FAST');
  heightLeft -= (pageHeight - margin * 2);
  position -= (pageHeight - margin * 2);
  }

  const filename = language === 'ar' ? 'تقرير-السعرات.pdf' : 'calorie-report.pdf';
  pdf.save(filename);
};

// Open the generated PDF in a new tab for preview instead of saving
export const previewPDF = async (_results: MacroResults) => {
  const resultsEl = document.getElementById('results-section');
  if (!resultsEl) return;

  const canvas = await html2canvas(resultsEl, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
    logging: false,
    windowWidth: document.documentElement.scrollWidth,
    ignoreElements: (el) => {
      // Ignore elements with data-html2canvas-ignore or no-pdf class
      const element = el as HTMLElement;
      return !!(element.dataset?.html2canvasIgnore || 
               element.classList?.contains('no-pdf') ||
               element.closest('.no-pdf'));
    },
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
  heightLeft -= pageHeight;
  position -= pageHeight;

  while (heightLeft > 0) {
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
    heightLeft -= pageHeight;
    position -= pageHeight;
  }

  // Open in a new tab/window for preview
  const blobUrl = pdf.output('bloburl');
  window.open(blobUrl, '_blank');
};

// Print using CSS print styles: hides non-results and preserves colors
export const printResults = () => {
  window.print();
};