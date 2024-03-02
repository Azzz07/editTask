const cds = require('@sap/cds');
const { parseArgs } = require('util');
module.exports = cds.service.impl(async function () {
    let {
        stud,  
        math     
    } = this.entities;
    // const c5re = await cds.connect.to('iflow1');
    this.on('READ', stud.drafts, async (req,next) => {
        if(req.data.name){
        var data1 = await SELECT.from(stud.drafts);
            const sum = req.data.name + req.data.email;
        console.log(req);
        await cds.update(stud.drafts)
        .set({course:sum }) // Update with new data
        .where({ id: req.data.id});
    }
        return next();
});

this.on('READ', math.drafts, async (req,next) => {
    // debugger
    if(req.data.firstnum){
    // var data1 = await SELECT.from(stud.drafts);
        const sum = req.data.firstnum + req.data.secondnum;
    console.log(req);
    await cds.update(math.drafts)
    .set({result:sum }) // Update with new data
    .where({ id: req.data.id});
}
    return next();
});

        //debugger

      
});


