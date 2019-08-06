import React from 'react';
import './App.css';
import JapanMap from './JapanMap'

function Card(props) {

    const [liked, setLike] = React.useState(false);
    const toggleLike = React.useCallback(() => setLike((prev) => !prev), [setLike]);

    return (
        <div>
            <div className="tweet" id="card">
                <div className="body-container">
                    <div className="status-display">
                        <span className="display-name">{props.displayName}</span>
                    </div>
                    <div className="content">{props.content}</div>
                    <div className="status-action">
                        <span onClick={toggleLike}>{liked ? '🤟' : '♡'}</span>
                    </div>

                    <div id="JapanMap">
                        <JapanMap clicked={props.clicked}/> 
                    </div>
                    

                    <div id="ReactionButtons"> {/* これアタシだボタン */}
                        <label>
                            <input type="radio" name="radio-1" required="" />
                            <span class="button">自分のこと？</span>
                        </label>
                        <label>
                            <input type="radio" name="radio-1" />
                            <span class="button">知り合いにいるかも？</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Card;
