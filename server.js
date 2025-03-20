const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // Middleware đọc JSON

// Kết nối MongoDB
const mongoURI = 'mongodb://localhost:27017/C5'; // Thay "C5" bằng tên database của bạn
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) Kết nối MongoDB thành công!'))
.catch(err => console.error(' Lỗi kết nối MongoDB:', err));

// Route kiểm tra server
app.get('/', (req, res) => {
    res.send('🚀 Server đang chạy với MongoDB!');
});

// Chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server chạy tại http://localhost:${PORT}`));
