class rectangle
{
    constructor(x1, y1, width, height)
    {
        this.x1 = x1;
        this.y1 = y1;
        this.width = width;
        this.height = height;
        graphics.beginFill(0XFF3300);
        graphics.drawRect(this.x1, this.y1, this.width, this.height);
        graphics.endFill();
    }


    getRect()
    {
        return [this.x1, this.y1, this.width, this.height];
    }
}


class circle
{
    constructor(x1, y1, radius)
    {
        this.x1 = x1;
        this.y1 = y1;
        this.radius = radius;

        graphics.beginFill(0x223594);
        graphics.drawCircle(this.x1, this.y1, this.radius);
        graphics.endFill();
    }
}

