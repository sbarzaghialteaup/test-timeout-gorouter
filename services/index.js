const express = require("express");

const PORT = process.env.PORT || 8089;

async function aspetta(tempo) {

    return new Promise((resolve) => {
        setTimeout(resolve, tempo)
    })

}
async function status(req, res) {

    console.log("arrivata aspetto", new Date(), req.params.tempo);

    await aspetta(req.params.tempo);

    res.type("json").send(
        JSON.stringify({
            name: "Sam",
            surname: "Barz",
        }),
    );
    console.log("risposto        ", new Date());
}

async function main() {

    let app = express();

    app.get("/aspetta/:tempo", status);

    app.listen(PORT, function () {
        console.log("Listening to port ..." + PORT);
    });
}

main();