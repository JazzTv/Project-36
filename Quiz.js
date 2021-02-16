class Quiz 
{
   constructor ()
   {

   } 

   getState ()
   {
       var gameRef = database.ref ('gameState');
       gameRef.on("value", function(data)
       {
           gameState = data.val();
       })
   } 

   update(state)
   {
      database.ref('/').update({gameState : state}) 
   }
    
   start ()
   {
       if (gameState === 0)
       {
           contestant = new Contestant();
           contestant.getCount ();

           question = new Question();
           question.display ();
       }
   }  

   end ()
   {
       console.log("Hi!")

   }
}