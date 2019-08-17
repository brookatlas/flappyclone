class text
{
    constructor(x1, y1 ,textString)
    {
        this.style = new PIXI.TextStyle({
            fontFamily: "Arial",
            fontSize: 60,
            fontWeight: 'bold',
            stroke: '#ffffff',
            strokeThickness: 4,
            wordWrap: true            
        });
        this.text = new PIXI.Text(textString, this.style);
        this.text.x = x1;
        this.text.y = y1;
        app.stage.addChild(this.text);
    }


    clear()
    {
        this.text.destroy();
    }


}