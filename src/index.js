import fs from 'node:fs/promises';


const message = 'Hello Node.JS';

console.log(message);

const buffer = await fs.readFile('hello.txt');

console.log(buffer.toString("utf-8"));


// Записуємо дані у файл 'output.txt'
(async () => {
  const data = 'Це дані, які ми записуємо у файл.';
  try {
    await fs.writeFile('output.txt', data, 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
})();


// Записуємо дані у файл 'numbers.txt'
(async () => {
    const number = '16';
    try {
      await fs.writeFile('numbers.txt', number, 'utf8');
      console.log('Число успішно записано у файл.');
    } catch (err) {
      console.error('Помилка запису у файл:', err);
    }
  })();


// Перейменовуємо або переміщуємо файл чи каталог зі шляху 'oldfile.txt' до 'newfile.txt'
(async () => {
  try {
    await fs.rename('oldfile.txt', 'newfile.txt');
    console.log('Файл або каталог успішно перейменовано або переміщено.');
  } catch (err) {
    console.error('Помилка перейменування або переміщення:', err);
  }
})();


// Видаляємо файл за шляхом 'file.txt'
(async () => {
  try {
    await fs.unlink('file.txt');
    console.log('Файл успішно видалено.');
  } catch (err) {
    console.error('Помилка видалення файлу:', err);
  }
})();


// Отримуємо список файлів і каталогів у поточному каталозі
(async () => {
  try {
    const files = await fs.readdir('.');
    console.log('Список файлів і каталогів:', files);
  } catch (err) {
    console.error('Помилка отримання списку файлів і каталогів:', err);
  }
})();



// Перевіряємо доступність файлу або каталогу за вказаним шляхом
(async () => {
  const path = 'hello.txt';
  try {
    await fs.access(path);
    console.log(`Файл або каталог '${path}' доступний.`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`Файл або каталог '${path}' не існує.`);
    } else {
      console.error(
        `Помилка перевірки доступності файлу або каталогу '${path}':`,
        err,
      );
    }
  }
})();
