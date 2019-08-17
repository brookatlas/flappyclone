// initialize graphics global here
let graphics =  null;
// initialize pixie app here
let app = null;
let bars = null;
let gameCharacter = null;
let hits = null;

function mainApp()
{

    // 1. initialize pixie app
    app = initPixieApp();
    // 2. initialize pixie graphics
    graphics = initPixieGraphics();
    // reset everything
    reset();
    // assigning key actions
    assignKeyActions();
    // app game loop here
    mainloop();
    // adding graphics to stage
    addGraphicsToStage();
    // adding resizing feature
    resizeCanvas();
}


function resizeCanvas()
{
    window.addEventListener("resize", function(){
        app.renderer.resize(window.innerWidth * 0.98, window.innerHeight * 0.98);
    });
}


function assignKeyActions()
{
    document.onkeypress = function(e)
    {
            gameCharacter.jump();
    }
}

function reset()
{
    bars = new flappyBars();
    gameCharacter = new flappyCharacter();
}

function mainloop()
{
    app.ticker.add((delta) => {
        if(hits != null)
        {
            hits.clear();
            hits = null;
        }
        // clear screen before drawing anything
        graphics.clear();
        // draw game objects
        gameCharacter.draw();
        bars.draw();
        hits = new text(50,50, gameCharacter.getHits());
        // update game objects
        gameCharacter.update();
        bars.update();

        

    });
}

function initPixieApp()
{
    var app = new PIXI.Application({
        width: innerWidth * 0.98, height: innerHeight * 0.98
    });
    document.body.appendChild(app.view);
    return app;
}


function initPixieGraphics()
{
    var graphics = new PIXI.Graphics();
    return graphics;
}

function addGraphicsToStage()
{
    app.stage.addChild(graphics);
}



