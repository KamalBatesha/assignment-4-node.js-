const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const os = require("os");
const zlib = require('zlib');
const EventEmitter = require("node:events");
const eventEmitter = new EventEmitter();
const PORT = 3000;

// =============================================1====================================================

// Create the server
// const server = http.createServer((req, res) => {
//   if (req.method === "POST" && req.url === "/path-info") {

//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });

//     req.on("end", () => {
//       const { path: filePath } = JSON.parse(body);
//       if (!filePath) {
//         res.writeHead(400, { "Content-Type": "application/json" });
//         return res.end(JSON.stringify({ error: "File path is required" }));
//       }

//       const parsedPath = path.parse(filePath);
//       const response = {
//         parsedPath,
//         formatPath: filePath,
//       };

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(response));
//     });
//   } else if (req.method === "POST" && req.url === "/path-check") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });

//     req.on("end", () => {
//       const { path: filePath } = JSON.parse(body);
//       if (!filePath) {
//         res.writeHead(400, { "Content-Type": "application/json" });
//         return res.end(JSON.stringify({ error: "File path is required" }));
//       }

//       const isAbsolute = path.isAbsolute(filePath);
//       const basename = path.basename(filePath);
//       const extname = path.extname(filePath);
//       const joinedpath = path.join("folder", filePath);
//       const resolvedpath = path.resolve(filePath);

//       const response = {
//         isAbsolute: isAbsolute.toString(),
//         basename,
//         extname,
//         joinedpath,
//         resolvedpath,
//       };

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(response));
//     });
//   } else {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ error: "Not Found" }));
//   }
// });

// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// =============================================2====================================================

// Listen for file events
// eventEmitter.on("fileCreated", (fileName) => {
//   console.log(`Event emitted: fileCreated for ${fileName}`);
// });

// eventEmitter.on("fileDeleted", (fileName) => {
//   console.log(`Event emitted: fileDeleted for ${fileName}`);
// });
// Create the server
// const server = http.createServer((req, res) => {
//   if (req.method === "POST" && req.url === "/create-file") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });

//     req.on("end", () => {
//       try {
//         const { fileName, content } = JSON.parse(body);

//         if (!fileName || !content) {
//           res.writeHead(400, { "Content-Type": "application/json" });
//           return res.end(
//             JSON.stringify({ error: "File name and content are required" })
//           );
//         }
//         console.log("in1");

//         // Create the file
//         fs.writeFile(path.join(__dirname, fileName), content, (err) => {
//           console.log("in2");

//           if (err) {
//             res.writeHead(500, { "Content-Type": "application/json" });
//             return res.end(JSON.stringify({ error: "Error creating file" }));
//           }

//           eventEmitter.emit("fileCreated", fileName);
//           res.writeHead(201, { "Content-Type": "application/json" });
//           res.end(
//             JSON.stringify({ message: `File ${fileName} created successfully` })
//           );
//         });
//       } catch (error) {
//         console.log(error);

//         res.writeHead(400, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ error: "Invalid JSON" }));
//       }
//     });
//   } else if (req.method === "DELETE" && req.url === "/delete-file") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });

//     req.on("end", () => {
//       try {
//         const { fileName } = JSON.parse(body);

//         if (!fileName) {
//           res.writeHead(400, { "Content-Type": "application/json" });
//           return res.end(JSON.stringify({ error: "File name is required" }));
//         }

//         // Delete the file
//         fs.unlink(path.join(__dirname, fileName), (err) => {
//           if (err) {
//             res.writeHead(500, { "Content-Type": "application/json" });
//             return res.end(JSON.stringify({ error: "Error deleting file" }));
//           }

//           eventEmitter.emit("fileDeleted", fileName);
//           res.writeHead(200, { "Content-Type": "application/json" });
//           res.end(
//             JSON.stringify({ message: `File ${fileName} deleted successfully` })
//           );
//         });
//       } catch (error) {
//         res.writeHead(400, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ error: "Invalid JSON" }));
//       }
//     });
//   } else {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ error: "Not Found" }));
//   }
// });

// // Start the server
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// =============================================3====================================================

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET' && req.url === '/system-info') {
//       // Gather system information
//       const systemInfo = {
//           architecture: os.arch(),
//           platform: os.platform(),
//           freeMemory: os.freemem(),
//           totalMemory: os.totalmem(),
//       };

//       // Respond with system information
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify(systemInfo));
//   } else {
//       res.writeHead(404, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ error: 'Not Found' }));
//   }
// });

// // Start the server
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// =============================================4====================================================


// const server = http.createServer((req, res) => {
//   let body = '';

//   req.on('data', chunk => {
//       body += chunk.toString();
//   });

