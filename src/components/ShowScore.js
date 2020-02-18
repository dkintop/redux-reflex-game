import React from "react";

export const ShowScore = props => {
  const scores = props.scores;

  const scoreIDString = props.match.params.scoreId;

  const scoreID = Number(scoreIDString);

  const targetScore = scores.find(function(score) {
    return score.id === scoreID;
  });
  console.log(targetScore);

  return (
    <div className="score-display-box">
      <p id="score-display-name">{targetScore.name}</p>

      <p>
        scored {targetScore.score} seconds on{" "}
        {targetScore.created_at.slice(0, 10)} at{" "}
        {targetScore.created_at.slice(11, 16)}
      </p>
    </div>
  );
};
