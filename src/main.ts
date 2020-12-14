enum Limit {
    Hunger = 60, Anger = 100
}

enum HungerCoefficient {
    C = 1, Can = 2
}

enum DomesticCat {
    C = "C", Can = "Can"
}

enum Bait {
    Snack, Tuna
}

export default (name: string, count: number): string => {

    const owner = new CatOwner();
    const cat = new Cat(name);

    for (let i = 0; i < count; i++) {
        cat.play();
        owner.care(cat, count);
    }

    return owner.askTheCat(cat);
}

export class CatOwner {

    public care(cat: Cat, count: number) {
        if (!this.confirmationAppetite(cat)) {
            return;
        }
        const bait = this.think(cat, count);
        this.feed(cat, bait);
    }

    public askTheCat(cat: Cat): string {
        if (cat.rampages()) {
            return 'Rampages'
        }
        if (cat.feedMe()) {
            return 'Hunger'
        }
        return 'Not hungry'
    }

    private think(cat: Cat, count: number): Bait {

        if (cat.name == DomesticCat.C && count != 5) {
            return null;
        } else if (cat.name == DomesticCat.Can && count != 2) {
            return null;
        }

        return Math.random() % 2 == 0 ? Bait.Snack : Bait.Tuna;
    }

    private confirmationAppetite(cat: Cat): boolean {
        return cat.feedMe();
    }

    private feed(cat: Cat, bait: Bait) {
        cat.eatBait(bait);
    }
}

export class Cat {

    private _name: string;
    private hungerPoint = 0;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    public feedMe(): boolean {
        return this.hungerPoint >= Limit.Hunger;
    }

    public eatBait(bait: Bait) {

        if (this.hungerPoint >= Limit.Anger) {
            return;
        }

        switch (bait) {
            case Bait.Snack: {
                this.hungerPoint - 40;
            }
            case Bait.Tuna: {
                this.hungerPoint = 0;
            }
            default:
        }
    }

    public play() {
        const hungerIncreaseRate = 10 * (this.name == DomesticCat.C ? HungerCoefficient.C : HungerCoefficient.Can);
        this.hungerPoint += hungerIncreaseRate;
    }

    public rampages(): boolean {
        return this.hungerPoint >= Limit.Anger;
    }
}