//   req.on('end', () => {
//       if (req.method === 'POST' && req.url === '/create-file') {
//           const { fileName, content } = JSON.parse(body);
//           const filePath = path.join(__dirname, fileName);

//           // Create the file
//           fs.writeFile(filePath, content, (err) => {
//               if (err) {
//                   res.writeHead(500, { 'Content-Type': 'application/json' });
//                   return res.end(JSON.stringify({ error: 'Error creating file' }));
//               }
//               res.writeHead(201, { 'Content-Type': 'application/json' });
//               res.end(JSON.stringify({ message: 'File created successfully' }));
//           });

//       } else if (req.method === 'DELETE' && req.url === '/delete-file') {
//           const { fileName } = JSON.parse(body);
//           const filePath = path.join(__dirname, fileName);

//           // Delete the file
//           fs.unlink(filePath, (err) => {
//               if (err) {
//                   res.writeHead(500, { 'Content-Type': 'application/json' });
//                   return res.end(JSON.stringify({ error: 'Error deleting file' }));
//               }
//               res.writeHead(200, { 'Content-Type': 'application/json' });
//               res.end(JSON.stringify({ message: 'File deleted successfully' }));
//           });

//       } else if (req.method === 'POST' && req.url === '/append-async') {
//           const { fileName, content } = JSON.parse(body);
//           const filePath = path.join(__dirname, fileName);

//           // Append to the file
//           fs.appendFile(filePath, content, (err) => {
//               if (err) {
//                   res.writeHead(500, { 'Content-Type': 'application/json' });
//                   return res.end(JSON.stringify({ error: 'Error appending to file' }));
//               }
//               res.writeHead(200, { 'Content-Type': 'application/json' });
//               res.end(JSON.stringify({ message: 'Content appended successfully' }));
//           });

//       } else if (req.method === 'POST' && req.url === '/read-async') {
//           const { fileName } = JSON.parse(body);
//           const filePath = path.join(__dirname, fileName);

//           // Read from the file
//           fs.readFile(filePath, 'utf8', (err, data) => {
//               if (err) {
//                   res.writeHead(500, { 'Content-Type': 'application/json' });
//                   return res.end(JSON.stringify({ error: 'Error reading file' }));
//               }
//               res.writeHead(200, { 'Content-Type': 'application/json' });
//               res.end(JSON.stringify({ message: 'File read successfully', content: data }));
//           });

//       } else {
//           res.writeHead(404, { 'Content-Type': 'application/json' });
//           res.end(JSON.stringify({ error: 'Not Found' }));
//       }
//   });
// });

// // Start the server
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// =============================================5====================================================


// Create the server
const server = http.createServer((req, res) => {
    let body = '';

    // Collect request body data
    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        if (req.method === 'POST' && req.url === '/stream-file') {
            const { fileName } = JSON.parse(body);
            const filePath = path.join(__dirname, fileName);

            // Create a readable stream
            const readStream = fs.createReadStream(filePath, { highWaterMark: 16 });

            // Stream events
            readStream.on('open', () => {
                console.log('Stream opened');
                readStream.pipe(res);
            });

            readStream.on('data', (chunk) => {
                console.log(`Data event received: ${chunk}`);
            });

            readStream.on('end', () => {
                console.log('Stream ended');
                res.end();
            });

            readStream.on('error', (err) => {
                console.error('Error:', err.message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error reading file' }));
            });

        } else if (req.method === 'POST' && req.url === '/copy-file') {
            const { sourceFile, destinationFile } = JSON.parse(body);
            const sourcePath = path.join(__dirname, sourceFile);
            const destPath = path.join(__dirname, destinationFile);

            // Create readable and writable streams
            const readStream = fs.createReadStream(sourcePath);
            const writeStream = fs.createWriteStream(destPath);

            readStream.pipe(writeStream);

            writeStream.on('finish', () => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'File copied successfully' }));
            });

            writeStream.on('error', (err) => {
                console.error('Error:', err.message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error copying file' }));
            });

        } else if (req.method === 'POST' && req.url === '/compress-file') {
            const { fileName } = JSON.parse(body);
            const filePath = path.join(__dirname, fileName);
            const gzip = zlib.createGzip();
            const destPath = path.join(__dirname, `${fileName}.gz`);

            const readStream = fs.createReadStream(filePath);
            const writeStream = fs.createWriteStream(destPath);

            readStream.pipe(gzip).pipe(writeStream);

            writeStream.on('finish', () => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Compression done' }));
            });

            writeStream.on('error', (err) => {
                console.error('Error:', err.message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error compressing file' }));
            });

        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Not Found' }));
        }
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});