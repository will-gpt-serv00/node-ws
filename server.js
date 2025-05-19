// 删除URL（通过URL字符串）
app.post('/delete-url-by-url', async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.json({ success: false, error: 'URL不能为空' });
    }

    try {
        const [result] = await pool.query('DELETE FROM urls WHERE url = ?', [url]);
        if (result.affectedRows > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false, error: '未找到匹配的URL' });
        }
    } catch (error) {
        console.error('删除URL失败:', error);
        res.json({ success: false, error: '删除URL失败' });
    }
}); 