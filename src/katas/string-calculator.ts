export class StringCalculator {

    add(input: string): number {

        if (input === '') {
            return 0;
        }

        if (input.length === 1) {
            return parseInt(input);
        }

        let numbers = this.splitInput(input);

        return this.sumArrayOfString(numbers);
    }

    private sumArrayOfString(numbers: string[]): number {
        let sum = 0;
        for (const number of numbers) {
            sum += parseInt(number);
        }

        return sum;
    }

    private splitInput(input: string): string[] {
        let numbers: string[] = [];

        this.validateInput(input);

        if (input.startsWith('//')) {
            numbers = this.splitWithCustomSeperator(input);
        }
        else if (input.includes(',') && input.includes('\n')) {
            numbers = this.splitWithCommaAndNewLineTogather(input);
        }
        else if (input.includes(',')) {
            numbers = input.split(',');
        } else {
            numbers = input.split('\n');
        }

        return numbers;
    }

    private splitWithCustomSeperator(input: string): string[] {
        const regExp = RegExp(/\/\/(.*?)\n/)

        const seperator = input.match(regExp)?.[1];

        if (!seperator) {
            throw new Error("Unexpected seperator pattern");
        }

        return input.split(regExp)[2].split(seperator!);
    }

    private splitWithCommaAndNewLineTogather(input:string): string[] {
        const seperatedByComma = input.split(',');

        const numbers: string[] = [];

        for (const sep of seperatedByComma) {
            const seperatedByNewLine = sep.split('\n');

            numbers.push(...seperatedByNewLine);
        }

        return numbers;
    }

    private validateInput(input: string): void {
        const thereIsSeperatorAtEnd =
            [',', '\n'].includes(input[input.length - 1]);

        if (thereIsSeperatorAtEnd) {
            throw new Error("Seperator at the end is not allowed");
        }
    }

}

