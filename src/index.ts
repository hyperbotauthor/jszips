const JSZip = require("jszip");

export function zip(content: string): Promise<string> {
  const zip = new JSZip();

  const file = zip.file("storage", content);

  const storageCompress = zip.generateAsync({
    type: "base64",
    compression: "DEFLATE",
    compressionOptions: {
      level: 9,
    },
  });

  return storageCompress;
}

export function unzip(content: string): Promise<string> {
  const zip = new JSZip();

  const unzipPromise = new Promise((resolve, reject) => {
    zip.loadAsync(content, { base64: true }).then((zip: any) => {
      const file = zip.file("storage");
      resolve(file.async("string"));
    });
  }) as Promise<string>;

  return unzipPromise;
}
