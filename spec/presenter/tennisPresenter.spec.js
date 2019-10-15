define(["../../src/presenter/tennisPresenter","../../src/view/tennisView"], function(TennisPresenter, TennisView) {

    describe("Tennis Presenter", ()=> {

    	let tennisView = new TennisView("#app");
    	let	tennisPresenter = new TennisPresenter(tennisView);

		it("should calculate score when the game is not in deuce", ()=>{

			spyOn(tennisView, "updateScore");			
			tennisPresenter.playerOneScore = 30;
			tennisPresenter.playerTwoScore = 15;

			tennisPresenter.calculateScore("player1");
			tennisPresenter.calculateScore("player2");

			expect(tennisView.updateScore).toHaveBeenCalled();
			expect(tennisPresenter.playerOneScore).toEqual(40);
			expect(tennisPresenter.playerTwoScore).toEqual(30);

		});

		it("should set winner when the game is not in deuce", ()=>{

			spyOn(tennisView, "displayWinner");
			tennisPresenter.playerOneScore = 30;
			tennisPresenter.playerTwoScore = 40;

			tennisPresenter.calculateScore("player2");

			expect(tennisView.displayWinner).toHaveBeenCalled();
			expect(tennisPresenter.winner).toEqual("player2");

		});

    });

});