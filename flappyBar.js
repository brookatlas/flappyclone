class flappyBar
{
    constructor()
    {
        this.WidthUnit = window.innerWidth / 1000;
        this.HeightUnit = window.innerHeight / 1000;
        this.width = 50 * this.WidthUnit;
        this.height = (Math.random() * this.HeightUnit * 750);
        this.posX = window.innerWidth;
        this.posY = window.innerHeight - this.height;
        this.speed = 0
        this.maxSpeed = 5;
    }

    update()
    {
        this.posX = this.posX + this.speed;
        if(-this.speed < this.maxSpeed)
        {
            this.speed -= 0.1;
        }
    }


    draw()
    {
        this.downBar = new rectangle(this.posX, this.posY, this.width, this.height);
        this.upBar = new rectangle(this.posX, 0, this.width, ((window.innerHeight - this.height) - this.HeightUnit * 250));
    }


    getBars()
    {
        return [this.downBar, this.upBar];
    }

    isBarDead()
    {
        if(this.posX < 0 - this.width)
        {
            return true;
        }

        return false;
    }

    isNextBarReady()
    {
        let barOffset = 350;
        if(this.posX < (window.innerWidth - this.width - barOffset))
        {
            return true;
        }

        return false;
    }
}


class flappyBars
{
    constructor(maxBarLimit = 5)
    {
        // initialize bars array objects
        this.bars = [];
        this.maxBarLimit = maxBarLimit;

        // push one new bar
        this.bars.push(new flappyBar());
    }


    getBarList()
    {
        let barArray = [];
        for(var i = 0;i < this.bars.length; i++)
        {
            let currentBars = this.bars[i].getBars();
            barArray.push(currentBars[0]);
            barArray.push(currentBars[1]);
        }

        return barArray;
    }

    draw()
    {
        // draw all bars
        for(var i = 0; i < this.bars.length; i++)
        {
            this.bars[i].draw();
            this.bars[i].update();
        }
    }


    update()
    {
        for(var i = 0; i < this.bars.length; i++)
        {
            if(this.bars[i].isBarDead() == true)
            {
                // check for dead bars
                gameCharacter.barPassed();
                this.bars.shift();
            }
            if(this.bars[this.bars.length - 1].isNextBarReady() == true && this.bars.length < 5)
            {
                // check for new bar generation
                this.bars.push(new flappyBar());
            }
        }
    }
}