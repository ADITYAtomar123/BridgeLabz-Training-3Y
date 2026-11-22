function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Test completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deploy completed");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(() => {
        console.log("Celebrate!");
    }, 1000);
}

console.log("Callback pipeline started");

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate();
            });
        });
    });
});

function runStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName + " completed");
            resolve();
        }, 1000);
    });
}

async function runPipeline() {
    console.log("Async pipeline started");

    await runStage("Design");
    await runStage("Build");
    await runStage("Test");
    await runStage("Deploy");
    await runStage("Celebrate");

    console.log("Pipeline completed");
}

setTimeout(runPipeline, 5000);
