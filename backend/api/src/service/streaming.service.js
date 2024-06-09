import fs from 'fs';
import path from 'path';

class StreamingService {
    async streamingVideo(req, res) {
        const video = req.params.videoId;
        try {
            const videoPath = path.join('./uploads', video); // Đường dẫn tới tệp video
            const videoStat = fs.statSync(videoPath);
            const fileSize = videoStat.size;
            const range = req.headers.range;
            if (range) {
                const parts = range.replace(/bytes=/, '').split('-');
                const start = parseInt(parts[0], 10);
                const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

                if (start >= fileSize) {
                    res.status(416).send(
                        'Requested range not satisfiable\n' + start + ' >= ' + fileSize
                    );
                    return;
                }

                const chunkSize = end - start + 1;
                const file = fs.createReadStream(videoPath, { start, end });
                const head = {
                    'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                    'Accept-Ranges': 'bytes',
                    'Content-Length': chunkSize,
                    'Content-Type': 'video/mp4',
                };

                res.writeHead(206, head);
                file.pipe(res);
            } else {
                const head = {
                    'Content-Length': fileSize,
                    'Content-Type': 'video/mp4',
                };
                res.writeHead(200, head);
                fs.createReadStream(videoPath).pipe(res);
            }
        } catch (error) {
            throw error;
        }
    }
}

export default new StreamingService();
