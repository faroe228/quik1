export default function(fs, file, content, encoding) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, content, encoding, error => {
            if (error) {
                reject(error);
            } else {
                resolve(file);
            }
        });
    });
}
