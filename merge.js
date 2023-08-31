const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePdf=async (p1,p2) => {
  const merger = new PDFMerger();
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); // merge only page 2
  let a=new Date().getTime()

  await merger.save(`public/${a}.pdf`); //save under given name and reset the internal document
  return a
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};


module.exports={mergePdf}