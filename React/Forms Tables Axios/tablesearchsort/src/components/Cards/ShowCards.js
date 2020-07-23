import React from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const ShowCards = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Sam" 
                timeAgo="Today at 3:00PM" 
                comment="Nice!" 
                avatar={faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Alex" 
                timeAgo="Today at 2:00PM" 
                comment="Nice blog!" 
                avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Jane" 
                timeAgo="Today at 1:00PM" 
                comment="Nice Image" 
                avatar={faker.image.avatar()} />
            </ApprovalCard>
            
        </div>
    );
}

export default ShowCards;