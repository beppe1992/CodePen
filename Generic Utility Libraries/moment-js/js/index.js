function oggi () {
    var now = moment();
     console.log("OGGI: " +now);
}

function dataSpecifica () {
    // possono essere passati più formati
    var data = moment("12-25-1995", ["MM-DD-YYYY", "YYYY-MM-DD"]);
    console.log("DATA: " +data);
}

function controlliValidita () {
    console.log("DATA VALIDA: " +moment("2010 13","YYYY MM").isValid());
    console.log("DATA VALIDA: " +moment("2010 11 31","YYYY MM DD").isValid());  
    console.log("DATA VALIDA: " +moment("2010 2 29","YYYY MM DD").isValid());  
    console.log("DATA VALIDA: " +moment("2010 notamonth 29","YYYY MMM DD").isValid()); 
}

function confrontaDate () {
    console.log("BEFORE: " +moment('2010-10-20').isBefore('2010-10-21'));
    console.log("BEFORE YEAR: " +moment('2010-10-20').isBefore('2010-12-31', 'year'));
    console.log("SAME YEAR: " +moment('2010-10-20').isSame('2009-12-31', 'year'));
    console.log("AFTER: " +moment('2010-10-20').isAfter('2010-10-19'));
    console.log("SAME OR BEFORE: " +moment('2010-10-20').isSameOrBefore('2010-10-21'));
    console.log("SAME OR AFTER: " +moment('2010-10-20').isSameOrAfter('2010-10-19'));
    console.log("BETWEEN: " +moment('2010-10-20').isBetween('2010-10-19', '2010-10-25'));
}