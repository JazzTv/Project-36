class Contestant 
{
    constructor ()
    {
        this.name = null;
        this.ans = null;
        this.index = null;
    } 

    getCount ()
    {
        var contestantCountRef = database.ref ('contestantCount');
        contestantCountRef.on ("value", function (data)
        {
            contestantCount = data.val ();
        }); 
    } 

    updateCount (count)
    {
        database.ref('/').update({contestantCount : count})
    } 

    update ()
    {
        var contestantIndex = "contestant/Contestant" + this.index;  
        database.ref(contestantIndex).set({'Name' : this.name, 'Answer' : this.ans}) 
    } 

    static getContestantInfo ()
    {
        var ContestantRef = database.ref("contestant");
        ContestantRef.on ("value", (DATA) => {
        allContestant = DATA.val ();
        })  
    }
}