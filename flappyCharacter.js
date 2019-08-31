class flappyCharacter
{
    constructor()
    {
        this.posX = 100;
        this.posY = window.innerHeight / 2  ;
        this.radius = 40;
        this.speedX = 0;
        this.speedY = 0;
        this.drawInstance = null;
        this.maxSpeedY = 7;
        this.speedX = 3;
        this.barsPassed = 0;
    }


    jump()
    {
        console.log("char jump");
        if(IsLandscape())
        {
            this.speedY = -6;
        }
        else
        {
            this.speedY = -8;
        }
    }
    draw()
    {
        if(IsLandscape())
        {
            this.radius = 25;
            this.maxSpeedY = 4;
        }
        else
        {
            this.radius = 40;
        }
        this.drawInstance = new circle(this.posX, this.posY, this.radius);
        let bBox = this.getCharacterBoundingBoxRect();
        //this.boundingBox = new rectangle(bBox[0], bBox[1], bBox[2], bBox[3]);
    }

    update()
    {
        this.posY += 1 * this.speedY;
        if(this.speedY < this.maxSpeedY)
        {
            this.speedY += 0.4;
        }

        if(gameCharacter.isCharacterDead() == true)
        {
            reset();
        }
    }

    getCharacterBoundingBoxRect()
    {
        return [this.posX - this.radius, this.posY - this.radius, 2 * this.radius, 2 * this.radius];
    }

    checkBarCollision()
    {
        let boundingBox = this.getCharacterBoundingBoxRect();
        let barArray = bars.getBarList();
        for(var i = 0; i < barArray.length; i++)
        {
            if(AABB(boundingBox, barArray[i].getRect()) == true)
            {
                console.log("collision detected!");
                return true;
            }
        }

        return false;
    }

    barPassed()
    {
        this.barsPassed += 1;
    }

    getHits()
    {
        return this.barsPassed;
    }
    
    isCharacterDead()
    {
        // if the character fell all the way down
        if(this.posY > window.innerHeight - 60)
        {
            return true;
        }
        // if the character collisioned with a bar
        if(this.checkBarCollision() == true)
        {
            return true;
        }

        return false;
    }

}