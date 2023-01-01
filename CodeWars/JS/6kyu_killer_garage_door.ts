// https://www.codewars.com/kata/58b1ae711fcffa34090000ea/train/typescript

function door(events: string): string {
    return new DoorMechanism(events).execute();
}

export class DoorMechanism {
    private readonly doorChangeUnit: number = 1;
    private readonly doorStartPosition: number = 0;
    private readonly doorFinishPosition: number = 5;

    private events: string;

    private result: string;
    private currentEventPointer: number;
    private currentState: number;
    private isDoorClosing: boolean | null;
    private isPreviousDoorClosing: boolean | null;

    private commands = new Map([
        ['P', this.buttonPressed],
        ['O', this.obstacle]
    ]);

    constructor(events: string) {
        this.currentEventPointer = 0;
        this.events = events;
        this.result = "";

        this.currentState = 0;
        this.isDoorClosing = null;
        this.isPreviousDoorClosing = null;
    }

    public execute(): string {
        while (!this.isEventsFinished()) {
            var operation = this.events[this.currentEventPointer]
            var func = this.commands.get(operation);
            if (func != null) {
                func.call(this)
            }

            this.idle();
            this.currentEventPointer++;
        }

        return this.result;
    }

    private isEventsFinished(): boolean {
        return this.currentEventPointer >= this.events.length;
    }

    private idle() {
        if (this.isDoorClosing === true && this.currentState < this.doorFinishPosition) {
            this.currentState += this.doorChangeUnit;
        } else if (this.isDoorClosing === false && this.currentState > this.doorStartPosition) {
            this.currentState -= this.doorChangeUnit;
        }

        if (this.currentState == this.doorStartPosition) {
            this.isDoorClosing = null;
        }

        if (this.currentState == this.doorFinishPosition) {
            this.isDoorClosing = null;
        }

        this.result += this.currentState.toString();
    }

    private buttonPressed() {
        var previousState = this.isDoorClosing;

        if (this.isDoorClosing === null || this.isDoorMoving()) {
            this.isDoorClosing = this.getPossibleMove();
        } else {
            this.isDoorClosing = null;
        }

        this.isPreviousDoorClosing = previousState;
    }

    private isDoorMoving() {
        return this.currentState == this.doorStartPosition || this.currentState == this.doorFinishPosition;
    }

    private getPossibleMove() {
        if (this.isDoorOpen()) {
            return true;
        } else if (this.isDoorClosed()) {
            return false;
        } else {
            return this.isPreviousDoorClosing;
        }
    }

    private isDoorOpen() {
        return this.currentState == this.doorStartPosition;
    }
    
    private isDoorClosed() {
        return this.currentState == this.doorFinishPosition;
    }

    private obstacle() {
        this.isDoorClosing = !this.isDoorClosing;
    }
}

if (require.main.path.includes('mocha')) {
    const { assert } = require('chai');

    describe('Normal operation', function () {
        it('should start opening on buttonpress', function () {
            assert.equal(door('P'), '1', 'P');
            assert.equal(door('P..'), '123', 'P..');
        });

        it('should open completely and stay open', function () {
            assert.equal(door('P....'), '12345');
        });

        it('should open completely, then stay open, then close', function () {
            assert.equal(door('P......P......'), '12345554321000');
        });
    });

    describe('Pause', function () {
        it('should start opening and pause on second buttonpress', function () {
            assert.equal(door('P.P..'), '12222');
        });
    });

    describe('Obstacle', function () {
        it('should reverse while opening', function () {
            assert.equal(door('P.O....'), '1210000');
        });
    });

    describe('Example', function () {
        it('should start opening and reverse when obstacle', function () {
            assert.equal(door('..P...O.....'), '001234321000');
        });
    });
} else {
    console.log(door('P'), '1', 'P');
    console.log(door('P..'), '123', 'P..');
    console.log(door('P....'), '12345');
    console.log(door('P......P......'), '12345554321000');
    console.log(door('P.P..'), '12222');
    console.log(door('P.O....'), '1210000');
    console.log(door('..P...O.....'), '001234321000');
}
