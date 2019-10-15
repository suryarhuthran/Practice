define(["../../src/view/tennisView"], function(TennisView) {

    describe("Tennis View", ()=> {

    	let tennisView  = new TennisView("#app");

    	beforeEach(()=>{
    		tennisView.$el.html("<!DOCTYPE html><h1>Tennis game</h1><input type='button' id='player1'/><input type='button' id='player2'/><div id='score1'></div><div id='score2'></div><div id='winnerSection'></div><div id='winner'></div>");
    	});

    	it("should Tennis View exist on application load", ()=>{

    		expect(tennisView).toBeDefined();

    	});

    	it("should update scores of both players when clicking Win button", ()=>{

			spyOn(tennisView, "updateScore");
			
			tennisView.$el.find("#player1").trigger("click");
			tennisView.$el.find("#player2").trigger("click");

			expect(tennisView.updateScore).toHaveBeenCalledWith("#score1", 15);
			expect(tennisView.updateScore).toHaveBeenCalledWith("#score2", 15);
			expect(tennisView.$el.find("#score1").text()).toEqual("15");
			expect(tennisView.$el.find("#score2").text()).toEqual("15");

		});

		it("should display winner section when winner is decided", ()=>{
			
			spyOn(tennisView, "displayWinner");

			tennisView.$el.find("#player1").trigger("click");
			tennisView.$el.find("#player1").trigger("click");
			tennisView.$el.find("#player1").trigger("click");
			tennisView.$el.find("#player1").trigger("click");

			expect(tennisView.displayWinner).toHaveBeenCalledWith("player1");			
			expect(tennisView.$el.find("#winnerSection").is(":hidden")).toEqual(false);
			expect(tennisView.$el.find("#winner").text()).toEqual("player1");

		});

    });

});