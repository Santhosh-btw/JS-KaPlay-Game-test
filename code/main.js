import kaplay from "kaplay";

const kanvas = kaplay({
    width: 1280,
    height: 720,
});

kanvas.loadBean();
kanvas.setGravity(1000);
const speeds = [300, 500, 800];

const player = kanvas.add([
    kanvas.sprite("bean"),
    kanvas.pos(kanvas.center()),
    kanvas.body(),
    kanvas.area(),
    kanvas.offscreen(),
]);

function Jump() {
    player.gravityScale = 3,
        player.jump(),

        player.gravityScale = 1
}

kanvas.onKeyPress("space", () => {
    if (player.isGrounded()) {
        Jump();
    }
});

function SpawnObstacle() {
    kanvas.add([
        kanvas.rect(50, 50),
        kanvas.pos(1000, 500),
        kanvas.area(),
        kanvas.body(),
        kanvas.outline(3),
        kanvas.move(kanvas.vec2(-1, 0),
            speeds[Math.floor(Math.random() * speeds.length)]),
    ])
};

kanvas.loop(1, () => {
    if (player.onExitScreen) {
        counter++;
        counterUI.text = "Score:" + counter.toString();
    } else if (player.onExitScreen) { counterUI.text = "Game Over!"; }

    SpawnObstacle();
});

kanvas.add([
    kanvas.rect(kanvas.width(), 300),
    kanvas.pos(0, 500),
    kanvas.area(),
    kanvas.body({ isStatic: true }),
    kanvas.outline(4),
]);

let counter = 0;
let counterUI = kanvas.add([kanvas.text()]);