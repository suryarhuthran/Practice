define(['backbone'], function(Backbone) {

    "use strict";

    return Backbone.View.extend({

        initialize: function(tennisView) {
        	this.playerOneScore = 0;
			this.playerTwoScore = 0;
			this.winner = "";
			this.tennisView = tennisView;
            tennisView.render();
        },

        calculateScore : function(player){
        	switch(player){
				case "player1":
					if(this.playerOneScore === 40){
						this.setWinner("player1");
					}
					this.setPlayerOneScore();
					break;
				case "player2":
					if(this.playerTwoScore === 40){
						this.setWinner("player2");
					}
					this.setPlayerTwoScore();
					break;
				default:
					break;
			};
        },

        setPlayerOneScore : function(){
			if(this.playerOneScore === 0){
				this.playerOneScore = 15;
			}
			else if(this.playerOneScore === 15){
				this.playerOneScore = 30;
			}
			else if(this.playerOneScore === 30){
				this.playerOneScore = 40;
			}			

			this.tennisView.updateScore("#score1", this.playerOneScore);
		},

		setPlayerTwoScore: function(){
			if(this.playerTwoScore === 0){
				this.playerTwoScore = 15;
			}
			else if(this.playerTwoScore === 15){
				this.playerTwoScore = 30;
			}
			else if(this.playerTwoScore === 30){
				this.playerTwoScore = 40;
			}			

			this.tennisView.updateScore("#score2", this.playerTwoScore);
		},

		setWinner: function(player){
			this.winner = player;
			this.tennisView.displayWinner(this.winner);
		}

    });

});