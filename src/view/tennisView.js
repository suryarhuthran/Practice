define([
    'backbone',
    'jquery',
    '../presenter/tennisPresenter',
    'text!../template/tennisTemplate.html'
    ], function(Backbone, $, TennisPresenter, template) {

        "use strict";

        return Backbone.View.extend({

            el: "#app",

            initialize: function(selector) {
                this.$el = $(selector);
                this.tennisPresenter = new TennisPresenter(this);
            },

            render: function(){
                this.$el.html(template);
            },

            events:{
                "click #player1" : "playerOneScoreCalculation",
                "click #player2" : "playerTwoScoreCalculation"
            },

            playerOneScoreCalculation: function(){
                this.tennisPresenter.calculateScore("player1");
            },

            playerTwoScoreCalculation: function(){
                this.tennisPresenter.calculateScore("player2");
            },

            updateScore: function(element,playerScore){
                this.displayText(element,playerScore);
            },

            displayWinner: function(winner){
                this.display("#winnerSection");
                this.displayText("#winner", winner);
            },

            display: function(element){
                this.$el.find(element).show();
            },

            displayText: function(element, value){
                this.$el.find(element).html(value);
            }

        });

});