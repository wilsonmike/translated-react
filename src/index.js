import React from 'react'; 
import ReactDOM from 'react-dom'; 
import faker from 'faker'; 
import CommentDetail from './CommentDetail'; 
import ApprovalCard from './ApprovalCard'; 
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail author="Sam"  timeAgo="Today at 4:15pm" commentText="Great Article!" image={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Mike" timeAgo="Today at 5:15pm" commentText="Thanks for the information" image={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Joe" timeAgo="Yesterday at 6:15pm" commentText="Interesting" image={faker.image.image()}/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)