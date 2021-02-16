class Question 
{
    constructor ()
    {
        this.title = createElement('h2');

        this.input1 = createInput ('Name');
        this.input2 = createInput ('Answer');

        this.question = createElement('h3');

        this.option1 = createElement('h5');
        this.option2 = createElement('h5');

        this.button = createButton ('Submit');
        this.greeting = createElement ('h3');
    } 

    hideForm ()
    {
        this.input1.hide ();
        this.input2.hide ();
        this.question.hide ();
        this.option1.hide ();
        this.option2.hide ();
        this.button.hide ();
        this.greeting.hide ();
    }

    display ()
    {
        this.title.html("Quiz Game");
        this.title.position (350,0);

        this.question.html("Question- What starts and ends with the letter 'E',but has only one letter?");
        this.question.position(150,80);

        this.option1.html("1: Everyone ");
        this.option1.position(150,100);

        this.option2.html("2: Envelope ");
        this.option2.position(150,120);
        
        this.input1.position (150,230);
        this.input2.position (450,230);

        this.button.position (375,300);
        this.button.mousePressed (() => {
                                           this.input1.hide ();
                                           this.input2.hide ();
                                           this.button.hide ();
                                           var name = this.input1.value ();
                                           var ans = this.input2.value ();
                                           contestantCount+= 1;

                                           contestant.index = contestantCount;
                                           contestant.name = name;
                                           contestant.ans = ans;
                                           contestant.update ();
                                           contestant.updateCount (contestantCount);

                                           this.greeting.html ("Thank you, Wait till everyone has answered");
                                           this.greeting.position (130,160);
                                        });
    }

    async start ()
    {
        if (gameState === 0)
        {
            contestant = new Contestant ();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if (contestantCountRef.exists())
            {
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question ();
            question.display ();
        }
    } 

    play ()
    {
      quiz.hide ();
      textSize (30);
      text ("Thank you for your answer!",100,120);
      contestant.getcontestantInfo ();
      var textYPosition = 160
      if (allContestant!==undefined)
      {
          for (var con in allContestant)
          {
             if(con === "Contestant" + contestant.index)
              fill("red")
              else
              fill("black")

              textSize(15);
              text (allContestant[con].Name + " : " , 130, textYPosition);
              textYPosition += 20;
          }
      } 
      if (contestant.index!==null)
      { 
        contestant.update ();
      }
    }
}