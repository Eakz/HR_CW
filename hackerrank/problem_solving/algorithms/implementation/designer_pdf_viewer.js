// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

const designerPdfViewer = (h, w) =>
    Math.max(...w.split("").map(e => h[e.charCodeAt() - 97])) * w.length;
