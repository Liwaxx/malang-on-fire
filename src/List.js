import React from 'react';

export default class List extends React.Component {

    render() {
        const { data } = this.props
        function sortByVote(a, b) {
            return (
                (data[b].upvote - data[b].downvote) -
                (data[a].upvote - data[a].downvote)
            );
        }

        return (
            <div className="my-6 mx-3 font-sans text-2xl text-grey-darker">
                {
                    Object.keys(this.props.data).sort(sortByVote).map((id) =>
                        <div key={id} className="flex bg-blue-lightest shadow border rounded p-6 my-3">

                            <div className="text-4xl pr-6">
                                <div>
                                    <button onClick={() => this.props.handleUpvote(id, this.props.data[id])}>🔼</button>
                                </div>
                                <div>
                                    <button>🔽</button>
                                </div>
                            </div>

                            <div>{this.props.data[id].title}</div>
                            <div className="votes text-grey py-2 px-3">
                                <span className="pr-2"><span aria-label="thumbs-up" role="img">👍</span> {this.props.data[id].upvote}</span>
                                <span className="pr-2"><span aria-label="thumbs-down" role="img">👎</span> {this.props.data[id].downvote}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

