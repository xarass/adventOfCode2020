import fs from 'fs'

class Problem3 {
    constructor() {
        const file = fs.readFileSync('./problems/3/input.txt', 'utf8');
        // this.executePartOne(file);
        this.executePartTwo(file);
    }

    executePartOne(file: string) {
        const lines = file.split('\n');
        const lineLenght = lines[0].length;
        let x = 0, treeTotal = 0;
        for (let line of lines) {
            if (line[x] === '#') {
                treeTotal++;
            }

            x += 3;
            if (x >= lineLenght) {
                x = x % lineLenght;
            }
        }

        console.log(treeTotal);
    }

    executePartTwo(file: string) {
        const slopes = [1, 3, 5, 7];
        const lines = file.split('\n');
        const lineLenght = lines[0].length;
        let slopesTotal = [];
        for (let slope of slopes) {
            let x = 0, treeTotal = 0
            for (let line of lines) {
                if (line[x] === '#') {
                    treeTotal++;
                }

                x += slope;
                if (x >= lineLenght) {
                    x = x % lineLenght;
                }
            }
            slopesTotal.push(treeTotal);
        }

        let x = 0, treeTotal = 0
        for (let i = 0; i < lines.length; i += 2) {
            const line = lines[i];

            if (line[x] === '#') {
                treeTotal++;
            }

            x += 1;
            if (x >= lineLenght) {
                x = x % lineLenght;
            }
        }
        slopesTotal.push(treeTotal);

        let result = 1;
        for (let total of slopesTotal) {
            result *= total;
        }

        console.log(result);
    }
}

export { Problem3 }