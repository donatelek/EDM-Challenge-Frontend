import React, { Component } from 'react';
import '../Quiz1.css'
import Hints from './Hints';
import Answer from './Answer';
class Quiz extends Component {
    state = {

        lvlPointsCalculator: 6,
        secondHintClicked: false,
        thirdHintClicked: false,
        questionNumber: 1,
        user: null,
        turnAnimation:false
    }
    componentDidMount(){
        this.props.pageChange('/quiz')
    }

    animationOnGoodAnswer=()=>{
        this.setState({
turnAnimation:true
        })
        setTimeout(()=>{
            this.setState({
                turnAnimation:false
            })
        },4100)
    }

    render() {

        const { turnAnimation, restartHintsPoints,questions} = this.state;
        const { userLvl,doubledouble1,doubledouble2,lvl,lvlPointsCalculator,updateLocalStorage,user,secondHintClicked,thirdHintClicked,handleUsedHints,handleAnonymousNextLvl,resetFailedAttempts,updateFailedAttempts,mainmain,handleNextLvl,resetUsedHints,handleUserPoints, } = this.props;
        const { resetHintsPointsOnLvlChange,handleIncrementQuestion,animationOnGoodAnswer, }= this;
        return (
            <div className="quiz">

                <h1 className="questionNumber">QUESTION NUMBER: {turnAnimation?<span className='fadeNumber'>{userLvl.lvlnumber}</span>:<span>{userLvl.lvlnumber}</span>}</h1>
                {turnAnimation?<h2 className="category fadeNumber">{userLvl.category}</h2>:<h2 className="category">{userLvl.category}</h2>}

                <Hints turnAnimation={turnAnimation} doubledouble2={doubledouble2} doubledouble1={doubledouble1} restartHintsPoints={restartHintsPoints} resetHintsPointsOnLvlChange={resetHintsPointsOnLvlChange} questions={questions} lvl={lvl} lvlPointsCalculator={lvlPointsCalculator} updateLocalStorage={updateLocalStorage} user={user} secondHintClicked={secondHintClicked} thirdHintClicked={thirdHintClicked} />

                <Answer turnAnimation={turnAnimation} animationOnGoodAnswer={animationOnGoodAnswer} doubledouble1={doubledouble1} handleUsedHints={handleUsedHints} mainmain={mainmain} resetHintsPointsOnLvlChange={resetHintsPointsOnLvlChange} handleIncrementQuestion={handleIncrementQuestion} handleNextLvl={handleNextLvl} userLvl={userLvl} handleUserPoints={handleUserPoints} user={user} handleAnonymousNextLvl={handleAnonymousNextLvl} updateLocalStorage={updateLocalStorage} resetUsedHints={resetUsedHints} resetFailedAttempts={resetFailedAttempts} updateFailedAttempts={updateFailedAttempts} />

            </div>

        );
    }

}

export default Quiz;