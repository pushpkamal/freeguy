class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
    this.reset = createButton('Reset');
  }

  setElementsPosition() {
    this.titleImg.position(120, 160);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  //BP
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  //BP
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
    player.addPlayer();//aa
      player.updateCount(playerCount); // BP
     player.getDistance(); //aa
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    this.reset.position(1430, 50);
    this.reset.style('width', '100px');
    this.reset.style('height', '30px');
    this.reset.style('background', 'lightpink');
    this.reset.mousePressed(() => {
      /*   player.updateCount(0);
        game.update(0); */
        database.ref("/").set({
            carsAtEnd: 0,
            playerCount: 0,
            gameState: 0,
            palyers: {}
          });
          window.location.reload();
        });
      }
      //BP
  
  /* 
        var playerInfoRef = database.ref('players');
        playerInfoRef.remove();
        
    });
  } */
  }
  
  
