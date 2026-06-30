import fs from 'fs';
import path from 'path';

const folder = './public/art/';

fs.readdir(folder, (err, files) => {
    if (err) throw err;
    
    // Фильтруем только картинки
    const images = files.filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
    
    images.forEach((file, index) => {
        const ext = path.extname(file);
        // Генерируем имя вида yp-001, yp-012 и т.д.
        const newName = `yp-${String(index + 1).padStart(3, '0')}${ext}`;
        
        fs.rename(path.join(folder, file), path.join(folder, newName), err => {
            if (err) throw err;
            console.log(`${file} -> ${newName}`);
        });
    });
});