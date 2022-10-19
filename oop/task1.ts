class Node {

    constructor(
        public value: number,
        public nextNode?: Node
    ) { }

}

interface List {
    readonly firstNode: Node | null;
    readonly lastNode: Node | null;
    length: number;

    push(value: number): void;
    pop(): void;

    // toArray(): number[];
}

class LinkedList implements List {

    private first: Node | null;
    private last: Node | null;
    public length = 0;

    constructor(
        firstNodeInput: Node | null = null,
        lastNodeInput: Node | null = null,
    ) {
        this.first = firstNodeInput;
        this.last = lastNodeInput;
        this.length = this.length;
    }

    public get firstNode(): Node | null {
        return this.first;
    }

    public get lastNode(): Node | null {
        return this.last;
    }

    public push(value: number) {

        const newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }

        this.last!.nextNode = newNode;
        this.last = newNode;

        this.length++;

    }

    public pop() {
        // if (!this.last) {
        //     return null;
        // }
        if (this.length === 0 || this.length === 1) {
            this.first = null;
            this.last = null;
            // this.last.nextNode = null
        }



    }


}



const list: List = new LinkedList();
// list.toArray() // => []
// list.length // => 0
console.log(list.firstNode); // => null
console.log(list.lastNode); // => null
console.log('---------');

list.push(10);
// list.toArray() // => [10]
// list.length // => 1
console.log(list.firstNode); // => Node { 10 }
console.log(list.lastNode); // => Node { 10 }
console.log('---------');

list.push(3);
// // list.toArray() // => [10, 3]
// // list.length // => 2
console.log(list.firstNode); // => Node { 10}
console.log(list.lastNode); // => Node { 3 }
console.log('---------');

list.push(7);
// // list.toArray() // => [10, 3, 7]
// // list.length // => 3
console.log(list.firstNode); // => Node { 10 }
console.log(list.lastNode); // => Node { 7 }
console.log('---------');

list.pop();
// // list.toArray() // => [10, 3]
// // list.length // => 2
console.log(list.firstNode); // => Node { 10 }
console.log(list.lastNode); // => Node { 3 }
