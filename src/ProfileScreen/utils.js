export function uploadImage(blob) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.addEventListener("error", reject);
    fileReader.addEventListener("loadend", () => resolve(fileReader.result));
    fileReader.readAsDataURL(blob);
  });
}
